function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
buf.push("<div class=\"template\"><ul>");
// iterate [1, 2, 3]
;(function(){
  var $$obj = [1, 2, 3];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul></div>");}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}
