import { useLoaderData } from "react-router-dom";

const UpdateForm = () => {
    const pro=useLoaderData()
    console.log(pro)
    return (
        <div>
            update
        </div>
    );
};

export default UpdateForm;