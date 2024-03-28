import { Link, createSearchParams } from 'react-router-dom'
import SeeMore from 'src/components/SeeMore'
import { QueryConfig } from '../ProductList'
import { Category } from 'src/types/category.type'
import classNames from 'classnames'
import path from 'src/constants/path'
import InputNumber from 'src/components/inputNumber'
import { useForm, Controller } from 'react-hook-form'
import { schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}
type FormData = {
  price_min: string
  price_max: string
}

const priceSchema = schema.pick(['price_max', 'price_min'])

export default function AsideFilter({ queryConfig, categories }: Props) {
  const { category } = queryConfig
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_max: '',
      price_min: ''
    },
    resolver: yupResolver(priceSchema)
  })
  const valueForm = watch()
  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='col-span-1  w-[200px] shrink-0'>
      <div className='bg-white'>
        <div className='px-4 pb-4'>
          <h4 className='text-sm font-medium py-3'>Danh Mục Sản Phẩm</h4>
          <div>
            {categories.map((categoryItem) => {
              const isActive = category === categoryItem._id
              return (
                <Link
                  key={categoryItem._id}
                  className={classNames('flex  pb-3 text-sm', { 'font-medium': isActive })}
                  to={{
                    pathname: path.home,
                    search: createSearchParams({
                      ...queryConfig,
                      category: categoryItem._id
                    }).toString()
                  }}
                >
                  {categoryItem.name}
                </Link>
              )
            })}
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
          <h4 className='text-sm font-medium py-3'>Chọn khoảng giá</h4>
          <form onSubmit={onSubmit}>
            <div className='flex items-center gap-1'>
              <Controller
                control={control}
                name='price_min'
                render={({ field }) => {
                  return (
                    <InputNumber
                      placeholder='đ Từ'
                      type='text'
                      id='default-input'
                      onChange={field.onChange}
                      value={field.value}
                    />
                  )
                }}
              />

              <span>-</span>
              <Controller
                control={control}
                name='price_max'
                render={({ field }) => {
                  return (
                    <InputNumber
                      placeholder='đ Đến'
                      type='text'
                      id='default-input'
                      onChange={field.onChange}
                      value={field.value}
                    />
                  )
                }}
              />
            </div>
            <button
              type='button'
              className=' text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mt-2 w-full'
            >
              Áp dụng
            </button>
          </form>
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
          <div className=' '>
            <Link to='' className='rounded-md block overflow-hidden'>
              <img
                src='https://salt.tikicdn.com/cache/280x280/ts/product/66/98/f5/3e89cff4b82546a78ddf8f6ee374916d.jpg'
                alt=''
              />
              <div className='p-4 text-center '>
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
    </div>
  )
}
