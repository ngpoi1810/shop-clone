import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='xl:container m-auto flex items-center justify-between'>
      <img src='/images/nhn.png' title='Logo' alt='Logo' />
      <ul className='flex gap-14'>
        <li className='hover:scale-110 transition-all'>
          <Link to='#'>Home</Link>
        </li>

        <li className='hover:scale-110 transition-all'>
          <Link to='#'>Deals</Link>
        </li>

        <li className='hover:scale-110 transition-all'>
          <Link to='#'>New Arrivals</Link>
        </li>

        <li className='hover:scale-110 transition-all'>
          <Link to='#'>Packages</Link>
        </li>

        <li className='hover:scale-110 transition-all'>
          <Link to='#'>Sign in</Link>
        </li>

        <li>
          <Link className='rounded-xl bg-black shadow-xl text-white py-5 px-11' to='#'>
            Sign Up
          </Link>
        </li>
      </ul>
      <div className='flex gap-4'>
        <div className='w-7'>
          <Link to='#'>
            <img className='w-12/12' src='images/search-icon.gif' alt='Star' title='Start' />
          </Link>
        </div>
        <div className='w-7'>
          <Link to='#'>
            <img className='w-12/12' src='images/avatar-icon.gif' alt='Star' title='Start' />
          </Link>
        </div>
        <div className='w-7'>
          <Link to='#'>
            <img className='w-12/12' src='images/star-icon.gif' alt='Star' title='Start' />
          </Link>
        </div>
        <div className='w-7'>
          <Link to='#'>
            <img className='w-12/12' src='images/shopping-card-icon.gif' alt='Star' title='Start' />
          </Link>
        </div>
      </div>
    </header>
  )
}
