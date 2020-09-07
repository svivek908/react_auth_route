import React from 'react'
import { Redirect } from 'react-router-dom'

function Protected(props) {
    const Cmp=props.cmp
     const isauthentication="dsf";

    return (
        <div>{isauthentication ? <Cmp/>:  <Redirect to="/"></Redirect>}</div>
    )
}

export default Protected
