<template>
  <div style="padding-top: 100px;">
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Estadios</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          Wembley Stadium
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "migaPan",
};
</script>

<style scoped>
.breadcrumb {
  background-color: #f0f5f8 !important;
  padding: 0 !important;
  margin-bottom: 0 !important;
  padding-left: 70px !important;
}
nav {
  padding: 0 !important;
}
a:link {
  color: aqua;
}

@media (max-width: 1025px) {
  .breadcrumb {
    padding-left: 0 !important;
  }
}
</style>