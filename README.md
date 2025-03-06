# 播客App原型

这是一个类似小宇宙的播客App高保真原型设计，使用HTML、Tailwind CSS和FontAwesome图标库实现。

## 原型预览

原型包含以下页面：

- **首页/发现页** (home.html)：展示推荐内容、热门播客
- **订阅页** (subscription.html)：展示用户已订阅的播客
- **播放器页面** (player.html)：全屏播放控制界面
- **播客详情页** (podcast_detail.html)：展示特定播客的信息和剧集列表
- **搜索页面** (search.html)：搜索播客和剧集
- **个人中心** (profile.html)：用户信息和设置

## 如何使用

1. 打开 `index.html` 文件，可以看到所有页面的预览，每个页面都嵌入在模拟iPhone尺寸的框架中。

2. 点击各个页面内的元素可以体验部分交互效果：
   - 搜索页面：在搜索框输入"科技"会显示搜索结果
   - 底部导航栏：点击可以切换激活状态
   - 迷你播放器：点击可以查看控制台信息

3. 每个页面都设计了iOS风格的状态栏和底部导航栏，提供真实的移动应用体验。

## 技术栈

- HTML5
- Tailwind CSS (用于样式)
- FontAwesome (用于图标)
- 原生JavaScript (用于简单交互)
- 本地图片 (用于显示UI元素)

## 设计特点

1. **真实的iOS风格**：包含iOS状态栏、导航栏和界面元素。
2. **高保真UI组件**：使用现代化UI组件，如卡片、列表、按钮等。
3. **响应式设计**：适配iPhone 15 Pro尺寸。
4. **交互体验**：实现了基本的点击和搜索交互。
5. **离线可用**：使用本地图片资源，不依赖网络连接。

## 文件结构

```
podcast_app/
├── index.html             # 主入口，展示所有页面
├── home.html              # 首页/发现页
├── subscription.html      # 订阅页
├── player.html            # 播放器页面
├── podcast_detail.html    # 播客详情页
├── search.html            # 搜索页面
├── profile.html           # 个人中心
├── css/
│   └── common.css         # 共享样式
├── js/
│   └── common.js          # 共享脚本
├── images/                # 本地图片资源
│   ├── podcast1.jpg       # 播客封面图片1
│   ├── podcast2.jpg       # 播客封面图片2
│   ├── podcast3.jpg       # 播客封面图片3
│   ├── podcast4.jpg       # 播客封面图片4
│   └── profile.jpg        # 用户头像
└── README.md              # 说明文档
```

## 开发者注意事项

- 原型主要展示UI设计，大部分功能按钮仅有视觉效果，没有完整实现后端功能。
- 使用modern浏览器打开，以确保所有CSS特性正常工作。
- 所有图片都使用本地文件，无需网络连接即可正常显示。
- 可以在此原型基础上进行真实App的开发，通过集成前端框架和后端API实现完整功能。 