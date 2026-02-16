import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";

export default function Home() {
  const { events } = useContext(EventContext);
  const [filterType, setFilterType] = useState("");

  const filteredEvents = filterType
    ? events.filter((e) => e.type === filterType)
    : events;

  return (
    <div className="px-20 py-10">
      <div className="mb-6 flex gap-4">
        <select
          onChange={(e) => setFilterType(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">All Types</option>
          <option value="Workshop">Workshop</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
