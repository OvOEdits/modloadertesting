(function() {
    const testing = {
        init() {
            this.game.init();
            globalThis.ovoTesting = this;
        },

        game: {
                init() {
                    this.runtime = c3_runtimeInterface._GetLocalRuntime();
                },

                /* getPlayer() {
                    return this.runtime._allObjectClasses[12]
                    
                    
                }, */

                getPlayer() {
                    return this.runtime.GetObjectClassByIndex
                },

                getLayout() {
                    return this.runtime._layoutManager.GetMainRunningLayout()
                    
                },

                setLayout(layout) {
                    this.runtime._layoutManager._pendingChangeLayout = this.runtime._layoutManager.GetLayoutByName(layout)
                },

                getLayer(layerName = "Layer 0") {
                    return this.runtime._layoutManager.GetMainRunningLayout()._layers.find(x => x.name = layerName)
                },

                layerScale(layer, scale) {
                    this.runtime._layoutManager.GetMainRunningLayout()._layers.find(x => x.name = layer)._scale = scale
                    return layer;
                },

                
            },
    };
    testing.init();
})();
