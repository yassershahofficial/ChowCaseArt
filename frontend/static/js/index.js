import Home from "./views/Home.js";
import About from "./views/About.js";
import Photos from "./views/Photos.js"
import Error from "./views/Error.js";

console.log("JS is loaded");

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {

    //Declare that these path will load specific js file
    const routes = [
        { path: "/404", view: Error},
        { path: "/", view: Home },
        { path: "/about", view: About},
        { path: "/photos", view: Photos},
    ];

    //check whether the path(routes) is similar to any declared routes
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
            //isMatch equal to true, if location.pathname equal to path(routes)
            //if there is 3 path(routes), then there will be 2 false & 1 true isMatch recorded
        };
    });

    //find isMatch that is true only and fill in match
    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    const view = new match.route.view();
    document.querySelector("#content").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router)

//Excute listen after DOM(html) is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});