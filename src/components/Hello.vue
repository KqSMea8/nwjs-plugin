<template>
  <div class="layout">
    <Header>
      <i @click="winMini">缩小</i>
      <i @click="winBig">放大</i>
      <i @click="winClose">关闭</i>
      <i @click="winResize">调整size</i>
    </Header>
    <div v-if="viewMode == 'login'">
      需要登陆
    </div>
    <Layout v-else>
      <Sider hide-trigger>
        <Menu width="auto" theme="dark" active-name="1" @on-select="onselect">
          <MenuGroup title="内容管理">
            <MenuItem name="http://www.ice2018.com">
            <Icon type="md-document" />本地
            </MenuItem>
            <MenuItem name="https://www.icebear.me/academy/tiyanying.html">
            <Icon type="md-chatbubbles" />体验营
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="统计分析">
            <MenuItem name="http://ice2018.com/static/chrome_plugin/test.pdf">
            <Icon type="md-heart" />PDF
            </MenuItem>
            <MenuItem name="https://campus.jd.com/home">
            <Icon type="md-leaf" />京东
            </MenuItem>
            <MenuItem name="local">
            <Icon type="md-document" />本地
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div v-if="contentMode == 'web'" class="maixnWebview" style="width:100%; height:calc(100vh - 30px)">
            <webview id="mainWebview" partition="trusted" src="https://campus.jd.com/home" style=" height: calc(100vh - 30px);display:flex;"></webview>
          </div>
          <div v-else>
            123
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      webview: '',
      contentMode: 'web',
      viewMode: '',
      ismaxmize: false
    }
  },
  created() {

  },
  mounted() {
    // localStorage.love = 'luyao'
    let user = {name: 'vinette',id: '10123',token: '123123'}
    console.log(localStorage.love)
    user = JSON.stringify(user)
    //console.log(user)
    localStorage.user = user
    console.log(typeof(localStorage.user) == 'undefined')
    this.getDiskSerialNum()
    this.webview = document.getElementById('mainWebview')
    this.webview.addEventListener('contentload', this.contentload)
    console.log('localStorage.user ' + !localStorage.user)
    var gui = require('nw.gui');
    var win = gui.Window.get();
    if (typeof(localStorage.user) == 'undefined') {
      this.winResize()
      this.viewMode = 'login'
    } else {
      // win.resizeTo(1200, 860)
      win.setMinimumSize(1200, 860)
    }
    this.setTary()
  },
  methods: {
    onselect(e) {
      console.log(e)
      let _ = this
      if (e == 'local') {
        _.contentMode = 'local'
        return
      }
      _.contentMode = 'web'

      _.$nextTick(()=>{
        _.webview = document.getElementById('mainWebview')
        _.webview.src = e
      })
    },
    contentload() {
      console.log('contentload')
      // document.getElementById('mainWebview').showDevTools(true)
    },
    getDiskSerial(r) {
      var disCode = r[0].serialNum
      var text = ''
      if (!disCode) {
        text = 'Error'
      } else {
        text = disCode
      }
      console.log('机器码' + text)
    },
    getDiskSerialNum() {
      const si = require('systeminformation')
      si.diskLayout(this.getDiskSerial)
    },
    setNavMenu() {
      // 创建一个顶部菜单栏，类型为：menubar
      var menuBar = new nw.Menu({
        type: 'menubar'
      });

      //创建一个一级菜单项-文件
      var fileMenu = new nw.MenuItem({
        label: "文件",
      });

      //文件菜单的子菜单集合，类型为：contextmenu
      var fileMenuColl = new nw.Menu({ type: "contextmenu" });
      //设定一级菜单文件的子菜单
      fileMenu.submenu = fileMenuColl;


      // 创建一级菜单文件的子菜单：打开
      var openMenu = new nw.MenuItem({
        label: "打开",
        click: function() {
          console.log("打开");
        },
      });
      //将打开菜单项 添加入文件子菜单集合中
      fileMenuColl.append(openMenu);


      //创建一级菜单文件的子菜单：资源管理器
      var explorerMenu = new nw.MenuItem({
        label: "资源管理器",
        click: function() {
          console.log("资源管理器");
        },
      });
      fileMenuColl.append(explorerMenu);

      //最后将一级菜单项文件 添加入菜单栏
      menuBar.append(fileMenu);

      //设定窗体菜单栏
      nw.Window.get().menu = menuBar;
    },
    setTary() {
      var gui = require('nw.gui');
      var win = gui.Window.get();

      var tray = new gui.Tray({ title: 'halo', icon: 'static/logo.png' });
      tray.tooltip = '白熊求职';
      //添加一个菜单
      var menu = new gui.Menu();
      menu.append(new gui.MenuItem({ label: ' 退     出', icon: 'static/logo.png', }));
      menu.append(new gui.MenuItem({ label: '打开面板' }));
      tray.menu = menu;

      tray.on('click', function() {
        console.log('tray click')
        win.show();
      });
      win.on('close', function(event) {});
      tray.menu.items[0].click = function() {
        // win.hide();
        // tray.remove();
        // tray = null;
        // win.removeAllListeners('close');
        // gui.App.quit();
        // win.close(true);
        win.on('close', function() {
          this.hide(); // Pretend to be closed already
          console.log("We're closing...");
          this.close(true); // then close it forcely
        });

        win.close();
      };
      tray.menu.items[1].click = function() {
        win.show();
      };
    },
    winClose() {

      console.log('winClose')
      var gui = require('nw.gui');
      var win = gui.Window.get();
      win.hide()
      //  // win.close()
      //   win.on('close', function() {
      //   this.hide(); // Pretend to be closed already
      //   console.log("We're closing...");
      //   this.close(true); // then close it forcely
      // });

      // win.close();
    },
    winMini() {
      var gui = require('nw.gui');
      var win = gui.Window.get();
      win.on('minimize', function() {
        win.removeAllListeners('minimize');
      });
      win.minimize();
    },
    winBig() {

      var gui = require('nw.gui');
      var win = gui.Window.get();
      if (!this.ismaxmize) {
        this.ismaxmize = true
        win.on('maximize', function() {
          win.removeAllListeners('maximize');
        });
        win.maximize();
      } else {
        win.on('restore', function() {
          win.removeAllListeners('restore');
        });
        this.ismaxmize = false
        win.restore();
      }
    },
    winResize() {
      console.log('winResize')
      var gui = require('nw.gui');
      var win = gui.Window.get();
      win.resizeTo(300, 300)
    },
    unexpendApp() {
      var gui = require('nw.gui');
      var win = gui.Window.get();
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ivu-layout-header {
  height: 30px;
  line-height: 30px;
}

.layout {
  height: calc(100vh - 30px);
}

.ivu-layout {
  height: calc(100vh - 30px);
}

/*.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}*/

</style>
