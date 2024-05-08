import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector((state: RootState) => state?.auth?.device_token);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}