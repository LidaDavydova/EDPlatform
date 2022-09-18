import React, {useEffect, useState} from "react"
import { useHttp } from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"

export const AuthPage = () => {
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Auth Page</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div class="input-field">
                                <input placeholder="Введите email" id="email" type="text" name="email" onChange={changeHandler}/>
                                <label htmlfor="email">Email</label>
                            </div>
                            <div class="input-field">
                                <input placeholder="Введите пароль" id="password" type="password" name="password" onChange={changeHandler}/>
                                <label htmlfor="email">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-3" style={{marginRight: 10}} disabled={loading}>Войти</button>
                        <button className="btn yello darken-3" onClick={registerHandler} disabled={loading}>Рeгистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}