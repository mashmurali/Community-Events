import { createContext, useState } from "react";
import eventsData from "../data/events.json";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(eventsData);
  const [rsvpList, setRsvpList] = useState([]);

  const rsvpEvent = (event) => {
    setRsvpList([...rsvpList, event]);
  };

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  return (
    <EventContext.Provider value={{ events, rsvpEvent, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
