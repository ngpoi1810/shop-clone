import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating'
import { Product as ProductType } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from 'src/utils/utils'

interface Props {
  product: ProductType
}
export default function Product({ product }: Props) {
  return (
    <Link to='' className='bg-white block rounded overflow-hidden hover:shadow-lg hover:transition-shadow'>
      <div className='w-full relative pt-[100%]'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <img className='w-full h-full' src={product.image} alt={product.name} title={product.name} />
        </div>
      </div>
      <div>
        <div className='py-1 px-2'>
          <div className='flex items-center gap-1'>
            <div className='shrink-0 w-[89px] h-[20px]'>
              <img className='w-full h-full' src='/images/chinh-hang.png' alt='' />
            </div>
            <p className='uppercase text-[10px] rounded-xl bg-gray-400 font-bold py-[2px] px-1'>Tài trợ</p>
          </div>
          <div className='h-[72px]'>
            <h3 className='text-xs mt-1 line-clamp-3' title={product.name}>
              {product.name}
            </h3>
            <div className='flex gap-2 mt-1 items-center'>
              <ProductRating rating={product.rating} />
              <p className='text-gray-400 text-[10px] border-l-[1px] pl-2'>
                Đã bán {formatNumberToSocialStyle(product.sold)}
              </p>
            </div>
          </div>
          <div className='flex gap-2 items-center mt-1 border-b-[1px] pb-3'>
            <div className='font-medium'>
              {formatCurrency(product.price)}
              <sup>₫</sup>
            </div>
            <p className='uppercase text-[10px] rounded-xl bg-gray-400 font-bold py-[2px] px-1 line-through'>
              {formatCurrency(product.price_before_discount)}
              <sup>₫</sup>
            </p>
          </div>
          <div className='pt-1'>
            <span className='text-xs text-gray-400'>Giao siêu tốc 2h</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
