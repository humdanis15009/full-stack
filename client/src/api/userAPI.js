// src/api/userAPI.js
import axios from '../utils/axiosInstance';

export const loginUser = async (email, password) => {
    const res = await axios.post('http://localhost:3000/api/users/login', { email, password }, { withCredentials: true });
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    return res.data;
};

export const registerUser = async (userData) => {
    const res = await axios.post('http://localhost:3000/api/users/', userData);
    return res.data;
};

// export const handleLogout = async () => {
//     const navigate = useNavigate();
//     try {
//         await axios.post('http://localhost:3000/api/users/logout', {}, {
//             withCredentials: true // So the token cookie is included
//         });


//         navigate('/login');
//     } catch (err) {
//         console.error('Logout failed:', err);
//     }
// };