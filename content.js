function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function locatWinner(winner, people_list) {
    console.log(winner)
    people_list[winner].style.backgroundColor = 'green';
    people_list[winner].scrollIntoView({
        behavior: 'smooth',  // 平滑滾動
        block: 'center',     // 垂直方向置中
        inline: 'center'
    });
}
function drawing(){
    var people_list = document.getElementsByClassName('x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xsag5q8 xz9dl7a x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1');
    var winner = getRandom(1, people_list.length - 1);
    locatWinner(winner, people_list);
}
console.log('content.js');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.action !== "start") return;
    drawing();
});
