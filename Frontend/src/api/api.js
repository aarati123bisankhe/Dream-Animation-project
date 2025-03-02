



// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/user"; // Backend API URL

// export const registerUser = async (userData) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/register`, userData);
//         return response.data;
//     } catch (error) {
//         console.error("Error registering user:", error.response?.data || error.message);
//         return { success: false, message: error.response?.data?.error || "Registration failed" };
//     }
// };

// export const loginUser = async (userData) => {
//     try {
//       const response = await fetch(" http://localhost:5000/api/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }
  
//       return data;
//     } catch (error) {
//       console.error("Error logging in user:", error.message);
//       return { success: false, message: error.message };
//     }
//   };
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/user"; // Backend API URL

// Register User Function
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error.response?.data || error.message);
        return { success: false, message: error.response?.data?.error || "Registration failed" };
    }
};

// Login User Function
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, userData); // Use axios for consistency
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error.response?.data || error.message);
        return { success: false, message: error.response?.data?.error || "Login failed" };
    }
};
