import { Link } from 'react-router-dom'

export default function AsideFilter() {
  return (
    <div className='col-span-1 bg-white w-[200px]'>
      <div className='px-4'>
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
          <Link className='flex text-sm pb-3' to='#'>
            Phụ kiện giày nam
          </Link>
        </div>
      </div>
      <div className='px-4 border-t-[1px]'>
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
            <div className='flex items-center mb-3'>
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
      <div className='px-4 pb-3 border-t-[1px]'>
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
      <div className='px-4 border-t-[1px]'>
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
      </div>
    </div>
  )
}
