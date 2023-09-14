class View {
    constructor() {
        this.postsNode = document.querySelector('#posts');
    }

    renderPosts(posts) {
        this.postsNode.innerHTML = '';

        posts.forEach(post => {
            this.postsNode.innerHTML += `
                <div>
                    <p>${post.title}</p> 
                    <p>${post.description}</p>
                </div>
            `;
        });

    }
}