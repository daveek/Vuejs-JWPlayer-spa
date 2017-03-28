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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["LibraryName"] = __webpack_require__(5);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

//const $ = require('./jquery-3.1.1.min.js');
const $ = __webpack_require__(1);
__webpack_require__(0);


    var videoContainer = $('#js-background-video-container'),
        fullPlaylist;

    function setupPlayer() {
        // This flag is used to prevent unnecessary cycles with the time event
        var isReady = false;

        // setting up and configuring instance of JWPlayer
        var backgroundVideo = jwplayer('js-background-video').setup({
            autostart: true,
            controls: false,
            playlist: fullPlaylist,
            mute: true,
            repeat: true,
            stretching: 'fill',
            height: '100%',
            width: '100%'
        });
    /**
     * * When the next playlist item is triggered, we can remove the video's opacity
     */
    backgroundVideo.on('firstFrame', function(e) {
        videoContainer.removeClass('is-fading');
    });

    /**
     * We use the video container's CSS transition-end event to queue up the next
     * video's poster image.
     */

    videoContainer.on('transitionend', function(e) {
        if (!videoContainer.hasClass('is-fading')) {
            setPosterImage();
        }
    }).trigger('transitionend');

    /**
     * Two seconds before the video ends, we take the poster image of the next-up
     * video and set it as the background of the container.
    */
    backgroundVideo.on('time', function(e) {
        if (e.position >= (e.duration - 2) && !isReady) {
            isReady = true;
            videoContainer.addClass('is-fading');
        }
    });
   /**
    * When the video is done, we reset the isReady flag to make sure we can check
    * the time event properly for the next video.
   */
    backgroundVideo.on('complete', function() {
        isReady = false;
    });


  /**
   * setPosterImage just makes sure the poster image is loaded and ready to go
   * before setting the video container background and fading the video out.
   */
    function setPosterImage() {
        var posterImage;
        // Get the next video's playlist index, so we can set the poster image for
        // the fadeout animation
        var nextIndex = backgroundVideo.getPlaylistIndex() + 1;
        nextIndex = nextIndex >= fullPlaylist.length ? 0 : nextIndex;
        posterImage = fullPlaylist[nextIndex]['image'];

        $('<img>').attr('src', posterImage).load(function() {
            $(this).remove();
            videoContainer.css('background-image', 'url(' + posterImage + ')');
        });
    }
    }


    /**
     * If we grab the playlist feed before setting up the player, we can manipulate
     * the playlist object and set up any specific adjustments. For instance, you
     * could shuffle the order of the playlist items.
    */

    $.ajax({
    /**
     * Fun fact: You can use a single video's media ID with the Feeds API and it
     * will return a playlist with one video. Pretty nifty!
    */
    url: '//content.jwplatform.com/feeds/EU8xl6Xv.json',
    dataType: 'JSON'
    }).done(function(data) {
    /**
    * We store the playlist so we can set the background image of the next video
    * for a smooth transition between videos.
    */
        fullPlaylist = data.playlist;
        setupPlayer();
    });


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.2.0
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e);return isNaN(t)?e:t}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Ei.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return Mi.call(e)===Pi}function p(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function d(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){var n=l(e),r=l(t);return n&&r?JSON.stringify(e)===JSON.stringify(t):!n&&!r&&String(e)===String(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=!1;return function(){t||(t=!0,e())}}function y(e){return/native code/.test(e.toString())}function _(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function b(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function $(e){if(!to.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function w(e){io.target&&oo.push(io.target),io.target=e}function C(){io.target=oo.pop()}function x(e,t){e.__proto__=t}function k(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];b(e,o,t[o])}}function A(e,t){if(l(e)){var n;return i(e,"__ob__")&&e.__ob__ instanceof lo?n=e.__ob__:uo.shouldConvert&&!Gi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new lo(e)),t&&n&&n.vmCount++,n}}function O(e,t,n,r){var i=new io,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=A(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return io.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&E(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=A(t),i.notify())}})}}function S(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(O(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function T(e,t){if(Array.isArray(e))return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function E(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&E(t)}function j(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&j(r,o):S(e,n,o);return e}function N(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function I(e,t){var n=Object.create(e||null);return t?u(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=Ni(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Ni(a),o[i]=f(r)?r:{type:r};e.props=o}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function M(e,t,n){function r(r){var i=fo[r]||po;l[r]=i(e[r],t[r],n,r)}L(t),D(t);var o=t.extends;if(o&&(e="function"==typeof o?M(e,o.options,n):M(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof ut&&(c=c.options),e=M(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function P(e,t,n,r){if("string"==typeof n){var o=e[t];if(i(o,n))return o[n];var a=Ni(n);if(i(o,a))return o[a];var s=Ii(a);if(i(o,s))return o[s];var c=o[n]||o[a]||o[s];return c}}function R(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(U(Boolean,o.type)&&(a&&!i(o,"default")?s=!1:U(String,o.type)||""!==s&&s!==Di(e)||(s=!0)),void 0===s){s=F(r,o,e);var c=uo.shouldConvert;uo.shouldConvert=!0,A(s),uo.shouldConvert=c}return s}function F(e,t,n){if(i(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==H(t.type)?r.call(e):r}}function H(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function U(e,t){if(!Array.isArray(t))return H(t)===H(e);for(var n=0,r=t.length;n<r;n++)if(H(t[n])===H(e))return!0;return!1}function B(e,t,n){if(Hi.errorHandler)Hi.errorHandler.call(null,e,t,n);else{if(!Bi||"undefined"==typeof console)throw e;console.error(e)}}function V(e){return new vo(void 0,void 0,void 0,String(e))}function z(e){var t=new vo(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function J(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=z(e[n]);return t}function K(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=0;r<n.length;r++)n[r].apply(null,e)}return t.fns=e,t}function q(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=yo(o),a&&(s?a!==s&&(s.fns=a,e[o]=s):(a.fns||(a=e[o]=K(a)),n(c.name,a,c.once,c.capture)));for(o in t)e[o]||(c=yo(o),r(c.name,t[o],c.capture))}function W(e,t,n){function i(){n.apply(this,arguments),r(o.fns,i)}var o,a=e[t];a?a.fns&&a.merged?(o=a,o.fns.push(i)):o=K([a,i]):o=K([i]),o.merged=!0,e[t]=o}function Z(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function G(e){return o(e)?[V(e)]:Array.isArray(e)?Y(e):void 0}function Y(e,t){var n,r,i,a=[];for(n=0;n<e.length;n++)r=e[n],null!=r&&"boolean"!=typeof r&&(i=a[a.length-1],Array.isArray(r)?a.push.apply(a,Y(r,(t||"")+"_"+n)):o(r)?i&&i.text?i.text+=String(r):""!==r&&a.push(V(r)):r.text&&i&&i.text?a[a.length-1]=V(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),a.push(r)));return a}function Q(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function X(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&ne(e,t)}function ee(e,t,n){n?mo.$once(e,t):mo.$on(e,t)}function te(e,t){mo.$off(e,t)}function ne(e,t,n){mo=e,q(t,n||{},ee,te,e)}function re(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function ie(e,t){var n={};if(!e)return n;for(var r,i,o=[],a=0,s=e.length;a<s;a++)if(i=e[a],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i)}else o.push(i);return o.length&&(1!==o.length||" "!==o[0].text&&!o[0].isComment)&&(n.default=o),n}function oe(e){for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];return t}function ae(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function se(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&de(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=_o;_o=n,n._vnode=e,i?n.$el=n.__patch__(i,e):n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),_o=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){de(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,de(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function ce(e,t,n){e.$el=t,e.$options.render||(e.$options.render=go),de(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new Ao(e,r,d),n=!1,null==e.$vnode&&(e._isMounted=!0,de(e,"mounted")),e}function ue(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==eo);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,t&&e.$options.props){uo.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=R(u,e.$options.props,t,e)}uo.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,ne(e,n,l)}o&&(e.$slots=ie(i,r.context),e.$forceUpdate())}function le(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function fe(e,t){if(t){if(e._directInactive=!1,le(e))return}else if(e._directInactive)return;if(e._inactive||null==e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)fe(e.$children[n]);de(e,"activated")}}function pe(e,t){if(!(t&&(e._directInactive=!0,le(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)pe(e.$children[n]);de(e,"deactivated")}}function de(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){B(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function ve(){bo.length=0,$o={},wo=Co=!1}function he(){Co=!0;var e,t,n;for(bo.sort(function(e,t){return e.id-t.id}),xo=0;xo<bo.length;xo++)e=bo[xo],t=e.id,$o[t]=null,e.run();for(xo=bo.length;xo--;)e=bo[xo],n=e.vm,n._watcher===e&&n._isMounted&&de(n,"updated");Yi&&Hi.devtools&&Yi.emit("flush"),ve()}function me(e){var t=e.id;if(null==$o[t]){if($o[t]=!0,Co){for(var n=bo.length-1;n>=0&&bo[n].id>e.id;)n--;bo.splice(Math.max(n,xo)+1,0,e)}else bo.push(e);wo||(wo=!0,Xi(he))}}function ge(e){Oo.clear(),ye(e,Oo)}function ye(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)ye(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)ye(e[r[n]],t)}}function _e(e,t,n){So.get=function(){return this[t][n]},So.set=function(e){this[t][n]=e},Object.defineProperty(e,n,So)}function be(e){e._watchers=[];var t=e.$options;t.props&&$e(e,t.props),t.methods&&Ae(e,t.methods),t.data?we(e):A(e._data={},!0),t.computed&&Ce(e,t.computed),t.watch&&Oe(e,t.watch)}function $e(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;uo.shouldConvert=o;var a=function(o){i.push(o);var a=R(o,t,n,e);O(r,o,a),o in e||_e(e,"_props",o)};for(var s in t)a(s);uo.shouldConvert=!0}function we(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||_(n[o])||_e(e,"_data",n[o]);A(t,!0)}function Ce(e,t){var n=e._computedWatchers=Object.create(null);for(var r in t){var i=t[r],o="function"==typeof i?i:i.get;n[r]=new Ao(e,o,d,To),r in e||xe(e,r,i)}}function xe(e,t,n){"function"==typeof n?(So.get=ke(t),So.set=d):(So.get=n.get?n.cache!==!1?ke(t):n.get:d,So.set=n.set?n.set:d),Object.defineProperty(e,t,So)}function ke(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),io.target&&t.depend(),t.value}}function Ae(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?d:s(t[n],e)}function Oe(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Se(e,n,r[i]);else Se(e,n,r)}}function Se(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Te(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=S,e.prototype.$delete=T,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Ao(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function Ee(e,t,n,r,i){if(e){var o=n.$options._base;if(l(e)&&(e=o.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=Pe(e,o,function(){n.$forceUpdate()}),!e)return;at(e),t=t||{},t.model&&Be(e.options,t);var a=Re(t,e);if(e.options.functional)return je(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),He(t);var c=e.options.name||i,u=new vo("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r});return u}}}function je(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var s in a)o[s]=R(s,a,t);var c=Object.create(r),u=function(e,t,n,r){return Ve(c,e,t,n,r,!0)},l=e.options.render.call(null,u,{props:o,data:n,parent:r,children:i,slots:function(){return ie(i,r)}});return l instanceof vo&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function Ne(e,t,n,r){var i=e.componentOptions,o={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},a=e.data.inlineTemplate;return a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new i.Ctor(o)}function Ie(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){var i=e.componentInstance=Ne(e,_o,n,r);i.$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var o=e;Le(o,o)}}function Le(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;ue(r,n.propsData,n.listeners,t,n.children)}function De(e){e.componentInstance._isMounted||(e.componentInstance._isMounted=!0,de(e.componentInstance,"mounted")),e.data.keepAlive&&fe(e.componentInstance,!0)}function Me(e){e.componentInstance._isDestroyed||(e.data.keepAlive?pe(e.componentInstance,!0):e.componentInstance.$destroy())}function Pe(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(l(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&"function"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function Re(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Di(s);Fe(r,o,s,c,!0)||Fe(r,i,s,c)||Fe(r,a,s,c)}return r}}function Fe(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function He(e){e.hook||(e.hook={});for(var t=0;t<jo.length;t++){var n=jo[t],r=e.hook[n],i=Eo[n];e.hook[n]=r?Ue(i,r):i}}function Ue(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function Be(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});i[r]?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}function Ve(e,t,n,r,i,a){return(Array.isArray(n)||o(n))&&(i=r,r=n,n=void 0),a&&(i=Io),ze(e,t,n,r,i)}function ze(e,t,n,r,i){if(n&&n.__ob__)return go();if(!t)return go();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===Io?r=G(r):i===No&&(r=Z(r));var o,a;if("string"==typeof t){var s;a=Hi.getTagNamespace(t),o=Hi.isReservedTag(t)?new vo(Hi.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=P(e.$options,"components",t))?Ee(s,n,e,r,t):new vo(t,n,r,void 0,void 0,e)}else o=Ee(t,n,e,r);return o?(a&&Je(o,a),o):go()}function Je(e,t){if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Je(i,t)}}function Ke(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n}function qe(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&u(n,r),i(n)||t;var o=this.$slots[e];return o||t}function We(e){return P(this.$options,"filters",e,!0)||Fi}function Ze(e,t,n){var r=Hi.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e}function Ge(e,t,n,r){if(n)if(l(n)){Array.isArray(n)&&(n=p(n));for(var i in n)if("class"===i||"style"===i)e[i]=n[i];else{var o=e.attrs&&e.attrs.type,a=r||Hi.mustUseProp(t,o,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});a[i]=n[i]}}else;return e}function Ye(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?J(n):z(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),Xe(n,"__static__"+e,!1),n)}function Qe(e,t,n){return Xe(e,"__once__"+t+(n?"_"+n:""),!0),e}function Xe(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&et(e[r],t+"_"+r,n);else et(e,t,n)}function et(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function tt(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=ie(e.$options._renderChildren,n),e.$scopedSlots=eo,e._c=function(t,n,r,i){return Ve(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ve(e,t,n,r,i,!0)}}function nt(n){n.prototype.$nextTick=function(e){return Xi(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=J(e.$slots[o]);e.$scopedSlots=i&&i.data.scopedSlots||eo,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){B(t,e,"render function"),a=e._vnode}return a instanceof vo||(a=go()),a.parent=i,a},n.prototype._o=Qe,n.prototype._n=t,n.prototype._s=e,n.prototype._l=Ke,n.prototype._t=qe,n.prototype._q=h,n.prototype._i=m,n.prototype._m=Ye,n.prototype._f=We,n.prototype._k=Ze,n.prototype._b=Ge,n.prototype._v=V,n.prototype._e=go,n.prototype._u=oe}function rt(e){var t=e.$options.provide,n=e.$options.inject;if(t&&(e._provided="function"==typeof t?t.call(e):t),n)for(var r=Array.isArray(n),i=r?n:Qi?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++)for(var a=i[o],s=r?a:n[a],c=e;c;){if(c._provided&&c._provided[s]){e[a]=c._provided[s];break}c=c.$parent}}function it(e){e.prototype._init=function(e){var t=this;t._uid=Lo++,t._isVue=!0,e&&e._isComponent?ot(t,e):t.$options=M(at(t.constructor),e||{},t),t._renderProxy=t,t._self=t,ae(t),X(t),tt(t),de(t,"beforeCreate"),be(t),rt(t),de(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function ot(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function at(e){var t=e.options;if(e.super){var n=at(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=st(e);i&&u(e.extendOptions,i),t=e.options=M(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function st(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=ct(n[i],r[i]));return t}function ct(e,t){if(Array.isArray(e)){var n=[];t=Array.isArray(t)?t:[t];for(var r=0;r<e.length;r++)t.indexOf(e[r])<0&&n.push(e[r]);return n}return e}function ut(e){this._init(e)}function lt(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),e.installed=!0,this}}}function ft(e){e.mixin=function(e){this.options=M(this.options,e)}}function pt(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=M(n.options,e),a.super=n,a.options.props&&dt(a),a.options.computed&&vt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Hi._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=u({},a.options),i[r]=a,a}}function dt(e){var t=e.options.props;for(var n in t)_e(e.prototype,"_props",n)}function vt(e){var t=e.options.computed;for(var n in t)xe(e.prototype,n,t[n])}function ht(e){Hi._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function gt(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e instanceof RegExp&&e.test(t)}function yt(e,t){for(var n in e){var r=e[n];if(r){var i=mt(r.componentOptions);i&&!t(i)&&(_t(r),e[n]=null)}}}function _t(e){e&&(e.componentInstance._inactive||de(e.componentInstance,"deactivated"),e.componentInstance.$destroy())}function bt(e){var t={};t.get=function(){return Hi},Object.defineProperty(e,"config",t),e.util={warn:no,extend:u,mergeOptions:M,defineReactive:O},e.set=S,e.delete=T,e.nextTick=Xi,e.options=Object.create(null),Hi._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,u(e.options.components,Po),lt(e),ft(e),pt(e),ht(e)}function $t(e){for(var t=e.data,n=e,r=e;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(t=wt(r.data,t));for(;n=n.parent;)n.data&&(t=wt(t,n.data));return Ct(t)}function wt(e,t){return{staticClass:xt(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ct(e){var t=e.class,n=e.staticClass;return n||t?xt(n,kt(t)):""}function xt(e,t){return e?t?e+" "+t:e:t||""}function kt(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=kt(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function At(e){return ra(e)?"svg":"math"===e?"math":void 0}function Ot(e){if(!Bi)return!0;if(oa(e))return!1;if(e=e.toLowerCase(),null!=aa[e])return aa[e];var t=document.createElement(e);return e.indexOf("-")>-1?aa[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:aa[e]=/HTMLUnknownElement/.test(t.toString())}function St(e){if("string"==typeof e){var t=document.querySelector(e);return t?t:document.createElement("div")}return e}function Tt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function Et(e,t){return document.createElementNS(ta[e],t)}function jt(e){return document.createTextNode(e)}function Nt(e){return document.createComment(e)}function It(e,t,n){e.insertBefore(t,n)}function Lt(e,t){e.removeChild(t)}function Dt(e,t){e.appendChild(t)}function Mt(e){return e.parentNode}function Pt(e){return e.nextSibling}function Rt(e){return e.tagName}function Ft(e,t){e.textContent=t}function Ht(e,t,n){e.setAttribute(t,n)}function Ut(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function Bt(e){return null==e}function Vt(e){return null!=e}function zt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function Jt(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,Vt(i)&&(o[i]=r);return o}function Kt(e){function t(e){return new vo(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0===--n.listeners&&i(e)}return n.listeners=t,n}function i(e){var t=O.parentNode(e);t&&O.removeChild(t,e)}function a(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var o=e.data,a=e.children,c=e.tag;Vt(c)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),f(e,a,t),Vt(o)&&d(e,t),l(n,e.elm,r)):e.isComment?(e.elm=O.createComment(e.text),l(n,e.elm,r)):(e.elm=O.createTextNode(e.text),l(n,e.elm,r))}}function s(e,t,n,r){var i=e.data;if(Vt(i)){var o=Vt(e.componentInstance)&&i.keepAlive;if(Vt(i=i.hook)&&Vt(i=i.init)&&i(e,!1,n,r),Vt(e.componentInstance))return c(e,t),o&&u(e,t,n,r),!0}}function c(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.componentInstance.$el,p(e)?(d(e,t),v(e)):(Ut(e),t.push(e))}function u(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,Vt(i=o.data)&&Vt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](ua,o);t.push(o);break}l(n,e.elm,r)}function l(e,t,n){e&&(n?O.insertBefore(e,t,n):O.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)a(t[r],n,e.elm,null,!0);else o(e.text)&&O.appendChild(e.elm,O.createTextNode(e.text))}function p(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return Vt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](ua,e);C=e.data.hook,Vt(C)&&(C.create&&C.create(ua,e),C.insert&&t.push(e))}function v(e){for(var t,n=e;n;)Vt(t=n.context)&&Vt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,""),n=n.parent;Vt(t=_o)&&t!==e.context&&Vt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"")}function h(e,t,n,r,i,o){for(;r<=i;++r)a(n[r],o,e,t)}function m(e){var t,n,r=e.data;if(Vt(r))for(Vt(t=r.hook)&&Vt(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(Vt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n])}function g(e,t,n,r){for(;n<=r;++n){var o=t[n];Vt(o)&&(Vt(o.tag)?(y(o),m(o)):i(o.elm))}}function y(e,t){if(t||Vt(e.data)){var n=k.remove.length+1;for(t?t.listeners+=n:t=r(e.elm,n),Vt(C=e.componentInstance)&&Vt(C=C._vnode)&&Vt(C.data)&&y(C,t),C=0;C<k.remove.length;++C)k.remove[C](e,t);Vt(C=e.data.hook)&&Vt(C=C.remove)?C(e,t):t()}else i(e.elm)}function _(e,t,n,r,i){for(var o,s,c,u,l=0,f=0,p=t.length-1,d=t[0],v=t[p],m=n.length-1,y=n[0],_=n[m],$=!i;l<=p&&f<=m;)Bt(d)?d=t[++l]:Bt(v)?v=t[--p]:zt(d,y)?(b(d,y,r),d=t[++l],y=n[++f]):zt(v,_)?(b(v,_,r),v=t[--p],_=n[--m]):zt(d,_)?(b(d,_,r),$&&O.insertBefore(e,d.elm,O.nextSibling(v.elm)),d=t[++l],_=n[--m]):zt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,d.elm),v=t[--p],y=n[++f]):(Bt(o)&&(o=Jt(t,l,p)),s=Vt(y.key)?o[y.key]:null,Bt(s)?(a(y,r,e,d.elm),y=n[++f]):(c=t[s],zt(c,y)?(b(c,y,r),t[s]=void 0,$&&O.insertBefore(e,y.elm,d.elm),y=n[++f]):(a(y,r,e,d.elm),y=n[++f])));l>p?(u=Bt(n[m+1])?null:n[m+1].elm,h(e,u,n,f,m,r)):f>m&&g(e,t,l,p)}function b(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.componentInstance=e.componentInstance);var i,o=t.data,a=Vt(o);a&&Vt(i=o.hook)&&Vt(i=i.prepatch)&&i(e,t);var s=t.elm=e.elm,c=e.children,u=t.children;if(a&&p(t)){for(i=0;i<k.update.length;++i)k.update[i](e,t);Vt(i=o.hook)&&Vt(i=i.update)&&i(e,t)}Bt(t.text)?Vt(c)&&Vt(u)?c!==u&&_(s,c,u,n,r):Vt(u)?(Vt(e.text)&&O.setTextContent(s,""),h(s,null,u,0,u.length-1,n)):Vt(c)?g(s,c,0,c.length-1):Vt(e.text)&&O.setTextContent(s,""):e.text!==t.text&&O.setTextContent(s,t.text),a&&Vt(i=o.hook)&&Vt(i=i.postpatch)&&i(e,t)}}function $(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(Vt(i)&&(Vt(C=i.hook)&&Vt(C=C.init)&&C(t,!0),Vt(C=t.componentInstance)))return c(t,n),!0;if(Vt(r)){if(Vt(o))if(e.hasChildNodes()){for(var a=!0,s=e.firstChild,u=0;u<o.length;u++){if(!s||!w(s,o[u],n)){a=!1;break}s=s.nextSibling}if(!a||s)return!1}else f(t,o,n);if(Vt(i))for(var l in i)if(!S(l)){d(t,n);break}}else e.data!==t.text&&(e.data=t.text);return!0}var C,x,k={},A=e.modules,O=e.nodeOps;for(C=0;C<la.length;++C)for(k[la[C]]=[],x=0;x<A.length;++x)void 0!==A[x][la[C]]&&k[la[C]].push(A[x][la[C]]);var S=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,o,s){if(!n)return void(e&&m(e));var c=!1,u=[];if(e){var l=Vt(e.nodeType);if(!l&&zt(e,n))b(e,n,u,i);else{if(l){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&w(e,n,u))return $(n,u,!0),e;e=t(e)}var f=e.elm,d=O.parentNode(f);if(a(n,u,f._leaveCb?null:d,O.nextSibling(f)),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(p(n))for(var h=0;h<k.create.length;++h)k.create[h](ua,n.parent)}null!==d?g(d,[e],0,0):Vt(e.tag)&&m(e)}}else c=!0,a(n,u,o,s);return $(n,u,c),n.elm}}function qt(e,t){(e.data.directives||t.data.directives)&&Wt(e,t)}function Wt(e,t){var n,r,i,o=e===ua,a=t===ua,s=Zt(e.data.directives,e.context),c=Zt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,Yt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Yt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Yt(u[n],"inserted",t,e)};o?W(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&W(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)Yt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||Yt(s[n],"unbind",e,e,a)}function Zt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=pa),n[Gt(i)]=i,i.def=P(t.$options,"directives",i.name,!0);return n}function Gt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Yt(e,t,n,r,i){var o=e.def&&e.def[t];o&&o(n.elm,e,n,r,i)}function Qt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=u({},s));for(n in s)r=s[n],i=a[n],i!==r&&Xt(o,n,r);Ji&&s.value!==a.value&&Xt(o,"value",s.value);for(n in a)null==s[n]&&(Qo(n)?o.removeAttributeNS(Yo,Xo(n)):Zo(n)||o.removeAttribute(n))}}function Xt(e,t,n){Go(t)?ea(n)?e.removeAttribute(t):e.setAttribute(t,t):Zo(t)?e.setAttribute(t,ea(n)||"false"===n?"false":"true"):Qo(t)?ea(n)?e.removeAttributeNS(Yo,Xo(t)):e.setAttributeNS(Yo,t,n):ea(n)?e.removeAttribute(t):e.setAttribute(t,n)}function en(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=$t(t),a=n._transitionClasses;a&&(o=xt(o,kt(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function tn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);m&&ma.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=nn(o,a[i]);return o}function nn(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function rn(e){console.error("[Vue compiler]: "+e);
}function on(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function an(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function sn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function cn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function un(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function ln(e,t,n){var r=fn(e,":"+t)||fn(e,"v-bind:"+t);if(null!=r)return tn(r);if(n!==!1){var i=fn(e,t);if(null!=i)return JSON.stringify(i)}}function fn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function pn(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v",s=a;o&&(s="(typeof "+a+" === 'string'? "+a+".trim(): "+a+")"),i&&(s="_n("+s+")");var c=dn(t,s);e.model={value:"("+t+")",callback:"function ("+a+") {"+c+"}"}}function dn(e,t){var n=vn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function vn(e){if(Fo=e,Ro=Fo.length,Uo=Bo=Vo=0,e.indexOf("[")<0||e.lastIndexOf("]")<Ro-1)return{exp:e,idx:null};for(;!mn();)Ho=hn(),gn(Ho)?_n(Ho):91===Ho&&yn(Ho);return{exp:e.substring(0,Bo),idx:e.substring(Bo+1,Vo)}}function hn(){return Fo.charCodeAt(++Uo)}function mn(){return Uo>=Ro}function gn(e){return 34===e||39===e}function yn(e){var t=1;for(Bo=Uo;!mn();)if(e=hn(),gn(e))_n(e);else if(91===e&&t++,93===e&&t--,0===t){Vo=Uo;break}}function _n(e){for(var t=e;!mn()&&(e=hn(),e!==t););}function bn(e,t,n){zo=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if("select"===o)Cn(e,r,i);else if("input"===o&&"checkbox"===a)$n(e,r,i);else if("input"===o&&"radio"===a)wn(e,r,i);else if("input"===o||"textarea"===o)xn(e,r,i);else if(!Hi.isReservedTag(o))return pn(e,r,i),!1;return!0}function $n(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null",o=ln(e,"true-value")||"true",a=ln(e,"false-value")||"false";an(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),un(e,ya,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function wn(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null";i=r?"_n("+i+")":i,an(e,"checked","_q("+t+","+i+")"),un(e,ya,dn(t,i),null,!0)}function Cn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",a="var $$selectedVal = "+i+";";a=a+" "+dn(t,o),un(e,"change",a,null,!0)}function xn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ga:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=dn(t,l);c&&(f="if($event.target.composing)return;"+f),an(e,"value","("+t+")"),un(e,u,f,null,!0),(s||a||"number"===r)&&un(e,"blur","$forceUpdate()")}function kn(e){var t;e[ga]&&(t=zi?"change":"input",e[t]=[].concat(e[ga],e[t]||[]),delete e[ga]),e[ya]&&(t=Zi?"click":"change",e[t]=[].concat(e[ya],e[t]||[]),delete e[ya])}function An(e,t,n,r){if(n){var i=t,o=Jo;t=function(n){var a=1===arguments.length?i(n):i.apply(null,arguments);null!==a&&On(e,t,r,o)}}Jo.addEventListener(e,t,r)}function On(e,t,n,r){(r||Jo).removeEventListener(e,t,n)}function Sn(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};Jo=t.elm,kn(n),q(n,r,An,On,t.context)}}function Tn(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if(r=a[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==o[n]))if("value"===n){i._value=r;var s=null==r?"":String(r);En(i,t,s)&&(i.value=s)}else i[n]=r}}function En(e,t,n){return!e.composing&&("option"===t.tag||jn(e,n)||Nn(e,n))}function jn(e,t){return document.activeElement!==e&&e.value!==t}function Nn(e,n){var r=e.value,i=e._vModifiers;return i&&i.number||"number"===e.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function In(e){var t=Ln(e.style);return e.staticStyle?u(e.staticStyle,t):t}function Ln(e){return Array.isArray(e)?p(e):"string"==typeof e?$a(e):e}function Dn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=In(i.data))&&u(r,n);(n=In(e.data))&&u(r,n);for(var o=e;o=o.parent;)o.data&&(n=In(o.data))&&u(r,n);return r}function Mn(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},l=s||c,f=Ln(t.data.style)||{};t.data.style=f.__ob__?u({},f):f;var p=Dn(t,!0);for(o in l)null==p[o]&&xa(a,o,"");for(o in p)i=p[o],i!==l[o]&&xa(a,o,null==i?"":i)}}function Pn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Rn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Fn(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,Sa(e.name||"v")),u(t,e),t}return"string"==typeof e?Sa(e):void 0}}function Hn(e){Ma(function(){Ma(e)})}function Un(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Pn(e,t)}function Bn(e,t){e._transitionClasses&&r(e._transitionClasses,t),Rn(e,t)}function Vn(e,t,n){var r=zn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ea?Ia:Da,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function zn(e,t){var n,r=window.getComputedStyle(e),i=r[Na+"Delay"].split(", "),o=r[Na+"Duration"].split(", "),a=Jn(i,o),s=r[La+"Delay"].split(", "),c=r[La+"Duration"].split(", "),u=Jn(s,c),l=0,f=0;t===Ea?a>0&&(n=Ea,l=a,f=o.length):t===ja?u>0&&(n=ja,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?Ea:ja:null,f=n?n===Ea?o.length:c.length:0);var p=n===Ea&&Pa.test(r[Na+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:p}}function Jn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Kn(t)+Kn(e[n])}))}function Kn(e){return 1e3*Number(e.slice(0,-1))}function qn(e,n){var r=e.elm;r._leaveCb&&(r._leaveCb.cancelled=!0,r._leaveCb());var i=Fn(e.data.transition);if(i&&!r._enterCb&&1===r.nodeType){for(var o=i.css,a=i.type,s=i.enterClass,c=i.enterToClass,u=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,d=i.appearActiveClass,v=i.beforeEnter,h=i.enter,m=i.afterEnter,y=i.enterCancelled,_=i.beforeAppear,b=i.appear,$=i.afterAppear,w=i.appearCancelled,C=i.duration,x=_o,k=_o.$vnode;k&&k.parent;)k=k.parent,x=k.context;var A=!x._isMounted||!e.isRootInsert;if(!A||b||""===b){var O=A&&f?f:s,S=A&&d?d:u,T=A&&p?p:c,E=A?_||v:v,j=A&&"function"==typeof b?b:h,N=A?$||m:m,I=A?w||y:y,L=t(l(C)?C.enter:C),D=o!==!1&&!Ji,M=Gn(j),P=r._enterCb=g(function(){D&&(Bn(r,T),Bn(r,S)),P.cancelled?(D&&Bn(r,O),I&&I(r)):N&&N(r),r._enterCb=null});e.data.show||W(e.data.hook||(e.data.hook={}),"insert",function(){var t=r.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(r,P)}),E&&E(r),D&&(Un(r,O),Un(r,S),Hn(function(){Un(r,T),Bn(r,O),P.cancelled||M||(Zn(L)?setTimeout(P,L):Vn(r,a,P))})),e.data.show&&(n&&n(),j&&j(r,P)),D||M||P()}}}function Wn(e,n){function r(){w.cancelled||(e.data.show||((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),p&&p(i),_&&(Un(i,c),Un(i,f),Hn(function(){Un(i,u),Bn(i,c),w.cancelled||b||(Zn($)?setTimeout(w,$):Vn(i,s,w))})),d&&d(i,w),_||b||w())}var i=e.elm;i._enterCb&&(i._enterCb.cancelled=!0,i._enterCb());var o=Fn(e.data.transition);if(!o)return n();if(!i._leaveCb&&1===i.nodeType){var a=o.css,s=o.type,c=o.leaveClass,u=o.leaveToClass,f=o.leaveActiveClass,p=o.beforeLeave,d=o.leave,v=o.afterLeave,h=o.leaveCancelled,m=o.delayLeave,y=o.duration,_=a!==!1&&!Ji,b=Gn(d),$=t(l(y)?y.leave:y),w=i._leaveCb=g(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Bn(i,u),Bn(i,f)),w.cancelled?(_&&Bn(i,c),h&&h(i)):(n(),v&&v(i)),i._leaveCb=null});m?m(r):r()}}function Zn(e){return"number"==typeof e&&!isNaN(e)}function Gn(e){if(!e)return!1;var t=e.fns;return t?Gn(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Yn(e,t){t.data.show||qn(t)}function Qn(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,er(a))>-1,a.selected!==o&&(a.selected=o);else if(h(er(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Xn(e,t){for(var n=0,r=t.length;n<r;n++)if(h(er(t[n]),e))return!1;return!0}function er(e){return"_value"in e?e._value:e.value}function tr(e){e.target.composing=!0}function nr(e){e.target.composing=!1,rr(e.target,"input")}function rr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ir(e){return!e.componentInstance||e.data&&e.data.transition?e:ir(e.componentInstance._vnode)}function or(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?or(Q(t.children)):e}function ar(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Ni(o)]=i[o];return t}function sr(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function cr(e){for(;e=e.parent;)if(e.data.transition)return!0}function ur(e,t){return t.key===e.key&&t.tag===e.tag}function lr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function fr(e){e.data.newPos=e.elm.getBoundingClientRect()}function pr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function dr(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function vr(e){return Ga=Ga||document.createElement("div"),Ga.innerHTML=e,Ga.textContent}function hr(e,t){var n=t?Ms:Ds;return e.replace(n,function(e){return Ls[e]})}function mr(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(ss);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(cs))&&(o=e.match(is));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;u&&("p"===s&&es(n)&&o(s),Xa(n)&&s===n&&o(n));for(var i=l(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),p=0;p<a;p++){var d=e.attrs[p];ds&&d[0].indexOf('""')===-1&&(""===d[3]&&delete d[3],""===d[4]&&delete d[4],""===d[5]&&delete d[5]);var v=d[3]||d[4]||d[5]||"";f[p]={name:d[1],value:hr(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f}),s=n),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r){var i,o;if(null==n&&(n=f),null==r&&(r=f),e&&(o=e.toLowerCase()),e)for(i=c.length-1;i>=0&&c[i].lowerCasedTag!==o;i--);else i=0;if(i>=0){for(var a=c.length-1;a>=i;a--)t.end&&t.end(c[a].tag,n,r);c.length=i,s=i&&c[i-1].tag}else"br"===o?t.start&&t.start(e,[],!0,n,r):"p"===o&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Ri,f=0;e;){if(a=e,s&&Ns(s)){var p=s.toLowerCase(),d=Is[p]||(Is[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=0,h=e.replace(d,function(e,n,r){return v=r.length,"script"!==p&&"style"!==p&&"noscript"!==p&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,o(p,f-v,f)}else{var m=e.indexOf("<");if(0===m){if(fs.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(ps.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(ls);if(_){n(_[0].length);continue}var b=e.match(us);if(b){var $=f;n(b[0].length),o(b[1],$,f);continue}var w=r();if(w){i(w);continue}}var C=void 0,x=void 0,k=void 0;if(m>=0){for(x=e.slice(m);!(us.test(x)||ss.test(x)||fs.test(x)||ps.test(x)||(k=x.indexOf("<",1),k<0));)m+=k,x=e.slice(m);C=e.substring(0,m),n(m)}m<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===a){t.chars&&t.chars(e);break}}o()}function gr(e,t){var n=t?Fs(t):Ps;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=tn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function yr(e,t){function n(e){e.pre&&(s=!1),gs(e.tag)&&(c=!1)}vs=t.warn||rn,hs=t.getTagNamespace||Ri,ms=t.mustUseProp||Ri,gs=t.isPreTag||Ri,ys=on(t.modules,"preTransformNode"),_s=on(t.modules,"transformNode"),bs=on(t.modules,"postTransformNode"),$s=t.delimiters;var r,i,o=[],a=t.preserveWhitespace!==!1,s=!1,c=!1;return mr(e,{warn:vs,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,u){function l(e){}var f=i&&i.ns||hs(e);zi&&"svg"===f&&(a=Mr(a));var p={type:1,tag:e,attrsList:a,attrsMap:Lr(a),parent:i,children:[]};f&&(p.ns=f),Dr(p)&&!Gi()&&(p.forbidden=!0);for(var d=0;d<ys.length;d++)ys[d](p,t);if(s||(_r(p),p.pre&&(s=!0)),gs(p.tag)&&(c=!0),s)br(p);else{Cr(p),xr(p),Sr(p),$r(p),p.plain=!p.key&&!a.length,wr(p),Tr(p),Er(p);for(var v=0;v<_s.length;v++)_s[v](p,t);jr(p)}if(r?o.length||r.if&&(p.elseif||p.else)&&(l(p),Or(r,{exp:p.elseif,block:p})):(r=p,l(r)),i&&!p.forbidden)if(p.elseif||p.else)kr(p,i);else if(p.slotScope){i.plain=!1;var h=p.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[h]=p}else i.children.push(p),p.parent=i;u?n(p):(i=p,o.push(p));for(var m=0;m<bs.length;m++)bs[m](p,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!zi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?qs(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=gr(e,$s))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}}}),r}function _r(e){null!=fn(e,"v-pre")&&(e.pre=!0)}function br(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function $r(e){var t=ln(e,"key");t&&(e.key=t)}function wr(e){var t=ln(e,"ref");t&&(e.ref=t,e.refInFor=Nr(e))}function Cr(e){var t;if(t=fn(e,"v-for")){var n=t.match(Us);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Bs);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function xr(e){var t=fn(e,"v-if");if(t)e.if=t,Or(e,{exp:t,block:e});else{null!=fn(e,"v-else")&&(e.else=!0);var n=fn(e,"v-else-if");n&&(e.elseif=n)}}function kr(e,t){var n=Ar(t.children);n&&n.if&&Or(n,{exp:e.elseif,block:e})}function Ar(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Or(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Sr(e){var t=fn(e,"v-once");null!=t&&(e.once=!0)}function Tr(e){if("slot"===e.tag)e.slotName=ln(e,"name");else{var t=ln(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=fn(e,"scope"))}}function Er(e){var t;(t=ln(e,"is"))&&(e.component=t),null!=fn(e,"inline-template")&&(e.inlineTemplate=!0)}function jr(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Hs.test(r))if(e.hasBindings=!0,s=Ir(r),s&&(r=r.replace(Ks,"")),Vs.test(r))r=r.replace(Vs,""),o=tn(o),c=!1,s&&(s.prop&&(c=!0,r=Ni(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&(r=Ni(r))),c||ms(e.tag,e.attrsMap.type,r)?an(e,r,o):sn(e,r,o);else if(zs.test(r))r=r.replace(zs,""),un(e,r,o,s);else{r=r.replace(Hs,"");var l=r.match(Js);l&&(a=l[1])&&(r=r.slice(0,-(a.length+1))),cn(e,r,i,o,a,s)}else sn(e,r,JSON.stringify(o))}function Nr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Ir(e){var t=e.match(Ks);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Lr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Dr(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Mr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ws.test(r.name)||(r.name=r.name.replace(Zs,""),t.push(r))}return t}function Pr(e,t){e&&(ws=Gs(t.staticKeys||""),Cs=t.isReservedTag||Ri,Fr(e),Hr(e,!1))}function Rr(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Fr(e){if(e.static=Br(e),1===e.type){if(!Cs(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Fr(r),r.static||(e.static=!1)}}}function Hr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Hr(e.children[n],t||!!e.for);e.ifConditions&&Ur(e.ifConditions,t)}}function Ur(e,t){for(var n=1,r=e.length;n<r;n++)Hr(e[n].block,t)}function Br(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Ti(e.tag)||!Cs(e.tag)||Vr(e)||!Object.keys(e).every(ws))))}function Vr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function zr(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+Jr(r,e[r])+",";return n.slice(0,-1)+"}"}function Jr(e,t){if(t){if(Array.isArray(t))return"["+t.map(function(t){return Jr(e,t)}).join(",")+"]";if(t.modifiers){var n="",r=[];for(var i in t.modifiers)tc[i]?n+=tc[i]:r.push(i);r.length&&(n=Kr(r)+n);var o=Qs.test(t.value)?t.value+"($event)":t.value;return"function($event){"+n+o+"}"}return Ys.test(t.value)||Qs.test(t.value)?t.value:"function($event){"+t.value+"}"}return"function(){}"}function Kr(e){return"if("+e.map(qr).join("&&")+")return null;"}function qr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Xs[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Wr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Zr(e,t){var n=Ts,r=Ts=[],i=Es;Es=0,js=t,xs=t.warn||rn,ks=on(t.modules,"transformCode"),As=on(t.modules,"genData"),Os=t.directives||{},Ss=t.isReservedTag||Ri;var o=e?Gr(e):'_c("div")';return Ts=n,Es=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Gr(e){if(e.staticRoot&&!e.staticProcessed)return Yr(e);if(e.once&&!e.onceProcessed)return Qr(e);if(e.for&&!e.forProcessed)return ti(e);if(e.if&&!e.ifProcessed)return Xr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return di(e);var t;if(e.component)t=vi(e.component,e);else{var n=e.plain?void 0:ni(e),r=e.inlineTemplate?null:si(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<ks.length;i++)t=ks[i](e,t);return t}return si(e)||"void 0"}function Yr(e){return e.staticProcessed=!0,Ts.push("with(this){return "+Gr(e)+"}"),"_m("+(Ts.length-1)+(e.staticInFor?",true":"")+")"}function Qr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Xr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Gr(e)+","+Es++ +(t?","+t:"")+")":Gr(e)}return Yr(e)}function Xr(e){return e.ifProcessed=!0,ei(e.ifConditions.slice())}function ei(e){function t(e){return e.once?Qr(e):Gr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+ei(e):""+t(n.block)}function ti(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Gr(e)+"})"}function ni(e){var t="{",n=ri(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<As.length;r++)t+=As[r](e);if(e.attrs&&(t+="attrs:{"+hi(e.attrs)+"},"),e.props&&(t+="domProps:{"+hi(e.props)+"},"),e.events&&(t+=zr(e.events)+","),e.nativeEvents&&(t+=zr(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=oi(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+"},"),e.inlineTemplate){var i=ii(e);i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function ri(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=Os[i.name]||nc[i.name];c&&(o=!!c(e,i,xs)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function ii(e){var t=e.children[0];if(1===t.type){var n=Zr(t,js);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function oi(e){return"scopedSlots:_u(["+Object.keys(e).map(function(t){return ai(t,e[t])}).join(",")+"])"}function ai(e,t){return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?si(t)||"void 0":Gr(t))+"}]"}function si(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return Gr(r);var i=ci(n);return"["+n.map(fi).join(",")+"]"+(t&&i?","+i:"")}}function ci(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(1===r.type){if(ui(r)||r.ifConditions&&r.ifConditions.some(function(e){return ui(e.block)})){t=2;break}(li(r)||r.ifConditions&&r.ifConditions.some(function(e){return li(e.block)}))&&(t=1)}}return t}function ui(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function li(e){return!Ss(e.tag)}function fi(e){return 1===e.type?Gr(e):pi(e)}function pi(e){return"_v("+(2===e.type?e.expression:mi(JSON.stringify(e.text)))+")"}function di(e){var t=e.slotName||'"default"',n=si(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return Ni(e.name)+":"+e.value}).join(",")+"}",o=e.attrsMap["v-bind"];return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")"}function vi(e,t){var n=t.inlineTemplate?null:si(t,!0);return"_c("+e+","+ni(t)+(n?","+n:"")+")"}function hi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+mi(r.value)+","}return t.slice(0,-1)}function mi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function gi(e,t){var n=yr(e.trim(),t);Pr(n,t);var r=Zr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function yi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),d}}function _i(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n){n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=u(Object.create(e.directives),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=gi(t,r);return s.errors=i,s.tips=o,s}function n(e,n,i){n=n||{};var o=n.delimiters?String(n.delimiters)+e:e;if(r[o])return r[o];var a=t(e,n),s={},c=[];s.render=yi(a.render,c);var u=a.staticRenderFns.length;s.staticRenderFns=new Array(u);for(var l=0;l<u;l++)s.staticRenderFns[l]=yi(a.staticRenderFns[l],c);return r[o]=s}var r=Object.create(null);return{compile:t,compileToFunctions:n}}function bi(e,t){var n=(t.warn||rn,fn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=ln(e,"class",!1);r&&(e.classBinding=r)}function $i(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function wi(e,t){var n=(t.warn||rn,fn(e,"style"));n&&(e.staticStyle=JSON.stringify($a(n)));var r=ln(e,"style",!1);r&&(e.styleBinding=r)}function Ci(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function xi(e,t){t.value&&an(e,"textContent","_s("+t.value+")")}function ki(e,t){t.value&&an(e,"innerHTML","_s("+t.value+")")}function Ai(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Oi,Si,Ti=n("slot,component",!0),Ei=Object.prototype.hasOwnProperty,ji=/-(\w)/g,Ni=a(function(e){return e.replace(ji,function(e,t){return t?t.toUpperCase():""})}),Ii=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Li=/([^-])([A-Z])/g,Di=a(function(e){return e.replace(Li,"$1-$2").replace(Li,"$1-$2").toLowerCase()}),Mi=Object.prototype.toString,Pi="[object Object]",Ri=function(){return!1},Fi=function(e){return e},Hi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ri,isUnknownElement:Ri,getTagNamespace:d,parsePlatformTagName:Fi,mustUseProp:Ri,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},Ui="__proto__"in{},Bi="undefined"!=typeof window,Vi=Bi&&window.navigator.userAgent.toLowerCase(),zi=Vi&&/msie|trident/.test(Vi),Ji=Vi&&Vi.indexOf("msie 9.0")>0,Ki=Vi&&Vi.indexOf("edge/")>0,qi=Vi&&Vi.indexOf("android")>0,Wi=Vi&&/iphone|ipad|ipod|ios/.test(Vi),Zi=Vi&&/chrome\/\d+/.test(Vi)&&!Ki,Gi=function(){return void 0===Oi&&(Oi=!Bi&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Oi},Yi=Bi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Qi="undefined"!=typeof Symbol&&y(Symbol)&&"undefined"!=typeof Reflect&&y(Reflect.ownKeys),Xi=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&y(Promise)){var i=Promise.resolve(),o=function(e){console.error(e)};t=function(){i.then(e).catch(o),Wi&&setTimeout(d)}}else if("undefined"==typeof MutationObserver||!y(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){o=e})}}();Si="undefined"!=typeof Set&&y(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var eo=Object.freeze({}),to=/[^\w.$]/,no=d,ro=0,io=function(){this.id=ro++,this.subs=[]};io.prototype.addSub=function(e){this.subs.push(e)},io.prototype.removeSub=function(e){r(this.subs,e)},io.prototype.depend=function(){io.target&&io.target.addDep(this)},io.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},io.target=null;var oo=[],ao=Array.prototype,so=Object.create(ao);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ao[e];b(so,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var co=Object.getOwnPropertyNames(so),uo={shouldConvert:!0,isSettingProps:!1},lo=function(e){if(this.value=e,this.dep=new io,this.vmCount=0,b(e,"__ob__",this),Array.isArray(e)){var t=Ui?x:k;t(e,so,co),this.observeArray(e)}else this.walk(e)};lo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)O(e,t[n],e[t[n]])},lo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)A(e[t])};var fo=Hi.optionMergeStrategies;fo.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?j(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return j(t.call(this),e.call(this))}:t:e},Hi._lifecycleHooks.forEach(function(e){fo[e]=N}),Hi._assetTypes.forEach(function(e){fo[e+"s"]=I}),fo.watch=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},fo.props=fo.methods=fo.computed=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var po=function(e,t){return void 0===t?e:t},vo=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},ho={child:{}};ho.child.get=function(){return this.componentInstance},Object.defineProperties(vo.prototype,ho);var mo,go=function(){var e=new vo;return e.text="",e.isComment=!0,e},yo=a(function(e){var t="~"===e.charAt(0);e=t?e.slice(1):e;var n="!"===e.charAt(0);return e=n?e.slice(1):e,{name:e,once:t,capture:n}}),_o=null,bo=[],$o={},wo=!1,Co=!1,xo=0,ko=0,Ao=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ko,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Si,this.newDepIds=new Si,this.expression="","function"==typeof t?this.getter=t:(this.getter=$(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ao.prototype.get=function(){w(this);var e,t=this.vm;if(this.user)try{e=this.getter.call(t,t)}catch(e){B(e,t,'getter for watcher "'+this.expression+'"')}else e=this.getter.call(t,t);return this.deep&&ge(e),C(),this.cleanupDeps(),e},Ao.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Ao.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Ao.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():me(this)},Ao.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){B(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Ao.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ao.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Ao.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Oo=new Si,So={enumerable:!0,configurable:!0,get:d,set:d},To={lazy:!0},Eo={init:Ie,prepatch:Le,insert:De,destroy:Me},jo=Object.keys(Eo),No=1,Io=2,Lo=0;it(ut),Te(ut),re(ut),
se(ut),nt(ut);var Do=[String,RegExp],Mo={name:"keep-alive",abstract:!0,props:{include:Do,exclude:Do},created:function(){this.cache=Object.create(null)},destroyed:function(){var e=this;for(var t in e.cache)_t(e.cache[t])},watch:{include:function(e){yt(this.cache,function(t){return gt(e,t)})},exclude:function(e){yt(this.cache,function(t){return!gt(e,t)})}},render:function(){var e=Q(this.$slots.default),t=e&&e.componentOptions;if(t){var n=mt(t);if(n&&(this.include&&!gt(this.include,n)||this.exclude&&gt(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,e.data.keepAlive=!0}return e}},Po={KeepAlive:Mo};bt(ut),Object.defineProperty(ut.prototype,"$isServer",{get:Gi}),ut.version="2.2.0";var Ro,Fo,Ho,Uo,Bo,Vo,zo,Jo,Ko,qo=n("input,textarea,option,select"),Wo=function(e,t,n){return"value"===n&&qo(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Zo=n("contenteditable,draggable,spellcheck"),Go=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Yo="http://www.w3.org/1999/xlink",Qo=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Xo=function(e){return Qo(e)?e.slice(6,e.length):""},ea=function(e){return null==e||e===!1},ta={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},na=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),ra=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ia=function(e){return"pre"===e},oa=function(e){return na(e)||ra(e)},aa=Object.create(null),sa=Object.freeze({createElement:Tt,createElementNS:Et,createTextNode:jt,createComment:Nt,insertBefore:It,removeChild:Lt,appendChild:Dt,parentNode:Mt,nextSibling:Pt,tagName:Rt,setTextContent:Ft,setAttribute:Ht}),ca={create:function(e,t){Ut(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ut(e,!0),Ut(t))},destroy:function(e){Ut(e,!0)}},ua=new vo("",{},[]),la=["create","activate","update","remove","destroy"],fa={create:qt,update:qt,destroy:function(e){qt(e,ua)}},pa=Object.create(null),da=[ca,fa],va={create:Qt,update:Qt},ha={create:en,update:en},ma=/[\w).+\-_$\]]/,ga="__r",ya="__c",_a={create:Sn,update:Sn},ba={create:Tn,update:Tn},$a=a(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),wa=/^--/,Ca=/\s*!important$/,xa=function(e,t,n){wa.test(t)?e.style.setProperty(t,n):Ca.test(n)?e.style.setProperty(t,n.replace(Ca,""),"important"):e.style[Aa(t)]=n},ka=["Webkit","Moz","ms"],Aa=a(function(e){if(Ko=Ko||document.createElement("div"),e=Ni(e),"filter"!==e&&e in Ko.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ka.length;n++){var r=ka[n]+t;if(r in Ko.style)return r}}),Oa={create:Mn,update:Mn},Sa=a(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ta=Bi&&!Ji,Ea="transition",ja="animation",Na="transition",Ia="transitionend",La="animation",Da="animationend";Ta&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Na="WebkitTransition",Ia="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(La="WebkitAnimation",Da="webkitAnimationEnd"));var Ma=Bi&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Pa=/\b(transform|all)(,|$)/,Ra=Bi?{create:Yn,activate:Yn,remove:function(e,t){e.data.show?t():Wn(e,t)}}:{},Fa=[va,ha,_a,ba,Oa,Ra],Ha=Fa.concat(da),Ua=Kt({nodeOps:sa,modules:Ha});Ji&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&rr(e,"input")});var Ba={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Qn(e,t,n.context)};r(),(zi||Ki)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(qi||(e.addEventListener("compositionstart",tr),e.addEventListener("compositionend",nr)),Ji&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Qn(e,t,n.context);var r=e.multiple?t.value.some(function(t){return Xn(t,e.options)}):t.value!==t.oldValue&&Xn(t.value,e.options);r&&rr(e,"change")}}},Va={bind:function(e,t,n){var r=t.value;n=ir(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!Ji?(n.data.show=!0,qn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=ir(n);var o=n.data&&n.data.transition;o&&!Ji?(n.data.show=!0,r?qn(n,function(){e.style.display=e.__vOriginalDisplay}):Wn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},za={model:Ba,show:Va},Ja={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Ka={name:"transition",props:Ja,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(cr(this.$vnode))return i;var a=or(i);if(!a)return i;if(this._leaving)return sr(e,i);var s="__transition-"+this._uid+"-";a.key=null==a.key?s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ar(this),l=this._vnode,f=or(l);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),f&&f.data&&!ur(a,f)){var p=f&&(f.data.transition=u({},c));if("out-in"===r)return this._leaving=!0,W(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),sr(e,i);if("in-out"===r){var d,v=function(){d()};W(c,"afterEnter",v),W(c,"enterCancelled",v),W(p,"delayLeave",function(e){d=e})}}return i}}},qa=u({tag:String,moveClass:String},Ja);delete qa.mode;var Wa={props:qa,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ar(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(lr),e.forEach(fr),e.forEach(pr);var n=document.body;n.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Un(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ia,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ia,e),n._moveCb=null,Bn(n,t))})}})}},methods:{hasMove:function(e,t){if(!Ta)return!1;if(null!=this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Rn(n,e)}),Pn(n,t),n.style.display="none",this.$el.appendChild(n);var r=zn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Za={Transition:Ka,TransitionGroup:Wa};ut.config.mustUseProp=Wo,ut.config.isReservedTag=oa,ut.config.getTagNamespace=At,ut.config.isUnknownElement=Ot,u(ut.options.directives,za),u(ut.options.components,Za),ut.prototype.__patch__=Bi?Ua:d,ut.prototype.$mount=function(e,t){return e=e&&Bi?St(e):void 0,ce(this,e,t)},setTimeout(function(){Hi.devtools&&Yi&&Yi.emit("init",ut)},0);var Ga,Ya=!!Bi&&dr("\n","&#10;"),Qa=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),Xa=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),es=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),ts=/([^\s"'<>\/=]+)/,ns=/(?:=)/,rs=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],is=new RegExp("^\\s*"+ts.source+"(?:\\s*("+ns.source+")\\s*(?:"+rs.join("|")+"))?"),os="[a-zA-Z_][\\w\\-\\.]*",as="((?:"+os+"\\:)?"+os+")",ss=new RegExp("^<"+as),cs=/^\s*(\/?)>/,us=new RegExp("^<\\/"+as+"[^>]*>"),ls=/^<!DOCTYPE [^>]+>/i,fs=/^<!--/,ps=/^<!\[/,ds=!1;"x".replace(/x(.)?/g,function(e,t){ds=""===t});var vs,hs,ms,gs,ys,_s,bs,$s,ws,Cs,xs,ks,As,Os,Ss,Ts,Es,js,Ns=n("script,style",!0),Is={},Ls={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},Ds=/&(?:lt|gt|quot|amp);/g,Ms=/&(?:lt|gt|quot|amp|#10);/g,Ps=/\{\{((?:.|\n)+?)\}\}/g,Rs=/[-.*+?^${}()|[\]\/\\]/g,Fs=a(function(e){var t=e[0].replace(Rs,"\\$&"),n=e[1].replace(Rs,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Hs=/^v-|^@|^:/,Us=/(.*?)\s+(?:in|of)\s+(.*)/,Bs=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Vs=/^:|^v-bind:/,zs=/^@|^v-on:/,Js=/:(.*)$/,Ks=/\.[^.]+/g,qs=a(vr),Ws=/^xmlns:NS\d+/,Zs=/^NS\d+:/,Gs=a(Rr),Ys=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Qs=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Xs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ec=function(e){return"if("+e+")return null;"},tc={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ec("$event.target !== $event.currentTarget"),ctrl:ec("!$event.ctrlKey"),shift:ec("!$event.shiftKey"),alt:ec("!$event.altKey"),meta:ec("!$event.metaKey"),left:ec("$event.button !== 0"),middle:ec("$event.button !== 1"),right:ec("$event.button !== 2")},nc={bind:Wr,cloak:d},rc={staticKeys:["staticClass"],transformNode:bi,genData:$i},ic={staticKeys:["staticStyle"],transformNode:wi,genData:Ci},oc=[rc,ic],ac={model:bn,text:xi,html:ki},sc={expectHTML:!0,modules:oc,directives:ac,isPreTag:ia,isUnaryTag:Qa,mustUseProp:Wo,isReservedTag:oa,getTagNamespace:At,staticKeys:v(oc)},cc=_i(sc),uc=cc.compileToFunctions,lc=a(function(e){var t=St(e);return t&&t.innerHTML}),fc=ut.prototype.$mount;return ut.prototype.$mount=function(e,t){if(e=e&&St(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=lc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Ai(e));if(r){var i=uc(r,{shouldDecodeNewlines:Ya,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return fc.call(this,e,t)},ut.compile=uc,ut});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

window.jwplayer = function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = window.webpackJsonpjwplayer;
    window.webpackJsonpjwplayer = function(i, r) {
        for (var a, s, l = 0, u = []; l < i.length; l++) s = i[l], o[s] && u.push.apply(u, o[s]), o[s] = 0;
        for (a in r) e[a] = r[a];
        for (n && n(i, r); u.length;) u.shift().call(null, t)
    };
    var i = {},
        o = {
            0: 0
        };
    return t.e = function(e, n) {
        if (0 === o[e]) return n.call(null, t);
        if (void 0 !== o[e]) o[e].push(n);
        else {
            o[e] = [n];
            var i = document.getElementsByTagName("head")[0],
                r = document.createElement("script");
            r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = t.p + "" + ({
                1: "provider.hlsjs",
                2: "provider.shaka",
                3: "provider.cast",
                4: "provider.html5",
                5: "provider.flash",
                6: "provider.airplay",
                7: "provider.youtube",
                8: "polyfills.vttrenderer",
                9: "polyfills.promise",
                10: "polyfills.intersection-observer",
                11: "polyfills.base64",
                12: "vttparser"
            }[e] || e) + ".js", i.appendChild(r)
        }
    }, t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(174)
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = {},
            t = Array.prototype,
            n = Object.prototype,
            i = Function.prototype,
            o = t.slice,
            r = t.concat,
            a = n.toString,
            s = n.hasOwnProperty,
            l = t.map,
            u = t.reduce,
            c = t.forEach,
            d = t.filter,
            p = t.every,
            f = t.some,
            h = t.indexOf,
            g = Array.isArray,
            w = Object.keys,
            m = i.bind,
            v = function(e) {
                return e instanceof v ? e : this instanceof v ? void 0 : new v(e)
            },
            j = v.each = v.forEach = function(t, n, i) {
                if (null == t) return t;
                if (c && t.forEach === c) t.forEach(n, i);
                else if (t.length === +t.length) {
                    for (var o = 0, r = t.length; o < r; o++)
                        if (n.call(i, t[o], o, t) === e) return
                } else
                    for (var a = v.keys(t), o = 0, r = a.length; o < r; o++)
                        if (n.call(i, t[a[o]], a[o], t) === e) return;
                return t
            };
        v.map = v.collect = function(e, t, n) {
            var i = [];
            return null == e ? i : l && e.map === l ? e.map(t, n) : (j(e, function(e, o, r) {
                i.push(t.call(n, e, o, r))
            }), i)
        };
        var y = "Reduce of empty array with no initial value";
        v.reduce = v.foldl = v.inject = function(e, t, n, i) {
            var o = arguments.length > 2;
            if (null == e && (e = []), u && e.reduce === u) return i && (t = v.bind(t, i)), o ? e.reduce(t, n) : e.reduce(t);
            if (j(e, function(e, r, a) {
                    o ? n = t.call(i, n, e, r, a) : (n = e, o = !0)
                }), !o) throw new TypeError(y);
            return n
        }, v.find = v.detect = function(e, t, n) {
            var i;
            return b(e, function(e, o, r) {
                if (t.call(n, e, o, r)) return i = e, !0
            }), i
        }, v.filter = v.select = function(e, t, n) {
            var i = [];
            return null == e ? i : d && e.filter === d ? e.filter(t, n) : (j(e, function(e, o, r) {
                t.call(n, e, o, r) && i.push(e)
            }), i)
        }, v.reject = function(e, t, n) {
            return v.filter(e, function(e, i, o) {
                return !t.call(n, e, i, o)
            }, n)
        }, v.compact = function(e) {
            return v.filter(e, v.identity)
        }, v.every = v.all = function(t, n, i) {
            n || (n = v.identity);
            var o = !0;
            return null == t ? o : p && t.every === p ? t.every(n, i) : (j(t, function(t, r, a) {
                if (!(o = o && n.call(i, t, r, a))) return e
            }), !!o)
        };
        var b = v.some = v.any = function(t, n, i) {
            n || (n = v.identity);
            var o = !1;
            return null == t ? o : f && t.some === f ? t.some(n, i) : (j(t, function(t, r, a) {
                if (o || (o = n.call(i, t, r, a))) return e
            }), !!o)
        };
        v.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : v.keys(e).length
        }, v.last = function(e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
        }, v.after = function(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, v.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        };
        var x = function(e) {
                return null == e ? v.identity : v.isFunction(e) ? e : v.property(e)
            },
            E = function(e) {
                return function(t, n, i) {
                    var o = {};
                    return n = x(n), j(t, function(r, a) {
                        var s = n.call(i, r, a, t);
                        e(o, s, r)
                    }), o
                }
            };
        v.groupBy = E(function(e, t, n) {
            v.has(e, t) ? e[t].push(n) : e[t] = [n]
        }), v.indexBy = E(function(e, t, n) {
            e[t] = n
        }), v.sortedIndex = function(e, t, n, i) {
            n = x(n);
            for (var o = n.call(i, t), r = 0, a = e.length; r < a;) {
                var s = r + a >>> 1;
                n.call(i, e[s]) < o ? r = s + 1 : a = s
            }
            return r
        };
        var b = v.some = v.any = function(t, n, i) {
            n || (n = v.identity);
            var o = !1;
            return null == t ? o : f && t.some === f ? t.some(n, i) : (j(t, function(t, r, a) {
                if (o || (o = n.call(i, t, r, a))) return e
            }), !!o)
        };
        v.contains = v.include = function(e, t) {
            return null != e && (e.length !== +e.length && (e = v.values(e)), v.indexOf(e, t) >= 0)
        }, v.pluck = function(e, t) {
            return v.map(e, v.property(t))
        }, v.where = function(e, t) {
            return v.filter(e, v.matches(t))
        }, v.findWhere = function(e, t) {
            return v.find(e, v.matches(t))
        }, v.max = function(e, t, n) {
            if (!t && v.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var i = -(1 / 0),
                o = -(1 / 0);
            return j(e, function(e, r, a) {
                var s = t ? t.call(n, e, r, a) : e;
                s > o && (i = e, o = s)
            }), i
        }, v.difference = function(e) {
            var n = r.apply(t, o.call(arguments, 1));
            return v.filter(e, function(e) {
                return !v.contains(n, e)
            })
        }, v.without = function(e) {
            return v.difference(e, o.call(arguments, 1))
        }, v.indexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = 0,
                o = e.length;
            if (n) {
                if ("number" != typeof n) return i = v.sortedIndex(e, t), e[i] === t ? i : -1;
                i = n < 0 ? Math.max(0, o + n) : n
            }
            if (h && e.indexOf === h) return e.indexOf(t, n);
            for (; i < o; i++)
                if (e[i] === t) return i;
            return -1
        };
        var k = function() {};
        v.bind = function(e, t) {
            var n, i;
            if (m && e.bind === m) return m.apply(e, o.call(arguments, 1));
            if (!v.isFunction(e)) throw new TypeError;
            return n = o.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return e.apply(t, n.concat(o.call(arguments)));
                k.prototype = e.prototype;
                var r = new k;
                k.prototype = null;
                var a = e.apply(r, n.concat(o.call(arguments)));
                return Object(a) === a ? a : r
            }
        }, v.partial = function(e) {
            var t = o.call(arguments, 1);
            return function() {
                for (var n = 0, i = t.slice(), o = 0, r = i.length; o < r; o++) i[o] === v && (i[o] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }, v.once = v.partial(v.before, 2), v.memoize = function(e, t) {
            var n = {};
            return t || (t = v.identity),
                function() {
                    var i = t.apply(this, arguments);
                    return v.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
        }, v.delay = function(e, t) {
            var n = o.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, v.defer = function(e) {
            return v.delay.apply(v, [e, 1].concat(o.call(arguments, 1)))
        }, v.throttle = function(e, t, n) {
            var i, o, r, a = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : v.now(), a = null, r = e.apply(i, o), i = o = null
            };
            return function() {
                var u = v.now();
                s || n.leading !== !1 || (s = u);
                var c = t - (u - s);
                return i = this, o = arguments, c <= 0 ? (clearTimeout(a), a = null, s = u, r = e.apply(i, o), i = o = null) : a || n.trailing === !1 || (a = setTimeout(l, c)), r
            }
        }, v.keys = function(e) {
            if (!v.isObject(e)) return [];
            if (w) return w(e);
            var t = [];
            for (var n in e) v.has(e, n) && t.push(n);
            return t
        }, v.invert = function(e) {
            for (var t = {}, n = v.keys(e), i = 0, o = n.length; i < o; i++) t[e[n[i]]] = n[i];
            return t
        }, v.defaults = function(e) {
            return j(o.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }, v.extend = function(e) {
            return j(o.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, v.pick = function(e) {
            var n = {},
                i = r.apply(t, o.call(arguments, 1));
            return j(i, function(t) {
                t in e && (n[t] = e[t])
            }), n
        }, v.omit = function(e) {
            var n = {},
                i = r.apply(t, o.call(arguments, 1));
            for (var a in e) v.contains(i, a) || (n[a] = e[a]);
            return n
        }, v.clone = function(e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.isArray = g || function(e) {
            return "[object Array]" == a.call(e)
        }, v.isObject = function(e) {
            return e === Object(e)
        }, j(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            v["is" + e] = function(t) {
                return a.call(t) == "[object " + e + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function(e) {
            return !(!e || !v.has(e, "callee"))
        }), v.isFunction = function(e) {
            return "function" == typeof e
        }, v.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function(e) {
            return v.isNumber(e) && e != +e
        }, v.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" == a.call(e)
        }, v.isNull = function(e) {
            return null === e
        }, v.isUndefined = function(e) {
            return void 0 === e
        }, v.has = function(e, t) {
            return s.call(e, t)
        }, v.identity = function(e) {
            return e
        }, v.constant = function(e) {
            return function() {
                return e
            }
        }, v.property = function(e) {
            return function(t) {
                return t[e]
            }
        }, v.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, v.matches = function(e) {
            return function(t) {
                if (t === e) return !0;
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        }, v.now = Date.now || function() {
            return (new Date).getTime()
        }, v.result = function(e, t) {
            if (null != e) {
                var n = e[t];
                return v.isFunction(n) ? n.call(e) : n
            }
        };
        var C = 0;
        return v.uniqueId = function(e) {
            var t = ++C + "";
            return e ? e + t : t
        }, v
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9), n(1), n(25), n(33), n(23), n(34), n(14), n(60), n(35), n(63), n(144), n(143)], o = function(e, t, n, i, o, r, a, s, l, u, c, d) {
        var p = {};
        return p.log = function() {
            window.console && ("object" == typeof console.log ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log.apply(console, arguments))
        }, p.between = function(e, t, n) {
            return Math.max(Math.min(e, n), t)
        }, p.foreach = function(e, t) {
            var n, i;
            for (n in e) "function" === p.typeOf(e.hasOwnProperty) ? e.hasOwnProperty(n) && (i = e[n], t(n, i)) : (i = e[n], t(n, i))
        }, p.indexOf = t.indexOf, p.noop = function() {}, p.seconds = e.seconds, p.prefix = e.prefix, p.suffix = e.suffix, t.extend(p, r, a, l, n, s, i, o, u, c, d), p
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = [],
            n = t.slice,
            i = {
                on: function(e, t, n) {
                    if (!r(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({
                        callback: t,
                        context: n
                    }), this
                },
                once: function(t, n, i) {
                    if (!r(this, "once", t, [n, i]) || !n) return this;
                    var o = this,
                        a = e.once(function() {
                            o.off(t, a), n.apply(this, arguments)
                        });
                    return a._callback = n, this.on(t, a, i)
                },
                off: function(t, n, i) {
                    var o, a, s, l, u, c, d, p;
                    if (!this._events || !r(this, "off", t, [n, i])) return this;
                    if (!t && !n && !i) return this._events = void 0, this;
                    for (l = t ? [t] : e.keys(this._events), u = 0, c = l.length; u < c; u++)
                        if (t = l[u], s = this._events[t]) {
                            if (this._events[t] = o = [], n || i)
                                for (d = 0, p = s.length; d < p; d++) a = s[d], (n && n !== a.callback && n !== a.callback._callback || i && i !== a.context) && o.push(a);
                            o.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = n.call(arguments, 1);
                    if (!r(this, "trigger", e, t)) return this;
                    var i = this._events[e],
                        o = this._events.all;
                    return i && a(i, t, this), o && a(o, arguments, this), this
                },
                triggerSafe: function(e) {
                    if (!this._events) return this;
                    var t = n.call(arguments, 1);
                    if (!r(this, "trigger", e, t)) return this;
                    var i = this._events[e],
                        o = this._events.all;
                    return i && s(i, t, this, e), o && s(o, arguments, this, e), this
                }
            },
            o = /\s+/,
            r = function(e, t, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                    return !1
                }
                if (o.test(n)) {
                    for (var a = n.split(o), s = 0, l = a.length; s < l; s++) e[t].apply(e, [a[s]].concat(i));
                    return !1
                }
                return !0
            },
            a = function(e, t, n) {
                var i, o = -1,
                    r = e.length,
                    a = t[0],
                    s = t[1],
                    l = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n);
                        return;
                    case 1:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a);
                        return;
                    case 2:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a, s);
                        return;
                    case 3:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a, s, l);
                        return;
                    default:
                        for (; ++o < r;)(i = e[o]).callback.apply(i.context || n, t);
                        return
                }
            },
            s = function(e, t, n, i) {
                for (var o, r = -1, a = e.length; ++r < a;) try {
                    o = e[r], o.callback.apply(o.context || n, t)
                } catch (s) {
                    console.log('Error in "' + i + '" event handler:', s)
                }
            };
        return i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = {
                DRAG: "drag",
                DRAG_START: "dragStart",
                DRAG_END: "dragEnd",
                CLICK: "click",
                DOUBLE_CLICK: "doubleClick",
                TAP: "tap",
                DOUBLE_TAP: "doubleTap",
                OVER: "over",
                MOVE: "move",
                OUT: "out"
            },
            t = {
                COMPLETE: "complete",
                ERROR: "error",
                JWPLAYER_AD_CLICK: "adClick",
                JWPLAYER_AD_COMPANIONS: "adCompanions",
                JWPLAYER_AD_COMPLETE: "adComplete",
                JWPLAYER_AD_ERROR: "adError",
                JWPLAYER_AD_IMPRESSION: "adImpression",
                JWPLAYER_AD_META: "adMeta",
                JWPLAYER_AD_PAUSE: "adPause",
                JWPLAYER_AD_PLAY: "adPlay",
                JWPLAYER_AD_SKIPPED: "adSkipped",
                JWPLAYER_AD_TIME: "adTime",
                JWPLAYER_CAST_AD_CHANGED: "castAdChanged",
                JWPLAYER_MEDIA_COMPLETE: "complete",
                JWPLAYER_READY: "ready",
                JWPLAYER_MEDIA_SEEK: "seek",
                JWPLAYER_MEDIA_BEFOREPLAY: "beforePlay",
                JWPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
                JWPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
                JWPLAYER_DISPLAY_CLICK: "displayClick",
                JWPLAYER_PLAYLIST_COMPLETE: "playlistComplete",
                JWPLAYER_CAST_SESSION: "cast",
                JWPLAYER_MEDIA_ERROR: "mediaError",
                JWPLAYER_MEDIA_FIRST_FRAME: "firstFrame",
                JWPLAYER_MEDIA_PLAY_ATTEMPT: "playAttempt",
                JWPLAYER_MEDIA_LOADED: "loaded",
                JWPLAYER_MEDIA_SEEKED: "seeked",
                JWPLAYER_SETUP_ERROR: "setupError",
                JWPLAYER_ERROR: "error",
                JWPLAYER_PLAYER_STATE: "state",
                JWPLAYER_CAST_AVAILABLE: "castAvailable",
                JWPLAYER_MEDIA_BUFFER: "bufferChange",
                JWPLAYER_MEDIA_TIME: "time",
                JWPLAYER_MEDIA_TYPE: "mediaType",
                JWPLAYER_MEDIA_VOLUME: "volume",
                JWPLAYER_MEDIA_MUTE: "mute",
                JWPLAYER_MEDIA_META: "meta",
                JWPLAYER_MEDIA_LEVELS: "levels",
                JWPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
                JWPLAYER_CONTROLS: "controls",
                JWPLAYER_FULLSCREEN: "fullscreen",
                JWPLAYER_RESIZE: "resize",
                JWPLAYER_PLAYLIST_ITEM: "playlistItem",
                JWPLAYER_PLAYLIST_LOADED: "playlist",
                JWPLAYER_AUDIO_TRACKS: "audioTracks",
                JWPLAYER_AUDIO_TRACK_CHANGED: "audioTrackChanged",
                JWPLAYER_LOGO_CLICK: "logoClick",
                JWPLAYER_CAPTIONS_LIST: "captionsList",
                JWPLAYER_CAPTIONS_CHANGED: "captionsChanged",
                JWPLAYER_PROVIDER_CHANGED: "providerChanged",
                JWPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame",
                JWPLAYER_USER_ACTION: "userAction",
                JWPLAYER_PROVIDER_CLICK: "providerClick",
                JWPLAYER_VIEW_TAB_FOCUS: "tabFocus",
                JWPLAYER_CONTROLBAR_DRAGGING: "scrubbing",
                JWPLAYER_INSTREAM_CLICK: "instreamClick"
            };
        return t.touchEvents = e, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            BUFFERING: "buffering",
            IDLE: "idle",
            COMPLETE: "complete",
            PAUSED: "paused",
            PLAYING: "playing",
            ERROR: "error",
            LOADING: "loading",
            STALLED: "stalled"
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(3), n(4), n(1), n(2)], o = function(e, t, n, i) {
        function o(e, t) {
            return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
        }

        function r(e) {
            var t = e || window.event;
            return e instanceof MouseEvent && ("which" in t ? 3 === t.which : "button" in t && 2 === t.button)
        }

        function a(e, t, n) {
            var i;
            return i = t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], {
                type: e,
                target: t.target,
                currentTarget: n,
                pageX: i.pageX,
                pageY: i.pageY
            }
        }

        function s(e) {
            (e instanceof MouseEvent || e instanceof window.TouchEvent) && (e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault())
        }
        var l = t.touchEvents,
            u = "PointerEvent" in window,
            c = "ontouchstart" in window,
            d = !(u || c && i.isMobile()),
            p = i.isFF() && i.isOSX(),
            f = function(e, t) {
                function i(e) {
                    "touch" !== e.pointerType && v(l.OVER, e)
                }

                function c(e) {
                    "touch" !== e.pointerType && v(l.MOVE, e)
                }

                function f(t) {
                    (d || u && "touch" !== t.pointerType && !e.contains(document.elementFromPoint(t.x, t.y))) && v(l.OUT, t)
                }

                function h(e, t, n) {
                    e.removeEventListener(t, n), e.addEventListener(t, n)
                }

                function g(n) {
                    j = n.target, E = o(n, "X"), k = o(n, "Y"), r(n) || ("pointerdown" === n.type && n.isPrimary ? (t.preventScrolling && (y = n.pointerId, e.setPointerCapture(y)), h(e, "pointermove", w), h(e, "pointercancel", m), "mouse" === n.pointerType && "OBJECT" === j.nodeName ? h(document, "mouseup", m) : h(e, "pointerup", m)) : "mousedown" === n.type ? (h(document, "mousemove", w), p && "object" === n.target.nodeName.toLowerCase() ? h(e, "click", m) : h(document, "mouseup", m)) : "touchstart" === n.type && (h(j, "touchmove", w), h(j, "touchcancel", m), h(j, "touchend", m)), t.preventScrolling && s(n))
                }

                function w(e) {
                    var n = 6;
                    if (x) v(l.DRAG, e);
                    else {
                        var i = o(e, "X"),
                            r = o(e, "Y"),
                            a = i - E,
                            u = r - k;
                        a * a + u * u > n * n && (v(l.DRAG_START, e), x = !0, v(l.DRAG, e))
                    }
                    t.preventScrolling && s(e)
                }

                function m(n) {
                    var i = "pointerup" === n.type || "pointercancel" === n.type;
                    i && t.preventScrolling && e.releasePointerCapture(y), e.removeEventListener("pointermove", w), e.removeEventListener("pointercancel", m), e.removeEventListener("pointerup", m), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", m), j.removeEventListener("touchmove", w), j.removeEventListener("touchcancel", m), j.removeEventListener("touchend", m), x ? v(l.DRAG_END, n) : t.directSelect && n.target !== e || n.type.indexOf("cancel") !== -1 || ("mouseup" === n.type || "click" === n.type || i && "mouse" === n.pointerType ? v(l.CLICK, n) : (v(l.TAP, n), "touchend" === n.type && s(n))), j = null, x = !1
                }

                function v(e, i) {
                    var o;
                    if (t.enableDoubleTap && (e === l.CLICK || e === l.TAP))
                        if (n.now() - C < A) {
                            var r = e === l.CLICK ? l.DOUBLE_CLICK : l.DOUBLE_TAP;
                            o = a(r, i, b), L.trigger(r, o), C = 0
                        } else C = n.now();
                    o = a(e, i, b), L.trigger(e, o)
                }
                var j, y, b = e,
                    x = !1,
                    E = 0,
                    k = 0,
                    C = 0,
                    A = 300;
                t = t || {}, u ? (e.addEventListener("pointerdown", g), t.useHover && (e.addEventListener("pointerover", i), e.addEventListener("pointerout", f)), t.useMove && e.addEventListener("pointermove", c)) : (d && (e.addEventListener("mousedown", g), t.useHover && (e.addEventListener("mouseover", i), e.addEventListener("mouseout", f)), t.useMove && e.addEventListener("mousemove", c)), e.addEventListener("touchstart", g));
                var L = this;
                return this.triggerEvent = v, this.destroy = function() {
                    e.removeEventListener("touchstart", g), e.removeEventListener("mousedown", g), j && (j.removeEventListener("touchmove", w), j.removeEventListener("touchcancel", m), j.removeEventListener("touchend", m), j = null), u && (t.preventScrolling && e.releasePointerCapture(y), e.removeEventListener("pointerover", i), e.removeEventListener("pointerdown", g), e.removeEventListener("pointermove", w), e.removeEventListener("pointermove", c), e.removeEventListener("pointercancel", m), e.removeEventListener("pointerout", f), e.removeEventListener("pointerup", m)), e.removeEventListener("click", m), e.removeEventListener("mouseover", i), e.removeEventListener("mousemove", c), e.removeEventListener("mouseout", f), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", m)
                }, this
            };
        return n.extend(f.prototype, e), f
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    e.exports = n(82)["default"]
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        function t(e) {
            return /[\(,]format=m3u8-/i.test(e) ? "m3u8" : !!/[\(,]format=mpd-/i.test(e) && "mpd"
        }
        var n = function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            i = function(e, t, n) {
                for (e = "" + e, n = n || "0"; e.length < t;) e = n + e;
                return e
            },
            o = function(e, t) {
                for (var n = 0; n < e.attributes.length; n++)
                    if (e.attributes[n].name && e.attributes[n].name.toLowerCase() === t.toLowerCase()) return e.attributes[n].value.toString();
                return ""
            },
            r = function(e) {
                if (!e || "rtmp" === e.substr(0, 4)) return "";
                var n = t(e);
                return n ? n : (e = e.split("?")[0].split("#")[0], e.lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : void 0)
            },
            a = function(e) {
                var t = parseInt(e / 3600),
                    n = parseInt(e / 60) % 60,
                    o = e % 60;
                return i(t, 2) + ":" + i(n, 2) + ":" + i(o.toFixed(3), 6)
            },
            s = function(t, n) {
                if (e.isNumber(t)) return t;
                t = t.replace(",", ".");
                var i = t.split(":"),
                    o = i.length,
                    r = 0;
                if ("s" === t.slice(-1)) r = parseFloat(t);
                else if ("m" === t.slice(-1)) r = 60 * parseFloat(t);
                else if ("h" === t.slice(-1)) r = 3600 * parseFloat(t);
                else if (o > 1) {
                    var a = o - 1;
                    4 === o && (n && (r = parseFloat(i[a]) / n), a -= 1), r += parseFloat(i[a]), r += 60 * parseFloat(i[a - 1]), o >= 3 && (r += 3600 * parseFloat(i[a - 2]))
                } else r = parseFloat(t);
                return r
            },
            l = function(t, n) {
                return e.map(t, function(e) {
                    return n + e
                })
            },
            u = function(t, n) {
                return e.map(t, function(e) {
                    return e + n
                })
            };
        return {
            trim: n,
            pad: i,
            xmlAttribute: o,
            extension: r,
            hms: a,
            seconds: s,
            suffix: u,
            prefix: l
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t) {
    "use strict";

    function n(e) {
        return c[e]
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e
    }

    function o(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
        return -1
    }

    function r(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        return p.test(e) ? e.replace(d, n) : e
    }

    function a(e) {
        return !e && 0 !== e || !(!g(e) || 0 !== e.length)
    }

    function s(e) {
        var t = i({}, e);
        return t._parent = e, t
    }

    function l(e, t) {
        return e.path = t, e
    }

    function u(e, t) {
        return (e ? e + "." : "") + t
    }
    t.__esModule = !0, t.extend = i, t.indexOf = o, t.escapeExpression = r, t.isEmpty = a, t.createFrame = s, t.blockParams = l, t.appendContextPath = u;
    var c = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        d = /[&<>"'`=]/g,
        p = /[&<>"'`=]/,
        f = Object.prototype.toString;
    t.toString = f;
    var h = function(e) {
        return "function" == typeof e
    };
    h(/x/) && (t.isFunction = h = function(e) {
        return "function" == typeof e && "[object Function]" === f.call(e)
    }), t.isFunction = h;
    var g = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === f.call(e)
    };
    t.isArray = g
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(4), n(5), n(1)], o = function(e, t, n, i) {
        var o = e.noop,
            r = i.constant(!1),
            a = {
                supports: r,
                play: o,
                load: o,
                stop: o,
                volume: o,
                mute: o,
                seek: o,
                resize: o,
                remove: o,
                destroy: o,
                setVisibility: o,
                setFullscreen: r,
                getFullscreen: o,
                getContainer: o,
                setContainer: r,
                getName: o,
                getQualityLevels: o,
                getCurrentQuality: o,
                setCurrentQuality: o,
                getAudioTracks: o,
                getCurrentAudioTrack: o,
                setCurrentAudioTrack: o,
                checkComplete: o,
                setControls: o,
                attachMedia: o,
                detachMedia: o,
                setState: function(e) {
                    var i = this.state || n.IDLE;
                    this.state = e, e !== i && this.trigger(t.JWPLAYER_PLAYER_STATE, {
                        newstate: e
                    })
                },
                sendMediaType: function(e) {
                    var n = e[0].type,
                        i = "oga" === n || "aac" === n || "mp3" === n || "mpeg" === n || "vorbis" === n;
                    this.trigger(t.JWPLAYER_MEDIA_TYPE, {
                        mediaType: i ? "audio" : "video"
                    })
                }
            };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {},
            n = {
                TIT2: "title",
                TT2: "title",
                WXXX: "url",
                TPE1: "artist",
                TP1: "artist",
                TALB: "album",
                TAL: "album"
            };
        return t.utf8ArrayToStr = function(e, t) {
            var n, i, o, r, a, s;
            for (n = "", o = e.length, i = t || 0; i < o;)
                if (r = e[i++], 0 !== r && 3 !== r) switch (r >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        n += String.fromCharCode(r);
                        break;
                    case 12:
                    case 13:
                        a = e[i++], n += String.fromCharCode((31 & r) << 6 | 63 & a);
                        break;
                    case 14:
                        a = e[i++], s = e[i++], n += String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | (63 & s) << 0)
                }
            return n
        }, t.utf16BigEndianArrayToStr = function(e, t) {
            var n, i, o;
            for (n = "", o = e.length - 1, i = t || 0; i < o;) 254 === e[i] && 255 === e[i + 1] || (n += String.fromCharCode((e[i] << 8) + e[i + 1])), i += 2;
            return n
        }, t.syncSafeInt = function(e) {
            var n = t.arrayToInt(e);
            return 127 & n | (32512 & n) >> 1 | (8323072 & n) >> 2 | (2130706432 & n) >> 3
        }, t.arrayToInt = function(e) {
            for (var t = "0x", n = 0; n < e.length; n++) t += e[n].toString(16);
            return parseInt(t)
        }, t.parseID3 = function(i) {
            return e.reduce(i, function(i, o) {
                if (!("value" in o) && "data" in o && o.data instanceof ArrayBuffer) {
                    var r = o,
                        a = new Uint8Array(r.data),
                        s = a.length;
                    o = {
                        value: {
                            key: "",
                            data: ""
                        }
                    };
                    for (var l = 10; l < 14 && l < a.length && 0 !== a[l];) o.value.key += String.fromCharCode(a[l]), l++;
                    var u = 19,
                        c = a[u];
                    3 !== c && 0 !== c || (c = a[++u], s--);
                    var d = 0;
                    if (1 !== c && 2 !== c)
                        for (var p = u + 1; p < s; p++)
                            if (0 === a[p]) {
                                d = p - u;
                                break
                            }
                    if (d > 0) {
                        var f = t.utf8ArrayToStr(a.subarray(u, u += d), 0);
                        if ("PRIV" === o.value.key) {
                            if ("com.apple.streaming.transportStreamTimestamp" === f) {
                                var h = 1 & t.syncSafeInt(a.subarray(u, u += 4)),
                                    g = t.syncSafeInt(a.subarray(u, u += 4));
                                h && (g += 4294967296), o.value.data = g
                            } else o.value.data = t.utf8ArrayToStr(a, u + 1);
                            o.value.info = f
                        } else o.value.info = f, o.value.data = t.utf8ArrayToStr(a, u + 1)
                    } else {
                        var w = a[u];
                        1 === w || 2 === w ? o.value.data = t.utf16BigEndianArrayToStr(a, u + 1) : o.value.data = t.utf8ArrayToStr(a, u + 1)
                    }
                }
                if (n.hasOwnProperty(o.value.key) && (i[n[o.value.key]] = o.value.data), o.value.info) {
                    var m = i[o.value.key];
                    e.isObject(m) || (m = {}, i[o.value.key] = m), m[o.value.info] = o.value.data
                } else i[o.value.key] = o.value.data;
                return i
            }, {})
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(4), n(3), n(1)], o = function(e, t, n) {
        var i = {},
            o = {
                NEW: 0,
                LOADING: 1,
                ERROR: 2,
                COMPLETE: 3
            },
            r = function(r, a) {
                function s(t) {
                    c = o.ERROR, u.trigger(e.ERROR, t)
                }

                function l(t) {
                    c = o.COMPLETE, u.trigger(e.COMPLETE, t)
                }
                var u = n.extend(this, t),
                    c = o.NEW;
                this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function(e) {
                    var t = document.createElement("link");
                    return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
                }, this.makeScriptTag = function(e) {
                    var t = document.createElement("script");
                    return t.src = e, t
                }, this.makeTag = a ? this.makeStyleLink : this.makeScriptTag, this.load = function() {
                    if (c === o.NEW) {
                        var t = i[r];
                        if (t && (c = t.getStatus(), c < 2)) return t.on(e.ERROR, s), void t.on(e.COMPLETE, l);
                        var n = document.getElementsByTagName("head")[0] || document.documentElement,
                            u = this.makeTag(r),
                            d = !1;
                        u.onload = u.onreadystatechange = function(e) {
                            d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, l(e), u.onload = u.onreadystatechange = null, n && u.parentNode && !a && n.removeChild(u))
                        }, u.onerror = s, n.insertBefore(u, n.firstChild), c = o.LOADING, i[r] = this
                    }
                }, this.getStatus = function() {
                    return c
                }
            };
        return r.loaderstatus = o, r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = "free",
            n = "premium",
            i = "enterprise",
            o = "platinum",
            r = "ads",
            a = "unlimited",
            s = "trial",
            l = {
                setup: [t, n, i, r, a, s, o],
                dash: [n, i, r, a, s, o],
                drm: [i, r, a, s],
                hls: [n, r, i, a, s, o],
                ads: [r, a, s, o, i],
                casting: [n, i, r, a, s, o],
                jwpsrv: [t, n, i, r, s, o]
            },
            u = function(t) {
                return function(n) {
                    return e.contains(l[n], t)
                }
            };
        return u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var o = t && t.loc,
            r = void 0,
            a = void 0;
        o && (r = o.start.line, a = o.start.column, e += " - " + r + ":" + a);
        for (var s = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
        Error.captureStackTrace && Error.captureStackTrace(this, n);
        try {
            o && (this.lineNumber = r, Object.defineProperty ? Object.defineProperty(this, "column", {
                value: a
            }) : this.column = a)
        } catch (u) {}
    }
    t.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    n.prototype = new Error, t["default"] = n, e.exports = t["default"]
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            createId: function(e, t) {
                var n, i = e.kind || "cc";
                return n = e["default"] || e.defaulttrack ? "default" : e._id || e.file || i + t
            },
            createLabel: function(e, t) {
                var n = e.label || e.name || e.language;
                return n || (n = "Unknown CC", t += 1, t > 1 && (n += " [" + t + "]")), {
                    label: n,
                    unknownCount: t
                }
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(20), n(31), n(130), n(46)], o = function(e, t, i, o, r, a) {
        function s(e, t, n, a) {
            var s, u, c = e.responseXML ? e.responseXML.firstChild : null;
            if (c)
                for ("xml" === i.localName(c) && (c = c.nextSibling); c.nodeType === c.COMMENT_NODE;) c = c.nextSibling;
            try {
                if (c && "tt" === i.localName(c)) s = r(e.responseXML), u = this.convertToVTTCues(s), delete t.xhr, n(u);
                else {
                    var d = e.responseText;
                    d.indexOf("WEBVTT") >= 0 ? l(d, t, n, a) : (s = o(d), u = this.convertToVTTCues(s), delete t.xhr, n(u))
                }
            } catch (p) {
                delete t.xhr, a(p)
            }
        }

        function l(e, t, i, o) {
            n.e(12, function(require) {
                var r = n(47),
                    a = new r(window),
                    s = [];
                a.oncue = function(e) {
                    s.push(e)
                }, a.onflush = function() {
                    delete t.xhr, i(s)
                };
                try {
                    a.parse(e).flush()
                } catch (l) {
                    delete t.xhr, o(l)
                }
            })
        }
        var u = {};
        return u.loadFile = function(e, n, i) {
            e.xhr = t.ajax(e.file, function(t) {
                s.call(u, t, e, n, i)
            }, i)
        }, u.cancelXhr = function(t) {
            e.each(t, function(e) {
                var t = e.xhr;
                t && (t.onload = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()), delete e.xhr
            })
        }, u.convertToVTTCues = function(t) {
            var n = e.map(t, function(e) {
                return new a(e.begin, e.end, e.text)
            });
            return n
        }, u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9)], o = function(e) {
        return {
            localName: function(e) {
                return e ? e.localName ? e.localName : e.baseName ? e.baseName : "" : ""
            },
            textContent: function(t) {
                return t ? t.textContent ? e.trim(t.textContent) : t.text ? e.trim(t.text) : "" : ""
            },
            getChildNode: function(e, t) {
                return e.childNodes[t]
            },
            numChildren: function(e) {
                return e.childNodes ? e.childNodes.length : 0
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(134), n(135), n(52), n(24)], o = function(e, t, n, i) {
        var o = {},
            r = {},
            a = function(n, i) {
                return r[n] = new e(new t(o), i), r[n]
            },
            s = function(e, t, r, a) {
                var s = i.getPluginName(e);
                o[s] || (o[s] = new n(e)), o[s].registerPlugin(e, t, r, a)
            };
        return {
            loadPlugins: a,
            registerPlugin: s
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            repo: "http://ssl.p.jwpcdn.com/player/v/",
            SkinsIncluded: ["seven"],
            SkinsLoadable: ["beelden", "bekle", "five", "glow", "roundster", "six", "stormtrooper", "vapor"],
            dvrSeekLimit: -25
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9), n(167)], o = function(e, t) {
        function n(e) {
            e = e.split("-");
            for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
            return e.join("")
        }

        function i(t, n, i) {
            if ("" === n || void 0 === n || null === n) return "";
            var o = i ? " !important" : "";
            return "string" == typeof n && isNaN(n) ? /png|gif|jpe?g/i.test(n) && n.indexOf("url") < 0 ? "url(" + n + ")" : n + o : 0 === n || "z-index" === t || "opacity" === t ? "" + n + o : /color/i.test(t) ? "#" + e.pad(n.toString(16).replace(/^0x/i, ""), 6) + o : Math.ceil(n) + "px" + o
        }
        var o = function(e, n, i) {
                i = i || "all-players";
                var o = "";
                if ("object" == typeof n) {
                    var a;
                    for (a in n) break;
                    if (!a) return;
                    var s = document.createElement("div");
                    r(s, n), o = "{" + s.style.cssText + "}"
                } else "string" == typeof n && (o = n);
                t.style([
                    [e, e + o]
                ], i)
            },
            r = function(e, t) {
                if (void 0 !== e && null !== e) {
                    void 0 === e.length && (e = [e]);
                    var o, r = {};
                    for (o in t) r[o] = i(o, t[o]);
                    for (var a = 0; a < e.length; a++) {
                        var s, l = e[a];
                        if (void 0 !== l && null !== l)
                            for (o in r) s = n(o), l.style[s] !== r[o] && (l.style[s] = r[o])
                    }
                }
            },
            a = function(e, t) {
                r(e, {
                    transform: t,
                    webkitTransform: t,
                    msTransform: t,
                    mozTransform: t,
                    oTransform: t
                })
            },
            s = function(e, t) {
                var n = "rgb";
                e ? (e = String(e).replace("#", ""), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2])) : e = "000000";
                var i = [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
                return void 0 !== t && 100 !== t && (n += "a", i.push(t / 100)), n + "(" + i.join(",") + ")"
            };
        return {
            css: o,
            style: r,
            clearCss: t.clear,
            transform: a,
            hexToRgba: s
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9)], o = function(e) {
        var t = {},
            n = t.pluginPathType = {
                ABSOLUTE: 0,
                RELATIVE: 1,
                CDN: 2
            };
        return t.getPluginPathType = function(t) {
            if ("string" == typeof t) {
                t = t.split("?")[0];
                var i = t.indexOf("://");
                if (i > 0) return n.ABSOLUTE;
                var o = t.indexOf("/"),
                    r = e.extension(t);
                return !(i < 0 && o < 0) || r && isNaN(r) ? n.RELATIVE : n.CDN
            }
        }, t.getPluginName = function(e) {
            return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
        }, t.getPluginVersion = function(e) {
            return e.replace(/[^-]*-?([^\.]*).*$/, "$1")
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        function t(e) {
            return function() {
                return i(e)
            }
        }
        var n = {},
            i = e.memoize(function(e) {
                var t = navigator.userAgent.toLowerCase();
                return null !== t.match(e)
            }),
            o = n.isInt = function(e) {
                return parseFloat(e) % 1 === 0
            };
        n.isFlashSupported = function() {
            var e = n.flashVersion();
            return e && e >= 11.2
        }, n.isFF = t(/gecko\//i), n.isIPod = t(/iP(hone|od)/i), n.isIPad = t(/iPad/i), n.isSafari602 = t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i), n.isOSX = t(/Mac OS X/i);
        var r = n.isEdge = function(e) {
                return i(e ? new RegExp("\\sedge\\/" + e, "i") : /\sEdge\/\d+/i)
            },
            a = n.isIETrident = t(/trident\/.+rv:\s*11/i),
            s = n.isMSIE = function(e) {
                return e ? (e = parseFloat(e).toFixed(1), i(new RegExp("msie\\s*" + e, "i"))) : i(/msie/i)
            };
        n.isChrome = function() {
            return i(/\s(?:Chrome|CriOS)\//i) && !n.isEdge()
        }, n.isIE = function(e) {
            return e ? (e = parseFloat(e).toFixed(1), e >= 12 ? r(e) : e >= 11 ? a() : s(e)) : r() || a() || s()
        }, n.isSafari = function() {
            return i(/safari/i) && !i(/chrome/i) && !i(/crios/i) && !i(/chromium/i) && !i(/android/i)
        };
        var l = n.isIOS = function(e) {
            return i(e ? new RegExp("iP(hone|ad|od).+\\s(OS\\s" + e + "|.*\\sVersion/" + e + ")", "i") : /iP(hone|ad|od)/i)
        };
        n.isAndroidNative = function(e) {
            return u(e, !0)
        };
        var u = n.isAndroid = function(e, t) {
            return !(t && i(/chrome\/[123456789]/i) && !i(/chrome\/18/)) && (e ? (o(e) && !/\./.test(e) && (e = "" + e + "."), i(new RegExp("Android\\s*" + e, "i"))) : i(/Android/i))
        };
        return n.isMobile = function() {
            return l() || u()
        }, n.isIframe = function() {
            return window.frameElement && "IFRAME" === window.frameElement.nodeName
        }, n.flashVersion = function() {
            if (n.isAndroid()) return 0;
            var e, t = navigator.plugins;
            if (t && (e = t["Shockwave Flash"], e && e.description)) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
            if ("undefined" != typeof window.ActiveXObject) {
                try {
                    if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
                } catch (i) {
                    return 0
                }
                return e
            }
            return 0
        }, n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return "7.9.3+commercial_v7-9-3.158.commercial.11a746.jwplayer.869528.freewheel.1813b0.googima.798eb1.vast.e3d13e.analytics.ccd68b.plugin-gapro.7e936b.plugin-related.d1b3e9.plugin-sharing.a93859.vr-plugin.d532d3.hls.js."
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(16)], o = function(e, t) {
        var n, i = [{
                configName: "clearkey",
                keyName: "org.w3.clearkey"
            }, {
                configName: "widevine",
                keyName: "com.widevine.alpha"
            }, {
                configName: "playready",
                keyName: "com.microsoft.playready"
            }],
            o = [],
            r = {},
            a = function(t) {
                var n = t.get("playlist");
                return !!t.get("drm") || e.some(n, function(t) {
                    return !!t.drm || e.some(t.sources, function(e) {
                        return !!e.drm
                    })
                })
            },
            s = function(e) {
                return new Promise(function(t, n) {
                    var i;
                    try {
                        i = new window.MSMediaKeys(e)
                    } catch (o) {}
                    i ? t() : n()
                })
            },
            l = function(t) {
                var a = s;
                return navigator.requestMediaKeySystemAccess && (a = navigator.requestMediaKeySystemAccess.bind(navigator)), n ? n.then(t) : (e.forEach(i, function(e) {
                    var t = a(e.keyName, [{}]).then(function() {
                        r[e.configName] = !0
                    }, function() {
                        r[e.configName] = !1
                    });
                    o.push(t)
                }), n = Promise.all(o).then(t));
            },
            u = function() {
                return !!navigator.requestMediaKeySystemAccess && !!MediaKeySystemAccess.prototype.getConfiguration || !!window.MSMediaKeys
            },
            c = function(e) {
                return r[e]
            },
            d = function(t) {
                n || console.error('DRM only supported with "drm" block in initial setup.', t);
                var i = e.keys(t);
                return e.some(i, function(e) {
                    return c(e)
                })
            };
        return {
            containsDrm: a,
            probe: function(e, n) {
                u() && t(n)("drm") ? l(e) : e()
            },
            anySupported: d,
            isSupported: c
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r, a = null != t ? t : {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div class="jw-display-icon-container jw-display-icon-' + u((r = null != (r = n.iconName || (null != t ? t.iconName : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "iconName",
                hash: {},
                data: o
            }) : r)) + ' jw-background-color jw-reset">\n  <div class="jw-icon jw-icon-' + u((r = null != (r = n.iconName || (null != t ? t.iconName : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "iconName",
                hash: {},
                data: o
            }) : r)) + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + u((r = null != (r = n.ariaLabel || (null != t ? t.ariaLabel : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "ariaLabel",
                hash: {},
                data: o
            }) : r)) + '"></div>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(39), n(126), n(1), n(3), n(142), n(4), n(5)], o = function(e, t, n, i, o, r, a, s) {
        var l = function() {
                function r(e, t) {
                    var n = i.extend({}, t, {
                            type: e
                        }),
                        o = this.mediaModel;
                    switch (e) {
                        case "flashThrottle":
                            var r = "resume" !== t.state;
                            this.set("flashThrottle", r), this.set("flashBlocked", r);
                            break;
                        case "flashBlocked":
                            return void this.set("flashBlocked", !0);
                        case "flashUnblocked":
                            return void this.set("flashBlocked", !1);
                        case "volume":
                            return void this.set(e, t[e]);
                        case "mute":
                            return void(this.get("autostartMuted") || this.set(e, t[e]));
                        case a.JWPLAYER_MEDIA_TYPE:
                            return void(o.get("mediaType") !== t.mediaType && (o.set("mediaType", t.mediaType), this.mediaController.trigger(e, n)));
                        case a.JWPLAYER_PLAYER_STATE:
                            return void o.set("state", t.newstate);
                        case a.JWPLAYER_MEDIA_BUFFER:
                            this.set("buffer", t.bufferPercent);
                        case a.JWPLAYER_MEDIA_META:
                            var l = t.duration;
                            i.isNumber(l) && !i.isNaN(l) && (o.set("duration", l), this.set("duration", l));
                            break;
                        case a.JWPLAYER_MEDIA_BUFFER_FULL:
                            o.get("playAttempt") ? this.playVideo() : o.on("change:playAttempt", function() {
                                this.playVideo()
                            }, this);
                            break;
                        case a.JWPLAYER_MEDIA_TIME:
                            o.set("position", t.position), this.set("position", t.position), i.isNumber(t.duration) && (o.set("duration", t.duration), this.set("duration", t.duration));
                            break;
                        case a.JWPLAYER_PROVIDER_CHANGED:
                            this.set("provider", d.getName());
                            break;
                        case a.JWPLAYER_MEDIA_LEVELS:
                            this.setQualityLevel(t.currentQuality, t.levels), o.set("levels", t.levels);
                            break;
                        case a.JWPLAYER_MEDIA_LEVEL_CHANGED:
                            this.setQualityLevel(t.currentQuality, t.levels), this.persistQualityLevel(t.currentQuality, t.levels);
                            break;
                        case a.JWPLAYER_AUDIO_TRACKS:
                            this.setCurrentAudioTrack(t.currentTrack, t.tracks), o.set("audioTracks", t.tracks);
                            break;
                        case a.JWPLAYER_AUDIO_TRACK_CHANGED:
                            this.setCurrentAudioTrack(t.currentTrack, t.tracks);
                            break;
                        case "subtitlesTrackChanged":
                            this.persistVideoSubtitleTrack(t.currentTrack, t.tracks);
                            break;
                        case "visualQuality":
                            var u = i.extend({}, t);
                            o.set("visualQuality", u);
                            break;
                        case "autoplayFailed":
                            this.set("autostartFailed", !0), o.get("state") === s.PLAYING && o.set("state", s.PAUSED)
                    }
                    this.mediaController.trigger(e, n)
                }

                function l() {
                    return !!e.isIOS() && !(e.isIOS(6) || e.isIOS(7) || e.isIOS(8) || e.isIOS(9))
                }
                var c, d, p = this,
                    f = e.noop;
                this.mediaController = i.extend({}, o), this.mediaModel = new u, n.model(this), this.set("mediaModel", this.mediaModel), this.setup = function(e) {
                    return i.extend(this.attributes, e, {
                        item: 0,
                        state: s.IDLE,
                        flashBlocked: !1,
                        fullscreen: !1,
                        scrubbing: !1,
                        duration: 0,
                        position: 0,
                        buffer: 0
                    }), this.updateProviders(), this
                }, this.getConfiguration = function() {
                    return i.omit(this.clone(), ["mediaModel"])
                }, this.updateProviders = function() {
                    c = new t(this.getConfiguration())
                }, this.setQualityLevel = function(e, t) {
                    e > -1 && t.length > 1 && "youtube" !== d.getName().name && this.mediaModel.set("currentLevel", parseInt(e))
                }, this.persistQualityLevel = function(e, t) {
                    var n = t[e] || {},
                        i = n.label;
                    this.set("qualityLabel", i)
                }, this.setCurrentAudioTrack = function(e, t) {
                    e > -1 && t.length > 0 && e < t.length && this.mediaModel.set("currentAudioTrack", parseInt(e))
                }, this.onMediaContainer = function() {
                    var e = this.get("mediaContainer");
                    f.setContainer(e)
                }, this.changeVideoProvider = function(e) {
                    if (this.off("change:mediaContainer", this.onMediaContainer), d && (d.off(null, null, this), d.getContainer() && d.remove(), delete d.instreamMode), !e) return d = f = e, void this.set("provider", void 0);
                    f = new e(p.get("id"), p.getConfiguration());
                    var t = this.get("mediaContainer");
                    t ? f.setContainer(t) : this.once("change:mediaContainer", this.onMediaContainer), this.set("provider", f.getName()), f.getName().name.indexOf("flash") === -1 && (this.set("flashThrottle", void 0), this.set("flashBlocked", !1)), d = f, d.volume(p.get("volume")), d.mute(this.autoStartOnMobile() || p.get("mute")), d.on("all", r, this), this.get("instreamMode") === !0 && (d.instreamMode = !0), this.set("renderCaptionsNatively", d.renderNatively)
                }, this.destroy = function() {
                    this.off(), d && (d.off(null, null, this), d.destroy())
                }, this.getVideo = function() {
                    return d
                }, this.setFullscreen = function(e) {
                    e = !!e, e !== p.get("fullscreen") && p.set("fullscreen", e)
                }, this.chooseProvider = function(e) {
                    return c.choose(e).provider
                }, this.setItemIndex = function(e) {
                    var t = this.get("playlist");
                    e = parseInt(e, 10) || 0, e = (e + t.length) % t.length, this.set("item", e), this.set("playlistItem", t[e]), this.setActiveItem(t[e])
                }, this.setActiveItem = function(t) {
                    this.mediaModel.off(), this.mediaModel = new u, this.set("mediaModel", this.mediaModel), this.set("position", t.starttime || 0), this.set("minDvrWindow", t.minDvrWindow), this.set("duration", t.duration && e.seconds(t.duration) || 0), this.setProvider(t)
                }, this.setProvider = function(e) {
                    var t = e && e.sources && e.sources[0];
                    if (void 0 !== t) {
                        var n = this.chooseProvider(t);
                        n && f instanceof n || p.changeVideoProvider(n), f && (f.init && f.init(e), this.trigger("itemReady", e))
                    }
                }, this.getProviders = function() {
                    return c
                }, this.resetProvider = function() {
                    f = null
                }, this.setVolume = function(e) {
                    e = Math.round(e), this.set("volume", e), d && d.volume(e);
                    var t = 0 === e;
                    t !== this.getMute() && this.setMute(t)
                }, this.getMute = function() {
                    return this.get("autostartMuted") || this.get("mute")
                }, this.setMute = function(t) {
                    if (e.exists(t) || (t = !this.getMute()), this.set("mute", t), d && d.mute(t), !t) {
                        var n = Math.max(10, this.get("volume"));
                        this.set("autostartMuted", !1), this.setVolume(n)
                    }
                }, this.loadVideo = function(t) {
                    if (!t) {
                        var n = this.get("item");
                        t = this.get("playlist")[n]
                    }
                    this.set("position", t.starttime || 0), this.set("duration", t.duration && e.seconds(t.duration) || 0), this.mediaModel.set("playAttempt", !0), this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT, {
                        playReason: this.get("playReason")
                    }), d.load(t)
                }, this.stopVideo = function() {
                    d && d.stop()
                }, this.playVideo = function() {
                    d.play()
                }, this.persistCaptionsTrack = function() {
                    var e = this.get("captionsTrack");
                    e ? this.set("captionLabel", e.name) : this.set("captionLabel", "Off")
                }, this.setVideoSubtitleTrack = function(e, t) {
                    this.set("captionsIndex", e), e && t && e <= t.length && t[e - 1].data && this.set("captionsTrack", t[e - 1]), d && d.setSubtitlesTrack && d.setSubtitlesTrack(e)
                }, this.persistVideoSubtitleTrack = function(e, t) {
                    this.setVideoSubtitleTrack(e, t), this.persistCaptionsTrack()
                }, this.setNextUp = function(e) {
                    this.set("nextUp", e)
                }, this.autoStartOnMobile = function() {
                    return this.get("autostart") && !this.get("sdkplatform") && (l() && e.isSafari() || e.isAndroid() && e.isChrome()) && (!this.get("advertising") || this.get("advertising").autoplayadsmuted)
                }
            },
            u = l.MediaModel = function() {
                this.set("state", s.IDLE)
            };
        return i.extend(l.prototype, r), i.extend(u.prototype, r), l
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(5)], o = function(e) {
        function t(t) {
            return t === e.COMPLETE || t === e.ERROR ? e.IDLE : t
        }
        return function(e, n, i) {
            if (n = t(n), i = t(i), n !== i) {
                var o = n.replace(/(?:ing|d)$/, ""),
                    r = {
                        type: o,
                        newstate: n,
                        oldstate: i,
                        reason: e.mediaModel.get("state")
                    };
                "play" === o ? r.playReason = e.get("playReason") : "pause" === o && (r.pauseReason = e.get("pauseReason")), this.trigger(o, r)
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(9)], o = function(e, t) {
        function n(e) {
            var t = {},
                n = e.split("\r\n");
            1 === n.length && (n = e.split("\n"));
            var o = 1;
            if (n[0].indexOf(" --> ") > 0 && (o = 0), n.length > o + 1 && n[o + 1]) {
                var r = n[o],
                    a = r.indexOf(" --> ");
                a > 0 && (t.begin = i(r.substr(0, a)), t.end = i(r.substr(a + 5)), t.text = n.slice(o + 1).join("\r\n"))
            }
            return t
        }
        var i = e.seconds;
        return function(e) {
            var i = [];
            e = t.trim(e);
            var o = e.split("\r\n\r\n");
            1 === o.length && (o = e.split("\n\n"));
            for (var r = 0; r < o.length; r++)
                if ("WEBVTT" !== o[r]) {
                    var a = n(o[r]);
                    a.text && i.push(a)
                }
            return i
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(51), n(133)], o = function(e, t, n) {
        var i = {
            sources: [],
            tracks: [],
            minDvrWindow: 120
        };
        return function(o) {
            o = o || {}, e.isArray(o.tracks) || delete o.tracks;
            var r = e.extend({}, i, o);
            e.isObject(r.sources) && !e.isArray(r.sources) && (r.sources = [t(r.sources)]), e.isArray(r.sources) && 0 !== r.sources.length || (o.levels ? r.sources = o.levels : r.sources = [t(o)]);
            for (var a = 0; a < r.sources.length; a++) {
                var s = r.sources[a];
                if (s) {
                    var l = s["default"];
                    l ? s["default"] = "true" === l.toString() : s["default"] = !1, r.sources[a].label || (r.sources[a].label = a.toString()), r.sources[a] = t(r.sources[a])
                }
            }
            return r.sources = e.compact(r.sources), e.isArray(r.tracks) || (r.tracks = []), e.isArray(r.captions) && (r.tracks = r.tracks.concat(r.captions), delete r.captions), r.tracks = e.compact(e.map(r.tracks, n)), r
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9), n(1), n(141)], o = function(e, t, n) {
        var i = {};
        i.createElement = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.firstChild
        }, i.styleDimension = function(e) {
            return e + (e.toString().indexOf("%") > 0 ? "" : "px")
        };
        var o = function(e) {
                return t.isString(e.className) ? e.className.split(" ") : []
            },
            r = function(t, n) {
                n = e.trim(n), t.className !== n && (t.className = n)
            };
        return i.classList = function(e) {
            return e.classList ? e.classList : o(e)
        }, i.hasClass = n.hasClass, i.addClass = function(e, n) {
            var i = o(e),
                a = t.isArray(n) ? n : n.split(" ");
            t.each(a, function(e) {
                t.contains(i, e) || i.push(e)
            }), r(e, i.join(" "))
        }, i.removeClass = function(e, n) {
            var i = o(e),
                a = t.isArray(n) ? n : n.split(" ");
            r(e, t.difference(i, a).join(" "))
        }, i.replaceClass = function(e, t, n) {
            var i = e.className || "";
            t.test(i) ? i = i.replace(t, n) : n && (i += " " + n), r(e, i)
        }, i.toggleClass = function(e, n, o) {
            var r = i.hasClass(e, n);
            o = t.isBoolean(o) ? o : !r, o !== r && (o ? i.addClass(e, n) : i.removeClass(e, n))
        }, i.emptyElement = function(e) {
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }, i.addStyleSheet = function(e) {
            var t = document.createElement("link");
            t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
        }, i.empty = function(e) {
            if (e)
                for (; e.childElementCount > 0;) e.removeChild(e.children[0])
        }, i.bounds = function(e) {
            var t = {
                left: 0,
                right: 0,
                width: 0,
                height: 0,
                top: 0,
                bottom: 0
            };
            if (!e || !document.body.contains(e)) return t;
            var n = e.getBoundingClientRect(),
                i = window.pageYOffset,
                o = window.pageXOffset;
            return n.width || n.height || n.left || n.top ? (t.left = n.left + o, t.right = n.right + o, t.top = n.top + i, t.bottom = n.bottom + i, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t
        }, i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(35)], o = function(e, t) {
        function n(e) {
            return /^(?:(?:https?|file)\:)?\/\//.test(e)
        }

        function i(t) {
            return e.some(t, function(e) {
                return "parsererror" === e.nodeName
            })
        }
        var o = {};
        return o.getAbsolutePath = function(e, i) {
            if (t.exists(i) || (i = document.location.href), t.exists(e)) {
                if (n(e)) return e;
                var o, r = i.substring(0, i.indexOf("://") + 3),
                    a = i.substring(r.length, i.indexOf("/", r.length + 1));
                if (0 === e.indexOf("/")) o = e.split("/");
                else {
                    var s = i.split("?")[0];
                    s = s.substring(r.length + a.length + 1, s.lastIndexOf("/")), o = s.split("/").concat(e.split("/"))
                }
                for (var l = [], u = 0; u < o.length; u++) o[u] && t.exists(o[u]) && "." !== o[u] && (".." === o[u] ? l.pop() : l.push(o[u]));
                return r + a + "/" + l.join("/")
            }
        }, o.getScriptPath = e.memoize(function(e) {
            for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                var i = t[n].src;
                if (i && i.indexOf(e) >= 0) return i.substr(0, i.indexOf(e))
            }
            return ""
        }), o.parseXML = function(e) {
            var t = null;
            try {
                "DOMParser" in window ? (t = (new window.DOMParser).parseFromString(e, "text/xml"), (i(t.childNodes) || t.childNodes && i(t.childNodes[0].childNodes)) && (t = null)) : (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (n) {}
            return t
        }, o.serialize = function(e) {
            if (void 0 === e) return null;
            if ("string" == typeof e && e.length < 6) {
                var t = e.toLowerCase();
                if ("true" === t) return !0;
                if ("false" === t) return !1;
                if (!isNaN(Number(e)) && !isNaN(parseFloat(e))) return Number(e)
            }
            return e
        }, o.parseDimension = function(e) {
            return "string" == typeof e ? "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
        }, o.timeFormat = function(t, n) {
            if (t <= 0 && !n || e.isNaN(parseInt(t))) return "00:00";
            var i = t < 0 ? "-" : "";
            t = Math.abs(t);
            var o = Math.floor(t / 3600),
                r = Math.floor((t - 3600 * o) / 60),
                a = Math.floor(t % 60);
            return i + (o ? o + ":" : "") + (r < 10 ? "0" : "") + r + ":" + (a < 10 ? "0" : "") + a
        }, o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {};
        return t.exists = function(e) {
            switch (typeof e) {
                case "string":
                    return e.length > 0;
                case "object":
                    return null !== e;
                case "undefined":
                    return !1
            }
            return !0
        }, t.isHTTPS = function() {
            return 0 === window.location.href.indexOf("https")
        }, t.isRtmp = function(e, t) {
            return 0 === e.indexOf("rtmp") || "rtmp" === t
        }, t.isYouTube = function(e, t) {
            return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
        }, t.youTubeID = function(e) {
            var t = /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);
            return t ? t.slice(1).join("").replace("?", "") : ""
        }, t.typeOf = function(t) {
            if (null === t) return "null";
            var n = typeof t;
            return "object" === n && e.isArray(t) ? "array" : n
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(62), n(7), n(110), n(2)], o = function(e, t, n, i) {
        var o = function(e) {
                var t = i.bounds(e),
                    n = window.pageXOffset;
                return n && i.isAndroid() && document.body.parentElement.getBoundingClientRect().left >= 0 && (t.left -= n, t.right -= n), t
            },
            r = e.extend({
                constructor: function(e, t) {
                    this.className = e + " jw-background-color jw-reset", this.orientation = t, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup()
                },
                setup: function() {
                    var e = {
                        "default": this["default"],
                        className: this.className,
                        orientation: "jw-slider-" + this.orientation
                    };
                    this.el = i.createElement(n(e)), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.userInteract = new t(this.element(), {
                        preventScrolling: !0
                    }), this.userInteract.on("dragStart", this.dragStartListener), this.userInteract.on("drag", this.dragMoveListener), this.userInteract.on("dragEnd", this.dragEndListener), this.userInteract.on("tap click", this.tapListener)
                },
                dragStart: function() {
                    this.trigger("dragStart"), this.railBounds = o(this.elementRail)
                },
                dragEnd: function(e) {
                    this.dragMove(e), this.trigger("dragEnd")
                },
                dragMove: function(e) {
                    var t, n, r = this.railBounds = this.railBounds ? this.railBounds : o(this.elementRail);
                    "horizontal" === this.orientation ? (t = e.pageX, n = t < r.left ? 0 : t > r.right ? 100 : 100 * i.between((t - r.left) / r.width, 0, 1)) : (t = e.pageY, n = t >= r.bottom ? 0 : t <= r.top ? 100 : 100 * i.between((r.height - (t - r.top)) / r.height, 0, 1));
                    var a = this.limit(n);
                    return this.render(a), this.update(a), !1
                },
                tap: function(e) {
                    this.railBounds = o(this.elementRail), this.dragMove(e)
                },
                limit: function(e) {
                    return e
                },
                update: function(e) {
                    this.trigger("update", {
                        percentage: e
                    })
                },
                render: function(e) {
                    e = Math.max(0, Math.min(e, 100)), "horizontal" === this.orientation ? (this.elementThumb.style.left = e + "%", this.elementProgress.style.width = e + "%") : (this.elementThumb.style.bottom = e + "%", this.elementProgress.style.height = e + "%")
                },
                updateBuffer: function(e) {
                    this.elementBuffer.style.width = e + "%"
                },
                element: function() {
                    return this.el
                }
            });
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(62), n(2)], o = function(e, t) {
        var n = e.extend({
            constructor: function(e, t, n) {
                this.el = document.createElement("div"), this.el.className = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset jw-hidden", t && (this.el.setAttribute("tabindex", "0"), this.el.setAttribute("role", "button"), this.el.setAttribute("aria-label", t)), n === !0 ? this.el.setAttribute("aria-hidden", "false") : this.el.setAttribute("aria-hidden", "true"), this.container = document.createElement("div"), this.container.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", this.el.appendChild(this.container)
            },
            addContent: function(e) {
                this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
            },
            removeContent: function() {
                this.content && (this.container.removeChild(this.content), this.content = null)
            },
            hasContent: function() {
                return !!this.content
            },
            element: function() {
                return this.el
            },
            openTooltip: function(e) {
                this.trigger("open-" + this.componentType, e, {
                    isOpen: !0
                }), this.isOpen = !0, t.toggleClass(this.el, this.openClass, this.isOpen)
            },
            closeTooltip: function(e) {
                this.trigger("close-" + this.componentType, e, {
                    isOpen: !1
                }), this.isOpen = !1, t.toggleClass(this.el, this.openClass, this.isOpen)
            },
            toggleOpenState: function(e) {
                this.isOpen ? this.closeTooltip(e) : this.openTooltip(e)
            }
        });
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(25), n(16), n(1), n(138), n(27)], o = function(e, t, n, i, o) {
        function r() {
            return !!window.MediaSource && !!window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
        }

        function a(i, r) {
            if (e.isSafari()) return !1;
            var a = t(r);
            if (!a("dash")) return !1;
            if (i.drm && !o.anySupported(i.drm)) return !1;
            var s = window.MediaSource;
            if (!window.HTMLVideoElement || !s) return !1;
            var l = !0;
            return i.mediaTypes && (l = n.all(i.mediaTypes, function(e) {
                return s.isTypeSupported(e)
            })), l && ("dash" === i.type || "mpd" === i.type || (i.file || "").indexOf("mpd-time-csf") > -1)
        }
        var s = n.find(i, n.matches({
                name: "flash"
            })),
            l = s.supports;
        s.supports = function(n, i) {
            if (!e.isFlashSupported() || n.drm) return !1;
            var o = n && n.type;
            if ("hls" === o || "m3u8" === o) {
                var r = t(i);
                return r("hls")
            }
            return l.apply(this, arguments)
        };
        var u = n.find(i, n.matches({
                name: "html5"
            })),
            c = u.supports;
        return u.supports = function(e, n) {
            var i = c.apply(this, arguments);
            if (i && e.drm && "hls" === e.type) {
                var o = t(n),
                    r = o("drm");
                if (r && e.drm.fairplay) {
                    var a = window.WebKitMediaKeys;
                    return a && a.isTypeSupported && a.isTypeSupported("com.apple.fps.1_0", "video/mp4")
                }
                return r
            }
            return i
        }, i.push({
            name: "shaka",
            supports: a
        }), i.splice(1, 0, {
            name: "hlsjs",
            supports: function(n, i) {
                var o = e.isChrome() || e.isFF() || e.isIE(11) && n.hlsjsdefault,
                    a = e.isAndroid() && n.hlsjsdefault;
                if (o && r() && (!e.isMobile() || a) && !n.drm) {
                    var s = n && n.type,
                        l = n && n.file;
                    if (l.indexOf(".m3u8") > -1 || "hls" === s || "m3u8" === s) {
                        var u = t(i);
                        return u("hls")
                    }
                }
            }
        }), i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(139), n(1), n(38)], o = function(e, t) {
        function i(e, n, i) {
            var o = t.indexOf(e, t.findWhere(e, {
                    name: i
                })),
                r = t.indexOf(e, t.findWhere(e, {
                    name: n
                }));
            if (!(r < o)) {
                var a = e.splice(r, 1)[0];
                e.splice(o, 0, a)
            }
        }
        var o, r = e.registerProvider,
            a = e.prototype.reorderProviders;
        return t.extend(e.loaders, {
            shaka: function(e) {
                n.e(2, function(require) {
                    var t = n(71);
                    r(t), e(t)
                })
            },
            hlsjs: function(e) {
                n.e(1, function(require) {
                    var t = n(43);
                    t["default"] && (t = t["default"]), t.setEdition && t.setEdition(o), r(t), e(t)
                })
            }
        }), t.extend(e.prototype, {
            reorderProviders: function(e) {
                var t = a.call(this, e);
                return "flash" !== e ? i(t, "hlsjs", "flash") : (i(t, "flash", "hlsjs"), i(t, "hlsjs", "html5")), t
            },
            providerSupports: function(e, t) {
                return o = this.config.edition, e.supports(t, o)
            }
        }), e
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t, n) {
        this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this)
    }
    t.__esModule = !0, t.HandlebarsEnvironment = o;
    var r = n(11),
        a = n(17),
        s = i(a),
        l = n(85),
        u = n(83),
        c = n(93),
        d = i(c),
        p = "4.0.5";
    t.VERSION = p;
    var f = 7;
    t.COMPILER_REVISION = f;
    var h = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };
    t.REVISION_CHANGES = h;
    var g = "[object Object]";
    o.prototype = {
        constructor: o,
        logger: d["default"],
        log: d["default"].log,
        registerHelper: function(e, t) {
            if (r.toString.call(e) === g) {
                if (t) throw new s["default"]("Arg not supported with multiple helpers");
                r.extend(this.helpers, e)
            } else this.helpers[e] = t
        },
        unregisterHelper: function(e) {
            delete this.helpers[e]
        },
        registerPartial: function(e, t) {
            if (r.toString.call(e) === g) r.extend(this.partials, e);
            else {
                if ("undefined" == typeof t) throw new s["default"]('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        },
        unregisterPartial: function(e) {
            delete this.partials[e]
        },
        registerDecorator: function(e, t) {
            if (r.toString.call(e) === g) {
                if (t) throw new s["default"]("Arg not supported with multiple decorators");
                r.extend(this.decorators, e)
            } else this.decorators[e] = t
        },
        unregisterDecorator: function(e) {
            delete this.decorators[e]
        }
    };
    var w = d["default"].log;
    t.log = w, t.createFrame = r.createFrame, t.logger = d["default"]
}, , function(e, t, n) {
    var i;
    i = function() {
        function e(e) {
            if ("string" != typeof e) return !1;
            var t = r[e.toLowerCase()];
            return !!t && e.toLowerCase()
        }

        function t(e) {
            if ("string" != typeof e) return !1;
            var t = a[e.toLowerCase()];
            return !!t && e.toLowerCase()
        }

        function n(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) e[i] = n[i]
            }
            return e
        }

        function i(i, r, a) {
            var s = this,
                l = /MSIE\s8\.0/.test(navigator.userAgent),
                u = {};
            l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1;
            var c = "",
                d = !1,
                p = i,
                f = r,
                h = a,
                g = null,
                w = "",
                m = !0,
                v = "auto",
                j = "start",
                y = 50,
                b = "middle",
                x = 50,
                E = "middle";
            if (Object.defineProperty(s, "id", n({}, u, {
                    get: function() {
                        return c
                    },
                    set: function(e) {
                        c = "" + e
                    }
                })), Object.defineProperty(s, "pauseOnExit", n({}, u, {
                    get: function() {
                        return d
                    },
                    set: function(e) {
                        d = !!e
                    }
                })), Object.defineProperty(s, "startTime", n({}, u, {
                    get: function() {
                        return p
                    },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                        p = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "endTime", n({}, u, {
                    get: function() {
                        return f
                    },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                        f = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "text", n({}, u, {
                    get: function() {
                        return h
                    },
                    set: function(e) {
                        h = "" + e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "region", n({}, u, {
                    get: function() {
                        return g
                    },
                    set: function(e) {
                        g = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "vertical", n({}, u, {
                    get: function() {
                        return w
                    },
                    set: function(t) {
                        var n = e(t);
                        if (n === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                        w = n, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "snapToLines", n({}, u, {
                    get: function() {
                        return m
                    },
                    set: function(e) {
                        m = !!e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "line", n({}, u, {
                    get: function() {
                        return v
                    },
                    set: function(e) {
                        if ("number" != typeof e && e !== o) throw new SyntaxError("An invalid number or illegal string was specified.");
                        v = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "lineAlign", n({}, u, {
                    get: function() {
                        return j
                    },
                    set: function(e) {
                        var n = t(e);
                        if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
                        j = n, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "position", n({}, u, {
                    get: function() {
                        return y
                    },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                        y = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "positionAlign", n({}, u, {
                    get: function() {
                        return b
                    },
                    set: function(e) {
                        var n = t(e);
                        if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
                        b = n, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "size", n({}, u, {
                    get: function() {
                        return x
                    },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                        x = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "align", n({}, u, {
                    get: function() {
                        return E
                    },
                    set: function(e) {
                        var n = t(e);
                        if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
                        E = n, this.hasBeenReset = !0
                    }
                })), s.displayState = void 0, l) return s
        }
        if (window.VTTCue) return window.VTTCue;
        var o = "auto",
            r = {
                "": !0,
                lr: !0,
                rl: !0
            },
            a = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
        return i.prototype.getCueAsHTML = function() {
            var e = window.WebVTT;
            return e.convertCueToDOMTree(window, this.text)
        }, i
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
}, , function(e, t, n) {
    var i, o;
    i = [n(9), n(20), n(131), n(132), n(32)], o = function(e, t, n, i, o) {
        function r(t) {
            for (var r = {}, s = 0; s < t.childNodes.length; s++) {
                var l = t.childNodes[s],
                    c = u(l);
                if (c) switch (c.toLowerCase()) {
                    case "enclosure":
                        r.file = e.xmlAttribute(l, "url");
                        break;
                    case "title":
                        r.title = a(l);
                        break;
                    case "guid":
                        r.mediaid = a(l);
                        break;
                    case "pubdate":
                        r.date = a(l);
                        break;
                    case "description":
                        r.description = a(l);
                        break;
                    case "link":
                        r.link = a(l);
                        break;
                    case "category":
                        r.tags ? r.tags += a(l) : r.tags = a(l)
                }
            }
            return r = i(t, r), r = n(t, r), new o(r)
        }
        var a = t.textContent,
            s = t.getChildNode,
            l = t.numChildren,
            u = t.localName,
            c = {};
        return c.parse = function(e) {
            for (var t = [], n = 0; n < l(e); n++) {
                var i = s(e, n),
                    o = u(i).toLowerCase();
                if ("channel" === o)
                    for (var a = 0; a < l(i); a++) {
                        var c = s(i, a);
                        "item" === u(c).toLowerCase() && t.push(r(c))
                    }
            }
            return t
        }, c
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(20), n(48), n(2), n(4), n(3), n(1)], o = function(e, t, n, i, o, r) {
        var a = function() {
            function a(o) {
                var a = n.tryCatch(function() {
                    var n, a = o.responseXML ? o.responseXML.childNodes : null,
                        s = "";
                    if (a) {
                        for (var c = 0; c < a.length && (s = a[c], 8 === s.nodeType); c++);
                        "xml" === e.localName(s) && (s = s.nextSibling), "rss" === e.localName(s) && (n = {
                            playlist: t.parse(s)
                        })
                    }
                    if (!n) try {
                        var d = JSON.parse(o.responseText);
                        if (r.isArray(d)) n = {
                            playlist: d
                        };
                        else {
                            if (!r.isArray(d.playlist)) throw null;
                            n = d
                        }
                    } catch (p) {
                        return void l("Not a valid RSS/JSON feed")
                    }
                    u.trigger(i.JWPLAYER_PLAYLIST_LOADED, n)
                });
                a instanceof n.Error && l()
            }

            function s(e) {
                l("Playlist load error: " + e)
            }

            function l(e) {
                u.trigger(i.JWPLAYER_ERROR, {
                    message: e ? e : "Error loading file"
                })
            }
            var u = r.extend(this, o);
            this.load = function(e) {
                n.ajax(e, a, s)
            }, this.destroy = function() {
                this.off()
            }
        };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(32), n(51), n(1), n(39)], o = function(e, t, n, i) {
        function o(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                    o = t.choose(i);
                if (o) return {
                    type: i.type,
                    provider: o.providerToCheck
                }
            }
            return null
        }

        function r(e, t) {
            return n.isUndefined(e) ? t : e
        }
        var a = function(t) {
            return t = n.isArray(t) ? t : [t], n.compact(n.map(t, e))
        };
        a.filterPlaylist = function(e, t) {
            var i = [],
                o = t.getProviders(),
                r = t.get("preload"),
                a = t.get("feedid");
            return n.each(e, function(e) {
                e = n.extend({}, e), e.allSources = s(e, t), e.sources = l(e.allSources, o), e.sources.length && (e.file = e.sources[0].file, (e.preload || r) && (e.preload = e.preload || r), (e.feedid || a) && (e.feedid = e.feedid || a), i.push(e))
            }), i
        };
        var s = function(e, i) {
                var o = e.sources,
                    a = i.get("androidhls"),
                    s = e.drm || i.get("drm"),
                    l = e.preload || i.get("preload"),
                    u = r(e.withCredentials, i.get("withCredentials")),
                    c = i.get("hlsjsdefault");
                return n.compact(n.map(o, function(e) {
                    if (n.isObject(e)) {
                        void 0 !== a && null !== a && (e.androidhls = a), (e.drm || s) && (e.drm = e.drm || s), (e.preload || l) && (e.preload = e.preload || l);
                        var i = r(e.withCredentials, u);
                        return n.isUndefined(i) || (e.withCredentials = i), c && (e.hlsjsdefault = c), t(e)
                    }
                }))
            },
            l = function(e, t) {
                t && t.choose || (t = new i({
                    primary: t ? "flash" : null
                }));
                var r = o(e, t);
                if (!r) return [];
                var a = r.provider,
                    s = r.type;
                return n.filter(e, function(e) {
                    return e.type === s && t.providerSupports(a, e)
                })
            };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(9), n(1)], o = function(e, t, n) {
        var i = {
                "default": !1
            },
            o = function(o) {
                if (o && o.file) {
                    var r = n.extend({}, i, o);
                    r.file = t.trim("" + r.file);
                    var a = /^[^\/]+\/(?:x-)?([^\/]+)$/;
                    if (a.test(r.type) && (r.mimeType = r.type, r.type = r.type.replace(a, "$1")), e.isYouTube(r.file) ? r.type = "youtube" : e.isRtmp(r.file) ? r.type = "rtmp" : r.type || (r.type = t.extension(r.file)), r.type) {
                        switch (r.type) {
                            case "m3u8":
                            case "vnd.apple.mpegurl":
                                r.type = "hls";
                                break;
                            case "dash+xml":
                                r.type = "dash";
                                break;
                            case "smil":
                                r.type = "rtmp";
                                break;
                            case "m4a":
                                r.type = "aac"
                        }
                        return n.each(r, function(e, t) {
                            "" === e && delete r[t]
                        }), r
                    }
                }
            };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(24), n(4), n(3), n(15), n(1)], o = function(e, t, n, i, o, r) {
        var a = {
                FLASH: 0,
                JAVASCRIPT: 1,
                HYBRID: 2
            },
            s = function(s) {
                function l() {
                    switch (t.getPluginPathType(s)) {
                        case t.pluginPathType.ABSOLUTE:
                            return s;
                        case t.pluginPathType.RELATIVE:
                            return e.getAbsolutePath(s, window.location.href)
                    }
                }

                function u() {
                    r.defer(function() {
                        w = o.loaderstatus.COMPLETE, g.trigger(n.COMPLETE)
                    })
                }

                function c() {
                    w = o.loaderstatus.ERROR, g.trigger(n.ERROR, {
                        url: s
                    })
                }
                var d, p, f, h, g = r.extend(this, i),
                    w = o.loaderstatus.NEW;
                this.load = function() {
                    if (w === o.loaderstatus.NEW) {
                        if (s.lastIndexOf(".swf") > 0) return d = s, w = o.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE);
                        if (t.getPluginPathType(s) === t.pluginPathType.CDN) return w = o.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE);
                        w = o.loaderstatus.LOADING;
                        var e = new o(l());
                        e.on(n.COMPLETE, u), e.on(n.ERROR, c), e.load()
                    }
                }, this.registerPlugin = function(e, t, i, r) {
                    h && (clearTimeout(h), h = void 0), f = t, i && r ? (d = r, p = i) : "string" == typeof i ? d = i : "function" == typeof i ? p = i : i || r || (d = e), w = o.loaderstatus.COMPLETE, g.trigger(n.COMPLETE)
                }, this.getStatus = function() {
                    return w
                }, this.getPluginName = function() {
                    return t.getPluginName(s)
                }, this.getFlashPath = function() {
                    if (d) switch (t.getPluginPathType(d)) {
                        case t.pluginPathType.ABSOLUTE:
                            return d;
                        case t.pluginPathType.RELATIVE:
                            return s.lastIndexOf(".swf") > 0 ? e.getAbsolutePath(d, window.location.href) : e.getAbsolutePath(d, l())
                    }
                    return null
                }, this.getJS = function() {
                    return p
                }, this.getTarget = function() {
                    return f
                }, this.getPluginmode = function() {
                    return void 0 !== typeof d && void 0 !== typeof p ? a.HYBRID : void 0 !== typeof d ? a.FLASH : void 0 !== typeof p ? a.JAVASCRIPT : void 0
                }, this.getNewInstance = function(e, t, n) {
                    return new p(e, t, n)
                }, this.getURL = function() {
                    return s
                }
            };
        return s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , , , function(e, t, n) {
    var i, o;
    i = [n(25)], o = function(e) {
        return function(t) {
            if ("hls" === t.type) {
                if (t.androidhls === !1 && e.isAndroid()) return !1;
                var n = e.isAndroidNative;
                if (n(2) || n(3) || n("4.0")) return !1;
                if (e.isAndroid() && !e.isFF()) return !0
            }
            return null
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(1), n(34)], o = function(e, t) {
        function n(e) {
            e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
        }

        function i(t, i) {
            return function(o) {
                var r = o.currentTarget || i.xhr;
                if (clearTimeout(i.timeoutId), i.retryWithoutCredentials && i.xhr.withCredentials) {
                    n(r);
                    var a = e.extend({}, i, {
                        xhr: null,
                        withCredentials: !1,
                        retryWithoutCredentials: !1
                    });
                    return void d(a)
                }
                i.onerror(t, i.url, r)
            }
        }

        function o(e) {
            return function(t) {
                var n = t.currentTarget || e.xhr;
                if (4 === n.readyState) {
                    if (clearTimeout(e.timeoutId), n.status >= 400) {
                        var i;
                        return i = 404 === n.status ? "File not found" : "" + n.status + "(" + n.statusText + ")", e.onerror(i, e.url, n)
                    }
                    if (200 === n.status) return r(e)(t)
                }
            }
        }

        function r(e) {
            return function(n) {
                var i = n.currentTarget || e.xhr;
                if (clearTimeout(e.timeoutId), e.responseType) {
                    if ("json" === e.responseType) return a(i, e)
                } else {
                    var o, r = i.responseXML;
                    if (r) try {
                        o = r.firstChild
                    } catch (l) {}
                    if (r && o) return s(i, r, e);
                    if (u && i.responseText && !r && (r = t.parseXML(i.responseText), r && r.firstChild)) return s(i, r, e);
                    if (e.requireValidXML) return void e.onerror("Invalid XML", e.url, i)
                }
                e.oncomplete(i)
            }
        }

        function a(t, n) {
            if (!t.response || e.isString(t.response) && '"' !== t.responseText.substr(1)) try {
                t = e.extend({}, t, {
                    response: JSON.parse(t.responseText)
                })
            } catch (i) {
                return void n.onerror("Invalid JSON", n.url, t)
            }
            return n.oncomplete(t)
        }

        function s(t, n, i) {
            var o = n.documentElement;
            return i.requireValidXML && ("parsererror" === o.nodeName || o.getElementsByTagName("parsererror").length) ? void i.onerror("Invalid XML", i.url, t) : (t.responseXML || (t = e.extend({}, t, {
                responseXML: n
            })), i.oncomplete(t))
        }
        var l = function() {},
            u = !1,
            c = function(e) {
                var t = document.createElement("a"),
                    n = document.createElement("a");
                t.href = location.href;
                try {
                    return n.href = e, n.href = n.href, t.protocol + "//" + t.host != n.protocol + "//" + n.host
                } catch (i) {}
                return !0
            },
            d = function(t, a, s, d) {
                e.isObject(t) && (d = t, t = d.url);
                var p, f = e.extend({
                    xhr: null,
                    url: t,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: a || l,
                    onerror: s || l,
                    mimeType: d && !d.responseType ? "text/xml" : "",
                    requireValidXML: !1,
                    responseType: d && d.plainText ? "text" : ""
                }, d);
                if ("XDomainRequest" in window && c(t)) p = f.xhr = new window.XDomainRequest, p.onload = r(f), p.ontimeout = p.onprogress = l, u = !0;
                else {
                    if (!("XMLHttpRequest" in window)) return void f.onerror("", t);
                    p = f.xhr = new window.XMLHttpRequest, p.onreadystatechange = o(f);
                }
                var h = i("Error loading file", f);
                p.onerror = h, "overrideMimeType" in p ? f.mimeType && p.overrideMimeType(f.mimeType) : u = !0;
                try {
                    t = t.replace(/#.*$/, ""), p.open("GET", t, !0)
                } catch (g) {
                    return h(g), p
                }
                if (f.responseType) try {
                    p.responseType = f.responseType
                } catch (g) {}
                f.timeout && (f.timeoutId = setTimeout(function() {
                    n(p), f.onerror("Timeout", t, p)
                }, f.timeout), p.onabort = function() {
                    clearTimeout(f.timeoutId)
                });
                try {
                    f.withCredentials && "withCredentials" in p && (p.withCredentials = !0), p.send()
                } catch (g) {
                    h(g)
                }
                return p
            };
        return {
            ajax: d,
            crossdomain: c
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(1)], o = function(e, t, n) {
        function i(e, t, n) {
            var i = document.createElement("param");
            i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
        }

        function o(e, t, n) {
            Object.defineProperty(e, t, {
                get: function() {
                    return n
                }
            })
        }

        function r(r, a, u, c) {
            var d, p = !0;
            if (c = c || "opaque", e.isMSIE()) {
                var f = document.createElement("div");
                a.appendChild(f), f.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + u + '" name="' + u + '" tabindex="0"><param name="movie" value="' + r + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="' + c + '"><param name="bgcolor" value="' + l + '"><param name="menu" value="false"></object>';
                for (var h = a.getElementsByTagName("object"), g = h.length; g--;) h[g].id === u && (d = h[g])
            } else d = document.createElement("object"), d.setAttribute("type", "application/x-shockwave-flash"), d.setAttribute("data", r), d.setAttribute("width", "100%"), d.setAttribute("height", "100%"), d.setAttribute("bgcolor", l), d.setAttribute("id", u), d.setAttribute("name", u), i(d, "allowfullscreen", "true"), i(d, "allowscriptaccess", "always"), i(d, "wmode", c), i(d, "menu", "false"), a.appendChild(d, a);
            return d.className = "jw-swf jw-reset", d.style.display = "block", d.style.position = "absolute", d.style.left = 0, d.style.right = 0, d.style.top = 0, d.style.bottom = 0, e.isIE() && "PointerEvent" in window && (d.style.pointerEvents = "none"), o(d, "on", t.on), o(d, "once", t.once), o(d, "off", t.off), o(d, "trigger", t.trigger), o(d, "_events", {}), o(d, "triggerFlash", function(t) {
                if ("setupCommandQueue" === t && (p = !1), "setup" !== t && p || !d.__externalCall) {
                    for (var i = d.__commandQueue, o = i.length; o--;) i[o][0] === t && i.splice(o, 1);
                    return i.push(Array.prototype.slice.call(arguments)), d
                }
                var r = Array.prototype.slice.call(arguments, 1),
                    a = e.tryCatch(function() {
                        if (r.length) {
                            for (var e = r.length; e--;) "object" == typeof r[e] && n.each(r[e], s);
                            var i = JSON.stringify(r);
                            d.__externalCall(t, i)
                        } else d.__externalCall(t)
                    });
                return a instanceof e.Error && (console.error(t, a), "setup" === t) ? (a.name = "Failed to setup flash", a) : d
            }), o(d, "__commandQueue", []), d
        }

        function a(e) {
            e && e.parentNode && (e.style.display = "none", e.parentNode.removeChild(e))
        }

        function s(e, t, n) {
            e instanceof window.HTMLElement && delete n[t]
        }
        var l = "#000000";
        return {
            embed: r,
            remove: a
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(3), n(1)], o = function(e, t) {
        function n() {}
        var i = function(e, n) {
            var i, o = this;
            i = e && t.has(e, "constructor") ? e.constructor : function() {
                return o.apply(this, arguments)
            }, t.extend(i, o, n);
            var r = function() {
                this.constructor = i
            };
            return r.prototype = o.prototype, i.prototype = new r, e && t.extend(i.prototype, e), i.__super__ = o.prototype, i
        };
        return n.extend = i, t.extend(n.prototype, e), n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(22), n(1), n(35), n(34), n(26)], o = function(e, t, n, i, o) {
        var r = {};
        return r.repo = t.memoize(function() {
            var t = o.split("+")[0],
                i = e.repo + t + "/";
            return n.isHTTPS() ? i.replace(/^http:/, "https:") : i
        }), r.versionCheck = function(e) {
            var t = ("0" + e).split(/\W/),
                n = o.split(/\W/),
                i = parseFloat(t[0]),
                r = parseFloat(n[0]);
            return !(i > r) && !(i === r && parseFloat("0" + t[1]) > parseFloat(n[1]))
        }, r.loadFrom = function() {
            return r.repo()
        }, r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = function() {
            var t = {},
                n = {},
                i = {},
                o = {};
            return {
                start: function(n) {
                    t[n] = e.now(), i[n] = i[n] + 1 || 1
                },
                end: function(i) {
                    if (t[i]) {
                        var o = e.now() - t[i];
                        n[i] = n[i] + o || o
                    }
                },
                dump: function() {
                    return {
                        counts: i,
                        sums: n,
                        events: o
                    }
                },
                tick: function(t, n) {
                    o[t] = n || e.now()
                },
                between: function(e, t) {
                    return o[t] && o[e] ? o[t] - o[e] : -1
                }
            }
        };
        return t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return document.createElement("video")
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(7)], o = function(e) {
        var t = function(t, n, i) {
            var o = document.createElement("div");
            return o.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + t, o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), i && o.setAttribute("aria-label", i), o.style.display = "none", n && new e(o).on("click tap", function() {
                n()
            }), {
                element: function() {
                    return o
                },
                toggle: function(e) {
                    e ? this.show() : this.hide()
                },
                show: function() {
                    o.style.display = ""
                },
                hide: function() {
                    o.style.display = "none"
                }
            }
        };
        return t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(119), n(21), n(1)], o = function(e, t, n) {
        var i = e.selectPlayer,
            o = function() {
                var e = i.apply(this, arguments);
                return e ? e : {
                    registerPlugin: function(e, n, i) {
                        "jwpsrv" !== e && t.registerPlugin(e, n, i)
                    }
                }
            };
        return n.extend(e, {
            selectPlayer: o
        })
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , function(e, t, n) {
    var i, o;
    i = [n(2), n(73), n(16)], o = function(e, t, n) {
        var i = "invalid",
            o = "RnXcsftYjWRDA^Uy",
            r = function(r) {
                function a(r) {
                    e.exists(r) || (r = "");
                    try {
                        r = t.decrypt(r, o);
                        var a = r.split("/");
                        s = a[0], "pro" === s && (s = "premium");
                        var c = n(s);
                        if (a.length > 2 && c("setup")) {
                            l = a[1];
                            var d = parseInt(a[2]);
                            d > 0 && (u = new Date, u.setTime(d))
                        } else s = i
                    } catch (p) {
                        s = i
                    }
                }
                var s, l, u;
                this.edition = function() {
                    return u && u.getTime() < (new Date).getTime() ? i : s
                }, this.token = function() {
                    return l
                }, this.expiration = function() {
                    return u
                }, a(r)
            };
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = function(e) {
                return window.atob(e)
            },
            t = function(e) {
                return unescape(encodeURIComponent(e))
            },
            n = function(e) {
                try {
                    return decodeURIComponent(escape(e))
                } catch (t) {
                    return e
                }
            },
            i = function(e) {
                for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++) t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
                return t
            },
            o = function(e) {
                for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
                return t.join("")
            };
        return {
            decrypt: function(r, a) {
                if (r = String(r), a = String(a), 0 == r.length) return "";
                for (var s, l, u = i(e(r)), c = i(t(a).slice(0, 16)), d = u.length, p = u[d - 1], f = u[0], h = 2654435769, g = Math.floor(6 + 52 / d), w = g * h; 0 != w;) {
                    l = w >>> 2 & 3;
                    for (var m = d - 1; m >= 0; m--) p = u[m > 0 ? m - 1 : d - 1], s = (p >>> 5 ^ f << 2) + (f >>> 3 ^ p << 4) ^ (w ^ f) + (c[3 & m ^ l] ^ p), f = u[m] -= s;
                    w -= h
                }
                var v = o(u);
                return v = v.replace(/\0+$/, ""), n(v)
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(165), n(4), n(176), n(1)], o = function(e, t, n, i, o) {
        var r = function(r, a) {
            var s = new t(r, a),
                l = s.setup;
            return s.setup = function() {
                l.call(this), a.on("change:skipButton", this.onSkipButton, this), a.on("change:castAvailable", this.onCastAvailable, this), this.onCastAvailable(a, a.get("castAvailable")), a.on("change:castActive", this.onCastActive, this), this.onCastActive(a, a.get("castActive"))
            }, s.addSkipButton = function() {
                this._skipButton = new i(this.instreamModel), this._skipButton.on(n.JWPLAYER_AD_SKIPPED, function() {
                    this.api.skipAd()
                }, this), this.controlsContainer().appendChild(this._skipButton.element())
            }, s.onSkipButton = function(e, t) {
                t ? this.addSkipButton() : this._skipButton && (this._skipButton.destroy(), this._skipButton = null)
            }, s.onCastActive = function(t, n) {
                n = n || !1;
                var i = t.get("airplayActive") || !1;
                e.toggleClass(this.getContainer(), "jw-flag-casting", n), e.toggleClass(this.getContainer(), "jw-flag-airplay-casting", i)
            }, s.onCastAvailable = function(t, n) {
                var i = t.get("cast");
                o.isObject(i) && e.toggleClass(this.getContainer(), "jw-flag-cast-available", n)
            }, s
        };
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , , , function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            return '<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'
        },
        useData: !0
    })
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function r() {
        var e = new s.HandlebarsEnvironment;
        return f.extend(e, s), e.SafeString = u["default"], e.Exception = d["default"], e.Utils = f, e.escapeExpression = f.escapeExpression, e.VM = g, e.template = function(t) {
            return g.template(t, e)
        }, e
    }
    t.__esModule = !0;
    var a = n(44),
        s = o(a),
        l = n(96),
        u = i(l),
        c = n(17),
        d = i(c),
        p = n(11),
        f = o(p),
        h = n(95),
        g = o(h),
        w = n(94),
        m = i(w),
        v = r();
    v.create = r, m["default"](v), v["default"] = v, t["default"] = v, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        a["default"](e)
    }
    t.__esModule = !0, t.registerDefaultDecorators = o;
    var r = n(84),
        a = i(r)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerDecorator("inline", function(e, t, n, o) {
            var r = e;
            return t.partials || (t.partials = {}, r = function(o, r) {
                var a = n.partials;
                n.partials = i.extend({}, a, t.partials);
                var s = e(o, r);
                return n.partials = a, s
            }), t.partials[o.args[0]] = o.fn, r
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        a["default"](e), l["default"](e), c["default"](e), p["default"](e), h["default"](e), w["default"](e), v["default"](e)
    }
    t.__esModule = !0, t.registerDefaultHelpers = o;
    var r = n(86),
        a = i(r),
        s = n(87),
        l = i(s),
        u = n(88),
        c = i(u),
        d = n(89),
        p = i(d),
        f = n(90),
        h = i(f),
        g = n(91),
        w = i(g),
        m = n(92),
        v = i(m)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerHelper("blockHelperMissing", function(t, n) {
            var o = n.inverse,
                r = n.fn;
            if (t === !0) return r(this);
            if (t === !1 || null == t) return o(this);
            if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);
            if (n.data && n.ids) {
                var a = i.createFrame(n.data);
                a.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {
                    data: a
                }
            }
            return r(t, n)
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(11),
        r = n(17),
        a = i(r);
    t["default"] = function(e) {
        e.registerHelper("each", function(e, t) {
            function n(t, n, r) {
                u && (u.key = t, u.index = n, u.first = 0 === n, u.last = !!r, c && (u.contextPath = c + t)), l += i(e[t], {
                    data: u,
                    blockParams: o.blockParams([e[t], t], [c + t, null])
                })
            }
            if (!t) throw new a["default"]("Must pass iterator to #each");
            var i = t.fn,
                r = t.inverse,
                s = 0,
                l = "",
                u = void 0,
                c = void 0;
            if (t.data && t.ids && (c = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."), o.isFunction(e) && (e = e.call(this)), t.data && (u = o.createFrame(t.data)), e && "object" == typeof e)
                if (o.isArray(e))
                    for (var d = e.length; s < d; s++) s in e && n(s, s, s === e.length - 1);
                else {
                    var p = void 0;
                    for (var f in e) e.hasOwnProperty(f) && (void 0 !== p && n(p, s - 1), p = f, s++);
                    void 0 !== p && n(p, s - 1, !0)
                }
            return 0 === s && (l = r(this)), l
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(17),
        r = i(o);
    t["default"] = function(e) {
        e.registerHelper("helperMissing", function() {
            if (1 !== arguments.length) throw new r["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerHelper("if", function(e, t) {
            return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), e.registerHelper("unless", function(t, n) {
            return e.helpers["if"].call(this, t, {
                fn: n.inverse,
                inverse: n.fn,
                hash: n.hash
            })
        })
    }, e.exports = t["default"]
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t["default"] = function(e) {
        e.registerHelper("log", function() {
            for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
            var o = 1;
            null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), t[0] = o, e.log.apply(e, t)
        })
    }, e.exports = t["default"]
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t["default"] = function(e) {
        e.registerHelper("lookup", function(e, t) {
            return e && e[t]
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerHelper("with", function(e, t) {
            i.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (i.isEmpty(e)) return t.inverse(this);
            var o = t.data;
            return t.data && t.ids && (o = i.createFrame(t.data), o.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                data: o,
                blockParams: i.blockParams([e], [o && o.contextPath])
            })
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11),
        o = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function(e) {
                if ("string" == typeof e) {
                    var t = i.indexOf(o.methodMap, e.toLowerCase());
                    e = t >= 0 ? t : parseInt(e, 10)
                }
                return e
            },
            log: function(e) {
                if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
                    var t = o.methodMap[e];
                    console[t] || (t = "log");
                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    console[t].apply(console, i)
                }
            }
        };
    t["default"] = o, e.exports = t["default"]
}, function(e, t) {
    (function(n) {
        "use strict";
        t.__esModule = !0, t["default"] = function(e) {
            var t = "undefined" != typeof n ? n : window,
                i = t.Handlebars;
            e.noConflict = function() {
                return t.Handlebars === e && (t.Handlebars = i), e
            }
        }, e.exports = t["default"]
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function r(e) {
        var t = e && e[0] || 1,
            n = m.COMPILER_REVISION;
        if (t !== n) {
            if (t < n) {
                var i = m.REVISION_CHANGES[n],
                    o = m.REVISION_CHANGES[t];
                throw new w["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + o + ").")
            }
            throw new w["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }

    function a(e, t) {
        function n(n, i, o) {
            o.hash && (i = h.extend({}, i, o.hash), o.ids && (o.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, o);
            var r = t.VM.invokePartial.call(this, n, i, o);
            if (null == r && t.compile && (o.partials[o.name] = t.compile(n, e.compilerOptions, t), r = o.partials[o.name](i, o)), null != r) {
                if (o.indent) {
                    for (var a = r.split("\n"), s = 0, l = a.length; s < l && (a[s] || s + 1 !== l); s++) a[s] = o.indent + a[s];
                    r = a.join("\n")
                }
                return r
            }
            throw new w["default"]("The partial " + o.name + " could not be compiled when running in runtime-only mode")
        }

        function i(t) {
            function n(t) {
                return "" + e.main(o, t, o.helpers, o.partials, a, l, s)
            }
            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                a = r.data;
            i._setup(r), !r.partial && e.useData && (a = d(t, a));
            var s = void 0,
                l = e.useBlockParams ? [] : void 0;
            return e.useDepths && (s = r.depths ? t != r.depths[0] ? [t].concat(r.depths) : r.depths : [t]), (n = p(e.main, n, o, r.depths || [], a, l))(t, r)
        }
        if (!t) throw new w["default"]("No environment passed to template");
        if (!e || !e.main) throw new w["default"]("Unknown template object: " + typeof e);
        e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
        var o = {
            strict: function(e, t) {
                if (!(t in e)) throw new w["default"]('"' + t + '" not defined in ' + e);
                return e[t]
            },
            lookup: function(e, t) {
                for (var n = e.length, i = 0; i < n; i++)
                    if (e[i] && null != e[i][t]) return e[i][t]
            },
            lambda: function(e, t) {
                return "function" == typeof e ? e.call(t) : e
            },
            escapeExpression: h.escapeExpression,
            invokePartial: n,
            fn: function(t) {
                var n = e[t];
                return n.decorator = e[t + "_d"], n
            },
            programs: [],
            program: function(e, t, n, i, o) {
                var r = this.programs[e],
                    a = this.fn(e);
                return t || o || i || n ? r = s(this, e, a, t, n, i, o) : r || (r = this.programs[e] = s(this, e, a)), r
            },
            data: function(e, t) {
                for (; e && t--;) e = e._parent;
                return e
            },
            merge: function(e, t) {
                var n = e || t;
                return e && t && e !== t && (n = h.extend({}, t, e)), n
            },
            noop: t.VM.noop,
            compilerInfo: e.compiler
        };
        return i.isTop = !0, i._setup = function(n) {
            n.partial ? (o.helpers = n.helpers, o.partials = n.partials, o.decorators = n.decorators) : (o.helpers = o.merge(n.helpers, t.helpers), e.usePartial && (o.partials = o.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (o.decorators = o.merge(n.decorators, t.decorators)))
        }, i._child = function(t, n, i, r) {
            if (e.useBlockParams && !i) throw new w["default"]("must pass block params");
            if (e.useDepths && !r) throw new w["default"]("must pass parent depths");
            return s(o, t, e[t], n, 0, i, r)
        }, i
    }

    function s(e, t, n, i, o, r, a) {
        function s(t) {
            var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                s = a;
            return a && t != a[0] && (s = [t].concat(a)), n(e, t, e.helpers, e.partials, o.data || i, r && [o.blockParams].concat(r), s)
        }
        return s = p(n, s, e, a, i, r), s.program = t, s.depth = a ? a.length : 0, s.blockParams = o || 0, s
    }

    function l(e, t, n) {
        if (e) e.call || n.name || (n.name = e, e = n.partials[e]);
        else if ("@partial-block" === n.name) {
            for (var i = n.data; i["partial-block"] === c;) i = i._parent;
            e = i["partial-block"], i["partial-block"] = c
        } else e = n.partials[n.name];
        return e
    }

    function u(e, t, n) {
        n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
        var i = void 0;
        if (n.fn && n.fn !== c && (n.data = m.createFrame(n.data), i = n.data["partial-block"] = n.fn, i.partials && (n.partials = h.extend({}, n.partials, i.partials))), void 0 === e && i && (e = i), void 0 === e) throw new w["default"]("The partial " + n.name + " could not be found");
        if (e instanceof Function) return e(t, n)
    }

    function c() {
        return ""
    }

    function d(e, t) {
        return t && "root" in t || (t = t ? m.createFrame(t) : {}, t.root = e), t
    }

    function p(e, t, n, i, o, r) {
        if (e.decorator) {
            var a = {};
            t = e.decorator(t, a, n, i && i[0], o, r, i), h.extend(t, a)
        }
        return t
    }
    t.__esModule = !0, t.checkRevision = r, t.template = a, t.wrapProgram = s, t.resolvePartial = l, t.invokePartial = u, t.noop = c;
    var f = n(11),
        h = o(f),
        g = n(17),
        w = i(g),
        m = n(44)
}, function(e, t) {
    "use strict";

    function n(e) {
        this.string = e
    }
    t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
        return "" + this.string
    }, t["default"] = n, e.exports = t["default"]
}, , function(e, t, n) {
    t = e.exports = n(99)(), t.push([e.id, '.jw-reset{color:inherit;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}.jw-icon,.jw-reset{background-color:transparent;text-transform:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-background-color{background:rgba(33,33,33,.8)}.jw-knob,.jw-text{color:#cecece}.jw-knob{background-color:#fff}.jw-button-color{color:#cecece}.jw-button-color:focus,:not(.jw-flag-touch) .jw-button-color:hover{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:#cecece}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-display-icon-container{background-color:rgba(33,33,33,.8);margin:0 .25em}.jw-display-icon-container .jw-icon{color:#cecece}.jw-rail{background:hsla(0,0%,100%,.2)}.jw-buffer{background:hsla(0,0%,100%,.3)}.jw-progress{background:#fff}.jw-slider-horizontal{height:.3em}.jw-slider-horizontal .jw-knob{margin-left:-.3em}.jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-menu,.jw-time-tip,.jw-volume-tip{border:0}.jw-menu,.jw-time-tip{padding:.5em}.jw-volume-tip{padding:1em}.jw-skip{padding:.5em}.jw-dock-button .jw-text,.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext,.jw-time-tip .jw-text{color:#cecece}.jw-dock-button{background:rgba(33,33,33,.8)}:not(.jw-flag-touch) .jw-dock-button:hover{background:#212121}.jw-icon-cast button{--connected-color:#fff;--disconnected-color:#cecece}.jw-icon-cast button:focus{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast button.jw-off{--connected-color:#cecece}.jw-icon-cast:hover button{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-nextup-header{background:rgba(33,33,33,.8);color:#fff}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000)}.jw-nextup-close{color:#cecece}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover,.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-media:hover~.jw-controls .jw-display-icon-display{background-color:#212121}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-color-active,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive,:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-option{color:#cecece}.jw-option.jw-active-option{color:#fff;background-color:hsla(0,0%,100%,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}@font-face{font-family:jw-icons;src:url(' + n(101) + ') format("woff"),url(' + n(100) + ') format("truetype");font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-airplay.jw-off:before,.jw-icon-airplay:before{content:"\\E901"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-close:before{content:"\\E615"}.jw-icon-rewind:before{content:"\\E900";font-size:1.5em}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2.5em}.jw-flag-small-player .jw-controls,.jw-text{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container,.jw-display-icon-container .jw-icon,.jw-dock .jw-dock-button,.jw-logo,.jw-media,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display{display:table;height:100%;padding:2.5em 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-display-container{display:table-cell;height:100%;text-align:center;vertical-align:middle}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;margin:0 .25em}.jw-display-icon-container .jw-icon{cursor:pointer;width:75px;height:75px;line-height:75px;text-align:center}.jw-display-icon-container .jw-icon:before{font-size:33px;position:relative}.jw-display-icon-container .jw-icon.jw-icon-rewind:before{padding:.2em .05em}.jw-state-idle .jw-display-icon-container .jw-icon.jw-icon-display:before,.jw-state-paused .jw-display-icon-container .jw-icon.jw-icon-display:before{left:1px}.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint-0 .jw-display .jw-icon{height:44px;line-height:44px;width:44px}.jw-breakpoint-0 .jw-display .jw-icon:before{font-size:22px}.jw-breakpoint-1 .jw-display .jw-icon{height:55px;line-height:55px;width:55px}.jw-breakpoint-1 .jw-display .jw-icon:before{font-size:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{font-size:33px}.jw-breakpoint-3 .jw-display .jw-icon{height:77px;line-height:77px;width:77px}.jw-breakpoint-3 .jw-display .jw-icon:before{font-size:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-icon{height:88px;line-height:88px;width:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before{font-size:44px}.jw-controlbar{display:table;position:absolute;left:0;bottom:0;height:2.5em;width:100%;padding:0 .5em}.jw-slider-horizontal{background-color:transparent}.jw-group{display:table-cell}.jw-controlbar-center-group{padding:0 .5em;position:relative;width:100%}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none;position:absolute;top:-1px;bottom:0;width:100%;height:auto;line-height:2.5em;margin:.5em 0;padding-right:.5em;overflow:hidden;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-countdown,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2.5em;position:relative;line-height:2.5em;vertical-align:middle;cursor:pointer;padding:0 .5em}.jw-controlbar-left-group .jw-text-duration{display:none}.jw-icon-inline,.jw-icon-tooltip{min-width:1.5625em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast button{background-color:transparent;border:none;cursor:pointer;font-size:inherit;width:2.25em}.jw-breakpoint-0 .jw-controlbar .jw-text-duration,.jw-breakpoint-0 .jw-controlbar .jw-text-elapsed,.jw-breakpoint-1:not(.jw-flag-time-slider-above) .jw-controlbar .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-time-slider-above) .jw-controlbar .jw-text-elapsed,.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-autostart:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-small-player:not(.jw-flag-audio-player) .jw-group>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player) .jw-group>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player) .jw-group>.jw-icon-rewind,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal,.jwplayer .jw-text-countdown{display:none}.jw-dock{clear:right;margin:.75em;display:block;opacity:1}.jw-dock:after{content:"";clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;height:2.5em;margin:.5em;position:relative;width:2.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-flag-small-player .jw-dock{margin:0}.jw-flag-small-player .jw-dock-button{margin:1px;height:44px;width:44px}.jw-breakpoint-1 .jw-dock{padding:0 1%}.jw-breakpoint-1 .jw-dock-button{margin:2% 1%}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-flag-small-player .jw-title{background:-webkit-linear-gradient(top,rgba(51,51,51,.75),rgba(51,51,51,0));background:linear-gradient(180deg,rgba(51,51,51,.75),rgba(51,51,51,0));height:auto;padding:16px 0}.jw-flag-small-player .jw-title-primary,.jw-flag-small-player .jw-title-secondary{min-height:inherit;padding:0 16px}.jw-flag-small-player .jw-title-secondary{display:none;margin-top:5px}.jw-slider-container{height:1em;width:100%;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:hsla(0,0%,100%,.2)}.jw-buffer{background-color:hsla(0,0%,100%,.3)}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{height:.3em;background-color:rgba(33,33,33,.9);border-radius:25%;width:.5em}.jw-knob{width:.6em;height:.6em;border-radius:.3em}.jw-slider-horizontal{height:.3em;padding:0}.jw-slider-horizontal.jw-slider-volume{width:4em;margin:0 .5em}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-horizontal .jw-knob{top:-.15em;margin-left:-.3em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.3em}.jw-slider-vertical{padding:.66666667em 1em;position:absolute}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.3em}.jw-slider-vertical .jw-slider-container{height:4em}.jw-slider-vertical .jw-knob{right:0;left:-.15em;margin-bottom:-.3em}.jw-slider-time{width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;width:100%;height:inherit;text-align:center;display:none;max-height:calc(100% - 46px);line-height:1.3em;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-text-track-display{font-size:inherit;line-height:1.3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:calc(100% - 46px);line-height:1.3em}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;bottom:1.25em;padding:.5em;border-radius:.3em}.jw-time-tip .jw-text{color:#fff;line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2.5em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em;padding:.5em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:#cecece;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:-webkit-linear-gradient(top,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;background-color:transparent;bottom:2.5em;cursor:pointer;left:0;margin:0 auto;opacity:0;padding:5px .5em;position:absolute;right:0;text-align:right;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:all .15s ease;transition:all .15s ease;visibility:hidden;width:100%}.jw-flag-small-player .jw-nextup-container{display:none}.jw-nextup-container-visible{opacity:1;-webkit-transform:translateY(5px);transform:translateY(5px);visibility:visible}.jw-nextup{border-radius:0;display:inline-block;overflow:hidden;position:relative;max-width:300px;width:100%}.jw-nextup-header{background:rgba(33,33,33,.8);box-sizing:border-box;color:#fff;font-size:12px;font-weight:700;line-height:normal;padding:8px}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff;overflow:hidden}.jw-nextup-thumbnail{background-position:50%;background-size:cover;display:none;float:left;height:60px;width:45%}.jw-nextup-thumbnail-visible{display:block}.jw-nextup-title{box-sizing:border-box;float:left;font-size:12px;font-weight:700;line-height:1.3;overflow:hidden;padding:5px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-thumbnail-visible+.jw-nextup-title{height:60px;white-space:normal;width:55%}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000);bottom:0;content:"";height:30px;left:0;position:absolute;width:100%}.jw-nextup-close{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale;border:none;color:#cecece;font-size:13px;opacity:0;position:absolute;right:5px;top:6px;-webkit-transition:color .15s ease,opacity .15s ease,visibility .15s ease;transition:color .15s ease,opacity .15s ease,visibility .15s ease;visibility:hidden}.jw-nextup-close:before{content:"\\E615"}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{opacity:1;visibility:visible}.jw-autostart-mute{min-width:1.75em;text-align:left;position:absolute;bottom:.5em;right:.5em;height:44px;width:44px;text-align:center}.jw-autostart-mute:before{content:"\\E612"}.jw-autostart-mute.jw-off:before{content:"\\E611"}.jw-autostart-mute:before{background-color:rgba(33,33,33,.8);padding:5px 4px 5px 6px}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup,.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio):not(.jw-state-buffering):not(.jw-state-error):not(.jw-state-complete) .jw-display{display:none}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind{display:none}.jw-state-idle .jw-title{display:block}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-cast-available) .jw-controlbar,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display,.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{display:none}.jwplayer.jw-state-paused .jw-display .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-paused .jw-autostart-mute{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text{display:none}.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,body .jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}body .jw-error .jw-captions,body .jw-error .jw-controls .jw-controlbar,body .jwplayer.jw-state-error .jw-captions,body .jwplayer.jw-state-error .jw-controls .jw-controlbar{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}body .jw-error .jw-icon-display:before,body .jwplayer.jw-state-error .jw-icon-display:before{content:"\\E607"}body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima) .jw-controlbar{display:table}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jw-flag-small-player .jw-display{padding-top:44px;padding-bottom:66px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar{background:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.25) 30%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.5));background:linear-gradient(180deg,transparent,rgba(0,0,0,.25) 30%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.5));border:none;border-radius:0;background-size:auto;height:44px;width:100%;padding:0 10px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-state-idle:not(.jw-flag-cast-available) .jw-controls,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-casting) .jw-controls{background:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads) .jw-controlbar,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-live) .jw-controlbar{height:66px;padding:22px 0 0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar{box-shadow:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar .jw-overlay{bottom:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar .jw-overlay:after{content:"";display:block;height:22px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-icon,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-text{height:44px;line-height:40px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-icon{font-size:20px;padding:0 8px;max-width:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-icon:before{background-color:transparent;background:none;background-size:auto;border:none;border-radius:0;box-shadow:none;height:auto;padding:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group .jw-icon-cast button{font-size:inherit;height:36px;margin-bottom:8px;width:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-center-group{height:22px;left:0;padding:0 15px;position:absolute;right:0;top:0;width:100%}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-center-group .jw-slider-horizontal .jw-knob{border-radius:100%;height:16px;margin-left:-8px;margin-top:-8px;width:16px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group{padding-left:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group .jw-text-countdown,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group .jw-text-elapsed{padding:0 .5em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group .jw-text-duration{padding:0 .5em 0 0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:inline-block}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-flag-small-player .jw-text-countdown,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-flag-small-player .jw-text-elapsed{padding-left:15px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-breakpoint-0) .jw-text-duration{display:inline-block}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";display:inline-block;padding-right:.5em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar-right-group{padding-right:6px;text-align:right}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar-right-group .jw-text-duration{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-volume.jw-slider-vertical{padding:.5em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-volume.jw-slider-horizontal{margin-bottom:2px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-small-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time{background:none;background-color:transparent;height:22px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-slider-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:22px;-webkit-box-pack:center;justify-content:center}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-cue{top:auto}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-buffer,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-knob,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-progress,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-rail{border:none;box-shadow:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-knob{background:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-buffer,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-progress,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-rail{height:2px;margin:auto;top:0;bottom:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-rail{background-color:hsla(0,0%,100%,.25)}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-buffer{background-color:hsla(0,0%,100%,.5)}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-knob{background-color:#fff;border-radius:100%;box-shadow:0 0 1px 1px rgba(0,0,0,.1);display:block;height:16px;margin-left:-8px;margin-top:-8px;top:50%;width:16px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time{bottom:0;height:auto;line-height:normal;padding:0;pointer-events:none;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time .jw-overlay{bottom:22px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time .jw-overlay:after{content:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time .jw-time-tip{bottom:0;border-radius:.3em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar{padding-right:5px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar-center-group,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar-center-group{height:auto}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-group>.jw-text-alt,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-group>.jw-text-alt{display:inline-block;margin:0;line-height:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads.jw-ie .jw-text-alt,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live.jw-ie .jw-text-alt{top:-1px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar .jw-overlay:after,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-text-duration,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-text-duration{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar{padding-left:10px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-text-duration,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar{pointer-events:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-icon,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-slider-horizontal{pointer-events:all}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar-left-group{display:table-cell}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads.jw-flag-small-player .jw-group .jw-icon-playback{display:inline-block}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-plugin{bottom:66px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-captions,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer video::-webkit-media-text-track-container{max-height:calc(100% - 72px)}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-nextup-container{bottom:66px;padding:5px 20px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-nextup-container,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-casting .jw-cast{display:block}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-display-icon-container,.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-volume,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-cc,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jwplayer.jw-state-paused.jw-flag-casting .jw-display,.jwplayer.jw-state-playing.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline-block}.jwplayer.jw-flag-controls-hidden .jw-dock,.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-controls-hidden .jw-nextup-container,.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jw-flag-controls-hidden .jw-controls{visibility:hidden}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-dock{display:block}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:2.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-flag-time-slider-above .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-media-audio .jw-autostart-mute,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-autostart-mute,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-controlbar-center-group{padding:0}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-cast,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads.jw-ie .jw-controlbar-center-group{overflow:hidden}.jwplayer.jw-flag-ads.jw-flag-ads.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-ie .jw-controlbar-center-group .jw-text-alt{display:table}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display,.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display .jw-icon-display{pointer-events:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}.jw-flag-controls-disabled.jwplayer .jw-captions{max-height:none}.jw-flag-controls-disabled.jwplayer video::-webkit-media-text-track-container{max-height:none}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch.jw-breakpoint-4 .jw-controlbar,.jw-flag-touch.jw-breakpoint-4 .jw-plugin,.jw-flag-touch.jw-breakpoint-4 .jw-skip,.jw-flag-touch.jw-breakpoint-5 .jw-controlbar,.jw-flag-touch.jw-breakpoint-5 .jw-plugin,.jw-flag-touch.jw-breakpoint-5 .jw-skip,.jw-flag-touch.jw-breakpoint-6 .jw-controlbar,.jw-flag-touch.jw-breakpoint-6 .jw-plugin,.jw-flag-touch.jw-breakpoint-6 .jw-skip,.jw-flag-touch.jw-breakpoint-7 .jw-controlbar,.jw-flag-touch.jw-breakpoint-7 .jw-plugin,.jw-flag-touch.jw-breakpoint-7 .jw-skip{font-size:1.5em}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container{max-height:calc(100% - 66px)}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:inline-block}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-audio-player{background-color:transparent}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-dock,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{vertical-align:middle;display:table;height:100%;left:0;bottom:0;margin:0;width:100%;min-width:100%}.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jw-flag-audio-player .jw-icon-inline{height:auto;line-height:normal}.jw-flag-audio-player .jw-group{vertical-align:middle}.jw-flag-audio-player .jw-controlbar-center-group{padding-bottom:2px}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed,.jw-hidden{display:none}.jw-skin-seven .jw-display-icon-container{border-radius:3.5em}.jw-skin-seven .jw-display-icon-container>.jw-icon{color:hsla(0,0%,100%,.9)}.jw-skin-seven.jw-breakpoint-2 .jw-display .jw-icon{width:66px;height:66px;line-height:66px}.jw-skin-seven .jw-dock-button{border-radius:2.5em}.jw-skin-seven .jw-dock-button:hover{background:rgba(33,33,33,.8)}.jw-skin-seven .jw-menu{padding:0}.jw-skin-seven .jw-dock .jw-overlay,.jw-skin-seven .jw-skip{border-radius:.5em}.jw-skin-seven .jw-text{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}', ""]);
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(e, t, n) {
    e.exports = n.p + "jw-icons.ttf"
}, function(e, t, n) {
    e.exports = n.p + "jw-icons.woff"
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            return '<div class="jw-display jw-reset">\n  <div class="jw-display-container jw-reset">\n    <div class="jw-display-controls jw-reset"></div>\n  </div>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        1: function(e, t, n, i, o) {
            var r, a, s = null != t ? t : {};
            return '    <div class="jw-dock-button jw-background-color jw-reset' + (null != (r = n["if"].call(s, null != t ? t.btnClass : t, {
                name: "if",
                hash: {},
                fn: e.program(2, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + '" button="' + e.escapeExpression((a = null != (a = n.id || (null != t ? t.id : t)) ? a : n.helperMissing, "function" == typeof a ? a.call(s, {
                name: "id",
                hash: {},
                data: o
            }) : a)) + '">\n        <div class="jw-icon jw-dock-image jw-reset" ' + (null != (r = n["if"].call(s, null != t ? t.img : t, {
                name: "if",
                hash: {},
                fn: e.program(4, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + '></div>\n        <div class="jw-arrow jw-reset"></div>\n' + (null != (r = n["if"].call(s, null != t ? t.tooltip : t, {
                name: "if",
                hash: {},
                fn: e.program(6, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "    </div>\n"
        },
        2: function(e, t, n, i, o) {
            var r;
            return " " + e.escapeExpression((r = null != (r = n.btnClass || (null != t ? t.btnClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "btnClass",
                hash: {},
                data: o
            }) : r))
        },
        4: function(e, t, n, i, o) {
            var r;
            return "style='background-image: url(\"" + e.escapeExpression((r = null != (r = n.img || (null != t ? t.img : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "img",
                hash: {},
                data: o
            }) : r)) + "\")'"
        },
        6: function(e, t, n, i, o) {
            var r;
            return '        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">' + e.escapeExpression((r = null != (r = n.tooltip || (null != t ? t.tooltip : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "tooltip",
                hash: {},
                data: o
            }) : r)) + "</span>\n        </div>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<div class="jw-dock jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "</div>"
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r, a = null != t ? t : {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div id="' + u((r = null != (r = n.id || (null != t ? t.id : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "id",
                hash: {},
                data: o
            }) : r)) + '"class="jw-skin-' + u((r = null != (r = n.skin || (null != t ? t.skin : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "skin",
                hash: {},
                data: o
            }) : r)) + ' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">' + u((r = null != (r = n.title || (null != t ? t.title : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "title",
                hash: {},
                data: o
            }) : r)) + '</div>\n        <div class="jw-title-secondary jw-reset">' + u((r = null != (r = n.body || (null != t ? t.body : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "body",
                hash: {},
                data: o
            }) : r)) + '</div>\n    </div>\n\n    <div class="jw-display-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div>\n        </div>\n    </div>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            return '<div class="jw-logo jw-reset"></div>'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        1: function(e, t, n, i, o) {
            var r, a = e.escapeExpression;
            return "        <li class='jw-text jw-option jw-item-" + a((r = null != (r = n.index || o && o.index) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "index",
                hash: {},
                data: o
            }) : r)) + " jw-reset'>" + a(e.lambda(null != t ? t.label : t, t)) + "</li>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<ul class="jw-menu jw-background-color jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "</ul>"
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r = e.lambda,
                a = e.escapeExpression;
            return '<div class="jw-nextup jw-reset">\n    <div class="jw-nextup-tooltip jw-reset">\n        <div class="jw-nextup-header jw-reset">\n            ' + a(r(null != t ? t.nextUpText : t, t)) + '\n        </div>\n        <div class="jw-nextup-body jw-background-color jw-reset">\n            <div class="jw-nextup-thumbnail jw-reset"></div>\n            <div class="jw-nextup-title jw-reset">' + a(r(null != t ? t.title : t, t)) + '</div>\n        </div>\n    </div>\n    <button class="jw-nextup-close" aria-label="' + a(r(null != t ? t.nextUpClose : t, t)) + '"></button>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<div id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "id",
                hash: {},
                data: o
            }) : r)) + '" class="jwplayer jw-reset jw-state-idle" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        1: function(e, t, n, i, o) {
            var r, a, s = null != t ? t : {},
                l = n.helperMissing,
                u = "function",
                c = e.escapeExpression;
            return '        <li class="jw-reset' + (null != (r = n["if"].call(s, null != t ? t.featured : t, {
                name: "if",
                hash: {},
                fn: e.program(2, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + '">\n            <a href="' + c((a = null != (a = n.link || (null != t ? t.link : t)) ? a : l, typeof a === u ? a.call(s, {
                name: "link",
                hash: {},
                data: o
            }) : a)) + '" class="jw-reset" target="_top">\n' + (null != (r = n["if"].call(s, null != t ? t.showLogo : t, {
                name: "if",
                hash: {},
                fn: e.program(4, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "                " + c((a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                name: "title",
                hash: {},
                data: o
            }) : a)) + "\n            </a>\n        </li>\n"
        },
        2: function(e, t, n, i, o) {
            return " jw-featured"
        },
        4: function(e, t, n, i, o) {
            return '                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, null != t ? t.items : t, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "    </ul>\n</div>"
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r, a = null != t ? t : {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div class="' + u((r = null != (r = n.className || (null != t ? t.className : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "className",
                hash: {},
                data: o
            }) : r)) + " " + u((r = null != (r = n.orientation || (null != t ? t.orientation : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "orientation",
                hash: {},
                data: o
            }) : r)) + ' jw-reset" aria-hidden="true">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'
        },
        useData: !0
    })
}, , function(e, t, n) {
    var i;
    i = function(require, e, t) {
        function n(e, t) {
            o(t, r(e))
        }

        function i(e) {
            var t = c[e];
            if (t) {
                for (var n = Object.keys(t), i = 0; i < n.length; i += 1)
                    for (var o = t[n[i]], r = 0; r < o.parts.length; r += 1) o.parts[r]();
                delete c[e]
            }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = (c[e] || {})[i.id];
                if (o) {
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(l(e, i.parts[r]))
                } else {
                    for (var a = [], r = 0; r < i.parts.length; r++) a.push(l(e, i.parts[r]));
                    c[e] = c[e] || {}, c[e][i.id] = {
                        id: i.id,
                        parts: a
                    }
                }
            }
        }

        function r(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o[0],
                    a = o[1],
                    s = o[2],
                    l = {
                        css: a,
                        media: s
                    };
                n[r] ? n[r].parts.push(l) : t.push(n[r] = {
                    id: r,
                    parts: [l]
                })
            }
            return t
        }

        function a(e) {
            f().appendChild(e)
        }

        function s(e) {
            var t = document.createElement("style");
            return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), a(t), t
        }

        function l(e, t) {
            var n, i, o, r = d[e];
            r || (r = d[e] = {
                element: s(e),
                counter: 0
            });
            var a = r.counter++;
            return n = r.element, i = u.bind(null, n, a, !1), o = u.bind(null, n, a, !0), i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media) return;
                        i(t = e)
                    } else o()
                }
        }

        function u(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, o);
            else {
                var r = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }
        var c = {},
            d = {},
            p = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            f = p(function() {
                return document.head || document.getElementsByTagName("head")[0]
            });
        t.exports = {
            style: n,
            clear: i
        };
        var h = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
}, function(e, t, n) {
    var i = n(98);
    "string" == typeof i && (i = [
        ["all-players", i, ""]
    ]), n(112).style(i, "all-players"), i.locals && (e.exports = i.locals)
}, function(e, t, n) {
    var i, o;
    i = [n(21), n(1)], o = function(e, t) {
        return function(n, i) {
            var o = ["seek", "skipAd", "stop", "playlistNext", "playlistPrev", "playlistItem", "resize", "addButton", "removeButton", "registerPlugin", "attachMedia", "next"];
            t.each(o, function(e) {
                n[e] = function() {
                    return i[e].apply(i, arguments), n
                }
            }), n.registerPlugin = e.registerPlugin
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        return function(t, n) {
            var i = ["buffer", "controls", "position", "duration", "fullscreen", "volume", "item", "stretching", "playlist", "captions"];
            e.each(i, function(e) {
                var i = e.slice(0, 1).toUpperCase() + e.slice(1);
                t["get" + i] = function() {
                    return n._model.get(e)
                }
            });
            var o = ["getAudioTracks", "getCaptionsList", "getWidth", "getHeight", "getCurrentAudioTrack", "setCurrentAudioTrack", "getCurrentCaptions", "setCurrentCaptions", "getCurrentQuality", "setCurrentQuality", "getQualityLevels", "getVisualQuality", "getConfig", "getState", "getSafeRegion", "isBeforeComplete", "isBeforePlay", "getProvider", "detachMedia"],
                r = ["setControls", "setFullscreen", "setVolume", "setMute", "setCues", "setCaptions"];
            e.each(o, function(e) {
                t[e] = function() {
                    return n[e] ? n[e].apply(n, arguments) : null
                }
            }), e.each(r, function(e) {
                t[e] = function() {
                    return n[e].apply(n, arguments), t
                }
            }), t.getPlaylistIndex = t.getItem
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(4), n(5), n(3), n(2), n(64), n(1), n(172), n(114), n(115), n(117), n(26)], o = function(e, t, n, i, o, r, a, s, l, u, c) {
        var d = function(d, p) {
            var f, h = this,
                g = !1,
                w = {};
            r.extend(this, n), this.utils = i, this._ = r, this.Events = n, this.version = c, this.trigger = function(e, t) {
                t = r.isObject(t) ? r.extend({}, t) : {}, t.type = e;
                var i = window.jwplayer;
                return i && i.debug ? n.trigger.call(h, e, t) : n.triggerSafe.call(h, e, t)
            }, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this);
            var m = function() {
                f = new a(d), s(h, f), l(h, f), f.on(e.JWPLAYER_PLAYLIST_ITEM, function() {
                    w = {}
                }), f.on(e.JWPLAYER_MEDIA_META, function(e) {
                    r.extend(w, e.metadata)
                }), f.on(e.JWPLAYER_READY, function(e) {
                    g = !0, v.tick("ready"), e.setupTime = v.between("setup", "ready")
                }), f.on("all", h.trigger)
            };
            m(), u(this), this.id = d.id;
            var v = this._qoe = new o;
            v.tick("init");
            var j = function() {
                g = !1, w = {}, h.off(), f && f.off(), f && f.playerDestroy && f.playerDestroy()
            };
            return this.getPlugin = function(e) {
                return h.plugins && h.plugins[e]
            }, this.addPlugin = function(e, t) {
                this.plugins = this.plugins || {}, this.plugins[e] = t, this.onReady(t.addToPlayer), t.resize && this.onResize(t.resizeHandler)
            }, this.setup = function(e) {
                return v.tick("setup"), j(), m(), i.foreach(e.events, function(e, t) {
                    var n = h[e];
                    "function" == typeof n && n.call(h, t)
                }), e.id = h.id, f.setup(e, this), h
            }, this.qoe = function() {
                var e = f.getItemQoe(),
                    t = v.between("setup", "ready"),
                    n = e.getFirstFrame();
                return {
                    setupTime: t,
                    firstFrame: n,
                    player: v.dump(),
                    item: e.dump()
                }
            }, this.getContainer = function() {
                return f.getContainer ? f.getContainer() : d
            }, this.getMeta = this.getItemMeta = function() {
                return w
            }, this.getPlaylistItem = function(e) {
                if (!i.exists(e)) return f._model.get("playlistItem");
                var t = h.getPlaylist();
                return t ? t[e] : null
            }, this.getRenderingMode = function() {
                return "html5"
            }, this.getMute = function() {
                return f._model.getMute()
            }, this.load = function(e) {
                return f.load(e), h
            }, this.play = function(e, n) {
                if (r.isObject(e) && e.reason && (n = e), n || (n = {
                        reason: "external"
                    }), e === !0) return f.play(n), h;
                if (e === !1) return f.pause(n), h;
                switch (e = h.getState()) {
                    case t.PLAYING:
                    case t.BUFFERING:
                        f.pause(n);
                        break;
                    default:
                        f.play(n)
                }
                return h
            }, this.pause = function(e, t) {
                return r.isBoolean(e) ? this.play(!e, t) : this.play(t)
            }, this.createInstream = function() {
                return f.createInstream()
            }, this.castToggle = function() {
                f && f.castToggle && f.castToggle()
            }, this.playAd = this.pauseAd = i.noop, this.remove = function() {
                return p(h), h.trigger("remove"), j(), h
            }, this
        };
        return d
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(4)], o = function(e, t) {
        return function(n) {
            var i = {
                    onBufferChange: t.JWPLAYER_MEDIA_BUFFER,
                    onBufferFull: t.JWPLAYER_MEDIA_BUFFER_FULL,
                    onError: t.JWPLAYER_ERROR,
                    onSetupError: t.JWPLAYER_SETUP_ERROR,
                    onFullscreen: t.JWPLAYER_FULLSCREEN,
                    onMeta: t.JWPLAYER_MEDIA_META,
                    onMute: t.JWPLAYER_MEDIA_MUTE,
                    onPlaylist: t.JWPLAYER_PLAYLIST_LOADED,
                    onPlaylistItem: t.JWPLAYER_PLAYLIST_ITEM,
                    onPlaylistComplete: t.JWPLAYER_PLAYLIST_COMPLETE,
                    onReady: t.JWPLAYER_READY,
                    onResize: t.JWPLAYER_RESIZE,
                    onComplete: t.JWPLAYER_MEDIA_COMPLETE,
                    onSeek: t.JWPLAYER_MEDIA_SEEK,
                    onTime: t.JWPLAYER_MEDIA_TIME,
                    onVolume: t.JWPLAYER_MEDIA_VOLUME,
                    onBeforePlay: t.JWPLAYER_MEDIA_BEFOREPLAY,
                    onBeforeComplete: t.JWPLAYER_MEDIA_BEFORECOMPLETE,
                    onDisplayClick: t.JWPLAYER_DISPLAY_CLICK,
                    onControls: t.JWPLAYER_CONTROLS,
                    onQualityLevels: t.JWPLAYER_MEDIA_LEVELS,
                    onQualityChange: t.JWPLAYER_MEDIA_LEVEL_CHANGED,
                    onCaptionsList: t.JWPLAYER_CAPTIONS_LIST,
                    onCaptionsChange: t.JWPLAYER_CAPTIONS_CHANGED,
                    onAdError: t.JWPLAYER_AD_ERROR,
                    onAdClick: t.JWPLAYER_AD_CLICK,
                    onAdImpression: t.JWPLAYER_AD_IMPRESSION,
                    onAdTime: t.JWPLAYER_AD_TIME,
                    onAdComplete: t.JWPLAYER_AD_COMPLETE,
                    onAdCompanions: t.JWPLAYER_AD_COMPANIONS,
                    onAdSkipped: t.JWPLAYER_AD_SKIPPED,
                    onAdPlay: t.JWPLAYER_AD_PLAY,
                    onAdPause: t.JWPLAYER_AD_PAUSE,
                    onAdMeta: t.JWPLAYER_AD_META,
                    onCast: t.JWPLAYER_CAST_SESSION,
                    onAudioTrackChange: t.JWPLAYER_AUDIO_TRACK_CHANGED,
                    onAudioTracks: t.JWPLAYER_AUDIO_TRACKS
                },
                o = {
                    onBuffer: "buffer",
                    onPause: "pause",
                    onPlay: "play",
                    onIdle: "idle"
                };
            e.each(o, function(t, i) {
                n[i] = e.partial(n.on, t, e)
            }), e.each(i, function(t, i) {
                n[i] = e.partial(n.on, t, e)
            })
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(1)], o = function(e, t) {
        function i(n) {
            t.each(n, function(t, i) {
                n[i] = e.serialize(t)
            })
        }

        function o(e) {
            return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
        }

        function r(t, n) {
            if (n.toString().indexOf("%") === -1) return 0;
            if ("string" != typeof t || !e.exists(t)) return 0;
            if (/^\d*\.?\d+%$/.test(t)) return t;
            var i = t.indexOf(":");
            if (i === -1) return 0;
            var o = parseFloat(t.substr(0, i)),
                r = parseFloat(t.substr(i + 1));
            return o <= 0 || r <= 0 ? 0 : r / o * 100 + "%"
        }
        var a = {
                autostart: !1,
                controls: !0,
                displaytitle: !0,
                displaydescription: !0,
                mobilecontrols: !1,
                repeat: !1,
                castAvailable: !1,
                skin: "seven",
                stretching: "uniform",
                mute: !1,
                volume: 90,
                width: 480,
                height: 270,
                audioMode: !1,
                localization: {
                    play: "Play",
                    playback: "Start playback",
                    pause: "Pause",
                    volume: "Volume",
                    prev: "Previous",
                    next: "Next",
                    cast: "Chromecast",
                    airplay: "Airplay",
                    fullscreen: "Fullscreen",
                    playlist: "Playlist",
                    hd: "Quality",
                    cc: "Closed captions",
                    audioTracks: "Audio tracks",
                    replay: "Replay",
                    buffer: "Loading",
                    more: "More",
                    liveBroadcast: "Live broadcast",
                    loadingAd: "Loading ad",
                    rewind: "Rewind 10s",
                    nextUp: "Next Up",
                    nextUpClose: "Next Up Close",
                    related: "Related"
                },
                renderCaptionsNatively: !1
            },
            s = function(s, l) {
                var u = l && l.getAllItems(),
                    c = t.extend({}, (window.jwplayer || {}).defaults, u, s);
                i(c), c.localization = t.extend({}, a.localization, c.localization);
                var d = t.extend({}, a, c);
                "." === d.base && (d.base = e.getScriptPath("jwplayer.js")), d.base = (d.base || e.loadFrom()).replace(/\/?$/, "/"), n.p = d.base, d.width = o(d.width), d.height = o(d.height);
                var p = e.getScriptPath("jwplayer.js") || d.base;
                if (d.flashplayer = d.flashplayer || p + "jwplayer.flash.swf", d.flashloader = d.flashloader || p + "jwplayer.loader.swf", "http:" === window.location.protocol && (d.flashplayer = d.flashplayer.replace("https", "http"), d.flashloader = d.flashloader.replace("https", "http")), d.aspectratio = r(d.aspectratio, d.width), t.isObject(d.skin) && (d.skinUrl = d.skin.url, d.skinColorInactive = d.skin.inactive, d.skinColorActive = d.skin.active, d.skinColorBackground = d.skin.background, d.skin = t.isString(d.skin.name) ? d.skin.name : a.skin), t.isString(d.skin) && d.skin.indexOf(".xml") > 0 && (console.log("JW Player does not support XML skins, please update your config"), d.skin = d.skin.replace(".xml", "")), d.aspectratio || delete d.aspectratio, !d.playlist) {
                    var f = t.pick(d, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload"]);
                    d.playlist = [f]
                }
                return d
            };
        return s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(116), n(1), n(39), n(38), n(21)], o = function(e, t, n, i, o) {
        var r = [],
            a = 0,
            s = function(t) {
                var n, i;
                return t ? "string" == typeof t ? (n = l(t), n || (i = document.getElementById(t))) : "number" == typeof t ? n = r[t] : t.nodeType && (i = t, n = l(i.id)) : n = r[0], n ? n : i ? u(new e(i, c)) : {
                    registerPlugin: o.registerPlugin
                }
            },
            l = function(e) {
                for (var t = 0; t < r.length; t++)
                    if (r[t].id === e) return r[t];
                return null
            },
            u = function(e) {
                return a++, e.uniqueId = a, r.push(e), e
            },
            c = function(e) {
                for (var t = r.length; t--;)
                    if (r[t].uniqueId === e.uniqueId) {
                        r.splice(t, 1);
                        break
                    }
            },
            d = {
                selectPlayer: s,
                registerProvider: n.registerProvider,
                availableProviders: i,
                registerPlugin: o.registerPlugin
            };
        return s.api = d, d
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(173), n(3), n(1), n(4)], o = function(e, t, n, i) {
        var o = function(t, o, r, a) {
            function s() {
                p("Setup Timeout Error", "Setup took longer than " + w + " seconds to complete.")
            }

            function l() {
                n.each(g, function(e) {
                    e.complete !== !0 && e.running !== !0 && null !== t && c(e.depends) && (e.running = !0, u(e))
                })
            }

            function u(e) {
                var n = function(t) {
                    t = t || {}, d(e, t)
                };
                e.method(n, o, t, r, a)
            }

            function c(e) {
                return n.all(e, function(e) {
                    return g[e].complete
                })
            }

            function d(e, t) {
                "error" === t.type ? p(t.msg, t.reason) : "complete" === t.type ? (clearTimeout(f), h.trigger(i.JWPLAYER_READY)) : (e.complete = !0, l())
            }

            function p(e, t) {
                clearTimeout(f), h.trigger(i.JWPLAYER_SETUP_ERROR, {
                    message: e + ": " + t
                }), h.destroy()
            }
            var f, h = this,
                g = e.getQueue(),
                w = 30;
            this.start = function() {
                f = setTimeout(s, 1e3 * w), l()
            }, this.destroy = function() {
                clearTimeout(f), this.off(), g.length = 0, t = null, o = null, r = null
            }
        };
        return o.prototype = t, o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(19), n(18)], o = function(e, t, n) {
        var i = function(i, o) {
            function r(e) {
                if (e.tracks.length) {
                    for (var t = e.tracks || [], n = 0; n < t.length; n++) {
                        var i = t[n];
                        v[i._id] || p(i)
                    }
                    var o = f();
                    h(), this.setCaptionsList(o)
                }
            }

            function a(e, t) {
                w = t, m = [], v = {}, j = {}, y = 0
            }

            function s(e) {
                a(o, e);
                var n = e.tracks,
                    i = n && n.length;
                if (!o.get("renderCaptionsNatively") && i) {
                    var r, s;
                    for (r = 0; r < i; r++) s = n[r], l(s.kind) && !v[s._id] && (p(s), t.loadFile(s, u.bind(null, s), c))
                }
                var d = f();
                h(), this.setCaptionsList(d)
            }

            function l(e) {
                return "subtitles" === e || "captions" === e
            }

            function u(e, t) {
                e.data = t
            }

            function c(t) {
                e.log("CAPTIONS(" + t + ")")
            }

            function d(e, t) {
                var n = null;
                0 !== t && (n = m[t - 1]), e.set("captionsTrack", n)
            }

            function p(e) {
                if (e.data = e.data || [], e.name = e.label || e.name || e.language, e._id = n.createId(e, m.length), !e.name) {
                    var t = n.createLabel(e, y);
                    e.name = t.label, y = t.unknownCount
                }
                m.push(e), v[e._id] = e
            }

            function f() {
                for (var e = [{
                        id: "off",
                        label: "Off"
                    }], t = 0; t < m.length; t++) e.push({
                    id: m[t]._id,
                    label: m[t].name || "Unknown CC"
                });
                return e
            }

            function h() {
                var e = 0,
                    t = o.get("captionLabel");
                if ("Off" === t) return void o.set("captionsIndex", 0);
                for (var n = 0; n < m.length; n++) {
                    var i = m[n];
                    if (t && t === i.name) {
                        e = n + 1;
                        break
                    }
                    i["default"] || i.defaulttrack || "default" === i._id ? e = n + 1 : i.autoselect
                }
                g(e)
            }

            function g(e) {
                m.length ? o.setVideoSubtitleTrack(e, m) : o.set("captionsIndex", e)
            }
            o.on("change:playlistItem", a, this), o.on("change:captionsIndex", d, this), o.on("itemReady", s, this), o.mediaController.on("subtitlesTracks", r, this);
            var w = {},
                m = [],
                v = {},
                j = {},
                y = 0;
            this.getCurrentIndex = function() {
                return o.get("captionsIndex")
            }, this.getCaptionsList = function() {
                return o.get("captionsList")
            }, this.setCaptionsList = function(e) {
                o.set("captionsList", e)
            }
        };
        return i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(118), n(123), n(1), n(120), n(121), n(29), n(128), n(50), n(49), n(2), n(74), n(3), n(30), n(5), n(4), n(157)], o = function(e, t, i, o, r, a, s, l, u, c, d, p, f, h, g, w) {
        function m(e) {
            return function() {
                var t = Array.prototype.slice.call(arguments, 0);
                this._model.getVideo() ? this["_" + e].apply(this, t) : this.eventsQueue.push([e, t])
            }
        }

        function v(e) {
            return e === h.LOADING || e === h.STALLED ? h.BUFFERING : e
        }
        var j = function(e) {
            this.originalContainer = this.currentContainer = e, this.eventsQueue = [], i.extend(this, p), this._model = new a
        };
        return j.prototype = {
            play: m("play"),
            pause: m("pause"),
            seek: m("seek"),
            stop: m("stop"),
            load: m("load"),
            playlistNext: m("next"),
            playlistPrev: m("prev"),
            playlistItem: m("item"),
            setCurrentCaptions: m("setCurrentCaptions"),
            setCurrentQuality: m("setCurrentQuality"),
            setFullscreen: m("setFullscreen"),
            setup: function(a, p) {
                function w(e, t) {
                    fe.triggerAfterReady(e, t)
                }

                function m() {
                    ae = null, oe.on("all", w, fe), fe.showView(oe.element()), i.defer(j)
                }

                function j() {
                    fe.trigger(g.JWPLAYER_READY, {
                        setupTime: 0
                    }), fe.triggerAfterReady = fe.trigger;
                    for (var e = 0; e < me.length; e++) {
                        var t = me[e];
                        de = t.type === g.JWPLAYER_MEDIA_BEFOREPLAY, fe.trigger(t.type, t.args), de = !1
                    }
                    var n = p.getPlugin("related");
                    n && n.on("nextUp", ce.setNextUp, ce), ie() && (c.isMobile() && he().video ? y(he().video) : R())
                }

                function y(e) {
                    "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? b(e) : n.e(10, function(require) {
                        n(54), b(e)
                    })
                }

                function b(e) {
                    window.IntersectionObserver && (ue = new window.IntersectionObserver(E, {
                        threshold: .5
                    }), ue.observe(e))
                }

                function x() {
                    ue.disconnect(), ue = void 0
                }

                function E(e) {
                    if (e && e.length) {
                        var t = he().video,
                            n = e[0],
                            i = {
                                reason: "autostart"
                            };
                        n.target === t && n.intersectionRatio >= .5 ? fe.play(i) : fe.pause(i)
                    }
                }

                function k(e) {
                    var t = ce.getProviders(),
                        n = t.required(e, ce.get("primary"));
                    return t.load(n).then(function() {
                        fe.getProvider() || (ce.setProvider(ce.get("playlistItem")), C())
                    })
                }

                function C() {
                    for (; fe.eventsQueue.length > 0;) {
                        var e = fe.eventsQueue.shift(),
                            t = e[0],
                            n = e[1] || [];
                        fe["_" + t].apply(fe, n)
                    }
                }

                function A(e) {
                    switch (ce.get("state") === h.ERROR && ce.set("state", h.IDLE), ce.set("preInstreamState", "instream-idle"), M(!0), fe.trigger("destroyPlugin", {}), ie() && ce.once("itemReady", R), typeof e) {
                        case "string":
                            L(e);
                            break;
                        case "object":
                            var t = D(e);
                            t && Y(0);
                            break;
                        case "number":
                            Y(e)
                    }
                }

                function L(e) {
                    var t = new u;
                    t.on(g.JWPLAYER_PLAYLIST_LOADED, function(e) {
                        A(e.playlist)
                    }), t.on(g.JWPLAYER_ERROR, function(e) {
                        e.message = "Error loading playlist: " + e.message, this.triggerError(e)
                    }, this), t.load(e)
                }

                function _() {
                    return fe._instreamAdapter && fe._instreamAdapter.getState()
                }

                function T() {
                    var e = _();
                    return i.isString(e) ? e : ce.get("state")
                }

                function P(e) {
                    var t;
                    if (e && ce.set("playReason", e.reason), ce.get("state") !== h.ERROR) {
                        var n = _();
                        if (i.isString(n)) return p.pauseAd(!1);
                        if (ce.get("state") === h.COMPLETE && (M(!0), Y(0)), !de && (de = !0, fe.triggerAfterReady(g.JWPLAYER_MEDIA_BEFOREPLAY, {
                                playReason: ce.get("playReason")
                            }), de = !1, le)) return le = !1, void(se = null);
                        if (S()) {
                            if (0 === ce.get("playlist").length) return !1;
                            t = c.tryCatch(function() {
                                ce.loadVideo()
                            })
                        } else ce.get("state") === h.PAUSED && (t = c.tryCatch(function() {
                            ce.playVideo()
                        }));
                        return !(t instanceof c.Error) || (fe.triggerError(t), se = null, !1)
                    }
                }

                function R() {
                    P({
                        reason: "autostart"
                    })
                }

                function M(e) {
                    ce.off("itemReady", R);
                    var t = !e;
                    se = null;
                    var n = c.tryCatch(function() {
                        ce.stopVideo()
                    }, fe);
                    return n instanceof c.Error ? (fe.triggerError(n), !1) : (t && (pe = !0), de && (le = !0), !0)
                }

                function I(e) {
                    se = null, e && (ce.set("pauseReason", e.reason), !ue || "interaction" !== e.reason && "external" !== e.reason || x());
                    var t = _();
                    if (i.isString(t)) return p.pauseAd(!0);
                    switch (ce.get("state")) {
                        case h.ERROR:
                            return !1;
                        case h.PLAYING:
                        case h.BUFFERING:
                            var n = c.tryCatch(function() {
                                he().pause()
                            }, this);
                            if (n instanceof c.Error) return fe.triggerError(n), !1;
                            break;
                        default:
                            de && (le = !0)
                    }
                    return !0
                }

                function S() {
                    var e = ce.get("state");
                    return e === h.IDLE || e === h.COMPLETE || e === h.ERROR
                }

                function O(e, t) {
                    ce.get("state") !== h.ERROR && (ce.get("scrubbing") || ce.get("state") === h.PLAYING || P(t), he().seek(e))
                }

                function N(e, t) {
                    M(!0), ce.get("state") === h.ERROR && ce.set("state", h.IDLE), Y(e), P(t)
                }

                function D(e) {
                    var t = l(e);
                    return t = l.filterPlaylist(t, ce), ce.set("playlist", t), i.isArray(t) && 0 !== t.length ? (k(t), !0) : (fe.triggerError({
                        message: "Error loading playlist: No playable sources found"
                    }), !1)
                }

                function Y(e) {
                    ce.setItemIndex(e)
                }

                function F(e) {
                    N(ce.get("item") - 1, e || {
                        reason: "external"
                    })
                }

                function W(e) {
                    N(ce.get("item") + 1, e || {
                        reason: "external"
                    })
                }

                function J() {
                    if (S()) {
                        if (pe) return void(pe = !1);
                        se = J;
                        var e = ce.get("item");
                        return e === ce.get("playlist").length - 1 ? void(ce.get("repeat") ? W({
                            reason: "repeat"
                        }) : (ue && x(), ce.set("state", h.COMPLETE), fe.trigger(g.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void W({
                            reason: "playlist"
                        })
                    }
                }

                function B(e) {
                    he() && (e = parseInt(e, 10) || 0, he().setCurrentQuality(e))
                }

                function V() {
                    return he() ? he().getCurrentQuality() : -1
                }

                function z() {
                    if (this._model) return this._model.getConfiguration()
                }

                function U() {
                    if (this._model.mediaModel) return this._model.mediaModel.get("visualQuality");
                    var e = H();
                    if (e) {
                        var t = V(),
                            n = e[t];
                        if (n) return {
                            level: i.extend({
                                index: t
                            }, n),
                            mode: "",
                            reason: ""
                        }
                    }
                    return null
                }

                function H() {
                    return he() ? he().getQualityLevels() : null
                }

                function G(e) {
                    he() && (e = parseInt(e, 10) || 0, he().setCurrentAudioTrack(e))
                }

                function K() {
                    return he() ? he().getCurrentAudioTrack() : -1
                }

                function q() {
                    return he() ? he().getAudioTracks() : null
                }

                function X(e) {
                    e = parseInt(e, 10) || 0, ce.persistVideoSubtitleTrack(e), fe.trigger(g.JWPLAYER_CAPTIONS_CHANGED, {
                        tracks: $(),
                        track: e
                    })
                }

                function Q() {
                    return re.getCurrentIndex()
                }

                function $() {
                    return re.getCaptionsList()
                }

                function Z() {
                    var e = ce.getVideo();
                    if (e) {
                        var t = e.detachMedia();
                        if (t instanceof HTMLVideoElement) return t
                    }
                    return null
                }

                function ee() {
                    var e = c.tryCatch(function() {
                        ce.getVideo().attachMedia()
                    });
                    return e instanceof c.Error ? void c.log("Error calling _attachMedia", e) : void("function" == typeof se && se())
                }

                function te(e) {
                    i.isBoolean(e) || (e = !ce.get("fullscreen")), ce.set("fullscreen", e), this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set("fullscreen", e)
                }

                function ne() {
                    var e = p.getPlugin("related");
                    e && e.next()
                }

                function ie() {
                    return ce.get("autostart") && !c.isMobile() || ce.autoStartOnMobile()
                }
                var oe, re, ae, se, le, ue, ce = this._model,
                    de = !1,
                    pe = !1,
                    fe = this,
                    he = function() {
                        return ce.getVideo()
                    },
                    ge = new s;
                ge.track(ce);
                var we = new e(a, ge),
                    me = [];
                ce.setup(we, ge), oe = this._view = new d(p, ce), ae = new o(p, ce, oe, D), ae.on(g.JWPLAYER_READY, m, this), ae.on(g.JWPLAYER_SETUP_ERROR, this.setupError, this), ce.mediaController.on("all", w, this), ce.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE, function() {
                    i.defer(J)
                }), ce.mediaController.on(g.JWPLAYER_MEDIA_ERROR, this.triggerError, this), ce.on("change:flashBlocked", function(e, t) {
                    if (!t) return void this._model.set("errorEvent", void 0);
                    var n = !!e.get("flashThrottle"),
                        i = {
                            message: n ? "Click to run Flash" : "Flash plugin failed to load"
                        };
                    n || this.trigger(g.JWPLAYER_ERROR, i), this._model.set("errorEvent", i)
                }, this), ce.on("change:state", f, this), ce.on("change:castState", function(e, t) {
                    fe.trigger(g.JWPLAYER_CAST_SESSION, t)
                }), ce.on("change:fullscreen", function(e, t) {
                    fe.trigger(g.JWPLAYER_FULLSCREEN, {
                        fullscreen: t
                    }), t && ue && x()
                }), ce.on("itemReady", function() {
                    fe.triggerAfterReady(g.JWPLAYER_PLAYLIST_ITEM, {
                        index: ce.get("item"),
                        item: ce.get("playlistItem")
                    })
                }), ce.on("change:playlist", function(e, t) {
                    t.length && fe.triggerAfterReady(g.JWPLAYER_PLAYLIST_LOADED, {
                        playlist: t
                    })
                }), ce.on("change:volume", function(e, t) {
                    fe.trigger(g.JWPLAYER_MEDIA_VOLUME, {
                        volume: t
                    })
                }), ce.on("change:mute", function(e, t) {
                    fe.trigger(g.JWPLAYER_MEDIA_MUTE, {
                        mute: t
                    })
                }), ce.on("change:controls", function(e, t) {
                    fe.trigger(g.JWPLAYER_CONTROLS, {
                        controls: t
                    })
                }), ce.on("change:scrubbing", function(e, t) {
                    t ? I() : P({
                        reason: "interaction"
                    })
                }), ce.on("change:captionsList", function(e, t) {
                    try {
                        fe.triggerAfterReady(g.JWPLAYER_CAPTIONS_LIST, {
                            tracks: t,
                            track: Q()
                        })
                    } catch (n) {
                        c.log("Error with captionsList event:", n)
                    }
                }), ce.on("change:mediaModel", function(e) {
                    e.mediaModel.on("change:state", function(t, n) {
                        var i = v(n);
                        e.set("state", i)
                    })
                }), re = new r(p, ce), this.triggerAfterReady = function(e, t) {
                    me.push({
                        type: e,
                        args: t
                    })
                }, this._play = P, this._pause = I, this._seek = O, this._stop = M, this._load = A, this._next = W, this._prev = F, this._item = N, this._setCurrentCaptions = X, this._setCurrentQuality = B, this._setFullscreen = te, this.detachMedia = Z, this.attachMedia = ee, this.getCurrentQuality = V, this.getQualityLevels = H, this.setCurrentAudioTrack = G, this.getCurrentAudioTrack = K, this.getAudioTracks = q, this.getCurrentCaptions = Q, this.getCaptionsList = $, this.getVisualQuality = U, this.getConfig = z, this.getState = T, this.setVolume = ce.setVolume.bind(ce), this.setMute = ce.setMute.bind(ce), this.getProvider = function() {
                    return ce.get("provider")
                }, this.getWidth = function() {
                    return ce.get("containerWidth")
                }, this.getHeight = function() {
                    return ce.get("containerHeight")
                }, this.getContainer = function() {
                    return this.currentContainer
                }, this.resize = oe.resize, this.getSafeRegion = oe.getSafeRegion, this.setCues = oe.addCues, this.setCaptions = oe.setCaptions, this.next = ne, this.addButton = function(e, t, n, o, r) {
                    var a = {
                            img: e,
                            tooltip: t,
                            callback: n,
                            id: o,
                            btnClass: r
                        },
                        s = ce.get("dock");
                    s = s ? s.slice(0) : [], s = i.reject(s, i.matches({
                        id: a.id
                    })), s.push(a), ce.set("dock", s)
                }, this.removeButton = function(e) {
                    var t = ce.get("dock") || [];
                    t = i.reject(t, i.matches({
                        id: e
                    })), ce.set("dock", t)
                }, this.checkBeforePlay = function() {
                    return de
                }, this.getItemQoe = function() {
                    return ce._qoeItem
                }, this.setControls = function(e) {
                    i.isBoolean(e) || (e = !ce.get("controls")), ce.set("controls", e);
                    var t = ce.getVideo();
                    t && t.setControls(e)
                }, this.playerDestroy = function() {
                    this.stop(), this.showView(this.originalContainer), oe && oe.destroy(), ce && ce.destroy(), ae && (ae.destroy(), ae = null)
                }, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function() {
                    return ce.getVideo().checkComplete()
                }, this.createInstream = function() {
                    return this.instreamDestroy(), this._instreamAdapter = new t(this, ce, oe), this._instreamAdapter
                }, this.skipAd = function() {
                    this._instreamAdapter && this._instreamAdapter.skipAd()
                }, this.instreamDestroy = function() {
                    fe._instreamAdapter && fe._instreamAdapter.destroy()
                }, ae.start()
            },
            showView: function(e) {
                (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get("id")), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(e, this.currentContainer), this.currentContainer = e)
            },
            triggerError: function(e) {
                this._model.set("errorEvent", e), this._model.set("state", h.ERROR), this._model.once("change:state", function() {
                    this._model.set("errorEvent", void 0)
                }, this), this.trigger(g.JWPLAYER_ERROR, e)
            },
            setupError: function(e) {
                var t = e.message,
                    n = c.createElement(w(this._model.get("id"), this._model.get("skin"), t)),
                    o = this._model.get("width"),
                    r = this._model.get("height");
                c.style(n, {
                    width: o.toString().indexOf("%") > 0 ? o : o + "px",
                    height: r.toString().indexOf("%") > 0 ? r : r + "px"
                }), this.showView(n);
                var a = this;
                i.defer(function() {
                    a.trigger(g.JWPLAYER_SETUP_ERROR, {
                        message: t
                    })
                })
            }
        }, j
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(125), n(124), n(4), n(5), n(2), n(3), n(1)], o = function(e, t, n, i, o, r, a) {
        function s(n) {
            var i = "",
                o = n.get("provider");
            return o && (i = o.name), i.indexOf("flash") >= 0 ? t : e
        }
        var l = {
                skipoffset: null,
                tag: null
            },
            u = function(e, r, u) {
                function c() {
                    y._adModel.set("state", "buffering"), r.set("skipButton", !1), b++;
                    var e, t = h[b];
                    g && (e = g[b]), E.loadItem(t, e)
                }

                function d(e, t) {
                    "complete" !== e && (t = t || {}, x.tag && !t.tag && (t.tag = x.tag), this.trigger(e, t), "mediaError" !== e && "error" !== e || h && b + 1 < h.length && c());
                }

                function p(e) {
                    y._adModel.set("duration", e.duration), y._adModel.set("position", e.position)
                }

                function f(e) {
                    var t = {};
                    x.tag && (t.tag = x.tag), this.trigger(n.JWPLAYER_MEDIA_COMPLETE, t), A.call(this, e)
                }
                var h, g, w, m, v, j = s(r),
                    y = new j(e, r),
                    b = 0,
                    x = {},
                    E = this,
                    k = a.bind(function(e) {
                        e = e || {}, e.hasControls = !!r.get("controls"), this.trigger(n.JWPLAYER_INSTREAM_CLICK, e), y && y._adModel && (y._adModel.get("state") === i.PAUSED ? e.hasControls && y.instreamPlay() : y.instreamPause())
                    }, this),
                    C = a.bind(function() {
                        y && y._adModel && y._adModel.get("state") === i.PAUSED && r.get("controls") && (e.setFullscreen(), e.play())
                    }, this);
                this.type = "instream", this.init = function() {
                    w = r.getVideo(), m = r.get("position"), v = r.get("playlist")[r.get("item")], y.on("all", d, this), y.on(n.JWPLAYER_MEDIA_TIME, p, this), y.on(n.JWPLAYER_MEDIA_COMPLETE, f, this), y.init(), w.detachMedia(), r.mediaModel.set("state", i.BUFFERING), e.checkBeforePlay() || 0 === m && !w.checkComplete() ? (m = 0, r.set("preInstreamState", "instream-preroll")) : w && w.checkComplete() || r.get("state") === i.COMPLETE ? r.set("preInstreamState", "instream-postroll") : r.set("preInstreamState", "instream-midroll");
                    var t = r.get("state");
                    return t !== i.PLAYING && t !== i.BUFFERING || w.pause(), u.setupInstream(y._adModel), y._adModel.set("state", i.BUFFERING), u.clickHandler().setAlternateClickHandlers(o.noop, null), this.setText(r.get("localization").loadingAd), this
                };
                var A = function(e) {
                    h && b + 1 < h.length ? c() : (e.type === n.JWPLAYER_MEDIA_COMPLETE && this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE, {}), this.destroy())
                };
                this.loadItem = function(e, i) {
                    if (o.isAndroid(2.3)) return void this.trigger({
                        type: n.JWPLAYER_ERROR,
                        message: "Error loading instream: Cannot play instream on Android 2.3"
                    });
                    var s = e;
                    a.isArray(e) ? (h = e, g = i, e = h[b], g && (i = g[b])) : s = [e];
                    var u = this,
                        c = r.getProviders(),
                        d = j === t ? "flash" : void 0,
                        p = c.required(s, d);
                    r.set("hideAdsControls", !1), c.load(p).then(function() {
                        if (null !== y) {
                            u.trigger(n.JWPLAYER_PLAYLIST_ITEM, {
                                index: b,
                                item: e
                            }), x = a.extend({}, l, i), y.load(e), u.addClickHandler();
                            var t = e.skipoffset || x.skipoffset;
                            t && u.setupSkipButton(t, x)
                        }
                    })
                }, this.setupSkipButton = function(e, t, n) {
                    r.set("skipButton", !1), n && (A = n), y._adModel.set("skipMessage", t.skipMessage), y._adModel.set("skipText", t.skipText), y._adModel.set("skipOffset", e), r.set("skipButton", !0)
                }, this.applyProviderListeners = function(e) {
                    y.applyProviderListeners(e), this.addClickHandler()
                }, this.play = function() {
                    y.instreamPlay()
                }, this.pause = function() {
                    y.instreamPause()
                }, this.addClickHandler = function() {
                    u.clickHandler().setAlternateClickHandlers(k, C), y.on(n.JWPLAYER_MEDIA_META, this.metaHandler, this)
                }, this.skipAd = function(e) {
                    var t = n.JWPLAYER_AD_SKIPPED;
                    this.trigger(t, e), A.call(this, {
                        type: t
                    })
                }, this.metaHandler = function(e) {
                    e.width && e.height && u.resizeMedia()
                }, this.destroy = function() {
                    if (this.off(), r.set("skipButton", !1), y) {
                        u.clickHandler() && u.clickHandler().revertAlternateClickHandlers(), r.off(null, null, y), y.instreamDestroy(), u.destroyInstream(), y = null, e.attachMedia();
                        var t = r.get("preInstreamState");
                        switch (t) {
                            case "instream-preroll":
                            case "instream-midroll":
                                var n = a.extend({}, v);
                                n.starttime = m, r.loadVideo(n), o.isMobile() && r.mediaModel.get("state") === i.BUFFERING && w.setState(i.BUFFERING), w.play();
                                break;
                            case "instream-postroll":
                            case "instream-idle":
                                w.stop()
                        }
                    }
                }, this.getState = function() {
                    return !(!y || !y._adModel) && y._adModel.get("state")
                }, this.setText = function(e) {
                    u.setAltText(e ? e : "")
                }, this.hide = function() {
                    r.set("hideAdsControls", !0)
                }
            };
        return a.extend(u.prototype, r), u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(3), n(29), n(30), n(4), n(5), n(2), n(1)], o = function(e, t, n, i, o, r, a) {
        var s = function(e, i) {
            this.model = i, this._adModel = (new t).setup({
                id: i.get("id"),
                volume: i.get("volume"),
                fullscreen: i.get("fullscreen"),
                mute: i.get("mute")
            }), this._adModel.on("change:state", n, this);
            var o = e.getContainer();
            this.swf = o.querySelector("object")
        };
        return s.prototype = a.extend({
            init: function() {
                if (r.isChrome()) {
                    var e = -1,
                        t = !1;
                    this.swf.on("throttle", function(n) {
                        if (clearTimeout(e), "resume" === n.state) t && (t = !1, this.instreamPlay());
                        else {
                            var i = this;
                            e = setTimeout(function() {
                                i._adModel.get("state") === o.PLAYING && (t = !0, i.instreamPause())
                            }, 250)
                        }
                    }, this)
                }
                this.swf.on("instream:state", this.stateHandler, this).on("instream:time", function(e) {
                    this._adModel.set("position", e.position), this._adModel.set("duration", e.duration), this.trigger(i.JWPLAYER_MEDIA_TIME, e)
                }, this).on("instream:complete", function(e) {
                    this.trigger(i.JWPLAYER_MEDIA_COMPLETE, e)
                }, this).on("instream:error", function(e) {
                    this.trigger(i.JWPLAYER_MEDIA_ERROR, e)
                }, this), this.swf.triggerFlash("instream:init"), this.applyProviderListeners = function(e) {
                    this.model.on("change:volume", function(t, n) {
                        e.volume(n)
                    }, this), this.model.on("change:mute", function(t, n) {
                        e.mute(n)
                    }, this), e.volume(this.model.get("volume")), e.mute(this.model.get("mute")), e.off(), e.on(i.JWPLAYER_PLAYER_STATE, this.stateHandler, this), e.on(i.JWPLAYER_MEDIA_TIME, function(e) {
                        this.trigger(i.JWPLAYER_MEDIA_TIME, e)
                    }, this)
                }
            },
            stateHandler: function(e) {
                switch (e.newstate) {
                    case o.PLAYING:
                    case o.PAUSED:
                        this._adModel.set("state", e.newstate)
                }
            },
            instreamDestroy: function() {
                this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash("instream:destroy"), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null)
            },
            load: function(e) {
                this.swf.triggerFlash("instream:load", e)
            },
            instreamPlay: function() {
                this.swf.triggerFlash("instream:play")
            },
            instreamPause: function() {
                this.swf.triggerFlash("instream:pause")
            }
        }, e), s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(3), n(30), n(4), n(5), n(29)], o = function(e, t, n, i, o, r) {
        var a = function(a, s) {
            function l(t) {
                var o = t || p.getVideo();
                if (f !== o) {
                    if (f = o, !o) return;
                    var r = "vpaid" === o.type;
                    o.off(), o.on("all", function(t, n) {
                        r && t === i.JWPLAYER_MEDIA_COMPLETE || this.trigger(t, e.extend({}, n, {
                            type: t
                        }))
                    }, h), o.on(i.JWPLAYER_MEDIA_BUFFER_FULL, d), o.on(i.JWPLAYER_PLAYER_STATE, u), o.attachMedia(), o.volume(s.get("volume")), o.mute(s.get("mute") || s.get("autostartMuted")), p.on("change:state", n, h)
                }
            }

            function u(e) {
                switch (e.newstate) {
                    case o.PLAYING:
                    case o.PAUSED:
                        p.set("state", e.newstate)
                }
            }

            function c(e) {
                s.trigger(e.type, e), h.trigger(i.JWPLAYER_FULLSCREEN, {
                    fullscreen: e.jwstate
                })
            }

            function d() {
                p.getVideo().play()
            }
            var p, f, h = e.extend(this, t);
            return a.on(i.JWPLAYER_FULLSCREEN, function(e) {
                this.trigger(i.JWPLAYER_FULLSCREEN, e)
            }, h), this.init = function() {
                p = (new r).setup({
                    id: s.get("id"),
                    volume: s.get("volume"),
                    fullscreen: s.get("fullscreen"),
                    mute: s.get("mute") || s.get("autostartMuted"),
                    instreamMode: !0
                }), p.on("fullscreenchange", c), this._adModel = p
            }, h.load = function(e) {
                p.set("item", 0), p.set("playlistItem", e), p.setActiveItem(e), l(), p.off(i.JWPLAYER_ERROR), p.on(i.JWPLAYER_ERROR, function(e) {
                    this.trigger(i.JWPLAYER_ERROR, e)
                }, h), p.loadVideo(e)
            }, h.applyProviderListeners = function(e) {
                l(e), e.off(i.JWPLAYER_ERROR), e.on(i.JWPLAYER_ERROR, function(e) {
                    this.trigger(i.JWPLAYER_ERROR, e)
                }, h), s.on("change:volume", function(e, t) {
                    f.volume(t)
                }, h), s.on("change:mute", function(e, t) {
                    f.mute(t)
                }, h), s.on("change:autostartMuted", function(e, t) {
                    t || f.mute(s.get("mute"))
                }, h)
            }, this.instreamDestroy = function() {
                p && (p.off(), this.off(), f && (f.detachMedia(), f.off(), p.getVideo() && f.destroy()), p = null, a.off(null, null, this), a = null)
            }, h.instreamPlay = function() {
                p.getVideo() && p.getVideo().play(!0)
            }, h.instreamPause = function() {
                p.getVideo() && p.getVideo().pause(!0)
            }, h
        };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(64), n(1)], o = function(e, t) {
        function n(e) {
            e.mediaController.off(a, e._onPlayAttempt), e.mediaController.off(s, e._triggerFirstFrame), e.mediaController.off(u, e._onTime), document.removeEventListener(p, e._onTabVisible)
        }

        function i(e) {
            n(e), e._triggerFirstFrame = t.once(function() {
                var t = e._qoeItem;
                t.tick(l);
                var i = t.getFirstFrame();
                e.mediaController.trigger(l, {
                    loadTime: i
                }), n(e)
            }), e._onTime = f(e._triggerFirstFrame), e._onPlayAttempt = function() {
                e._qoeItem.tick(a)
            }, e._onTabVisible = function(t) {
                var n = t.target.hidden;
                n === !0 ? e._qoeItem.tick(c) : n === !1 && e._qoeItem.tick(d)
            }, document.addEventListener(p, e._onTabVisible, !1), e.mediaController.on(a, e._onPlayAttempt), e.mediaController.once(s, e._triggerFirstFrame), e.mediaController.on(u, e._onTime)
        }

        function o(t) {
            function n(t, n, o) {
                t._qoeItem && o && t._qoeItem.end(o.get("state")), t._qoeItem = new e, t._qoeItem.getFirstFrame = function() {
                    var e = this.between(a, l),
                        t = this.between(d, l);
                    return t > 0 && t < e ? t : e
                }, t._qoeItem.tick(r), t._qoeItem.start(n.get("state")), i(t), n.on("change:state", function(e, n, i) {
                    t._qoeItem.end(i), t._qoeItem.start(n)
                })
            }
            t.on("change:mediaModel", n)
        }
        var r = "playlistItem",
            a = "playAttempt",
            s = "providerFirstFrame",
            l = "firstFrame",
            u = "time",
            c = "tabHidden",
            d = "tabVisible",
            p = "visibilitychange",
            f = function(e) {
                var t = 0;
                return function(n) {
                    var i = n.position;
                    i > t && e(), t = i
                }
            };
        return {
            model: o
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(21), n(49), n(15), n(61), n(22), n(1), n(2), n(4)], o = function(e, t, i, o, r, a, s, l) {
        function u() {
            var e = {
                LOAD_PROMISE_POLYFILL: {
                    method: c,
                    depends: []
                },
                LOAD_BASE64_POLYFILL: {
                    method: d,
                    depends: []
                },
                LOADED_POLYFILLS: {
                    method: p,
                    depends: ["LOAD_PROMISE_POLYFILL", "LOAD_BASE64_POLYFILL"]
                },
                LOAD_PLUGINS: {
                    method: f,
                    depends: ["LOADED_POLYFILLS"]
                },
                INIT_PLUGINS: {
                    method: h,
                    depends: ["LOAD_PLUGINS", "SETUP_VIEW"]
                },
                LOAD_SKIN: {
                    method: x,
                    depends: ["LOADED_POLYFILLS"]
                },
                LOAD_PLAYLIST: {
                    method: w,
                    depends: ["LOADED_POLYFILLS"]
                },
                CHECK_FLASH: {
                    method: m,
                    depends: ["LOADED_POLYFILLS"]
                },
                FILTER_PLAYLIST: {
                    method: v,
                    depends: ["LOAD_PLAYLIST", "CHECK_FLASH"]
                },
                SETUP_VIEW: {
                    method: E,
                    depends: ["LOAD_SKIN"]
                },
                SET_ITEM: {
                    method: k,
                    depends: ["INIT_PLUGINS", "FILTER_PLAYLIST"]
                },
                SEND_READY: {
                    method: C,
                    depends: ["SETUP_VIEW", "SET_ITEM"]
                }
            };
            return e
        }

        function c(e) {
            window.Promise ? e() : n.e(9, function(require) {
                n(55), e()
            })
        }

        function d(e) {
            window.btoa && window.atob ? e() : n.e(11, function(require) {
                n(53), e()
            })
        }

        function p(e) {
            e()
        }

        function f(t, n) {
            window.jwplayerPluginJsonp = e.registerPlugin, L = e.loadPlugins(n.get("id"), n.get("plugins")), L.on(l.COMPLETE, t), L.on(l.ERROR, a.partial(g, t)), L.load()
        }

        function h(e, t, n) {
            delete window.jwplayerPluginJsonp, L.setupPlugins(n, t), e()
        }

        function g(e, t) {
            A(e, "Could not load plugin", t.message)
        }

        function w(e, n) {
            var i = n.get("playlist");
            a.isString(i) ? (_ = new t, _.on(l.JWPLAYER_PLAYLIST_LOADED, function(t) {
                n.set("playlist", t.playlist), n.set("feedid", t.feedid), e()
            }), _.on(l.JWPLAYER_ERROR, a.partial(j, e)), _.load(i)) : e()
        }

        function m(e, t, n) {
            var i = "flash" === t.get("primary"),
                r = s.flashVersion();
            if (i && r) {
                var a = n.getContainer(),
                    l = a.parentElement;
                l || e();
                var u = document.createElement("div");
                u.id = t.get("id");
                var c = "" + u.id + "-" + Math.random().toString(16).substr(2),
                    d = t.get("flashloader"),
                    p = t.get("width"),
                    f = t.get("height");
                s.style(u, {
                    position: "relative",
                    width: p.toString().indexOf("%") > 0 ? p : p + "px",
                    height: f.toString().indexOf("%") > 0 ? f : f + "px"
                });
                var h = o.embed(d, u, c, null),
                    g = function() {
                        m !== -1 && (clearTimeout(m), m = -1, e())
                    },
                    w = function() {
                        t.set("primary", void 0), t.updateProviders(), g()
                    };
                if (Object.defineProperty(h, "embedCallback", {
                        get: function() {
                            return g
                        }
                    }), !h.on) return w();
                l.replaceChild(u, a);
                var m = setTimeout(w, 3e3)
            } else e()
        }

        function v(e, t, n, i, o) {
            var r = t.get("playlist"),
                a = o(r);
            a ? e() : j(e)
        }

        function j(e, t) {
            t && t.message ? A(e, "Error loading playlist", t.message) : A(e, "Error loading player", "No playable sources found")
        }

        function y(e, t) {
            if (a.contains(r.SkinsLoadable, e)) return t + "skins/" + e + ".css"
        }

        function b(e) {
            for (var t = document.styleSheets, n = 0, i = t.length; n < i; n++)
                if (t[n].href === e) return !0;
            return !1
        }

        function x(e, t) {
            var n = t.get("skin"),
                o = t.get("skinUrl");
            if (a.contains(r.SkinsIncluded, n)) return void e();
            if (o || (o = y(n, t.get("base"))), a.isString(o) && !b(o)) {
                t.set("skin-loading", !0);
                var s = !0,
                    u = new i(o, s);
                u.addEventListener(l.COMPLETE, function() {
                    t.set("skin-loading", !1)
                }), u.addEventListener(l.ERROR, function() {
                    t.set("skin", "seven"), t.set("skin-loading", !1)
                }), u.load()
            }
            a.defer(function() {
                e()
            })
        }

        function E(e, t, n, i) {
            i.setup(), e()
        }

        function k(e, t) {
            t.once("itemReady", e), t.setItemIndex(t.get("item"))
        }

        function C(e) {
            e({
                type: "complete"
            })
        }

        function A(e, t, n) {
            e({
                type: "error",
                msg: t,
                reason: n
            })
        }
        var L, _;
        return {
            getQueue: u,
            error: A
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2)], o = function(e, t) {
        function n(e) {
            return "jwplayer." + e
        }

        function i() {
            return e.reduce(this.persistItems, function(e, i) {
                var o = l[n(i)];
                return o && (e[i] = t.serialize(o)), e
            }, {})
        }

        function o(e, t) {
            try {
                l[n(e)] = t
            } catch (i) {
                var o = window.jwplayer;
                o && o.debug && console.error(i)
            }
        }

        function r() {
            e.each(this.persistItems, function(e) {
                l.removeItem(n(e))
            })
        }

        function a() {
            this.persistItems = ["volume", "mute", "captionLabel", "qualityLabel"]
        }

        function s(t) {
            e.each(this.persistItems, function(e) {
                t.on("change:" + e, function(t, n) {
                    o(e, n)
                })
            })
        }
        var l = {
            removeItem: t.noop
        };
        try {
            l = window.localStorage
        } catch (u) {}
        return e.extend(a.prototype, {
            getAllItems: i,
            track: s,
            clear: r
        }), a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(68), n(2)], o = function(e, t) {
        return n.p = t.loadFrom(), e.selectPlayer
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9)], o = function(e) {
        function t(e) {
            e || n()
        }

        function n() {
            throw new Error("Invalid DFXP file")
        }
        var i = e.seconds;
        return function(o) {
            t(o);
            var r = [],
                a = o.getElementsByTagName("p"),
                s = 30,
                l = o.getElementsByTagName("tt");
            if (l && l[0]) {
                var u = parseFloat(l[0].getAttribute("ttp:frameRate"));
                isNaN(u) || (s = u)
            }
            t(a), a.length || (a = o.getElementsByTagName("tt:p"), a.length || (a = o.getElementsByTagName("tts:p")));
            for (var c = 0; c < a.length; c++) {
                for (var d = a[c], p = d.getElementsByTagName("br"), f = 0; f < p.length; f++) {
                    var h = p[f];
                    h.parentNode.replaceChild(o.createTextNode("\r\n"), h)
                }
                var g = d.innerHTML || d.textContent || d.text || "",
                    w = e.trim(g).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                if (w) {
                    var m = d.getAttribute("begin"),
                        v = d.getAttribute("dur"),
                        j = d.getAttribute("end"),
                        y = {
                            begin: i(m, s),
                            text: w
                        };
                    j ? y.end = i(j, s) : v && (y.end = y.begin + i(v, s)), r.push(y)
                }
            }
            return r.length || n(), r
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(20), n(9), n(2)], o = function(e, t, n) {
        var i = "jwplayer",
            o = function(o, r) {
                for (var a = [], s = [], l = t.xmlAttribute, u = "default", c = "label", d = "file", p = "type", f = 0; f < o.childNodes.length; f++) {
                    var h = o.childNodes[f];
                    if (h.prefix === i) {
                        var g = e.localName(h);
                        "source" === g ? (delete r.sources, a.push({
                            file: l(h, d),
                            "default": l(h, u),
                            label: l(h, c),
                            type: l(h, p)
                        })) : "track" === g ? (delete r.tracks, s.push({
                            file: l(h, d),
                            "default": l(h, u),
                            kind: l(h, "kind"),
                            label: l(h, c)
                        })) : (r[g] = n.serialize(e.textContent(h)), "file" === g && r.sources && delete r.sources)
                    }
                    r[d] || (r[d] = r.link)
                }
                if (a.length)
                    for (r.sources = [], f = 0; f < a.length; f++) a[f].file.length > 0 && (a[f][u] = "true" === a[f][u], a[f].label.length || delete a[f].label, r.sources.push(a[f]));
                if (s.length)
                    for (r.tracks = [], f = 0; f < s.length; f++) s[f].file.length > 0 && (s[f][u] = "true" === s[f][u], s[f].kind = s[f].kind.length ? s[f].kind : "captions", s[f].label.length || delete s[f].label, r.tracks.push(s[f]));
                return r
            };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(20), n(9), n(2)], o = function(e, t, n) {
        function i(e) {
            for (var t = [], n = 0; n < s(e); n++) {
                var i = e.childNodes[n];
                "jwplayer" === i.prefix && "mediatypes" === r(i).toLowerCase() && t.push(a(i))
            }
            return t
        }
        var o = t.xmlAttribute,
            r = e.localName,
            a = e.textContent,
            s = e.numChildren,
            l = "media",
            u = function(e, t) {
                function c(e) {
                    var t = {
                        zh: "Chinese",
                        nl: "Dutch",
                        en: "English",
                        fr: "French",
                        de: "German",
                        it: "Italian",
                        ja: "Japanese",
                        pt: "Portuguese",
                        ru: "Russian",
                        es: "Spanish"
                    };
                    return t[e] ? t[e] : e
                }
                var d, p, f = "tracks",
                    h = [];
                for (p = 0; p < s(e); p++)
                    if (d = e.childNodes[p], d.prefix === l) {
                        if (!r(d)) continue;
                        switch (r(d).toLowerCase()) {
                            case "content":
                                if (o(d, "duration") && (t.duration = n.seconds(o(d, "duration"))), o(d, "url")) {
                                    t.sources || (t.sources = []);
                                    var g = {
                                            file: o(d, "url"),
                                            type: o(d, "type"),
                                            width: o(d, "width"),
                                            label: o(d, "label")
                                        },
                                        w = i(d);
                                    w.length && (g.mediaTypes = w), t.sources.push(g)
                                }
                                s(d) > 0 && (t = u(d, t));
                                break;
                            case "title":
                                t.title = a(d);
                                break;
                            case "description":
                                t.description = a(d);
                                break;
                            case "guid":
                                t.mediaid = a(d);
                                break;
                            case "thumbnail":
                                t.image || (t.image = o(d, "url"));
                                break;
                            case "player":
                                break;
                            case "group":
                                u(d, t);
                                break;
                            case "subtitle":
                                var m = {};
                                m.file = o(d, "url"), m.kind = "captions", o(d, "lang").length > 0 && (m.label = c(o(d, "lang"))), h.push(m)
                        }
                    }
                for (t.hasOwnProperty(f) || (t[f] = []), p = 0; p < h.length; p++) t[f].push(h[p]);
                return t
            };
        return u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {
                kind: "captions",
                "default": !1
            },
            n = function(n) {
                if (n && n.file) return e.extend({}, t, n)
            };
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(24), n(2), n(4), n(3), n(1), n(15)], o = function(e, t, n, i, o, r) {
        function a(e, t, n) {
            return function() {
                var i = e.getContainer().getElementsByClassName("jw-overlays")[0];
                i && (i.appendChild(n), n.left = i.style.left, n.top = i.style.top, t.displayArea = i)
            }
        }

        function s(e) {
            function t() {
                var t = e.displayArea;
                t && e.resize(t.clientWidth, t.clientHeight)
            }
            return function() {
                t(), setTimeout(t, 400)
            }
        }
        var l = function(l, u) {
            function c() {
                w || (w = !0, g = r.loaderstatus.COMPLETE, h.trigger(n.COMPLETE))
            }

            function d() {
                if (!v && (u && 0 !== o.keys(u).length || c(), !w)) {
                    var i = l.getPlugins();
                    f = o.after(m, c), o.each(u, function(o, a) {
                        var s = e.getPluginName(a),
                            l = i[s],
                            u = l.getJS(),
                            c = l.getTarget(),
                            d = l.getStatus();
                        d !== r.loaderstatus.LOADING && d !== r.loaderstatus.NEW && (u && !t.versionCheck(c) && h.trigger(n.ERROR, {
                            message: "Incompatible player version"
                        }), f())
                    })
                }
            }

            function p(e) {
                if (!v) {
                    var i = "File not found";
                    e.url && t.log(i, e.url), this.off(), this.trigger(n.ERROR, {
                        message: i
                    }), d()
                }
            }
            var f, h = o.extend(this, i),
                g = r.loaderstatus.NEW,
                w = !1,
                m = o.size(u),
                v = !1;
            this.setupPlugins = function(n, i) {
                var r = [],
                    u = l.getPlugins(),
                    c = i.get("plugins");
                o.each(c, function(i, l) {
                    var d = e.getPluginName(l),
                        p = u[d],
                        f = p.getFlashPath(),
                        h = p.getJS(),
                        g = p.getURL();
                    if (f) {
                        var w = o.extend({
                            name: d,
                            swf: f,
                            pluginmode: p.getPluginmode()
                        }, i);
                        r.push(w)
                    }
                    var m = t.tryCatch(function() {
                        if (h) {
                            var e = c[g];
                            if (!e) return void t.log("JW Plugin already loaded", d, g);
                            var i = document.createElement("div");
                            i.id = n.id + "_" + d, i.className = "jw-plugin jw-reset";
                            var r = o.extend({}, e),
                                l = p.getNewInstance(n, r, i);
                            l.addToPlayer = a(n, l, i), l.resizeHandler = s(l), n.addPlugin(d, l, i)
                        }
                    });
                    m instanceof t.Error && t.log("ERROR: Failed to load " + d + ".")
                }), i.set("flashPlugins", r)
            }, this.load = function() {
                if (t.exists(u) && "object" !== t.typeOf(u)) return void d();
                g = r.loaderstatus.LOADING, o.each(u, function(e, i) {
                    if (t.exists(i)) {
                        var o = l.addPlugin(i);
                        o.on(n.COMPLETE, d), o.on(n.ERROR, p)
                    }
                });
                var e = l.getPlugins();
                o.each(e, function(e) {
                    e.load()
                }), d()
            }, this.destroy = function() {
                v = !0, this.off()
            }, this.getStatus = function() {
                return g
            }
        };
        return l
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(24), n(52)], o = function(e, t) {
        var n = function(n) {
            this.addPlugin = function(i) {
                var o = e.getPluginName(i);
                return n[o] || (n[o] = new t(i)), n[o]
            }, this.getPlugins = function() {
                return n
            }
        };
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {}
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(58), n(2), n(1), n(65)], o = function(e, t, n, i) {
        var o = [{
            name: "youtube",
            supports: function(e) {
                return t.isYouTube(e.file, e.type)
            }
        }, {
            name: "html5",
            supports: function(n) {
                var o = {
                        aac: "audio/mp4",
                        mp4: "video/mp4",
                        f4v: "video/mp4",
                        m4v: "video/mp4",
                        mov: "video/mp4",
                        mp3: "audio/mpeg",
                        mpeg: "audio/mpeg",
                        ogv: "video/ogg",
                        ogg: "video/ogg",
                        oga: "video/ogg",
                        vorbis: "video/ogg",
                        webm: "video/webm",
                        f4a: "video/aac",
                        m3u8: "application/vnd.apple.mpegurl",
                        m3u: "application/vnd.apple.mpegurl",
                        hls: "application/vnd.apple.mpegurl"
                    },
                    r = n.file,
                    a = n.type,
                    s = e(n);
                if (null !== s) return s;
                if (t.isRtmp(r, a)) return !1;
                if (!o[a]) return !1;
                if (i.canPlayType) {
                    var l = i.canPlayType(o[a]);
                    return !!l
                }
                return !1
            }
        }, {
            name: "flash",
            supports: function(e) {
                var i = {
                        flv: "video",
                        f4v: "video",
                        mov: "video",
                        m4a: "video",
                        m4v: "video",
                        mp4: "video",
                        aac: "video",
                        f4a: "video",
                        mp3: "sound",
                        mpeg: "sound",
                        smil: "rtmp"
                    },
                    o = n.keys(i);
                if (!t.isFlashSupported()) return !1;
                var r = e.file,
                    a = e.type;
                return !!t.isRtmp(r, a) || n.contains(o, a)
            }
        }];
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(12), n(38), n(137), n(1), n(140)], o = function(e, t, i, o, r) {
        function a(e) {
            this.config = e || {}, this.providers = this.reorderProviders(this.config.primary)
        }
        a.loaders = {
            html5: function(e) {
                n.e(4, function(require) {
                    var t = n(70);
                    s(t), e(t)
                })
            },
            flash: function(e) {
                n.e(5, function(require) {
                    var t = n(57);
                    s(t), e(t)
                })
            },
            youtube: function(e) {
                n.e(7, function(require) {
                    var t = n(59);
                    s(t), e(t)
                })
            }
        };
        var s = a.registerProvider = function(n) {
            var a = n.getName().name;
            if (!i[a]) {
                if (!o.find(t, o.matches({
                        name: a
                    }))) {
                    if (!o.isFunction(n.supports)) throw {
                        message: "Tried to register a provider with an invalid object"
                    };
                    t.unshift({
                        name: a,
                        supports: n.supports
                    })
                }
                r(n.prototype, e), i[a] = n
            }
        };
        return o.extend(a.prototype, {
            load: function(e) {
                return Promise.all(o.map(e, function(e) {
                    return new Promise(function(t) {
                        var n = a.loaders[e.name];
                        n ? n(t) : t()
                    })
                }))
            },
            reorderProviders: function(e) {
                var n = o.clone(t);
                if ("flash" === e) {
                    var i = o.indexOf(n, o.findWhere(n, {
                            name: "flash"
                        })),
                        r = n.splice(i, 1)[0],
                        a = o.indexOf(n, o.findWhere(n, {
                            name: "html5"
                        }));
                    n.splice(a, 0, r)
                }
                return n
            },
            providerSupports: function(e, t) {
                return e.supports(t)
            },
            required: function(e, t) {
                var n = this,
                    i = this.reorderProviders(t);
                return e = e.slice(), o.compact(o.map(i, function(t) {
                    for (var i = !1, o = e.length; o--;) {
                        var r = e[o],
                            a = n.providerSupports(t, r.sources[0]);
                        a && e.splice(o, 1), i = i || a
                    }
                    if (i) return t
                }))
            },
            choose: function(e) {
                e = o.isObject(e) ? e : {};
                for (var t = this.providers.length, n = 0; n < t; n++) {
                    var r = this.providers[n];
                    if (this.providerSupports(r, e)) {
                        var a = t - n - 1;
                        return {
                            priority: a,
                            name: r.name,
                            type: e.type,
                            providerToCheck: r,
                            provider: i[r.name]
                        }
                    }
                }
                return null
            }
        }), a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        return function(t) {
            return e.each(Array.prototype.slice.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) n in t || (t[n] = e[n])
            }), t
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            hasClass: function(e, t) {
                var n = " " + t + " ";
                return 1 === e.nodeType && (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(n) >= 0
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(3)], o = function(e, t) {
        var n = e.extend({
            get: function(e) {
                return this.attributes = this.attributes || {}, this.attributes[e]
            },
            set: function(e, t) {
                if (this.attributes = this.attributes || {}, this.attributes[e] !== t) {
                    var n = this.attributes[e];
                    this.attributes[e] = t, this.trigger("change:" + e, this, t, n)
                }
            },
            clone: function() {
                return e.clone(this.attributes)
            }
        }, t);
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {};
        return t.isDvr = function(e, t) {
            return Math.abs(e) >= Math.max(t, 0)
        }, t.streamType = function(n, i) {
            var o = e.isUndefined(i) ? 120 : i,
                r = "VOD";
            return n === 1 / 0 ? r = "LIVE" : n < 0 && (r = t.isDvr(n, o) ? "DVR" : "LIVE"), r
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = function(e, n, i) {
                n = n || this, i = i || [];
                var o = window.jwplayer;
                if (o && o.debug) return e.apply(n, i);
                try {
                    return e.apply(n, i)
                } catch (r) {
                    return new t(e.name, r)
                }
            },
            t = function(e, t) {
                this.name = e, this.message = t.message || t.toString(), this.error = t
            };
        return {
            tryCatch: e,
            Error: t
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(1)], o = function(e) {
        return function(t, n, i) {
            var o = n,
                r = i,
                a = 0;
            o >= 1280 ? a = 7 : o >= 960 ? a = 6 : o >= 800 ? a = 5 : o >= 640 ? a = 4 : o >= 540 ? a = 3 : o >= 420 ? a = 2 : o >= 320 && (a = 1);
            var s = "jw-breakpoint-" + a;
            return e.replaceClass(t, /jw-breakpoint-\d+/, s), e.toggleClass(t, "jw-orientation-portrait", r > o), a
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(23), n(5), n(1)], o = function(e, t, i, o) {
        var r = t.style,
            a = {
                back: !0,
                fontSize: 14,
                fontFamily: "Arial,sans-serif",
                fontOpacity: 100,
                color: "#FFF",
                backgroundColor: "#000",
                backgroundOpacity: 100,
                edgeStyle: null,
                windowColor: "#FFF",
                windowOpacity: 0,
                preprocessor: o.identity
            },
            s = function(s) {
                function l(n, i, o, r) {
                    if (t.css("#" + n + " .jw-text-track-display", i, n), t.css("#" + n + " .jw-text-track-cue", o, n), u(n, r), t.css("#" + n + " .jw-video::-webkit-media-text-track-display", i, n), t.css("#" + n + " .jw-video::cue", o, n), e.isSafari() && t.css("#" + n + " .jw-video::cue", "{color: " + o.color + " !important;}", n), o.backgroundColor) {
                        var a = "{background-color: " + o.backgroundColor + " !important;}";
                        t.css("#" + n + " .jw-video::-webkit-media-text-track-display-backdrop", a, n)
                    }
                }

                function u(n, i) {
                    var o = e.isSafari() ? "display" : "container";
                    t.css("#" + n + " .jw-video::-webkit-media-text-track-" + o, "{font-size: " + i + "px !important;}", n)
                }

                function c(e, n, i) {
                    var o = t.hexToRgba("#000000", i);
                    "dropshadow" === e ? n.textShadow = "0 2px 1px " + o : "raised" === e ? n.textShadow = "0 0 5px " + o + ", 0 1px 5px " + o + ", 0 2px 5px " + o : "depressed" === e ? n.textShadow = "0 -2px 1px " + o : "uniform" === e && (n.textShadow = "-2px 0 1px " + o + ",2px 0 1px " + o + ",0 -2px 1px " + o + ",0 2px 1px " + o + ",-1px 1px 1px " + o + ",1px 1px 1px " + o + ",1px -1px 1px " + o + ",1px 1px 1px " + o)
                }

                function d(e) {
                    g = e, this.selectCues(f, g)
                }

                function p() {
                    s.get("renderCaptionsNatively") || n.e(8, function(require) {
                        j = n(56)
                    })
                }
                var f, h, g, w, m, v, j, y = {};
                w = document.createElement("div"), w.className = "jw-captions jw-reset", this.show = function() {
                    w.className = "jw-captions jw-captions-enabled jw-reset"
                }, this.hide = function() {
                    w.className = "jw-captions jw-reset"
                }, this.populate = function(e) {
                    return h = [], f = e, e ? void this.selectCues(e, g) : (h = [], void this.renderCues())
                }, this.resize = function() {
                    var e = w.clientWidth,
                        t = Math.pow(e / 400, .6);
                    if (t) {
                        var n = y.fontSize * t,
                            i = Math.floor(2 * n) / 2;
                        s.get("renderCaptionsNatively") ? u(s.get("id"), i) : r(w, {
                            fontSize: i + "px"
                        })
                    }
                    this.renderCues(!0)
                }, this.renderCues = function(e) {
                    e = !!e, j && j.WebVTT.processCues(window, h, w, e)
                }, this.selectCues = function(e, t) {
                    var n, i;
                    e && e.data && t && (i = this.getAlignmentPosition(e, t), i !== !1 && (n = this.getCurrentCues(e.data, i), this.updateCurrentCues(n), this.renderCues(!0)))
                }, this.getCurrentCues = function(e, t) {
                    return o.filter(e, function(e) {
                        return t >= e.startTime && (!e.endTime || t <= e.endTime)
                    })
                }, this.updateCurrentCues = function(e) {
                    return e.length ? o.difference(e, h).length && (m.className = "jw-captions-window jw-reset jw-captions-window-active", h = e) : h = [], h
                }, this.getAlignmentPosition = function(e, t) {
                    var n = e.source,
                        i = t.metadata;
                    return n ? !(!i || !o.isNumber(i[n])) && i[n] : e.embedded && t.duration < 0 ? t.position - t.duration : t.position
                }, this.clear = function() {
                    e.empty(w)
                }, this.setContainerHeight = function(e) {
                    r(w, {
                        height: e
                    })
                }, this.setup = function(e, n) {
                    m = document.createElement("div"), v = document.createElement("span"), m.className = "jw-captions-window jw-reset", v.className = "jw-captions-text jw-reset", y = o.extend({}, a, n);
                    var i = y.fontOpacity,
                        u = y.windowOpacity,
                        d = y.edgeStyle,
                        p = y.backgroundColor,
                        f = {},
                        h = {
                            color: t.hexToRgba(y.color, i),
                            fontFamily: y.fontFamily,
                            fontStyle: y.fontStyle,
                            fontWeight: y.fontWeight,
                            textDecoration: y.textDecoration
                        };
                    u && (f.backgroundColor = t.hexToRgba(y.windowColor, u)), c(d, h, i), y.back ? h.backgroundColor = t.hexToRgba(p, y.backgroundOpacity) : null === d && c("uniform", h), r(m, f), r(v, h), l(e, f, h, y.fontSize), m.appendChild(v), w.appendChild(m), this.populate(s.get("captionsTrack")), s.set("captions", y)
                }, this.element = function() {
                    return w
                }, s.on("change:playlistItem", function() {
                    g = null, h = []
                }, this), s.on("change:captionsTrack", function(e, t) {
                    this.populate(t)
                }, this), s.mediaController.on("seek", function() {
                    h = []
                }, this), s.mediaController.on("time seek", d, this), s.mediaController.on("subtitlesTrackData", function() {
                    this.selectCues(f, g)
                }, this), s.on("change:state", function(e, t) {
                    switch (t) {
                        case i.IDLE:
                        case i.ERROR:
                        case i.COMPLETE:
                            this.hide();
                            break;
                        default:
                            this.show()
                    }
                }, this), s.on("itemReady", p, this)
            };
        return s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(7), n(4), n(3), n(1)], o = function(e, t, n, i) {
        var o = function(o, r, a) {
            function s(e) {
                if (!o.get("flashBlocked")) return c ? void c(e) : void h.trigger(e.type === t.touchEvents.CLICK ? "click" : "tap")
            }

            function l() {
                return d ? void d() : void h.trigger("doubleClick")
            }
            var u, c, d, p = {
                enableDoubleTap: !0,
                useMove: !0
            };
            i.extend(this, n), u = r, this.element = function() {
                return u
            };
            var f = new e(u, i.extend(p, a));
            f.on("click tap", s), f.on("doubleClick doubleTap", l), f.on("move", function() {
                h.trigger("move")
            }), f.on("over", function() {
                h.trigger("over")
            }), f.on("out", function() {
                h.trigger("out")
            }), this.clickHandler = s;
            var h = this;
            this.setAlternateClickHandlers = function(e, t) {
                c = e, d = t || null
            }, this.revertAlternateClickHandlers = function() {
                c = null, d = null
            }
        };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(31)], o = function(e, t, n) {
        function i(e, t) {
            this.time = e, this.text = t, this.el = document.createElement("div"), this.el.className = "jw-cue jw-reset"
        }
        e.extend(i.prototype, {
            align: function(e) {
                if ("%" === this.time.toString().slice(-1)) this.pct = this.time;
                else {
                    var t = this.time / e * 100;
                    this.pct = t + "%"
                }
                this.el.style.left = this.pct
            }
        });
        var o = {
            loadChapters: function(e) {
                t.ajax(e, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                    plainText: !0
                })
            },
            chaptersLoaded: function(t) {
                var i = n(t.responseText);
                e.isArray(i) && (e.each(i, this.addCue, this), this.drawCues())
            },
            chaptersFailed: function() {},
            addCue: function(e) {
                this.cues.push(new i(e.begin, e.text))
            },
            drawCues: function() {
                var t = this._model.mediaModel.get("duration");
                if (!t || t <= 0) return void this._model.mediaModel.once("change:duration", this.drawCues, this);
                var n = this;
                e.each(this.cues, function(e) {
                    e.align(t), e.el.addEventListener("mouseover", function() {
                        n.activeCue = e
                    }), e.el.addEventListener("mouseout", function() {
                        n.activeCue = null
                    }), n.elementRail.appendChild(e.el)
                })
            },
            resetChapters: function() {
                e.each(this.cues, function(e) {
                    e.el.parentNode && e.el.parentNode.removeChild(e.el)
                }, this), this.cues = []
            }
        };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(37), n(2), n(1), n(7), n(106)], o = function(e, t, n, i, o) {
        var r = e.extend({
            setup: function(e, r, a) {
                a = a || {}, this.iconUI || (this.iconUI = new i(this.el, {
                    useHover: !0,
                    directSelect: !0
                }), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), e = n.isArray(e) ? e : [], t.toggleClass(this.el, "jw-hidden", e.length < 2);
                var s = e.length > 2 || 2 === e.length && a && a.toggle === !1,
                    l = !s && 2 === e.length;
                if (t.toggleClass(this.el, "jw-toggle", l || !!a.isToggle), t.toggleClass(this.el, "jw-button-color", !l), this.isActive = s || l, s) {
                    t.removeClass(this.el, "jw-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                    var u = o(e),
                        c = t.createElement(u);
                    this.addContent(c), this.contentUI = new i(this.content).on("click tap", this.selectListener)
                } else l && this.iconUI.on("click tap", this.toggleValueListener);
                this.selectItem(r)
            },
            toggleValue: function() {
                this.trigger("toggleValue")
            },
            select: function(e) {
                if (e.target.parentElement === this.content) {
                    var i = t.classList(e.target),
                        o = n.find(i, function(e) {
                            return 0 === e.indexOf("jw-item")
                        });
                    o && (this.trigger("select", parseInt(o.split("-")[2])), this.closeTooltipListener())
                }
            },
            selectItem: function(e) {
                if (this.content)
                    for (var n = 0; n < this.content.children.length; n++) t.toggleClass(this.content.children[n], "jw-active-option", e === n);
                t.toggleClass(this.el, "jw-off", 0 === e)
            },
            reset: function() {
                t.addClass(this.el, "jw-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
            }
        });
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(33), n(7), n(1), n(2), n(107)], o = function(e, t, n, i, o) {
        var r = function(e, t, n, i) {
            this._model = e, this._api = t, this._nextButton = n, this._playerElement = i, this.nextUpText = e.get("localization").nextUp, this.nextUpClose = e.get("localization").nextUpClose, this.state = "tooltip"
        };
        return n.extend(r.prototype, {
            setup: function() {
                this.container = document.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
                var e = i.createElement(o());
                this.addContent(e), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.nextUpClose), this.tooltip = this.content.querySelector(".jw-nextup-tooltip"), this.showNextUp = !1, this.streamType = void 0, this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:streamType", this.onStreamType, this), this._model.on("change:nextUp", this.onNextUp, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this.onMediaModel(this._model, this._model.get("mediaModel")), new t(this.closeButton, {
                    directSelect: !0
                }).on("click tap", this.hide, this), new t(this.tooltip).on("click tap", this.click, this), new t(this._nextButton.element(), {
                    useHover: !0,
                    directSelect: !0
                }).on("click tap", this.click, this).on("over", this.show, this).on("out", this.hoverOut, this)
            },
            loadThumbnail: function(e) {
                return this.nextUpImage = new Image, this.nextUpImage.onload = function() {
                    this.nextUpImage.onload = null
                }.bind(this), this.nextUpImage.src = e, {
                    backgroundImage: 'url("' + e + '")'
                }
            },
            click: function() {
                this.state = "tooltip", this._api.next(), this.hide()
            },
            show: function() {
                "opened" === this.state || this.hideToolTip || (e.addClass(this.container, "jw-nextup-container-visible"), e.addClass(this._playerElement, "jw-flag-nextup"))
            },
            hide: function() {
                e.removeClass(this.container, "jw-nextup-container-visible"), e.removeClass(this.container, "jw-nextup-sticky"), e.removeClass(this._playerElement, "jw-flag-nextup"), "opened" === this.state && (this.state = "closed")
            },
            hoverOut: function() {
                "opened" !== this.state && this.hide()
            },
            showTilEnd: function() {
                "opened" !== this.state && "closed" !== this.state && (e.addClass(this.container, "jw-nextup-sticky"), this.show(), this.state = "opened")
            },
            setNextUpItem: function(t) {
                var n = this;
                setTimeout(function() {
                    if (n.hideToolTip = !(t.title || t.image), !n.hideToolTip) {
                        if (n.thumbnail = n.content.querySelector(".jw-nextup-thumbnail"), e.toggleClass(n.thumbnail, "jw-nextup-thumbnail-visible", !!t.image), t.image) {
                            var o = n.loadThumbnail(t.image);
                            i.style(n.thumbnail, o)
                        }
                        n.header = n.content.querySelector(".jw-nextup-header"), n.header.innerText = n.nextUpText, n.title = n.content.querySelector(".jw-nextup-title");
                        var r = t.title;
                        n.title.innerText = r ? i.createElement(r).textContent : ""
                    }
                }, 500)
            },
            onNextUp: function(e, t) {
                return t ? (this.showNextUp = t.showNextUp, this._nextButton.toggle(!0), void this.setNextUpItem(t)) : (this._nextButton.toggle(!1), void(this.showNextUp = !1))
            },
            onDuration: function(e, t) {
                if (t) {
                    var n = i.seconds(e.get("nextupoffset") || -10);
                    n < 0 && (n += t), this.offset = n
                }
            },
            onMediaModel: function(e, t) {
                t.on("change:state", function(e, t) {
                    "complete" === t && (this.state = "tooltip", this.hide())
                }, this)
            },
            onElapsed: function(e, t) {
                "VOD" === this.streamType && this.showNextUp && t >= this.offset ? this.showTilEnd() : "opened" !== this.state && "closed" !== this.state || (this.state = "tooltip", this.hide())
            },
            onStreamType: function(e, t) {
                this.streamType = t
            },
            element: function() {
                return this.container
            },
            addContent: function(e) {
                this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
            },
            removeContent: function() {
                this.content && (this.container.removeChild(this.content), this.content = null)
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(31)], o = function(e, t, n) {
        function i(e) {
            this.begin = e.begin, this.end = e.end, this.img = e.text
        }
        var o = {
            loadThumbnails: function(e) {
                e && (this.vttPath = e.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, t.ajax(e, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                    plainText: !0
                }))
            },
            thumbnailsLoaded: function(t) {
                var o = n(t.responseText);
                e.isArray(o) && (e.each(o, function(e) {
                    this.thumbnails.push(new i(e))
                }, this), this.drawCues())
            },
            thumbnailsFailed: function() {},
            chooseThumbnail: function(t) {
                var n = e.sortedIndex(this.thumbnails, {
                    end: t
                }, e.property("end"));
                n >= this.thumbnails.length && (n = this.thumbnails.length - 1);
                var i = this.thumbnails[n].img;
                return i.indexOf("://") < 0 && (i = this.vttPath ? this.vttPath + "/" + i : i), i
            },
            loadThumbnail: function(t) {
                var n = this.chooseThumbnail(t),
                    i = {
                        display: "block",
                        margin: "0 auto",
                        backgroundPosition: "0 0"
                    },
                    o = n.indexOf("#xywh");
                if (o > 0) try {
                    var r = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);
                    n = r[1], i.backgroundPosition = r[2] * -1 + "px " + r[3] * -1 + "px", i.width = r[4], i.height = r[5]
                } catch (a) {
                    return
                } else this.individualImage || (this.individualImage = new Image, this.individualImage.onload = e.bind(function() {
                    this.individualImage.onload = null, this.timeTip.image({
                        width: this.individualImage.width,
                        height: this.individualImage.height
                    }), this.timeTip.setWidth(this.individualImage.width)
                }, this), this.individualImage.src = n);
                return i.backgroundImage = 'url("' + n + '")', i
            },
            showThumbnail: function(e) {
                this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(e))
            },
            resetThumbnails: function() {
                this.timeTip.image({
                    backgroundImage: "",
                    width: 0,
                    height: 0
                }), this.thumbnails = []
            }
        };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(22), n(36), n(37), n(148), n(151)], o = function(e, t, n, i, o, r, a) {
        function s() {
            return {
                reason: "interaction"
            }
        }
        var l = o.extend({
                setup: function() {
                    this.text = document.createElement("span"), this.text.className = "jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-reset", this.resetWidth(), this.textLength = 0;
                    var e = document.createElement("div");
                    e.className = "jw-time-tip jw-background-color jw-reset", e.appendChild(this.img), e.appendChild(this.text), t.removeClass(this.el, "jw-hidden"), this.addContent(e)
                },
                image: function(e) {
                    t.style(this.img, e)
                },
                update: function(e) {
                    this.text.innerHTML = e
                },
                getWidth: function() {
                    return this.containerWidth || this.setWidth(), this.containerWidth
                },
                setWidth: function(e) {
                    return e ? void(this.containerWidth = e + 16) : void(this.container && (this.containerWidth = t.bounds(this.container).width))
                },
                resetWidth: function() {
                    this.containerWidth = 0
                }
            }),
            u = i.extend({
                constructor: function(t, n) {
                    this._model = t, this._api = n, this.timeTip = new l("jw-tooltip-time"), this.timeTip.setup(), this.cues = [], this.seekThrottled = e.throttle(this.performSeek, 400), this._model.on("change:playlistItem", this.onPlaylistItem, this).on("change:position", this.onPosition, this).on("change:duration", this.onDuration, this).on("change:buffer", this.onBuffer, this), i.call(this, "jw-slider-time", "horizontal")
                },
                setup: function() {
                    i.prototype.setup.apply(this, arguments), this._model.get("playlistItem") && this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.elementRail.appendChild(this.timeTip.element()), this.el.addEventListener("mousemove", this.showTimeTooltip.bind(this), !1), this.el.addEventListener("mouseout", this.hideTimeTooltip.bind(this), !1)
                },
                limit: function(t) {
                    if (this.activeCue && e.isNumber(this.activeCue.pct)) return this.activeCue.pct;
                    var i = this._model.get("duration"),
                        o = this._model.get("streamType");
                    if ("DVR" === o) {
                        var r = (1 - t / 100) * i,
                            a = this._model.get("position"),
                            s = Math.min(r, Math.max(n.dvrSeekLimit, a)),
                            l = 100 * s / i;
                        return 100 - l
                    }
                    return t
                },
                update: function(e) {
                    this.seekTo = e, this.seekThrottled(), i.prototype.update.apply(this, arguments)
                },
                dragStart: function() {
                    this._model.set("scrubbing", !0), i.prototype.dragStart.apply(this, arguments)
                },
                dragEnd: function() {
                    i.prototype.dragEnd.apply(this, arguments), this._model.set("scrubbing", !1)
                },
                onSeeked: function() {
                    this._model.get("scrubbing") && this.performSeek()
                },
                onBuffer: function(e, t) {
                    this.updateBuffer(t)
                },
                onPosition: function(e, t) {
                    this.updateTime(t, e.get("duration"))
                },
                onDuration: function(e, t) {
                    this.updateTime(e.get("position"), t)
                },
                updateTime: function(e, t) {
                    var n = 0;
                    if (t) {
                        var i = this._model.get("streamType");
                        "DVR" === i ? n = (t - e) / t * 100 : "VOD" === i && (n = e / t * 100)
                    }
                    this.render(n)
                },
                onPlaylistItem: function(t, n) {
                    this.reset(), t.mediaModel.on("seeked", this.onSeeked, this);
                    var i = n.tracks;
                    e.each(i, function(e) {
                        e && e.kind && "thumbnails" === e.kind.toLowerCase() ? this.loadThumbnails(e.file) : e && e.kind && "chapters" === e.kind.toLowerCase() && this.loadChapters(e.file)
                    }, this)
                },
                performSeek: function() {
                    var e, t = this.seekTo,
                        n = this._model.get("duration"),
                        i = this._model.get("streamType");
                    0 === n ? this._api.play(s()) : "DVR" === i ? (e = (100 - t) / 100 * n, this._api.seek(e, s())) : (e = t / 100 * n, this._api.seek(Math.min(e, n - .25), s()))
                },
                showTimeTooltip: function(e) {
                    var i = this._model.get("duration");
                    if (0 !== i) {
                        var o = this._model.get("containerWidth"),
                            r = t.bounds(this.elementRail),
                            a = e.pageX ? e.pageX - r.left : e.x;
                        a = t.between(a, 0, r.width);
                        var s = a / r.width,
                            l = i * s;
                        i < 0 && (l = i - l);
                        var u;
                        if (this.activeCue) u = this.activeCue.text;
                        else {
                            var c = !0;
                            u = t.timeFormat(l, c), i < 0 && l > n.dvrSeekLimit && (u = "Live")
                        }
                        var d = this.timeTip;
                        d.update(u), this.textLength !== u.length && (this.textLength = u.length, d.resetWidth()), this.showThumbnail(l), t.addClass(d.el, "jw-open");
                        var p = d.getWidth(),
                            f = r.width / 100,
                            h = o - r.width,
                            g = 0;
                        p > h && (g = (p - h) / (200 * f));
                        var w = 100 * Math.min(1 - g, Math.max(g, s)).toFixed(3);
                        t.style(d.el, {
                            left: w + "%"
                        })
                    }
                },
                hideTimeTooltip: function() {
                    t.removeClass(this.timeTip.el, "jw-open")
                },
                reset: function() {
                    this.resetChapters(), this.resetThumbnails(), this.timeTip.resetWidth(), this.textLength = 0
                }
            });
        return e.extend(u.prototype, r, a), u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(37), n(36), n(7), n(2)], o = function(e, t, n, i) {
        var o = e.extend({
            constructor: function(o, r, a) {
                this._model = o, e.call(this, r, a, !0), this.volumeSlider = new t("jw-slider-volume jw-volume-tip", "vertical"), this.addContent(this.volumeSlider.element()), this.volumeSlider.on("update", function(e) {
                    this.trigger("update", e)
                }, this), i.removeClass(this.el, "jw-hidden"), new n(this.el, {
                    useHover: !0,
                    directSelect: !0
                }).on("click", this.toggleValue, this).on("tap", this.toggleOpenState, this).on("over", this.openTooltip, this).on("out", this.closeTooltip, this), this._model.on("change:volume", this.onVolume, this)
            },
            toggleValue: function() {
                this.trigger("toggleValue")
            }
        });
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(1), n(3), n(22), n(7), n(36), n(152), n(149), n(153), n(66)], o = function(e, t, n, i, o, r, a, s, l, u) {
        function c(e, t) {
            var n = document.createElement("span");
            return n.className = "jw-text jw-reset " + e, t && n.setAttribute("role", t), n
        }

        function d(e, t) {
            return new s(e, t)
        }

        function p(t, n) {
            if (!e.isChrome() || e.isIOS()) return u("jw-icon-airplay jw-off", t, n.airplay);
            var i = document.createElement("button", "google-cast-button"),
                o = document.createElement("div"),
                r = n.cast;
            return i.className = "jw-button-color jw-icon-inline", o.className = "jw-reset jw-icon-cast", o.style.display = "none", o.style.cursor = "pointer", o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), r && o.setAttribute("aria-label", r), o.appendChild(i), {
                element: function() {
                    return o
                },
                toggle: function(e) {
                    e ? this.show() : this.hide()
                },
                show: function() {
                    o.style.display = ""
                },
                hide: function() {
                    o.style.display = "none"
                },
                button: i
            }
        }

        function f() {
            return {
                reason: "interaction"
            }
        }

        function h(e, n) {
            var i = document.createElement("div");
            return i.className = "jw-group jw-controlbar-" + e + "-group jw-reset", t.each(n, function(e) {
                e.element && (e = e.element()), i.appendChild(e)
            }), i
        }

        function g(t, n) {
            this._api = t, this._model = n, this._isMobile = e.isMobile(), this._localization = this._model.get("localization"), this.setup()
        }
        return t.extend(g.prototype, n, {
            setup: function() {
                this.build(), this.initialize()
            },
            build: function() {
                var n, i, o, s = new a(this._model, this._api),
                    g = this._localization.play,
                    w = this._localization.next,
                    m = this._localization.volume,
                    v = this._localization.rewind;
                this._isMobile || (n = new r("jw-slider-volume", "horizontal"), i = new l(this._model, "jw-icon-volume", m)), this._model.get("sdkplatform") || e.isIOS(8) || e.isIOS(9) || (o = u("jw-icon-volume", this._api.setMute, m)), this.elements = {
                    alt: c("jw-text-alt", "status"),
                    play: u("jw-icon-playback", this._api.play.bind(this, f()), g),
                    rewind: u("jw-icon-rewind", this.rewind.bind(this), v),
                    next: u("jw-icon-next", null, w),
                    elapsed: c("jw-text-elapsed", "timer"),
                    countdown: c("jw-text-countdown", "timer"),
                    time: s,
                    duration: c("jw-text-duration", "timer"),
                    durationLeft: c("jw-text-duration", "timer"),
                    hd: d("jw-icon-hd", this._localization.hd),
                    cc: d("jw-icon-cc", this._localization.cc),
                    audiotracks: d("jw-icon-audio-tracks", this._localization.audioTracks),
                    mute: o,
                    volume: n,
                    volumetooltip: i,
                    cast: p(this._api.castToggle, this._localization),
                    fullscreen: u("jw-icon-fullscreen", this._api.setFullscreen, this._localization.fullscreen)
                }, this.layout = {
                    left: [this.elements.play, this.elements.rewind, this.elements.elapsed, this.elements.durationLeft, this.elements.countdown],
                    center: [this.elements.time, this.elements.alt],
                    right: [this.elements.duration, this.elements.next, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.mute, this.elements.cast, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen]
                }, this.menus = t.compact([this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.volumetooltip]), this.layout.left = t.compact(this.layout.left), this.layout.center = t.compact(this.layout.center), this.layout.right = t.compact(this.layout.right), this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-background-color jw-reset", this.elements.left = h("left", this.layout.left), this.elements.center = h("center", this.layout.center), this.elements.right = h("right", this.layout.right), this.el.appendChild(this.elements.left), this.el.appendChild(this.elements.center), this.el.appendChild(this.elements.right)
            },
            initialize: function() {
                this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get("volume")), this.onPlaylistItem(), this.onMediaModel(this._model, this._model.get("mediaModel")), this.onCastAvailable(this._model, this._model.get("castAvailable")), this.onCastActive(this._model, this._model.get("castActive")), this.onCaptionsList(this._model, this._model.get("captionsList")), this._model.on("change:volume", this.onVolume, this), this._model.on("change:mute", this.onMute, this), this._model.on("change:playlistItem", this.onPlaylistItem, this), this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:castAvailable", this.onCastAvailable, this), this._model.on("change:castActive", this.onCastActive, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:durationLeft", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this._model.on("change:fullscreen", this.onFullscreen, this), this._model.on("change:captionsList", this.onCaptionsList, this), this._model.on("change:captionsIndex", this.onCaptionsIndex, this), this._model.on("change:streamType", this.onStreamTypeChange, this), this.elements.volume && this.elements.volume.on("update", function(e) {
                    var t = e.percentage;
                    this._api.setVolume(t)
                }, this), this.elements.volumetooltip && (this.elements.volumetooltip.on("update", function(e) {
                    var t = e.percentage;
                    this._api.setVolume(t)
                }, this), this.elements.volumetooltip.on("toggleValue", function() {
                    this._api.setMute()
                }, this)), this.elements.cast.button && new o(this.elements.cast.button).on("click tap", function() {
                    this._model.set("castClicked", !0)
                }, this), this.elements.hd.on("select", function(e) {
                    this._model.getVideo().setCurrentQuality(e)
                }, this), this.elements.hd.on("toggleValue", function() {
                    this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0)
                }, this), this.elements.cc.on("select", function(e) {
                    this._api.setCurrentCaptions(e)
                }, this), this.elements.cc.on("toggleValue", function() {
                    var e = this._model.get("captionsIndex");
                    this._api.setCurrentCaptions(e ? 0 : 1)
                }, this), this.elements.audiotracks.on("select", function(e) {
                    this._model.getVideo().setCurrentAudioTrack(e)
                }, this), new o(this.elements.duration).on("click tap", function() {
                    if ("DVR" === this._model.get("streamType")) {
                        var e = this._model.get("position");
                        this._api.seek(Math.max(i.dvrSeekLimit, e), f())
                    }
                }, this), new o(this.elements.durationLeft).on("click tap", function() {
                    if ("DVR" === this._model.get("streamType")) {
                        var e = this._model.get("position");
                        this._api.seek(Math.max(i.dvrSeekLimit, e))
                    }
                }, this), new o(this.el).on("click tap drag", function() {
                    this.trigger("userAction")
                }, this), t.each(this.menus, function(e) {
                    e.on("open-tooltip", this.closeMenus, this)
                }, this)
            },
            onCaptionsList: function(e, t) {
                var n = e.get("captionsIndex");
                this.elements.cc.setup(t, n, {
                    isToggle: !0
                })
            },
            onCaptionsIndex: function(e, t) {
                this.elements.cc.selectItem(t)
            },
            onPlaylistItem: function() {
                this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = "00:00", this.elements.durationLeft.innerHTML = "00:00", this.elements.elapsed.innerHTML = "00:00", this.elements.countdown.innerHTML = "00:00", this.elements.audiotracks.setup()
            },
            onMediaModel: function(e, n) {
                n.on("change:levels", function(e, t) {
                    this.elements.hd.setup(t, e.get("currentLevel"))
                }, this), n.on("change:currentLevel", function(e, t) {
                    this.elements.hd.selectItem(t)
                }, this), n.on("change:audioTracks", function(e, n) {
                    var i = t.map(n, function(e) {
                        return {
                            label: e.name
                        }
                    });
                    this.elements.audiotracks.setup(i, e.get("currentAudioTrack"), {
                        toggle: !1
                    })
                }, this), n.on("change:currentAudioTrack", function(e, t) {
                    this.elements.audiotracks.selectItem(t)
                }, this)
            },
            onVolume: function(e, t) {
                this.renderVolume(e.get("mute"), t)
            },
            onMute: function(e, t) {
                this.renderVolume(t, e.get("volume"))
            },
            renderVolume: function(t, n) {
                this.elements.mute && e.toggleClass(this.elements.mute.element(), "jw-off", t), this.elements.volume && this.elements.volume.render(t ? 0 : n), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(t ? 0 : n), e.toggleClass(this.elements.volumetooltip.element(), "jw-off", t))
            },
            onCastAvailable: function(e, t) {
                this.elements.cast.toggle(t)
            },
            onCastActive: function(t, n) {
                this.elements.fullscreen.toggle(!n), this.elements.cast.button && e.toggleClass(this.elements.cast.button, "jw-off", !n)
            },
            onElapsed: function(t, n) {
                var i, o, r = t.get("duration");
                "DVR" === t.get("streamType") ? i = o = "-" + e.timeFormat(-r) : (i = e.timeFormat(n), o = e.timeFormat(r - n)), this.elements.elapsed.innerHTML = i, this.elements.countdown.innerHTML = o
            },
            onDuration: function(t, n) {
                var i;
                i = "DVR" === t.get("streamType") ? "Live" : e.timeFormat(n), this.elements.duration.innerHTML = i, this.elements.durationLeft.innerHTML = i
            },
            onFullscreen: function(t, n) {
                e.toggleClass(this.elements.fullscreen.element(), "jw-off", n)
            },
            element: function() {
                return this.el
            },
            setAltText: function(e) {
                this.elements.alt.innerHTML = e
            },
            addCues: function(e) {
                this.elements.time && (t.each(e, function(e) {
                    this.elements.time.addCue(e)
                }, this), this.elements.time.drawCues())
            },
            closeMenus: function(e) {
                t.each(this.menus, function(t) {
                    e && e.target === t.el || t.closeTooltip(e)
                })
            },
            hideComponents: function() {
                this.closeMenus()
            },
            rewind: function() {
                var e = this._model.get("position"),
                    t = this._model.get("duration"),
                    n = e - 10,
                    i = 0;
                "DVR" === this._model.get("streamType") && (i = t), this._api.seek(Math.max(n, i), f())
            },
            onStreamTypeChange: function(e) {
                var t = e.get("streamType");
                this.elements.rewind.toggle("LIVE" !== t), "DVR" === t && (this.elements.duration.innerHTML = "Live", this.elements.durationLeft.innerHTML = "Live")
            }
        }), g
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(102), n(1)], o = function(e, t, n, i, o) {
        var r = function() {
            this.el = e.createElement(i()), this.container = this.el.querySelector(".jw-display-controls"), this.addButton = function(e) {
                this.container.appendChild(e.el)
            }
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(103), n(2), n(1), n(7)], o = function(e, t, n, i) {
        var o = function(e) {
            this.model = e, this.setup(), this.model.on("change:dock", this.render, this)
        };
        return n.extend(o.prototype, {
            setup: function() {
                var n = this.model.get("dock"),
                    o = this.click.bind(this),
                    r = e(n);
                this.el = t.createElement(r), new i(this.el).on("click tap", o)
            },
            getDockButton: function(e) {
                return t.hasClass(e.target, "jw-dock-button") ? e.target : t.hasClass(e.target, "jw-dock-text") ? e.target.parentElement.parentElement : e.target.parentElement
            },
            click: function(e) {
                var t = this.getDockButton(e),
                    i = t.getAttribute("button"),
                    o = this.model.get("dock"),
                    r = n.findWhere(o, {
                        id: i
                    });
                r && r.callback && r.callback(e)
            },
            render: function() {
                var n = this.model.get("dock"),
                    i = e(n),
                    o = t.createElement(i);
                this.el.innerHTML = o.innerHTML
            },
            element: function() {
                return this.el
            }
        }), o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(104)], o = function(e) {
        function t(t, n, i, o) {
            return e({
                id: t,
                skin: n,
                title: i,
                body: o
            })
        }
        return t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(7), n(2), n(4), n(1), n(3), n(105)], o = function(e, t, n, i, o, r) {
        var a = t.style,
            s = {
                linktarget: "_blank",
                margin: 8,
                hide: !1,
                position: "top-right"
            },
            l = function(l) {
                var u, c, d = new Image,
                    p = i.extend({}, l.get("logo"));
                return i.extend(this, o), this.setup = function(o) {
                    if (c = i.extend({}, s, p), c.hide = "true" === c.hide.toString(), u = t.createElement(r()), c.file) {
                        c.hide && t.addClass(u, "jw-hide"), t.addClass(u, "jw-logo-" + (c.position || s.position)), "top-right" === c.position && (l.on("change:dock", this.topRight, this), l.on("change:controls", this.topRight, this), this.topRight(l)), l.set("logo", c), d.onload = function() {
                            var e = {
                                backgroundImage: 'url("' + this.src + '")',
                                width: this.width,
                                height: this.height
                            };
                            if (c.margin !== s.margin) {
                                var t = /(\w+)-(\w+)/.exec(c.position);
                                3 === t.length && (e["margin-" + t[1]] = c.margin, e["margin-" + t[2]] = c.margin)
                            }
                            a(u, e), l.set("logoWidth", e.width)
                        }, d.src = c.file;
                        var f = new e(u);
                        f.on("click tap", function(e) {
                            t.exists(e) && e.stopPropagation && e.stopPropagation(), this.trigger(n.JWPLAYER_LOGO_CLICK, {
                                link: c.link,
                                linktarget: c.linktarget
                            })
                        }, this), o.appendChild(u)
                    }
                }, this.topRight = function(e) {
                    var t = e.get("controls"),
                        n = e.get("dock"),
                        i = t && (n && n.length || e.get("sharing") || e.get("related"));
                    a(u, {
                        top: i ? "3.5em" : 0
                    })
                }, this.element = function() {
                    return u
                }, this.position = function() {
                    return c.position
                }, this.destroy = function() {
                    d.onload = null
                }, this
            };
        return l
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(28), n(1)], o = function(e, t, n, i, o) {
        var r = function(t, o) {
            this.el = e.createElement(i({
                iconName: "next",
                ariaLabel: t.get("localization").next
            })), this.iconUI = new n(this.el).on("click tap", function() {
                o.next()
            }), this.el.style.display = "none", t.on("change:nextUp", function(e, t) {
                this.el.style.display = t ? "" : "none"
            }, this)
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(28), n(1)], o = function(e, t, n, i, o) {
        var r = function(r) {
            o.extend(this, t), this.model = r, this.el = e.createElement(i({
                iconName: "display",
                ariaLabel: this.model.get("localization").playback
            }));
            var a = this;
            this.iconUI = new n(this.el).on("click tap", function(e) {
                a.trigger(e.type)
            }), this.model.on("change:state", function(e, t) {
                var n = a.el.getElementsByClassName("jw-icon-display");
                if (n.length) {
                    var i = a.model.get("localization"),
                        o = i.playback;
                    switch (t) {
                        case "buffering":
                            o = i.buffer;
                            break;
                        case "playing":
                            o = i.pause;
                            break;
                        case "complete":
                            o = i.replay;
                            break;
                        case "error":
                            o = ""
                    }
                    "" === o ? n[0].removeAttribute("aria-label") : n[0].setAttribute("aria-label", o)
                }
            })
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2)], o = function(e, t) {
        function n(e, t) {
            t.off("change:mediaType", null, this), t.on("change:mediaType", function(t, n) {
                "audio" === n && this.setImage(e.get("playlistItem").image)
            }, this)
        }

        function i(e, n) {
            var i = e.get("autostart") && !t.isMobile() || e.get("item") > 0;
            return i ? (this.setImage(null), e.off("change:state", null, this), void e.on("change:state", function(e, t) {
                "complete" !== t && "idle" !== t && "error" !== t || (this.setImage(n.image), this.resize(null, null, e.get("stretching")))
            }, this)) : void this.setImage(n.image)
        }
        var o = function(e) {
            this.model = e, e.on("change:playlistItem", i, this), e.on("change:mediaModel", n, this)
        };
        return e.extend(o.prototype, {
            setup: function(e) {
                this.el = e;
                var t = this.model.get("playlistItem");
                t && this.setImage(t.image)
            },
            setImage: function(n) {
                var i = this.image;
                i && (i.onload = null, this.image = null), this.model.off("change:state", null, this);
                var o = "";
                e.isString(n) && (o = 'url("' + n + '")', i = this.image = new Image, i.src = n), t.style(this.el, {
                    backgroundImage: o
                })
            },
            resize: function(e, n, i) {
                if ("uniform" === i) {
                    if (e && (this.playerAspectRatio = e / n), !this.playerAspectRatio) return;
                    var o = this.image,
                        r = null;
                    if (o) {
                        if (0 === o.width) {
                            var a = this;
                            return void(o.onload = function() {
                                a.resize(e, n, i)
                            })
                        }
                        var s = o.width / o.height;
                        Math.abs(this.playerAspectRatio - s) < .09 && (r = "cover")
                    }
                    t.style(this.el, {
                        backgroundSize: r
                    })
                }
            },
            element: function() {
                return this.el
            }
        }), o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(28), n(1)], o = function(e, t, n, i, o) {
        var r = function(t, o) {
            this.el = e.createElement(i({
                iconName: "rewind",
                ariaLabel: t.get("localization").playback
            })), this.iconUI = new n(this.el).on("click tap", function() {
                var e = t.get("position"),
                    n = t.get("duration"),
                    i = e - 10,
                    r = 0;
                "DVR" === t.get("streamType") && (r = n), o.seek(Math.max(i, r))
            })
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(109), n(1), n(7), n(26)], o = function(e, t, n, i, o) {
        var r = function() {};
        return n.extend(r.prototype, {
            buildArray: function() {
                var t = o.split("+"),
                    n = t[0],
                    i = {
                        items: [{
                            title: "Powered by JW Player " + n,
                            featured: !0,
                            showLogo: !0,
                            link: "https://jwplayer.com/learn-more"
                        }]
                    },
                    r = n.indexOf("-") > 0,
                    a = t[1];
                if (r && a) {
                    var s = a.split(".");
                    i.items.push({
                        title: "build: (" + s[0] + "." + s[1] + ")",
                        link: "#"
                    })
                }
                var l = this.model.get("provider");
                if (l && l.name.indexOf("flash") >= 0) {
                    var u = "Flash Version " + e.flashVersion();
                    i.items.push({
                        title: u,
                        link: "http://www.adobe.com/software/flash/about/"
                    })
                }
                return i
            },
            buildMenu: function() {
                var n = this.buildArray();
                return e.createElement(t(n))
            },
            updateHtml: function() {
                this.el.innerHTML = this.buildMenu().innerHTML
            },
            rightClick: function(e) {
                return this.lazySetup(), !this.mouseOverContext && (this.hideMenu(), this.showMenu(e), !1)
            },
            getOffset: function(e) {
                for (var t = e.target, n = e.offsetX || e.layerX, i = e.offsetY || e.layerY; t !== this.playerElement;) n += t.offsetLeft, i += t.offsetTop, t = t.parentNode;
                return {
                    x: n,
                    y: i
                }
            },
            showMenu: function(t) {
                var n = this.getOffset(t);
                return this.el.style.left = n.x + "px", this.el.style.top = n.y + "px", e.addClass(this.playerElement, "jw-flag-rightclick-open"), e.addClass(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout(this.hideMenu.bind(this), 3e3), !1
            },
            hideMenu: function() {
                return this.elementUI.off("out", this.hideMenu, this), this.mouseOverContext ? void this.elementUI.on("out", this.hideMenu, this) : (e.removeClass(this.playerElement, "jw-flag-rightclick-open"), void e.removeClass(this.el, "jw-open"))
            },
            lazySetup: function() {
                this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on("change:provider", this.updateHtml, this), this.elementUI = new i(this.el, {
                    useHover: !0
                }).on("over", function() {
                    this.mouseOverContext = !0
                }, this).on("out", function() {
                    this.mouseOverContext = !1
                }, this))
            },
            setup: function(e, t, n) {
                this.playerElement = t, this.model = e, this.mouseOverContext = !1, this.layer = n, t.oncontextmenu = this.rightClick.bind(this)
            },
            addOffListener: function(e) {
                e.addEventListener("mousedown", this.hideMenuHandler), e.addEventListener("touchstart", this.hideMenuHandler), e.addEventListener("pointerdown", this.hideMenuHandler)
            },
            removeOffListener: function(e) {
                e.removeEventListener("mousedown", this.hideMenuHandler), e.removeEventListener("touchstart", this.hideMenuHandler), e.removeEventListener("pointerdown", this.hideMenuHandler)
            },
            destroy: function() {
                clearTimeout(this._menuTimeout), this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model.off("change:provider", this.updateHtml), this.model = null)
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2)], o = function(e, t) {
        var n = function(e) {
            this.model = e, this.model.on("change:playlistItem", this.playlistItem, this)
        };
        return e.extend(n.prototype, {
            hide: function() {
                this.el.style.display = "none"
            },
            show: function() {
                this.el.style.display = ""
            },
            setup: function(e) {
                this.el = e;
                var t = this.el.getElementsByTagName("div");
                this.title = t[0], this.description = t[1], this.model.get("playlistItem") && this.playlistItem(this.model, this.model.get("playlistItem")), this.model.on("change:logoWidth", this.update, this), this.model.on("change:dock", this.update, this)
            },
            update: function(e) {
                var n = {
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    i = e.get("controls"),
                    o = e.get("dock"),
                    r = e.get("logo");
                if (r) {
                    var a = 1 * ("" + r.margin).replace("px", ""),
                        s = e.get("logoWidth") + (isNaN(a) ? 0 : a);
                    "top-left" === r.position ? n.paddingLeft = s : "top-right" === r.position && (n.paddingRight = s)
                }
                if (i && o && o.length) {
                    var l = 56 * o.length;
                    n.paddingRight = Math.max(n.paddingRight, l)
                }
                t.style(this.el, n)
            },
            playlistItem: function(e, t) {
                if (e.get("displaytitle") || e.get("displaydescription")) {
                    var n = "",
                        i = "";
                    t.title && e.get("displaytitle") && (n = t.title), t.description && e.get("displaydescription") && (i = t.description), this.updateText(n, i)
                } else this.hide()
            },
            updateText: function(e, t) {
                this.title.innerHTML = e, this.description.innerHTML = t, this.title.firstChild || this.description.firstChild ? this.show() : this.hide()
            },
            element: function() {
                return this.el
            }
        }), n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(4), n(3), n(22), n(5), n(146), n(147), n(162), n(160), n(159), n(156), n(158), n(154), n(161), n(177), n(164), n(150), n(1), n(108), n(145), n(66), n(155)], o = function(e, t, i, o, r, a, s, l, u, c, d, p, f, h, g, w, m, v, j, y, b, x) {
        var E = e.style,
            k = e.bounds,
            C = e.isMobile(),
            A = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
            L = function(L, _) {
                function T() {
                    return {
                        reason: "interaction"
                    }
                }

                function P(t) {
                    var n = 0,
                        i = _.get("duration"),
                        r = _.get("position");
                    "DVR" === _.get("streamType") && (n = i, i = Math.max(r, o.dvrSeekLimit));
                    var a = e.between(r + t, n, i);
                    L.seek(a, T())
                }

                function R(t) {
                    var n = e.between(_.get("volume") + t, 0, 100);
                    L.setVolume(n)
                }

                function M(e) {
                    return !e.ctrlKey && !e.metaKey && !!_.get("controls")
                }

                function I(e) {
                    if (!M(e)) return !0;
                    switch (_e || ue(), e.keyCode) {
                        case 27:
                            L.setFullscreen(!1);
                            break;
                        case 13:
                        case 32:
                            L.play(T());
                            break;
                        case 37:
                            _e || P(-5);
                            break;
                        case 39:
                            _e || P(5);
                            break;
                        case 38:
                            R(10);
                            break;
                        case 40:
                            R(-10);
                            break;
                        case 67:
                            var t = L.getCaptionsList(),
                                n = t.length;
                            if (n) {
                                var i = (L.getCurrentCaptions() + 1) % n;
                                L.setCurrentCaptions(i)
                            }
                            break;
                        case 77:
                            L.setMute();
                            break;
                        case 70:
                            L.setFullscreen();
                            break;
                        default:
                            if (e.keyCode >= 48 && e.keyCode <= 59) {
                                var o = e.keyCode - 48,
                                    r = o / 10 * _.get("duration");
                                L.seek(r, T())
                            }
                    }
                    return /13|32|37|38|39|40/.test(e.keyCode) ? (e.preventDefault(), !1) : void 0
                }

                function S() {
                    tt = !1, e.removeClass(Ee, "jw-no-focus")
                }

                function O(e) {
                    e.target && e.target.blur && e.target.blur()
                }

                function N() {
                    tt = !0, e.addClass(Ee, "jw-no-focus")
                }

                function D() {
                    tt || S(), _e || C || ue()
                }

                function Y() {
                    var e = k(Ee),
                        n = Math.round(e.width),
                        i = Math.round(e.height);
                    if ($e(Xe), n !== Ae || i !== Le) {
                        if (!n || !i) return void(Ae && Le || W());
                        Ae = n, Le = i, clearTimeout(qe), qe = setTimeout(ne, 50), _.set("containerWidth", n), _.set("containerHeight", i);
                        var o = y(Ee, n, i);
                        Z(_.get("height")), F(o, _.get("audioMode")), nt.trigger(t.JWPLAYER_RESIZE, {
                            width: n,
                            height: i
                        })
                    }
                }

                function F(t, n) {
                    var i = t < 2,
                        o = _.get("timeSliderAbove"),
                        r = !n && o !== !1 && (o || i);
                    e.toggleClass(Ee, "jw-flag-small-player", i), e.toggleClass(Ee, "jw-flag-audio-player", n), e.toggleClass(Ee, "jw-flag-time-slider-above", r)
                }

                function W() {
                    $e(Xe), Xe = Qe(Y)
                }

                function J(t, n, i) {
                    if (t) {
                        var o = {
                            color: t,
                            borderColor: t,
                            stroke: t
                        };
                        e.css("#" + i + " .jw-color-active", o, i), e.css("#" + i + " .jw-color-active-hover:hover", o, i)
                    }
                    if (n) {
                        var r = {
                            color: n,
                            borderColor: n,
                            stroke: n
                        };
                        e.css("#" + i + " .jw-color-inactive", r, i), e.css("#" + i + " .jw-color-inactive-hover:hover", r, i)
                    }
                }

                function B(t, n) {
                    e.replaceClass(Ee, /jw-stretch-\S+/, "jw-stretch-" + n)
                }

                function V(e) {
                    e && !C && (e.element().addEventListener("mousemove", H, !1), e.element().addEventListener("mouseout", G, !1))
                }

                function z() {
                    var e = _.get("state");
                    _.get("controls") && (e === r.IDLE || e === r.COMPLETE || _e && _e.get("state") === r.PAUSED) && L.play(T()), e === r.PAUSED ? ce() : Ke ? se() : ue()
                }

                function U(e) {
                    e.link ? (L.pause(!0, T()), L.setFullscreen(!1), window.open(e.link, e.linktarget)) : _.get("controls") && L.play(T())
                }

                function H() {
                    clearTimeout(Ue)
                }

                function G() {
                    ue()
                }

                function K(e) {
                    nt.trigger(e.type, e)
                }

                function q(t, n) {
                    n ? (Fe && Fe.destroy(), e.addClass(Ee, "jw-flag-flash-blocked")) : (Fe && Fe.setup(_, Ee, Ee), e.removeClass(Ee, "jw-flag-flash-blocked"))
                }

                function X() {
                    _.get("controls") && L.setFullscreen()
                }

                function Q() {
                    var n = Ee.getElementsByClassName("jw-overlays")[0];
                    n.addEventListener("mousemove", le), Re = new s(_, Ce, {
                        useHover: !0
                    }), Re.on("click", function() {
                        K({
                            type: t.JWPLAYER_DISPLAY_CLICK
                        }), _.get("controls") && L.play(T())
                    }), Re.on("tap", function() {
                        K({
                            type: t.JWPLAYER_DISPLAY_CLICK
                        }), z()
                    }), Re.on("doubleClick", X), Re.on("move", le), Re.on("over", le), ke.appendChild(be()), Ie = new d(_), Se = new p(_), Se.on(t.JWPLAYER_LOGO_CLICK, U);
                    var i = document.createElement("div");
                    i.className = "jw-controls-right jw-reset", Se.setup(i), i.appendChild(Ie.element()), ke.appendChild(i), Ye = new a(_), Ye.setup(Ee.id, _.get("captions")), ke.parentNode.insertBefore(Ye.element(), Oe.element());
                    var o = _.get("height");
                    C && ("string" == typeof o || o >= Ge) ? e.addClass(Ee, "jw-flag-touch") : (Fe = new g, Fe.setup(_, Ee, Ee)), Te = new f(L, _), Te.on(t.JWPLAYER_USER_ACTION, le), _.on("change:scrubbing", je), _.autoStartOnMobile() && (De = b("jw-autostart-mute jw-off", ie, _.get("localization").volume), De.show(), ke.appendChild(De.element()), Te.renderVolume(!0, _.get("volume")), e.addClass(Ee, "jw-flag-autostart"), _.set("autostartMuted", !0), _.on("change:autostartFailed", ie), _.on("change:autostartMuted", ie), _.on("change:mute", ie)), Ne = new m(_, L, Te.elements.next, Ee), Ne.setup(), ke.appendChild(Ne.element()), ke.appendChild(Te.element()), Ee.addEventListener("focus", D), Ee.addEventListener("blur", S), Ee.addEventListener("keydown", I), Ee.onmousedown = N,
                        Ee.onmouseup = O
                }

                function $(t, n, i) {
                    var o, r = Ee.className;
                    i = !!i, i && (r = r.replace(/\s*aspectMode/, ""), Ee.className !== r && (Ee.className = r), E(Ee, {
                        display: "block"
                    }, i)), e.exists(t) && e.exists(n) && (_.set("width", t), _.set("height", n)), o = {
                        width: t
                    }, e.hasClass(Ee, "jw-flag-aspect-mode") || (o.height = n), _.get("aspectratio") && ye(), E(Ee, o, !0), Z(n), ne(t, n)
                }

                function Z(e) {
                    var t = ee(e);
                    if (Te && !t) {
                        var n = _e ? _e : _;
                        me(n, n.get("state"))
                    }
                    _.set("audioMode", t)
                }

                function ee(e) {
                    if (_.get("aspectratio")) return !1;
                    if (v.isString(e) && e.indexOf("%") > -1) return !1;
                    var t = 1 * e || null;
                    return t = v.isNumber(t) ? t : _.get("containerHeight"), !!t && te(t)
                }

                function te(e) {
                    return e && e <= Ge
                }

                function ne(e, t) {
                    if (!e || isNaN(Number(e))) {
                        if (!Ce) return;
                        e = Ce.clientWidth
                    }
                    if (!t || isNaN(Number(t))) {
                        if (!Ce) return;
                        t = Ce.clientHeight
                    }
                    Pe && Pe.resize(e, t, _.get("stretching"));
                    var n = _.getVideo();
                    if (n) {
                        var i = n.resize(e, t, _.get("stretching"));
                        i && (clearTimeout(qe), qe = setTimeout(ne, 250)), _.get("aspectratio") && ye(), Ye.resize()
                    }
                }

                function ie() {
                    var t = !_.get("autostartFailed"),
                        n = _.get("mute");
                    t && (n = !1), _.off("change:autostartFailed", ie), _.off("change:mute", ie), _.off("change:autostartMuted", ie), _.set("autostartFailed", void 0), _.set("autostartMuted", void 0), L.setMute(n), Te.renderVolume(n, _.get("volume")), De.hide(), e.removeClass(Ee, "jw-flag-autostart")
                }

                function oe() {
                    if (et) {
                        var e = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                        return !(!e || e.id !== _.get("id"))
                    }
                    return _e ? _e.getVideo().getFullScreen() : _.getVideo().getFullScreen()
                }

                function re(e) {
                    var t = _.get("fullscreen"),
                        n = void 0 !== e.jwstate ? e.jwstate : oe();
                    t !== n && _.set("fullscreen", n), W(), clearTimeout(qe), qe = setTimeout(ne, 200)
                }

                function ae(t, n) {
                    n ? (e.addClass(t, "jw-flag-fullscreen"), E(document.body, {
                        "overflow-y": "hidden"
                    }), ue()) : (e.removeClass(t, "jw-flag-fullscreen"), E(document.body, {
                        "overflow-y": ""
                    })), ne(), W()
                }

                function se() {
                    Ke = !1, clearTimeout(Ue), Te.hideComponents(), e.addClass(Ee, "jw-flag-user-inactive"), Ye.renderCues(!0)
                }

                function le() {
                    ue()
                }

                function ue(t) {
                    Ke || (e.removeClass(Ee, "jw-flag-user-inactive"), Ye.renderCues(!0)), Ke = !0, clearTimeout(Ue), Ue = setTimeout(se, t || He)
                }

                function ce() {
                    _e || _.get("castActive") || _.mediaModel && "audio" === _.mediaModel.get("mediaType") || (e.toggleClass(Ee, "jw-flag-controls-hidden"), Ye.renderCues(!0))
                }

                function de() {
                    L.setFullscreen(!1)
                }

                function pe() {
                    Me && Me.setState(_.get("state")), fe(_, _.mediaModel.get("mediaType")), _.mediaModel.on("change:mediaType", fe, this)
                }

                function fe(t, n) {
                    var i = "audio" === n,
                        o = _.getVideo(),
                        r = o && 0 === o.getName().name.indexOf("flash");
                    e.toggleClass(Ee, "jw-flag-media-audio", i), i && !r ? Ee.insertBefore(Pe.el, Ce) : Ee.insertBefore(Pe.el, Ye.element())
                }

                function he(t, n) {
                    var i = t.get("minDvrWindow"),
                        o = e.streamType(n, i),
                        r = "LIVE" === o;
                    t.set("streamType", o), e.toggleClass(Ee, "jw-flag-live", r), nt.setAltText(r ? t.get("localization").liveBroadcast : "")
                }

                function ge(e, t) {
                    return t ? void(t.name ? Oe.updateText(t.name, t.message) : Oe.updateText(t.message, "")) : void Oe.playlistItem(e, e.get("playlistItem"))
                }

                function we() {
                    e.replaceClass(Ee, /jw-state-\S+/, "jw-state-" + We)
                }

                function me(t, n) {
                    We = n, clearTimeout(Ze), n === r.PLAYING ? ve(t, n) : Ze = setTimeout(function() {
                        ve(t, n)
                    }, 33), n !== r.PAUSED && e.hasClass(Ee, "jw-flag-controls-hidden") && e.removeClass(Ee, "jw-flag-controls-hidden")
                }

                function ve(t, n) {
                    switch (e.toggleClass(Ee, "jw-flag-dragging", t.get("scrubbing")), we(), n) {
                        case r.PLAYING:
                            ne()
                    }
                }

                function je(e) {
                    me(e, e.get("state"))
                }

                function ye() {
                    var e = Ee.getElementsByClassName("jw-aspect")[0];
                    Ye.setContainerHeight(e.offsetHeight)
                }

                function be() {
                    var e = new x,
                        t = new l(_, L),
                        n = xe(),
                        i = new c(_, L);
                    return e.addButton(t), e.addButton(n), e.addButton(i), e.element()
                }

                function xe() {
                    var n = new u(_);
                    return n.on("click tap", function() {
                        K({
                            type: t.JWPLAYER_DISPLAY_CLICK
                        }), ue(1e3), L.play(T())
                    }), e.isChrome() && !e.isMobile() && n.el.addEventListener("mousedown", function() {
                        var e = _.getVideo(),
                            t = e && 0 === e.getName().name.indexOf("flash");
                        if (t) {
                            var i = function() {
                                document.removeEventListener("mouseup", i), n.el.style.pointerEvents = "auto"
                            };
                            this.style.pointerEvents = "none", document.addEventListener("mouseup", i)
                        }
                    }), n
                }
                var Ee, ke, Ce, Ae, Le, _e, Te, Pe, Re, Me, Ie, Se, Oe, Ne, De, Ye, Fe, We, Je, Be, Ve, ze, Ue = -1,
                    He = C ? 4e3 : 2e3,
                    Ge = 44,
                    Ke = !1,
                    qe = -1,
                    Xe = -1,
                    Qe = window.requestAnimationFrame || function(e) {
                        return window.setTimeout(e, 17)
                    },
                    $e = window.cancelAnimationFrame || window.clearTimeout,
                    Ze = -1,
                    et = !1,
                    tt = !1,
                    nt = v.extend(this, i);
                window.webpackJsonpjwplayer && n(113), this.model = _, this.api = L, Ee = e.createElement(j({
                    id: _.get("id")
                })), e.isIE() && e.addClass(Ee, "jw-ie");
                var it = _.get("width"),
                    ot = _.get("height");
                E(Ee, {
                    width: it.toString().indexOf("%") > 0 ? it : it + "px",
                    height: ot.toString().indexOf("%") > 0 ? ot : ot + "px"
                }), Be = Ee.requestFullscreen || Ee.webkitRequestFullscreen || Ee.webkitRequestFullScreen || Ee.mozRequestFullScreen || Ee.msRequestFullscreen, Ve = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, et = Be && Ve, this.onChangeSkin = function(t, n) {
                    e.replaceClass(Ee, /jw-skin-\S+/, n ? "jw-skin-" + n : "")
                }, this.handleColorOverrides = function() {
                    function t(e, t) {
                        var n;
                        if (!ze) {
                            var i = document.createElement("canvas");
                            i.height = 1, i.width = 1, ze = i.getContext("2d")
                        }
                        return ze.clearRect(0, 0, 1, 1), ze.fillStyle = e, ze.fillRect(0, 0, 1, 1), n = ze.getImageData(0, 0, 1, 1).data, "rgba(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + t + ")"
                    }

                    function n(t, n, o, r) {
                        t = e.prefix(t, "#" + i + (r ? "" : " "));
                        var a = {};
                        a[n] = o, e.css(t.join(", "), a, i)
                    }
                    var i = _.get("id"),
                        o = _.get("skinColorActive"),
                        r = _.get("skinColorInactive"),
                        a = _.get("skinColorBackground");
                    if (o && (n([".jw-button-color.jw-toggle", ".jw-button-color:hover", ".jw-button-color.jw-toggle.jw-off:hover", ".jw-option:not(.jw-active-option):hover", ".jw-nextup-header"], "color", o), n([".jw-option.jw-active-option", ".jw-progress"], "background", "none " + o)), r && (n([".jw-text", ".jw-option", ".jw-button-color", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-body"], "color", r), n([".jw-cue", ".jw-knob", ".jw-active-option", ".jw-nextup-header"], "background", "none " + r)), a) {
                        if (n([".jw-background-color"], "background", "none " + a), _.get("timeSliderAbove") !== !1) {
                            var s = "transparent linear-gradient(180deg, " + t(a, 0) + " 0%, " + t(a, .25) + " 30%, " + t(a, .4) + " 70%, " + t(a, .5) + ") 100%";
                            n([".jw-flag-time-slider-above .jw-background-color.jw-controlbar"], "background", s, !0)
                        }
                        n([".jw-flag-time-slider-above .jw-background-color.jw-slider-time"], "background", "transparent", !0)
                    }
                    J(o, r, i)
                }, this.setup = function() {
                    this.handleColorOverrides(), _.get("skin-loading") === !0 && (e.addClass(Ee, "jw-flag-skin-loading"), _.once("change:skin-loading", function() {
                        e.removeClass(Ee, "jw-flag-skin-loading")
                    })), this.onChangeSkin(_, _.get("skin"), ""), _.on("change:skin", this.onChangeSkin, this), Ce = Ee.getElementsByClassName("jw-media")[0], ke = Ee.getElementsByClassName("jw-controls")[0];
                    var n = Ee.getElementsByClassName("jw-preview")[0];
                    Pe = new h(_), Pe.setup(n);
                    var i = Ee.getElementsByClassName("jw-title")[0];
                    Oe = new w(_), Oe.setup(i), Q(), ue(), _.set("mediaContainer", Ce), _.mediaController.on("fullscreenchange", re);
                    for (var o = A.length; o--;) document.addEventListener(A[o], re, !1);
                    window.removeEventListener("resize", W), window.addEventListener("resize", W, !1), C && (window.removeEventListener("orientationchange", W), window.addEventListener("orientationchange", W, !1)), _.on("change:errorEvent", ge), _.on("change:controls", rt), rt(_, _.get("controls")), _.on("change:state", me), _.on("change:duration", he, this), _.on("change:flashBlocked", q), q(_, _.get("flashBlocked")), L.onPlaylistComplete(de), L.onPlaylistItem(pe), _.on("change:hideAdsControls", function(t, n) {
                        e.toggleClass(Ee, "jw-flag-ads-hide-controls", n)
                    }), _.get("stretching") && B(_, _.get("stretching")), _.on("change:stretching", B), me(_, r.IDLE), _.on("change:fullscreen", at), V(Te), V(Se);
                    var a = _.get("aspectratio");
                    if (a) {
                        e.addClass(Ee, "jw-flag-aspect-mode");
                        var s = Ee.getElementsByClassName("jw-aspect")[0];
                        E(s, {
                            paddingTop: a
                        })
                    }
                    L.on(t.JWPLAYER_READY, function() {
                        $(_.get("width"), _.get("height")), Y()
                    })
                };
                var rt = function(t, n) {
                        if (n) {
                            var i = _e ? _e.get("state") : _.get("state");
                            me(t, i)
                        }
                        e.toggleClass(Ee, "jw-flag-controls-disabled", !n)
                    },
                    at = function(t, n) {
                        var i = _.getVideo();
                        n && _.get("autostartMuted") && ie(), et ? (n ? Be.apply(Ee) : Ve.apply(document), ae(Ee, n)) : e.isIE() ? ae(Ee, n) : (_e && _e.getVideo() && _e.getVideo().setFullscreen(n), i.setFullscreen(n)), i && 0 === i.getName().name.indexOf("flash") && i.setFullscreen(n)
                    };
                this.resize = function(e, t) {
                    var n = !0;
                    $(e, t, n), Y()
                }, this.resizeMedia = ne, this.reset = function() {
                    document.contains(Ee) && Ee.parentNode.replaceChild(Je, Ee), e.emptyElement(Ee)
                }, this.setupInstream = function(t) {
                    this.instreamModel = _e = t, _e.on("change:controls", rt, this), _e.on("change:state", me, this), e.addClass(Ee, "jw-flag-ads"), ue()
                }, this.setAltText = function(e) {
                    Te.setAltText(e)
                }, this.destroyInstream = function() {
                    if (_e && (_e.off(null, null, this), _e = null), this.setAltText(""), e.removeClass(Ee, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), _.set("hideAdsControls", !1), _.getVideo) {
                        var t = _.getVideo();
                        t.setContainer(Ce)
                    }
                    he(_, _.get("duration")), Re.revertAlternateClickHandlers()
                }, this.addCues = function(e) {
                    Te && Te.addCues(e)
                }, this.clickHandler = function() {
                    return Re
                }, this.controlsContainer = function() {
                    return ke
                }, this.getContainer = this.element = function() {
                    return Ee
                }, this.getSafeRegion = function(t) {
                    var n = {
                            x: 0,
                            y: 0,
                            width: _.get("containerWidth") || 0,
                            height: _.get("containerHeight") || 0
                        },
                        i = _.get("dock");
                    return i && i.length && _.get("controls") && (n.y = Ie.element().clientHeight, n.height -= n.y), t = t || !e.exists(t), t && _.get("controls") && (n.height -= Te.element().clientHeight), n
                }, this.setCaptions = function(e) {
                    Ye.clear(), Ye.setup(_.get("id"), e), Ye.resize()
                }, this.destroy = function() {
                    clearTimeout(Ze), clearTimeout(qe), clearTimeout(Ue), window.removeEventListener("resize", W), window.removeEventListener("orientationchange", W);
                    for (var t = A.length; t--;) document.removeEventListener(A[t], re, !1);
                    _.mediaController && _.mediaController.off("fullscreenchange", re), Ee.removeEventListener("keydown", I, !1), Fe && Fe.destroy(), Me && (_.off("change:state", Me.statusDelegate), Me.destroy(), Me = null), _e && this.destroyInstream(), Se && Se.destroy(), e.clearCss(_.get("id"))
                }
            };
        return L
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i;
    i = function(require, e, t) {
        function n(e, t) {
            o(t, r(e))
        }

        function i(e) {
            var t = c[e];
            if (t) {
                for (var n = Object.keys(t), i = 0; i < n.length; i += 1)
                    for (var o = t[n[i]], r = 0; r < o.parts.length; r += 1) o.parts[r]();
                delete c[e]
            }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = (c[e] || {})[i.id];
                if (o) {
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(l(e, i.parts[r]))
                } else {
                    for (var a = [], r = 0; r < i.parts.length; r++) a.push(l(e, i.parts[r]));
                    c[e] = c[e] || {}, c[e][i.id] = {
                        id: i.id,
                        parts: a
                    }
                }
            }
        }

        function r(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o[0],
                    a = o[1],
                    s = o[2],
                    l = {
                        css: a,
                        media: s
                    };
                n[r] ? n[r].parts.push(l) : t.push(n[r] = {
                    id: r,
                    parts: [l]
                })
            }
            return t
        }

        function a(e) {
            f().appendChild(e)
        }

        function s(e) {
            var t = document.createElement("style");
            return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), a(t), t
        }

        function l(e, t) {
            var n, i, o, r = d[e];
            r || (r = d[e] = {
                element: s(e),
                counter: 0
            });
            var a = r.counter++;
            return n = r.element, i = u.bind(null, n, a, !1), o = u.bind(null, n, a, !0), i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media) return;
                        i(t = e)
                    } else o()
                }
        }

        function u(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, o);
            else {
                var r = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }
        var c = {},
            d = {},
            p = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            f = p(function() {
                return document.head || document.getElementsByTagName("head")[0]
            });
        t.exports = {
            style: n,
            clear: i
        };
        var h = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
}, function(e, t, n) {
    var i, o;
    i = [n(68), n(1), n(26), n(2), n(9), n(7), n(72), n(15), n(73), n(65), n(4), n(5), n(50), n(32), n(48), n(21)], o = function(e, t, n, i, o, r, a, s, l, u, c, d, p, f, h, g) {
        var w = {};
        return w.api = e, w._ = t, w._ = t, w.version = n, w.utils = t.extend(i, o, {
            key: a,
            extend: t.extend,
            scriptloader: s,
            rssparser: h,
            tea: l,
            UI: r
        }), w.utils.css.style = w.utils.style, w.vid = u, w.events = t.extend({}, c, {
            state: d
        }), w.playlist = t.extend({}, p, {
            item: f
        }), w.plugins = g, w
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , function(e, t, n) {
    var i, o;
    i = [n(122), n(16), n(175), n(27), n(2), n(1)], o = function(e, t, i, o, r, a) {
        var s = e.prototype.setup;
        return e.prototype.setup = function(e, r) {
            function l() {
                var e = p.get("cast");
                return a.isObject(e) && h("casting") && !o.containsDrm(p)
            }

            function u() {
                var e = p.getVideo();
                l() ? (c.apply(this), d.apply(this)) : e && e.video && (e.video.webkitWirelessVideoPlaybackDisabled = !0)
            }

            function c() {
                n.e(3, function(require) {
                    if (window.chrome) {
                        var e = n(69);
                        this._castController = new e(this, p), this.castToggle = this._castController.castToggle.bind(this._castController)
                    }
                }.bind(this))
            }

            function d() {
                window.WebKitPlaybackTargetAvailabilityEvent && n.e(6, function(require) {
                    var e = n(67);
                    this._airplayController = new e(this, p), this.castToggle = this._airplayController.airplayToggle.bind(this._airplayController)
                }.bind(this))
            }
            s.apply(this, arguments);
            var p = this._model,
                f = p.get("edition"),
                h = t(f),
                g = i.setup();
            e.analytics && (e.sdkplatform = e.sdkplatform || e.analytics.sdkplatform), this.once("ready", u, this), this.once("ready", g.onReady, this), r.getAdBlock = g.checkAdBlock
        }, e
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(72), n(16), n(1), n(2), n(63), n(127), n(27)], o = function(e, t, i, o, r, a, s) {
        function l(e, t, n) {
            if (t) {
                var i = t.client;
                delete t.client, /\.(js|swf)$/.test(i || "") || (i = r.repo() + n), e[i] = t
            }
        }

        function u(e, n) {
            var o = i.clone(n.get("plugins")) || {},
                a = n.get("edition"),
                s = t(a),
                u = /^(vast|googima|freewheel)$/,
                c = /\.(js|swf)$/,
                d = r.repo(),
                p = i.clone(n.get("advertising"));
            if (s("ads") && p && (c.test(p.client) ? o[p.client] = p : u.test(p.client) && (o[d + p.client + ".js"] = p), delete p.client), s("jwpsrv")) {
                var f = n.get("analytics");
                i.isObject(f) || (f = {}), l(o, f, "jwpsrv.js")
            }
            l(o, n.get("ga"), "gapro.js"), l(o, n.get("sharing"), "sharing.js");
            var h = n.get("related"),
                g = i.isObject(h),
                w = n.get("visualplaylist") !== !1 || g;
            g || (h = {
                disableRelated: !0
            }), h.showDockButton = w, l(o, h, "related.js");
            var m = n.get("mobileSdk");
            if (!m) {
                var v = n.get("playlist");
                i.some(v, function(e) {
                    if (e.stereomode && e.stereomode.length > 0) return l(o, n.get("vr") || {}, "vr.js"), !0
                })
            }
            n.set("plugins", o), e()
        }

        function c(t, i) {
            var s = i.get("key") || window.jwplayer && window.jwplayer.key,
                l = new e(s),
                u = l.edition();
            if (i.set("key", s), i.set("edition", u), "unlimited" === u) {
                var c = o.getScriptPath("jwplayer.js");
                if (!c) return void a.error(t, "Error setting up player", "Could not locate jwplayer.js script tag");
                n.p = c, o.repo = r.repo = r.loadFrom = function() {
                    return c
                }
            }
            i.updateProviders(), "invalid" === u ? a.error(t, "Error setting up player", (void 0 === s ? "Missing" : "Invalid") + " license key") : t()
        }

        function d(e, t) {
            s.containsDrm(t) ? s.probe(e, t.get("edition")) : e()
        }

        function p() {
            var e = a.getQueue();
            return e.CHECK_KEY = {
                method: c,
                depends: ["LOADED_POLYFILLS"]
            }, e.PROBE_DRM_SUPPORT = {
                method: d,
                depends: ["CHECK_KEY"]
            }, e.FILTER_PLUGINS = {
                method: u,
                depends: ["CHECK_KEY"]
            }, e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"), e.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"), e.SETUP_VIEW.depends.push("CHECK_KEY"), e
        }
        return {
            getQueue: p
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(129), n(168), n(1)], o = function(e, t, n) {
        var i = window,
            o = n.extend(e, t);
        return "function" == typeof i.define && i.define.amd && i.define([], function() {
            return o
        }), i.jwplayer ? i.jwplayer : o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        function e() {
            var e = document.createElement("div");
            return e.className = n, e.innerHTML = "&nbsp;", e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.background = "transparent", e
        }

        function t() {
            function t() {
                var e = this,
                    t = e._view.element();
                t.appendChild(a), o = !0, i() && e.trigger("adBlock")
            }

            function i() {
                return !!o && (!!r || ("" !== a.innerHTML && a.className === n && null !== a.offsetParent && 0 !== a.clientHeight || (r = !0), r))
            }
            var o = !1,
                r = !1,
                a = e();
            return {
                onReady: t,
                checkAdBlock: i
            }
        }
        var n = "afs_ads";
        return {
            setup: t
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(4), n(7), n(3), n(1), n(80)], o = function(e, t, n, i, o, r) {
        var a = function(e) {
            this.model = e, this.setup()
        };
        return o.extend(a.prototype, i, {
            setup: function() {
                this.destroy(), this.skipMessage = this.model.get("skipText"), this.skipMessageCountdown = this.model.get("skipMessage"), this.setWaitTime(this.model.get("skipOffset"));
                var t = r();
                this.el = e.createElement(t), this.skiptext = this.el.getElementsByClassName("jw-skiptext")[0], this.skipAdOnce = o.once(this.skipAd.bind(this)), new n(this.el).on("click tap", o.bind(function() {
                    this.skippable && this.skipAdOnce()
                }, this)), this.model.on("change:duration", this.onChangeDuration, this), this.model.on("change:position", this.onChangePosition, this), this.onChangeDuration(this.model, this.model.get("duration")), this.onChangePosition(this.model, this.model.get("position"))
            },
            updateMessage: function(e) {
                this.skiptext.innerHTML = e
            },
            updateCountdown: function(e) {
                this.updateMessage(this.skipMessageCountdown.replace(/xx/gi, Math.ceil(this.waitTime - e)))
            },
            onChangeDuration: function(t, n) {
                if (n) {
                    if (this.waitPercentage) {
                        if (!n) return;
                        this.itemDuration = n, this.setWaitTime(this.waitPercentage), delete this.waitPercentage
                    }
                    e.removeClass(this.el, "jw-hidden")
                }
            },
            onChangePosition: function(t, n) {
                this.waitTime - n > 0 ? this.updateCountdown(n) : (this.updateMessage(this.skipMessage), this.skippable = !0, e.addClass(this.el, "jw-skippable"))
            },
            element: function() {
                return this.el
            },
            setWaitTime: function(t) {
                if (o.isString(t) && "%" === t.slice(-1)) {
                    var n = parseFloat(t);
                    return void(this.itemDuration && !isNaN(n) ? this.waitTime = this.itemDuration * n / 100 : this.waitPercentage = t)
                }
                o.isNumber(t) ? this.waitTime = t : "string" === e.typeOf(t) ? this.waitTime = e.seconds(t) : isNaN(Number(t)) ? this.waitTime = 0 : this.waitTime = Number(t)
            },
            skipAd: function() {
                this.trigger(t.JWPLAYER_AD_SKIPPED)
            },
            destroy: function() {
                this.el && (this.el.removeEventListener("click", this.skipAdOnce), this.el.parentElement && this.el.parentElement.removeChild(this.el)), delete this.skippable, delete this.itemDuration, delete this.waitPercentage
            }
        }), a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(163), n(1)], o = function(e, t) {
        var n = function() {};
        return t.extend(n.prototype, e.prototype, {
            buildArray: function() {
                var t = e.prototype.buildArray.apply(this, arguments);
                if (this.model.get("abouttext")) {
                    t.items[0].showLogo = !1, t.items.push(t.items.shift());
                    var n = {
                        title: this.model.get("abouttext"),
                        link: this.model.get("aboutlink") || t.items[0].link
                    };
                    t.items.unshift(n)
                }
                return t
            }
        }), n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}]);
jwplayer.key = "wX4p8oCRA/haV+dC0tDQ3aQLY8jOBQwU16nWTQ==";


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// main module, including jwpbackground module - we just include this but don't need to do anything with it, it's just loaded when the main module is called at end of the config.js module (which is pointed to for requirejs as the value of the data-main attribute in the script tag in index.html)
//define(['jquery', 'jwpbackground', 'jwplayer', 'vue'], function($, jwb, jwplayer, Vue) {

//const $ = require('./jquery-3.1.1.min.js');
const $ = __webpack_require__(1);
const jwb = __webpack_require__(3);
__webpack_require__(0);
const Vue = __webpack_require__(4);

    var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    Vue.component('videobackground-div', {
        template: '#videobackground-template'
    });

    // get playlist callback, this fires first then calls the player instance factory
    function loadFeed(){
      $.ajax({
        url: 'https://content.jwplatform.com/feeds/EU8xl6Xv.json',
        dataType: 'JSON'
      }).done(function(data) {
        fullPlaylist = data.playlist;
        JWInstanceFactory(fullPlaylist);
      });
    }

    // jwplayer instance factory callback
    var jwplayers = [];

    function JWInstanceFactory(fullPlaylist) {
      console.log(fullPlaylist);

      var customElements2 = [];
      for (var i = 0; i < fullPlaylist.length; i++) {
        customElements2.push("wall-player-" + i);
      }

      var jwplayerInstanceNames = [];
      for (var j = 0; j < fullPlaylist.length; j++) {
        jwplayerInstanceNames.push("videowallplayer" + j);
      }

      for (var k = 0; k < jwplayerInstanceNames.length; k++) {
        jwplayerInstanceNames[k] = jwplayer(customElements2[k]).setup({
          autostart: false,
          controls: true,
          aspectratio: '16:9',
          stretching: 'fill',
          height: '100%',
          width: '100%',
          file: fullPlaylist[k].sources[4].file, // assuming all assets in playlist are HD, grabbing file at index where 720p rendition is located
          image: fullPlaylist[k].image // grabbing file url from image property
        });
        jwplayers.push(jwplayerInstanceNames[k]);
      }
      return jwplayers;
    }

    // template is hardcoded for 12 videos, need to do programmatic template iteration
    Vue.component('videowall-div', {
        template: '#videowall-template',
        mounted: function() { // gets called after component is rendered
            //return JWInstanceFactory();
            return loadFeed();
        }
    });


    Vue.component('navbar-div', {
      template: '#navbar-template'
    });


    Vue.component('modal', {
        template: '#modal-template',
        data: function() {
            return {
                // this is bound to the form inputs via v-model directive
                newUser: {
                    name: '',
                    email: ''
                }
            }
        },
        // computed property for form validation state
        computed: {
            // paraphrased from docs on computeds:
            // You can data-bind to computed properties in templates just like a normal property. Vue is aware that a specific computed method depends on a specific property in the instance data object, so it will update any bindings that depend on validation when say name or email changes. And the best part is that we’ve created this dependency relationship declaratively: the computed getter function has no side effects, which makes it easy to test and reason about.

            // So you'll see that with every single character that is typed into or deleted from the form fields validation() gets pinged.
            // computeds are just another reactive binding approach, like v-model, or v-bind, but it has some logic attached
            validation: function() {
                console.log("this is this in validation computed method: ");
                console.log(this);
                console.log({
                    name: !!this.newUser.name.trim(),
                    email: emailRE.test(this.newUser.email)
                });
                // returning bool values depending upon validation
                // This is computed property that is part of a component is constantly being called or is computing in real-time as the user interacts with the UI.
                //every time user types on either field this function is called and returning this object with bool values for name and email
                return {
                    // trim() removes whitespace from both ends of string
                    name: !!this.newUser.name.trim(), // double !! is same as boolean(), so empty string after attempting trim() === false
                    email: emailRE.test(this.newUser.email)
                }
            },
            isValid: function() {
                var validation = this.validation
                console.log("this is validation in isValid(): " + JSON.stringify(validation));
                return Object.keys(validation).every(function(key) {
                    return validation[key]
                });
            }
        },
        // methods
        methods: {
            //just for demo
            login: function() {
                var demoCreds = {
                    email: 'michael@scott.com',
                    password: 'threatlevelmidnight'
                };
                if (this.newUser.email == demoCreds.email && this.newUser.name == demoCreds.password) {
                    console.log("logged in!");
                    Vueapp.showModal = false;
                    Vueapp.showVideoBackground = false;
                    Vueapp.showNavBar = true;
                    Vueapp.showVideoWall = true;
                } else {
                    console.log("invalid login info");
                }
            }

        }
    });

    // instantiating root Vue instance
    var Vueapp = new Vue({
        el: '#app',
        data: {
            showVideoBackground: true,
            showModal: false,
            showVideoWall: false,
            showNavBar: false
          }
        });

    var divClick = document.getElementById("js-background-video-container");
    divClick.addEventListener("click", function() {
        console.log("js-background-video clicked!");
        Vueapp.showModal = true;
    });


/***/ })
/******/ ]);