const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 py-8 px-8 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/IlhamArifinnn"
            className="underline text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
          >
            Ilham Arifin
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
