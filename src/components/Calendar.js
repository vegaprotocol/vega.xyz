import React, { useEffect, useState } from "react";
import CalendarEvent from "./CalendarEvent";

const Calendar = ({ showEthDenver }) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      let response = await fetch(
        "https://notion-data-service.ops.vega.xyz/query?id=3c75eae1-dec3-4b2c-aa38-c1e9adcc7e13"
      );
      response = await response.json();

      // the following logic will probably be made redundant when the calendar API feed is updated

      // extract relevant data
      const result = response.notion_data.map((elem) => {
        return {
          attendees: elem.properties.find(
            (element) => element.name === "Attendees"
          ).values,
          name: elem.properties.find((element) => element.name === "Name")
            .values[0],
          tags: elem.properties.find((element) => element.name === "Tags")
            .values,
          url: elem.properties.find((element) => element.name === "Sign-up URL")
            .values[0],
          date: elem.properties
            .find((element) => element.name === "Date")
            // create date objects
            .values.map((date) => new Date(date)),
        };
      });

      // sort events by date
      let sortedEvents = result.sort(
        (a, b) =>
          b.date[b.date.length - 1].getTime() -
          a.date[a.date.length - 1].getTime()
      );

      // find where past events start
      const startOfOldEvents = sortedEvents.findIndex(
        (event) =>
          event.date[event.date.length - 1].getTime() < new Date().getTime()
      );

      // return only future events
      sortedEvents = sortedEvents.slice(0, startOfOldEvents);

      setEvents(sortedEvents);
    }
    fetchEvents();
  }, []);

  return (
    <div className="border-t border-current">
      {events &&
        events.map((event, idx) => (
          <CalendarEvent
            showEthDenver={showEthDenver}
            key={idx}
            event={event}
          />
        ))}
    </div>
  );
};

export default Calendar;
