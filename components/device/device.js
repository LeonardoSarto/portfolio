import { Teste } from "./teste.js";

export class Device extends Teste {

    constructor() {
        super();
        super.render(this.callBacks, "components/device/device.html");
        super.loadCss("components/device/device.css");
    }
    
    callBacks() {
        function getTime() {
            const time = document.getElementById("local-time");
            const actualTime = new Date();
            time.innerHTML = `${actualTime.getHours() < 10 ? '0' : ''}${actualTime.getHours()}:${new Date().getMinutes() < 10 ? '0' : ''}${actualTime.getMinutes()}`;
        }

        getTime()
    }
}