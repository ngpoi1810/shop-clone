import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'

function App() {
  const routeElements = useRouteElements()
  return (
    <>
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
