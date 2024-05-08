import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import router from "./routes/root";
import "./App.css"

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  )
}