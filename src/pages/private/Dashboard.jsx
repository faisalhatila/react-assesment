import dayjs from 'dayjs';
import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../components/Modal';
import ThemedText from '../../components/ui-elements/ThemedText';
import Clipart from '../../../src/assets/img/clipart.png';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { enhanceRecords } from '../../utils/helperFunctions';
import OverlayEffect from '../../components/OverlayEffect';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const x = event.pageX;
    const y = event.pageY;

    setModalPosition({ x, y });
    setShowModal(true);
    setExpandedTile(expandedTile === index ? null : index);
    setExpandedTileData(item);
  };

  const fetchData = async (start, limit) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}posts?_start=${start}&_limit=${limit}`
    );
    return enhanceRecords(response.data);
  };

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ['Students', 0, 10],
    queryFn: () => fetchData(0, 20), // Fix the query function here
    staleTime: 10000,
  });

  const updateLocalData = (updatedItem) => {
    queryClient.setQueryData(['Students', 0, 10], (oldData) =>
      oldData.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item
      )
    );
  };

  const deleteLocalData = (id) => {
    queryClient.setQueryData(['Students', 0, 10], (oldData) =>
      oldData.filter((item) => item.id !== id)
    );
  };

  const handleUpdate = (updatedItem) => {
    updateLocalData(updatedItem);
  };

  const handleDelete = (id) => {
    deleteLocalData(id);
  };

  const notify = (message) => {
    console.log(message);
    toast(message, {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
      type: 'success',
    });
  };

  return (
    <div
      style={{
        width: isHamburgerToggled
          ? // ? 'calc(100vw - 95px)'
            // : 'calc(100vw - 240px)',
            'calc(100vw)'
          : 'calc(100vw)',
        minHeight: 'calc(100vh - 50px)',
      }}
      className={`transition-all duration-300 ease-in-out bg-darkprimary p-5 ${
        isHamburgerToggled ? 'md:ml-[80px]' : 'md:ml-[225px]'
      }  mt-[96px] text-white`}
    >
      <ToastContainer id="myContainer" />
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
        <OverlayEffect
          error={error}
          isLoading={isLoading}
          data={data}
          onClick={handleTileClick}
        />
      </div>

      {showModal && (
        <Modal
          data={expandedTileData}
          position={modalPosition}
          onClose={() => setShowModal(false)}
          updateData={handleUpdate}
          notify={notify}
          deleteData={handleDelete}
        />
      )}
    </div>
  );
};

export default Dashboard;
