import { FormGroup, Label, Input, Form, FormFeedback, FormText, Button } from "reactstrap"
import { useState } from "react"
import { validUsername } from "../../regex/validForm"
import './registerPage.scss'
import { ErrorFormMessage, SuccessFormMessage } from "../../utils/announce/ErrorMessage"

const api = process.env.REACT_APP_API

const RegisterPage = (props) => {
    const [usernameToggle, setUsernameToggle] = useState(false)
    const [passwordToggle, setPasswordToggle] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [err_message, setErrorMessage] = useState(false)
    const [success_message, setSuccessMessage] = useState(false)
    const [disabledInput, setDisabledInput] = useState(false)
    const toggle = props.toggle

    const success_mess = "Đăng ký thành công"
    const error_message = "Tài đã tồn tại trong hệ thống"

    const handleUsernameInput = (e) => {

        if (validUsername.test(e.target.value) || e.target.value.length < 8 || e.target.value.length > 50)
            setUsernameToggle(false)
        else {
            setUsernameToggle(true)
        }

        setUsername(e.target.value)


    }
    const handlePassowrdInput = (e) => {
        if (validUsername.test(e.target.value) || e.target.value.length < 8 || e.target.value.length > 50)
            setPasswordToggle(false)
        else {
            setPasswordToggle(true)
        }
        setPassword(e.target.value)
    }


    const handleRegisterForm = async (e) => {
        e.preventDefault();
        
        if (usernameToggle && passwordToggle) {
            const res = await fetch(`${api}/user/save`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            if (res.status === 200) {

                setDisabledInput(true)
                setSuccessMessage(true)
                setErrorMessage(false)
                setTimeout(() => toggle(), 700)
            } else {
                setSuccessMessage(false)
                setErrorMessage(true)
            }

        }
    }




    return (
        <Form className="register-form" onSubmit={handleRegisterForm}>
            <FormGroup className="position-relative">
                <Label for="username">
                    Tài khoản
                </Label>
                <Input valid={usernameToggle && username.length !== 0} invalid={!usernameToggle && username.length !== 0}
                    value={username} onChange={(e) => handleUsernameInput(e)} disabled={disabledInput} 
                    required
                    autoComplete="off"
                    />
                <FormFeedback
                    tooltip
                    className="mt-1"
                    invalid={(!usernameToggle).toString()}

                    valid={usernameToggle} >
                    {(usernameToggle === false) ? 'Tài khoản phải chứa từ 8 đến 50 kí tự, chỉ gôm chữ cái a-z, A-Z và 0-9'
                        :
                        "Bạn đang làm rất tốt"
                    }
                </FormFeedback>
            </FormGroup>

            <FormGroup className="position-relative mt-4 pt-2">
                <Label for="password">
                    Mật khẩu
                </Label>
                <Input valid={passwordToggle && password.length !== 0} invalid={!passwordToggle && password.length !== 0}
                    value={password} onChange={(e) => handlePassowrdInput(e)} type="password" disabled={disabledInput} />
                <FormFeedback
                    tooltip
                    className="mt-1"
                    invalid={(!passwordToggle).toString()}
                    valid={passwordToggle}
                    required
                    autoComplete="off"

                >
                    {(passwordToggle === false) ? 'Mật khẩu phải chứa từ 8 đến 50 kí tự, chỉ gôm chữ cái a-z, A-Z và 0-9'
                        :
                        "Bạn đang làm rất tốt"
                    }
                </FormFeedback>
            </FormGroup>
            <div className="mt-4 pt-3">
                <FormText >
                    Nếu có lỗi bạn không thể nào đăng ký được
                </FormText>
            </div>
            {err_message === true &&
                <ErrorFormMessage error_message={error_message} />
            }
            {success_message === true &&
                <SuccessFormMessage success_mess={success_mess} />
            }
            <hr className="mb-4" />

            <Button color="primary" block={true} size="lg"
                className="register-button" type="submit"
            >
                Đăng ký
            </Button>


        </Form>
    )
}

export default RegisterPage