import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} Association des etudiant nigerien a zaria. All rights reserved.</span>
          <span>Develop by ISSOUF-CODE</span>
        </div>
      </div>
    </footer>
  );
}
