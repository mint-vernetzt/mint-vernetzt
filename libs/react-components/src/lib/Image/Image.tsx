export interface ImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export function Image({ src, alt = "", caption }: ImageProps) {
  return caption !== undefined ? (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  ) : (
    <img src={src} alt={alt} />
  );
}

export default Image;
