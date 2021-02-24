<template>
    <v-app>
        <v-main v-if="true" class="primary">
            <v-container>
                <div style="margin: 20px auto">
                    <v-card elevation="18">
                        <v-row class="accent rounded-t-lg" width="auto">
                            <v-col col="auto">
                                <h3 style="text-align: center; font-family: Verdana, sans-serif">
                                    Search for your next job
                                </h3>
                            </v-col>
                        </v-row>
                        <v-row justify="center" class="accent rounded-b-lg">
                            <v-col cols="auto">
                                <div align="center">
                                    <v-text-field clearable style="width: 20rem" label="Search" outlined></v-text-field>
                                </div>
                            </v-col>
                            <v-col cols="auto">
                                <div align="center">
                                    <v-text-field clearable style="width: 20rem" label="Search" outlined></v-text-field>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
            </v-container>
            <v-container>
                <v-row justify="center">
                    <v-col v-for="n in 25" :key="n" cols="auto">
                        <!--  -->
                        <v-card class="mx-auto secondary" max-width="344" outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="headline mb-1">
                                        Job Title
                                    </v-list-item-title>
                                    <div class="overline">
                                        Company Name
                                    </div>
                                    <div class="overline">
                                        Location
                                    </div>
                                </v-list-item-content>

                                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                            </v-list-item>
                            <div style="text-align: center">
                                <v-list-item-subtitle style="width: 90%; margin: auto; height: auto">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam voluptatum dolores,
                                    eligendi at et deserunt cum eveniet consequuntur reiciendis veritatis quasi fugiat,
                                    excepturi quam voluptas odio tempora possimus quod? Illum?
                                </v-list-item-subtitle>
                            </div>

                            <v-card-actions>
                                <v-dialog transition="dialog-top-transition" width="auto">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="accent" v-bind="attrs" v-on="on">From the top</v-btn>
                                    </template>
                                    <template v-slot:default="dialog">
                                        <v-card class="mx-auto">
                                            <v-list-item two-line>
                                                <v-list-item-content>
                                                    <v-list-item-title class="headline">
                                                        San Francisco
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle
                                                        >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
                                                    >
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-card-text>
                                                <v-row align="center">
                                                    <v-col class="display-3" cols="6">
                                                        23&deg;C
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-img
                                                            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                                                            alt="Sunny image"
                                                            width="92"
                                                        ></v-img>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>

                                            <v-list-item>
                                                <v-list-item-icon>
                                                    <v-icon>mdi-send</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
                                            </v-list-item>

                                            <v-list-item>
                                                <v-list-item-icon>
                                                    <v-icon>mdi-cloud-download</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-subtitle>48%</v-list-item-subtitle>
                                            </v-list-item>

                                            <v-slider
                                                v-model="time"
                                                :max="6"
                                                :tick-labels="labels"
                                                class="mx-4"
                                                ticks
                                            ></v-slider>

                                            <v-list class="transparent">
                                                <v-list-item v-for="item in forecast" :key="item.day">
                                                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                                                    <v-list-item-icon>
                                                        <v-icon>{{ item.icon }}</v-icon>
                                                    </v-list-item-icon>

                                                    <v-list-item-subtitle class="text-right">
                                                        {{ item.temp }}
                                                    </v-list-item-subtitle>
                                                </v-list-item>
                                            </v-list>

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-btn text @click="dialog.value = false">
                                                    Full Report
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>

                                        <!-- <v-card>
                                            <v-toolbar color="accent" dark>Opening from the top</v-toolbar>
                                            <v-card-text>
                                                <div class="text-h2 pa-12">Hello world!</div>
                                            </v-card-text>
                                            <v-card-actions class="justify-end">
                                                <v-btn text @click="dialog.value = false">Close</v-btn>
                                            </v-card-actions>
                                        </v-card> -->
                                    </template>
                                </v-dialog>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <!-- <v-main class="primary">
            <v-dialog persistent transition="dialog-top-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="accent" v-bind="attrs" v-on="on">From the top</v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="accent" dark>Opening from the top</v-toolbar>
                        <v-card-text>
                            <div class="text-h2 pa-12">Hello world!</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-main> -->
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';

@Component({
    components: {},
})
export default class JobSearch extends Vue {
    storeModule: any;

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
        this.storeModule.getGitJobData();
    }

    get currentTheme() {
        const { isDarkTheme, darkTheme, lightTheme } = this.storeModule;
        return isDarkTheme ? darkTheme : lightTheme;
    }
}
</script>
<style lang="scss" scoped></style>
