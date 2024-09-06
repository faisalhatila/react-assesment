import dayjs from 'dayjs';
import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../components/Modal';
import ThemedText from '../../components/ui-elements/ThemedText';
import Clipart from '../../../src/assets/img/clipart.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import User1Avatar from '../../assets/img/User1Avatar.svg';
import User2Avatar from '../../assets/img/User2Avatar.png';
import User3Avatar from '../../assets/img/User3Avatar.png';

const Dashboard = () => {
  const { isHamburgerToggled } = useOutletContext();
  const [expandedTile, setExpandedTile] = useState(null);
  const [expandedTileData, setExpandedTileData] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const cardsContainer = useRef(null);

  const applyOverlayMask = (e) => {
    if (!cardsContainer.current) {
      return;
    }

    const { left, top, width, height } =
      cardsContainer.current.getBoundingClientRect();
    const isInsideContainer =
      e.pageX >= left &&
      e.pageX <= left + width &&
      e.pageY >= top &&
      e.pageY <= top + height;

    if (!isInsideContainer) {
      cardsContainer.current.setAttribute('style', '--opacity: 0');
      return;
    }

    const x = e.pageX - left;
    const y = e.pageY - top;

    cardsContainer.current.setAttribute(
      'style',
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener('pointermove', applyOverlayMask);
    return () => {
      document.body.removeEventListener('pointermove', applyOverlayMask);
    };
  }, []);

  const handleTileClick = (event, index, item) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.pageX;
    const y = event.pageY;

    setModalPosition({ x, y });
    setShowModal(true);
    setExpandedTile(expandedTile === index ? null : index);
    setExpandedTileData(expandedTile === index ? null : item);
  };

  function enhanceRecords(records) {
    const names = [
      'Aria',
      'Kai',
      'Leona',
      'Darius',
      'Sienna',
      'Zayn',
      'Amara',
      'Elias',
      'Isla',
      'Aiden',
      'Nia',
      'Mateo',
      'Luna',
      'Caleb',
      'Zara',
      'Rafael',
      'Noor',
      'Mikaela',
      'Kian',
      'Naomi',
    ];
    const countries = [
      { country: 'United States', city: 'New York' },
      { country: 'Canada', city: 'Toronto' },
      { country: 'Germany', city: 'Berlin' },
      { country: 'France', city: 'Paris' },
      { country: 'United Kingdom', city: 'London' },
      { country: 'Australia', city: 'Sydney' },
      { country: 'Japan', city: 'Tokyo' },
      { country: 'Brazil', city: 'São Paulo' },
      { country: 'India', city: 'Mumbai' },
      { country: 'China', city: 'Shanghai' },
      { country: 'Mexico', city: 'Mexico City' },
      { country: 'Italy', city: 'Rome' },
      { country: 'South Africa', city: 'Cape Town' },
      { country: 'Russia', city: 'Moscow' },
      { country: 'Spain', city: 'Madrid' },
      { country: 'Turkey', city: 'Istanbul' },
      { country: 'Netherlands', city: 'Amsterdam' },
      { country: 'Argentina', city: 'Buenos Aires' },
      { country: 'South Korea', city: 'Seoul' },
      { country: 'Egypt', city: 'Cairo' },
    ];
    const imageUrls = [
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Aria',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Kai',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Leona',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Darius',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Sienna',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Zayn',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Amara',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Elias',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Isla',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Aiden',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Nia',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Mateo',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Luna',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Caleb',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Zara',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Rafael',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Noor',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Mikaela',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Kian',
      'https://api.dicebear.com/9.x/pixel-art/svg?seed=Naomi',
    ];
    const enrollmentNumbers = [
      829371, 547829, 193402, 614537, 732819, 408215, 952374, 671028, 284519,
      523476, 798654, 436729, 183947, 950263, 602817, 741926, 239548, 874251,
      596738, 328417,
    ];
    const subjects = ['Science', 'Arts', 'Commerce'];
    const sections = ['A', 'B', 'C', 'D', 'E'];

    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    return records.map((record, index) => ({
      ...record,
      name: names[index % names.length],
      country: countries[index % countries.length].country,
      city: countries[index % countries.length].city,
      imageUrl: imageUrls[index % imageUrls.length],
      enrollmentNumber: enrollmentNumbers[index % enrollmentNumbers.length],
      attendance: getRandom(80, 100),
      majorSubject: subjects[getRandom(0, subjects.length - 1)],
      section: sections[getRandom(0, sections.length - 1)],
    }));
  }

  const fetchData = async (start, limit) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}posts?_start=${start}&_limit=${limit}`
    );
    return enhanceRecords(response.data);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['Students', 0, 10],
    queryFn: () => fetchData(0, 20), // Fix the query function here
    staleTime: 10000,
  });

  return (
    <div
      style={{
        width: isHamburgerToggled
          ? 'calc(100vw - 95px)'
          : 'calc(100vw - 240px)',
        height: 'calc(100vh - 50px)',
      }}
      className={`transition-all duration-300 ease-in-out bg-darkprimary p-5 ${
        isHamburgerToggled ? 'ml-[80px]' : 'ml-[225px]'
      }  mt-[96px] text-white`}
    >
      <div className="my-4 border-border border-2 rounded-[8px] p-5 flex justify-between min-h-[200px]">
        <div className="flex flex-col justify-between">
          <ThemedText className="font-urbanist text-[13px]">{`${dayjs().format(
            'MMMM DD, YYYY'
          )}`}</ThemedText>
          <div className="flex flex-col">
            <ThemedText className="font-urbanist text-4xl">
              Welcome back, John!
            </ThemedText>
            <ThemedText className="font-urbanist text-[12px] mt-2">
              Always stay updated in your student portal.
            </ThemedText>
          </div>
        </div>
        <div className="w-[200px]">
          <img src={Clipart} className="max-w-[100%]" />
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-10 mb-6">Dashboard</h1>

      <div className="relative" ref={cardsContainer}>
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading data</p>
          ) : (
            data.map((item, index) => (
              <div
                key={index}
                className={`flex items-center flex-col justify-center cursor-pointer relative overflow-hidden bg-darkprimary border border-1 border-border text-center rounded-xl transition-transform duration-500`}
                style={{ aspectRatio: '1 / 1' }}
                onClick={(e) => handleTileClick(e, index, item)}
              >
                <div className="w-[80px]">
                  <img src={item.imageUrl} className="max-[100%]" />
                </div>
                <div className="inset-0 flex items-center justify-center text-white">
                  <ThemedText className="font-urbanist font-bold text-[18px] mt-2">
                    {item.name}
                  </ThemedText>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Overlay effect */}
        <div
          className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4 select-none pointer-events-none absolute inset-0"
          style={{
            opacity: 'var(--opacity, 0)',
            mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
            WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
          }}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-col justify-center cursor-pointer relative overflow-hidden border border-1 border-secondary text-center rounded-xl transition-transform duration-500"
              style={{ aspectRatio: '1 / 1' }}
            >
              <div className="w-[80px]">
                <img src={item.imageUrl} className="max-[100%]" />
              </div>
              <div className="inset-0 flex items-center justify-center text-white">
                <ThemedText className="font-urbanist font-bold text-[18px] mt-2">
                  {item.name}
                </ThemedText>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal
          data={expandedTileData}
          position={modalPosition}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
