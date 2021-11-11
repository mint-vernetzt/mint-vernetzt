import { formatDate } from "../EventFeed/utils";
import { EventTeaserItemProps } from "./EventTeaserItem";

/* eslint-disable-next-line */
export interface EventTeaserProps {
  headline: string;
  items: EventTeaserItemProps[];
}

export function EventTeaser(props: EventTeaserProps) {
  const { headline, items } = props;
  return (
    <div className="flex flex-col p-4 pb-15 md:pb-5 bg-gray-50 rounded-lg shadow-lg h-full">
      <h1>{headline}</h1>
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.headline}
              {item.body}
              {formatDate(item.date)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventTeaser;
