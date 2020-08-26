import React from 'react';
import Image from 'react-bootstrap/Image';
import {Form} from "react-bootstrap";
import '../styles/PeopleComponent.css';
import profilePic from '../resources/profilePicture.jpeg'

const PeopleComponent = (props) => {

    const person = {firstName: "Kyle", 
                    lastName: "Kobayashi",
                    city: "Miami",
                    state: "FL",
                    country: "US"}

    return (
        <Form className="profile">
            <Image className="profile-picture" src={profilePic}/>
            <h1 className="profile-name">{person.firstName} {person.lastName}</h1>
            <h2 className="profile-location">{person.city}, {person.state}, {person.country}</h2>
        </Form>
    );
};

export default PeopleComponent;