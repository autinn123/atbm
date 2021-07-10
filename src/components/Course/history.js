import React from 'react'
import { Container, Row, Col, Button, Table, Input } from 'reactstrap'

class CourseHistory extends React.Component {
    constructor(props){
        super(props);
        this.state = {start: '', end: '', thongKe: []};
        this.onThongKe = this.onThongKe.bind(this);
    }

    //Thống kê học viên khóa học trước
    async onThongKe(){
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        const response = await fetch(`http://localhost:3001/staff/courses/statistic?start=${this.state.start}&end=${this.state.end}`, requestOptions);
        const data = await response.json();
        this.setState({thongKe: data});
    }

    render(){
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
                            onChange={(e) => this.setState({start: e.target.value})}
                        />
                    </Col>
                    <Col md={5}>
                        <label>Đến</label>
                        <Input
                            type="date"
                            name="denNgay"
                            placeholder="date placeholder"
                            onChange={(e) => this.setState({end: e.target.value})}
                        />
                    </Col>
                    <Col md={2}>
                        <p></p>
                        <Button 
                            color="success"
                            onClick={this.onThongKe}
                        >
                            Xem thống kê
                        </Button>
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
                        {this.state.thongKe.map((item, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.MaChuongTrinh}</td>
                                <td>{item.TenChuongTrinh}</td>
                                <td>{item.SLDK}</td>
                            </tr>
                        )}     
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default CourseHistory;