const { St, Clutter, Gio } = imports.gi;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Util = imports.misc.util;

let activityButton;

function init() {
    // CSSスタイルの適用
    const stylesheet = Me.dir.get_child('stylesheet.css');
    if (stylesheet.query_exists(null)) {
        let themeContext = St.ThemeContext.get_for_stage(global.stage);
        let theme = themeContext.get_theme();
        theme.load_stylesheet(stylesheet);
    }

    // アクティビティボタンを削除
    activityButton = Main.panel.statusArea.activities;
    if (activityButton) {
        activityButton.container.hide();
    }
}

function enable() {
    if (activityButton) {
        activityButton.container.hide();
    }
}

function disable() {
    if (activityButton) {
        activityButton.container.show();
    }
}

