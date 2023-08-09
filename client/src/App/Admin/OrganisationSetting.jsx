import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa';
import {FiHome } from 'react-icons/fi';
import {AiFillFlag} from "react-icons/ai"
import AccordionMap from '../AccordionMap';

export default function OrganisationSetting() {
    
    const LinkItems = [
        {
      LinkItemsName :{ name: "Organisation", icon: FaChalkboardTeacher},
      LinkInerItem : [
       { name: "Country", icon: AiFillFlag,to :"admin/mastercountry" },
        { name: "State", icon: AiFillFlag,to :"admin/masterstate" },
        { name: "City", icon: AiFillFlag,to :"admin/mastercity" },
       { name: "Branch", icon: AiFillFlag,to :"admin/masterbranch" },
       { name: "Tax", icon: AiFillFlag,to :"admin/mastertax" },
    //    { name: "SMTP", icon: FiHome, to: "/dashboard/admin/mastersmtp" },
        { name: "Organisation", icon: FiHome, to: "/dashboard/setting/organisation" },
]

    },
    
    
];


return (

   <>

  <AccordionMap LinkItems={LinkItems} />

   
   </>
  )
}

