import { MicrophoneIcon, XIcon, SearchIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../components/Avatar";
import HeaderOptions from "../components/HeaderOptions";

function Search() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const query = router.query.q;

  const search = (e) => {
    e.preventDefault();

    const query = searchInputRef.current.value;

    if (!query) return;

    router.push(`/search?q=${query}`);
  };

  return (
    <div>
      <Head>
        <title>{query}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
          <Image
            src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />

          <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 ">
            <input
              className="flex-grow w-full focus:outline-none"
              ref={searchInputRef}
              type="text"
            />
            <XIcon
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
              onClick={() => (searchInputRef.current.value = "")}
            />
            <MicrophoneIcon className="mr-3 h-6 hidden text-blue-500 sm:inline-flex border-l-2 pl-4 border-gray-300 cursor-pointer" />
            <SearchIcon className="cursor-pointer h-6 text-blue-500 hidden sm:inline-flex" />
            <button onClick={search} type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar
            className="ml-auto"
            url="https://lh3.googleusercontent.com/ogw/ADGmqu9oi1aeqEC3GNqHVwTKijLZVmH_o1TC_ervgm5U3k8=s83-c-mo"
          />
        </div>

         <HeaderOptions />
      </header>


    </div>
  );
}

export default Search;

export async function getServerSideProps(context){
  const useDummyData = false;
  
}