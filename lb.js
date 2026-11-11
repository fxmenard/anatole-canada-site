(function(){var lb=document.createElement('div');lb.className='mv-lb';var im=document.createElement('img');lb.appendChild(im);document.body.appendChild(lb);
document.querySelectorAll('img.photo').forEach(function(p){p.addEventListener('click',function(){im.src=p.src;im.alt=p.alt;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});})();
