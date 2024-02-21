// BufferComponent.tsx
"use client";
import { AuthContextProvider } from "./AuthContext";
import NavBar from "../components/navbar";

const BufferComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthContextProvider>
      <NavBar />
      {children}
    </AuthContextProvider>
  );
};

export default BufferComponent;