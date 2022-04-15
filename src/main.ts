import App from "./App.vue";
import { game } from "./game-pixi";
import { createApp } from "./runtime-pixi";
createApp(App).mount(game.stage);
