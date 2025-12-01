# 🎄 Giáng Sinh - Warm Night Christmas Card

Dự án thẻ chúc mừng Giáng Sinh tương tác được xây dựng bằng Flash (SWF) và được phát lại thông qua Ruffle Player - một trình phát Flash hiện đại cho trình duyệt web.

## 📋 Mô tả

Đây là một ứng dụng web hiển thị thẻ chúc mừng Giáng Sinh và Năm Mới dưới dạng Flash animation. Dự án sử dụng Ruffle Player để phát các file SWF trên trình duyệt hiện đại mà không cần cài đặt Adobe Flash Player.

## ✨ Tính năng

- 🎨 **Animation Flash**: Hiển thị animation Giáng Sinh đẹp mắt từ file SWF
- 🎵 **Nhạc nền**: Phát nhạc nền tự động (music.mp3)
- 🔧 **Tùy chỉnh động**: Cho phép tùy chỉnh nội dung thông qua query parameters
- 📱 **Responsive**: Tự động điều chỉnh kích thước theo màn hình
- 🔄 **Service Worker**: Sử dụng Service Worker để xử lý cấu hình động

## 🚀 Cách sử dụng

### Cài đặt và chạy

1. Clone hoặc tải xuống dự án
2. Mở file `index.html` trong trình duyệt web hiện đại
3. Thẻ chúc mừng sẽ tự động phát

### Tùy chỉnh nội dung

Bạn có thể tùy chỉnh nội dung thẻ chúc mừng bằng cách thêm các query parameters vào URL:

```
index.html?title=Tiêu đề&description=Mô tả&url=https://example.com&url_title=Link text
```

**Các tham số:**
- `title`: Tiêu đề chính (mặc định: "Dear partners!")
- `description`: Mô tả/nội dung chúc mừng (mặc định: "We wish you warm Christmas<br>and Happy New Year!<br>Be happy and keep smiling!")
- `url`: URL liên kết (mặc định: "")
- `url_title`: Văn bản hiển thị cho liên kết (mặc định: "")

**Ví dụ:**
```
index.html?title=Chúc mừng Giáng Sinh&description=Chúc bạn và gia đình một mùa Giáng Sinh an lành và năm mới hạnh phúc!&url=https://example.com&url_title=Visit our website
```

## 📁 Cấu trúc dự án

```
Warm Night Christmas Card/
├── index.html          # File HTML chính
├── index.swf           # File Flash animation
├── music.mp3           # File nhạc nền
├── swf-sw.js           # Service Worker xử lý cấu hình động
├── favicon.ico         # Icon trang web
└── Readme.md           # File mô tả dự án
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **JavaScript**: Logic xử lý và tích hợp Ruffle Player
- **Ruffle Player**: Trình phát Flash hiện đại (CDN: unpkg.com/@ruffle-rs/ruffle)
- **Service Worker**: Xử lý request và tạo cấu hình XML động
- **Flash (SWF)**: Animation chính của thẻ chúc mừng

## 📝 Chi tiết kỹ thuật

### Service Worker

Service Worker (`swf-sw.js`) được sử dụng để:
- Intercept các request đến file `config.xml`
- Tạo file XML cấu hình động dựa trên query parameters
- Cấu hình nhạc nền, nút mute, và nội dung text block

### Ruffle Player Configuration

```javascript
{
    autoplay: 'on',
    allowFullscreen: true,
    splashScreen: false,
    unmuteOverlay: 'hidden'
}
```

## 🌐 Yêu cầu trình duyệt

- Trình duyệt hiện đại hỗ trợ Service Worker
- Trình duyệt hỗ trợ JavaScript ES6+
- Kết nối internet (để tải Ruffle Player từ CDN)

## 📄 Giấy phép

Dự án này được tạo cho mục đích giáo dục và sử dụng cá nhân.

## 👨‍💻 Tác giả

Dự án được phát triển như một công cụ tạo thẻ chúc mừng Giáng Sinh tương tác.

---

**Lưu ý**: Dự án này sử dụng Ruffle Player để phát Flash content. Ruffle là một dự án mã nguồn mở nhằm mục đích bảo tồn và phát lại nội dung Flash trên web hiện đại.

-- Readme generate by Cursor --