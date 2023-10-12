import classNames from 'classnames'
import { Link } from 'react-router-dom'
interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}
const RANGE = 2
export default function Pagination({ page, setPage, pageSize }: Props) {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <li key={index}>
            <Link
              to='#'
              className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
            >
              ...
            </Link>
          </li>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <li key={index}>
            <Link
              to='#'
              className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
            >
              ...
            </Link>
          </li>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotAfter(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotBefore(index)
          }
        }
        return (
          <li key={index}>
            <Link
              to='#'
              className={classNames(
                'flex items-center justify-center px-4 h-10 leading-tight border  hover:bg-gray-100 hover:text-gray-700 ',
                {
                  'text-blue-600 border-blue-300 bg-blue-50': pageNumber === page,
                  'text-gray-500 bg-white  border-gray-300': pageNumber !== page
                }
              )}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </Link>
          </li>
        )
      })
  }
  return (
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
        {renderPagination()}
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
  )
}
