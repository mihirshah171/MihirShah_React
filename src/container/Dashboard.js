import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai';
import React, { Component, Fragment } from 'react';
import Button from '../components/UI/Button/Button';
import Container from 'react-bootstrap/Container';
import Form from '../components/UI/Forms/Form';
import Modals from '../components/UI/Modals/Modals';
import Row from 'react-bootstrap/Row';
import UsersList from '../components/UsersList/UsersList';
import axios from '../Utils/axios-users';
import classes from './Dashboard.module.css'
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import withLoading from '../hoc/withSpinner/withLoading';
const ListWithLoading = withLoading(UsersList);
const FormWithLoading = withLoading(Form);

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      erromsg: null,
      error: false,
      expanded: false,
      itemsToShow: 3,
      loading: false,
      show: false,
      users: []
    }
  }

  componentDidMount () {
    this.setState({ loading: true });
    setTimeout(
      () => {
        this.handleGetData()
      },
      3000
    );
  }

  handleGetData () {
    axios.get('users')
      .then((res) => {
        const users = [...res.data.data]
        this.setState({ users })
      })
      .catch((err) => {
        this.setState({ erromsg: err, error: true });
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  handleSubmitForm (data) {
    this.setState({ show: false })
    this.setState({ loading: true });
    axios.post(
      'users',
      data
    )
      .then((res) => {
        const newUser = { ...res.data.data };
        const User = [
          ...this.state.users,
          newUser
        ];
        this.setState({ users: User })
      })
      .catch((err) => {
        this.setState({ erromsg: err, error: true });
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  handleUpdate (id, data) {
    this.setState({ show: false })
    this.setState({ loading: true });
    axios.patch(
            `users/${id}`,
            data
    )
      .then((res) => {
        const current = [...this.state.users];
        const objIndex = this.state.users.findIndex((obj) => obj._id === id);
        const updatedObj = { _id: id, ...res.data.Data };
        const newUsers = Object.assign(
          [],
          current,
          { [objIndex]: updatedObj }
        );
        this.setState({ users: newUsers })
      })
      .catch((err) => this.setState({ erromsg: err, error: true }))
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  handleDelete (id) {
    this.setState({ loading: true });
    axios.delete(`users/${id}`)
      .then((res) => {
        const prevusers = [...this.state.users];
        const currentusers = prevusers.filter((deleteUser) => deleteUser._id !== id)
        this.setState({ users: currentusers })
      })
      .catch((err) => {
        this.setState({ erromsg: err })
        this.setState({ error: true });
      })
      .finally(() => this.setState({ loading: false }))
  }

  showMore () {
    if (this.state.itemsToShow === 3) {
      this.setState({ expanded: true, itemsToShow: this.state.users.length })
    } else {
      this.setState({ expanded: false, itemsToShow: 3 })
    }
  }

  render () {
    return (
      <Fragment>
        <Container className={classes.Container}>
          <div>
            {this.state.loading && <ListWithLoading isLoading={this.state.loading} />}
          </div>
          <div className="my-5">
            {
              this.state.loading === false
                ? <div className={classes.LinkModal} id="linkmodal">
                  <Button btnType="AddUser" class="button" clicked={() => this.setState({ show: true })}>
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
            >
              <FormWithLoading
                isLoading={this.state.loading}
                title="Add"
                data={this.state.users}
                insert={this.handleSubmitForm.bind(this)}
                update={this.handleUpdate.bind(this)}
              />
            </Modals>
          </div>
          <Row className="justify-content-md-center">
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
    );
  }
}

export default withErrorHandler(
  Dashboard,
  axios
);
