import { RegisterOptions } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 're_password']?: RegisterOptions }
export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^\S+@\S+.\S+$/,
      message: 'Email invalid'
    },
    maxLength: {
      value: 160,
      message: 'Less than 160 letters'
    },
    minLength: {
      value: 5,
      message: 'More than 5 letters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password less than 160 letters'
    },
    minLength: {
      value: 6,
      message: 'Password more than 5 letters'
    }
  },
  re_password: {
    required: {
      value: true,
      message: 'Re-Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password less than 160 letters'
    },
    minLength: {
      value: 6,
      message: 'Password more than 5 letters'
    }
  }
}
