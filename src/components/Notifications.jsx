import React from 'react';
import { MdEvent } from 'react-icons/md';
import ThemedText from './ui-elements/ThemedText';
import ThemedIcon from './ui-elements/ThemedIcon';
import UserAvatar1 from '../assets/img/User1Avatar.svg';
import UserAvatar2 from '../assets/img/User2Avatar.png';
import UserAvatar3 from '../assets/img/User3Avatar.png';
import { LuPartyPopper } from 'react-icons/lu';

const Notifications = () => {
  const notifications = [
    {
      title: 'Mark Jacobs',
      message: 'has cleared the dues for the month of August',
      img: <img src={UserAvatar2} className="max-w-[100%]" />,
      time: 'Today at 09:42 AM',
    },
    {
      title: 'Maria Gilbert',
      message: 'has cleared the dues for the month of August',
      img: <img src={UserAvatar1} className="max-w-[100%]" />,
      time: 'Today at 08:42 AM',
    },
    {
      title: 'Reminder: ',
      message: 'sports week coming next week',
      img: <ThemedIcon Icon={MdEvent} size={30} className="max-w-[100%]" />,
      time: 'Today at 09:42 AM',
    },
    {
      title: 'Mark Jacobs',
      message: 'has requested to one week leave',
      img: <img src={UserAvatar3} className="max-w-[100%]" />,
      time: 'Today at 09:42 AM',
    },
    {
      title: 'Info: ',
      message: 'Christmas party photos and videos uploaded to portal',
      img: (
        <ThemedIcon Icon={LuPartyPopper} size={30} className="max-w-[100%]" />
      ),
      time: 'Today at 09:42 AM',
    },
  ];
  return (
    <div
      style={{
        height: 'calc(100vh - 96px)',
      }}
      className="fixed w-[380px] bg-darkprimary border-l-2 border-l-border right-0 top-[90px] p-3 overflow-y-auto"
    >
      <div className="flex justify-between items-center">
        <ThemedText className="font-urbanist text-2xl font-[600]">
          Notifications
        </ThemedText>
        <div className="flex items-center">
          <ThemedText className="font-urbanist text-[14px] text-white">
            Mark all read
          </ThemedText>
        </div>
      </div>
      {notifications.map(({ title, img, time, message }, index) => (
        <div className="cursor-pointer hover:bg-border mt-3 bg-[#1E1E1E] rounded-[8px] p-3 flex">
          <div
            className={`mr-3 min-w-[45px] ${
              index < 4 && 'notification-avatar'
            } relative`}
          >
            {img}
          </div>
          <div className="flex flex-col">
            <ThemedText className="font-urbanist text-[14px]">
              <strong>{title}</strong> {message}
            </ThemedText>
            <ThemedText className="font-urbanist mt-3 text-[12px] text-[#ccc]">
              {time}
            </ThemedText>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
