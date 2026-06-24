let currentHls = null;
let allChannels = [...channels];

function renderChannels(list) {
  const container = document.getElementById('channel-list');
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = '<p style="padding:1rem;color:#888">No channels found.</p>';
    return;
  }
  list.forEach((ch) => {
    const btn = document.createElement('button');
    btn.className = 'channel-btn';
    btn.innerHTML = `
      <img src="${ch.logo}" onerror="this.src='https://via.placeholder.com/40x40?text=TV'" alt="${ch.name}" />
      <div>
        <strong>${ch.name}</strong>
        <span>${ch.category}</span>
      </div>
    `;
    btn.onclick = () => playChannel(ch, btn);
    container.appendChild(btn);
  });
}

function playChannel(ch, btn) {
  document.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('now-playing').textContent = '📺 ' + ch.name;
  document.getElementById('error-msg').style.display = 'none';
  const video = document.getElementById('video');
  if (currentHls) { currentHls.destroy(); currentHls = null; }
  if (Hls.isSupported()) {
    const hls = new Hls();
    currentHls = hls;
    hls.loadSource(ch.url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    hls.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) document.getElementById('error-msg').style.display = 'block';
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = ch.url;
    video.play();
  } else {
    document.getElementById('error-msg').style.display = 'block';
  }
}

function filterChannels() {
  const q = document.getElementById('search').value.toLowerCase();
  const filtered = allChannels.filter(ch =>
    ch.name.toLowerCase().includes(q) || ch.category.toLowerCase().includes(q)
  );
  renderChannels(filtered);
}

renderChannels(allChannels);
if (allChannels.length > 0) playChannel(allChannels[0], null);
