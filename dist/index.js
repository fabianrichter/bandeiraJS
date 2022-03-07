import Bandeira from 'bandeira';

let textBannerOne = new Bandeira();
            
let textBannerTwo = new Bandeira({
    selector: ".data-banner"
});   // no settings specified, use data-attributes

setTimeout(() => {
    textBannerTwo.pause();
}, 2000);

setTimeout(() => {
    textBannerTwo.play();
}, 4000);

setTimeout(() => {
    textBannerTwo.update();
}, 6000);

let textBannerThree = new Bandeira({
    text: "This comes from the JS settings object 😃",  // optional
    upperCase: true,            // optional, default is false
    selector: ".js-banner",     // optional, default is .text-banner-container
    separator: "&#x20;–&#x20;", // optional, default is one space
    speed: 3000,                // optional, default is 5000
    ltr: false,                 // optional, default is true
    amount: 12                  // optional, default is 10
});