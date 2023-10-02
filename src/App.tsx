import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'

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
