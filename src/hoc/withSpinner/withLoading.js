import React from 'react';
import Loader from 'react-loader-spinner';
import classes from './Loader.module.css';

const WithLoading = (WrappedComponent) => {
    return function WithLoadingWrappedComponent({ isLoading, children, ...props }) {
        if (!isLoading) {
            return (<WrappedComponent {...props} />);
        }
        return (
            <div className={classes.Loader}>
                <Loader
                    type="Circles"
                    color="black"
                    height={100}
                    width={100}
                />
            </div>
            ||
            <h1 className='text-white'>Loading...</h1>
        );
    }
}

export default WithLoading;
