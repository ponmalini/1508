//Write a program to check if a given string is palindrome.
let str="racecar"
let rev="";
for(let i= str.length-1;i>=0;i--)
{
    rev=rev+str[i];
}
if (rev == str)
{
    console.log('true');
}
else {
    console.log('false');
}
console.log(str);