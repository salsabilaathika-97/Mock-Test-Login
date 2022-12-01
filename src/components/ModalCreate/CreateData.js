import axios from "axios";
import swal from "sweetalert";

export const CreateData = (data,handleClose, navigate) => {
    console.log(data);
    axios
    .post(`https://jsonplaceholder.typicode.com/todos`,data)
    .then((res) => {
        console.log(res);
        if(res.status === 201){
            swal({
                title: "Saved!",
                text: "Successfully Added Data",
                icon: "success",
                timer: 2000
            }).then((val) => {
                handleClose();
                navigate(0);
            });
        }
    })
    .catch((err) => console.log(err.message))
}