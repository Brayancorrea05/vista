<template>
  <div class="contenedor-navbar">
    <div>
      <img src="@/assets/logoCoex.png" alt="" class="img-logo" />
    </div>
    <div class="contendor-dos">
      <div class="div-iconos">
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <button class="icono"><i class="icon-user"></i></button>
          </div>
          <div class="tooltip-one">Home</div>
        </div>
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <button class="icono"><i class="icon-user"></i></button>
          </div>
          <div class="tooltip-one">Administradores</div>
        </div>
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <button class="icono"><i class="icon-config"></i></button>
          </div>
          <div class="tooltip-one">Configuración</div>
        </div>
      </div>
      <div class="div-menu">
        <div class="dropdown">
          <button
            style="background: none; border: none"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="tooltip-container">
              <div class="tooltip-trigger">
                <button class="icono-menu">
                  <img src="@/assets/menu.png" alt="" class="menu" />
                </button>
              </div>
              <div class="tooltip-one" style="bottom: 7px; right: 48px">
                Menu
              </div>
            </div>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#"><i class="icon-user"></i> Home</a>
            <a class="dropdown-item" href="#"><i class="icon-user"></i> Administradores</a>
            <a class="dropdown-item" href="#"><i class="icon-config"></i> Configuración</a>
          </div>
        </div>
      </div>
      <div class="div-usuario">
        <div class="user"></div>
        <div class="dropdown">
          <button
            style="background: none; border: none"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="icon-flecha-abajo"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Cerrar sesion</a>
          </div>
        </div>

        <div>
          <img src="@/assets/logoCoex.png" alt="" class="img-logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor-navbar {
  background-color: white;

  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.dropdown-menu.show {
  top: 20px !important;
  transition: transform 1s;
  left: -50px !important;
  box-shadow: 0px 3px 3px #00000029;
}
.dropdown-item{
  display: flex !important;
  justify-items: center;
    align-content: center;
    align-items: center;
}
.contendor-dos {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.div-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.menu {
  width: 20px;
}
.icono-menu {
  width: 45px;
  height: 45px;
  background: none;
  border: none;
  margin: 8px;
  transition: transform 1s;
}
.icono-menu:active {
  transform: rotate(360deg);
}
.div-iconos {
  display: flex;
  align-items: center;
  padding-right: 80px;
}

.icono {
  width: 45px;
  height: 45px;
  background: none;
  border: none;
  margin: 8px;
}
.icono:focus {
  background-color: #7358fa;
  color: white;
  border-radius: 10px;
}

.icono:hover {
  background-color: #866ff7a4;

  border-radius: 10px;
}
.div-usuario {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  width: 36px;
  height: 36px;
  background-color: #7358fa;
  border-radius: 10px;
}
.img-logo {
  width: 80px;
}
.icon-user {
  font-size: 30px;
  margin-right: 5px;
}
.icon-config {
  font-size: 30px;
  margin-right: 5px;
}
.icon-flecha-abajo {
  font-size: 20px;
}
@media (max-width: 560px) {
  .div-iconos {
    padding-right: 20px;
  }
}
@media (max-width: 500px) {
  .div-iconos {
    display: none;
  }
  .div-menu {
    display: flex;
  }
}
</style>