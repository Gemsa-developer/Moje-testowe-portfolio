// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Product filter chips
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const cat = card.dataset.category;
      const isMatch = filter === 'all' || cat === filter;
      card.style.display = isMatch ? '' : 'none';
    });
  });
});

// Contact form AJAX submit with Formspree
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

async function handleSubmit(e){
  e.preventDefault();
  statusEl.textContent = 'Sending…';
  const data = new FormData(form);
  try{
    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });
    if (res.ok){
      form.reset();
      statusEl.textContent = 'Thanks! Your message was sent.';
    } else {
      const json = await res.json().catch(()=>({}));
      statusEl.textContent = json.errors?.[0]?.message || 'Something went wrong. Try again or email me directly.';
    }
  }catch(err){
    statusEl.textContent = 'Network error. Please try again.';
  }
}

if (form) form.addEventListener('submit', handleSubmit);
