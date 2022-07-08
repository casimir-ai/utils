export function getBindableProps(props) {
  return Object.keys(props)
    .reduce((acc, key) => ({ ...acc, ...(this[key] ? { [key]: this[key] } : {}) }), {});
}
