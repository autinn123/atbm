import React from 'react'
import { Table, Button } from 'reactstrap'
import swal from 'sweetalert';
import './Subjects.css'

class Major extends React.Component {
    constructor(props){
        super(props);
        this.state = {chuyenDe: []};
        this.getChuyenDe = this.getChuyenDe.bind(this);
        this.openChuyenDe = this.openChuyenDe.bind(this);
    }

    //Lấy danh sách chương trình
    async getChuyenDe(){
        const response = await fetch('http://localhost:3001/staff/majors');
        const data = await response.json();
        await this.setState({chuyenDe: data});
    }

    //Lập danh sách khóa học
    async openChuyenDe(id){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        const response = await fetch('http://localhost:3001/staff/majors?id=' + id, requestOptions);
        const data = await response.json();

        swal('Thành công!', `Bạn đã mở chuyên đề ${id} !`, 'success');

        //load lại dât
        await this.getChuyenDe();
    }

    //show danh sách chương trình lúc render component
    componentDidMount(){
        this.getChuyenDe();
    }

    render(){
        return (
            <>
                <h1 className="text-center">ĐĂNG KÍ CHUYÊN ĐỀ MỞ</h1>
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
                        {this.state.chuyenDe.map((item, index) => 
                            <tr>
                                <td scope="row">{index+1}</td>
                                <td>{item.MaChuyenDe}</td>
                                <td>{item.TenChuyenDe}</td>
                                <td>{item.HocPhiCD}</td>
                                <td>{item.MaNhomCD}</td>
                                <td>
                                    <Button
                                        disabled={item.TrangThaiMoHienTai? true : false}
                                        // disabled={true}
                                        color={item.TrangThaiMoHienTai? 'danger' : 'primary'}
                                        onClick={() => this.openChuyenDe(item.MaChuyenDe)}
                                    >
                                        {item.TrangThaiMoHienTai? 'Đã mở' : 'Mở'}
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <a href="/thmHistory">Xem thông kê đăng kí chuyên đề ---</a>
            </>
        )
    }
}

export default Major;