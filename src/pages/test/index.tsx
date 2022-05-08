import React from 'react'
import { Button } from 'antd-mobile'
import './index.css'
function Test() {
  return (
    <div>
      <h1>Test</h1>
      <div className="box">原生css变量</div>
      <Button>fdsf</Button>
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
    </div>
  )
}

export default Test
