import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Tooltip } from '@material-ui/core'
import { Edit as EditIcon, HighlightOff as DeleteIcon } from '@material-ui/icons';
import { RootState } from '../../state/reducers/combineReducers'

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
  const [rows, setRows] = React.useState([])
  
  /** @description Get the all members data */
  const getMembers = () => {
    setRows(state.membersReducer.data)
  }
  React.useEffect(() => {
    if(state.applicationControlReducer.direction === 'members') getMembers()
  }, [state.membersReducer.data])
  
  return (
    <TableContainer component={Paper} style={{ margin: '0px 0px 0px 25px' }} className={state.applicationControlReducer.direction === 'members' ? classes.containerMembers : classes.containerFinancialMovements}>
      <Table stickyHeader className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          {(state.applicationControlReducer.direction === 'in' || state.applicationControlReducer.direction === 'out') && <TableRowFinancialMovement state={state.applicationControlReducer} />}
          {state.applicationControlReducer.direction === 'members' && <TableRowMembers />}
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {(state.applicationControlReducer.direction === 'in' || state.applicationControlReducer.direction === 'out') && <TableCellFinancialMovement row={row} state={state.applicationControlReducer} />}
              {state.applicationControlReducer.direction === 'members' && <TableCellMembers row={row} />}
              <TableCell align="right">
                <Tooltip title='Editar'><IconButton size='small' color='primary'><EditIcon /></IconButton></Tooltip>
                <Tooltip title='Excluir'><IconButton size='small' color='secondary'><DeleteIcon /></IconButton></Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
