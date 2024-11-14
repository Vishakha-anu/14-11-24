var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SolarPanels_1 = new ol.format.GeoJSON();
var features_SolarPanels_1 = format_SolarPanels_1.readFeatures(json_SolarPanels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolarPanels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolarPanels_1.addFeatures(features_SolarPanels_1);
var lyr_SolarPanels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolarPanels_1, 
                style: style_SolarPanels_1,
                popuplayertitle: "Solar Panels",
                interactive: true,
                    title: '<img src="styles/legend/SolarPanels_1.png" /> Solar Panels'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_SolarPanels_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SolarPanels_1];
lyr_SolarPanels_1.set('fieldAliases', {'id': 'id', 'x-lab': 'x-lab', 'Name': 'Name', 'Area': 'Area', });
lyr_SolarPanels_1.set('fieldImages', {'id': '', 'x-lab': '', 'Name': '', 'Area': '', });
lyr_SolarPanels_1.set('fieldLabels', {'id': 'no label', 'x-lab': 'no label', 'Name': 'no label', 'Area': 'no label', });
lyr_SolarPanels_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});