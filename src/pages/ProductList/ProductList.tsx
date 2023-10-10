import { Link } from 'react-router-dom'
import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import Product from './Product'
export default function ProductList() {
  return (
    <div className='bg-[#f5f5fa] '>
      <div className='w-[1270px] px-[15px] m-auto'>
        <div className='grid grid-cols-6 py-14'>
          <AsideFilter />
          <div className='col-span-5 '>
            <SortProductList />
            <div className='grid grid-cols-5 gap-2'>
              {Array(20)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <Product />
                  </div>
                ))}
              <div className='col-span-5 mx-auto mt-8'>
                <nav aria-label='Page navigation example '>
                  <ul className='flex items-center -space-x-px h-10 text-base'>
                    <li>
                      <Link
                        to='#'
                        className='flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 '
                      >
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='w-3 h-3'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 6 10'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 1 1 5l4 4'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                      >
                        1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                      >
                        2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        aria-current='page'
                        className='z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 '
                      >
                        3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                      >
                        4
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                      >
                        5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 '
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='w-3 h-3'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 6 10'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='m1 9 4-4-4-4'
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
