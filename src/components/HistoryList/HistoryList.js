import React from 'react'
import { Table,  Container, Col, Input, Button, Row } from 'reactstrap'

export default function HistoryList() {
    return (
        <Container>
            <h1 className="text-center">THỐNG KÊ ĐĂNG KÍ MÔN HỌC</h1>
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
                        <th>Tên môn học</th>
                        <th>Số học viên</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Phân tích thiết kế HTTT</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>AT&BM trong hệ thông thông tin</td>
                        <td>148</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Hê thống thông tin doanh nghiệp</td>
                        <td>88</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Phân tích và quản lý yêu cầu phần mềm</td>
                        <td>48</td>
                    </tr>

                </tbody>
            </Table>
        </Container>
    )
}
