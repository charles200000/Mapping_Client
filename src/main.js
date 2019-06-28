var Cesium = require('../thirdParty/cesium')


Cesium.Ion.defaultAccessToken = null;

//Initialize the viewer widget with several custom options and mixins.
var viewer = new Cesium.Viewer('cesiumContainer', {
    //Hide the base layer picker
    animation: false,
    baseLayerPicker : true,
    fullscreenButton: false,
    baseLayerPicker:false,
    homeButton:false,
    infoBox:false,
    timeline:false,
    navigationHelpButton:false,
    navigationInstructionsInitiallyVisible:false,
    //Use OpenStreetMaps
    imageryProvider : new Cesium.createOpenStreetMapImageryProvider({
        url : 'http://map.tacticalmapping.com/osm/'
    }),
    });
    
    viewer.scene.frameState.creditDisplay.addDefaultCredit(credit)
    //Add basic drag and drop functionality
    viewer.extend(Cesium.viewerDragDropMixin);
    
    //Show a pop-up alert if we encounter an error when processing a dropped file
    viewer.dropError.addEventListener(function(dropHandler, name, error) {
    console.log(error);
    window.alert(error);
    });