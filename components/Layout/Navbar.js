import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { getSetting, loadAsset } from "/utils/Helpers";
import { BsFillCameraFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ general }) => {
  return (
    <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-white max-[768px]:h-auto max-[768px]:pt-3 max-[768px]:pb-3">
      <nav className="innovate-main-container pl-5 pr-5 max-[768px]:flex-wrap flex justify-between items-center h-full ml-auto mr-auto">
        <div className="max-[768px]:order-1">
          <Link href='/'>
            <Image width={60} height={40} src="/images/png-logo.png" />
          </Link>
        </div>
        <div className="innovate-navbar__search-bar h-[42px] bg-[#F15B29] flex items-center justify-between p-[3px] pl-4 rounded-[64px] max-[768px]:order-3 max-[768px]:w-full max-[768px]:max-w-full max-[768px]:mt-3">
          <BsFillCameraFill className={"text-xl text-white block"} />
          <input
            className="border-0 px-2 outline-none text-white font-normal font-['Outfit'] text-sm bg-transparent placeholder:text-white placeholder:font-normal placeholder:font-['Outfit'] placeholder:text-sm grow"
            type="text"
            placeholder="Search"
          />

          <button
            className="rounded-[64px] bg-white flex items-center justify-center border-0 outline-none"
            style={{ height: "38px", width: "64px" }}
            type="submit"
          >
            <AiOutlineSearch className={"text-[#F15B29]"} />
          </button>
        </div>
        <div className="flex items-baseline max-[768px]:order-2">
          <Link href="" className="block ml-4">
            <FaCartShopping className={"text-[28px] text-[#F15B29]"} />
          </Link>
          <Link href="" className="block ml-4">
            <AiOutlineHeart className={"text-[28px] text-[#F15B29]"} />
          </Link>
          <Link href="/login" className="block ml-4">
            <AiOutlineUser className={"text-[28px] text-[#F15B29]"} />
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
