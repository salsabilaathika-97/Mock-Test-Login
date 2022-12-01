import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CreateData } from './CreateData';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../customLocalStorage';
import TYPES from '../../redux/types';

const ModalCreate = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleOpen = () => setShow(true);
    const [title, setTitle] = useState("");
    const {userData} = useSelector((state)=> state);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if(!userData.id){
            getData('userData').then((val) => {
                dispatch({
                    type: TYPES.POST_LOGIN,
                    payload: val
                });
            })
        }
    }, [dispatch, userData]);

    const handleCreateData = () => {
        let createData = {
            userId: userData.id,
            title: title,
            completed: false
        };
        CreateData(createData, handleClose,navigate);
    }

    return (
        <>
            <div className="mx-8 mt-4 text-center">
                <Button variant="primary" onClick={handleOpen}>Create a new to-do list</Button>
            </div>

            <Modal show = {show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new to-do list</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="form-create">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Text</Form.Label>
                            <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Write your to-do here.." autoFocus/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => handleCreateData()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreate;