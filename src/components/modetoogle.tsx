"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center relative">
      <Moon onClick={() => setTheme("dark")} className="h-[1.2rem] text-black cursor-pointer w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun onClick={() => setTheme("light")} className="absolute h-[1.2rem] text-muted-foreground cursor-pointer w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  )
}
