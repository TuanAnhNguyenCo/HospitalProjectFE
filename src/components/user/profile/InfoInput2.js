import { Row, FormGroup, Label, Col, Input } from "reactstrap"

const InfoInput2 = (props) => {
    const { email, setEmail,
        job, setJob,
        ethnic, setEthnic
    } = props.data

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleJob = (e) => {
        setJob(e.target.value)
    }
    const handleEthnic = (e) => {
        setEthnic(e.target.value)
    }
    return (
        <Row className="mt-2">
            <Col md={6}>
                <FormGroup>
                    <Label for="email" className="profile-lable">
                        Email
                    </Label>
                    <Input
                        id="email"
                        placeholder="Nhập email"
                        type="email"
                        value={email}
                        maxLength={50}
                        onChange = {handleEmail}
                        required
                        autoComplete="off"
                    />
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="job" className="profile-lable">
                        Công việc
                    </Label>
                    <Input
                        id="job"
                        placeholder="Nhập tên công việc"
                        type="text"
                        value={job}
                        maxLength={20}
                        onChange={handleJob}
                        required
                        autoComplete="off"
                    />
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="ethnic" className="profile-lable">
                        Dân tộc
                    </Label>
                    <Input
                        id="ethnic"
                        placeholder="Nhập tên dân tộc"
                        type="text"
                        value={ethnic}
                        maxLength={20}
                        onChange={handleEthnic}
                        required
                        autoComplete="off"
                    />
                </FormGroup>
            </Col>
        </Row>
    )
}

export default InfoInput2