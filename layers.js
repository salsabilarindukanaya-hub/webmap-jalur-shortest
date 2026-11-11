var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KoordinatRumah_1 = new ol.format.GeoJSON();
var features_KoordinatRumah_1 = format_KoordinatRumah_1.readFeatures(json_KoordinatRumah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KoordinatRumah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KoordinatRumah_1.addFeatures(features_KoordinatRumah_1);
var lyr_KoordinatRumah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KoordinatRumah_1, 
                style: style_KoordinatRumah_1,
                popuplayertitle: 'Koordinat Rumah',
                interactive: true,
                title: '<img src="styles/legend/KoordinatRumah_1.png" /> Koordinat Rumah'
            });
var format_Koordinat_Titik_Uji_2 = new ol.format.GeoJSON();
var features_Koordinat_Titik_Uji_2 = format_Koordinat_Titik_Uji_2.readFeatures(json_Koordinat_Titik_Uji_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koordinat_Titik_Uji_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koordinat_Titik_Uji_2.addFeatures(features_Koordinat_Titik_Uji_2);
var lyr_Koordinat_Titik_Uji_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koordinat_Titik_Uji_2, 
                style: style_Koordinat_Titik_Uji_2,
                popuplayertitle: 'Koordinat_Titik_Uji',
                interactive: true,
                title: '<img src="styles/legend/Koordinat_Titik_Uji_2.png" /> Koordinat_Titik_Uji'
            });
var format_JalurShortest_3 = new ol.format.GeoJSON();
var features_JalurShortest_3 = format_JalurShortest_3.readFeatures(json_JalurShortest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurShortest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurShortest_3.addFeatures(features_JalurShortest_3);
var lyr_JalurShortest_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurShortest_3, 
                style: style_JalurShortest_3,
                popuplayertitle: 'Jalur Shortest',
                interactive: true,
                title: '<img src="styles/legend/JalurShortest_3.png" /> Jalur Shortest'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KoordinatRumah_1.setVisible(true);lyr_Koordinat_Titik_Uji_2.setVisible(true);lyr_JalurShortest_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KoordinatRumah_1,lyr_Koordinat_Titik_Uji_2,lyr_JalurShortest_3];
lyr_KoordinatRumah_1.set('fieldAliases', {'Nama Lokasi': 'Nama Lokasi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Koordinat_Titik_Uji_2.set('fieldAliases', {'Nama Lokasi': 'Nama Lokasi', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_JalurShortest_3.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', 'TUJUAN': 'TUJUAN', });
lyr_KoordinatRumah_1.set('fieldImages', {'Nama Lokasi': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Koordinat_Titik_Uji_2.set('fieldImages', {'Nama Lokasi': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_JalurShortest_3.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'TUJUAN': '', });
lyr_KoordinatRumah_1.set('fieldLabels', {'Nama Lokasi': 'no label', 'Latitude': 'no label', 'Longitude': 'inline label - always visible', });
lyr_Koordinat_Titik_Uji_2.set('fieldLabels', {'Nama Lokasi': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_JalurShortest_3.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', 'layer': 'no label', 'path': 'no label', 'TUJUAN': 'no label', });
lyr_JalurShortest_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});