//import the formatted
import AbstractView from "./AbstractView.js";

//extend the formatted to use for individual view
export default class extends AbstractView{
    //use to call the function below them
    constructor(){
        super();
        this.setTitle("404");
    }
    //async -> promise return value || the value is template html
    async getHtml(){
        return `
            <h1>404 : This path does not exists</h1>
        `;
    }
}