import React, { PureComponent } from 'react';
import './App.css';
import Users from '../Components/Users';

//3. Pure-Component 
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    users: [
      { id: 'loik5j', name: 'Mihir', age: 28 },
      { id: 'bvcfsd', name: 'Akash', age: 29 },
      { id: 'vgyhu5', name: 'Ajay', age: 26 }
    ],
    showUsers: false,
    authenticated: false
  };

  // 1. Lifecycle methods

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //pure-component check
    console.log('[App.js] shouldComponentUpdate');
    if (
      nextProps.users !== this.state.users ||
      nextProps.changed !== this.state.changed ||
      nextProps.clicked !== this.state.clicked
    ) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log("The component is about to be unmounted.");
  }

  nameChangedHandler = (event, id) => {
    const userIndex = this.state.users.findIndex(u => {
      return u.id === id;
    });

    const user = {
      ...this.state.users[userIndex]
    };

    user.name = event.target.value;

    const users = [...this.state.users];
    users[userIndex] = user;

    this.setState({ users: users });
  };

  deleteUserHandler = userIndex => {
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({ users: users });
  };

  toggleUsersHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({ showUsers: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    //2. Conditional rendering

    let users = null;

    if (this.state.showUsers) {
      // throw new Error('I crashed!');  //can check ErrorBoudar
      users = (
        <React.Fragment>
          {this.state.users.map((user, index) => {
            return <Users
              click={() => this.deleteUserHandler(index)}
              name={user.name}
              age={user.age}
              key={user.id}
              changed={(event) => this.nameChangedHandler(event, user.id)} />
          })}
        </React.Fragment>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm an Users Guide</h1>
        <p>click Toggle Users to show users detail!</p>
        <button
          style={style}
          onClick={this.toggleUsersHandler}>Toggle Users</button>
        {users}
      </div>
    );
  }
}
export default App;
