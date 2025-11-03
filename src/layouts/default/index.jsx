import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
