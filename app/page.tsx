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
        <div className="main-content">
          <div className='login'>
            <div className='login-left'>
              <div className={LavishlyYours.className}>
                  <h1 className="pixie">Pixie</h1>
              </div>
              <p className='intro'>Whether you're seeking a space to pour out your deepest thoughts, celebrate moments of joy and triumph, or simply unwind and reflect on the day's events, Pixie is here to accompany you on your journey.</p>
              <Link href='/login' className='text-black text-[20px shadow-2xl py-[10px] px-[15px] opacity-100 my-4 rounded-lg transition ease-in-out delay-150 bg-neutral-300 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-400 duration-300'>Get started</Link>
            </div>
          </div>
        </div>
    </main>
  );
}
