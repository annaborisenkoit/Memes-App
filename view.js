class View {
    constructor() { //доступ ко всем нодам - html-элементам
        this.previewTopTextNode = document.querySelector('.js-top-text');//относится к превью
        this.previewBottomTextNode = document.querySelector('.js-bottom-text');//относится к превью
        this.previewImageNode = document.querySelector('.js-image');//относится к превью

        this.settingSelectNode = document.querySelector('.js-memes-select') //относится к настройкам
    }

    renderPreview(preview) { //метод для отображения, принимает объект, который мы завели в модели
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

    renderMemesSelect(memes, currentMemeId) {
        memes.forEach(meme => {
            const {
                id,
                name
            } = meme;

            const optionNode = document.createElement('option');

            optionNode.setAttribute('value', id);
            optionNode.innerText = name;

            if (id === currentMemeId) {
                optionNode.setAttribute('selected', true);//Если id === currentMemeId, значит, этот мем выбран
            }
            

            this.settingSelectNode.appendChild(optionNode);
        });
    }
}   