




export const setData = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
}


export const getData = () => {
  const posts = localStorage.getItem('posts');
  return posts === null ? [] : JSON.parse(posts);
}