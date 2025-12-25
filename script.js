/* ===============================
       DEFAULT CONFIG (Element SDK)
    =============================== */
    const defaultConfig = {
      hero_title: "Analisis Spasial Kesesuaian Lahan Pertanian Berdasarkan Karakteristik Geomorfologi Menggunakan Data DEMNAS",
      hero_subtitle: "Penelitian berbasis SIG untuk menganalisis potensi kesesuaian lahan pertanian melalui analisis elevasi dan kemiringan lereng",
      cta_button: "Lihat Peta",
      conclusion_text:
        "Berdasarkan analisis spasial karakteristik geomorfologi menggunakan data DEMNAS, wilayah studi memiliki potensi yang baik untuk pengembangan lahan pertanian. Zona dengan kesesuaian tinggi terkonsentrasi pada wilayah dengan elevasi rendah dan kemiringan datar hingga landai.",
      author_name: "Nama Peneliti",
      institution: "Program Studi Geografi"
    };

    /* ===============================
       MOBILE NAV TOGGLE
    =============================== */
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");

    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileToggle.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileToggle.classList.remove("active");
      });
    });

    /* ===============================
       NAVBAR SCROLL EFFECT
    =============================== */
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    /* ===============================
       SCROLLSPY
    =============================== */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav() {
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    }

    window.addEventListener("scroll", updateActiveNav);

    /* ===============================
       REVEAL ANIMATION
    =============================== */
    const revealElements = document.querySelectorAll(".hero, .section");

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    /* ===============================
       SCROLL TO TOP
    =============================== */
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      scrollTopBtn.classList.toggle("show", window.scrollY > 400);
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ===============================
       ELEMENT SDK BINDING
    =============================== */
    async function onConfigChange(config) {
      const heroTitle = document.getElementById("heroTitle");
      const heroSubtitle = document.getElementById("heroSubtitle");
      const ctaButton = document.getElementById("ctaButton");
      const conclusionText = document.getElementById("conclusionText");
      const authorName = document.getElementById("authorName");
      const institution = document.getElementById("institution");

      if (heroTitle) heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
      if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      if (ctaButton) ctaButton.textContent = config.cta_button || defaultConfig.cta_button;
      if (conclusionText) conclusionText.textContent = config.conclusion_text || defaultConfig.conclusion_text;
      if (authorName) authorName.textContent = config.author_name || defaultConfig.author_name;
      if (institution) institution.textContent = config.institution || defaultConfig.institution;
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange
      });
    }
