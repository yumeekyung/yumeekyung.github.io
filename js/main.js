(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const setText = (sel, text) => $$(sel).forEach((el) => (el.textContent = text));
  const catLabel = (p) => p.category.map((c) => CATEGORIES[c] || c).join(" · ");

  // 공통
  setText("[data-name]", PROFILE.name);
  setText("[data-name-en]", PROFILE.nameEn);
  setText("[data-year]", new Date().getFullYear());

  // 이미지가 없으면 프로젝트 색으로 채운 플레이스홀더
  const media = (src, p, cls, label) => {
    if (src) return `<img class="${cls}" src="${src}" alt="${p.title}" loading="lazy" />`;
    return `<div class="${cls} ph" style="--c:${p.color || "#bbb"}"><span>${label}</span></div>`;
  };

  // ---------- 메인 ----------
  const grid = $(".grid");
  if (grid) {
    document.title = `${PROFILE.nameEn} — Portfolio`;
    setText("[data-hero-eyebrow]", PROFILE.hero.eyebrow);
    setText("[data-hero-lead]", PROFILE.hero.lead);
    setText("[data-hero-accent]", PROFILE.hero.accent);
    setText("[data-hero-sub]", PROFILE.hero.sub);

    setText("[data-about]", PROFILE.about);

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
    setText("[data-motto]", PROFILE.motto);

    grid.innerHTML = PROJECTS.map(
      (p) => `
      <li class="card" data-cat="${p.category.join(" ")}">
        <a href="${p.url || `project.html#${p.id}`}"${p.url ? ' target="_blank" rel="noopener noreferrer"' : ""}>
          <div class="thumb">${media(p.thumb || p.images[0], p, "thumb-img", p.title)}</div>
          <h3>${p.title}${p.url ? ' <span aria-hidden="true">↗</span>' : ""}</h3>
          <p>${p.subtitle}</p>
          <span class="tags">${catLabel(p)}</span>
        </a>
      </li>`
    ).join("");

    // 필터
    const used = Object.keys(CATEGORIES).filter((c) => PROJECTS.some((p) => p.category.includes(c)));
    const filters = $(".filters");
    filters.innerHTML = [["all", "All"], ...used.map((c) => [c, CATEGORIES[c]])]
      .map(([k, v], i) => `<button role="tab" data-f="${k}" aria-selected="${i === 0}">${v}</button>`)
      .join("");
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      $$("button", filters).forEach((b) => b.setAttribute("aria-selected", b === btn));
      const f = btn.dataset.f;
      $$(".card", grid).forEach((c) => {
        c.hidden = f !== "all" && !c.dataset.cat.split(" ").includes(f);
      });
    });
  }

  // ---------- 상세 ----------
  addEventListener("hashchange", () => $(".shots") && location.reload());
  const shots = $(".shots");
  if (shots) {
    // 외부 링크 프로젝트는 자체 상세페이지 및 이전/다음 순서에서 제외합니다.
    const detailProjects = PROJECTS.filter((p) => !p.url);
    const id = location.hash.slice(1) || new URLSearchParams(location.search).get("id");
    const idx = Math.max(0, detailProjects.findIndex((p) => p.id === id));
    const p = detailProjects[idx];
    document.title = `${p.title} — ${PROFILE.nameEn}`;
    setText("[data-p-cat]", catLabel(p));
    setText("[data-p-title]", p.title);
    setText("[data-p-subtitle]", p.subtitle);
    setText("[data-p-year]", p.year);
    if (!p.year) $("[data-p-year]").parentElement.remove();
    setText("[data-p-role]", p.role);
    setText("[data-p-tools]", p.tools);
    setText("[data-p-summary]", p.summary);

    const imgs = p.images.length ? p.images : ["", "", ""];
    shots.innerHTML = imgs
      .map((src, i) => media(src, p, "shot", `Image ${String(i + 1).padStart(2, "0")}`))
      .join("");

    const prev = detailProjects[(idx - 1 + detailProjects.length) % detailProjects.length];
    const next = detailProjects[(idx + 1) % detailProjects.length];
    $(".pager").innerHTML = `
      <a href="project.html#${prev.id}"><small>Prev</small>${prev.title}</a>
      <a href="project.html#${next.id}" class="next"><small>Next</small>${next.title}</a>`;
  }
})();
