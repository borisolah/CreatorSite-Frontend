import React, { useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import grapesjsWebpagePreset from "grapesjs-preset-webpage";
import grapesjsCountdown from "grapesjs-component-countdown";
import grapesjsTabs from "grapesjs-tabs";
import grapesjsCustomCode from "grapesjs-custom-code";
import grapesjsForms from "grapesjs-plugin-forms";
import grapesjsTooltip from "grapesjs-tooltip";

const EditorPage = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#grapesjs-editor",
      height: "100vh",
      fromElement: true,
      storageManager: false,
      plugins: [
        grapesjsWebpagePreset,
        grapesjsCountdown,
        grapesjsTabs,
        grapesjsCustomCode,
        grapesjsForms,
        grapesjsTooltip,
      ],
      pluginsOpts: {
        [grapesjsWebpagePreset]: {},
        [grapesjsCountdown]: {},
        [grapesjsTabs]: {},
        [grapesjsCustomCode]: {},
        [grapesjsForms]: {},
        [grapesjsTooltip]: {},
      },
    });

    // Custom columns
    const bm = editor.BlockManager;

    bm.add("1-column", {
      label: "1 Column",
      content: '<div class="row"><div class="column">Content</div></div>',
    });

    bm.add("2-columns", {
      label: "2 Columns",
      content:
        '<div class="row"><div class="column">Content</div><div class="column">Content</div></div>',
    });

    bm.add("3-columns", {
      label: "3 Columns",
      content:
        '<div class="row"><div class="column">Content</div><div class="column">Content</div><div class="column">Content</div></div>',
    });

    // Add image block
    bm.add("image", {
      label: "Image",
      select: true,
      content: {
        type: "image",
      },
      activate: true,
    });

    // Add video block
    bm.add("video", {
      label: "Video",
      content: {
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        style: {
          height: "350px",
          width: "615px",
        },
      },
    });

    // Optionally, load an existing template
    editor.setComponents(`
            <div>
                <h1>Hello World!</h1>
                <p>This is a GrapesJS editor with the webpage preset and additional plugins.</p>
            </div>
        `);

    // Ensuring the blocks are visible
    editor.BlockManager.getCategories().each((category) => {
      category.set("open", true);
    });

    // Clean up on component unmount
    return () => {
      editor.destroy();
    };
  }, []);

  return <div id="grapesjs-editor" style={{ height: "100vh" }} />;
};

export default EditorPage;
