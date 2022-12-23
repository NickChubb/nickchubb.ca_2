export const scrollToSection = (id) => {
  const scrollTarget = document.getElementById(id)
  scrollTarget &&
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
