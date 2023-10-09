import _ from "lodash";

const Product = ({product}) => {

    return (

        <a href=""
           className="flex justify-around items-center flex-col relative h-full overflow-hidden cursor-pointer min-w-[240px] bg-white border border-[#fbfbfb] px-1">
            <div className="h-56 w-full">
                <img
                    className="h-full w-full object-cover block object-top transition-all duration-300 ease-in"
                    src={product.img} alt=""/>
            </div>
            <div className="p-1">
                <p className="text-sm font-normal text-[#555] m-0 mt-1 line-clamp-1">
                    {product.name}
                </p>
                <div className="flex mt-1">
                    <i className="fa-solid fa-star text-[#F15B29]"/>
                    <i className="fa-solid fa-star text-[#F15B29]"/>
                    <i className="fa-solid fa-star text-[#F15B29]"/>
                    <i className="fa-solid fa-star text-[#F15B29]"/>
                    <i className="fa-solid fa-star text-[#F15B29]"/>
                </div>
                <div className="flex justify-between items-center mt-2 mb-2">
                    <span className="text-[#0e2954] font-bold text-base font-['Outfit']">৳ {_.round(product.sale_price)}</span>
                    <span
                        className="text-xs font-['Outfit'] font-medium text-[#777] px-1">{product.total_sold} SOLD</span>
                </div>
            </div>
        </a>
    )
}
export default Product