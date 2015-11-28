import BaseView from './BaseView'

export default class CounterView extends BaseView {

  initialRender() {
    this._rendered = true;
    this.container = document.createElement('span');
    this._node.appendChild(this.container);
    const button = document.createElement('button');
    button.addEventListener('click', this._actions.incrementCounter);
    button.textContent = 'Click me';
    this._node.appendChild(button);
  }

  render(counter) {
    super.render();
    this.container.textContent = counter;
  }
}
