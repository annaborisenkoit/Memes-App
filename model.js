class Model {
    constructor({ onPostCanged }) {
        this.posts = [{
            title: 'efefe',
            description: 'Jgbcfybt'
        }];
        this.onPostCanged = onPostCanged;        
    }

    addPost(title, description) {
        this.posts.push({
            title,
            description
        });

        this.onPostCanged(this.posts);
    }

    getPosts() {
        return this.posts;
    }
}