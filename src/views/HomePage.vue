<template>
    <v-row justify="center" class="masthead">
        <v-col cols="auto button">
            <v-btn x-large text color="primary">
                <h1>Git Jobs</h1>
                <v-icon x-large> mdi-arrow-right-thick</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';

@Component
export default class HomePage extends Vue {
    storeModule: any;

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }
}
</script>

<style scoped lang="scss">
.masthead {
    display: flex;
    align-items: center;
    background-image: linear-gradient(
        135deg,
        rgb(38, 50, 56) 0%,
        rgb(88, 101, 224) 69%,
        rgb(57, 73, 171) 89%
    ) !important;
    height: calc(100vh - 108px);
    // margin: auto;
    color: white;
}

h1 {
    font-size: 4em;
    font-weight: normal;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
</style>
