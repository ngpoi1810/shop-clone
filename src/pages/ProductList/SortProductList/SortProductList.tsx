import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-unresolved
import { Autoplay } from 'swiper/modules'

export default function SortProductList() {
  return (
    <div className='bg-white mb-2'>
      <h2 className='text-xl pt-4 pl-3'>Điện Thoại - Máy Tính Bảng</h2>
      <div className='mt-3 px-4'>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{
            delay: 2500
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Link to='' className='flex rounded-lg border-[1px] border-black overflow-hidden'>
              <div className='w-[165px] h-[165px] relative shrink-0 overflow-hidden'>
                <div className='bg-[url("/public/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/public/images/slide1.png'
                  alt=''
                />
              </div>
              <div className=' flex-1 overflow-hidden p-4'>
                <h3 className='text-xl font-medium truncate mb-1'>Nhập Hội Linh Hoạt cùng Z Flip5</h3>
                <div className='text-sm flex items-center gap-1 text-gray-500'>
                  Tài trợ bởi <div className='text-black font-medium'>Samsung Official Store</div>
                  <div className='flex items-center'>
                    5/5
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width={14}
                      height={14}
                      viewBox='0 0 12 12'
                      className='star-icon'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <path
                          fill='#fdd835'
                          transform='matrix(-1 0 0 1 11 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                        <path
                          fill='#fdd835'
                          transform='translate(1 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='flex mt-3'>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='' className='flex rounded-lg border-[1px] border-black overflow-hidden'>
              <div className='w-[165px] h-[165px] relative shrink-0 overflow-hidden'>
                <div className='bg-[url("/public/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/public/images/slide1.png'
                  alt=''
                />
              </div>
              <div className=' flex-1 overflow-hidden p-4'>
                <h3 className='text-xl font-medium truncate mb-1'>Nhập Hội Linh Hoạt cùng Z Flip5</h3>
                <div className='text-sm flex items-center gap-1 text-gray-500'>
                  Tài trợ bởi <div className='text-black font-medium'>Samsung Official Store</div>
                  <div className='flex items-center'>
                    5/5
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width={14}
                      height={14}
                      viewBox='0 0 12 12'
                      className='star-icon'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <path
                          fill='#fdd835'
                          transform='matrix(-1 0 0 1 11 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                        <path
                          fill='#fdd835'
                          transform='translate(1 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='flex mt-3'>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='' className='flex rounded-lg border-[1px] border-black overflow-hidden'>
              <div className='w-[165px] h-[165px] relative shrink-0 overflow-hidden'>
                <div className='bg-[url("/public/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/public/images/slide1.png'
                  alt=''
                />
              </div>
              <div className=' flex-1 overflow-hidden p-4'>
                <h3 className='text-xl font-medium truncate mb-1'>Nhập Hội Linh Hoạt cùng Z Flip5</h3>
                <div className='text-sm flex items-center gap-1 text-gray-500'>
                  Tài trợ bởi <div className='text-black font-medium'>Samsung Official Store</div>
                  <div className='flex items-center'>
                    5/5
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width={14}
                      height={14}
                      viewBox='0 0 12 12'
                      className='star-icon'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <path
                          fill='#fdd835'
                          transform='matrix(-1 0 0 1 11 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                        <path
                          fill='#fdd835'
                          transform='translate(1 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='flex mt-3'>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='' className='flex rounded-lg border-[1px] border-black overflow-hidden'>
              <div className='w-[165px] h-[165px] relative shrink-0 overflow-hidden'>
                <div className='bg-[url("/public/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/public/images/slide1.png'
                  alt=''
                />
              </div>
              <div className=' flex-1 overflow-hidden p-4'>
                <h3 className='text-xl font-medium truncate mb-1'>Nhập Hội Linh Hoạt cùng Z Flip5</h3>
                <div className='text-sm flex items-center gap-1 text-gray-500'>
                  Tài trợ bởi <div className='text-black font-medium'>Samsung Official Store</div>
                  <div className='flex items-center'>
                    5/5
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width={14}
                      height={14}
                      viewBox='0 0 12 12'
                      className='star-icon'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <path
                          fill='#fdd835'
                          transform='matrix(-1 0 0 1 11 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                        <path
                          fill='#fdd835'
                          transform='translate(1 1)'
                          d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='flex mt-3'>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/public/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='flex justify-between px-4 py-3 items-center '>
        <div>
          <button className='relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300  focus:ring-4 focus:outline-none focus:ring-lime-200 '>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0'>
              Phổ Biến
            </span>
          </button>
          <button className='relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 '>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0'>
              Bán Chạy
            </span>
          </button>

          <button className='relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 '>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0'>
              Hàng Mới
            </span>
          </button>

          <button className='relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-purple-200 '>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0'>
              Giá Thấp Đến Cao
            </span>
          </button>

          <button className='relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 '>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0'>
              Giá Cao Đến Thấp
            </span>
          </button>
        </div>
        <div className='flex items-center'>
          <div className='mr-2 flex gap-1'>
            <span>1</span>/<span>24</span>
          </div>
          <nav aria-label='Page navigation example'>
            <ul className='flex items-center -space-x-px h-8 text-sm'>
              <li>
                <Link
                  to='#'
                  className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 '
                >
                  <span className='sr-only'>Previous</span>
                  <svg
                    className='w-2.5 h-2.5'
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
                  className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 '
                >
                  <span className='sr-only'>Next</span>
                  <svg
                    className='w-2.5 h-2.5'
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
      <div></div>
    </div>
  )
}
