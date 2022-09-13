const { type } = require("os");

function OldConstructor(id, name, type){
  this.id = id;
  this.name = name;
  this.type = type;
}

const oldInstace = new OldConstructor(1, "이상해씨", "풀");
console.log(oldInstace);

class NewConstructor{
  constructor(id, name, type){
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const newInstance = new NewConstructor(4, "파이리", "불");
console.log(newInstance);