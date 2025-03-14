import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import style from "./ContactUs.module.css";

export default function ContactUS() {
    return (
        <div>
            <div className="flex justify-center flex-wrap mx-[100px] my-[50px] items-start gap-[20px]">
                <div className="grow tracking-wide">
                    <div className="text-2xl font-semibold my-3">
                        Feel Free to Get in Touch with RightSource360
                    </div>
                    <div className="text-md text-gray-500 my-3">
                        {"Have questions or looking for exceptional talent? We're here to help!"}<br />
                        {"Reach out to us today and let's build success together!"}
                    </div>
                    <div>
                        <div className="flex justify-start items-center gap-4 my-6">
                            <div className="p-4 bg-[#00879E] rounded-md">
                                <PhoneCall size={26} color="white" strokeWidth={2} />
                            </div>
                            <div>
                                <span className="font-medium text-[18px] text-[#00879E]">
                                    Support
                                </span><br />
                                <span className="text-[20px]">+ (245) 888 990</span>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-4 my-6">
                            <div className="p-4 bg-[#00879E] rounded-md">
                                <Mail size={26} color="white" strokeWidth={2} />
                            </div>
                            <div>
                                <span className="font-medium text-[18px] text-[#00879E]">
                                    Write to us
                                </span><br />
                                <span className="text-[20px]">syamkumar6845@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-4 my-6">
                            <div className="p-4 bg-[#00879E] rounded-md">
                                <MapPin size={26} color="white" strokeWidth={2} />
                            </div>
                            <div>
                                <span className="font-medium text-[18px] text-[#00879E]">
                                    Visit Anytime
                                </span><br />
                                <span className="text-[20px]">30 broklyn golden street, New York</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Work Timings:</span>
                                <span className="text-[18px] px-2 text-[#00879E] font-medium">9.30 AM to 6.30 PM</span>
                            </div>
                            <div>
                                <span>Working Days:</span>
                                <span className="text-[18px] px-2 text-[#00879E] font-medium">(Monday to Friday)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow">
                    <div className={style.feedbackForm}>
                        <div className={style.formGroup}>
                            <div className={style.formElement}>
                                <input type="text" placeholder="Your full name" />
                            </div>
                            <div className={style.formElement}>
                                <input type="text" placeholder="Your email" />
                            </div>
                        </div>
                        <div className={style.formElement}>
                            <input type="text" placeholder="Your phone number" />
                        </div>
                        <div className={style.formElement}>
                            <textarea placeholder="Write a message"></textarea>
                        </div>
                        <div className={style.formElement}>
                            <input type="button" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5813.6811402368185!2d78.37908233908725!3d17.4514691812712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ded9f6f0d7%3A0xa3d91e5d00d50b63!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1741972972275!5m2!1sen!2sin" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}
