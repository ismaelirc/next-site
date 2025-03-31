import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 px-4 w-full flex justify-between items-center text-gray-600 ">
      <span>Ismael Costa</span>
      <div className="flex gap-4">
        <Link className="hover:text-gray-900" href="/">
          Projetos
        </Link>
        <span className="text-gray-400">|</span>
        <Link className="hover:text-gray-900" href="/">
          Pessoal
        </Link>
        <span className="text-gray-400">|</span>
        <Link className="hover:text-gray-900" href="/links">
          Links
        </Link>
      </div>
    </header>
  );
};

export default Header;
