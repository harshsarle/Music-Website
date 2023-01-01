const music = new Audio('audio/23.mp3.mp3');
//music.play();
const songs=[
            {
               id:"1",
               songName:` Kesariya <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/1.jpg.jpg"
            } ,  
            {
               id:"2",
               songName:` Galliyan <br>
               <div class="subtitle">Ankit</div>
               `,
               pOster:"poster/2.jpg.jpg"
            }  , 
            {
               id:"3",
               songName:`Toofan <br>
               <div class="subtitle">Brijesh</div>
               `,
               pOster:"poster/3.jpg.jpg"
            }   ,
            {
               id:"4",
               songName:`Mere Dholna  <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/4.jpg.jpg"
            }   ,
            {
               id:"5",
               songName:`Jhoome Jo Pathaan <br>
               <div class="subtitle">Vishal shekhar</div>
               `,
               pOster:"poster/5.jpg.jpg"
            }   ,
            {
               id:"6",
               songName:` Naacho Naccho <br>
               <div class="subtitle">vishal Mishra</div>
               `,
               pOster:"poster/6.jpg.jpg"
            }   ,
            {
               id:"7",
               songName:`Sita Ramam <br>
               <div class="subtitle">Viashal Chan..</div>
               `,
               pOster:"poster/7.jpg.jpg"
            }   ,
            {
               id:"8",
               songName:` Manike <br>
               <div class="subtitle">Yohani</div>
               `,
               pOster:"poster/8.jpg.jpg"
            }   ,
            {
               id:"9",
               songName:` Aadaab Barbaad <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/9.jpg.jpg"
            }   ,
            {
               id:"10",
               songName:`Tujhe Kitna Chaien Aur Hum<br>
               <div class="subtitle">Jubin Nautiyal</div>
               `,
               pOster:"poster/10.jpg.jpg"
            }   ,
            {
               id:"11",
               songName:` Jann Ban Gaye<br>
               <div class="subtitle">Mithoon,Vm</div>
               `,
               pOster:"poster/11.jpg.jpg"
            }   ,
            {
               id:"12",
               songName:` Sanam Re <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/12.jpg.jpg"
            }   ,
            {
               id:"13",
               songName:` Bolo HAr HAr <br>
               <div class="subtitle">Mithoon</div>
               `,
               pOster:"poster/13.jpg.jpg"
            }   ,
            {
               id:"14",
               songName:`Humnava <br>
               <div class="subtitle">Papon</div>
               `,
               pOster:"poster/14.jpg.jpg"
            }   ,
            {
               id:"15",
               songName:`Humdard <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/15.jpg.jpg"
            }   ,
            {
               id:"16",
               songName:` Dua kro <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/16.jpg.jpg"
            }   ,
            {
               id:"17",
               songName:` Haan Main Galat <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/17.jpg.jpg"
            }   ,
            {
               id:"18",
               songName:` Sayad <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/18.jpg.jpg"
            }   ,
            {
               id:"19",
               songName:`Chal Ghar Chalein <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/19.jpg.jpg"
            }   ,
            {
               id:"20",
               songName:`Khariyat <br>
               <div class="subtitle">Arijit</div>
               `,
               pOster:"poster/20.jpg.jpg"
            }   
]

Array.from(document.getElementsByClassName('SongItem')).forEach((e,i)=>{
               e.getElementsByTagName('img')[0].src = songs[i].pOster;
               e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
               if (music.paused || music.currentTime<=0) {
                              music.play();
                              wave.classList.add('active1');
                              masterPlay.classList.remove('bi-play-fill');
                              masterPlay.classList.add('bi-pause-fill');
                              
               } else {
                              music.pause();
                              wave.classList.remove('active1');
                              masterPlay.classList.add('bi-play-fill');
                              masterPlay.classList.remove('bi-pause-fill');
               }
});




let index=0;
let postermasterplay=document.getElementById('postermasterplay');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
   e.addEventListener('click',(el)=>{
      index = el.target.id;
      music.src = `audio/${index}.mp3.mp3`;
      postermasterplay.src=`poster/${index}.jpg.jpg`;
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      wave.classList.add('active1');

      let songTitles=songs.filter((els)=>{
         return els.id == index;
      })
      songTitles.forEach(elss=>{
         let{songName,poster}=elss;
         title.innerHTML=songName;
         postermasterplay.src=pOster;
      });
   })
})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
   let music_curr = music.currentTime;
   let music_dur =music.duration;

   let min1 = Math.floor(music_dur / 60);
   let sec1 = Math.floor(music_dur % 60);

   if(sec1<10){
      sec1 = `0${sec1}`;
   }
   currentend.innerText = `${min1}:${sec1}`;

   let min2 = Math.floor(music_curr / 60); 
   let sec2 = Math.floor(music_curr % 60); 

   if(sec2<10){
      sec2 = `0${sec2}`;
   }
   currentstart.innerText = `${min2}:${sec2}`;

   let progressBar = parseInt((music_curr/music_dur)*100);
   seek.value=progressBar;

   let seekbar=seek.value;
   bar2.style.width=`${seekbar}%`;
   dot.style.left=`${seekbar}%`;
  
});

seek.addEventListener('change',()=>{
   music.currentTime=seek.value*music.duration / 100;
});

let volicon = document.getElementById('volicon');
let vol = document.getElementById('vol');
let volbar = document.getElementsByClassName('volbar')[0];
let voldot = document.getElementById('voldot');
vol.addEventListener('change',()=>{
   let vol_a = vol.value;
   vol.style.width=`${vol_a}%`;
   music.volume=vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click',()=>{
   index -= 1;
   if(index<1){
      index=Array.from(document.getElementsByClassName('SongItem')).length;
   }
   music.src = `audio/${index}.mp3.mp3`;
   postermasterplay.src=`poster/${index}.jpg.jpg`;
   music.play();
   // masterPlay.classList.remove('bi-play-fill');
   // masterPlay.classList.add('bi-pause-fill');
   wave.classList.add('active1');

   let songTitles=songs.filter((els)=>{
      return els.id == index;
   })
   songTitles.forEach(elss=>{
      let{songName,poster}=elss;
      songTitles.innerHTML=songName;
      postermasterplay.src=pOster;
   });

})

next.addEventListener('click',()=>{
   index += 1;
   if(index>Array.from(document.getElementsByClassName('SongItem')).length){
      index=1;
   }
   music.src = `audio/${index}.mp3.mp3`;
   postermasterplay.src=`poster/${index}.jpg.jpg`;
   music.play();
   // masterPlay.classList.remove('bi-play-fill');
   // masterPlay.classList.add('bi-pause-fill');
   wave.classList.add('active1');

   let songTitles=songs.filter((els)=>{
      return els.id == index;
   })
   songTitles.forEach(elss=>{
      let{songName,poster}=elss;
      songTitles.innerHTML=songName;
      postermasterplay.src=pOster;
   });

})









let popsongleft = document.getElementById('popsongleft');
let popsongright = document.getElementById('popsongright');
let popsong = document.getElementsByClassName('popsong')[0];

popsongright.addEventListener('click',()=>{
               popsong.scrollLeft += 330;
});
popsongleft.addEventListener('click',()=>{
               popsong.scrollleft -= 330;
});

let popartleft = document.getElementById('popartleft');
let popartright = document.getElementById('popartright');
let item = document.getElementsByClassName('item')[0];

popartright.addEventListener('click',()=>{
               item.scrollLeft += 330;
});
popartleft.addEventListener('click',()=>{
               item.scrollleft -= 330;
});

let menuLIstActiveButton = document.getElementById('menuLIstActiveButton')
let menu = document.getElementsByClassName('menu')[0];

menuLIstActiveButton.addEventListener("click",()=>{
   menu.style.transform = "unset";
   menuLIstActiveButton.style.opacity=0;
})
let song =document.getElementsByClassName('song')[0];
song.addEventListener("click",()=>{
   menu.style.transform = " translateX(-100%)";
   menuLIstActiveButton.style.opacity=1;
})




