class View {
    constructor( {onNewPost} ) {
        this.postsNode = document.querySelector('#posts');
        this.titleInputNode = document.querySelector('#title-input');
        this.bodyInputNode = document.querySelector('#body-input');
        this.btnNode = document.querySelector('#add-post-btn');

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener('click', this._handleBtnClick);
    }

    render(posts, isError) {
        this.postsNode.innerHTML = '';

        posts.forEach(post => {
            this.postsNode.innerHTML += `
                <div>
                    <p>${this._buildDateString(post.timestamp)}</p>
                    <p>${post.title}</p> 
                    <p>${post.body}</p>
                </div>
            `;
        });
    }

    _handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const body = this.bodyInputNode.value;

        this.onNewPost(title, body);
    }

    _buildDateString(timestamp) {
        const date = new Date(timestamp);

        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
}