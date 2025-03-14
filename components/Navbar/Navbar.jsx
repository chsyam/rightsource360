"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Navbar.module.css"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WhatsappSVG, PhoneSVG, InstagramSVG, TwitterSVG, LinkedInSVG } from "./../icons";

export default function Navbar() {
    const [toggleDropdownIndex, setToggleDropdownIndex] = useState(-1);
    const [activeMenuIndex, setActiveMenuIndex] = useState(-1);

    const navbarMenuList = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Job Seeker",
            link: "/job-seeker",
            subMenu: [
                {
                    name: "Login",
                    link: "/job-seeker/login"
                },
                {
                    name: "Signup",
                    link: "/job-seeker/signup"
                },
                {
                    name: "Post resume",
                    link: "/job-seeker/post-resume"
                },
                {
                    name: "Create Job Alert",
                    link: "/job-seeker/create-job-alert"
                }
            ]
        },
        {
            name: "Employer",
            link: "/employer",
            subMenu: [
                {
                    name: "Login",
                    link: "/employer/login"
                },
                {
                    name: "Signup",
                    link: "/employer/signup"
                },
                {
                    name: "Post Profile",
                    link: "/employer/post-profile"
                }
            ]
        },
        {
            name: "Recruiter",
            link: "/recruiter",
            subMenu: [
                {
                    name: "Login",
                    link: "/recruiter/login"
                },
                {
                    name: "Signup",
                    link: "/recruiter/signup"
                },
                {
                    name: "Post a Job",
                    link: "/recruiter/post-job"
                }
            ]
        },
        {
            name: "Services",
            link: "/services",
            subMenu: [
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
            ]
        },
        {
            name: "Demo",
            link: "/demo",
            subMenu: [
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
            ]
        },
        {
            name: "Contact Us",
            link: "/contact-us"
        }
    ]

    useEffect(() => {
        navbarMenuList?.forEach((menu, index) => {
            if (window.location.pathname.indexOf(menu.link) > -1) {
                setActiveMenuIndex(index);
            } else {
                menu.subMenu?.forEach((subMenu) => {
                    if (window.location.pathname.indexOf(subMenu.link) > -1) {
                        setActiveMenuIndex(index);
                    }
                });
            }
        });
    }, [activeMenuIndex, toggleDropdownIndex]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className="bg-[#FFF7F7]">
                    <div className="max-w-[1400px] mx-auto py-1 flex justify-end items-center gap-2 px-[15px]">
                        <div className="cursor-pointer">
                            <PhoneSVG height={25} width={25} />
                        </div>
                        <div className="cursor-pointer">
                            <WhatsappSVG height={20} width={20} />
                        </div>
                        <div className="cursor-pointer">
                            <LinkedInSVG height={25} width={25} />
                        </div>
                        <div className="cursor-pointer">
                            <InstagramSVG height={25} width={25} />
                        </div>
                        <div className="cursor-pointer">
                            <TwitterSVG height={25} width={25} />
                        </div>
                    </div>
                </div>
                <div className={styles.navContent}>
                    <div>
                        <Link href="/" className={styles.logo}>
                            RightSource360
                        </Link>
                    </div>
                    <div className={styles.navLinks}>
                        {
                            navbarMenuList.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <li className={styles.dropdown}
                                            onMouseEnter={() => setToggleDropdownIndex(index)}
                                            onMouseLeave={() => setToggleDropdownIndex(-1)}
                                        >
                                            <Link href={`${item.link}`} className="">
                                                <div className={`flex items-center gap-[2px] justify-center ${toggleDropdownIndex === index && 'text-[#FFF]'} ${activeMenuIndex === index && 'text-[#FFF] font-semibold'}`}>
                                                    {item.name}
                                                    {item.subMenu && toggleDropdownIndex !== index && <ChevronDown />}
                                                    {item.subMenu && toggleDropdownIndex === index && <ChevronUp />}
                                                </div>
                                            </Link>

                                            {
                                                item.subMenu && (
                                                    <div className={styles.dropdownContent}>
                                                        {
                                                            item.subMenu.map((subItem, subIndex) => {
                                                                return (
                                                                    <Link key={subIndex} href={`${subItem.link}`}>
                                                                        {subItem.name}
                                                                    </Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            }
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <div className={styles.navLinks}>

                    </div>
                </div>
            </div>
        </nav >
    );
}