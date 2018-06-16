import React from 'react';

export const LoginComponent = (props) => (
    <div>
        <h1> {props.title}</h1>
        <button onClick={props.login}>TRY LOGIN</button>
        <p>{props.auth.login.auth.toString().toUpperCase()}</p>
    </div>
)  