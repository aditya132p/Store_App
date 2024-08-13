import axios from "axios";

const baseUrl = "https://api.escuelajs.co/api/v1";
const loginUrl = "/auth/login"
// const signUpUrl = "users/"


// login api
export const login = async (data) => {
    try {
        const response = await axios.post(baseUrl + loginUrl, data);

        return response
    } catch (error) {
        console.log(" Error in Login", error)
        throw error
    }
}

// signup api

export const signUp = async ({name, email, password}) => {
    try {
        const response = await axios.post(`${baseUrl}/users/`, {
            name: name,
            email: email,
            password: password,
            avatar: "https://api.lorem.space/image/face?w=640&h=480"
        });
        console.log(name);
        console.log(email);
        console.log(password);
        
        return response

    }
    catch (error) {
        console.log(" Error in SignUp", error)
        throw error
    }
}