"use client";
import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../../../../service/videos";
import { Box, Card } from "@mui/material";
import Batman from "@/app/assets/images/batman.jpg";
import Circle from "@/app/assets/images/PP.jpg";

const Cards = () => {
  const allVideos = useQuery({
    queryKey: ["videos"],
    queryFn: () => getVideos.All(),
  });

  if (allVideos.isPending) return <div>Loading...</div>;
  if (allVideos.isError) return <div>Error: {allVideos.error.message}</div>;
  console.log(allVideos.data);

  return (
    <>
    {/* Specify. item type than any */}
      {allVideos.data?.map((item) => (
        <Card className="shadow-none w-[276px] rounded-none" key={item.id}>
          <Image src={Batman} alt="Batman" width={276} height={153} />
          <div className="flex gap-[14px] pt-[14px] bg-[#F9F9F9]">
            <Image
              src={Circle}
              alt="Avatar"
              className="rounded-full w-[36px] h-[36px] "
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <h3 className="text-[#030303] text-[14px] font-medium] mb-[5px]">
                {item.title}
              </h3>
              <h3 className="text-[#606060] text-[14px] font-medium]">
                {item.plot.slice(0, 40)}...
              </h3>
            </Box>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Cards;
