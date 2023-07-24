import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const HrSidebarData = [
  {
    title: 'Home',
    path: '/hrhome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Schedule Interview',
    path: '/hrscheduleinterview',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  

  {
    title: 'Support',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
