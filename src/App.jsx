import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Guide from "./pages/Guides";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TableUG from "./pages/TableUg";
import TableMS from "./pages/TableMs";
import TablePh from "./pages/TablePh";

/**
 * NOTE: The actual page components (Home, Guide, About, Contact, TableUg, TableMs, TablePh)
 * will be created only after you say "Proceed". For now we show simple placeholders inside routes.
 */

const Placeholder = ({ title }) => (
  <div className="p-6">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <p className="mt-4 text-gray-600">
      This is a placeholder. I will create the full page file when you say <span className="font-medium">Proceed</span>.
    </p>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/guide" element={<Guide/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/table-ug" element={< TableUG />} />
        <Route path="/table-ms" element={< TableMS />} />
        <Route path="/table-ph" element={< TablePh />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
