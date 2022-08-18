import React, {useContext} from 'react'
import ForgetPasswordField from './forgetpassword_field'
import { SystemBackdrop } from '../../components'
import { GlobalContext } from '../../core/context/GlobalContext'

const ForgetPassword = () => {
  const {open, setOpen} = useContext(GlobalContext);
  return (
    <div>
      <ForgetPasswordField setOpen={setOpen}/>
      <SystemBackdrop open={open}/>
    </div>
  )
}

export default ForgetPassword