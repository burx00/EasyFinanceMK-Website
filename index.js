  // index.js
  const amountSlider = document.getElementById('amount-slider');
  const termSlider = document.getElementById('term-slider');
  const amountLabel = document.getElementById('amount-label');
  const termLabel = document.getElementById('term-label');
  const paymentLabel = document.getElementById('payment-label');

  function calculatePayment() {
    const amount = parseInt(amountSlider.value);
    const months = parseInt(termSlider.value);
    
    amountLabel.textContent = `${amount.toLocaleString('mk-MK')} ден.`;
    termLabel.textContent = `${months} месеци`;
    
    const interestRate = 0.23; 
    const totalPayment = amount * (1 + (interestRate * (months / 12)));
    const monthlyPayment = Math.round(totalPayment / months);
    
    paymentLabel.innerHTML = `${monthlyPayment.toLocaleString('mk-MK')} ден. <span>/месечно</span>`;
  }

  amountSlider.addEventListener('input', calculatePayment);
  termSlider.addEventListener('input', calculatePayment);

  // Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  menuToggle.addEventListener('click', () => {
    const isVisible = mobileNav.style.display === 'block';
    mobileNav.style.display = isVisible ? 'none' : 'block';
  });

  // Form Submission Interactive Toast
  const applyForm = document.getElementById('applyForm');
  const toast = document.getElementById('toast');

  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
    applyForm.reset();
    calculatePayment();
  });

  calculatePayment();
// end of index.js

// information.js


// end of information.js