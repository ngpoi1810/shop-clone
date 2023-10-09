import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
export default function ProductList() {
  return (
    <div className='bg-[#f5f5fa] '>
      <div className='w-[1270px] px-[15px] m-auto'>
        <div className='grid grid-cols-6 py-14'>
          <AsideFilter />
          <SortProductList />
        </div>
      </div>
    </div>
  )
}
