

import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import {useState} from "react";
// @ts-ignore
const FaqItem = ({item}) => {
    const[isOpen,setIsOpen]=useState(false)

    const toggleAccordion=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div className={"p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer"} >
            <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>

                <h4 className="text-[14px] leading-7 lg:text-[22px] lg:leading-9 text-headingColor">
                    {item.question}
                </h4>
                <div className={` ${isOpen && "bg-primaryColor text-white border-none"} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
                    {isOpen ? <AiOutlineMinus/> :<AiOutlinePlus/>}
                </div>
            </div>

            {
                isOpen && <div>
                <p className="text-[14px] leading-9 lg:text-[16px] lg:leading-9 font-[400] text-textColor">
                    {item.content}
                </p>
                </div>
            }

        </div>
    );
};

export default FaqItem;