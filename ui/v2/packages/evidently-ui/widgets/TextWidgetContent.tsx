import React from 'react'
import ReactMarkdown from 'react-markdown'

import { TextWidgetParams } from '../api'

const TextWidgetContent: React.FunctionComponent<TextWidgetParams> = (props) => {
  return (
    <>
      <ReactMarkdown>{props.text}</ReactMarkdown>
    </>
  )
}

export default TextWidgetContent
