import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useFloating, useHover, useInteractions, safePolygon, FloatingPortal, offset } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import { logout } from 'src/apis/auth.api'
import { AppContext } from 'src/contexts/app.context'

export default function Header() {
  const { setIsAuthenticated, isAuthenticated } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsAuthenticated(false)
    }
  })
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset({ crossAxis: -50, mainAxis: 10 })]
  })
  const hover = useHover(context, {
    handleClose: safePolygon()
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])
  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <header className='xl:container m-auto flex items-center justify-between'>
      <Link to='/'>
        <img src='/images/nhn.png' title='Logo' alt='Logo' />
      </Link>
      <ul className='flex gap-14'>
        <li className='hover:scale-110 transition-all'>
          <Link to='/'>Home</Link>
        </li>

        <li className='hover:scale-110 transition-all'>
          <Link to='#'>Shop</Link>
        </li>

        <li className='hover:scale-110 transition-all'>
          <Link to='#'>Products</Link>
        </li>

        <li className='hover:scale-110 transition-all'>
          <Link to='#'>Pages</Link>
        </li>

        {!isAuthenticated && (
          <>
            <li className='hover:scale-110 transition-all'>
              <Link to='/login'>Sign in</Link>
            </li>

            <li>
              <Link className='rounded-xl bg-black shadow-xl text-white py-5 px-11' to='/register'>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className='flex gap-4 items-center'>
        <div>
          <form>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>

              <input
                type='search'
                id='default-search'
                className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Search...'
                required
              />
            </div>
          </form>
        </div>
        {isAuthenticated && (
          <>
            <div className='w-7'>
              <Link to='#' ref={refs.setReference} {...getReferenceProps()}>
                <img className='w-12/12' src='images/avatar-icon.gif' alt='Star' title='Start' />
              </Link>
              <FloatingPortal>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className='bg-black/5 rounded pt-4 pr-3 pb-2 pl-5 backdrop-blur-[75px] top-3'
                      ref={refs.setFloating}
                      style={floatingStyles}
                      {...getFloatingProps()}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: 'linear',
                        duration: 0.2,
                        x: { duration: 1 }
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <ul>
                        <li className='mb-3'>
                          <Link className='text-white' to='/profile'>
                            My Account
                          </Link>
                        </li>
                        <li className='mb-3'>
                          <Link className='text-white' to='#'>
                            My Order
                          </Link>
                        </li>
                        <li>
                          <button onClick={handleLogout} className='text-white w-full cursor-pointer text-left'>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FloatingPortal>
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
          </>
        )}
      </div>
    </header>
  )
}
