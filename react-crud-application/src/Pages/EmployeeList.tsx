import React, { useState } from 'react'
import { IEmployee } from './Employe.type'
import EmployeeModal from './EmployeeModal';


type Props = {
    list: IEmployee[];
    onDeleteClickHandler: (data: IEmployee) => void
}

function EmployeeList(props: Props) {
    const [showModal, setShowModal] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as IEmployee |null)

    const { list, onDeleteClickHandler } = props;

    const viewEmployee = (data: IEmployee) => {
        setShowModal(true)
        setDataToShow(data)
    }
    const closeEmployeeView = () => {
        setShowModal(false)
    }
    return (
        <>
            <div>
                <article>
                    <h3 className='list-header'>Employee List</h3>
                </article>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}{' '}{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <input type='button' value="View" onClick={() => viewEmployee(employee)}/>
                                    <input type='button' value="Edit" />
                                    <input
                                        type='button'
                                        value="Delete"
                                        onClick={() => onDeleteClickHandler(employee)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={6}>
                                Footer content goes here</td>
                        </tr>
                    </tfoot>
                </table>
                {showModal && dataToShow !== null &&
                    <EmployeeModal data={dataToShow} close={closeEmployeeView}/>
                }
            </div>
        </>
    )
}

export default EmployeeList;
