import React from 'react'
import API from '../../../Util/API';
import { withRouter } from "react-router-dom";
import styles from './Users.module.css';
import Grow from '@material-ui/core/Grow';
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        let token = localStorage.getItem("access_token")
        API.get("users/:id", { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                debugger
                this.setState({ users: res.data.Data })
                console.log(this.state.users)
            })
            .catch((err) => alert(err));
    }

    render() {
        return (
            <>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 3000 } : {})}
                >
                    <div className={styles.Users}>
                        <h1>Hello</h1>
                        {
                            this.state.users.map((user) =>
                                <div>
                                    {/* <h1 key={user.created_at}>Welcome {user.FirstName}</h1> */}
                                    <li key={user._id}>{user.Email}</li>
                                </div>
                            )
                        }
                    </div>
                </Grow >
            </>
        );
    }
}

export default withRouter(Users);
