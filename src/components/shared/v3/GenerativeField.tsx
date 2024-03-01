import React from 'react'

type GenerativeFieldProps = {
  content: string
}

const GenerativeField: React.FC<GenerativeFieldProps> = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}

export default GenerativeField