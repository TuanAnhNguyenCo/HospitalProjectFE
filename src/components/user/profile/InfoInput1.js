import { Row, FormGroup, Label, Col, Input } from "reactstrap"
import Select from 'react-select';
import { isText } from "../../../regex/validForm";
const InfoInput1 = (props) => {

    const options = [
        { value: '1', label: 'Nam' },
        { value: '2', label: 'Nữ' },
        { value: '3', label: 'Không xác định' }
    ];
    const { citizen_identication, setCitizen_identication,
        setDate_of_birth, setSex,
        phoneNumber, setPhoneNumber,
        address, setAddress
    } = props.data

    const handleSexSelect = (option) => {
        setSex(option.value)
    }
    const handleCitizenIdentication = (e) => {
        setCitizen_identication(e.target.value)
    }
    const handleDateOfBirth = (e) => {
        setDate_of_birth(e.target.value)
    }
    const handlePhoneNumber = (e)=>{
        if (!isText.test(e.target.value)) // Nếu là số thì cho nhập
            setPhoneNumber(e.target.value)
    }
    const handleAddress = (e)=>{
        setAddress(e.target.value)
    }

    return (
        <>

            <Row className="mt-2">
                <Col md={6}>
                    <FormGroup>
                        <Label for="citizen_identication" className="profile-lable">
                            Số căn cước công dân
                        </Label>
                        <Input
                            id="citizen_identication"
                            placeholder="Nhập số căn cước công dân"
                            onChange={handleCitizenIdentication}
                            value={citizen_identication}
                            maxLength={12}
                            required
                            autoComplete="off"
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="date_of_birth" className="profile-lable">
                            Ngày tháng năm sinh
                        </Label>
                        <Input
                            id="date_of_birth"
                            type="date"
                            onChange={handleDateOfBirth}
                            required
                            autoComplete="off"
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="sex" className="profile-lable">
                            Giới tính
                        </Label>
                        <Select
                            id="sex"
                            options={options}
                            onChange={handleSexSelect}
                            placeholder='Chọn'
                            required
                            autoComplete="off"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col md={8}>
                    <FormGroup>
                        <Label for="address" className="profile-lable">
                            Địa chỉ nhà ở
                        </Label>
                        <Input
                            id="address"
                            placeholder="Nhập địa chỉ nhà ở"
                            maxLength={1000}
                            type='text'
                            value={address}
                            onChange={handleAddress}
                            required
                            autoComplete="off"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="phoneNumber" className="profile-lable">
                            Số điện thoại
                        </Label>
                        <Input
                            id="phoneNumber"
                            type="text"
                            placeholder="Nhập số điện thoại"
                            maxLength={10}
                            value = {phoneNumber}
                            onChange = {handlePhoneNumber}
                            required
                            autoComplete="off"
                        />
                    </FormGroup>
                </Col>
            </Row>
        </>
    )
}

export default InfoInput1