fetch("https://www.kayimpex.com/blog/wp-json/wp/v2/posts")
    .then((data) => {
        // console.log(data) 
        return data.json()
    }).then((objectData) => {
        console.log(objectData);
        console.log(`Author ID is ${objectData[0].author}, Post ID is ${objectData[0].id}, Link is ${objectData[0].link}, Slug is ${objectData[0].slug}, Title is ${objectData[0].title.rendered}, And date is ${objectData[0].date}`)

        let tableData = ""
        objectData.map((values) => {
            tableData += `<h1>${values.title.rendered}</h1>
                     <h3 class="date">${values.date}</h3>
                     <h3>${values.link}</h3>
                     <p>${values.content.rendered}</p>   
                     <br> <br>
                     <hr>
                     <br> <br>
        `
        })

        document.getElementById("body").innerHTML = tableData

    }).catch((error) => {
        console.log(error);
    })

