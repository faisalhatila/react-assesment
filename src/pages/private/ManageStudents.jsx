import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import AgGridTable from '../../components/AgGridTable';
import { enhanceRecords } from '../../utils/helperFunctions';

const ManageStudents = () => {
  const { isHamburgerToggled } = useOutletContext();
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
  return (
    <div
      className={`${
        isHamburgerToggled ? 'closed-menu-main' : 'opened-menu-main'
      } transition-all duration-300 ease-in-out bg-darkprimary p-5 ${
        isHamburgerToggled ? 'md:ml-[80px]' : 'md:ml-[225px]'
      }  mt-[96px] text-white main-height flex flex-col`}
    >
      <div className="mb-5">
        <h1 className='text-4xl font-bold'>Manage Students</h1>
      </div>
      <AgGridTable
        column={['id','image', 'name', 'country', 'city']}
        rows={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default ManageStudents;
