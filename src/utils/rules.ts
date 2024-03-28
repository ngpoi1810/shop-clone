// import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

// type Rules = { [key in 'email' | 'password' | 're_password']?: RegisterOptions }
// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Email is required'
//     },
//     pattern: {
//       value: /^\S+@\S+.\S+$/,
//       message: 'Email invalid'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Less than 160 letters'
//     },
//     minLength: {
//       value: 5,
//       message: 'More than 5 letters'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Password is required'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Password less than 160 letters'
//     },
//     minLength: {
//       value: 6,
//       message: 'Password more than 5 letters'
//     }
//   },
//   re_password: {
//     required: {
//       value: true,
//       message: 'Re-Password is required'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Password less than 160 letters'
//     },
//     minLength: {
//       value: 6,
//       message: 'Password more than 5 letters'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => value === getValues('password') || 'Re-password not match'
//         : undefined
//   }
// })
export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email invalid')
    .min(5, 'More than 5 letters')
    .max(160, 'Less than 160 letters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'More than 6 letters')
    .max(160, 'Less than 160 letters'),
  re_password: yup
    .string()
    .required('Re-Password is required')
    .min(6, 'More than 6 letters')
    .max(160, 'Less than 160 letters')
    .oneOf([yup.ref('password')], 'Password not match'),
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: function (value) {
      const price_min = value
      const { price_max } = this.parent as { price_min: string; price_max: string }
      if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  }),
  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: function (value) {
      const price_max = value
      const { price_min } = this.parent as { price_min: string; price_max: string }
      if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  })
})
export type Schema = yup.InferType<typeof schema>
