import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

@connect()
@reduxForm({
  form: '[register_form]'
})
export class RegisterContainer extends Component {}
