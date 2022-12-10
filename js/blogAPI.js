const url = new URL(`https://www.kayimpex.com/blog/wp-json/wp/v2/posts?_embed`)

fetch(url)
  .then((data) => {
    // console.log(data) 
    return data.json()
  }).then((objectData) => {
    objectData = objectData.slice(0, 3)
    // console.log(objectData);

    let tableData = ""
    objectData.map((values) => {
      let initialDate = values.date
      let formattedDate = new Date(initialDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour12: false

      })
      // console.log(formattedDate)

      tableData += `
      <a class='post-link' href='${values.link}' target="_blank">
    <div class='post-wrap'>

      <div class='post-image' style='background-image: url(${values.featured_media_src_url}'>
      </div>

      <div class='post-body'>
        <div class='post-body-primary'>
          <div class='post-meta'>
            <p>by <b>${values._embedded.author[0].name}-Kayimpex Team</b> <br> on <b> ${formattedDate}</b></p>
          </div>

          <div class='post-title'>
            <h2>${values.title.rendered}</h2>
          </div>

          <div class='post-text'>
            <p>${values.excerpt.rendered}</p>
          </div>
        </div>

      </div>

    </div>
  </a>
        `
    })

    document.getElementById("item").innerHTML = tableData

  }).catch((error) => {
    console.log(error);
  })