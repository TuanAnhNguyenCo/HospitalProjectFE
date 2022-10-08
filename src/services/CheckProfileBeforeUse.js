
import { useEffect } from "react"

import {  useSelector } from 'react-redux';
import { userProfile} from "../redux/selector"
import ProfileSetup from "../views/user/ProfileSetup"

const CheckProileBeforeUse = ({ children }) => {
    const profile = useSelector(userProfile)

    if (profile)
        return children
    else
        return <ProfileSetup/>
}

export default CheckProileBeforeUse;