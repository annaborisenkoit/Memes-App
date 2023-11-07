class Controller { 
    constructor() {
        //подвязываем модель, отображение и api
        this.model = new Model();
        this.view = new View(
            {
            onMemeChange: this.handleMemeChange
        }
        );
        this.api = new API();
    }

    //инициализация memes app
    init() {
        const memes = this.api.getMemes(); //на старте получаем мемы, из api вызываю getMemes - имитирую апишку, но она пока возвращает пустые мемы, потом будет ходить в реальный апи

        this.model.setMemes(memes); //сеттим мемы в модели
        this.model.setCurrentMemeId(memes[0].id);//сеттим id выбранного мема в модель

        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());//сеттер приводит к отрисовке селекта
        
        const preview = this.model.getPreview();//метод вернет моковое превью

        this.view.renderPreview(preview)//получили превью из модели, передали во вью
    }

    handleMemeChange(id) {
        console.log(id);
    }
    
}