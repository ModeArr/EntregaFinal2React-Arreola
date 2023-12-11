import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth()

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    )
  }

  if (isObjectEmpty(user)) {
    return <Navigate to="/" />
  }
  return children
};

export default ProtectedRoute;