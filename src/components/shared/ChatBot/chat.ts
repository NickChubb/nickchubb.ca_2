import { v4 as uuidv4 } from 'uuid'
import { ChatItem, CommandType } from './types'

export const commands: Array<CommandType> = [
  {
    id: 0,
    name: 'exit',
    command: ['exit', 'quit', ':wq', '', 'close'],
    description: 'Close the chat window.',
  },
  {
    id: 1,
    name: 'clear',
    command: ['clear', 'cls', 'refresh', 'reset'],
    description: 'Reset chat window.',
  },
  {
    id: 2,
    name: 'help',
    command: ['help'],
    description: 'Generate a list of available functions.',
  },
  {
    id: 3,
    name: 'suggestions',
    command: ['suggestions', 'suggest'],
    description: 'Generate a list of suggested queries.',
  },
]

export const getHelpMessage = (): Array<string> => {
  const response: Array<string> = []
  commands.forEach((command) => {
    response.push(`> ${command.name}: ${command.description}`)
  })
  return response
}

export const getSuggestionsMessage = (): Array<string> => {
  return [
    '> What personal projects have you worked on and how do they demonstrate your full stack development skills?',
    '> How much experience do you have as a Front-end Developer?',
    '> What do you like to do in your free time? What are your favourite books? Authors? Games?'
  ]
}

// Maintain copy of chat in the LocalStorage for persistence across visits
export const getLocalChat = (): Array<ChatItem> => {
  return JSON.parse(localStorage.getItem('nickchubb-ca-chat') ?? '[]')
}

export const storeLocalChat = (chat: Array<ChatItem>): void => {
  localStorage.setItem('nickchubb-ca-chat', JSON.stringify(chat))
}

// Generates UUID for each user of the chatbot
export const getUserId = () => {
  const userId = localStorage.getItem('nickchubb-ca-userId')
  if (!userId) {
    const newId = uuidv4()
    localStorage.setItem('nickchubb-ca-userId', newId)
    return newId
  }
  return userId
}
