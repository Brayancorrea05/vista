<template>
  <div class="contendor-tribuna">
    <encabezadoTribuna />

    <cardTribuna />
  </div>
</template>


<script>
import encabezadoTribuna from "@/components/estadios/tribunas/encabezadoTribuna.vue";
import cardTribuna from "@/components/estadios/tribunas/cardTribuna.vue";
export default {
  name: "parteDos",
  components: {
    encabezadoTribuna,
    cardTribuna,
  },
};
</script>

<style scoped>
.contendor-tribuna {
  display: block;
}
</style>