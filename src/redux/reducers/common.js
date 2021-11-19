const defaultState = {
    appName: '',
    modalMode: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
        console.log(`toggling modal: ${action.modalMode}`)
        return {
            ...defaultState,
            modalMode: action.modalMode
        }
        default:
            return state;
    }
};

/** Here, this reducer function will be responsible for holding our app name and the sign-in SignInWith modal. We defined a TOGGLE_MODAL action that will set the modalMode to either true or false. All the sign-in SignInWith component have to do is to connect to the state modalMode and respond according to the state’s mode.
 * 
 */