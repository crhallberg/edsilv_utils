// extensions v0.2.0 https://github.com/edsilv/extensions
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.extensions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 

Array.prototype.clone = function () {
    return this.slice(0);
};
if (!Array.prototype.includes) {
    Array.prototype.includes = function (val) {
        return this.indexOf(val) !== -1;
    };
}
Array.prototype.insert = function (item, index) {
    this.splice(index, 0, item);
};
Array.prototype.move = function (fromIndex, toIndex) {
    this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
};
Array.prototype.remove = function (item) {
    var index = this.indexOf(item);
    if (index > -1) {
        this.splice(index, 1);
    }
};
Array.prototype.removeAt = function (index) {
    this.splice(index, 1);
};

if (!Math.clamp) {
    Math.clamp = function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    };
}
if (!Math.radians) {
    Math.radians = function (degrees) {
        return Math.TAU * (degrees / 360);
    };
}
Math.distanceBetween = function (x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1) * 2) + ((y2 - y1) * 2));
};
Math.lerp = function (start, stop, amount) {
    return start + (stop - start) * amount;
};
Math.mag = function (a, b, c) {
    return Math.sqrt(a * a + b * b + c * c);
};
Math.map = function (value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
};
Math.median = function (values) {
    values.sort(function (a, b) { return a - b; });
    var half = Math.floor(values.length / 2);
    if (values.length % 2) {
        return values[half];
    }
    else {
        return (values[half - 1] + values[half]) / 2.0;
    }
};
Math.normalise = function (num, min, max) {
    return (num - min) / (max - min);
};
if (!Math.degrees) {
    Math.degrees = function (radians) {
        return (radians * 360) / Math.TAU;
    };
}
/**
 * Get a random number between two numbers.
 * If 'high' isn't passed, get a number from 0 to 'low'.
 * @param {Number} low The low number.
 * @param {Number} [high] The high number.
 */
Math.randomBetween = function (low, high) {
    if (!high) {
        high = low;
        low = 0;
    }
    if (low >= high)
        return low;
    return low + (high - low) * Math.random();
};
Math.roundToDecimalPlace = function (num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
};
Math.TAU = Math.PI * 2;

String.prototype.b64_to_utf8 = function () {
    return decodeURIComponent(escape(window.atob(this)));
};
String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
};
if (!String.prototype.includes) {
    String.prototype.includes = function (str) {
        return this.indexOf(str) !== -1;
    };
}
String.prototype.isAlphanumeric = function () {
    return /^[a-zA-Z0-9]*$/.test(this);
};
String.prototype.ltrim = function () {
    return this.replace(/^\s+/, '');
};
String.prototype.rtrim = function () {
    return this.replace(/\s+$/, '');
};
String.prototype.toCssClass = function () {
    return this.replace(/[^a-z0-9]/g, function (s) {
        var c = s.charCodeAt(0);
        if (c == 32)
            return '-';
        if (c >= 65 && c <= 90)
            return '_' + s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
};
String.prototype.toFileName = function () {
    return this.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};
String.prototype.utf8_to_b64 = function () {
    return window.btoa(unescape(encodeURIComponent(this)));
};

},{}]},{},[1])(1)
});
!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.utils=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){(function(global){var Utils;!function(Utils){var Async=function(){function Async(){}return Async.waitFor=function(test,successCallback,failureCallback,interval,maxTries,numTries){interval||(interval=200),maxTries||(maxTries=100),numTries||(numTries=0),numTries+=1,numTries>maxTries?failureCallback&&failureCallback():test()?successCallback():setTimeout(function(){Async.waitFor(test,successCallback,failureCallback,interval,maxTries,numTries)},interval)},Async}();Utils.Async=Async}(Utils||(Utils={}));var Utils;!function(Utils){var Bools=function(){function Bools(){}return Bools.getBool=function(val,defaultVal){return null===val||"undefined"==typeof val?defaultVal:val},Bools}();Utils.Bools=Bools}(Utils||(Utils={}));var Utils;!function(Utils){var Clipboard=function(){function Clipboard(){}return Clipboard.copy=function(text){var $tempDiv=$("<div style='position:absolute;left:-9999px'>"),brRegex=/<br\s*[\/]?>/gi;text=text.replace(brRegex,"\n"),$("body").append($tempDiv),$tempDiv.append(text);var $tempInput=$("<textarea>");$tempDiv.append($tempInput),$tempInput.val($tempDiv.text()).select(),document.execCommand("copy"),$tempDiv.remove()},Clipboard.supportsCopy=function(){return document.queryCommandSupported&&document.queryCommandSupported("copy")},Clipboard}();Utils.Clipboard=Clipboard}(Utils||(Utils={}));var Utils;!function(Utils){var Colors=function(){function Colors(){}return Colors.float32ColorToARGB=function(float32Color){var a=(4278190080&float32Color)>>>24,r=(16711680&float32Color)>>>16,g=(65280&float32Color)>>>8,b=255&float32Color,result=[a,r,g,b];return result},Colors._componentToHex=function(c){var hex=c.toString(16);return 1==hex.length?"0"+hex:hex},Colors.rgbToHexString=function(rgb){return Colors.coalesce(rgb),"#"+Colors._componentToHex(rgb[0])+Colors._componentToHex(rgb[1])+Colors._componentToHex(rgb[2])},Colors.argbToHexString=function(argb){return"#"+Colors._componentToHex(argb[0])+Colors._componentToHex(argb[1])+Colors._componentToHex(argb[2])+Colors._componentToHex(argb[3])},Colors.coalesce=function(arr){for(var i=1;i<arr.length;i++)"undefined"==typeof arr[i]&&(arr[i]=arr[i-1])},Colors}();Utils.Colors=Colors}(Utils||(Utils={}));var Utils;!function(Utils){var Dates=function(){function Dates(){}return Dates.getTimeStamp=function(){return(new Date).getTime()},Dates}();Utils.Dates=Dates}(Utils||(Utils={}));var Utils;!function(Utils){var Device=function(){function Device(){}return Device.getPixelRatio=function(ctx){var dpr=window.devicePixelRatio||1,bsr=ctx.webkitBackingStorePixelRatio||ctx.mozBackingStorePixelRatio||ctx.msBackingStorePixelRatio||ctx.oBackingStorePixelRatio||ctx.backingStorePixelRatio||1;return dpr/bsr},Device.isTouch=function(){return!!("ontouchstart"in window)||window.navigator.msMaxTouchPoints>0},Device}();Utils.Device=Device}(Utils||(Utils={}));var Utils;!function(Utils){var Documents=function(){function Documents(){}return Documents.isInIFrame=function(){try{return window.self!==window.top}catch(e){return!0}},Documents.supportsFullscreen=function(){var doc=document.documentElement,support=doc.requestFullscreen||doc.mozRequestFullScreen||doc.webkitRequestFullScreen||doc.msRequestFullscreen;return void 0!==support},Documents.isHidden=function(){var prop=Documents.getHiddenProp();return!!prop},Documents.getHiddenProp=function(){var prefixes=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var i=0;i<prefixes.length;i++)if(prefixes[i]+"Hidden"in document)return prefixes[i]+"Hidden";return null},Documents}();Utils.Documents=Documents}(Utils||(Utils={}));var Utils;!function(Utils){var Events=function(){function Events(){}return Events.debounce=function(fn,debounceDuration){return debounceDuration=debounceDuration||100,function(){if(!fn.debouncing){var args=Array.prototype.slice.apply(arguments);fn.lastReturnVal=fn.apply(window,args),fn.debouncing=!0}return clearTimeout(fn.debounceTimeout),fn.debounceTimeout=setTimeout(function(){fn.debouncing=!1},debounceDuration),fn.lastReturnVal}},Events}();Utils.Events=Events}(Utils||(Utils={}));var Utils;!function(Utils){var Files=function(){function Files(){}return Files.simplifyMimeType=function(mime){switch(mime){case"text/plain":return"txt";case"image/jpeg":return"jpg";case"application/msword":return"doc";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";default:var parts=mime.split("/");return parts[parts.length-1]}},Files}();Utils.Files=Files}(Utils||(Utils={}));var Utils;!function(Utils){var Keyboard=function(){function Keyboard(){}return Keyboard.getCharCode=function(e){var charCode="number"==typeof e.which?e.which:e.keyCode;return charCode},Keyboard}();Utils.Keyboard=Keyboard}(Utils||(Utils={}));var Utils;!function(Utils){var Maths;!function(Maths){var Vector=function(){function Vector(x,y){this.X=x,this.Y=y}return Vector.prototype.get=function(){return new Vector(this.X,this.Y)},Vector.prototype.set=function(x,y){this.X=x,this.Y=y},Vector.prototype.add=function(v){this.X+=v.X,this.Y+=v.Y},Vector.add=function(v1,v2){return new Vector(v1.X+v2.X,v1.Y+v2.Y)},Vector.prototype.sub=function(v){this.X-=v.X,this.Y-=v.Y},Vector.sub=function(v1,v2){return new Vector(v1.X-v2.X,v1.Y-v2.Y)},Vector.prototype.mult=function(n){this.X=this.X*n,this.Y=this.Y*n},Vector.mult=function(v1,v2){return new Vector(v1.X*v2.X,v1.Y*v2.Y)},Vector.multN=function(v1,n){return new Vector(v1.X*n,v1.Y*n)},Vector.prototype.Div=function(n){this.X=this.X/n,this.Y=this.Y/n},Vector.div=function(v1,v2){return new Vector(v1.X/v2.X,v1.Y/v2.Y)},Vector.divN=function(v1,n){return new Vector(v1.X/n,v1.Y/n)},Vector.prototype.mag=function(){return Math.sqrt(this.X*this.X+this.Y*this.Y)},Vector.prototype.magSq=function(){return this.X*this.X+this.Y*this.Y},Vector.prototype.normalise=function(){var m=this.mag();0!=m&&1!=m&&this.Div(m)},Vector.prototype.limit=function(max){this.magSq()>max*max&&(this.normalise(),this.mult(max))},Vector.prototype.equals=function(v){return this.X==v.X&&this.Y==v.Y},Vector.prototype.heading=function(){var angle=Math.atan2(-this.Y,this.X);return-1*angle},Vector.random2D=function(){return Vector.fromAngle(Math.random()*Math.TAU)},Vector.fromAngle=function(angle){return new Vector(Math.cos(angle),Math.sin(angle))},Vector}();Maths.Vector=Vector}(Maths=Utils.Maths||(Utils.Maths={}))}(Utils||(Utils={}));var Utils;!function(Utils){var Measurements;!function(Measurements){var Size=function(){function Size(width,height){this.width=width,this.height=height}return Size}();Measurements.Size=Size;var Dimensions=function(){function Dimensions(){}return Dimensions.fitRect=function(width1,height1,width2,height2){var scale,ratio1=height1/width1,ratio2=height2/width2,width=0,height=0;return ratio1<ratio2&&(scale=width2/width1,width=width1*scale,height=height1*scale),ratio2<ratio1&&(scale=height2/height1,width=width1*scale,height=height1*scale),new Size(Math.floor(width),Math.floor(height))},Dimensions.hitRect=function(x,y,w,h,mx,my){return mx>x&&mx<x+w&&my>y&&my<y+h},Dimensions}();Measurements.Dimensions=Dimensions}(Measurements=Utils.Measurements||(Utils.Measurements={}))}(Utils||(Utils={}));var Utils;!function(Utils){var Numbers=function(){function Numbers(){}return Numbers.numericalInput=function(event){return 46==event.keyCode||8==event.keyCode||9==event.keyCode||27==event.keyCode||65==event.keyCode&&event.ctrlKey===!0||event.keyCode>=35&&event.keyCode<=39||(!(event.shiftKey||(event.keyCode<48||event.keyCode>57)&&(event.keyCode<96||event.keyCode>105))||(event.preventDefault(),!1))},Numbers}();Utils.Numbers=Numbers}(Utils||(Utils={}));var Utils;!function(Utils){var Objects=function(){function Objects(){}return Objects.toPlainObject=function(value){value=Object(value);var result={};for(var key in value)result[key]=value[key];return result},Objects}();Utils.Objects=Objects}(Utils||(Utils={}));var Utils;!function(Utils){var Storage=function(){function Storage(){}return Storage.clear=function(storageType){switch(void 0===storageType&&(storageType=Utils.StorageType.memory),storageType.value){case Utils.StorageType.memory.value:this._memoryStorage={};break;case Utils.StorageType.session.value:sessionStorage.clear();break;case Utils.StorageType.local.value:localStorage.clear()}},Storage.clearExpired=function(storageType){void 0===storageType&&(storageType=Utils.StorageType.memory);for(var items=this.getItems(storageType),i=0;i<items.length;i++){var item=items[i];this._isExpired(item)&&this.remove(item.key)}},Storage.get=function(key,storageType){void 0===storageType&&(storageType=Utils.StorageType.memory);var data=null;switch(storageType.value){case Utils.StorageType.memory.value:data=this._memoryStorage[key];break;case Utils.StorageType.session.value:data=sessionStorage.getItem(key);break;case Utils.StorageType.local.value:data=localStorage.getItem(key)}if(!data)return null;var item=null;try{item=JSON.parse(data)}catch(error){return null}return item?this._isExpired(item)?null:(item.key=key,item):null},Storage._isExpired=function(item){return!((new Date).getTime()<item.expiresAt)},Storage.getItems=function(storageType){void 0===storageType&&(storageType=Utils.StorageType.memory);var items=[];switch(storageType.value){case Utils.StorageType.memory.value:for(var keys=Object.keys(this._memoryStorage),i=0;i<keys.length;i++){var item=this.get(keys[i],Utils.StorageType.memory);item&&items.push(item)}break;case Utils.StorageType.session.value:for(var i=0;i<sessionStorage.length;i++){var key=sessionStorage.key(i);if(key){var item=this.get(key,Utils.StorageType.session);item&&items.push(item)}}break;case Utils.StorageType.local.value:for(var i=0;i<localStorage.length;i++){var key=localStorage.key(i);if(key){var item=this.get(key,Utils.StorageType.local);item&&items.push(item)}}}return items},Storage.remove=function(key,storageType){switch(void 0===storageType&&(storageType=Utils.StorageType.memory),storageType.value){case Utils.StorageType.memory.value:delete this._memoryStorage[key];break;case Utils.StorageType.session.value:sessionStorage.removeItem(key);break;case Utils.StorageType.local.value:localStorage.removeItem(key)}},Storage.set=function(key,value,expirationSecs,storageType){void 0===storageType&&(storageType=Utils.StorageType.memory);var expirationMS=1e3*expirationSecs,record=new Utils.StorageItem;switch(record.value=value,record.expiresAt=(new Date).getTime()+expirationMS,storageType.value){case Utils.StorageType.memory.value:this._memoryStorage[key]=JSON.stringify(record);break;case Utils.StorageType.session.value:sessionStorage.setItem(key,JSON.stringify(record));break;case Utils.StorageType.local.value:localStorage.setItem(key,JSON.stringify(record))}return record},Storage._memoryStorage={},Storage}();Utils.Storage=Storage}(Utils||(Utils={}));var Utils;!function(Utils){var StorageItem=function(){function StorageItem(){}return StorageItem}();Utils.StorageItem=StorageItem}(Utils||(Utils={}));var Utils;!function(Utils){var StorageType=function(){function StorageType(value){this.value=value}return StorageType.prototype.toString=function(){return this.value},StorageType.memory=new StorageType("memory"),StorageType.session=new StorageType("session"),StorageType.local=new StorageType("local"),StorageType}();Utils.StorageType=StorageType}(Utils||(Utils={}));var Utils;!function(Utils){var Strings=function(){function Strings(){}return Strings.ellipsis=function(text,chars){if(text.length<=chars)return text;var trimmedText=text.substr(0,chars),lastSpaceIndex=trimmedText.lastIndexOf(" ");return lastSpaceIndex!=-1&&(trimmedText=trimmedText.substr(0,Math.min(trimmedText.length,lastSpaceIndex))),trimmedText+"&hellip;"},Strings.htmlDecode=function(encoded){var div=document.createElement("div");return div.innerHTML=encoded,div.firstChild.nodeValue},Strings}();Utils.Strings=Strings}(Utils||(Utils={}));var Utils;!function(Utils){var Urls=function(){function Urls(){}return Urls.getHashParameter=function(key,doc){doc||(doc=window.document);var regex=new RegExp("#.*[?&]"+key+"=([^&]+)(&|$)"),match=regex.exec(doc.location.hash);return match?decodeURIComponent(match[1].replace(/\+/g," ")):null},Urls.setHashParameter=function(key,value,doc){doc||(doc=window.document);var kvp=this.updateURIKeyValuePair(doc.location.hash.replace("#?",""),key,value),newHash="#?"+kvp,url=doc.URL,index=url.indexOf("#");index!=-1&&(url=url.substr(0,url.indexOf("#"))),doc.location.replace(url+newHash)},Urls.getQuerystringParameter=function(key,w){return w||(w=window),this.getQuerystringParameterFromString(key,w.location.search)},Urls.getQuerystringParameterFromString=function(key,querystring){key=key.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+key+"=([^&#]*)"),match=regex.exec(querystring);return match?decodeURIComponent(match[1].replace(/\+/g," ")):null},Urls.setQuerystringParameter=function(key,value,doc){doc||(doc=window.document);var kvp=this.updateURIKeyValuePair(doc.location.hash.replace("#?",""),key,value);window.location.search=kvp},Urls.updateURIKeyValuePair=function(uriSegment,key,value){key=encodeURIComponent(key),value=encodeURIComponent(value);var kvp=uriSegment.split("&");""==kvp[0]&&kvp.shift();for(var x,i=kvp.length;i--;)if(x=kvp[i].split("="),x[0]==key){x[1]=value,kvp[i]=x.join("=");break}return i<0&&(kvp[kvp.length]=[key,value].join("=")),kvp.join("&")},Urls.getUrlParts=function(url){var a=document.createElement("a");return a.href=url,a},Urls.convertToRelativeUrl=function(url){var parts=this.getUrlParts(url),relUri=parts.pathname+parts.searchWithin;return relUri.startsWith("/")||(relUri="/"+relUri),relUri},Urls}();Utils.Urls=Urls}(Utils||(Utils={})),global.Utils=module.exports=Utils}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});