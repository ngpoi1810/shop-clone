import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-white '>
      <div className="bg-[url('images/login-banner.jpg')] bg-no-repeat bg-left bg-contain h-[600px] w-[1040px] m-auto flex items-center justify-end">
        <div className='flex justify-between'>
          <div className='w-[400px] bg-white p-7 rounded-xl shadow-2xl'>
            <div>
              <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                  Sign up to your account
                </h2>
              </div>
              <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className='space-y-6' action='#' method='POST'>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                        Password
                      </label>
                      <div className='text-sm'>
                        <Link to='aaa' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
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
