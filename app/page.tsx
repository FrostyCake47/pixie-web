"use client"
import Image from "next/image";
import Login from "./login/page";
import NavBar from "./components/navbar";
import {AuthContextProvider} from './context/AuthContext';

export default function Home() {
  return (
    <main>
        {/*<NavBar/>*/}
        <div className="main-content">
          Home
        </div>
    </main>
  );
}
