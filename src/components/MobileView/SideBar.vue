<template>
    <v-navigation-drawer
        v-if="viewRatio !== 'lg'"
        @click="handleDrawer($event)"
        :value="drawer"
        v-model="drawerStatus"
        fixed
        temporary
        touchless
    >
        <!--  -->
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import store from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component
export default class SideBar extends Vue {
    storeModule: any;
    // currentTheme: object = {};
    themeList: string[] = ['Light Theme', 'Dark Theme'];
    drawerStatus = null;

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    handleThemeSwitch() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.storeModule.changeStoreTheme();
    }

    get drawer() {
        this.drawerStatus = this.storeModule.isSideBar;
        return this.storeModule.isSideBar;
    }

    updated() {
        if (!this.drawerStatus) this.storeModule.hideSideBar();
    }

    get viewRatio() {
        //xs, sm, md, lg, xl
        return this.$vuetify.breakpoint.name;
    }

    get currentThemeText() {
        return this.storeModule.isDarkTheme ? 'Dark Theme' : 'Light Theme';
    }
}
</script>
