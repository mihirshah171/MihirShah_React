import React,{Component} from 'react';
class LifeCycle extends Component {
   constructor(props) {
      super(props);
      this.state = { 
          counter: 0,
          student: { name:'' } 
      }
  }
    componentDidMount() {
       debugger
      this.timer = setTimeout(() => {
         debugger
         console.log('constrctor have number 1');
         // this.setState({tudent: {name : 'mihir'}}) //can not be used
       }, 1000)
     }
     componentDidUpdate(prevProps, prevState, snapshot) {
      // this.setState({student: {name : 'mihir'}}) //can not be used
        console.log('constrctor have number 3') 
     }
     componentDidCatch(error, errorInfo){
        console.log(error)
     }
     shouldComponentUpdate(newProps, newState, nextContext) {
      // this.setState({student: {name : 'mihir'}}) //can not be used
        console.log("constrctor have number 2")
        return true; 
     }
     componentWillUnmount() {
      clearTimeout(this.timer);
    }
   render() {
      return (
         <div>
            <h3>{this.props.name}</h3>
         </div>
      );
  }
}
export default LifeCycle;
