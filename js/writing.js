window.addEventListener("load", async()=>{
   const template = document.querySelector("template").content.querySelector(".li");
   const ul = document.querySelector("#ul");
   
   const urls = [ 
    "https://theroggio.github.io/writing/nantra_ancora.html",
    "https://theroggio.github.io/writing/il_folle.html",
    "https://theroggio.github.io/writing/infrangente.html",
    "https://theroggio.github.io/writing/lit.html",
    "https://theroggio.github.io/writing/mancanze_in_quarantena.html",
   ];

   for (let i = 0; i < urls.length; i++){
      const li = template.cloneNode(true);
      const li_fake = template.cloneNode(true);
      fetch(urls[i]).then(async r=>{
       const thing = await r.text();
       li.querySelector("div").innerHTML = thing
    });
    ul.appendChild(li);
    ul.appendChild(li_fake);
   }
   
   });