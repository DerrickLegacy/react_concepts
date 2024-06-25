import React from 'react'
import UseQueryData from './useQueryData'

export default function LoadImages() {
    const [data, error, isLoading] = UseQueryData("https://foodish-api.com/api/");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div style={{ border: "1px solid black", margin: "3px 0 3px 0" }}>
            <h1>Hook 4</h1>
            <p>Fetching Data with axios configurations</p>

            <div>
                <img src={data?.image} alt="Random Food" height={50}/>

            </div>
        </div>
    )
}
