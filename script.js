// ====================
// UTILITY MODULES
// ====================

/**
 * Configuration Manager - handles field data and CSS variables
 */
class ConfigManager {
  constructor() {
    this.fieldData = {};
    this.camelCaseRegex = /[A-Z]/g;
  }

  async loadFieldData(streamFields = null) {
    try {
      this.fieldData = streamFields || (await this.getFallbackFields());
    } catch (error) {
      console.error("Failed to load fieldData:", error);
      this.fieldData = {};
    }

    this.applyFields();
  }

  async getFallbackFields() {
    const response = await fetch("fields.json");
    return response.json();
  }

  getFieldValue(key, defaultValue) {
    try {
      const field = this.fieldData[key];
      if (field !== undefined) {
        return typeof field === "object" && "value" in field
          ? field.value
          : field;
      }
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  }

  applyFields() {
    if (!this.fieldData) return;

    Object.entries(this.fieldData).forEach(([key, field]) => {
      let value = field;
      let unit = null;

      if (field && typeof field === "object" && "value" in field) {
        value = field.value;
        unit = field.unit || null;
      }

      const cssVar = `--${key.replace(
        this.camelCaseRegex,
        (m) => `-${m.toLowerCase()}`
      )}`;

      if (typeof value === "number") {
        value = `${value}${unit || "px"}`;
      }

      if (value != null && value !== "") {
        document.documentElement.style.setProperty(cssVar, value);
      }
    });
  }
}

/**
 * Color Utility - handles color generation
 */
class ColorUtils {
  static getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  static getColorFromId(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00ffffff).toString(16).toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
  }
}

/**
 * Badge Configuration - centralized badge data
 */
class BadgeConfig {
  static gifterBadges = [
    {
      min: 50,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv50_v1.png~tplv-obj.image",
    },
    {
      min: 45,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv45_v1.png~tplv-obj.image",
    },
    {
      min: 40,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv40_v2.png~tplv-obj.image",
    },
    {
      min: 35,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv35_v3.png~tplv-obj.image",
    },
    {
      min: 30,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv30_v1.png~tplv-obj.image",
    },
    {
      min: 25,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv25_v1.png~tplv-obj.image",
    },
    {
      min: 20,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv20_v1.png~tplv-obj.image",
    },
    {
      min: 15,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv15_v2.png~tplv-obj.image",
    },
    {
      min: 10,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv10_v1.png~tplv-obj.image",
    },
    {
      min: 5,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv5_v1.png~tplv-obj.image",
    },
    {
      min: 1,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/grade_badge_icon_lite_lv0_v2.png~tplv-obj.image",
    },
  ];

  static teamBadges = [
    {
      min: 50,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/fans_badge_icon_lv50_v0.png~tplv-obj.image",
      text: "Ⅵ",
    },
    {
      min: 40,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/fans_badge_icon_lv40_v0.png~tplv-obj.image",
      text: "Ⅴ",
    },
    {
      min: 30,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/fans_badge_icon_lv30_v0.png~tplv-obj.image",
      text: "Ⅳ",
    },
    {
      min: 20,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/fans_badge_icon_lv20_v0.png~tplv-obj.image",
      text: "Ⅲ",
    },
    {
      min: 10,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/fans_badge_icon_lv10_v0.png~tplv-obj.image",
      text: "Ⅱ",
    },
    {
      min: 1,
      src: "https://p16-webcast.tiktokcdn.com/webcast-va/fans_badge_icon_lv1_v0.png~tplv-obj.image",
      text: "Ⅰ",
    },
  ];

  static getBadge(badges, level) {
    return badges.find((badge) => level >= badge.min) || badges.at(-1);
  }
}

// ====================
// COMPONENT CLASSES
// ====================

/**
 * Base Message Component
 */
class BaseMessage {
  constructor(data) {
    this.data = data;
    this.element = null;
  }

  createElement() {
    throw new Error("createElement must be implemented by subclass");
  }

  createSafeImage(src, className = "comment__avatar", alt = "avatar") {
    const wrapper = document.createElement("div");
    wrapper.className = `${className}-wrapper`;

    const img = document.createElement("img");
    img.className = className;
    img.src = src;
    img.alt = alt;
    img.onerror = () => {
      img.src = "https://placehold.co/50x50";
    };

    wrapper.appendChild(img);
    return wrapper;
  }
}

/**
 * User Element Builder - handles user badges and nickname
 */
class UserElementBuilder {
  constructor(data) {
    this.data = data;
  }

  build() {
    const name = document.createElement("div");
    name.className = "comment__user";

    this.addNickname(name);
    this.addGifterBadge(name);
    this.addTeamMemberBadge(name);
    this.addTopGifterBadge(name);
    this.addModeratorBadge(name);

    return name;
  }

  addNickname(container) {
    const nicknameSpan = document.createElement("span");
    nicknameSpan.className = "comment__nickname";
    nicknameSpan.textContent = this.data.user;
    container.appendChild(nicknameSpan);
  }

  addGifterBadge(container) {
    if (this.data.gifterLevel <= 0) return;

    const gifterGroup = document.createElement("div");
    gifterGroup.className = "gifter-group";

    const badge = BadgeConfig.getBadge(
      BadgeConfig.gifterBadges,
      this.data.gifterLevel
    );

    const gifterIcon = document.createElement("img");
    gifterIcon.className = "gifter-icon";
    gifterIcon.src = badge.src;
    gifterIcon.alt = `LV${this.data.gifterLevel}`;

    const gifterText = document.createElement("span");
    gifterText.className = "gifter-text";
    gifterText.textContent = `${this.data.gifterLevel}`;

    gifterGroup.append(gifterIcon, gifterText);
    container.appendChild(gifterGroup);
  }

  addTeamMemberBadge(container) {
    const teamLevel = this.data.teamMemberLevel || 0;
    if (teamLevel < 1) return;

    const followDiv = document.createElement("div");
    followDiv.className = "follow-badge";

    const badge = BadgeConfig.getBadge(BadgeConfig.teamBadges, teamLevel);

    const followIcon = document.createElement("img");
    followIcon.className = "follow-icon";
    followIcon.src = badge.src;

    const followText = document.createElement("span");
    followText.className = "follow-text";
    followText.textContent = badge.text;

    followDiv.append(followIcon, followText);
    container.appendChild(followDiv);
  }

  addTopGifterBadge(container) {
    if (![1, 2, 3].includes(this.data.topGifterRank)) return;

    const topGifterDiv = document.createElement("div");
    topGifterDiv.className = "top-gifter";

    const topIcon = document.createElement("img");
    topIcon.className = "top-icon";
    topIcon.src =
      "https://p16-webcast.tiktokcdn.com/webcast-sg/new_top_gifter_version_2.png~tplv-obj.image";
    topIcon.alt = "Top Gifter";

    const rankSpan = document.createElement("span");
    rankSpan.className = "top-rank";
    rankSpan.textContent = `#${this.data.topGifterRank}`;

    topGifterDiv.append(topIcon, rankSpan);
    container.appendChild(topGifterDiv);
  }

  addModeratorBadge(container) {
    if (!this.data.isModerator) return;

    const modWrapper = document.createElement("div");
    modWrapper.className = "mod-wrapper";

    const modIcon = document.createElement("img");
    modIcon.className = "mod-icon";
    modIcon.src =
      "https://p16-webcast.tiktokcdn.com/webcast-va/moderater_badge_icon.png~tplv-obj.image";
    modIcon.alt = "Moderator";

    modWrapper.appendChild(modIcon);
    container.appendChild(modWrapper);
  }
}

/**
 * Chat Message Component
 */
class ChatMessage extends BaseMessage {
  createElement() {
    const div = document.createElement("div");
    div.className = "message comment";

    if (this.data.isModerator) div.classList.add("moderator-msg");
    if (this.data.uniqueId === "nguyennhatlinh.official")
      div.classList.add("special-user");

    if (ChatWidget.instance.config.showAvatar) {
      const avatar = this.createSafeImage(this.data.avatar);
      div.appendChild(avatar);
    }

    const content = document.createElement("div");
    content.className = "comment__content";

    const userBuilder = new UserElementBuilder(this.data);
    const name = userBuilder.build();

    const text = document.createElement("span");
    text.className = "comment__text";
    text.textContent = this.data.comment;

    content.append(name, text);
    div.append(content);

    this.element = div;
    return div;
  }
}

/**
 * Gift Message Component
 */
class GiftMessage extends BaseMessage {
  createElement() {
    const div = document.createElement("div");
    div.className = "message gift";

    const head = document.createElement("div");
    head.className = "gift-head";
    head.textContent = "New gift";

    const content = document.createElement("div");
    content.className = "gift-content";

    const icon = document.createElement("img");
    icon.src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJvc2UtaWNvbiBsdWNpZGUtcm9zZSI+PHBhdGggZD0iTTE3IDEwaC0xYTQgNCAwIDEgMSA0LTR2LjUzNCIvPjxwYXRoIGQ9Ik0xNyA2aDFhNCA0IDAgMCAxIDEuNDIgNy43NGwtMi4yOS44N2E2IDYgMCAwIDEtNS4zMzktMTAuNjhsMi4wNjktMS4zMSIvPjxwYXRoIGQ9Ik00LjUgMTdjMi44LS41IDQuNCAwIDUuNS44czEuOCAyLjIgMi4zIDMuN2MtMiAuNC0zLjUuNC00LjgtLjMtMS4yLS42LTIuMy0xLjktMy00LjIiLz48cGF0aCBkPSJNOS43NyAxMkM0IDE1IDIgMjIgMiAyMiIvPjxjaXJjbGUgY3g9IjE3IiBjeT0iOCIgcj0iMiIvPjwvc3ZnPg==";
    icon.alt = "Gift Icon";
    icon.className = "gift-icon";

    const text = document.createElement("span");
    text.className = "gift-text";
    text.textContent = ` Cảm ơn ${this.data.user} đã tặng ${this.data.repeatCount}x${this.data.giftName}!`;

    content.append(icon, text);
    div.append(head, content);

    this.element = div;
    return div;
  }
}

/**
 * Follow Message Component
 */
class FollowMessage extends BaseMessage {
  createElement() {
    const div = document.createElement("div");
    div.className = "message follow";

    const content = document.createElement("div");
    content.className = "follow__content";

    const icon = document.createElement("img");
    icon.src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQtcGx1cy1pY29uIGx1Y2lkZS11c2VyLXJvdW5kLXBsdXMiPjxwYXRoIGQ9Ik0yIDIxYTggOCAwIDAgMSAxMy4yOTItNiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0xOSAxNnY2Ii8+PHBhdGggZD0iTTIyIDE5aC02Ii8+PC9zdmc+";
    icon.alt = "Follow Icon";
    icon.className = "follow__icon";

    const text = document.createElement("span");
    text.className = "follow__text";
    text.textContent = `${this.data.user} đã follow!`;

    content.append(icon, text);
    div.append(content);

    this.element = div;
    return div;
  }
}

/**
 * Message Factory - creates appropriate message instances
 */
class MessageFactory {
  static create(type, data) {
    const messageTypes = {
      chat: ChatMessage,
      gift: GiftMessage,
      follow: FollowMessage,
    };

    const MessageClass = messageTypes[type];
    if (!MessageClass) {
      throw new Error(`Unknown message type: ${type}`);
    }

    return new MessageClass(data);
  }
}

// ====================
// CORE SYSTEM CLASSES
// ====================

/**
 * Event Queue Manager - handles event processing
 */
class EventQueueManager {
  constructor(chatWidget) {
    this.chatWidget = chatWidget;
    this.eventQueue = [];
    this.isProcessing = false;
  }

  push(type, data) {
    this.eventQueue.push({ type, data });
    this.processQueue();
  }

  processQueue() {
    if (this.isProcessing || this.eventQueue.length === 0) return;

    this.isProcessing = true;
    const { type, data } = this.eventQueue.shift();

    try {
      const message = MessageFactory.create(type, data);
      const element = message.createElement();

      this.chatWidget.container.appendChild(element);
      this.chatWidget.scrollToBottom();

      this.animateIn(element, () => {
        if (type === "chat") this.chatWidget.trimMessages();
        this.isProcessing = false;
        this.processQueue();
      });
    } catch (error) {
      console.error("Error processing event:", error);
      this.isProcessing = false;
      this.processQueue();
    }
  }

  animateIn(element, callback) {
    requestAnimationFrame(() => {
      element.classList.add("show");
      setTimeout(() => {
        if (typeof callback === "function") callback();
      }, 600);
    });
  }
}

/**
 * WebSocket Connection Manager
 */
class WebSocketManager {
  constructor(chatWidget) {
    this.chatWidget = chatWidget;
    this.websocket = null;
    this.url = "ws://localhost:21213/";
    this.reconnectDelay = 1000;
  }

  connect() {
    if (this.websocket) return;

    this.websocket = new WebSocket(this.url);

    this.websocket.onopen = () => this.onOpen();
    this.websocket.onclose = () => this.onClose();
    this.websocket.onerror = () => this.onError();
    this.websocket.onmessage = (event) => this.onMessage(event);
  }

  disconnect() {
    if (this.websocket) {
      this.websocket.close();
      this.websocket = null;
    }
  }

  onOpen() {
    const statusEl = document.getElementById("status");
    if (statusEl) {
      const icon = document.createElement("i");
      icon.className = "fa-solid fa-globe";
      icon.style.color = "#ffffff";
      statusEl.innerHTML = "Connected ";
      statusEl.prepend(icon);
    }
  }

  onClose() {
    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.innerHTML = "Disconnected";

    this.websocket = null;
    setTimeout(() => this.connect(), this.reconnectDelay);
  }

  onError() {
    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.innerHTML = "Connection Failed";

    this.websocket = null;
    setTimeout(() => this.connect(), this.reconnectDelay);
  }

  onMessage(event) {
    try {
      const parsed = JSON.parse(event.data);
      this.handleParsedMessage(parsed);
    } catch (error) {
      console.error("Invalid JSON", error);
    }
  }

  handleParsedMessage(parsed) {
    const eventHandlers = {
      chat: (data) => ({
        uniqueId: data.uniqueId,
        user: data.nickname,
        comment: data.comment,
        avatar: data.profilePictureUrl,
        gifterLevel: data.gifterLevel || 0,
        isModerator: data.isModerator || false,
        topGifterRank: data.topGifterRank || 0,
        teamMemberLevel: data.teamMemberLevel || 0,
      }),
      gift: (data) => ({
        user: data.nickname,
        avatar: data.profilePictureUrl,
        giftName: data.giftName,
        repeatCount: data.repeatCount,
      }),
      follow: (data) => ({
        user: data.nickname,
        avatar: data.profilePictureUrl,
      }),
    };

    const handler = eventHandlers[parsed.event];
    if (handler && parsed.data) {
      const processedData = handler(parsed.data);
      this.chatWidget.eventQueue.push(parsed.event, processedData);
    }
  }
}

/**
 * Fake Event Generator - for testing purposes
 */
class FakeEventGenerator {
  constructor(eventQueue) {
    this.eventQueue = eventQueue;
  }

  sendFakeComment() {
    this.eventQueue.push("chat", {
      uniqueId: "testuser123",
      user: "Tester",
      comment: "This is a fake comment!",
      avatar: "https://placehold.co/50x50",
      gifterLevel: 10,
      isModerator: true,
      topGifterRank: 1,
      teamMemberLevel: 2,
    });
  }

  sendFakeGift() {
    this.eventQueue.push("gift", {
      user: "Donator123",
      avatar: "https://placehold.co/50x50",
      giftName: "Rose",
      repeatCount: 3,
    });
  }

  sendFakeFollow() {
    this.eventQueue.push("follow", {
      user: "NewFollower",
      avatar: "https://placehold.co/50x50",
    });
  }
}

// ====================
// MAIN WIDGET CLASS
// ====================

/**
 * Main Chat Widget Controller
 */
class ChatWidget {
  static instance = null;

  constructor(containerId = "container") {
    if (ChatWidget.instance) {
      return ChatWidget.instance;
    }

    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error(`Container element with id "${containerId}" not found`);
    }

    this.configManager = new ConfigManager();
    this.eventQueue = new EventQueueManager(this);
    this.websocketManager = new WebSocketManager(this);
    this.fakeEventGenerator = new FakeEventGenerator(this.eventQueue);

    this.config = {
      maxMsgCount: 10,
      lineHeight: 130,
      showAvatar: false,
    };

    this.initialize();
    ChatWidget.instance = this;
  }

  async initialize() {
    this.setupEventListeners();
    await this.loadConfiguration();
    this.websocketManager.connect();
  }

  setupEventListeners() {
    window.addEventListener("resize", () => this.updateMaxMsgCount());

    window.addEventListener("onWidgetLoad", (obj) => {
      this.loadConfiguration(obj?.detail?.fieldData);
    });

    window.addEventListener("onEventReceived", (obj) => {
      this.handleWidgetButton(obj);
    });
  }

  async loadConfiguration(streamFields = null) {
    await this.configManager.loadFieldData(streamFields);

    this.config.maxMsgCount = this.configManager.getFieldValue(
      "maxMessages",
      10
    );
    this.config.lineHeight = this.configManager.getFieldValue("lineHeight", 90);
    this.config.showAvatar = this.configManager.getFieldValue(
      "showAvatar",
      false
    );

    this.updateMaxMsgCount();
  }

  handleWidgetButton(obj) {
    const { listener, field } = obj.detail.event;
    if (listener !== "widget-button") return;

    const actions = {
      fakeCommentButton: () => this.fakeEventGenerator.sendFakeComment(),
      fakeGiftButton: () => this.fakeEventGenerator.sendFakeGift(),
      fakeFollowButton: () => this.fakeEventGenerator.sendFakeFollow(),
    };

    const action = actions[field];
    if (action) action();
  }

  updateMaxMsgCount() {
    const chatHeight = this.container.clientHeight;
    this.config.maxMsgCount = Math.floor(chatHeight / this.config.lineHeight);
  }

  scrollToBottom() {
    if (typeof $ !== "undefined") {
      const target = this.container.scrollHeight - this.container.clientHeight;
      $(this.container).stop().animate({ scrollTop: target }, 600);
    } else {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

  trimMessages() {
    const maxAllowed = this.config.maxMsgCount + 20;
    if (this.container.children.length <= maxAllowed) return;

    const scrollBottom = this.container.scrollHeight - this.container.scrollTop;

    while (this.container.children.length > maxAllowed) {
      this.container.removeChild(this.container.firstChild);
    }

    this.container.scrollTop = this.container.scrollHeight - scrollBottom;
  }

  destroy() {
    this.websocketManager.disconnect();
    window.removeEventListener("resize", () => this.updateMaxMsgCount());
    ChatWidget.instance = null;
  }
}

// ====================
// INITIALIZATION
// ====================

// Initialize when running inside StreamElements or fallback for offline testing
if (typeof window.streamElements === "undefined") {
  // Offline mode - initialize immediately
  document.addEventListener("DOMContentLoaded", () => {
    try {
      new ChatWidget();
    } catch (error) {
      console.error("Failed to initialize ChatWidget:", error);
    }
  });
} else {
  // StreamElements mode - wait for widget load event
  new ChatWidget();
}

// Export for external access if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ChatWidget, MessageFactory, ColorUtils };
}
