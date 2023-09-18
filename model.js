class Model {
    constructor({ onPostCanged }) {
        this.posts = [];
        this.onPostCanged = onPostCanged;        
    }

    addPost(title, description) {
        this.posts.push({
            title,
            description,
            timestamp: Date.now()
        });

        this.onPostCanged(this.posts);
    }

    getPosts() {
        return this.posts;
    }
}