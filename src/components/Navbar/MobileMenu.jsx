"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { menuItems } from './menuData';
import { headerData } from './NavData';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState([]);
    const [backSubmenu, setBackSubmenu] = useState([]);

    // Refs for menu, links, and submenu
    const menuRef = useRef(null);
    const linksRef = useRef([]);

    const nestedRef = useRef(null);
    const submenulinksRef = useRef([]);


    // Handle GSAP animation when open state changes
    useEffect(() => {
        if (typeof window === "undefined") return;
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (open) {
            // Open menu animation
            timeline
                .set(menuRef.current, { visibility: "visible" })
                .fromTo(
                    menuRef.current,
                    { x: "100%", opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5 }
                )
                .fromTo(
                    linksRef.current,
                    { x: 150, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, stagger: 0.15 },
                    "-=0.5"
                );

            document.body.classList.add("no-scroll");
        } else {





            timeline
                .to(linksRef.current, {
                    x: 150,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.15,
                })
                .to(
                    menuRef.current,
                    {
                        x: 50,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                )
                .set(menuRef.current, {
                    visibility: "hidden",
                });


            document.body.classList.remove("no-scroll");
            setSubmenuOpen(false);
            setActiveSubmenu([]);
        }

        return () => {
            document.body.classList.remove("no-scroll");
            timeline.kill();

        };
    }, [open]);

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Ensure refs exist before animation
        if (!nestedRef.current || !submenulinksRef.current) return;

        if (submenuOpen) {
            timeline
                .set(nestedRef.current, { visibility: "visible" })
                .fromTo(
                    nestedRef.current,
                    { x: "100%", opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.6 }
                )
                .fromTo(
                    submenulinksRef.current,
                    { x: 150, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.7, stagger: 0.2 },
                    "-=0.5"
                );
        } else {
            timeline
                .to(
                    nestedRef.current,
                    { x: "100%", opacity: 0, duration: 0.6 },
                    "-=0.3"
                )
                .set(nestedRef.current, { visibility: "hidden" });
        }

        return () => timeline.kill();
    }, [submenuOpen]);


    const handleBackClick = () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        timeline
            .to(submenulinksRef.current, {
                x: 150,
                opacity: 0,
                duration: 0.7,
                stagger: 0.2,
            })
            .to(
                nestedRef.current,
                {
                    x: 50,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=0.3"
            )
            .set(nestedRef.current, {
                visibility: "hidden",
            });

        timeline.eventCallback("onComplete", () => {
            setSubmenuOpen(false);
            setActiveSubmenu([]);
        });
    };



    const handleSubmenuClick = () => {
        setActiveSubmenu('Development');
        setSubmenuOpen(true);
    };

    // const handleBackClick = () => {
    //     setSubmenuOpen(false);
    //     setActiveSubmenu([]); // Reset submenu state
    //   };
    const handleLinkClick = () => {
        setOpen(false); // Close the main menu
    };
    return (
        <div>
            <div className="menu-btn" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle mobile menu">
                <span className={`hm-icon ${open ? 'open' : ''}`} />
                <span className={`hm-icon hm-icon-middle ${open ? 'open' : ''}`} />
                <span className={`hm-icon ${open ? 'open' : ''}`} />
            </div>

            <div ref={menuRef} className="mobile-menu-wrapper rts-fs-menu" >

                <ul className="navbar-nav">
                    {headerData.map((item, index) => (
                        <li
                            key={index}
                            className={`menu-item ${item.submenu.length > 0 ? "menu-item-has-children" : ""
                                }`}
                            ref={(el) => (linksRef.current[index] = el)}
                        >
                            {item.submenu.length > 0 ? (
                                <Link href={item.href}
                                    className="submenu-button"
                                    onClick={() => {
                                        setActiveSubmenu(item.submenu);
                                        setSubmenuOpen(true);
                                    }}
                                >
                                    {item.text} <span className="submenu-icon">➜</span>
                                </Link>
                            ) : (
                                <Link href={item.href} onClick={handleLinkClick}>{item.text}</Link>
                            )}
                        </li>
                    ))}
                    <li
                        className="menu-item"
                        ref={(el) => (linksRef.current[headerData.length] = el)} // assign last index
                    >
                        <Link href="/contact" onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </li>
                </ul>



            </div>

            {submenuOpen && (
                <div
                    ref={nestedRef}
                    className="nestedsubmenu"
                    style={{ opacity: 0, visibility: 'hidden' }}
                >
                    <div className="">
                        <button onClick={handleBackClick} className='back_arrow'>Back</button>
                        <ul className="sub-menu">
                            {activeSubmenu.map((subItem, subIndex) => (
                                <li
                                    key={subIndex}
                                    className="menu-item"
                                    ref={(el) => (submenulinksRef.current[subIndex] = el)}
                                >
                                    <Link href={subItem.href} onClick={handleLinkClick}>{subItem.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MobileMenu;
