import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 max-w-6xl mx-auto w-full px-4 py-6 gap-6">
        <Sidebar />
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-4 min-h-[60vh]">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
