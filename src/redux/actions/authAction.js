import axios from "axios";
import TYPES from "../types";
import swal from "sweetalert"

export const handleLogin = (payload, setErrMsg, navigate) => {
    return(dispatch) => {
        axios
        .post("https://jsonplaceholder.typicode.com/users", payload)
        .then((res) => {
            console.log(res);
            dispatch({
                type: TYPES.POST_LOGIN,
            });
        swal({
            title: "Welcome!",
            text: "Logged in successfully",
            icon: "success",
            timer: 1500,
        });
        navigate("/home")
        })
        .catch((err) => {
            console.log(err);
            if (err.response?.status === 404) {
                setErrMsg(true);
              } else if (err.response?.status === 400) {
                setErrMsg(true);
              } else {
                setErrMsg("Login Failed");
              }
        });
    }
}