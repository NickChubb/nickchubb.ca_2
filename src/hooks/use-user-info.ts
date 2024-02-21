import { useEffect, useState } from "react";

type userData = {
  ipv4: string
  country: string
  state: string
  city: string
}

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const getUserInfo = async () => {
      const geolocationResponse = await fetch('https://geolocation-db.com/json/')
      const clientInfo = await geolocationResponse.json()
      console.log(clientInfo)
      setUserInfo(clientInfo)
    }
    getUserInfo()
  }, [])

  return userInfo
}