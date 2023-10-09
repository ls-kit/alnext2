import React, {useEffect, useState} from 'react';
import Product from "./Product";
import { getSetting } from "/utils/Helpers";
import {loadSectionsProducts} from "/utils/Services";
import _ from "lodash";

const CategoryProducts = ({ general }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({});
    const sectionSettings = {};

    const sections = [
        "section_one",
        "section_two",
        "section_three",
        "section_four",
        "section_five"
    ];

    const settings = [
        "title",
        "title_image",
        "visible_title",
        "query_url",
        "query_type"
    ];


    for (const section of sections) {
        for (const setting of settings) {
            const settingName = `${section}_${setting}`;
            sectionSettings[settingName] = getSetting(general, settingName);
        }
    }

    useEffect(() => {

        const loadData = async () => {
            for (const section of sections) {
                const response = await loadSectionsProducts(section);

                if (!_.isEmpty(response)) {
                    const productsData = JSON.parse(response.products);
                    if (!_.isEmpty(productsData)) {
                        setProducts((prevProducts) => ({
                            ...prevProducts,
                            [section]: [
                                ...(prevProducts[section] || []), // Preserve existing data for the section
                                ...productsData.Content, // Append new products
                            ],
                        }));
                    }
                }
            }
            setLoading(false);
        };

        loadData().then(r => r);
    }, []);


    const Section = ({ sectionSettings, section }) => (

        <section className="innovate-main-container">
            <div className="flex pt-2.5 max-[768px]:flex-col">
                <a href=""
                   className="max-[768px]:w-full max-[768px]:bg-white max-[768px]:flex-row max-[768px]:justify-between flex flex-col justify-center w-60 min-w-60 items-center relative bg-[#f15b2936] max-[768px]:p-3">
                    <h4 className="text-base font-bold mt-2 text-center text-black mb-2">{sectionSettings[section+'_title']}</h4>
                    <button
                        className="justify-center text-sm text-white cursor-pointer rounded-[100px] border-0 py-1.5 px-[25px] bg-[#F15B29]"
                        type="button">View All
                    </button>
                </a>
                <div className="custom-width-full-240 max-[768px]:w-full overflow-auto innovate-scrollbar-hidden">
                    <div className="flex">
                        {products[section]?.map((product, key) => (
                            <Product
                                key={key}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    const renderedSections = sections.map((sectionName) => (
        <Section key={sectionName} section={sectionName} sectionSettings={sectionSettings} />
    ));

    return (
        <>
            {renderedSections}
        </>
    )
}

export default CategoryProducts;
