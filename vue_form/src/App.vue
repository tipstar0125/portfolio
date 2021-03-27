<template>
  <div id="app">
    <transition name="router-transition">
      <router-view/>
    </transition>
  </div>
</template>

<style>
@import "./css/style.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #17a2b8;
}

.router-transition-enter {
  opacity: 0;
}

.router-transition-enter-active {
  transition: 0.5s;
}

</style>
