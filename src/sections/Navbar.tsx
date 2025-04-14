'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

export const Navbar = () => {
    
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 5);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    return (
        <nav
            className="top-0 left-0 right-0 transition-all duration-300 pt-4"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-center">
                <Image src="/assets/images/logo-full.svg" alt="Logo" width={200} height={200} />
            </div>
        </nav>
    )
}
