<template>
    <div class="divHome">
        <form  id="form" class="forms">
            <div class="headerFake">
                <img :src="require('@/assets/Logo.png')" />
            </div>

            <h1 class="title">Intern Sign Up</h1>

            <section class="separation">
                <div class="form-group-name">
                    <label for="name" class="required">Full Name</label>
                    <FooterComponent type="text" id="name" classInput="input-name" place="Name" />
                    <div id="validation-name" style="display: none">Fullname invalid</div>
                </div>


                <div class="form-group-email">
                    <label for="email" class="required">Email</label>
                    <FooterComponent type="email" id="email" class="input-email" place="foo@bar.com" />
                    <div id="validation-email" style="display: none">Email Invalid</div>
                </div>

                <div class="form-group-phone">
                    <label for="phone" class="required-phone">Phone</label>
                    <FooterComponent type="text" v-mask="['(##) #####-####']" idSelect="phone" class="input-phone" place="(83) 00000-0000"
                        maxlength="15" />
                    <div id="validation-phone" style="display: none">
                        Phone Invalid
                    </div>
                </div>



                <div class="form-group-password">
                    <label for="password" class="required">Password</label>
                    <FooterComponent type="password" id="password" class="input-password" place="Enter your password" />
                    <div id="validation-password" style="display: none">
                        Password Invalid
                    </div>
                </div>

                <div class="form-group-birthday">
                    <label for="birthday" class="required">Birthday</label>
                    <FooterComponent type="date" id="birthday" class="input-birthday"/>
                    <div id="validation-birthday" style="display: none">
                        Age Invalid
                    </div>
                </div>

            </section>

            <div class="fake-footer">

                <div id="main-check">
                    <label class="container">I accept the terms and privacy

                        <div class="reverse">
                            <FooterComponent type="checkbox" checked="checked" id="checkbox" />
                            <span class="check"></span>
                        </div>
                    </label>
                    <div id="validation-checkbox" style="display: none">
                        You must accept the terms
                    </div>
                </div>

                <div class="register">
                    <FooterComponent type="button" value="Register" id="action-btn" class="btn-register"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import FooterComponent from "@/components/footer/footer.vue";
import {mask} from 'vue-the-mask';

export default {
    directives: {mask},
    name: "HomePage",
    components: {
        FooterComponent,
    },
    
}
</script>

<style lang="sass" scoped>
@import '@/views/Home/Home.scss'
</style>
