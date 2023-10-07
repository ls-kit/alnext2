const Footer = () => {
    return (
        <footer className="bg-white mt-7 max-[768px]:mb-16">
            <div className="innovate-main-container">
                <div className="flex py-7 max-[768px]:flex-wrap">
                    <div className="w-1/4 py-0 px-2 mt-5 max-[768px]:w-2/4 flex flex-col ">
                        <a href="" className="block mb-2">
                            <img className="w-[100px] block"
                                 src="/images/png-logo.png" alt=""/></a>
                        <span className="text-base text-[#111] font-['Outfit'] font-normal block mt-1.5 flex flex-wrap">35/2, Jogi Nagar Lane (2nd Floor), Wari, Dhaka. (জয়কালী মন্দিরেরপাশে)</span>
                        <span
                            className="text-base text-[#111] font-['Outfit'] font-normal block mt-1.5 flex flex-wrap">Email: <a
                            href=""
                            className="text-base text-[#111] font-['Outfit'] font-normal block ml-1.5 max-[992px]:ml-0">chinashipbd@gmail.com</a></span>
                        <span
                            className="text-base text-[#111] font-['Outfit'] font-normal block mt-1.5 flex flex-wrap">Phone: <a
                            href=""
                            className="text-base text-[#111] font-['Outfit'] font-normal block ml-1.5 max-[992px]:ml-0">01703412631</a></span>
                        <ul className="m-0 p-0 flex items-center mt-4">
                            <li><a href=""
                                   className="flex items-center justify-center h-8 w-8 bg-[#F15B29] rounded-full mr-2 text-white"><i
                                className="fa-brands fa-facebook-f"/></a></li>
                            <li><a href=""
                                   className="flex items-center justify-center h-8 w-8 bg-[#F15B29] rounded-full mr-2 text-white"><i
                                className="fa-brands fa-youtube"/></a></li>
                            <li><a href=""
                                   className="flex items-center justify-center h-8 w-8 bg-[#F15B29] rounded-full mr-2 text-white"><i
                                className="fa-brands fa-linkedin-in"/></a></li>
                        </ul>
                    </div>
                    <div className="w-1/4 py-0 px-2 mt-5 max-[768px]:w-2/4">
                        <h3 className="text-lg font-bold text-[#111] mt-1.5 uppercase mb-2">CUSTOMER</h3>
                        <ul className="m-0 p-0">
                            <li className="mb-2"><a href=""
                                                    className="text-[#111] font-['Outfit'] text-base">Account</a></li>
                            <li className="mb-2"><a href="" className="text-[#111] font-['Outfit'] text-base">Cart</a>
                            </li>
                            <li className="mb-2"><a href=""
                                                    className="text-[#111] font-['Outfit'] text-base">Wishlist</a></li>
                            <li className="mb-2"><a href="" className="text-[#111] font-['Outfit'] text-base">Shipping
                                Charge</a></li>
                            <li className="mb-2"><a href="" className="text-[#111] font-['Outfit'] text-base">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4 py-0 px-2 mt-5 max-[768px]:w-2/4">
                        <h3 className="text-lg font-bold text-[#111] mt-1.5 uppercase mb-2">INFORMATION</h3>
                        <ul className="m-0 p-0">
                            <li className="mb-2"><a className="text-[#111] font-['Outfit'] text-base" href="">About
                                us</a></li>
                            <li className="mb-2"><a className="text-[#111] font-['Outfit'] text-base" href="">Contact
                                Us</a></li>
                            <li className="mb-2"><a className="text-[#111] font-['Outfit'] text-base" href="">Privacy
                                Policy</a></li>
                            <li className="mb-2"><a className="text-[#111] font-['Outfit'] text-base" href="">Returns &
                                Refund</a></li>
                            <li className="mb-2"><a className="text-[#111] font-['Outfit'] text-base" href="">Terms &
                                Conditions</a></li>
                        </ul>
                    </div>
                    <div className="w-1/4 py-0 px-2 mt-5 max-[768px]:w-2/4 flex flex-col">
                        <h3 className="text-lg font-bold text-[#111] mt-1.5 uppercase mb-2">MOBILE APPS</h3>
                        <a href="" className="block mb-2 mt-1"><img className="w-[120px]"
                                                                    src="assets/images/playstore.png" alt="" /></a>
                        <a href="" className="block mb-2 mt-1"><img className="w-[120px]"
                                                                    src="assets/images/applestore.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="innovate-main-container">
                <div className="flex justify-center items-center flex-wrap p-4">
                    <p className="mx-1.5 mb-0 mt-1.5 text-sm font-normal font-['Outfit']">© 2023 ChinaShipBD - All
                        Rights Reserved</p>
                    <p className="mx-1.5 mb-0 mt-1.5 text-sm font-normal font-['Outfit']">|</p>
                    <p className="mx-1.5 mb-0 mt-1.5 text-sm font-normal font-['Outfit']">Developed by
                        <a href="" className="font-medium text-[#F15B29]">BeCommerce</a>
                    </p>
                </div>
            </div>
        </footer>
)
}
export default Footer