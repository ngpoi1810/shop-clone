import React, { useState } from 'react'

export default function SeeMore(initialExpanded: boolean) {
  const [expanded, setExpanded] = useState(initialExpanded)
  const toggleExpand = () => {
    setExpanded(!expanded)
  }
  return (
    <>
      {expanded && (
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
              Trả Góp 0%
            </label>
          </div>
        </>
      )}
      <Link onClick={toggleExpand} to='' className='flex items-center text-sky-600'>
        {expanded ? (
          <>
            Thu gọn
            <svg
              className='ml-1'
              stroke='currentColor'
              fill='currentColor'
              strokeWidth={0}
              viewBox='0 0 512 512'
              color='#0B74E5'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              style={{ color: 'rgb(11, 116, 229)' }}
            >
              <path d='M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z' />
            </svg>
          </>
        ) : (
          <>
            Xem thêm
            <svg
              className='ml-1'
              stroke='currentColor'
              fill='currentColor'
              strokeWidth={0}
              viewBox='0 0 512 512'
              color='#0B74E5'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              style={{ color: 'rgb(11, 116, 229)' }}
            >
              <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z' />
            </svg>
          </>
        )}
      </Link>
    </>
  )
}
