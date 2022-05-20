<template>
  <div class="contenedor-tribuna">
    <div class="encabezado-tribuna">
      <div>
        <span class="titulo">Tribunas</span>
      </div>
      <div>
        <button class="btn">Añadir</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "encabezadoTribuna",
};
</script>

<style scoped>
.contenedor-tribuna {
  display: block;
  margin-left: 70px;
  margin-top: 50px;
}
.encabezado-tribuna {
  display: flex;
  align-items: center;
}
.titulo {
  font: normal normal bold 30px/87px sans-serif;
  color: black;
  width: 111px;
}
.btn {
  width: 110px;
  margin: 5px;
  border-radius: 13px;
  background: #755bfa 0% 0% no-repeat padding-box;
  color: white;
  margin-left: 50px;
}
.btn:hover {
  box-shadow: 0px 3px 6px #00000029;
}
@media (max-width: 1025px) {
  .contenedor-tribuna{
    
      margin-left: 0;
  }
}
@media (max-width: 333px) {
  .titulo{
    font: normal normal bold 25px/70px sans-serif;
  }
  .btn{
    margin-left: 70px;
    width: 90px;
  }
}
</style>