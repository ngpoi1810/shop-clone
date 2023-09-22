import { Link, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <header className='xl:container m-auto flex items-center justify-between'>
      <Link to='/'>
        <img src='/images/nhn.png' alt='' />
      </Link>
      <span className='font-bold uppercase text-2xl'>{isRegister ? 'Register' : 'Login'}</span>
      <Link className='text-blue-600 font-bold text-sm' to='#aa'>
        Do you need help?
      </Link>
    </header>
  )
}
