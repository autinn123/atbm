import React from 'react'
import { Table, Button } from 'reactstrap'

export default function OpenList() {
    return (
        <>
        <h2 className="mt-5 text-center">Danh sách môn có thể mở</h2>
            <Table hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên môn học</th>
                        <th>Sô tiết lý thuyết</th>
                        <th>Số tiết thực hành</th>
                        <th>Học phí</th>
                        <th>Loại môn học</th>
                        <th>Nhóm môn học</th>
                        <th>Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Phân tích thiết kế HTTT</td>
                        <td>48</td>
                        <td>30</td>
                        <td>1400000</td>
                        <td>Loại</td>
                        <td>CNTT</td>
                        <td><Button>Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>AT&BM trong hệ thông thông tin</td>
                        <td>48</td>
                        <td>30</td>
                        <td>1400000</td>
                        <td>Loại</td>
                        <td>CNTT</td>
                        <td><Button>Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Hê thống thông tin doanh nghiệp</td>
                        <td>48</td>
                        <td>30</td>
                        <td>1400000</td>
                        <td>Loại</td>
                        <td>CNTT</td>
                        <td><Button>Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Phân tích và quản lý yêu cầu phần mềm</td>
                        <td>48</td>
                        <td>30</td>
                        <td>1400000</td>
                        <td>Loại</td>
                        <td>CNTT</td>
                        <td><Button>Mở</Button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
