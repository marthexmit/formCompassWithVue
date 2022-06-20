<template>
  <div  class="divSucess">
    <form @submit.prevent="SucessPage" class="Sucess">
        <div class="separationSucess">
          <div class="fakeHeaderSucess">
            <img :src="require('@/assets/Logo.png')" />
          </div>

          <h1 class="titleSucess">Sucess!</h1>
        </div>
        <div class="registerSucess">
          <FooterComponent type="submit"  @submit="SucessPage" value="Go Back!" id="action-btnSucess" class="btn-registerSucess"/>
          
        </div>
    </form>
  </div>
</template>

<script>
import FooterComponent from "@/components/footer/footer.vue";



export default {
  name: 'SucessPage',
  components: {
    FooterComponent,
  },
  methods: {
    SucessPage: function() {
      var a = document.querySelector("#action-btnSucess")
      this.$router.push("/");
      a.addEventListener('submit', () => {
});
    },
  },
  
}
</script>

<style lang="sass" scoped>
@import @/views/Sucess/Sucess.scss
</style>