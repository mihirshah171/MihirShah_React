import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import API from '../../Util/API';
import { withRouter } from "react-router-dom";
export class Logintbygoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    signup(res) {
        debugger
        const googleresponse = {
            Name: res.profileObj.name,
            Email: res.profileObj.email,
            Password: '12345'
            // token: res.googleId,
            // Image: res.profileObj.imageUrl,
            // ProviderId: 'Google'
        };
        debugger;
        API.post('users', googleresponse)
            .then((result) => {
                debugger
                localStorage.setItem("access_token", JSON.stringify(res.tokenObj.id_token));
                this.props.history.push('/u')
            });
    };
    render() {
        const responseGoogle = (response) => {
            console.log(response);
            debugger;
            this.signup(response);
        }
        return (
            <div className="App">
                <div className="row">
                    <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <GoogleLogin
                                clientId="156204646759-lu1qh5umtct1fkncskguvenqs4slba2m.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle} >
                            </GoogleLogin>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Logintbygoogle)