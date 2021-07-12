import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'reactstrap';
import swal from 'sweetalert';

class Courses extends React.Component{
    constructor(props){
        super(props);
        this.state = {chuongTrinh: []}
        this.getChuongTrinh = this.getChuongTrinh.bind(this);
        this.openChuongTrinh = this.openChuongTrinh.bind(this);
    }

    //Lấy danh sách chương trình
    async getChuongTrinh(){
        const response = await fetch('http://localhost:3001/staff/courses');
        const data = await response.json();
        await this.setState({chuongTrinh: data});
    }

    //Lập danh sách khóa học
    async openChuongTrinh(id){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        const response = await fetch('http://localhost:3001/staff/courses?id=' + id, requestOptions);
        const data = await response.json();

        swal('Thành công!', `Bạn đã mở khóa học ${id} !`, 'success');

        //load lại dât
        await this.getChuongTrinh();
    }

    //show danh sách chương trình lúc render component
    componentDidMount(){
        this.getChuongTrinh();
    }

    render(){        
        return (
            <Container>
                <h1 className="text-center mb-5">LẬP DANH SÁCH KHÓA HỌC MỞ</h1>
                <h2 className="mt-5 text-center">Danh sách các khóa học</h2>
                
                <Table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên khóa học</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.chuongTrinh.map((item, index) => 
                            <tr>
                                <td scope="row">{index+1}</td>
                                <td>{item.TenChuongTrinh}</td>
                                <td>
                                    <Button
                                        disabled={item.TrangThaiMoHienTai? true : false}
                                        // disabled={true}
                                        color={item.TrangThaiMoHienTai? 'danger' : 'primary'}
                                        onClick={() => this.openChuongTrinh(item.MaChuongTrinh)}
                                    >
                                        {item.TrangThaiMoHienTai? 'Đã mở' : 'Mở'}
                                    </Button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </Table>

                <div className="history">
                    <a href="/course-history">Xem thống kê khóa học trước --</a>
                </div>
            </Container>
        )
    }
}

export default Courses;