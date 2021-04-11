 //接口
 interface movie{
    id: number;
    thumb: string;
    name: string;
    star: number;
 }
//对象字面量
const movies : movie[] = [
    { 
        id : 1,
        thumb : "ele.png",
        name :"第十一回",
        star :7.5
    },

    {
        id : 2,
        thumb : "sis.jpg",
        name :"我的姐姐",
        star :7.2
    }

]

// document.getElementById('.movie-list>ul>li')
document
.querySelector('.movie-list>ul')
.innerHTML = movies.map(movie=>`
    <li>
        <div class="pic">
        <a href=""><img src="${movie.thumb}" alt=""></a>
        </div>
        <div class="title">
        <a href="">${movie.name}</a></div>
        <a href="" class="btn-link btn-ticket">选座购票</a>
    </li>
`  ).join('')