/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function Save(props) {
  const {
    attributes: { title, body, date, time },
  } = props;

  const blockProps = useBlockProps.save();

  return (
    <li {...blockProps}>
      <RichText.Content tagName="p" value={date} />
      <RichText.Content tagName="p" value={`${time} Uhr`} />
      <RichText.Content tagName="h4" value={title} />
      <RichText.Content tagName="p" value={body} />
    </li>
  );
}

export default Save;
