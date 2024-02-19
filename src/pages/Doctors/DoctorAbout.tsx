import {formateDate} from "../../utils/formateDate.ts";

const DoctorAbout = () => {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>

            <div>
                <h3 className={"text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2"}>
                    About of
                    <span className={"text-irisBlueColor font-bold text-[24px] leading-9"}>Mohammed Salman</span>
                </h3>

                <p className={"text_para"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi
                    ducimus eligendi expedita
                    facere incidunt magnam, nam nemo odio provident quae quisquam quo recusandae sapiente velit
                    veritatis
                    vitae voluptas voluptatem.</p>
            </div>


            <div className={"mt-14"}>
                <h3 className={"text-[20px] leading-[20px] text-headingColor font-semibold"}>
                    Education</h3>
                <ul className={"pt-4 md:p-5"}>
                    <li className={"flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] "}>
                        <div>
                                <span className={"text-irisBlueColor text-[15px] leading-7 font-semibold"}>
                                    23 June 2007 </span>
                            <p className={"text-[16px leading-6 font-medium text-textColor]"}>PHD in Surgeon</p>
                        </div>
                        <p className={"text-[16px leading-6 font-medium text-textColor]"}>New Hospital,New York</p>
                    </li>

                    <li className={"flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] "}>
                        <div>
                                <span className={"text-irisBlueColor text-[15px] leading-7 font-semibold"}>
                                    {formateDate('07-04-2010')} -  {formateDate('10-04-2014')}</span>
                            <p className={"text-[16px leading-6 font-medium text-textColor]"}>PHD in Surgeon</p>
                        </div>
                        <p className={"text-[16px leading-6 font-medium text-textColor]"}>New Hospital,New York</p>
                    </li>
                </ul>
            </div>


            <div className={"mt-14"}>
                <h3 className={"text-[20px] leading-[20px] text-headingColor font-semibold"}>
                    Experiences</h3>
                <ul className={"grid sm:grid-cols-2 gap-[30px]  pt-4 md:p-5"}>
                    <li className={"p-4 rounded bg-[#fff9ea]"}>
                        <span className={"text-yellowColor text-[15px] leading-6 font-semibold"}>
                            {formateDate("10-17-2010")} - {formateDate("10-17-2010")}
                        </span>
                        <p className={"text-[16px] leading-6 font-medium text-textColor"}>Sr.Surgeon</p>
                        <p className={"text-[14px] leading-6 font-medium text-textColor]"}>New Hospital,New York</p>
                    </li>


                    <li className={"p-4 rounded bg-[#fff9ea]"}>
                        <span className={"text-yellowColor text-[15px] leading-6 font-semibold"}>
                            {formateDate("10-17-2010")} - {formateDate("10-17-2010")}
                        </span>
                        <p className={"text-[16px] leading-6 font-medium text-textColor"}>Sr.Surgeon</p>
                        <p className={"text-[14px] leading-6 font-medium text-textColor]"}>New Hospital,New York</p>
                    </li>
                    <li className={"p-4 rounded bg-[#fff9ea]"}>
                        <span className={"text-yellowColor text-[15px] leading-6 font-semibold"}>
                            {formateDate("10-17-2010")} - {formateDate("10-17-2010")}
                        </span>
                        <p className={"text-[16px] leading-6 font-medium text-textColor"}>Sr.Surgeon</p>
                        <p className={"text-[14px] leading-6 font-medium text-textColor]"}>New Hospital,New York</p>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default DoctorAbout;