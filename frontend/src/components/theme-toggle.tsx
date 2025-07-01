'use client'

import { useTheme } from '@/context/theme-context'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-gray-950" />
      ) : (
        <SunIcon className="w-5 h-5 text-gray-100" />
      )}
    </button>
  )
}