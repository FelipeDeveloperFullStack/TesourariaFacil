import styled from 'styled-components'
import { Button, styled as styledMaterial, Paper } from '@material-ui/core'

export const Container = styled.main`
  div#group-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: 36px;
  }
  #first-button {
    position: relative;
    left: 25px
  }
  #saldos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    margin-top: 83px;
    margin-left: -32px;
    width: 138px;
    position: relative;
    left: 41px
  }
  #container-datatableAndSaldos {
    display: flex
  }
  #saldo {
    font-size: 19px;
  }
`

export const ButtonStyled = styledMaterial(Button) ({
  backgroundColor: '#FFF'
})

export const SaldosStyled = styled(Paper)({
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  padding: '10px',
  fontWeight: 'bold',
  fontSize: '14px',
  marginBottom: '5px',
  flexDirection: 'column'
})
