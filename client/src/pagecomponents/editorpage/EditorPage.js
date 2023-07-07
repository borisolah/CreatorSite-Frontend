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
import {
  videoBlockConfig,
  openAssetsForVideosCommand,
} from "./grapejsAssets/videoBlock";
import { buttonBlockConfig } from "./grapejsAssets/buttonBlock";
import { textBlockConfig } from "./grapejsAssets/textBlock";
import { imageBlockConfig } from "./grapejsAssets/imageBlock";

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
      ],
      pluginsOpts: {
        [grapesjsWebpagePreset]: {
          blocks: [],
        },
      },
      blockManager: {
        blocks: [
          textBlockConfig,
          imageBlockConfig,
          videoBlockConfig,
          buttonBlockConfig,
        ],
      },
    });
    openAssetsForVideosCommand(editor);

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
