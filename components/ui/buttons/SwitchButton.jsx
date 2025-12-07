import { useEffect, useState } from 'react'

export default function SwitchButton() {
  const [enabled, setEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    setMounted(true)
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)

    setEnabled(isDark)

    if (isDark) {
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.style.colorScheme = ''
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newValue = !enabled
    setEnabled(newValue)
    
    if (newValue) {
      document.documentElement.style.colorScheme = 'dark'
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.style.colorScheme = ''
      localStorage.setItem('darkMode', 'false')
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="group z-30 relative flex h-6 w-11 cursor-pointer rounded-full p-1 ease-in-out transition-colors duration-200 bg-slate-200 outline outline-black/10"
        aria-label="Toggle dark mode"
        disabled
      >
        <span
          aria-hidden="true"
          className="translate-x-0 pointer-events-none inline-block size-4 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out z-30"
        />
      </button>
    )
  }

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
