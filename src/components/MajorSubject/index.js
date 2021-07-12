import React, { useState } from 'react'
import { Button, Container } from 'reactstrap'
import Subject from './Subject'
import Major from './Major'

export default function MajorSubject() {
    const [mon, setMon] = useState(true)
    const handleClickMon = (e) => {
        setMon(true)
    }
    const handleClickCD = (e) => {
        setMon(false)
    }

    return (
        <Container>
            <Button
                color={mon ? 'primary' : 'secondary'}
                onClick={handleClickMon}
            >Môn</Button>
            <Button
                color={!mon ? 'primary' : 'secondary'}
                onClick={handleClickCD}
            >Chuyên đề</Button>
            {mon ? <Subject /> : <Major />}
        </Container>
    )
}
