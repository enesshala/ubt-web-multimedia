<template>
    <div class="contactUs">
        <HomeNavigation></HomeNavigation>
        <br><br>
        <div class="backgroundVideo">
            <video src="../assets/salt.mp4" autoplay muted loop></video>
        </div>
        <div id="wrap">
            <h1>Get in touch with us!</h1>
            <br><br><br>
            <div class="form-wrap">
                <form>
                    <p>Hello John Doe,</p>
                    <div class="inputDesign">
                        <textarea name="message" id="message" value="Your Message"></textarea>

                        <label for="email">Your Message:</label>
                    </div>
                
                    <br><br>
                    <p>Best,</p>
                    <br>
                    <div class="inputDesign"> 
                        <input type="text" name="name" id="email">
                       <div class="underline">

                       </div>
                        <label for="name">Name:</label>
                    </div>
                    

                    <input type="submit" name="submit" value="Send">
                </form>
            </div>
        </div>


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

<style>
.contactUs{
    width: 100%;
}
        .backgroundVideo video{
            object-fit: cover;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 0;
            opacity: 0.6;
        }

     .contactUs, .contactUs.div, .contactUs.h1, .contactUs.h2, .contactUs form,
      .contactUs.fieldset, .contactUs input, .contactUs textarea, .contactUs.p{
          margin: 0;
          padding: 0;
          border: 0;
          outline: none;
     }

     .contactUs{
          font-family: tahoma;
          z-index: 2;
     }
     .contactUs p{
            font-size: 24px;
     }
     #wrap{
         width: 540px;
         margin: 20px auto;
         height: 700px;
         z-index: 2;
     }
    .contactUs h1{
         margin-bottom: 15px;
         text-align: center;
         font-size: 45px;
         font-family: tahoma;
         color: rgb(245, 245, 245);
         font-weight: bold;
         letter-spacing: 3px;
         word-spacing: 2px;
         animation: animate 2s linear;
         z-index: 2;
         position: relative;
         font-family:'Poppins';
     }

   @keyframes animate {
       0%{
           width: 82%;
       }
       70%, 90%{
           width: 100%;
       }
   }
  .form-wrap{
      overflow: hidden;
      height: 447px;
      position: relative;
      top:0px;
      transition: all 1s ease-in-out .3s;
  }
  .form-wrap::before{
        content: "";
        position: absolute;
        bottom: 128px;
        left:0px;
        background: url('../assets/before.png');
        width:530px;
        height: 317px;
  }
  .form-wrap::after{
        content: "";
        position: absolute;
        bottom: 0px;
        left:0px;
        background: url('../assets/after.png');
        width:530px;
        height: 259px;
  }

  .form-wrap.hide::before, .form-wrap.hide::after{
       display: none;
  }

  .form-wrap:hover{
      height: 777px;
      top: -200px;
  }
 .form-wrap form{
        color: white;
        background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));
        position: relative;
        top: 200px;
        overflow: hidden;
        height: 200px; 
        width: 400px;
        margin: 0px auto;
        padding: 20px;
        border: 1px solid linear-gradient(rgba(0, 0, 0, 0.76),rgba(0, 0, 0, 0.787));
        border-right: 3px;
        transition: all 1s ease-in-out .3s;
        border-radius: 10px;
  }
   .form-wrap:hover form{
      height: 530px;
      box-shadow: 8px -7px 27px black;
  }
  .form-wrap label{
      margin: 11px 20px 0 0;
      font-size: 15px;
      color: gray;
  }
 .form-wrap textarea{
      font: 14px normal uppercase, arial, serif;
      color: white;
      background: none;
      width:350px;
      height: 37px;
      padding: 0px 10px;
      margin: 0 0 10px 0;
      border: 1px solid #f8f5f1;
      padding: 5px;
      border: none;
      margin-top: 10px;
      border-bottom: 2px solid  white;
      letter-spacing: 1px;
  }

 .form-wrap textarea{
      height: 80px;
      padding-top: 14px;
      padding: 5px;
  }

.contactUs label{
    color: white;
    margin-bottom: 10px;
}

  .form-wrap input[type=submit]{
    position: relative;
    font-family: tahoma;
    font-size: 24px;
    color: rgb(214, 214, 214);
    width: 100%;
    text-align: center;
    opacity: 0;
    background: rgb(0, 0, 0);
    cursor: pointer;
    letter-spacing: 2px;
    border-radius: 3px;
    transition: opacity 0.7s ease-in-out 1s;
  }
  .form-wrap:hover input[type=submit]{
      z-index: 1;
      opacity: 1;
      transition: opacity 0.7s ease-in-out 1.3s;
      border: 1px solid #000000;
      margin-bottom: 30px;
  }
 .contactUs input[type=submit]:hover{
    color: white;
    background-color: #000000;
    transition: all 0.3s ease;
  }
  .inputDesign{
        position: relative;
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
  }
  .inputDesign input{
      height: 100%;
      width: 100%;
      border: none;
      font-size: 17px;
      border-bottom: 2px solid silver;
      background: none;
      color: white;
      letter-spacing: 1px;
  }

  
  .inputDesign input:focus ~ label, .inputDesign textarea:focus ~ label{
      transform: translateY(-20px);
      font-size: 16px;
      color: white;
  }
   .inputDesign textarea:focus{
       border-bottom: 2px solid  white;
   }
  .inputDesign label{
      position: absolute;
      bottom: 0px;
      left: 0px;
      color: grey;
      pointer-events: none;
      transition: all 0.3s ease;
  }
  .inputDesign .underline{
      position: absolute;
      bottom: 0px;
      height: 2px;
      width: 100%;
      background: rgb(204, 204, 204);
  }
  .inputDesign .underline::before{
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: white;
        transform: scaleX(0);
        transition: transform 0.3s ease;
  }
  .inputDesign input:focus ~ .underline::before{
        transform: scaleX(1);
  }
</style>