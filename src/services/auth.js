export const TOKEN_KEY = "@petshop-token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const api = {
  baseURL: "http://localhost:8080/cadastroPet/",
  
  login: async (email, password) => {
    try {
      //Aqui ésta sendo passodo o login
      const response = await fetch(`${api.baseURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error("Falha na autenticação");
      }
      
      const data = await response.json();
      login(data.token);
      return data;
    } catch (error) {
      throw error;
    }
  },
  
  register: async (userData) => {
    try {
    //  aqui está sendo passado o cadastro
      const response = await fetch(`${api.baseURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error("Falha no cadastro");
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
}; 