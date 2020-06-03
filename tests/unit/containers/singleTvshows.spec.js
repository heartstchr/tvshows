import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import SingleTvshows from '@/containers/SingleTvshows.vue'
import Episodes from "@/components/episodes.comp.vue";
import Cast from "@/components/cast.comp.vue";
import Crew from "@/components/crew.comp.vue";

describe('SingleTvshows.vue', () => {
    let singleTvshowsWrapper
    const router = new VueRouter({ path: "/tvshows/:id", name: "singleTvshows" });
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        singleTvshowsWrapper = shallowMount(SingleTvshows, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        singleTvshowsWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(singleTvshowsWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-page element', () => {
        expect(singleTvshowsWrapper.html()).toContain("div");
    });

    describe("it should render router view", () => {
        it('it should have a div', () => {
            expect(singleTvshowsWrapper.html()).toContain("div");
        });
        it("it should load the SingleTvshows view by default", () => {
            expect(SingleTvshows).toBeTruthy();
        });
    });

    describe("it should render router view", () => {
        it('it should have a div', () => {
            expect(singleTvshowsWrapper.html()).toContain("div");
        });
        it("it should load the Search view by default", () => {
            expect(Episodes).toBeTruthy();
        });
    });
    describe("it should render router view", () => {
        it('it should have a div', () => {
            expect(singleTvshowsWrapper.html()).toContain("div");
        });
        it("it should load the Search view by default", () => {
            expect(Cast).toBeTruthy();
        });
    });
    describe("it should render router view", () => {
        it('it should have a q-page', () => {
            expect(singleTvshowsWrapper.html()).toContain("div");
        });
        it("it should load the Search view by default", () => {
            expect(Crew).toBeTruthy();
        });
    });
})
