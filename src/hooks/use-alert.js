import { useState } from 'react'
import { createPortal } from 'react-dom'

const Alert = () => {
  return <div>Alert</div>
}

const useAlert = (message) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    createPortal(Alert, document.getElementById('alert-container'))
  }, [])
  

  const alert = () => {
    setShow(true)
    useTimeout(() => {
      setShow(false)
    }, 5000)
  }


  return 
}

export default useAlert
