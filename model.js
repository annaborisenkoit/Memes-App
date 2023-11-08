const PREVIEW_MOCK = { //моковое превью, объект
    textTop: 'Верхняя подпись',
    textBottom: 'Нижняя подпись'
};

class Model {
    constructor({ onCurrentMemeIdChange }) {
        this.memes = []; //список мемов, хранилка для мемов
        this.currentMemeId = null;
        this.preview = PREVIEW_MOCK; //state preview

        this.onCurrentMemeIdChange = onCurrentMemeIdChange;
    }

    getMemes() { //геттер, этот метод позволяет получить список мемов
        return this.memes;
    }

    setMemes(memes) { //сеттер, этот метод позволяет достать список мемов
        this.memes = memes;
    }

    setCurrentMemeId(currentMemeId) { //умеет вызвать onCurrentMemeIdChange
        this.currentMemeId = currentMemeId;

        this.onCurrentMemeIdChange();
    }

    getCurrentMemeId() {
        return this.currentMemeId;
    }

    getPreview() { //чтобы снаружи что-то получить из модели , невозможно напрямую, для этого создаем метод getPreview
        return this.preview;
    }

    getCurrentMeme() { //умеет достать текущий мем-объект
        let currentMeme = null;

        this.memes.forEach(meme => {
            if (meme.id === this.getCurrentMemeId()) {
                currentMeme = meme;
            }
        })

        return currentMeme;

    }
}

    