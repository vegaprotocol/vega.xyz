import React, { useEffect, useState } from 'react'
import CalendarEvent from './CalendarEvent'
import ButtonLink from './ButtonLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Calendar = ({ limit = false, filter = false }) => {
  const [events, setEvents] = useState(null)
  const { t } = useTranslation('component.calendar')

  useEffect(() => {
    async function fetchEvents() {
      let response = await fetch(
        'https://notion-data-service.ops.vega.xyz/query?id=3c75eae1-dec3-4b2c-aa38-c1e9adcc7e13'
      )
      response = await response.json()

      // the following logic will probably be made redundant when the calendar API feed is updated

      const extractData = (elem) => {
        return {
          attendees: elem.properties.find(
            (element) => element.name === 'Attendees'
          ).values,
          name: elem.properties.find((element) => element.name === 'Name')
            .values[0],
          tags: elem.properties.find((element) => element.name === 'Tags')
            .values,
          url: elem.properties.find((element) => element.name === 'Sign-up URL')
            .values[0],
          date: elem.properties
            .find((element) => element.name === 'Date')
            // create date objects
            .values.map((date) => new Date(date)),
        }
      }

      // extract relevant data
      const result = response.notion_data
        .map((elem) => {
          if (filter) {
            if (
              elem.properties.find((element) => element.name === 'Tags')
                .values[0] === filter
            ) {
              return extractData(elem)
            } else {
              return null
            }
          } else {
            return extractData(elem)
          }
        })
        .filter((el) => el !== null && el.date.length > 0)

      // sort events by date
      let sortedEvents = result.sort(
        (a, b) =>
          a.date[a.date.length - 1].getTime() -
          b.date[b.date.length - 1].getTime()
      )

      // find where past events start
      const startOfOldEvents = sortedEvents.findIndex(
        (event) =>
          event.date[event.date.length - 1].getTime() > new Date().getTime()
      )

      // return only future events
      sortedEvents = sortedEvents.slice(startOfOldEvents, sortedEvents.length)

      if (limit) {
        sortedEvents = sortedEvents.slice(0, limit)
      }

      setEvents(sortedEvents)
    }
    fetchEvents()
  }, [limit, filter])

  return (
    <div>
      {events && events.length > 0 && (
        <div className="border-t border-current">
          <div>
            {events.map((event, idx) => (
              <CalendarEvent key={idx} event={event} />
            ))}
          </div>
          {limit && (
            <ButtonLink link="/community/events" text={t('See more')} />
          )}
        </div>
      )}
      {events && events.length === 0 && (
        <div className="body-l mb-space-10">
          {t("Things are a little quiet. Check back to see what's on.")}
        </div>
      )}
    </div>
  )
}

export default Calendar
