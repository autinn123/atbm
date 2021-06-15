import React from 'react'
import { Table, Button } from 'reactstrap'

export default function OpenListTM() {
    return (
        <>
        <h2 className="mt-5 text-center">Danh sách chuyên đề có thể mở</h2>
        <Table hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã chuyên đề</th>
                        <th>Tên chuyên đề</th>
                        <th>Học phí</th>
                        <th>Nhóm chuyên đề</th>
                        <th>Tình trạng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>AH0001</td>
                        <td>Chuyên đề hệ quản trị</td>
                        <td>1400000</td>
                        <td>CNTT</td>
                        <td><Button >Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>AH0001</td>
                        <td>Chuyên đề hệ quản trị</td>
                        <td>1400000</td>
                        <td>CNTT</td>
                        <td><Button >Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>AH0001</td>
                        <td>Chuyên đề hệ quản trị</td>
                        <td>1400000</td>
                        <td>CNTT</td>
                        <td><Button >Mở</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>AH0001</td>
                        <td>Chuyên đề hệ quản trị</td>
                        <td>1400000</td>
                        <td>CNTT</td>
                        <td><Button >Mở</Button></td>
                    </tr>

                </tbody>
            </Table>
            <a href="/thmHistory">Xem thông kê đăng kí chuyên đề ---</a>
        </>
    )
}
