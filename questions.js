const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  menuToggle.addEventListener('click', () => {
    const isVisible = mobileNav.style.display === 'block';
    mobileNav.style.display = isVisible ? 'none' : 'block';
  });

  // Accordion Functionality
  const accordionItems = document.querySelectorAll('.accordion-item');

  function toggleAccordion(item) {
    const panel = item.querySelector('.accordion-panel');
    const isOpen = item.classList.contains('open');

    // Close all open items
    accordionItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-panel').style.maxHeight = null;
    });

    // Toggle current item
    if (!isOpen) {
      item.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => toggleAccordion(item));

    // Initialize first open panel height on load
    if (item.classList.contains('open')) {
      const panel = item.querySelector('.accordion-panel');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });