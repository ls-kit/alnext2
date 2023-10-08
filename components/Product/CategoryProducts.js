import Product from "./Product";
import {getSetting} from "/utils/Helpers";

const CategoryProducts = () => {

    const section_one_active = getSetting(general, "section_one_active");
    const section_two_active = getSetting(general, "section_two_active");
    const section_three_active = getSetting(general, "section_three_active");
    const section_four_active = getSetting(general, "section_four_active");
    const section_five_active = getSetting(general, "section_five_active");
    console.log('section', section_one_active)

    return (
        <section className="innovate-main-container">
            <div className="flex pt-2.5 max-[768px]:flex-col">
                <a href=""
                   className="max-[768px]:w-full max-[768px]:bg-white max-[768px]:flex-row max-[768px]:justify-between flex flex-col justify-center w-60 min-w-60 items-center relative bg-[#f15b2936] max-[768px]:p-3">
                    <h4 className="text-base font-bold mt-2 text-center text-black mb-2">SHOES</h4>
                    <button
                        className="justify-center text-sm text-white cursor-pointer rounded-[100px] border-0 py-1.5 px-[25px] bg-[#F15B29]"
                        type="button">View All
                    </button>
                </a>
                <div className="custom-width-full-240 max-[768px]:w-full overflow-auto innovate-scrollbar-hidden">
                    <div className="flex">

                        {Array.from({length: 5}, (value, key) =>
                            <Product/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryProducts;