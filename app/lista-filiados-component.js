System.register([], function(exports_1) {
    var ClienteListarComponent;
    return {
        setters:[],
        execute: function() {
            ClienteListarComponent = (function () {
                function ClienteListarComponent(clienteService) {
                    this.clienteService = clienteService;
                }
                ClienteListarComponent.prototype.listar = function () {
                    this.clientes = this.clienteService.listar();
                };
                return ClienteListarComponent;
            })();
            exports_1("ClienteListarComponent", ClienteListarComponent);
        }
    }
});
//# sourceMappingURL=lista-filiados-component.js.map