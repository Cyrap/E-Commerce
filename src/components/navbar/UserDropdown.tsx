'use client'
import React, { use } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useUser } from "@/context/UserContext";
import LogoutButton from "./LogoutButton";
export default function App() {
  const user = useUser();
  const userImage = (user?.user?.photoURL);

  return (
    <Dropdown>
      <DropdownTrigger>
      <button 
  className="h-[3rem] w-[3rem] rounded-full overflow-hidden"
>
  <img 
    src={userImage || 'menu'} 
    className="object-cover w-full h-full" 
    alt="User"
  />
</button>

      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          <LogoutButton/>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
