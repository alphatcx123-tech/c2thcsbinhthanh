function initializeIconChatApp(root) {
const bubble = root.querySelector('#bubble');
    const panel = root.querySelector('#panel');
    const panelHead = root.querySelector('#panelHead');
    const overlay = root.querySelector('#overlay');
    const hint = root.querySelector('#hint');
    const mainView = root.querySelector('#mainView');
    const subView = root.querySelector('#subView');
    const subTitle = root.querySelector('#subTitle');
    const subList = root.querySelector('#subList');
    const backBtn = root.querySelector('#backBtn');

    const DATA = {
      zalo: {
        title: 'Zalo',
        items: [
          { name: 'Zalo Cá Nhân 1', desc: 'Nhắn riêng cho hỗ trợ', url: 'https://zalo.me/' },
          { name: 'Zalo Cá Nhân 2', desc: 'Hỗ trợ nhanh hơn', url: 'https://zalo.me/' },
          { name: 'Zalo CSKH 1', desc: 'Chăm sóc khách hàng', url: 'https://zalo.me/' },
          { name: 'Zalo CSKH 2', desc: 'Tư vấn và báo giá', url: 'https://zalo.me/' },
          { name: 'Zalo Kỹ Thuật 1', desc: 'Báo lỗi và sửa lỗi', url: 'https://zalo.me/' },
          { name: 'Zalo Kỹ Thuật 2', desc: 'Xử lý sự cố nhanh', url: 'https://zalo.me/' },
          { name: 'Zalo Bán Hàng 1', desc: 'Tư vấn sản phẩm', url: 'https://zalo.me/' },
          { name: 'Zalo Bán Hàng 2', desc: 'Chốt đơn và hỗ trợ', url: 'https://zalo.me/' }
        ]
      },
      telegram: {
        title: 'Telegram',
        items: [
          { name: 'Telegram Cộng Đồng 1', desc: 'Tham gia nhóm cộng đồng lớn nhất', url: 'https://t.me/' },
          { name: 'Telegram Cộng Đồng 2', desc: 'Nhận thông báo nhanh', url: 'https://t.me/' },
          { name: 'Telegram Hỗ Trợ 1', desc: 'Hỗ trợ kỹ thuật và câu hỏi', url: 'https://t.me/' },
          { name: 'Telegram Hỗ Trợ 2', desc: 'Nhắn trực tiếp với admin', url: 'https://t.me/' },
          { name: 'Telegram Kênh 1', desc: 'Cập nhật tin mới nhất', url: 'https://t.me/' },
          { name: 'Telegram Kênh 2', desc: 'Bản tin và tài nguyên', url: 'https://t.me/' },
          { name: 'Telegram VIP 1', desc: 'Nhóm riêng cho thành viên', url: 'https://t.me/' },
          { name: 'Telegram VIP 2', desc: 'Trao đổi nội bộ', url: 'https://t.me/' }
        ]
      },
      facebook: {
        title: 'Facebook',
        items: [
          { name: 'Facebook 1', desc: 'Hỗ trợ nhanh', url: 'https://facebook.com/' },
          { name: 'Facebook 2', desc: 'Nhắn tin trực tiếp', url: 'https://facebook.com/' },
          { name: 'Facebook 3', desc: 'Fanpage chính', url: 'https://facebook.com/' },
          { name: 'Facebook 4', desc: 'Cộng đồng', url: 'https://facebook.com/' },
          { name: 'Facebook 5', desc: 'Tin cập nhật', url: 'https://facebook.com/' },
          { name: 'Facebook 6', desc: 'Hỗ trợ kỹ thuật', url: 'https://facebook.com/' },
          { name: 'Facebook 7', desc: 'Bán hàng', url: 'https://facebook.com/' },
          { name: 'Facebook 8', desc: 'Dự phòng', url: 'https://facebook.com/' }
        ]
      },
      whatsapp: {
        title: 'WhatsApp',
        items: [
          { name: 'WhatsApp 1', desc: 'Số liên hệ 1', url: 'https://wa.me/' },
          { name: 'WhatsApp 2', desc: 'Số liên hệ 2', url: 'https://wa.me/' },
          { name: 'WhatsApp 3', desc: 'Số liên hệ 3', url: 'https://wa.me/' },
          { name: 'WhatsApp 4', desc: 'Số liên hệ 4', url: 'https://wa.me/' },
          { name: 'WhatsApp 5', desc: 'Số liên hệ 5', url: 'https://wa.me/' },
          { name: 'WhatsApp 6', desc: 'Số liên hệ 6', url: 'https://wa.me/' },
          { name: 'WhatsApp 7', desc: 'Số liên hệ 7', url: 'https://wa.me/' },
          { name: 'WhatsApp 8', desc: 'Số liên hệ 8', url: 'https://wa.me/' }
        ]
      },
      tiktok: {
        title: 'TikTok',
        items: [
          { name: 'TikTok Kênh 1', desc: 'Video hướng dẫn', url: 'https://www.tiktok.com/' },
          { name: 'TikTok Kênh 2', desc: 'Nội dung mới', url: 'https://www.tiktok.com/' },
          { name: 'TikTok Kênh 3', desc: 'Short tutorial', url: 'https://www.tiktok.com/' },
          { name: 'TikTok Kênh 4', desc: 'Demo sản phẩm', url: 'https://www.tiktok.com/' },
          { name: 'TikTok Kênh 5', desc: 'Livestream', url: 'https://www.tiktok.com/' },
          { name: 'TikTok Kênh 6', desc: 'Tip & trick', url: 'https://www.tiktok.com/' },
          { name: 'TikTok Kênh 7', desc: 'Cộng đồng', url: 'https://www.tiktok.com/' },
          { name: 'TikTok Kênh 8', desc: 'Tổng hợp nhanh', url: 'https://www.tiktok.com/' }
        ]
      },
      discord: {
        title: 'Discord',
        items: [
          { name: 'Discord Máy Chủ 1', desc: 'Kênh cộng đồng', url: 'https://discord.com/' },
          { name: 'Discord Máy Chủ 2', desc: 'Hỗ trợ trực tuyến', url: 'https://discord.com/' },
          { name: 'Discord Máy Chủ 3', desc: 'Khu chat', url: 'https://discord.com/' },
          { name: 'Discord Máy Chủ 4', desc: 'Thông báo', url: 'https://discord.com/' },
          { name: 'Discord Máy Chủ 5', desc: 'Trao đổi', url: 'https://discord.com/' },
          { name: 'Discord Máy Chủ 6', desc: 'Bộ phận kỹ thuật', url: 'https://discord.com/' },
          { name: 'Discord Máy Chủ 7', desc: 'Bản thử nghiệm', url: 'https://discord.com/' },
          { name: 'Discord Máy Chủ 8', desc: 'Dự phòng', url: 'https://discord.com/' }
        ]
      },
      x: {
        title: 'X',
        items: [
          { name: 'X Tài Khoản 1', desc: 'Tin tức và cập nhật', url: 'https://x.com/' },
          { name: 'X Tài Khoản 2', desc: 'Kết nối cộng đồng', url: 'https://x.com/' },
          { name: 'X Tài Khoản 3', desc: 'Hỗ trợ nhanh', url: 'https://x.com/' },
          { name: 'X Tài Khoản 4', desc: 'Thông báo hệ thống', url: 'https://x.com/' },
          { name: 'X Tài Khoản 5', desc: 'Bài đăng mới', url: 'https://x.com/' },
          { name: 'X Tài Khoản 6', desc: 'Trao đổi nội bộ', url: 'https://x.com/' },
          { name: 'X Tài Khoản 7', desc: 'Quảng bá nội dung', url: 'https://x.com/' },
          { name: 'X Tài Khoản 8', desc: 'Kênh dự phòng', url: 'https://x.com/' }
        ]
      },
      vk: {
        title: 'VK',
        items: [
          { name: 'VK Nhóm 1', desc: 'Cộng đồng 1', url: 'https://vk.com/' },
          { name: 'VK Nhóm 2', desc: 'Cộng đồng 2', url: 'https://vk.com/' },
          { name: 'VK Nhóm 3', desc: 'Hỗ trợ 1', url: 'https://vk.com/' },
          { name: 'VK Nhóm 4', desc: 'Hỗ trợ 2', url: 'https://vk.com/' },
          { name: 'VK Nhóm 5', desc: 'Thông báo', url: 'https://vk.com/' },
          { name: 'VK Nhóm 6', desc: 'Bản tin', url: 'https://vk.com/' },
          { name: 'VK Nhóm 7', desc: 'Trao đổi', url: 'https://vk.com/' },
          { name: 'VK Nhóm 8', desc: 'Kênh phụ', url: 'https://vk.com/' }
        ]
      }
    };

    let isDragging = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let startLeft = 0;
    let startTop = 0;
    let openedOnce = false;
    let hintInterval = null;
    let hintVisible = false;

    let panelDragging = false;
    let panelDragStartX = 0;
    let panelDragStartY = 0;
    let panelStartLeft = 0;
    let panelStartTop = 0;
    let panelOffsetX = 0;
    let panelOffsetY = 0;

    function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }

    let savedScrollY = 0;
    let isScrollLocked = false;

    function handlePreventBgScroll(e) {
      if (!isScrollLocked) return;
      const scrollable = e.target.closest('.panel-body, .submenu-body, .custom-scroll');
      if (!scrollable) {
        if (e.cancelable) e.preventDefault();
      }
    }

    function lockScroll() {
      if (isScrollLocked) return;
      isScrollLocked = true;
      savedScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      document.documentElement.classList.add('chat-open');
      document.body.classList.add('chat-open');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      window.addEventListener('wheel', handlePreventBgScroll, { passive: false });
      window.addEventListener('touchmove', handlePreventBgScroll, { passive: false });
    }

    function unlockScroll() {
      if (!isScrollLocked) return;
      isScrollLocked = false;
      document.documentElement.classList.remove('chat-open');
      document.body.classList.remove('chat-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, savedScrollY);

      window.removeEventListener('wheel', handlePreventBgScroll);
      window.removeEventListener('touchmove', handlePreventBgScroll);
    }

    function openPanel(push = true) {
      panel.classList.add('show');
      overlay.classList.add('show');
      lockScroll();
      hideHint();
      openedOnce = true;

      requestAnimationFrame(() => {
        const b = bubble.getBoundingClientRect();
        const pW = panel.offsetWidth;
        const pH = panel.offsetHeight;
        if (panelOffsetX === 0 && panelOffsetY === 0) {
          panelOffsetX = b.width - pW;
          panelOffsetY = -(pH + 16);
        }
        syncPanelToBubble();
        syncHint();
      });

      if (push) history.pushState({ page: 'panel' }, '', '#panel');
    }

    function closePanel(push = true) {
      panel.classList.remove('show');
      overlay.classList.remove('show');
      unlockScroll();
      showMainView();
      if (push) history.pushState({ page: 'closed' }, '', '#closed');
      startHintCycle();
    }

    function showMainView() {
      mainView.classList.remove('hidden');
      subView.classList.add('hidden');
      subTitle.textContent = 'Danh sách';
      subList.innerHTML = '';
    }

    function openSubmenu(key, push = true) {
      const data = DATA[key];
      if (!data) return;
      subTitle.textContent = `Danh sách ${data.title}`;
      subList.innerHTML = '';
      data.items.forEach(item => {
        const el = document.createElement('button');
        el.className = 'sub-item';
        el.type = 'button';
        el.innerHTML = `
          <div class="sub-item-left">
            <div class="sub-item-name">${item.name}</div>
            <div class="sub-item-desc">${item.desc}</div>
          </div>
          <div class="sub-go">›</div>
        `;
        el.addEventListener('click', () => window.open(item.url, '_blank'));
        subList.appendChild(el);
      });
      mainView.classList.add('hidden');
      subView.classList.remove('hidden');
      if (push) history.pushState({ page: `sub:${key}` }, '', `#${key}`);
      requestAnimationFrame(syncPanelToBubble);
    }

    function hideHint() {
      hint.classList.remove('show');
      hintVisible = false;
    }

    function syncHint() {
      if (!hint.classList.contains('show')) return;

      const b = bubble.getBoundingClientRect();
      const gap = 14;
      const w = hint.offsetWidth || 240;
      const h = hint.offsetHeight || 0;

      let left = b.left - w - gap;
      let top = b.top + (b.height - h) / 2;

      if (left < 8) left = b.right + gap;
      if (left + w > window.innerWidth - 8) left = window.innerWidth - w - 8;
      if (top < 8) top = 8;
      if (top + h > window.innerHeight - 8) top = window.innerHeight - h - 8;

      hint.style.left = `${left}px`;
      hint.style.top = `${top}px`;
    }

    function syncPanelToBubble() {
      if (!panel.classList.contains('show')) return;

      const b = bubble.getBoundingClientRect();
      const left = clamp(b.left + panelOffsetX, 8, window.innerWidth - panel.offsetWidth - 8);
      const top = clamp(b.top + panelOffsetY, 8, window.innerHeight - panel.offsetHeight - 8);

      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;
      panel.style.right = 'auto';
      panel.style.bottom = 'auto';

      syncHint();
    }

    function updatePanelOffsetFromCurrent() {
      const b = bubble.getBoundingClientRect();
      const p = panel.getBoundingClientRect();
      panelOffsetX = p.left - b.left;
      panelOffsetY = p.top - b.top;
    }

    function startHintCycle() {
      clearInterval(hintInterval);
      hideHint();
      if (panel.classList.contains('show')) return;
      hintInterval = setInterval(() => {
        if (panel.classList.contains('show') || isDragging || panelDragging) {
          hideHint();
          return;
        }
        hintVisible = !hintVisible;
        hint.classList.toggle('show', hintVisible);
        if (hintVisible) requestAnimationFrame(syncHint);
      }, 3000);
    }

    overlay.addEventListener('click', () => history.back());

    bubble.addEventListener('click', () => {
      if (dragMoved) return;
      if (panel.classList.contains('show')) history.back();
      else openPanel(true);
    });

    backBtn.addEventListener('click', () => history.back());

    root.querySelectorAll('.app-card').forEach(card => {
      card.addEventListener('click', () => openSubmenu(card.dataset.app, true));
    });

    bubble.addEventListener('pointerdown', e => {
      isDragging = true;
      dragMoved = false;
      const rect = bubble.getBoundingClientRect();
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      bubble.setPointerCapture(e.pointerId);
      bubble.style.transition = 'none';
      hideHint();
    });

    bubble.addEventListener('pointermove', e => {
      if (!isDragging) return;

      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragMoved = true;

      const maxLeft = window.innerWidth - bubble.offsetWidth - 8;
      const maxTop = window.innerHeight - bubble.offsetHeight - 8;
      const nextLeft = clamp(startLeft + dx, 8, maxLeft);
      const nextTop = clamp(startTop + dy, 8, maxTop);

      bubble.style.left = `${nextLeft}px`;
      bubble.style.top = `${nextTop}px`;
      bubble.style.right = 'auto';
      bubble.style.bottom = 'auto';

      if (panel.classList.contains('show')) syncPanelToBubble();
      else syncHint();
    });

    bubble.addEventListener('pointerup', () => {
      isDragging = false;
      bubble.style.transition = 'transform .15s ease';
      setTimeout(() => { bubble.style.transition = ''; }, 150);
      setTimeout(() => { dragMoved = false; }, 50);
      if (!panel.classList.contains('show')) startHintCycle();
      requestAnimationFrame(syncHint);
    });

    bubble.addEventListener('pointercancel', () => {
      isDragging = false;
      dragMoved = false;
      if (!panel.classList.contains('show')) startHintCycle();
    });

    panelHead.addEventListener('pointerdown', e => {
      if (!panel.classList.contains('show')) return;
      panelDragging = true;
      const rect = panel.getBoundingClientRect();
      panelDragStartX = e.clientX;
      panelDragStartY = e.clientY;
      panelStartLeft = rect.left;
      panelStartTop = rect.top;
      panelHead.setPointerCapture(e.pointerId);
      panel.style.transition = 'none';
      hideHint();
    });

    panelHead.addEventListener('pointermove', e => {
      if (!panelDragging) return;

      const dx = e.clientX - panelDragStartX;
      const dy = e.clientY - panelDragStartY;

      const maxLeft = window.innerWidth - panel.offsetWidth - 8;
      const maxTop = window.innerHeight - panel.offsetHeight - 8;

      const nextLeft = clamp(panelStartLeft + dx, 8, maxLeft);
      const nextTop = clamp(panelStartTop + dy, 8, maxTop);

      panel.style.left = `${nextLeft}px`;
      panel.style.top = `${nextTop}px`;
      panel.style.right = 'auto';
      panel.style.bottom = 'auto';

      updatePanelOffsetFromCurrent();
      syncHint();
    });

    panelHead.addEventListener('pointerup', () => {
      panelDragging = false;
      panel.style.transition = 'transform .15s ease';
      setTimeout(() => { panel.style.transition = ''; }, 150);
      if (panel.classList.contains('show')) syncPanelToBubble();
    });

    panelHead.addEventListener('pointercancel', () => {
      panelDragging = false;
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (!subView.classList.contains('hidden')) history.back();
        else if (panel.classList.contains('show')) history.back();
      }
    });

    window.addEventListener('popstate', () => {
      const h = location.hash.replace('#', '');
      if (h === 'panel') {
        panel.classList.add('show');
        overlay.classList.add('show');
        lockScroll();
        showMainView();
        requestAnimationFrame(syncPanelToBubble);
      } else if (DATA[h]) {
        panel.classList.add('show');
        overlay.classList.add('show');
        lockScroll();
        openSubmenu(h, false);
      } else {
        panel.classList.remove('show');
        overlay.classList.remove('show');
        unlockScroll();
        showMainView();
        startHintCycle();
      }
      requestAnimationFrame(syncHint);
    });

    window.addEventListener('resize', () => {
      if (panel.classList.contains('show')) syncPanelToBubble();
      else syncHint();
    });

    if (!location.hash) {
      history.replaceState({ page: 'closed' }, '', '#closed');
    } else {
      const h = location.hash.replace('#', '');
      if (h === 'panel') {
        lockScroll();
        panel.classList.add('show');
        overlay.classList.add('show');
        showMainView();
      } else if (DATA[h]) {
        lockScroll();
        panel.classList.add('show');
        overlay.classList.add('show');
        openSubmenu(h, false);
      }
    }
    startHintCycle();
}

function mountIconChatApp() {
  const root = document.getElementById('iconChatAppRoot');
  if (!root || root.dataset.initialized === 'true') return;
  const markup = String.raw`<div class="overlay" id="overlay"></div>

  <div class="hint" id="hint">
    <div class="hint-title">Hãy nhấn vào đây để hỗ trợ</div>
    <div class="hint-sub">Tham gia nhóm cộng đồng</div>
  </div>

  <button class="bubble" id="bubble" aria-label="Chat">
    <span class="bubble-star">✦</span>
    <span class="bubble-text">CHAT</span>
    <span class="bubble-heart">❤</span>
  </button>

  <section class="panel" id="panel">
    <div class="panel-head" id="panelHead">
      <div class="panel-head-title">
        <span class="spark">✦</span>
        <span>Liên hệ nhanh</span>
      </div>
      <div class="panel-head-sub">Ưu tiên Zalo, Telegram và Facebook để được hỗ trợ nhanh.</div>
    </div>

    <div class="panel-body">
      <div id="mainView" class="main-view">
        <button class="app-card zalo" data-app="zalo">
          <span class="tag blink">TOP 1</span>
          <span class="icon">Z</span>
          <span class="meta">
            <span class="name">Zalo</span>
            <span class="sub">8 tài khoản</span>
          </span>
          <span class="go">›</span>
        </button>

        <button class="app-card tg" data-app="telegram">
          <span class="tag blink">NEW</span>
          <span class="icon">✈</span>
          <span class="meta">
            <span class="name">Telegram</span>
            <span class="sub">8 tài khoản</span>
          </span>
          <span class="go">›</span>
        </button>

        <button class="app-card fbapp" data-app="facebook">
          <span class="tag blink">HOT</span>
          <span class="icon">f</span>
          <span class="meta">
            <span class="name">Facebook</span>
            <span class="sub">8 tài khoản</span>
          </span>
          <span class="go">›</span>
        </button>

        <div class="more-label">Kéo xuống để xem thêm</div>

        <button class="app-card waapp" data-app="whatsapp">
          <span class="tag blink">HOT</span>
          <span class="icon">◉</span>
          <span class="meta">
            <span class="name">WhatsApp</span>
            <span class="sub">8 số liên hệ</span>
          </span>
          <span class="go">›</span>
        </button>

        <button class="app-card tiktok" data-app="tiktok">
          <span class="tag blink">HOT</span>
          <span class="icon">♪</span>
          <span class="meta">
            <span class="name">TikTok</span>
            <span class="sub">8 kênh</span>
          </span>
          <span class="go">›</span>
        </button>

        <button class="app-card dcapp" data-app="discord">
          <span class="tag blink">NEW</span>
          <span class="icon">◻</span>
          <span class="meta">
            <span class="name">Discord</span>
            <span class="sub">8 máy chủ</span>
          </span>
          <span class="go">›</span>
        </button>

        <button class="app-card xapp" data-app="x">
          <span class="tag blink">NEW</span>
          <span class="icon">X</span>
          <span class="meta">
            <span class="name">X</span>
            <span class="sub">8 tài khoản</span>
          </span>
          <span class="go">›</span>
        </button>

        <button class="app-card vkapp" data-app="vk">
          <span class="tag blink">NEW</span>
          <span class="icon">VK</span>
          <span class="meta">
            <span class="name">VK</span>
            <span class="sub">8 nhóm</span>
          </span>
          <span class="go">›</span>
        </button>
      </div>

      <div id="subView" class="sub-view hidden">
        <button class="back-btn" id="backBtn">← Quay lại</button>
        <div class="sub-title" id="subTitle">Danh sách</div>
        <div class="sub-list" id="subList"></div>
      </div>
    </div>
  </section>`;
  root.innerHTML = markup;
  root.dataset.initialized = 'true';
  initializeIconChatApp(root);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountIconChatApp);
} else {
  mountIconChatApp();
}
