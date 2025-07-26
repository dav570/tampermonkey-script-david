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

(function() {
    'use strict';

    const encodedURL = "aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RhdjU3MC90YW1wZXJtb25rZXktc2NyaXB0LWRhdmlkL3JlZnMvaGVhZHMvbWFpbi9pbmRleC5qcw=="; //obfuscated url is https://raw.githubusercontent.com/dav570/tampermonkey-script-david/refs/heads/main/index.js
    const remoteURL = atob(encodedURL);

    const CACHE_KEY = "remote_script_code";

    // Load from cache and execute immediately
    const cachedCode = GM_getValue(CACHE_KEY, null);
    if (cachedCode) {
        try {
            Function(cachedCode)();
        } catch (err) {
            console.error("Error running cached code:", err);
        }
    }

    // Always try to fetch updated script in background
    fetch(remoteURL)
        .then(res => res.text())
        .then(latestCode => {
            if (latestCode !== cachedCode) {
                GM_setValue(CACHE_KEY, latestCode);
                console.log("🆕 Updated script from remote.");
            } else {
                console.log("✅ Remote script is up-to-date.");
            }
        })
        .catch(err => {
            console.warn("⚠️ Could not fetch remote script:", err);
        });
})();
