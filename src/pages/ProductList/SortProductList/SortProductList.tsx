import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-unresolved
import { Autoplay } from 'swiper/modules'

export default function SortProductList() {
  return (
    <>
      <div className='col-span-5 bg-white'>
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
      </div>
    </>
  )
}
