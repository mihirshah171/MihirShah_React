import React, {Component} from 'react';

class StateFullComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            student: { name:'' } 
        }
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
        </>);
    }
}
export default StateFullComponent;