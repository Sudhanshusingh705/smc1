import React from 'react'
import AccordionMap from './AccordionMap';
import { useSelector } from 'react-redux';
import { FcParallelTasks, FcTreeStructure } from 'react-icons/fc';
export default function RoleandPermission() {


  const auth=useSelector((store)=>store.authReducer)    

  
  const AdminLinkItems = [
    {
      LinkItemsName :{ name: "Role&Permission", icon: FcTreeStructure},
    //   LinkInerItem : [
    //                 { name: "Roles", icon:FcParallelTasks, to :"/dashboard/superadmin/setting/roles" },
    //                 ]
    },
    
    
  ];



  return (
   <>

<AccordionMap LinkItems={AdminLinkItems} />


   
   </>
  )
}
