import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from 'src/apis/auth.api'
import Input from 'src/components/Input'
import { ErrorResponse } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

type FormData = Omit<Schema, 're_password'>
const loginSchema = schema.omit(['re_password'])
export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
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
                  Sign in to your account
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
                  <div>
                    <div className='flex items-center justify-between'>
                      <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                        Password
                      </label>
                      <div className='text-sm'>
                        <Link to='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                          Forgot password?
                        </Link>
                      </div>
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
                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <p className='mt-10 text-center text-sm text-gray-500'>
                  Not a member?
                  <Link to='/register' className='ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                    Register
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
