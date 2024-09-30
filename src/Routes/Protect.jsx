import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
    console.log("I am running")
    if (localStorage.getItem("token")) {
        return <Navigate to="/" />;
    }
    // // console.log("Protect")
    return children;

};

export default Protect;
