import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar } from "@wordpress/edit-post";
import { useSelect, useDispatch } from "@wordpress/data";
import { Button } from "@wordpress/components";
import { MediaUpload } from "@wordpress/media-utils";

function Attachments() {
  const files = useSelect((select) => {
    const meta = select("core/editor").getEditedPostAttribute("meta");
    return meta["attachments"];
  }, []);

  const { editPost } = useDispatch("core/editor");

  return (
    <MediaUpload
      label="Upload"
      defaultValue={files}
      multiple
      onSelect={(mediaItems) => {
        console.log("media items", mediaItems);
        const attachments = mediaItems.map((mediaItem) => {
          const {
            id,
            title,
            filename,
            filesizeHumanReadable: fileSizeHumanReadable,
            icon,
            url,
            subtype,
          } = mediaItem;
          return {
            id,
            title,
            filename,
            fileSizeHumanReadable,
            icon,
            url,
            subtype,
          };
        });
        return editPost({ meta: { attachments } }); // Promise
      }}
      render={(props) => {
        const { open } = props;
        return (
          <>
            {files !== undefined && files !== null
              ? files.map((file, index) => {
                  return (
                    <div
                      key={`attachment-${index}`}
                      style={{ padding: "1rem" }}
                    >
                      <div style={{ display: "flex", direction: "row" }}>
                        <div
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.5rem",
                          }}
                        >
                          <img
                            src={file.icon}
                            alt=""
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                              display: "block",
                            }}
                          />
                        </div>
                        <p style={{ flex: "auto" }}>
                          <strong>{file.title}</strong>
                        </p>
                      </div>
                      <p>
                        <strong>File name:</strong>{" "}
                        <a
                          href={`${file.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {file.filename}
                        </a>
                      </p>
                      <p>
                        <strong>File size:</strong> {file.fileSizeHumanReadable}
                      </p>
                    </div>
                  );
                })
              : null}
            <div style={{ padding: "1rem" }}>
              <Button isPrimary onClick={open}>
                Add Attachments
              </Button>
            </div>
          </>
        );
      }}
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
        <Attachments />
      </PluginSidebar>
    );
  },
});
