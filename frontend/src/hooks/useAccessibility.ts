import { useState, useEffect } from 'react'

export interface AccessibilitySettings {
  fontSize: 'normal' | 'medium' | 'large'
  colorScheme: 'normal' | 'black-white' | 'black-yellow' | 'yellow-black'
  graphics: 'enabled' | 'disabled' | 'monochrome'
  letterSpacing: 'normal' | 'medium' | 'large'
  lineHeight: 'normal' | 'medium' | 'large'
  fontFamily: 'sans-serif' | 'serif'
  isEnabled: boolean
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  colorScheme: 'normal',
  graphics: 'enabled',
  letterSpacing: 'normal',
  lineHeight: 'normal',
  fontFamily: 'sans-serif',
  isEnabled: false,
}

const STORAGE_KEY = 'accessibility-settings'

const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement

    // Font size
    const fontSizeMap = {
      normal: '1rem',
      medium: '1.25rem',
      large: '1.5rem',
    }
    root.style.setProperty('--accessibility-font-size', fontSizeMap[newSettings.fontSize])

    // Color scheme
    if (newSettings.colorScheme === 'normal') {
      root.style.removeProperty('--accessibility-bg-color')
      root.style.removeProperty('--accessibility-text-color')
      root.style.removeProperty('--accessibility-link-color')
    } else if (newSettings.colorScheme === 'black-white') {
      root.style.setProperty('--accessibility-bg-color', '#000000')
      root.style.setProperty('--accessibility-text-color', '#ffffff')
      root.style.setProperty('--accessibility-link-color', '#ffff00')
    } else if (newSettings.colorScheme === 'black-yellow') {
      root.style.setProperty('--accessibility-bg-color', '#000000')
      root.style.setProperty('--accessibility-text-color', '#ffff00')
      root.style.setProperty('--accessibility-link-color', '#ffffff')
    } else if (newSettings.colorScheme === 'yellow-black') {
      root.style.setProperty('--accessibility-bg-color', '#ffff00')
      root.style.setProperty('--accessibility-text-color', '#000000')
      root.style.setProperty('--accessibility-link-color', '#0000ff')
    }

    // Graphics
    if (newSettings.graphics === 'disabled') {
      root.style.setProperty('--accessibility-image-opacity', '0')
    } else if (newSettings.graphics === 'monochrome') {
      root.style.setProperty('--accessibility-image-filter', 'grayscale(100%)')
    } else {
      root.style.removeProperty('--accessibility-image-opacity')
      root.style.removeProperty('--accessibility-image-filter')
    }

    // Letter spacing
    const letterSpacingMap = {
      normal: 'normal',
      medium: '0.1em',
      large: '0.2em',
    }
    root.style.setProperty('--accessibility-letter-spacing', letterSpacingMap[newSettings.letterSpacing])

    // Line height
    const lineHeightMap = {
      normal: '1.5',
      medium: '2',
      large: '2.5',
    }
    root.style.setProperty('--accessibility-line-height', lineHeightMap[newSettings.lineHeight])

    // Font family
    const fontFamilyMap = {
      'sans-serif': '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      'serif': 'Georgia, "Times New Roman", Times, serif',
    }
    root.style.setProperty('--accessibility-font-family', fontFamilyMap[newSettings.fontFamily])

    // Apply to body
    if (newSettings.isEnabled) {
      document.body.classList.add('accessibility-enabled')
    } else {
      document.body.classList.remove('accessibility-enabled')
    }
  }

export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : defaultSettings
  })

  useEffect(() => {
    // Apply settings on mount and when they change
    applySettings(settings)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  const updateSettings = (updates: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }))
  }

  const toggleAccessibility = () => {
    setSettings((prev) => ({ ...prev, isEnabled: !prev.isEnabled }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  return {
    settings,
    updateSettings,
    toggleAccessibility,
    resetSettings,
  }
}

