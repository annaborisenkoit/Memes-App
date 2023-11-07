const PREVIEW_MOCK = { //моковое превью, объект
    url: '', //не из api, хардкод
    textTop: 'Верхняя подпись',
    textBottom: 'Нижняя подпись'
};

class Model {
    constructor() {
        this.memes = []; //список мемов, хранилка для мемов
        this.currentMemeId = null;
        this.preview = PREVIEW_MOCK; //state preview
    }

    getMemes() { //геттер, этот метод позволяет получить список мемов
        return this.memes;
    }

    setMemes(memes) { //сеттер, этот метод позволяет достать список мемов
        this.memes = memes;
    }

    setCurrentMemeId(currentMemeId) {
        this.currentMemeId = currentMemeId;
    }

    getCurrentMemeId() {
        return this.currentMemeId;
    }

    getPreview() { //чтобы снаружи что-то получить из модели , невозможно напрямую, для этого создаем метод getPreview
        return this.preview;
    }

    getCurrentMeme() {
        return this.memes[this.getCurrentMemeId];
    }
}

    