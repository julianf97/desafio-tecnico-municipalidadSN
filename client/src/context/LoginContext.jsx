import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  
  const storedUser = JSON.parse(localStorage.getItem("userChallengeMunicipalidad")) || {
    logged: false,
    admin: false
  };

  const [user, setUser] = useState(storedUser);

  const [errorEmailPassword, setErrorEmailPassword] = useState();

  const navigate = useNavigate()

  const tryLogin = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (result.success) {
        const isAdmin = result.admin === 'true';

        const updatedUser = {
          logged: true,
          admin: isAdmin,
        };

        setUser(updatedUser);
        localStorage.setItem("userChallengeMunicipalidad", JSON.stringify(updatedUser));

        if (isAdmin) {
          navigate('/admin');
        } else {
          navigate('/home');
        }
      } else {
        console.error("Authentication failed:", result.message);
        setErrorEmailPassword(result.success)

      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };
    
  
  return (
    <LoginContext.Provider value={{
      user,
      setUser,
      tryLogin,
      errorEmailPassword, 
      }}>
      {children}
    </LoginContext.Provider>
  );
};