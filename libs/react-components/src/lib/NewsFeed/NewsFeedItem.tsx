export interface NewsFeedItemProps {
  headline: string;
  body: string;
}

export function NewsFeedItem({ headline, body }: NewsFeedItemProps) {
  return (
    <div>
      <h1>{headline}</h1>
      <p data-testid="body">{body}</p>
    </div>
  );
}

export default NewsFeedItem;
