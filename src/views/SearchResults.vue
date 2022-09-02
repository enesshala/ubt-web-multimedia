<template>
  <div>
     <HomeNavigation></HomeNavigation>

      <div class="container">
        <div style="margin-top:50px"></div>
        <div class="d-flex justify-content-center">
             
                <h1 class="text">Results: </h1>
               
                <img src="../assets/menu.png" alt="" width="50px" height="50px">
               
  
            </div>

            <div class="spaceDiv"></div>
     

      <ul v-for="item in recipes.results" :key="item.id">
            <li>
                <div class="d-flex">
                  <a v-bind:href="'/RecipeDetails?RecipeId='+item.id"> <img :src="item.image" alt="" width="100px" height="100px" class="resultImg"></a>
                   
                    <div class="rowSpace"></div>
                    <div>
                        <h3 class="text"><a v-bind:href="'/RecipeDetails?RecipeId='+item.id">{{item.title}}</a></h3>
                       
                    </div>
                   
                </div>
            </li>
      </ul>
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
               recipes:[]
            }
        },
  mounted: function(){
  
    var url_string = window.location.href;
    var url = new URL(url_string);
    var search = url.searchParams.get("search");
    
    console.log(search);
    
          
     this.$http.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=43f565ab010744c48b2fdd02bf4d4988&query="+search+"&number=10").then(response => {
                this.recipes = response.data;
                console.log(response.data);
      });      

  }
}

</script>

<style scoped>
 .resultImg {
    border-radius: 50%;
    margin-right: 50px;
  }

ul li{
    list-style-type: none;
    text-decoration: none;
    padding: 5px;
    margin: 4px;
    border-bottom: double ;
    border-color: rgb(175, 175, 175);
}

.text{
    color: white;
}

.rowSpace{
    margin-right:20px;
}

.spaceDiv{
    margin-top: 100px;
}

a{
  color: white;
  text-decoration: none;
}

ul li:hover{
  background-color: rgb(139, 139, 139);
  border-radius: 100px;
}

</style>

