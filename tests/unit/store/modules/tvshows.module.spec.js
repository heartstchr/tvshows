import store from '../../../../src/store'

describe('tvshows.module.js', () => {
    const genres = [
        "Drama",
        "Action",
        "Comedy",
        "Romance",
        "Horror",
        "Family"
    ]
    const tabs =[
        {name:"cast",icon:"cast"},
        {name:"episodes",icon:"ondemand_video"},
        {name:"crew",icon:"streetview"}
    ]
    describe("tvshow getters", () => {
        it("returns tvshows", () => {
            const actual = store.getters.tvshows
            expect(typeof actual).toEqual("object")
        })
        it("returns uniqueGenres", () => {
            const actual = store.getters.allGenres
            expect(actual).toEqual(genres)
        })
        it("returns seasons", () => {
            const actual = store.getters.seasons
            expect(typeof actual).toEqual("object")
        })
        it("returns casts", () => {
            const actual = store.getters.casts
            expect(typeof actual).toEqual("object")
        })
        it("returns crews", () => {
            const actual = store.getters.crews
            expect(typeof actual).toEqual("object")
        })
        it("returns tabs", () => {
            const actual = store.getters.tabs
            expect(actual).toEqual([])
        })
    })
})
