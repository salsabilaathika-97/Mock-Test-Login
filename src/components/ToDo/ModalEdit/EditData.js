import axios from "axios"
import swal from "sweetalert"

export const EditData = (data, id, handleClose, onCloseEdit) => {
    axios
    .put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)
    .then((res) => {
        if(res.status === 200) {
            swal({
                title: "Saved!",
                text: "Successfully Updated Data",
                icon: "success",
                timer: 2000,
            }).then(() => {
                handleClose();
                onCloseEdit();
            } );
        }
    })
    .catch((err) => console.log(err.message))
}