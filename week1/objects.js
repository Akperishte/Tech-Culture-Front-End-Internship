//hello,object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}



let salary = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salary) {
  sum += salary[key];
}
alert(sum);
