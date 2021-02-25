<template>
    <v-footer color="headerPrimary" padless>
        <v-row no-gutters>
            <v-col class="py-4 text-right white--text headerPrimary" cols="11">
                Author: <strong>Shrikant Patel</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>
