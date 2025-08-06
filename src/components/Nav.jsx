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
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Events",
      icon: (
        <IconCalendarEvent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Timeline",
      icon: (
        <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
        href: "#",
    },
    {
     title: "Credits",
     icon: (
          <IconBaselineDensityMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    
     ),
     href: "#",
   },
   
  ];
  return (
    <div className="flex fixed insert-0 -mt-3 z-50  h-full justify-center items-end  w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
