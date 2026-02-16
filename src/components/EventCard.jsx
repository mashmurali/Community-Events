import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100">
      <div className="flex justify-between items-start">
        <span className="text-xs font-semibold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {event.type}
        </span>
        <span className="text-sm text-gray-400">
          {event.date}
        </span>
      </div>

      <h2 className="text-xl font-bold mt-4 text-gray-800">
        {event.title}
      </h2>

      <p className="text-gray-500 mt-2">
        {event.location}
      </p>

      <Link
        to={`/event/${event.id}`}
        className="mt-6 inline-block w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
