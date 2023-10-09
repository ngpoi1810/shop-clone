import { useState } from 'react'
import { Link } from 'react-router-dom'
interface Props {
  initialExpanded?: boolean
  children?: React.ReactNode
}
export default function SeeMore({ initialExpanded = false, children }: Props) {
  const [expanded, setExpanded] = useState(initialExpanded)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }
  return (
    <>
      {expanded && children}
      <Link onClick={toggleExpand} to='' className='flex items-center text-sky-600 text-xs'>
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
