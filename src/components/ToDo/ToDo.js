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
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
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