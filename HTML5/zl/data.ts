interface book{
    id : number;
    thumb : string;
    name : string;
}
//对象字面量
const books : book[] = [
    {
        id : 1,
        thumb : "first.jpg",
        name :  "迷途的苍穹——科幻世界漫游指南"
    },

    {
        id : 2,
        thumb : "second.png",
        name :  "52倍人生——戴锦华大师电影课"
    },

    {
        id : 3,
        thumb : "third.png",
        name: "如何读透一本书——12堂阅读写作训练课"
    }
]

document
.querySelector(".time-list>ul")
.innerHTML = books.map(book =>`
    <li>
        <div class="pic">
        <a href=""><img src="${book.thumb}" alt=""></a>
        </div>

        <div class="title">
        <a href="">${book.name}</a>
        </div>

        <a href="" class="btn-link btn-music">音频专栏</a>

    </li>
`).join('')