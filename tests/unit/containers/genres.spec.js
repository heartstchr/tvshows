import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import Genres from "@/containers/Genres";
import HorizontalComp from "@/components/horizontal.comp.vue";

describe('Genres.vue', () => {
    let genresWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        genresWrapper = shallowMount(Genres, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        genresWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(genresWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-page element', () => {
        expect(genresWrapper.html()).toContain("q-page");
    });

    describe("it should render router view", () => {
        it('it should have a q-page', () => {
            expect(genresWrapper.html()).toContain("q-page");
        });
        it("it should load the Genres view by default", () => {
            expect(Genres).toBeTruthy();
        });
    });
    describe("it should load horizontal component", () => {
        it("it should have a horizontal", () => {
            expect(genresWrapper.html()).toContain("horizontal");
        });
        it("it should load the horizontal", () => {
            expect(HorizontalComp).toBeTruthy();
        });
    });
})
