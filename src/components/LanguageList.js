import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const LanguageList = ({languages}) => {
    // const [languages, setLanguages] = useState([
    //     { name: 'Java', key: '1'},
    //     { name: 'JavaScript', key: '2'},
    //     { name: 'Python', key: '3'},
    //     { name: 'Swift', key: '4'},
    //     { name: 'C', key: '5'},
    // ])

    return (
        <Container>
            <b>Experience in the following programming languages:</b>
            
            { languages.map((item) => {
                return (
                    <Container key = {item.key}>
                        <p>{item.name}</p>
                    </Container>
                )
            })}
        </Container>
    )
}

export default LanguageList;