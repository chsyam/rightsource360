"use client";

import { ChevronDown } from "lucide-react";
import styles from "./../../styles/LayoutComponents/Navbar.module.css"

export default function Navbar() {
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
                    name: "Post a Job",
                    link: "/employer/post-job"
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
                    link: "/resources?hot=true"
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
                    link: "/services/hrm"
                },
                {
                    name: "ATS",
                    link: "/services/ats"
                },
                {
                    name: "RPO",
                    link: "/services/rpo"
                },
            ]
        },
        {
            name: "Contact Us",
            link: "/contact-us"
        }
    ]

    return (
        <div className={styles.navbar}>
            <div>RightSource360</div>
            <div className={styles.headerMenu}>
                {navbarMenuList.map((item, index) => {
                    return (
                        <ul key={index} className={styles.navigation}>
                            <li>
                                <a href={item.link}>
                                    <div className={styles.link}>
                                        {item.name}
                                        {item.subMenu && <ChevronDown />}
                                    </div>
                                </a>
                                {item.subMenu && (
                                    <ul>
                                        {item.subMenu.map((subItem, subIndex) => {
                                            return (
                                                <li key={subIndex}>
                                                    <a href={subItem.link} className="text-red-500 font-medium">{subItem.name}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    );
}