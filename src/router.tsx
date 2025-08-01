import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './ui/pages/Home'
import NotFound from './ui/pages/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
