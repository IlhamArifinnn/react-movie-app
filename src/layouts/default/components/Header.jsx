import ThemeToggle from "../../../components/ui/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-5xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              React MovieApp
            </h1>
          </div>
          <nav className="flex items-center gap-4">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
