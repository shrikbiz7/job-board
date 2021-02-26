<template>
    <v-card class="mx-auto secondary" max-width="350" min-height="600" outlined>
        <v-list-item class="py-0">
            <v-list-item-content>
                <v-tooltip color="headerPrimary" bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-list-item-title style="cursor: pointer" :bind="attrs" :on="on" class="headline mt-4">
                            <!-- Job Title -->
                            {{ jobData.title }}
                        </v-list-item-title>
                    </template>
                    <span>
                        {{ jobData.title }}
                    </span>
                </v-tooltip>
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>
                <div class="subtitle-1 mt-3" style="width: 90%; margin: 0 auto">
                    <v-icon>mdi-map-marker</v-icon>
                    <!-- Location -->
                    <span>
                        {{ jobData.location }}
                    </span>
                </div>
                <div class="subtitle-1 mt-2" style="width: 90%; margin: 0 auto">
                    <!-- Company Name -->
                    <v-icon>
                        mdi-office-building
                    </v-icon>
                    {{ jobData.company }}
                </div>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
                <v-img
                    v-if="jobData.company_logo"
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    :src="jobData.company_logo"
                    transition="scale-transition"
                    maxWidth="80"
                />
                <v-icon transition="scale-transition" v-else x-large>mdi-domain</v-icon>
            </v-list-item-avatar>
        </v-list-item>
        <!--  -->

        <div class="textBackGround" style="width: 90%; margin: auto">
            <div class="text-justify my-3" style="text-align: center; width:90%; margin: auto">
                Description:
            </div>
            <div
                class="text-justify my-3"
                style="text-align: center; width:90%; margin: auto"
                v-html="ellipsify(jobData.description)"
            ></div>
        </div>

        <v-card-actions>
            <v-dialog transition="dialog-top-transition" width="600">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text color="normal" v-bind="attrs" v-on="on">
                        Show More...
                    </v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card class="mx-auto">
                        <template>
                            <v-card class="mx-auto secondary" max-width="600">
                                <v-app-bar color="headerPrimary" dense dark>
                                    <v-img
                                        alt="Vuetify Logo"
                                        class="shrink mr-2"
                                        contain
                                        src="@/assets/git.png"
                                        transition="scale-transition"
                                        maxWidth="45"
                                    />
                                    <h2>
                                        <strong>
                                            Github
                                        </strong>
                                        Jobs
                                    </h2>
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="dialog.value = false">
                                        <v-icon>mdi-close-thick</v-icon>
                                    </v-btn>
                                </v-app-bar>

                                <!--  -->
                                <v-card-title>{{ jobData.title }}</v-card-title>
                                <v-card-text>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <div class="subtitle-1 mt-3" style="width: 90%; margin: 0 auto">
                                                <v-icon>mdi-map-marker</v-icon>
                                                <!-- Location -->
                                                <span>
                                                    {{ jobData.location }}
                                                </span>
                                            </div>
                                            <div class="subtitle-1 mt-2" style="width: 90%; margin: 0 auto">
                                                <!-- Company Name -->
                                                <v-icon>
                                                    mdi-office-building
                                                </v-icon>
                                                {{ jobData.company }}
                                            </div>
                                            <div class="subtitle-1 mt-2" style="width: 70%">
                                                <!-- Company Name -->
                                                Description:
                                            </div>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="80">
                                            <v-img
                                                v-if="jobData.company_logo"
                                                alt="Vuetify Logo"
                                                class="shrink mr-2"
                                                contain
                                                :src="jobData.company_logo"
                                                transition="scale-transition"
                                                maxWidth="80"
                                            />
                                            <v-icon transition="scale-transition" v-else x-large>mdi-domain</v-icon>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-responsive class="overflow-y-auto mx-5" max-height="200">
                                        <div>
                                            <div v-html="jobData.description"></div>
                                        </div>
                                    </v-responsive>
                                    <v-divider class="mx-4"></v-divider>
                                    <v-list-item-content>
                                        <div class="subtitle-1 mt-2 ml-5">
                                            <!-- Company Name -->
                                            How To Apply:
                                        </div>
                                    </v-list-item-content>
                                    <v-responsive class="overflow-y-auto mx-5" max-height="200">
                                        <div>
                                            <div v-html="jobData.how_to_apply"></div>
                                        </div>
                                    </v-responsive>
                                </v-card-text>
                                <v-divider class="mx-4"></v-divider>

                                <v-card-actions class="ma-auto">
                                    <a :href="jobData.url ? jobData.url : 'https://jobs.github.com/'">
                                        <v-btn text>
                                            Apply
                                        </v-btn>
                                    </a>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-card>
                    <!--  -->
                </template>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import store from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component
export default class JobDetail extends Vue {
    @Prop() jobData!: any;
    storeModule: any;

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get viewRatio() {
        //xs, sm, md, lg, xl
        return this.$vuetify.breakpoint.name;
    }

    ellipsify(str: string) {
        const requiredLength = 400;
        return str.length > requiredLength ? str.substring(0, requiredLength) + '...' : str;
    }
}
</script>
