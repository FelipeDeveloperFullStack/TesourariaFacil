import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../../state'
import { Toolbar, TextField, Button } from '@material-ui/core'
import { LocalAtm as EntradaIconButton } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers'
import apiService from '../../service/api'

export default function Filter(props: any) {
  const dispatch = useDispatch()
  const stateGlobal = useSelector((state: RootState) => state)
  const [stateLocal, setStateLocal] = React.useState({ filterText: '' })
  const { setMembers, setFilter, setFinancialMovementIn, setFinancialMovementOut } = bindActionCreators(actionsCreators, dispatch)

  const handleFilter = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateLocal({ filterText: event.target.value })
    if(stateGlobal.applicationControlReducer.direction === 'members'){
      let result = await apiService.postApi('members/getDataLike', { name: event.target.value })
      setFilter(true)
      setMembers(result.data)
    }
    if(stateGlobal.applicationControlReducer.direction === 'in'){
      let result = await apiService.postApi('in/getDataLike', { name: event.target.value })
      setFilter(true)
      setFinancialMovementIn(result.data)
    }
    if(stateGlobal.applicationControlReducer.direction === 'out'){
      let result = await apiService.postApi('out/getDataLike', { description: event.target.value })
      setFilter(true)
      setFinancialMovementOut(result.data)
    }
  }

  return (
    <Toolbar>
      <TextField style={{ width: '415px' }} label='Buscar por...' variant='outlined' size='small' value={stateLocal.filterText} onChange={handleFilter} />
      <Button color={stateGlobal.applicationControlReducer.direction === 'members' ? 'primary' : (stateGlobal.applicationControlReducer.direction === 'in' ? 'primary' : 'secondary')} startIcon={<EntradaIconButton />} style={{ marginLeft: '10px' }} onClick={() => props.setIsShowDialogForm(true)} variant='contained'>
        {stateGlobal.applicationControlReducer.direction === 'in' && 'Lançar Entrada'}
        {stateGlobal.applicationControlReducer.direction === 'out' && 'Lançar Saída'}
        {stateGlobal.applicationControlReducer.direction === 'members' && 'Adicionar novo membro'}
      </Button>
    </Toolbar>
  )
}