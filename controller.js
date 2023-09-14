class Controller {
    constructor() {
        this.model = new Model({
            onPostCanged: this.handleModelPostsChanged
        });
        this.view = new View();
    }

    handleModelPostsChanged = (posts) => {
        this.view.renderPosts(posts);
    }
}