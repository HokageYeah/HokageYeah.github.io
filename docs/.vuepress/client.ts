import { defineClientConfig } from "@vuepress/client";
import ownlayout from "./layouts/ownlayout.vue";
export default defineClientConfig({
    layouts: {
        // we override the default layout to provide comment service
        Layout: ownlayout,
    },
});