import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import defaultData from "../../../../data/generated.json";

const Acordion = ({ name }) => {
  const [filterData, setFilterData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [item,setItems] = useState([])

  useEffect(() => {
    let filter_arr = [];
    for (let obj of defaultData) {
      if (!filter_arr.includes(obj[name])) {
        filter_arr.push(obj[name]);
      }
    }
    setFilterData(filter_arr);
    setCheckedItems(Array(filter_arr.length).fill(true));
  }, [name]);

  const handleCheckboxChange = (index,data) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    if(newCheckedItems[index]){
      setItems([...item,data])
    }else{
     let newItem =  item.filter(i=>i!==data)
     setItems(newItem)
    }
    setCheckedItems(newCheckedItems);
  };
  useEffect(()=>{console.log(item,"selected")},[item])
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) => {setCheckedItems(Array(filterData.length).fill(!allChecked))
              setItems(e.target.checked?filterData:[])
            }}
          >
            All
          </Checkbox>
          <Stack pl={6} mt={1} spacing={1}>
            {filterData.map((data, index) => (
              <Checkbox
                key={index}
                isChecked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index,data)}
              >
                {typeof data === "boolean" ? (data ? "Ok" : "Not Ok") : data}
              </Checkbox>
            ))}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Acordion;
