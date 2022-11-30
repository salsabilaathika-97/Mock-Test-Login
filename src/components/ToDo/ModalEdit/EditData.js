import axios from "axios"
import swal from "sweetalert"

export const EditData = (data, id) => {
    axios
    .put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)
    .then((res) => {
        if(res.status === 200) {
            swal({
                title: "Saved!",
                text: "Successfully Updated Data",
                icon: "success",
                timer: 2000,
            })
        }
    })
    .catch((err) => console.log(err.message))
}