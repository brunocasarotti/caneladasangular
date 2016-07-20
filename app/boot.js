System.register(['angular2/platform/browser', './index-component', './menu-component', './lista-filiados-component'], function(exports_1) {
    var browser_1, index_component_1, menu_component_1, lista_filiados_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (lista_filiados_component_1_1) {
                lista_filiados_component_1 = lista_filiados_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(index_component_1.IndexComponent);
            browser_1.bootstrap(menu_component_1.MenuComponent);
            browser_1.bootstrap(lista_filiados_component_1.ListaFiliados);
        }
    }
});
//# sourceMappingURL=boot.js.map