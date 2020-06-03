import React from 'react';

const Users = (props) => {

    return(
        <div>
            <p>User Detail</p>
            <p>FirstName : {props.value.firstname}</p>
            <p>LastName : {props.value.lastname}</p>
            <p>Email : {props.value.email}</p>
            <p>Phone Number : {props.value.phone}</p>
            <p>Hobby : {props.value.hobby}</p>
            <p>Address : {props.value.address}</p>
            <p>City : {props.value.city}</p>
            <p>Pin-Code : {props.value.pincode}</p>
            <p>State : {props.value.state}</p>
        </div>
    )
}

export default Users