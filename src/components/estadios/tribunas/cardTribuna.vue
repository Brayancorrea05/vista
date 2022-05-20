<template>
  <div>
    <div class="row" style="">
      <div class="col-2">
        <div class="contenedorr-card">
          <div style="display: block" class="">
            <div class="card-tribuna">
              <div style="margin: 20px">
                <span class="card-titulo">{{ nombreTribuna }}</span>
              </div>
              <div class="card-personas">
                <div>
                  <span>{{ personaTribuna }}</span>
                </div>
                <div><i class="icon-users"></i></div>
              </div>
              <div class="card-ticket">
                <div>
                  <span
                    style="
                      font: normal normal bold 20px/25px sans-serif;
                      color: black;
                    "
                    >${{ ticketTribuna }}</span
                  >
                </div>
                <div>
                  <i class="icon-ticket"></i>
                </div>
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
                  <div
                    class="btn-icons"
                    data-toggle="modal"
                    data-target="#eliminarTribuna"
                  >
                    <i class="icon-basura"></i>
                  </div>
                </div>
                <div class="tooltip-one">Eliminar</div>
              </div>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="eliminarTribuna">
            <div class="modal-dialog modal-dialog-centered" style="justify-content: center;">
              <div class="contendor-modal">
                <div class="modal-encabezado">
                  <h5 class="modal-title">Eliminar Tribuna</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-cuerpo">¿Desea eliminar esta tribuna?</div>
                <div class="modal-btn">
                  <button class="btn-uno" data-dismiss="modal">Cerrar</button>
                  <button class="btn-dos">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "cardTribuna",
  props: {
    nombreTribuna: {
      type: String,
      default: "Tribuna",
    },
    personaTribuna: {
      type: Number,
      default: 100,
    },
    ticketTribuna: {
      type: Number,
      default: 1000,
    },
  },
};
</script>

<style scoped>
.row {
  margin-left: 50px;
}
.contenedorr-card {
  display: flex;

  margin-top: 20px;
}
.card-tribuna {
  display: block;
  width: 190px;

  background-color: white;
  border: 1px solid #dfe4e8;
  border-radius: 15px;
}
.card-titulo {
  font: normal normal 20px/25px sans-serif;
  color: black;
}
.card-personas {
  display: flex;
  border-radius: 10px;
  background-color: #755bfa;
  color: white;
  justify-content: space-around;
  align-items: center;
  margin: 8px;
}
.card-ticket {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 8px;
}
.contenedor-iconos {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.icon-lapiz {
  font-size: 28px;
  color: white;
}
.icon-basura {
  font-size: 28px;
  color: white;
}
.btn-icons {
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 13px;
  box-shadow: 0px 3px 3px #00000029;
  background: #755bfa 0% 0% no-repeat padding-box;
}
.icon-users {
  font-size: 23px;
  color: white;
}
.icon-ticket {
  font-size: 23px;
}
@media (max-width: 1490px) {
  .col-2 {
    max-width: 16.666667%;
  }
}
@media (max-width: 1300px) {
  .col-2 {
    max-width: 19.666667%;
  }
}
@media (max-width: 1125px) {
  .col-2 {
    max-width: 23.666667%;
  }
  .row {
    justify-content: center;
  }
}

@media (max-width: 984px) {
  .col-2 {
    max-width: 30.666667%;
  }
}
@media (max-width: 795px) {
  .col-2 {
    max-width: 32.666667%;
  }
  .row{
    margin-left: 0;
  }
}
@media (max-width: 752px) {
  .col-2 {
    max-width: 40.666667%;
  }
  
}
@media (max-width: 629px) {
  .col-2 {
    max-width: 47.666667%;
  }

}
@media (max-width: 565px) {
  .col-2 {
    max-width: 49.666667%;
  }
}
@media (max-width: 503px) {
  .row{
    margin-right: 130px;
  }
  .col-2 {
    max-width: 50.666667%;
  }
}
@media (max-width: 333px) {
  .row{
    margin-right: 180px;
  }
}
</style>