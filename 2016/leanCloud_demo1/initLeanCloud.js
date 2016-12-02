// LeanCloud - 初始化 - 将这里的 APP_ID 和 APP_KEY 替换成自己的应用数据
// https://leancloud.cn/docs/sdk_setup-js.html#初始化
var APP_ID = 'cC6HAdtaDMQ4eEtxfGlroj4h-gzGzoHsz';

// 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
var APP_KEY = 'YsRG5FdBI4g7ukl9PXaDr1k0';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
