import store from '@/store'

describe('config.module.js', () => {
    const config = {
        ENDPOINT: 'http://api.tvmaze.com/',
        leftDrawerOpen: false
    }
    describe("config getters", () => {
        it("returns ENDPOINT", () => {
            const actual = store.getters.ENDPOINT
            expect(actual).toEqual(config.ENDPOINT)
        })
        it("returns leftDrawerOpen", () => {
            const actual = store.getters.leftDrawerOpen
            expect(actual).toEqual(config.leftDrawerOpen)
        })
    })
})