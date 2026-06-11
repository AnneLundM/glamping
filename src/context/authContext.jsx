import { useLocalStorage } from "@uidotdev/usehooks";
import { jwtDecode } from "jwt-decode";
import { createContext } from "react";
import { useNavigate } from "react-router";

// Fast Refresh vil helst kun have komponent-eksporter i en fil, men her hører
// både context'en og provideren naturligt sammen. Vi slukker reglen for denne ene linje.
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, saveAuth] = useLocalStorage("auth", {});
  const [user, setUser] = useLocalStorage("user", {});

  const navigate = useNavigate();

  const token = auth.token ? auth.token : "";
  
  // signIn
  const signIn = async (email, password) => {
    let response = await fetch("http://localhost:3042/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    let result = await response.json();

    const user = jwtDecode(result.data.token);
    setUser(user);

    saveAuth({ token: result.data.token });

    navigate("/backoffice");

    return user;
  };

  const value = { token, user, signIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
