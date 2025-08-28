# 📖 Hướng dẫn sử dụng Overlay XoXo V2

Sau khi tải overlay về, trong thư mục sẽ có 5 file:

* `data.json`
* `fields.json`
* `index.html`
* `style.css`
* `script.js`

---

## 1. Tạo overlay mới trên StreamElements

1. Đăng ký / đăng nhập tài khoản tại [streamelements.com](https://streamelements.com).
2. Vào **Dashboard → Overlays → New Overlay**.
3. Ở mục **Overlay resolution**, chọn **1440p** rồi bấm **Start**.

---

## 2. Thêm Custom Widget

1. Trong màn hình overlay, bấm **Add Widget → Static/Custom → Custom Widget**.
2. Ở phần widget vừa thêm, chọn **Settings → Open Editor**.

---

## 3. Dán code overlay

Trong cửa sổ editor sẽ thấy 5 tab:

* **HTML**
* **CSS**
* **JS**
* **Fields**
* **Data**

Làm như sau:

* Tab **HTML** → copy nội dung `index.html` và dán vào.
* Tab **CSS** → copy nội dung `style.css` và dán vào.
* Tab **JS** → copy nội dung `script.js` và dán vào.
* Tab **Fields** → copy nội dung `fields.json` và dán vào.
* Tab **Data** → copy nội dung `data.json` và dán vào.

Sau đó bấm **Done**.

---

## 4. Position, size and style

* Ở phần Layers -> Position, size and style
* Điền Width 500px - Height 800px

---

## 5. Lưu & xuất overlay

1. Bấm **Save**.
2. Đặt tên overlay là **XoXo V2**.
3. Bấm **Preview** để kiểm tra.
4. Ở **Export Overlay** → copy đường link.

---

## 6. Thêm overlay vào phần mềm live

* Mở **OBS** hoặc **TikTok Live Studio**.
* Thêm **Browser Source** (trình duyệt) trong **OBS**, TikTok Live Studio là **Link**.
* Dán đường link overlay vừa copy.
* Chỉnh size khung hình cho khớp 1440p.

👉 Vậy là overlay đã hoạt động 🎉
