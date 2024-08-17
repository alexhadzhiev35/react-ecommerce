import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
    // Optionally, you can force a reload to clear any cached data
    window.location.reload();
  }, [logout, navigate]);

  return null; // No need to render anything
};

export default Logout;
