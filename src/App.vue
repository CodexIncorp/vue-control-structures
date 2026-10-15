<script setup></script>

<template>
  <header class="header">
    <nav class="menu">
      <router-link to="/">Inicio</router-link>
      <router-link to="/v-if">v-if</router-link>
      <router-link to="/v-show">v-show</router-link>
      <router-link to="/v-for">v-for</router-link>
      <router-link to="/v-bind-key">v-bind:key</router-link>
    </nav>
  </header>

  <main class="contenido">
    <router-view />
  </main>
</template>

<style scoped>
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  background: #f5f7fa;
  color: #222;
}
.header {
  background: #42b883;
  padding: 1rem 2rem;
  color: white;
}
.header h1 {
  margin: 0 0 0.5rem;
}
.menu {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.menu a {
  color: white;
  text-decoration: none;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
}
.menu a:hover {
  background: rgba(255, 255, 255, 0.2);
}
/* Clase que Vue Router añade al enlace de la ruta activa */
.menu a.router-link-exact-active {
  background: #35495e;
}
.contenido {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}
pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}
.ejemplo {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}
button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin: 0.25rem 0.25rem 0.25rem 0;
}
button:hover {
  background: #35a372;
}
</style>
