const PREVIEW_MOCK = { //моковое превью, объект
    url: 'https://i.imgflip.com/1g8my4.jpg', //не из api, хардкод
    textTop: 'Верхняя подпись',
    textBottom: 'Нижняя подпись'
};

class Model {
    constructor() {
        this.preview = PREVIEW_MOCK;
    }

    getPreview() { //чтобы что-то получить из модели, невозможно напрямую, для этого создаем метод getPreview
        return this.preview;
    }
}

    