import React from 'react'
import { useAccessibility } from '../../hooks/useAccessibility'
import './AccessibilityPanel.css'

const AccessibilityPanel: React.FC = () => {
  const { settings, updateSettings, toggleAccessibility, resetSettings } = useAccessibility()

  return (
    <div className={`accessibility-panel ${settings.isEnabled ? 'open' : ''}`}>
      <div className="accessibility-header">
        <h3 className="accessibility-title">Версия для слабовидящих</h3>
        <button
          className="accessibility-close"
          onClick={toggleAccessibility}
          aria-label="Закрыть панель"
        >
          ×
        </button>
      </div>

      <div className="accessibility-content">
        <div className="accessibility-section">
          <h4 className="accessibility-section-title">Шрифт</h4>
          <div className="accessibility-controls">
            <button
              className={`accessibility-btn ${settings.fontSize === 'normal' ? 'active' : ''}`}
              onClick={() => updateSettings({ fontSize: 'normal' })}
            >
              А
            </button>
            <button
              className={`accessibility-btn ${settings.fontSize === 'medium' ? 'active' : ''}`}
              onClick={() => updateSettings({ fontSize: 'medium' })}
            >
              А
            </button>
            <button
              className={`accessibility-btn ${settings.fontSize === 'large' ? 'active' : ''}`}
              onClick={() => updateSettings({ fontSize: 'large' })}
            >
              А
            </button>
          </div>
        </div>

        <div className="accessibility-section">
          <h4 className="accessibility-section-title">Цвет</h4>
          <div className="accessibility-controls">
            <button
              className={`accessibility-btn color-btn ${settings.colorScheme === 'normal' ? 'active' : ''}`}
              onClick={() => updateSettings({ colorScheme: 'normal' })}
              title="Обычная версия"
            >
              <span className="color-preview normal"></span>
            </button>
            <button
              className={`accessibility-btn color-btn ${settings.colorScheme === 'black-white' ? 'active' : ''}`}
              onClick={() => updateSettings({ colorScheme: 'black-white' })}
              title="Черный фон, белый текст"
            >
              <span className="color-preview black-white"></span>
            </button>
            <button
              className={`accessibility-btn color-btn ${settings.colorScheme === 'black-yellow' ? 'active' : ''}`}
              onClick={() => updateSettings({ colorScheme: 'black-yellow' })}
              title="Черный фон, желтый текст"
            >
              <span className="color-preview black-yellow"></span>
            </button>
            <button
              className={`accessibility-btn color-btn ${settings.colorScheme === 'yellow-black' ? 'active' : ''}`}
              onClick={() => updateSettings({ colorScheme: 'yellow-black' })}
              title="Желтый фон, черный текст"
            >
              <span className="color-preview yellow-black"></span>
            </button>
          </div>
        </div>

        <div className="accessibility-section">
          <h4 className="accessibility-section-title">Графика</h4>
          <div className="accessibility-controls">
            <button
              className={`accessibility-btn ${settings.graphics === 'enabled' ? 'active' : ''}`}
              onClick={() => updateSettings({ graphics: 'enabled' })}
            >
              Включить
            </button>
            <button
              className={`accessibility-btn ${settings.graphics === 'monochrome' ? 'active' : ''}`}
              onClick={() => updateSettings({ graphics: 'monochrome' })}
            >
              Монохром
            </button>
            <button
              className={`accessibility-btn ${settings.graphics === 'disabled' ? 'active' : ''}`}
              onClick={() => updateSettings({ graphics: 'disabled' })}
            >
              Отключить
            </button>
          </div>
        </div>

        <div className="accessibility-section">
          <h4 className="accessibility-section-title">Кернинг</h4>
          <div className="accessibility-controls">
            <button
              className={`accessibility-btn ${settings.letterSpacing === 'normal' ? 'active' : ''}`}
              onClick={() => updateSettings({ letterSpacing: 'normal' })}
            >
              Стандартный
            </button>
            <button
              className={`accessibility-btn ${settings.letterSpacing === 'medium' ? 'active' : ''}`}
              onClick={() => updateSettings({ letterSpacing: 'medium' })}
            >
              Средний
            </button>
            <button
              className={`accessibility-btn ${settings.letterSpacing === 'large' ? 'active' : ''}`}
              onClick={() => updateSettings({ letterSpacing: 'large' })}
            >
              Большой
            </button>
          </div>
        </div>

        <div className="accessibility-section">
          <h4 className="accessibility-section-title">Интервал</h4>
          <div className="accessibility-controls">
            <button
              className={`accessibility-btn ${settings.lineHeight === 'normal' ? 'active' : ''}`}
              onClick={() => updateSettings({ lineHeight: 'normal' })}
            >
              Одинарный
            </button>
            <button
              className={`accessibility-btn ${settings.lineHeight === 'medium' ? 'active' : ''}`}
              onClick={() => updateSettings({ lineHeight: 'medium' })}
            >
              Полуторный
            </button>
            <button
              className={`accessibility-btn ${settings.lineHeight === 'large' ? 'active' : ''}`}
              onClick={() => updateSettings({ lineHeight: 'large' })}
            >
              Двойной
            </button>
          </div>
        </div>

        <div className="accessibility-section">
          <h4 className="accessibility-section-title">Гарнитура</h4>
          <div className="accessibility-controls">
            <button
              className={`accessibility-btn ${settings.fontFamily === 'sans-serif' ? 'active' : ''}`}
              onClick={() => updateSettings({ fontFamily: 'sans-serif' })}
            >
              Без засечек
            </button>
            <button
              className={`accessibility-btn ${settings.fontFamily === 'serif' ? 'active' : ''}`}
              onClick={() => updateSettings({ fontFamily: 'serif' })}
            >
              С засечками
            </button>
          </div>
        </div>

        <div className="accessibility-actions">
          <button
            className="accessibility-reset-btn"
            onClick={resetSettings}
          >
            Вернуть стандартные настройки
          </button>
          <button
            className="accessibility-close-btn"
            onClick={toggleAccessibility}
          >
            Обычная версия сайта
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityPanel

