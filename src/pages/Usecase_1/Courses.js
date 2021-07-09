import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'reactstrap';
// import axios from 'axios';

class Courses extends React.Component{
    constructor(props){
        super(props);
        this.state = {chuongTrinh: []}
        this.getChuongTrinh = this.getChuongTrinh.bind(this);
    }

    async getChuongTrinh(){
        const response = await fetch('http://localhost:3001/courses');
        const data = await response.json();
        await this.setState({chuongTrinh: data});
    }

    componentDidMount(){
        this.getChuongTrinh();
    }

    // useEffect(() => {

    //     const fetchData = async () => {
            
    //         try {
    //             const url = "http://localhost:3001/courses";
    //             const response = await fetch(url);
    //             const responseJSON = await response.json();

    //             // setChuongTrinh(chuongTrinh => {
    //             //     return {...chuongTrinh, ...responseJSON};
    //             // });
    //             setChuongTrinh(responseJSON)
    //             url = '';
    //             console.log(chuongTrinh);
    //         } catch (error) {
    //             console.log("error", error);
    //         }

            
    //     };

    //     fetchData();
    // }, []);

    render(){        
        return (
            <Container>
                <h1 className="text-center mb-5">LẬP DANH SÁCH KHÓA HỌC MỞ</h1>
                <h2 className="mt-5 text-center">Danh sách các khóa học</h2>
                {this.state.chuongTrinh.length != 0 ? 
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
                                <td><Button>Mở</Button></td>
                            </tr>
                        )}

                            {/* <tr>
                                <th scope="row">{1}</th>
                                <tr>{this.state.chuongTrinh[0].TenChuongTrinh}</tr>
                                <tr><Button>Mở</Button></tr>
                            </tr> */}
                    </tbody>
                </Table> : null}
                <div className="history">
                    <a href="/cHistory">Xem thống kê khóa học trước --</a>
                </div>
            </Container>
        )
    }
}

export default Courses;