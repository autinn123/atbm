import React from 'react'
import './Subjects.css'
import OpenList from '../../components/OpenList/OpenList'
import HistoryList from '../../components/HistoryList/HistoryList'

export default function Subjects() {
    return (
        <>
            <h1 className="text-center ">LẬP DANH SÁCH MÔN HỌC</h1>
            <OpenList />
            <HistoryList/>
        </>
    )
}
