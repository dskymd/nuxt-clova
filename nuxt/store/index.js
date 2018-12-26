export const state = () => ({
    keywords: "surly",
    isloading: false,

    searchResults: [],
})

export const mutations = {
    setSearchKeyWords(state, words) {
        state.keywords = words
    },
    setLoadingState(state, boo) {
        state.isloading = boo
    },



    pushToSearchResults(state, o) {
        state.searchResults.push(o)
    },
    clearSearchResults(state) {
        state.searchResults = []
    }
}