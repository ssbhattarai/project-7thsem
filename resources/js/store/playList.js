export const playlist = {
    state: () => ({
        songs: [],
        activeIndex: 1,
        activeSong: {},
        status: 'paused'
    }),

    actions: {
        nextSong( { commit, state }, index ){
            alert('clicked');
            let nextIndex = null;

            if( index ){
                nextIndex = index;
            }else{
                nextIndex = state.activeIndex + 1;
            }

            commit( 'setActiveIndex', nextIndex );
            commit( 'setActiveSong', state.songs[ nextIndex ] );
        }
    },

    mutations: {
        setActiveIndex( state,index ){
            state.activeIndex = index;
        },

        setActiveSong( state,song ){
            state.activeSong = song;
        }
    },

    getters: {
        getActiveIndex( state ){
            return state.activeIndex;
        },

        getActiveSong( state ){
            return state.activeSong;
        }
    }

}
