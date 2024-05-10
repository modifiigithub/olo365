import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import router from "./routes/root";
import "./App.css"
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </HelmetProvider>
  )
}