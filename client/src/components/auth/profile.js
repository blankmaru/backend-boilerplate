import React, { useState } from "react";
import {
    Card
} from 'react-bootstrap';

const Profile = props => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    );

    return (
        <div style={{justifyContent: 'center', alignItems: 'center', margin: '0 auto', width: '100%', textAlign: 'center'}}>
            <Card style={{alignSelf: 'center', marginTop: '1rem'}}>
                <Card.Body>
                    <Card.Title>{currentUser.username}</Card.Title>
                    <Card.Text>
                        {currentUser.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;