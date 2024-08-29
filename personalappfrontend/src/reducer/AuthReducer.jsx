import { createContext, useContext, useReducer } from "react";

const initialState = {
  isLoggedIn: !!localStorage.getItem("token"),
  role: null,
  token: localStorage.getItem("token"),
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoggedIn: true,
        role: action.payload.userrole,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        role: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
