import axios from "axios";
import swal from "sweetalert";

export const CreateData = (data, navigate) => {
    axios
    .post(`https://jsonplaceholder.typicode.com/todos`,data)
    .then((res) => {
        console.log(res);
        if(res.status === 201){
            swal({
                title: "Saved!",
                text: "Successfully Added Data",
                icon: "success",
                timer: 2000,
            })
            navigate("/home")
        }
    })
    .catch((err) => console.log(err.message))
}