const channels = [

  // ✅ WORKING - Free M3U8 Streams
  {
    name: "NASA TV",
    category: "Science",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    url: "https://nasa-i.akamaihd.net/hls/live/253565/NASA-NTV1-HLS/master.m3u8"
  },
  {
    name: "Al Jazeera English",
    category: "News",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/200px-Aljazeera_eng.svg.png",
    url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8"
  },
  {
    name: "DW News",
    category: "News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/200px-Deutsche_Welle_symbol_2012.svg.png",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
  },
  {
    name: "France 24 English",
    category: "News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/France_24_logo.svg/200px-France_24_logo.svg.png",
    url: "https://stream.france24.com/hls/live/2037163/F24_EN_HI_HLS/master.m3u8"
  },
  {
    name: "France 24 Arabic",
    category: "News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/France_24_logo.svg/200px-France_24_logo.svg.png",
    url: "https://stream.france24.com/hls/live/2037165/F24_AR_HI_HLS/master.m3u8"
  },
  {
    name: "Euronews English",
    category: "News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Euronews_2022.svg/200px-Euronews_2022.svg.png",
    url: "https://rakuten-euronews-1-eu.samsung.wurl.tv/manifest/playlist.m3u8"
  },
  {
    name: "Bloomberg TV",
    category: "Business",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bloomberg_logo.svg/200px-Bloomberg_logo.svg.png",
    url: "https://cdn3.wowza.com/1/ejFkNE94ajBSS0Ux/cW9zYWsx/hls/live/playlist.m3u8"
  },

  // 🇧🇩 BD / SOUTH ASIA Channels (YouTube Redirect - Legal)
  {
    name: "T Sports 🇧🇩",
    category: "BD Sports",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/T_Sports_logo.png",
    url: "https://www.youtube.com/@tsports/live",
    isYoutube: true
  },
  {
    name: "BTV 🇧🇩",
    category: "BD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bangladesh_Television_%28BTV%29_Logo.svg/200px-Bangladesh_Television_%28BTV%29_Logo.svg.png",
    url: "https://www.youtube.com/@btvonline/live",
    isYoutube: true
  },
  {
    name: "Somoy TV 🇧🇩",
    category: "BD News",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Somoy_TV_Logo.svg/200px-Somoy_TV_Logo.svg.png",
    url: "https://www.youtube.com/@SomoyTV/live",
    isYoutube: true
  },
  {
    name: "Jamuna TV 🇧🇩",
    category: "BD News",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Jamuna_Television_Logo.svg/200px-Jamuna_Television_Logo.svg.png",
    url: "https://www.youtube.com/@JamunaTelevision/live",
    isYoutube: true
  },
  {
    name: "Channel 24 🇧🇩",
    category: "BD News",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Channel_24_Bangladesh_logo.svg/200px-Channel_24_Bangladesh_logo.svg.png",
    url: "https://www.youtube.com/@channel24bd/live",
    isYoutube: true
  },
  {
    name: "Independent TV 🇧🇩",
    category: "BD News",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Independent_Television_Logo.svg/200px-Independent_Television_Logo.svg.png",
    url: "https://www.youtube.com/@IndependentTelevisionbd/live",
    isYoutube: true
  },
  {
    name: "Star Sports 1",
    category: "Sports",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Star_Sports_1_logo.svg/200px-Star_Sports_1_logo.svg.png",
    url: "https://www.youtube.com/@StarSports/live",
    isYoutube: true
  },
  {
    name: "Sony Ten",
    category: "Sports",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Sony_Ten_1_logo.svg/200px-Sony_Ten_1_logo.svg.png",
    url: "https://www.youtube.com/@SonyTen/live",
    isYoutube: true
  }

];
