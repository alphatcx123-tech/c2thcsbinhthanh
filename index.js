history.scrollRestoration = "manual";

window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
});

let isModalScrollLocked = false;

function preventBgScrollModal(e) {
  if (!isModalScrollLocked) return;
  const insideBox = e.target.closest('.welcome-box, .modal-box');
  if (!insideBox) {
    if (e.cancelable) e.preventDefault();
  }
}

function lockWelcomeScroll() {
  if (isModalScrollLocked) return;
  isModalScrollLocked = true;
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  window.addEventListener('wheel', preventBgScrollModal, { passive: false });
  window.addEventListener('touchmove', preventBgScrollModal, { passive: false });
}

function unlockWelcomeScroll() {
  if (!isModalScrollLocked) return;
  isModalScrollLocked = false;
  if (!document.body.classList.contains('chat-open')) {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
  window.removeEventListener('wheel', preventBgScrollModal);
  window.removeEventListener('touchmove', preventBgScrollModal);
}

window.addEventListener("DOMContentLoaded", () => {
  const welcomeBox = document.getElementById("welcomeNotification");
  if (welcomeBox) {
    let shouldHide = false;
    try {
      const hideUntil = localStorage.getItem("welcome_modal_hide_until");
      if (hideUntil && Date.now() < parseInt(hideUntil, 10)) {
        shouldHide = true;
      }
    } catch (e) {
      console.error("LocalStorage check error:", e);
    }

    if (shouldHide) {
      welcomeBox.style.display = "none";
    } else {
      welcomeBox.style.display = "flex";
      lockWelcomeScroll();
    }
  }

  updateTimeAndStats();
  initVisitorCounterPremium();
  initBackToTop();
});

function closeWelcomeModal() {
  const overlay = document.getElementById("welcomeNotification");
  const box = overlay ? overlay.querySelector(".welcome-box") : null;
  if (!overlay) return;
  overlay.classList.add("closing");
  if (box) box.classList.add("closing");
  overlay.style.animation = "overlayFadeOut 0.3s ease forwards";
  if (box) box.style.animation = "popDownAnim 0.3s ease forwards";
  setTimeout(() => {
    overlay.style.display = "none";
    overlay.style.animation = "";
    overlay.classList.remove("closing");
    if (box) {
      box.style.animation = "";
      box.classList.remove("closing");
    }
    unlockWelcomeScroll();
  }, 300);
}

function closeWelcomeModal2Hours() {
  const twoHoursMs = 2 * 60 * 60 * 1000;
  try {
    localStorage.setItem("welcome_modal_hide_until", (Date.now() + twoHoursMs).toString());
  } catch (e) {
    console.error("LocalStorage write error:", e);
  }
  closeWelcomeModal();
}

function updateTimeAndStats() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  const clockEl = document.getElementById("clockDisplay");
  if (clockEl) clockEl.textContent = `${h}:${m}:${s}`;
}
setInterval(updateTimeAndStats, 1000);

function renderStat(id, num) {
  const el = document.getElementById(id);
  if (el && num !== null && typeof num !== "undefined") {
    el.innerText = Number(num).toLocaleString("vi-VN");
  }
}

function initVisitorCounterPremium() {
  const namespace = "c2thcsbinhthanh_v1";

  const fetchOptions = {
    method: "GET",
    cache: "no-store",
    headers: {
      "Cache-Control": "no-cache"
    }
  };

  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const todayStr = `${year}${month}${date}`;
  const monthStr = `${year}${month}`;

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const yYear = yesterday.getFullYear();
  const yMonth = String(yesterday.getMonth() + 1).padStart(2, "0");
  const yDate = String(yesterday.getDate()).padStart(2, "0");
  const yesterdayStr = `${yYear}${yMonth}${yDate}`;

  function updateCounterEl(url, elementId, opts) {
    opts = opts || {};
    return fetch(url, fetchOptions)
      .then((res) => {
        if (opts.requireOk && !res.ok) throw new Error(opts.notFoundMessage);
        return res.json();
      })
      .then((data) => {
        const el = document.getElementById(elementId);
        if (el && data && typeof data.value !== "undefined") {
          el.innerText = data.value.toLocaleString("vi-VN");
        }
      })
      .catch((err) => {
        if (opts.onError) {
          opts.onError(err);
        } else {
          console.error(opts.errorLabel, err);
        }
      });
  }

  updateCounterEl(
    `https://countapi.mileshilliard.com/api/v1/hit/${namespace}_total`,
    "valNam",
    { errorLabel: "Lỗi đồng bộ tổng:" }
  );

  updateCounterEl(
    `https://countapi.mileshilliard.com/api/v1/hit/${namespace}_day_${todayStr}`,
    "valHomNay",
    { errorLabel: "Lỗi đồng bộ ngày:" }
  );

  updateCounterEl(
    `https://countapi.mileshilliard.com/api/v1/hit/${namespace}_month_${monthStr}`,
    "valThang",
    { errorLabel: "Lỗi đồng bộ tháng:" }
  );

  updateCounterEl(
    `https://countapi.mileshilliard.com/api/v1/get/${namespace}_day_${yesterdayStr}`,
    "valHomQua",
    {
      requireOk: true,
      notFoundMessage: "Chưa có data hôm qua",
      onError: () => {
        const elHQ = document.getElementById("valHomQua");
        if (elHQ) elHQ.innerText = "0";
      }
    }
  );
}

function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

  if (!backToTopBtn) return;

  function toggleButtons() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollTop > 20) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }

    if (scrollToBottomBtn) {
      if (scrollTop < maxScroll - 20) {
        scrollToBottomBtn.style.display = "flex";
      } else {
        scrollToBottomBtn.style.display = "none";
      }
    }
  }

  window.addEventListener("scroll", toggleButtons);

  toggleButtons();

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  if (scrollToBottomBtn) {
    scrollToBottomBtn.addEventListener("click", function () {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    });
  }
}

function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.style.display = "flex";
  lockWelcomeScroll();
  if (id === "searchModal") {
    setTimeout(() => document.getElementById("searchInput").focus(), 100);
  }
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  const box = overlay ? overlay.querySelector(".modal-box") : null;
  if (box) box.classList.add("closing");
  setTimeout(() => {
    if (overlay) overlay.style.display = "none";
    if (box) box.classList.remove("closing");
    unlockWelcomeScroll();
  }, 250);
}

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("welcome-overlay")) {
    closeWelcomeModal();
  } else if (event.target.classList.contains("modal-overlay")) {
    closeModal(event.target.id);
  }
});

function showToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  showToast();
}

function toggleReadMore(button) {
  const content = button.previousElementSibling;
  if (!content) return;

  const isExpanded = content.classList.contains("expanded");

  if (!isExpanded) {
    const startHeight = content.getBoundingClientRect().height;
    content.classList.add("expanded");
    const fullHeight = content.scrollHeight;

    content.style.maxHeight = startHeight + "px";
    content.offsetHeight; // trigger reflow

    content.style.maxHeight = fullHeight + "px";

    button.classList.add("expanded-btn");
    button.innerHTML = 'Thu gọn <span class="btn-icon">▼</span>';

    setTimeout(() => {
      if (content.classList.contains("expanded")) {
        content.style.maxHeight = "none";
      }
    }, 420);
  } else {
    const fullHeight = content.scrollHeight;
    content.style.maxHeight = fullHeight + "px";
    content.offsetHeight; // trigger reflow

    content.style.maxHeight = "48px";
    content.classList.remove("expanded");

    button.classList.remove("expanded-btn");
    button.innerHTML = 'Xem thêm <span class="btn-icon">▼</span>';

    setTimeout(() => {
      if (!content.classList.contains("expanded")) {
        content.style.maxHeight = "";
      }
    }, 420);
  }
}

function normalizeText(str) {
  return (str || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const searchData = [
  { titleMain: "Giới thiệu", titleSub: "Nhà trường", desc: "Xem lịch sử, cơ cấu trường, thông tin tổng quan.", keywords: ["gioi thieu", "nha truong", "thcs", "binh thanh"], url: "gioithieu.html" },
  { titleMain: "Sự kiện", titleSub: "Mới", desc: "Hoạt động, phong trào, lễ hội, ngoại khóa.", keywords: ["su kien", "hoat dong", "phong trao"], url: "sukien.html" },
  { titleMain: "Kỉ niệm", titleSub: "Hình ảnh", desc: "Album ảnh, video, khoảnh khắc đáng nhớ.", keywords: ["ki niem", "hinh anh", "album", "ky niem"], url: "kiniem.html" },
  { titleMain: "Tin tức", titleSub: "Thông báo", desc: "Thông báo mới nhất, tin quan trọng của trường.", keywords: ["tin tuc", "thong bao", "tin moi"], url: "thongtin.html" },
  { titleMain: "Tài nguyên", titleSub: "Học tập", desc: "Tài liệu, bài giảng, đề thi, ôn tập khối 6 đến khối 9.", keywords: ["tai nguyen", "hoc tap", "de thi", "tai lieu"], url: "tainguyen.html" },
  { titleMain: "Tài nguyên", titleSub: "Máy chủ", desc: "Thông tin phần cứng, phần mềm và hệ thống website.", keywords: ["may chu", "server", "hosting", "github"], url: "tainguyenserver.html" },
  { titleMain: "Kỹ năng", titleSub: "Phòng chống đuối nước", desc: "Cẩm nang an toàn dưới nước dành riêng cho học sinh.", keywords: ["duoi nuoc", "phong chong", "an toan"], url: "phongchongduoinuoc.html" },
  { titleMain: "Bài báo học sinh", titleSub: "Gương sáng Bình Thành", desc: "Bài báo tuyên dương những học sinh xuất sắc phong trào Đội.", keywords: ["guong sang", "tuyen duong", "hoc sinh"], url: "guongtot.html" },
  { titleMain: "Mẹo hay", titleSub: "Học tốt - giảm áp lực", desc: "Chia sẻ phương pháp sơ đồ tư duy (Mindmap) và thời gian.", keywords: ["meo hay", "hoc tot", "mindmap"], url: "meohayhoctap.html" },
  { titleMain: "Mẹo hay", titleSub: "Bảo vệ sức khỏe", desc: "Các thói quen tốt giúp phòng tránh tật khúc xạ, cận thị học đường.", keywords: ["suc khoe", "can thi", "tu the ngoi"], url: "meosuckhoe.html" }
];

function handleSearch() {
  const input = document.getElementById("searchInput");
  const resultBox = document.getElementById("searchResults");
  if (!input || !resultBox) return;

  const query = normalizeText(input.value);
  resultBox.innerHTML = "";
  if (!query) return;

  const filtered = searchData.filter((item) => {
    const allText = normalizeText(
      [item.titleMain, item.titleSub, item.desc, ...(item.keywords || [])].join(" ")
    );
    return allText.includes(query);
  });

  if (filtered.length === 0) {
    resultBox.innerHTML = `<p style="font-size:13px; color:#666; padding:10px;">Không tìm thấy kết quả.</p>`;
    return;
  }

  filtered.forEach((item) => {
    resultBox.innerHTML += `
      <a href="${item.url}" class="search-res-item">
        <div class="search-res-title">${item.titleMain} <span style="font-weight:400;">- ${item.titleSub}</span></div>
        <div class="search-res-desc">${item.desc}</div>
      </a>`;
  });
}

