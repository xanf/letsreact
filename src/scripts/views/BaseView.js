export default class BaseView {
  constructor(node, actions = {}) {
    this._node = node;
    this._actions = actions;
  }

  render(data) {
    if (!this._rendered) {
      this.initialRender();
    }
  }
}
