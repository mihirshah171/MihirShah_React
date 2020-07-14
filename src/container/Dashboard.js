import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai';
import React, { Component, Fragment } from 'react';
import ApiHelperWithAxios from '../Utils/ApiHelperWithAxios';
import Button from '../components/UI/Button/Button';
import Container from 'react-bootstrap/Container';
import { Empty } from 'antd';
import Form from '../components/UI/Forms/Form';
import Modals from '../components/UI/Modals/Modals';
import Notification from '../components/UI/Notification/Notification';
import Row from 'react-bootstrap/Row';
import UsersList from '../components/UsersList/UsersList';
import classes from './Dashboard.module.css'
import withLoading from '../hoc/withSpinner/withLoading';
const ListWithLoading = withLoading(UsersList);

class Dashboard extends Component {
    state = {
        alertMessage: null,
        alertShow: false,
        error: false,
        errormsg: null,
        expanded: false,
        itemsToShow: 3,
        loading: false,
        show: false,
        users: []
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        this.handleGetData()
    }

    handleGetData = () => {
        ApiHelperWithAxios.MakeRequest(
            'users',
            'GET',
            (response) => {
                const users = [...response.data.data];
                this.setState({ users })
            },
            (error) => {
                this.setState({ error: true, errormsg: error });
            },
            () => {
                this.setState({ loading: false });
            }
        );
    }

    handleSubmitForm = (data) => {
        this.setState({ loading: true, show: false });
        ApiHelperWithAxios.MakeRequestWithBody(
            'users',
            'POST',
            data,
            (response) => {
                const newUser = { ...response.data.data };
                const User = [
                    ...this.state.users,
                    newUser
                ];
                this.setState({ alertMessage: response.data.message, alertShow: true, users: User })
            },
            (error) => {
                this.setState({ error: true, errormsg: error });
            },
            () => {
                this.setState({ loading: false });
            }
        );
    }

    handleUpdate = (id, data) => {
        this.setState({ loading: true });
        ApiHelperWithAxios.MakeRequestWithBody(
            `users/${id}`,
            'PATCH',
            data,
            (response) => {
                const current = [...this.state.users];
                const objIndex = this.state.users.findIndex((obj) => obj._id === id);
                const updatedObj = { _id: id, ...response.data.Data };
                const newUsers = Object.assign(
                    [],
                    current,
                    { [objIndex]: updatedObj }
                );
                this.setState({ alertMessage: response.data.message, alertShow: true, show: false, users: newUsers })
            },
            (error) => {
                this.setState({ error: true, errormsg: error });
            },
            () => {
                this.setState({ loading: false })
            }
        );
    };

    handleDelete = (id) => {
        this.setState({ loading: true });
        ApiHelperWithAxios.MakeRequest(
            `users/${id}`,
            'DELETE',
            (response) => {
                const prevusers = [...this.state.users];
                const currentusers = prevusers.filter((deleteUser) => deleteUser._id !== id)
                this.setState({ alertMessage: response.data.message, alertShow: true, users: currentusers })
            },
            (error) => {
                this.setState({ error: true, errormsg: error });
            },
            () => {
                this.setState({ loading: false })
            }
        );
    }

    showMore = () => {
        if (this.state.itemsToShow === 3) {
            this.setState({ expanded: true, itemsToShow: this.state.users.length })
        } else {
            this.setState({ expanded: false, itemsToShow: 3 })
        }
    }

    errorConfirmedHandler = () => {
        this.setState({ error: false });
    }

    handleAlertClose = () => {
        this.setState({ alertShow: false })
    }

    render = () => (
        <Fragment>
            <Container className={classes.Container}>
                <div>
                    {this.state.loading && <ListWithLoading isLoading={this.state.loading} />}
                </div>
                {
                    this.state.alertShow &&
                    <Notification
                        show={this.state.alertShow}
                        close={this.handleAlertClose.bind(this)}
                        alert={this.state.alertMessage}
                        delay={3000}
                        autohide
                    />
                }
                {
                    this.state.error
                        ? <Modals
                            show={this.state.error}
                            onHide={this.errorConfirmedHandler.bind(this)}
                            header="Error"
                        >
                            {
                                this.state.errormsg.response
                                    ? this.state.errormsg.response.data.message
                                    : this.state.errormsg.message
                            }
                        </Modals>
                        : null
                }
                <div className="my-5">
                    {
                        this.state.loading === false
                            ? <div className={classes.LinkModal} id="linkmodal">
                                <Button btnType="AddUser" clicked={() => this.setState({ show: true })}>
                                    <span>Add New User </span>
                                </Button>
                            </div>
                            : null
                    }
                    <Modals
                        show={this.state.show}
                        onHide={() => this.setState({ show: false })}
                        header="Form"
                        headertype="FormHeader"
                        bodytype="FormCenter"
                        scrollable
                        size="lg"
                    >
                        <Form
                            title="Add"
                            data={this.state.users}
                            insert={this.handleSubmitForm.bind(this)}
                            update={this.handleUpdate.bind(this)}
                        />
                    </Modals>
                </div>
                {
                    this.state.users.length > 0
                        ? <Row className="justify-content-md-center">
                            {
                                this.state.users.slice(
                                    0,
                                    this.state.itemsToShow
                                ).map((user) => <ListWithLoading
                                    isLoading={this.state.loading}
                                    key={user._id}
                                    data={user}
                                    delete={this.handleDelete.bind(this)}
                                    update={this.handleUpdate.bind(this)}
                                />)
                            }
                        </Row>
                        : <div>
                            {
                                this.state.loading === false
                                    ? <Empty className={classes.Empty} />
                                    : null
                            }
                        </div>
                }
                {
                    this.state.loading === false && this.state.users.length > 3
                        ? <div className={classes.ShowMoreLess}>
                            <Button btnType="List" clicked={this.showMore.bind(this)}>
                                {
                                    this.state.expanded
                                        ? <span>Show less <AiFillUpCircle /></span>
                                        : <span>Show more <AiFillDownCircle /></span>
                                }
                            </Button>
                        </div>
                        : null
                }
            </Container>
        </Fragment>
    )
}

export default Dashboard;
