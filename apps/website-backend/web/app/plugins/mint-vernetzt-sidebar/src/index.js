import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar } from "@wordpress/edit-post";
import { useSelect, useDispatch } from "@wordpress/data";
import { TextControl } from "@wordpress/components";

function MetaField(props) {
  const value = useSelect((select) => {
    const meta = select("core/editor").getEditedPostAttribute("meta");
    console.log(meta);
    return meta["test"];
  }, []);

  const { editPost } = useDispatch("core/editor");

  return (
    <TextControl
      label="test"
      defaultValue={value}
      onChange={(content) => editPost({ meta: { test: content } })}
    />
  );
}

registerPlugin("mint-vernetzt-sidebar", {
  render: (props) => {
    return (
      <PluginSidebar
        name="mint-vernetzt-sidebar"
        icon="admin-post"
        title="MINTvernetzt sidebar"
      >
        <MetaField />
      </PluginSidebar>
    );
  },
});
