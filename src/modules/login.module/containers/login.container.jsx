import React, { Component } from 'react';
import { LoginComponent } from '../components'
import { Login } from '../store/login.actions'
import { connect } from 'react-redux'

@connect(store => ({ auth: store.auth })) //TODO realized selectors 
export class LoginContainer extends Component {
    constructor(props) {
        super();
        console.log(props)
    }
    title = 'Login works';
    login = () => this.props.dispatch(Login);
    render = () => <LoginComponent {...this} {...this.props} />
}