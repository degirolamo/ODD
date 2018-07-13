var toolkit;

(function () {

    var root = this;
    var jsPlumb = root.jsPlumb;

    jsPlumbToolkit.ready(function () {

        toolkit = jsPlumbToolkit.newInstance({
            beforeConnect: function (source, target) {
                // ignore node->node connections; our UI is not configured to produce them. we could catch it and
                // return false, though, which would ensure that nodes could not be connected programmatically.
                if (source.objectType !== "Node" && target.objectType !== "Node") {

                    // cannot create loopback connections
                    if (source === target) {
                        return false;
                    }

                    // cannot connect to Ports on the same Node as the Edge source
                    if (source.getNode() === target.getNode()) {
                        return false;
                    }
                    return true;
                }
            }
        });
        console.log(toolkit);

        var mainElement = document.querySelector("#jtk-demo-connectivity"),
            canvasElement = mainElement.querySelector(".jtk-demo-canvas"),
            miniviewElement = mainElement.querySelector(".miniview");

        // ----------------------- this code is the node generator.--------------------------------------

        var newNode = function () {
            $.ajax({
                url: 'DB/themeDB',
                type: 'GET',
                dataType: 'json'
            }).done(function (result) {
                data = {
                    id: "Champs thématique du Valais",
                    items: []
                };

                $(result).each(function (i) {
                    var entry = result[i].name;
                    var item = {
                        entries: [entry],
                        index: i
                    }
                    data.items.push(item);
                })
                toolkit.addNode(data);
            })

            $.ajax({
                url: 'DB/oddDB',
                type: 'GET',
                dataType: 'json'
            }).done(function (result) {
                data = {
                    id: "ODD",
                    items: []
                };

                $(result).each(function (i) {
                    var item = {
                        entries: [result[i].id + ". " + result[i].name],
                        index: i
                    }
                    data.items.push(item);
                })
                return toolkit.addNode(data);
            })
        };





        // ---------------------------- / end random node generator ---------------------------------------------

        // initial dataset consists of a node.
        var nodeCount = 1;
        for (var i = 0; i < nodeCount; i++) {
            newNode();
        }


        var view = {
            nodes: {
                "default": {
                    template: "tmplNode"
                }
            },
            edges: {
                "default": {
                    connector: ["StateMachine", { curviness: 10 }],
                    endpoint: ["Dot", { radius: 10 }],
                    anchor: ["Continuous", { faces: ["left", "right"] }]
                }
            }
        };

        var renderer = toolkit.render({
            container: canvasElement,
            zoomToFit: true,
            view: view,
            layout: {
                type: "Spring"
            },
            miniview: {
                container: miniviewElement
            },
            lassoFilter: ".controls, .controls *, .miniview, .miniview *",
            events: {
                canvasClick: function (e) {
                    toolkit.clearSelection();
                },
                modeChanged: function (mode) {
                    jsPlumb.removeClass(jsPlumb.getSelector("[mode]"), "selected-mode");
                    jsPlumb.addClass(jsPlumb.getSelector("[mode='" + mode + "']"), "selected-mode");
                }
            },
            consumeRightClick: false,
            activeFiltering: true
        });

        //
        // use e+vent delegation to attach event handlers to
        // remove buttons. This callback finds the related Node and
        // then tells the toolkit to delete it.
        //
        jsPlumb.on(canvasElement, "tap", ".delete *", function (e) {
            var info = toolkit.getObjectInfo(this);
            var selection = toolkit.selectDescendants(info.obj, true);
            toolkit.remove(selection);
        });

        //
        // use event delegation to attach event handlers to
        // add buttons. This callback adds an edge from the given node
        // to a newly created node, and then the layout is refreshed.
        //
        jsPlumb.on(canvasElement, "tap", ".add *", function (e) {
            // add the node to the toolkit
            var newNode = toolkit.addNode(n);
            // and add an edge for it from the current node.
            toolkit.addEdge({ source: info.obj, target: newNode });
        });

        // pan mode/select mode
        // jsPlumb.on(mainElement, "tap", "[mode]", function () {
        //     renderer.setMode(this.getAttribute("mode"));
        // });

        // on home button tap, zoom content to fit.
        jsPlumb.on(mainElement, "tap", "[reset]", function () {
            toolkit.clearSelection();
            renderer.zoomToFit();
        });

        //
        // assign a class to a new node which brings the user's attention to it. then a little while later,
        // take it off.
        //
        function flash(el) {
            jsPlumb.addClass(el, "hl");
            setTimeout(function () {
                jsPlumb.removeClass(el, "hl");
            }, 1950);
        }

        jsPlumb.on(mainElement, "tap", "[add]", function () {
            var node = newNode();
            renderer.zoomToFit();
            flash(renderer.getRenderedElement(node));
        });
        new jsPlumbSyntaxHighlighter(toolkit, ".jtk-demo-dataset");
    });
})();

function saveEdges() {
    var edgesList = toolkit.getAllEdges();
    var result = [];
    for (var i = 0; i < edgesList.length; i++) {
        var currentEdge = edgesList[i];
        var source = currentEdge.source;
        var nodeName = source.getNode().data.id;
        var temp = {
            odd: 0,
            theme: 0
        }
        if (nodeName == "ODD") {
            temp.odd = Number(source.id) + 1;
            temp.theme = Number(currentEdge.target.id) + 1;
        } else {
            temp.theme = Number(source.id) + 1;
            temp.odd = Number(currentEdge.target.id) + 1;
        }
        result.push(temp);
    }
    console.log(result);
    return result;
}

function saveLinks() {
    document.getElementById("hiddenInput").value = JSON.stringify(saveEdges())
    document.getElementById("themeForm").submit();
}