import { createRenderer } from "vue";
import { Container, Sprite, Text, Texture } from "pixi.js";
const renderer = createRenderer<Container, Container>({
  patchProp(el, key, prevValue, nextValue) {
    console.log(el, key, prevValue, nextValue);
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(nextValue);
        break;
      default:
        break;
    }
  },
  insert(el, parent) {
    parent.addChild(el);
  },
  remove(el) {
    el.parent && el.parent.removeChild(el);
  },
  createElement(type) {
    console.log(type);
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      default:
        throw new Error(`Unknown element type:${type}`);
    }
    return element;
  },
  createText(text) {
    return new Text(text);
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  },
});
export function createApp(root: any) {
  return renderer.createApp(root);
}
