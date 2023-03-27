export const auth = (id) => {
  const { judge } = JSON.parse(localStorage.getItem('DDI-judge'));
  // eslint-disable-next-line eqeqeq
  if(id != judge._id) {
    return false
  }
  return true
}