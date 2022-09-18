import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage"
import { CreatePage } from "./pages/CreatePage"
import { DetailPage } from "./pages/DetailPage"
import { LinksPage } from "./pages/LinksPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { AddPostPage } from "./pages/AddPostPage"
import { checkIsAuth, logout } from "./redux/features/auth/authSlice"
import { toast } from "react-toastify"


export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LinksPage/>}/>
            <Route path="/posts" element={<AddPostPage/>}/>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}
