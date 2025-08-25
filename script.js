
function copyEmail(){
  const email = 'saravana02101999@gmail.com';
  navigator.clipboard.writeText(email).then(()=>{
    const el = document.getElementById('copy-msg');
    el.textContent = 'Email copied!';
    setTimeout(()=> el.textContent='', 1500);
  });
}
