import { Link } from 'react-router-dom'
import SeeMore from 'src/components/SeeMore'

export default function AsideFilter() {
  return (
    <div className='col-span-1 bg-white w-[200px] shrink-0'>
      <div className='px-4 pb-4'>
        <h4 className='text-sm font-medium py-3'>Danh Mục Sản Phẩm</h4>
        <div>
          <Link className='flex text-sm pb-3' to='#'>
            Giày thể thao nam
          </Link>
          <Link className='flex text-sm pb-3' to='#'>
            Giày lười nam
          </Link>
          <Link className='flex text-sm pb-3' to='#'>
            Giày tây nam
          </Link>
          <Link className='flex text-sm pb-3' to='#'>
            Giày sandals nam
          </Link>
          <Link className='flex text-sm pb-3' to='#'>
            Dép nam
          </Link>
          <Link className='flex text-sm pb-3' to='#'>
            Giày boots nam
          </Link>
          <Link className='flex text-sm' to='#'>
            Phụ kiện giày nam
          </Link>
        </div>
      </div>
      <div className='px-4 pb-4 border-t-[1px]'>
        <h4 className='text-sm font-medium py-3'>Dịch vụ</h4>
        <div>
          <div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-0'
                name='color[]'
                defaultValue='white'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label htmlFor='filter-mobile-color-0' className='text-sm ml-3 min-w-0 flex-1'>
                Giao Siêu Tốc 2H
              </label>
            </div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                defaultValue='beige'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Thưởng Thêm Astra
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                defaultValue='beige'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Trả Góp 0%
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 pb-4 border-t-[1px]'>
        <h4 className='text-sm font-medium py-3'>Đánh giá</h4>
        <div>
          <Link to='#' className='flex items-center gap-1 py-1'>
            <p className='flex items-center'>
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
            </p>
            <span className='text-sm'>từ 5 sao</span>
          </Link>
          <Link to='#' className='flex items-center gap-1 py-1'>
            <p className='flex items-center'>
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
                    fill='#b8b8b8'
                    transform='matrix(-1 0 0 1 11 1)'
                    d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                  />
                  <path
                    fill='#b8b8b8'
                    transform='translate(1 1)'
                    d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                  />
                </g>
              </svg>
            </p>
            <span className='text-sm'>từ 4 sao</span>
          </Link>
          <Link to='#' className='flex items-center gap-1 py-1'>
            <p className='flex items-center'>
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
                    fill='#b8b8b8'
                    transform='matrix(-1 0 0 1 11 1)'
                    d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                  />
                  <path
                    fill='#b8b8b8'
                    transform='translate(1 1)'
                    d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                  />
                </g>
              </svg>
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
                    fill='#b8b8b8'
                    transform='matrix(-1 0 0 1 11 1)'
                    d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                  />
                  <path
                    fill='#b8b8b8'
                    transform='translate(1 1)'
                    d='M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z'
                  />
                </g>
              </svg>
            </p>
            <span className='text-sm'>từ 3 sao</span>
          </Link>
        </div>
      </div>
      <div className='px-4 pb-4 border-t-[1px]'>
        <h4 className='text-sm font-medium py-3'>Giá</h4>
        <div>
          <div className='cursor-pointer'>
            <span className='py-1 px-3 bg-[#eeeeee] inline-block rounded-xl text-xs mb-1'>Dưới 150.000</span>
          </div>
          <div className='cursor-pointer'>
            <span className='py-1 px-3 bg-[#eeeeee] inline-block rounded-xl text-xs mb-1'>150.000 đến 350.000</span>
          </div>
          <div className='cursor-pointer'>
            <span className='py-1 px-3 bg-[#eeeeee] inline-block rounded-xl text-xs mb-1'>150.000 đến 1.050.000</span>
          </div>
          <div className='cursor-pointer'>
            <span className='py-1 px-3 bg-[#eeeeee] inline-block rounded-xl text-xs mb-1'>Trên 1.050.000</span>
          </div>
        </div>
        <div className='text-sm pb-2 mt-1 text-slate-400'>Chọn khoảng giá</div>
        <div className='flex items-center gap-1'>
          <input
            type='text'
            id='default-input'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
          />
          <span>-</span>
          <input
            type='text'
            id='default-input'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1'
          />
        </div>
        <button
          type='button'
          className=' text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mt-2 w-full'
        >
          Áp dụng
        </button>
      </div>
      <div className='px-4 pb-4 border-t-[1px]'>
        <h4 className='text-sm font-medium py-3'>Nhà cung cấp</h4>
        <div>
          <div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-0'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='white'
              />
              <label htmlFor='filter-mobile-color-0' className='text-sm ml-3 min-w-0 flex-1'>
                Giao Siêu Tốc 2H
              </label>
            </div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='beige'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Thưởng Thêm Astra
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='beige'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Trả Góp 0%
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 pb-4 border-t-[1px]'>
        <h4 className='text-sm font-medium py-3'>Màu sắc</h4>
        <div>
          <div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-0'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='white'
              />
              <label htmlFor='filter-mobile-color-0' className='text-sm ml-3 min-w-0 flex-1'>
                Giao Siêu Tốc 2H
              </label>
            </div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='beige'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Thưởng Thêm Astra
              </label>
            </div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='beige'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Trả Góp 0%
              </label>
            </div>
            <SeeMore initialExpanded={false}>
              <>
                <div className='flex items-center mb-3'>
                  <input
                    id='filter-mobile-color-1'
                    name='color[]'
                    type='checkbox'
                    className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    defaultValue='beige'
                  />
                  <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                    Thưởng Thêm Astra
                  </label>
                </div>
                <div className='flex items-center mb-3'>
                  <input
                    id='filter-mobile-color-1'
                    name='color[]'
                    type='checkbox'
                    className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    defaultValue='beige'
                  />
                  <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                    Thưởng Thêm Astra
                  </label>
                </div>
              </>
            </SeeMore>
          </div>
        </div>
      </div>
      <div className='px-4 pb-4 border-t-[1px]'>
        <h4 className='text-sm font-medium py-3'>Thương hiệu</h4>
        <div>
          <div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-0'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='white'
              />
              <label htmlFor='filter-mobile-color-0' className='text-sm ml-3 min-w-0 flex-1'>
                Giao Siêu Tốc 2H
              </label>
            </div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='beige'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Thưởng Thêm Astra
              </label>
            </div>
            <div className='flex items-center mb-3'>
              <input
                id='filter-mobile-color-1'
                name='color[]'
                type='checkbox'
                className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue='beige'
              />
              <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                Thưởng Thêm Astra
              </label>
            </div>
            <SeeMore initialExpanded={false}>
              <>
                <div className='flex items-center mb-3'>
                  <input
                    id='filter-mobile-color-1'
                    name='color[]'
                    type='checkbox'
                    className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    defaultValue='beige'
                  />
                  <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                    Thưởng Thêm Astra
                  </label>
                </div>
                <div className='flex items-center mb-3'>
                  <input
                    id='filter-mobile-color-1'
                    name='color[]'
                    type='checkbox'
                    className='h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    defaultValue='beige'
                  />
                  <label htmlFor='filter-mobile-color-1' className='text-sm ml-3 min-w-0 flex-1'>
                    Thưởng Thêm Astra
                  </label>
                </div>
              </>
            </SeeMore>
          </div>
        </div>
      </div>
      <div>
        <div className='h-2 bg-[#f5f5fa]'></div>
        <div className='bg-[#f5f5fa] '>
          <Link to='' className='rounded-md bg-white block overflow-hidden'>
            <img
              src='https://salt.tikicdn.com/cache/280x280/ts/product/66/98/f5/3e89cff4b82546a78ddf8f6ee374916d.jpg'
              alt=''
            />
            <div className='p-4 text-center'>
              <div>Trading</div>
              <div className='text-base font-medium truncate'>
                Điện Thoại Oppo A54 (4GB/128GB) - Đen - Hàng Chính Hãng
              </div>
              <div className='flex justify-center items-center mt-1 text-gray-400'>
                <div>4.9</div>
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
                <div className='mx-1'>|</div>
                <div>Đã bán 13803</div>
              </div>
              <div className='text-red-600 font-medium flex justify-center items-center mt-5'>
                <div className='text-lg'>3.090.000 ₫</div>
                <div className='text-sm ml-2'>-59%</div>
              </div>
              <button
                type='button'
                className=' text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mt-2 w-full'
              >
                Xem ngay
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
