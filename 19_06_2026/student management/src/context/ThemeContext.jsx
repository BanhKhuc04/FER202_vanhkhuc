import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('student-theme') || 'light'
  })

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('student-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    )
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}
