'use client'
import React, { use } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useUser } from "@/context/UserContext";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
export default function App() {
  const user = useUser();
  const userImage = (user?.user?.photoURL);
  const pathName = usePathname();
  return (
    <Dropdown>
      <DropdownTrigger>
      <button 
  className="h-[3rem] w-[3rem] rounded-full overflow-hidden"
>
  <Image
    src={userImage || 'menu'} 
    className="object-cover w-full h-full" 
    alt="User"
    width={1000}
    height={1000}
  />
</button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">{user?.user && <li>
            <Link href='/addproduct'>
              <p className={
                clsx(
                  'hover:text-blue-500',
                  {
                    'text-[#2196F3]': pathName === '/addproduct',
                  },
                )
              }>Add Item</p>
            </Link>
          </li>}</DropdownItem>
        <DropdownItem key="copy">    {user?.user && <li>
            <Link href='/ownproduct'>
              <p className={
                clsx(
                  'hover:text-500',
                  {
                    'text-[#2196F3]': pathName === '/ownproduct',
                  },
                )
              }>My products</p>
            </Link>
          </li>}</DropdownItem>
        <DropdownItem key="delete">
          <LogoutButton/>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
