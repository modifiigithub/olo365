import { RouterProvider } from "react-router-dom";
import router from "./routes/root";
import "./App.css"
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
      />
    </HelmetProvider>
  )
}