import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { UserTypes } from "../enums/UserType";

const ProtectedRoute = ({
  children,
  adminOnly = false,
}: {
  children: JSX.Element;
  adminOnly?: boolean;
}) => {
  // const { isAuthenticated, role } = useSelector(
  // (state: RootState) => state.auth
  // );
  const isAuthenticated = true;
  const role = UserTypes.Admin;
  //
  if (!isAuthenticated) return <Navigate to="/" />;
  if (adminOnly && role !== UserTypes.Admin)
    return <Navigate to="/dashboard" />;

  return children;
};

export default ProtectedRoute;
