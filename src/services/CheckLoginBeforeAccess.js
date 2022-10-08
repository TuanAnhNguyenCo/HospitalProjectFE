
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchGetUser } from "../views/user/usersSlice";

const CheckLoginBeforeAccess = ({ children }) => {
    const [loginStatus, setLoginStatus] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    useEffect(() => {
        dispatch(fetchGetUser())
            .then(unwrapResult)
            .then(([status, data]) => {
                if (status === false)
                    navigate('/login')
                else
                    setLoginStatus(true)
            })
    },[])

    if (loginStatus === true)
        return children
}

export default CheckLoginBeforeAccess;