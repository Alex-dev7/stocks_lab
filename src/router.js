import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import {stockLoader} from './loaders'
import Stock from './pages/Stock'





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>

            <Route path="/" element={<Home/>} />
            <Route path='/stocks' element={<Dashboard/>} />
            <Route path='/stocks/:symbol' element={<Stock/>} loader={stockLoader}  />
            <Route path='/about' element={<About/>} />
            
        </Route>
    )
)

export default router

// If a user visits /stocks or clicks "Home" in the navigation bar, they should be directed to a dashboard page. This page should list all of the stocks that the user is tracking, specifically their nameand symbol. These stocks should be pulled from stock-data.js.