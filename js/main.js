// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-links a');
  const navList = document.querySelector('.nav-links');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navList) navList.classList.remove('open');
    });
  });
});
