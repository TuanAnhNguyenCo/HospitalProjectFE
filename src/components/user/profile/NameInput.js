import { Row, FormGroup, Label, Col, Input } from "reactstrap"

const NameInput = (props) => {
    const { lastname, setLastname, fistname, setFirstname } = props.data

    const handleLastnameInput = (e) => {
        setLastname(e.target.value)
    }
    const handleFirstnameInput = (e) => {

        setFirstname(e.target.value)
    }


    return (
        <Row>
            <Col md={6}>
                <FormGroup>
                    <Label for="lastname" className="profile-lable">
                        Họ
                    </Label>
                    <Input
                        id="lastname"
                        placeholder="Nhập họ"
                        type="text"
                        value={lastname} maxLength={25}
                        onChange={(e) => handleLastnameInput(e)}
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="fistname" className="profile-lable">
                        Tên
                    </Label>
                    <Input
                        id="fistname"
                        placeholder="Nhập tên"
                        type="text"
                        value={fistname} maxLength={25}
                        onChange={(e) => handleFirstnameInput(e)}
                    />
                </FormGroup>
            </Col>
        </Row>
    )
}

export default NameInput