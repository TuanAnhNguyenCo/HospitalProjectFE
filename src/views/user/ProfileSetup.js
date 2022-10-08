import NameInput from "../../components/user/profile/NameInput"
import InfoInput1 from "../../components/user/profile/InfoInput1"
import { Form } from "reactstrap"
import './profileSetup.scss'
import { useState } from "react"

const ProfileSetup = () => {
    const [lastname, setLastname] = useState('')
    const [fistname, setFirstname] = useState('')
    const [citizen_identication, setCitizen_identication] = useState('')
    const [date_of_birth, setDate_of_birth] = useState('')
    const [sex, setSex] = useState('1')

    return (
        <div className="profile-container">
            <Form className="profileForm">
                <NameInput data={{
                    lastname: lastname, setLastname: setLastname,
                    fistname: fistname, setFirstname: setFirstname
                }} />
                <InfoInput1 data={{
                    citizen_identication: citizen_identication, setCitizen_identication: setCitizen_identication,
                    setDate_of_birth: setDate_of_birth,
                    setSex: setSex
                }} />
            </Form>
        </div>
    )
}

export default ProfileSetup