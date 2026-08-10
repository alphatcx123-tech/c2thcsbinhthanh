## Chào Mọi Người 👋
# 🌐 Website THCS Bình Thành

Website giới thiệu và cung cấp thông tin cho trường THCS Bình Thành

# 🏫 THCS Bình Thành — Digital School Platform

<p align="center">
  <strong>⚡ Modern • Responsive • Interactive • Extensible</strong>
</p>

<p align="center">
  Thông tin • Học tập • Sự kiện • Tài nguyên • Hình ảnh • Kỷ niệm • Cộng đồng
</p>

<p align="center">
  🌐 HTML5 &nbsp; • &nbsp; 🎨 CSS3 &nbsp; • &nbsp; ⚡ JavaScript &nbsp; • &nbsp; 📱 Responsive &nbsp; • &nbsp; 🔎 SEO
</p>

---

> **THCS Bình Thành** là một nền tảng web hướng tới việc số hóa thông tin trường học, tài nguyên học tập, hoạt động, hình ảnh và các kênh tương tác.
>
> Tài liệu này được viết theo hướng **README + Technical Documentation + Product Documentation**: không chỉ giới thiệu website mà còn mô tả module, kiến trúc, luồng xử lý, giao diện, bảo mật, hiệu năng, triển khai và hướng mở rộng.

---

# 📑 Mục lục

- [🌟 Tổng quan](#-tổng-quan)
- [🎯 Tầm nhìn](#-tầm-nhìn)
- [🚀 Highlights](#-highlights)
- [📊 Feature Matrix](#-feature-matrix)
- [🏫 Hệ thống module](#-hệ-thống-module)
- [🧠 Kiến trúc hệ thống](#-kiến-trúc-hệ-thống)
- [🔄 Data Flow](#-data-flow)
- [🎨 UI/UX](#-uiux)
- [📱 Responsive](#-responsive)
- [🌙 Theme Engine](#-theme-engine)
- [🌐 Internationalization](#-internationalization)
- [🔎 Search & Filtering](#-search--filtering)
- [📊 Statistics](#-statistics)
- [💾 Client Storage](#-client-storage)
- [✨ Page Transition](#-page-transition)
- [🔐 Security](#-security)
- [🔎 SEO](#-seo)
- [⚡ Performance](#-performance)
- [🗂️ Project Structure](#️-project-structure)
- [🧱 Code Architecture](#-code-architecture)
- [▶️ Local Development](#️-local-development)
- [🌍 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [🛠️ Troubleshooting](#️-troubleshooting)
- [🗺️ Roadmap](#️-roadmap)
- [🏗️ Future Architecture](#️-future-architecture)
- [🤝 Git Workflow](#-git-workflow)
- [📋 Commit Convention](#-commit-convention)
- [📈 Quality Checklist](#-quality-checklist)
- [📊 Project Summary](#-project-summary)
- [📜 License](#-license)
- [❤️ Credits](#️-credits)

---

# 🌟 Tổng quan

**THCS Bình Thành** được xây dựng theo hướng **Client-Side Static Web Application**.

Kiến trúc hiện tại có thể hình dung:

```text
                    👤 USER
                       │
                       ▼
                🌐 WEB BROWSER
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      HTML            CSS        JavaScript
        │              │              │
        │              │      ┌───────┼────────┐
        │              │      ▼       ▼        ▼
        │              │   Search   Filter   UI Logic
        │              │      │       │        │
        └──────────────┴──────┴───────┴────────┘
                       │
                       ▼
                  SCHOOL CONTENT
```

Điểm quan trọng:

> **Static Web không có nghĩa là website không có JavaScript.**  
> Website vẫn có thể có logic tương tác phong phú nhưng không cần application server riêng cho phần frontend.

---

# 🎯 Tầm nhìn

Dự án có thể phát triển theo hướng:

```text
Website trường học
       ↓
Cổng thông tin số
       ↓
Nền tảng học tập
       ↓
School Digital Platform
```

Mục tiêu dài hạn:

- Tập trung thông tin.
- Số hóa tài nguyên.
- Lưu trữ lịch sử hoạt động.
- Tăng khả năng tiếp cận thông tin.
- Tạo trải nghiệm hiện đại trên điện thoại.
- Có kiến trúc đủ rõ để nâng cấp backend sau này.

---

# 🚀 Highlights

| Thành phần | Trạng thái |
|---|:---:|
| 🏠 Trang chủ | ✅ |
| 🏫 Giới thiệu | ✅ |
| 📰 Thông tin | ✅ |
| 📢 Thông báo / lịch học | ✅ |
| 📅 Sự kiện | ✅ |
| 📚 Tài nguyên học tập | ✅ |
| 🖼️ Kho ảnh | ✅ |
| 💭 Kỷ niệm | ✅ |
| 🏆 Gương tốt | ✅ |
| ✉️ Góp ý | ✅ |
| 💬 Chat / hỗ trợ | ✅ |
| 🔍 Tìm kiếm | ✅ |
| 🧩 Bộ lọc | ✅ |
| 🌙 Dark Mode | ✅ |
| ☀️ Light Mode | ✅ |
| 🌐 Vietnamese / English | ✅ |
| 📱 Responsive UI | ✅ |
| ⏱️ Đồng hồ thời gian thực | ✅ |
| 📊 Visitor statistics | ✅ |
| 💾 LocalStorage | Có sử dụng |
| ✨ Page transition | Có module riêng |
| 🔎 Structured data | Có trong source |
| 🗄️ Database bắt buộc | ❌ |
| 🖥️ Backend bắt buộc | ❌ |

---

# 📊 Feature Matrix

## 🏠 Core

| Feature | Mô tả |
|---|---|
| Navigation | Điều hướng giữa các khu vực |
| Search | Tìm kiếm nội dung |
| Responsive | Desktop / Tablet / Mobile |
| Theme | Light / Dark |
| Notification | Thông báo UI |
| Transition | Chuyển trang có animation |
| Statistics | Hiển thị thống kê truy cập |
| Footer | Thông tin liên hệ / điều hướng |

## 📚 Education

| Feature | Mô tả |
|---|---|
| Lớp 6 | Tài nguyên |
| Lớp 7 | Tài nguyên |
| Lớp 8 | Tài nguyên |
| Lớp 9 | Tài nguyên |
| Filter | Lọc theo khối |
| Server Resource | Khu vực tài nguyên riêng |

## 📰 Information

| Feature | Mô tả |
|---|---|
| Tin tức | Cập nhật nội dung |
| Thông báo | Thông tin quan trọng |
| Lịch học | Lịch / thông tin học tập |
| Sự kiện | Hoạt động theo thời gian |
| Gương tốt | Tuyên dương |

## 🖼️ Media

| Feature | Mô tả |
|---|---|
| Gallery | Kho hình ảnh |
| Kỷ niệm | Nội dung lưu giữ |
| Album | Nhóm hình ảnh theo chủ đề |

## 🤝 Community

| Feature | Mô tả |
|---|---|
| Góp ý | Tiếp nhận phản hồi |
| Diễn đàn | Không gian cộng đồng |
| Chat | Thành phần hỗ trợ |

---

# 🏫 Hệ thống module

## 1. 🏠 Home

### `index.html`

Đây là entry point chính.

Nhóm chức năng:

```text
Home
├── Navigation
├── Search
├── Welcome UI
├── Clock
├── Statistics
├── Contact
├── Support
├── Cookie state
├── Scroll utilities
└── Footer
```

Luồng khởi tạo:

```text
Browser
   ↓
Load index.html
   ↓
Load CSS
   ↓
Load JavaScript
   ↓
Initialize DOM
   ↓
Initialize widgets
   ↓
Initialize statistics
   ↓
Ready
```

---

# 2. 🏫 Introduction

### `gioithieu.html`

Mục tiêu:

- Giới thiệu trường.
- Cung cấp thông tin nền tảng.
- Tạo nhận diện cho website.
- Là điểm tham khảo cho người dùng mới.

---

# 3. 📰 Information

### `thongtin.html`

Khu vực thông tin trung tâm:

```text
THÔNG TIN
│
├── Tin tức
├── Hoạt động
├── Nội dung nổi bật
└── Thông tin cập nhật
```

---

# 4. 📢 Schedule / Announcement

### `thongbaolichhoc.html`

Dùng để trình bày các thông báo và thông tin lịch học.

Mục tiêu UX:

```text
Thông báo
   ↓
Tiêu đề rõ
   ↓
Thông tin quan trọng
   ↓
Nội dung chi tiết
```

---

# 5. 📅 Event System

### `sukien.html`
### `sukien.js`

Module sự kiện có JavaScript xử lý riêng.

Luồng:

```text
User
 ↓
Chọn sự kiện / năm
 ↓
Event handler
 ↓
Xác định nội dung
 ↓
Cập nhật trạng thái active
 ↓
Render nội dung
```

Kiến trúc này thuận lợi khi thêm:

```text
2026
2027
2028
...
```

mà không cần thay đổi toàn bộ trang.

---

# 6. 📚 Learning Resources

### `tainguyen.html`
### `tainguyen.js`
### `tainguyenserver.html`

Mô hình:

```text
TÀI NGUYÊN
│
├── Lớp 6
├── Lớp 7
├── Lớp 8
└── Lớp 9
```

Pipeline lọc:

```text
Resource dataset
      ↓
Grade filter
      ↓
Category filter
      ↓
Keyword
      ↓
Render
```

Mục tiêu dài hạn là biến khu vực này thành **digital learning hub**.

---

# 7. 🖼️ Gallery & Memories

Các module:

```text
anh.html
anhkiniemdep.html
kiniem.html
```

Vai trò:

- Digital archive.
- Hình ảnh hoạt động.
- Kỷ niệm.
- Nội dung trực quan.

---

# 8. 🏆 Recognition

### `guongtot.html`

Có thể tổ chức:

```text
GƯƠNG TỐT
│
├── Giáo viên
├── Học sinh
└── Thành tích
```

---

# 9. ✉️ Feedback

### `gopy.html`
### `gopy.js`

Luồng UI:

```text
User input
   ↓
Search / interaction
   ↓
Match content
   ↓
Filter
   ↓
Update DOM
```

Nếu có backend trong tương lai, module này có thể nâng cấp thành:

```text
Feedback
 ↓
Ticket
 ↓
Status
 ↓
Admin response
 ↓
Resolved
```

---

# 10. 💬 Chat / Support

Các file:

```text
iconchatapp.html
iconchatapp.css
iconchatapp.js
```

Việc tách module giúp giảm coupling với trang chính.

Tương lai có thể mở rộng:

```text
Chat UI
   ↓
API
   ↓
AI / Support service
```

---

# 🧠 Kiến trúc hệ thống

## Current Architecture

```text
┌────────────────────────────────────────────┐
│                USER DEVICE                 │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │              BROWSER                 │  │
│  │                                      │  │
│  │ HTML ─────┐                          │  │
│  │ CSS ──────┼──► DOM / UI              │  │
│  │ JS ───────┘                          │  │
│  │       │                              │  │
│  │       ├── Search                     │  │
│  │       ├── Filter                     │  │
│  │       ├── Theme                      │  │
│  │       ├── Language                   │  │
│  │       ├── Statistics                 │  │
│  │       └── Interaction                │  │
│  └──────────────────────────────────────┘  │
└───────────────────────┬────────────────────┘
                        │
                        ▼
                External Services
```

---

# 🔄 Data Flow

## Search

```text
User types
   ↓
Input event
   ↓
Normalize query
   ↓
Search content
   ↓
Match
   ↓
Render result
```

## Filter

```text
Selection
   ↓
Event handler
   ↓
Apply condition
   ↓
Filter dataset
   ↓
Render
```

## Statistics

```text
Page load
   ↓
JavaScript
   ↓
fetch()
   ↓
External counter
   ↓
Response
   ↓
Parse
   ↓
Format
   ↓
Display
```

---

# 🎨 UI/UX

Website hướng tới **visual hierarchy + responsive interaction**.

Các nhóm component:

```text
Navigation
Cards
Buttons
Inputs
Search
Dropdown
Notification
Gallery
Statistics
Footer
Floating Actions
```

## UX Principles

### 1. Information hierarchy

Nội dung quan trọng phải nổi bật.

### 2. Consistency

Cùng loại component nên có:

- Cùng spacing.
- Cùng typography.
- Cùng interaction.
- Cùng visual language.

### 3. Feedback

Người dùng nên biết thao tác đã thành công hay chưa.

### 4. Low friction

Giảm số bước để người dùng tới nội dung.

---

# 📱 Responsive

Website phục vụ:

```text
📱 Smartphone
      ↓
📲 Tablet
      ↓
💻 Laptop
      ↓
🖥️ Desktop
```

Viewport:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Responsive checklist

- [ ] Không horizontal overflow.
- [ ] Navigation phù hợp mobile.
- [ ] Button đủ vùng chạm.
- [ ] Image không vượt container.
- [ ] Text không bị cắt.
- [ ] Card tự co giãn.
- [ ] Modal phù hợp màn hình nhỏ.

---

# 🌙 Theme Engine

Hai trạng thái chính:

```text
☀️ Light
🌙 Dark
```

Kiến trúc tốt nhất nên dùng design tokens:

```css
:root {
    --bg: #ffffff;
    --surface: #f8fafc;
    --text: #1e293b;
    --muted: #64748b;
    --border: #e2e8f0;
    --accent: #2563eb;
}
```

Theme tối:

```css
[data-theme="dark"] {
    --bg: #0f172a;
    --surface: #1e293b;
    --text: #f8fafc;
    --muted: #94a3b8;
    --border: #334155;
}
```

JavaScript chỉ cần thay đổi state:

```text
data-theme="light"
        ↕
data-theme="dark"
```

Lợi ích:

- Giảm CSS duplication.
- Dễ thêm theme.
- Dễ bảo trì.
- Dễ chuẩn hóa UI.

---

# 🌐 Internationalization

Website hỗ trợ:

```text
🇻🇳 Vietnamese
🇬🇧 English
```

Kiến trúc:

```javascript
const translations = {
    vi: {
        home: "Trang chủ",
        news: "Tin tức"
    },

    en: {
        home: "Home",
        news: "News"
    }
};
```

Flow:

```text
User changes language
        ↓
Set current locale
        ↓
Read translation dictionary
        ↓
Update UI
```

Có thể mở rộng:

```text
vi
en
zh
ja
ko
...
```

mà không cần viết lại toàn bộ HTML.

---

# 🔎 Search & Filtering

Search và Filter nên được xem là hai lớp khác nhau.

| Cơ chế | Chức năng |
|---|---|
| Search | Tìm theo keyword |
| Filter | Lọc theo thuộc tính |
| Sort | Sắp xếp |
| Pagination | Chia trang |

Pipeline nâng cao:

```text
Dataset
  ↓
Filter
  ↓
Search
  ↓
Sort
  ↓
Pagination
  ↓
Render
```

Ví dụ:

```text
Lớp = 9
+
Môn = Toán
+
Keyword = "hàm số"
```

→ chỉ hiển thị tài liệu phù hợp.

---

# 📊 Statistics

Visitor statistics có thể được xử lý theo:

```text
Client
 ↓
Request
 ↓
Counter Service
 ↓
Response
 ↓
Number Formatting
 ↓
UI
```

### Lưu ý

Client-side counter phù hợp để hiển thị thống kê đơn giản, nhưng không nên được coi là hệ thống analytics bảo mật hoặc số liệu tuyệt đối.

Nếu cần hệ thống chuyên nghiệp hơn:

```text
Browser
 ↓
Analytics endpoint
 ↓
Event collector
 ↓
Database / Analytics engine
 ↓
Dashboard
```

---

# 💾 Client Storage

`localStorage` phù hợp với:

```text
Theme
Language
UI preference
Dismissed notification
Temporary state
```

Không lưu:

```text
❌ Password
❌ Private key
❌ Secret API key
❌ Credential
```

Flow:

```text
UI action
   ↓
setItem()
   ↓
Browser storage
   ↓
Next visit
   ↓
getItem()
   ↓
Restore state
```

---

# ✨ Page Transition

Module:

```text
chuyentrang.css
chuyentrang.js
```

Flow:

```text
Click internal link
        ↓
Check navigation type
        ↓
Apply leave class
        ↓
CSS animation
        ↓
Navigate
```

## Important UX rules

Không nên phá:

- Ctrl + Click.
- Middle click.
- Open in new tab.
- External links.
- Browser back/forward.
- Accessibility navigation.

---

# 🔐 Security

## Client-side reality

Toàn bộ frontend có thể được người dùng tải xuống.

Do đó:

> **Frontend không phải nơi để giữ bí mật.**

Không đưa vào JS:

```text
API secret
Database password
Private key
Admin credential
```

## Nếu có backend

Kiến trúc:

```text
Browser
   │
 HTTPS
   ▼
API
   │
   ├── Authentication
   ├── Authorization
   ├── Validation
   ├── Rate Limit
   ├── Logging
   └── Business Logic
   │
   ▼
Database
```

## Các rủi ro cần kiểm soát

```text
XSS
CSRF
Injection
Broken Access Control
Unsafe File Upload
Credential Exposure
Dependency Vulnerability
```

---

# 🔎 SEO

Checklist:

```text
<title>
<meta description>
Canonical
Open Graph
Structured Data
Semantic HTML
Image alt
Sitemap
Robots
HTTPS
```

## Structured Data

Nếu dùng JSON-LD:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "THCS Bình Thành"
}
</script>
```

Lợi ích:

```text
HTML
 ↓
Structured Metadata
 ↓
Search Engine
 ↓
Machine-readable information
```

---

# ⚡ Performance

Mục tiêu:

> **Fast Load + Small Payload + Efficient Rendering**

## Images

Ưu tiên:

```text
Original
   ↓
Resize
   ↓
Compress
   ↓
WebP / AVIF
   ↓
Lazy loading
```

## JavaScript

Script không cần blocking có thể dùng:

```html
<script defer src="script.js"></script>
```

## CSS

Kiểm soát:

- Duplicate selectors.
- Unused CSS.
- Excessive animations.
- Large external dependencies.

---

# 🗂️ Project Structure

Cấu trúc source hiện tại được chia theo page/module:

```text
c2thcsbinhthanh/
│
├── 🌐 index.html
├── 🎨 index.css
├── ⚡ index.js
│
├── 🏫 gioithieu.html
│
├── 📰 thongtin.html
├── 🎨 thongtin.css
│
├── 📢 thongbaolichhoc.html
├── 🎨 thongbaolichhoc.css
│
├── 📅 sukien.html
├── ⚡ sukien.js
│
├── 📚 tainguyen.html
├── ⚡ tainguyen.js
├── 🗄️ tainguyenserver.html
│
├── 🖼️ anh.html
├── 🎨 anh.css
│
├── 🖼️ anhkiniemdep.html
├── 🎨 anhkiniemdep.css
│
├── 💭 kiniem.html
├── 🎨 kiniem.css
│
├── 🏆 guongtot.html
├── 🎨 guongtot.css
│
├── ✉️ gopy.html
├── 🎨 gopy.css
├── ⚡ gopy.js
│
├── 💬 iconchatapp.html
├── 🎨 iconchatapp.css
├── ⚡ iconchatapp.js
│
├── ✨ chuyentrang.css
├── ⚡ chuyentrang.js
├── 🎨 baivietchung.css
│
├── 🖼️ Image assets
│
└── 🌐 CNAME
```

---

# 🧱 Code Architecture

## HTML

Responsibility:

```text
Structure
Content
Semantics
Accessibility
Metadata
```

## CSS

Responsibility:

```text
Layout
Color
Typography
Responsive
Animation
Theme
Components
```

## JavaScript

Responsibility:

```text
State
Events
DOM
Search
Filter
Statistics
Storage
Navigation
UI behavior
```

Nguyên tắc:

```text
HTML → What
CSS  → How it looks
JS   → How it behaves
```

---

# ▶️ Local Development

## Method 1 — Open directly

Mở:

```text
index.html
```

Phù hợp để kiểm tra cơ bản.

## Method 2 — Python HTTP Server

```bash
python -m http.server 8000
```

Sau đó:

```text
http://localhost:8000
```

## Vì sao HTTP server tốt hơn?

Một số API và asset behavior khác nhau giữa:

```text
file:///
```

và:

```text
http://localhost/
```

Local server giúp mô phỏng production tốt hơn.

---

# 🌍 Deployment

Có thể triển khai trên static hosting:

```text
GitHub Pages
Cloudflare Pages
Netlify
Vercel
InfinityFree
```

Không bắt buộc VPS cho frontend hiện tại.

## Production pipeline

```text
Developer
   ↓
Git
   ↓
Repository
   ↓
Validation
   ↓
Deploy
   ↓
CDN / Hosting
   ↓
User
```

---

# 🧪 Testing

## Functional

- [ ] Navigation.
- [ ] Search.
- [ ] Filter.
- [ ] Theme.
- [ ] Language.
- [ ] Events.
- [ ] Resources.
- [ ] Feedback.
- [ ] Chat.
- [ ] Statistics.
- [ ] Page transition.

## Responsive

Test tối thiểu:

```text
360px
390px
430px
768px
1024px
1280px
1440px+
```

## Browser

```text
Chrome
Edge
Firefox
Safari
```

## Accessibility

- [ ] Keyboard navigation.
- [ ] Visible focus.
- [ ] Sufficient contrast.
- [ ] Alt text.
- [ ] Semantic HTML.
- [ ] Accessible names.
- [ ] Reduced-motion consideration.

---

# 🛠️ Troubleshooting

## Trang trắng

```text
F12
 ↓
Console
 ↓
JavaScript error
```

## CSS không load

Kiểm tra:

```html
<link rel="stylesheet" href="...">
```

và đường dẫn file.

## JS không chạy

Kiểm tra:

```html
<script src="..."></script>
```

và Console.

## Ảnh lỗi

Kiểm tra:

```text
Filename
Path
Extension
Case sensitivity
```

## API lỗi

Mở:

```text
F12
 ↓
Network
 ↓
Request
 ↓
Status
 ↓
Response
```

Kiểm tra thêm:

```text
CORS
Internet
Endpoint
Rate limit
```

---

## Phase 1 — Foundation

- [x] Core pages
- [x] Navigation
- [x] Responsive
- [x] Information
- [x] Events
- [x] Resources
- [x] Gallery
- [x] Feedback

## Phase 2 — UX

- [x] Light mode
- [x] Dark mode
- [x] Search
- [x] Filter
- [x] Page transition
- [x] Mobile optimization

## Phase 3 — Content Platform

- [ ] CMS
- [ ] Admin dashboard
- [ ] News CRUD
- [ ] Event CRUD
- [ ] Resource CRUD
- [ ] Gallery management

## Phase 4 — Backend

- [ ] REST API
- [ ] Authentication
- [ ] RBAC
- [ ] Database
- [ ] Media storage
- [ ] Audit logs

## Phase 5 — Advanced

- [ ] PWA
- [ ] Offline mode
- [ ] Push notification
- [ ] Advanced search
- [ ] Analytics dashboard
- [ ] AI assistant
- [ ] Automated moderation
- [ ] Backup system

---

# 🤝 Git Workflow

Tạo branch:

```bash
git checkout -b feature/resource-filter
```

Stage:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: improve resource filtering"
```

Push:

```bash
git push origin feature/resource-filter
```

Sau đó:

```text
Pull Request
     ↓
Review
     ↓
Test
     ↓
Merge
```

---

# 📋 Commit Convention

```text
feat:      New feature
fix:       Bug fix
style:     UI / CSS
refactor:  Code restructuring
perf:      Performance
docs:      Documentation
test:      Tests
security:  Security
chore:     Maintenance
```

Ví dụ:

```text
feat: add grade resource filter
fix: repair mobile navigation
style: improve dark theme
perf: optimize gallery
security: validate feedback input
docs: update README
```

---

# 📈 Quality Checklist

## Code

- [ ] Không có Console error.
- [ ] Không có broken link.
- [ ] Không có missing asset.
- [ ] Không duplicate logic không cần thiết.
- [ ] Naming rõ ràng.
- [ ] Module có trách nhiệm riêng.

## UI

- [ ] Mobile không overflow.
- [ ] Desktop ổn định.
- [ ] Typography nhất quán.
- [ ] Contrast tốt.
- [ ] Interaction có feedback.

## Security

- [ ] Không commit secret.
- [ ] Validate input.
- [ ] Không tin client-side authorization.
- [ ] HTTPS production.
- [ ] Kiểm tra dependency.

## SEO

- [ ] Unique title.
- [ ] Meta description.
- [ ] Canonical.
- [ ] Structured data.
- [ ] Sitemap.
- [ ] Robots.
- [ ] Alt text.

## Performance

- [ ] Image optimization.
- [ ] Lazy loading.
- [ ] Defer non-critical JS.
- [ ] Giảm request.
- [ ] Kiểm tra Core Web Vitals.

---

# 🧭 Recommended Development Strategy

Khi dự án lớn dần, nên ưu tiên theo thứ tự:

```text
1. Stability
      ↓
2. UX
      ↓
3. Performance
      ↓
4. Security
      ↓
5. SEO
      ↓
6. CMS
      ↓
7. Backend
      ↓
8. AI / Advanced Platform
```

Không nên xây AI hoặc backend phức tạp trước khi nền frontend ổn định.

---

# 📊 Project Summary

```text
╔══════════════════════════════════════════════╗
║              THCS BÌNH THÀNH                ║
╠══════════════════════════════════════════════╣
║ Type         : School Digital Platform      ║
║ Architecture : Client-Side Static Web       ║
║ Frontend     : HTML / CSS / JavaScript      ║
║ Backend      : Not required currently       ║
║ Database     : Not required currently       ║
║ Responsive   : Yes                           ║
║ Theme        : Light / Dark                  ║
║ Language     : Vietnamese / English          ║
║ Modules      : Information / Education       ║
║                Events / Gallery / Community  ║
║ Deployment   : Static Hosting                ║
╚══════════════════════════════════════════════╝
```

---

# 🧠 Project Philosophy

## ⚡ Simple

Không sử dụng kiến trúc phức tạp khi chưa cần.

## 🚀 Fast

Ưu tiên xử lý phía client và tối ưu asset.

## 🔒 Privacy-Friendly

Hạn chế gửi dữ liệu không cần thiết lên server.

## 🧩 Modular

Mỗi module có trách nhiệm rõ ràng.

## 📈 Scalable

Thiết kế frontend để có thể nối backend về sau.

---

# 🧪 Technical Notes

## Static ≠ No JavaScript

Một website vẫn là static web application dù có:

```text
JavaScript
DOM manipulation
API calls
LocalStorage
Fetch
Animations
```

Điểm phân biệt chính nằm ở việc **nội dung/logic backend có cần server-side application riêng hay không**.

---

## Browser APIs

Frontend hiện đại có thể sử dụng:

```text
DOM API
File API
Fetch API
Clipboard API
Storage API
Blob API
URL API
```

Điều này cho phép xây dựng nhiều ứng dụng mạnh mà không cần backend cho mọi thao tác.

---

# ❤️ Made by ATCX

> **Build simple. Think deep. Create useful things.**

📝 **C2THCSBINHTHANH**

⚡ Lightweight.
🌐 Browser-based.
🔒 Client-side.
🚀 Built with Web Technologies.

---

# 📜 License

Bản quyền nội dung, hình ảnh, source code và thương hiệu thuộc chủ sở hữu dự án.

```text
© 2026 THCS Bình Thành / ATCX
All rights reserved.
```

---

# ❤️ Credits

<p align="center">
  <strong>THCS Bình Thành</strong>
</p>

<p align="center">
  Designed & Developed with HTML5, CSS3 and JavaScript.
</p>

<p align="center">
  <strong>Build the platform. Preserve the knowledge. Connect the school.</strong>
</p>

---

<p align="center">
  <strong>© 2026 THCS Bình Thành / ATCX</strong>
</p>

---
