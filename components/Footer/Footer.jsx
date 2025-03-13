import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { WhatsappSVG, PhoneSVG, InstagramSVG, TwitterSVG, LinkedInSVG } from "./../icons";
import { MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
    const footerNavigation = {
        "services": [
            {
                name: "Hot Jobs",
                link: "/services/hot-jobs"
            },
            {
                name: "Find Candidates",
                link: "/recruiter/find-candidates"
            },
            {
                name: "Post a Job",
                link: "/recruiter/post-job"
            },
            {
                name: "Contact Sales",
                link: "/contact-us"
            }
        ],
        "links": [
            {
                name: "Our Services",
                link: "/services"
            },
            {
                name: "Feedback",
                link: "/feedback"
            },
            {
                name: "About Us",
                link: "/about-us"
            }
        ],
    }

    return (
        <footer className={styles.footer}>
            <div className="">
                <div className="max-w-[1400px] mx-auto flex justify-between gap-2 items-center py-4 border-b-2 border-gray-300">
                    <div>
                        {/* <Link href="/" className={styles.logo}>
                            RightSource360
                        </Link> */}
                    </div>
                    <div>
                        <div className="flex justify-start items-center gap-3">
                            <div className="cursor-pointer">
                                <PhoneSVG height={35} width={35} />
                            </div>
                            <div className="cursor-pointer">
                                <WhatsappSVG height={30} width={30} />
                            </div>
                            <div className="cursor-pointer">
                                <LinkedInSVG height={40} width={40} />
                            </div>
                            <div className="cursor-pointer">
                                <InstagramSVG height={35} width={35} />
                            </div>
                            <div className="cursor-pointer">
                                <TwitterSVG height={35} width={35} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto flex justify-start gap-2 items-start pt-2 pb-4">
                <div className="flex-1 max-w-[600px] text-left my-auto">
                    <div>
                        <Link href="/" className={styles.logo}>
                            RightSource360
                        </Link>
                    </div>
                    <ul className={styles.footer_navigation}>
                        <li>
                            <div className="my-4">
                                Subscribe our newsletter to get more updates
                                <div className="w-fit border border-white my-2 px-2 py-2 rounded-xl">
                                    <input placeholder="Email Address" className="border-none outline-none px-4" />
                                    <button type="button" className="bg-white text-black rounded-xl px-2 py-1 cursor-pointer font-medium">Subscribe</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 max-w-[250px] text-left">
                    <ul className={styles.footer_navigation}>
                        <li className={styles.sectionTitle}>Explore</li>
                        {
                            footerNavigation?.services?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={item.link}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="flex-1 max-w-[250px] text-left">
                    <ul className={styles.footer_navigation}>
                        <li className={styles.sectionTitle}>Links</li>
                        {
                            footerNavigation?.links?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={item.link}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="flex-1 max-w-[300px] text-left">
                    <ul className={styles.footer_navigation}>
                        <li className={styles.sectionTitle}>Support</li>
                        <li>
                            <div className="flex items-center justify-start gap-4 mb-4">
                                <div className="p-3 rounded-full">
                                    <MapPin />
                                </div>
                                <div>
                                    <span>Main location</span><br />
                                    <div className="text-[18px] font-semibold">55 East Street, New York</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-start gap-4 mb-4">
                                <div className="p-3 rounded-full">
                                    <PhoneCall />
                                </div>
                                <div>
                                    <span>Have any Question</span><br />
                                    <div className="text-[18px] font-semibold">Call : (245) 888 990</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="">
                <div className="max-w-[1400px] border-t-2 border-gray-300 mx-auto flex justify-between gap-2 items-center py-3 text-white">
                    <div>
                        © 2025 RightSource360. All rights reserved.
                    </div>
                    <div className={styles.copyright_navigation}>
                        <Link href="/about-us">
                            About Us
                        </Link>
                        <Link href="/contact-us">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}