window.addEventListener("load", async()=>{
   const template = document.querySelector("template").content.querySelector(".li");
   const ul = document.querySelector("#ul");
   
   const urls = [ 
    "https://api.github.com/repos/theroggio/theroggio.github.io/contents/writing/nantra_ancora.html",
    "https://api.github.com/repos/theroggio/theroggio.github.io/contents/writing/il_folle.html",
    "https://api.github.com/repos/theroggio/theroggio.github.io/contents/writing/infrangente.html",
    "https://api.github.com/repos/theroggio/theroggio.github.io/contents/writing/lit.html",
    "https://api.github.com/repos/theroggio/theroggio.github.io/contents/writing/mancanze_in_quarantena.html",
   ];

   for (let i = 0; i < urls.length; i++){
    const li = template.cloneNode(true);
    fetch(urls[i]).then(async r=>{
       const thing = await r.text();
       li.querySelector("div").innerHTML = thing
    });
    ul.appendChild(li);
   }
   
   });