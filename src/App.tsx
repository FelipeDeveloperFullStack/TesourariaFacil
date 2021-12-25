import React from 'react';
import { ToolBarTop, ToolBarBottom } from './app/components'
import { CssBaseline } from '@material-ui/core'

const Application: React.FC = () => {
  return (
    <>
      <CssBaseline/>
      <ToolBarTop/>
      <ToolBarBottom/>
    </>
  )
}

export default Application;
