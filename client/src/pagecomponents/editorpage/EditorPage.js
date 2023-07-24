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
import grapesjsTooltip from "grapesjs-tooltip";
import grapesjsCustomCode from "grapesjs-custom-code";
import grapesjsTabs from "grapesjs-tabs";
import {
  videoBlockConfig,
  openAssetsForVideosCommand,
} from "./grapejsAssets/videoBlock";
import { buttonBlockConfig } from "./grapejsAssets/buttonBlock";
import { textBlockConfig } from "./grapejsAssets/textBlock";
import { imageBlockConfig } from "./grapejsAssets/imageBlock";
import { customHeader } from "./grapejsAssets/customHeader";
import { customHeaderTwo } from "./grapejsAssets/customHeaderTwo";
import { customBlog } from "./grapejsAssets/customBlog";
import { customGallery } from "./grapejsAssets/customGallery";
import { customBrands } from "./grapejsAssets/customBrands";
import { customContacts } from "./grapejsAssets/customContacts";
import { customSubscribe } from "./grapejsAssets/customSubscribe";
import { customParralax } from "./grapejsAssets/customParralax";
import { customTeam } from "./grapejsAssets/customTeam";
import { customFooter } from "./grapejsAssets/customFooter";
import { customFooterTwo } from "./grapejsAssets/customFooterTwo";

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
        grapesjsTabs,
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
      ],
      pluginsOpts: {
        grapesjsWebpagePreset: {
          blocks: [],
        },
      },
      blockManager: {
        blocks: [
          customHeader,
          customHeaderTwo,
          customBlog,
          customGallery,
          customBrands,
          customParralax,
          customTeam,
          customContacts,
          customSubscribe,
          customFooter,
          customFooterTwo,
          textBlockConfig,
          imageBlockConfig,
          videoBlockConfig,
          buttonBlockConfig,
        ],
      },
    });
    openAssetsForVideosCommand(editor);

    editor.DomComponents.addType("tabs", {
      model: {
        defaults: {
          // Add .tab-content as a droppable area
          droppable: ".tab-contents",
        },
      },
    });

    // Inject Bootstrap and Font Awesome styles into the GrapesJS canvas iframe
    editor.on("load", () => {
      const iframeHead = editor.Canvas.getDocument().head;

      // Inject Bootstrap
      let bootstrapLink = document.createElement("link");
      bootstrapLink.href =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
      bootstrapLink.rel = "stylesheet";
      bootstrapLink.integrity =
        "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM";
      bootstrapLink.crossOrigin = "anonymous";
      iframeHead.appendChild(bootstrapLink);

      // Inject Font Awesome
      let fontAwesomeLink = document.createElement("link");
      fontAwesomeLink.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
      fontAwesomeLink.rel = "stylesheet";
      fontAwesomeLink.integrity =
        "sha384-iBB6mvEPmI4NgvZ4xQ/8jZfDelzJVPeP4pZp3HGMDYl5FpPTF+to8xM6B5z6W5zF";
      fontAwesomeLink.crossOrigin = "anonymous";
      iframeHead.appendChild(fontAwesomeLink);

      editor.on("block:drag:stop", (component) => {
        if (component.is("image")) {
          editor.runCommand("open-assets");
        } else if (component.is("video")) {
          editor.runCommand("open-assets-for-videos", { target: component });
        }
      });
    });
    return () => {
      editor.destroy();
    };
  }, []);

  return <div id="gjs" style={{ height: "100vh", border: "3px solid #444" }} />;
};

export default EditorPage;
