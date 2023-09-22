<template>
  <nav>
    <router-link to="/">List</router-link> |
    <router-link to="/detail">Detail</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-top: 60px;
}
</style>
