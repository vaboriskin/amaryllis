import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

const AdminLogin: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        setError('Неверный email или пароль')
        return
      }

      const payload = await response.json() as { token: string }
      localStorage.setItem('admin_token', payload.token)
      navigate('/admin/prices')
    } catch (_error) {
      setError('Ошибка соединения с сервером')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-card" style={{ maxWidth: '460px', margin: '0 auto' }}>
          <h1 className="admin-title">Вход в админ-панель</h1>
          <p className="admin-subtitle">Управление ценами на услуги</p>
          <form className="admin-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="admin-label">Email</label>
              <input
                id="email"
                type="email"
                className="admin-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="admin-label">Пароль</label>
              <input
                id="password"
                type="password"
                className="admin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="admin-button" type="submit" disabled={isLoading}>
              {isLoading ? 'Входим...' : 'Войти'}
            </button>
          </form>
          {error && <p className="admin-error">{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
