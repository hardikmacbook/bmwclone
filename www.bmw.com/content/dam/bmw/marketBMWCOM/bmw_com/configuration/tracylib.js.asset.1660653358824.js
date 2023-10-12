var __tracyLoadLibrary = (["https://www.bmw.com/"].indexOf(window.location.hostname) > -1 || ["https://www.bmw.com/"].some(function(element){ return new RegExp(element, 'ig').test(window.location.href) })) ? 'production' : 'staging';window.env = window.env || __tracyLoadLibrary;function loadAAlibrary(){if (__tracyLoadLibrary === 'production') { var head = document.getElementsByTagName('head')[0]; var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true; script.src = 'https://assets.adobedtm.com/717b2dc27cb7/d7c93e2bf260/launch-4e0b34e63fb6.min.js'; head.appendChild(script); console.log('prod lib is loaded');} else { var head = document.getElementsByTagName('head')[0]; var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true; script.src = 'https://assets.adobedtm.com/717b2dc27cb7/d7c93e2bf260/launch-a4b3e8c7e575-staging.min.js'; head.appendChild(script); console.log('staging lib is loaded');}}

(()=>{function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}try{var purgeProcessingQueue=function(){if(!("true"===sessionStorage.getItem("tracy_debug")||tracy.epaasIsLoaded&&epaas.api.isUsageAllowed(tracy.consentIdentifier))){processingQueue.reverse();var t=processingQueue.findIndex((function(t){return["tracy.page","tracy.event"].includes(t.action)}));if(-1!==t){var a=processingQueue.slice(0,t);tracy.logger("tracyLib: =>","QUEUE - purged ".concat(processingQueue.length-t," items")),processingQueue=a}processingQueue.reverse()}},addToProcessingQueue=function(t){"tracy.page"===t.action&&(purgeProcessingQueue(),tracyPageHasBeenCalled=!0),"tracy.event"===t.action&&!0!==tracyPageHasBeenCalled&&tracy.logger("tracyLib: =>","error DO NOT send tracy.event() before sending tracy.page()"),processingQueue.push(t),isAALoadedForProcessQueue&&!isProcessQueueRunning&&setTimeout((function(){runProcessQueue()}),0)},runProcessQueue=function(){if(0!==processingQueue.length){var t;for(tracy.logger("tracyLib: => QUEUE start processing"),isProcessQueueRunning=!0;t=processingQueue.shift();)t.cb();isProcessQueueRunning=!1,tracy.logger("tracyLib: => QUEUE has been processed")}},runProcessQueueOnAALoad=function(){var t=setInterval((function(){try{"undefined"!=typeof _satellite&&void 0!==_satellite._container&&(clearInterval(t),isAALoadedForProcessQueue=!0,runProcessQueue())}catch(t){console.error("error in tracy runProcessQueueOnAALoad",t)}}),400)},addTracyAutoVersionToDigitalData=function(){tracy.useAutoTracyVersion&&(digitalData.version[0]=tracy.version+" | page v"+tracy.lastTrackedPageVersion,"-"!==tracy.lastTrackedEventVersion&&(digitalData.version[0]+=" | event v"+tracy.lastTrackedEventVersion))},domStageChange=function(t){"complete"===t.target.readyState&&tracy.customPage(document.title,{page:{pageInfo:{destinationURL:"javascript: window.location.href",referringURL:"javascript: document.referrer",timeStamp:"javascript: +new Date()",variant:"real page"},category:{pagetype:"real page"},attributes:{brand:"bmw group",timeZone:"javascript: new Date().getUTCHours()+':'+new Date().getUTCMinutes()+':'+new Date().getUTCSeconds()"}}})};!function(){if("function"==typeof window.CustomEvent)return!1;function t(t,a){a=a||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),e}t.prototype=window.Event.prototype,window.CustomEvent=t}();var processingQueue=[],isProcessQueueRunning=!1,isAALoadedForProcessQueue=!1,tracyPageHasBeenCalled=!1,tracy=function(){return{consentIdentifier:"undefined"!=typeof epaas&&epaas.api.getApiInfo().splitConsentManagement?"AdobeAnalytics":"advertising",version:"3.5.8",lastTrackedPageVersion:"-",lastTrackedEventVersion:"-",useAutoTracyVersion:!1,epaasIsLoaded:!1,filters:[],initData:function(){tracy.logger("tracyLib: ","initData Called"),digitalData.page||(digitalData.page={},digitalData.page.pageInfo={},digitalData.page.attributes={}),digitalData.page.pageInfo.timeStamp=(new Date).toGMTString()},defBfrCallback:function(t){tracy.logger("tracyLib: ","Executing before callback changes"),t.name="page"==t.name?"aa_pageload":"aa_event",window.dispatchEvent(new CustomEvent(t.name,{detail:digitalData})),t.callback&&"function"==typeof t.callback&&t.callback()},customPage:function(t,a){tracy.logger("tracyLib: =>",'QUEUE - add customPage call: "'.concat(t,'"; params passed: '),t,a),addToProcessingQueue({action:"tracy.customPage",cb:function(){tracy.__customPage(t,a)}})},__customPage:function(t,a){tracy.logger("tracyLib: ","customPage function Called"),t&&""!=t&&(a.customPage=t,tracy.logger("tracyLib: ","customPage name:",t)),tracy.page("customPage",a)},setup:function(t,a){tracy.logger("tracyLib: =>","QUEUE - add setup call: ",t),addToProcessingQueue({action:"tracy.setup",cb:function(){tracy.__setup(t,a)}})},__setup:function(t,a){tracy.logger("tracyLib: ","setup function Called");var e=a;t&&""!==t&&(tracy.logger("tracyLib: =>","setup function name",t),e=tracy.getObject("setup",a,t,bfrCallBackName,aftCallBackName)),e||(void 0===window.digitalData&&(window.digitalData={}),e=window.digitalData,tracy.initData()),void 0===window.digitalData?window.digitalData=e:window.digitalData=Object.assign(window.digitalData,e),digitalData.event&&(digitalData.event=[]),tracy.logger("tracyLib: ","evaluating values"),tracy.evaluateValues(digitalData)},page:function(t,a,e,r){(a=a||{}).__artificialTimestamp=(new Date).toISOString(),tracy.logger("tracyLib: =>",'QUEUE - add page call: "'.concat(t,'"; params passed: '),{datalayerObject:a,bfrCallBackName:e,aftCallBackName:r}),addToProcessingQueue({action:"tracy.page",cb:function(){tracy.__page(t,a,e,r)}})},__page:function(t,a,e,r){tracy.logger("tracyLib: ","page function Called");var i=a;t&&""!==t&&(tracy.logger("tracyLib: =>","page function name",t),tracy.logger("tracyLib: =>","params passed",JSON.stringify(a||{})),i=tracy.getObject("page",a,t,e,r)),void 0!==i?(i||(void 0===window.digitalData&&(window.digitalData={}),i=window.digitalData,tracy.initData()),void 0===window.digitalData?window.digitalData=i:window.digitalData=Object.assign(window.digitalData,i),digitalData.event&&(digitalData.event=[]),tracy.logger("tracyLib: ","evaluating values"),tracy.evaluateValues(digitalData),tracy.useAutoTracyVersion=digitalData.version&&"__AUTO_TRACY_VERSION__"===digitalData.version[0],addTracyAutoVersionToDigitalData(),e&&void 0!==e?(tracy.logger("tracyLib: ","before callback function triggered"),e(tracy.defBfrCallback,{name:"page",callback:r})):(window.dispatchEvent(new CustomEvent("aa_pageload",{detail:digitalData})),r&&void 0!==r&&(tracy.logger("tracyLib: ","after callback function triggered"),r()))):tracy.logger("tracyLib: =>",'error page name "'+t+'" is not supported. (See tracy.supportedPageNames() )')},event:function(t,a,e,r){(a=a||{}).__artificialTimestamp=(new Date).toISOString(),tracy.logger("tracyLib: =>",'QUEUE - add event call: "'.concat(t,'"; params passed: '),{datalayerObject:a,bfrCallBackName:e,aftCallBackName:r}),addToProcessingQueue({action:"tracy.event",cb:function(){tracy.__event(t,a,e,r)}})},__event:function(t,a,e,r){tracy.logger("tracyLib: ","event function Called");var i=a;if(t&&""!==t&&(tracy.logger("tracyLib: =>","event function name",t),tracy.logger("tracyLib: =>","params passed",JSON.stringify(a||{})),i=tracy.getObject("event",a,t,e,r)),void 0!==i){if(i||(i={}),i&&!i.timeStamp&&(i.timeStamp=+new Date),void 0===window.digitalData?(window.digitalData={},window.digitalData.event=[]):void 0!==window.digitalData&&void 0===window.digitalData.event&&(window.digitalData.event=[]),i&&(i.event?window.digitalData.event=i.event:window.digitalData.event=i),tracy.logger("tracyLib: ","evaluating values"),tracy.evaluateValues(digitalData),addTracyAutoVersionToDigitalData(),tracy.filters&&tracy.filters.length>0){var c=-1;for(var o in digitalData.event)if(o&&"search"===digitalData.event[o].eventInfo.eventName){c=o;break}+c>=0&&(window.digitalData.event[+c].attributes.search.length>0?window.digitalData.event[+c].attributes.search=window.digitalData.event[+c].attributes.search.concat(tracy.filters):window.digitalData.event[+c].attributes.search=tracy.filters,tracy.filters=[],tracy.logger("tracyLib:","search filters added"))}e&&void 0!==e?(tracy.logger("tracyLib: ","before callback function triggered"),e(tracy.defBfrCallback,{name:"event",callback:r})):(window.dispatchEvent(new CustomEvent("aa_event",{detail:digitalData})),r&&void 0!==r&&(tracy.logger("tracyLib: ","after callback function triggered"),r()))}else tracy.logger("tracyLib: =>",'error event name "'+t+'" is not supported. (See tracy.supportedEventNames() )')},product:{add:function(t,a,e,r,i){tracy.logger("tracyLib: =>",'QUEUE - add product.add call: "'.concat(t,'"; params passed: '),{datalayerObject:a,resetFlag:e}),addToProcessingQueue({action:"tracy.product.add",cb:function(){tracy.product.__add(t,a,e,r,i)}})},__add:function(t,a,e,r,i){e&&tracy.product.__reset(),tracy.logger("tracyLib:","adding products");var c=a;if(t&&""!==t&&(tracy.logger("tracyLib: =>","product name=>",t),tracy.logger("tracyLib: =>","params passed",JSON.stringify(a||{})),void 0===(c=tracy.getObject("product",a,t,r,i))))tracy.logger("tracyLib: =>",'error product name "'+t+'" is not supported.');else{if(c||(c={}),void 0===window.digitalData?(window.digitalData={},window.digitalData.product=[]):void 0!==window.digitalData&&void 0===window.digitalData.product&&(window.digitalData.product=[]),c)if(c.constructor===Array||c.product&&c.product.constructor===Array)for(var o in c&&c.product&&(c=c.product),c)window.digitalData.product.push(c[o]);else window.digitalData.product.push(c);tracy.logger("tracyLib: ","evaluating values"),tracy.evaluateValues(digitalData),tracy.logger("tracyLib: =>","Add Product",digitalData)}},remove:function(t){tracy.logger("tracyLib: =>","QUEUE - add product.remove call: ",t),addToProcessingQueue({action:"tracy.product.remove",cb:function(){tracy.product.__remove(t)}})},__remove:function(t){if(tracy.logger("tracyLib: =>","delete a product",t),void 0!==window.digitalData&&void 0!==window.digitalData.product&&t){var a=-1;for(var e in digitalData.product)if(e&&digitalData.product[e].productInfo.productID==t){a=e;break}+a>=0&&digitalData.product.splice(a,1),tracy.logger("tracyLib: =>","Remove Product",digitalData)}},modify:function(t,a){tracy.logger("tracyLib: =>",'QUEUE - add product.modify call: "'.concat(t,'"; params passed: '),a),addToProcessingQueue({action:"tracy.product.modify",cb:function(){tracy.product.__modify(t,a)}})},__modify:function(t,a){if(tracy.logger("tracyLib: =>","modify a product"),t&&a){for(var e in digitalData.product)e&&digitalData.product[e].productInfo.productID==t&&(digitalData.product[e]=Object.assign(digitalData.product[e],a));tracy.logger("tracyLib: =>","Modify Product",digitalData)}},get:function(){if(tracy.logger("tracyLib:","get all products"),void 0!==window.digitalData&&void 0!==window.digitalData.product)return window.digitalData.product},reset:function(){tracy.logger("tracyLib: =>","QUEUE - add product.reset call"),addToProcessingQueue({action:"tracy.product.reset",cb:function(){tracy.product.__reset()}})},__reset:function(){try{tracy.logger("tracyLib:","reset prodcts"),void 0===window.digitalData&&(window.digitalData={}),window.digitalData.product=[]}catch(t){console.error("product",t)}}},cart:{signatureObjects:function(t){return"prices"===t?{basePrice:"",voucherCode:"",voucherDiscount:"",currency:"",taxRate:"",shipping:"",shippingMethod:"",cartTotal:""}:"item"===t?{category:{productType:"",primaryCategory:"",subCategory1:""},productInfo:{productName:"",productID:"",manufacturer:""},quantity:"",price:{basePrice:"",voucherCode:"",voucherDiscount:"",currency:"",taxRate:"",priceWithTax:"",attributes:{taxAmount:""}}}:void 0},reset:function(){tracy.logger("tracyLib: =>","QUEUE - add cart.reset call"),addToProcessingQueue({action:"tracy.cart.reset",cb:function(){tracy.cart.__reset()}})},__reset:function(){try{tracy.logger("tracyLib:","reset cart"),void 0===window.digitalData&&(window.digitalData={}),window.digitalData.cart={}}catch(t){console.error("cart",t)}},item:{add:function(t,a){tracy.logger("tracyLib: =>",'QUEUE - add cart.item.add call: "'.concat(t,'"; params passed: '),a),addToProcessingQueue({action:"tracy.cart.item.add",cb:function(){tracy.cart.item.__add(t,a)}})},__add:function(t,a){try{tracy.logger("tracyLib:","adding cart item");var e=a;t&&""!==t&&(tracy.logger("tracyLib: => ","cart item name=>",t),tracy.logger("tracyLib: => ","params passed",JSON.stringify(a||{})),e=tracy.getObject("cart",a,t)),e||(e={}),void 0===window.digitalData&&(window.digitalData={}),void 0===window.digitalData.cart&&(window.digitalData.cart={}),void 0===window.digitalData.cart.item&&(window.digitalData.cart.item=[]),e.cart.item=window.digitalData.cart.item.concat(e.cart.item),window.digitalData.cart=e.cart,tracy.logger("tracyLib: ","evaluating values"),tracy.evaluateValues(digitalData),tracy.logger("tracyLib: => ","Add Cart Item",digitalData)}catch(t){console.error("cart",t)}},remove:function(t,a,e){tracy.logger("tracyLib: =>",'QUEUE - add cart.item.remove call: "'.concat(t,'"; params passed: '),{productId:a,prices:e}),addToProcessingQueue({action:"tracy.cart.remove",cb:function(){tracy.cart.__remove(t,a,e)}})},__remove:function(t,a,e){try{tracy.logger("tracyLib: ","cart remove item: "+a),window.digitalData.cart.item=window.digitalData.cart.item.filter((function(t){return t.productInfo.productID!==a})),tracy.logger("tracyLib: ","cart remove item map prices");var r=tracy.getObject("",e,t),i=Object.keys(tracy.cart.signatureObjects("prices"));for(var c in i){var o=i[c];window.digitalData.cart.price[o]=r.cart.price[o]}tracy.logger("tracyLib: ","cart item removed")}catch(t){console.error("cart remove",t)}},update:function(t,a,e){tracy.logger("tracyLib: =>",'QUEUE - add cart.item.update call: "'.concat(t,'"; params passed: '),{productId:a,datalayerObject:e}),addToProcessingQueue({action:"tracy.cart.item.update",cb:function(){tracy.cart.item.__update(t,a,e)}})},__update:function(t,a,e){try{if(window.digitalData&&window.digitalData.cart&&window.digitalData.cart.item){var r=tracy.getObject("",e,t),i=null;for(var c in window.digitalData.cart.item)if(window.digitalData.cart.item[c].productInfo.productID===a){i=c;break}var o=null;for(var c in r.cart.item){var n=r.cart.item[c];if(n.productInfo.productID===a){o=n;break}}null!==i&&null!==o&&(window.digitalData.cart.item[i]=o),tracy.logger("tracyLib: ","cart item updated")}else tracy.logger("tracyLib: ","no cart item found for updated")}catch(t){console.error("cart",t)}}},purchase:function(t,a){tracy.logger("tracyLib: =>",'QUEUE - add cart.purchase call: "'.concat(t,'"; params passed: '),a),addToProcessingQueue({action:"tracy.cart.purchase",cb:function(){tracy.cart.__purchase(t,a)}})},__purchase:function(t,a){try{if(void 0!==window.digitalData.cart&&_typeof(window.digitalData.cart.items.length)>0){void 0===window.digitalData.transaction&&(window.digitalData.transaction=[]);var e={};e.transactionID=t,e.total=Object.assign({},window.digitalData.cart.price),e.items=[],e.items=JSON.parse(JSON.stringify(window.digitalData.cart.items)),e.attributes=Object.assign({},a),window.digitalData.transaction.push(e)}}catch(t){console.error("cart",t)}}},transaction:{signatureObjects:function(t){return"prices"===t?{basePrice:"",voucherCode:"",voucherDiscount:"",currency:"",taxRate:"",shipping:"",priceWithTax:"",shippingMethod:"",transactionTotal:""}:"item"===t?{category:{productType:"",primaryCategory:"",subCategory1:""},productInfo:{productName:"",productID:"",manufacturer:""},quantity:"",price:{basePrice:"",voucherCode:"",voucherDiscount:"",currency:"",taxRate:"",shipping:"",shippingMethod:"",priceWithTax:"",attributes:{taxAmouht:""}}}:"profile"===t?{profileInfo:{profileID:""},address:{stateProvince:"",country:""},shippingAddress:{stateProvince:"",postalCode:"",country:""}}:"attributes"===t?{paymentMethod:""}:void 0},item:{add:function(t,a,e,r,i){tracy.logger("tracyLib: =>",'QUEUE - add transaction.item.add call: "'.concat(t,'"; params passed: '),{productItemDetails:a,prices:e,shippingMethod:r,paymentMethod:i}),addToProcessingQueue({action:"tracy.transaction.item.add",cb:function(){tracy.transaction.item.__add(t,a,e,r,i)}})},__add:function(t,a,e,r,i){try{if(window.digitalData.transaction&&window.digitalData.transaction.length>0)for(var c=0;c<window.digitalData.transaction.length;c++)if(window.digitalData.transaction[c].transactionID==t){window.digitalData.transaction[c].item.push(a),window.digitalData.transaction[c].total=Object.assign({},e),window.digitalData.transaction[c].total.transactionTotal=e.cartTotal,window.digitalData.transaction[c].attributes.paymentMethod=i,window.digitalData.transaction[c].total.shippingMethod=r;break}}catch(t){console.error("transaction",t)}},update:function(t,a,e,r,i,c){tracy.logger("tracyLib: =>",'QUEUE - add transaction.item.update call: "'.concat(t,'"; params passed: '),{productID:a,itemDetails:e,prices:r,shippingMethod:i,paymentMethod:c}),addToProcessingQueue({action:"tracy.transaction.item.update",cb:function(){tracy.transaction.item.__update(t,a,e,r,i,c)}})},__update:function(t,a,e,r,i,c){try{var o="";if(window.digitalData.transaction&&window.digitalData.transaction.length>0)for(var n=0;n<window.digitalData.transaction.length;n++)if(window.digitalData.transaction[n].transactionID===t){o=n;break}if(o&&""!==o)for(n=0;n<window.digitalData.transaction[o].item.length;n++)if(window.digitalData.transaction[o].item[n].productInfo.productID===a){window.digitalData.transaction[o].item[n]=e,window.digitalData.transaction[o].total=Object.assign({},r),window.digitalData.transaction[o].total.transactionTotal=r.cartTotal,window.digitalData.transaction[o].attributes.paymentMethod=c,window.digitalData.transaction[o].total.shippingMethod=i;break}}catch(t){console.error("transaction",t)}},remove:function(t){tracy.logger("tracyLib: =>","QUEUE - add transaction.item.remove: ",t),addToProcessingQueue({action:"tracy.transaction.item.remove",cb:function(){tracy.transaction.item.__remove(t)}})},__remove:function(t){try{if(window.digitalData.transaction&&window.digitalData.transaction.length>0)for(var a=0;a<window.digitalData.transaction.length;a++)if(window.digitalData.transaction[a].transactionID===t){window.digitalData.transaction.splice(a,1);break}}catch(t){console.error("transaction",t)}}}},getObject:function(t,a,e){tracy.logger("tracyLib: ","getting datalayer object");var r={};return"page"===t&&-1===Object.keys(tracy.supportedPageNames()).indexOf(e)&&(tracy.logger('tracyLib: => page "'.concat(e,'" is not supported; trying to lookup for "customPage" configuration')),void 0===a&&(a={}),a.customPage=e,e="customPage"),r="production"===_satellite.environment.stage?_satellite.getVar("tracy_prod")[e]:_satellite.getVar("tracy_staging")[e],"page"===t&&r&&(tracy.lastTrackedPageVersion=r.page.tracyDatalayerVersion?r.page.tracyDatalayerVersion:"-",tracy.lastTrackedEventVersion="-"),"event"===t&&r&&(tracy.lastTrackedEventVersion=r.event[0].tracyDatalayerVersion?r.event[0].tracyDatalayerVersion:"-"),void 0!==a&&void 0!==r&&(tracy.logger("tracyLib: ","evaluating values"),tracy.evaluateValues(r,a),a.__artificialTimestamp&&(r.__artificialTimestamp=a.__artificialTimestamp),tracy.logger("tracyLib: ","evaluated values:",r)),"event"===t&&r&&r.event&&"form"===(((r.event[0]||"").eventInfo||"").eventName||"")&&"Local-Request"===(((a||"").category||"").primaryCategory||"")&&(r.event[0].category=Object.assign(r.event[0].category,a.category)),r},evaluateValues:function evaluateValues(obj,parameter){try{for(var key in obj)if("object"===_typeof(obj[key]))this.evaluateValues(obj[key],parameter);else if("string"==typeof obj[key]&&obj[key].indexOf("javascript:")>-1){var x=obj[key].replace("javascript:","");try{x.indexOf("parameter")>-1&&void 0===eval(x)?obj[key]="na":obj[key]=eval(x)}catch(t){obj[key]=x}}}catch(t){tracy.logger("error","tracyLib: ",t)}},setDebug:function(t){t?(tracy.logger("tracyLib: ","setting debug value"),localStorage.setItem("tracy_lib_debug",t)):(tracy.logger("tracyLib: ","removing debug value"),localStorage.removeItem("tracy_lib_debug"))},epaasFree:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?(sessionStorage.setItem("tracy_debug","true"),tracy.setDebug(!0)):(sessionStorage.removeItem("tracy_debug"),tracy.setDebug(!1))},logger:function(){if(localStorage.getItem("tracy_lib_debug")&&"true"===localStorage.getItem("tracy_lib_debug")){if(void 0===arguments||0===arguments.length)return void console.error("Please specify at least one argument for tracy.logger() call!");var t,a,e=Array.prototype.slice.call(arguments).join(" ");if(e.indexOf("error")>-1?(t=console).error.apply(t,arguments):(a=console).log.apply(a,arguments),location.search.indexOf("iframeTracyTest=1")>-1||localStorage.getItem("tracy_debug_test")&&"true"===localStorage.getItem("tracy_debug_test")){var r={data:window.digitalData||{},signature:"tracy-iframe-test",message:e,webOrigin:window.location.origin,weburl:window.location.href};r=JSON.stringify(r),document.getElementById("tracy-testing-frame-communicator")&&document.getElementById("tracy-testing-frame-communicator").contentWindow.postMessage(r,"*"),window.top.postMessage(r,"*")}}},searchFilter:{add:function(t,a,e,r){tracy.logger("tracyLib: =>","QUEUE - add searchFilter.add call: ",t,a,e,r),addToProcessingQueue({action:"tracy.searchFilter.add",cb:function(){tracy.searchFilter.__add(t,a,e,r)}})},__add:function(t,a,e,r){e&&r?(t=t||"na",tracy.logger("tracyLib:","adding search term"),tracy.filters.push({state:t,unit:a,label:e,term:r}),tracy.logger("tracyLib: =>","Successfully added filter",t,a,e,r)):tracy.logger("tracyLib:","Please pass the requried parameters")},reset:function(){tracy.logger("tracyLib: =>","QUEUE - add searchFilter.reset call"),addToProcessingQueue({action:"tracy.searchFilter.reset",cb:function(){tracy.searchFilter.__reset()}})},__reset:function(){tracy.logger("tracyLib:","reset search terms"),tracy.filters=[]}},loadEpaasApi:function(){var t;function a(){var t;loadAAlibrary(),(location.search.indexOf("iframeTracyTest=1")>-1||localStorage.getItem("tracy_debug_test")&&"true"===localStorage.getItem("tracy_debug_test"))&&(t=setInterval((function(){"undefined"!=typeof _satellite&&void 0!==_satellite._container&&(clearInterval(t),tracy.libDebug(!0))}),300)),runProcessQueueOnAALoad()}t=setInterval((function(){try{"undefined"!=typeof epaas&&(epaas.api.registerOnUserConsentChange((function(t,e){"advertising"===e&&"GIVEN"===t&&a()})),epaas.api.registerOnInitialized((function(){!0===epaas.api.isUsageAllowed(tracy.consentIdentifier)&&a()})),clearInterval(t),t=!1)}catch(t){console.error("error in tracy",t)}}),400)},libDebug:function(t){if(t){var a="undefined"!=typeof _satellite&&_satellite.getVar("tracy_domain")||"";a=a.replace("http:","https:"),"localhost:86"===window.location.host&&(a="http://localhost:86/test-tool"),tracy.logger("tracyLib: ","enabling log capture"),localStorage.setItem("tracy_debug_test",t),(e=document.createElement("iframe")).style.display="none",e.src=a+"/tracy-testing-setup.html",e.id="tracy-testing-frame-communicator",document.head.appendChild(e)}else{var e;tracy.logger("tracyLib: ","disabling log capture"),localStorage.removeItem("tracy_debug_test"),(e=document.getElementById("tracy-testing-frame-communicator"))&&e.remove()}},supportedPageNames:function(){var t="staging"===_satellite.environment.stage?_satellite.getVar("tracy_staging"):_satellite.getVar("tracy_prod"),a={};for(var e in t)e&&"string"==typeof e&&Object.keys(t[e]).indexOf("page")>-1&&(a[e]=t[e]);return a},supportedEventNames:function(){var t="staging"===_satellite.environment.stage?_satellite.getVar("tracy_staging"):_satellite.getVar("tracy_prod"),a={};for(var e in t)e&&"string"==typeof e&&Object.keys(t[e]).indexOf("event")>-1&&(a[e]=t[e]);return a}}}(),libDebugInterval;if(location.search.indexOf("tracy_debug")>-1&&tracy.setDebug(!0),"true"===sessionStorage.getItem("tracy_debug"))loadAAlibrary(),(location.search.indexOf("iframeTracyTest=1")>-1||localStorage.getItem("tracy_debug_test")&&"true"===localStorage.getItem("tracy_debug_test"))&&(libDebugInterval=setInterval((function(){try{"undefined"!=typeof _satellite&&void 0!==_satellite._container&&(clearInterval(libDebugInterval),tracy.libDebug(!0))}catch(t){console.error("error in tracy",t)}}),300)),runProcessQueueOnAALoad();else"undefined"!=typeof epaas&&tracy.loadEpaasApi(),window.addEventListener("consentcontroller.api.initialized",(function(t){console.log("Epaas is loaded"),tracy.epaasIsLoaded=!0,tracy.consentIdentifier=epaas.api.getApiInfo().splitConsentManagement?"AdobeAnalytics":"advertising",tracy.loadEpaasApi()}));window.addEventListener("message",(function(t){try{if(t&&t.data&&"string"==typeof t.data&&t.data.indexOf("tracy-iframe")>-1)"tracy-iframe"===JSON.parse(t.data).signature&&("page"===(a=JSON.parse(t.data)).triggerAction?tracy.page(a.name,a.data):"event"===a.triggerAction&&tracy.event(a.name,a.data));else if(t&&t.data&&"string"==typeof t.data&&t.data.indexOf("methodName")>-1&&t.data.indexOf("addEventTracking")>-1){var a,e=(a=JSON.parse(t.data)).args[1];tracy.product.add("genericProduct",e),tracy.event("genericForm",e)}}catch(t){console.error("error in tracy",t)}})),window.addEventListener("aa_pageload",(function(t){try{if(tracy.logger("tracyLib: ","generating PageView call"),"true"===sessionStorage.getItem("tracy_debug")||"undefined"!=typeof epaas&&epaas.api&&!0===epaas.api.isUsageAllowed(tracy.consentIdentifier)){var a=(t||"").detail||{};a=JSON.stringify(a),tracy.logger("tracyLib: =>","page triggered",a),window.dispatchEvent(new CustomEvent("trigger_pageload",{detail:JSON.parse(JSON.stringify(t.detail))}))}else tracy.logger("tracyLib: ","error - epaas not initialized or no consent given")}catch(t){console.error("error in tracy",t)}})),window.addEventListener("aa_event",(function(t){try{if(tracy.logger("tracyLib: ","generating Event call"),"true"===sessionStorage.getItem("tracy_debug")||"undefined"!=typeof epaas&&epaas.api&&!0===epaas.api.isUsageAllowed(tracy.consentIdentifier)){var a=(t||"").detail||{};a=JSON.stringify(a),tracy.logger("tracyLib: =>","event triggerd",a),window.dispatchEvent(new CustomEvent("trigger_event",{detail:JSON.parse(JSON.stringify(t.detail))}))}else tracy.logger("tracyLib: ","error - epaas not initialized or no consent given")}catch(t){console.error("error in tracy",t)}}));var currentScriptTag=document.currentScript;currentScriptTag&&"autopagetrack"===currentScriptTag.getAttribute("data-tracy-mode")&&(tracy.logger("tracyLib: enable autopagetrack"),document.addEventListener("readystatechange",(function(t){domStageChange(t)}))),window.tracy=tracy}catch(t){console.error(t)}})();