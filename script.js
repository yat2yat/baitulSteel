window.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
  });

  function toggleMenu(){
    const Toggle = document.querySelector('.Toggle');
    const navigation = document.querySelector('.navigation');
    Toggle.classList.toggle('active');
    navigation.classList.toggle('active');
  }