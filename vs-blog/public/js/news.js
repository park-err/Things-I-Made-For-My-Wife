// javascript
const blogSection = document.querySelector('.blogs-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if (blog.id != decodeURI(location.pathname.split("/").pop())) {
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    if (data.category === "news") {
        blogSection.innerHTML += `
            <div class="blog-card" data-aos="fade-in" data-aos-delay="30" data-aos-duration="1000">
                <img src="${data.bannerImage}" class="blog-image" alt="">
                <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
                <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
                <a href="/${blog.id}" class="button dark">read</a>
            </div>
        `;
    }
}