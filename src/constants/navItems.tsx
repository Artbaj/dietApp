import { FaHome, FaCalendar, FaEnvelope, FaPeopleArrows, FaGithub } from 'react-icons/fa'
import { IoPerson } from "react-icons/io5";

export interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
    active?: boolean
    icon?: any
  }
  
  export const NAV_ITEMS: Array<NavItem> = [
      {
          label: 'Home',
          href: process.env.NEXT_PUBLIC_ROOT_URL || '/',
          icon: <FaHome />,
        },
    {
      
      label: 'About',
      icon: <FaPeopleArrows />,
      href: 'about',
      children: [
        {
          label: 'About Us',
          subLabel: 'Learn more about us',
          href: '#',
          icon: <FaHome />,
        },
        {
          label: 'Events',
          subLabel: 'Up-and-coming Events',
          href: '#',
          icon: <FaCalendar />,
        },
        {
          label: 'Contact',
          subLabel: 'Get in touch with us',
          href: '#',
          icon: <FaEnvelope />,
        },
        {
          label: 'Github',
          subLabel: 'Check out our Github and Contribute!',
          href: 'https://github.com/MiCurran/Next-Chakra-PWA',
          icon: <FaGithub />,
        }
      ],
    },
    {
      label: 'Profile',
      href: '#',
      icon: <IoPerson />,
    },
  ]