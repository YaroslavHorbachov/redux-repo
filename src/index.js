import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LoginContainer } from './modules/login.module'
import { Provider } from 'react-redux'
import { store } from './store'

const providerHoc = (Wrap) => (
    <Provider store={store}>
        <Wrap></Wrap>
    </Provider>
)

ReactDOM.render(providerHoc(LoginContainer), document.getElementById('root'));

