import React from 'react'
import { Container, Row, Col, Button, Table, Input } from 'reactstrap'

export default function History() {
    return (
        <Container>
            <h1 className="text-center">XEM THỐNG KÊ KHÓA HỌC</h1>
            <Row inline="true">
                <Col md={5}>
                    <label>Từ</label>
                    <Input
                        type="date"
                        name="tuNgay"
                        placeholder="date placeholder"
                    />
                </Col>
                <Col md={5}>
                    <label>Đến</label>
                    <Input
                        type="date"
                        name="denNgay"
                        placeholder="date placeholder"
                    />
                </Col>
                <Col md={2}>
                    <p></p>
                    <Button color="success">Xem thống kê</Button>
                </Col>
            </Row>
            <hr />
            <Table bordered>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã khóa học</th>
                        <th>Tên khóa học</th>
                        <th>Số học viên đã đăng kí</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>001ABC</td>
                        <td>Chương trình kỹ thuật viên</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>001ABG</td>
                        <td>Chương trình chuyên đề</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>101ABC</td>
                        <td>Chương trình chứng chỉ A tin học</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>A01ABC</td>
                        <td>Chương trình chứng chỉ B tin học</td>
                        <td>60</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}
