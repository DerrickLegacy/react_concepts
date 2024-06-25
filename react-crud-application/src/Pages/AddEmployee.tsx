import React, { useState } from 'react'
import { IEmployee } from './Employe.type';

type Props = {
  onBackBtnClickHandler: () => void;
  onSubmitClickHnd: (data: IEmployee) => void

}
function AddEmployee(props: Props) {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLasttName] = useState("")
  const [email, setEmail] = useState("")

  const {onBackBtnClickHandler, onSubmitClickHnd} = props;


  const firstNameHandlerOnClick = (e: any)=>{
    setFirstName(e.target.value)
  }
  const lastNameHandlerOnClick = (e: any)=>{
    setLasttName(e.target.value)
  }
  const emailHandlerOnClick = (e: any)=>{
    setEmail(e.target.value)
  }

  const onSubmitButtonCLickHandler = (e: any)=>{
    e.preventDefault()
    const data: IEmployee = {
      id:new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email
    }
    onSubmitClickHnd(data)
    onBackBtnClickHandler()
  }
  return (
    <>
      <div className='form-container'>
        <div>
          <h3>Add Employee</h3>
        </div>
        <form onSubmit={onSubmitButtonCLickHandler}>
          <div>
            <label htmlFor="firstName">
              First Name : </label>
            <input 
              type="text" 
              id='firstName'
              name='firstName'
              autoComplete='On'
              value={firstName} 
              onChange={firstNameHandlerOnClick}/>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name : </label>
            <input 
              type="text" 
              id='lastName'
              name='lastName'
              autoComplete='on'
              value={lastName}
              onChange={lastNameHandlerOnClick}/>
          </div>
          <div>
            <label htmlFor="email">
              Add Email : </label>
            <input 
              type="text" 
              id='email' 
              name='email'
              autoComplete='on'
              value={email}
              onChange={emailHandlerOnClick}/>
          </div>
          <div>
            <input type="button" value="Back" onClick={onBackBtnClickHandler} />
            <input type="submit" value="Add Employee" />

          </div>
        </form>
      </div>
    </>
  )
}

export default AddEmployee