(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const setText = (sel, text) => $$(sel).forEach((el) => (el.textContent = text));
  const catLabel = (p) => p.category.map((c) => CATEGORIES[c] || c).join(" · ");
  const imageSize = (p, i) => Array.isArray(p.imageSize?.[0]) ? p.imageSize[i] : p.imageSize;

  const media = (src, cls, { size, alt = "", priority = false } = {}) => {
    if (!src) return "";
    const dimensions = size ? ` width="${size[0]}" height="${size[1]}"` : "";
    const loading = priority ? ' fetchpriority="high"' : ' loading="lazy"';
    return `<img class="${cls}" src="${src}" alt="${alt}"${dimensions}${loading} decoding="async" />`;
  };

  setText("[data-name]", PROFILE.name);
  setText("[data-name-en]", PROFILE.nameEn);
  setText("[data-year]", new Date().getFullYear());

  const grid = $(".grid");
  if (grid) {
    document.title = `${PROFILE.nameEn} — Portfolio`;
    setText("[data-hero-eyebrow]", PROFILE.hero.eyebrow);
    setText("[data-hero-lead]", PROFILE.hero.lead);
    setText("[data-hero-accent]", PROFILE.hero.accent);
    setText("[data-hero-sub]", PROFILE.hero.sub);
    setText("[data-about]", PROFILE.about);
    setText("[data-motto]", PROFILE.motto);

    const resume = $("[data-resume]");
    if (PROFILE.resume) resume.href = PROFILE.resume;
    else resume.remove();

    const mail = $("[data-email]");
    mail.textContent = PROFILE.email;
    mail.href = `mailto:${PROFILE.email}`;

    $(".links").innerHTML = PROFILE.links
      .map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a></li>`)
      .join("");
    $(".skills").innerHTML = PROFILE.skills.map((s) => `<li>${s}</li>`).join("");
    const rows = (list) =>
      list.map((e) => `<li><span>${e.period}</span><div><strong>${e.title}</strong><p>${e.desc}</p></div></li>`).join("");
    $(".exp").innerHTML = rows(PROFILE.experience);
    $(".edu").innerHTML = rows(PROFILE.education);

    grid.innerHTML = PROJECTS.map((p, i) => {
      const external = /^https?:/.test(p.url || "");
      const src = p.thumb || p.images[0];
      const cover = src
        ? media(src, "thumb-img", { size: p.thumb ? p.thumbSize : imageSize(p, 0), priority: i < 2 })
        : '<span class="thumb-img ph" aria-hidden="true"></span>';
      return `
        <li class="card" data-cat="${p.category.join(" ")}">
          <a href="${p.url || `project.html#${p.id}`}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>
            <div class="thumb" style="--c:${p.color || "#f3f3f3"}">${cover}</div>
            <div class="card-caption">
              <h3>${p.title}${external ? ' <span aria-hidden="true">↗</span>' : ""}</h3>
              <p>${p.subtitle}</p>
              <span class="tags">${catLabel(p)}</span>
            </div>
          </a>
        </li>`;
    }).join("");

    const used = Object.keys(CATEGORIES).filter((c) => PROJECTS.some((p) => p.category.includes(c)));
    const filters = $(".filters");
    filters.innerHTML = [["all", "All"], ...used.map((c) => [c, CATEGORIES[c]])]
      .map(([k, v], i) => `<button type="button" data-f="${k}" aria-pressed="${i === 0}">${v}</button>`)
      .join("");
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      $$("button", filters).forEach((b) => b.setAttribute("aria-pressed", b === btn));
      const filter = btn.dataset.f;
      $$(".card", grid).forEach((card) => {
        card.hidden = filter !== "all" && !card.dataset.cat.split(" ").includes(filter);
      });
    });
  }

  const gallery = $(".shots");
  if (gallery) {
    const projects = PROJECTS.filter((p) => !p.url);
    const pager = $(".pager");

    const renderProject = () => {
      const id = location.hash.slice(1) || new URLSearchParams(location.search).get("id");
      const index = Math.max(0, projects.findIndex((p) => p.id === id));
      const p = projects[index];

      document.title = `${p.title} — ${PROFILE.nameEn}`;
      setText("[data-p-cat]", catLabel(p));
      setText("[data-p-title]", p.title);
      setText("[data-p-subtitle]", p.subtitle);
      setText("[data-p-summary]", p.summary);
      for (const field of ["year", "role", "tools"]) {
        const value = $(`[data-p-${field}]`);
        value.textContent = p[field] || "";
        value.parentElement.hidden = !p[field];
      }

      gallery.parentElement.hidden = !p.images.length;
      gallery.innerHTML = p.images.map((src, i) => {
        const label = `${p.title} — 프로젝트 이미지 ${i + 1}`;
        const img = media(src, "shot", { size: imageSize(p, i), priority: i === 0 });
        return `<a href="${src}" target="_blank" rel="noopener" aria-label="${label} 원본 열기 (새 탭)">${img}</a>`;
      }).join("");

      const prev = projects[(index - 1 + projects.length) % projects.length];
      const next = projects[(index + 1) % projects.length];
      pager.innerHTML = `
        <a href="project.html#${prev.id}"><small>Prev</small>${prev.title}</a>
        <a href="project.html#${next.id}" class="next"><small>Next</small>${next.title}</a>`;
    };

    renderProject();
    addEventListener("hashchange", () => {
      renderProject();
      window.scrollTo({ top: 0, behavior: "instant" });
      $("[data-p-title]").focus({ preventScroll: true });
    });
  }
})();
