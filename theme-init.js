// Applique le thème avant le premier affichage pour éviter un flash.
(() => {
  let stored = '';
  try { stored = localStorage.getItem('theme') ?? ''; } catch {}
  const dark = stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
})();
