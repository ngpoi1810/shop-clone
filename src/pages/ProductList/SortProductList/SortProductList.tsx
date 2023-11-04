import { Link, createSearchParams, useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-unresolved
import { Autoplay } from 'swiper/modules'
import { QueryConfig } from '../ProductList'
import { sortBy, order as orderConst } from 'src/constants/product'
import classNames from 'classnames'
import { ProductListConfig } from 'src/types/product.type'
import path from 'src/constants/path'
import { omit } from 'lodash'
interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
export default function SortProductList({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()
  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }
  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }
  const handlePriceSort = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }
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
                <div className='bg-[url("/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/images/slide1.png'
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
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
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
                <div className='bg-[url("/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/images/slide1.png'
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
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
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
                <div className='bg-[url("/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/images/slide1.png'
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
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
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
                <div className='bg-[url("/images/slide1.png")] w-full h-full bg-no-repeat bg-center bg-cover blur-3xl'></div>{' '}
                <img
                  className='w-[123px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  src='/images/slide1.png'
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
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
                    <div className='absolute bg-red-500 rounded-lg text-xs text-white bottom-[2px] right-[2px] p-1'>
                      -20%
                    </div>
                  </div>
                  <div className='w-16 h-16 relative mr-2'>
                    <img className='border-[1px] rounded-lg border-black' src='/images/product-1.jpg' alt='' />
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
        <div className='flex items-center'>
          <button
            className={classNames(
              'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200',
              { 'ring-4 outline-none ring-red-100': isActiveSortBy(sortBy.view) },
              {
                '': !isActiveSortBy(sortBy.view)
              }
            )}
            onClick={() => handleSort(sortBy.view)}
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
              Phổ Biến
            </span>
          </button>
          <button
            className={classNames(
              'relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white',
              { 'ring-4 outline-none ring-cyan-200': isActiveSortBy(sortBy.sold) },
              { '': !isActiveSortBy(sortBy.sold) }
            )}
            onClick={() => handleSort(sortBy.sold)}
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0'>
              Bán Chạy
            </span>
          </button>

          <button
            className={classNames(
              'relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white',
              { 'ring-4 outline-none ring-green-200': isActiveSortBy(sortBy.createdAt) },
              { '': !isActiveSortBy(sortBy.createdAt) }
            )}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0'>
              Hàng Mới
            </span>
          </button>

          <div>
            <select
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              value={order || ''}
              onChange={(event) =>
                handlePriceSort(event.target.value as Exclude<ProductListConfig['order'], undefined>)
              }
            >
              <option value='' disabled>
                Giá
              </option>
              <option value={orderConst.desc}>Giá từ cao đến thấp</option>
              <option value={orderConst.asc}>Giá từ thấp đến cao</option>
            </select>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='mr-2 flex gap-1'>
            <span>{page}</span>/<span>{pageSize}</span>
          </div>
          <nav aria-label='Page navigation example'>
            <ul className='flex items-center -space-x-px h-8 text-sm'>
              {page === 1 ? (
                <li>
                  <span className='cursor-not-allowed flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 '>
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
                  </span>
                </li>
              ) : (
                <Link
                  className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 '
                  to={{
                    pathname: path.home,
                    search: createSearchParams({
                      ...queryConfig,
                      page: (page - 1).toString()
                    }).toString()
                  }}
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
              )}

              {page === pageSize ? (
                <li>
                  <span className='cursor-not-allowed flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 '>
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
                  </span>
                </li>
              ) : (
                <li>
                  <Link
                    to={{
                      pathname: path.home,
                      search: createSearchParams({
                        ...queryConfig,
                        page: (page + 1).toString()
                      }).toString()
                    }}
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
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div></div>
    </div>
  )
}
