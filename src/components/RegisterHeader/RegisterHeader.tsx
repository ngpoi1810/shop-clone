import { Link } from 'react-router-dom'

export default function RegisterHeader() {
  return (
    <header className='xl:container m-auto flex items-center justify-between'>
      <img src='public/images/nhn.png' alt='' />
      <span className='font-bold uppercase text-2xl'>Login</span>
      <Link className='text-blue-600 font-bold text-sm' to='#aa'>
        Do you need help?
      </Link>
    </header>
  )
}
