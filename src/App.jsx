// mengimpor Komponen RouterProvider dari paket react-router-dom
import { RouterProvider } from "react-router-dom"

// mengimpor router dari file router.js
import router from "./router"

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
