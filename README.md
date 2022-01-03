# Vue 3 + Typescript + Vite 管理系统脚手架（不考虑兼容都是最新的工具）

# 项目目录
### 1. 项目目录
- 除src，其他基本都是标准的
- src/layout 页面布局（左右，上下，的一些布局结构）
- src/router 路由的一些配置 autoload 自动注册路由
- src/views 页面文件，里面分别有页面布局的文件夹对应layout
- src/main.ts 项目入口
- vite 相关配置文件夹

### 2. 添加页面时注意:
1. 首先看你需要什么结构的页面: 
	- layout文件中创建页面结构 如admin.vue
	- views创建对应结构的文件夹 如admin/
	- https://ibb.co/TMMW6v5
	- 然后直接访问对应布局内容 /admin.user

### 3. 满足自定义路由
- 在.vue文件中导入需要定义的路由路径
```javascript

```