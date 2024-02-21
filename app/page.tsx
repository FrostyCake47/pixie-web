"use client"
import Image from "next/image";
import Login from "./login/page";
import NavBar from "./components/navbar";
import {AuthContextProvider} from './context/AuthContext';
import { Lavishly_Yours } from "next/font/google";
import Link from "next/link";

const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});

export default function Home() {
  return (
    <main>
        {/*<NavBar/>*/}
        <div className="main-content">
          <div className='login'>
            <div className='login-left'>
              <div className={LavishlyYours.className}>
                  <h1 className="pixie">Pixie</h1>
              </div>
              <p className='intro'>Whether you're seeking a space to pour out your deepest thoughts, celebrate moments of joy and triumph, or simply unwind and reflect on the day's events, Pixie is here to accompany you on your journey.</p>
              <Link href='/login' className='text-white text-[20px] bg-slate-800 px-[10px] bg-opacity-80 shadow-2xl py-[5px] my-4 rounded-lg'>Get started</Link>
            </div>
          </div>
        </div>
    </main>
  );
}
