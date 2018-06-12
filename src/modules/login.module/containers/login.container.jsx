import React, { Component } from 'react';
import { LoginComponent } from '../components'
import { Login } from '../store/actions'
import { connect } from 'react-redux'

@connect()
export class LoginContainer extends Component {
    title = 'Login works';
    login = () => this.props.dispatch(Login)
    render = () => <LoginComponent {...this} />
}