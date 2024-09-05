import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu, GiMagicPortal } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';

import Logo from '../assets/img/Logo.png';
import UserAvatar from '../assets/img/User1Avatar.svg';
import ThemedText from './ui-elements/ThemedText';
import ThemedIcon from './ui-elements/ThemedIcon';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHamburgerToggled, setHamburgerToggled] = useState(false);

  const dropdownRef = useRef(null);

  const handleAvatarClick = () => {
    setDropdownOpen((ps) => !ps);
  };

  const handleHamburgerClick = () => {
    setHamburgerToggled((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-darkprimary border-b-[2px] border-b-border text-white p-[20px] md:px-[40px] md:py-[20px] flex items-center fixed w-[100%]">
      <div
        className={`transition-all duration-300 ease-in-out ${
          isHamburgerToggled ? 'w-[80px]' : 'w-[200px]'
        } flex items-center justify-between `}
      >
        <div className="flex items-center">
          <img src={Logo} alt="Logo" />
          <ThemedText
            className={`font-urbanist font-bold text-[18px] ml-2 transition-all duration-300 ease-in-out ${
              isHamburgerToggled
                ? 'opacity-0 scale-95 hidden'
                : 'opacity-100 scale-100'
            }`}
          >
            Portal
          </ThemedText>
        </div>
        <div className="cursor-pointer" onClick={handleHamburgerClick}>
          <ThemedIcon Icon={GiHamburgerMenu} className />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-between pl-[20px]">
        <div className="flex items-center">
          <ThemedIcon Icon={GiMagicPortal} />
          <ThemedText className="font-urbanist font-bold text-[18px] ml-2">
            Student Dashboard
          </ThemedText>
        </div>
        <div className="flex items-center">
          <div className="bg-border w-[312px] rounded-[28px] px-[16px] py-[10px] flex items-center">
            <ThemedIcon Icon={CiSearch} size={18} />
            <input
              className="bg-transparent ml-2 w-[100%] dark:text-white text-darkprimary outline-none font-urbanist"
              placeholder="Search Student"
            />
          </div>
          <div className="w-[40px] h-[40px] rounded-[50%] bg-secondary flex items-center justify-center relative mx-[15px]">
            <span className="bg-pending w-[8px] h-[8px] absolute top-[10px] right-[10px] rounded-[50%]" />
            <ThemedIcon Icon={IoIosNotificationsOutline} size={30} />
          </div>
          <div
            className="border-[2px] border-secondary border-solid p-[5px] rounded-[50%] cursor-pointer"
            ref={dropdownRef}
            onClick={handleAvatarClick}
          >
            <img src={UserAvatar} />
          </div>
          <div
            className={`absolute overflow-hidden top-[70px] right-[10px] mt-2 w-48 bg-white dark:bg-darkprimary border border-border rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
              isDropdownOpen
                ? 'opacity-100 transform scale-100'
                : 'opacity-0 transform scale-95 pointer-events-none'
            }`}
          >
            <ul>
              <li className="px-4 py-2 bg-darkprimary text-white hover:bg-white hover:text-darkprimary cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 bg-darkprimary text-white hover:bg-white hover:text-darkprimary cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 bg-darkprimary text-white hover:bg-white hover:text-darkprimary cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
