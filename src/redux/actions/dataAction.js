import axios from "axios";
import TYPES from "../types";

export const getData = () => (dispatch) => {
    axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then((res) => {
        console.log(res.data);
        dispatch({
            type: TYPES.GET_DATA,
        })
    })
    .catch((err) => console.log(err))
}