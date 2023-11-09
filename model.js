const PREVIEW_MOCK = { //моковое превью, объект
    textTop: 'Верхняя подпись',
    textBottom: 'Нижняя подпись'
};

class Model {
    constructor({ 
        onCurrentMemeIdChange,
        onMemesChange,
        onTextTopChange,
        onTextBottomChange
    }) {
        this.memes = []; //список мемов, хранилка для мемов
        this.currentMemeId = null;
        this.textTop = '';
        this.textBottom = '';


        this.onMemesChange = onMemesChange;
        this.onCurrentMemeIdChange = onCurrentMemeIdChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;
    }

    getMemes() { //геттер, этот метод позволяет получить список мемов
        return this.memes;
    }

    setMemes(memes) { //сеттер, этот метод позволяет достать список мемов
        this.memes = memes;
        this.currentMemeId = memes[0].id;

        this.onMemesChange(); //обработчик, вызовет код из контроллера - renderMemesSelect и renderPreview
        this.onCurrentMemeIdChange();
    }

    setCurrentMemeId(currentMemeId) { //умеет вызвать onCurrentMemeIdChange
        this.currentMemeId = currentMemeId;

        this.onCurrentMemeIdChange();
    }

    getCurrentMemeId() {
        return this.currentMemeId;
    }

    setTextTop(text) {
        this.textTop = text;

        this.onTextTopChange();
    }

    setTextBottom(text) {
        this.textBottom = text;

        this.onTextBottomChange();
    }

    getPreview = () => { //чтобы снаружи что-то получить из модели , невозможно напрямую, для этого создаем метод getPreview
        return {
            textTop: this.textTop,
            textBottom: this.textBottom,
            url: this.getCurrentMeme().url
        }
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

    