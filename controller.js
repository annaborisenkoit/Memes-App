class Controller { 
    constructor() {
        //подвязываем модель, отображение и api
        this.model = new Model({
            onMemesChange: this.handleModelMemesChange,
            onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange
        });
        this.view = new View(
            {
            onMemeChange: this.handleViewMemeChange
        });

        this.api = new API();
    }

    //инициализация memes app
    init() {
        const memes = this.api.getMemes(); //на старте получаем мемы, из api вызываю getMemes - имитирую апишку, но она пока возвращает пустые мемы, потом будет ходить в реальный апи

        this.model.setMemes(memes); //сеттим мемы в модели, setMemes и мемы меняет и выбранный id
        
    }

    handleModelMemesChange = () => { //на изменение мема в модели есть отображение селекта
        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());//сеттер приводит к отрисовке селекта
    }

    handleViewMemeChange = (id) => { //когда во вью мем меняется, поменяй в модели CurrentMemeId
        this.model.setCurrentMemeId(id);
    }

    handleModelCurrentMemeIdChange = () => {//когда в модели меняется currentMemeId, то запусти рендер во вью - новое renderPreview
        this.view.renderPreview(this.model.getPreview());
    }
    
}