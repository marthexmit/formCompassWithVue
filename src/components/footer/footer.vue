<template>
   
  <input :type="type" @click="setButton"  :placeholder="place" :id="idSelect" :class="classInput" @input="valorPegar"/>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'FooterComponent',
    props: {
        type: {
            type: String,
        },
        place: {
            type: String,
        },
        classInput: {
            type: String,
        },	
        idSelect: {
            type: String,
        },
    },
     methods: {
        ...mapActions(['setName', 'setEmail', 'setPassword', 'setPhone', 'setDate', 'setCheckbox','setButton']),

        valorPegar(e) {
            if (this.classInput === 'input-name') {
                this.setName(e.target.value);
            } else if (this.type === "date") {
                this.setDate(e.target.value);
            } else if (this.type === "checkbox") {
                this.setCheckbox(e.target.checked);
            } else if (this.type === "email") {
                this.setEmail(e.target.value);
            } else if (this.type === "password") {
                this.setPassword(e.target.value);
            } else if (this.idSelect === 'phone') {
                this.setPhone(e.target.value);
            } 
        },

        
    },
};
</script>

<style lang="sass" scoped>

@import '@/components/footer/footer.scss'

</style>