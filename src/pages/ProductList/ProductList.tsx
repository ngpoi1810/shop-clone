import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import Product from './Product'
import { useQuery } from '@tanstack/react-query'
import useQueryParams from 'src/hooks/useQueryParams'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import { useState } from 'react'

export default function ProductList() {
  const queryParams = useQueryParams()
  const [page, setPage] = useState(1)
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProduct(queryParams)
    }
  })
  console.log(data)

  return (
    <div className='bg-[#f5f5fa] '>
      <div className='w-[1270px] px-[15px] m-auto'>
        <div className='grid grid-cols-6 py-14'>
          <AsideFilter />
          <div className='col-span-5 '>
            <SortProductList />
            <div className='grid grid-cols-5 gap-2'>
              {data &&
                data.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              <div className='col-span-5 mx-auto mt-8'>
                <Pagination page={page} setPage={setPage} pageSize={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
