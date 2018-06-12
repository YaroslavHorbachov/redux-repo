import React, { Component } from 'react';
import { LoginComponent } from '../components'

export class LoginContainer extends Component {
    title = 'Login works';
    render = () => <LoginComponent {...this} />
}