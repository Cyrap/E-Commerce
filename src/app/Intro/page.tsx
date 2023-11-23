// pages/index.js
'use client'
import React from 'react';
import {useState, useEffect} from 'react';

import Link from 'next/link';
import { useUser } from '@/context/UserContext'
import Image from 'next/image';
const NewsFeed = () => {
  const user = useUser();
  const [text, setText] = useState('');
  const fullText = 'What are you looking for?';

  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <>
  <Image src="https://imgs.search.brave.com/yOpRp52oUm3Bb3KQ39kEA__KYYRkH7qI92JhA83pN9c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn" alt="img" width={10000} height={10000} style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
<div className="h-screen bg-gray-600 flex flex-col items-center justify-center">
  <div className="text-4xl font-bold text-center">
    <p>Таны цахим худалдааны брэнд</p>
    <div className="text-xl mt-4">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse">
       {user && user?.user?.displayName}
      </span>
    </div>
  </div>
  <div className="text-xl mt-6 text-center">
    <p>{text}</p>
  </div>
</div>



    <header className="bg-blue-900 text-white py-5">
        <div className="container flex flex-col justify-center pl-[10vw]  mx-auto block h-[90vh]">
          <h1 className="text-3xl font-bold"> Таны цахим худалдааны орчин</h1>
          <p className="text-lg p-6"> <div> 
             Чанар, хэв маягийн найдвартай очих газар! бид өвөрмөц худалдааны туршлагад итгэдэг. Бидний аялал хамгийн сүүлийн үеийн чиг хандлага, дээд зэргийн чанар, онцгой үйлчилгээтэй хүмүүсийг холбох хүсэл тэмүүллээр эхэлсэн. Бид загвар, тав тух, үйл ажиллагааг хослуулсан олон төрлийн бүтээгдэхүүний цуглуулгыг сонгосон.
        </div></p>
          <Link href='/products'>
          <button className='bg-blue-500 py-6 px-1 w-[20vw] rounded-xl text-center hover:bg-blue-400'>Get started</button>
          </Link>
        </div>
       
      </header>
    </>
  );
};

export default NewsFeed;
