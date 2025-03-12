import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { WhatsappSVG, PhoneSVG, InstagramSVG, TwitterSVG, LinkedInSVG } from "./../icons";

export default function Footer() {
    const footerNavigation = {
        "services": [
            {
                name: "Hot Jobs",
                link: "/services/hot-jobs"
            },
            {
                name: "Hot Resources",
                link: "/services/hot-resources?hot=true"
            },
            {
                name: "Profile Validation",
                link: "/services/profile-validation"
            },
            {
                name: "Web Development",
                link: "/services/web-development"
            },
            {
                name: "SEO",
                link: "/services/seo"
            },
            {
                name: "HRM",
                link: "/services/hrm"
            },
            {
                name: "ATS",
                link: "/services/ats"
            },
            {
                name: "RPO",
                link: "/services/rpo"
            }
        ],
        "demo": [
            {
                name: "Job Seeker",
                link: "/demo/job-seeker"
            },
            {
                name: "Employer",
                link: "/demo/employer"
            },
            {
                name: "Recruiter",
                link: "/demo/recruiter"
            },
            {
                name: "Profile Validation",
                link: "/demo/profile-validation"
            },
            {
                name: "HRM",
                link: "/demo/hrm"
            },
            {
                name: "ATS",
                link: "/demo/ats"
            },
            {
                name: "RPO",
                link: "/demo/rpo"
            },
        ],
        "employers_recruiters": [
            {
                name: "Post a Job",
                link: "/recruiter/post-job"
            },
            {
                name: "Find Candidates",
                link: "/recruiter/find-candidates"
            },
            {
                name: "Post Profile",
                link: "/employer/post-profile"
            }
        ],
        "job_seekers": [
            {
                name: "Post resume",
                link: "/job-seeker/post-resume"
            },
            {
                name: "Create Job Alert",
                link: "/job-seeker/create-job-alert"
            }
        ],
        "company_info": [
            {
                name: "About Us",
                link: "/about-us"
            },
            {
                name: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                name: "Terms & Conditions",
                link: "/terms-and-conditions"
            }
        ],
        "contact": [
            {
                name: "Contact Sales",
                link: "/contact-us"
            },
            {
                name: "Feedback",
                link: "/feedback"
            }
        ]
    }

    return (
        <footer className={styles.footer}>
            <div className="bg-white border-b-2 border-gray-300">
                <div className="max-w-[1400px] mx-auto flex justify-between gap-2 items-center py-4">
                    <div>
                        <Link href="/" className={styles.logo}>
                            RightSource360
                        </Link>
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
                <div className="flex-1 max-w-[300px] text-left">
                    <ul className={styles.footer_navigation}>
                        <li className="font-semibold text-xl py-[10px]">Services</li>
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
                <div className="flex-1 max-w-[300px] text-left">
                    <ul className={styles.footer_navigation}>
                        <li className="font-semibold text-xl py-[10px]">Demo</li>
                        {
                            footerNavigation?.demo?.map((item, index) => {
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
                        <li className="font-semibold text-xl py-[10px]">Employers and Recruiters</li>
                        {
                            footerNavigation?.employers_recruiters?.map((item, index) => {
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
                    <ul className={styles.footer_navigation}>
                        <li className="font-semibold text-xl py-[10px]">Job Seekers</li>
                        {
                            footerNavigation?.employers_recruiters?.map((item, index) => {
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
                        <li className="font-semibold text-xl py-[10px]">Company Information</li>
                        {
                            footerNavigation?.company_info?.map((item, index) => {
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
                    <ul className={styles.footer_navigation}>
                        <li className="font-semibold text-xl py-[10px]">Contact Us</li>
                        {
                            footerNavigation?.contact?.map((item, index) => {
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
            </div>

            <div className="bg-[#38B2AC]">
                <div className="max-w-[1400px] mx-auto flex justify-between gap-2 items-center py-3 font-medium">
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