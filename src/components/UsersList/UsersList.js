import React, { useState } from 'react';
import classes from './UsersList.module.css';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from '../UI/Button/Button';
import Accordion from 'react-bootstrap/Accordion';
import Modals from '../UI/Modals/Modals';
import { AiOutlineWarning } from 'react-icons/ai';
import Form from '../UI/Forms/Form';

const DisplayUserInformations = (props) => {
    const { data } = props;

    const [show, setShow] = useState(false);
    const [delshow, setdelShow] = useState(false);
    const handleClose = () => setdelShow(false);
    const handleShow = () => setdelShow(true);
    const Alert =
        <>
            <Button btnType="Danger" clicked={handleClose}>
                Cancel
            </Button>
            <Button btnType="CustomButton" clicked={() => props.delete(data._id)}>
                Yes delete it!
            </Button>
        </>

    return (
        <Col xs={12} md={6} lg={4} className="text-center m-0">
            <Accordion defaultActiveKey="0" className={classes.Accordion}>
                <Card className={classes.Card}>
                    <Card.Header>
                        <h5>{data.FirstName + ' ' + data.LastName}</h5>
                        <Accordion.Toggle variant="link" eventKey="1" className={classes.Toggle}>
                            Show More Details!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className={classes.Container}>
                            <Card.Text>
                                Firstname : {data.FirstName} <br />
                                    Lastname : {data.LastName}<br />
                                    Email : {data.Email}<br />
                                    City : {data.City}<br />
                                    State : {data.State}<br />
                                    Country : {data.Country}<br />
                                    Department : {data.Department}<br />
                                    Gender : {data.Gender}<br />
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Footer className="text-white d-flex justify-content-between">
                        <FiEdit className={classes.Icon} key="updat" onClick={() => setShow(true)} />
                        <RiDeleteBin5Line className={classes.Icon} key="delet" onClick={handleShow} />
                    </Card.Footer>
                    <Modals
                        show={show}
                        onHide={() => setShow(false)}
                        header='Update'
                        headertype="FormHeader"
                        bodytype="FormCenter"
                    >
                        <Form data={data} title='Update' update={props.update} />
                    </Modals>
                    <Modals
                        show={delshow}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        header='Are You Sure You Want to Delete ?'
                        footer={Alert}
                    >
                        <div className='text-center'>
                            <AiOutlineWarning className={classes.DeleteIcon} /> <br />
                            <strong>You will not be able to recover this data!</strong>
                        </div>
                    </Modals>
                </Card>
            </Accordion>
        </Col>
    )
};

export default DisplayUserInformations;