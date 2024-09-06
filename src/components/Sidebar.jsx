import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaUser, FaChalkboardTeacher, FaChevronDown } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { CiSettings } from 'react-icons/ci';

import ThemedText from './ui-elements/ThemedText';
import ThemedIcon from './ui-elements/ThemedIcon';

const Sidebar = ({ isHamburgerToggled, handleToggle }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const sidebarItems = [
    {
      id: 1,
      label: 'Dashboard',
      Icon: <MdOutlineDashboard size={20} className="w-[25px]" />,
      route: '/',
    },
    {
      id: 2,
      label: 'Students',
      route: '/students/manage',
      parent: 'students',
      Icon: <FaUser size={16} className="w-[25px]" />,
      children: [
        {
          title: 'Manage Students',
          route: '/students/manage',
        },
        {
          title: 'Attendance',
          route: '/students/attendance',
        },
      ],
    },
    {
      id: 3,
      label: 'Teachers',
      route: '/teachers/manage',
      parent: 'teachers',
      Icon: <FaChalkboardTeacher size={18} className="w-[25px]" />,
      children: [
        {
          title: 'Manage Teachers',
          route: '/teachers/manage',
        },
        {
          title: 'Attendance',
          route: '/teachers/attendance',
        },
      ],
    },
    {
      id: 4,
      label: 'Courses',
      route: '/courses',
      Icon: <GoBook size={20} className="w-[25px]" />,
    },
    {
      id: 5,
      label: 'Settings',
      route: '/settings',
      Icon: <CiSettings size={25} className="w-[25px]" />,
    },
  ];

  const toggleItem = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const isRouteActive = (route, parent) => {
    // console.log({ route, parent });
    return location.pathname === route || location.pathname.includes(parent);
  };

  console.log({ location });

  const isChildRouteActive = (children) =>
    children?.some((child) => location.pathname === child.route);

  // Adjust width with transition based on isHamburgerToggled
  const sidebarWidth = isHamburgerToggled ? 'w-[80px]' : 'w-[225px]';
  const textVisibility = isHamburgerToggled ? 'opacity-0' : 'opacity-100'; // Hide text when collapsed
  // console.log({ location });
  return (
    <aside
      className={`${sidebarWidth} min-h-[100vh] fixed bg-darkprimary text-white pt-[20px] pr-[20px] mt-[96px] transition-all duration-300 ease-in-out border-r-[2px] border-r-border`}
    >
      {sidebarItems.map(
        ({ id, label, Icon, route, children, parent }, index) => (
          <div className="flex flex-col mb-[20px]" key={index}>
            <div
              className={`flex items-center justify-between pr-[10px] py-[7px] px-[20px] rounded-r-[20px] cursor-pointer ${
                isRouteActive(route, children && parent) ? 'bg-secondary' : ''
              } ${isChildRouteActive(children) ? 'text-white' : ''}`}
              onClick={() => {
                if (children && isHamburgerToggled) {
                  // Call handleToggle if isHamburgerToggled is true before toggling the item
                  handleToggle();
                }
                if (children) {
                  toggleItem(id);
                }
              }}
            >
              <div className="flex items-center">
                {Icon}
                <Link to={route}>
                  {/* Only show text when sidebar is expanded */}
                  <ThemedText
                    className={`ml-[15px] font-urbanist text-[15px] font-bold transition-opacity duration-300 ${textVisibility}`}
                  >
                    {label}
                  </ThemedText>
                </Link>
              </div>
              {children && (
                <ThemedIcon
                  Icon={FaChevronDown}
                  size={14}
                  className={`transition-transform duration-300 ${
                    expandedItems[id] ? 'rotate-180' : ''
                  }`}
                />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ml-[47px] ${
                expandedItems[id] ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              {children &&
                !isHamburgerToggled &&
                children.map((child, childIndex) => (
                  <div key={childIndex} className="ml-[15px] mt-[8px]">
                    <Link to={child?.route}>
                      <ThemedText
                        className={`font-urbanist text-[13px] font-bold ${
                          // isRouteActive(child?.route) ? 'text-secondary' : ''
                          child?.route === location.pathname
                            ? '!text-secondary'
                            : 'text-white'
                        }`}
                      >
                        {child?.title}
                      </ThemedText>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        )
      )}
    </aside>
  );
};

export default Sidebar;
