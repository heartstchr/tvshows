import store from '../../../../src//store'
const genres = [
    "Drama",
    "Action",
    "Comedy",
    "Romance",
    "Horror",
    "Family"
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
})
