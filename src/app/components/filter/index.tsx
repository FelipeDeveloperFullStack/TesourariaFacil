import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../../state'
import { Toolbar, TextField, Button } from '@material-ui/core'
import { LocalAtm as EntradaIconButton } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers'
import { Members } from '../member/types';
import apiService from '../../service/api'

export default function Filter(props: any) {
  const dispatch = useDispatch()
  const stateGlobal = useSelector((state: RootState) => state)
  const [stateLocal, setStateLocal] = React.useState({ filterText: '', data: Array<Members>() })
  const { setMembers } = bindActionCreators(actionsCreators, dispatch)

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateLocal({ filterText: event.target.value, data: stateLocal.data })
    if(stateGlobal.applicationControlReducer.direction === 'members'){
      setMembers(stateLocal.data.filter(item => String(item.name).toLowerCase().trim().includes(String(event.target.value).toLowerCase().trim())))
    }
  }

  React.useEffect(() => {
    getAllData()
  },[])

  const getAllData = async () => {
    if(stateGlobal.applicationControlReducer.direction === 'members'){
      let result = await apiService.getApi('members')
      setStateLocal({ ...stateLocal, data: result.data })
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