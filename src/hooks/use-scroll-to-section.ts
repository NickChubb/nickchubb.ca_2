import { useEffect, useState } from "react";

export default function useScrollToSection(sectionName: string) {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setAnchorTarget(document.getElementById(sectionName))
  }, [sectionName])

  const scrollToSection = () => {
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return scrollToSection
}