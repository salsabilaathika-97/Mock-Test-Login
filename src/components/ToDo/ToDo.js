import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import ModalEdit from './ModalEdit/ModalEdit';
import {getData} from '../../redux/actions/dataAction'
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";

const ToDo = () => {
    const dispatch = useDispatch();
    const {dataUser} = useSelector((state)=> state);

    const handleDelete = (id) => {
        axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
            console.log(res);
            if (res.status === 200){
                swal({
                    title: "Deleted!",
                    text: "Successfully Deleted Data",
                    icon: "success",
                    timer: 2000,
                })
            }
        })
        .catch((err) => console.log(err.message))
    }

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <div>
            {
                dataUser.data.map(item => (
                    <CardGroup>
                        <Card className="my-2" style = {{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                <ModalEdit />
                                <Card.Link onClick={() => handleDelete(item.id)}>Delete</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                ))
            }
        </div>
    )
}

export default ToDo;