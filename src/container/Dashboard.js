import React, { Component, Fragment } from 'react';
import classes from './Dashboard.module.css'
import axios from '../Utils/axios-users';
import Row from 'react-bootstrap/Row';
import { AiOutlineUserAdd, AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai';
import Modals from '../components/UI/Modals/Modals';
import Form from '../components/UI/Forms/Form';
import UsersList from '../components/UsersList/UsersList';
import withLoading from '../hoc/withSpinner/withLoading';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
const ListWithLoading = withLoading(UsersList);
const FormWithLoading = withLoading(Form);

class Dashboard extends Component {
    state = {
        users: [],
        show: false,
        loading: false,
        error: false,
        itemsToShow: 3,
        expanded: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.handleGetData()
        }, 3000);
    }

    handleGetData = () => {
        axios.get("users")
            .then(res => {
                const users = [...res.data.data]
                this.setState({ users: users, show: false })
            })
            .catch(err => {
                this.setState({ error: true });
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    handleSubmitForm = (data) => {
        this.setState({ loading: true });
        axios.post('users', data)
            .then(res => {
                const newUser = { ...res.data.data };
                const User = [...this.state.users, newUser];
                this.setState({ users: User, show: false })
            })
            .catch(err => {
                this.setState({ error: true });
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    handleUpdate(id, data) {
        this.setState({ loading: true });
        axios.patch('users/' + id, data)
            .then(res => {
                const current = [...this.state.users];
                const objIndex = this.state.users.findIndex(obj => obj._id === id);
                const updatedObj = { _id: id, ...res.data.Data };
                const newUsers = Object.assign([], current, { [objIndex]: updatedObj });
                this.setState({ users: newUsers, show: false })
            })
            .catch(err => {
                this.setState({ error: true });
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    handleDelete(id) {
        this.setState({ loading: true });
        axios.delete('users/' + id)
            .then(res => {
                const prevusers = [...this.state.users];
                const currentusers = prevusers.filter(deleteUser => deleteUser._id !== id)
                this.setState({ users: currentusers, show: false })
            })
            .catch(err => {
                this.setState({ erromsg: err })
                this.setState({ error: true });
            })
            .finally(() => this.setState({ loading: false }))
    }

    showMore() {
        this.state.itemsToShow === 3 ? (
            this.setState({ itemsToShow: this.state.users.length, expanded: true })
        ) : (
                this.setState({ itemsToShow: 3, expanded: false })
            )
    }

    render() {
        return (
            <Fragment>
                <div>
                    {this.state.loading && <ListWithLoading isLoading={this.state.loading} />}
                </div>
                <div className='my-5 ml-4'>
                    <div className={classes.LinkModal} id="linkmodal">
                        <button onClick={() => this.setState({ show: true })}>
                            <AiOutlineUserAdd className={classes.AddIcon} />
                            <span className='ml-3'>Add New User</span>
                        </button>
                    </div>
                    <Modals
                        show={this.state.show}
                        onHide={() => this.setState({ show: false })}
                        header='Form'
                        headertype="FormHeader"
                        bodytype="FormCenter"
                    >
                        <FormWithLoading
                            isLoading={this.state.loading}
                            title='Add'
                            data={this.state.users}
                            insert={this.handleSubmitForm.bind(this)}
                            update={this.handleUpdate.bind(this)}
                        />
                    </Modals>
                </div>
                <Row className="justify-content-md-center w-100">
                    {
                        this.state.users.slice(0, this.state.itemsToShow).map((user) =>
                            <ListWithLoading
                                isLoading={this.state.loading}
                                key={user._id}
                                data={user}
                                delete={this.handleDelete.bind(this)}
                                update={this.handleUpdate.bind(this)}
                            />)
                    }
                </Row>
                {
                    this.state.users.length > 3 ?
                        <div className={[classes.ShowMoreLess, 'ml-5'].join(' ')}>
                            <button onClick={this.showMore.bind(this)}>
                                {
                                    this.state.expanded ?
                                        <span>Show less <AiFillUpCircle /></span>
                                        :
                                        <span>Show more <AiFillDownCircle /></span>
                                }
                            </button>
                        </div>
                        :
                        null
                }
            </Fragment>
        );
    }
}

export default withErrorHandler(Dashboard, axios);