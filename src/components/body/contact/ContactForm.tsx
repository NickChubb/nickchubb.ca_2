import { Formik, Form, Field, FieldAttributes } from 'formik'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import useMediaQuery from '../../../hooks/use-media-query'
import { breakpoints, colour, text } from '../../shared/styles'
import { State } from './types'
import DesktopFade from '../../shared/DesktopFade'

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  & > * {
    width: 100%;
  }
`

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  & > * {
    flex: 1;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`
const FormItem = `
  padding: 16px 16px;
  font: inherit;
  border: 1px solid ${colour.cardHighlighted};
  background-color: ${colour.cardBackground};
  border-radius: 4px;
  width: 100%;
  display: flex;
  transition: all 0.25s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${text.green};
  };

  &:disabled {
    cursor: not-allowed;
  }
`

const TextInput = styled(Field)`
  ${FormItem}
`

const TextArea = styled(Field)`
  ${FormItem}
  width: 100%;
  height: 240px;
  resize: none;
`

const SubmitButton = styled.input`
  padding: 12px 16px;
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  background: none;
  border: 2px solid ${colour.cardHighlighted};
  border-radius: 4px;
  width: 100%;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${text.green};
  }
`

type FormValues = {
  name: string
  Component: React.FC<FieldAttributes<any>>
  placeholder: string
  component?: string
}

const formData: Array<FormValues | Array<FormValues>> = [
  [
    {
      name: 'firstName',
      Component: TextInput,
      placeholder: 'First Name',
    },
    {
      name: 'lastName',
      Component: TextInput,
      placeholder: 'Last Name',
    },
  ],
  {
    name: 'replyTo',
    Component: TextInput,
    placeholder: 'Email',
  },
  {
    name: 'message',
    Component: TextArea,
    placeholder: 'Message',
    component: 'textarea',
  },
]

type ContactFormProps = {
  state: State
  setState: (state: State) => void
}

const ContactForm: React.FC<ContactFormProps> = ({ state, setState }) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  const sendEmail = async (data: any) => {
    setState('SENDING')
    fetch('/api/contact/sendEmail', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setState('SENT')
      } else {
        setState('ERROR')
      }
    })
  }

  const renderForm: any = (item?: Array<FormValues>) => {
    const data = item || formData
    return data.map((item: FormValues | Array<FormValues>) => {
      if (Array.isArray(item)) {
        if (!isMobile) return <FormRow>{renderForm(item)}</FormRow>
        return renderForm(item)
      }
      return (
        <item.Component
          id={item.name}
          name={item.name}
          placeholder={item.placeholder}
          component={item.component ?? ''}
          required
        />
      )
    })
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        replyTo: '',
        message: '',
      }}
      onSubmit={async (values) => {
        sendEmail(values)
      }}
      validate={() => ({})}
    >
      <FormWrapper>
        <DesktopFade duration={800} direction="up" cascade triggerOnce>
          {renderForm()}
          <SubmitButton type="submit" value="Submit" />
        </DesktopFade>
      </FormWrapper>
    </Formik>
  )
}

export default ContactForm
