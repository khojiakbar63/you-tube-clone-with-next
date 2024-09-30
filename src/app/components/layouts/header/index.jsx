"use client";
import {
  Box,
  Button,
  Container,
  ToggleButton,
  Input,
  IconButton,
} from "@mui/material";
import React from "react";

// Icons/images
import Hamburger from "../../../assets/icons/hamburger.svg";
import Logo from "../../../../public/Logo.svg";
import Create from "../../../assets/icons/video.svg";
import Choco from "../../../assets/icons/choco.svg";
import Bell from "../../../assets/icons/notification.svg";
import User from "../../../assets/images/my_image.png";
import SearchIcon from "../../../assets/icons/Search.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white fixed pt-3 pb-[4px] top-0 left-0 right-0 z-50">
      <Container maxWidth="100%" className="px-[24px]">
        <div className="flex justify-between items-center">
          <Box className="flex items-center gap-6">
            <ToggleButton className="p-0 border-none">
              <Image src={Hamburger} alt="hamburger" />
            </ToggleButton>
            <Image src={Logo} alt="logo" />
          </Box>

          <Box>
            <div className="flex items-center border border-[#E0E0E0] rounded-full overflow-hidden">
              <Image src={SearchIcon} alt="SearchIcon" className="ml-4" />

              <Input
                className="w-[572px] h-[40px] border-none px-4 py-2 focus:outline-none"
                placeholder="Search"
                disableUnderline="true"
              />

              <Button className=" bg-[#f4f4f4] h-[40px] rounded-none m-0 ">
                <Image src={SearchIcon} alt="search" />
              </Button>
            </div>
          </Box>

          <Box className="flex items-center gap-6">
            <IconButton aria-label="fingerprint" color="white">
              <Image src={Create} alt="create" />
            </IconButton>
            <IconButton aria-label="fingerprint" color="white">
              <Image src={Choco} alt="choco" />
            </IconButton>
            <IconButton aria-label="fingerprint" color="white">
              <Image src={Bell} alt="bell" />
            </IconButton>
            <Image
              src={User}
              alt="user"
              className="w-[32px] h-[32px] rounded-full"
            />
          </Box>
        </div>
      </Container>
    </header>
  );
};

export default Header;
