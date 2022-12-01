import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { EditData } from './EditData';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

const ModalEdit = ({todoId, prevTitle, todoState, onCloseEdit}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const [title, setTitle] = useState(prevTitle);
    const {userData} = useSelector((state)=> state);

    const handleEditData = () => {
        const data = {
            userId: userData.id,
            title: title,
            completed: todoState
        }
        EditData(data, todoId, handleClose, onCloseEdit)
    }

    return (
        <>
            {/* <Card.Link onClick={handleOpen}></Card.Link> */}
            <Button variant="primary" onClick={handleOpen}>Edit</Button>
            <Modal show = {show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit a new to-do list</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Text</Form.Label>
                            <Form.Control onChange={(e) => setTitle(e.target.value)} type = "text" placeholder="Masukkan title baru" value={title} autoFocus/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleEditData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEdit;