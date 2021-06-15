import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './SignUp.css'

export default function SignUp() {
    const [hoten, setHoten] = useState('');
    const [sdt, setSdt] = useState('');
    const [chuyennganh, setChuyennganh] = useState('');
    const [ngaysinh, setNgaysinh] = useState('');
    const [gioitinh, setGioitinh] = useState('Nam');
    const [diachi, setDiachi] = useState('');

    const handleNameChange = (e) => setHoten(e.target.value)
    const handleNumberChange = (e) => setSdt(e.target.value)
    const handleSubjectChange = (e) => setChuyennganh(e.target.value)
    const handleDateChange = (e) => setNgaysinh(e.target.value)
    const handleSexChange = (e) => setGioitinh(e.target.value)
    const handleAddressChange = (e) => setDiachi(e.target.value)

    console.log(gioitinh)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            hoten: hoten,
            sdt: sdt,
            chuyennganh: chuyennganh,
            ngaysinh: ngaysinh,
            gioitinh: gioitinh,
            diachi: diachi
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://60c2d1e2917002001739d8e7.mockapi.io/hocvien/students', requestOptions)
            .then(response => console.log(response))

    }


    return (
        <Container className="container">
            <h1 className='text-center mb-5'>ĐĂNG KÍ THÔNG TIN HỌC VIÊN</h1>
            <Form onSubmit={handleSubmit}>
                <Row inline="true">
                    <Col md={8} >
                        <FormGroup>
                            <Label for="hoTen"><strong>Họ và tên</strong></Label>
                            <Input type="text" name="hoTen" id="hoTen" placeholder="Tên của bạn..." onChange={handleNameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="sdt"><strong>Số điện thoại</strong></Label>
                            <Input type="text" name="sdt" id="sdt" placeholder="Số điện thoại" onChange={handleNumberChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email"><strong>Email</strong></Label>
                            <Input type="text" name="email" placeholder="example@gmail.com" onChange={handleSubjectChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ngaySinh"><strong>Ngày Sinh</strong></Label>
                            <Input
                                type="date"
                                name="ngaySinh"
                                id="ngaySinh"
                                placeholder="date placeholder"
                                onChange={handleDateChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="gioiTinh"><strong>Giới tính</strong></Label>
                            <Input type="select" name="gioiTinh" id="gioiTinh" onChange={handleSexChange}>
                                <option value="Name" >Nam</option>
                                <option value="Nu">Nữ</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="diaChi"><strong>Địa chỉ</strong></Label>
                            <Input type="text" name="diaChi" id="diaChi" placeholder="127 Nguyễn Tất Thành" onChange={handleAddressChange} />
                        </FormGroup>
                        <Button className="mt-3" color="primary">Đăng kí</Button>
                    </Col>
                    <Col md={4}>
                        <div className="mt-5">
                            <p><strong>Vui lòng điền đầy đủ thông tin bên cạnh 
                                để ghi danh của mình vào hệ thống, 
                                hệ thống sau đó sẽ gửi cho bạn mật khẩu,
                                 vui lòng giữ mật khẩu cho riêng mình. 
                                 Mật khẩu này bạn dùng để đăng nhập vào 
                                 hệ thống cùng với email bạn đã cung cấp</strong></p>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
