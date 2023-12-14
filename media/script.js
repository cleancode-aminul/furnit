document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  // Hide mobile menu when a link is clicked
  var mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });