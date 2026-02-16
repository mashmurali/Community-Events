import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const { addEvent } = useContext(EventContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    type: "",
    host: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return alert("Fill required fields");
    addEvent(form);
    navigate("/");
  };

  return (
    <div className="px-20 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-xl space-y-4"
      >
        <input
          placeholder="Title"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Create Event
        </button>
      </form>
    </div>
  );
}
