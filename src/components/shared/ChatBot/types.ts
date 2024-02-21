export type ChatItem = {
  message: string | Array<string>
  user: boolean
  error?: boolean
}

export type CommandType = {
  id: number
  name: string
  command: Array<string>
  description: string
}