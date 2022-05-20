<template>
  <div style="display: block">
    <navbar />
    <div class="contenedor-vista">
      <parteUno />
      <parteDos />
    </div>
  </div>
</template>


<script>
import navbar from "@/views/layouts/navbar.vue";
import parteUno from "@/components/estadios/parteUno/parteUno.vue";
import parteDos from "@/components/estadios/tribunas/ParteDos.vue";
export default {
  name: "vista",
  components: {
    parteUno,
    parteDos,
    navbar,
  },
};
</script>


<style>
.contenedor-vista {
  display: block;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
  background-color: #f0f5f8;
}

@media (max-width: 440px) {
  .contenedor-vista {
    padding-left: 25px;
  }
}
@media (max-width: 400px) {
  .contenedor-vista {
    padding-right: 25px;
  }
}
@media (max-width: 300px) {
  .contenedor-vista {
    padding-left: 10px;
}
}
</style>