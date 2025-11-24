import { useEffect, useState } from 'react'

export default function SwitchButton() {
  const [enabled, setEnabled] = useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newValue = !enabled
    setEnabled(newValue)
    const isDark = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (isDark) {
      document.documentElement.style.colorScheme = ''
      localStorage.setItem('darkMode', 'false')
    } else {
      document.documentElement.style.colorScheme = 'dark'
      localStorage.setItem('darkMode', 'true')
    }
  }

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches

    setEnabled(isDark)

    if (isDark) {
      document.documentElement.style.colorScheme = 'dark'
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.style.colorScheme = ''
      localStorage.setItem('darkMode', 'false')
    }
  }, [])

  return (
    <button
      // onClick={() => setEnabled(!enabled)}
      onClick={() => toggleDarkMode()}
      className={`group z-30 relative flex h-6 w-11 cursor-pointer rounded-full p-1 ease-in-out transition-colors duration-200 
        ${enabled ? "bg-slate-700 outline outline-white/20" : "bg-slate-200 outline outline-black/10"}`}
      aria-label="Toggle dark mode"
    >
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block size-4 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out z-30`}
      />
    </button>
  )
}
