import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import EpisodesComp from "@/components/episodes.comp.vue";

describe('episodes.comp.vue', () => {
    let episodesCompWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        episodesCompWrapper = shallowMount(EpisodesComp, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        episodesCompWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(episodesCompWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-expansion-item element', () => {
        expect(episodesCompWrapper.find("q-expansion-item")).toMatchObject({"selector": "q-expansion-item"});
    });

    describe("it should render router view", () => {
        it('it should have a q-expansion-item', () => {
            expect(episodesCompWrapper.find("q-expansion-item")).toMatchObject({"selector": "q-expansion-item"});
        });
        it("it should load the Home view by default", () => {
            expect(EpisodesComp).toBeTruthy();
        });
    });
})
