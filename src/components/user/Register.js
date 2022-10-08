import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegisterPage from './RegisterPage';
import { useState } from 'react';
const Register = (args) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button className='register-button' size='lg' onClick={toggle}>
                Tạo tài khoản mới
            </Button>
            <Modal isOpen={modal} toggle={toggle}  size='lg'>
                <ModalHeader toggle={toggle}>Đăng ký</ModalHeader>
                <ModalBody>
                   
                    <RegisterPage toggle = {toggle}/>
                    
                </ModalBody>
            </Modal>
        </div>
    )
}
export default Register