import React, { Component, Fragment } from 'react';
import Modals from '../../components/UI/Modals/Modals';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: false,
            errormsg: []
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: false });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: true, errormsg: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: false });
        }

        render() {
            return (
                <Fragment>
                    <Modals
                        show={this.state.error}
                        onHide={this.errorConfirmedHandler}
                        header='Error'
                    >
                        {
                            this.state.errormsg.response ?
                                this.state.errormsg.response.data.message
                                :
                                this.state.errormsg.message
                        }
                    </Modals>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;