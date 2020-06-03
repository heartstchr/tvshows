import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import HomeSlider from "@/components/homeSlider.comp.vue";

describe('homeSlider.comp.vue', () => {
    let homeSliderWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        homeSliderWrapper = shallowMount(HomeSlider, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        homeSliderWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(homeSliderWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-carousel element', () => {
        expect(homeSliderWrapper.html()).toContain("q-carousel");
    });

    describe("it should render router view", () => {
        it('it should have a q-carousel', () => {
            expect(homeSliderWrapper.html()).toContain("q-carousel");
        });
        it("it should load the Home view by default", () => {
            expect(HomeSlider).toBeTruthy();
        });
    });
    it('go to of tvshow with id testing', async () => {
        homeSliderWrapper.vm.goTo('drama')
        await homeSliderWrapper.vm.$nextTick()
        expect( homeSliderWrapper.html()).toContain("q-carousel")
    })
})
