import React from 'react'
import {Layout, Menu} from 'antd'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const {Sider} = Layout;
const Sidebar1 = () => {
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
     
        <Menu mode="vertical">
            <Menu.Item icon={<AiOutlineHome style={{fontSize:"25px"}} />}/>
            <Menu.Item icon={<AiOutlineSearch style={{fontSize:"25px"}} />} />
            <Menu.Item icon={<FaRegUser style={{fontSize:"25px"}} />} />
        </Menu>
        <Menu >
            <Menu.Item icon={<MdNotificationsNone style={{fontSize:"25px"}} />} />
            <Menu.Item icon={<TbLogout style={{fontSize:"25px"}} />} style={{ marginTop: 'auto' }}  />
        </Menu>
           
      
    </div>
    </>
  )
}

export default Sidebar1
