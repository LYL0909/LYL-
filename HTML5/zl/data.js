//对象字面量
var books = [
    {
        id: 1,
        thumb: "first.jpg",
        name: "迷途的苍穹——科幻世界漫游指南"
    },
    {
        id: 2,
        thumb: "second.png",
        name: "52倍人生——戴锦华大师电影课"
    },
    {
        id: 3,
        thumb: "third.png",
        name: "如何读透一本书——12堂阅读写作训练课"
    }
];
document
    .querySelector(".time-list>ul")
    .innerHTML = books.map(function (book) { return "\n    <li>\n        <div class=\"pic\">\n        <a href=\"\"><img src=\"" + book.thumb + "\" alt=\"\"></a>\n        </div>\n\n        <div class=\"title\">\n        <a href=\"\">" + book.name + "</a>\n        </div>\n\n        <a href=\"\" class=\"btn-link btn-music\">\u97F3\u9891\u4E13\u680F</a>\n\n    </li>\n"; }).join('');
