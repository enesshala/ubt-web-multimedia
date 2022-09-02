<template>
  <div>
      <HomeNavigation></HomeNavigation>
        <section>
     <div class="container-fluid px-2 px-md-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-lg-9 col-xl-8">
            <div class="card card-main border-0 text-center">
                <h5 class="font-weight-bold mb-4 tekst">What our clients are saying<br>about us.</h5>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <div class="card border-0 card-0">
                                <div class="card profile py-3 px-4">
                                    <div class="text-center"> <img src="https://i.imgur.com/gazoShk.jpg" class="img-fluid profile-pic"> </div>
                                    <h6 class="mb-0 mt-2">Marielle Haag</h6> <small>Backend Developer</small>
                                </div> <img class="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20">
                                <p class="content mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20">
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <div class="card border-0 card-0">
                                <div class="card profile py-3 px-4">
                                    <div class="text-center"> <img src="https://i.imgur.com/oW8Wpwi.jpg" class="img-fluid profile-pic"> </div>
                                    <h6 class="mb-0 mt-2">Ximena Vegara</h6> <small>UI/UX Designer</small>
                                </div> <img class="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20">
                                <p class="content mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card border-0 card-0">
                                <div class="card profile py-3 px-4">
                                    <div class="text-center"> <img src="https://i.imgur.com/ndQx2Rg.jpg" class="img-fluid profile-pic"> </div>
                                    <h6 class="mb-0 mt-2">John Paul</h6> <small>UI/UX Designer</small>
                                </div> <img class="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20">
                                <p class="content mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card border-0 card-0">
                                <div class="card profile py-3 px-4">
                                    <div class="text-center"> <img src="https://cxl.com/wp-content/uploads/2015/08/raphael_paulin_daigle.jpg" class="img-fluid profile-pic"> </div>
                                    <h6 class="mb-0 mt-2">Jack Smith</h6> <small>UI/UX Designer</small>
                                </div> <img class="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20">
                                <p class="content mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20">
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
<Footer></Footer>
    </div>
</template>

<script>
import HomeNavigation from "../components/Navigation.vue"
import Footer from "../components/Footer.vue"
export default {
      components: {
            HomeNavigation,
            Footer
        },
}
  
</script>

<style scoped>
section {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background: #222;
    background-repeat: no-repeat
}

.card-main {
    padding: 50px;
    background: #222;
    border-radius: 0px 80px ;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 0px 4px 20px  #555;
}

.card-0 {
    color: #fff;
    background: #4F94F1 ;
    position: relative;
    margin-left: 70px;
    border-radius: 30px;
    min-height: 312px
}

.carousel-indicators li {
    cursor: pointer;
    border-radius: 50% !important;
    width: 10px;
    height: 10px
}

.profile {
    color: #000;
    background-color: #06897b;
    position: absolute;
    left: -70px;
    top: 17%;
    border: 1px solid #06897b;
    border-radius: 20px ;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px
}

.profile-pic {
    width: 120px;
    height: 120px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px
}

.profile small{
    font-family: 'verdana';
    font-style:italic;
}
.profile h6{
    letter-spacing: 0.1em;
    font-weight:600
}
.open-quotes {
    margin-left: 130px;
    margin-top: 100px
}

.content {
    margin-left: 150px;
    margin-right: 80px
}

.close-quotes {
    margin-bottom: 100px;
    margin-right: 60px
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.tekst{
font-family: 'Poppins', cursive;
font-size:30px;
color: white;

}

@media screen and (max-width: 600px) {
    .card-main {
        padding: 50px 10px
    }

    .card-0 {
        min-height: 432px
    }

    .profile {
        top: 24%
    }

    .profile-pic {
        width: 90px;
        height: 90px
    }

    .open-quotes {
        margin-left: 100px
    }

    .content {
        margin-left: 120px;
        margin-right: 50px
    }

    .close-quotes {
        margin-right: 30px
    }
}</style>