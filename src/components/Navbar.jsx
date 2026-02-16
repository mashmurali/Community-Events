import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-[1200px] mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
          CommunityHub
        </h1>

        <div className="flex gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">
            Explore
          </Link>
          <Link to="/create" className="hover:text-indigo-600 transition">
            Host Event
          </Link>
        </div>
      </div>
    </div>
  );
}
