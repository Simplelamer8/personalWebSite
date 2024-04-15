import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  console.log(active);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {setActive(""), window.scrollTo(0, 0)}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Miras</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link) => {
              return <li 
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-gray-500"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            })
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} className="w-9 h-9 object-contain cursor-pointer" onClick={() => setToggle(!toggle)} alt="" />
          <div className={`${toggle ? "flex" : "invisible"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 `}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {
              navLinks.map((link) => {
                return <li 
                to={link.id}
                key={link.id}
                className={`${active === link.title ? "text-white" : "text-gray-500"} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle)
                }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              })
            }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar