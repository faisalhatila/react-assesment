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
    queryFn: () => fetchData(0, 5), // Fix the query function here
    staleTime: 10000,
  });
  return (
    <div
      className={`${
        isHamburgerToggled ? 'closed-menu-main' : 'opened-menu-main'
      } transition-all duration-300 ease-in-out bg-darkprimary p-5 ${
        isHamburgerToggled ? 'md:ml-[80px]' : 'md:ml-[225px]'
      }  mt-[96px] text-white main-height flex `}
    >
      <AgGridTable
        column={['id','image', 'name', 'country', 'city']}
        rows={data}
        // rows={[
        //   {
        //     id: 1,
        //     name: 'Faisal',
        //     age: '30',
        //     contact: '+923073641656',
        //   },
        //   {
        //     id: 1,
        //     name: 'Faisal',
        //     age: '30',
        //     contact: '+923073641656',
        //   },
        //   {
        //     id: 1,
        //     name: 'Faisal',
        //     age: '30',
        //     contact: '+923073641656',
        //   },
        //   {
        //     id: 1,
        //     name: 'Faisal',
        //     age: '30',
        //     contact: '+923073641656',
        //   },
        //   {
        //     id: 1,
        //     name: 'Faisal',
        //     age: '30',
        //     contact: '+923073641656',
        //   },
        //   {
        //     id: 1,
        //     name: 'Faisal',
        //     age: '30',
        //     contact: '+923073641656',
        //   },
        //   {
        //     id: 1,
        //     name: 'Faisal',
        //     age: '30',
        //     contact: '+923073641656',
        //   },
        // ]}
      />
    </div>
  );
};

export default ManageStudents;
