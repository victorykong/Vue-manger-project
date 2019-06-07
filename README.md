``` bash 感谢您的使用！ ```
# Vue-manger-project
> 文件夹说明：mypro是该项目前端Vue打包前的所有源文件；api-server是后台源文件；dist是前端Vue经过打包后的文件，浏览起来更便捷


## 使用说明

> 使用 git clone 该项目后，您需要做以下几件事情，即可操作！

> 1.如果您只需要简单的浏览该项目，只需要在api-server目录下，根据package.json文件中的项目依赖项，打开命令行工具输入cnpm install，下载完成后，点击start.bat开启服务器；并在dist目录下打开命令行工具，输入http-server ./，开启本地服务器后，即可开始浏览项目

> 2.如果您需要操作源文件，建议您操作mypro文件夹，同样下载所有项目依赖项后，使用start.bat开启前端服务，即可开始操作该项目


## Update

``` bash
# 5.31

  1.使用vue-cli搭建项目结构
  
  2.使用element-ui组件搭建login页面结构
  
  3.使用element-uiForm组件完成验证规则以及表单验证，并且设置弹出提示框的样式
  
  4.全局封装一个axios的插件，为Vue构造器的原型中添加$http方法，为了Vue的实例们可以调用并发送axios请求
  
  5.完成登录成功后跳转到home首页，并对直接 '/' 的路由进行重定向，访问 '/' 会跳转到home页面

# 6.1 happy children day! ^0^
  
  1.使用token完成身份验证
  
  2.使用element-ui中提供的组件完成home.vue组件的头部导航、左侧侧边栏的结构搭建
  
  3.完成了在home.vue中，点击左侧侧边栏的各个选项，在右侧主体内容部分显示对应的组件
  
    3.1路由的嵌套：home.vue和login.vue属于App.vue的私有组件，同时也是路由；用户列表users.vue也是home.vue中的子组件，同时也是它的路由

  4.由于后台提供的api除了登录功能外，其它都需要在请求时，携带token令牌，通过授权才能访问
  
    4.1使用axios的get请求，并且在请求的同时设置请求头存放token，请求服务器，获得所有用户数据并将其渲染3
    
    4.2使用axios的post发送请求给服务器，完成用户的新增功能
    
# 6.3

  1.完成用户列表的增删改查
  
  2.完成用户状态的修改，但是发现即使当用户状态修改为启用时(绿色)，登录后台管理系统也会被拒绝，原因是因为：该用户并未被分配角色，也就代表的没有足够的权限
  
  3.在用户列表中完成分配角色，每个角色都对应着不同的权限，每级权限意味着访问页面时，所展示的信息会有差异，权限越高可访问可操作性越高
  
  4.使用请求拦截器interceptors完成axios除了在login路由之外统一设置请求头的操作
  
  5.使用ES7的语法，async & await 优化了所有代码因为异步操作-回调函数而阅读性不高的问题
  
  6.完成了rights.vue-权限管理 - 权限列表的所有数据渲染
  
  7.完成了roles.vue-权限管理 - 角色列表所有数据的渲染
  
    7.1使用element-ui中提供的table组件中的展开行 ">" ，使用三层循环嵌套的 row > col 关系完成以'list列表'显示权限结构图

  8.封装了 breadNav.vue 面包屑导航，并使用组件之间的传参 > 父传子接的方式完成各个组件中的面包屑导航
  
# 6.4
  
  1.完成roles.vue中权限管理 - 角色列表中的增删改查
  
  2.完成了角色列表的表格中首行 - 展开行'>'中权限结构标签中的 'x' 关闭按钮，动态修改当前角色的权限
  
  3.完成了点击权限分配按钮，给角色分配权限
    
    3.1使用el-tree树形控件渲染所有权限到分配框中
    
    3.2渲染当前角色对应的权限，将其选中
    
    3.3设置新的权限，在el-tree中获取最新的一级二级三级权限提交到服务器，并更新

  4.完成了根据不同的用户登录对应的角色，角色对应的权限，按照权限从高到低的原则动态生成左侧菜单栏 Aside.vue
  
  5.使用Vue路由中的导航守卫，给路由对象添加beforeEach方法，完成了可以除了/login 对登录页面的请求，其它的页面都统一进行身份验证
  
  6.完成categories.vue 商品管理 - 商品分类
    
    6.1使用element-tree-grid插件生成多级数据
    
    6.2针对数据的显示使用element-ui中的分页组件el-pagination

# 6.6

  1.完成了商品管理 - 商品列表 goods.vue
  
  2.在项目中使用sass(最新版本是scss) or less书写css样式
  
  3.完成了商品管理 - 商品列表 - 添加商品
    
    3.1使用element-ui中的steps步骤条 & tabs标签页 & 级联选择器
    
    3.2根据级联选择器中选中的商品分类，动态渲染tabs标签页中的 商品属性 和 商品参数
    
    3.3使用element-ui中的upload上传组件，完成添加商品图片到服务器的文件夹中进行存储
    
    3.4添加商品图片时，操作文件上传列表，进行删除和预览功能
    
    3.5使用富文本编辑器
    
    3.6完成添加商品的请求
  
  4.在vue中使用百度地图API
  
    4.1在webpack.base.conf.js项目配置文件中配置百度地图构造器 BMap

  5.在vue中使用echarts对服务器响应回来的数据进行图形化展示

# 6.7

  1.打包项目之前，进行了首屏优化
    
    1.1使用路由懒加载，减少第一次进入页面时对服务器的请求的文件数量
    
    1.2使用cdn加速，用来加载第三方包

  2.进行了打包项目的操作 npm run build - dist文件
  
  Loading...
```
