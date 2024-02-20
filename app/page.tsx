import Image from "next/image";
import Login from "./login/page";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <div className="main-content">
        Home
      </div>
    </main>
  );
}
