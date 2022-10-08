import { Alert } from "reactstrap"

export const ErrorFormMessage = (props)=>{
    const error_message = props.error_message 
    
    
    return (
        <Alert color="danger">
            {error_message}
        </Alert>
    )

}

export const SuccessFormMessage = (props) => {
    const success_mess = props.success_mess


    return (
        <Alert color="success">
            {success_mess}
        </Alert>
    )

}