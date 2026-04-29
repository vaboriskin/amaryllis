import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { servicesData } from '../../data/services'
import './Admin.css'

type ServiceItem = {
  id: string
  categoryId: string
  name: string
  price: number
  currency: string
  isActive: boolean
  sortOrder: number
  updatedAt: string
}

const AdminPrices: React.FC = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('admin_token')

  const [items, setItems] = useState<ServiceItem[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(servicesData[0]?.id ?? '')
  const [editingItemId, setEditingItemId] = useState<string | null>(null)
  const [itemName, setItemName] = useState('')
  const [priceValue, setPriceValue] = useState('0')
  const [isActive, setIsActive] = useState(true)
  const [sortOrder, setSortOrder] = useState('0')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const loadItems = async () => {
    const response = await fetch('/api/admin/service-items', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (response.status === 401) {
      localStorage.removeItem('admin_token')
      navigate('/admin/login')
      return false
    }
    if (!response.ok) {
      setError('Не удалось загрузить услуги')
      return false
    }
    const data = await response.json() as ServiceItem[]
    setItems(data)
    return true
  }

  useEffect(() => {
    if (!token) {
      navigate('/admin/login')
      return
    }

    const load = async () => {
      setIsLoading(true)
      setError('')
      try {
        await loadItems()
      } catch (_err) {
        setError('Ошибка соединения с сервером')
      } finally {
        setIsLoading(false)
      }
    }

    void load()
  }, [navigate, token])

  const categoryNameMap = useMemo(() => {
    return new Map(servicesData.map((service) => [service.id, service.name]))
  }, [])

  const saveItem = async () => {
    setError('')
    setMessage('')
    const parsedPrice = Number(priceValue)
    const parsedSortOrder = Number(sortOrder)
    if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
      setError('Цена должна быть неотрицательным числом')
      return
    }
    if (!itemName.trim()) {
      setError('Укажите название услуги')
      return
    }
    if (!Number.isInteger(parsedSortOrder) || parsedSortOrder < 0) {
      setError('Порядок должен быть целым неотрицательным числом')
      return
    }

    const method = editingItemId ? 'PUT' : 'POST'
    const url = editingItemId
      ? `/api/admin/service-items/${editingItemId}`
      : '/api/admin/service-items'

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          categoryId: selectedCategoryId,
          name: itemName.trim(),
          price: parsedPrice,
          isActive,
          sortOrder: parsedSortOrder,
        }),
      })
      if (!response.ok) {
        setError('Не удалось сохранить услугу')
        return
      }

      const loaded = await loadItems()
      if (!loaded) {
        return
      }
      setMessage('Изменения сохранены')
      setEditingItemId(null)
      setItemName('')
      setPriceValue('0')
      setIsActive(true)
      setSortOrder('0')
    } catch (_err) {
      setError('Ошибка соединения с сервером')
    }
  }

  const editItem = (item: ServiceItem) => {
    setEditingItemId(item.id)
    setSelectedCategoryId(item.categoryId)
    setItemName(item.name)
    setPriceValue(String(item.price))
    setIsActive(item.isActive)
    setSortOrder(String(item.sortOrder))
    setMessage('')
    setError('')
  }

  const deactivateItem = async (itemId: string) => {
    setError('')
    setMessage('')
    try {
      const response = await fetch(`/api/admin/service-items/${itemId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!response.ok) {
        setError('Не удалось деактивировать услугу')
        return
      }
      await loadItems()
      setMessage('Услуга деактивирована')
    } catch (_err) {
      setError('Ошибка соединения с сервером')
    }
  }

  const logout = () => {
    localStorage.removeItem('admin_token')
    navigate('/admin/login')
  }

  const visibleItems = items.filter((item) => item.categoryId === selectedCategoryId)

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-card">
          <h1 className="admin-title">Админ-панель цен</h1>
          <p className="admin-subtitle">Категории и услуги (только название и цена)</p>

          <div className="admin-form">
            <div>
              <label htmlFor="categoryId" className="admin-label">Категория</label>
              <select
                id="categoryId"
                className="admin-select"
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
              >
                {servicesData.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="itemName" className="admin-label">Название услуги</label>
              <input
                id="itemName"
                className="admin-input"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Например: Первичный прием"
              />
            </div>

            <div className="admin-row">
              <div>
                <label htmlFor="price" className="admin-label">Цена</label>
                <input
                  id="price"
                  type="number"
                  min="0"
                  step="1"
                  className="admin-input"
                  value={priceValue}
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="sortOrder" className="admin-label">Порядок</label>
                <input
                  id="sortOrder"
                  type="number"
                  min="0"
                  className="admin-input"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="admin-label">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                Показывать цену на сайте
              </label>
            </div>

            <div className="admin-actions">
              <button className="admin-button" onClick={saveItem} type="button">
                {editingItemId ? 'Сохранить изменения' : 'Добавить услугу'}
              </button>
              {editingItemId && (
                <button
                  className="admin-button secondary"
                  onClick={() => {
                    setEditingItemId(null)
                    setItemName('')
                    setPriceValue('0')
                    setIsActive(true)
                    setSortOrder('0')
                  }}
                  type="button"
                >
                  Отмена редактирования
                </button>
              )}
              <button className="admin-button secondary" onClick={logout} type="button">
                Выйти
              </button>
            </div>
          </div>

          {isLoading && <p className="admin-subtitle">Загрузка...</p>}
          {message && <p className="admin-success">{message}</p>}
          {error && <p className="admin-error">{error}</p>}

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Категория</th>
                  <th>Услуга</th>
                  <th>Цена</th>
                  <th>Порядок</th>
                  <th>Активна</th>
                  <th>Обновлено</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {visibleItems.map((row) => (
                  <tr key={row.id}>
                    <td>{categoryNameMap.get(row.categoryId) ?? row.categoryId}</td>
                    <td>{row.name}</td>
                    <td>
                      {new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: row.currency || 'RUB',
                        maximumFractionDigits: 0,
                      }).format(row.price)}
                    </td>
                    <td>{row.sortOrder}</td>
                    <td>{row.isActive ? 'Да' : 'Нет'}</td>
                    <td>{new Date(row.updatedAt).toLocaleString('ru-RU')}</td>
                    <td>
                      <button className="admin-button secondary" onClick={() => editItem(row)} type="button">
                        Изменить
                      </button>{' '}
                      <button className="admin-button danger" onClick={() => deactivateItem(row.id)} type="button">
                        Скрыть
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPrices
