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
    attributes: { title, body, date, time },
    setAttributes,
  } = props;

  const blockProps = useBlockProps();

  const onChangeTitle = (value) => {
    setAttributes({ title: value });
  };

  const onChangeBody = (value) => {
    setAttributes({ body: value });
  };

  const onChangeDate = (value) => {
    setAttributes({ date: value });
  };

  const onChangeTime = (value) => {
    setAttributes({ time: value });
  };

  return (
    <div {...blockProps}>
      <RichText
        tagName="p"
        placeholder="e.g. 19. September"
        value={date}
        onChange={onChangeDate}
      />
      <RichText
        tagName="p"
        placeholder="e.g. 12:30-14:00"
        value={time}
        onChange={onChangeTime}
      />
      <RichText
        tagName="h4"
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
      />
      <RichText
        tagName="p"
        placeholder="Body"
        value={body}
        onChange={onChangeBody}
      />
    </div>
  );
}

export default Edit;
