class Controller {
    constructor() {
        this.model = new Model({
            onPostCanged: this.handleModelPostsChanged
        });

        this.view = new View({
            onNewPost: this.handleViewNewPost
        });
    }

    handleModelPostsChanged = (posts) => {
        this.view.renderPosts(posts);
    }

    handleViewNewPost = (title,description) => {
        this.model.addPost(title,description);
    }
}