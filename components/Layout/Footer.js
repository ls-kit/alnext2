const Footer = () => {
    return (
        <footer className="bg-white mt-8">
            <div className="container m-auto">
                <div className="grid footer-box">
                    <div className="footer-address">
                        <img src="https://admin.alibainternational.com/storage/setting/logo/600x600%20international.png"
                             alt=""
                             width="90"
                             height="90"
                        />
                    </div>

                    <div className="footer-menu">
                        <h3 className="mb-2 font-bold text-lg">Contacts</h3>
                        <ul>
                            <li>Account</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shipping Charge</li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <h3 className="mb-2 font-bold text-lg">Information</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Return & Refund</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer