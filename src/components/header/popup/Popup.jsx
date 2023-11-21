import React, { useEffect, useState } from "react";
import search_icon from "../../../images/search_icon.png";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Button,
  Accordion,
} from "@chakra-ui/react";
import Acordion from "./accordion/Acordion";
import { itemStateDispatch, itemDepDispatch } from "../../../reducers/itemSlice"
import { useDispatch } from "react-redux";

const Popup = () => {
  const dispatch = useDispatch();

  const [itemState, setItemsState] = useState([]);
  const [itemDep, setItemsDep] = useState([]);

  const handleDispatch = () => {
    dispatch(itemStateDispatch(itemState));
    dispatch(itemDepDispatch(itemDep));
  }
  useEffect(() => {
    handleDispatch();
  }, [itemState, itemDep]);

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="filterButton">
          <img src={search_icon} alt="" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>Data Filters</PopoverHeader>
        <PopoverBody>
          <Accordion allowToggle>
            <Acordion name="Department" item={itemDep} setItems={setItemsDep} />
            <Acordion name="Status"  item={itemState} setItems={setItemsState} />
          </Accordion>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Popup;
