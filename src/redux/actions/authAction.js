import axios from "axios";
import TYPES from "../types";
import swal from "sweetalert"

export const handleLogin = (payload, setErrMsg, navigate) => {
    return (dispatch) => {
        axios
            .get("https://jsonplaceholder.typicode.com/users?username=" + payload.username)
            .then((res) => {
                console.log("LOGGED USER ", res.data);
                if (res.data.length > 0) {
                    let userdata = res.data[0];
                    dispatch({
                        type: TYPES.POST_LOGIN,
                        payload: userdata
                    });
                    swal({
                        title: "Welcome!",
                        text: "Logged in as " + userdata.name,
                        icon: "success",
                        timer: 1500,
                    });
                    navigate("/home");
                } else {
                    swal({
                        title: 'Error!',
                        text: 'Username not registered',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch((err) => {
                console.error("ERROR | ", err);
                swal.fire({
                    title: 'Error!',
                    text: 'Sorry, error from server',
                    icon: 'error',
                    confirmButtonText: 'CKP TW'
                });
            });
    }
}