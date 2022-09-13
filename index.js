class ItsMe{
  constructor(id, name, city){
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

let box = [];

let arr = ["근수", "상호", "예훈", "두진", "영빈"];
// for(let i = 0; i<arr.length; i ++){
//   box.push(new ItsMe(i+1, arr[i], "태초마을"));
  
// }

arr.forEach(function(value, index){
  box.push(new ItsMe(index+1, value, "태초마을"));
})
// for문으로 한 것과 forEach랑 같은 결과 나옴. 

let boxNim = [];
box.map((value, index)=>{
  boxNim.push(value.name + "님");
})
// map 이용해서 결과 도출 
// console.log(boxNim);


// class ahyeon extends ItsMe{
//   constructor(id, name, city, eye){
//     super(id, name, city);
//     위에 내용 다 받겠다는 뜻 
//     this.eye = eye;
//   }
// }
// class ItsMe를 상속 받아서 다른 객체  만듬. eye라는 새로운 내용 추가해서 만듬

// let test = new ahyeon(1, "이아연", "대전", true);
// console.log(test);


console.log(box);

const fs = require("fs");
// 지금 파일시스템 건드리는 모듈시스템 가져올거라는 뜻. 옛날 방식
let saveFile = JSON.stringify(box, null, 2);
fs.writeFile(`./test.json`, saveFile, "utf-8", (err)=>{
  if (err) throw err;
});
// json 방식으로 객체 파일 만듬. api 형식과 비슷 



