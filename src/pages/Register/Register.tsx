import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import { schema, Schema } from 'src/utils/rules'
import Input from 'src/components/Input'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ResponseApi } from 'src/types/utils.type'
import { type } from 'os'

// interface FormData {
//   email: string
//   password: string
//   re_password: string
// }
type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 're_password'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['re_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<Omit<FormData, 're_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError?.email) {
            setError('email', {
              message: formError.email,
              type: 'Server'
            })
          }
          if (formError?.password) {
            setError('password', {
              message: formError.password,
              type: 'Server'
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-white '>
      <div className="bg-[url('images/login-banner.jpg')] bg-no-repeat bg-left bg-contain h-[600px] w-[1440px] m-auto flex items-center justify-end">
        <div className='flex justify-between'>
          <div className='w-[400px] bg-white p-7 rounded-xl shadow-2xl'>
            <div>
              <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                  Sign up to your account
                </h2>
              </div>
              <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className='space-y-6' action='#' method='POST' onSubmit={onSubmit} noValidate>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                      Email address
                    </label>
                    <Input
                      id='email'
                      name='email'
                      placeholder='Email'
                      type='email'
                      register={register}
                      errorMessage={errors.email?.message}
                    />
                  </div>
                  <div className='mt-0'>
                    <div className='flex items-center justify-between'>
                      <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                        Password
                      </label>
                    </div>
                    <Input
                      id='password'
                      name='password'
                      placeholder='Password'
                      type='password'
                      register={register}
                      errorMessage={errors.password?.message}
                    />
                  </div>
                  <div className='mt-0'>
                    <div className='flex items-center justify-between'>
                      <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                        Re-Password
                      </label>
                    </div>
                    <Input
                      id='re-password'
                      name='re_password'
                      placeholder='Re-Password'
                      type='password'
                      register={register}
                      errorMessage={errors.re_password?.message}
                    />
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className='mt-10 text-center text-sm text-gray-500'>
                  You have a account!
                  <Link to='/login' className='ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
