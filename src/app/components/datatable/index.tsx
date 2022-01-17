import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, IconButton, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Tooltip } from '@material-ui/core'
import { Edit as EditIcon, HighlightOff as DeleteIcon } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers'
import { Members } from '../../components/member/types'
import { DialogForm } from '../../components'
import { DataRow } from './types'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  containerFinancialMovements: {
    maxHeight: 360,
  },
  containerMembers: {
    maxHeight: 406,
  }
});

/** d@description This component is only financial movements */
const TableRowFinancialMovement = (props: any) => {
  return (
    <TableRow>
      {props.state.direction === 'in' && <TableCell>Nome</TableCell>}
      <TableCell>Descrição</TableCell>
      <TableCell align="right">Valor</TableCell>
      <TableCell align="right"></TableCell>
    </TableRow>
  )
}

/** d@description This component is only Members */
const TableRowMembers = () => {
  return (
    <TableRow>
      <TableCell>Nome completo</TableCell>
      <TableCell align="right">Telefone</TableCell>
      <TableCell align="right"></TableCell>
    </TableRow>
  )
}

/** d@description This component is only financial movements */
const TableCellFinancialMovement = (props: any) => {
  return (
    <React.Fragment>
      {props.state.direction === 'in' && <TableCell component="th" scope="row">{props.row.name}</TableCell>}
      <TableCell>{props.row.description}</TableCell>
      <TableCell align="right">{props.row.value}</TableCell>
    </React.Fragment>
  )
}

/** d@description This component is only Members */
const TableCellMembers = (props: any) => {
  return (
    <React.Fragment>
      <TableCell>{props.row.name}</TableCell>
      <TableCell align="right">{props.row.phone_number}</TableCell>
    </React.Fragment>
  )
}

export default function DataTable() {
  const classes = useStyles()

  const state = useSelector((state: RootState) => state)
  const [stateLocal, setStateLocal] = React.useState({ loadingMessage: '', isShow: true })
  const [isShowForm, setIsShowForm] = React.useState(false)
  const [rows, setRows] = React.useState<Array<Members>>([])
  const [dataRow, setDataRow] = React.useState<DataRow>()

  React.useEffect(() => {
    setRows(state.membersReducer.data)
  }, [state.membersReducer.data])

  React.useEffect(() => {
    loading()
  }, [])

  const loading = () => {
    if (!rows.length) {
     // setStateLocal({ ...stateLocal, loadingMessage: 'Carregando, aguarde...' })
     setStateLocal({ ...stateLocal, loadingMessage: 'Nenhum dado foi encontrado.', isShow: false })
    }
    // setTimeout(() => {
    //   setStateLocal({ ...stateLocal, loadingMessage: 'Nenhum dado foi encontrado.', isShow: false })
    // }, 60000)
  }

  const edit = (row: Members) => {
    setDataRow(row)
    setIsShowForm(true)
  }

  return (
    <TableContainer component={Paper} style={{ margin: '0px 0px 0px 25px' }} className={state.applicationControlReducer.direction === 'members' ? classes.containerMembers : classes.containerFinancialMovements}>
      <Table stickyHeader className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          {(state.applicationControlReducer.direction === 'in' || state.applicationControlReducer.direction === 'out') && <TableRowFinancialMovement state={state.applicationControlReducer} />}
          {state.applicationControlReducer.direction === 'members' && <TableRowMembers />}
        </TableHead>
        <TableBody>
          {rows.length ? rows.map((row, index) => (
            <TableRow key={index}>
              {(state.applicationControlReducer.direction === 'in' || state.applicationControlReducer.direction === 'out') && <TableCellFinancialMovement row={row} state={state.applicationControlReducer} />}
              {state.applicationControlReducer.direction === 'members' && <TableCellMembers row={row} />}
              <TableCell align="right">
                <Tooltip title='Editar'><IconButton size='small' color='primary' onClick={() => edit(row)}><EditIcon /></IconButton></Tooltip>
                {state.applicationControlReducer.direction !== 'members' && <Tooltip title='Excluir'><IconButton size='small' color='secondary'><DeleteIcon /></IconButton></Tooltip>}
              </TableCell>
            </TableRow>
          )) :
            <>
              <div style={{ padding: '50px' }}>
                <div>{stateLocal.loadingMessage}</div>
                {stateLocal.isShow && <LinearProgress />}
              </div>
            </>}
        </TableBody>
      </Table>
      {isShowForm && <DialogForm 
                          open={isShowForm} 
                          title={'Editar'} 
                          name={dataRow?.name}
                          phoneNumber={dataRow?.phone_number}
                          description={dataRow?.description}
                          _id={dataRow?._id}
                          handleClose={setIsShowForm} />}
    </TableContainer>
  );
}
