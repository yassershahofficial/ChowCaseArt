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
            <i class="fi fi-rr-user-pen"></i>
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
        <div class="content-personal">
            <h2>Personal Information</h2>
            <div class="content-personal-info">
                <div class="content-personal-info-lists">
                    <h4>Interest : </h4>
                    <h4>Birthday : </h4>
                    <h4>Status : </h4>
                    <h4>Email : </h4>
                    <h4>Phone Number : </h4>
                    <h4>City : </h4>
                </div>
                <div class="content-personal-info-answer">
                    <h4>Coding, Art</h4>
                    <h4>6 November 2002</h4>
                    <h4>Private</h4>
                    <h4>Yassershah02@gmail.com</h4>
                    <h4>+60123456789</h4>
                    <h4>Selangor, Malaysia</h4>
                </div>
            </div>
        </div>
        `;
    }
}