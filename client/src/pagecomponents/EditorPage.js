import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import grapesjsWebpagePreset from "grapesjs-preset-webpage";
import "@fortawesome/fontawesome-free/css/all.css";
import grapesjsCKEditor from "grapesjs-plugin-ckeditor";
import grapesjsTuiImageEditor from "grapesjs-tui-image-editor";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";
import grapesjsPluginForms from "grapesjs-plugin-forms";
import grapesjsNavbar from "grapesjs-navbar";
import grapesjsComponentCountdown from "grapesjs-component-countdown";
import grapesjsStyleBg from "grapesjs-style-bg";
import grapesjsStyleFilter from "grapesjs-style-filter";
import grapesjsBlocksFlexbox from "grapesjs-blocks-flexbox";
import grapesjsTooltip from "grapesjs-tooltip";
import grapesjsCustomCode from "grapesjs-custom-code";

const EditorPage = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "100vh",
      width: "auto",
      storageManager: false,
      assetManager: {
        assets: [],
        showUrlInput: true,
      },

      plugins: [
        grapesjsTooltip,
        grapesjsCustomCode,
        grapesjsBlocksBasic,
        grapesjsComponentCountdown,
        grapesjsNavbar,
        grapesjsPluginForms,
        grapesjsWebpagePreset,
        grapesjsCKEditor,
        grapesjsTuiImageEditor,
        grapesjsStyleBg,
        grapesjsStyleFilter,
        grapesjsBlocksFlexbox,
      ],
      pluginsOpts: {
        [grapesjsWebpagePreset]: {
          blocks: [],
        },
      },
      blockManager: {
        blocks: [
          {
            id: "section",
            label: "Section",
            attributes: { class: "fas fa-square fa-3x" },
            content: `<section>
                        <h1>This is a simple title</h1>
                        <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                      </section>`,
          },
          {
            id: "text",
            label: "Text",
            attributes: { class: "fas fa-font fa-3x" },
            content: '<div data-gjs-type="text">Insert your text here</div>',
          },
          {
            id: "image",
            label: "Image",
            attributes: { class: "fas fa-camera fa-3x" },
            select: true,
            content: { type: "image" },
          },
          {
            id: "video",
            label: "Video",
            attributes: { class: "fas fa-video fa-3x" },
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
          },
          {
            id: "button",
            label: "Button",
            attributes: { class: "fas fa-hand-pointer fa-3x" },
            content: {
              type: "link",
              content: "Button",
              style: {
                display: "inline-block",
                padding: "10px",
                textDecoration: "none",
                background: "#3f51b5",
                color: "#ffffff",
              },
            },
          },
          {
            id: "embed",
            label: "Embed",
            attributes: { class: "fas fa-code fa-3x" },
            content: {
              type: "iframe",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              style: {
                width: "100%",
                height: "350px",
              },
            },
          },
        ],
      },
    });
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

    // Event Listener to Open Asset Manager
    editor.on("block:drag:stop", (component) => {
      if (component.is("image")) {
        editor.runCommand("open-assets");
      } else if (component.is("video")) {
        editor.runCommand("open-assets-for-videos", { target: component });
      }
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return <div id="gjs" style={{ height: "100vh", border: "3px solid #444" }} />;
};

export default EditorPage;
