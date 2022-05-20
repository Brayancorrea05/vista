<template>
  <div class="contenedor-acercaa">
    <div class="contenedor-titulo">
      <div>
        <img src="@/assets/logoCoex.png" alt="" class="img-pais" />
      </div>
      <div>
        <span class="pais">Londres, Inglaterra</span>
      </div>
    </div>
    <div style="display: flex">
      <div class="linea1"></div>
      <div class="linea2"></div>
    </div>

    <div style="margin: 30px">
      <div>
        <span class="acerca">Acerca</span>
      </div>
      <p class="parrafo">
        El Estadio de Wembley es un estadio de fútbol que está ubicado en la
        ciudad de Londres, Inglaterra. Está emplazado en el lugar donde se
        erigía el antiguo estadio con el mismo nombre construido en 1923. En el
        nuevo Wembley funge como local la selección de fútbol de Inglaterra; es
        anualmente sede de las finales de la FA Cup, la Copa de la Liga de
        Inglaterra y la Community Shield, además de varias finales de la Liga de
        Campeones de la UEFA.5 El estadio también se puede apreciar en la
        película 28 Weeks Later de 2007 y en Yesterday de 2019.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "acerca",
};
</script>

<style scoped>
.contenedor-acercaa {
  display: block;
  margin-left: 40px;
}
.contenedor-titulo {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  text-align: left;
}
.img-pais {
  width: 80px;
}
.pais {
  font: normal normal 38px/36px sans-serif;
  color: black;
}
.acerca {
  font: normal normal bold 38px/36px sans-serif;
  color: black;
  display: flex;
}
.parrafo {
  height: 165px;

  text-overflow: ellipsis;
  overflow: hidden;
 
  margin-top: 10px;
  text-align: left;
}
.linea1 {
  width: 250px;
  height: 5px;
  background: #755bfa;
  border-radius: 5px;
  margin-left: 30px;
}
.linea2 {
  width: 20px;
  height: 5px;
  background: #755bfa;
  border-radius: 5px;
  margin-left: 5px;
}
@media (max-width: 629px) {
  .contenedor-acercaa {
    margin-left: 0;
  }
}
@media (max-width: 1195px) {
  .linea1 {
    width: 210px;
  }
}
@media (max-width: 520px) {
  .pais {
    font: normal normal 30px/30px sans-serif;
  }
  .linea1 {
    width: 130px;
  }
  .acerca{
    font: normal normal bold 30px/36px sans-serif;
  }
}
</style>