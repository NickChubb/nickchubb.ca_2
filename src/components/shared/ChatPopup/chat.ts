import { CommandType } from "./types"

export const commands: Array<CommandType> = [
  {
    id: 0,
    name: 'exit',
    command: ['exit', 'quit', ':wq', '', 'close'],
    description: 'Close the chat window.'
  },
  {
    id: 1,
    name: 'clear',
    command: ['clear', 'cls', 'refresh', 'reset'],
    description: 'Reset chat window.'
  },
  {
    id: 2,
    name: 'help',
    command: ['help'],
    description: 'Generate a list of available functions.'
  },
  {
    id: 4,
    name: 'suggestions',
    command: ['suggestions', 'suggest'],
    description: 'Generate a list of suggested queries.'
  }
] 

export const getHelpMessage = (): Array<string> => {
  const response: Array<string> = []
  commands.forEach((command) => {
    response.push(`> ${command.name}: ${command.description}`)
  })
  return response
}

export const getSuggestionsMessage = (): Array<string> => {
  return ['What projects have you worked on?', 'How much experience do you have as a Back-end Developer?']
}