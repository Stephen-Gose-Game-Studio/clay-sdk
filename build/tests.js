/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Clay, testsContext;
	
	Clay = __webpack_require__(2);
	
	testsContext = __webpack_require__(1);
	
	testsContext.keys().forEach(testsContext);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./components/banner_ad": 5,
		"./components/banner_ad.coffee": 5,
		"./components/page_ad": 6,
		"./components/page_ad.coffee": 6,
		"./components/ui_component": 7,
		"./components/ui_component.coffee": 7,
		"./index": 3,
		"./index.coffee": 3,
		"./ui": 4,
		"./ui.coffee": 4,
		"./util/url": 8,
		"./util/url.coffee": 8
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Clay, ui;
	
	Clay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"clay-javascript-sdk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	if (!Function.prototype.bind) {
	  Function.prototype.bind = function(oThis) {
	    var aArgs, fBound, fNOP, fToBind;
	    if (typeof this !== 'function') {
	      throw new TypeError('Function.prototype.bind - what is trying to be bound' + ' is not callable');
	    }
	    aArgs = Array.prototype.slice.call(arguments, 1);
	    fToBind = this;
	    fNOP = function() {
	      return null;
	    };
	    fBound = function() {
	      return fToBind.apply((this instanceof fNOP && oThis ? this : oThis), aArgs.concat(Array.prototype.slice.call(arguments)));
	    };
	    fNOP.prototype = this.prototype;
	    fBound.prototype = new fNOP();
	    return fBound;
	  };
	}
	
	ui = __webpack_require__(9);
	
	Clay.ui = ui;
	
	module.exports = Clay;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Clay;
	
	Clay = __webpack_require__(2);
	
	describe('Clay.ui', function() {
	  return it('should be a function', function() {
	    return Clay.ui.should.be.a.Function;
	  });
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Promise, packageConfig, rewire, ui;
	
	rewire = __webpack_require__(16);
	
	Promise = __webpack_require__(22);
	
	ui = rewire(10);
	
	ui.__set__('Clay.config', Promise.resolve({
	  gameId: '1'
	}));
	
	packageConfig = __webpack_require__(17);
	
	describe('ui()', function() {
	  it('has a version', function() {
	    return ui.version.should.be('v' + packageConfig.version);
	  });
	  it('returns banner ad components', function() {
	    return ui('bannerAd', {
	      position: 'top'
	    }).then(function(banner) {
	      return banner.$el.should.exist;
	    }).then(function() {
	      return ui('bannerAd', {
	        position: 'bottom'
	      });
	    }).then(function(banner) {
	      return banner.$el.should.exist;
	    });
	  });
	  it('returns page ad components', function() {
	    return ui('pageAd').then(function(ad) {
	      return ad.$el.should.exist;
	    });
	  });
	  it('fails to return invalid component', function(done) {
	    return ui('INVALID').then(function() {
	      return done(new Error('expected error'));
	    }, function() {
	      return done();
	    });
	  });
	  it('fails when options is array', function(done) {
	    return ui('bannerAd', []).then(function() {
	      return done(new Error('expected error'));
	    }, function() {
	      return done();
	    });
	  });
	  it('fails when options is a string', function(done) {
	    return ui('bannerAd', 'options').then(function() {
	      return done(new Error('expected error'));
	    }, function() {
	      return done();
	    });
	  });
	  return it('fails when options is a number', function(done) {
	    return ui('bannerAd', 1).then(function() {
	      return done(new Error('expected error'));
	    }, function() {
	      return done();
	    });
	  });
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var BannerAd, Clay, should;
	
	should = __webpack_require__(18).should();
	
	BannerAd = __webpack_require__(11);
	
	Clay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"clay-javascript-sdk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	describe('banner ad', function() {
	  it('renders iframe bottom', function() {
	    var banner, dom;
	    banner = new BannerAd({
	      gameId: '1'
	    }, {
	      position: 'bottom'
	    });
	    dom = banner.render();
	    dom.tag.should.be('iframe');
	    return dom.attrs.className.should.be('c-banner-ad-bottom');
	  });
	  it('renders iframe top', function() {
	    var banner, dom;
	    Clay.init({
	      gameId: '1'
	    });
	    banner = new BannerAd({
	      gameId: '1'
	    }, {
	      position: 'top'
	    });
	    dom = banner.render();
	    dom.tag.should.be('iframe');
	    return dom.attrs.className.should.be('c-banner-ad-top');
	  });
	  it('errors if missing position', function(done) {
	    var e;
	    Clay.init({
	      gameId: '1'
	    });
	    try {
	      new BannerAd();
	      return done(new Error('Expected error'));
	    } catch (_error) {
	      e = _error;
	      e.message.should.be('Invalid or missing position');
	      return done();
	    }
	  });
	  return it('errors if invalid position', function(done) {
	    var e;
	    Clay.init({
	      gameId: '1'
	    });
	    try {
	      new BannerAd({
	        position: 'INVALID'
	      });
	      return done(new Error('Expected error'));
	    } catch (_error) {
	      e = _error;
	      e.message.should.be('Invalid or missing position');
	      return done();
	    }
	  });
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Clay, PageAd;
	
	PageAd = __webpack_require__(12);
	
	Clay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"clay-javascript-sdk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	describe('page ad', function() {
	  return it('renders iframe', function() {
	    var ad, dom;
	    ad = new PageAd({
	      gameId: '1'
	    });
	    dom = ad.render();
	    dom.tag.should.be('div');
	    dom.children[0].attrs.className.should.be('c-page-ad-close');
	    return dom.children[1].attrs.className.should.be('c-page-ad-full-portrait');
	  });
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var UIComponent, should;
	
	should = __webpack_require__(18).should();
	
	UIComponent = __webpack_require__(13);
	
	describe('ui component', function() {
	  it('sets $el on constructor', function() {
	    var component;
	    component = new UIComponent();
	    return component.$el.should.exist;
	  });
	  it('redraws, calling render', function() {
	    var callCnt, component;
	    component = new UIComponent();
	    callCnt = 0;
	    component.render = function() {
	      return callCnt += 1;
	    };
	    component.redraw();
	    return callCnt.should.be(1);
	  });
	  it('removes', function() {
	    var component, root;
	    component = new UIComponent();
	    root = document.createElement('div');
	    document.body.appendChild(root);
	    root.appendChild(component.$el);
	    component.remove();
	    return root.childNodes.length.should.be(0);
	  });
	  it('has on() listener', function() {
	    var component;
	    component = new UIComponent();
	    return component.on.should.be.a.Function;
	  });
	  it('emits', function() {
	    var callCnt, component;
	    component = new UIComponent();
	    callCnt = 0;
	    component.on('remove', function() {
	      return callCnt += 1;
	    });
	    component.emit('remove');
	    return callCnt.should.be(1);
	  });
	  return it('emits on remove', function() {
	    var callCnt, component, root;
	    component = new UIComponent();
	    callCnt = 0;
	    component.on('remove', function() {
	      return callCnt += 1;
	    });
	    root = document.createElement('div');
	    root.appendChild(component.$el);
	    component.remove();
	    return callCnt.should.be(1);
	  });
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var should, url;
	
	should = __webpack_require__(18).should();
	
	url = __webpack_require__(14);
	
	describe('Util | Url', function() {
	  return it('joins path params', function() {
	    return url.queryPath('abc', {
	      a: 'b',
	      c: 'd',
	      e: 'f'
	    }).should.be('abc?a=b&c=d&e=f&');
	  });
	});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Clay, components, iconStyle, ui, z;
	
	z = __webpack_require__(19);
	
	Clay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"clay-javascript-sdk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	iconStyle = __webpack_require__(20);
	
	iconStyle.use();
	
	components = {
	  bannerAd: __webpack_require__(11),
	  pageAd: __webpack_require__(12)
	};
	
	ui = function(componentName, options) {
	  if (options == null) {
	    options = {};
	  }
	  return Clay.config.then(function(config) {
	    var ComponentClass, component;
	    if (!components[componentName]) {
	      throw new Error('Component not found' + componentName);
	    }
	    if (Object.prototype.toString.call(options) !== '[object Object]') {
	      throw new Error('options must be an object');
	    }
	    ComponentClass = components[componentName];
	    component = new ComponentClass(config, options);
	    component.redraw();
	    return component;
	  });
	};
	
	ui.version = 'v0.0.2';
	
	module.exports = ui;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	                                                                                                                                                /* this line was injected by rewire() */ var global = window; eval(__webpack_require__(15)()); (function () {  var Clay, components, iconStyle, ui, z;
	
	z = __webpack_require__(19);
	
	Clay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"clay-javascript-sdk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	iconStyle = __webpack_require__(20);
	
	iconStyle.use();
	
	components = {
	  bannerAd: __webpack_require__(11),
	  pageAd: __webpack_require__(12)
	};
	
	ui = function(componentName, options) {
	  if (options == null) {
	    options = {};
	  }
	  return Clay.config.then(function(config) {
	    var ComponentClass, component;
	    if (!components[componentName]) {
	      throw new Error('Component not found' + componentName);
	    }
	    if (Object.prototype.toString.call(options) !== '[object Object]') {
	      throw new Error('options must be an object');
	    }
	    ComponentClass = components[componentName];
	    component = new ComponentClass(config, options);
	    component.redraw();
	    return component;
	  });
	};
	
	ui.version = 'v0.0.2';
	
	module.exports = ui;
	
	Object.defineProperty(module.exports, '__get__', {enumerable: false, value: function __get__() {
	    arguments.varName = arguments[0];
	    if (arguments.varName && typeof arguments.varName === "string") {
	        return eval(arguments.varName);
	    } else {
	        throw new TypeError("__get__ expects a non-empty string");
	    }
	}}); Object.defineProperty(module.exports, '__set__', {enumerable: false, value: function __set__() {
	    arguments.varName = arguments[0];
	    arguments.varValue = arguments[1];
	    arguments.src = "";
	    arguments.snapshot = {};
	
	    if (typeof arguments[0] === "object" && arguments.length === 1) {
	        arguments.env = arguments.varName;
	        if (!arguments.env || Array.isArray(arguments.env)) {
	            throw new TypeError("__set__ expects an object as env");
	        }
	        for (arguments.varName in arguments.env) {
	            if (arguments.env.hasOwnProperty(arguments.varName)) {
	                arguments.varValue = arguments.env[arguments.varName];
	                arguments.src += arguments.varName + " = arguments.env." + arguments.varName + "; ";
	                arguments.snapshot[arguments.varName] = eval(arguments.varName);
	            }
	        }
	    } else if (typeof arguments.varName === "string" && arguments.length === 2) {
	        if (!arguments.varName) {
	            throw new TypeError("__set__ expects a non-empty string as a variable name");
	        }
	        arguments.src = arguments.varName + " = arguments.varValue;";
	        arguments.snapshot[arguments.varName] = eval(arguments.varName);
	    } else {
	        throw new TypeError("__set__ expects an environment object or a non-empty string as a variable name");
	    }
	
	    eval(arguments.src);
	
	    return function (snapshot) {
	        module.exports.__set__(snapshot);
	    }.bind(null, arguments.snapshot);
	}}); Object.defineProperty(module.exports, '__with__', {enumerable: false, value: function __with__() {
	    var args = arguments;
	
	    return function (callback) {
	        var undo,
	            returned,
	            isPromise;
	
	        if (typeof callback !== "function") {
	            throw new TypeError("__with__ expects a callback function");
	        }
	
	        undo = module.exports.__set__.apply(null, args);
	
	        try {
	            returned = callback();
	            isPromise = returned && typeof returned.then === "function";
	            if (isPromise) {
	                returned.then(undo, undo);
	                return returned;
	            }
	        } finally {
	            if (!isPromise) {
	                undo();
	            }
	        }
	    };
	}});  })();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var BannerAd, Clay, UIComponent, config, styles, url, z,
	  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
	
	z = __webpack_require__(19);
	
	Clay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"clay-javascript-sdk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	styles = __webpack_require__(23);
	
	UIComponent = __webpack_require__(13);
	
	config = __webpack_require__(25);
	
	url = __webpack_require__(14);
	
	module.exports = BannerAd = (function(_super) {
	  __extends(BannerAd, _super);
	
	  function BannerAd(_arg, _arg1) {
	    var gameId, lang, position, referer, scr_h, scr_w;
	    gameId = (_arg != null ? _arg : {}).gameId;
	    position = (_arg1 != null ? _arg1 : {}).position;
	    this.render = __bind(this.render, this);
	    BannerAd.__super__.constructor.call(this);
	    styles.use();
	    if (position !== 'top' && position !== 'bottom') {
	      throw new Error('Invalid or missing position');
	    }
	    lang = window.navigator.language ? window.navigator.language : window.navigator.browserLanguage;
	    scr_w = window.screen.width;
	    scr_h = window.screen.height;
	    referer = window.location.href.substr(0, 255);
	    this.iframeClass = (function() {
	      switch (position) {
	        case 'top':
	          return '.c-banner-ad-top';
	        case 'bottom':
	          return '.c-banner-ad-bottom';
	      }
	    })();
	    this.iframeUrl = url.queryPath(config.API_URL + '/ads', {
	      gameId: gameId,
	      style: 'banner',
	      redirect: true,
	      lang: lang,
	      scr_w: scr_w,
	      scr_h: scr_h,
	      referer: referer
	    });
	  }
	
	  BannerAd.prototype.render = function() {
	    return z("iframe." + this.iframeClass, {
	      frameborder: 0,
	      src: this.iframeUrl,
	      allowtransparency: true,
	      scrolling: 'no'
	    });
	  };
	
	  return BannerAd;
	
	})(UIComponent);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Clay, PageAd, UIComponent, config, styles, url, z,
	  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
	
	z = __webpack_require__(19);
	
	Clay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"clay-javascript-sdk\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	styles = __webpack_require__(26);
	
	UIComponent = __webpack_require__(13);
	
	config = __webpack_require__(25);
	
	url = __webpack_require__(14);
	
	module.exports = PageAd = (function(_super) {
	  __extends(PageAd, _super);
	
	  function PageAd(_arg) {
	    var gameId, isPortrait, lang, referer, scr_h, scr_w;
	    gameId = (_arg != null ? _arg : {}).gameId;
	    this.render = __bind(this.render, this);
	    PageAd.__super__.constructor.call(this);
	    styles.use();
	    lang = window.navigator.language ? window.navigator.language : window.navigator.browserLanguage;
	    scr_w = window.screen.width;
	    scr_h = window.screen.height;
	    referer = window.location.href.substr(0, 255);
	    isPortrait = scr_h > scr_w;
	    this.iframeClass = isPortrait ? '.c-page-ad-full-portrait' : '.c-page-ad-full-portrait';
	    this.iframeUrl = url.queryPath(config.API_URL + '/ads', {
	      gameId: gameId,
	      style: isPortrait ? 'pagePortrait' : 'pageLandscape',
	      redirect: true,
	      lang: lang,
	      scr_w: scr_w,
	      scr_h: scr_h,
	      referer: referer
	    });
	  }
	
	  PageAd.prototype.render = function() {
	    return z('.c-page-ad-background', z('.c-page-ad-close', {
	      onclick: this.remove
	    }, z('i.icon.icon-close')), z("iframe." + this.iframeClass, {
	      frameborder: 0,
	      src: this.iframeUrl,
	      allowtransparency: true,
	      scrolling: 'no'
	    }));
	  };
	
	  return PageAd;
	
	})(UIComponent);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var UIComponent, z,
	  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
	
	z = __webpack_require__(19);
	
	module.exports = UIComponent = (function() {
	  function UIComponent() {
	    this.emit = __bind(this.emit, this);
	    this.on = __bind(this.on, this);
	    this.remove = __bind(this.remove, this);
	    this.redraw = __bind(this.redraw, this);
	    this._events = {};
	    this.$el = document.createElement('div');
	  }
	
	  UIComponent.prototype.redraw = function() {
	    return z.render(this.$el, this.render());
	  };
	
	  UIComponent.prototype.remove = function() {
	    this.$el.parentElement.removeChild(this.$el);
	    return this.emit('remove');
	  };
	
	  UIComponent.prototype.on = function(name, fn) {
	    return (this._events[name] = this._events[name] || []).push(fn);
	  };
	
	  UIComponent.prototype.emit = function(name) {
	    var i, list, _results;
	    list = this._events[name] || [];
	    i = list.length;
	    _results = [];
	    while (i) {
	      i -= 1;
	      _results.push(list[i].apply(1, [].slice.call(arguments, 1)));
	    }
	    return _results;
	  };
	
	  return UIComponent;
	
	})();


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  queryPath: function(path, queryParams) {
	    var key, query, val;
	    query = '?';
	    for (key in queryParams) {
	      val = queryParams[key];
	      query += key + '=' + encodeURIComponent(val) + '&';
	    }
	    return path + query;
	  }
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Declares all globals with a var and assigns the global object. Thus you're able to
	 * override globals without changing the global object itself.
	 *
	 * Returns something like
	 * "var console = global.console; var process = global.process; ..."
	 *
	 * @return {String}
	 */
	function getImportGlobalsSrc(ignore) {
	    var key,
	        value,
	        src = "",
	        globalObj = typeof global === "undefined"? window: global;
	
	    ignore = ignore || [];
	    // global itself can't be overridden because it's the only reference to our real global objects
	    ignore.push("global");
	    // ignore 'module', 'exports' and 'require' on the global scope, because otherwise our code would
	    // shadow the module-internal variables
	    // @see https://github.com/jhnns/rewire-webpack/pull/6
	    ignore.push("module", "exports", "require");
	
	    for (key in globalObj) { /* jshint forin: false */
	        if (ignore.indexOf(key) !== -1) {
	            continue;
	        }
	        value = globalObj[key];
	        src += "var " + key + " = global." + key + "; ";
	    }
	
	    return src;
	}
	
	module.exports = getImportGlobalsSrc;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function rewire(module) {
	    var rewiredModule = {
	        id: module,
	        loaded: false,
	        exports: {}
	    };
	
	    __webpack_require__.m[module].call(rewiredModule.exports, rewiredModule, rewiredModule.exports, __webpack_require__);
	    rewiredModule.loaded = true;
	
	    return rewiredModule.exports;
	}
	
	module.exports = rewire;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "clay-ui",
		"version": "0.0.2",
		"description": "",
		"main": "index.js",
		"scripts": {
			"test": "node_modules/gulp/bin/gulp.js test",
			"build": "node_modules/gulp/bin/gulp.js build",
			"demo": "node_modules/gulp/bin/gulp.js demo"
		},
		"author": "",
		"devDependencies": {
			"bluebird": "2.3.11",
			"clay-chai": "0.0.2",
			"coffee-loader": "0.7.2",
			"css-loader": "0.9.0",
			"envify": "3.0.0",
			"express": "4.10.1",
			"gulp": "3.8.10",
			"gulp-clean": "0.3.1",
			"gulp-coffeelint": "0.4.0",
			"gulp-nodemon": "1.0.4",
			"gulp-rename": "1.2.0",
			"gulp-run-sequence": "0.3.2",
			"gulp-webpack": "1.0.0",
			"json-loader": "0.5.1",
			"karma": "0.12.24",
			"karma-chrome-launcher": "0.1.5",
			"karma-firefox-launcher": "0.1.3",
			"karma-mocha": "0.1.9",
			"karma-phantomjs-launcher": "0.1.4",
			"lodash": "2.4.1",
			"loglevel": "1.2.0",
			"mocha": "2.0.1",
			"rewire": "2.1.3",
			"rewire-webpack": "1.0.0",
			"style-loader": "0.8.2",
			"stylus-loader": "0.4.0",
			"transform-loader": "0.2.1",
			"webpack": "1.4.13",
			"webpack-dev-server": "1.6.5"
		},
		"dependencies": {
			"clay-javascript-sdk": "0.0.6",
			"coffee-script": "1.8.0",
			"zorium": "0.1.0"
		}
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var chai = __webpack_require__(30)
	
	chai.use(function (chai, utils) {
	  chai.Assertion.overwriteProperty('be', function (_super) {
	    return function () {
	      var be = function (x) {
	        var obj = utils.flag(this, 'object')
	        if (typeof x != 'undefined')
	          new chai.Assertion(obj).to.deep.equal(x)
	        _super.apply(this, arguments)
	      }
	      be.__proto__ = this
	      return be
	    }
	  })
	})
	
	module.exports = chai


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {Mithril = m = new function app(window, undefined) {
		var type = {}.toString
		var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g, attrParser = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/
		var voidElements = /AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TR‌​ACK|WBR/
	
		/*
		 * @typedef {String} Tag
		 * A string that looks like -> div.classname#id[param=one][param2=two]
		 * Which describes a DOM node
		 */
	
		/*
		 *
		 * @param {Tag} The DOM node tag
		 * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
		 * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array, or splat (optional)
		 *
		 */
		function m() {
			var args = Array.prototype.slice.call(arguments, 0)
			var hasAttrs = args[1] != null && type.call(args[1]) == "[object Object]" && !("tag" in args[1]) && !("subtree" in args[1])
			var attrs = hasAttrs ? args[1] : {}
			var classAttrName = "class" in attrs ? "class" : "className"
			var cell = {tag: "div", attrs: {}}
			var match, classes = []
			while (match = parser.exec(args[0])) {
				if (match[1] == "") cell.tag = match[2]
				else if (match[1] == "#") cell.attrs.id = match[2]
				else if (match[1] == ".") classes.push(match[2])
				else if (match[3][0] == "[") {
					var pair = attrParser.exec(match[3])
					cell.attrs[pair[1]] = pair[3] || (pair[2] ? "" :true)
				}
			}
			if (classes.length > 0) cell.attrs[classAttrName] = classes.join(" ")
	
	
			var children = hasAttrs ? args[2] : args[1]
			if (children instanceof Array) {
				cell.children = children
			}
			else {
				cell.children = hasAttrs ? args.slice(2) : args.slice(1)
			}
	
			for (var attrName in attrs) {
				if (attrName == classAttrName) cell.attrs[attrName] = (cell.attrs[attrName] || "") + " " + attrs[attrName]
				else cell.attrs[attrName] = attrs[attrName]
			}
			return cell
		}
		function build(parentElement, parentTag, parentCache, parentIndex, data, cached, shouldReattach, index, editable, namespace, configs) {
			//`build` is a recursive function that manages creation/diffing/removal of DOM elements based on comparison between `data` and `cached`
			//the diff algorithm can be summarized as this:
			//1 - compare `data` and `cached`
			//2 - if they are different, copy `data` to `cached` and update the DOM based on what the difference is
			//3 - recursively apply this algorithm for every array and for the children of every virtual element
	
			//the `cached` data structure is essentially the same as the previous redraw's `data` data structure, with a few additions:
			//- `cached` always has a property called `nodes`, which is a list of DOM elements that correspond to the data represented by the respective virtual element
			//- in order to support attaching `nodes` as a property of `cached`, `cached` is *always* a non-primitive object, i.e. if the data was a string, then cached is a String instance. If data was `null` or `undefined`, cached is `new String("")`
			//- `cached also has a `configContext` property, which is the state storage object exposed by config(element, isInitialized, context)
			//- when `cached` is an Object, it represents a virtual element; when it's an Array, it represents a list of elements; when it's a String, Number or Boolean, it represents a text node
	
			//`parentElement` is a DOM element used for W3C DOM API calls
			//`parentTag` is only used for handling a corner case for textarea values
			//`parentCache` is used to remove nodes in some multi-node cases
			//`parentIndex` and `index` are used to figure out the offset of nodes. They're artifacts from before arrays started being flattened and are likely refactorable
			//`data` and `cached` are, respectively, the new and old nodes being diffed
			//`shouldReattach` is a flag indicating whether a parent node was recreated (if so, and if this node is reused, then this node must reattach itself to the new parent)
			//`editable` is a flag that indicates whether an ancestor is contenteditable
			//`namespace` indicates the closest HTML namespace as it cascades down from an ancestor
			//`configs` is a list of config functions to run after the topmost `build` call finishes running
	
			//there's logic that relies on the assumption that null and undefined data are equivalent to empty strings
			//- this prevents lifecycle surprises from procedural helpers that mix implicit and explicit return statements
			//- it simplifies diffing code
			if (data == null) data = ""
			if (data.subtree === "retain") return cached
	
			var cachedType = type.call(cached), dataType = type.call(data)
			if (cached == null || cachedType != dataType) {
				if (cached != null) {
					if (parentCache && parentCache.nodes) {
						var offset = index - parentIndex
						var end = offset + (dataType == "[object Array]" ? data : cached.nodes).length
						clear(parentCache.nodes.slice(offset, end), parentCache.slice(offset, end))
					}
					else if (cached.nodes) clear(cached.nodes, cached)
				}
				cached = new data.constructor
				cached.nodes = []
			}
	
			if (dataType == "[object Array]") {
				data = flatten(data)
				var nodes = [], intact = cached.length === data.length, subArrayCount = 0
	
				//keys algorithm: sort elements without recreating them if keys are present
				//1) create a map of all existing keys, and mark all for deletion
				//2) add new keys to map and mark them for addition
				//3) if key exists in new list, change action from deletion to a move
				//4) for each key, handle its corresponding action as marked in previous steps
				//5) copy unkeyed items into their respective gaps
				var DELETION = 1, INSERTION = 2 , MOVE = 3
				var existing = {}, unkeyed = [], shouldMaintainIdentities = false
				for (var i = 0; i < cached.length; i++) {
					if (cached[i] && cached[i].attrs && cached[i].attrs.key != null) {
						shouldMaintainIdentities = true
						existing[cached[i].attrs.key] = {action: DELETION, index: i}
					}
				}
				if (shouldMaintainIdentities) {
					for (var i = 0; i < data.length; i++) {
						if (data[i] && data[i].attrs) {
							if (data[i].attrs.key != null) {
								var key = data[i].attrs.key
								if (!existing[key]) existing[key] = {action: INSERTION, index: i}
								else existing[key] = {action: MOVE, index: i, from: existing[key].index, element: parentElement.childNodes[existing[key].index]}
							}
							else unkeyed.push({index: i, element: parentElement.childNodes[i]})
						}
					}
					var actions = Object.keys(existing).map(function(key) {return existing[key]})
					var changes = actions.sort(function(a, b) {return a.action - b.action || a.index - b.index})
					var newCached = cached.slice()
	
					for (var i = 0, change; change = changes[i]; i++) {
						if (change.action == DELETION) {
							clear(cached[change.index].nodes, cached[change.index])
							newCached.splice(change.index, 1)
						}
						if (change.action == INSERTION) {
							var dummy = window.document.createElement("div")
							dummy.key = data[change.index].attrs.key
							parentElement.insertBefore(dummy, parentElement.childNodes[change.index])
							newCached.splice(change.index, 0, {attrs: {key: data[change.index].attrs.key}, nodes: [dummy]})
						}
	
						if (change.action == MOVE) {
							if (parentElement.childNodes[change.index] !== change.element && change.element !== null) {
								parentElement.insertBefore(change.element, parentElement.childNodes[change.index])
							}
							newCached[change.index] = cached[change.from]
						}
					}
					for (var i = 0; i < unkeyed.length; i++) {
						var change = unkeyed[i]
						parentElement.insertBefore(change.element, parentElement.childNodes[change.index])
						newCached[change.index] = cached[change.index]
					}
					cached = newCached
					cached.nodes = []
					for (var i = 0, child; child = parentElement.childNodes[i]; i++) cached.nodes.push(child)
				}
				//end key algorithm
	
				for (var i = 0, cacheCount = 0; i < data.length; i++) {
					//diff each item in the array
					var item = build(parentElement, parentTag, cached, index, data[i], cached[cacheCount], shouldReattach, index + subArrayCount || subArrayCount, editable, namespace, configs)
					if (item === undefined) continue
					if (!item.nodes.intact) intact = false
					var isArray = type.call(item) == "[object Array]"
					subArrayCount += isArray ? item.length : 1
					cached[cacheCount++] = item
				}
				if (!intact) {
					//diff the array itself
	
					//update the list of DOM nodes by collecting the nodes from each item
					for (var i = 0; i < data.length; i++) {
						if (cached[i] != null) nodes = nodes.concat(cached[i].nodes)
					}
					//remove items from the end of the array if the new array is shorter than the old one
					//if errors ever happen here, the issue is most likely a bug in the construction of the `cached` data structure somewhere earlier in the program
					for (var i = 0, node; node = cached.nodes[i]; i++) {
						if (node.parentNode != null && nodes.indexOf(node) < 0) clear([node], [cached[i]])
					}
					//add items to the end if the new array is longer than the old one
					for (var i = cached.nodes.length, node; node = nodes[i]; i++) {
						if (node.parentNode == null) parentElement.appendChild(node)
					}
					if (data.length < cached.length) cached.length = data.length
					cached.nodes = nodes
				}
			}
			else if (data != null && dataType == "[object Object]") {
				//if an element is different enough from the one in cache, recreate it
				if (data.tag != cached.tag || Object.keys(data.attrs).join() != Object.keys(cached.attrs).join() || data.attrs.id != cached.attrs.id) {
					clear(cached.nodes)
					if (cached.configContext && typeof cached.configContext.onunload == "function") cached.configContext.onunload()
				}
				if (typeof data.tag != "string") return
	
				var node, isNew = cached.nodes.length === 0
				if (data.attrs.xmlns) namespace = data.attrs.xmlns
				else if (data.tag === "svg") namespace = "http://www.w3.org/2000/svg"
				else if (data.tag === "math") namespace = "http://www.w3.org/1998/Math/MathML"
				if (isNew) {
					node = namespace === undefined ? window.document.createElement(data.tag) : window.document.createElementNS(namespace, data.tag)
					cached = {
						tag: data.tag,
						//process children before attrs so that select.value works correctly
						children: build(node, data.tag, undefined, undefined, data.children, cached.children, true, 0, data.attrs.contenteditable ? node : editable, namespace, configs),
						attrs: setAttributes(node, data.tag, data.attrs, {}, namespace),
						nodes: [node]
					}
					parentElement.insertBefore(node, parentElement.childNodes[index] || null)
				}
				else {
					node = cached.nodes[0]
					setAttributes(node, data.tag, data.attrs, cached.attrs, namespace)
					cached.children = build(node, data.tag, undefined, undefined, data.children, cached.children, false, 0, data.attrs.contenteditable ? node : editable, namespace, configs)
					cached.nodes.intact = true
					if (shouldReattach === true && node != null) parentElement.insertBefore(node, parentElement.childNodes[index] || null)
				}
				//schedule configs to be called. They are called after `build` finishes running
				if (typeof data.attrs["config"] === "function") {
					var context = cached.configContext = cached.configContext || {}
	
					// bind
					configs.push((function (data, node, isNew, context, cached) {
						var args = [node, !isNew, context, cached]
						return function () {
							return data.attrs["config"].apply(data, args.concat(Array.prototype.slice.call(arguments, 0)))
						}
					})(data, node, isNew, context, cached))
				}
			}
			else if (typeof dataType != "function") {
				//handle text nodes
				var nodes
				if (cached.nodes.length === 0) {
					if (data.$trusted) {
						nodes = injectHTML(parentElement, index, data)
					}
					else {
						nodes = [window.document.createTextNode(data)]
						if (!parentElement.nodeName.match(voidElements)) parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null)
					}
					cached = "string number boolean".indexOf(typeof data) > -1 ? new data.constructor(data) : data
					cached.nodes = nodes
				}
				else if (cached.valueOf() !== data.valueOf() || shouldReattach === true) {
					nodes = cached.nodes
					if (!editable || editable !== window.document.activeElement) {
						if (data.$trusted) {
							clear(nodes, cached)
							nodes = injectHTML(parentElement, index, data)
						}
						else {
							//corner case: replacing the nodeValue of a text node that is a child of a textarea/contenteditable doesn't work
							//we need to update the value property of the parent textarea or the innerHTML of the contenteditable element instead
							if (parentTag === "textarea") parentElement.value = data
							else if (editable) editable.innerHTML = data
							else {
								if (nodes[0].nodeType == 1 || nodes.length > 1) { //was a trusted string
									clear(cached.nodes, cached)
									nodes = [window.document.createTextNode(data)]
								}
								parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null)
								nodes[0].nodeValue = data
							}
						}
					}
					cached = new data.constructor(data)
					cached.nodes = nodes
				}
				else cached.nodes.intact = true
			}
	
			return cached
		}
		function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
			var groups = {}
			for (var attrName in dataAttrs) {
				var dataAttr = dataAttrs[attrName]
				var cachedAttr = cachedAttrs[attrName]
				if (!(attrName in cachedAttrs) || (cachedAttr !== dataAttr)) {
					cachedAttrs[attrName] = dataAttr
					if (attrName === "config") continue
					else if (typeof dataAttr == "function" && attrName.indexOf("on") == 0) {
						node[attrName] = autoredraw(dataAttr, node)
					}
					else if (attrName === "style" && typeof dataAttr == "object") {
						for (var rule in dataAttr) {
							if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) node.style[rule] = dataAttr[rule]
						}
						for (var rule in cachedAttr) {
							if (!(rule in dataAttr)) node.style[rule] = ""
						}
					}
					else if (namespace != null) {
						if (attrName === "href") node.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataAttr)
						else if (attrName === "className") node.setAttribute("class", dataAttr)
						else node.setAttribute(attrName, dataAttr)
					}
					else if (attrName in node && !(attrName == "list" || attrName == "style")) {
						node[attrName] = dataAttr
					}
					else node.setAttribute(attrName, dataAttr)
				}
			}
			return cachedAttrs
		}
		function clear(nodes, cached) {
			for (var i = nodes.length - 1; i > -1; i--) {
				if (nodes[i] && nodes[i].parentNode) {
					nodes[i].parentNode.removeChild(nodes[i])
					cached = [].concat(cached)
					if (cached[i]) unload(cached[i])
				}
			}
			if (nodes.length != 0) nodes.length = 0
		}
		function unload(cached) {
			if (cached.configContext && typeof cached.configContext.onunload == "function") cached.configContext.onunload()
			if (cached.children) {
				if (type.call(cached.children) == "[object Array]") for (var i = 0; i < cached.children.length; i++) unload(cached.children[i])
				else if (cached.children.tag) unload(cached.children)
			}
		}
		function injectHTML(parentElement, index, data) {
			var nextSibling = parentElement.childNodes[index]
			if (nextSibling) {
				var isElement = nextSibling.nodeType != 1
				var placeholder = window.document.createElement("span")
				if (isElement) {
					parentElement.insertBefore(placeholder, nextSibling)
					placeholder.insertAdjacentHTML("beforebegin", data)
					parentElement.removeChild(placeholder)
				}
				else nextSibling.insertAdjacentHTML("beforebegin", data)
			}
			else parentElement.insertAdjacentHTML("beforeend", data)
			var nodes = []
			while (parentElement.childNodes[index] !== nextSibling) {
				nodes.push(parentElement.childNodes[index])
				index++
			}
			return nodes
		}
		function flatten(data) {
			var flattened = []
			for (var i = 0; i < data.length; i++) {
				var item = data[i]
				if (type.call(item) == "[object Array]") flattened.push.apply(flattened, flatten(item))
				else flattened.push(item)
			}
			return flattened
		}
		function autoredraw(callback, object, group) {
			return function(e) {
				e = e || event
				m.redraw.strategy("diff")
				m.startComputation()
				try {return callback.call(object, e)}
				finally {
					if (!lastRedrawId) lastRedrawId = -1;
					m.endComputation()
				}
			}
		}
	
		var html
		var documentNode = {
			insertAdjacentHTML: function(_, data) {
				window.document.write(data)
				window.document.close()
			},
			appendChild: function(node) {
				if (html === undefined) html = window.document.createElement("html")
				if (node.nodeName == "HTML") html = node
				else html.appendChild(node)
				if (window.document.documentElement && window.document.documentElement !== html) {
					window.document.replaceChild(html, window.document.documentElement)
				}
				else window.document.appendChild(html)
			},
			insertBefore: function(node) {
				this.appendChild(node)
			},
			childNodes: []
		}
		var nodeCache = [], cellCache = {}
		m.render = function(root, cell, forceRecreation) {
			var configs = []
			if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.")
			var id = getCellCacheKey(root)
			var node = root == window.document || root == window.document.documentElement ? documentNode : root
			if (cellCache[id] === undefined) clear(node.childNodes)
			if (forceRecreation === true) reset(root)
			cellCache[id] = build(node, null, undefined, undefined, cell, cellCache[id], false, 0, null, undefined, configs)
			for (var i = 0; i < configs.length; i++) configs[i]()
		}
		function getCellCacheKey(element) {
			var index = nodeCache.indexOf(element)
			return index < 0 ? nodeCache.push(element) - 1 : index
		}
	
		m.trust = function(value) {
			value = new String(value)
			value.$trusted = true
			return value
		}
	
		function _prop(store) {
			var prop = function() {
				if (arguments.length) store = arguments[0]
				return store
			}
	
			prop.toJSON = function() {
				return store
			}
	
			return prop
		}
	
		m.prop = function (store) {
			if ((typeof store === 'object' || typeof store === 'function') && store !== null &&
					typeof store.then === 'function') {
				var prop = _prop()
				newPromisedProp(prop, store).then(prop)
	
				return prop
			}
	
			return _prop(store)
		}
	
		var roots = [], modules = [], controllers = [], lastRedrawId = 0, computePostRedrawHook = null, prevented = false
		m.module = function(root, module) {
			var index = roots.indexOf(root)
			if (index < 0) index = roots.length
			var isPrevented = false
			if (controllers[index] && typeof controllers[index].onunload == "function") {
				var event = {
					preventDefault: function() {isPrevented = true}
				}
				controllers[index].onunload(event)
			}
			if (!isPrevented) {
				m.redraw.strategy("all")
				m.startComputation()
				roots[index] = root
				modules[index] = module
				controllers[index] = new module.controller
				m.endComputation()
			}
		}
		m.redraw = function(force) {
			var cancel = window.cancelAnimationFrame || window.clearTimeout
			var defer = window.requestAnimationFrame || window.setTimeout
			if (lastRedrawId && force !== true) {
				cancel(lastRedrawId)
				lastRedrawId = defer(redraw, 0)
			}
			else {
				redraw()
				lastRedrawId = defer(function() {lastRedrawId = null}, 0)
			}
		}
		m.redraw.strategy = m.prop()
		function redraw() {
			var mode = m.redraw.strategy()
			for (var i = 0; i < roots.length; i++) {
				if (controllers[i] && mode != "none") m.render(roots[i], modules[i].view(controllers[i]), mode == "all")
			}
			if (computePostRedrawHook) {
				computePostRedrawHook()
				computePostRedrawHook = null
			}
			lastRedrawId = null
			m.redraw.strategy("diff")
		}
	
		var pendingRequests = 0
		m.startComputation = function() {pendingRequests++}
		m.endComputation = function() {
			pendingRequests = Math.max(pendingRequests - 1, 0)
			if (pendingRequests == 0) m.redraw()
		}
	
		m.withAttr = function(prop, withAttrCallback) {
			return function(e) {
				e = e || event
				var currentTarget = e.currentTarget || this
				withAttrCallback(prop in currentTarget ? currentTarget[prop] : currentTarget.getAttribute(prop))
			}
		}
	
		//routing
		var modes = {pathname: "", hash: "#", search: "?"}
		var redirect = function() {}, routeParams = {}, currentRoute
		m.route = function() {
			if (arguments.length === 0) return currentRoute
			else if (arguments.length === 3 && typeof arguments[1] == "string") {
				var root = arguments[0], defaultRoute = arguments[1], router = arguments[2]
				redirect = function(source) {
					var path = currentRoute = normalizeRoute(source)
					if (!routeByValue(root, router, path)) {
						m.route(defaultRoute, true)
					}
				}
				var listener = m.route.mode == "hash" ? "onhashchange" : "onpopstate"
				window[listener] = function() {
					if (currentRoute != normalizeRoute(window.location[m.route.mode])) {
						redirect(window.location[m.route.mode])
					}
				}
				computePostRedrawHook = setScroll
				window[listener]()
			}
			else if (arguments[0].addEventListener) {
				var element = arguments[0]
				var isInitialized = arguments[1]
				if (element.href.indexOf(modes[m.route.mode]) < 0) {
					element.href = window.location.pathname + modes[m.route.mode] + element.pathname
				}
				if (!isInitialized) {
					element.removeEventListener("click", routeUnobtrusive)
					element.addEventListener("click", routeUnobtrusive)
				}
			}
			else if (typeof arguments[0] == "string") {
				currentRoute = arguments[0]
				var querystring = typeof arguments[1] == "object" ? buildQueryString(arguments[1]) : null
				if (querystring) currentRoute += (currentRoute.indexOf("?") === -1 ? "?" : "&") + querystring
	
				var shouldReplaceHistoryEntry = (arguments.length == 3 ? arguments[2] : arguments[1]) === true
	
				if (window.history.pushState) {
					computePostRedrawHook = function() {
						window.history[shouldReplaceHistoryEntry ? "replaceState" : "pushState"](null, window.document.title, modes[m.route.mode] + currentRoute)
						setScroll()
					}
					redirect(modes[m.route.mode] + currentRoute)
				}
				else window.location[m.route.mode] = currentRoute
			}
		}
		m.route.param = function(key) {return routeParams[key]}
		m.route.mode = "search"
		function normalizeRoute(route) {return route.slice(modes[m.route.mode].length)}
		function routeByValue(root, router, path) {
			routeParams = {}
	
			var queryStart = path.indexOf("?")
			if (queryStart !== -1) {
				routeParams = parseQueryString(path.substr(queryStart + 1, path.length))
				path = path.substr(0, queryStart)
			}
	
			for (var route in router) {
				if (route == path) {
					m.module(root, router[route])
					return true
				}
	
				var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
	
				if (matcher.test(path)) {
					path.replace(matcher, function() {
						var keys = route.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) routeParams[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						m.module(root, router[route])
					})
					return true
				}
			}
		}
		function routeUnobtrusive(e) {
			e = e || event
			if (e.ctrlKey || e.metaKey || e.which == 2) return
			e.preventDefault()
			m.route(e.currentTarget[m.route.mode].slice(modes[m.route.mode].length))
		}
		function setScroll() {
			if (m.route.mode != "hash" && window.location.hash) window.location.hash = window.location.hash
			else window.scrollTo(0, 0)
		}
		function buildQueryString(object, prefix) {
			var str = []
			for(var prop in object) {
				var key = prefix ? prefix + "[" + prop + "]" : prop, value = object[prop]
				str.push(typeof value == "object" ? buildQueryString(value, key) : encodeURIComponent(key) + "=" + encodeURIComponent(value))
			}
			return str.join("&")
		}
		function parseQueryString(str) {
			var pairs = str.split("&"), params = {}
			for (var i = 0; i < pairs.length; i++) {
				var pair = pairs[i].split("=")
				params[decodeSpace(pair[0])] = pair[1] ? decodeSpace(pair[1]) : (pair.length === 1 ? true : "")
			}
			return params
		}
		function decodeSpace(string) {
			return decodeURIComponent(string.replace(/\+/g, " "))
		}
		function reset(root) {
			var cacheKey = getCellCacheKey(root)
			clear(root.childNodes, cellCache[cacheKey])
			cellCache[cacheKey] = undefined
		}
	
		function newPromisedProp(prop, promise) {
			prop.then = function () {
				var newProp = m.prop()
				return newPromisedProp(newProp,
					promise.then.apply(promise, arguments).then(newProp))
			}
			prop.promise = prop
			prop.resolve = function (val) {
				prop(val)
				promise = promise.resolve.apply(promise, arguments)
				return prop
			}
			prop.reject = function () {
				promise = promise.reject.apply(promise, arguments)
				return prop
			}
	
			return prop
		}
		m.deferred = function () {
			return newPromisedProp(m.prop(), new Deferred())
		}
		// Promiz.mithril.js | Zolmeister | MIT
		function Deferred(fn, er) {
			// states
			// 0: pending
			// 1: resolving
			// 2: rejecting
			// 3: resolved
			// 4: rejected
			var self = this,
				state = 0,
				val = 0,
				next = [];
	
			self['promise'] = self
	
			self['resolve'] = function (v) {
				if (!state) {
					val = v
					state = 1
	
					fire()
				}
				return this
			}
	
			self['reject'] = function (v) {
				if (!state) {
					val = v
					state = 2
	
					fire()
				}
				return this
			}
	
			self['then'] = function (fn, er) {
				var d = new Deferred(fn, er)
				if (state == 3) {
					d.resolve(val)
				}
				else if (state == 4) {
					d.reject(val)
				}
				else {
					next.push(d)
				}
				return d
			}
	
			var finish = function (type) {
				state = type || 4
				next.map(function (p) {
					state == 3 && p.resolve(val) || p.reject(val)
				})
			}
	
			// ref : reference to 'then' function
			// cb, ec, cn : successCallback, failureCallback, notThennableCallback
			function thennable (ref, cb, ec, cn) {
				if ((typeof val == 'object' || typeof val == 'function') && typeof ref == 'function') {
					try {
	
						// cnt protects against abuse calls from spec checker
						var cnt = 0
						ref.call(val, function (v) {
							if (cnt++) return
							val = v
							cb()
						}, function (v) {
							if (cnt++) return
							val = v
							ec()
						})
					} catch (e) {
						val = e
						ec()
					}
				} else {
					cn()
				}
			};
	
			function fire() {
	
				// check if it's a thenable
				var ref;
				try {
					ref = val && val.then
				} catch (e) {
					val = e
					state = 2
					return fire()
				}
				thennable(ref, function () {
					state = 1
					fire()
				}, function () {
					state = 2
					fire()
				}, function () {
					try {
						if (state == 1 && typeof fn == 'function') {
							val = fn(val)
						}
	
						else if (state == 2 && typeof er == 'function') {
							val = er(val)
							state = 1
						}
					} catch (e) {
						val = e
						return finish()
					}
	
					if (val == self) {
						val = TypeError()
						finish()
					} else thennable(ref, function () {
							finish(3)
						}, finish, function () {
							finish(state == 1 && 3)
						})
	
				})
			}
		}
	
		m.sync = function(args) {
			var method = "resolve"
			function synchronizer(pos, resolved) {
				return function(value) {
					results[pos] = value
					if (!resolved) method = "reject"
					if (--outstanding == 0) {
						deferred.promise(results)
						deferred[method](results)
					}
					return value
				}
			}
	
			var deferred = m.deferred()
			var outstanding = args.length
			var results = new Array(outstanding)
			if (args.length > 0) {
				for (var i = 0; i < args.length; i++) {
					args[i].then(synchronizer(i, true), synchronizer(i, false))
				}
			}
			else deferred.resolve()
	
			return deferred.promise
		}
		function identity(value) {return value}
	
		function serializeArray(array, prefix){
			var idx, out = [];
			for(idx in array){
				var formatted = (prefix ? prefix : "") + "[]";
				if(prefix && typeof array[idx] === "object")
					formatted = formatted.replace(/\[\]$/i, "[" + idx + "]");
				if(typeof array[idx] === "object" && JSON.stringify(array[idx]) === "{}"){
					continue;
				}
				if(array[idx] instanceof Array)
					out.push(serializeArray(array[idx], formatted));
				else if(typeof array[idx] === "object")
					out.push(serializeObject(array[idx], formatted));
				else
					out.push(encodeURIComponent(formatted) + "=" + encodeURIComponent(array[idx]));
			}
			return out.join("&");
		}
	
		function serializeObject(obj, prefix) {
			var key, out = [];
			for(key in obj){
				var formatted = prefix ? prefix + "[" + key + "]" : key;
				if(obj[key] instanceof Array){
					if(obj[key].length < 1)
						continue;
					out.push(serializeArray(obj[key], formatted));
				}else if(typeof obj[key] === "object"){
					if(JSON.stringify(obj[key]) === "{}")
						continue;
					out.push(serializeObject(obj[key], formatted));
				}else{
					out.push(encodeURIComponent(formatted) + "=" + encodeURIComponent(obj[key]));
				}
			};
			return out.join("&");
		}
	
		function ajax(options) {
			if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
				var callbackKey = "mithril_callback_" + new Date().getTime() + "_" + (Math.round(Math.random() * 1e16)).toString(36);
				var script = window.document.createElement("script");
	
				window[callbackKey] = function(resp){
					delete window[callbackKey];
					window.document.body.removeChild(script);
					options.onload({ type: "load", target: {
						responseText: resp
					} });
				};
	
				script.onerror = function(e){
					delete window[callbackKey];
					window.document.body.removeChild(script);
	
					options.onerror({ type: "error", target: {
						status: 500,
						responseText: JSON.stringify({ error: "Error making jsonp request" })
					} });
	
					e.preventDefault();
					e.stopPropagation();
				};
	
				script.onload = function(e){
					e.preventDefault();
					e.stopPropagation();
				};
	
	
				script.src = options.url
					+ (options.url.indexOf("?") > 0 ? "&" : "?")
					+ (options.callbackKey ? options.callbackKey : "callback")
					+ "=" + callbackKey
					+ "&" + serializeObject(options.data || {});
				window.document.body.appendChild(script);
			}else{
				var xhr = new window.XMLHttpRequest
				xhr.open(options.method, options.url, true, options.user, options.password)
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status >= 200 && xhr.status < 300) options.onload({type: "load", target: xhr})
						else options.onerror({type: "error", target: xhr})
					}
				}
				if (options.serialize == JSON.stringify && options.method != "GET") {
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				}
				if (typeof options.config == "function") {
					var maybeXhr = options.config(xhr, options)
					if (maybeXhr != null) xhr = maybeXhr
				}
	
				xhr.send(options.method == "GET" ? "" : options.data)
				return xhr
			}
		}
		function bindData(xhrOptions, data, serialize) {
			if (data && Object.keys(data).length > 0) {
				if (xhrOptions.method == "GET") {
					xhrOptions.url = xhrOptions.url + (xhrOptions.url.indexOf("?") < 0 ? "?" : "&") + buildQueryString(data)
				}
				else xhrOptions.data = serialize(data)
			}
			return xhrOptions
		}
		function parameterizeUrl(url, data) {
			var tokens = url.match(/:[a-z]\w+/gi)
			if (tokens && data) {
				for (var i = 0; i < tokens.length; i++) {
					var key = tokens[i].slice(1)
					url = url.replace(tokens[i], data[key])
					delete data[key]
				}
			}
			return url
		}
	
		m.request = function(xhrOptions) {
			try {
				if (xhrOptions.background !== true) m.startComputation()
				var deferred = m.deferred()
				var serialize = xhrOptions.serialize = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === "jsonp"
					? identity : xhrOptions.serialize || JSON.stringify
				var deserialize = xhrOptions.deserialize = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === "jsonp"
					? identity : xhrOptions.deserialize || JSON.parse
				var extract = xhrOptions.extract || function(xhr) {
					return xhr.responseText.length === 0 && deserialize === JSON.parse ? null : xhr.responseText
				}
				xhrOptions.url = parameterizeUrl(xhrOptions.url, xhrOptions.data)
				xhrOptions = bindData(xhrOptions, xhrOptions.data, serialize)
				xhrOptions.onload = xhrOptions.onerror = function(e) {
					try {
						e = e || event
						var unwrap = (e.type == "load" ? xhrOptions.unwrapSuccess : xhrOptions.unwrapError) || identity
						var response = unwrap(deserialize(extract(e.target, xhrOptions)))
						if (e.type == "load") {
							if (type.call(response) == "[object Array]" && xhrOptions.type) {
								for (var i = 0; i < response.length; i++) response[i] = new xhrOptions.type(response[i])
							}
							else if (xhrOptions.type) response = new xhrOptions.type(response)
						}
						deferred[e.type == "load" ? "resolve" : "reject"](response)
					}
					catch (e) {
						deferred.reject(e)
					}
					if (xhrOptions.background !== true) m.endComputation()
				}
				ajax(xhrOptions)
			} catch (e) {
				deferred.reject(e)
			}
			return deferred.promise
		}
	
		//testing API
		m.deps = function(mock) {return window = mock}
		//for internal testing only, do not use `m.deps.factory`
		m.deps.factory = app
	
		return m
	}(typeof window != "undefined" ? window : {})
	
	if (typeof module != "undefined" && module !== null) module.exports = m
	if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return m}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	
	;;;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)(module)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var refs = 0;
	var dispose;
	exports.use = exports.ref = function() {
		if(!(refs++)) {
			var content = __webpack_require__(21)
			if(typeof content === 'string') content = [[module.id, content, '']];
			dispose = __webpack_require__(28)(content);
		}
		return exports
	};
	exports.unuse = exports.unref = function() {
		if(!(--refs)) {
			dispose();
			dispose = null;
		}
	};
	if(false) {
		refs = module.hot.data && module.hot.data.refs || 0;
		if(refs) {
			refs--;
			exports.ref();
		}
		module.hot.accept();
		module.hot.dispose(function(data) {
			data.refs = refs;
			if(dispose) {
				dispose();
			}
		});
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, "/* icon font */\n@font-face {\n  font-family: 'icons';\n  src: url(\"//cdn.wtf/d/icon_font/font/icons.eot?16920335\");\n  src: url(\"//cdn.wtf/d/icon_font/font/icons.eot?16920335#iefix\") format('embedded-opentype'), url(\"//cdn.wtf/d/icon_font/font/icons.woff?16920335\") format('woff'), url(\"//cdn.wtf/d/icon_font/font/icons.ttf?16920335\") format('truetype'), url(\"//cdn.wtf/d/icon_font/font/icons.svg?16920335#stars\") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.icon:before {\n  font-family: \"icons\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  text-align: center;\n/* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  font-size: 100%;\n}\n.icon-star:before {\n  content: '\\e800';\n}\n/* '' */\n.icon-star-half-fill:before {\n  content: '\\e801';\n}\n/* '' */\n.icon-share:before {\n  content: '\\e802';\n}\n/* '' */\n.icon-market:before {\n  content: '\\e803';\n}\n/* '' */\n.icon-back-arrow:before {\n  content: '\\e804';\n}\n/* '' */\n.icon-close:before {\n  content: '\\e805';\n}\n/* '' */\n.icon-chevron-left:before {\n  content: '\\e806';\n}\n/* '' */\n.icon-chevron-right:before {\n  content: '\\e807';\n}\n/* '' */\n.icon-check:before {\n  content: '\\e808';\n}\n/* '' */\n.icon-help:before {\n  content: '\\e809';\n}\n/* '' */\n.icon-refresh:before {\n  content: '\\e80a';\n}\n/* '' */\n.icon-ticket:before {\n  content: '\\e80b';\n}\n/* '' */\n.icon-challenge:before {\n  content: '\\e80c';\n}\n/* '' */\n.icon-achievement:before {\n  content: '\\e80d';\n}\n/* '' */\n.icon-badge:before {\n  content: '\\e80e';\n}\n/* '' */\n.icon-crown:before {\n  content: '\\e80f';\n}\n/* '' */\n.icon-dice:before {\n  content: '\\e810';\n}\n/* '' */\n.icon-chat:before {\n  content: '\\e811';\n}\n/* '' */\n.icon-controller:before {\n  content: '\\e812';\n}\n/* '' */\n.icon-smartphone:before {\n  content: '\\e813';\n}\n/* '' */\n.icon-save:before {\n  content: '\\e814';\n}\n/* '' */\n.icon-delete:before {\n  content: '\\e815';\n}\n/* '' */\n.icon-edit:before {\n  content: '\\e816';\n}\n/* '' */\n.icon-cloud:before {\n  content: '\\e817';\n}\n/* '' */\n.icon-cloud-upload:before {\n  content: '\\e818';\n}\n/* '' */\n.icon-zipped:before {\n  content: '\\e819';\n}\n/* '' */\n.icon-package:before {\n  content: '\\e81a';\n}\n/* '' */\n.icon-mail:before {\n  content: '\\e81b';\n}\n/* '' */\n.icon-folder:before {\n  content: '\\e81c';\n}\n/* '' */\n.icon-notification:before {\n  content: '\\e81d';\n}\n/* '' */\n.icon-search:before {\n  content: '\\e81e';\n}\n/* '' */\n.icon-settings:before {\n  content: '\\e81f';\n}\n/* '' */\n.icon-logout:before {\n  content: '\\e820';\n}\n/* '' */\n.icon-locked:before {\n  content: '\\e821';\n}\n/* '' */\n.icon-home:before {\n  content: '\\e822';\n}\n/* '' */\n.icon-globe:before {\n  content: '\\e823';\n}\n/* '' */\n.icon-time:before {\n  content: '\\e824';\n}\n/* '' */\n.icon-link:before {\n  content: '\\e825';\n}\n/* '' */\n.icon-heart:before {\n  content: '\\e826';\n}\n/* '' */\n.icon-chart:before {\n  content: '\\e827';\n}\n/* '' */\n.icon-credit-card:before {\n  content: '\\e828';\n}\n/* '' */\n.icon-male:before {\n  content: '\\e829';\n}\n/* '' */\n.icon-female:before {\n  content: '\\e82a';\n}\n/* '' */\n.icon-help-alt:before {\n  content: '\\e82b';\n}\n/* '' */\n.icon-menu:before {\n  content: '\\e82c';\n}\n/* '' */\n.icon-arrow-down:before {\n  content: '\\e82d';\n}\n/* '' */\n.icon-arrow-up:before {\n  content: '\\e82e';\n}\n/* '' */\n.icon-group:before {\n  content: '\\e82f';\n}\n/* '' */\n.icon-calendar:before {\n  content: '\\e830';\n}\n/* '' */\n.icon-star.is-filled,\n.icon-star-half-fill.is-filled {\n  color: $orange;\n}\n.icon-star.is-empty,\n.icon-star-half-fill.is-empty {\n  color: $grayLight;\n}\n.icon-star-half-fill {\n  position: relative;\n}\n.icon-star-half-fill:before {\n  position: relative;\n  z-index: 1;\n}\n.icon-star-half-fill .icon-star:before {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  bottom: 0;\n}\n.icon {\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n", ""]);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var Promise = __webpack_require__(29)();
	module.exports = Promise;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var refs = 0;
	var dispose;
	exports.use = exports.ref = function() {
		if(!(refs++)) {
			var content = __webpack_require__(24)
			if(typeof content === 'string') content = [[module.id, content, '']];
			dispose = __webpack_require__(28)(content);
		}
		return exports
	};
	exports.unuse = exports.unref = function() {
		if(!(--refs)) {
			dispose();
			dispose = null;
		}
	};
	if(false) {
		refs = module.hot.data && module.hot.data.refs || 0;
		if(refs) {
			refs--;
			exports.ref();
		}
		module.hot.accept();
		module.hot.dispose(function(data) {
			data.refs = refs;
			if(dispose) {
				dispose();
			}
		});
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, ".c-banner-ad-top {\n  width: 320px;\n  height: 50px;\n  position: fixed;\n  top: 0;\n  margin-left: -160px;\n  left: 50%;\n  z-index: 1000;\n}\n.c-banner-ad-bottom {\n  width: 320px;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n  margin-left: -160px;\n  left: 50%;\n  z-index: 1000;\n}\n", ""]);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {module.exports = {
	  API_URL: process.env.API_URL || 'https://clay.io/api/m/v1'
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var refs = 0;
	var dispose;
	exports.use = exports.ref = function() {
		if(!(refs++)) {
			var content = __webpack_require__(27)
			if(typeof content === 'string') content = [[module.id, content, '']];
			dispose = __webpack_require__(28)(content);
		}
		return exports
	};
	exports.unuse = exports.unref = function() {
		if(!(--refs)) {
			dispose();
			dispose = null;
		}
	};
	if(false) {
		refs = module.hot.data && module.hot.data.refs || 0;
		if(refs) {
			refs--;
			exports.ref();
		}
		module.hot.accept();
		module.hot.dispose(function(data) {
			data.refs = refs;
			if(dispose) {
				dispose();
			}
		});
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	exports.push([module.id, ".c-page-ad-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.9);\n  z-index: 2000;\n}\n.c-page-ad-close {\n  color: #fff;\n  font-size: 3.4rem;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  text-shadow: 0px 1px 5px rgba(0,0,0,0.75);\n  z-index: 2;\n}\n.c-page-ad-full-portrait {\n  width: 320px;\n  height: 480px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -160px;\n  margin-top: -240px;\n  z-index: 1;\n}\n.c-page-ad-full-landscape {\n  width: 480px;\n  height: 320px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -240px;\n  margin-top: -160px;\n  z-index: 1;\n}\n", ""]);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:stylesheet/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var old;
	if (typeof Promise !== "undefined") old = Promise;
	function noConflict(bluebird) {
	    try { if (Promise === bluebird) Promise = old; }
	    catch (e) {}
	    return bluebird;
	}
	module.exports = function() {
	var util = __webpack_require__(33);
	var async = __webpack_require__(34);
	var errors = __webpack_require__(35);
	
	var INTERNAL = function(){};
	var APPLY = {};
	var NEXT_FILTER = {e: null};
	
	var cast = __webpack_require__(36)(Promise, INTERNAL);
	var PromiseArray = __webpack_require__(37)(Promise, INTERNAL, cast);
	var CapturedTrace = __webpack_require__(38)();
	var CatchFilter = __webpack_require__(39)(NEXT_FILTER);
	var PromiseResolver = __webpack_require__(40);
	
	var isArray = util.isArray;
	
	var errorObj = util.errorObj;
	var tryCatch1 = util.tryCatch1;
	var tryCatch2 = util.tryCatch2;
	var tryCatchApply = util.tryCatchApply;
	var RangeError = errors.RangeError;
	var TypeError = errors.TypeError;
	var CancellationError = errors.CancellationError;
	var TimeoutError = errors.TimeoutError;
	var OperationalError = errors.OperationalError;
	var originatesFromRejection = errors.originatesFromRejection;
	var markAsOriginatingFromRejection = errors.markAsOriginatingFromRejection;
	var canAttach = errors.canAttach;
	var thrower = util.thrower;
	var apiRejection = __webpack_require__(41)(Promise);
	
	
	var makeSelfResolutionError = function Promise$_makeSelfResolutionError() {
	    return new TypeError("circular promise resolution chain");
	};
	
	function Promise(resolver) {
	    if (typeof resolver !== "function") {
	        throw new TypeError("the promise constructor requires a resolver function");
	    }
	    if (this.constructor !== Promise) {
	        throw new TypeError("the promise constructor cannot be invoked directly");
	    }
	    this._bitField = 0;
	    this._fulfillmentHandler0 = void 0;
	    this._rejectionHandler0 = void 0;
	    this._promise0 = void 0;
	    this._receiver0 = void 0;
	    this._settledValue = void 0;
	    this._boundTo = void 0;
	    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
	}
	
	function returnFirstElement(elements) {
	    return elements[0];
	}
	
	Promise.prototype.bind = function Promise$bind(thisArg) {
	    var maybePromise = cast(thisArg, void 0);
	    var ret = new Promise(INTERNAL);
	    if (maybePromise instanceof Promise) {
	        var binder = maybePromise.then(function(thisArg) {
	            ret._setBoundTo(thisArg);
	        });
	        var p = Promise.all([this, binder]).then(returnFirstElement);
	        ret._follow(p);
	    } else {
	        ret._follow(this);
	        ret._setBoundTo(thisArg);
	    }
	    ret._propagateFrom(this, 2 | 1);
	    return ret;
	};
	
	Promise.prototype.toString = function Promise$toString() {
	    return "[object Promise]";
	};
	
	Promise.prototype.caught = Promise.prototype["catch"] =
	function Promise$catch(fn) {
	    var len = arguments.length;
	    if (len > 1) {
	        var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (typeof item === "function") {
	                catchInstances[j++] = item;
	            } else {
	                var catchFilterTypeError =
	                    new TypeError(
	                        "A catch filter must be an error constructor "
	                        + "or a filter function");
	
	                this._attachExtraTrace(catchFilterTypeError);
	                return Promise.reject(catchFilterTypeError);
	            }
	        }
	        catchInstances.length = j;
	        fn = arguments[i];
	
	        this._resetTrace();
	        var catchFilter = new CatchFilter(catchInstances, fn, this);
	        return this._then(void 0, catchFilter.doFilter, void 0,
	            catchFilter, void 0);
	    }
	    return this._then(void 0, fn, void 0, void 0, void 0);
	};
	
	function reflect() {
	    return new Promise.PromiseInspection(this);
	}
	
	Promise.prototype.reflect = function Promise$reflect() {
	    return this._then(reflect, reflect, void 0, this, void 0);
	};
	
	Promise.prototype.then =
	function Promise$then(didFulfill, didReject, didProgress) {
	    return this._then(didFulfill, didReject, didProgress,
	        void 0, void 0);
	};
	
	
	Promise.prototype.done =
	function Promise$done(didFulfill, didReject, didProgress) {
	    var promise = this._then(didFulfill, didReject, didProgress,
	        void 0, void 0);
	    promise._setIsFinal();
	};
	
	Promise.prototype.spread = function Promise$spread(didFulfill, didReject) {
	    return this._then(didFulfill, didReject, void 0,
	        APPLY, void 0);
	};
	
	Promise.prototype.isCancellable = function Promise$isCancellable() {
	    return !this.isResolved() &&
	        this._cancellable();
	};
	
	Promise.prototype.toJSON = function Promise$toJSON() {
	    var ret = {
	        isFulfilled: false,
	        isRejected: false,
	        fulfillmentValue: void 0,
	        rejectionReason: void 0
	    };
	    if (this.isFulfilled()) {
	        ret.fulfillmentValue = this._settledValue;
	        ret.isFulfilled = true;
	    } else if (this.isRejected()) {
	        ret.rejectionReason = this._settledValue;
	        ret.isRejected = true;
	    }
	    return ret;
	};
	
	Promise.prototype.all = function Promise$all() {
	    return new PromiseArray(this).promise();
	};
	
	
	Promise.is = function Promise$Is(val) {
	    return val instanceof Promise;
	};
	
	Promise.all = function Promise$All(promises) {
	    return new PromiseArray(promises).promise();
	};
	
	Promise.prototype.error = function Promise$_error(fn) {
	    return this.caught(originatesFromRejection, fn);
	};
	
	Promise.prototype._resolveFromSyncValue =
	function Promise$_resolveFromSyncValue(value) {
	    if (value === errorObj) {
	        this._cleanValues();
	        this._setRejected();
	        var reason = value.e;
	        this._settledValue = reason;
	        this._tryAttachExtraTrace(reason);
	        this._ensurePossibleRejectionHandled();
	    } else {
	        var maybePromise = cast(value, void 0);
	        if (maybePromise instanceof Promise) {
	            this._follow(maybePromise);
	        } else {
	            this._cleanValues();
	            this._setFulfilled();
	            this._settledValue = value;
	        }
	    }
	};
	
	Promise.method = function Promise$_Method(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("fn must be a function");
	    }
	    return function Promise$_method() {
	        var value;
	        switch(arguments.length) {
	        case 0: value = tryCatch1(fn, this, void 0); break;
	        case 1: value = tryCatch1(fn, this, arguments[0]); break;
	        case 2: value = tryCatch2(fn, this, arguments[0], arguments[1]); break;
	        default:
	            var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
	            value = tryCatchApply(fn, args, this); break;
	        }
	        var ret = new Promise(INTERNAL);
	        ret._setTrace(void 0);
	        ret._resolveFromSyncValue(value);
	        return ret;
	    };
	};
	
	Promise.attempt = Promise["try"] = function Promise$_Try(fn, args, ctx) {
	    if (typeof fn !== "function") {
	        return apiRejection("fn must be a function");
	    }
	    var value = isArray(args)
	        ? tryCatchApply(fn, args, ctx)
	        : tryCatch1(fn, ctx, args);
	
	    var ret = new Promise(INTERNAL);
	    ret._setTrace(void 0);
	    ret._resolveFromSyncValue(value);
	    return ret;
	};
	
	Promise.defer = Promise.pending = function Promise$Defer() {
	    var promise = new Promise(INTERNAL);
	    promise._setTrace(void 0);
	    return new PromiseResolver(promise);
	};
	
	Promise.bind = function Promise$Bind(thisArg) {
	    var maybePromise = cast(thisArg, void 0);
	    var ret = new Promise(INTERNAL);
	    ret._setTrace(void 0);
	
	    if (maybePromise instanceof Promise) {
	        var p = maybePromise.then(function(thisArg) {
	            ret._setBoundTo(thisArg);
	        });
	        ret._follow(p);
	    } else {
	        ret._setBoundTo(thisArg);
	        ret._setFulfilled();
	    }
	    return ret;
	};
	
	Promise.cast = function Promise$_Cast(obj) {
	    var ret = cast(obj, void 0);
	    if (!(ret instanceof Promise)) {
	        var val = ret;
	        ret = new Promise(INTERNAL);
	        ret._setTrace(void 0);
	        ret._setFulfilled();
	        ret._cleanValues();
	        ret._settledValue = val;
	    }
	    return ret;
	};
	
	Promise.resolve = Promise.fulfilled = Promise.cast;
	
	Promise.reject = Promise.rejected = function Promise$Reject(reason) {
	    var ret = new Promise(INTERNAL);
	    ret._setTrace(void 0);
	    markAsOriginatingFromRejection(reason);
	    ret._cleanValues();
	    ret._setRejected();
	    ret._settledValue = reason;
	    if (!canAttach(reason)) {
	        var trace = new Error(reason + "");
	        ret._setCarriedStackTrace(trace);
	    }
	    ret._ensurePossibleRejectionHandled();
	    return ret;
	};
	
	Promise.onPossiblyUnhandledRejection =
	function Promise$OnPossiblyUnhandledRejection(fn) {
	        CapturedTrace.possiblyUnhandledRejection = typeof fn === "function"
	                                                    ? fn : void 0;
	};
	
	var unhandledRejectionHandled;
	Promise.onUnhandledRejectionHandled =
	function Promise$onUnhandledRejectionHandled(fn) {
	    unhandledRejectionHandled = typeof fn === "function" ? fn : void 0;
	};
	
	var debugging = false || !!(
	    typeof process !== "undefined" &&
	    typeof process.execPath === "string" &&
	    typeof process.env === "object" &&
	    (process.env["BLUEBIRD_DEBUG"] ||
	        process.env["NODE_ENV"] === "development")
	);
	
	
	Promise.longStackTraces = function Promise$LongStackTraces() {
	    if (async.haveItemsQueued() &&
	        debugging === false
	   ) {
	        throw new Error("cannot enable long stack traces after promises have been created");
	    }
	    debugging = CapturedTrace.isSupported();
	};
	
	Promise.hasLongStackTraces = function Promise$HasLongStackTraces() {
	    return debugging && CapturedTrace.isSupported();
	};
	
	Promise.prototype._then =
	function Promise$_then(
	    didFulfill,
	    didReject,
	    didProgress,
	    receiver,
	    internalData
	) {
	    var haveInternalData = internalData !== void 0;
	    var ret = haveInternalData ? internalData : new Promise(INTERNAL);
	
	    if (!haveInternalData) {
	        if (debugging) {
	            var haveSameContext = this._peekContext() === this._traceParent;
	            ret._traceParent = haveSameContext ? this._traceParent : this;
	        }
	        ret._propagateFrom(this, 7);
	    }
	
	    var callbackIndex =
	        this._addCallbacks(didFulfill, didReject, didProgress, ret, receiver);
	
	    if (this.isResolved()) {
	        async.invoke(this._queueSettleAt, this, callbackIndex);
	    }
	
	    return ret;
	};
	
	Promise.prototype._length = function Promise$_length() {
	    return this._bitField & 262143;
	};
	
	Promise.prototype._isFollowingOrFulfilledOrRejected =
	function Promise$_isFollowingOrFulfilledOrRejected() {
	    return (this._bitField & 939524096) > 0;
	};
	
	Promise.prototype._isFollowing = function Promise$_isFollowing() {
	    return (this._bitField & 536870912) === 536870912;
	};
	
	Promise.prototype._setLength = function Promise$_setLength(len) {
	    this._bitField = (this._bitField & -262144) |
	        (len & 262143);
	};
	
	Promise.prototype._setFulfilled = function Promise$_setFulfilled() {
	    this._bitField = this._bitField | 268435456;
	};
	
	Promise.prototype._setRejected = function Promise$_setRejected() {
	    this._bitField = this._bitField | 134217728;
	};
	
	Promise.prototype._setFollowing = function Promise$_setFollowing() {
	    this._bitField = this._bitField | 536870912;
	};
	
	Promise.prototype._setIsFinal = function Promise$_setIsFinal() {
	    this._bitField = this._bitField | 33554432;
	};
	
	Promise.prototype._isFinal = function Promise$_isFinal() {
	    return (this._bitField & 33554432) > 0;
	};
	
	Promise.prototype._cancellable = function Promise$_cancellable() {
	    return (this._bitField & 67108864) > 0;
	};
	
	Promise.prototype._setCancellable = function Promise$_setCancellable() {
	    this._bitField = this._bitField | 67108864;
	};
	
	Promise.prototype._unsetCancellable = function Promise$_unsetCancellable() {
	    this._bitField = this._bitField & (~67108864);
	};
	
	Promise.prototype._setRejectionIsUnhandled =
	function Promise$_setRejectionIsUnhandled() {
	    this._bitField = this._bitField | 2097152;
	};
	
	Promise.prototype._unsetRejectionIsUnhandled =
	function Promise$_unsetRejectionIsUnhandled() {
	    this._bitField = this._bitField & (~2097152);
	    if (this._isUnhandledRejectionNotified()) {
	        this._unsetUnhandledRejectionIsNotified();
	        this._notifyUnhandledRejectionIsHandled();
	    }
	};
	
	Promise.prototype._isRejectionUnhandled =
	function Promise$_isRejectionUnhandled() {
	    return (this._bitField & 2097152) > 0;
	};
	
	Promise.prototype._setUnhandledRejectionIsNotified =
	function Promise$_setUnhandledRejectionIsNotified() {
	    this._bitField = this._bitField | 524288;
	};
	
	Promise.prototype._unsetUnhandledRejectionIsNotified =
	function Promise$_unsetUnhandledRejectionIsNotified() {
	    this._bitField = this._bitField & (~524288);
	};
	
	Promise.prototype._isUnhandledRejectionNotified =
	function Promise$_isUnhandledRejectionNotified() {
	    return (this._bitField & 524288) > 0;
	};
	
	Promise.prototype._setCarriedStackTrace =
	function Promise$_setCarriedStackTrace(capturedTrace) {
	    this._bitField = this._bitField | 1048576;
	    this._fulfillmentHandler0 = capturedTrace;
	};
	
	Promise.prototype._unsetCarriedStackTrace =
	function Promise$_unsetCarriedStackTrace() {
	    this._bitField = this._bitField & (~1048576);
	    this._fulfillmentHandler0 = void 0;
	};
	
	Promise.prototype._isCarryingStackTrace =
	function Promise$_isCarryingStackTrace() {
	    return (this._bitField & 1048576) > 0;
	};
	
	Promise.prototype._getCarriedStackTrace =
	function Promise$_getCarriedStackTrace() {
	    return this._isCarryingStackTrace()
	        ? this._fulfillmentHandler0
	        : void 0;
	};
	
	Promise.prototype._receiverAt = function Promise$_receiverAt(index) {
	    var ret = index === 0
	        ? this._receiver0
	        : this[(index << 2) + index - 5 + 4];
	    if (this._isBound() && ret === void 0) {
	        return this._boundTo;
	    }
	    return ret;
	};
	
	Promise.prototype._promiseAt = function Promise$_promiseAt(index) {
	    return index === 0
	        ? this._promise0
	        : this[(index << 2) + index - 5 + 3];
	};
	
	Promise.prototype._fulfillmentHandlerAt =
	function Promise$_fulfillmentHandlerAt(index) {
	    return index === 0
	        ? this._fulfillmentHandler0
	        : this[(index << 2) + index - 5 + 0];
	};
	
	Promise.prototype._rejectionHandlerAt =
	function Promise$_rejectionHandlerAt(index) {
	    return index === 0
	        ? this._rejectionHandler0
	        : this[(index << 2) + index - 5 + 1];
	};
	
	Promise.prototype._addCallbacks = function Promise$_addCallbacks(
	    fulfill,
	    reject,
	    progress,
	    promise,
	    receiver
	) {
	    var index = this._length();
	
	    if (index >= 262143 - 5) {
	        index = 0;
	        this._setLength(0);
	    }
	
	    if (index === 0) {
	        this._promise0 = promise;
	        if (receiver !== void 0) this._receiver0 = receiver;
	        if (typeof fulfill === "function" && !this._isCarryingStackTrace())
	            this._fulfillmentHandler0 = fulfill;
	        if (typeof reject === "function") this._rejectionHandler0 = reject;
	        if (typeof progress === "function") this._progressHandler0 = progress;
	    } else {
	        var base = (index << 2) + index - 5;
	        this[base + 3] = promise;
	        this[base + 4] = receiver;
	        this[base + 0] = typeof fulfill === "function"
	                                            ? fulfill : void 0;
	        this[base + 1] = typeof reject === "function"
	                                            ? reject : void 0;
	        this[base + 2] = typeof progress === "function"
	                                            ? progress : void 0;
	    }
	    this._setLength(index + 1);
	    return index;
	};
	
	Promise.prototype._setProxyHandlers =
	function Promise$_setProxyHandlers(receiver, promiseSlotValue) {
	    var index = this._length();
	
	    if (index >= 262143 - 5) {
	        index = 0;
	        this._setLength(0);
	    }
	    if (index === 0) {
	        this._promise0 = promiseSlotValue;
	        this._receiver0 = receiver;
	    } else {
	        var base = (index << 2) + index - 5;
	        this[base + 3] = promiseSlotValue;
	        this[base + 4] = receiver;
	        this[base + 0] =
	        this[base + 1] =
	        this[base + 2] = void 0;
	    }
	    this._setLength(index + 1);
	};
	
	Promise.prototype._proxyPromiseArray =
	function Promise$_proxyPromiseArray(promiseArray, index) {
	    this._setProxyHandlers(promiseArray, index);
	};
	
	Promise.prototype._proxyPromise = function Promise$_proxyPromise(promise) {
	    promise._setProxied();
	    this._setProxyHandlers(promise, -15);
	};
	
	Promise.prototype._setBoundTo = function Promise$_setBoundTo(obj) {
	    if (obj !== void 0) {
	        this._bitField = this._bitField | 8388608;
	        this._boundTo = obj;
	    } else {
	        this._bitField = this._bitField & (~8388608);
	    }
	};
	
	Promise.prototype._isBound = function Promise$_isBound() {
	    return (this._bitField & 8388608) === 8388608;
	};
	
	Promise.prototype._resolveFromResolver =
	function Promise$_resolveFromResolver(resolver) {
	    var promise = this;
	    this._setTrace(void 0);
	    this._pushContext();
	
	    function Promise$_resolver(val) {
	        if (promise._tryFollow(val)) {
	            return;
	        }
	        promise._fulfill(val);
	    }
	    function Promise$_rejecter(val) {
	        var trace = canAttach(val) ? val : new Error(val + "");
	        promise._attachExtraTrace(trace);
	        markAsOriginatingFromRejection(val);
	        promise._reject(val, trace === val ? void 0 : trace);
	    }
	    var r = tryCatch2(resolver, void 0, Promise$_resolver, Promise$_rejecter);
	    this._popContext();
	
	    if (r !== void 0 && r === errorObj) {
	        var e = r.e;
	        var trace = canAttach(e) ? e : new Error(e + "");
	        promise._reject(e, trace);
	    }
	};
	
	Promise.prototype._spreadSlowCase =
	function Promise$_spreadSlowCase(targetFn, promise, values, boundTo) {
	    var promiseForAll = new PromiseArray(values).promise();
	    var promise2 = promiseForAll._then(function() {
	        return targetFn.apply(boundTo, arguments);
	    }, void 0, void 0, APPLY, void 0);
	    promise._follow(promise2);
	};
	
	Promise.prototype._callSpread =
	function Promise$_callSpread(handler, promise, value) {
	    var boundTo = this._boundTo;
	    if (isArray(value)) {
	        for (var i = 0, len = value.length; i < len; ++i) {
	            if (cast(value[i], void 0) instanceof Promise) {
	                this._spreadSlowCase(handler, promise, value, boundTo);
	                return;
	            }
	        }
	    }
	    promise._pushContext();
	    return tryCatchApply(handler, value, boundTo);
	};
	
	Promise.prototype._callHandler =
	function Promise$_callHandler(
	    handler, receiver, promise, value) {
	    var x;
	    if (receiver === APPLY && !this.isRejected()) {
	        x = this._callSpread(handler, promise, value);
	    } else {
	        promise._pushContext();
	        x = tryCatch1(handler, receiver, value);
	    }
	    promise._popContext();
	    return x;
	};
	
	Promise.prototype._settlePromiseFromHandler =
	function Promise$_settlePromiseFromHandler(
	    handler, receiver, value, promise
	) {
	    if (!(promise instanceof Promise)) {
	        handler.call(receiver, value, promise);
	        return;
	    }
	    if (promise.isResolved()) return;
	    var x = this._callHandler(handler, receiver, promise, value);
	    if (promise._isFollowing()) return;
	
	    if (x === errorObj || x === promise || x === NEXT_FILTER) {
	        var err = x === promise
	                    ? makeSelfResolutionError()
	                    : x.e;
	        var trace = canAttach(err) ? err : new Error(err + "");
	        if (x !== NEXT_FILTER) promise._attachExtraTrace(trace);
	        promise._rejectUnchecked(err, trace);
	    } else {
	        var castValue = cast(x, promise);
	        if (castValue instanceof Promise) {
	            if (castValue.isRejected() &&
	                !castValue._isCarryingStackTrace() &&
	                !canAttach(castValue._settledValue)) {
	                var trace = new Error(castValue._settledValue + "");
	                promise._attachExtraTrace(trace);
	                castValue._setCarriedStackTrace(trace);
	            }
	            promise._follow(castValue);
	            promise._propagateFrom(castValue, 1);
	        } else {
	            promise._fulfillUnchecked(x);
	        }
	    }
	};
	
	Promise.prototype._follow =
	function Promise$_follow(promise) {
	    this._setFollowing();
	
	    if (promise.isPending()) {
	        this._propagateFrom(promise, 1);
	        promise._proxyPromise(this);
	    } else if (promise.isFulfilled()) {
	        this._fulfillUnchecked(promise._settledValue);
	    } else {
	        this._rejectUnchecked(promise._settledValue,
	            promise._getCarriedStackTrace());
	    }
	
	    if (promise._isRejectionUnhandled()) promise._unsetRejectionIsUnhandled();
	
	    if (debugging &&
	        promise._traceParent == null) {
	        promise._traceParent = this;
	    }
	};
	
	Promise.prototype._tryFollow =
	function Promise$_tryFollow(value) {
	    if (this._isFollowingOrFulfilledOrRejected() ||
	        value === this) {
	        return false;
	    }
	    var maybePromise = cast(value, void 0);
	    if (!(maybePromise instanceof Promise)) {
	        return false;
	    }
	    this._follow(maybePromise);
	    return true;
	};
	
	Promise.prototype._resetTrace = function Promise$_resetTrace() {
	    if (debugging) {
	        this._trace = new CapturedTrace(this._peekContext() === void 0);
	    }
	};
	
	Promise.prototype._setTrace = function Promise$_setTrace(parent) {
	    if (debugging) {
	        var context = this._peekContext();
	        this._traceParent = context;
	        var isTopLevel = context === void 0;
	        if (parent !== void 0 &&
	            parent._traceParent === context) {
	            this._trace = parent._trace;
	        } else {
	            this._trace = new CapturedTrace(isTopLevel);
	        }
	    }
	    return this;
	};
	
	Promise.prototype._tryAttachExtraTrace =
	function Promise$_tryAttachExtraTrace(error) {
	    if (canAttach(error)) {
	        this._attachExtraTrace(error);
	    }
	};
	
	Promise.prototype._attachExtraTrace =
	function Promise$_attachExtraTrace(error) {
	    if (debugging) {
	        var promise = this;
	        var stack = error.stack;
	        stack = typeof stack === "string" ? stack.split("\n") : [];
	        CapturedTrace.protectErrorMessageNewlines(stack);
	        var headerLineCount = 1;
	        var combinedTraces = 1;
	        while(promise != null &&
	            promise._trace != null) {
	            stack = CapturedTrace.combine(
	                stack,
	                promise._trace.stack.split("\n")
	            );
	            promise = promise._traceParent;
	            combinedTraces++;
	        }
	
	        var stackTraceLimit = Error.stackTraceLimit || 10;
	        var max = (stackTraceLimit + headerLineCount) * combinedTraces;
	        var len = stack.length;
	        if (len > max) {
	            stack.length = max;
	        }
	
	        if (len > 0)
	            stack[0] = stack[0].split("\u0002\u0000\u0001").join("\n");
	
	        if (stack.length <= headerLineCount) {
	            error.stack = "(No stack trace)";
	        } else {
	            error.stack = stack.join("\n");
	        }
	    }
	};
	
	Promise.prototype._cleanValues = function Promise$_cleanValues() {
	    if (this._cancellable()) {
	        this._cancellationParent = void 0;
	    }
	};
	
	Promise.prototype._propagateFrom =
	function Promise$_propagateFrom(parent, flags) {
	    if ((flags & 1) > 0 && parent._cancellable()) {
	        this._setCancellable();
	        this._cancellationParent = parent;
	    }
	    if ((flags & 4) > 0) {
	        this._setBoundTo(parent._boundTo);
	    }
	    if ((flags & 2) > 0) {
	        this._setTrace(parent);
	    }
	};
	
	Promise.prototype._fulfill = function Promise$_fulfill(value) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._fulfillUnchecked(value);
	};
	
	Promise.prototype._reject =
	function Promise$_reject(reason, carriedStackTrace) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._rejectUnchecked(reason, carriedStackTrace);
	};
	
	Promise.prototype._settlePromiseAt = function Promise$_settlePromiseAt(index) {
	    var handler = this.isFulfilled()
	        ? this._fulfillmentHandlerAt(index)
	        : this._rejectionHandlerAt(index);
	
	    var value = this._settledValue;
	    var receiver = this._receiverAt(index);
	    var promise = this._promiseAt(index);
	
	    if (typeof handler === "function") {
	        this._settlePromiseFromHandler(handler, receiver, value, promise);
	    } else {
	        var done = false;
	        var isFulfilled = this.isFulfilled();
	        if (receiver !== void 0) {
	            if (receiver instanceof Promise &&
	                receiver._isProxied()) {
	                receiver._unsetProxied();
	
	                if (isFulfilled) receiver._fulfillUnchecked(value);
	                else receiver._rejectUnchecked(value,
	                    this._getCarriedStackTrace());
	                done = true;
	            } else if (receiver instanceof PromiseArray) {
	                if (isFulfilled) receiver._promiseFulfilled(value, promise);
	                else receiver._promiseRejected(value, promise);
	                done = true;
	            }
	        }
	
	        if (!done) {
	            if (isFulfilled) promise._fulfill(value);
	            else promise._reject(value, this._getCarriedStackTrace());
	        }
	    }
	
	    if (index >= 4) {
	        this._queueGC();
	    }
	};
	
	Promise.prototype._isProxied = function Promise$_isProxied() {
	    return (this._bitField & 4194304) === 4194304;
	};
	
	Promise.prototype._setProxied = function Promise$_setProxied() {
	    this._bitField = this._bitField | 4194304;
	};
	
	Promise.prototype._unsetProxied = function Promise$_unsetProxied() {
	    this._bitField = this._bitField & (~4194304);
	};
	
	Promise.prototype._isGcQueued = function Promise$_isGcQueued() {
	    return (this._bitField & -1073741824) === -1073741824;
	};
	
	Promise.prototype._setGcQueued = function Promise$_setGcQueued() {
	    this._bitField = this._bitField | -1073741824;
	};
	
	Promise.prototype._unsetGcQueued = function Promise$_unsetGcQueued() {
	    this._bitField = this._bitField & (~-1073741824);
	};
	
	Promise.prototype._queueGC = function Promise$_queueGC() {
	    if (this._isGcQueued()) return;
	    this._setGcQueued();
	    async.invokeLater(this._gc, this, void 0);
	};
	
	Promise.prototype._gc = function Promise$gc() {
	    var len = this._length() * 5 - 5;
	    for (var i = 0; i < len; i++) {
	        delete this[i];
	    }
	    this._clearFirstHandlerData();
	    this._setLength(0);
	    this._unsetGcQueued();
	};
	
	Promise.prototype._clearFirstHandlerData =
	function Promise$_clearFirstHandlerData() {
	    this._fulfillmentHandler0 = void 0;
	    this._rejectionHandler0 = void 0;
	    this._promise0 = void 0;
	    this._receiver0 = void 0;
	};
	
	Promise.prototype._queueSettleAt = function Promise$_queueSettleAt(index) {
	    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
	    async.invoke(this._settlePromiseAt, this, index);
	};
	
	Promise.prototype._fulfillUnchecked =
	function Promise$_fulfillUnchecked(value) {
	    if (!this.isPending()) return;
	    if (value === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._rejectUnchecked(err, void 0);
	    }
	    this._cleanValues();
	    this._setFulfilled();
	    this._settledValue = value;
	    var len = this._length();
	
	    if (len > 0) {
	        async.invoke(this._settlePromises, this, len);
	    }
	};
	
	Promise.prototype._rejectUncheckedCheckError =
	function Promise$_rejectUncheckedCheckError(reason) {
	    var trace = canAttach(reason) ? reason : new Error(reason + "");
	    this._rejectUnchecked(reason, trace === reason ? void 0 : trace);
	};
	
	Promise.prototype._rejectUnchecked =
	function Promise$_rejectUnchecked(reason, trace) {
	    if (!this.isPending()) return;
	    if (reason === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._rejectUnchecked(err);
	    }
	    this._cleanValues();
	    this._setRejected();
	    this._settledValue = reason;
	
	    if (this._isFinal()) {
	        async.invokeLater(thrower, void 0, trace === void 0 ? reason : trace);
	        return;
	    }
	    var len = this._length();
	
	    if (trace !== void 0) this._setCarriedStackTrace(trace);
	
	    if (len > 0) {
	        async.invoke(this._rejectPromises, this, null);
	    } else {
	        this._ensurePossibleRejectionHandled();
	    }
	};
	
	Promise.prototype._rejectPromises = function Promise$_rejectPromises() {
	    this._settlePromises();
	    this._unsetCarriedStackTrace();
	};
	
	Promise.prototype._settlePromises = function Promise$_settlePromises() {
	    var len = this._length();
	    for (var i = 0; i < len; i++) {
	        this._settlePromiseAt(i);
	    }
	};
	
	Promise.prototype._ensurePossibleRejectionHandled =
	function Promise$_ensurePossibleRejectionHandled() {
	    this._setRejectionIsUnhandled();
	    if (CapturedTrace.possiblyUnhandledRejection !== void 0) {
	        async.invokeLater(this._notifyUnhandledRejection, this, void 0);
	    }
	};
	
	Promise.prototype._notifyUnhandledRejectionIsHandled =
	function Promise$_notifyUnhandledRejectionIsHandled() {
	    if (typeof unhandledRejectionHandled === "function") {
	        async.invokeLater(unhandledRejectionHandled, void 0, this);
	    }
	};
	
	Promise.prototype._notifyUnhandledRejection =
	function Promise$_notifyUnhandledRejection() {
	    if (this._isRejectionUnhandled()) {
	        var reason = this._settledValue;
	        var trace = this._getCarriedStackTrace();
	
	        this._setUnhandledRejectionIsNotified();
	
	        if (trace !== void 0) {
	            this._unsetCarriedStackTrace();
	            reason = trace;
	        }
	        if (typeof CapturedTrace.possiblyUnhandledRejection === "function") {
	            CapturedTrace.possiblyUnhandledRejection(reason, this);
	        }
	    }
	};
	
	var contextStack = [];
	Promise.prototype._peekContext = function Promise$_peekContext() {
	    var lastIndex = contextStack.length - 1;
	    if (lastIndex >= 0) {
	        return contextStack[lastIndex];
	    }
	    return void 0;
	
	};
	
	Promise.prototype._pushContext = function Promise$_pushContext() {
	    if (!debugging) return;
	    contextStack.push(this);
	};
	
	Promise.prototype._popContext = function Promise$_popContext() {
	    if (!debugging) return;
	    contextStack.pop();
	};
	
	Promise.noConflict = function Promise$NoConflict() {
	    return noConflict(Promise);
	};
	
	Promise.setScheduler = function(fn) {
	    if (typeof fn !== "function") throw new TypeError("fn must be a function");
	    async._schedule = fn;
	};
	
	if (!CapturedTrace.isSupported()) {
	    Promise.longStackTraces = function(){};
	    debugging = false;
	}
	
	Promise._makeSelfResolutionError = makeSelfResolutionError;
	__webpack_require__(42)(Promise, NEXT_FILTER, cast);
	__webpack_require__(43)(Promise);
	__webpack_require__(44)(Promise);
	__webpack_require__(45)(Promise, PromiseArray, cast, INTERNAL);
	Promise.RangeError = RangeError;
	Promise.CancellationError = CancellationError;
	Promise.TimeoutError = TimeoutError;
	Promise.TypeError = TypeError;
	Promise.OperationalError = OperationalError;
	Promise.RejectionError = OperationalError;
	Promise.AggregateError = errors.AggregateError;
	
	util.toFastProperties(Promise);
	util.toFastProperties(Promise.prototype);
	Promise.Promise = Promise;
	__webpack_require__(46)(Promise,INTERNAL,cast);
	__webpack_require__(47)(Promise,INTERNAL,cast);
	__webpack_require__(48)(Promise);
	__webpack_require__(49)(Promise,apiRejection,INTERNAL,cast);
	__webpack_require__(50)(Promise,PromiseArray,apiRejection,cast,INTERNAL);
	__webpack_require__(51)(Promise);
	__webpack_require__(52)(Promise,INTERNAL);
	__webpack_require__(53)(Promise,PromiseArray,cast);
	__webpack_require__(54)(Promise,PromiseArray,apiRejection,cast,INTERNAL);
	__webpack_require__(55)(Promise,PromiseArray);
	__webpack_require__(56)(Promise,PromiseArray,apiRejection);
	__webpack_require__(57)(Promise,PromiseArray);
	__webpack_require__(58)(Promise,INTERNAL);
	__webpack_require__(59)(Promise,INTERNAL);
	__webpack_require__(60)(Promise,PromiseArray);
	__webpack_require__(61)(Promise,INTERNAL);
	__webpack_require__(62)(Promise,apiRejection,cast);
	
	Promise.prototype = Promise.prototype;
	return Promise;
	
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var es5 = __webpack_require__(65);
	var haveGetters = (function(){
	    try {
	        var o = {};
	        es5.defineProperty(o, "f", {
	            get: function () {
	                return 3;
	            }
	        });
	        return o.f === 3;
	    }
	    catch (e) {
	        return false;
	    }
	
	})();
	var canEvaluate = typeof navigator == "undefined";
	var errorObj = {e: {}};
	function tryCatch1(fn, receiver, arg) {
	    try { return fn.call(receiver, arg); }
	    catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	function tryCatch2(fn, receiver, arg, arg2) {
	    try { return fn.call(receiver, arg, arg2); }
	    catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	function tryCatch3(fn, receiver, arg, arg2, arg3) {
	    try { return fn.call(receiver, arg, arg2, arg3); }
	    catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	function tryCatch4(fn, receiver, arg, arg2, arg3, arg4) {
	    try { return fn.call(receiver, arg, arg2, arg3, arg4); }
	    catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	function tryCatchApply(fn, args, receiver) {
	    try { return fn.apply(receiver, args); }
	    catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	var inherits = function(Child, Parent) {
	    var hasProp = {}.hasOwnProperty;
	
	    function T() {
	        this.constructor = Child;
	        this.constructor$ = Parent;
	        for (var propertyName in Parent.prototype) {
	            if (hasProp.call(Parent.prototype, propertyName) &&
	                propertyName.charAt(propertyName.length-1) !== "$"
	           ) {
	                this[propertyName + "$"] = Parent.prototype[propertyName];
	            }
	        }
	    }
	    T.prototype = Parent.prototype;
	    Child.prototype = new T();
	    return Child.prototype;
	};
	
	function asString(val) {
	    return typeof val === "string" ? val : ("" + val);
	}
	
	function isPrimitive(val) {
	    return val == null || val === true || val === false ||
	        typeof val === "string" || typeof val === "number";
	
	}
	
	function isObject(value) {
	    return !isPrimitive(value);
	}
	
	function maybeWrapAsError(maybeError) {
	    if (!isPrimitive(maybeError)) return maybeError;
	
	    return new Error(asString(maybeError));
	}
	
	function withAppended(target, appendee) {
	    var len = target.length;
	    var ret = new Array(len + 1);
	    var i;
	    for (i = 0; i < len; ++i) {
	        ret[i] = target[i];
	    }
	    ret[i] = appendee;
	    return ret;
	}
	
	function getDataPropertyOrDefault(obj, key, defaultValue) {
	    if (es5.isES5) {
	        var desc = Object.getOwnPropertyDescriptor(obj, key);
	        if (desc != null) {
	            return desc.get == null && desc.set == null
	                    ? desc.value
	                    : defaultValue;
	        }
	    } else {
	        return {}.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
	    }
	}
	
	function notEnumerableProp(obj, name, value) {
	    if (isPrimitive(obj)) return obj;
	    var descriptor = {
	        value: value,
	        configurable: true,
	        enumerable: false,
	        writable: true
	    };
	    es5.defineProperty(obj, name, descriptor);
	    return obj;
	}
	
	
	var wrapsPrimitiveReceiver = (function() {
	    return this !== "string";
	}).call("string");
	
	function thrower(r) {
	    throw r;
	}
	
	var inheritedDataKeys = (function() {
	    if (es5.isES5) {
	        return function(obj, opts) {
	            var ret = [];
	            var visitedKeys = Object.create(null);
	            var getKeys = Object(opts).includeHidden
	                ? Object.getOwnPropertyNames
	                : Object.keys;
	            while (obj != null) {
	                var keys;
	                try {
	                    keys = getKeys(obj);
	                } catch (e) {
	                    return ret;
	                }
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (visitedKeys[key]) continue;
	                    visitedKeys[key] = true;
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	                    if (desc != null && desc.get == null && desc.set == null) {
	                        ret.push(key);
	                    }
	                }
	                obj = es5.getPrototypeOf(obj);
	            }
	            return ret;
	        };
	    } else {
	        return function(obj) {
	            var ret = [];
	            /*jshint forin:false */
	            for (var key in obj) {
	                ret.push(key);
	            }
	            return ret;
	        };
	    }
	
	})();
	
	function isClass(fn) {
	    try {
	        if (typeof fn === "function") {
	            var keys = es5.keys(fn.prototype);
	            return keys.length > 0 &&
	                   !(keys.length === 1 && keys[0] === "constructor");
	        }
	        return false;
	    } catch (e) {
	        return false;
	    }
	}
	
	function toFastProperties(obj) {
	    /*jshint -W027*/
	    function f() {}
	    f.prototype = obj;
	    return f;
	    eval(obj);
	}
	
	var rident = /^[a-z$_][a-z$_0-9]*$/i;
	function isIdentifier(str) {
	    return rident.test(str);
	}
	
	function filledRange(count, prefix, suffix) {
	    var ret = new Array(count);
	    for(var i = 0; i < count; ++i) {
	        ret[i] = prefix + i + suffix;
	    }
	    return ret;
	}
	
	var ret = {
	    isClass: isClass,
	    isIdentifier: isIdentifier,
	    inheritedDataKeys: inheritedDataKeys,
	    getDataPropertyOrDefault: getDataPropertyOrDefault,
	    thrower: thrower,
	    isArray: es5.isArray,
	    haveGetters: haveGetters,
	    notEnumerableProp: notEnumerableProp,
	    isPrimitive: isPrimitive,
	    isObject: isObject,
	    canEvaluate: canEvaluate,
	    errorObj: errorObj,
	    tryCatch1: tryCatch1,
	    tryCatch2: tryCatch2,
	    tryCatch3: tryCatch3,
	    tryCatch4: tryCatch4,
	    tryCatchApply: tryCatchApply,
	    inherits: inherits,
	    withAppended: withAppended,
	    asString: asString,
	    maybeWrapAsError: maybeWrapAsError,
	    wrapsPrimitiveReceiver: wrapsPrimitiveReceiver,
	    toFastProperties: toFastProperties,
	    filledRange: filledRange
	};
	
	module.exports = ret;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var schedule = __webpack_require__(66);
	var Queue = __webpack_require__(67);
	var errorObj = __webpack_require__(33).errorObj;
	var tryCatch1 = __webpack_require__(33).tryCatch1;
	var _process = typeof process !== "undefined" ? process : void 0;
	
	function Async() {
	    this._isTickUsed = false;
	    this._schedule = schedule;
	    this._length = 0;
	    this._lateBuffer = new Queue(16);
	    this._functionBuffer = new Queue(65536);
	    var self = this;
	    this.consumeFunctionBuffer = function Async$consumeFunctionBuffer() {
	        self._consumeFunctionBuffer();
	    };
	}
	
	Async.prototype.haveItemsQueued = function Async$haveItemsQueued() {
	    return this._length > 0;
	};
	
	Async.prototype.invokeLater = function Async$invokeLater(fn, receiver, arg) {
	    if (_process !== void 0 &&
	        _process.domain != null &&
	        !fn.domain) {
	        fn = _process.domain.bind(fn);
	    }
	    this._lateBuffer.push(fn, receiver, arg);
	    this._queueTick();
	};
	
	Async.prototype.invoke = function Async$invoke(fn, receiver, arg) {
	    if (_process !== void 0 &&
	        _process.domain != null &&
	        !fn.domain) {
	        fn = _process.domain.bind(fn);
	    }
	    var functionBuffer = this._functionBuffer;
	    functionBuffer.push(fn, receiver, arg);
	    this._length = functionBuffer.length();
	    this._queueTick();
	};
	
	Async.prototype._consumeFunctionBuffer =
	function Async$_consumeFunctionBuffer() {
	    var functionBuffer = this._functionBuffer;
	    while (functionBuffer.length() > 0) {
	        var fn = functionBuffer.shift();
	        var receiver = functionBuffer.shift();
	        var arg = functionBuffer.shift();
	        fn.call(receiver, arg);
	    }
	    this._reset();
	    this._consumeLateBuffer();
	};
	
	Async.prototype._consumeLateBuffer = function Async$_consumeLateBuffer() {
	    var buffer = this._lateBuffer;
	    while(buffer.length() > 0) {
	        var fn = buffer.shift();
	        var receiver = buffer.shift();
	        var arg = buffer.shift();
	        var res = tryCatch1(fn, receiver, arg);
	        if (res === errorObj) {
	            this._queueTick();
	            if (fn.domain != null) {
	                fn.domain.emit("error", res.e);
	            } else {
	                throw res.e;
	            }
	        }
	    }
	};
	
	Async.prototype._queueTick = function Async$_queue() {
	    if (!this._isTickUsed) {
	        this._schedule(this.consumeFunctionBuffer);
	        this._isTickUsed = true;
	    }
	};
	
	Async.prototype._reset = function Async$_reset() {
	    this._isTickUsed = false;
	    this._length = 0;
	};
	
	module.exports = new Async();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var Objectfreeze = __webpack_require__(65).freeze;
	var util = __webpack_require__(33);
	var inherits = util.inherits;
	var notEnumerableProp = util.notEnumerableProp;
	
	function markAsOriginatingFromRejection(e) {
	    try {
	        notEnumerableProp(e, "isOperational", true);
	    }
	    catch(ignore) {}
	}
	
	function originatesFromRejection(e) {
	    if (e == null) return false;
	    return ((e instanceof OperationalError) ||
	        e["isOperational"] === true);
	}
	
	function isError(obj) {
	    return obj instanceof Error;
	}
	
	function canAttach(obj) {
	    return isError(obj);
	}
	
	function subError(nameProperty, defaultMessage) {
	    function SubError(message) {
	        if (!(this instanceof SubError)) return new SubError(message);
	        this.message = typeof message === "string" ? message : defaultMessage;
	        this.name = nameProperty;
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, this.constructor);
	        }
	    }
	    inherits(SubError, Error);
	    return SubError;
	}
	
	var _TypeError, _RangeError;
	var CancellationError = subError("CancellationError", "cancellation error");
	var TimeoutError = subError("TimeoutError", "timeout error");
	var AggregateError = subError("AggregateError", "aggregate error");
	try {
	    _TypeError = TypeError;
	    _RangeError = RangeError;
	} catch(e) {
	    _TypeError = subError("TypeError", "type error");
	    _RangeError = subError("RangeError", "range error");
	}
	
	var methods = ("join pop push shift unshift slice filter forEach some " +
	    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");
	
	for (var i = 0; i < methods.length; ++i) {
	    if (typeof Array.prototype[methods[i]] === "function") {
	        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	    }
	}
	
	AggregateError.prototype.length = 0;
	AggregateError.prototype["isOperational"] = true;
	var level = 0;
	AggregateError.prototype.toString = function() {
	    var indent = Array(level * 4 + 1).join(" ");
	    var ret = "\n" + indent + "AggregateError of:" + "\n";
	    level++;
	    indent = Array(level * 4 + 1).join(" ");
	    for (var i = 0; i < this.length; ++i) {
	        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	        var lines = str.split("\n");
	        for (var j = 0; j < lines.length; ++j) {
	            lines[j] = indent + lines[j];
	        }
	        str = lines.join("\n");
	        ret += str + "\n";
	    }
	    level--;
	    return ret;
	};
	
	function OperationalError(message) {
	    this.name = "OperationalError";
	    this.message = message;
	    this.cause = message;
	    this["isOperational"] = true;
	
	    if (message instanceof Error) {
	        this.message = message.message;
	        this.stack = message.stack;
	    } else if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, this.constructor);
	    }
	
	}
	inherits(OperationalError, Error);
	
	var key = "__BluebirdErrorTypes__";
	var errorTypes = Error[key];
	if (!errorTypes) {
	    errorTypes = Objectfreeze({
	        CancellationError: CancellationError,
	        TimeoutError: TimeoutError,
	        OperationalError: OperationalError,
	        RejectionError: OperationalError,
	        AggregateError: AggregateError
	    });
	    notEnumerableProp(Error, key, errorTypes);
	}
	
	module.exports = {
	    Error: Error,
	    TypeError: _TypeError,
	    RangeError: _RangeError,
	    CancellationError: errorTypes.CancellationError,
	    OperationalError: errorTypes.OperationalError,
	    TimeoutError: errorTypes.TimeoutError,
	    AggregateError: errorTypes.AggregateError,
	    originatesFromRejection: originatesFromRejection,
	    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	    canAttach: canAttach
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = __webpack_require__(33);
	var canAttach = __webpack_require__(35).canAttach;
	var errorObj = util.errorObj;
	var isObject = util.isObject;
	
	function getThen(obj) {
	    try {
	        return obj.then;
	    }
	    catch(e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	function Promise$_Cast(obj, originalPromise) {
	    if (isObject(obj)) {
	        if (obj instanceof Promise) {
	            return obj;
	        }
	        else if (isAnyBluebirdPromise(obj)) {
	            var ret = new Promise(INTERNAL);
	            ret._setTrace(void 0);
	            obj._then(
	                ret._fulfillUnchecked,
	                ret._rejectUncheckedCheckError,
	                ret._progressUnchecked,
	                ret,
	                null
	            );
	            ret._setFollowing();
	            return ret;
	        }
	        var then = getThen(obj);
	        if (then === errorObj) {
	            if (originalPromise !== void 0 && canAttach(then.e)) {
	                originalPromise._attachExtraTrace(then.e);
	            }
	            return Promise.reject(then.e);
	        } else if (typeof then === "function") {
	            return Promise$_doThenable(obj, then, originalPromise);
	        }
	    }
	    return obj;
	}
	
	var hasProp = {}.hasOwnProperty;
	function isAnyBluebirdPromise(obj) {
	    return hasProp.call(obj, "_promise0");
	}
	
	function Promise$_doThenable(x, then, originalPromise) {
	    var resolver = Promise.defer();
	    var called = false;
	    try {
	        then.call(
	            x,
	            Promise$_resolveFromThenable,
	            Promise$_rejectFromThenable,
	            Promise$_progressFromThenable
	        );
	    } catch(e) {
	        if (!called) {
	            called = true;
	            var trace = canAttach(e) ? e : new Error(e + "");
	            if (originalPromise !== void 0) {
	                originalPromise._attachExtraTrace(trace);
	            }
	            resolver.promise._reject(e, trace);
	        }
	    }
	    return resolver.promise;
	
	    function Promise$_resolveFromThenable(y) {
	        if (called) return;
	        called = true;
	
	        if (x === y) {
	            var e = Promise._makeSelfResolutionError();
	            if (originalPromise !== void 0) {
	                originalPromise._attachExtraTrace(e);
	            }
	            resolver.promise._reject(e, void 0);
	            return;
	        }
	        resolver.resolve(y);
	    }
	
	    function Promise$_rejectFromThenable(r) {
	        if (called) return;
	        called = true;
	        var trace = canAttach(r) ? r : new Error(r + "");
	        if (originalPromise !== void 0) {
	            originalPromise._attachExtraTrace(trace);
	        }
	        resolver.promise._reject(r, trace);
	    }
	
	    function Promise$_progressFromThenable(v) {
	        if (called) return;
	        var promise = resolver.promise;
	        if (typeof promise._progress === "function") {
	            promise._progress(v);
	        }
	    }
	}
	
	return Promise$_Cast;
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, INTERNAL, cast) {
	var canAttach = __webpack_require__(35).canAttach;
	var util = __webpack_require__(33);
	var isArray = util.isArray;
	
	function toResolutionValue(val) {
	    switch(val) {
	    case -1: return void 0;
	    case -2: return [];
	    case -3: return {};
	    }
	}
	
	function PromiseArray(values) {
	    var promise = this._promise = new Promise(INTERNAL);
	    var parent = void 0;
	    if (values instanceof Promise) {
	        parent = values;
	        promise._propagateFrom(parent, 1 | 4);
	    }
	    promise._setTrace(parent);
	    this._values = values;
	    this._length = 0;
	    this._totalResolved = 0;
	    this._init(void 0, -2);
	}
	PromiseArray.prototype.length = function PromiseArray$length() {
	    return this._length;
	};
	
	PromiseArray.prototype.promise = function PromiseArray$promise() {
	    return this._promise;
	};
	
	PromiseArray.prototype._init =
	function PromiseArray$_init(_, resolveValueIfEmpty) {
	    var values = cast(this._values, void 0);
	    if (values instanceof Promise) {
	        this._values = values;
	        values._setBoundTo(this._promise._boundTo);
	        if (values.isFulfilled()) {
	            values = values._settledValue;
	            if (!isArray(values)) {
	                var err = new Promise.TypeError("expecting an array, a promise or a thenable");
	                this.__hardReject__(err);
	                return;
	            }
	        } else if (values.isPending()) {
	            values._then(
	                PromiseArray$_init,
	                this._reject,
	                void 0,
	                this,
	                resolveValueIfEmpty
	           );
	            return;
	        } else {
	            values._unsetRejectionIsUnhandled();
	            this._reject(values._settledValue);
	            return;
	        }
	    } else if (!isArray(values)) {
	        var err = new Promise.TypeError("expecting an array, a promise or a thenable");
	        this.__hardReject__(err);
	        return;
	    }
	
	    if (values.length === 0) {
	        if (resolveValueIfEmpty === -5) {
	            this._resolveEmptyArray();
	        }
	        else {
	            this._resolve(toResolutionValue(resolveValueIfEmpty));
	        }
	        return;
	    }
	    var len = this.getActualLength(values.length);
	    var newLen = len;
	    var newValues = this.shouldCopyValues() ? new Array(len) : this._values;
	    var isDirectScanNeeded = false;
	    for (var i = 0; i < len; ++i) {
	        var maybePromise = cast(values[i], void 0);
	        if (maybePromise instanceof Promise) {
	            if (maybePromise.isPending()) {
	                maybePromise._proxyPromiseArray(this, i);
	            } else {
	                maybePromise._unsetRejectionIsUnhandled();
	                isDirectScanNeeded = true;
	            }
	        } else {
	            isDirectScanNeeded = true;
	        }
	        newValues[i] = maybePromise;
	    }
	    this._values = newValues;
	    this._length = newLen;
	    if (isDirectScanNeeded) {
	        this._scanDirectValues(len);
	    }
	};
	
	PromiseArray.prototype._settlePromiseAt =
	function PromiseArray$_settlePromiseAt(index) {
	    var value = this._values[index];
	    if (!(value instanceof Promise)) {
	        this._promiseFulfilled(value, index);
	    } else if (value.isFulfilled()) {
	        this._promiseFulfilled(value._settledValue, index);
	    } else if (value.isRejected()) {
	        this._promiseRejected(value._settledValue, index);
	    }
	};
	
	PromiseArray.prototype._scanDirectValues =
	function PromiseArray$_scanDirectValues(len) {
	    for (var i = 0; i < len; ++i) {
	        if (this._isResolved()) {
	            break;
	        }
	        this._settlePromiseAt(i);
	    }
	};
	
	PromiseArray.prototype._isResolved = function PromiseArray$_isResolved() {
	    return this._values === null;
	};
	
	PromiseArray.prototype._resolve = function PromiseArray$_resolve(value) {
	    this._values = null;
	    this._promise._fulfill(value);
	};
	
	PromiseArray.prototype.__hardReject__ =
	PromiseArray.prototype._reject = function PromiseArray$_reject(reason) {
	    this._values = null;
	    var trace = canAttach(reason) ? reason : new Error(reason + "");
	    this._promise._attachExtraTrace(trace);
	    this._promise._reject(reason, trace);
	};
	
	PromiseArray.prototype._promiseProgressed =
	function PromiseArray$_promiseProgressed(progressValue, index) {
	    if (this._isResolved()) return;
	    this._promise._progress({
	        index: index,
	        value: progressValue
	    });
	};
	
	
	PromiseArray.prototype._promiseFulfilled =
	function PromiseArray$_promiseFulfilled(value, index) {
	    if (this._isResolved()) return;
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	    }
	};
	
	PromiseArray.prototype._promiseRejected =
	function PromiseArray$_promiseRejected(reason, index) {
	    if (this._isResolved()) return;
	    this._totalResolved++;
	    this._reject(reason);
	};
	
	PromiseArray.prototype.shouldCopyValues =
	function PromiseArray$_shouldCopyValues() {
	    return true;
	};
	
	PromiseArray.prototype.getActualLength =
	function PromiseArray$getActualLength(len) {
	    return len;
	};
	
	return PromiseArray;
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function() {
	var inherits = __webpack_require__(33).inherits;
	var defineProperty = __webpack_require__(65).defineProperty;
	
	var rignore = new RegExp(
	    "\\b(?:[a-zA-Z0-9.]+\\$_\\w+|" +
	    "tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|" +
	    "\\w*PromiseArray\\.\\w*PromiseArray|" +
	    "setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|" +
	    "process._tickCallback|nextTick|Async\\$\\w+)\\b"
	);
	
	var rtraceline = null;
	var formatStack = null;
	
	function formatNonError(obj) {
	    var str;
	    if (typeof obj === "function") {
	        str = "[function " +
	            (obj.name || "anonymous") +
	            "]";
	    } else {
	        str = obj.toString();
	        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	        if (ruselessToString.test(str)) {
	            try {
	                var newStr = JSON.stringify(obj);
	                str = newStr;
	            }
	            catch(e) {
	
	            }
	        }
	        if (str.length === 0) {
	            str = "(empty array)";
	        }
	    }
	    return ("(<" + snip(str) + ">, no stack trace)");
	}
	
	function snip(str) {
	    var maxChars = 41;
	    if (str.length < maxChars) {
	        return str;
	    }
	    return str.substr(0, maxChars - 3) + "...";
	}
	
	function CapturedTrace(ignoreUntil, isTopLevel) {
	    this.captureStackTrace(CapturedTrace, isTopLevel);
	
	}
	inherits(CapturedTrace, Error);
	
	CapturedTrace.prototype.captureStackTrace =
	function CapturedTrace$captureStackTrace(ignoreUntil, isTopLevel) {
	    captureStackTrace(this, ignoreUntil, isTopLevel);
	};
	
	CapturedTrace.possiblyUnhandledRejection =
	function CapturedTrace$PossiblyUnhandledRejection(reason) {
	    if (typeof console === "object") {
	        var message;
	        if (typeof reason === "object" || typeof reason === "function") {
	            var stack = reason.stack;
	            message = "Possibly unhandled " + formatStack(stack, reason);
	        } else {
	            message = "Possibly unhandled " + String(reason);
	        }
	        if (typeof console.error === "function" ||
	            typeof console.error === "object") {
	            console.error(message);
	        } else if (typeof console.log === "function" ||
	            typeof console.log === "object") {
	            console.log(message);
	        }
	    }
	};
	
	CapturedTrace.combine = function CapturedTrace$Combine(current, prev) {
	    var currentLastIndex = current.length - 1;
	    var currentLastLine = current[currentLastIndex];
	    var commonRootMeetPoint = -1;
	    for (var i = prev.length - 1; i >= 0; --i) {
	        if (prev[i] === currentLastLine) {
	            commonRootMeetPoint = i;
	            break;
	        }
	    }
	
	    for (var i = commonRootMeetPoint; i >= 0; --i) {
	        var line = prev[i];
	        if (current[currentLastIndex] === line) {
	            current.pop();
	            currentLastIndex--;
	        } else {
	            break;
	        }
	    }
	
	    current.push("From previous event:");
	    var lines = current.concat(prev);
	
	    var ret = [];
	
	    for (var i = 0, len = lines.length; i < len; ++i) {
	
	        if (((rignore.test(lines[i]) && rtraceline.test(lines[i])) ||
	            (i > 0 && !rtraceline.test(lines[i])) &&
	            lines[i] !== "From previous event:")
	       ) {
	            continue;
	        }
	        ret.push(lines[i]);
	    }
	    return ret;
	};
	
	CapturedTrace.protectErrorMessageNewlines = function(stack) {
	    for (var i = 0; i < stack.length; ++i) {
	        if (rtraceline.test(stack[i])) {
	            break;
	        }
	    }
	
	    if (i <= 1) return;
	
	    var errorMessageLines = [];
	    for (var j = 0; j < i; ++j) {
	        errorMessageLines.push(stack.shift());
	    }
	    stack.unshift(errorMessageLines.join("\u0002\u0000\u0001"));
	};
	
	CapturedTrace.isSupported = function CapturedTrace$IsSupported() {
	    return typeof captureStackTrace === "function";
	};
	
	var captureStackTrace = (function stackDetection() {
	    if (typeof Error.stackTraceLimit === "number" &&
	        typeof Error.captureStackTrace === "function") {
	        rtraceline = /^\s*at\s*/;
	        formatStack = function(stack, error) {
	            if (typeof stack === "string") return stack;
	
	            if (error.name !== void 0 &&
	                error.message !== void 0) {
	                return error.name + ". " + error.message;
	            }
	            return formatNonError(error);
	
	
	        };
	        var captureStackTrace = Error.captureStackTrace;
	        return function CapturedTrace$_captureStackTrace(
	            receiver, ignoreUntil) {
	            captureStackTrace(receiver, ignoreUntil);
	        };
	    }
	    var err = new Error();
	
	    if (typeof err.stack === "string" &&
	        typeof "".startsWith === "function" &&
	        (err.stack.startsWith("stackDetection@")) &&
	        stackDetection.name === "stackDetection") {
	
	        defineProperty(Error, "stackTraceLimit", {
	            writable: true,
	            enumerable: false,
	            configurable: false,
	            value: 25
	        });
	        rtraceline = /@/;
	        var rline = /[@\n]/;
	
	        formatStack = function(stack, error) {
	            if (typeof stack === "string") {
	                return (error.name + ". " + error.message + "\n" + stack);
	            }
	
	            if (error.name !== void 0 &&
	                error.message !== void 0) {
	                return error.name + ". " + error.message;
	            }
	            return formatNonError(error);
	        };
	
	        return function captureStackTrace(o) {
	            var stack = new Error().stack;
	            var split = stack.split(rline);
	            var len = split.length;
	            var ret = "";
	            for (var i = 0; i < len; i += 2) {
	                ret += split[i];
	                ret += "@";
	                ret += split[i + 1];
	                ret += "\n";
	            }
	            o.stack = ret;
	        };
	    } else {
	        formatStack = function(stack, error) {
	            if (typeof stack === "string") return stack;
	
	            if ((typeof error === "object" ||
	                typeof error === "function") &&
	                error.name !== void 0 &&
	                error.message !== void 0) {
	                return error.name + ". " + error.message;
	            }
	            return formatNonError(error);
	        };
	
	        return null;
	    }
	})();
	
	return CapturedTrace;
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(NEXT_FILTER) {
	var util = __webpack_require__(33);
	var errors = __webpack_require__(35);
	var tryCatch1 = util.tryCatch1;
	var errorObj = util.errorObj;
	var keys = __webpack_require__(65).keys;
	var TypeError = errors.TypeError;
	
	function CatchFilter(instances, callback, promise) {
	    this._instances = instances;
	    this._callback = callback;
	    this._promise = promise;
	}
	
	function CatchFilter$_safePredicate(predicate, e) {
	    var safeObject = {};
	    var retfilter = tryCatch1(predicate, safeObject, e);
	
	    if (retfilter === errorObj) return retfilter;
	
	    var safeKeys = keys(safeObject);
	    if (safeKeys.length) {
	        errorObj.e = new TypeError(
	            "Catch filter must inherit from Error "
	          + "or be a simple predicate function");
	        return errorObj;
	    }
	    return retfilter;
	}
	
	CatchFilter.prototype.doFilter = function CatchFilter$_doFilter(e) {
	    var cb = this._callback;
	    var promise = this._promise;
	    var boundTo = promise._boundTo;
	    for (var i = 0, len = this._instances.length; i < len; ++i) {
	        var item = this._instances[i];
	        var itemIsErrorType = item === Error ||
	            (item != null && item.prototype instanceof Error);
	
	        if (itemIsErrorType && e instanceof item) {
	            var ret = tryCatch1(cb, boundTo, e);
	            if (ret === errorObj) {
	                NEXT_FILTER.e = ret.e;
	                return NEXT_FILTER;
	            }
	            return ret;
	        } else if (typeof item === "function" && !itemIsErrorType) {
	            var shouldHandle = CatchFilter$_safePredicate(item, e);
	            if (shouldHandle === errorObj) {
	                var trace = errors.canAttach(errorObj.e)
	                    ? errorObj.e
	                    : new Error(errorObj.e + "");
	                this._promise._attachExtraTrace(trace);
	                e = errorObj.e;
	                break;
	            } else if (shouldHandle) {
	                var ret = tryCatch1(cb, boundTo, e);
	                if (ret === errorObj) {
	                    NEXT_FILTER.e = ret.e;
	                    return NEXT_FILTER;
	                }
	                return ret;
	            }
	        }
	    }
	    NEXT_FILTER.e = e;
	    return NEXT_FILTER;
	};
	
	return CatchFilter;
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var util = __webpack_require__(33);
	var maybeWrapAsError = util.maybeWrapAsError;
	var errors = __webpack_require__(35);
	var TimeoutError = errors.TimeoutError;
	var OperationalError = errors.OperationalError;
	var async = __webpack_require__(34);
	var haveGetters = util.haveGetters;
	var es5 = __webpack_require__(65);
	
	function isUntypedError(obj) {
	    return obj instanceof Error &&
	        es5.getPrototypeOf(obj) === Error.prototype;
	}
	
	function wrapAsOperationalError(obj) {
	    var ret;
	    if (isUntypedError(obj)) {
	        ret = new OperationalError(obj);
	    } else {
	        ret = obj;
	    }
	    errors.markAsOriginatingFromRejection(ret);
	    return ret;
	}
	
	function nodebackForPromise(promise) {
	    function PromiseResolver$_callback(err, value) {
	        if (promise === null) return;
	
	        if (err) {
	            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        } else if (arguments.length > 2) {
	            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
	            promise._fulfill(args);
	        } else {
	            promise._fulfill(value);
	        }
	
	        promise = null;
	    }
	    return PromiseResolver$_callback;
	}
	
	
	var PromiseResolver;
	if (!haveGetters) {
	    PromiseResolver = function PromiseResolver(promise) {
	        this.promise = promise;
	        this.asCallback = nodebackForPromise(promise);
	        this.callback = this.asCallback;
	    };
	}
	else {
	    PromiseResolver = function PromiseResolver(promise) {
	        this.promise = promise;
	    };
	}
	if (haveGetters) {
	    var prop = {
	        get: function() {
	            return nodebackForPromise(this.promise);
	        }
	    };
	    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
	    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
	}
	
	PromiseResolver._nodebackForPromise = nodebackForPromise;
	
	PromiseResolver.prototype.toString = function PromiseResolver$toString() {
	    return "[object PromiseResolver]";
	};
	
	PromiseResolver.prototype.resolve =
	PromiseResolver.prototype.fulfill = function PromiseResolver$resolve(value) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
	    }
	
	    var promise = this.promise;
	    if (promise._tryFollow(value)) {
	        return;
	    }
	    async.invoke(promise._fulfill, promise, value);
	};
	
	PromiseResolver.prototype.reject = function PromiseResolver$reject(reason) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
	    }
	
	    var promise = this.promise;
	    errors.markAsOriginatingFromRejection(reason);
	    var trace = errors.canAttach(reason) ? reason : new Error(reason + "");
	    promise._attachExtraTrace(trace);
	    async.invoke(promise._reject, promise, reason);
	    if (trace !== reason) {
	        async.invoke(this._setCarriedStackTrace, this, trace);
	    }
	};
	
	PromiseResolver.prototype.progress =
	function PromiseResolver$progress(value) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
	    }
	    async.invoke(this.promise._progress, this.promise, value);
	};
	
	PromiseResolver.prototype.cancel = function PromiseResolver$cancel() {
	    async.invoke(this.promise.cancel, this.promise, void 0);
	};
	
	PromiseResolver.prototype.timeout = function PromiseResolver$timeout() {
	    this.reject(new TimeoutError("timeout"));
	};
	
	PromiseResolver.prototype.isResolved = function PromiseResolver$isResolved() {
	    return this.promise.isResolved();
	};
	
	PromiseResolver.prototype.toJSON = function PromiseResolver$toJSON() {
	    return this.promise.toJSON();
	};
	
	PromiseResolver.prototype._setCarriedStackTrace =
	function PromiseResolver$_setCarriedStackTrace(trace) {
	    if (this.promise.isRejected()) {
	        this.promise._setCarriedStackTrace(trace);
	    }
	};
	
	module.exports = PromiseResolver;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise) {
	var TypeError = __webpack_require__(35).TypeError;
	
	function apiRejection(msg) {
	    var error = new TypeError(msg);
	    var ret = Promise.rejected(error);
	    var parent = ret._peekContext();
	    if (parent != null) {
	        parent._attachExtraTrace(error);
	    }
	    return ret;
	}
	
	return apiRejection;
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, NEXT_FILTER, cast) {
	var util = __webpack_require__(33);
	var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;
	var isPrimitive = util.isPrimitive;
	var thrower = util.thrower;
	
	function returnThis() {
	    return this;
	}
	function throwThis() {
	    throw this;
	}
	function return$(r) {
	    return function Promise$_returner() {
	        return r;
	    };
	}
	function throw$(r) {
	    return function Promise$_thrower() {
	        throw r;
	    };
	}
	function promisedFinally(ret, reasonOrValue, isFulfilled) {
	    var then;
	    if (wrapsPrimitiveReceiver && isPrimitive(reasonOrValue)) {
	        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
	    } else {
	        then = isFulfilled ? returnThis : throwThis;
	    }
	    return ret._then(then, thrower, void 0, reasonOrValue, void 0);
	}
	
	function finallyHandler(reasonOrValue) {
	    var promise = this.promise;
	    var handler = this.handler;
	
	    var ret = promise._isBound()
	                    ? handler.call(promise._boundTo)
	                    : handler();
	
	    if (ret !== void 0) {
	        var maybePromise = cast(ret, void 0);
	        if (maybePromise instanceof Promise) {
	            return promisedFinally(maybePromise, reasonOrValue,
	                                    promise.isFulfilled());
	        }
	    }
	
	    if (promise.isRejected()) {
	        NEXT_FILTER.e = reasonOrValue;
	        return NEXT_FILTER;
	    } else {
	        return reasonOrValue;
	    }
	}
	
	function tapHandler(value) {
	    var promise = this.promise;
	    var handler = this.handler;
	
	    var ret = promise._isBound()
	                    ? handler.call(promise._boundTo, value)
	                    : handler(value);
	
	    if (ret !== void 0) {
	        var maybePromise = cast(ret, void 0);
	        if (maybePromise instanceof Promise) {
	            return promisedFinally(maybePromise, value, true);
	        }
	    }
	    return value;
	}
	
	Promise.prototype._passThroughHandler =
	function Promise$_passThroughHandler(handler, isFinally) {
	    if (typeof handler !== "function") return this.then();
	
	    var promiseAndHandler = {
	        promise: this,
	        handler: handler
	    };
	
	    return this._then(
	            isFinally ? finallyHandler : tapHandler,
	            isFinally ? finallyHandler : void 0, void 0,
	            promiseAndHandler, void 0);
	};
	
	Promise.prototype.lastly =
	Promise.prototype["finally"] = function Promise$finally(handler) {
	    return this._passThroughHandler(handler, true);
	};
	
	Promise.prototype.tap = function Promise$tap(handler) {
	    return this._passThroughHandler(handler, false);
	};
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var util = __webpack_require__(33);
	var isPrimitive = util.isPrimitive;
	var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;
	
	module.exports = function(Promise) {
	var returner = function Promise$_returner() {
	    return this;
	};
	var thrower = function Promise$_thrower() {
	    throw this;
	};
	
	var wrapper = function Promise$_wrapper(value, action) {
	    if (action === 1) {
	        return function Promise$_thrower() {
	            throw value;
	        };
	    } else if (action === 2) {
	        return function Promise$_returner() {
	            return value;
	        };
	    }
	};
	
	
	Promise.prototype["return"] =
	Promise.prototype.thenReturn =
	function Promise$thenReturn(value) {
	    if (wrapsPrimitiveReceiver && isPrimitive(value)) {
	        return this._then(
	            wrapper(value, 2),
	            void 0,
	            void 0,
	            void 0,
	            void 0
	       );
	    }
	    return this._then(returner, void 0, void 0, value, void 0);
	};
	
	Promise.prototype["throw"] =
	Promise.prototype.thenThrow =
	function Promise$thenThrow(reason) {
	    if (wrapsPrimitiveReceiver && isPrimitive(reason)) {
	        return this._then(
	            wrapper(reason, 1),
	            void 0,
	            void 0,
	            void 0,
	            void 0
	       );
	    }
	    return this._then(thrower, void 0, void 0, reason, void 0);
	};
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise) {
	function PromiseInspection(promise) {
	    if (promise !== void 0) {
	        this._bitField = promise._bitField;
	        this._settledValue = promise.isResolved()
	            ? promise._settledValue
	            : void 0;
	    }
	    else {
	        this._bitField = 0;
	        this._settledValue = void 0;
	    }
	}
	
	PromiseInspection.prototype.isFulfilled =
	Promise.prototype.isFulfilled = function Promise$isFulfilled() {
	    return (this._bitField & 268435456) > 0;
	};
	
	PromiseInspection.prototype.isRejected =
	Promise.prototype.isRejected = function Promise$isRejected() {
	    return (this._bitField & 134217728) > 0;
	};
	
	PromiseInspection.prototype.isPending =
	Promise.prototype.isPending = function Promise$isPending() {
	    return (this._bitField & 402653184) === 0;
	};
	
	PromiseInspection.prototype.value =
	Promise.prototype.value = function Promise$value() {
	    if (!this.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
	    }
	    return this._settledValue;
	};
	
	PromiseInspection.prototype.error =
	PromiseInspection.prototype.reason =
	Promise.prototype.reason = function Promise$reason() {
	    if (!this.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise");
	    }
	    return this._settledValue;
	};
	
	PromiseInspection.prototype.isResolved =
	Promise.prototype.isResolved = function Promise$isResolved() {
	    return (this._bitField & 402653184) > 0;
	};
	
	Promise.PromiseInspection = PromiseInspection;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports =
	function(Promise, PromiseArray, cast, INTERNAL) {
	var util = __webpack_require__(33);
	var canEvaluate = util.canEvaluate;
	var tryCatch1 = util.tryCatch1;
	var errorObj = util.errorObj;
	
	
	if (canEvaluate) {
	    var thenCallback = function(i) {
	        return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	    };
	
	    var caller = function(count) {
	        var values = [];
	        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
	        return new Function("holder", "                                      \n\
	            'use strict';                                                    \n\
	            var callback = holder.fn;                                        \n\
	            return callback(values);                                         \n\
	            ".replace(/values/g, values.join(", ")));
	    };
	    var thenCallbacks = [];
	    var callers = [void 0];
	    for (var i = 1; i <= 5; ++i) {
	        thenCallbacks.push(thenCallback(i));
	        callers.push(caller(i));
	    }
	
	    var Holder = function(total, fn) {
	        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
	        this.fn = fn;
	        this.total = total;
	        this.now = 0;
	    };
	
	    Holder.prototype.callers = callers;
	    Holder.prototype.checkFulfillment = function(promise) {
	        var now = this.now;
	        now++;
	        var total = this.total;
	        if (now >= total) {
	            var handler = this.callers[total];
	            var ret = tryCatch1(handler, void 0, this);
	            if (ret === errorObj) {
	                promise._rejectUnchecked(ret.e);
	            } else if (!promise._tryFollow(ret)) {
	                promise._fulfillUnchecked(ret);
	            }
	        } else {
	            this.now = now;
	        }
	    };
	}
	
	function reject(reason) {
	    this._reject(reason);
	}
	
	Promise.join = function Promise$Join() {
	    var last = arguments.length - 1;
	    var fn;
	    if (last > 0 && typeof arguments[last] === "function") {
	        fn = arguments[last];
	        if (last < 6 && canEvaluate) {
	            var ret = new Promise(INTERNAL);
	            ret._setTrace(void 0);
	            var holder = new Holder(last, fn);
	            var callbacks = thenCallbacks;
	            for (var i = 0; i < last; ++i) {
	                var maybePromise = cast(arguments[i], void 0);
	                if (maybePromise instanceof Promise) {
	                    if (maybePromise.isPending()) {
	                        maybePromise._then(callbacks[i], reject,
	                                           void 0, ret, holder);
	                    } else if (maybePromise.isFulfilled()) {
	                        callbacks[i].call(ret,
	                                          maybePromise._settledValue, holder);
	                    } else {
	                        ret._reject(maybePromise._settledValue);
	                        maybePromise._unsetRejectionIsUnhandled();
	                    }
	                } else {
	                    callbacks[i].call(ret, maybePromise, holder);
	                }
	            }
	            return ret;
	        }
	    }
	    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
	    var ret = new PromiseArray(args).promise();
	    return fn !== void 0 ? ret.spread(fn) : ret;
	};
	
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var _setTimeout = function(fn, ms) {
	    var len = arguments.length;
	    var arg0 = arguments[2];
	    var arg1 = arguments[3];
	    var arg2 = len >= 5 ? arguments[4] : void 0;
	    return setTimeout(function() {
	        fn(arg0, arg1, arg2);
	    }, ms|0);
	};
	
	module.exports = function(Promise, INTERNAL, cast) {
	var util = __webpack_require__(33);
	var errors = __webpack_require__(35);
	var apiRejection = __webpack_require__(41)(Promise);
	var TimeoutError = Promise.TimeoutError;
	
	var afterTimeout = function Promise$_afterTimeout(promise, message, ms) {
	    if (!promise.isPending()) return;
	    if (typeof message !== "string") {
	        message = "operation timed out after" + " " + ms + " ms"
	    }
	    var err = new TimeoutError(message);
	    errors.markAsOriginatingFromRejection(err);
	    promise._attachExtraTrace(err);
	    promise._cancel(err);
	};
	
	var afterDelay = function Promise$_afterDelay(value, promise) {
	    promise._fulfill(value);
	};
	
	var delay = Promise.delay = function Promise$Delay(value, ms) {
	    if (ms === void 0) {
	        ms = value;
	        value = void 0;
	    }
	    ms = +ms;
	    var maybePromise = cast(value, void 0);
	    var promise = new Promise(INTERNAL);
	
	    if (maybePromise instanceof Promise) {
	        promise._propagateFrom(maybePromise, 7);
	        promise._follow(maybePromise);
	        return promise.then(function(value) {
	            return Promise.delay(value, ms);
	        });
	    } else {
	        promise._setTrace(void 0);
	        _setTimeout(afterDelay, ms, value, promise);
	    }
	    return promise;
	};
	
	Promise.prototype.delay = function Promise$delay(ms) {
	    return delay(this, ms);
	};
	
	function successClear(value) {
	    var handle = this;
	    if (handle instanceof Number) handle = +handle;
	    clearTimeout(handle);
	    return value;
	}
	
	function failureClear(reason) {
	    var handle = this;
	    if (handle instanceof Number) handle = +handle;
	    clearTimeout(handle);
	    throw reason;
	}
	
	Promise.prototype.timeout = function Promise$timeout(ms, message) {
	    ms = +ms;
	
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 7);
	    ret._follow(this);
	    var handle = _setTimeout(afterTimeout, ms, ret, message, ms);
	    return ret.cancellable()
	              ._then(successClear, failureClear, void 0, handle, void 0);
	};
	
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, INTERNAL, cast) {
	var apiRejection = __webpack_require__(41)(Promise);
	var isArray = __webpack_require__(33).isArray;
	
	var raceLater = function Promise$_raceLater(promise) {
	    return promise.then(function(array) {
	        return Promise$_Race(array, promise);
	    });
	};
	
	var hasOwn = {}.hasOwnProperty;
	function Promise$_Race(promises, parent) {
	    var maybePromise = cast(promises, void 0);
	
	    if (maybePromise instanceof Promise) {
	        return raceLater(maybePromise);
	    } else if (!isArray(promises)) {
	        return apiRejection("expecting an array, a promise or a thenable");
	    }
	
	    var ret = new Promise(INTERNAL);
	    if (parent !== void 0) {
	        ret._propagateFrom(parent, 7);
	    } else {
	        ret._setTrace(void 0);
	    }
	    var fulfill = ret._fulfill;
	    var reject = ret._reject;
	    for (var i = 0, len = promises.length; i < len; ++i) {
	        var val = promises[i];
	
	        if (val === void 0 && !(hasOwn.call(promises, i))) {
	            continue;
	        }
	
	        Promise.cast(val)._then(fulfill, reject, void 0, ret, null);
	    }
	    return ret;
	}
	
	Promise.race = function Promise$Race(promises) {
	    return Promise$_Race(promises, void 0);
	};
	
	Promise.prototype.race = function Promise$race() {
	    return Promise$_Race(this, void 0);
	};
	
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var cr = Object.create;
	if (cr) {
	    var callerCache = cr(null);
	    var getterCache = cr(null);
	    callerCache[" size"] = getterCache[" size"] = 0;
	}
	
	module.exports = function(Promise) {
	var util = __webpack_require__(33);
	var canEvaluate = util.canEvaluate;
	var isIdentifier = util.isIdentifier;
	
	function makeMethodCaller (methodName) {
	    return new Function("obj", "                                             \n\
	        'use strict'                                                         \n\
	        var len = this.length;                                               \n\
	        switch(len) {                                                        \n\
	            case 1: return obj.methodName(this[0]);                          \n\
	            case 2: return obj.methodName(this[0], this[1]);                 \n\
	            case 3: return obj.methodName(this[0], this[1], this[2]);        \n\
	            case 0: return obj.methodName();                                 \n\
	            default: return obj.methodName.apply(obj, this);                 \n\
	        }                                                                    \n\
	        ".replace(/methodName/g, methodName));
	}
	
	function makeGetter (propertyName) {
	    return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	}
	
	function getCompiled(name, compiler, cache) {
	    var ret = cache[name];
	    if (typeof ret !== "function") {
	        if (!isIdentifier(name)) {
	            return null;
	        }
	        ret = compiler(name);
	        cache[name] = ret;
	        cache[" size"]++;
	        if (cache[" size"] > 512) {
	            var keys = Object.keys(cache);
	            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
	            cache[" size"] = keys.length - 256;
	        }
	    }
	    return ret;
	}
	
	function getMethodCaller(name) {
	    return getCompiled(name, makeMethodCaller, callerCache);
	}
	
	function getGetter(name) {
	    return getCompiled(name, makeGetter, getterCache);
	}
	
	function caller(obj) {
	    return obj[this.pop()].apply(obj, this);
	}
	Promise.prototype.call = function Promise$call(methodName) {
	    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
	    if (canEvaluate) {
	        var maybeCaller = getMethodCaller(methodName);
	        if (maybeCaller !== null) {
	            return this._then(maybeCaller, void 0, void 0, args, void 0);
	        }
	    }
	    args.push(methodName);
	    return this._then(caller, void 0, void 0, args, void 0);
	};
	
	function namedGetter(obj) {
	    return obj[this];
	}
	function indexedGetter(obj) {
	    return obj[this];
	}
	Promise.prototype.get = function Promise$get(propertyName) {
	    var isIndex = (typeof propertyName === "number");
	    var getter;
	    if (!isIndex) {
	        if (canEvaluate) {
	            var maybeGetter = getGetter(propertyName);
	            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	        } else {
	            getter = namedGetter;
	        }
	    } else {
	        getter = indexedGetter;
	    }
	    return this._then(getter, void 0, void 0, propertyName, void 0);
	};
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, apiRejection, INTERNAL, cast) {
	var errors = __webpack_require__(35);
	var TypeError = errors.TypeError;
	var deprecated = __webpack_require__(33).deprecated;
	var util = __webpack_require__(33);
	var errorObj = util.errorObj;
	var tryCatch1 = util.tryCatch1;
	var yieldHandlers = [];
	
	function promiseFromYieldHandler(value, yieldHandlers) {
	    var _errorObj = errorObj;
	    var _Promise = Promise;
	    var len = yieldHandlers.length;
	    for (var i = 0; i < len; ++i) {
	        var result = tryCatch1(yieldHandlers[i], void 0, value);
	        if (result === _errorObj) {
	            return _Promise.reject(_errorObj.e);
	        }
	        var maybePromise = cast(result, promiseFromYieldHandler);
	        if (maybePromise instanceof _Promise) return maybePromise;
	    }
	    return null;
	}
	
	function PromiseSpawn(generatorFunction, receiver, yieldHandler) {
	    var promise = this._promise = new Promise(INTERNAL);
	    promise._setTrace(void 0);
	    this._generatorFunction = generatorFunction;
	    this._receiver = receiver;
	    this._generator = void 0;
	    this._yieldHandlers = typeof yieldHandler === "function"
	        ? [yieldHandler].concat(yieldHandlers)
	        : yieldHandlers;
	}
	
	PromiseSpawn.prototype.promise = function PromiseSpawn$promise() {
	    return this._promise;
	};
	
	PromiseSpawn.prototype._run = function PromiseSpawn$_run() {
	    this._generator = this._generatorFunction.call(this._receiver);
	    this._receiver =
	        this._generatorFunction = void 0;
	    this._next(void 0);
	};
	
	PromiseSpawn.prototype._continue = function PromiseSpawn$_continue(result) {
	    if (result === errorObj) {
	        this._generator = void 0;
	        var trace = errors.canAttach(result.e)
	            ? result.e : new Error(result.e + "");
	        this._promise._attachExtraTrace(trace);
	        this._promise._reject(result.e, trace);
	        return;
	    }
	
	    var value = result.value;
	    if (result.done === true) {
	        this._generator = void 0;
	        if (!this._promise._tryFollow(value)) {
	            this._promise._fulfill(value);
	        }
	    } else {
	        var maybePromise = cast(value, void 0);
	        if (!(maybePromise instanceof Promise)) {
	            maybePromise =
	                promiseFromYieldHandler(maybePromise, this._yieldHandlers);
	            if (maybePromise === null) {
	                this._throw(new TypeError("A value was yielded that could not be treated as a promise"));
	                return;
	            }
	        }
	        maybePromise._then(
	            this._next,
	            this._throw,
	            void 0,
	            this,
	            null
	       );
	    }
	};
	
	PromiseSpawn.prototype._throw = function PromiseSpawn$_throw(reason) {
	    if (errors.canAttach(reason))
	        this._promise._attachExtraTrace(reason);
	    this._continue(
	        tryCatch1(this._generator["throw"], this._generator, reason)
	   );
	};
	
	PromiseSpawn.prototype._next = function PromiseSpawn$_next(value) {
	    this._continue(
	        tryCatch1(this._generator.next, this._generator, value)
	   );
	};
	
	Promise.coroutine =
	function Promise$Coroutine(generatorFunction, options) {
	    if (typeof generatorFunction !== "function") {
	        throw new TypeError("generatorFunction must be a function");
	    }
	    var yieldHandler = Object(options).yieldHandler;
	    var PromiseSpawn$ = PromiseSpawn;
	    return function () {
	        var generator = generatorFunction.apply(this, arguments);
	        var spawn = new PromiseSpawn$(void 0, void 0, yieldHandler);
	        spawn._generator = generator;
	        spawn._next(void 0);
	        return spawn.promise();
	    };
	};
	
	Promise.coroutine.addYieldHandler = function(fn) {
	    if (typeof fn !== "function") throw new TypeError("fn must be a function");
	    yieldHandlers.push(fn);
	};
	
	Promise.spawn = function Promise$Spawn(generatorFunction) {
	    deprecated("Promise.spawn is deprecated. Use Promise.coroutine instead.");
	    if (typeof generatorFunction !== "function") {
	        return apiRejection("generatorFunction must be a function");
	    }
	    var spawn = new PromiseSpawn(generatorFunction, this);
	    var ret = spawn.promise();
	    spawn._run(Promise.spawn);
	    return ret;
	};
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
	var util = __webpack_require__(33);
	var tryCatch3 = util.tryCatch3;
	var errorObj = util.errorObj;
	var PENDING = {};
	var EMPTY_ARRAY = [];
	
	function MappingPromiseArray(promises, fn, limit, _filter) {
	    this.constructor$(promises);
	    this._callback = fn;
	    this._preservedValues = _filter === INTERNAL
	        ? new Array(this.length())
	        : null;
	    this._limit = limit;
	    this._inFlight = 0;
	    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
	    this._init$(void 0, -2);
	}
	util.inherits(MappingPromiseArray, PromiseArray);
	
	MappingPromiseArray.prototype._init = function MappingPromiseArray$_init() {};
	
	MappingPromiseArray.prototype._promiseFulfilled =
	function MappingPromiseArray$_promiseFulfilled(value, index) {
	    var values = this._values;
	    if (values === null) return;
	
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var limit = this._limit;
	    if (values[index] === PENDING) {
	        values[index] = value;
	        if (limit >= 1) {
	            this._inFlight--;
	            this._drainQueue();
	            if (this._isResolved()) return;
	        }
	    } else {
	        if (limit >= 1 && this._inFlight >= limit) {
	            values[index] = value;
	            this._queue.push(index);
	            return;
	        }
	        if (preservedValues !== null) preservedValues[index] = value;
	
	        var callback = this._callback;
	        var receiver = this._promise._boundTo;
	        var ret = tryCatch3(callback, receiver, value, index, length);
	        if (ret === errorObj) return this._reject(ret.e);
	
	        var maybePromise = cast(ret, void 0);
	        if (maybePromise instanceof Promise) {
	            if (maybePromise.isPending()) {
	                if (limit >= 1) this._inFlight++;
	                values[index] = PENDING;
	                return maybePromise._proxyPromiseArray(this, index);
	            } else if (maybePromise.isFulfilled()) {
	                ret = maybePromise.value();
	            } else {
	                maybePromise._unsetRejectionIsUnhandled();
	                return this._reject(maybePromise.reason());
	            }
	        }
	        values[index] = ret;
	    }
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= length) {
	        if (preservedValues !== null) {
	            this._filter(values, preservedValues);
	        } else {
	            this._resolve(values);
	        }
	
	    }
	};
	
	MappingPromiseArray.prototype._drainQueue =
	function MappingPromiseArray$_drainQueue() {
	    var queue = this._queue;
	    var limit = this._limit;
	    var values = this._values;
	    while (queue.length > 0 && this._inFlight < limit) {
	        var index = queue.pop();
	        this._promiseFulfilled(values[index], index);
	    }
	};
	
	MappingPromiseArray.prototype._filter =
	function MappingPromiseArray$_filter(booleans, values) {
	    var len = values.length;
	    var ret = new Array(len);
	    var j = 0;
	    for (var i = 0; i < len; ++i) {
	        if (booleans[i]) ret[j++] = values[i];
	    }
	    ret.length = j;
	    this._resolve(ret);
	};
	
	MappingPromiseArray.prototype.preservedValues =
	function MappingPromiseArray$preserveValues() {
	    return this._preservedValues;
	};
	
	function map(promises, fn, options, _filter) {
	    var limit = typeof options === "object" && options !== null
	        ? options.concurrency
	        : 0;
	    limit = typeof limit === "number" &&
	        isFinite(limit) && limit >= 1 ? limit : 0;
	    return new MappingPromiseArray(promises, fn, limit, _filter);
	}
	
	Promise.prototype.map = function Promise$map(fn, options) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function");
	
	    return map(this, fn, options, null).promise();
	};
	
	Promise.map = function Promise$Map(promises, fn, options, _filter) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function");
	    return map(promises, fn, options, _filter).promise();
	};
	
	
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise) {
	var util = __webpack_require__(33);
	var async = __webpack_require__(34);
	var tryCatch2 = util.tryCatch2;
	var tryCatch1 = util.tryCatch1;
	var errorObj = util.errorObj;
	
	function thrower(r) {
	    throw r;
	}
	
	function Promise$_spreadAdapter(val, receiver) {
	    if (!util.isArray(val)) return Promise$_successAdapter(val, receiver);
	    var ret = util.tryCatchApply(this, [null].concat(val), receiver);
	    if (ret === errorObj) {
	        async.invokeLater(thrower, void 0, ret.e);
	    }
	}
	
	function Promise$_successAdapter(val, receiver) {
	    var nodeback = this;
	    var ret = val === void 0
	        ? tryCatch1(nodeback, receiver, null)
	        : tryCatch2(nodeback, receiver, null, val);
	    if (ret === errorObj) {
	        async.invokeLater(thrower, void 0, ret.e);
	    }
	}
	function Promise$_errorAdapter(reason, receiver) {
	    var nodeback = this;
	    var ret = tryCatch1(nodeback, receiver, reason);
	    if (ret === errorObj) {
	        async.invokeLater(thrower, void 0, ret.e);
	    }
	}
	
	Promise.prototype.nodeify = function Promise$nodeify(nodeback, options) {
	    if (typeof nodeback == "function") {
	        var adapter = Promise$_successAdapter;
	        if (options !== void 0 && Object(options).spread) {
	            adapter = Promise$_spreadAdapter;
	        }
	        this._then(
	            adapter,
	            Promise$_errorAdapter,
	            void 0,
	            nodeback,
	            this._boundTo
	        );
	    }
	    return this;
	};
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var THIS = {};
	var util = __webpack_require__(33);
	var nodebackForPromise = __webpack_require__(40)
	    ._nodebackForPromise;
	var withAppended = util.withAppended;
	var maybeWrapAsError = util.maybeWrapAsError;
	var canEvaluate = util.canEvaluate;
	var TypeError = __webpack_require__(35).TypeError;
	var defaultSuffix = "Async";
	var defaultFilter = function(name, func) {
	    return util.isIdentifier(name) &&
	        name.charAt(0) !== "_" &&
	        !util.isClass(func);
	};
	var defaultPromisified = {__isPromisified__: true};
	
	
	function escapeIdentRegex(str) {
	    return str.replace(/([$])/, "\\$");
	}
	
	function isPromisified(fn) {
	    try {
	        return fn.__isPromisified__ === true;
	    }
	    catch (e) {
	        return false;
	    }
	}
	
	function hasPromisified(obj, key, suffix) {
	    var val = util.getDataPropertyOrDefault(obj, key + suffix,
	                                            defaultPromisified);
	    return val ? isPromisified(val) : false;
	}
	function checkValid(ret, suffix, suffixRegexp) {
	    for (var i = 0; i < ret.length; i += 2) {
	        var key = ret[i];
	        if (suffixRegexp.test(key)) {
	            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	            for (var j = 0; j < ret.length; j += 2) {
	                if (ret[j] === keyWithoutAsyncSuffix) {
	                    throw new TypeError("Cannot promisify an API " +
	                        "that has normal methods with '"+suffix+"'-suffix");
	                }
	            }
	        }
	    }
	}
	
	function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	    var keys = util.inheritedDataKeys(obj);
	    var ret = [];
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = obj[key];
	        if (typeof value === "function" &&
	            !isPromisified(value) &&
	            !hasPromisified(obj, key, suffix) &&
	            filter(key, value, obj)) {
	            ret.push(key, value);
	        }
	    }
	    checkValid(ret, suffix, suffixRegexp);
	    return ret;
	}
	
	function switchCaseArgumentOrder(likelyArgumentCount) {
	    var ret = [likelyArgumentCount];
	    var min = Math.max(0, likelyArgumentCount - 1 - 5);
	    for(var i = likelyArgumentCount - 1; i >= min; --i) {
	        if (i === likelyArgumentCount) continue;
	        ret.push(i);
	    }
	    for(var i = likelyArgumentCount + 1; i <= 5; ++i) {
	        ret.push(i);
	    }
	    return ret;
	}
	
	function argumentSequence(argumentCount) {
	    return util.filledRange(argumentCount, "arguments[", "]");
	}
	
	function parameterDeclaration(parameterCount) {
	    return util.filledRange(parameterCount, "_arg", "");
	}
	
	function parameterCount(fn) {
	    if (typeof fn.length === "number") {
	        return Math.max(Math.min(fn.length, 1023 + 1), 0);
	    }
	    return 0;
	}
	
	function generatePropertyAccess(key) {
	    if (util.isIdentifier(key)) {
	        return "." + key;
	    }
	    else return "['" + key.replace(/(['\\])/g, "\\$1") + "']";
	}
	
	function makeNodePromisifiedEval(callback, receiver, originalName, fn, suffix) {
	    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	    var callbackName =
	        (typeof originalName === "string" && util.isIdentifier(originalName)
	            ? originalName + suffix
	            : "promisified");
	
	    function generateCallForArgumentCount(count) {
	        var args = argumentSequence(count).join(", ");
	        var comma = count > 0 ? ", " : "";
	        var ret;
	        if (typeof callback === "string") {
	            ret = "                                                          \n\
	                this.method({{args}}, fn);                                   \n\
	                break;                                                       \n\
	            ".replace(".method", generatePropertyAccess(callback));
	        } else if (receiver === THIS) {
	            ret =  "                                                         \n\
	                callback.call(this, {{args}}, fn);                           \n\
	                break;                                                       \n\
	            ";
	        } else if (receiver !== void 0) {
	            ret =  "                                                         \n\
	                callback.call(receiver, {{args}}, fn);                       \n\
	                break;                                                       \n\
	            ";
	        } else {
	            ret =  "                                                         \n\
	                callback({{args}}, fn);                                      \n\
	                break;                                                       \n\
	            ";
	        }
	        return ret.replace("{{args}}", args).replace(", ", comma);
	    }
	
	    function generateArgumentSwitchCase() {
	        var ret = "";
	        for(var i = 0; i < argumentOrder.length; ++i) {
	            ret += "case " + argumentOrder[i] +":" +
	                generateCallForArgumentCount(argumentOrder[i]);
	        }
	        var codeForCall;
	        if (typeof callback === "string") {
	            codeForCall = "                                                  \n\
	                this.property.apply(this, args);                             \n\
	            "
	                .replace(".property", generatePropertyAccess(callback));
	        } else if (receiver === THIS) {
	            codeForCall = "                                                  \n\
	                callback.apply(this, args);                                  \n\
	            ";
	        } else {
	            codeForCall = "                                                  \n\
	                callback.apply(receiver, args);                              \n\
	            ";
	        }
	
	        ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = fn;                                                    \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", codeForCall);
	        return ret;
	    }
	
	    return new Function("Promise",
	                        "callback",
	                        "receiver",
	                        "withAppended",
	                        "maybeWrapAsError",
	                        "nodebackForPromise",
	                        "INTERNAL","                                         \n\
	        var ret = function FunctionName(Parameters) {                        \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._setTrace(void 0);                                       \n\
	            var fn = nodebackForPromise(promise);                            \n\
	            try {                                                            \n\
	                switch(len) {                                                \n\
	                    [CodeForSwitchCase]                                      \n\
	                }                                                            \n\
	            } catch (e) {                                                    \n\
	                var wrapped = maybeWrapAsError(e);                           \n\
	                promise._attachExtraTrace(wrapped);                          \n\
	                promise._reject(wrapped);                                    \n\
	            }                                                                \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        ret.__isPromisified__ = true;                                        \n\
	        return ret;                                                          \n\
	        "
	        .replace("FunctionName", callbackName)
	        .replace("Parameters", parameterDeclaration(newParameterCount))
	        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase()))(
	            Promise,
	            callback,
	            receiver,
	            withAppended,
	            maybeWrapAsError,
	            nodebackForPromise,
	            INTERNAL
	        );
	}
	
	function makeNodePromisifiedClosure(callback, receiver) {
	    function promisified() {
	        var _receiver = receiver;
	        if (receiver === THIS) _receiver = this;
	        if (typeof callback === "string") {
	            callback = _receiver[callback];
	        }
	        var promise = new Promise(INTERNAL);
	        promise._setTrace(void 0);
	        var fn = nodebackForPromise(promise);
	        try {
	            callback.apply(_receiver, withAppended(arguments, fn));
	        } catch(e) {
	            var wrapped = maybeWrapAsError(e);
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        }
	        return promise;
	    }
	    promisified.__isPromisified__ = true;
	    return promisified;
	}
	
	var makeNodePromisified = canEvaluate
	    ? makeNodePromisifiedEval
	    : makeNodePromisifiedClosure;
	
	function promisifyAll(obj, suffix, filter, promisifier) {
	    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	    var methods =
	        promisifiableMethods(obj, suffix, suffixRegexp, filter);
	
	    for (var i = 0, len = methods.length; i < len; i+= 2) {
	        var key = methods[i];
	        var fn = methods[i+1];
	        var promisifiedKey = key + suffix;
	        obj[promisifiedKey] = promisifier === makeNodePromisified
	                ? makeNodePromisified(key, THIS, key, fn, suffix)
	                : promisifier(fn);
	    }
	    util.toFastProperties(obj);
	    return obj;
	}
	
	function promisify(callback, receiver) {
	    return makeNodePromisified(callback, receiver, void 0, callback);
	}
	
	Promise.promisify = function Promise$Promisify(fn, receiver) {
	    if (typeof fn !== "function") {
	        throw new TypeError("fn must be a function");
	    }
	    if (isPromisified(fn)) {
	        return fn;
	    }
	    return promisify(fn, arguments.length < 2 ? THIS : receiver);
	};
	
	Promise.promisifyAll = function Promise$PromisifyAll(target, options) {
	    if (typeof target !== "function" && typeof target !== "object") {
	        throw new TypeError("the target of promisifyAll must be an object or a function");
	    }
	    options = Object(options);
	    var suffix = options.suffix;
	    if (typeof suffix !== "string") suffix = defaultSuffix;
	    var filter = options.filter;
	    if (typeof filter !== "function") filter = defaultFilter;
	    var promisifier = options.promisifier;
	    if (typeof promisifier !== "function") promisifier = makeNodePromisified;
	
	    if (!util.isIdentifier(suffix)) {
	        throw new RangeError("suffix must be a valid identifier");
	    }
	
	    var keys = util.inheritedDataKeys(target, {includeHidden: true});
	    for (var i = 0; i < keys.length; ++i) {
	        var value = target[keys[i]];
	        if (keys[i] !== "constructor" &&
	            util.isClass(value)) {
	            promisifyAll(value.prototype, suffix, filter, promisifier);
	            promisifyAll(value, suffix, filter, promisifier);
	        }
	    }
	
	    return promisifyAll(target, suffix, filter, promisifier);
	};
	};
	


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, PromiseArray, cast) {
	var util = __webpack_require__(33);
	var apiRejection = __webpack_require__(41)(Promise);
	var isObject = util.isObject;
	var es5 = __webpack_require__(65);
	
	function PropertiesPromiseArray(obj) {
	    var keys = es5.keys(obj);
	    var len = keys.length;
	    var values = new Array(len * 2);
	    for (var i = 0; i < len; ++i) {
	        var key = keys[i];
	        values[i] = obj[key];
	        values[i + len] = key;
	    }
	    this.constructor$(values);
	}
	util.inherits(PropertiesPromiseArray, PromiseArray);
	
	PropertiesPromiseArray.prototype._init =
	function PropertiesPromiseArray$_init() {
	    this._init$(void 0, -3) ;
	};
	
	PropertiesPromiseArray.prototype._promiseFulfilled =
	function PropertiesPromiseArray$_promiseFulfilled(value, index) {
	    if (this._isResolved()) return;
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        var val = {};
	        var keyOffset = this.length();
	        for (var i = 0, len = this.length(); i < len; ++i) {
	            val[this._values[i + keyOffset]] = this._values[i];
	        }
	        this._resolve(val);
	    }
	};
	
	PropertiesPromiseArray.prototype._promiseProgressed =
	function PropertiesPromiseArray$_promiseProgressed(value, index) {
	    if (this._isResolved()) return;
	
	    this._promise._progress({
	        key: this._values[index + this.length()],
	        value: value
	    });
	};
	
	PropertiesPromiseArray.prototype.shouldCopyValues =
	function PropertiesPromiseArray$_shouldCopyValues() {
	    return false;
	};
	
	PropertiesPromiseArray.prototype.getActualLength =
	function PropertiesPromiseArray$getActualLength(len) {
	    return len >> 1;
	};
	
	function Promise$_Props(promises) {
	    var ret;
	    var castValue = cast(promises, void 0);
	
	    if (!isObject(castValue)) {
	        return apiRejection("cannot await properties of a non-object");
	    } else if (castValue instanceof Promise) {
	        ret = castValue._then(Promise.props, void 0, void 0, void 0, void 0);
	    } else {
	        ret = new PropertiesPromiseArray(castValue).promise();
	    }
	
	    if (castValue instanceof Promise) {
	        ret._propagateFrom(castValue, 4);
	    }
	    return ret;
	}
	
	Promise.prototype.props = function Promise$props() {
	    return Promise$_Props(this);
	};
	
	Promise.props = function Promise$Props(promises) {
	    return Promise$_Props(promises);
	};
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
	var util = __webpack_require__(33);
	var tryCatch4 = util.tryCatch4;
	var tryCatch3 = util.tryCatch3;
	var errorObj = util.errorObj;
	function ReductionPromiseArray(promises, fn, accum, _each) {
	    this.constructor$(promises);
	    this._preservedValues = _each === INTERNAL ? [] : null;
	    this._zerothIsAccum = (accum === void 0);
	    this._gotAccum = false;
	    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
	    this._valuesPhase = undefined;
	
	    var maybePromise = cast(accum, void 0);
	    var rejected = false;
	    var isPromise = maybePromise instanceof Promise;
	    if (isPromise) {
	        if (maybePromise.isPending()) {
	            maybePromise._proxyPromiseArray(this, -1);
	        } else if (maybePromise.isFulfilled()) {
	            accum = maybePromise.value();
	            this._gotAccum = true;
	        } else {
	            maybePromise._unsetRejectionIsUnhandled();
	            this._reject(maybePromise.reason());
	            rejected = true;
	        }
	    }
	    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
	    this._callback = fn;
	    this._accum = accum;
	    if (!rejected) this._init$(void 0, -5);
	}
	util.inherits(ReductionPromiseArray, PromiseArray);
	
	ReductionPromiseArray.prototype._init =
	function ReductionPromiseArray$_init() {};
	
	ReductionPromiseArray.prototype._resolveEmptyArray =
	function ReductionPromiseArray$_resolveEmptyArray() {
	    if (this._gotAccum || this._zerothIsAccum) {
	        this._resolve(this._preservedValues !== null
	                        ? [] : this._accum);
	    }
	};
	
	ReductionPromiseArray.prototype._promiseFulfilled =
	function ReductionPromiseArray$_promiseFulfilled(value, index) {
	    var values = this._values;
	    if (values === null) return;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var isEach = preservedValues !== null;
	    var gotAccum = this._gotAccum;
	    var valuesPhase = this._valuesPhase;
	    var valuesPhaseIndex;
	    if (!valuesPhase) {
	        valuesPhase = this._valuesPhase = Array(length);
	        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
	            valuesPhase[valuesPhaseIndex] = 0;
	        }
	    }
	    valuesPhaseIndex = valuesPhase[index];
	
	    if (index === 0 && this._zerothIsAccum) {
	        if (!gotAccum) {
	            this._accum = value;
	            this._gotAccum = gotAccum = true;
	        }
	        valuesPhase[index] = ((valuesPhaseIndex === 0)
	            ? 1 : 2);
	    } else if (index === -1) {
	        if (!gotAccum) {
	            this._accum = value;
	            this._gotAccum = gotAccum = true;
	        }
	    } else {
	        if (valuesPhaseIndex === 0) {
	            valuesPhase[index] = 1;
	        }
	        else {
	            valuesPhase[index] = 2;
	            if (gotAccum) {
	                this._accum = value;
	            }
	        }
	    }
	    if (!gotAccum) return;
	
	    var callback = this._callback;
	    var receiver = this._promise._boundTo;
	    var ret;
	
	    for (var i = this._reducingIndex; i < length; ++i) {
	        valuesPhaseIndex = valuesPhase[i];
	        if (valuesPhaseIndex === 2) {
	            this._reducingIndex = i + 1;
	            continue;
	        }
	        if (valuesPhaseIndex !== 1) return;
	
	        value = values[i];
	        if (value instanceof Promise) {
	            if (value.isFulfilled()) {
	                value = value._settledValue;
	            } else if (value.isPending()) {
	                return;
	            } else {
	                value._unsetRejectionIsUnhandled();
	                return this._reject(value.reason());
	            }
	        }
	
	        if (isEach) {
	            preservedValues.push(value);
	            ret = tryCatch3(callback, receiver, value, i, length);
	        }
	        else {
	            ret = tryCatch4(callback, receiver, this._accum, value, i, length);
	        }
	
	        if (ret === errorObj) return this._reject(ret.e);
	
	        var maybePromise = cast(ret, void 0);
	        if (maybePromise instanceof Promise) {
	            if (maybePromise.isPending()) {
	                valuesPhase[i] = 4;
	                return maybePromise._proxyPromiseArray(this, i);
	            } else if (maybePromise.isFulfilled()) {
	                ret = maybePromise.value();
	            } else {
	                maybePromise._unsetRejectionIsUnhandled();
	                return this._reject(maybePromise.reason());
	            }
	        }
	
	        this._reducingIndex = i + 1;
	        this._accum = ret;
	    }
	
	    if (this._reducingIndex < length) return;
	    this._resolve(isEach ? preservedValues : this._accum);
	};
	
	function reduce(promises, fn, initialValue, _each) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function");
	    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	    return array.promise();
	}
	
	Promise.prototype.reduce = function Promise$reduce(fn, initialValue) {
	    return reduce(this, fn, initialValue, null);
	};
	
	Promise.reduce = function Promise$Reduce(promises, fn, initialValue, _each) {
	    return reduce(promises, fn, initialValue, _each);
	};
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports =
	    function(Promise, PromiseArray) {
	var PromiseInspection = Promise.PromiseInspection;
	var util = __webpack_require__(33);
	
	function SettledPromiseArray(values) {
	    this.constructor$(values);
	}
	util.inherits(SettledPromiseArray, PromiseArray);
	
	SettledPromiseArray.prototype._promiseResolved =
	function SettledPromiseArray$_promiseResolved(index, inspection) {
	    this._values[index] = inspection;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	    }
	};
	
	SettledPromiseArray.prototype._promiseFulfilled =
	function SettledPromiseArray$_promiseFulfilled(value, index) {
	    if (this._isResolved()) return;
	    var ret = new PromiseInspection();
	    ret._bitField = 268435456;
	    ret._settledValue = value;
	    this._promiseResolved(index, ret);
	};
	SettledPromiseArray.prototype._promiseRejected =
	function SettledPromiseArray$_promiseRejected(reason, index) {
	    if (this._isResolved()) return;
	    var ret = new PromiseInspection();
	    ret._bitField = 134217728;
	    ret._settledValue = reason;
	    this._promiseResolved(index, ret);
	};
	
	Promise.settle = function Promise$Settle(promises) {
	    return new SettledPromiseArray(promises).promise();
	};
	
	Promise.prototype.settle = function Promise$settle() {
	    return new SettledPromiseArray(this).promise();
	};
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports =
	function(Promise, PromiseArray, apiRejection) {
	var util = __webpack_require__(33);
	var RangeError = __webpack_require__(35).RangeError;
	var AggregateError = __webpack_require__(35).AggregateError;
	var isArray = util.isArray;
	
	
	function SomePromiseArray(values) {
	    this.constructor$(values);
	    this._howMany = 0;
	    this._unwrap = false;
	    this._initialized = false;
	}
	util.inherits(SomePromiseArray, PromiseArray);
	
	SomePromiseArray.prototype._init = function SomePromiseArray$_init() {
	    if (!this._initialized) {
	        return;
	    }
	    if (this._howMany === 0) {
	        this._resolve([]);
	        return;
	    }
	    this._init$(void 0, -5);
	    var isArrayResolved = isArray(this._values);
	    if (!this._isResolved() &&
	        isArrayResolved &&
	        this._howMany > this._canPossiblyFulfill()) {
	        this._reject(this._getRangeError(this.length()));
	    }
	};
	
	SomePromiseArray.prototype.init = function SomePromiseArray$init() {
	    this._initialized = true;
	    this._init();
	};
	
	SomePromiseArray.prototype.setUnwrap = function SomePromiseArray$setUnwrap() {
	    this._unwrap = true;
	};
	
	SomePromiseArray.prototype.howMany = function SomePromiseArray$howMany() {
	    return this._howMany;
	};
	
	SomePromiseArray.prototype.setHowMany =
	function SomePromiseArray$setHowMany(count) {
	    if (this._isResolved()) return;
	    this._howMany = count;
	};
	
	SomePromiseArray.prototype._promiseFulfilled =
	function SomePromiseArray$_promiseFulfilled(value) {
	    if (this._isResolved()) return;
	    this._addFulfilled(value);
	    if (this._fulfilled() === this.howMany()) {
	        this._values.length = this.howMany();
	        if (this.howMany() === 1 && this._unwrap) {
	            this._resolve(this._values[0]);
	        } else {
	            this._resolve(this._values);
	        }
	    }
	
	};
	SomePromiseArray.prototype._promiseRejected =
	function SomePromiseArray$_promiseRejected(reason) {
	    if (this._isResolved()) return;
	    this._addRejected(reason);
	    if (this.howMany() > this._canPossiblyFulfill()) {
	        var e = new AggregateError();
	        for (var i = this.length(); i < this._values.length; ++i) {
	            e.push(this._values[i]);
	        }
	        this._reject(e);
	    }
	};
	
	SomePromiseArray.prototype._fulfilled = function SomePromiseArray$_fulfilled() {
	    return this._totalResolved;
	};
	
	SomePromiseArray.prototype._rejected = function SomePromiseArray$_rejected() {
	    return this._values.length - this.length();
	};
	
	SomePromiseArray.prototype._addRejected =
	function SomePromiseArray$_addRejected(reason) {
	    this._values.push(reason);
	};
	
	SomePromiseArray.prototype._addFulfilled =
	function SomePromiseArray$_addFulfilled(value) {
	    this._values[this._totalResolved++] = value;
	};
	
	SomePromiseArray.prototype._canPossiblyFulfill =
	function SomePromiseArray$_canPossiblyFulfill() {
	    return this.length() - this._rejected();
	};
	
	SomePromiseArray.prototype._getRangeError =
	function SomePromiseArray$_getRangeError(count) {
	    var message = "Input array must contain at least " +
	            this._howMany + " items but contains only " + count + " items";
	    return new RangeError(message);
	};
	
	SomePromiseArray.prototype._resolveEmptyArray =
	function SomePromiseArray$_resolveEmptyArray() {
	    this._reject(this._getRangeError(0));
	};
	
	function Promise$_Some(promises, howMany) {
	    if ((howMany | 0) !== howMany || howMany < 0) {
	        return apiRejection("expecting a positive integer");
	    }
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    if (promise.isRejected()) {
	        return promise;
	    }
	    ret.setHowMany(howMany);
	    ret.init();
	    return promise;
	}
	
	Promise.some = function Promise$Some(promises, howMany) {
	    return Promise$_Some(promises, howMany);
	};
	
	Promise.prototype.some = function Promise$some(howMany) {
	    return Promise$_Some(this, howMany);
	};
	
	Promise._SomePromiseArray = SomePromiseArray;
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, PromiseArray) {
	var util = __webpack_require__(33);
	var async = __webpack_require__(34);
	var errors = __webpack_require__(35);
	var tryCatch1 = util.tryCatch1;
	var errorObj = util.errorObj;
	
	Promise.prototype.progressed = function Promise$progressed(handler) {
	    return this._then(void 0, void 0, handler, void 0, void 0);
	};
	
	Promise.prototype._progress = function Promise$_progress(progressValue) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._progressUnchecked(progressValue);
	
	};
	
	Promise.prototype._clearFirstHandlerData$Base =
	Promise.prototype._clearFirstHandlerData;
	Promise.prototype._clearFirstHandlerData =
	function Promise$_clearFirstHandlerData() {
	    this._clearFirstHandlerData$Base();
	    this._progressHandler0 = void 0;
	};
	
	Promise.prototype._progressHandlerAt =
	function Promise$_progressHandlerAt(index) {
	    return index === 0
	        ? this._progressHandler0
	        : this[(index << 2) + index - 5 + 2];
	};
	
	Promise.prototype._doProgressWith =
	function Promise$_doProgressWith(progression) {
	    var progressValue = progression.value;
	    var handler = progression.handler;
	    var promise = progression.promise;
	    var receiver = progression.receiver;
	
	    var ret = tryCatch1(handler, receiver, progressValue);
	    if (ret === errorObj) {
	        if (ret.e != null &&
	            ret.e.name !== "StopProgressPropagation") {
	            var trace = errors.canAttach(ret.e)
	                ? ret.e : new Error(ret.e + "");
	            promise._attachExtraTrace(trace);
	            promise._progress(ret.e);
	        }
	    } else if (ret instanceof Promise) {
	        ret._then(promise._progress, null, null, promise, void 0);
	    } else {
	        promise._progress(ret);
	    }
	};
	
	
	Promise.prototype._progressUnchecked =
	function Promise$_progressUnchecked(progressValue) {
	    if (!this.isPending()) return;
	    var len = this._length();
	    var progress = this._progress;
	    for (var i = 0; i < len; i++) {
	        var handler = this._progressHandlerAt(i);
	        var promise = this._promiseAt(i);
	        if (!(promise instanceof Promise)) {
	            var receiver = this._receiverAt(i);
	            if (typeof handler === "function") {
	                handler.call(receiver, progressValue, promise);
	            } else if (receiver instanceof Promise && receiver._isProxied()) {
	                receiver._progressUnchecked(progressValue);
	            } else if (receiver instanceof PromiseArray) {
	                receiver._promiseProgressed(progressValue, promise);
	            }
	            continue;
	        }
	
	        if (typeof handler === "function") {
	            async.invoke(this._doProgressWith, this, {
	                handler: handler,
	                promise: promise,
	                receiver: this._receiverAt(i),
	                value: progressValue
	            });
	        } else {
	            async.invoke(progress, promise, progressValue);
	        }
	    }
	};
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var errors = __webpack_require__(35);
	var canAttach = errors.canAttach;
	var async = __webpack_require__(34);
	var CancellationError = errors.CancellationError;
	
	Promise.prototype._cancel = function Promise$_cancel(reason) {
	    if (!this.isCancellable()) return this;
	    var parent;
	    var promiseToReject = this;
	    while ((parent = promiseToReject._cancellationParent) !== void 0 &&
	        parent.isCancellable()) {
	        promiseToReject = parent;
	    }
	    this._unsetCancellable();
	    promiseToReject._attachExtraTrace(reason);
	    promiseToReject._rejectUnchecked(reason);
	};
	
	Promise.prototype.cancel = function Promise$cancel(reason) {
	    if (!this.isCancellable()) return this;
	    reason = reason !== void 0
	        ? (canAttach(reason) ? reason : new Error(reason + ""))
	        : new CancellationError();
	    async.invokeLater(this._cancel, this, reason);
	    return this;
	};
	
	Promise.prototype.cancellable = function Promise$cancellable() {
	    if (this._cancellable()) return this;
	    this._setCancellable();
	    this._cancellationParent = void 0;
	    return this;
	};
	
	Promise.prototype.uncancellable = function Promise$uncancellable() {
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 2 | 4);
	    ret._follow(this);
	    ret._unsetCancellable();
	    return ret;
	};
	
	Promise.prototype.fork =
	function Promise$fork(didFulfill, didReject, didProgress) {
	    var ret = this._then(didFulfill, didReject, didProgress,
	                         void 0, void 0);
	
	    ret._setCancellable();
	    ret._cancellationParent = void 0;
	    return ret;
	};
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseMap = Promise.map;
	
	Promise.prototype.filter = function Promise$filter(fn, options) {
	    return PromiseMap(this, fn, options, INTERNAL);
	};
	
	Promise.filter = function Promise$Filter(promises, fn, options) {
	    return PromiseMap(promises, fn, options, INTERNAL);
	};
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise) {
	var SomePromiseArray = Promise._SomePromiseArray;
	function Promise$_Any(promises) {
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    if (promise.isRejected()) {
	        return promise;
	    }
	    ret.setHowMany(1);
	    ret.setUnwrap();
	    ret.init();
	    return promise;
	}
	
	Promise.any = function Promise$Any(promises) {
	    return Promise$_Any(promises);
	};
	
	Promise.prototype.any = function Promise$any() {
	    return Promise$_Any(this);
	};
	
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseReduce = Promise.reduce;
	
	Promise.prototype.each = function Promise$each(fn) {
	    return PromiseReduce(this, fn, null, INTERNAL);
	};
	
	Promise.each = function Promise$Each(promises, fn) {
	    return PromiseReduce(promises, fn, null, INTERNAL);
	};
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	module.exports = function (Promise, apiRejection, cast) {
	    var TypeError = __webpack_require__(35).TypeError;
	    var inherits = __webpack_require__(33).inherits;
	    var PromiseInspection = Promise.PromiseInspection;
	
	    function inspectionMapper(inspections) {
	        var len = inspections.length;
	        for (var i = 0; i < len; ++i) {
	            var inspection = inspections[i];
	            if (inspection.isRejected()) {
	                return Promise.reject(inspection.error());
	            }
	            inspections[i] = inspection.value();
	        }
	        return inspections;
	    }
	
	    function thrower(e) {
	        setTimeout(function(){throw e;}, 0);
	    }
	
	    function castPreservingDisposable(thenable) {
	        var maybePromise = cast(thenable, void 0);
	        if (maybePromise !== thenable &&
	            typeof thenable._isDisposable === "function" &&
	            typeof thenable._getDisposer === "function" &&
	            thenable._isDisposable()) {
	            maybePromise._setDisposable(thenable._getDisposer());
	        }
	        return maybePromise;
	    }
	    function dispose(resources, inspection) {
	        var i = 0;
	        var len = resources.length;
	        var ret = Promise.defer();
	        function iterator() {
	            if (i >= len) return ret.resolve();
	            var maybePromise = castPreservingDisposable(resources[i++]);
	            if (maybePromise instanceof Promise &&
	                maybePromise._isDisposable()) {
	                try {
	                    maybePromise = cast(maybePromise._getDisposer()
	                                        .tryDispose(inspection), void 0);
	                } catch (e) {
	                    return thrower(e);
	                }
	                if (maybePromise instanceof Promise) {
	                    return maybePromise._then(iterator, thrower,
	                                              null, null, null);
	                }
	            }
	            iterator();
	        }
	        iterator();
	        return ret.promise;
	    }
	
	    function disposerSuccess(value) {
	        var inspection = new PromiseInspection();
	        inspection._settledValue = value;
	        inspection._bitField = 268435456;
	        return dispose(this, inspection).thenReturn(value);
	    }
	
	    function disposerFail(reason) {
	        var inspection = new PromiseInspection();
	        inspection._settledValue = reason;
	        inspection._bitField = 134217728;
	        return dispose(this, inspection).thenThrow(reason);
	    }
	
	    function Disposer(data, promise) {
	        this._data = data;
	        this._promise = promise;
	    }
	
	    Disposer.prototype.data = function Disposer$data() {
	        return this._data;
	    };
	
	    Disposer.prototype.promise = function Disposer$promise() {
	        return this._promise;
	    };
	
	    Disposer.prototype.resource = function Disposer$resource() {
	        if (this.promise().isFulfilled()) {
	            return this.promise().value();
	        }
	        return null;
	    };
	
	    Disposer.prototype.tryDispose = function(inspection) {
	        var resource = this.resource();
	        var ret = resource !== null
	            ? this.doDispose(resource, inspection) : null;
	        this._promise._unsetDisposable();
	        this._data = this._promise = null;
	        return ret;
	    };
	
	    Disposer.isDisposer = function Disposer$isDisposer(d) {
	        return (d != null &&
	                typeof d.resource === "function" &&
	                typeof d.tryDispose === "function");
	    };
	
	    function FunctionDisposer(fn, promise) {
	        this.constructor$(fn, promise);
	    }
	    inherits(FunctionDisposer, Disposer);
	
	    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	        var fn = this.data();
	        return fn.call(resource, resource, inspection);
	    };
	
	    Promise.using = function Promise$using() {
	        var len = arguments.length;
	        if (len < 2) return apiRejection(
	                        "you must pass at least 2 arguments to Promise.using");
	        var fn = arguments[len - 1];
	        if (typeof fn !== "function") return apiRejection("fn must be a function");
	        len--;
	        var resources = new Array(len);
	        for (var i = 0; i < len; ++i) {
	            var resource = arguments[i];
	            if (Disposer.isDisposer(resource)) {
	                var disposer = resource;
	                resource = resource.promise();
	                resource._setDisposable(disposer);
	            }
	            resources[i] = resource;
	        }
	
	        return Promise.settle(resources)
	            .then(inspectionMapper)
	            .spread(fn)
	            ._then(disposerSuccess, disposerFail, void 0, resources, void 0);
	    };
	
	    Promise.prototype._setDisposable =
	    function Promise$_setDisposable(disposer) {
	        this._bitField = this._bitField | 262144;
	        this._disposer = disposer;
	    };
	
	    Promise.prototype._isDisposable = function Promise$_isDisposable() {
	        return (this._bitField & 262144) > 0;
	    };
	
	    Promise.prototype._getDisposer = function Promise$_getDisposer() {
	        return this._disposer;
	    };
	
	    Promise.prototype._unsetDisposable = function Promise$_unsetDisposable() {
	        this._bitField = this._bitField & (~262144);
	        this._disposer = void 0;
	    };
	
	    Promise.prototype.disposer = function Promise$disposer(fn) {
	        if (typeof fn === "function") {
	            return new FunctionDisposer(fn, this);
	        }
	        throw new TypeError();
	    };
	
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;
	
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }
	
	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	}
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var used = []
	  , exports = module.exports = {};
	
	/*!
	 * Chai version
	 */
	
	exports.version = '1.9.1';
	
	/*!
	 * Assertion Error
	 */
	
	exports.AssertionError = __webpack_require__(75);
	
	/*!
	 * Utils for plugins (not exported)
	 */
	
	var util = __webpack_require__(70);
	
	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */
	
	exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }
	
	  return this;
	};
	
	/*!
	 * Configuration
	 */
	
	var config = __webpack_require__(68);
	exports.config = config;
	
	/*!
	 * Primary `Assertion` prototype
	 */
	
	var assertion = __webpack_require__(69);
	exports.use(assertion);
	
	/*!
	 * Core Assertions
	 */
	
	var core = __webpack_require__(71);
	exports.use(core);
	
	/*!
	 * Expect interface
	 */
	
	var expect = __webpack_require__(72);
	exports.use(expect);
	
	/*!
	 * Should interface
	 */
	
	var should = __webpack_require__(73);
	exports.use(should);
	
	/*!
	 * Assert interface
	 */
	
	var assert = __webpack_require__(74);
	exports.use(assert);


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	var isES5 = (function(){
	    "use strict";
	    return this === void 0;
	})();
	
	if (isES5) {
	    module.exports = {
	        freeze: Object.freeze,
	        defineProperty: Object.defineProperty,
	        keys: Object.keys,
	        getPrototypeOf: Object.getPrototypeOf,
	        isArray: Array.isArray,
	        isES5: isES5
	    };
	} else {
	    var has = {}.hasOwnProperty;
	    var str = {}.toString;
	    var proto = {}.constructor.prototype;
	
	    var ObjectKeys = function ObjectKeys(o) {
	        var ret = [];
	        for (var key in o) {
	            if (has.call(o, key)) {
	                ret.push(key);
	            }
	        }
	        return ret;
	    }
	
	    var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
	        o[key] = desc.value;
	        return o;
	    }
	
	    var ObjectFreeze = function ObjectFreeze(obj) {
	        return obj;
	    }
	
	    var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
	        try {
	            return Object(obj).constructor.prototype;
	        }
	        catch (e) {
	            return proto;
	        }
	    }
	
	    var ArrayIsArray = function ArrayIsArray(obj) {
	        try {
	            return str.call(obj) === "[object Array]";
	        }
	        catch(e) {
	            return false;
	        }
	    }
	
	    module.exports = {
	        isArray: ArrayIsArray,
	        keys: ObjectKeys,
	        defineProperty: ObjectDefineProperty,
	        freeze: ObjectFreeze,
	        getPrototypeOf: ObjectGetPrototypeOf,
	        isES5: isES5
	    };
	}


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	var schedule;
	var _MutationObserver;
	if (typeof process === "object" && typeof process.version === "string") {
	    schedule = function Promise$_Scheduler(fn) {
	        process.nextTick(fn);
	    };
	}
	else if ((typeof MutationObserver !== "undefined" &&
	         (_MutationObserver = MutationObserver)) ||
	         (typeof WebKitMutationObserver !== "undefined" &&
	         (_MutationObserver = WebKitMutationObserver))) {
	    schedule = (function() {
	        var div = document.createElement("div");
	        var queuedFn = void 0;
	        var observer = new _MutationObserver(
	            function Promise$_Scheduler() {
	                var fn = queuedFn;
	                queuedFn = void 0;
	                fn();
	            }
	       );
	        observer.observe(div, {
	            attributes: true
	        });
	        return function Promise$_Scheduler(fn) {
	            queuedFn = fn;
	            div.classList.toggle("foo");
	        };
	
	    })();
	}
	else if (typeof setTimeout !== "undefined") {
	    schedule = function Promise$_Scheduler(fn) {
	        setTimeout(fn, 0);
	    };
	}
	else throw new Error("no async scheduler available");
	module.exports = schedule;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2014 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:</p>
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	"use strict";
	function arrayCopy(src, srcIndex, dst, dstIndex, len) {
	    for (var j = 0; j < len; ++j) {
	        dst[j + dstIndex] = src[j + srcIndex];
	    }
	}
	
	function Queue(capacity) {
	    this._capacity = capacity;
	    this._length = 0;
	    this._front = 0;
	    this._makeCapacity();
	}
	
	Queue.prototype._willBeOverCapacity =
	function Queue$_willBeOverCapacity(size) {
	    return this._capacity < size;
	};
	
	Queue.prototype._pushOne = function Queue$_pushOne(arg) {
	    var length = this.length();
	    this._checkCapacity(length + 1);
	    var i = (this._front + length) & (this._capacity - 1);
	    this[i] = arg;
	    this._length = length + 1;
	};
	
	Queue.prototype.push = function Queue$push(fn, receiver, arg) {
	    var length = this.length() + 3;
	    if (this._willBeOverCapacity(length)) {
	        this._pushOne(fn);
	        this._pushOne(receiver);
	        this._pushOne(arg);
	        return;
	    }
	    var j = this._front + length - 3;
	    this._checkCapacity(length);
	    var wrapMask = this._capacity - 1;
	    this[(j + 0) & wrapMask] = fn;
	    this[(j + 1) & wrapMask] = receiver;
	    this[(j + 2) & wrapMask] = arg;
	    this._length = length;
	};
	
	Queue.prototype.shift = function Queue$shift() {
	    var front = this._front,
	        ret = this[front];
	
	    this[front] = void 0;
	    this._front = (front + 1) & (this._capacity - 1);
	    this._length--;
	    return ret;
	};
	
	Queue.prototype.length = function Queue$length() {
	    return this._length;
	};
	
	Queue.prototype._makeCapacity = function Queue$_makeCapacity() {
	    var len = this._capacity;
	    for (var i = 0; i < len; ++i) {
	        this[i] = void 0;
	    }
	};
	
	Queue.prototype._checkCapacity = function Queue$_checkCapacity(size) {
	    if (this._capacity < size) {
	        this._resizeTo(this._capacity << 3);
	    }
	};
	
	Queue.prototype._resizeTo = function Queue$_resizeTo(capacity) {
	    var oldFront = this._front;
	    var oldCapacity = this._capacity;
	    var oldQueue = new Array(oldCapacity);
	    var length = this.length();
	
	    arrayCopy(this, 0, oldQueue, 0, oldCapacity);
	    this._capacity = capacity;
	    this._makeCapacity();
	    this._front = 0;
	    if (oldFront + length <= oldCapacity) {
	        arrayCopy(oldQueue, oldFront, this, 0, length);
	    } else {        var lengthBeforeWrapping =
	            length - ((oldFront + length) & (oldCapacity - 1));
	
	        arrayCopy(oldQueue, oldFront, this, 0, lengthBeforeWrapping);
	        arrayCopy(oldQueue, 0, this, lengthBeforeWrapping,
	                    length - lengthBeforeWrapping);
	    }
	};
	
	module.exports = Queue;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	   includeStack: false,
	
	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	  showDiff: true,
	
	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded,
	   * the value is truncated.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */
	
	  truncateThreshold: 40
	
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(68);
	
	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */
	
	  var AssertionError = _chai.AssertionError
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  _chai.Assertion = Assertion;
	
	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */
	
	  function Assertion (obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }
	
	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function() {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function(value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });
	
	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function() {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function(value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });
	
	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };
	
	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };
	
	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  /*!
	   * ### .assert(expression, message, negateMessage, expected, actual)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String} message to display if fails
	   * @param {String} negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @api private
	   */
	
	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;
	
	    if (!ok) {
	      var msg = util.getMessage(this, arguments)
	        , actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	          actual: actual
	        , expected: expected
	        , showDiff: showDiff
	      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
	    }
	  };
	
	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */
	
	  Object.defineProperty(Assertion.prototype, '_obj',
	    { get: function () {
	        return flag(this, 'object');
	      }
	    , set: function (val) {
	        flag(this, 'object', val);
	      }
	  });
	};


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Main exports
	 */
	
	var exports = module.exports = {};
	
	/*!
	 * test utility
	 */
	
	exports.test = __webpack_require__(76);
	
	/*!
	 * type utility
	 */
	
	exports.type = __webpack_require__(77);
	
	/*!
	 * message utility
	 */
	
	exports.getMessage = __webpack_require__(78);
	
	/*!
	 * actual utility
	 */
	
	exports.getActual = __webpack_require__(79);
	
	/*!
	 * Inspect util
	 */
	
	exports.inspect = __webpack_require__(80);
	
	/*!
	 * Object Display util
	 */
	
	exports.objDisplay = __webpack_require__(81);
	
	/*!
	 * Flag utility
	 */
	
	exports.flag = __webpack_require__(82);
	
	/*!
	 * Flag transferring utility
	 */
	
	exports.transferFlags = __webpack_require__(83);
	
	/*!
	 * Deep equal utility
	 */
	
	exports.eql = __webpack_require__(92);
	
	/*!
	 * Deep path value
	 */
	
	exports.getPathValue = __webpack_require__(84);
	
	/*!
	 * Function name
	 */
	
	exports.getName = __webpack_require__(85);
	
	/*!
	 * add Property
	 */
	
	exports.addProperty = __webpack_require__(86);
	
	/*!
	 * add Method
	 */
	
	exports.addMethod = __webpack_require__(87);
	
	/*!
	 * overwrite Property
	 */
	
	exports.overwriteProperty = __webpack_require__(88);
	
	/*!
	 * overwrite Method
	 */
	
	exports.overwriteMethod = __webpack_require__(89);
	
	/*!
	 * Add a chainable method
	 */
	
	exports.addChainableMethod = __webpack_require__(90);
	
	/*!
	 * Overwrite chainable method
	 */
	
	exports.overwriteChainableMethod = __webpack_require__(91);
	


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion
	    , toString = Object.prototype.toString
	    , flag = _.flag;
	
	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @api public
	   */
	
	  [ 'to', 'be', 'been'
	  , 'is', 'and', 'has', 'have'
	  , 'with', 'that', 'at'
	  , 'of', 'same' ].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });
	
	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @api public
	   */
	
	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });
	
	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * @name deep
	   * @api public
	   */
	
	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });
	
	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function an (type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object')
	      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';
	
	    this.assert(
	        type === _.type(obj)
	      , 'expected #{this} to be ' + article + type
	      , 'expected #{this} not to be ' + article + type
	    );
	  }
	
	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);
	
	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contain` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function includeChainingBehavior () {
	    flag(this, 'contains', true);
	  }
	
	  function include (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;
	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {}
	      for (var k in val) subset[k] = obj[k]
	      expected = _.eql(subset, val);
	    } else {
	      expected = obj && ~obj.indexOf(val)
	    }
	    this.assert(
	        expected
	      , 'expected #{this} to include ' + _.inspect(val)
	      , 'expected #{this} to not include ' + _.inspect(val));
	  }
	
	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	
	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everthing').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * @name ok
	   * @api public
	   */
	
	  Assertion.addProperty('ok', function () {
	    this.assert(
	        flag(this, 'object')
	      , 'expected #{this} to be truthy'
	      , 'expected #{this} to be falsy');
	  });
	
	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * @name true
	   * @api public
	   */
	
	  Assertion.addProperty('true', function () {
	    this.assert(
	        true === flag(this, 'object')
	      , 'expected #{this} to be true'
	      , 'expected #{this} to be false'
	      , this.negate ? false : true
	    );
	  });
	
	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * @name false
	   * @api public
	   */
	
	  Assertion.addProperty('false', function () {
	    this.assert(
	        false === flag(this, 'object')
	      , 'expected #{this} to be false'
	      , 'expected #{this} to be true'
	      , this.negate ? true : false
	    );
	  });
	
	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).not.to.be.null;
	   *
	   * @name null
	   * @api public
	   */
	
	  Assertion.addProperty('null', function () {
	    this.assert(
	        null === flag(this, 'object')
	      , 'expected #{this} to be null'
	      , 'expected #{this} not to be null'
	    );
	  });
	
	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * @name undefined
	   * @api public
	   */
	
	  Assertion.addProperty('undefined', function () {
	    this.assert(
	        undefined === flag(this, 'object')
	      , 'expected #{this} to be undefined'
	      , 'expected #{this} not to be undefined'
	    );
	  });
	
	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * @name exist
	   * @api public
	   */
	
	  Assertion.addProperty('exist', function () {
	    this.assert(
	        null != flag(this, 'object')
	      , 'expected #{this} to exist'
	      , 'expected #{this} to not exist'
	    );
	  });
	
	
	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * @name empty
	   * @api public
	   */
	
	  Assertion.addProperty('empty', function () {
	    var obj = flag(this, 'object')
	      , expected = obj;
	
	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }
	
	    this.assert(
	        !expected
	      , 'expected #{this} to be empty'
	      , 'expected #{this} not to be empty'
	    );
	  });
	
	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @api public
	   */
	
	  function checkArguments () {
	    var obj = flag(this, 'object')
	      , type = Object.prototype.toString.call(obj);
	    this.assert(
	        '[object Arguments]' === type
	      , 'expected #{this} to be arguments but got ' + type
	      , 'expected #{this} to not be arguments'
	    );
	  }
	
	  Assertion.addProperty('arguments', checkArguments);
	  Assertion.addProperty('Arguments', checkArguments);
	
	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertEqual (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(
	          val === obj
	        , 'expected #{this} to equal #{exp}'
	        , 'expected #{this} to not equal #{exp}'
	        , val
	        , this._obj
	        , true
	      );
	    }
	  }
	
	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);
	
	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(
	        _.eql(obj, flag(this, 'object'))
	      , 'expected #{this} to deeply equal #{exp}'
	      , 'expected #{this} to not deeply equal #{exp}'
	      , obj
	      , this._obj
	      , true
	    );
	  }
	
	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);
	
	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertAbove (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len > n
	        , 'expected #{this} to have a length above #{exp} but got #{act}'
	        , 'expected #{this} to not have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj > n
	        , 'expected #{this} to be above ' + n
	        , 'expected #{this} to be at most ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);
	
	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertLeast (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= n
	        , 'expected #{this} to have a length at least #{exp} but got #{act}'
	        , 'expected #{this} to have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj >= n
	        , 'expected #{this} to be at least ' + n
	        , 'expected #{this} to be below ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);
	
	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertBelow (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len < n
	        , 'expected #{this} to have a length below #{exp} but got #{act}'
	        , 'expected #{this} to not have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj < n
	        , 'expected #{this} to be below ' + n
	        , 'expected #{this} to be at least ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);
	
	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertMost (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len <= n
	        , 'expected #{this} to have a length at most #{exp} but got #{act}'
	        , 'expected #{this} to have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj <= n
	        , 'expected #{this} to be at most ' + n
	        , 'expected #{this} to be above ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);
	
	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= start && len <= finish
	        , 'expected #{this} to have a length within ' + range
	        , 'expected #{this} to not have a length within ' + range
	      );
	    } else {
	      this.assert(
	          obj >= start && obj <= finish
	        , 'expected #{this} to be within ' + range
	        , 'expected #{this} to not be within ' + range
	      );
	    }
	  });
	
	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @api public
	   */
	
	  function assertInstanceOf (constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(
	        flag(this, 'object') instanceof constructor
	      , 'expected #{this} to be an instance of ' + name
	      , 'expected #{this} to not be an instance of ' + name
	    );
	  };
	
	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);
	
	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @api public
	   */
	
	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);
	
	    var descriptor = flag(this, 'deep') ? 'deep property ' : 'property '
	      , negate = flag(this, 'negate')
	      , obj = flag(this, 'object')
	      , value = flag(this, 'deep')
	        ? _.getPathValue(name, obj)
	        : obj[name];
	
	    if (negate && undefined !== val) {
	      if (undefined === value) {
	        msg = (msg != null) ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(
	          undefined !== value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
	        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }
	
	    if (undefined !== val) {
	      this.assert(
	          val === value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
	        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
	        , val
	        , value
	      );
	    }
	
	    flag(this, 'object', value);
	  });
	
	
	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertOwnProperty (name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        obj.hasOwnProperty(name)
	      , 'expected #{this} to have own property ' + _.inspect(name)
	      , 'expected #{this} to not have own property ' + _.inspect(name)
	    );
	  }
	
	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);
	
	  /**
	   * ### .length(value)
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.length(3);
	   *     expect('foobar').to.have.length(6);
	   *
	   * Can also be used as a chain precursor to a value
	   * comparison for the length property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name length
	   * @alias lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertLengthChain () {
	    flag(this, 'doLength', true);
	  }
	
	  function assertLength (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;
	
	    this.assert(
	        len == n
	      , 'expected #{this} to have a length of #{exp} but got #{act}'
	      , 'expected #{this} to not have a length of #{act}'
	      , n
	      , len
	    );
	  }
	
	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength, assertLengthChain);
	
	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('match', function (re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        re.exec(obj)
	      , 'expected #{this} to match ' + re
	      , 'expected #{this} not to match ' + re
	    );
	  });
	
	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');
	
	    this.assert(
	        ~obj.indexOf(str)
	      , 'expected #{this} to contain ' + _.inspect(str)
	      , 'expected #{this} to not contain ' + _.inspect(str)
	    );
	  });
	
	
	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target has exactly the given keys, or
	   * asserts the inclusion of some keys when using the
	   * `include` or `contain` modifiers.
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
	   *
	   * @name keys
	   * @alias key
	   * @param {String...|Array} keys
	   * @api public
	   */
	
	  function assertKeys (keys) {
	    var obj = flag(this, 'object')
	      , str
	      , ok = true;
	
	    keys = keys instanceof Array
	      ? keys
	      : Array.prototype.slice.call(arguments);
	
	    if (!keys.length) throw new Error('keys required');
	
	    var actual = Object.keys(obj)
	      , len = keys.length;
	
	    // Inclusion
	    ok = keys.every(function(key){
	      return ~actual.indexOf(key);
	    });
	
	    // Strict
	    if (!flag(this, 'negate') && !flag(this, 'contains')) {
	      ok = ok && keys.length == actual.length;
	    }
	
	    // Key string
	    if (len > 1) {
	      keys = keys.map(function(key){
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      str = keys.join(', ') + ', and ' + last;
	    } else {
	      str = _.inspect(keys[0]);
	    }
	
	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;
	
	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;
	
	    // Assertion
	    this.assert(
	        ok
	      , 'expected #{this} to ' + str
	      , 'expected #{this} to not ' + str
	    );
	  }
	
	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);
	
	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *     expect(fn).to.not.throw(new RangeError('Out of range.'));
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @api public
	   */
	
	  function assertThrows (constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');
	
	    var thrown = false
	      , desiredError = null
	      , name = null
	      , thrownError = null;
	
	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name || constructor.name;
	      if (name === 'Error' && constructor !== Error) {
	        name = (new constructor()).name;
	      }
	    } else {
	      constructor = null;
	    }
	
	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(
	            err === desiredError
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp}'
	          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        flag(this, 'object', err);
	        return this;
	      }
	
	      // next, check constructor
	      if (constructor) {
	        this.assert(
	            err instanceof constructor
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
	          , name
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }
	
	      // next, check message
	      var message = 'object' === _.type(err) && "message" in err
	        ? err.message
	        : '' + err;
	
	      if ((message != null) && errMsg && errMsg instanceof RegExp) {
	        this.assert(
	            errMsg.exec(message)
	          , 'expected #{this} to throw error matching #{exp} but got #{act}'
	          , 'expected #{this} to throw error not matching #{exp}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
	        this.assert(
	            ~message.indexOf(errMsg)
	          , 'expected #{this} to throw error including #{exp} but got #{act}'
	          , 'expected #{this} to throw error not including #{act}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }
	
	    var actuallyGot = ''
	      , expectedThrown = name !== null
	        ? name
	        : desiredError
	          ? '#{exp}' //_.inspect(desiredError)
	          : 'an error';
	
	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown'
	    }
	
	    this.assert(
	        thrown === true
	      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
	      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
	      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
	    );
	
	    flag(this, 'object', thrownError);
	  };
	
	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);
	
	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('respondTo', function (method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , itself = flag(this, 'itself')
	      , context = ('function' === _.type(obj) && !itself)
	        ? obj.prototype[method]
	        : obj[method];
	
	    this.assert(
	        'function' === typeof context
	      , 'expected #{this} to respond to ' + _.inspect(method)
	      , 'expected #{this} to not respond to ' + _.inspect(method)
	    );
	  });
	
	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @api public
	   */
	
	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });
	
	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('satisfy', function (matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        matcher(obj)
	      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
	      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
	      , this.negate ? false : true
	      , matcher(obj)
	    );
	  });
	
	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('closeTo', function (expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        Math.abs(obj - expected) <= delta
	      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
	      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
	    );
	  });
	
	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function(elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;
	
	      return superset.some(function(elem2) {
	        return cmp(elem, elem2);
	      });
	    })
	  }
	
	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	
	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');
	
	    var cmp = flag(this, 'deep') ? _.eql : undefined;
	
	    if (flag(this, 'contains')) {
	      return this.assert(
	          isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to be a superset of #{act}'
	        , 'expected #{this} to not be a superset of #{act}'
	        , obj
	        , subset
	      );
	    }
	
	    this.assert(
	        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to have the same members as #{act}'
	        , 'expected #{this} to not have the same members as #{act}'
	        , obj
	        , subset
	    );
	  });
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };
	};
	


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;
	
	  function loadShould () {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number) {
	        return new Assertion(this.constructor(this), null, shouldGetter);
	      } else if (this instanceof Boolean) {
	        return new Assertion(this == true, null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter
	      , get: shouldGetter
	      , configurable: true
	    });
	
	    var should = {};
	
	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };
	
	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };
	
	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    }
	
	    // negation
	    should.not = {}
	
	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };
	
	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };
	
	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    }
	
	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];
	
	    return should;
	  };
	
	  chai.should = loadShould;
	  chai.Should = loadShould;
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	
	module.exports = function (chai, util) {
	
	  /*!
	   * Chai dependencies.
	   */
	
	  var Assertion = chai.Assertion
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @api public
	   */
	
	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(
	        express
	      , errmsg
	      , '[ negation message unavailable ]'
	    );
	  };
	
	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @api public
	   */
	
	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, assert.fail);
	  };
	
	  /**
	   * ### .ok(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.ok('everything', 'everything is ok');
	   *     assert.ok(false, 'this will fail');
	   *
	   * @name ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @api public
	   */
	
	  assert.ok = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };
	
	  /**
	   * ### .notOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.notOk('everything', 'this will fail');
	   *     assert.notOk(false, 'this will pass');
	   *
	   * @name notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };
	
	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);
	
	    test.assert(
	        exp == flag(test, 'object')
	      , 'expected #{this} to equal #{exp}'
	      , 'expected #{this} to not equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);
	
	    test.assert(
	        exp != flag(test, 'object')
	      , 'expected #{this} to not equal #{exp}'
	      , 'expected #{this} to equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };
	
	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };
	
	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };
	
	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };
	
	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };
	
	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };
	
	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };
	
	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };
	
	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };
	
	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };
	
	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };
	
	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };
	
	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object (as revealed by
	   * `Object.prototype.toString`).
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };
	
	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object.
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };
	
	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };
	
	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };
	
	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };
	
	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };
	
	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };
	
	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };
	
	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };
	
	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };
	
	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @api public
	   */
	
	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };
	
	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };
	
	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @api public
	   */
	
	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };
	
	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };
	
	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @api public
	   */
	
	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };
	
	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *i
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };
	
	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @api public
	   */
	
	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };
	
	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };
	
	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };
	
	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };
	
	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };
	
	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };
	
	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };
	
	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 5, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @api public
	   */
	
	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };
	
	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throw(fn, 'function throws a reference error');
	   *     assert.throw(fn, /function throws a reference error/);
	   *     assert.throw(fn, ReferenceError);
	   *     assert.throw(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throw(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @api public
	   */
	
	  assert.Throw = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }
	
	    var assertErr = new Assertion(fn, msg).to.Throw(errt, errs);
	    return flag(assertErr, 'object');
	  };
	
	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @api public
	   */
	
	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }
	
	    new Assertion(fn, msg).to.not.Throw(type);
	  };
	
	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @api public
	   */
	
	  assert.operator = function (val, operator, val2, msg) {
	    if (!~['==', '===', '>', '>=', '<', '<=', '!=', '!=='].indexOf(operator)) {
	      throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(eval(val + operator + val2), msg);
	    test.assert(
	        true === flag(test, 'object')
	      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
	      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
	  };
	
	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @api public
	   */
	
	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };
	
	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @api public
	   */
	
	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  }
	
	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @api public
	   */
	
	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  }
	
	  /*!
	   * Undocumented / untested
	   */
	
	  assert.ifError = function (val, msg) {
	    new Assertion(val, msg).to.not.be.ok;
	  };
	
	  /*!
	   * Aliases.
	   */
	
	  (function alias(name, as){
	    assert[as] = assert[name];
	    return alias;
	  })
	  ('Throw', 'throw')
	  ('Throw', 'throws');
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */
	
	function exclude () {
	  var excludes = [].slice.call(arguments);
	
	  function excludeProps (res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }
	
	  return function extendExclude () {
	    var args = [].slice.call(arguments)
	      , i = 0
	      , res = {};
	
	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }
	
	    return res;
	  };
	};
	
	/*!
	 * Primary Exports
	 */
	
	module.exports = AssertionError;
	
	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */
	
	function AssertionError (message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
	    , props = extend(_props || {});
	
	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;
	
	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }
	
	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  }
	}
	
	/*!
	 * Inherit from Error.prototype
	 */
	
	AssertionError.prototype = Object.create(Error.prototype);
	
	/*!
	 * Statically set name
	 */
	
	AssertionError.prototype.name = 'AssertionError';
	
	/*!
	 * Ensure correct constructor
	 */
	
	AssertionError.prototype.constructor = AssertionError;
	
	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */
	
	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack')
	    , props = extend({ name: this.name }, this);
	
	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }
	
	  return props;
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(82);
	
	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , expr = args[0];
	  return negate ? !expr : expr;
	};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - type utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Detectable javascript natives
	 */
	
	var natives = {
	    '[object Arguments]': 'arguments'
	  , '[object Array]': 'array'
	  , '[object Date]': 'date'
	  , '[object Function]': 'function'
	  , '[object Number]': 'number'
	  , '[object RegExp]': 'regexp'
	  , '[object String]': 'string'
	};
	
	/**
	 * ### type(object)
	 *
	 * Better implementation of `typeof` detection that can
	 * be used cross-browser. Handles the inconsistencies of
	 * Array, `null`, and `undefined` detection.
	 *
	 *     utils.type({}) // 'object'
	 *     utils.type(null) // `null'
	 *     utils.type(undefined) // `undefined`
	 *     utils.type([]) // `array`
	 *
	 * @param {Mixed} object to detect type of
	 * @name type
	 * @api private
	 */
	
	module.exports = function (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(82)
	  , getActual = __webpack_require__(79)
	  , inspect = __webpack_require__(80)
	  , objDisplay = __webpack_require__(81);
	
	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @name getMessage
	 * @api public
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , val = flag(obj, 'object')
	    , expected = args[3]
	    , actual = getActual(obj, args)
	    , msg = negate ? args[2] : args[1]
	    , flagMsg = flag(obj, 'message');
	
	  msg = msg || '';
	  msg = msg
	    .replace(/#{this}/g, objDisplay(val))
	    .replace(/#{act}/g, objDisplay(actual))
	    .replace(/#{exp}/g, objDisplay(expected));
	
	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 */
	
	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js
	
	var getName = __webpack_require__(85);
	var getProperties = __webpack_require__(93);
	var getEnumerableProperties = __webpack_require__(94);
	
	module.exports = inspect;
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) { return str; }
	  };
	  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
	}
	
	// https://gist.github.com/1044128/
	var getOuterHTML = function(element) {
	  if ('outerHTML' in element) return element.outerHTML;
	  var ns = "http://www.w3.org/1999/xhtml";
	  var container = document.createElementNS(ns, '_');
	  var elemProto = (window.HTMLElement || window.Element).prototype;
	  var xmlSerializer = new XMLSerializer();
	  var html;
	  if (document.xmlVersion) {
	    return xmlSerializer.serializeToString(element);
	  } else {
	    container.appendChild(element.cloneNode(false));
	    html = container.innerHTML.replace('><', '>' + element.innerHTML + '<');
	    container.innerHTML = '';
	    return html;
	  }
	};
	
	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object &&
	      typeof object === 'object' &&
	      object.nodeType === 1 &&
	      typeof object.nodeName === 'string';
	  }
	};
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // If it's DOM elem, get outer HTML.
	  if (isDOMElement(value)) {
	    return getOuterHTML(value);
	  }
	
	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;
	
	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || (isError(value) && (
	      (keys.length === 1 && keys[0] === 'stack') ||
	      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
	     ))) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');
	
	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                               .replace(/'/g, "\\'")
	                                               .replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');
	
	    case 'number':
	      return ctx.stylize('' + value, 'number');
	
	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	function isArray(ar) {
	  return Array.isArray(ar) ||
	         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	}
	
	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}
	
	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}
	
	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var inspect = __webpack_require__(80);
	var config = __webpack_require__(68);
	
	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @api public
	 */
	
	module.exports = function (obj) {
	  var str = inspect(obj)
	    , type = Object.prototype.toString.call(obj);
	
	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === ''
	        ? '[Function]'
	        : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj)
	        , kstr = keys.length > 2
	          ? keys.splice(0, 2).join(', ') + ', ...'
	          : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### flag(object ,key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object (constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @name flag
	 * @api private
	 */
	
	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags too; usually a new assertion
	 * @param {Boolean} includeAll
	 * @name getAllFlags
	 * @api private
	 */
	
	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));
	
	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }
	
	  includeAll = arguments.length === 3 ? includeAll : true;
	
	  for (var flag in flags) {
	    if (includeAll ||
	        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */
	
	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @name getPathValue
	 * @api public
	 */
	
	var getPathValue = module.exports = function (path, obj) {
	  var parsed = parsePath(path);
	  return _getPathValue(parsed, obj);
	};
	
	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */
	
	function parsePath (path) {
	  var str = path.replace(/\[/g, '.[')
	    , parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /\[(\d+)\]$/
	      , mArr = re.exec(value)
	    if (mArr) return { i: parseFloat(mArr[1]) };
	    else return { p: value };
	  });
	};
	
	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */
	
	function _getPathValue (parsed, obj) {
	  var tmp = obj
	    , res;
	  for (var i = 0, l = parsed.length; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p)
	        tmp = tmp[part.p];
	      else if ('undefined' !== typeof part.i)
	        tmp = tmp[part.i];
	      if (i == (l - 1)) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	};


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 */
	
	module.exports = function (func) {
	  if (func.name) return func.name;
	
	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @name addProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter.call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(68);
	
	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(82);
	
	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false)
	      flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @name overwriteProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name)
	    , _super = function () {};
	
	  if (_get && 'function' === typeof _get.get)
	    _super = _get.get
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter(_super).call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @name overwriteMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method) {
	  var _method = ctx[name]
	    , _super = function () { return this; };
	
	  if (_method && 'function' === typeof _method)
	    _super = _method;
	
	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  }
	};


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var transferFlags = __webpack_require__(83);
	var flag = __webpack_require__(82);
	var config = __webpack_require__(68);
	
	/*!
	 * Module variables
	 */
	
	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;
	
	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;
	
	// Cache `Function` properties
	var call  = Function.prototype.call,
	    apply = Function.prototype.apply;
	
	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @name addChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () { };
	  }
	
	  var chainableBehavior = {
	      method: method
	    , chainingBehavior: chainingBehavior
	  };
	
	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        chainableBehavior.chainingBehavior.call(this);
	
	        var assert = function assert() {
	          var old_ssfi = flag(this, 'ssfi');
	          if (old_ssfi && config.includeStack === false)
	            flag(this, 'ssfi', assert);
	          var result = chainableBehavior.method.apply(this, arguments);
	          return result === undefined ? this : result;
	        };
	
	        // Use `__proto__` if available
	        if (hasProtoSupport) {
	          // Inherit all properties from the object by replacing the `Function` prototype
	          var prototype = assert.__proto__ = Object.create(this);
	          // Restore the `call` and `apply` methods from `Function`
	          prototype.call = call;
	          prototype.apply = apply;
	        }
	        // Otherwise, redefine all properties (slow!)
	        else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }
	
	        transferFlags(this, assert);
	        return assert;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteChainableMethod (ctx, name, fn)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @name overwriteChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];
	
	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };
	
	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95);


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @name getProperties
	 * @api public
	 */
	
	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(subject);
	
	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }
	
	  var proto = Object.getPrototypeOf(subject);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return result;
	};


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @name getEnumerableProperties
	 * @api public
	 */
	
	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var type = __webpack_require__(97);
	
	/*!
	 * Buffer.isBuffer browser shim
	 */
	
	var Buffer;
	try { Buffer = __webpack_require__(96).Buffer; }
	catch(ex) {
	  Buffer = {};
	  Buffer.isBuffer = function() { return false; }
	}
	
	/*!
	 * Primary Export
	 */
	
	module.exports = deepEqual;
	
	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */
	
	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if (('object' !== type(a) && 'object' !== type(b))
	  && ('array' !== type(a) && 'array' !== type(b))) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}
	
	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */
	
	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}
	
	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function typeEqual(a, b) {
	  return type(a) === type(b);
	}
	
	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */
	
	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}
	
	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */
	
	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}
	
	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */
	
	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}
	
	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */
	
	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}
	
	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */
	
	function iterableEqual(a, b) {
	  if (a.length !==  b.length) return false;
	
	  var i = 0;
	  var match = true;
	
	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }
	
	  return match;
	}
	
	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}
	
	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */
	
	function isValue(a) {
	  return a !== null && a !== undefined;
	}
	
	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }
	
	  if (a.prototype !== b.prototype) {
	    return false;
	  }
	
	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if ((m[i][0] === a && m[i][1] === b)
	      ||  (m[i][0] === b && m[i][1] === a)) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }
	
	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }
	
	  ka.sort();
	  kb.sort();
	
	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }
	
	  m.push([ a, b ]);
	
	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }
	
	  return true;
	}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	var base64 = __webpack_require__(101)
	var ieee754 = __webpack_require__(100)
	var isArray = __webpack_require__(99)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = Buffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var kMaxLength = 0x3fffffff
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Note:
	 *
	 * - Implementation must support adding new properties to `Uint8Array` instances.
	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *    incorrect length in some situations.
	 *
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
	 * get the Object implementation, which is slower but will work correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (function () {
	  try {
	    var buf = new ArrayBuffer(0)
	    var arr = new Uint8Array(buf)
	    arr.foo = function () { return 42 }
	    return 42 === arr.foo() && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	})()
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (subject, encoding, noZero) {
	  if (!(this instanceof Buffer))
	    return new Buffer(subject, encoding, noZero)
	
	  var type = typeof subject
	
	  // Find the length
	  var length
	  if (type === 'number')
	    length = subject > 0 ? subject >>> 0 : 0
	  else if (type === 'string') {
	    if (encoding === 'base64')
	      subject = base64clean(subject)
	    length = Buffer.byteLength(subject, encoding)
	  } else if (type === 'object' && subject !== null) { // assume object is array-like
	    if (subject.type === 'Buffer' && isArray(subject.data))
	      subject = subject.data
	    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
	  } else
	    throw new TypeError('must start with number, buffer, array or string')
	
	  if (this.length > kMaxLength)
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	      'size: 0x' + kMaxLength.toString(16) + ' bytes')
	
	  var buf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Preferred: Return an augmented `Uint8Array` instance for best performance
	    buf = Buffer._augment(new Uint8Array(length))
	  } else {
	    // Fallback: Return THIS instance of Buffer (created by `new`)
	    buf = this
	    buf.length = length
	    buf._isBuffer = true
	  }
	
	  var i
	  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
	    // Speed optimization -- use set if we're copying from a typed array
	    buf._set(subject)
	  } else if (isArrayish(subject)) {
	    // Treat array-ish objects as a byte array
	    if (Buffer.isBuffer(subject)) {
	      for (i = 0; i < length; i++)
	        buf[i] = subject.readUInt8(i)
	    } else {
	      for (i = 0; i < length; i++)
	        buf[i] = ((subject[i] % 256) + 256) % 256
	    }
	  } else if (type === 'string') {
	    buf.write(subject, 0, encoding)
	  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
	    for (i = 0; i < length; i++) {
	      buf[i] = 0
	    }
	  }
	
	  return buf
	}
	
	Buffer.isBuffer = function (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
	    throw new TypeError('Arguments must be Buffers')
	
	  var x = a.length
	  var y = b.length
	  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function (list, totalLength) {
	  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  } else if (list.length === 1) {
	    return list[0]
	  }
	
	  var i
	  if (totalLength === undefined) {
	    totalLength = 0
	    for (i = 0; i < list.length; i++) {
	      totalLength += list[i].length
	    }
	  }
	
	  var buf = new Buffer(totalLength)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	Buffer.byteLength = function (str, encoding) {
	  var ret
	  str = str + ''
	  switch (encoding || 'utf8') {
	    case 'ascii':
	    case 'binary':
	    case 'raw':
	      ret = str.length
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = str.length * 2
	      break
	    case 'hex':
	      ret = str.length >>> 1
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8ToBytes(str).length
	      break
	    case 'base64':
	      ret = base64ToBytes(str).length
	      break
	    default:
	      ret = str.length
	  }
	  return ret
	}
	
	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined
	
	// toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function (encoding, start, end) {
	  var loweredCase = false
	
	  start = start >>> 0
	  end = end === undefined || end === Infinity ? this.length : end >>> 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase)
	          throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.equals = function (b) {
	  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max)
	      str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b)
	}
	
	// `get` will be removed in Node 0.13+
	Buffer.prototype.get = function (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` will be removed in Node 0.13+
	Buffer.prototype.set = function (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var byte = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(byte)) throw new Error('Invalid hex string')
	    buf[offset + i] = byte
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
	  return charsWritten
	}
	
	function asciiWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
	  return charsWritten
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
	  return charsWritten
	}
	
	function utf16leWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
	  return charsWritten
	}
	
	Buffer.prototype.write = function (string, offset, length, encoding) {
	  // Support both (string, offset, length, encoding)
	  // and the legacy (string, encoding, offset, length)
	  if (isFinite(offset)) {
	    if (!isFinite(length)) {
	      encoding = length
	      length = undefined
	    }
	  } else {  // legacy
	    var swap = encoding
	    encoding = offset
	    offset = length
	    length = swap
	  }
	
	  offset = Number(offset) || 0
	  var remaining = this.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	  encoding = String(encoding || 'utf8').toLowerCase()
	
	  var ret
	  switch (encoding) {
	    case 'hex':
	      ret = hexWrite(this, string, offset, length)
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8Write(this, string, offset, length)
	      break
	    case 'ascii':
	      ret = asciiWrite(this, string, offset, length)
	      break
	    case 'binary':
	      ret = binaryWrite(this, string, offset, length)
	      break
	    case 'base64':
	      ret = base64Write(this, string, offset, length)
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = utf16leWrite(this, string, offset, length)
	      break
	    default:
	      throw new TypeError('Unknown encoding: ' + encoding)
	  }
	  return ret
	}
	
	Buffer.prototype.toJSON = function () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  var res = ''
	  var tmp = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    if (buf[i] <= 0x7F) {
	      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
	      tmp = ''
	    } else {
	      tmp += '%' + buf[i].toString(16)
	    }
	  }
	
	  return res + decodeUtf8Char(tmp)
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  return asciiSlice(buf, start, end)
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len;
	    if (start < 0)
	      start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0)
	      end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start)
	    end = start
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    return Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    var newBuf = new Buffer(sliceLen, undefined, true)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	    return newBuf
	  }
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0)
	    throw new RangeError('offset is not uint')
	  if (offset + ext > length)
	    throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	      ((this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      this[offset + 3])
	}
	
	Buffer.prototype.readInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80))
	    return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16) |
	      (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	      (this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}
	
	Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = value
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = value
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}
	
	Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = value
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function (target, target_start, start, end) {
	  var source = this
	
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (!target_start) target_start = 0
	
	  // Copy 0 bytes; we're done
	  if (end === start) return
	  if (target.length === 0 || source.length === 0) return
	
	  // Fatal error conditions
	  if (end < start) throw new TypeError('sourceEnd < sourceStart')
	  if (target_start < 0 || target_start >= target.length)
	    throw new TypeError('targetStart out of bounds')
	  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
	  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length)
	    end = this.length
	  if (target.length - target_start < end - start)
	    end = target.length - target_start + start
	
	  var len = end - start
	
	  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < len; i++) {
	      target[i + target_start] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), target_start)
	  }
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new TypeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array get/set methods before overwriting
	  arr._get = arr.get
	  arr._set = arr.set
	
	  // deprecated, will be removed in node 0.13+
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-z]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function isArrayish (subject) {
	  return isArray(subject) || Buffer.isBuffer(subject) ||
	      subject && typeof subject === 'object' &&
	      typeof subject.length === 'number'
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    var b = str.charCodeAt(i)
	    if (b <= 0x7F) {
	      byteArray.push(b)
	    } else {
	      var start = i
	      if (b >= 0xD800 && b <= 0xDFFF) i++
	      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
	      for (var j = 0; j < h.length; j++) {
	        byteArray.push(parseInt(h[j], 16))
	      }
	    }
	  }
	  return byteArray
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(str)
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length))
	      break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function decodeUtf8Char (str) {
	  try {
	    return decodeURIComponent(str)
	  } catch (err) {
	    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96).Buffer))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Primary Exports
	 */
	
	var exports = module.exports = getType;
	
	/*!
	 * Detectable javascript natives
	 */
	
	var natives = {
	    '[object Array]': 'array'
	  , '[object RegExp]': 'regexp'
	  , '[object Function]': 'function'
	  , '[object Arguments]': 'arguments'
	  , '[object Date]': 'date'
	};
	
	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	
	function getType (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}
	
	exports.Library = Library;
	
	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */
	
	function Library () {
	  this.tests = {};
	}
	
	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */
	
	Library.prototype.of = getType;
	
	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */
	
	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};
	
	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */
	
	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];
	
	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * isArray
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * toString
	 */
	
	var str = Object.prototype.toString;
	
	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */
	
	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports.read = function(buffer, offset, isLE, mLen, nBytes) {
	  var e, m,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = isLE ? (nBytes - 1) : 0,
	      d = isLE ? -1 : 1,
	      s = buffer[offset + i];
	
	  i += d;
	
	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
	
	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
	
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity);
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	
	exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	      i = isLE ? 0 : (nBytes - 1),
	      d = isLE ? 1 : -1,
	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
	
	  value = Math.abs(value);
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
	
	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
	
	  buffer[offset + i - d] |= s * 128;
	};


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS)
				return 62 // '+'
			if (code === SLASH)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}(false ? (this.base64js = {}) : exports))


/***/ }
/******/ ])