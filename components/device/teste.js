export class Teste {
    constructor() {
        if (this.constructor == Teste) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    async render(callback, htmlPath) {
        const response = await fetch(htmlPath);
        const html = await response.text();
        document.getElementById("root").innerHTML += html;
        callback();
    }

    loadCss(cssPath) {
        var link = document.createElement("link");
        link.href = cssPath;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    callBacks() {
        throw new Error("Method 'callBacks()' must be implemented.");
    }
}