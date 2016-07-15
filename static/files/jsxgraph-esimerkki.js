jQuery('head').append('<link type="text/css" rel="stylesheet" media="all" href="../files/jsxgraph.css"></link>');
if (jQuery('#jsxgbox').length > 0){
    var b = JXG.JSXGraph.loadBoardFromFile('jsxgbox', '../files/something.ggb', 'geogebra');
}
