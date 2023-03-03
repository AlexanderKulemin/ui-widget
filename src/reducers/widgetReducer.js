const reducer = (state, action) => {
    const { type, id } = action;
    switch (type) {
        case 'TOGGLE_WIDGET':
            return { ...state, isOpenWidget: !state.isOpenWidget }
        case 'TOGGLE_WIDGET_POSITION':
            return { ...state, isLeftWidgetPosition: !state.isLeftWidgetPosition }
        case 'TOGGLE_MENU_ACCESSIBILITY': {
            const updateMenu = state.accessibilityMenu.map(menu =>
                menu.id === id ? { ...menu, selected: !menu.selected } : menu
            );
            return { ...state, accessibilityMenu: updateMenu }
        }
        default:
            return state;
    }
}
export default reducer;