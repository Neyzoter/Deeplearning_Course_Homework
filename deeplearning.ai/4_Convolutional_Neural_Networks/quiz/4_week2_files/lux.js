LUX=(function(){var w=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMarks)?LUX.gaMarks:[]);var ae=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMeasures)?LUX.gaMeasures:[]);var aw={};var ak={};var X=0;var O=0;var al=0;var G=0;var c="LUX_start";var z="1.16";var aj=30*60;var o=t();var K=an(o);var aa=window.performance;var ay=2000;var V=("undefined"!==typeof(LUX)&&LUX.beaconUrl?LUX.beaconUrl:"https://spdcrv.global.ssl.fastly.net/lux/");var g=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.samplerate)?LUX.samplerate:100);var Q=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.auto)?LUX.auto:true);var av=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.label)?LUX.label:document.title);var j=("undefined"!==typeof(LUX)&&LUX.ns?LUX.ns:(Date.now?Date.now():+(new Date())));if(aa&&aa.timing&&aa.timing.navigationStart){j=aa.timing.navigationStart}function D(){if(aa){if(aa.now){return aa.now()}else{if(aa.webkitNow){return aa.now()}else{if(aa.msNow){return aa.now()}else{if(aa.mozNow){return aa.now()}}}}}var i=Date.now?Date.now():+(new Date());return i-j}function ag(i){if(aa){if(aa.mark){return aa.mark(i)}else{if(aa.webkitMark){return aa.webkitMark(i)}}}w.push({name:i,entryType:"mark",startTime:D(),duration:0});return}function Y(aC,aG,i){if("undefined"===typeof(aG)&&Z(c)){aG=c}if(aa){if(aa.measure){if(aG){if(i){return aa.measure(aC,aG,i)}else{return aa.measure(aC,aG)}}else{return aa.measure(aC)}}else{if(aa.webkitMeasure){return aa.webkitMeasure(aC,aG,i)}}}var aE=0,aB=D();if(aG){var aF=Z(aG);if(aF){aE=aF.startTime}else{if(aa&&aa.timing&&aa.timing[aG]){aE=aa.timing[aG]-aa.timing.navigationStart}else{return}}}if(i){var aD=Z(i);if(aD){aB=aD.startTime}else{if(aa&&aa.timing&&aa.timing[i]){aB=aa.timing[i]-aa.timing.navigationStart}else{return}}}ae.push({name:aC,entryType:"measure",startTime:aE,duration:(aB-aE)});return}function Z(i){return C(i,p())}function M(i){return C(i,aA())}function C(aC,aB){for(H=aB.length-1;H>=0;H--){var i=aB[H];if(aC===i.name){return i}}return undefined}function p(){if(aa){if(aa.getEntriesByType){return aa.getEntriesByType("mark")}else{if(aa.webkitGetEntriesByType){return aa.webkitGetEntriesByType("mark")}}}return w}function aA(){if(aa){if(aa.getEntriesByType){return aa.getEntriesByType("measure")}else{if(aa.webkitGetEntriesByType){return aa.webkitGetEntriesByType("measure")}}}return ae}function P(i){if(aa&&aa.clearMarks){return aa.clearMarks(i)}if(i){for(H=w.length-1;H>=0;H--){if(i===w[H].name){w.splice(H,1)}}}else{w=[]}return}function J(i){if(aa&&aa.clearMeasures){return aa.clearMeasures(i)}if(i){for(H=ae.length-1;H>=0;H--){if(i===ae[H].name){ae.splice(H,1)}}}else{ae=[]}return}function q(){var aF={};for(var aG=0,aC=p(),aH=aC.length;aG<aH;aG++){var aE=aC[aG],aB=aE.name,aJ=Math.round(aE.startTime);if("undefined"===typeof(aF[aB])){aF[aB]=aJ}else{aF[aB]=Math.max(aJ,aF[aB])}}for(var aG=0,aC=aA(),aH=aC.length;aG<aH;aG++){var aE=aC[aG],aB=aE.name,aJ=Math.round(aE.duration);if("undefined"===typeof(aF[aB])){aF[aB]=aJ}else{aF[aB]=Math.max(aJ,aF[aB])}}var aI=[];for(var aG=0,aD=Object.keys(aF),aH=aD.length;aG<aH;aG++){var aB=aD[aG];aI.push(aB+"|"+aF[aB])}return aI.join(",")}function ax(){aw={}}function au(){var i=[];for(var aB in aw){i.push(aB+"|"+aw[aB])}return i.join(",")}function n(aB,aC){var aD=typeof(aB);var i=typeof(aC);if("string"===aD&&("string"===i||"number"===i||"boolean"===i)){ak[aB]=aC}}function a(){var i=(""+K).substr(-2);return(parseInt(i)<g)}function f(){var i=[];for(var aB in ak){var aC=""+ak[aB];aB=aB.replace(/,/g,"").replace(/\|/g,"");aC=aC.replace(/,/g,"").replace(/\|/g,"");i.push(aB+"|"+aC)}return encodeURIComponent(i.join(","))}function ac(){P();J();ax();N();W();av=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.label)?LUX.label:document.title);X=0;al=0;o=t();K=an(o);ag(c)}function ap(){var aG=I();if(!aG){return d()}var aC=document.getElementsByTagName("script");var aD=0;for(var aE=0,aB=aC.length;aE<aB;aE++){var aF=aC[aE];if(aF.src&&!aF.async&&!aF.defer&&4===aF.compareDocumentPosition(aG)){aD++}}return aD}function m(){var aC=0;var aD=document.getElementsByTagName("link");for(var aE=0,aB=aD.length;aE<aB;aE++){var aF=aD[aE];if(aF.href&&"stylesheet"===aF.rel&&0!==aF.href.indexOf("data:")){if(aF.onloadcssdefined||"print"===aF.media||"style"===aF.as){}else{aC++}}}return aC}function d(){var aC=document.getElementsByTagName("script");var aD=0;for(var aE=0,aB=aC.length;aE<aB;aE++){var aF=aC[aE];if(aF.src&&!aF.async&&!aF.defer){aD++}}return aD}function ai(){var aC=document.getElementsByTagName("script");var aD=0;for(var aE=0,aB=aC.length;aE<aB;aE++){var aF=aC[aE];if(aF.src){aD++}}return aD}function R(){var aC=document.getElementsByTagName("link");var aD=0;for(var aE=0,aB=aC.length;aE<aB;aE++){var aF=aC[aE];if(aF.href&&"stylesheet"==aF.rel){aD++}}return aD}function e(){var aC="";if(aa&&aa.timing){var i=aa.timing;var aB=i.navigationStart;var aD=ar();aC=i.navigationStart+(i.redirectStart?"rs"+(i.redirectStart-aB):"")+(i.redirectEnd?"re"+(i.redirectEnd-aB):"")+(i.fetchStart?"fs"+(i.fetchStart-aB):"")+(i.domainLookupStart?"ds"+(i.domainLookupStart-aB):"")+(i.domainLookupEnd?"de"+(i.domainLookupEnd-aB):"")+(i.connectStart?"cs"+(i.connectStart-aB):"")+(i.secureConnectionStart?"sc"+(i.secureConnectionStart-aB):"")+(i.connectEnd?"ce"+(i.connectEnd-aB):"")+(i.requestStart?"qs"+(i.requestStart-aB):"")+(i.responseStart?"bs"+(i.responseStart-aB):"")+(i.responseEnd?"be"+(i.responseEnd-aB):"")+(i.domLoading?"ol"+(i.domLoading-aB):"")+(i.domInteractive?"oi"+(i.domInteractive-aB):"")+(i.domContentLoadedEventStart?"os"+(i.domContentLoadedEventStart-aB):"")+(i.domContentLoadedEventEnd?"oe"+(i.domContentLoadedEventEnd-aB):"")+(i.domComplete?"oc"+(i.domComplete-aB):"")+(i.loadEventStart?"ls"+(i.loadEventStart-aB):"")+(i.loadEventEnd?"le"+(i.loadEventEnd-aB):"")+(aD?"sr"+aD:"")+""}return aC}function ar(){if(aa&&aa.timing){var i=aa.timing;var aB=i.navigationStart;var aC;if(aB){if(window.chrome&&window.chrome.loadTimes){aC=Math.round((window.chrome.loadTimes().firstPaintTime*1000)-aB)}else{if(i.msFirstPaint){aC=Math.round(i.msFirstPaint-aB)}}var aD=(i.loadEventStart-aB);if(aC&&aC<aD){return aC}}}return null}function r(){if("undefined"!==typeof(LUX)&&LUX.customerid){return LUX.customerid}var i=af("/js/lux.js");if(i){LUX.customerid=F(i.src,"id");return LUX.customerid}return""}function af(aE){var aF=document.getElementsByTagName("script");for(var aD=0,aB=aF.length;aD<aB;aD++){var aC=aF[aD];if(aC.src&&-1!==aC.src.indexOf(aE)){return aC}}return null}function F(aB,aC){var aH=aB.split("?")[1];var aE=aH.split("&");for(var aF=0,aG=aE.length;aF<aG;aF++){var aI=aE[aF];var aD=aI.split("=");var aJ=aD[0];if(aC===aJ){return aD[1]}}return undefined}function ao(){var aB=document.getElementsByTagName("*");var aC=aB.length;var aE=0;while(aC--){aE+=az(aB[aC])}var aD=Math.round(aE/aB.length);return aD}function az(i){var aB=0;if(i.parentNode){while(i=i.parentNode){aB++}}return aB}function y(aD){var aB=aD.body,aC=aD.documentElement;var i=Math.max(aB.scrollHeight,aB.offsetHeight,aC.clientHeight,aC.scrollHeight,aC.offsetHeight);return i}function k(aD){var i=aD.body,aB=aD.documentElement;var aC=Math.max(i.scrollWidth,i.offsetWidth,aB.clientWidth,aB.scrollWidth,aB.offsetWidth);return aC}function ad(){var aF=document.getElementsByTagName("img");var aD=[];for(var aC=0,aB=aF.length;aC<aB;aC++){var aE=aF[aC];if(l(aE)){aD.push(aE)}}return aD}function I(aE){if(!aE){aE=document.body}var aC;for(var aD=0,aF=aE.children,aB=aF.length;aD<aB;aD++){var aG=aF[aD];if(l(aG)){aC=aG}}if(aC){return I(aC)}else{return aE}}function l(aC){var aD=document.documentElement.clientHeight;var aB=document.documentElement.clientWidth;var i=at(aC);return(i[0]>=0&&i[1]>=0&&i[0]<aB&&i[1]<aD&&aC.offsetWidth>0&&aC.offsetHeight>0)}function at(i){var aB=curtop=0;while(i){aB+=i.offsetLeft;curtop+=i.offsetTop;i=i.offsetParent}return[aB,curtop]}function E(){var aG=r();if(!aG||!o||!S()||!a()||X){return}if("complete"!==document.readyState){setTimeout(E,200);return}var aF=q();var aJ=f();var aC="";if(!al){aC=au()}av=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.label)?LUX.label:document.title);var aD=V+"?v="+z+"&id="+aG+"&sid="+o+"&uid="+K+(aJ?"&CD="+aJ:"")+"&l="+encodeURIComponent(av);var aH=(O?"":"&NT="+e())+"&PS=ns"+ai()+"bs"+ap()+"ss"+R()+"bc"+m()+"ia"+ad().length+"dd"+ao()+"nd"+document.getElementsByTagName("*").length+"vh"+document.documentElement.clientHeight+"vw"+document.documentElement.clientWidth+"dh"+y(document)+"dw"+k(document)+(aC?"&IX="+aC:"")+"";var aK="";if(aF){var i=aD.length+aH.length;if(i+aF.length<=ay){aH+="&UT="+aF}else{var aE=ay-i;var aI=aF.lastIndexOf(",",aE);aH+="&UT="+aF.substring(0,aI);aK=aF.substring(aI+1)}}u(aD+aH);X=1;O=1;al=aC;var aE=ay-aD.length;while(aK){var aB="";if(aK.length<=aE){aB=aK;aK=""}else{var aI=aK.lastIndexOf(",",aE);if(-1===aI){aI=aK.indexOf(",")}if(-1===aI){aB=aK;aK=""}else{aB=aK.substring(0,aI);aK=aK.substring(aI+1)}}u(aD+"&UT="+aB)}}function s(){var aC=r();if(!aC||!o||!S()||!a()||al||!X){return}var aB=au();if(aB){var aD=f();var i="?v="+z+"&id="+aC+"&sid="+o+"&uid="+K+(aD?"&CD="+aD:"")+"&l="+encodeURIComponent(av)+"&IX="+aB+"";u(V+i);al=1}}function u(i){var aB=document.createElement("script");aB.async=true;aB.src=i;var aC=document.getElementsByTagName("script")[0];aC.parentNode.insertBefore(aB,aC)}function A(aC,aB,i){if(!aC||!aC.hasAttribute){return aB}if(aC.hasAttribute("data-sctrack")){i=true;if(aC.id){aB=aC.id}}if(!aB&&aC.id){aB=aC.id}if(i&&aB){return aB}return A(aC.parentNode,aB,i)}function aq(){if("undefined"===typeof(aw.s)){aw.s=Math.round(D())}}function U(aB){N();if("undefined"===typeof(aw.k)){aw.k=Math.round(D());if(aB&&aB.target){var i=A(aB.target);if(i){aw.ki=i}}s()}}function x(aB){N();if("undefined"===typeof(aw.c)){aw.c=Math.round(D());if(aB&&aB.target){if(aB.clientX){aw.cx=aB.clientX;aw.cy=aB.clientY}var i=A(aB.target);if(i){aw.ci=i}}s()}}function ab(aD,aB){if(aD&&z<aD&&document.body&&!G){var i=af("/js/lux.js");if(i){var aC=document.createElement("iframe");aC.style.display="none";aC.id="LUX_update_iframe";aC.src="//cdn.speedcurve.com/luxupdate.php?src="+encodeURIComponent(i.src)+(aB?"&tw="+aB:"");document.body.appendChild(aC);G=1}}}function b(i,aB){if(window.addEventListener){window.addEventListener(i,aB,false)}else{if(window.attachEvent){window.attachEvent("on"+i,aB)}}}function v(i,aB){if(window.removeEventListener){window.removeEventListener(i,aB,false)}else{if(window.detachEvent){window.detachEvent("on"+i,aB)}}}function W(){b("scroll",aq);b("keypress",U);b("mousedown",x)}function N(){v("scroll",aq);v("keypress",U);v("mousedown",x)}function t(){var i=Number(new Date())+""+B(parseInt(100000*Math.random()),"00000");return i}function an(aB){var i=L("lux_uid");if(!i){i=aB}h("lux_uid",i,aj);return i}function S(){return true}function L(aC){var aB=document.cookie.split(";");for(var aD=0;aD<aB.length;aD++){var aE=aB[aD].split("=");if(aC===aE[0].trim()){return unescape(aE[1])}}return undefined}function h(i,aB,aC){document.cookie=i+"="+escape(aB)+(aC?"; max-age="+aC:"")+"; path=/"}function B(aB,i){return(i+aB).slice(-i.length)}if(Q){if("complete"==document.readyState){E()}else{b("load",function(){setTimeout(E,200)})}b("beforeunload",E);b("unload",E);b("beforeunload",s);b("unload",s)}W();var ah={mark:ag,measure:Y,init:ac,send:E,addData:n,doUpdate:ab,beaconUrl:V,samplerate:g,auto:Q,label:av,version:z};if(LUX&&LUX.ac&&LUX.ac.length){for(var H=0;H<LUX.ac.length;H++){var T=LUX.ac[H];var am=T.shift();if("function"===typeof(ah[am])){ah[am].apply(ah,T)}}}return ah})();