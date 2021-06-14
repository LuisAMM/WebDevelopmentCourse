// still need a try and catch
// and delete imgs when another search is submited

const form = document.querySelector("#searchForm")

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const userSearchTerm = this.query.value;
  // if we have more inputs this may not be the best approach
  // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearchTerm}`)
  // instead we could use a config object... if i had more search terms i would simply add andther key value pair under params
  const config = { params: { q: userSearchTerm } }
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  addImages(res.data);
  this.elements.query.value = "";
})

const addImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      let img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img)
    }
  }
}