<template>
  <div class="contenedor-info">
    <migaPan />
    <titulo />
    <div class="contenedor-acerca">
      <imgEstadio />
      <acerca />
    </div>
  </div>
</template>

<script>
import titulo from "@/components/estadios/parteUno/titulo.vue";
import imgEstadio from "@/components/estadios/parteUno/imgEstadio.vue";
import acerca from "@/components/estadios/parteUno/acerca.vue";
import migaPan from "@/components/estadios/parteUno/migaPan.vue";
export default {
  name: "ParteUno",
  components: {
    titulo,
    imgEstadio,
    acerca,
    migaPan,
  },
};
</script>

<style scoped>
.contenedor-info {
  display: block;
}
.contenedor-acerca {
  display: flex;
}
@media (max-width: 1110px) {
  .contenedor-acerca {
    display: block;
    
  }
}
</style>