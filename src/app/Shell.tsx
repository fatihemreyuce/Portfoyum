import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Shell() {
  return (
    <div className="min-h-screen bg-white text-slate-900"> {/* açık tema */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
