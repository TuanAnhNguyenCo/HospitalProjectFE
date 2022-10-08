import { Row, FormGroup, Label, Col, Input } from "reactstrap"
import Select from 'react-select';
const InfoInput1 = (props) => {

    const options = [
        { value: '1', label: 'Nam' },
        { value: '2', label: 'Nữ' },
        { value: '3', label: 'Không xác định' }
    ];
    const { citizen_identication, setCitizen_identication,
        setDate_of_birth,setSex
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

    return (
        <Row>
            <Col md={6}>
                <FormGroup>
                    <Label for="citizen_identication" className="profile-lable">
                        Số căn cước công dân
                    </Label>
                    <Input
                        id="citizen_identication"
                        onChange={handleCitizenIdentication}
                        value={citizen_identication}
                        maxLength={12}
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
                        />
                </FormGroup>
            </Col>
        </Row>
    )
}

export default InfoInput1