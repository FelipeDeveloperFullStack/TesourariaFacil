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
  container: {
    maxHeight: 360,
  }
});

function createData(name: string, description: string, value: string, carbs: number, protein: number) {
  return { name, description, value, carbs, protein }
}

const rows = [
  createData('Izabella Gonçalves Silveira', 'Dizimo', 'R$ 150,00', 24, 4.0),
  createData('Anabel Bastos Gabeira', 'Dizimo', 'R$ 200,00', 37, 4.3),
  createData('Henrique Ferraço Reis', 'Oferta', 'R$ 115,15', 24, 6.0),
  createData('Valentin Camargo Liberato', 'Dizimo', 'R$ 36,00', 67, 4.3),
  createData('Melânia Proença Craveiro', 'Oferta', 'R$ 148,60', 49, 3.9),
  createData('Henrique Ferraço Reis', 'Oferta', 'R$ 115,15', 24, 6.0),
  createData('Henrique Ferraço Reis', 'Oferta', 'R$ 115,15', 24, 6.0),
  createData('Izabella Gonçalves Silveira', 'Dizimo', 'R$ 150,00', 24, 4.0),
];

/** d@description This component is only financial movements */
const TableRowFinancialMovement = () => {
  const state = useSelector((state: RootState) => state.applicationControlReducer)
  return (
    <TableRow>
      {state.direction === 'in' && <TableCell>Nome</TableCell>}
      <TableCell>Descrição</TableCell>
      <TableCell align="right">Valor</TableCell>
      <TableCell align="right"></TableCell>
    </TableRow>
  )
}

/** d@description This component is only financial movements */
const Members = (state: any) => {
  return (
    <TableRow>
      <TableCell>Nome completo</TableCell>
      <TableCell align="right">Telefone</TableCell>
      <TableCell align="right"></TableCell>
    </TableRow>
  )
}

export default function DataTable() {
  const classes = useStyles()
  const state = useSelector((state: RootState) => state.applicationControlReducer)

  return (
    <TableContainer component={Paper} style={{ margin: '0px 0px 0px 25px' }} className={classes.container}>
      <Table stickyHeader className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          {(state.direction === 'in' || state.direction === 'out') && <TableRowFinancialMovement/>}
          {state.direction === 'members' && <Members/>}
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {state.direction === 'in' && <TableCell component="th" scope="row">{row.name}</TableCell>}
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
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
