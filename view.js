class View {
    constructor({ 
        onMemeChange,
        onTextTopChange, //вью получает действия, которые нужно сделать, когда меняется текст
        onTextBottomChange
    }) { //доступ ко всем нодам - html-элементам
        this.previewTopTextNode = document.querySelector('.js-top-text');//относится к превью
        this.previewBottomTextNode = document.querySelector('.js-bottom-text');//относится к превью
        this.previewImageNode = document.querySelector('.js-image');//относится к превью

        this.settingSelectNode = document.querySelector('.js-memes-select'); //относится к настройкам
        this.textTopInputNode = document.querySelector('.js-text-top-input');//вью знает про текстовые ноды
        this.textBottomInputNode = document.querySelector('.js-text-bottom-input');

        this.onMemeChange = onMemeChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;

        this.settingSelectNode.addEventListener('change', (this._handleSelectChange))
        this.textTopInputNode.addEventListener('input', this._handleTextTopChange)//обработчики событий на изменения текста
        this.textBottomInputNode.addEventListener('input', this._handleTextBottomChange)
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

    _handleSelectChange = () => { //обработка смены селекта - как только меняется селект, запусти метод, что селект поменялся
        const id = this.settingSelectNode.value; //этим кодом я подсвечиваю, что внутри value лежит id
           
        this.onMemeChange(id);//метод, что селект поменялся, передай id
    }

    _handleTextTopChange = (event) => {//запускаем обработчики событий, передавая новое value обратно
        this.onTextTopChange(event.target.value);
    }

    _handleTextBottomChange = (event) => {
        this.onTextBottomChange (event.target.value);
    }
}   