const hashObject = async (obj) => {
  // convert object to JSON string
  const objString = JSON.stringify(obj)

  // we want to make sure the salt changes every week
  const currentDate = new Date()
  const startDate = new Date(currentDate.getFullYear(), 0, 1)
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000))
  const weekNumber = Math.ceil(days / 7)

  const saltedString =
    objString + weekNumber.toString() + process.env.SECRET_KEY

  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(saltedString)

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer))

  // convert bytes to hex string
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

const validHash = async () => await hashObject({
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
})

export const validateCredentials = async (username, password) => {
  const reqHash = await hashObject({
    username: username,
    password: password,
  })
  return reqHash === await validHash() ? reqHash : null
}

export const validateToken = async (token) => {
  return token === await validHash()
}