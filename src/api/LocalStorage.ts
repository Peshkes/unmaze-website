export class LocalStorage {
    static get(key: string) {
        return localStorage.getItem(key);
    }

    static set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static remove(key: string) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }

    static getReadArticles(){
        return localStorage.getItem("read-articles");
    }

    static addReadArticle(article: number){
        let readArticles = localStorage.getItem("read-articles");
        if(readArticles){
            readArticles = readArticles + "," + article;
        }else{
            readArticles = article + "";
        }
        localStorage.setItem("read-articles", readArticles);
    }

    static clearReadArticles(){
        localStorage.removeItem("read-articles");
    }
}
