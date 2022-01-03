import React from 'react'
import { Datatable, Filter, DialogForm, BoxesRight } from '..'
import { Paper as Container } from '@material-ui/core'

export default function Member(){
  const [isShowDialogForm, setIsShowDialogForm] = React.useState(false)
  return (
    <Container elevation={3} style={{ margin: '6px 8px', height: '90vh', padding: '0px 45px 0px 0px' }}>
      <Filter setIsShowDialogForm={setIsShowDialogForm}/>
      <div id='container-datatableAndSaldos'>
        <Datatable />
        <BoxesRight/>
      </div>
      {isShowDialogForm && <DialogForm open={isShowDialogForm} handleClose={setIsShowDialogForm} title={'Membros'} />}
    </Container>
  )
}