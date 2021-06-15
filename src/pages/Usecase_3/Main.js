import React, { useState } from 'react'
import { Button, Container } from 'reactstrap'
import Subjects from './Subjects'
import Thematic from './Thematic'

export default function Main() {
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
            {mon ? <Subjects /> : <Thematic />}
        </Container>
    )
}
