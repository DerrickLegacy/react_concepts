import React from 'react'

import useGetCatFact from './useGetCatFact'

function Cat() {
    const {catData,isError,isLoading,refetchData,error,status}=useGetCatFact("https://catfact.ninja/fact");
    const refetch= refetchData;
    
    if (isLoading) {
        return <h5>Loading....</h5>
    }
    if (isError) {
        console.log(status)
        console.log(error.message,error.name, error.stack)
        return <h1>Sorry error while loading ...</h1>
    }
    return (
        <div style={{border:"1px solid black", margin: "3px 0 3px 0"}}>
            <h1>Hook 2</h1>
            <p>Fetching Data</p>

            <h3>{catData?.fact}</h3>
            <h4>
                <button onClick={refetch}>Update Data</button>
            </h4>
        </div>
    )
}

export default Cat