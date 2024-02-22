import React from 'react'
import { Route, NavLink, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Run from "../pages/Run"
import Edit from "../pages/Edit"
import Results from "../pages/Results"
import WalletConnection from '../components/wallet/WalletConnection'

export const NavBar = () => (
    <>
        <NavLink className='sjs-nav-button' to="/"><span>Live Surveys</span></NavLink>
        <NavLink className='sjs-nav-button' to="/about"><span>About ReSurveys</span></NavLink>
        <div className='sjs-nav-button'><WalletConnection /></div>

    </>
)

const NoMatch = () => (<><h1>404</h1></>)

const Content = (): React.ReactElement => (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/run/:id" element={<Run/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="/results/:id" element={<Results/>}></Route>
            <Route element={<NoMatch/>}></Route>
        </Routes>
    </>
)

export default Content