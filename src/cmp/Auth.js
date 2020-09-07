import React, { Component } from 'react'

export default class Auth extends Component {
    
    login() {
        const isauthentication=true;
        // i will call login api here
        // fetch("https://jsonplaceholder.typicode.com/posts",
        //     {
        //         method: 'post',
        //         headers: {
        //             "Accept": "application/json",
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(this.state)
        //     }).then((result) => {
        //         result.json().then((resp) => {
        //             console.log(resp)

        //         })
        //     })
        
    }
    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '30%', margin: '0 auto' }}>
                    <label>Email</label>
                    <input type="text" onChange={(e) => this.setState({ email: e.target.value })} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => this.setState({ password: e.target.value })} />
                    <div style={{ width: '50px', margin: '10px' }}>
                        <button onClick={() => this.login()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
