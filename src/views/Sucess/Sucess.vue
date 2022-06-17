<template>
  <div class="divSucess">
    <section class="Sucess">
        <div class="separationSucess">
          <div class="fakeHeaderSucess">
            <img :src="require('@/assets/Logo.png')" :alt="Sucess" />
          </div>

          <h1 class="titleSucess">Sucess!</h1>
        </div>
        <div class="registerSucess">
          <FooterComponent type="submit" value="Go Back!" id="action-btnSucess" class="btn-registerSucess"/>
        </div>
    </section>
  </div>
</template>

<script>
import FooterComponent from "@/components/footer/footer.vue";

export default {
  name: 'SucessPage',
  components: {
    FooterComponent,
  },
}
</script>

<style lang="sass" scoped>
@import @/views/Sucess/Sucess.scss
</style>