import React from 'react'
import { Table,  Container, Col, Input, Button, Row } from 'reactstrap'

export default function HistoryListTM() {
    return (
        <Container>
            <h1 className="text-center">THỐNG KÊ ĐĂNG KÍ CHUYÊN ĐỀ</h1>
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
                        <th>Chuyên đề</th>
                        <th>Số học viên</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Chuyên đề hệ quản trị CSDL nâng cao</td>
                        <td>148</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Chuyên đề nghiên cứu khoa học</td>
                        <td>78</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Chuyên đề hệ thống thông tin nâng cao</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Chuyên đề phân tích dữ liệu</td>
                        <td>89</td>
                    </tr>

                </tbody>
            </Table>
        </Container>
    )
}
