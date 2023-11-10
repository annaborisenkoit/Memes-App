// const MEMES_MOCK = [
//     {
//         id: "181913649",
//         name: "Drake Hotline Bling",
//         url: "https://i.imgflip.com/30b1gx.jpg",
//         width: 1200,
//         height: 1200
//     },
//     {
//         id: "87743020",
//         name: "Two Buttons",
//         url: "https://i.imgflip.com/1g8my4.jpg",
//         width: 600,
//         height: 908
//     },
// ];

//https://api.imgflip.com/get_memes

class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com';
    }

    getMemes() { //Взяли моки из const MEMES_MOCK и возвращаем их
        return fetch(`${this.baseUrl}/get_memes`)
            .then(data => {
                return data.json();
            });
    }

}