class View {
    constructor() {
        this.previewTopTextNode = document.querySelector('.js-top-text');
        this.previewBottomTextNode = document.querySelector('.js-bottom-text');
        this.previewImageNode = document.querySelector('.js-image');

        this.settingSelectNode = document.querySelector('js-memes-select');
    }

    renderPreview(preview) {
        const {
            url,
            textTop,
            textBottom
        } = preview;

        this.previewTopTextNode.innerText = textTop;
        this.previewBottomTextNode.innerText = textBottom;
        this.previewImageNode.src = url;
    }

    renderMemesSelect(memes) {
        
    }
}
    