// mengimpor Komponen RouterProvider dari paket react-router-dom
import { RouterProvider } from "react-router-dom";

// mengimpor router dari file router.js
import router from "./router";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
};

export default App;
