import React from 'react'
import { IEmployee } from './Employe.type';

type Props = {
    close: () => void;
    data: IEmployee
}

function EmployeeModal(props: Props) {
    const {close, data} = props;
    return (
        <div id="myModal" className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={close}>&times;</span>
                <div>
                    <h3>Employee Details</h3>
                    <div>
                        <label htmlFor="firstName">First Name : {data.firstName}</label>
                    </div>
                    <div>
                        <label htmlFor="lastName">First Name : {data.lastName}</label>
                    </div>
                    <div>
                        <label htmlFor="email">Email : {data.email}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeModal