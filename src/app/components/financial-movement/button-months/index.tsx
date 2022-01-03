import React, { useEffect} from 'react'
import { ButtonStyled as Button } from '../../../main/style'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../../../state'
import { RootState } from '../../../state/reducers/combineReducers'
import { IButtonMonths } from './types'
import { months } from './months'

const ButtonMonths: React.FC = () => {

  const dispatch = useDispatch()
  const { setMonth } = bindActionCreators(actionsCreators, dispatch)
  const state = useSelector((state: RootState) => state.financialMovementReducer)

  useEffect(() => {
    setMonth(new Date().getMonth() + 1)
  }, [])

  const handleButtonMonth = (month: IButtonMonths) => {
    setMonth(month.monthNumber)
  }

  return (
    <React.Fragment>
      {months.map(month => {
        return (
          <Button onClick={() => handleButtonMonth(month)} variant={month.monthNumber === state.month ? 'contained' : undefined}>{month.monthName}</Button>
        )
      })}
    </React.Fragment>
  )
}

export default ButtonMonths