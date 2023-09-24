import React, { useEffect, useState, useContext } from 'react';
import {navLinks} from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from './MobileNavLinks';
import NavLink from './NavLink';
import {motion} from 'framer-motion';
import { UserContext } from '../../context/userContext/userConstext';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions/userActions";


const NavBar = () => {

  const {toggleModals} = useContext(UserContext)

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  /* Import useDispatch */
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    }
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active])

  return <div className={`${active ? "shadow-3xl bg-SecondaryBlue" : ""} bg-PrimaryBlue fixed w-full top-0 left-0 z-20`}>
    <div>
      <div className={`${active ? "py-2 transition-all duration-300" : "py-4"} container mx-auto flex items-center justify-between px-2 `}>
      
        <div className="flex items-center gap-4">
          <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer text-white' onClick={() => setToggle(true)} />
          <div className="text-xl sm:text-3xl text-white uppercase tracking-wide font-bold flex items-center gap-4">
            {/* <img src="./ITS_&_DG.png" className='w-16 rounded-full hidden sm:block ' alt="" /> */}
            <div className="items-center">
              ITSchool<span className='text-OriginGold'>.CI</span>
              <p className='text-xs hidden sm:block'>International Tranning School</p>
            </div>
          </div>
        </div>
        
        {userInfo ? (
          <div className='sm:flex text-white hidden ml-16'>
            <li className="list-none cursor-pointer mr-8">
              <Link to='/formation' 
                className='font-bold transition-all duration-300 hover:text-SkyBlue'>
                  Nouvelle formation
              </Link>
            </li>
            <li className="list-none cursor-pointer mr-8">
            <Link to='dashboard-formation'
              className='font-bold transition-all duration-300 hover:text-SkyBlue'>
                Mes formations
            </Link>
            </li>
          </div>
        ) : (
          <div className='sm:flex text-white hidden ml-16'>
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
        )}

        {/* Link d'Inscription */}
        {userInfo ? (
          <button onClick={() => dispatch(signout())} to={"signup"} className='py-3 px-5 font-bold text-sm text-white hover:text-PrimaryBlue border border-solid rounded-lg border-white hover:border-PrimaryBlue bg-transparent mr-1 hover:bg-white transition duration-300'>Logout</button>
        ) : (
          <>
            <Link to={"signup"} className='py-3 px-5 font-bold text-sm text-white hover:text-PrimaryBlue border border-solid rounded-lg border-white hover:border-PrimaryBlue bg-transparent mr-1 hover:bg-white transition duration-300'>Sign Up</Link>
            <Link to={"signin"} className='py-3 px-6 font-bold text-sm text-PrimaryBlue hover:text-white border border-solid rounded-lg border-white hover:border-white bg-white hover:bg-transparent transition duration-300'>Sign In</Link>
          </>
        )}
        {/* lien en mode responsif */}
        {toggle && <motion.div initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.3}} className='fixed h-full w-96 top-0 left-0 bg-SkyBlue text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
          {navLinks.map(navLink => {
            return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle} />
          })}
          <HiX className='absolute right-12 top-12 text-3xl cursor-pointer' onClick={(prev) => setToggle(!prev)} />
        </motion.div> }
      </div>
    </div>
  </div>
}

export default NavBar;