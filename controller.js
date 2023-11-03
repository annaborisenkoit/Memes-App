class Controller { 
    constructor() {
        //подвязываем модель, отображение и api
        this.model = new Model();
        this.view = new View();
        this.api = new API();
    }

    //инициализация memes app
    init() {
        const preview = this.model.getPreview();//метод вернет мок

        this.view.render(preview)//получили из модели, передали во вью
    }
    
}