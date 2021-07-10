import React, { useState } from 'react'
import { Form, Label, FormGroup, Input, Container, Col, Row, Button } from 'reactstrap'

export default function Marks() {
    const [exam, setExam] = useState('1')

    const handleSubject = (e) => {
        setExam(e.target.value)
        console.log(e.target.value)
    }
    return (
        <Container>
            <h1 className="text-center mb-5">QUẢN LÝ ĐIỂM SINH VIÊN</h1>
            <Row inline="true">
                <Col md={6}>
                    <FormGroup>
                        <Label for="exam"><strong>Kì thi</strong></Label>
                        <Input type="select" name="exam" id="exam" onChange={handleSubject}>
                            <option value="1" >Môn học</option>
                            <option value="2">Chứng chỉ A</option>
                            <option value="3">Chứng chỉ B</option>
                            <option value="4">Cuối khóa</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <hr />
            <Form>
                <Row inline="true">
                    <Col md={6}>
                        <FormGroup>
                            <Label for="mssv"><strong>Mã số sinh viên</strong></Label>
                            <Input type="text" name="mssv" placeholder="1xxxxxx" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="monHoc"><strong>Môn học</strong></Label>
                            <Input type="select" name="monHoc" onChange={handleSubject}>
                                <option value="1" >Hệ thống thông tin doanh nghiệp</option>
                                <option value="2">Phân tích thiết kế hệ thống thông tin</option>
                                <option value="3">Hệ quản trị cơ sở dữ liệu</option>
                                <option value="4">Phân tích và quản lý yêu cầu phần mềm</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row inline="true">
                    <Col md={6}>
                        <FormGroup>
                            <Label for="ngayDK"><strong>Ngày đăng kí</strong></Label>
                            <Input type="select" name="ngayDK" onChange={handleSubject}>
                                <option value="22/03/2020" >22/03/2020</option>
                                <option value="23/03/2020">23/03/2020</option>
                                <option value="24/03/2020">24/03/2020</option>
                                <option value="25/03/2020">25/03/2020</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="ngaythi"><strong>Ngày thi</strong></Label>
                            <Input type="select" name="ngaythi" onChange={handleSubject}>
                                <option value="22/03/2020" >22/03/2020</option>
                                <option value="23/03/2020">23/03/2020</option>
                                <option value="24/03/2020">24/03/2020</option>
                                <option value="25/03/2020">25/03/2020</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="mt-3" color="warning">Tìm kiếm</Button>
            </Form>
            <h2 className="mt-3">Kết quả:</h2>
            <Col md={6}>
                <FormGroup>
                    <Label for="diemthi"><strong>ĐIỂM THI</strong></Label>
                    <Input type="text" name="mssv" placeholder="---" />
                    <Button className="mt-3" color="success">Cập nhật</Button>
                </FormGroup>
            </Col>

        </Container >
    )
}
