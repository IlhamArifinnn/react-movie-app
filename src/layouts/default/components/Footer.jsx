const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-6 px-8 mt-12">
      <div className="max-w-7xl mx-auto text-center text-slate-400">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/IlhamArifinnn"
            className="underline text-indigo-800"
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
