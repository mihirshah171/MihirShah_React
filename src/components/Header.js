import React, { Fragment } from 'react';

const Header = (props) => {
    return (
        <Fragment>
            <h1 className='text-center mt-5'>{props.header}</h1>
        </Fragment>
    );
};

export default Header;
