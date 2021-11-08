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
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit(props) {
  const {
    attributes: { headline, from, to },
    setAttributes,
  } = props;

  const blockProps = useBlockProps();

  const onChangeHeadline = (value) => {
    setAttributes({ headline: value });
  };

  const onChangeFrom = (value) => {
    setAttributes({ from: value });
  };

  const onChangeTo = (value) => {
    setAttributes({ to: value });
  };

  return (
    <li {...blockProps}>
      <RichText
        tagName="p"
        placeholder="9:00"
        value={from}
        onChange={onChangeFrom}
        className="from"
      />
      <RichText
        tagName="p"
        placeholder="10:00"
        value={to}
        onChange={onChangeTo}
        className="to"
      />
      <RichText
        tagName="h4"
        placeholder="Headline"
        value={headline}
        onChange={onChangeHeadline}
        className="headline"
      />
      <div>
        <InnerBlocks />
      </div>
    </li>
  );
}

export default Edit;
