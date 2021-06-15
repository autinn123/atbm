import React, { useState } from 'react'
import { Form, Label, FormGroup, Input, Container, Col, Row, Button } from 'reactstrap'

export default function Marks() {
    const [subject, setSubject] = useState('1')

    const handleSubject = (e) => {
        setSubject(e.target.value)
        console.log(e.target.value)
    }
    return (
        <Container>
            <h1 className="text-center mb-5">Quản lý điểm sinh viên</h1>
            <Form>
                <Row inline="true">

                    <Col md={6}>
                        <FormGroup>
                            <Label for="gioiTinh"><strong>Kì thi</strong></Label>
                            <Input type="select" name="monhoc" id="monhoc" onChange={handleSubject}>
                                <option value="1" >Giữa kì 2018-2019</option>
                                <option value="2">Cuối kì 2018-2019</option>
                                <option value="3">Cuối kì 2019-2020</option>
                                <option value="4">Cuối kì 2020-2021</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="hoTen"><strong>Mã số sinh viên</strong></Label>
                            <Input type="text" name="hoTen" id="hoTen" placeholder="1xxxxxx" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={6}>
                        <Button >Tìm kiếm</Button>
                    </Col>
                    <Col md={6}>
                        <Label for="diem"><strong>Điểm thi</strong></Label>
                        <Input type="text" name="diem" />
                        <Button className="mt-2" color="success">Cập nhật</Button>
                    </Col>

                </Row>
            </Form>
        </Container >
    )
}
