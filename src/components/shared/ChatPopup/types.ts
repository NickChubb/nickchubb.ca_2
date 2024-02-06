export type ChatItem = {
  message: string | Array<string>
  user: boolean
}

export type CommandType = {
  id: number
  name: string
  command: Array<string>
  description: string
}