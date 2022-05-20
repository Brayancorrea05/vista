<template>
  <div>
    <div class="contenedor-titulo">
      <div style="display: block">
        <div><h1 class="titulo">Wembley Stadium</h1></div>
        <div class="div-barra">
          <div class="linea1"></div>
          <div class="linea2"></div>
        </div>
      </div>
      <div class="contenedor-iconos">
        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <div class="btn-icons">
              <i class="icon-lapiz"></i>
            </div>
          </div>
          <div class="tooltip-one">Editar</div>
        </div>

        <div class="tooltip-container">
          <div class="tooltip-trigger">
            <div class="btn-icons" data-toggle="modal" data-target="#eliminar">
              <i class="icon-basura"></i>
            </div>
          </div>
          <div class="tooltip-one">Eliminar</div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="eliminar">
      <div
        class="modal-dialog modal-dialog-centered"
        style="justify-content: center"
      >
        <div class="contendor-modal">
          <div class="modal-encabezado">
            <h5 class="modal-title">Eliminar estadio</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-cuerpo">¿Desea eliminar este estadio?</div>
          <div class="modal-btn">
            <button class="btn-uno" data-dismiss="modal">Cerrar</button>
            <button class="btn-dos">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "titulo",
};
</script>


<style scoped>
.contenedor-titulo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 70px;
  margin-bottom: 70px;
  margin-top: 50px;
}
.titulo {
  font: normal normal bold 70px/87px sans-serif;
  color: black;
  text-align: left;
}
.contenedor-iconos {
  display: flex;
}
.btn-icons {
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 13px;
  box-shadow: 0px 3px 3px #00000029;
  background: #755bfa 0% 0% no-repeat padding-box;
}
.div-barra {
  display: flex;
}
.linea1 {
  width: 250px;
  height: 5px;
  background: #ffd53d;
  border-radius: 5px;
  margin-left: 15px;
}
.linea2 {
  width: 20px;
  height: 5px;
  background: #ffd53d;
  border-radius: 5px;
  margin-left: 5px;
}
.icon-lapiz {
  font-size: 28px;
  color: white;
}
.icon-basura {
  font-size: 28px;
  color: white;
}
@media (max-width: 1025px) {
  .contenedor-titulo {
    margin-left: 0;
  }
}
@media (max-width: 1110px) {
  .contenedor-titulo {
    margin-bottom: 0;
  }
}
@media (max-width: 560px) {
  .titulo {
    font: normal normal bold 55px/60px sans-serif;
  }
  .linea1 {
    width: 157px;
    margin-left: 0px;
  }
}
@media (max-width: 520px) {
  .titulo {
    font: normal normal bold 40px/50px sans-serif;
  }
}
@media (max-width: 350px) {
  .titulo {
    font: normal normal bold 30px/35px sans-serif;
  }
  .linea1 {
    width: 125px;
  }
}
</style>