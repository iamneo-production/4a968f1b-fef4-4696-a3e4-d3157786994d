import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Notification',
    path: '/notification',
    icon: <IoIcons.IoMdNotifications/>,
    cName: 'nav-text'
  },
  {
    title: 'Saved Jobs',
    path: '/saved',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Interview',
    path: '/interview',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'FeedBack',
    path: '/feedback',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
