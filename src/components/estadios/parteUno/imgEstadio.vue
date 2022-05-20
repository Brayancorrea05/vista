<template>
  <div class="contenedorr">
    <div class="contenedor-img">
      <div class="img">
        <img src="@/assets/imagenuno.jpg" alt="" class="img" />
      </div>

      <div style="display: flex; justify-content: space-between">
        <div class="div-personas">
          <div class="btn-icons">
            <i class="icon-users"></i>
          </div>
          <span
            style="font: normal normal medium 16px/19px sans-serif; margin: 5px"
            >90.000</span
          >
        </div>

        <div style="display: flex; align-items: center; margin-right: 35px">
          <div>
            <span style="font: normal normal medium 16px/19px sans-serif"
              >Gramilla</span
            >
          </div>
          <div class="div-gramilla">
            <img src="@/assets/gramilla.jpg" alt="" class="img-gramilla" />
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor-carousel">
      <button class="btn-carousel">
        <i class="icon-flecha-arriba"></i>
      </button>
      <div class="div-carousel">
        <div class="zoom-carousel">
          <img src="@/assets/imagendos.jpg" alt="" class="imagen-carousel" />
        </div>
      </div>
      <div class="div-carousel">
        <div class="zoom-carousel">
          <img src="@/assets/imagendos.jpg" alt="" class="imagen-carousel" />
        </div>
      </div>
      <div class="div-carousel">
        <div class="zoom-carousel">
          <img src="@/assets/imagendos.jpg" alt="" class="imagen-carousel" />
        </div>
      </div>
      <div class="div-carousel">
        <div class="zoom-carousel">
          <img src="@/assets/imagendos.jpg" alt="" class="imagen-carousel" />
        </div>
      </div>
      <button class="btn-carousel">
        <i class="icon-flecha-abajo"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteImg",
};
</script>

<style scoped>
.div-personas {
  display: flex;
  align-items: center;
  margin-left: 35px;
}
.contenedorr {
  display: flex;
  margin-left: 70px;
}
.contenedor-img {
  display: block;
  padding-top: 25px;
}
.img {
  display: flex;
  justify-content: center;
  width: 530px;
  height: 330px;
  border-radius: 50px;
}
.btn-icons {
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 7px;
  background: #030303;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-gramilla {
  border-radius: 15px;
  bottom: 20px;
  margin-left: 10px;
  position: relative;
  box-shadow: 0px 3px 6px #00000029;
  border: 7px solid #e5e5e54f;
}
.img-gramilla {
  width: 59px;
  height: 59px;
  border-radius: 8px;
}
.contenedor-carousel {
  display: block;
  margin-left: 20px;
}
.btn-carousel {
  border: none;
  background-color: transparent;
}
.div-carousel {
  width: 80px;
  height: 80px;
  margin: 5px;
  border-radius: 25px;
  overflow: hidden;
}
.div-carousel:hover {
  border: 3px solid #7358fa;
}
.imagen-carousel {
  width: 120px;
  height: 100px;
}

.zoom-carousel {
  border: #030303;
  transition: transform 1s;
}
.zoom-carousel:hover {
  transform: scale(1.3);
}
.icon-flecha-arriba {
  font-size: 20px;
}
.icon-flecha-arriba:hover {
  background-color: rgb(211, 210, 210);
  border-radius: 5px;
}
.icon-flecha-abajo {
  font-size: 20px;
}
.icon-flecha-abajo:hover {
  background-color: rgb(211, 210, 210);
  border-radius: 5px;
}
.icon-users {
  font-size: 23px;
  color: white;
  margin-right: 3px;
}
@media (max-width: 1060px) {
  .contenedorr {
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1110px) {
  .contenedorr {
    justify-content: center;
    margin-left: 0;
    padding-bottom: 50px;
    padding-top: 50px;
  }
}

@media (max-width: 775px) {
  .img {
    width: 452px;
    height: 316px;
  }
}
@media (max-width: 695px) {
  .img {
    width: 400px;
    height: 300px;
  }
}
@media (max-width: 643px) {
  .img {
    width: 380px;
    height: 290px;
  }
}
@media (max-width: 643px) {
  .img {
    width: 360px;
    height: 275px;
  }
}
@media (max-width: 600px) {
  .imagen-carousel {
    width: 100px;
    height: 85px;
  }
}
@media (max-width: 596px) {
  .img {
    width: 340px;
    height: 270px;
  }
  .div-carousel {
    width: 65px;
    height: 65px;
  }
}
@media (max-width: 560px) {
  .contenedorr {
    display: block;
    padding-top: 15px;
    padding-bottom: 35px;
  }
  .imagen-carousel {
    width: 96px;
    height: 70px;
  }
  .contenedor-carousel {
    display: flex;
    margin-left: 0;
    justify-content: space-around;
  }
  .img {
    width: 380px;
    height: 270px;
  }
  .btn-carousel {
    transform: rotate(272deg);
  }
}
@media (max-width: 515px) {
  .img {
    width: 340px;
    height: 227px;
  }
  .div-personas {
    margin-left: 0px;
  }
  .div-carousel {
    width: 50px;
    height: 50px;
    border-radius: 15px;
  }
}

@media (max-width: 475px) {
  .img {
    width: 310px;
    height: 213px;
  }
  .div-carousel {
    width: 60px;
    height: 60px;
    border-radius: 15px;
  }
}
@media (max-width: 415px) {
  .div-carousel {
    height: 55px;
  }
}
@media (max-width: 395px) {
  .img {
    width: 300px;
    height: 200px;
  }
  .img-gramilla {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 370px) {
  .img {
    width: 285px;
    height: 190px;
  }
}
@media (max-width: 350px) {
  .div-carousel {
    height: 45px;
  }
  .img {
    width: 270px;
    height: 175px;
  }
  .imagen-carousel {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 333px) {
  .img {
    width: 250px;
    height: 165px;
  }
}
@media (max-width: 333px) {
  .div-carousel{
    height: 40px;
  }
}

</style>