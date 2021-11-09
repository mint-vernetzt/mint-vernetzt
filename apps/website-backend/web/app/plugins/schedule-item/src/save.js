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
import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";

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
    attributes: { headline, from, to },
  } = props;

  const blockProps = useBlockProps.save();

  return (
    <li {...blockProps}>
      <RichText.Content tagName="p" value={from} className="from" />
      <RichText.Content tagName="p" value={to} className="to" />
      <RichText.Content tagName="h4" value={headline} className="headline" />
      <div>
        <InnerBlocks.Content />
      </div>
    </li>
  );
}

export default Save;
