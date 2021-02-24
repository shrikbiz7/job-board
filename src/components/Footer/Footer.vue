<template>
    <v-footer :color="currentTheme.primary" padless>
        <v-row no-gutters>
            <v-col class="lighten-2 py-4 text-right white--text" :class="currentTheme.primary" cols="11">
                Author: <strong>Shrikant Pate</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
import store from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component
export default class Footer extends Vue {
    storeModule: any;

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get currentTheme() {
        const { isDarkTheme, darkTheme, lightTheme } = this.storeModule;
        return isDarkTheme ? darkTheme : lightTheme;
    }
}
</script>
