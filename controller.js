class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.api = new API();
    }

    init() {
        const preview = this.model.getPreview();

        this.view.render(preview)
    }
}