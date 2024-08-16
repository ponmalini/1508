//Write a program to coount the number of occurences of a given character in a string.let str = 'GeeksforGeeks'
let str='Hello World'
let result = {}
for(let i = 0;i< str.length;i++){
  let a = str.charAt(i)
  if(!result[a]){
    result[a] =1;
  }
  else{
    result[a]+=1
  }
}
console.log("The occurrence of each letter in given string is:",result)
