import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Text,
} from "@chakra-ui/react";
import Master from "./Admin/SuperAdminMenu";
import RoleandPermission from "./RoleandPermission";

export default function Default() {
  const LinkItems = [
   
  
  ];

  return (
    <>
      <Master />
      <RoleandPermission />
      {LinkItems.map((e, index) => (
        <Accordion allowToggle key={index}>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton
                justifyContent={"space-between"}
                alignItems={"center"}
                outline={"none !important"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Icon
                    mr={5}
                    as={e.LinkItemsName.icon}
                    fontWeight={"500"}
                    fontSize="14px"
                    color="#818194"
                  ></Icon>
                  <Text fontSize="13px">{e.LinkItemsName.name}</Text>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text fontSize={"13px"}>{e.LinkItemsName.components}</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
