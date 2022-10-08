import NameInput from "../../components/user/profile/NameInput"
import InfoInput1 from "../../components/user/profile/InfoInput1"
import InfoInput2 from "../../components/user/profile/InfoInput2"
import { Form, Button } from "reactstrap"
import './profileSetup.scss'
import { useState } from "react"

const ProfileSetup = () => {
    const [lastname, setLastname] = useState('')
    const [fistname, setFirstname] = useState('')
    const [citizen_identication, setCitizen_identication] = useState('')
    const [date_of_birth, setDate_of_birth] = useState('')
    const [sex, setSex] = useState('1')
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState('')
    const [job, setJob] = useState("")
    const [ethnic, setEthnic] = useState("")

    const handleSaveProfile = (e) => {
        e.preventDefault();
    }


    return (
        <div className="profile-container">
            <Form className="profileForm" onSubmit={handleSaveProfile}>
                <h1>Đăng ký hồ sơ cá nhân</h1>
                <NameInput data={{
                    lastname: lastname, setLastname: setLastname,
                    fistname: fistname, setFirstname: setFirstname
                }} />

                <InfoInput1 data={{
                    citizen_identication: citizen_identication, setCitizen_identication: setCitizen_identication,
                    setDate_of_birth: setDate_of_birth,
                    setSex: setSex,
                    phoneNumber: phoneNumber, setPhoneNumber: setPhoneNumber,
                    address: address, setAddress: setAddress
                }} />

                <InfoInput2 data={{
                    email: email, setEmail: setEmail,
                    job: job, setJob: setJob,
                    ethnic: ethnic, setEthnic: setEthnic
                }} />
                <Button color="primary" size="lg" block={true} className="mt-2"
                    type='submit'
                >
                    Lưu hồ sơ
                </Button>
            </Form>
        </div>
    )
}

export default ProfileSetup