import { FormGroup, Label, Input, Form, Button, FormFeedback } from "reactstrap"
import "./loginPage.scss"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Register from "./Register";
import { ErrorFormMessage } from "../../utils/announce/ErrorMessage";


const api = process.env.REACT_APP_API


const LoginPage = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [err_message, setErrorMessage] = useState(false)

    const navigate = useNavigate()
    const error_message = "Tài khoản hoặc mật khẩu không chính xác"



    const handleUsernameInput = (e) => {
        if (username.length < 19)
            setUsername(e.target.value)
    }
    const handlePassowrdInput = (e) => {
        if (password.length < 19)
            setPassword(e.target.value)
    }
    const handleLoginForm = async (e) => {

        e.preventDefault()
        const response = await fetch(`${api}/login`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                username: username,
                password: password
            },

        });
        if (response.status === 200) {
            const data = await response.json()
            localStorage.setItem("hs_token", data['access_token'])
            localStorage.setItem("refresh_hstoken", data['refresh_token'])
            navigate(-1)
        } else {
            setPassword("")
            setErrorMessage(true)
        }


    }

    return (
        <Form className="login-context" onSubmit={handleLoginForm}>
            <FormGroup className="position-relative" floating>

                <Input
                    id="username"
                    placeholder="Tài khoản"
                    type="text"
                    size={30}
                    required
                    value={username}
                    onChange={(e) => handleUsernameInput(e)}
                />
                <Label for="username">
                    Tài khoản
                </Label>
            </FormGroup>
            <FormGroup className="position-relative" floating>

                <Input
                    id="password"
                    placeholder="Mật khẩu"
                    type="password"
                    size={30}
                    required
                    autoComplete="off"
                    value={password}
                    onChange={(e) => handlePassowrdInput(e)
                    }
                />
                <Label for="password">
                    Mật khẩu
                </Label>
            </FormGroup>
            {err_message === true &&
                <ErrorFormMessage error_message={error_message} />
            }

            <Button color="primary"
                block={true}
                size='lg'
                className="login-button"
                type="submit"
            >
                Đăng nhập
            </Button >
            <hr className="mt-4" />
            <Register />
        </Form>
    )
}

export default LoginPage