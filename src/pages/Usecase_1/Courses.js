import React from 'react'
import { Table, Button, Container } from 'reactstrap'

export default function Courses() {
    return (
        <Container>
            <h1 className="text-center mb-5">LẬP DANH SÁCH KHÓA HỌC MỞ</h1>
            <h2 className="mt-5 text-center">Danh sách các khóa học</h2>
            <Table hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên khóa học</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Chương trình kỹ thuật viên</td>
                        <td><Button>Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Chương trình chuyên đề</td>
                        <td><Button color="danger">Đã mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Chương trình chứng chỉ A tin học</td>
                        <td><Button>Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Chương trình chứng chỉ B tin học</td>
                        <td><Button>Mở</Button></td>
                    </tr>
                    
                </tbody>
            </Table>
            <div className="history">
                <a href="/cHistory">Xem thống kê khóa học trước --</a>
            </div>
        </Container>
    )
}
