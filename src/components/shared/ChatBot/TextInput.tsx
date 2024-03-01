import { Field, Form, Formik } from 'formik'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { colour, text } from '../styles'

const Input = styled(Field)<{ disabled: boolean }>`
  width: 100%;
  padding: 16px 16px;
  font-size: 18px;
  border: 1px solid rgb(20, 20, 20);
  background-color: ${colour.cardHeader};
  color: ${text.light};
  border-radius: 4px;
  margin-top: 16px;
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.disabled &&
    `
    cursor: wait;
  `}
`

type TextInputProps = {
  onSubmit: (message: string) => void
  isLoading?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  onSubmit,
  isLoading = false,
}) => {

  // Ref for input form to reset focus when isLoading is set to false
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    // Check if the input is re-enabled
    if (ref.current && !isLoading) {
      ref.current.focus()
    }
  }, [isLoading])

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={({ message }, { resetForm }) => {
        onSubmit(message)
        resetForm()
      }}
    >
      <Form>
        <Input
          innerRef={ref}
          type="text"
          name="message"
          id="message"
          placeholder={
            isLoading ? 'Generating response... 🤔' : '✨ Ask me anything! ✨'
          }
          disabled={isLoading}
          autoComplete="off"
          autoFocus
        />
      </Form>
    </Formik>
  )
}

export default TextInput
