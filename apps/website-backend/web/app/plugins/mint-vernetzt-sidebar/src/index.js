import { Button } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { PluginSidebar } from "@wordpress/edit-post";
import { MediaUpload } from "@wordpress/media-utils";
import { registerPlugin } from "@wordpress/plugins";

function Attachments() {
  const files = useSelect((select) => {
    const meta = select("core/editor").getEditedPostAttribute("meta");
    return meta["attachments"];
  }, []);

  const { editPost } = useDispatch("core/editor");

  const handleRemove = (id) => {
    const filteredFiles = files.filter((file) => file.id !== id);
    editPost({ meta: { attachments: filteredFiles } });
  };

  return (
    <MediaUpload
      label="Upload"
      defaultValue={files}
      multiple
      onSelect={(mediaItems) => {
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

        // merge current an added attachment files
        // remove duplicates
        const allFiles = files
          .concat(attachments)
          .filter((file, index, array) => {
            const indexInArray = array.findIndex((item) => item.id === file.id);
            return indexInArray === index;
          });

        return editPost({ meta: { attachments: allFiles } }); // Promise
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
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          direction: "row",
                          alignItems: "baseline",
                        }}
                      >
                        <div
                          style={{
                            width: "1rem",
                            height: "1rem",
                            flexShrink: "0",
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
                      <div
                        style={{
                          display: "flex",
                          direction: "row",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                        }}
                      >
                        <p>
                          <strong>File size:</strong>{" "}
                          {file.fileSizeHumanReadable}
                        </p>
                        <Button
                          isSmall
                          isTertiary
                          onClick={() => handleRemove(file.id)}
                        >
                          Remove
                        </Button>
                      </div>
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
