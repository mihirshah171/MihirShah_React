import React,{Component} from 'react';
import StateLessComponent from './Components/StateLessComponent'
import StateFullComponent from './Components/StateFullComponent'
import FunctionalComponent from './Components/FunctionalComponent'
import LifeCycle from './Components/LifeCycle'

class App extends Component {
   constructor(props) {
       super(props);
       this.state = { 
           counter: 0,
           student: { name:'' } 
       }
   }
   handleChange = (event) => {
       this.setState({
           student: {name : event.target.value}
           })
    }
   handleClick = () => {
       this.setState({
                counter: this.state.counter + 1,
           })
    }
   render() {
     return <>
     <LifeCycle />
          <div>
              <br/>
              <input value={this.state.student.name} onChange={this.handleChange} />
          </div>
          <br/>
          <div>
            <button value={this.state.student.name} onClick={this.handleClick}>Increment</button>
          </div>
          <br/>
          <hr/>
          <div>
            <strong>
                StateFullComponent:
            </strong> 
            <StateFullComponent
                name = {this.state.student.name}
                counter = {this.state.counter} /> 
            <hr/>     
          </div>
            <div>
                <strong>
                    StateLessComponent:
                </strong> 
                <StateLessComponent 
                    name={this.state.student.name}
                    counter = {this.state.counter} />
                <hr/>
            </div>
            <div>
                <strong>
                    FunctionalComponent:
                </strong>
                <FunctionalComponent 
                    name={this.state.student.name} 
                    counter = {this.state.counter} 
                />
                <hr/>
            </div>
            <LifeCycle 
                name={this.state.student.name} 
                counter = {this.state.counter} 
            />
      </>
  }
}
export default App;
