<template>
  <div>
    <HomeNavigation></HomeNavigation>
    <div class="container">
      <div class="spaceDiv"></div>
      <h1 class="aboutUsHeaders text zoomin"><span>About Us</span></h1>
      <div class="spaceDiv"></div>
      <div class="justify-content-center">
        <div class="row justify-content-center">
          <div class="aboutUsDiv aboutUsDivText shadow col-md">
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              architecto repudiandae laudantium debitis alias nisi, quam
              officiis dolores animi modi, iusto at eos, voluptate quas. Quia,
              alias perferendis? Maiores harum nisi unde dignissimos numquam
              error. Officiis natus delectus.
            </p>
          </div>

          <div class="aboutUsDiv col-md">
            <video autoplay muted loop id="myVideo" class="img-fluid">
              <source src="../assets/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div class="spaceDiv"></div>

      <h2 class="aboutUsHeaders text zoomin">Our Team</h2>

      <div class="spaceDiv"></div>

      <!-- ======= Chefs Section ======= -->
      <section id="chefs" class="chefs">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="member">
                <img
                  src="../assets/chefe.jpg"
                  class="img-fluid fotoja"
                  alt=""
                />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Erlira Hyseni</h4>
                    <span>Master Chef</span>
                  </div>
                  <div class="social">
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member">
                <img src="../assets/rat.png" class="img-fluid fotoja" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Enes Shala</h4>
                    <span>Patissier</span>
                  </div>
                  <div class="social">
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member">
                <img src="../assets/chef.png" class="img-fluid fotoja" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Besfort Sherifi</h4>
                    <span>Cook</span>
                  </div>
                  <div class="social">
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="member">
                <img
                  src="../assets/chef2.jpg"
                  class="img-fluid fotoja"
                  alt=""
                />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Donat Xhemajli</h4>
                    <span>Cook</span>
                  </div>
                  <div class="social">
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Chefs Section -->
      <div></div>

      <div class="spaceDiv"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeNavigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    HomeNavigation,
    Footer,
  },
};
</script>

<style scoped>
.aboutUsDiv {
  width: 50%;
  margin: 10px;
}

.aboutUsHeaders {
  text-align: center;
}

.text {
  color: white;
}

.aboutUsDivText {
  padding: 10px;
}

.shadow {
  -webkit-box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
  -moz-box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
  box-shadow: 0 8px 6px -6px rgb(255, 255, 255);
}

.chefs .member {
  text-align: center;
  margin-bottom: 20px;
  background: #343a40;
  position: relative;
  overflow: hidden;
}

.chefs .member .member-info {
  opacity: 0;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.2s;
}

.chefs .member .member-info-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  transition: bottom 0.4s;
}

.chefs .member .member-info-content h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
  color: #fff;
}

.chefs .member .member-info-content span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: #fff;
}

.chefs .member .social {
  position: absolute;
  left: 0;
  bottom: -38px;
  right: 0;
  height: 48px;
  transition: bottom ease-in-out 0.4s;
  text-align: center;
}

.chefs .member .social a {
  transition: color 0.3s;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
}

.chefs .member .social a:hover {
  color: #4f94f1;
}

.chefs .member .social i {
  font-size: 18px;
  margin: 0 2px;
}

.chefs .member:hover .member-info {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 212, 255, 0) 100%
  );
  opacity: 1;
  transition: 0.4s;
}

.chefs .member:hover .member-info-content {
  bottom: 60px;
  transition: bottom 0.4s;
}

.chefs .member:hover .social {
  bottom: 0;
  transition: bottom ease-in-out 0.4s;
}

.fotoja {
  float: left;
  width: 350px;
  height: 500px;
  object-fit: cover;
}

.spaceDiv {
  margin-top: 100px;
}

h1 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgb(250, 250, 250);
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h1 span {
  background: #414141;
  padding: 0 10px;
}

.zoomin:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  cursor: pointer;
}
</style>
