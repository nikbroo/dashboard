import React from "react";
import search_icon from "../../../images/search_icon.png"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
import Acordion from "./accordion/Acordion";

const Popup = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button className="filterButton"><img src={search_icon} alt="" /></Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>Data Filters</PopoverHeader>
        <PopoverBody>
          <Acordion name="Department" />
          <Acordion name="Status" />
        </PopoverBody>
      </PopoverContent>
    </Popover>
    
  );
};

export default Popup;
