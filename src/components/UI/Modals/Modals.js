import React from 'react';
import classes from './Modals.module.css';
import Modal from 'react-bootstrap/Modal';

const Modals = (props) => {
    return (
        <div>
            <Modal
                {...props}
                centered
                scrollable
                size="lg"
                show={props.show}
                onHide={props.onHide}
            >
                <Modal.Header className={classes[props.headertype]} closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {props.header}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={classes[props.bodytype]}>
                    {props.ErrorMsg}
                    {props.children}
                </Modal.Body>
                {
                    props.footer ?
                        <Modal.Footer>
                            {props.footer}
                        </Modal.Footer>
                        :
                        null
                }
            </Modal>
        </div>
    );
};

export default Modals;