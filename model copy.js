class Model {
    constructor({ onPostCanged }) {
        this.posts = [];
        this.isError = false;
        this.onPostCanged = onPostCanged;        
    }

    addPost(title, body) {
        if(this._isPostValid(title)) {
            this.isError = false;

            this.posts.push({
                title,
                body,
                timestamp: Date.now()
            });

        } else {
            this.isError = true;
        }
       
        this.onPostCanged(this.posts, this.isError);
    }

    setPosts(posts) {
        this.posts = posts;

        this.onPostCanged(this.posts, this.isError);
    }
    
    getPosts() {
        return this.posts;
    }

    _isPostValid(title) {
        return title.lenght < 100;
    }
}