<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f5f8;

}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/*tooltip*/
.tooltip-container {
  position: relative;
  cursor: pointer;
}
.tooltip-one {
  padding: 10px 10px;
  background: #fff;
  position: absolute;
  max-width: 180px;
  border-radius: 60px;
  text-align: center;
  filter: drop-shadow(0 3px 5px #ccc);
  line-height: 1.5;
  z-index: 4;
}
/*ocultar el tooltip*/
.tooltip-container .tooltip-one {
  display: none;
}
.tooltip-trigger:hover + .tooltip-one {
  display: block;
}
/**/
.modal-footer {
  border: none;
}
/*modal*/@at-root.contendor-modal {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #88888861;
  border-radius: 8px;
  width: 400px;
  z-index: 3;
}
.modal-encabezado {
  display: flex;
  margin: 20px;
  justify-content: space-between;
}
.modal-cuerpo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.modal-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.btn-uno {
  width: 90px;
  height: 40px;
  border-radius: 12px;
  background: #f0f1ff 0% 0% no-repeat padding-box;
  margin: 7px;
  border: none;
  color: #7358fa;
}
.btn-dos {
  width: 90px;
  height: 40px;
  border-radius: 12px;
  background: #7358fa 0% 0% no-repeat padding-box;
  margin: 7px;
  border: none;
  color: white;
}
.btn-dos:hover {
  box-shadow: 0px 3px 6px #00000029;
}



</style>
