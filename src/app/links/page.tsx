import {ArrowRightIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="flex flex-col justify-center w-full items-center h-auto sm:h-screen lg:h-screen gap-5">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ismaelricardocosta/"
          className="relative flex flex-col justify-center w-1/2 xs:w-full sm:w-1/2 lg:w-1/3 text-justify bg-transparent py-7 px-5 border-2 rounded-2xl transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-102"
        >
          LinkedIn
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <ArrowRightIcon className="size-4" />
          </span>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ismaelirc"
          className="relative flex flex-col justify-center w-1/2 xs:w-full sm:w-1/2 lg:w-1/3 text-justify bg-transparent py-7 px-5 border-2 rounded-2xl transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-102"
        >
          Github
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <ArrowRightIcon className="size-4" />
          </span>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/ismaelirc/"
          className="relative flex flex-col justify-center w-1/2 xs:w-full  sm:w-1/2 lg:w-1/3 text-justify bg-transparent py-7 px-5 border-2 rounded-2xl transition delay-10 duration-200 ease-in-out hover:-translate-y-1 hover:scale-102"
        >
          Instagram
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <ArrowRightIcon className="size-4" />
          </span>
        </Link>
      </div>
    </>
  );
}
