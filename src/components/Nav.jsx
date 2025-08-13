import React from "react";
import { FloatingDock } from "../components/Floting-deck";
import {
    IconAddressBook,
  IconBaselineDensityMedium,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconCalendarEvent,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconTimeline,
} from "@tabler/icons-react";


export function FloatingDockDemo() {

    const scrollto = (position) => {
    window.scrollTo({ top: position, behavior: "smooth" });
  };
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      clickon : 0,
      id:"home"
     
    },

    {
      title: "Events",
      icon: (
        <IconCalendarEvent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    clickon : 9700,
      id: "events",
    },
    {
      title: "Timeline",
      icon: (
        <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
       clickon : 11200,
      id: "timeline",
    
    },
    {
      title: "Team",
      icon: (
       <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
     href: "/team",
    },
    
    {
        title: "Instagram",
        icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: 'https://www.instagram.com/compufest_ycce2k25?igsh=MWxyaG5tZ29hMWtvaw=='
    },
    {
     title: "Credits",
     icon: (
          <IconBaselineDensityMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    
     ),

     id:"footer",
     clickon : 16000,
   
   },
   
  ];
  return (
    
    <div className="flex fixed insert-0 -mt-3 z-50 bottom-3   h-auto justify-center items-end  text-white  w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20 text-white"
        items={links}
      scrollto={scrollto} />
    </div>
  );
}
