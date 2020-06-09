import React, {Component} from 'react';
import PropTypes from 'prop-types';
class StateLessComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    } 
    render() {
        return (<>
            <div>
                <label>Student Name : &nbsp;
                    <mark>
                        {this.props.name}
                    </mark>
                </label>
                <br/>
                <label>Counter : &nbsp;
                    <b>
                        {this.props.counter}
                    </b> 
                </label>
            </div>
        </>)
    }
}
StateLessComponent.propTypes = {
    name:PropTypes.string,
    counter:PropTypes.number
}
 export default StateLessComponent;