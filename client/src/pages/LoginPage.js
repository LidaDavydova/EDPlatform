import React, { useState, useEffect } from "react"
import 'materialize-css'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice"
import { toast } from "react-toastify"

export const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {status} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(checkIsAuth)

    useEffect(() => {
        if (status) {
            toast(status)
        }
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handlerSubmit = () => {
        try {
            dispatch(loginUser({ username, password }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="conteiner">
            <div className="row">
                <form onSubmit={e => e.preventDefault()}
                className="col-4">
                    <h1>Authorization</h1>
                    <label>
                        Username:
                        <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"/>
                    </label>
                    <label>
                        Password:
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"/>
                    </label>
                </form>
            </div>
            
            <div className="row">
                <div className="col-3">
                    <button 
                    type="submit"
                    onClick={handlerSubmit}
                    >
                        LogIn
                    </button>
                </div>
                <Link to="/register">Not Account ?</Link>
            </div>
        </div>
    )
}