//import the formatted
import AbstractView from "./AbstractView.js";

//extend the formatted to use for individual view
export default class extends AbstractView{
    //use to call the function below them
    constructor(){
        super();
        this.setTitle("About");
    }
    //async -> promise return value || the value is template html
    async getHtml(){
        return `
        <div class="profile">
            <div>
                <img src="https://www.dmarge.com/wp-content/uploads/2016/03/FeatTokyo1.jpg">
            </div>
            <div class="content-profile-info">
                <h2>Yasser Shah.</h2>
                <div>
                    <h3>Artist</h3>
                    <h3>Male</h3>
                </div>
                <p>
                    Big Goals are for Direction, Small Goals are for Clarity
                </p>
            </div>
        </div>
        `;
    }
}