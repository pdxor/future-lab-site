const menu=document.querySelector('.menu-toggle'),mobile=document.querySelector('#mobile-nav');
function closeMenu(){mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.textContent='Menu +'}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';mobile.hidden=open;menu.setAttribute('aria-expanded',String(!open));menu.textContent=open?'Menu +':'Close −'});
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const photos=[...document.querySelectorAll('[data-photo]')],dialog=document.querySelector('#lightbox'),full=dialog.querySelector('img');let selected=0;
function showPhoto(index){selected=(index+photos.length)%photos.length;full.src=photos[selected].dataset.photo;full.alt=photos[selected].querySelector('img').alt;document.querySelector('#photo-count').textContent=`${selected+1} / ${photos.length}`}
photos.forEach((p,i)=>p.addEventListener('click',()=>{showPhoto(i);dialog.showModal()}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelector('#prev').addEventListener('click',()=>showPhoto(selected-1));document.querySelector('#next-photo').addEventListener('click',()=>showPhoto(selected+1));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(selected-1)}if(e.key==='ArrowRight'){e.preventDefault();showPhoto(selected+1)}});
const loop=document.querySelector('#loop'),toggle=document.querySelector('#loop-toggle');
function reflect(){toggle.textContent=loop.paused?'Play artwork':'Pause artwork';toggle.setAttribute('aria-pressed',String(!loop.paused))}
toggle.addEventListener('click',async()=>{if(loop.paused){try{await loop.play()}catch{toggle.textContent='Playback unavailable'}}else loop.pause()});loop.addEventListener('play',reflect);loop.addEventListener('pause',reflect);
new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)loop.pause()}).observe(loop);
document.addEventListener('visibilitychange',()=>{if(document.hidden)document.querySelectorAll('video').forEach(v=>v.pause())});
