import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='' className='bg-white block rounded overflow-hidden hover:shadow-lg hover:transition-shadow'>
      <div>
        <img src='/public/images/p-1.webp' alt='' />
      </div>
      <div>
        <div className='py-1 px-2'>
          <div className='flex items-center gap-1'>
            <div className='shrink-0 w-[89px] h-[20px]'>
              <img className='w-full h-full' src='/public/images/chinh-hang.png' alt='' />
            </div>
            <p className='uppercase text-[10px] rounded-xl bg-gray-400 font-bold py-[2px] px-1'>Tài trợ</p>
          </div>
          <div className='h-[72px]'>
            <h3 className='text-xs mt-1'>Điện thoại Samsung Galaxy A34 5G (8GB/128GB) - Hàng chính hãng</h3>
            <div className='flex gap-2 mt-1'>
              <div className='flex items-center space-x-1'>
                <svg
                  className='w-3 h-3 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-3 h-3 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-3 h-3 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-3 h-3 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-3 h-3 text-gray-300 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
              </div>
              <p className='text-gray-400 text-[10px] border-l-[1px] pl-2'>Đã bán 61</p>
            </div>
          </div>
          <div className='flex gap-2 items-center mt-1 border-b-[1px] pb-3'>
            <div className='font-medium'>
              6.850.000<sup>₫</sup>
            </div>
            <p className='uppercase text-[10px] rounded-xl bg-gray-400 font-bold py-[2px] px-1'>-19%</p>
          </div>
          <div className='pt-1'>
            <span className='text-xs text-gray-400'>Giao siêu tốc 2h</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
