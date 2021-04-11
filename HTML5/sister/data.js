//对象字面量
var movies = [
    {
        id: 1,
        thumb: "ele.png",
        name: "第十一回",
        star: 7.5
    },
    {
        id: 2,
        thumb: "sis.jpg",
        name: "我的姐姐",
        star: 7.2
    }
];
// document.getElementById('.movie-list>ul>li')
document
    .querySelector('.movie-list>ul')
    .innerHTML = movies.map(function (movie) { return "\n    <li>\n        <div class=\"pic\">\n        <a href=\"\"><img src=\"" + movie.thumb + "\" alt=\"\"></a>\n        </div>\n        <div class=\"title\">\n        <a href=\"\">" + movie.name + "</a></div>\n        <a href=\"\" class=\"btn-link btn-ticket\">\u9009\u5EA7\u8D2D\u7968</a>\n    </li>\n"; }).join('');
