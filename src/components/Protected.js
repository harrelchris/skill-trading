import { Navigate } from "react-router-dom";

function Protected({ isAuthenticated, children }) {
  if (isAuthenticated()) {
    return children;
  } else {
    return <Navigate to="/auth/authorize" replace />
  }
}

export default Protected;
