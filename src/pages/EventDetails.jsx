import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import RSVPModal from "../components/RSVPModal";

export default function EventDetails() {
  const { id } = useParams();
  const { events, rsvpEvent } = useContext(EventContext);
  const [open, setOpen] = useState(false);

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Event Not Found
      </div>
    );
  }

  return (
    <div className="px-20 py-10">
      <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {event.title}
          </h1>

          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full font-medium">
            {event.type}
          </span>
        </div>

        <p className="text-gray-500 mt-4">
          {event.date} • {event.location}
        </p>

        <p className="mt-6 text-gray-600 leading-relaxed">
          {event.description}
        </p>

        <div className="mt-6 text-sm text-gray-400">
          Hosted by{" "}
          <span className="font-medium text-gray-700">
            {event.host}
          </span>
        </div>

        <button
          onClick={() => {
            rsvpEvent(event);
            setOpen(true);
          }}
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          JOIN
        </button>
      </div>

      {open && <RSVPModal close={() => setOpen(false)} />}
    </div>
  );
}
