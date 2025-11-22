// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      // close mobile nav if open
      if(mainNav && mainNav.classList.contains('open')){
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
      }
    }
  });
});

// Simple contact form feedback
const sendBtn = document.getElementById('sendBtn');
if(sendBtn){
  sendBtn.addEventListener('click', ()=>{
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';
    setTimeout(()=>{
      sendBtn.textContent = 'Sent ✓';
      sendBtn.classList.add('sent');
      setTimeout(()=>{
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
        sendBtn.classList.remove('sent');
      },2000);
    },1000);
  });
}

// Simple reveal on scroll
const reveal = ()=>{
  document.querySelectorAll('main section, .hero, footer').forEach((el, i)=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
