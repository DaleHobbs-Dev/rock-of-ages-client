import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { RockForm } from "./RockForm.jsx"
import { RockList } from "./RockList.jsx"
import { Register } from '../pages/Register.jsx'
import { getRocks, getMyRocks } from '../services'


export const ApplicationViews = () => {
    const [rocksState, setRocksState] = useState([])
    const [myRocksState, setMyRocksState] = useState([])

    const fetchRocksFromAPI = async () => {
        const rocks = await getRocks()
        setRocksState(rocks)
    }

    const fetchMyRocksFromAPI = async () => {
        const rocks = await getMyRocks()
        setMyRocksState(rocks)
    }

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/allrocks" element={<RockList rocks={rocksState} fetchRocks={fetchRocksFromAPI} />} />
                <Route path="/create" element={<RockForm fetchRocks={fetchRocksFromAPI} />} />
                <Route path="/mine" element={<RockList rocks={myRocksState} fetchRocks={fetchMyRocksFromAPI} />} />
            </Route>
        </Routes>
    </BrowserRouter>
}