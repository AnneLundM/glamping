import { useAuthContext } from "../context/useAuthContext";
import ProtectedRoute from "./ProtectedRoute";

const RequireAuth = ({ children }) => {
  const { user } = useAuthContext();


  return (
    <ProtectedRoute isAllowed={user.role === "admin"}>
      {children}
    </ProtectedRoute>
  );
};

export default RequireAuth;
