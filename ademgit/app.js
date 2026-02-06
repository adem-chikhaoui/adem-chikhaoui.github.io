(() => {
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // i18n FR/EN/AR
  const I18N = {
    fr: {
      label: "FR", dir: "ltr", htmlLang: "fr",
      "nav.about":"À propos", "nav.projects":"Projets", "nav.resume":"Parcours", "nav.skills":"Compétences", "nav.contact":"Contact", "nav.cv":"CV",
      "hero.pill":"Étudiant en ingénierie informatique — ESPRIT (Tunis)",
      "hero.h1a":"Je construis", "hero.h1b":"des projets prêts pour le produit",
      "hero.lead":"Apps desktop C++/Qt, expériences SDL2, et intégration Arduino — avec un focus sur la fiabilité, une UX propre et l’exécution.",
      "hero.cta1":"Voir les projets", "hero.cta2":"Me contacter",
      "hero.micro":"Conseil: mets des liens “Explore/Code” vers GitHub ou une démo, c’est le signal de crédibilité n°1.",
      "float1.k":"Actuellement", "float1.v":"Smart Drive — Qt/C++",
      "float2.k":"Preuve", "float2.v":"TCF Français C1",
      "float3.k":"Outils", "float3.v":"Linux • Git • VS Code",
      "about.h2":"À propos", "about.p":"Un résumé clair, comme un CV.",
      "about.k1":"Profil",
      "about.profile":"Étudiant en ingénierie informatique à l’ESPRIT. Je développe des applications et projets orientés produit en C/C++, Qt, Linux et Arduino, avec une attention à la qualité et à l’ergonomie.",
      "about.k2":"Points forts",
      "about.b1":"Projets concrets (Qt/C++ et Arduino)",
      "about.b2":"Rigueur & organisation (stage TSB)",
      "about.b3":"Communication solide (TCF C1)",
      "projects.h2":"Projets", "projects.p":"Les 3 projets les plus “recruteur-friendly”.",
      "p1.sub":"Système de gestion auto-école", "p1.desc":"Solution complète: suivi élèves, planification, gestion véhicules, reporting.",
      "p2.name":"Jeu + Manette", "p2.sub":"Expérience éducative", "p2.desc":"Jeu 2D éducatif + manette Arduino personnalisée (mythologie & histoire).",
      "p3.sub":"Plateforme location voitures", "p3.desc":"Réservation moderne + intégration Google Sheets + dashboard analytics.",
      "resume.h2":"Parcours", "resume.p":"Éducation + expérience (format CV).",
      "resume.eduWhen":"2024 — Présent", "resume.eduTitle":"ESPRIT — Ingénierie informatique", "resume.eduSub":"Tunis, Tunisie",
      "resume.expWhen":"août 2025 — sept. 2025", "resume.expTitle":"Stage d’observation — Tunisian Saudi Bank (TSB)", "resume.expSub":"Archivage / saisie • rigueur • bases sécurité de l’information",
      "resume.certWhen":"févr. 2025", "resume.certTitle":"TCF — Français C1", "resume.certSub":"Valide jusqu’à févr. 2027",
      "skills.h2":"Compétences", "skills.p":"Groupées pour lecture rapide.",
      "stack.lang":"Langages", "stack.tools":"Frameworks & Outils", "stack.db":"Data / Cloud", "stack.env":"Environnement",
      "contact.h2":"Contact", "contact.p":"Simple, direct, professionnel.",
      "contact.k":"Email", "contact.k2":"Liens",
      "contact.msgK":"Message rapide",
      "contact.msgS":"Ouvre Gmail (web) avec un message propre prêt. Sinon, ouvre votre application email.",
      "contact.name":"Nom", "contact.email":"Email", "contact.message":"Message",
      "contact.send":"Envoyer", "contact.copy":"Copier",
      "common.explore":"Explore", "common.code":"Code",
      "footer.top":"Retour en haut",
    },
    en: {
      label: "EN", dir: "ltr", htmlLang: "en",
      "nav.about":"About", "nav.projects":"Projects", "nav.resume":"Resume", "nav.skills":"Skills", "nav.contact":"Contact", "nav.cv":"CV",
      "hero.pill":"Computer Engineering student — ESPRIT (Tunis)",
      "hero.h1a":"I build", "hero.h1b":"product-ready projects",
      "hero.lead":"C++/Qt desktop apps, SDL2 experiences, and Arduino integration — focused on reliability, clean UX, and execution.",
      "hero.cta1":"View projects", "hero.cta2":"Contact",
      "hero.micro":"Tip: add “Explore/Code” links to GitHub or a demo — it’s the #1 credibility signal.",
      "float1.k":"Now", "float1.v":"Smart Drive — Qt/C++",
      "float2.k":"Proof", "float2.v":"TCF French C1",
      "float3.k":"Tools", "float3.v":"Linux • Git • VS Code",
      "about.h2":"About", "about.p":"Clear summary, like a CV.",
      "about.k1":"Profile",
      "about.profile":"Computer Engineering student at ESPRIT. I build product-oriented software projects using C/C++, Qt, Linux and Arduino, with focus on quality and usability.",
      "about.k2":"Strengths",
      "about.b1":"Concrete projects (Qt/C++ + Arduino)",
      "about.b2":"Rigor & organization (TSB internship)",
      "about.b3":"Strong communication (TCF C1)",
      "projects.h2":"Projects", "projects.p":"3 recruiter-friendly highlights.",
      "p1.sub":"Driving school management system", "p1.desc":"End-to-end solution: tracking, scheduling, vehicles and reporting.",
      "p2.name":"Game + Controller", "p2.sub":"Educational experience", "p2.desc":"2D educational game + custom Arduino controller (mythology & history).",
      "p3.sub":"Car rental platform", "p3.desc":"Modern booking + Google Sheets integration + analytics dashboard.",
      "resume.h2":"Resume", "resume.p":"Education + experience (CV format).",
      "resume.eduWhen":"2024 — Present", "resume.eduTitle":"ESPRIT — Computer Engineering", "resume.eduSub":"Tunis, Tunisia",
      "resume.expWhen":"Aug 2025 — Sep 2025", "resume.expTitle":"Observation internship — Tunisian Saudi Bank (TSB)", "resume.expSub":"Archiving/data entry • rigor • basic information security",
      "resume.certWhen":"Feb 2025", "resume.certTitle":"TCF — French C1", "resume.certSub":"Valid until Feb 2027",
      "skills.h2":"Skills", "skills.p":"Grouped for fast reading.",
      "stack.lang":"Languages", "stack.tools":"Frameworks & Tools", "stack.db":"Data / Cloud", "stack.env":"Environment",
      "contact.h2":"Contact", "contact.p":"Simple, direct, professional.",
      "contact.k":"Email", "contact.k2":"Links",
      "contact.msgK":"Quick message",
      "contact.msgS":"Opens Gmail (web) with a clean draft. Otherwise opens your mail app.",
      "contact.name":"Name", "contact.email":"Email", "contact.message":"Message",
      "contact.send":"Send", "contact.copy":"Copy",
      "common.explore":"Explore", "common.code":"Code",
      "footer.top":"Back to top",
    },
    ar: {
      label: "AR", dir: "rtl", htmlLang: "ar",
      "nav.about":"نبذة", "nav.projects":"المشاريع", "nav.resume":"السيرة", "nav.skills":"المهارات", "nav.contact":"تواصل", "nav.cv":"السيرة PDF",
      "hero.pill":"طالب هندسة معلوماتية — ESPRIT (تونس)",
      "hero.h1a":"أبني", "hero.h1b":"مشاريع جاهزة للمنتج",
      "hero.lead":"تطبيقات سطح المكتب C++/Qt، تجارب SDL2، ودمج Arduino — مع تركيز على الموثوقية وتجربة مستخدم واضحة وتنفيذ قوي.",
      "hero.cta1":"عرض المشاريع", "hero.cta2":"تواصل",
      "hero.micro":"نصيحة: ضع روابط “استعراض/كود” إلى GitHub أو عرض تجريبي — هذا أقوى دليل للمصداقية.",
      "float1.k":"حاليًا", "float1.v":"Smart Drive — Qt/C++",
      "float2.k":"دليل", "float2.v":"TCF الفرنسية C1",
      "float3.k":"أدوات", "float3.v":"Linux • Git • VS Code",
      "about.h2":"نبذة", "about.p":"ملخص واضح مثل السيرة الذاتية.",
      "about.k1":"الملف",
      "about.profile":"طالب هندسة معلوماتية في ESPRIT. أطور مشاريع برمجية موجهة للمنتج باستخدام C/C++ وQt وLinux وArduino مع اهتمام بالجودة وسهولة الاستخدام.",
      "about.k2":"نقاط القوة",
      "about.b1":"مشاريع عملية (Qt/C++ وArduino)",
      "about.b2":"انضباط وتنظيم (تدريب TSB)",
      "about.b3":"تواصل قوي (TCF C1)",
      "projects.h2":"المشاريع", "projects.p":"أفضل 3 مشاريع بشكل مناسب للتوظيف.",
      "p1.sub":"نظام إدارة مدرسة سياقة", "p1.desc":"حل شامل: تتبع، جدولة، مركبات وتقارير.",
      "p2.name":"لعبة + يد تحكم", "p2.sub":"تجربة تعليمية", "p2.desc":"لعبة تعليمية 2D + يد تحكم Arduino مخصصة (أساطير وتاريخ).",
      "p3.sub":"منصة كراء سيارات", "p3.desc":"حجز حديث + دمج Google Sheets + لوحة تحليلات.",
      "resume.h2":"السيرة", "resume.p":"تع��يم + خبرة (بنمط CV).",
      "resume.eduWhen":"2024 — الآن", "resume.eduTitle":"ESPRIT — هندسة معلوماتية", "resume.eduSub":"تونس، تونس",
      "resume.expWhen":"أوت 2025 — سبتمبر 2025", "resume.expTitle":"تدريب ملاحظة — TSB", "resume.expSub":"أرشفة/إدخال بيانات • انضباط • أساسيات أمن معلومات",
      "resume.certWhen":"فبراير 2025", "resume.certTitle":"TCF — الفرنسية C1", "resume.certSub":"صالحة حتى فبراير 2027",
      "skills.h2":"المهارات", "skills.p":"مجمعة لقراءة سريعة.",
      "stack.lang":"اللغات", "stack.tools":"الأدوات", "stack.db":"البيانات / السحابة", "stack.env":"بيئة العمل",
      "contact.h2":"تواصل", "contact.p":"ببساطة واحتراف.",
      "contact.k":"البريد", "contact.k2":"روابط",
      "contact.msgK":"رسالة سريعة",
      "contact.msgS":"يفتح Gmail (الويب) برسالة جاهزة، أو تطبيق البريد لديك.",
      "contact.name":"الاسم", "contact.email":"البريد", "contact.message":"الرسالة",
      "contact.send":"إرسال", "contact.copy":"نسخ",
      "common.explore":"استعراض", "common.code":"الكود",
      "footer.top":"للأعلى",
    },
  };

  const ORDER = ["fr","en","ar"];
  const setLang = (lang) => {
    const dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = dict.htmlLang;
    document.documentElement.dir = dict.dir;

    const pill = document.getElementById("langPill");
    if (pill) pill.textContent = dict.label;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const val = dict[key];
      if (typeof val === "string") node.textContent = val;
    });

    localStorage.setItem("lang", lang);
  };

  const getInitialLang = () => {
    const saved = localStorage.getItem("lang");
    if (saved && I18N[saved]) return saved;
    const n = (navigator.language || "fr").toLowerCase();
    if (n.startsWith("ar")) return "ar";
    if (n.startsWith("fr")) return "fr";
    return "en";
  };

  document.getElementById("langBtn")?.addEventListener("click", () => {
    const cur = localStorage.getItem("lang") || getInitialLang();
    const i = ORDER.indexOf(cur);
    setLang(ORDER[(i + 1) % ORDER.length]);
  });
  setLang(getInitialLang());

  // year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // -----------------------------
  // Contact: Gmail draft (desktop) + mailto fallback (mobile)
  // -----------------------------
  const TO = "ademchikhaoui.pro@gmail.com";
  const isMobile = () => /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

  const buildBody = ({ name, email, msg }) => {
    const safeMsg = (msg || "").replace(/\r\n/g, "\n").trim();
    const lines = [
      "Bonjour Adem,",
      "",
      "Je vous contacte via votre portfolio.",
      "",
      safeMsg ? safeMsg : "(Message vide)",
      "",
      `Nom : ${name || "-"}`,
      `Email : ${email || "-"}`,
      "",
      "Cordialement,",
      name || "Visiteur",
    ];
    return lines.join("\n");
  };

  const openGmailDraft = ({ to, subject, body }) => {
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openMailto = ({ to, subject, body }) => {
    window.location.href =
      `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  document.getElementById("send")?.addEventListener("click", () => {
    const name = (document.getElementById("name")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const msg = (document.getElementById("msg")?.value || "").trim();

    const subject = `Portfolio — Message${name ? ` — ${name}` : ""}`;
    const body = buildBody({ name, email, msg });

    if (isMobile()) openMailto({ to: TO, subject, body });
    else openGmailDraft({ to: TO, subject, body });
  });

  // Copy
  document.getElementById("copy")?.addEventListener("click", async () => {
    const name = (document.getElementById("name")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const msg = (document.getElementById("msg")?.value || "").trim();
    const text = buildBody({ name, email, msg });

    try {
      await navigator.clipboard.writeText(text);
      const btn = document.getElementById("copy");
      const old = btn?.textContent || "";
      if (btn) btn.textContent = "✓";
      setTimeout(() => { if (btn) btn.textContent = old; }, 900);
    } catch {
      alert("Copy failed. Please copy manually.");
    }
  });

  // -----------------------------
  // Mobile nav
  // -----------------------------
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile");
  const setOpen = (open) => {
    mobile.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  };
  burger?.addEventListener("click", () => setOpen(!mobile.classList.contains("open")));
  mobile?.querySelectorAll("a")?.forEach((a) => a.addEventListener("click", () => setOpen(false)));

  // -----------------------------
  // Nav shadow
  // -----------------------------
  const nav = document.getElementById("nav");
  const onScrollShadow = () => {
    const sc = window.scrollY || 0;
    nav.style.boxShadow = sc > 6 ? "0 18px 50px rgba(0,0,0,.35)" : "none";
  };
  onScrollShadow();
  window.addEventListener("scroll", onScrollShadow, { passive: true });

  // -----------------------------
  // Reveal
  // -----------------------------
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  // -----------------------------
  // Scroll-driven motion
  // -----------------------------
  const bgGrid = document.getElementById("bgGrid");
  const orbA = document.getElementById("orbA");
  const orbB = document.getElementById("orbB");
  const orbC = document.getElementById("orbC");

  const heroFx = document.getElementById("heroFx");
  const photoFrame = document.getElementById("photoFrame");
  const photoGlow = document.getElementById("photoGlow");

  const fc1 = document.getElementById("fc1");
  const fc2 = document.getElementById("fc2");
  const fc3 = document.getElementById("fc3");

  let ticking = false;

  const clamp01 = (x) => Math.max(0, Math.min(1, x));
  const lerp = (a, b, t) => a + (b - a) * t;

  const sectionProgress = (el) => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const t = (vh - r.top) / (vh + r.height);
    return clamp01(t);
  };

  const applyMotion = () => {
    ticking = false;
    const y = window.scrollY || 0;

    if (!prefersReduced) {
      bgGrid && (bgGrid.style.transform = `translate3d(0, ${y * 0.03}px, 0)`);
      orbA && (orbA.style.transform = `translate3d(0, ${y * 0.10}px, 0)`);
      orbB && (orbB.style.transform = `translate3d(0, ${y * 0.07}px, 0)`);
      orbC && (orbC.style.transform = `translate3d(0, ${-y * 0.05}px, 0)`);
    }

    if (!heroFx) return;
    const p = sectionProgress(heroFx);

    if (!prefersReduced && photoFrame) {
      const ty = lerp(0, -18, p);
      const rx = lerp(0, -2.2, p);
      const ry = lerp(0, 2.6, p);
      photoFrame.style.transform =
        `perspective(900px) translate3d(0, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }

    if (!prefersReduced) {
      if (fc1) fc1.style.transform = `translate3d(${lerp(-10, 26, p)}px, ${lerp(0, 44, p)}px, 0) rotate(${lerp(-2, 3, p)}deg)`;
      if (fc2) fc2.style.transform = `translate3d(${lerp(0, -18, p)}px, ${lerp(0, 58, p)}px, 0) rotate(${lerp(2, -3, p)}deg)`;
      if (fc3) fc3.style.transform = `translate3d(${lerp(0, -14, p)}px, ${lerp(0, -22, p)}px, 0) rotate(${lerp(-1, 2, p)}deg)`;
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(applyMotion);
  };

  applyMotion();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mouse glow on photo
  const photoWrap = document.getElementById("photoWrap");
  if (!prefersReduced && photoWrap && photoGlow) {
    photoWrap.addEventListener("mousemove", (e) => {
      const r = photoWrap.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      photoGlow.style.setProperty("--mx", `${x}%`);
      photoGlow.style.setProperty("--my", `${y}%`);
    });
  }

  // ---- Widget glow mouse tracking (cards/panels/timeline) ----
  if (!prefersReduced) {
    const widgets = Array.from(document.querySelectorAll(".widgetGlow"));

    const setPos = (el, e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    for (const el of widgets) {
      el.addEventListener("mousemove", (e) => setPos(el, e));
      el.addEventListener("mouseleave", () => {
        el.style.setProperty("--mx", `50%`);
        el.style.setProperty("--my", `50%`);
      });
    }
  }
})();