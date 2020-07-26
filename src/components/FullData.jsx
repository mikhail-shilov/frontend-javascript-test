import React from 'react';

function FullData(props) {

    if (props.userCard) {
        return (
            <div>
                <div>
                    <span>Name: {props.userCard.firstName}</span>
                    <span>Lastname: {props.userCard.lastName}</span>
                    <span>Email: {props.userCard.email}</span>
                    <span>Phone: {props.userCard.phone}</span>
                </div>
                <div>
                    <span>Street: {props.userCard.phone}</span>
                    <span>City: {props.userCard.phone}</span>
                    <span>State: {props.userCard.phone}</span>
                    <span>Zip code: {props.userCard.phone}</span>
                </div>
                <div>
                    <span>Description: {props.userCard.description}</span>
                </div>
            </div>
        );
    } else {return <div>Click to row, for more information...</div>}

}

export default FullData;