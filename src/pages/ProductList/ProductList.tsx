import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import Product from './Product'
import { useQuery } from '@tanstack/react-query'
import useQueryParams from 'src/hooks/useQueryParams'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import { omitBy, isUndefined } from 'lodash'
import { ProductListConfig } from 'src/types/product.type'
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function ProductList() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '10',
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter
    },
    isUndefined
  )

  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProduct(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })

  return (
    <div className='bg-[#f5f5fa] '>
      <div className='w-[1270px] px-[15px] m-auto'>
        <div className='grid grid-cols-6 py-14'>
          <AsideFilter />
          <div className='col-span-5 '>
            {data && (
              <>
                <SortProductList queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
                <div className='grid grid-cols-5 gap-2'>
                  {data.data.data.products.map((product) => (
                    <div className='col-span-1' key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
                  <div className='col-span-5 mx-auto mt-8'>
                    <Pagination queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
