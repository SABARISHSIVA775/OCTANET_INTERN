function showSlidbar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    sidebar.style.transition = '1s';
  }
  function hidemenu(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
    sidebar.style.transition = '1s';
  }
  
  const Homecls = document.getElementById('Home-cls');
  const Homecls1 = document.getElementById('Home-cls1');
  const Homecls2 = document.getElementById('Home-cls2');
  const Homecls3 = document.getElementById('Home-cls3');
  const sidebar = document.querySelector('.sidebar')
  Homecls.addEventListener('click',() =>{sidebar.style.display = 'none'})
  Homecls1.addEventListener('click',() =>{sidebar.style.display = 'none'})
  Homecls2.addEventListener('click',() =>{sidebar.style.display = 'none'})
  Homecls3.addEventListener('click',() =>{sidebar.style.display = 'none'})
  