<template>
  <input :type="type" :placeholder="place" />
</template>

<script>
export default {
    name: 'FooterComponent',
    props: {
        type: {
            type: String,
        },
        place: {
            type: String,
        },
    },
};
</script>

<style lang="sass" scoped>

@import '@/components/footer/footer.scss'

</style>