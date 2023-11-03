class View {
    constructor() {
        this.previewTopTextNode = document.querySelector('.js-top-text');
        this.previewBottomTextNode = document.querySelector('.js-bottom-text');
        this.previewImageNode = document.querySelector('.js-image');
    }

    render(preview) { //метод для отображения, принимает объект, который мы завели в модели
        const { //из этого объекта берем отдельные поля в отдельные переменные
            url,
            textTop,
            textBottom
        } = preview;

        //запускаем рендер, вырисовываем в интерфейсе:
        this.previewTopTextNode.innerText = textTop;
        this.previewBottomTextNode.innerText = textBottom;
        this.previewImageNode.src = url;
    }
}   