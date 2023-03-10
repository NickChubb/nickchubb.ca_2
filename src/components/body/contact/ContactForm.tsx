import { Formik, Form, Field, FieldAttributes } from 'formik'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import useMediaQuery from '../../../hooks/use-media-query'
import { breakpoints, colour, text } from '../../shared/styles'
import { State } from './ContactTypes'

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
  height: 100%;
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

  const renderForm = (item?: Array<FormValues>, index?: number) => {
    // Probably a cleaner way to do this...
    // Aim is to render it differently on mobile and desktop and get the delay right
    const data = item || formData
    let count = index ?? 1
    return data.map((item: FormValues | Array<FormValues>) => {
      let delay
      if (index && !isMobile) delay = index
      if (Array.isArray(item)) {
        if (isMobile) count += item.length
        let i = isMobile ? count - item.length : count
        return <FormRow>{renderForm(item, i)}</FormRow>
      }
      return (
        <Fade direction="up" delay={((delay ?? ++count) - 1) * 300} triggerOnce>
          <item.Component
            id={item.name}
            name={item.name}
            placeholder={item.placeholder}
            component={item.component ?? ''}
            required
          />
        </Fade>
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
        {renderForm()}
        <Fade delay={isMobile ? 1800 : 1500} style={{ flex: 1 }} triggerOnce>
          <SubmitButton type="submit" value="Submit" />
        </Fade>
      </FormWrapper>
    </Formik>
  )
}

export default ContactForm
