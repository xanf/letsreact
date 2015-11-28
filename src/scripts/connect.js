export default function connect(store, component, filterFn) {
  store.subscribe(
    () => component.render(filterFn(store.getState()))
  );
  component.render(filterFn(store.getState()));
}
