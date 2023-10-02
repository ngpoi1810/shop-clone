import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
export default function ProductList() {
  return (
    <div className='bg-[#f5f5fa] '>
      <div className='container m-auto'>
        <div className='grid grid-cols-6'>
          <AsideFilter />
          <SortProductList />
        </div>
      </div>
    </div>
  )
}
