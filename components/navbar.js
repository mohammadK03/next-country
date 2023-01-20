import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { theme, setTheme } = useTheme('light');
    const [mounted, setMounted] = useState(false);

    const toggleMode = () => {
        const newMode = theme === "light" ? "dark" : "light";
        setTheme(newMode);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null
    }

    return (
        <header className="w-full py-8 w-full shadow-md bg-light">
            <div className="w-[85%] mx-auto flex flex-row items-center justify-between">
                <Link className="xl:text-[1.5rem] lg:text-[1.35rem] md:text-[1.15rem] text-[1.05rem] font-bold" 
                href="/">Where in the world ?</Link>

                <button className="flex flex-row items-center"
                onClick={() => toggleMode()}>
                    {
                        theme == 'light' ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
                            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                        </svg>
                    }

                    <p className="font-semibold text-[.9rem]">
                        {
                            theme === 'light' ? 'Light Mode' : 'Dark Mode'
                        }
                    </p>
                </button>
            </div>
        </header>
    );
}
 
export default Navbar;