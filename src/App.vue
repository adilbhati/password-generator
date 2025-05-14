<template>
  <div id="app">
    <header>
      <h1>Password Generator</h1>
    </header>
    <main>
      <Home/>
    </main>
    <footer>
      <p>&copy; 2025 Password Generator App</p>
    </footer>
  </div>
</template>

<script>
import Home from './Home.vue';
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  
}

:root {
  --header-bg-color: #42b983;
}

header {
  background-color: var(--header-bg-color);
  color: white;
  padding: 20px;
}

footer {
  margin-top: 20px;
  font-size: 0.9em;
  color: #666;
}
</style>