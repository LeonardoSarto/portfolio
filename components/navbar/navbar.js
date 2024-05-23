import { Teste } from "../device/teste.js";

export class Navbar extends Teste {

    constructor() {
        super();
        super.render(this.callBacks, "components/navbar/navbar.html");
        super.loadCss("components/navbar/navbar.css")
    }
    
    callBacks() {
    }
}
