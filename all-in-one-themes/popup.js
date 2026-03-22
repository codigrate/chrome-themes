const sel = document.getElementById('themeSelect');
const btn = document.getElementById('openBtn');
const themeNameEl = document.getElementById('themeName');

function populateThemes() {
  for (const theme of THEMES) {
    const option = document.createElement('option');
    option.value = theme.key;
    option.textContent = theme.name;
    sel.appendChild(option);
  }
}

function applyPreview(theme) {
  const root = document.documentElement;
  root.style.setProperty('--frame', theme.preview.frame);
  root.style.setProperty('--toolbar', theme.preview.toolbar);
  root.style.setProperty('--accent', theme.preview.accent);
  root.style.setProperty('--frame-text', theme.preview.frameText);
  root.style.setProperty('--toolbar-text', theme.preview.toolbarText);
  root.style.setProperty('--active-tab', theme.preview.activeTab);
  root.style.setProperty('--inactive-tab', theme.preview.inactiveTab);
  root.style.setProperty('--omnibox', theme.preview.omnibox);
  root.style.setProperty('--border', theme.preview.border);
  root.style.setProperty('--muted', theme.preview.muted);
  root.style.setProperty('--weak-fill', theme.preview.weakFill);
  root.style.setProperty('--weak-fill-stronger', theme.preview.weakFillStronger);
  root.style.setProperty('--page-bg', theme.preview.pageBg);
  root.style.setProperty('--page-line', theme.preview.pageLine);
  themeNameEl.textContent = theme.name;
}

async function saveTheme(themeKey) {
  await chrome.storage.sync.set({ selectedTheme: themeKey });
}

async function loadSavedTheme() {
  const result = await chrome.storage.sync.get(['selectedTheme']);
  const themeKey = result.selectedTheme || THEMES[0].key;
  sel.value = themeKey;
  applyPreview(getThemeByKey(themeKey));
}

sel.addEventListener('change', async () => {
  const theme = getThemeByKey(sel.value);
  applyPreview(theme);
});

btn.addEventListener('click', async () => {
  const theme = getThemeByKey(sel.value);
  await saveTheme(sel.value);
  window.open(theme.chromeUiUrl, '_blank');
});

populateThemes();
loadSavedTheme();
