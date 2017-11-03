<template>
  <div>
    <menu type="context" id="menu" v-if="me">
      <ul class="side-nav">
        <li>
          <div class="user-view">
            <img src="https://pt.gravatar.com/userimage/39013272/0bf8fded16e7a7c1bed675eb974a8027.jpeg" class="circle">
            <span>{{ me.user.name }}</span>
          </div>
        </li>
        <li><a href="#/"><i class="material-icons">home</i></a></li>
        <li><a href="#/email"><i class="material-icons">email</i></a></li>
        <li><a href="#/lists"><i class="material-icons">supervisor_account</i></a></li>
        <li><a href=""><i class="material-icons">lock</i></a></li>
        <li><a href=""><i class="material-icons">exit_to_app</i></a></li>
      </ul>
    </menu>
    <section id="page">
      <header id="header">
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="">temos 2 novos leads</a></li>
          <li><a href="">sua companha teve novos clicks</a></li>
        </ul>
        <nav class="row light-blue">
          <div class="nav-wrapper col s12">
            <a href="" class="brand-logo hide-on-med-and-down">Digital Marketing</a>
            <a href="" class="brand-logo hide-on-large-only">DM</a>
            <ul id="nav-mobile" class="right" v-if="me">
              <li><a href="" class="dropdown-button" data-activates="dropdown1">
                <i class="material-icons black-text">notifications_active</i>
              </a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main id="content">
        <section class="row">
          <div class="col s12">
            <router-view></router-view>
          </div>
        </section>
      </main>
      <footer id="footer" class="row grey lighten-3">
        <div class="col s12">
          <small>by Erik Figueiredo</small>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app',
  computed: {
    me () {
      return this.$store.state.user.me
    }
  },
  mounted () {
    $('.dropdown-button').dropdown({
      belowOrigin: true
    })
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

body {
  background-color: #fafafa !important;
}

#page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#footer {
  width: 100%;
  margin-bottom: 0;
}

main {
  flex: 1 0 auto;
}

#menu {
  text-align: center;
  padding: 0;
  margin: 0;
}

#menu .user-view .material-icons {
  display: block;
  font-size: 60px;
}

#menu .side-nav, #menu .side-nav li>a>i.material-icons {
  text-align: center;
  color: inherit;
}

#menu .side-nav li>a>i.material-icons {
  float: none;
  display: inline-block;
  margin: 0;
  font-size: 30px;
}

#menu .side-nav li>a {
  border: 1px solid #424242;
  margin-right: 4px;
  margin-bottom: 4px;
  color: #9e9e9e;
}

#menu .side-nav li>a:hover {
  color: #757575;
  background-color: #000
}

#menu .side-nav {
  transform: translateX(0);
  width: 150px;
  background-color: #212121;
  color: #9e9e9e;
}

#menu + #page {
  margin-left: 150px;
}

#dropdown1 {
  width: 200px !important;
}

</style>
