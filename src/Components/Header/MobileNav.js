import { useState } from 'react';
import Nav from "./Nav";
import classes from "./HeaderMenu.module.css";
import CloseMenu from "./NavHandlers/CloseMenu";
import OpenMenu from './NavHandlers/OpenMenu';
const MobileNav = () => {
    const [open, setOpen] = useState(false);
 
    const clickIcon = () => {
        setOpen(!open);
    }
    const closeMobileNav = () => setOpen(false);
  return (
    <nav className={classes.MobileNav}>
        {open ? <CloseMenu clickIcon={clickIcon}/> : <OpenMenu clickIcon={clickIcon}/>}
        {open && <Nav isMobile={true} closeMobileNav={closeMobileNav}/>}

    </nav>
  );
};

export default MobileNav;
