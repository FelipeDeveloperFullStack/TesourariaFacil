import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../../../state'
import apiService from '../../../service/api'
import { Members } from '../types'

export const useAllMembers = () => {
  
  /* eslint-disable */
  const dispatch = useDispatch()
  const { setMembers } = bindActionCreators(actionsCreators, dispatch)
  React.useEffect(() => {
    const getAllDataMembers = async () => {
      const result = await apiService.getApi('members')
      let _result = result.data.map((item: Members) => item )
      // eslint-disable-next-line
       setMembers(_result)
    }
    getAllDataMembers()
  }, [])
  /* eslint-disable */
}