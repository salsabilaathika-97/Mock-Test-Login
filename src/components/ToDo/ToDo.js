import React from "react";
import Card from 'react-bootstrap/Card'
import ModalEdit from './ModalEdit/ModalEdit';
import {getData} from '../../redux/actions/dataAction'
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

const ToDo = () => {
    const dispatch = useDispatch();
    const {dataUser} = useSelector((state)=> state);

    useEffect(() => {
        dispatch(getData());
    })

    return (
        <div>
            {
                dataUser.data.map(item => (
                    <Card style = {{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>
                            {item.title}
                        </Card.Title>
                        <ModalEdit />
                        <Card.Link href="#">Delete</Card.Link>
                    </Card.Body>
                </Card>
                ))
            }
        </div>
    )
}

export default ToDo;