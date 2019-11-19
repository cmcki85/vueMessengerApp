import chatkit from '../chatkit';

// Helper function for error message display.
function handleError(commit, error) {
    const message = error.message || error.info.error_description;
    commit('setError', message);
}

export default {
    async login({commit, state}, userId) {
        try {
            commit('setError', '');
            commit('setLoading', true);
            // Connect to ChatKit Service
            const currentUser = await chatkit.connectUser(userId);
            commit('setUser', {
                username: currentUser.id,
                name: currentUser.name
            });

            // Save list of users rooms in store. 
            const rooms = currentUser.rooms.map(room => ({
                id: room.id,
                name: room.name,
            }))
            commit('setRooms', rooms);

            // Subscribe user to a room.
            const activeRoom = state.activeRoom || rooms[0] // use last used room or 1st one.
            commit('setActiveRoom', {
                id: activeRoom.id,
                name: activeRoom.name
            })
            await chatkit.subscribeToRoom(activeRoom.id);
            return true;
        } catch (error) {
            handleError(commit, error);
        } finally {
            commit('setLoading', false);
        }
    }
}