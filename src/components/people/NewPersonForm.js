import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import ErrorField from '../common/ErrorField'
import emailValidator from 'email-validator'

class NewPersonForm extends Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field name='firstName' component={ErrorField}/>
          <Field name='lastName' component={ErrorField}/>
          <Field name='email' component={ErrorField}/>
          <div>
            <input type="submit" value='Send'/>
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({firstName, email}) => {
  const errors = {}
  if (!firstName) errors.firstName = 'FirstName is required'

  if (!email) errors.email = 'Email is required'
  else if (!emailValidator.validate(email)) errors.email = 'Email is invalid'

  return errors
}

export default reduxForm({
  form: 'person',
  validate
})(NewPersonForm);
