import { useEffect } from "react";

export default function useOnScroll(callback: () => void) {
  useEffect(() => {
    window.removeEventListener("scroll", callback)
    window.addEventListener("scroll", callback)
    return () => window.removeEventListener("scroll", callback)
  })
}