import React from "react";
import ButtonLink from "./ButtonLink";
import ArrowRight from "./Svg/ArrowRight";
import Moment from "react-moment";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const CalendarEvent = ({ event }) => {
  const { t } = useTranslation("component.calendar-event");
  const dateFormat = "LLL";
  const dateFormatWithoutTime = "LL";
  const dateParseFormat = "YYYY-MM-DD HH:mm:ss";

  return (
    <div className="pb-8 pt-6 border-b border-current relative last:border-b-0">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-6">
          {event.tags.length ? (
            <div className="absolute top-0 left-0 inline-block bg-black dark:bg-white dark:text-black text-white px-1 text-[0.8125rem] leading-[1.2] uppercase tracking-[0.01rem]">
              {event.tags}
            </div>
          ) : null}

          <div className="copy-s text-current">{event.name}</div>
        </div>
        <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="title-xxs text-vega-mid-grey mb-1">
              <Trans t={t}>When?</Trans>
            </div>
            <div className="copy-xxs text-current">
              {event.date.length > 1 ? (
                <div>
                  <Moment
                    format={dateFormatWithoutTime}
                    parse={dateParseFormat}
                    className="mr-3"
                  >
                    {event.date[0]}
                  </Moment>
                  <ArrowRight className="relative -top-px inline-block align-middle mr-3" />
                  <Moment
                    format={dateFormatWithoutTime}
                    parse={dateParseFormat}
                  >
                    {event.date[1]}
                  </Moment>
                </div>
              ) : (
                <div>
                  <Moment format={dateFormat} parse={dateParseFormat}>
                    {event.date[0]}
                  </Moment>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-6 text-right">
            {event.url ? (
              <ButtonLink
                link={event.url}
                text={t("More info")}
                className="bg-vega-mid-grey"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarEvent;
