(function () {
    jsPlumb.ready(function () {

        var instance = jsPlumb.getInstance({
            DragOptions: { cursor: 'pointer', zIndex: 2000 },
            PaintStyle: { stroke: '#666' },
            EndpointHoverStyle: { fill: "orange" },
            HoverPaintStyle: { stroke: "orange" },
            EndpointStyle: { width: 20, height: 16, stroke: '#666' },
            Endpoint: "Rectangle",
            Anchors: ["TopCenter", "TopCenter"],
            Container: "container",
            MaxConnections: 1,
            ConnectionsDetachable: false,
        });

        // suspend drawing and initialise.
        instance.batch(function () {

            var color2 = "#316b31";
            var exampleEndpoint2 = {
                endpoint: ["Dot", { radius: 11 }],
                paintStyle: { fill: color2 },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: color2, strokeWidth: 6 },
                connector: ["Bezier", { curviness: 63 } ],
                maxConnections: 3,
                isTarget: true,
            };

            // setup some empty endpoints.  again note the use of the three-arg method to reuse all the parameters except the location
            // of the anchor (purely because we want to move the anchor around here; you could set it one time and forget about it though.)
            var e1 = instance.addEndpoint('div1', { anchor: [0.5, 1, 0, 1] }, exampleEndpoint2);

            var e2 = instance.addEndpoint('div2', { anchor: "LeftMiddle" }, exampleEndpoint2);

            // make .window divs draggable
            instance.draggable(jsPlumb.getSelector(".drag-drop .window"),{containment:true});
          
            
            var overlayInst = connectionInst.getOverlay('jsplumb-connection-label-id');
            overlayInst.setLabel('overLay');
            overlayInst.bind('dblclick', function (info, e){
              console.log('connection is clicked!' + (++clickCount));
            });
        });


        jsPlumb.fire("jsPlumbDemoLoaded", instance);

    });
})();