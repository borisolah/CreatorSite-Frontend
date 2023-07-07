export const videoBlockConfig = {
  id: "video",
  label: "Video",
  attributes: { class: "fas fa-video fa-3x" },
  category: "Content",

  content: {
    type: "video",
    activate: true,
    select: true,
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    style: {
      height: "350px",
      width: "615px",
    },
  },
};

export const openAssetsForVideosCommand = (editor) => {
  editor.Commands.add("open-assets-for-videos", {
    run(editor, sender, options) {
      const assets = editor.AssetManager;
      assets.getConfig().uploadText = "Upload Video";
      assets.getConfig().addBtnText = "Add video URL";
      assets.render(
        assets.getAll().filter((asset) => asset.get("type") === "video")
      );
      editor.Modal.setTitle("Select Video");
      editor.Modal.setContent(assets.getContainer());
      editor.Modal.open();
      assets.setTarget(options.target);
    },
  });
};
