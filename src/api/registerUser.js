import axios from "axios";

const API_URL = "http://localhost:8080/cadastroPet";

export const registerUser = async (userData) => {
    try{
        const response = await axios.post(API_URL, userData);
        return response.data;
    }catch (error){
        console.log("Erro ao cadastrar usuário" + error);
        throw error;
    }
};

