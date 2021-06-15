import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <>
            <div className="banner-container">
                <h1 className="text-center">BỘ MÔN PTTK-HTTT - KHOA CÔNG NGHỆ THÔNG TIN</h1>
                <p className="text-center">Đây là đồ án môn học cho môn phân tích thiết kế hệ thống thông tin</p>
                <div className="infor-container">
                    <div className="teacher-infor">
                       <h3> Giáo viên hướng dẫn: Th.s Tiết Gia Hồng</h3>
                    </div>
                    <div className="group-info">
                        <div className="members">
                            <h3>Thành Viên Nhóm:</h3>
                            <div className="member">
                                <h3>Ksor Âu</h3>
                                <p>Email: autinn123@gmail.com</p>
                            </div>
                            <div className="member">
                                <h3>Nguyễn Công Sơn</h3>
                                <p>Email: autinn123@gmail.com</p>
                            </div>
                            <div className="member">
                                <h3>Nguyễn Văn Trị</h3>
                                <p>Email: autinn123@gmail.com</p>
                            </div>
                            <div className="member">
                                <h3>Trương Công Quốc Cường</h3>
                                <p>Email: autinn123@gmail.com</p>
                            </div>
                            <div className="member">
                                <h3>Nguyễn Lễ Ngọc Tần</h3>
                                <p>Email: autinn123@gmail.com</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
