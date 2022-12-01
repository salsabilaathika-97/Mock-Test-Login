import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import ModalEdit from './ModalEdit/ModalEdit';
import {getDataByUserId} from '../../redux/actions/dataAction'
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
import { getData } from "../../customLocalStorage";
import TYPES from "../../redux/types";
import { Button } from "react-bootstrap";

const ToDo = () => {
    const dispatch = useDispatch();
    const {todoData} = useSelector((state)=> state);
    const {userData} = useSelector((state)=> state);

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

    const handleCheck = (todo) => {
        const updatedTodo = todo;
        updatedTodo.completed = true;
        axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, updatedTodo)
            .then((res) => {
                console.log(res);
                if (res.status === 200){
                    swal({
                        title: "Finished",
                        text: `Task ${todo.title} is completed`,
                        icon: "success",
                        timer: 3000,
                    })
                }
            })
            .catch((err) => console.log(err.message));
    }
    
    const refreshData = () => {
        dispatch(getDataByUserId(userData.id));
    }

    useEffect(() => {
        if(userData.id){
            refreshData();
        }else{
            getData('userData').then((val) => {
                dispatch({
                    type: TYPES.POST_LOGIN,
                    payload: val
                });
            })
        }
    }, [dispatch,userData]);

    return (
        <div>
            {
                todoData.data.map(item => (
                    <CardGroup key={item.id}>
                        <Card className="my-2" style = {{width: '18rem'}} >
                            <Card.Body>
                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                <Button variant="success" onClick={() => handleCheck(item)}>Set As Finished</Button>
                                <div style={{width:10, display: 'inline-block'}}></div>
                                <ModalEdit prevTitle={item.title} todoState={item.completed} todoId={item.id} onCloseEdit={refreshData} />
                                <div style={{width:10, display: 'inline-block'}}></div>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                ))
            }
        </div>
    )
}

export default ToDo;