import React, { createContext, useState, useContext } from "react";
import { Toaster as Sonner } from "sonner";

// Fake ThemeProvider to avoid missing export
const ThemeContext = createContext({ theme: "dark", setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function Toaster() {
  return (
    <Sonner
      position="top-right"
      richColors
      theme="dark"
      toastOptions={{
        style: {
          background: "#1e293b",
          color: "white",
          border: "1px solid #334155",
        },
      }}
    />
  );
}
