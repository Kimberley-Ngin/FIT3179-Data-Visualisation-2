var vg_1 = "js/fire_map.vg.json";
vegaEmbed("#fire_spots_map", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "js/annual_rainfall.vg.json";
vegaEmbed("#annual_rainfall", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "js/temperature_anomoly.vg.json";
vegaEmbed("#temp_anomoly", vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "js/annual_max_temp.vg.json";
vegaEmbed("#max_temp", vg_4).then(function(result) {
}).catch(console.error);