import React from 'react';
import { GiHamburgerMenu, GiMagicPortal } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';

import Logo from '../assets/img/Logo.png';
import UserAvatar from '../assets/img/User1Avatar.svg';
import ThemedText from './ui-elements/ThemedText';
import ThemedIcon from './ui-elements/ThemedIcon';

const Header = () => {
  return (
    <header className="dark:bg-darkprimary bg-lightPrimary border-b-[2px] border-b-border text-white p-[20px] md:px-[40px] md:py-[20px] flex items-center fixed w-[100%]">
      <div className="w-[200px] flex items-center justify-between ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" />
          <p className="text-[23px] ml-2 font-urbanist font-bold">Portal</p>
        </div>
        <ThemedIcon Icon={GiHamburgerMenu} />
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
          <div className="border-[2px] border-secondary border-solid p-[5px] rounded-[50%]">
            <img src={UserAvatar} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
