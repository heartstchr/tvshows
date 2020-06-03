import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import Home from '@/containers/Home.vue'
import Genres from "@/containers/Genres";
import HomeSlider from "@/components/homeSlider.comp.vue";

describe('Home.vue', () => {
    let homeWrapper
    const router = new VueRouter({ path: "/", name: "Home" });
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        homeWrapper = shallowMount(Home, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        homeWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(homeWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-page element', () => {
        expect(homeWrapper.html()).toContain("q-page");
    });

    describe("it should render router view", () => {
        it('it should have a q-page', () => {
            expect(homeWrapper.html()).toContain("q-page");
        });
        it("it should load the Home view by default", () => {
            expect(Home).toBeTruthy();
        });
    });
    describe("it should load Genres component", () => {
        it("does render a genres", () => {
            expect(homeWrapper.html()).toContain("genres")
        })
        it("it should load the Genres", () => {
            expect(Genres).toBeTruthy();
        });
    });
    describe("it should load HomeSlider component", () => {
        it("it should have a home-slider", () => {
            expect(homeWrapper.html()).toContain("home-slider");
        });
        it("it should load the HomeSlider", () => {
            expect(HomeSlider).toBeTruthy();
        });
    });
})
