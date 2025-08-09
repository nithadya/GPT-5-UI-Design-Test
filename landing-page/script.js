document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector(".site-header");
  const themeToggle = document.getElementById("themeToggle");
  const billingToggle = document.getElementById("billingToggle");
  const billingNote = document.getElementById("billingNote");
  const amountEls = document.querySelectorAll(".plan .amount");
  const yearEl = document.getElementById("year");
  const promptBtn = document.getElementById("promptBtn");
  const promptInput = document.getElementById("promptInput");
  const dots = Array.from(document.querySelectorAll(".dot"));
  const cards = Array.from(document.querySelectorAll(".tcard"));
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("df-theme");
  if (savedTheme === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    root.setAttribute("data-theme", "light");
  }

  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.toggle("theme-light");
      body.classList.toggle("theme-dark", !isLight);
      root.setAttribute("data-theme", isLight ? "light" : "dark");
      localStorage.setItem("df-theme", isLight ? "light" : "dark");
    });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.hidden = expanded;
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
  );

  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => observer.observe(el));

  if (billingToggle) {
    const updatePrices = (yearly) => {
      amountEls.forEach((el) => {
        const monthly = el.getAttribute("data-price-monthly");
        const yearlyPrice = el.getAttribute("data-price-yearly");
        el.textContent = `$${yearly ? yearlyPrice : monthly}`;
      });
      billingNote.textContent = yearly
        ? "Billed yearly. 20% savings applied."
        : "Billed monthly. Toggle for yearly savings.";
    };

    billingToggle.addEventListener("click", () => {
      const isYearly = billingToggle.getAttribute("aria-checked") === "true";
      billingToggle.setAttribute("aria-checked", String(!isYearly));
      updatePrices(!isYearly);
    });
  }

  if (promptBtn && promptInput) {
    promptBtn.addEventListener("click", () => {
      promptBtn.disabled = true;
      const original = promptBtn.textContent;
      promptBtn.textContent = "Generating…";
      setTimeout(() => {
        promptBtn.disabled = false;
        promptBtn.textContent = original;
        promptInput.value = "UML sequence created. Tap to open in editor.";
      }, 1200);
    });
  }

  let activeIdx = 0;
  const setActive = (idx) => {
    cards.forEach((c, i) => c.classList.toggle("active", i === idx));
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    activeIdx = idx;
  };

  dots.forEach((dot, i) => dot.addEventListener("click", () => setActive(i)));

  const auto = setInterval(
    () => setActive((activeIdx + 1) % cards.length),
    5000
  );
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearInterval(auto);
  });
});
