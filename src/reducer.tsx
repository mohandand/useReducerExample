export default function reducer(state, action) {
  switch (action.type) {
    case 'Inc':
      return { count: state.count + 1 };
    case 'Dec':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
