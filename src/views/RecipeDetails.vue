<template>
  <div class="deetbg">
     <HomeNavigation></HomeNavigation>


 <h1 class="text-white my-3" style="letter-spacing: 0.2em;   font-family: Georgia, serif;">Details</h1>
    <div class="container my-3 bg" >
        
        <audio autoplay style="display: none">
        <source src="../assets/Knife-Sharpen.mp3" type="audio/ogg">
   
     
      </audio>
     
        <div class="d-flex justify-content-center">
            <div class="detImg">
               <img v-bind:src="recipe.image" alt="" height="400px"  width="400px" class="img-fluid m-5">
            </div>
          
            
            <div>
                <h2 class="text-white my-5" style="font-weight:500; font-style:underline;font-family: Georgia, serif;">♦ {{recipe.title}}</h2>
                <p class="text-white para">♣ Made for {{recipe.readyInMinutes}} people</p>
                <p class="text-white para">♣ Estimated time {{recipe.readyInMinutes}} minutes</p>
            </div>
        </div>
        
        <div class="spaceDiv"></div>
        <div class="container d-flex">
            

            <div class="text text4 col-md-12 equipments">
                <h3 class="my-3" style="color:white;   font-family: Georgia, serif; letter-spacing: 0.2em">Equipments</h3>
                 <ul  >
                  <template v-for="item in recipe.analyzedInstructions[0].steps">
                    <li class="equipment" v-for="equipment in item.equipment" :key="equipment.id">
                      {{equipment.name}}
                    </li>
                  </template>
                  </ul>
             </div>
        </div>

        <div class="d-flex justify-content-center">
            <div class="text text2 col-md-7 mx-4" style="border: 1px solid #fffafa">
               <h3 class=" p-3">Steps</h3>
               <ul v-for="item in recipe.analyzedInstructions[0].steps" :key="item.id">
                   <li>{{item.step}}</li>
               </ul>
            </div>
            
            <div  class="text text3 col-md-3" style="border: 1px solid #fffafa; color: #f1f1f1; ">
                <h3 class="p-3">Ingredients</h3>

                  <ul>
                  <template v-for="item in recipe.analyzedInstructions[0].steps">
                    <li  style="border: 2px solid #f1f1f1; margin: 2px 0" v-for="ingredient in item.ingredients" :key="ingredient.id">
                      {{ingredient.name}}
                    </li>
                  </template>
                  </ul>

             </div>

             

        </div>


    </div>



    <Footer></Footer>
  </div>
</template>

<script>
import HomeNavigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue"
export default {

  components: {
            HomeNavigation,
            Footer
        },
          data() {
            return {
               //data that is used in the components
               recipe:''
            }
        },
  mounted: function(){
  
    var url_string = window.location.href;
    var url = new URL(url_string);
    var recipeId = url.searchParams.get("RecipeId");
    
    console.log(recipeId);
    
          
    this.$http.get("https://api.spoonacular.com/recipes/"+recipeId+"/information?apiKey=43f565ab010744c48b2fdd02bf4d4988&includeNutrition=false").then(response => {
                this.recipe = response.data;
                console.log(response.data);
      });   

  }
}

</script>

<style scoped>
  .para{
    font-family:  Georgia, serif;;
    font-weight: 600;
    color: #fffafa

  }
ul li{
    list-style-type: none;
    text-decoration: none;
   
 
}

.text{
    color: white;

border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.rowSpace{
    margin-right:20px;
}

.spaceDiv{
    margin-top: 80px;
}
.img-fluid{
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

.bg{
 backdrop-filter: blur(0px) saturate(200%);
    -webkit-backdrop-filter: blur(0px) saturate(200%);
    background-color: rgba(0, 0, 0, 0.66);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
border-radius: 30px;
}
.detImg{
	opacity: 0;
	animation: fadeIn 1s ease-in both;
}
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translate3d(0, -20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

.equipments{
 backdrop-filter: blur(5px) saturate(200%);
    -webkit-backdrop-filter: blur(5px) saturate(200%);
    background-color: rgba(21, 21, 21, 0.336);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);

}
.equipment{
  display:inline;
  margin: 0 10px;
border: 1px solid #fffafa;
background-color: rgba(163, 163, 163, 0.336);
  color: #fffafa;
  border-radius:25px;
  padding: 5px 10px
}
.equipment:hover{
  background-color: rgba(0, 0, 0, 0.664);
  transition: ease-in;
}
.deetbg{
  background-image: url(../assets/recipe.jpg);
  background-size: cover;
}

</style>

