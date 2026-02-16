import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";

export default function Home() {
  const { events } = useContext(EventContext);

  const [filters, setFilters] = useState({
    type: "",
    date: "",
    location: "",
  });

  //  Filtering Logic
  const filteredEvents = events.filter((event) => {
    return (
      (filters.type === "" || event.type === filters.type) &&
      (filters.date === "" || event.date === filters.date) &&
      (filters.location === "" ||
        event.location.toLowerCase().includes(filters.location.toLowerCase()))
    );
  });

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-10">

      {/*  Filter Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10 grid grid-cols-3 gap-6">

        {/* Type Filter */}
        <select
          className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
        >
          <option value="">All Types</option>
          <option value="Workshop">Workshop</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Meetup">Meetup</option>
          <option value="Fitness">Fitness</option>
        </select>

        {/* Date Filter */}
        <input
          type="date"
          className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) =>
            setFilters({ ...filters, date: e.target.value })
          }
        />

        {/* Location Filter */}
        <input
          type="text"
          placeholder="Search by location"
          className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        />
      </div>

      {/*  Event Grid */}
      {filteredEvents.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No events found.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
