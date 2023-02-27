import { registerBlockType } from "@quillforms/blocks";
import display from "../my-custom-block/display.js";

registerBlockType("user-review", {
  supports: {
    editable: true
  },
  attributes: {
    start: {
      type: "number",
      default: 1
    },
    end: {
      type: "number",
      default: 5
    }
  },
  display
});
