import { formatDate } from "./utils";

export interface TagProps {
  title: string;
}

export interface NewsFeedItemProps {
  headline: string;
  body: string;
  date: Date;
  slug: string;
  tagsProps?: TagProps[];
}

function Tag({ title }: TagProps) {
  return (
    <div className="mr-2 mb-2 px-3 py-2 rounded-lg bg-secondary-300 text-neutral-800 text-sm text-bold">
      {title}
    </div>
  );
}

export function NewsFeedItem({
  headline,
  body,
  date,
  slug,
  tagsProps = [],
}: NewsFeedItemProps) {
  const formattedDate = formatDate(date);

  return (
    <div className="flex flex-wrap">
      <time
        data-testid="date"
        dateTime={date.toISOString()}
        className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 uppercase font-bold text-neutral-800 text-xs flex-100 md:flex-none md:order-3"
      >
        {formattedDate}
      </time>
      {/* TODO: remove uppercase in tailwind config and override in component headline */}
      <h4 className="text-primary text-3xl mb-2 normal-case flex-100 md:order-1">
        <a href={slug} className="cursor-pointer hover:underline">
          {headline}
        </a>
      </h4>
      <p
        data-testid="body"
        className="text-base text-neutral-600 leading-4 line-clamp-5 mb-4 md:line-clamp-none flex-100 md:order-2"
      >
        {body}
      </p>
      <ul className="flex flex-wrap md:order-4">
        {tagsProps.map((tagProps, index) => {
          return (
            <li key={`tag-${index}`}>
              <Tag {...tagProps} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewsFeedItem;
