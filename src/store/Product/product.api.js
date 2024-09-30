import axios from 'axios';

const productResponse = async () => {
  try {

    // add some changes now  links was change 
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;  // No need to store it in a separate variable
  } catch (error) {
    console.error("API error:", error);  // Log the error for debugging
    throw error;  // Throw the error to be caught in the saga
  }
};

const searchProduct  = async(search)=>{
  try{
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${search}`)
    console.log(search)
    return response.data 
  }
  catch(error){
    console.log(" Search Api error ",error)
    throw error
  }
}
export default productResponse;
export {  searchProduct} ;

