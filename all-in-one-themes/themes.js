const THEMES = [
  {
    "key": "everest",
    "name": "Everest",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/kcldghlfficdfjjjcenephkkdkcjngic?utm_source=codigrate_extension",
    "preview": {
      "frame": "#CADAE0",
      "toolbar": "#FDFEFF",
      "accent": "#246A89",
      "frameText": "#0F172A",
      "toolbarText": "#0F172A",
      "activeTab": "#FDFEFF",
      "inactiveTab": "#B2C0C5",
      "omnibox": "#E9EAEB",
      "border": "#AEBBC1",
      "muted": "#626875",
      "weakFill": "#DCDEE1",
      "weakFillStronger": "#C9CBD0",
      "pageBg": "#FFFFFF",
      "pageLine": "#E2E3E5"
    }
  },
  {
    "key": "aurora-borealis",
    "name": "Aurora Borealis",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/ggdeckhhnhopdjnnbngcflijkhnlodfk?utm_source=codigrate_extension",
    "preview": {
      "frame": "#1C3847",
      "toolbar": "#142B37",
      "accent": "#049682",
      "frameText": "#F8FAFC",
      "toolbarText": "#F8FAFC",
      "activeTab": "#142B37",
      "inactiveTab": "#455C68",
      "omnibox": "#30444F",
      "border": "#4E646F",
      "muted": "#919DA3",
      "weakFill": "#54656E",
      "weakFillStronger": "#74828A",
      "pageBg": "#1D333F",
      "pageLine": "#5A6B74"
    }
  },
  {
    "key": "sakura",
    "name": "Sakura",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/nnildobojpcnfhiihnjklleoimimmkcc?utm_source=codigrate_extension",
    "preview": {
      "frame": "#F8DBE6",
      "toolbar": "#FEFCFC",
      "accent": "#B54B66",
      "frameText": "#0F172A",
      "toolbarText": "#0F172A",
      "activeTab": "#FEFCFC",
      "inactiveTab": "#DAC1CA",
      "omnibox": "#EAE8E8",
      "border": "#D5BCC6",
      "muted": "#636773",
      "weakFill": "#DDDCDF",
      "weakFillStronger": "#C9CACE",
      "pageBg": "#FFFFFF",
      "pageLine": "#E2E3E5"
    }
  },
  {
    "key": "sequoia",
    "name": "Sequoia",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/elbdggfmdikianlcniekopdflpkppnoj?utm_source=codigrate_extension",
    "preview": {
      "frame": "#394132",
      "toolbar": "#20231C",
      "accent": "#73A621",
      "frameText": "#F8FAFC",
      "toolbarText": "#F8FAFC",
      "activeTab": "#20231C",
      "inactiveTab": "#5D6357",
      "omnibox": "#3B3D37",
      "border": "#656B5F",
      "muted": "#979997",
      "weakFill": "#5C5F5B",
      "weakFillStronger": "#7B7D7A",
      "pageBg": "#292C25",
      "pageLine": "#636661"
    }
  },
  {
    "key": "autumn",
    "name": "Autumn",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/fffebmlejekcghghcmiinjamjdcbbojc?utm_source=codigrate_extension",
    "preview": {
      "frame": "#EFE6E0",
      "toolbar": "#FCFBFA",
      "accent": "#A7714C",
      "frameText": "#0F172A",
      "toolbarText": "#0F172A",
      "activeTab": "#FCFBFA",
      "inactiveTab": "#D2CAC5",
      "omnibox": "#E8E7E6",
      "border": "#CEC6C1",
      "muted": "#626773",
      "weakFill": "#DBDBDD",
      "weakFillStronger": "#C8C9CC",
      "pageBg": "#FFFFFF",
      "pageLine": "#E2E3E5"
    }
  },
  {
    "key": "roraima",
    "name": "Roraima",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/djgpkjnnddponeeeefijcpballhflkgd?utm_source=codigrate_extension",
    "preview": {
      "frame": "#372C2F",
      "toolbar": "#1E1A1B",
      "accent": "#CC654E",
      "frameText": "#F8FAFC",
      "toolbarText": "#F8FAFC",
      "activeTab": "#1E1A1B",
      "inactiveTab": "#5B5254",
      "omnibox": "#393536",
      "border": "#635A5D",
      "muted": "#969597",
      "weakFill": "#5B595A",
      "weakFillStronger": "#7A787A",
      "pageBg": "#272324",
      "pageLine": "#625F60"
    }
  },
  {
    "key": "istanbul",
    "name": "Istanbul",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/cjlcpahdceldmbpjbfglhmdlmonjhndf?utm_source=codigrate_extension",
    "preview": {
      "frame": "#91D1DA",
      "toolbar": "#FAFDFD",
      "accent": "#087E8E",
      "frameText": "#0F172A",
      "toolbarText": "#0F172A",
      "activeTab": "#FAFDFD",
      "inactiveTab": "#80B8C0",
      "omnibox": "#E6E9E9",
      "border": "#7DB4BB",
      "muted": "#616874",
      "weakFill": "#D9DDDF",
      "weakFillStronger": "#C6CACF",
      "pageBg": "#FFFFFF",
      "pageLine": "#E2E3E5"
    }
  },
  {
    "key": "miami",
    "name": "Miami",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/kcmjhfhghepidmmaklccljefhjgfnlbc?utm_source=codigrate_extension",
    "preview": {
      "frame": "#5D263A",
      "toolbar": "#33121D",
      "accent": "#FF5FA2",
      "frameText": "#F8FAFC",
      "toolbarText": "#F8FAFC",
      "activeTab": "#33121D",
      "inactiveTab": "#7A4D5D",
      "omnibox": "#4B2E38",
      "border": "#815665",
      "muted": "#9F9298",
      "weakFill": "#6A535B",
      "weakFillStronger": "#86737B",
      "pageBg": "#3B1B26",
      "pageLine": "#705962"
    }
  },
  {
    "key": "rio-de-janeiro",
    "name": "Rio de Janeiro",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/docafppdkimloimielffokjbnpfjaaie?utm_source=codigrate_extension",
    "preview": {
      "frame": "#94B98B",
      "toolbar": "#F7FAF6",
      "accent": "#375B2E",
      "frameText": "#F8FAFC",
      "toolbarText": "#0F172A",
      "activeTab": "#F7FAF6",
      "inactiveTab": "#82A37A",
      "omnibox": "#E3E6E2",
      "border": "#7F9F78",
      "muted": "#606671",
      "weakFill": "#D7DAD9",
      "weakFillStronger": "#C4C8C9",
      "pageBg": "#FFFFFF",
      "pageLine": "#E2E3E5"
    }
  },
  {
    "key": "paris",
    "name": "Paris",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/jcneihnpahfoamjdncacanalmdiokkbj?utm_source=codigrate_extension",
    "preview": {
      "frame": "#564245",
      "toolbar": "#271F20",
      "accent": "#D39199",
      "frameText": "#F8FAFC",
      "toolbarText": "#F8FAFC",
      "activeTab": "#271F20",
      "inactiveTab": "#746466",
      "omnibox": "#413A3B",
      "border": "#7B6C6E",
      "muted": "#9A9799",
      "weakFill": "#625C5E",
      "weakFillStronger": "#7F7B7C",
      "pageBg": "#302829",
      "pageLine": "#686364"
    }
  },
  {
    "key": "tallinn",
    "name": "Tallinn",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/efehigdahohhplollagfpnleobcaknpc?utm_source=codigrate_extension",
    "preview": {
      "frame": "#A9B9DA",
      "toolbar": "#EDF2FA",
      "accent": "#3F4494",
      "frameText": "#0F172A",
      "toolbarText": "#0F172A",
      "activeTab": "#EDF2FA",
      "inactiveTab": "#95A3C0",
      "omnibox": "#DADFE6",
      "border": "#919FBB",
      "muted": "#5D6473",
      "weakFill": "#CED3DD",
      "weakFillStronger": "#BCC2CC",
      "pageBg": "#FFFFFF",
      "pageLine": "#E2E3E5"
    }
  },
  {
    "key": "tokyo",
    "name": "Tokyo",
    "chromeUiUrl": "https://chromewebstore.google.com/detail/glgifonajfdadakpjjndpfnmmlaoeglb?utm_source=codigrate_extension",
    "preview": {
      "frame": "#323B66",
      "toolbar": "#1A1F35",
      "accent": "#7285DC",
      "frameText": "#F8FAFC",
      "toolbarText": "#F8FAFC",
      "activeTab": "#1A1F35",
      "inactiveTab": "#575E82",
      "omnibox": "#353A4D",
      "border": "#5F6688",
      "muted": "#9497A2",
      "weakFill": "#585C6D",
      "weakFillStronger": "#777B89",
      "pageBg": "#23283D",
      "pageLine": "#5F6372"
    }
  }
];

function getThemeByKey(themeKey) {
  return THEMES.find(theme => theme.key === themeKey) || THEMES[0];
}
