import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const useAuth = () => {
  const { auth, login, logout } = useContext(AuthContext);

  return { auth, login, logout };
};

export default useAuth;
