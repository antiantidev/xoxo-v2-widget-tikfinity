# 📖 Hướng dẫn sử dụng Overlay XoXo V2

Tải XoXo V2 phiên bản mới nhất tại đây: [Tags · antiantidev/xoxo-v2-widget-tikfinity](https://github.com/antiantidev/xoxo-v2-widget-tikfinity/tags)

![image.png](https://chokernguyen.notion.site/image/attachment%3A42dab72a-3c96-4797-9c2e-cc8dcf2bdcaa%3Aimage.png?table=block&id=25da4302-065a-80de-9d16-e0d0ca66ef47&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

![image.png](https://chokernguyen.notion.site/image/attachment%3A79bddd1e-6047-42df-9a54-1851d13daf26%3Aimage.png?table=block&id=25da4302-065a-8000-89b3-f594e4de5c11&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

Sau khi tải overlay về, trong thư mục sẽ có 5 file:

- `data.json`
- `fields.json`
- `index.html`
- `style.css`
- `script.js`

## 1. Tạo overlay mới trên StreamElements

1. Đăng ký / đăng nhập tài khoản tại [streamelements.com](https://streamelements.com/).
2. Vào **Dashboard → Overlays → New Overlay**.

![image.png](https://chokernguyen.notion.site/image/attachment%3A8925ac62-65e7-49fe-800d-f4548f29f948%3Aimage.png?table=block&id=25da4302-065a-8061-b8eb-f40579d92f04&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

![image.png](https://chokernguyen.notion.site/image/attachment%3Ad204ea70-4b0f-404f-8948-846e1827826e%3Aimage.png?table=block&id=25da4302-065a-8075-b12f-ea22faa893ee&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

1. Ở mục **Overlay resolution**, chọn **1440p** rồi bấm **Start**.

![image.png](https://chokernguyen.notion.site/image/attachment%3Ab172434c-3a51-4f7c-ac0c-36b70b97d70b%3Aimage.png?table=block&id=25da4302-065a-80f7-8453-da330ae3a8b4&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

---

## 2. Thêm Custom Widget

1. Trong màn hình overlay, bấm **Add Widget → Static/Custom → Custom Widget**.

![image.png](https://chokernguyen.notion.site/image/attachment%3A6e0c964b-56a1-4d17-a26e-eb6dbded980f%3Aimage.png?table=block&id=25da4302-065a-8067-affa-d260d87b971f&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

![image.png](https://chokernguyen.notion.site/image/attachment%3Abed4e0c1-cd81-456e-af91-921c2584c0f4%3Aimage.png?table=block&id=25da4302-065a-8001-b0e6-e95e0f329d2c&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

1. Ở phần widget vừa thêm, chọn **Settings → Open Editor**.

![image.png](https://chokernguyen.notion.site/image/attachment%3Ab39ae969-4f5e-424a-b6fd-47aebc29f2ba%3Aimage.png?table=block&id=25da4302-065a-8065-b90c-fd6b17d5bd0c&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

---

## 3. Dán code overlay

Trong cửa sổ editor sẽ thấy 5 tab:

- **HTML**
- **CSS**
- **JS**
- **Fields**
- **Data**

![image.png](https://chokernguyen.notion.site/image/attachment%3Aebe146af-f218-403b-816c-7c3d4cb90dd0%3Aimage.png?table=block&id=25da4302-065a-80d2-8299-f7c461e35745&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

Làm như sau:

- Tab **HTML** → copy nội dung `index.html` và dán vào.
- Tab **CSS** → copy nội dung `style.css` và dán vào.
- Tab **JS** → copy nội dung `script.js` và dán vào.
- Tab **Fields** → copy nội dung `fields.json` và dán vào.
- Tab **Data** → copy nội dung `data.json` và dán vào.

Sau đó bấm **Done**.

![image.png](https://chokernguyen.notion.site/image/attachment%3A8a170c64-3acc-4e7a-8a85-5714cfcb0bcc%3Aimage.png?table=block&id=25da4302-065a-807c-9955-e75297c7b12c&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

---

## 4. Cài đặt kích thước overlay

- Ở phần Layers -> Position, size and style

![image.png](https://chokernguyen.notion.site/image/attachment%3A8ae02957-438a-49f1-990d-72ed4d4df357%3Aimage.png?table=block&id=25da4302-065a-8077-b65a-c7836f087841&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

- Điền Width 500px - Height 800px

![image.png](https://chokernguyen.notion.site/image/attachment%3A8ccb3608-17d3-4642-b9cb-c805a7faf0fc%3Aimage.png?table=block&id=25da4302-065a-809d-b29a-e6840668ab07&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

---

## 5. Lưu & xuất overlay

1. Bấm **Save**.

![image.png](https://chokernguyen.notion.site/image/attachment%3A4c0467b2-0ea0-42dc-968f-a3d9ea730aa0%3Aimage.png?table=block&id=25da4302-065a-8015-bba3-cdc8e27b9ea2&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

1. Đặt tên overlay là **XoXo V2**.

![image.png](https://chokernguyen.notion.site/image/attachment%3Ac3707c01-f72e-4a56-a060-a37f841cf083%3Aimage.png?table=block&id=25da4302-065a-8017-bc1e-db5dfeafd491&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

1. Bấm **Preview** để kiểm tra.

![image.png](https://chokernguyen.notion.site/image/attachment%3A6592ad82-7665-47f3-b1aa-6bc93a863fd0%3Aimage.png?table=block&id=25da4302-065a-8021-a02c-e4c244241003&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

1. Ở **Export Overlay** → copy đường link.

![image.png](https://chokernguyen.notion.site/image/attachment%3Ac16e73b8-3915-4800-90d3-3e127c8c2c3d%3Aimage.png?table=block&id=25da4302-065a-8006-af25-e92cb2a40f4c&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

---

## 6. Thêm overlay vào phần mềm live

- Mở **OBS** hoặc **TikTok Live Studio**.
- Thêm **Browser Source** (trình duyệt) trong **OBS**, TikTok Live Studio là **Link**.

**OBS**

![image.png](https://chokernguyen.notion.site/image/attachment%3A68bf0fa6-cbf2-49f7-a1d3-a77d7dd65293%3Aimage.png?table=block&id=25da4302-065a-805d-823b-c214fff4f9e9&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

**TikTok Live Studio**

![image.png](https://chokernguyen.notion.site/image/attachment%3A82db5143-1f77-47d8-ba30-7a75848e0e08%3Aimage.png?table=block&id=25da4302-065a-8030-9bf9-cdf2f2791feb&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

- Dán đường link overlay vừa copy.

**OBS**

![image.png](https://chokernguyen.notion.site/image/attachment%3Acb78e959-d917-4410-a078-809fb6e07de0%3Aimage.png?table=block&id=25da4302-065a-80f7-ac8a-f0dcc597d461&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

**TikTok Live Studio**

![image.png](https://chokernguyen.notion.site/image/attachment%3Aa5cf6c56-4a45-4267-8de0-99136d29daef%3Aimage.png?table=block&id=25da4302-065a-801e-82ca-e993e95feaa3&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

![image.png](https://chokernguyen.notion.site/image/attachment%3Aae789fb3-fc87-4e3b-8c9a-d88e81916ea2%3Aimage.png?table=block&id=25da4302-065a-8078-994a-c1cf4823ef97&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

![image.png](https://chokernguyen.notion.site/image/attachment%3A324c34af-4dfb-41f1-97d6-3af4678cc827%3Aimage.png?table=block&id=25da4302-065a-8064-a940-d202606d988c&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

- Bấm OK là xong

## 7. Custom màu cho widget

- Bấm Settings

![image.png](https://chokernguyen.notion.site/image/attachment%3A27f9bffb-a875-499d-897b-3725ab1e4ff4%3Aimage.png?table=block&id=25da4302-065a-8060-921e-ef373af9d285&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

- Sẽ có 8 tab để các bạn thích tùy chỉnh lại màu cho overlay ví dụ mình muốn đổi màu cho khung tên thì mình sẽ chọn Comment Settings → Comment User Background

![image.png](https://chokernguyen.notion.site/image/attachment%3Adcc30420-6e37-4d34-93df-de2fe37adb44%3Aimage.png?table=block&id=25da4302-065a-805a-a215-ea933c352f8a&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

![image.png](https://chokernguyen.notion.site/image/attachment%3A3c10040d-f283-49ba-9554-7e2f4bb7c4e6%3Aimage.png?table=block&id=25da4302-065a-8090-8921-da3d1f3926d6&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

- Thì lúc này nền của User sẽ được thay đổi

![image.png](https://chokernguyen.notion.site/image/attachment%3Abd334ff4-2831-42f3-b516-db3fe9c19420%3Aimage.png?table=block&id=25da4302-065a-8008-beb6-c2237d1b57be&spaceId=9d0a4302-065a-8103-b24e-0003ba7cc8f2&width=1420&userId=&cache=v2)

- Và bấm **SAVE** lại là xong, overlay trong **OBS** và **TikTok Live Studio** sẽ được auto update nên không cần thay đổi link
