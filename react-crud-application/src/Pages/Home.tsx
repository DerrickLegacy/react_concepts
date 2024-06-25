import React, { useState } from 'react'
import { IEmployee, PageEnum, dummyEmployeeList } from './Employe.type'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee'


function Home() {

  const [showPage, setShowPage] = useState(PageEnum.list)
  const [employeeList, setEmployeeList] = useState(dummyEmployeeList as IEmployee[])


  const addEmployeeOnClick = () =>{
    setShowPage(PageEnum.add)
    // console.log("Am working")
  } 
  const showListPage = () =>{
    setShowPage(PageEnum.list)
  }

  const addEmployeeHandler = (data: IEmployee) => {
    setEmployeeList([...employeeList,data])
  }

  const deleteEmployeeFunction = (data: IEmployee) =>{
    //To index from array i.e employeList
    // splice that
    // update new list
    const indexToDelete = employeeList.indexOf(data)
    const tempList = [...employeeList]
    tempList.splice(indexToDelete,1)
    setEmployeeList(tempList)
  }
  return (
    <>
      <article className='article-header'>
        <header>
          <h1>React: Simple CRUD Application</h1>
        </header>
      </article>
      <section className='section-content'>
        {showPage === PageEnum.list && (
          <>
            <input 
              type='button' 
              value="Add Employee" 
              onClick={addEmployeeOnClick}
              className='add-employee-button'/>
            <EmployeeList 
              list={employeeList}
              onDeleteClickHandler={deleteEmployeeFunction}/>
        </>
        )}
        {showPage === PageEnum.add && (
          <>
            <AddEmployee 
              onBackBtnClickHandler = {showListPage}
              onSubmitClickHnd = {addEmployeeHandler}/>
          </>
          )}
      </section>
    </>
  )
}

export default Home