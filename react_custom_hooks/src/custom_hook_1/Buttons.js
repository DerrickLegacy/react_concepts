import React from 'react'
import useToggle from './useToggle';


function Buttons() {
    const [isVisible, toggle] = useToggle()
    const [isVisible2, toggle2] = useToggle()

    return (
        <div style={{border:"1px solid black", margin: "3px 0 3px 0"}}>
            <h1>Hook 1</h1>
            <p>Re-using same hook to affect display in diff situations</p>
            <button onClick={toggle} >
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h3>Hidden Text</h3>}
            <br />

            <button onClick={toggle2} >
                {isVisible2 ? "Hide2" : "Show2"}
            </button>
            {isVisible2 && <h3>Second Hidden Text</h3>}
            <div className='cat-fact'>
            </div>
        </div>
    )
}

export default Buttons