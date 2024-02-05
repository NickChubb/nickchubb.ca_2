import { useEffect } from 'react'

const getFaviconElement = () => {
  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  return link
}

const setBlur = () => getFaviconElement().href = '/sleepy.ico'
const setFocus = () => getFaviconElement().href = '/favicon.ico'

const useOnFocusChangeFavicon = () => {
  useEffect(() => {
    window.addEventListener("focus", setFocus)
    window.addEventListener("blur", setBlur)
    setFocus()
    return () => {
        window.removeEventListener("focus", setFocus)
        window.removeEventListener("blur", setBlur)
    };
  }, []);
}

export default useOnFocusChangeFavicon