const PREVIEW_MOCK = {
    url: 'https://i.imgflip.com/1g8my4.jpg',
    textTop: 'Верхняя подпись',
    textBottom: 'Нижняя подпись'
};

class Model {
    constructor() {
        this.memes = [];
        this.preview = PREVIEW_MOCK;
    }

    getMemes () {
        return this.memes
    }

    setMemes(memes) {
        this.memes = memes;
    }

    getPreview() {
        return this.preview;
    }
}

    