const PREVIEW_MOCK = {
    url: 'https://i.imgflip.com/1g8my4.jpg',
    textTop: 'Верхняя подпись',
    textBottom: 'Нижняя подпись'
}

class Model {
    constructor() {
        this.preview = PREVIEW_MOCK;
    }

    getPreview() {
        return this.preview;
    }
}

    