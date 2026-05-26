const app = getApp();

Page({
  data: {
    gameUrl: app.globalData.gameUrl
  },

  onLoad() {
    console.log('页面加载，游戏地址:', this.data.gameUrl);
  },

  onWebLoad(e) {
    console.log('游戏加载完成', e.detail);
  },

  onWebError(e) {
    console.error('游戏加载失败', e.detail);
    wx.showToast({
      title: '游戏加载失败，请检查网络',
      icon: 'none',
      duration: 2000
    });
  },

  // 接收游戏内发送的消息（如分享）
  onMessage(e) {
    console.log('收到游戏消息:', e.detail);
  }
});
