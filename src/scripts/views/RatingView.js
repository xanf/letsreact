import BaseView from './BaseView'

export default class RatingView extends BaseView {

  renderItem(item) {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.points}`;
    return li;
  }

  render(items) {
    if (items.loading) {
      this._node.innerHTML = '<h1>Loading...</h1>';
      return;
    }

    const ul = document.createElement('ul');
    items.entities
      .sort((a, b) => b.points - a.points)
      .forEach(
        item => ul.appendChild(this.renderItem(item)
      ));

    this._node.innerHTML = '';
    this._node.appendChild(ul);
  }
}
