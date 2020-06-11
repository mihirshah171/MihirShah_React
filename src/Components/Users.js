import React from 'react';

// Pure-Component Function

const user = (props) => {
    return (
        <div>
            {/* 4. Click events with passing parameter */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* 5. Call events from child component */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default user;