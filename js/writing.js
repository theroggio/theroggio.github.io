import { readdirSync, readFile } from 'node:fs';
var files = readdirSync(dir);
var filelist = [];
files.forEach(function(file) {
   filelist.push(file);
   });
console.log(filelist[0]);
readFile('./content/generic.md', 'utf8', (err, data) )
console.log(data);
console.log(err);
const para = document.createElement("p");
const node = document.createTextNode(data);
para.appendChild(node);

const element = document.getElementById("footer");
const child = document.getElementById("p");
element.insertBefore(para, child);