<template>
  <div id="app">
    <nav>
      <div class="nontonkuy-text fw-bold">
        <router-link to="/">
          <span class="nonton">Nonton</span>
          <span class="kuy">Kuy</span>
        </router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #f7f7f7;
  }

.nontonkuy-text {
    font-size: 20pt;
    text-align: center;
    a {
      text-decoration: none;
    }
    .nonton {
      color: #F37984;
    }
    .kuy {
      color: #F2C59B;
    }
  }
</style>
