

import {Swiper,SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from "react-icons/hi";
import {Pagination} from "swiper/modules";

const TestiMonial = () => {
    return (
        <div className={"mt-[30] lg:mt-[55px]"}>
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
            breakpoints={{
                640: {
                    slidesPerView:1,
                    spaceBetween:0
                },
                768: {
                    slidesPerView:2,
                    spaceBetween:20
                },
                1024: {
                    slidesPerView:3,
                    spaceBetween:30
                }
            }}
            >
                <SwiperSlide>
                    <div className={"py-[30px] px-5 rounded-[13px]"}>
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold">Mohammed Salman</h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] mt-4 leading-7">
                           " I have taken medical service from them ,They treat so well and they are providing the best medical service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"py-[30px] px-5 rounded-[13px]"}>
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold">Mohammed Salman</h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] mt-4 leading-7">
                            " I have taken medical service from them ,They treat so well and they are providing the best medical service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"py-[30px] px-5 rounded-[13px]"}>
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold">Mohammed Salman</h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] mt-4 leading-7">
                            " I have taken medical service from them ,They treat so well and they are providing the best medical service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"py-[30px] px-5 rounded-[13px]"}>
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold">Mohammed Salman</h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] mt-4 leading-7">
                            " I have taken medical service from them ,They treat so well and they are providing the best medical service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"py-[30px] px-5 rounded-[13px]"}>
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold">Mohammed Salman</h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] mt-4 leading-7">
                            " I have taken medical service from them ,They treat so well and they are providing the best medical service"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"py-[30px] px-5 rounded-[13px]"}>
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt=""/>
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold">Mohammed Salman</h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                    <HiStar className="text-yellowColor w-[18px] h-5"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] mt-4 leading-7">
                            " I have taken medical service from them ,They treat so well and they are providing the best medical service"
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default TestiMonial;
