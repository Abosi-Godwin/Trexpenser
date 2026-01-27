
import { FaBarsStaggered } from "react-icons/fa6";

import Logo from "./Logo";

const NavBar = () => {
    return (
        <nav className="w-full h-16 bg-light-iconColor fixed z-40 text-white top-0 left-0 flex items-center justify-between py-2 px-4">
            <Logo />
            <FaBarsStaggered className="text-2xl" />
        </nav>
    );
};

export default NavBar;
