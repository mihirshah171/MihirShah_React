import React from 'react';
import PropTypes from 'prop-types';
const FunctionalComponent = (props) => {
    return (<>
            <div>
                <label>Student Name : &nbsp;
                    <mark>
                        {props.name}
                    </mark>
                </label>
                <br/>
                <label>Counter : &nbsp;
                    <b>
                        {props.counter}
                    </b>
                </label>
            </div>
    </>);
}
FunctionalComponent.propTypes = {
    name:PropTypes.string,
    counter:PropTypes.number
}
export default FunctionalComponent;