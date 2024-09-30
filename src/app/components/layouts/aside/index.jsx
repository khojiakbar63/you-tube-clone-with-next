"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { ASIDE_INFO } from "@/app/mocks/aside-info";
import { List, ListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import './style.css'

const Aside = () => {
  const pathname = usePathname();
  
  return (
    <aside className="w-[240px] h-screen bg-white fixed overflow-y-scroll pt-6 mt-[54px]">
      <List className="flex flex-col">
        {ASIDE_INFO.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="py-[11px]  hover:bg-[#f9f9f9]"
          >
            <ListItem className="flex items-center px-6  gap-[20rpx]">
              <div className="p-[3px] flex items-center justify-center w-[24px] h-[24px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <span className={`ml-2 text-[14px] font-medium ${pathname === item.link ? 'font-[800] text-[#060606]' : ''}`}>{item.title}</span>
              {console.log(pathname)}
            </ListItem>
          </Link>
        ))}
      </List>
    </aside>
  );
};

export default Aside;
