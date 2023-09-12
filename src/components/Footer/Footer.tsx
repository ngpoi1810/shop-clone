import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-slate-950 text-white'>
      <div className='xl:container m-auto'>
        <div className='flex justify-between items-center py-10'>
          <div>
            <h2 className='text-2xl font-bold mb-3'>Consulting Agency For Your Business</h2>
            <span className='text-sm'>the quick fox jumps over the lazy dog</span>
          </div>
          <div>
            <button className='px-10 py-3.5 rounded-md bg-indigo-600 font-bold text-sm hover:bg-indigo-500'>
              Contact Us
            </button>
          </div>
        </div>
        <div className='py-12 flex gap-8 justify-between'>
          <div className=''>
            <h3 className='font-bold text-base mb-5'>Company Info</h3>
            <ul className='font-bold text-sm'>
              <li className='mb-3'>
                <Link to='aaaa' title='About Us'>
                  About Us
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Carrier'>
                  Carrier
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='We are hiring'>
                  We are hiring
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Blog'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h3 className='font-bold text-base mb-5'>Legal</h3>
            <ul className='font-bold text-sm'>
              <li className='mb-3'>
                <Link to='aaaa' title='About Us'>
                  About Us
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Carrier'>
                  Carrier
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='We are hiring'>
                  We are hiring
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Blog'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h3 className='font-bold text-base mb-5'>Features</h3>
            <ul className='font-bold text-sm'>
              <li className='mb-3'>
                <Link to='aaaa' title='Business Marketing'>
                  Business Marketing
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='User Analytic'>
                  User Analytic
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Live Chat'>
                  Live Chat
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Unlimited Support'>
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h3 className='font-bold text-base mb-5'>Resources</h3>
            <ul className='font-bold text-sm'>
              <li className='mb-3'>
                <Link to='aaaa' title='IOS & Android'>
                  IOS & Android
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Watch a Demo'>
                  Watch a Demo
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='Customers'>
                  Customers
                </Link>
              </li>

              <li className='mb-3'>
                <Link to='aaaa' title='API'>
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h3 className='font-bold text-base mb-5'>Get In Touch</h3>
            <ul className='font-bold text-sm'>
              <li className='mb-3'>
                <Link className='flex gap-2 items-center' to='aaaa' title='(480) 555-0103'>
                  <img src='public/images/phone-bold-icon.svg' alt='' /> (480) 555-0103
                </Link>
              </li>

              <li className='mb-3'>
                <Link
                  className='flex gap-2 items-center'
                  to='aaaa'
                  title='4517 Washington Ave. Manchester, Kentucky 39495'
                >
                  <img src='public/images/location-bold-icon.svg' alt='' /> 4517 Washington Ave. Manchester, Kentucky
                  39495
                </Link>
              </li>

              <li className='mb-3'>
                <Link className='flex gap-2 items-center' to='aaaa' title='debra.holt@example.com'>
                  <img src='public/images/email-bold-icon.svg' alt='' /> debra.holt@example.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='py-6 flex justify-between'>
          <div className='font-bold text-sm'>Made With Love By Finland All Right Reserved </div>
          <div className='flex gap-3'>
            <Link to='aaa'>
              <img src='public/images/fb-blue-icon.svg' alt='' />
            </Link>
            <Link to='aaa'>
              <img src='public/images/ins-blue-icon.svg' alt='' />
            </Link>
            <Link to='aaa'>
              <img src='public/images/twitter-blue-icon.svg' alt='' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
