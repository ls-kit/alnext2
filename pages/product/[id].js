import Sidebar from "../../components/Layout/Sidebar";
import { useRouter } from "next/router";
import { find_product_from_state } from "../../utils/CartHelpers";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = find_product_from_state(details, id);

  return (
    <>
      <section className="innovate-main-container">
        <div className="flex justify-between mt-16 max-[768px]:mt-[119px] max-[1200px]:flex-wrap">
          <div className="innovate-product-page-shop-parent flex justify-between flex-wrap max-[1200px]:w-full">
            <div className="innovate-product-page-shop-left bg-white w-[240px] max-[768px]:mt-[30px] max-[768px]:order-2 max-[768px]:w-full">
              <Sidebar />
            </div>

            <div className="innovate-product-page-shop-detailes bg-white flex justify-between p-4 flex-wrap max-[768px]:order-1 max-[768px]:w-full">
              <div className="w-full">
                <h4 className="text-lg font-bold font-['Outfit'] pb-3.5">
                  Trend polyurethane shoulder bag, small bag, one-shoulder bag,
                  2023 collection, suitable for import
                </h4>
              </div>
              <div className="w-2/5 max-[1400px]:w-full">
                <div className="w-full h-auto ">
                  <img
                    className="w-full h-full object-cover"
                    src="assets/images/product (1).jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-wrap mt-6 overflow-auto">
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                  <div className="mr-2.5 mb-2.5 p-1 border border-[#eee] border-solid rounded-[4px] cursor-pointer w-[68px] h-[68px]">
                    <img
                      className="w-full h-full object-cover"
                      src="assets/images/product (1).jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="max-[1400px]:w-full custom-info-width">
                <div className="flex justify-between mb-2.5 max-[576px]:flex-wrap">
                  <div className="p-2.5 rounded-[4px] flex flex-col items-center justify-center max-[576px]:w-full max-[576px]:mt-1.5 mb-1.5 bg-[#F15B29] custom-info-price-width">
                    <span className="text-white text-black text-xl font-['Outfit'] mb-1.5 text-center">
                      ৳487
                    </span>
                    <span className="text-white text-center text-base font-semibold">
                      3 or more
                    </span>
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#eee] flex flex-col items-center justify-center max-[576px]:w-full max-[576px]:mt-1.5 mb-1.5 custom-info-price-width">
                    <span className="text-black text-xl font-['Outfit'] mb-1.5 text-center">
                      ৳487
                    </span>
                    <span className="text-center text-base font-semibold">
                      3 or more
                    </span>
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#eee] flex flex-col items-center justify-center max-[576px]:w-full max-[576px]:mt-1.5 mb-1.5 custom-info-price-width">
                    <span className="text-black text-xl font-['Outfit'] mb-1.5 text-center">
                      ৳487
                    </span>
                    <span className="text-center text-base font-semibold">
                      3 or more
                    </span>
                  </div>
                </div>
                <div className="innovate-product-page-shop-detailes__info-color">
                  <div className="mb-2 text-lg font-semibold font-['Outfit']">
                    Color : White
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-[50px] h-[50px] mr-2 mb-2 rounded-[6px] border-2 border-solid hover:border-[#F15B29] border-[#F15B29]">
                      <img
                        className="p-1 w-full h-full object-cover"
                        src="assets/images/product (1).jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[50px] h-[50px] mr-2 mb-2 rounded-[6px] border-2 border-[#eee] border-solid hover:border-[#F15B29]">
                      <img
                        className="p-1 w-full h-full object-cover"
                        src="assets/images/product (1).jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[50px] h-[50px] mr-2 mb-2 rounded-[6px] border-2 border-[#eee] border-solid hover:border-[#F15B29]">
                      <img
                        className="p-1 w-full h-full object-cover"
                        src="assets/images/product (1).jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[50px] h-[50px] mr-2 mb-2 rounded-[6px] border-2 border-[#eee] border-solid hover:border-[#F15B29]">
                      <img
                        className="p-1 w-full h-full object-cover"
                        src="assets/images/product (1).jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[50px] h-[50px] mr-2 mb-2 rounded-[6px] border-2 border-[#eee] border-solid hover:border-[#F15B29]">
                      <img
                        className="p-1 w-full h-full object-cover"
                        src="assets/images/product (1).jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[50px] h-[50px] mr-2 mb-2 rounded-[6px] border-2 border-[#eee] border-solid hover:border-[#F15B29]">
                      <img
                        className="p-1 w-full h-full object-cover"
                        src="assets/images/product (1).jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-[50px] h-[50px] mr-2 mb-2 rounded-[6px] border-2 border-[#eee] border-solid hover:border-[#F15B29]">
                      <img
                        className="p-1 w-full h-full object-cover"
                        src="assets/images/product (1).jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-[6px] overflow-hidden border border-solid border-[#f2f2f2] mb-5 mt-5">
                  <table className="w-full text-sm font-medium rounded-[6px] overflow-hidden font-['Outfit'] border-collapse">
                    <thead>
                      <tr className="bg-[#f2f2f2] hover:bg-[#f2f2f2]">
                        <th className="w-1/3 font-semibold p-4 text-left text-sm font-medium">
                          Color
                        </th>
                        <th className="w-1/3 font-semibold p-4 text-left text-sm font-medium">
                          Price
                        </th>
                        <th className="w-1/3 font-semibold p-4 text-left text-sm font-medium">
                          Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-[#f2f2f2]">
                        <td className="p-4 text-left text-sm font-medium">
                          White
                        </td>
                        <td className="p-4 text-left text-sm font-medium">
                          ৳ 487
                        </td>
                        <td className="p-4 text-left text-sm font-medium">8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between mb-4 p-4 bg-[#f15b2928] cursor-pointer rounded-[4px]">
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-black mb-1.5 font-['Outfit']">
                      শিপিং চার্জ
                    </span>
                    <span className="font-semibold font-['Outfit'] text-sm">
                      ৳ 660 / 850 Per Kg
                    </span>
                  </div>
                  <div className="font-semibold font-['Outfit'] text-sm text-black">
                    বিস্তারিত দেখুন{" "}
                    <i className="fa-solid fa-chevron-right inline ml-1"></i>
                  </div>
                </div>
                <div className="rounded-[6px] overflow-hidden border border-solid border-[#f2f2f2] mb-5 mt-5">
                  <table className="w-full text-sm font-medium rounded-[6px] overflow-hidden font-['Outfit'] border-collapse">
                    <thead>
                      <tr className="bg-[#f2f2f2] hover:bg-[#f2f2f2]">
                        <th className="p-4 text-left text-sm font-medium">
                          Chair
                        </th>
                        <th className="p-4 text-left text-sm font-medium">
                          The Laid Back
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-[#f2f2f2]">
                        <td className="p-4 text-left text-sm font-medium">
                          Product Quantity
                        </td>
                        <td className="p-4 text-left text-sm font-medium">0</td>
                      </tr>
                      <tr className="hover:bg-[#f2f2f2]">
                        <td className="p-4 text-left text-sm font-medium">
                          Product Price
                        </td>
                        <td className="p-4 text-left text-sm font-medium">
                          ৳ 0
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2f2f2]">
                        <td className="p-4 text-left text-sm font-medium">
                          Shipping Charge
                        </td>
                        <td className="p-4 text-left text-sm font-medium">
                          ৳ 670 / 850 Per Kg
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2f2f2]">
                        <td className="p-4 text-left text-sm font-medium">
                          Total Cost
                        </td>
                        <td className="p-4 text-left text-sm font-medium">
                          ৳ 0 + Shipping & Courier Charges
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2f2f2]">
                        <td className="p-4 text-left text-sm font-medium">
                          Pay now (60%)
                        </td>
                        <td className="p-4 text-left text-sm font-medium">
                          ৳ 0
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2f2f2]">
                        <th className="p-4 text-left text-sm font-medium">
                          Pay on Delivery
                        </th>
                        <td className="p-4 text-left text-sm font-medium">
                          ৳ 0 + Shipping & Courier Charges
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="max-[576px]:flex-wrap flex justify-between mt-5 mb-5">
                  <button
                    className="max-[576px]:w-full max-[576px]:my-1.5 bg-white rounded-[64px] border border-collapse border-[#eee] py-2.5 px-4 flex items-center justify-center cursor-pointer"
                    type="button"
                  >
                    <i className="fa-solid fa-heart text-xl text-[#eee]"></i>
                    <span className="font-medium text-base block ml-2">
                      Save
                    </span>
                  </button>
                  <button
                    className="info-btn-add-cart max-[576px]:w-full max-[576px]:my-1.5 max-[576px]:ml-0 grow ml-4 text-white bg-[#F15B29] rounded-[64px] border border-collapse border-[#eee] py-2.5 px-4 flex items-center justify-center cursor-pointer"
                    type="button"
                  >
                    <i className="fa-solid fa-cart-shopping text-xl  "></i>
                    <span className="font-medium text-base block ml-2">
                      Add to Cart
                    </span>
                  </button>
                  <button
                    className="info-btn-buy-now max-[576px]:w-full max-[576px]:my-1.5 bg-[#F7941D] grow ml-4 max-[576px]:ml-0 text-white rounded-[64px] border border-collapse border-[#eee] py-2.5 px-4 flex items-center justify-center cursor-pointer"
                    type="button"
                  >
                    <i className="fa-solid fa-basket-shopping text-xl  "></i>
                    <span className="font-medium text-base block ml-2">
                      Buy Now
                    </span>
                  </button>
                </div>
                <div className="mt-5">
                  <div className="mb-3">
                    <b className="text-base font-['Outfit']">Product Code: </b>
                    <span className="text-base font-['Outfit']">{id}</span>
                  </div>
                  <div className="mb-3">
                    <b className="text-base font-['Outfit']">
                      Approximate Weight:{" "}
                    </b>
                    <span className="text-base font-['Outfit']">0.32Kg</span>
                  </div>
                  <div className="mb-3">
                    <b className="text-base font-['Outfit']">Total Sold: </b>
                    <span className="text-base font-['Outfit']">415.8k</span>
                  </div>
                  <div className="mb-3">
                    <b className="text-base font-['Outfit']">Seller Score: </b>
                    <span className="text-base font-['Outfit']">10</span>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href=""
                    className="py-1.5 px-7 rounded-[100px] text-white cursor-pointer border-0 font-['Outfit'] flex items-center justify-center bg-[#F15B29] text-sm mr-5"
                  >
                    Visit Store
                  </a>
                  <div className="flex items-center">
                    <button
                      className="flex items-center justify-center h-7 w-7 rounded-[50%] bg-[#F15B29] border-0 outline-none text-white text-base mr-2.5 cursor-pointer"
                      type="button"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </button>
                    <button
                      className="flex items-center justify-center h-7 w-7 rounded-[50%] bg-[#F15B29] border-0 outline-none text-white text-base mr-2.5 cursor-pointer"
                      type="button"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
