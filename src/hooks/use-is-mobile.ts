import { breakpoints } from "../components/shared/styles"
import useMediaQuery from "./use-media-query"

const useIsMobile = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  return isMobile
}

export default useIsMobile
