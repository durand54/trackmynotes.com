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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
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
	version = "3.1.1",

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
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

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

	isArray: Array.isArray,

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

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
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
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
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
			locked = options.once;

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

function adoptValue( value, resolve, reject ) {
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

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
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
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

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

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

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
			if ( jQuery.isArray( key ) ) {

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
				if ( !queue || jQuery.isArray( data ) ) {
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

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
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
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
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

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
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
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
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

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

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
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

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

				style[ name ] = value;
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
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

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

			if ( jQuery.isArray( name ) ) {
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
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
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
		if ( jQuery.isArray( value ) ) {
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

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
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

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
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

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
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

		// Checks the timer has not already been removed
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
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
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
					jQuery.nodeName( elem, "input" ) ) {
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

			} else if ( jQuery.isArray( val ) ) {
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
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

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
			if ( jQuery.isArray( value ) ) {
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

	if ( jQuery.isArray( obj ) ) {

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
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

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

			if ( jQuery.isArray( val ) ) {
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




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

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

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
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
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
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
			var win = getWindow( elem );

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

jQuery.parseJSON = JSON.parse;




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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery, module, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function dropdownEffectData(t) {
  var e = null,
      i = null,
      n = $(t),
      o = $(".dropdown-menu", t),
      a = n.parents("ul.nav");return a.height > 0 && (e = a.data("dropdown-in") || null, i = a.data("dropdown-out") || null), { target: t, dropdown: n, dropdownMenu: o, effectIn: o.data("dropdown-in") || e, effectOut: o.data("dropdown-out") || i };
}function dropdownEffectStart(t, e) {
  e && (t.dropdown.addClass("dropdown-animating"), t.dropdownMenu.addClass("animated"), t.dropdownMenu.addClass(e));
}function dropdownEffectEnd(t, e) {
  t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
    t.dropdown.removeClass("dropdown-animating"), t.dropdownMenu.removeClass("animated"), t.dropdownMenu.removeClass(t.effectIn), t.dropdownMenu.removeClass(t.effectOut), "function" == typeof e && e();
  });
}jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(t, e, i, n, o) {
    return jQuery.easing[jQuery.easing.def](t, e, i, n, o);
  }, easeInQuad: function easeInQuad(t, e, i, n, o) {
    return n * (e /= o) * e + i;
  }, easeOutQuad: function easeOutQuad(t, e, i, n, o) {
    return -n * (e /= o) * (e - 2) + i;
  }, easeInOutQuad: function easeInOutQuad(t, e, i, n, o) {
    return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i;
  }, easeInCubic: function easeInCubic(t, e, i, n, o) {
    return n * (e /= o) * e * e + i;
  }, easeOutCubic: function easeOutCubic(t, e, i, n, o) {
    return n * ((e = e / o - 1) * e * e + 1) + i;
  }, easeInOutCubic: function easeInOutCubic(t, e, i, n, o) {
    return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i;
  }, easeInQuart: function easeInQuart(t, e, i, n, o) {
    return n * (e /= o) * e * e * e + i;
  }, easeOutQuart: function easeOutQuart(t, e, i, n, o) {
    return -n * ((e = e / o - 1) * e * e * e - 1) + i;
  }, easeInOutQuart: function easeInOutQuart(t, e, i, n, o) {
    return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i;
  }, easeInQuint: function easeInQuint(t, e, i, n, o) {
    return n * (e /= o) * e * e * e * e + i;
  }, easeOutQuint: function easeOutQuint(t, e, i, n, o) {
    return n * ((e = e / o - 1) * e * e * e * e + 1) + i;
  }, easeInOutQuint: function easeInOutQuint(t, e, i, n, o) {
    return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i;
  }, easeInSine: function easeInSine(t, e, i, n, o) {
    return -n * Math.cos(e / o * (Math.PI / 2)) + n + i;
  }, easeOutSine: function easeOutSine(t, e, i, n, o) {
    return n * Math.sin(e / o * (Math.PI / 2)) + i;
  }, easeInOutSine: function easeInOutSine(t, e, i, n, o) {
    return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i;
  }, easeInExpo: function easeInExpo(t, e, i, n, o) {
    return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i;
  }, easeOutExpo: function easeOutExpo(t, e, i, n, o) {
    return e == o ? i + n : n * (1 - Math.pow(2, -10 * e / o)) + i;
  }, easeInOutExpo: function easeInOutExpo(t, e, i, n, o) {
    return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i;
  }, easeInCirc: function easeInCirc(t, e, i, n, o) {
    return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i;
  }, easeOutCirc: function easeOutCirc(t, e, i, n, o) {
    return n * Math.sqrt(1 - (e = e / o - 1) * e) + i;
  }, easeInOutCirc: function easeInOutCirc(t, e, i, n, o) {
    return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
  }, easeInElastic: function easeInElastic(t, e, i, n, o) {
    var a = 1.70158,
        s = 0,
        r = n;if (0 == e) return i;if (1 == (e /= o)) return i + n;if (s || (s = .3 * o), r < Math.abs(n)) {
      r = n;var a = s / 4;
    } else var a = s / (2 * Math.PI) * Math.asin(n / r);return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s)) + i;
  }, easeOutElastic: function easeOutElastic(t, e, i, n, o) {
    var a = 1.70158,
        s = 0,
        r = n;if (0 == e) return i;if (1 == (e /= o)) return i + n;if (s || (s = .3 * o), r < Math.abs(n)) {
      r = n;var a = s / 4;
    } else var a = s / (2 * Math.PI) * Math.asin(n / r);return r * Math.pow(2, -10 * e) * Math.sin((e * o - a) * (2 * Math.PI) / s) + n + i;
  }, easeInOutElastic: function easeInOutElastic(t, e, i, n, o) {
    var a = 1.70158,
        s = 0,
        r = n;if (0 == e) return i;if (2 == (e /= o / 2)) return i + n;if (s || (s = o * (.3 * 1.5)), r < Math.abs(n)) {
      r = n;var a = s / 4;
    } else var a = s / (2 * Math.PI) * Math.asin(n / r);return e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s)) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s) * .5 + n + i;
  }, easeInBack: function easeInBack(t, e, i, n, o, a) {
    return void 0 == a && (a = 1.70158), n * (e /= o) * e * ((a + 1) * e - a) + i;
  }, easeOutBack: function easeOutBack(t, e, i, n, o, a) {
    return void 0 == a && (a = 1.70158), n * ((e = e / o - 1) * e * ((a + 1) * e + a) + 1) + i;
  }, easeInOutBack: function easeInOutBack(t, e, i, n, o, a) {
    return void 0 == a && (a = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + i : n / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + i;
  }, easeInBounce: function easeInBounce(t, e, i, n, o) {
    return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i;
  }, easeOutBounce: function easeOutBounce(t, e, i, n, o) {
    return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i;
  }, easeInOutBounce: function easeInOutBounce(t, e, i, n, o) {
    return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i;
  } }), function (t) {
  t.Package ? Materialize = {} : t.Materialize = {};
}(window), Materialize.guid = function () {
  function t() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
  }return function () {
    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
  };
}(), Materialize.elementOrParentIsFixed = function (t) {
  var e = $(t),
      i = e.add(e.parents()),
      n = !1;return i.each(function () {
    if ("fixed" === $(this).css("position")) return n = !0, !1;
  }), n;
};var Vel;Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (t) {
  function e(t) {
    var e = t.length,
        n = i.type(t);return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
  }if (!t.jQuery) {
    var i = function i(t, e) {
      return new i.fn.init(t, e);
    };i.isWindow = function (t) {
      return null != t && t == t.window;
    }, i.type = function (t) {
      return null == t ? t + "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t ? o[s.call(t)] || "object" : typeof t === "undefined" ? "undefined" : _typeof(t);
    }, i.isArray = Array.isArray || function (t) {
      return "array" === i.type(t);
    }, i.isPlainObject = function (t) {
      var e;if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;try {
        if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (t) {
        return !1;
      }for (e in t) {}return void 0 === e || a.call(t, e);
    }, i.each = function (t, i, n) {
      var o = 0,
          a = t.length,
          s = e(t);if (n) {
        if (s) for (; a > o && i.apply(t[o], n) !== !1; o++) {} else for (o in t) {
          if (i.apply(t[o], n) === !1) break;
        }
      } else if (s) for (; a > o && i.call(t[o], o, t[o]) !== !1; o++) {} else for (o in t) {
        if (i.call(t[o], o, t[o]) === !1) break;
      }return t;
    }, i.data = function (t, e, o) {
      if (void 0 === o) {
        var a = t[i.expando],
            s = a && n[a];if (void 0 === e) return s;if (s && e in s) return s[e];
      } else if (void 0 !== e) {
        var a = t[i.expando] || (t[i.expando] = ++i.uuid);return n[a] = n[a] || {}, n[a][e] = o, o;
      }
    }, i.removeData = function (t, e) {
      var o = t[i.expando],
          a = o && n[o];a && i.each(e, function (t, e) {
        delete a[e];
      });
    }, i.extend = function () {
      var t,
          e,
          n,
          o,
          a,
          s,
          r = arguments[0] || {},
          l = 1,
          c = arguments.length,
          u = !1;for ("boolean" == typeof r && (u = r, r = arguments[l] || {}, l++), "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) && "function" !== i.type(r) && (r = {}), l === c && (r = this, l--); c > l; l++) {
        if (null != (a = arguments[l])) for (o in a) {
          t = r[o], n = a[o], r !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, r[o] = i.extend(u, s, n)) : void 0 !== n && (r[o] = n));
        }
      }return r;
    }, i.queue = function (t, n, o) {
      if (t) {
        n = (n || "fx") + "queue";var a = i.data(t, n);return o ? (!a || i.isArray(o) ? a = i.data(t, n, function (t, i) {
          var n = i || [];return null != t && (e(Object(t)) ? function (t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n;) {
              t[o++] = e[n++];
            }if (i !== i) for (; void 0 !== e[n];) {
              t[o++] = e[n++];
            }t.length = o, t;
          }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n;
        }(o)) : a.push(o), a) : a || [];
      }
    }, i.dequeue = function (t, e) {
      i.each(t.nodeType ? [t] : t, function (t, n) {
        e = e || "fx";var o = i.queue(n, e),
            a = o.shift();"inprogress" === a && (a = o.shift()), a && ("fx" === e && o.unshift("inprogress"), a.call(n, function () {
          i.dequeue(n, e);
        }));
      });
    }, i.fn = i.prototype = { init: function init(t) {
        if (t.nodeType) return this[0] = t, this;throw new Error("Not a DOM node.");
      }, offset: function offset() {
        var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
      }, position: function position() {
        function t() {
          for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) {
            t = t.offsetParent;
          }return t || document;
        }var e = this[0],
            t = t.apply(e),
            n = this.offset(),
            o = /^(?:body|html)$/i.test(t.nodeName) ? { top: 0, left: 0 } : i(t).offset();return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), { top: n.top - o.top, left: n.left - o.left };
      } };var n = {};i.expando = "velocity" + new Date().getTime(), i.uuid = 0;for (var o = {}, a = o.hasOwnProperty, s = o.toString, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < r.length; l++) {
      o["[object " + r[l] + "]"] = r[l].toLowerCase();
    }i.fn.init.prototype = i.fn, t.Velocity = { Utilities: i };
  }
}(window), function (t) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t();
}(function () {
  return function (t, e, i, n) {
    function o(t) {
      for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
        var o = t[e];o && n.push(o);
      }return n;
    }function a(t) {
      return m.isWrapped(t) ? t = [].slice.call(t) : m.isNode(t) && (t = [t]), t;
    }function s(t) {
      var e = d.data(t, "velocity");return null === e ? n : e;
    }function r(t) {
      return function (e) {
        return Math.round(e * t) * (1 / t);
      };
    }function l(t, i, n, o) {
      function a(t, e) {
        return 1 - 3 * e + 3 * t;
      }function s(t, e) {
        return 3 * e - 6 * t;
      }function r(t) {
        return 3 * t;
      }function l(t, e, i) {
        return ((a(e, i) * t + s(e, i)) * t + r(e)) * t;
      }function c(t, e, i) {
        return 3 * a(e, i) * t * t + 2 * s(e, i) * t + r(e);
      }function u(e, i) {
        for (var o = 0; m > o; ++o) {
          var a = c(i, t, n);if (0 === a) return i;i -= (l(i, t, n) - e) / a;
        }return i;
      }function h() {
        for (var e = 0; b > e; ++e) {
          S[e] = l(e * w, t, n);
        }
      }function d(e, i, o) {
        var a,
            s,
            r = 0;do {
          s = i + (o - i) / 2, a = l(s, t, n) - e, a > 0 ? o = s : i = s;
        } while (Math.abs(a) > g && ++r < y);return s;
      }function p(e) {
        for (var i = 0, o = 1, a = b - 1; o != a && S[o] <= e; ++o) {
          i += w;
        }--o;var s = (e - S[o]) / (S[o + 1] - S[o]),
            r = i + s * w,
            l = c(r, t, n);return l >= v ? u(e, r) : 0 == l ? r : d(e, i, i + w);
      }function f() {
        k = !0, (t != i || n != o) && h();
      }var m = 4,
          v = .001,
          g = 1e-7,
          y = 10,
          b = 11,
          w = 1 / (b - 1),
          x = "Float32Array" in e;if (4 !== arguments.length) return !1;for (var C = 0; 4 > C; ++C) {
        if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
      }t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);var S = x ? new Float32Array(b) : new Array(b),
          k = !1,
          P = function P(e) {
        return k || f(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), i, o);
      };P.getControlPoints = function () {
        return [{ x: t, y: i }, { x: n, y: o }];
      };var T = "generateBezier(" + [t, i, n, o] + ")";return P.toString = function () {
        return T;
      }, P;
    }function c(t, e) {
      var i = t;return m.isString(t) ? b.Easings[t] || (i = !1) : i = m.isArray(t) && 1 === t.length ? r.apply(null, t) : m.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : !(!m.isArray(t) || 4 !== t.length) && l.apply(null, t), i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i;
    }function u(t) {
      if (t) {
        var e = new Date().getTime(),
            i = b.State.calls.length;i > 1e4 && (b.State.calls = o(b.State.calls));for (var a = 0; i > a; a++) {
          if (b.State.calls[a]) {
            var r = b.State.calls[a],
                l = r[0],
                c = r[2],
                p = r[3],
                f = !!p,
                v = null;p || (p = b.State.calls[a][3] = e - 16);for (var g = Math.min((e - p) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
              var C = l[y],
                  k = C.element;if (s(k)) {
                var P = !1;if (c.display !== n && null !== c.display && "none" !== c.display) {
                  if ("flex" === c.display) {
                    var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];d.each(T, function (t, e) {
                      x.setPropertyValue(k, "display", e);
                    });
                  }x.setPropertyValue(k, "display", c.display);
                }c.visibility !== n && "hidden" !== c.visibility && x.setPropertyValue(k, "visibility", c.visibility);for (var E in C) {
                  if ("element" !== E) {
                    var A,
                        I = C[E],
                        M = m.isString(I.easing) ? b.Easings[I.easing] : I.easing;if (1 === g) A = I.endValue;else {
                      var L = I.endValue - I.startValue;if (A = I.startValue + L * M(g, c, L), !f && A === I.currentValue) continue;
                    }if (I.currentValue = A, "tween" === E) v = A;else {
                      if (x.Hooks.registered[E]) {
                        var O = x.Hooks.getRoot(E),
                            R = s(k).rootPropertyValueCache[O];R && (I.rootPropertyValue = R);
                      }var F = x.setPropertyValue(k, E, I.currentValue + (0 === parseFloat(A) ? "" : I.unitType), I.rootPropertyValue, I.scrollData);x.Hooks.registered[E] && (s(k).rootPropertyValueCache[O] = x.Normalizations.registered[O] ? x.Normalizations.registered[O]("extract", null, F[1]) : F[1]), "transform" === F[0] && (P = !0);
                    }
                  }
                }c.mobileHA && s(k).transformCache.translate3d === n && (s(k).transformCache.translate3d = "(0px, 0px, 0px)", P = !0), P && x.flushTransformCache(k);
              }
            }c.display !== n && "none" !== c.display && (b.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[a][2].visibility = !1), c.progress && c.progress.call(r[1], r[1], g, Math.max(0, p + c.duration - e), p, v), 1 === g && h(a);
          }
        }
      }b.State.isTicking && S(u);
    }function h(t, e) {
      if (!b.State.calls[t]) return !1;for (var i = b.State.calls[t][0], o = b.State.calls[t][1], a = b.State.calls[t][2], r = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
        var h = i[c].element;if (e || a.loop || ("none" === a.display && x.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(h, "visibility", a.visibility)), a.loop !== !0 && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && s(h)) {
          s(h).isAnimating = !1, s(h).rootPropertyValueCache = {};var p = !1;d.each(x.Lists.transforms3D, function (t, e) {
            var i = /^scale/.test(e) ? 1 : 0,
                o = s(h).transformCache[e];s(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (p = !0, delete s(h).transformCache[e]);
          }), a.mobileHA && (p = !0, delete s(h).transformCache.translate3d), p && x.flushTransformCache(h), x.Values.removeClass(h, "velocity-animating");
        }if (!e && a.complete && !a.loop && c === u - 1) try {
          a.complete.call(o, o);
        } catch (t) {
          setTimeout(function () {
            throw t;
          }, 1);
        }r && a.loop !== !0 && r(o), s(h) && a.loop === !0 && !e && (d.each(s(h).tweensContainer, function (t, e) {
          /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100);
        }), b(h, "reverse", { loop: !0, delay: a.delay })), a.queue !== !1 && d.dequeue(h, a.queue);
      }b.State.calls[t] = !1;for (var f = 0, m = b.State.calls.length; m > f; f++) {
        if (b.State.calls[f] !== !1) {
          l = !0;break;
        }
      }l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
    }var d,
        p = function () {
      if (i.documentMode) return i.documentMode;for (var t = 7; t > 4; t--) {
        var e = i.createElement("div");if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t;
      }return n;
    }(),
        f = function () {
      var t = 0;return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
        var i,
            n = new Date().getTime();return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function () {
          e(n + i);
        }, i);
      };
    }(),
        m = { isString: function isString(t) {
        return "string" == typeof t;
      }, isArray: Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      }, isFunction: function isFunction(t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      }, isNode: function isNode(t) {
        return t && t.nodeType;
      }, isNodeList: function isNodeList(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == _typeof(t[0]) && t[0].nodeType > 0);
      }, isWrapped: function isWrapped(t) {
        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t));
      }, isSVG: function isSVG(t) {
        return e.SVGElement && t instanceof e.SVGElement;
      }, isEmptyObject: function isEmptyObject(t) {
        for (var e in t) {
          return !1;
        }return !0;
      } },
        v = !1;if (t.fn && t.fn.jquery ? (d = t, v = !0) : d = e.Velocity.Utilities, 8 >= p && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= p) return void (jQuery.fn.velocity = jQuery.fn.animate);var g = 400,
        y = "swing",
        b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: e.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: i.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: d, Redirects: {}, Easings: {}, Promise: e.Promise, defaults: { queue: "", duration: g, easing: y, begin: n, complete: n, progress: n, display: n, visibility: n, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(t) {
        d.data(t, "velocity", { isSVG: m.isSVG(t), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
      }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var w = function () {
      function t(t) {
        return -t.tension * t.x - t.friction * t.v;
      }function e(e, i, n) {
        var o = { x: e.x + n.dx * i, v: e.v + n.dv * i, tension: e.tension, friction: e.friction };return { dx: o.v, dv: t(o) };
      }function i(i, n) {
        var o = { dx: i.v, dv: t(i) },
            a = e(i, .5 * n, o),
            s = e(i, .5 * n, a),
            r = e(i, n, s),
            l = 1 / 6 * (o.dx + 2 * (a.dx + s.dx) + r.dx),
            c = 1 / 6 * (o.dv + 2 * (a.dv + s.dv) + r.dv);return i.x = i.x + l * n, i.v = i.v + c * n, i;
      }return function t(e, n, o) {
        var a,
            s,
            r,
            l = { x: -1, v: 0, tension: null, friction: null },
            c = [0],
            u = 0;for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = e, l.friction = n, a = null !== o, a ? (u = t(e, n), s = u / o * .016) : s = .016; r = i(r || l, s), c.push(1 + r.x), u += 16, Math.abs(r.x) > 1e-4 && Math.abs(r.v) > 1e-4;) {}return a ? function (t) {
          return c[t * (c.length - 1) | 0];
        } : u;
      };
    }();b.Easings = { linear: function linear(t) {
        return t;
      }, swing: function swing(t) {
        return .5 - Math.cos(t * Math.PI) / 2;
      }, spring: function spring(t) {
        return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t);
      } }, d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
      b.Easings[e[0]] = l.apply(null, e[1]);
    });var x = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
          for (var t = 0; t < x.Lists.colors.length; t++) {
            var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e];
          }var i, n, o;if (p) for (i in x.Hooks.templates) {
            n = x.Hooks.templates[i], o = n[0].split(" ");var a = n[1].match(x.RegEx.valueSplit);"Color" === o[0] && (o.push(o.shift()), a.push(a.shift()), x.Hooks.templates[i] = [o.join(" "), a.join(" ")]);
          }for (i in x.Hooks.templates) {
            n = x.Hooks.templates[i], o = n[0].split(" ");for (var t in o) {
              var s = i + o[t],
                  r = t;x.Hooks.registered[s] = [i, r];
            }
          }
        }, getRoot: function getRoot(t) {
          var e = x.Hooks.registered[t];return e ? e[0] : t;
        }, cleanRootPropertyValue: function cleanRootPropertyValue(t, e) {
          return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e;
        }, extractValue: function extractValue(t, e) {
          var i = x.Hooks.registered[t];if (i) {
            var n = i[0],
                o = i[1];return e = x.Hooks.cleanRootPropertyValue(n, e), e.toString().match(x.RegEx.valueSplit)[o];
          }return e;
        }, injectValue: function injectValue(t, e, i) {
          var n = x.Hooks.registered[t];if (n) {
            var o,
                a = n[0],
                s = n[1];return i = x.Hooks.cleanRootPropertyValue(a, i), o = i.toString().match(x.RegEx.valueSplit), o[s] = e, o.join(" ");
          }return i;
        } }, Normalizations: { registered: { clip: function clip(t, e, i) {
            switch (t) {case "name":
                return "clip";case "extract":
                var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;case "inject":
                return "rect(" + i + ")";}
          }, blur: function blur(t, e, i) {
            switch (t) {case "name":
                return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                var n = parseFloat(i);if (!n && 0 !== n) {
                  var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n = o ? o[1] : 0;
                }return n;case "inject":
                return parseFloat(i) ? "blur(" + i + ")" : "none";}
          }, opacity: function opacity(t, e, i) {
            if (8 >= p) switch (t) {case "name":
                return "filter";case "extract":
                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);return i = n ? n[1] / 100 : 1;case "inject":
                return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")";} else switch (t) {case "name":
                return "opacity";case "extract":
                return i;case "inject":
                return i;}
          } }, register: function register() {
          9 >= p || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));for (var t = 0; t < x.Lists.transformsBase.length; t++) {
            !function () {
              var e = x.Lists.transformsBase[t];x.Normalizations.registered[e] = function (t, i, o) {
                switch (t) {case "name":
                    return "transform";case "extract":
                    return s(i) === n || s(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : s(i).transformCache[e].replace(/[()]/g, "");case "inject":
                    var a = !1;switch (e.substr(0, e.length - 1)) {case "translate":
                        a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case "scal":case "scale":
                        b.State.isAndroid && s(i).transformCache[e] === n && 1 > o && (o = 1), a = !/(\d)$/i.test(o);break;case "skew":
                        a = !/(deg|\d)$/i.test(o);break;case "rotate":
                        a = !/(deg|\d)$/i.test(o);}return a || (s(i).transformCache[e] = "(" + o + ")"), s(i).transformCache[e];}
              };
            }();
          }for (var t = 0; t < x.Lists.colors.length; t++) {
            !function () {
              var e = x.Lists.colors[t];x.Normalizations.registered[e] = function (t, i, o) {
                switch (t) {case "name":
                    return e;case "extract":
                    var a;if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;else {
                      var s,
                          r = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(o) ? s = r[o] !== n ? r[o] : r.black : x.RegEx.isHex.test(o) ? s = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = r.black), a = (s || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }return 8 >= p || 3 !== a.split(" ").length || (a += " 1"), a;case "inject":
                    return 8 >= p ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
              };
            }();
          }
        } }, Names: { camelCase: function camelCase(t) {
          return t.replace(/-(\w)/g, function (t, e) {
            return e.toUpperCase();
          });
        }, SVGAttribute: function SVGAttribute(t) {
          var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (p || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t);
        }, prefixCheck: function prefixCheck(t) {
          if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
            var o;if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function (t) {
              return t.toUpperCase();
            }), m.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[t] = o, [o, !0];
          }return [t, !1];
        } }, Values: { hexToRgb: function hexToRgb(t) {
          var e,
              i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
            return e + e + i + i + n + n;
          }), e = i.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0];
        }, isCSSNullValue: function isCSSNullValue(t) {
          return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t);
        }, getUnitType: function getUnitType(t) {
          return (/^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
          );
        }, getDisplayType: function getDisplayType(t) {
          var e = t && t.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
          );
        }, addClass: function addClass(t, e) {
          t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e;
        }, removeClass: function removeClass(t, e) {
          t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
        } }, getPropertyValue: function getPropertyValue(t, i, o, a) {
        function r(t, i) {
          function o() {
            c && x.setPropertyValue(t, "display", "none");
          }var l = 0;if (8 >= p) l = d.css(t, i);else {
            var c = !1;if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !a) {
              if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);return o(), u;
              }if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                var h = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);return o(), h;
              }
            }var f;f = s(t) === n ? e.getComputedStyle(t, null) : s(t).computedStyle ? s(t).computedStyle : s(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i], ("" === l || null === l) && (l = t.style[i]), o();
          }if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
            var m = r(t, "position");("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = d(t).position()[i] + "px");
          }return l;
        }var l;if (x.Hooks.registered[i]) {
          var c = i,
              u = x.Hooks.getRoot(c);o === n && (o = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (o = x.Normalizations.registered[u]("extract", t, o)), l = x.Hooks.extractValue(c, o);
        } else if (x.Normalizations.registered[i]) {
          var h, f;h = x.Normalizations.registered[i]("name", t), "transform" !== h && (f = r(t, x.Names.prefixCheck(h)[0]), x.Values.isCSSNullValue(f) && x.Hooks.templates[i] && (f = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", t, f);
        }if (!/^[\d-]/.test(l)) if (s(t) && s(t).isSVG && x.Names.SVGAttribute(i)) {
          if (/^(height|width)$/i.test(i)) try {
            l = t.getBBox()[i];
          } catch (t) {
            l = 0;
          } else l = t.getAttribute(i);
        } else l = r(t, x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l;
      }, setPropertyValue: function setPropertyValue(t, i, n, o, a) {
        var r = i;if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? e.scrollTo(n, a.alternateValue) : e.scrollTo(a.alternateValue, n);else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t)) x.Normalizations.registered[i]("inject", t, n), r = "transform", n = s(t).transformCache[i];else {
          if (x.Hooks.registered[i]) {
            var l = i,
                c = x.Hooks.getRoot(i);o = o || x.getPropertyValue(t, c), n = x.Hooks.injectValue(l, n, o), i = c;
          }if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", t, n), i = x.Normalizations.registered[i]("name", t)), r = x.Names.prefixCheck(i)[0], 8 >= p) try {
            t.style[r] = n;
          } catch (t) {
            b.debug && console.log("Browser does not support [" + n + "] for [" + r + "]");
          } else s(t) && s(t).isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[r] = n;b.debug >= 2 && console.log("Set " + i + " (" + r + "): " + n);
        }return [r, n];
      }, flushTransformCache: function flushTransformCache(t) {
        function e(e) {
          return parseFloat(x.getPropertyValue(t, e));
        }var i = "";if ((p || b.State.isAndroid && !b.State.isChrome) && s(t).isSVG) {
          var n = { translate: [e("translateX"), e("translateY")], skewX: [e("skewX")], skewY: [e("skewY")], scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")], rotate: [e("rotateZ"), 0, 0] };d.each(s(t).transformCache, function (t) {
            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t]);
          });
        } else {
          var o, a;d.each(s(t).transformCache, function (e) {
            return o = s(t).transformCache[e], "transformPerspective" === e ? (a = o, !0) : (9 === p && "rotateZ" === e && (e = "rotate"), void (i += e + o + " "));
          }), a && (i = "perspective" + a + " " + i);
        }x.setPropertyValue(t, "transform", i);
      } };x.Hooks.register(), x.Normalizations.register(), b.hook = function (t, e, i) {
      var o = n;return t = a(t), d.each(t, function (t, a) {
        if (s(a) === n && b.init(a), i === n) o === n && (o = b.CSS.getPropertyValue(a, e));else {
          var r = b.CSS.setPropertyValue(a, e, i);"transform" === r[0] && b.CSS.flushTransformCache(a), o = r;
        }
      }), o;
    };var C = function C() {
      function t() {
        return r ? E.promise || null : l;
      }function o() {
        function t(t) {
          function h(t, e) {
            var i = n,
                o = n,
                s = n;return m.isArray(t) ? (i = t[0], !m.isArray(t[1]) && /^[\d-]/.test(t[1]) || m.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? s = t[1] : (m.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || m.isArray(t[1])) && (o = e ? t[1] : c(t[1], r.duration), t[2] !== n && (s = t[2]))) : i = t, e || (o = o || r.easing), m.isFunction(i) && (i = i.call(a, k, S)), m.isFunction(s) && (s = s.call(a, k, S)), [i || 0, o, s];
          }function p(t, e) {
            var i, n;return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
              return i = t, "";
            }), i || (i = x.Values.getUnitType(t)), [n, i];
          }if (r.begin && 0 === k) try {
            r.begin.call(f, f);
          } catch (t) {
            setTimeout(function () {
              throw t;
            }, 1);
          }if ("scroll" === A) {
            var g,
                w,
                C,
                P = /^x$/i.test(r.axis) ? "Left" : "Top",
                T = parseFloat(r.offset) || 0;r.container ? m.isWrapped(r.container) || m.isNode(r.container) ? (r.container = r.container[0] || r.container, g = r.container["scroll" + P], C = g + d(a).position()[P.toLowerCase()] + T) : r.container = null : (g = b.State.scrollAnchor[b.State["scrollProperty" + P]], w = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === P ? "Top" : "Left")]], C = d(a).offset()[P.toLowerCase()] + T), l = { scroll: { rootPropertyValue: !1, startValue: g, currentValue: g, endValue: C, unitType: "", easing: r.easing, scrollData: { container: r.container, direction: P, alternateValue: w } }, element: a }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a);
          } else if ("reverse" === A) {
            if (!s(a).tweensContainer) return void d.dequeue(a, r.queue);"none" === s(a).opts.display && (s(a).opts.display = "auto"), "hidden" === s(a).opts.visibility && (s(a).opts.visibility = "visible"), s(a).opts.loop = !1, s(a).opts.begin = null, s(a).opts.complete = null, y.easing || delete r.easing, y.duration || delete r.duration, r = d.extend({}, s(a).opts, r);var I = d.extend(!0, {}, s(a).tweensContainer);for (var M in I) {
              if ("element" !== M) {
                var L = I[M].startValue;I[M].startValue = I[M].currentValue = I[M].endValue, I[M].endValue = L, m.isEmptyObject(y) || (I[M].easing = r.easing), b.debug && console.log("reverse tweensContainer (" + M + "): " + JSON.stringify(I[M]), a);
              }
            }l = I;
          } else if ("start" === A) {
            var I;s(a).tweensContainer && s(a).isAnimating === !0 && (I = s(a).tweensContainer), d.each(v, function (t, e) {
              if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                var i = h(e, !0),
                    o = i[0],
                    a = i[1],
                    s = i[2];if (x.RegEx.isHex.test(o)) {
                  for (var r = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(o), c = s ? x.Values.hexToRgb(s) : n, u = 0; u < r.length; u++) {
                    var d = [l[u]];a && d.push(a), c !== n && d.push(c[u]), v[t + r[u]] = d;
                  }delete v[t];
                }
              }
            });for (var O in v) {
              var R = h(v[O]),
                  W = R[0],
                  z = R[1],
                  H = R[2];O = x.Names.camelCase(O);var _ = x.Hooks.getRoot(O),
                  Y = !1;if (s(a).isSVG || "tween" === _ || x.Names.prefixCheck(_)[1] !== !1 || x.Normalizations.registered[_] !== n) {
                (r.display !== n && null !== r.display && "none" !== r.display || r.visibility !== n && "hidden" !== r.visibility) && /opacity|filter/.test(O) && !H && 0 !== W && (H = 0), r._cacheValues && I && I[O] ? (H === n && (H = I[O].endValue + I[O].unitType), Y = s(a).rootPropertyValueCache[_]) : x.Hooks.registered[O] ? H === n ? (Y = x.getPropertyValue(a, _), H = x.getPropertyValue(a, O, Y)) : Y = x.Hooks.templates[_][1] : H === n && (H = x.getPropertyValue(a, O));var X,
                    V,
                    N,
                    B = !1;if (X = p(O, H), H = X[0], N = X[1], X = p(O, W), W = X[0].replace(/^([+-\/*])=/, function (t, e) {
                  return B = e, "";
                }), V = X[1], H = parseFloat(H) || 0, W = parseFloat(W) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(O) ? (W /= 100, V = "em") : /^scale/.test(O) ? (W /= 100, V = "") : /(Red|Green|Blue)$/i.test(O) && (W = W / 100 * 255, V = "")), /[\/*]/.test(B)) V = N;else if (N !== V && 0 !== H) if (0 === W) V = N;else {
                  o = o || function () {
                    var t = { myParent: a.parentNode || i.body, position: x.getPropertyValue(a, "position"), fontSize: x.getPropertyValue(a, "fontSize") },
                        n = t.position === F.lastPosition && t.myParent === F.lastParent,
                        o = t.fontSize === F.lastFontSize;F.lastParent = t.myParent, F.lastPosition = t.position, F.lastFontSize = t.fontSize;var r = 100,
                        l = {};if (o && n) l.emToPx = F.lastEmToPx, l.percentToPxWidth = F.lastPercentToPxWidth, l.percentToPxHeight = F.lastPercentToPxHeight;else {
                      var c = s(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");b.init(c), t.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                        b.CSS.setPropertyValue(c, e, "hidden");
                      }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                        b.CSS.setPropertyValue(c, e, r + "%");
                      }), b.CSS.setPropertyValue(c, "paddingLeft", r + "em"), l.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / r, l.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / r, l.emToPx = F.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / r, t.myParent.removeChild(c);
                    }return null === F.remToPx && (F.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === F.vwToPx && (F.vwToPx = parseFloat(e.innerWidth) / 100, F.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = F.remToPx, l.vwToPx = F.vwToPx, l.vhToPx = F.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l;
                  }();var j = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";switch (N) {case "%":
                      H *= "x" === j ? o.percentToPxWidth : o.percentToPxHeight;break;case "px":
                      break;default:
                      H *= o[N + "ToPx"];}switch (V) {case "%":
                      H *= 1 / ("x" === j ? o.percentToPxWidth : o.percentToPxHeight);break;case "px":
                      break;default:
                      H *= 1 / o[V + "ToPx"];}
                }switch (B) {case "+":
                    W = H + W;break;case "-":
                    W = H - W;break;case "*":
                    W *= H;break;case "/":
                    W = H / W;}l[O] = { rootPropertyValue: Y, startValue: H, currentValue: H, endValue: W, unitType: V, easing: z }, b.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), a);
              } else b.debug && console.log("Skipping [" + _ + "] due to a lack of browser support.");
            }l.element = a;
          }l.element && (x.Values.addClass(a, "velocity-animating"), D.push(l), "" === r.queue && (s(a).tweensContainer = l, s(a).opts = r), s(a).isAnimating = !0, k === S - 1 ? (b.State.calls.push([D, f, r, null, E.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : k++);
        }var o,
            a = this,
            r = d.extend({}, b.defaults, y),
            l = {};switch (s(a) === n && b.init(a), parseFloat(r.delay) && r.queue !== !1 && d.queue(a, r.queue, function (t) {
          b.velocityQueueEntryFlag = !0, s(a).delayTimer = { setTimeout: setTimeout(t, parseFloat(r.delay)), next: t };
        }), r.duration.toString().toLowerCase()) {case "fast":
            r.duration = 200;break;case "normal":
            r.duration = g;break;case "slow":
            r.duration = 600;break;default:
            r.duration = parseFloat(r.duration) || 1;}b.mock !== !1 && (b.mock === !0 ? r.duration = r.delay = 1 : (r.duration *= parseFloat(b.mock) || 1, r.delay *= parseFloat(b.mock) || 1)), r.easing = c(r.easing, r.duration), r.begin && !m.isFunction(r.begin) && (r.begin = null), r.progress && !m.isFunction(r.progress) && (r.progress = null), r.complete && !m.isFunction(r.complete) && (r.complete = null), r.display !== n && null !== r.display && (r.display = r.display.toString().toLowerCase(), "auto" === r.display && (r.display = b.CSS.Values.getDisplayType(a))), r.visibility !== n && null !== r.visibility && (r.visibility = r.visibility.toString().toLowerCase()), r.mobileHA = r.mobileHA && b.State.isMobile && !b.State.isGingerbread, r.queue === !1 ? r.delay ? setTimeout(t, r.delay) : t() : d.queue(a, r.queue, function (e, i) {
          return i === !0 ? (E.promise && E.resolver(f), !0) : (b.velocityQueueEntryFlag = !0, void t(e));
        }), "" !== r.queue && "fx" !== r.queue || "inprogress" === d.queue(a)[0] || d.dequeue(a);
      }var r,
          l,
          p,
          f,
          v,
          y,
          w = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));if (m.isWrapped(this) ? (r = !1, p = 0, f = this, l = this) : (r = !0, p = 1, f = w ? arguments[0].elements || arguments[0].e : arguments[0]), f = a(f)) {
        w ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[p], y = arguments[p + 1]);var S = f.length,
            k = 0;if (!/^(stop|finish)$/i.test(v) && !d.isPlainObject(y)) {
          var P = p + 1;y = {};for (var T = P; T < arguments.length; T++) {
            m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? y.easing = arguments[T] : m.isFunction(arguments[T]) && (y.complete = arguments[T]) : y.duration = arguments[T];
          }
        }var E = { promise: null, resolver: null, rejecter: null };r && b.Promise && (E.promise = new b.Promise(function (t, e) {
          E.resolver = t, E.rejecter = e;
        }));var A;switch (v) {case "scroll":
            A = "scroll";break;case "reverse":
            A = "reverse";break;case "finish":case "stop":
            d.each(f, function (t, e) {
              s(e) && s(e).delayTimer && (clearTimeout(s(e).delayTimer.setTimeout), s(e).delayTimer.next && s(e).delayTimer.next(), delete s(e).delayTimer);
            });var I = [];return d.each(b.State.calls, function (t, e) {
              e && d.each(e[1], function (i, o) {
                var a = y === n ? "" : y;return a !== !0 && e[2].queue !== a && (y !== n || e[2].queue !== !1) || void d.each(f, function (i, n) {
                  n === o && ((y === !0 || m.isString(y)) && (d.each(d.queue(n, m.isString(y) ? y : ""), function (t, e) {
                    m.isFunction(e) && e(null, !0);
                  }), d.queue(n, m.isString(y) ? y : "", [])), "stop" === v ? (s(n) && s(n).tweensContainer && a !== !1 && d.each(s(n).tweensContainer, function (t, e) {
                    e.endValue = e.currentValue;
                  }), I.push(t)) : "finish" === v && (e[2].duration = 1));
                });
              });
            }), "stop" === v && (d.each(I, function (t, e) {
              h(e, !0);
            }), E.promise && E.resolver(f)), t();default:
            if (!d.isPlainObject(v) || m.isEmptyObject(v)) {
              if (m.isString(v) && b.Redirects[v]) {
                var M = d.extend({}, y),
                    L = M.duration,
                    O = M.delay || 0;return M.backwards === !0 && (f = d.extend(!0, [], f).reverse()), d.each(f, function (t, e) {
                  parseFloat(M.stagger) ? M.delay = O + parseFloat(M.stagger) * t : m.isFunction(M.stagger) && (M.delay = O + M.stagger.call(e, t, S)), M.drag && (M.duration = parseFloat(L) || (/^(callout|transition)/.test(v) ? 1e3 : g), M.duration = Math.max(M.duration * (M.backwards ? 1 - t / S : (t + 1) / S), .75 * M.duration, 200)), b.Redirects[v].call(e, e, M || {}, t, S, f, E.promise ? E : n);
                }), t();
              }var R = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";return E.promise ? E.rejecter(new Error(R)) : console.log(R), t();
            }A = "start";}var F = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
            D = [];d.each(f, function (t, e) {
          m.isNode(e) && o.call(e);
        });var W,
            M = d.extend({}, b.defaults, y);if (M.loop = parseInt(M.loop), W = 2 * M.loop - 1, M.loop) for (var z = 0; W > z; z++) {
          var H = { delay: M.delay, progress: M.progress };z === W - 1 && (H.display = M.display, H.visibility = M.visibility, H.complete = M.complete), C(f, "reverse", H);
        }return t();
      }
    };b = d.extend(C, b), b.animate = C;var S = e.requestAnimationFrame || f;return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
      i.hidden ? (S = function S(t) {
        return setTimeout(function () {
          t(!0);
        }, 16);
      }, u()) : S = e.requestAnimationFrame || f;
    }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function (t, e) {
      b.Redirects["slide" + e] = function (t, i, o, a, s, r) {
        var l = d.extend({}, i),
            c = l.begin,
            u = l.complete,
            h = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
            p = {};l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
          c && c.call(s, s);for (var i in h) {
            p[i] = t.style[i];var n = b.CSS.getPropertyValue(t, i);h[i] = "Down" === e ? [n, 0] : [0, n];
          }p.overflow = t.style.overflow, t.style.overflow = "hidden";
        }, l.complete = function () {
          for (var e in p) {
            t.style[e] = p[e];
          }u && u.call(s, s), r && r.resolver(s);
        }, b(t, h, l);
      };
    }), d.each(["In", "Out"], function (t, e) {
      b.Redirects["fade" + e] = function (t, i, o, a, s, r) {
        var l = d.extend({}, i),
            c = { opacity: "In" === e ? 1 : 0 },
            u = l.complete;l.complete = o !== a - 1 ? l.begin = null : function () {
          u && u.call(s, s), r && r.resolver(s);
        }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, c, l);
      };
    }), b;
  }(window.jQuery || window.Zepto || window, window, document);
})), function () {
  "use strict";
  var t = this,
      e = t.Chart,
      i = function i(t) {
    this.canvas = t.canvas, this.ctx = t;var e = function e(t, _e2) {
      return t["offset" + _e2] ? t["offset" + _e2] : document.defaultView.getComputedStyle(t).getPropertyValue(_e2);
    };this.width = e(t.canvas, "Width") || t.canvas.width, this.height = e(t.canvas, "Height") || t.canvas.height;return this.width = t.canvas.width, this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this;
  };i.defaults = { global: { animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", showScale: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleIntegersOnly: !0, scaleBeginAtZero: !1, scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", responsive: !1, maintainAspectRatio: !0, showTooltips: !0, customTooltips: !1, tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"], tooltipFillColor: "rgba(0,0,0,0.8)", tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipFontSize: 14, tooltipFontStyle: "normal", tooltipFontColor: "#fff", tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipTitleFontSize: 14, tooltipTitleFontStyle: "bold", tooltipTitleFontColor: "#fff", tooltipTitleTemplate: "<%= label%>", tooltipYPadding: 6, tooltipXPadding: 6, tooltipCaretSize: 8, tooltipCornerRadius: 6, tooltipXOffset: 10, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", multiTooltipTemplate: "<%= value %>", multiTooltipKeyBackground: "#fff", segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"], segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"], onAnimationProgress: function onAnimationProgress() {}, onAnimationComplete: function onAnimationComplete() {} } }, i.types = {};var n = i.helpers = {},
      o = n.each = function (t, e, i) {
    var n = Array.prototype.slice.call(arguments, 3);if (t) if (t.length === +t.length) {
      var o;for (o = 0; o < t.length; o++) {
        e.apply(i, [t[o], o].concat(n));
      }
    } else for (var a in t) {
      e.apply(i, [t[a], a].concat(n));
    }
  },
      a = n.clone = function (t) {
    var e = {};return o(t, function (i, n) {
      t.hasOwnProperty(n) && (e[n] = i);
    }), e;
  },
      s = n.extend = function (t) {
    return o(Array.prototype.slice.call(arguments, 1), function (e) {
      o(e, function (i, n) {
        e.hasOwnProperty(n) && (t[n] = i);
      });
    }), t;
  },
      r = n.merge = function (t, e) {
    var i = Array.prototype.slice.call(arguments, 0);return i.unshift({}), s.apply(null, i);
  },
      l = n.indexOf = function (t, e) {
    if (Array.prototype.indexOf) return t.indexOf(e);for (var i = 0; i < t.length; i++) {
      if (t[i] === e) return i;
    }return -1;
  },
      c = (n.where = function (t, e) {
    var i = [];return n.each(t, function (t) {
      e(t) && i.push(t);
    }), i;
  }, n.findNextWhere = function (t, e, i) {
    i || (i = -1);for (var n = i + 1; n < t.length; n++) {
      var o = t[n];if (e(o)) return o;
    }
  }, n.findPreviousWhere = function (t, e, i) {
    i || (i = t.length);for (var n = i - 1; n >= 0; n--) {
      var o = t[n];if (e(o)) return o;
    }
  }, n.inherits = function (t) {
    var e = this,
        i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
      return e.apply(this, arguments);
    },
        n = function n() {
      this.constructor = i;
    };return n.prototype = e.prototype, i.prototype = new n(), i.extend = c, t && s(i.prototype, t), i.__super__ = e.prototype, i;
  }),
      u = n.noop = function () {},
      h = n.uid = function () {
    var t = 0;return function () {
      return "chart-" + t++;
    };
  }(),
      d = n.warn = function (t) {
    window.console && "function" == typeof window.console.warn && console.warn(t);
  },
      p = n.amd = "function" == "function" && __webpack_require__(6),
      f = n.isNumber = function (t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  },
      m = n.max = function (t) {
    return Math.max.apply(Math, t);
  },
      v = n.min = function (t) {
    return Math.min.apply(Math, t);
  },
      g = (n.cap = function (t, e, i) {
    if (f(e)) {
      if (t > e) return e;
    } else if (f(i) && t < i) return i;return t;
  }, n.getDecimalPlaces = function (t) {
    if (t % 1 != 0 && f(t)) {
      var e = t.toString();if (e.indexOf("e-") < 0) return e.split(".")[1].length;if (e.indexOf(".") < 0) return parseInt(e.split("e-")[1]);var i = e.split(".")[1].split("e-");return i[0].length + parseInt(i[1]);
    }return 0;
  }),
      y = n.radians = function (t) {
    return t * (Math.PI / 180);
  },
      b = (n.getAngleFromPoint = function (t, e) {
    var i = e.x - t.x,
        n = e.y - t.y,
        o = Math.sqrt(i * i + n * n),
        a = 2 * Math.PI + Math.atan2(n, i);return i < 0 && n < 0 && (a += 2 * Math.PI), { angle: a, distance: o };
  }, n.aliasPixel = function (t) {
    return t % 2 == 0 ? 0 : .5;
  }),
      w = (n.splineCurve = function (t, e, i, n) {
    var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
        a = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
        s = n * o / (o + a),
        r = n * a / (o + a);return { inner: { x: e.x - s * (i.x - t.x), y: e.y - s * (i.y - t.y) }, outer: { x: e.x + r * (i.x - t.x), y: e.y + r * (i.y - t.y) } };
  }, n.calculateOrderOfMagnitude = function (t) {
    return Math.floor(Math.log(t) / Math.LN10);
  }),
      x = (n.calculateScaleRange = function (t, e, i, n, a) {
    var s = Math.floor(e / (1.5 * i)),
        r = 2 >= s,
        l = [];o(t, function (t) {
      null == t || l.push(t);
    });var c = v(l),
        u = m(l);u === c && (u += .5, c >= .5 && !n ? c -= .5 : u += .5);for (var h = Math.abs(u - c), d = w(h), p = Math.ceil(u / (1 * Math.pow(10, d))) * Math.pow(10, d), f = n ? 0 : Math.floor(c / (1 * Math.pow(10, d))) * Math.pow(10, d), g = p - f, y = Math.pow(10, d), b = Math.round(g / y); (b > s || 2 * b < s) && !r;) {
      if (b > s) y *= 2, (b = Math.round(g / y)) % 1 != 0 && (r = !0);else if (a && d >= 0) {
        if (y / 2 % 1 != 0) break;y /= 2, b = Math.round(g / y);
      } else y /= 2, b = Math.round(g / y);
    }return r && (b = 2, y = g / b), { steps: b, stepValue: y, min: f, max: f + b * y };
  }, n.template = function (t, e) {
    if (t instanceof Function) return t(e);var i = {};return function (t, e) {
      var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];return e ? n(e) : n;
    }(t, e);
  }),
      C = (n.generateLabels = function (t, e, i, n) {
    var a = new Array(e);return t && o(a, function (e, o) {
      a[o] = x(t, { value: i + n * (o + 1) });
    }), a;
  }, n.easingEffects = { linear: function linear(t) {
      return t;
    }, easeInQuad: function easeInQuad(t) {
      return t * t;
    }, easeOutQuad: function easeOutQuad(t) {
      return -1 * t * (t - 2);
    }, easeInOutQuad: function easeInOutQuad(t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    }, easeInCubic: function easeInCubic(t) {
      return t * t * t;
    }, easeOutCubic: function easeOutCubic(t) {
      return 1 * ((t = t / 1 - 1) * t * t + 1);
    }, easeInOutCubic: function easeInOutCubic(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    }, easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    }, easeOutQuart: function easeOutQuart(t) {
      return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    }, easeInOutQuart: function easeInOutQuart(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    }, easeInQuint: function easeInQuint(t) {
      return 1 * (t /= 1) * t * t * t * t;
    }, easeOutQuint: function easeOutQuint(t) {
      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    }, easeInOutQuint: function easeInOutQuint(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    }, easeInSine: function easeInSine(t) {
      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    }, easeOutSine: function easeOutSine(t) {
      return 1 * Math.sin(t / 1 * (Math.PI / 2));
    }, easeInOutSine: function easeInOutSine(t) {
      return -.5 * (Math.cos(Math.PI * t / 1) - 1);
    }, easeInExpo: function easeInExpo(t) {
      return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    }, easeOutExpo: function easeOutExpo(t) {
      return 1 === t ? 1 : 1 * (1 - Math.pow(2, -10 * t / 1));
    }, easeInOutExpo: function easeInOutExpo(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
    }, easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    }, easeOutCirc: function easeOutCirc(t) {
      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    }, easeInOutCirc: function easeInOutCirc(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, easeInElastic: function easeInElastic(t) {
      var e = 1.70158,
          i = 0,
          n = 1;return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)));
    }, easeOutElastic: function easeOutElastic(t) {
      var e = 1.70158,
          i = 0,
          n = 1;return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1);
    }, easeInOutElastic: function easeInOutElastic(t) {
      var e = 1.70158,
          i = 0,
          n = 1;return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5 * 1), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1);
    }, easeInBack: function easeInBack(t) {
      var e = 1.70158;return 1 * (t /= 1) * t * ((e + 1) * t - e);
    }, easeOutBack: function easeOutBack(t) {
      var e = 1.70158;return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
    }, easeInOutBack: function easeInOutBack(t) {
      var e = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    }, easeInBounce: function easeInBounce(t) {
      return 1 - C.easeOutBounce(1 - t);
    }, easeOutBounce: function easeOutBounce(t) {
      return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t * 1 : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }, easeInOutBounce: function easeInOutBounce(t) {
      return t < .5 ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5;
    } }),
      S = n.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    };
  }(),
      k = (n.cancelAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
      return window.clearTimeout(t, 1e3 / 60);
    };
  }(), n.animationLoop = function (t, e, i, n, o, a) {
    var s = 0,
        r = C[i] || C.linear,
        l = function l() {
      s++;var i = s / e,
          c = r(i);t.call(a, c, i, s), n.call(a, c, i), s < e ? a.animationFrame = S(l) : o.apply(a);
    };S(l);
  }, n.getRelativePosition = function (t) {
    var e,
        i,
        n = t.originalEvent || t,
        o = t.currentTarget || t.srcElement,
        a = o.getBoundingClientRect();return n.touches ? (e = n.touches[0].clientX - a.left, i = n.touches[0].clientY - a.top) : (e = n.clientX - a.left, i = n.clientY - a.top), { x: e, y: i };
  }, n.addEvent = function (t, e, i) {
    t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i;
  }),
      P = n.removeEvent = function (t, e, i) {
    t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = u;
  },
      T = (n.bindEvents = function (t, e, i) {
    t.events || (t.events = {}), o(e, function (e) {
      t.events[e] = function () {
        i.apply(t, arguments);
      }, k(t.chart.canvas, e, t.events[e]);
    });
  }, n.unbindEvents = function (t, e) {
    o(e, function (e, i) {
      P(t.chart.canvas, i, e);
    });
  }),
      E = n.getMaximumWidth = function (t) {
    var e = t.parentNode,
        i = parseInt(I(e, "padding-left")) + parseInt(I(e, "padding-right"));return e.clientWidth - i;
  },
      A = n.getMaximumHeight = function (t) {
    var e = t.parentNode,
        i = parseInt(I(e, "padding-bottom")) + parseInt(I(e, "padding-top"));return e.clientHeight - i;
  },
      I = n.getStyle = function (t, e) {
    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
  },
      M = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function (t) {
    var e = t.ctx,
        i = t.canvas.width,
        n = t.canvas.height;window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio));
  }),
      L = n.clear = function (t) {
    t.ctx.clearRect(0, 0, t.width, t.height);
  },
      O = n.fontString = function (t, e, i) {
    return e + " " + t + "px " + i;
  },
      R = n.longestText = function (t, e, i) {
    t.font = e;var n = 0;return o(i, function (e) {
      var i = t.measureText(e).width;n = i > n ? i : n;
    }), n;
  },
      F = n.drawRoundedRectangle = function (t, e, i, n, o, a) {
    t.beginPath(), t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + o - a), t.quadraticCurveTo(e + n, i + o, e + n - a, i + o), t.lineTo(e + a, i + o), t.quadraticCurveTo(e, i + o, e, i + o - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + a, i), t.closePath();
  };i.instances = {}, i.Type = function (t, e, n) {
    this.options = e, this.chart = n, this.id = h(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t);
  }, s(i.Type.prototype, { initialize: function initialize() {
      return this;
    }, clear: function clear() {
      return L(this.chart), this;
    }, stop: function stop() {
      return i.animationService.cancelAnimation(this), this;
    }, resize: function resize(t) {
      this.stop();var e = this.chart.canvas,
          i = E(this.chart.canvas),
          n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : A(this.chart.canvas);return e.width = this.chart.width = i, e.height = this.chart.height = n, M(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this;
    }, reflow: u, render: function render(t) {
      if (t && this.reflow(), this.options.animation && !t) {
        var e = new i.Animation();e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function (t, e) {
          var i = n.easingEffects[e.easing],
              o = e.currentStep / e.numSteps,
              a = i(o);t.draw(a, o, e.currentStep);
        }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, i.animationService.addAnimation(this, e);
      } else this.draw(), this.options.onAnimationComplete.call(this);return this;
    }, generateLegend: function generateLegend() {
      return x(this.options.legendTemplate, this);
    }, destroy: function destroy() {
      this.clear(), T(this, this.events);var t = this.chart.canvas;t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id];
    }, showTooltip: function showTooltip(t, e) {
      if (void 0 === this.activeElements && (this.activeElements = []), function (t) {
        var e = !1;return t.length !== this.activeElements.length ? e = !0 : (o(t, function (t, i) {
          t !== this.activeElements[i] && (e = !0);
        }, this), e);
      }.call(this, t) || e) {
        if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0) if (this.datasets && this.datasets.length > 1) {
          for (var a, s, r = this.datasets.length - 1; r >= 0 && (a = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, (s = l(a, t[0])) === -1); r--) {}var c = [],
              u = [],
              h = function (t) {
            var e,
                i,
                o,
                a,
                r,
                l = [],
                h = [],
                d = [];return n.each(this.datasets, function (t) {
              e = t.points || t.bars || t.segments, e[s] && e[s].hasValue() && l.push(e[s]);
            }), n.each(l, function (t) {
              h.push(t.x), d.push(t.y), c.push(n.template(this.options.multiTooltipTemplate, t)), u.push({ fill: t._saved.fillColor || t.fillColor, stroke: t._saved.strokeColor || t.strokeColor });
            }, this), r = v(d), o = m(d), a = v(h), i = m(h), { x: a > this.chart.width / 2 ? a : i, y: (r + o) / 2 };
          }.call(this, s);new i.MultiTooltip({ x: h.x, y: h.y, xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, xOffset: this.options.tooltipXOffset, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, titleTextColor: this.options.tooltipTitleFontColor, titleFontFamily: this.options.tooltipTitleFontFamily, titleFontStyle: this.options.tooltipTitleFontStyle, titleFontSize: this.options.tooltipTitleFontSize, cornerRadius: this.options.tooltipCornerRadius, labels: c, legendColors: u, legendColorBackground: this.options.multiTooltipKeyBackground, title: x(this.options.tooltipTitleTemplate, t[0]), chart: this.chart, ctx: this.chart.ctx, custom: this.options.customTooltips }).draw();
        } else o(t, function (t) {
          var e = t.tooltipPosition();new i.Tooltip({ x: Math.round(e.x), y: Math.round(e.y), xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, caretHeight: this.options.tooltipCaretSize, cornerRadius: this.options.tooltipCornerRadius, text: x(this.options.tooltipTemplate, t), chart: this.chart, custom: this.options.customTooltips }).draw();
        }, this);return this;
      }
    }, toBase64Image: function toBase64Image() {
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
    } }), i.Type.extend = function (t) {
    var e = this,
        n = function n() {
      return e.apply(this, arguments);
    };if (n.prototype = a(e.prototype), s(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
      var o = t.name || e.prototype.name,
          l = i.defaults[e.prototype.name] ? a(i.defaults[e.prototype.name]) : {};i.defaults[o] = s(l, t.defaults), i.types[o] = n, i.prototype[o] = function (t, e) {
        return new n(t, r(i.defaults.global, i.defaults[o], e || {}), this);
      };
    } else d("Name not provided for this chart, so it hasn't been registered");return e;
  }, i.Element = function (t) {
    s(this, t), this.initialize.apply(this, arguments), this.save();
  }, s(i.Element.prototype, { initialize: function initialize() {}, restore: function restore(t) {
      return t ? o(t, function (t) {
        this[t] = this._saved[t];
      }, this) : s(this, this._saved), this;
    }, save: function save() {
      return this._saved = a(this), delete this._saved._saved, this;
    }, update: function update(t) {
      return o(t, function (t, e) {
        this._saved[e] = this[e], this[e] = t;
      }, this), this;
    }, transition: function transition(t, e) {
      return o(t, function (t, i) {
        this[i] = (t - this._saved[i]) * e + this._saved[i];
      }, this), this;
    }, tooltipPosition: function tooltipPosition() {
      return { x: this.x, y: this.y };
    }, hasValue: function hasValue() {
      return f(this.value);
    } }), i.Element.extend = c, i.Point = i.Element.extend({ display: !0, inRange: function inRange(t, e) {
      var i = this.hitDetectionRadius + this.radius;return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2);
    }, draw: function draw() {
      if (this.display) {
        var t = this.ctx;t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke();
      }
    } }), i.Arc = i.Element.extend({ inRange: function inRange(t, e) {
      var i = n.getAngleFromPoint(this, { x: t, y: e }),
          o = i.angle % (2 * Math.PI),
          a = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
          s = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
          r = s < a ? o <= s || o >= a : o >= a && o <= s,
          l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;return r && l;
    }, tooltipPosition: function tooltipPosition() {
      var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
          e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;return { x: this.x + Math.cos(t) * e, y: this.y + Math.sin(t) * e };
    }, draw: function draw(t) {
      var e = this.ctx;e.beginPath(), e.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke();
    } }), i.Rectangle = i.Element.extend({ draw: function draw() {
      var t = this.ctx,
          e = this.width / 2,
          i = this.x - e,
          n = this.x + e,
          o = this.base - (this.base - this.y),
          a = this.strokeWidth / 2;this.showStroke && (i += a, n -= a, o += a), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke();
    }, height: function height() {
      return this.base - this.y;
    }, inRange: function inRange(t, e) {
      return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base;
    } }), i.Animation = i.Element.extend({ currentStep: null, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), i.Tooltip = i.Element.extend({ draw: function draw() {
      var t = this.chart.ctx;t.font = O(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";var e = this.caretPadding = 2,
          i = t.measureText(this.text).width + 2 * this.xPadding,
          n = this.fontSize + 2 * this.yPadding,
          o = n + this.caretHeight + e;this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");var a = this.x - i / 2,
          s = this.y - o;if (t.fillStyle = this.fillColor, this.custom) this.custom(this);else {
        switch (this.yAlign) {case "above":
            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();break;case "below":
            s = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill();}switch (this.xAlign) {case "left":
            a = this.x - i + (this.cornerRadius + this.caretHeight);break;case "right":
            a = this.x - (this.cornerRadius + this.caretHeight);}F(t, a, s, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, a + i / 2, s + n / 2);
      }
    } }), i.MultiTooltip = i.Element.extend({ initialize: function initialize() {
      this.font = O(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = O(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;var t = this.ctx.measureText(this.title).width,
          e = R(this.ctx, this.font, this.labels) + this.fontSize + 3,
          i = m([e, t]);this.width = i + 2 * this.xPadding;var n = this.height / 2;this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset;
    }, getLineHeight: function getLineHeight(t) {
      var e = this.y - this.height / 2 + this.yPadding,
          i = t - 1;return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight;
    }, draw: function draw() {
      if (this.custom) this.custom(this);else {
        F(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);var t = this.ctx;t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function (e, i) {
          t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
        }, this);
      }
    } }), i.Scale = i.Element.extend({ initialize: function initialize() {
      this.fit();
    }, buildYLabels: function buildYLabels() {
      this.yLabels = [];for (var t = g(this.stepValue), e = 0; e <= this.steps; e++) {
        this.yLabels.push(x(this.templateString, { value: (this.min + e * this.stepValue).toFixed(t) }));
      }this.yLabelWidth = this.display && this.showLabels ? R(this.ctx, this.font, this.yLabels) + 10 : 0;
    }, addXLabel: function addXLabel(t) {
      this.xLabels.push(t), this.valuesCount++, this.fit();
    }, removeXLabel: function removeXLabel() {
      this.xLabels.shift(), this.valuesCount--, this.fit();
    }, fit: function fit() {
      this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;var t,
          e = this.endPoint,
          i = this.endPoint - this.startPoint;for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint;) {
        i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && (this.endPoint = e, this.calculateXLabelRotation());
      }
    }, calculateXLabelRotation: function calculateXLabelRotation() {
      this.ctx.font = this.font;var t,
          e = this.ctx.measureText(this.xLabels[0]).width,
          i = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;if (this.xScalePaddingRight = i / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth ? e / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
        var n,
            o = R(this.ctx, this.font, this.xLabels);this.xLabelWidth = o;for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) {
          n = Math.cos(y(this.xLabelRotation)), t = n * e, n * i, t + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
        }this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * o + 3);
      } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding;
    }, calculateYRange: u, drawingArea: function drawingArea() {
      return this.startPoint - this.endPoint;
    }, calculateY: function calculateY(t) {
      var e = this.drawingArea() / (this.min - this.max);return this.endPoint - e * (t - this.min);
    }, calculateX: function calculateX(t) {
      var e = (this.xLabelRotation, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
          i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
          n = i * t + this.xScalePaddingLeft;return this.offsetGridLines && (n += i / 2), Math.round(n);
    }, update: function update(t) {
      n.extend(this, t), this.fit();
    }, draw: function draw() {
      var t = this.ctx,
          e = (this.endPoint - this.startPoint) / this.steps,
          i = Math.round(this.xScalePaddingLeft);this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function (o, a) {
        var s = this.endPoint - e * a,
            r = Math.round(s),
            l = this.showHorizontalLines;t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, s), 0 !== a || l || (l = !0), l && t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath();
      }, this), o(this.xLabels, function (e, i) {
        var n = this.calculateX(i) + b(this.lineWidth),
            o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth),
            a = this.xLabelRotation > 0,
            s = this.showVerticalLines;0 !== i || s || (s = !0), s && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, a ? this.endPoint + 12 : this.endPoint + 8), t.rotate(y(this.xLabelRotation) * -1), t.font = this.font, t.textAlign = a ? "right" : "center", t.textBaseline = a ? "middle" : "top", t.fillText(e, 0, 0), t.restore();
      }, this));
    } }), i.RadialScale = i.Element.extend({ initialize: function initialize() {
      this.size = v([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2;
    }, calculateCenterOffset: function calculateCenterOffset(t) {
      var e = this.drawingArea / (this.max - this.min);return (t - this.min) * e;
    }, update: function update() {
      this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels();
    }, buildYLabels: function buildYLabels() {
      this.yLabels = [];for (var t = g(this.stepValue), e = 0; e <= this.steps; e++) {
        this.yLabels.push(x(this.templateString, { value: (this.min + e * this.stepValue).toFixed(t) }));
      }
    }, getCircumference: function getCircumference() {
      return 2 * Math.PI / this.valuesCount;
    }, setScaleSize: function setScaleSize() {
      var t,
          e,
          i,
          n,
          o,
          a,
          s,
          r,
          l,
          c,
          u,
          h,
          d = v([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
          p = this.width,
          m = 0;for (this.ctx.font = O(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) {
        t = this.getPointPosition(e, d), i = this.ctx.measureText(x(this.templateString, { value: this.labels[e] })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, o = e), t.x - n < m && (m = t.x - n, s = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, o = e) : e > this.valuesCount / 2 && t.x - i < m && (m = t.x - i, s = e);
      }l = m, c = Math.ceil(p - this.width), a = this.getIndexAngle(o), r = this.getIndexAngle(s), u = c / Math.sin(a + Math.PI / 2), h = l / Math.sin(r + Math.PI / 2), u = f(u) ? u : 0, h = f(h) ? h : 0, this.drawingArea = d - (h + u) / 2, this.setCenterPoint(h, u);
    }, setCenterPoint: function setCenterPoint(t, e) {
      var i = this.width - e - this.drawingArea,
          n = t + this.drawingArea;this.xCenter = (n + i) / 2, this.yCenter = this.height / 2;
    }, getIndexAngle: function getIndexAngle(t) {
      return t * (2 * Math.PI / this.valuesCount) - Math.PI / 2;
    }, getPointPosition: function getPointPosition(t, e) {
      var i = this.getIndexAngle(t);return { x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter };
    }, draw: function draw() {
      if (this.display) {
        var t = this.ctx;if (o(this.yLabels, function (e, i) {
          if (i > 0) {
            var n,
                o = i * (this.drawingArea / this.steps),
                a = this.yCenter - o;if (this.lineWidth > 0) if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke();else {
              t.beginPath();for (var s = 0; s < this.valuesCount; s++) {
                n = this.getPointPosition(s, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === s ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
              }t.closePath(), t.stroke();
            }if (this.showLabels) {
              if (t.font = O(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                var r = t.measureText(e).width;t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, a - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY);
              }t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, a);
            }
          }
        }, this), !this.lineArc) {
          t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;for (var e = this.valuesCount - 1; e >= 0; e--) {
            var i = null,
                n = null;if (this.angleLineWidth > 0 && (i = this.calculateCenterOffset(this.max), n = this.getPointPosition(e, i), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(n.x, n.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
              null == i && (i = this.calculateCenterOffset(this.max)), null == n && (n = this.getPointPosition(e, i));var a = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, i),
                  s = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, i),
                  r = { x: (a.x + n.x) / 2, y: (a.y + n.y) / 2 },
                  l = { x: (n.x + s.x) / 2, y: (n.y + s.y) / 2 };t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.lineTo(n.x, n.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath();
            }var c = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);t.font = O(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;var u = this.labels.length,
                h = this.labels.length / 2,
                d = h / 2,
                p = e < d || e > u - d,
                f = e === d || e === u - d;t.textAlign = 0 === e ? "center" : e === h ? "center" : e < h ? "left" : "right", t.textBaseline = f ? "middle" : p ? "bottom" : "top", t.fillText(this.labels[e], c.x, c.y);
          }
        }
      }
    } }), i.animationService = { frameDuration: 17, animations: [], dropFrames: 0, addAnimation: function addAnimation(t, e) {
      for (var i = 0; i < this.animations.length; ++i) {
        if (this.animations[i].chartInstance === t) return void (this.animations[i].animationObject = e);
      }this.animations.push({ chartInstance: t, animationObject: e }), 1 == this.animations.length && n.requestAnimFrame.call(window, this.digestWrapper);
    }, cancelAnimation: function cancelAnimation(t) {
      var e = n.findNextWhere(this.animations, function (e) {
        return e.chartInstance === t;
      });e && this.animations.splice(e, 1);
    }, digestWrapper: function digestWrapper() {
      i.animationService.startDigest.call(i.animationService);
    }, startDigest: function startDigest() {
      var t = Date.now(),
          e = 0;this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);for (var i = 0; i < this.animations.length; i++) {
        null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance), this.animations.splice(i, 1), i--);
      }var o = Date.now(),
          a = o - t - this.frameDuration,
          s = a / this.frameDuration;s > 1 && (this.dropFrames += s), this.animations.length > 0 && n.requestAnimFrame.call(window, this.digestWrapper);
    } }, n.addEvent(window, "resize", function () {
    var t;return function () {
      clearTimeout(t), t = setTimeout(function () {
        o(i.instances, function (t) {
          t.options.responsive && t.resize(t.render, !0);
        });
      }, 50);
    };
  }()), p ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return i;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == ( false ? "undefined" : _typeof(module)) && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function () {
    return t.Chart = e, i;
  };
}.call(this), function () {
  "use strict";
  var t = this,
      e = t.Chart,
      i = e.helpers,
      n = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>' };e.Type.extend({ name: "Bar", defaults: n, initialize: function initialize(t) {
      var n = this.options;this.ScaleClass = e.Scale.extend({ offsetGridLines: !0, calculateBarX: function calculateBarX(t, e, i) {
          var o = this.calculateBaseWidth(),
              a = this.calculateX(i) - o / 2,
              s = this.calculateBarWidth(t);return a + s * e + e * n.barDatasetSpacing + s / 2;
        }, calculateBaseWidth: function calculateBaseWidth() {
          return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing;
        }, calculateBarWidth: function calculateBarWidth(t) {
          return (this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing) / t;
        } }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
        var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];this.eachBars(function (t) {
          t.restore(["fillColor", "strokeColor"]);
        }), i.each(e, function (t) {
          t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
        }), this.showTooltip(e);
      }), this.BarClass = e.Rectangle.extend({ strokeWidth: this.options.barStrokeWidth, showStroke: this.options.barShowStroke, ctx: this.chart.ctx }), i.each(t.datasets, function (e, n) {
        var o = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, bars: [] };this.datasets.push(o), i.each(e.data, function (i, n) {
          o.bars.push(new this.BarClass({ value: i, label: t.labels[n], datasetLabel: e.label, strokeColor: e.strokeColor, fillColor: e.fillColor, highlightFill: e.highlightFill || e.fillColor, highlightStroke: e.highlightStroke || e.strokeColor }));
        }, this);
      }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (t, e, n) {
        i.extend(t, { width: this.scale.calculateBarWidth(this.datasets.length), x: this.scale.calculateBarX(this.datasets.length, n, e), y: this.scale.endPoint }), t.save();
      }, this), this.render();
    }, update: function update() {
      this.scale.update(), i.each(this.activeElements, function (t) {
        t.restore(["fillColor", "strokeColor"]);
      }), this.eachBars(function (t) {
        t.save();
      }), this.render();
    }, eachBars: function eachBars(t) {
      i.each(this.datasets, function (e, n) {
        i.each(e.bars, t, this, n);
      }, this);
    }, getBarsAtEvent: function getBarsAtEvent(t) {
      for (var e, n = [], o = i.getRelativePosition(t), a = function a(t) {
        n.push(t.bars[e]);
      }, s = 0; s < this.datasets.length; s++) {
        for (e = 0; e < this.datasets[s].bars.length; e++) {
          if (this.datasets[s].bars[e].inRange(o.x, o.y)) return i.each(this.datasets, a), n;
        }
      }return n;
    }, buildScale: function buildScale(t) {
      var e = this,
          n = function n() {
        var t = [];return e.eachBars(function (e) {
          t.push(e.value);
        }), t;
      },
          o = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function calculateYRange(t) {
          var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);i.extend(this, e);
        }, xLabels: t, font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, showLabels: this.options.scaleShowLabels, display: this.options.showScale };this.options.scaleOverride && i.extend(o, { calculateYRange: i.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new this.ScaleClass(o);
    }, addData: function addData(t, e) {
      i.each(t, function (t, i) {
        this.datasets[i].bars.push(new this.BarClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1), y: this.scale.endPoint, width: this.scale.calculateBarWidth(this.datasets.length), base: this.scale.endPoint, strokeColor: this.datasets[i].strokeColor, fillColor: this.datasets[i].fillColor }));
      }, this), this.scale.addXLabel(e), this.update();
    }, removeData: function removeData() {
      this.scale.removeXLabel(), i.each(this.datasets, function (t) {
        t.bars.shift();
      }, this), this.update();
    }, reflow: function reflow() {
      i.extend(this.BarClass.prototype, { y: this.scale.endPoint, base: this.scale.endPoint });var t = i.extend({ height: this.chart.height, width: this.chart.width });this.scale.update(t);
    }, draw: function draw(t) {
      var e = t || 1;this.clear();this.chart.ctx;this.scale.draw(e), i.each(this.datasets, function (t, n) {
        i.each(t.bars, function (t, i) {
          t.hasValue() && (t.base = this.scale.endPoint, t.transition({ x: this.scale.calculateBarX(this.datasets.length, n, i), y: this.scale.calculateY(t.value), width: this.scale.calculateBarWidth(this.datasets.length) }, e).draw());
        }, this);
      }, this);
    } });
}.call(this), function () {
  "use strict";
  var t = this,
      e = t.Chart,
      i = e.helpers,
      n = { segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>' };e.Type.extend({ name: "Doughnut", defaults: n, initialize: function initialize(t) {
      this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({ ctx: this.chart.ctx, x: this.chart.width / 2, y: this.chart.height / 2 }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
        var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];i.each(this.segments, function (t) {
          t.restore(["fillColor"]);
        }), i.each(e, function (t) {
          t.fillColor = t.highlightColor;
        }), this.showTooltip(e);
      }), this.calculateTotal(t), i.each(t, function (e, i) {
        e.color || (e.color = "hsl(" + 360 * i / t.length + ", 100%, 50%)"), this.addData(e, i, !0);
      }, this), this.render();
    }, getSegmentsAtEvent: function getSegmentsAtEvent(t) {
      var e = [],
          n = i.getRelativePosition(t);return i.each(this.segments, function (t) {
        t.inRange(n.x, n.y) && e.push(t);
      }, this), e;
    }, addData: function addData(t, i, n) {
      var o = void 0 !== i ? i : this.segments.length;void 0 === t.color && (t.color = e.defaults.global.segmentColorDefault[o % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[o % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(o, 0, new this.SegmentArc({ value: t.value, outerRadius: this.options.animateScale ? 0 : this.outerRadius, innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, fillColor: t.color, highlightColor: t.highlight || t.color, showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, startAngle: 1.5 * Math.PI, circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value), label: t.label })), n || (this.reflow(), this.update());
    }, calculateCircumference: function calculateCircumference(t) {
      return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0;
    }, calculateTotal: function calculateTotal(t) {
      this.total = 0, i.each(t, function (t) {
        this.total += Math.abs(t.value);
      }, this);
    }, update: function update() {
      this.calculateTotal(this.segments), i.each(this.activeElements, function (t) {
        t.restore(["fillColor"]);
      }), i.each(this.segments, function (t) {
        t.save();
      }), this.render();
    }, removeData: function removeData(t) {
      var e = i.isNumber(t) ? t : this.segments.length - 1;this.segments.splice(e, 1), this.reflow(), this.update();
    }, reflow: function reflow() {
      i.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function (t) {
        t.update({ outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout });
      }, this);
    }, draw: function draw(t) {
      var e = t ? t : 1;this.clear(), i.each(this.segments, function (t, i) {
        t.transition({ circumference: this.calculateCircumference(t.value), outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle);
      }, this);
    } }), e.types.Doughnut.extend({ name: "Pie", defaults: i.merge(n, { percentageInnerCutout: 0 }) });
}.call(this), function () {
  "use strict";
  var t = this,
      e = t.Chart,
      i = e.helpers,
      n = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>', offsetGridLines: !1 };e.Type.extend({ name: "Line", defaults: n, initialize: function initialize(t) {
      this.PointClass = e.Point.extend({ offsetGridLines: this.options.offsetGridLines, strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx, inRange: function inRange(t) {
          return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2);
        } }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
        var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];this.eachPoints(function (t) {
          t.restore(["fillColor", "strokeColor"]);
        }), i.each(e, function (t) {
          t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
        }), this.showTooltip(e);
      }), i.each(t.datasets, function (e) {
        var n = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, pointColor: e.pointColor, pointStrokeColor: e.pointStrokeColor, points: [] };this.datasets.push(n), i.each(e.data, function (i, o) {
          n.points.push(new this.PointClass({ value: i, label: t.labels[o], datasetLabel: e.label, strokeColor: e.pointStrokeColor, fillColor: e.pointColor, highlightFill: e.pointHighlightFill || e.pointColor, highlightStroke: e.pointHighlightStroke || e.pointStrokeColor }));
        }, this), this.buildScale(t.labels), this.eachPoints(function (t, e) {
          i.extend(t, { x: this.scale.calculateX(e), y: this.scale.endPoint }), t.save();
        }, this);
      }, this), this.render();
    }, update: function update() {
      this.scale.update(), i.each(this.activeElements, function (t) {
        t.restore(["fillColor", "strokeColor"]);
      }), this.eachPoints(function (t) {
        t.save();
      }), this.render();
    }, eachPoints: function eachPoints(t) {
      i.each(this.datasets, function (e) {
        i.each(e.points, t, this);
      }, this);
    }, getPointsAtEvent: function getPointsAtEvent(t) {
      var e = [],
          n = i.getRelativePosition(t);return i.each(this.datasets, function (t) {
        i.each(t.points, function (t) {
          t.inRange(n.x, n.y) && e.push(t);
        });
      }, this), e;
    }, buildScale: function buildScale(t) {
      var n = this,
          o = function o() {
        var t = [];return n.eachPoints(function (e) {
          t.push(e.value);
        }), t;
      },
          a = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, offsetGridLines: this.options.offsetGridLines, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function calculateYRange(t) {
          var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);i.extend(this, e);
        }, xLabels: t, font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, showLabels: this.options.scaleShowLabels, display: this.options.showScale };this.options.scaleOverride && i.extend(a, { calculateYRange: i.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new e.Scale(a);
    }, addData: function addData(t, e) {
      i.each(t, function (t, i) {
        this.datasets[i].points.push(new this.PointClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: this.scale.calculateX(this.scale.valuesCount + 1), y: this.scale.endPoint, strokeColor: this.datasets[i].pointStrokeColor, fillColor: this.datasets[i].pointColor }));
      }, this), this.scale.addXLabel(e), this.update();
    }, removeData: function removeData() {
      this.scale.removeXLabel(), i.each(this.datasets, function (t) {
        t.points.shift();
      }, this), this.update();
    }, reflow: function reflow() {
      var t = i.extend({ height: this.chart.height, width: this.chart.width });this.scale.update(t);
    }, draw: function draw(t) {
      var e = t || 1;this.clear();var n = this.chart.ctx,
          o = function o(t) {
        return null !== t.value;
      },
          a = function a(t, e, n) {
        return i.findNextWhere(e, o, n) || t;
      },
          s = function s(t, e, n) {
        return i.findPreviousWhere(e, o, n) || t;
      };this.scale && (this.scale.draw(e), i.each(this.datasets, function (t) {
        var r = i.where(t.points, o);i.each(t.points, function (t, i) {
          t.hasValue() && t.transition({ y: this.scale.calculateY(t.value), x: this.scale.calculateX(i) }, e);
        }, this), this.options.bezierCurve && i.each(r, function (t, e) {
          var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;t.controlPoints = i.splineCurve(s(t, r, e), t, a(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint);
        }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function (t, e) {
          if (0 === e) n.moveTo(t.x, t.y);else if (this.options.bezierCurve) {
            var i = s(t, r, e);n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y);
          } else n.lineTo(t.x, t.y);
        }, this), this.options.datasetStroke && n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function (t) {
          t.draw();
        });
      }, this));
    } });
}.call(this), function () {
  "use strict";
  var t = this,
      e = t.Chart,
      i = e.helpers,
      n = { scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>' };e.Type.extend({ name: "PolarArea", defaults: n, initialize: function initialize(t) {
      this.segments = [], this.SegmentArc = e.Arc.extend({ showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, ctx: this.chart.ctx, innerRadius: 0, x: this.chart.width / 2, y: this.chart.height / 2 }), this.scale = new e.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, lineArc: !0, width: this.chart.width, height: this.chart.height, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, valuesCount: t.length }), this.updateScaleRange(t), this.scale.update(), i.each(t, function (t, e) {
        this.addData(t, e, !0);
      }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
        var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];i.each(this.segments, function (t) {
          t.restore(["fillColor"]);
        }), i.each(e, function (t) {
          t.fillColor = t.highlightColor;
        }), this.showTooltip(e);
      }), this.render();
    }, getSegmentsAtEvent: function getSegmentsAtEvent(t) {
      var e = [],
          n = i.getRelativePosition(t);return i.each(this.segments, function (t) {
        t.inRange(n.x, n.y) && e.push(t);
      }, this), e;
    }, addData: function addData(t, e, i) {
      var n = e || this.segments.length;this.segments.splice(n, 0, new this.SegmentArc({ fillColor: t.color, highlightColor: t.highlight || t.color, label: t.label, value: t.value, outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value), circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(), startAngle: 1.5 * Math.PI })), i || (this.reflow(), this.update());
    }, removeData: function removeData(t) {
      var e = i.isNumber(t) ? t : this.segments.length - 1;this.segments.splice(e, 1), this.reflow(), this.update();
    }, calculateTotal: function calculateTotal(t) {
      this.total = 0, i.each(t, function (t) {
        this.total += t.value;
      }, this), this.scale.valuesCount = this.segments.length;
    }, updateScaleRange: function updateScaleRange(t) {
      var e = [];i.each(t, function (t) {
        e.push(t.value);
      });var n = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);i.extend(this.scale, n, { size: i.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 });
    }, update: function update() {
      this.calculateTotal(this.segments), i.each(this.segments, function (t) {
        t.save();
      }), this.reflow(), this.render();
    }, reflow: function reflow() {
      i.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, { xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), i.each(this.segments, function (t) {
        t.update({ outerRadius: this.scale.calculateCenterOffset(t.value) });
      }, this);
    }, draw: function draw(t) {
      var e = t || 1;this.clear(), i.each(this.segments, function (t, i) {
        t.transition({ circumference: this.scale.getCircumference(), outerRadius: this.scale.calculateCenterOffset(t.value) }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw();
      }, this), this.scale.draw();
    } });
}.call(this), function () {
  "use strict";
  var t = this,
      e = t.Chart,
      i = e.helpers;e.Type.extend({ name: "Radar", defaults: { scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>' }, initialize: function initialize(t) {
      this.PointClass = e.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
        var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];this.eachPoints(function (t) {
          t.restore(["fillColor", "strokeColor"]);
        }), i.each(e, function (t) {
          t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
        }), this.showTooltip(e);
      }), i.each(t.datasets, function (e) {
        var n = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, pointColor: e.pointColor, pointStrokeColor: e.pointStrokeColor, points: [] };this.datasets.push(n), i.each(e.data, function (i, o) {
          var a;this.scale.animation || (a = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({ value: i, label: t.labels[o], datasetLabel: e.label, x: this.options.animation ? this.scale.xCenter : a.x, y: this.options.animation ? this.scale.yCenter : a.y, strokeColor: e.pointStrokeColor, fillColor: e.pointColor, highlightFill: e.pointHighlightFill || e.pointColor, highlightStroke: e.pointHighlightStroke || e.pointStrokeColor }));
        }, this);
      }, this), this.render();
    }, eachPoints: function eachPoints(t) {
      i.each(this.datasets, function (e) {
        i.each(e.points, t, this);
      }, this);
    }, getPointsAtEvent: function getPointsAtEvent(t) {
      var e = i.getRelativePosition(t),
          n = i.getAngleFromPoint({ x: this.scale.xCenter, y: this.scale.yCenter }, e),
          o = 2 * Math.PI / this.scale.valuesCount,
          a = Math.round((n.angle - 1.5 * Math.PI) / o),
          s = [];return (a >= this.scale.valuesCount || a < 0) && (a = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function (t) {
        s.push(t.points[a]);
      }), s;
    }, buildScale: function buildScale(t) {
      this.scale = new e.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backgroundColors: this.options.scaleBackgroundColors, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, angleLineColor: this.options.angleLineColor, angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0, pointLabelFontColor: this.options.pointLabelFontColor, pointLabelFontSize: this.options.pointLabelFontSize, pointLabelFontFamily: this.options.pointLabelFontFamily, pointLabelFontStyle: this.options.pointLabelFontStyle, height: this.chart.height, width: this.chart.width, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, labels: t.labels, valuesCount: t.datasets[0].data.length }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels();
    }, updateScaleRange: function updateScaleRange(t) {
      var e = function () {
        var e = [];return i.each(t, function (t) {
          t.data ? e = e.concat(t.data) : i.each(t.points, function (t) {
            e.push(t.value);
          });
        }), e;
      }(),
          n = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);i.extend(this.scale, n);
    }, addData: function addData(t, e) {
      this.scale.valuesCount++, i.each(t, function (t, i) {
        var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));this.datasets[i].points.push(new this.PointClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: n.x, y: n.y, strokeColor: this.datasets[i].pointStrokeColor, fillColor: this.datasets[i].pointColor }));
      }, this), this.scale.labels.push(e), this.reflow(), this.update();
    }, removeData: function removeData() {
      this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function (t) {
        t.points.shift();
      }, this), this.reflow(), this.update();
    }, update: function update() {
      this.eachPoints(function (t) {
        t.save();
      }), this.reflow(), this.render();
    }, reflow: function reflow() {
      i.extend(this.scale, { width: this.chart.width, height: this.chart.height, size: i.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels();
    }, draw: function draw(t) {
      var e = t || 1,
          n = this.chart.ctx;this.clear(), this.scale.draw(), i.each(this.datasets, function (t) {
        i.each(t.points, function (t, i) {
          t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e);
        }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function (t, e) {
          0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y);
        }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, this.options.datasetFill && n.fill(), i.each(t.points, function (t) {
          t.hasValue() && t.draw();
        });
      }, this);
    } });
}.call(this), function () {
  var t,
      e,
      i,
      n,
      o,
      a = function a(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  },
      s = [].indexOf || function (t) {
    for (var e = 0, i = this.length; e < i; e++) {
      if (e in this && this[e] === t) return e;
    }return -1;
  };e = function () {
    function t() {}return t.prototype.extend = function (t, e) {
      var i, n;for (i in e) {
        n = e[i], null == t[i] && (t[i] = n);
      }return t;
    }, t.prototype.isMobile = function (t) {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
      );
    }, t.prototype.createEvent = function (t, e, i, n) {
      var o;return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o;
    }, t.prototype.emitEvent = function (t, e) {
      return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0;
    }, t.prototype.addEvent = function (t, e, i) {
      return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i;
    }, t.prototype.removeEvent = function (t, e, i) {
      return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e];
    }, t.prototype.innerHeight = function () {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, t;
  }(), i = this.WeakMap || this.MozWeakMap || (i = function () {
    function t() {
      this.keys = [], this.values = [];
    }return t.prototype.get = function (t) {
      var e, i, n, o;for (o = this.keys, e = i = 0, n = o.length; i < n; e = ++i) {
        if (o[e] === t) return this.values[e];
      }
    }, t.prototype.set = function (t, e) {
      var i, n, o, a;for (a = this.keys, i = n = 0, o = a.length; n < o; i = ++n) {
        if (a[i] === t) return void (this.values[i] = e);
      }return this.keys.push(t), this.values.push(e);
    }, t;
  }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
    function t() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }return t.notSupported = !0, t.prototype.observe = function () {}, t;
  }()), n = this.getComputedStyle || function (t, e) {
    return this.getPropertyValue = function (e) {
      var i;return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function (t, e) {
        return e.toUpperCase();
      }), (null != (i = t.currentStyle) ? i[e] : void 0) || null;
    }, this;
  }, o = /(\-([a-z]){1})/g, this.WOW = function () {
    function o(t) {
      null == t && (t = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.resetAnimation = a(this.resetAnimation, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i(), this.wowEvent = this.util().createEvent(this.config.boxClass);
    }return o.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, o.prototype.init = function () {
      var t;return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
    }, o.prototype.start = function () {
      var e, i, n, o;if (this.stopped = !1, this.boxes = function () {
        var t, i, n, o;for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; t < i; t++) {
          e = n[t], o.push(e);
        }return o;
      }.call(this), this.all = function () {
        var t, i, n, o;for (n = this.boxes, o = [], t = 0, i = n.length; t < i; t++) {
          e = n[t], o.push(e);
        }return o;
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();else for (o = this.boxes, i = 0, n = o.length; i < n; i++) {
        e = o[i], this.applyStyle(e, !0);
      }if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t(function (t) {
        return function (e) {
          var i, n, o, a, s;for (s = [], i = 0, n = e.length; i < n; i++) {
            a = e[i], s.push(function () {
              var t, e, i, n;for (i = a.addedNodes || [], n = [], t = 0, e = i.length; t < e; t++) {
                o = i[t], n.push(this.doSync(o));
              }return n;
            }.call(t));
          }return s;
        };
      }(this)).observe(document.body, { childList: !0, subtree: !0 });
    }, o.prototype.stop = function () {
      if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval);
    }, o.prototype.sync = function (e) {
      if (t.notSupported) return this.doSync(this.element);
    }, o.prototype.doSync = function (t) {
      var e, i, n, o, a;if (null == t && (t = this.element), 1 === t.nodeType) {
        for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), a = [], i = 0, n = o.length; i < n; i++) {
          e = o[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), a.push(this.scrolled = !0)) : a.push(void 0);
        }return a;
      }
    }, o.prototype.show = function (t) {
      return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t;
    }, o.prototype.applyStyle = function (t, e) {
      var i, n, o;return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function (a) {
        return function () {
          return a.customStyle(t, e, n, i, o);
        };
      }(this));
    }, o.prototype.animate = function () {
      return "requestAnimationFrame" in window ? function (t) {
        return window.requestAnimationFrame(t);
      } : function (t) {
        return t();
      };
    }(), o.prototype.resetStyle = function () {
      var t, e, i, n, o;for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) {
        t = n[e], o.push(t.style.visibility = "visible");
      }return o;
    }, o.prototype.resetAnimation = function (t) {
      var e;if (t.type.toLowerCase().indexOf("animationend") >= 0) return e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim();
    }, o.prototype.customStyle = function (t, e, i, n, o) {
      return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, { animationDuration: i }), n && this.vendorSet(t.style, { animationDelay: n }), o && this.vendorSet(t.style, { animationIterationCount: o }), this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }), t;
    }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function (t, e) {
      var i, n, o, a;n = [];for (i in e) {
        o = e[i], t["" + i] = o, n.push(function () {
          var e, n, s, r;for (s = this.vendors, r = [], e = 0, n = s.length; e < n; e++) {
            a = s[e], r.push(t["" + a + i.charAt(0).toUpperCase() + i.substr(1)] = o);
          }return r;
        }.call(this));
      }return n;
    }, o.prototype.vendorCSS = function (t, e) {
      var i, o, a, s, r, l;for (r = n(t), s = r.getPropertyCSSValue(e), a = this.vendors, i = 0, o = a.length; i < o; i++) {
        l = a[i], s = s || r.getPropertyCSSValue("-" + l + "-" + e);
      }return s;
    }, o.prototype.animationName = function (t) {
      var e;try {
        e = this.vendorCSS(t, "animation-name").cssText;
      } catch (i) {
        e = n(t).getPropertyValue("animation-name");
      }return "none" === e ? "" : e;
    }, o.prototype.cacheAnimationName = function (t) {
      return this.animationNameCache.set(t, this.animationName(t));
    }, o.prototype.cachedAnimationName = function (t) {
      return this.animationNameCache.get(t);
    }, o.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, o.prototype.scrollCallback = function () {
      var t;if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
        var e, i, n, o;for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) {
          (t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
        }return o;
      }.call(this), !this.boxes.length && !this.config.live)) return this.stop();
    }, o.prototype.offsetTop = function (t) {
      for (var e; void 0 === t.offsetTop;) {
        t = t.parentNode;
      }for (e = t.offsetTop; t = t.offsetParent;) {
        e += t.offsetTop;
      }return e;
    }, o.prototype.isVisible = function (t) {
      var e, i, n, o, a;return i = t.getAttribute("data-wow-offset") || this.config.offset, a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, n <= o && e >= a;
    }, o.prototype.util = function () {
      return null != this._util ? this._util : this._util = new e();
    }, o.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, o;
  }();
}.call(this), $(window).scroll(function () {
  $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"));
}), $(function () {
  $("a.page-scroll").bind("click", function (t) {
    var e = $(this);$("html, body").stop().animate({ scrollTop: $(e.attr("href")).offset().top }, 1500, "easeInOutExpo"), t.preventDefault();
  });
}), function (t, e) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return e.apply(t);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e.call(t) : t.Waves = e.call(t);
}("object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : this, function () {
  "use strict";
  function t(t) {
    return null !== t && t === t.window;
  }function e(e) {
    return t(e) ? e : 9 === e.nodeType && e.defaultView;
  }function i(t) {
    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "function" === e || "object" === e && !!t;
  }function n(t) {
    return i(t) && t.nodeType > 0;
  }function o(t) {
    var e = d.call(t);return "[object String]" === e ? h(t) : i(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) && t.hasOwnProperty("length") ? t : n(t) ? [t] : [];
  }function a(t) {
    var i,
        n,
        o = { top: 0, left: 0 },
        a = t && t.ownerDocument;return i = a.documentElement, void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), n = e(a), { top: o.top + n.pageYOffset - i.clientTop, left: o.left + n.pageXOffset - i.clientLeft };
  }function s(t) {
    var e = "";for (var i in t) {
      t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
    }return e;
  }function r(t, e, i) {
    if (i) {
      i.classList.remove("waves-rippling");var n = i.getAttribute("data-x"),
          o = i.getAttribute("data-y"),
          a = i.getAttribute("data-scale"),
          r = i.getAttribute("data-translate"),
          l = Date.now() - Number(i.getAttribute("data-hold")),
          c = 350 - l;c < 0 && (c = 0), "mousemove" === t.type && (c = 150);var u = "mousemove" === t.type ? 2500 : f.duration;setTimeout(function () {
        var t = { top: o + "px", left: n + "px", opacity: "0", "-webkit-transition-duration": u + "ms", "-moz-transition-duration": u + "ms", "-o-transition-duration": u + "ms", "transition-duration": u + "ms", "-webkit-transform": a + " " + r, "-moz-transform": a + " " + r, "-ms-transform": a + " " + r, "-o-transform": a + " " + r, transform: a + " " + r };i.setAttribute("style", s(t)), setTimeout(function () {
          try {
            e.removeChild(i);
          } catch (t) {
            return !1;
          }
        }, u);
      }, c);
    }
  }function l(t) {
    if (v.allowEvent(t) === !1) return null;for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
      if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
        e = i;break;
      }i = i.parentElement;
    }return e;
  }function c(t) {
    var e = l(t);if (null !== e) {
      if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;if (v.registerEvent(t), "touchstart" === t.type && f.delay) {
        var i = !1,
            n = setTimeout(function () {
          n = null, f.show(t, e);
        }, f.delay),
            o = function o(_o) {
          n && (clearTimeout(n), n = null, f.show(t, e)), i || (i = !0, f.hide(_o, e));
        },
            a = function a(t) {
          n && (clearTimeout(n), n = null), o(t);
        };e.addEventListener("touchmove", a, !1), e.addEventListener("touchend", o, !1), e.addEventListener("touchcancel", o, !1);
      } else f.show(t, e), p && (e.addEventListener("touchend", f.hide, !1), e.addEventListener("touchcancel", f.hide, !1)), e.addEventListener("mouseup", f.hide, !1), e.addEventListener("mouseleave", f.hide, !1);
    }
  }var u = u || {},
      h = document.querySelectorAll.bind(document),
      d = Object.prototype.toString,
      p = "ontouchstart" in window,
      f = { duration: 750, delay: 200, show: function show(t, e, i) {
      if (2 === t.button) return !1;e = e || this;var n = document.createElement("div");n.className = "waves-ripple waves-rippling", e.appendChild(n);var o = a(e),
          r = 0,
          l = 0;"touches" in t && t.touches.length ? (r = t.touches[0].pageY - o.top, l = t.touches[0].pageX - o.left) : (r = t.pageY - o.top, l = t.pageX - o.left), l = l >= 0 ? l : 0, r = r >= 0 ? r : 0;var c = "scale(" + e.clientWidth / 100 * 3 + ")",
          u = "translate(0,0)";i && (u = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", l), n.setAttribute("data-y", r), n.setAttribute("data-scale", c), n.setAttribute("data-translate", u);var h = { top: r + "px", left: l + "px" };n.classList.add("waves-notransition"), n.setAttribute("style", s(h)), n.classList.remove("waves-notransition"), h["-webkit-transform"] = c + " " + u, h["-moz-transform"] = c + " " + u, h["-ms-transform"] = c + " " + u, h["-o-transform"] = c + " " + u, h.transform = c + " " + u, h.opacity = "1";var d = "mousemove" === t.type ? 2500 : f.duration;h["-webkit-transition-duration"] = d + "ms", h["-moz-transition-duration"] = d + "ms", h["-o-transition-duration"] = d + "ms", h["transition-duration"] = d + "ms", n.setAttribute("style", s(h));
    }, hide: function hide(t, e) {
      e = e || this;for (var i = e.getElementsByClassName("waves-rippling"), n = 0, o = i.length; n < o; n++) {
        r(t, e, i[n]);
      }
    } },
      m = { input: function input(t) {
      var e = t.parentNode;if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
        var i = document.createElement("i");i.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(i, t), i.appendChild(t);var n = window.getComputedStyle(t, null),
            o = n.color,
            a = n.backgroundColor;i.setAttribute("style", "color:" + o + ";background:" + a), t.setAttribute("style", "background-color:rgba(0,0,0,0);");
      }
    }, img: function img(t) {
      var e = t.parentNode;if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
        var i = document.createElement("i");e.replaceChild(i, t), i.appendChild(t);
      }
    } },
      v = { touches: 0, allowEvent: function allowEvent(t) {
      var e = !0;return (/^(mousedown|mousemove)$/.test(t.type) && v.touches && (e = !1), e
      );
    }, registerEvent: function registerEvent(t) {
      var e = t.type;"touchstart" === e ? v.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
        v.touches && (v.touches -= 1);
      }, 500);
    } };return u.init = function (t) {
    var e = document.body;t = t || {}, "duration" in t && (f.duration = t.duration), "delay" in t && (f.delay = t.delay), p && (e.addEventListener("touchstart", c, !1), e.addEventListener("touchcancel", v.registerEvent, !1), e.addEventListener("touchend", v.registerEvent, !1)), e.addEventListener("mousedown", c, !1);
  }, u.attach = function (t, e) {
    t = o(t), "[object Array]" === d.call(e) && (e = e.join(" ")), e = e ? " " + e : "";for (var i, n, a = 0, s = t.length; a < s; a++) {
      i = t[a], n = i.tagName.toLowerCase(), ["input", "img"].indexOf(n) !== -1 && (m[n](i), i = i.parentElement), i.className.indexOf("waves-effect") === -1 && (i.className += " waves-effect" + e);
    }
  }, u.ripple = function (t, e) {
    t = o(t);var i = t.length;if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, i) for (var n, s, r, l = {}, c = 0, u = { type: "mousedown", button: 1 }; c < i; c++) {
      if (n = t[c], s = e.position || { x: n.clientWidth / 2, y: n.clientHeight / 2 }, r = a(n), l.x = r.left + s.x, l.y = r.top + s.y, u.pageX = l.x, u.pageY = l.y, f.show(u, n), e.wait >= 0 && null !== e.wait) {
        var h = { type: "mouseup", button: 1 };setTimeout(function (t, e) {
          return function () {
            f.hide(t, e);
          };
        }(h, n), e.wait);
      }
    }
  }, u.calm = function (t) {
    t = o(t);for (var e = { type: "mouseup", button: 1 }, i = 0, n = t.length; i < n; i++) {
      f.hide(e, t[i]);
    }
  }, u.displayEffect = function (t) {
    console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(t);
  }, u;
}), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(), $(document).ready(function () {
  $("#preloader-markup").load("mdb-addons/preloader.html", function () {
    $("#preloader-markup").fadeOut("slow");
  });
}), function (t) {
  t(document).ready(function () {
    t(document).on("click.card", ".card", function (e) {
      t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({ translateY: 0 }, { duration: 225, queue: !1, easing: "easeInOutQuad", complete: function complete() {
          t(this).css({ display: "none" });
        } }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, { duration: 300, queue: !1, easing: "easeInOutQuad" }));
    });
  });
}(jQuery), $(document).ready(function (t) {
  t(".card-share > a").on("click", function (e) {
    e.preventDefault(), t(this).parent().find("div").toggleClass("social-reveal-active"), t(this).toggleClass("share-expanded");
  });
}), function (t) {
  function e() {
    var e = +t(this).attr("length"),
        i = +t(this).val().length,
        n = i <= e;t(this).parent().find('span[class="character-counter"]').html(i + "/" + e), o(n, t(this));
  }function i(e) {
    var i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);e.parent().append(i);
  }function n() {
    t(this).parent().find('span[class="character-counter"]').html("");
  }function o(t, e) {
    var i = e.hasClass("invalid");t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"));
  }t.fn.characterCounter = function () {
    return this.each(function () {
      void 0 !== t(this).attr("length") && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", n), i(t(this)));
    });
  }, t(document).ready(function () {
    t("input, textarea").characterCounter();
  });
}(jQuery), function (t) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (t) {
    return function () {
      function e(t, e, i) {
        return f({ type: x.error, iconClass: m().iconClasses.error, message: t, optionsOverride: i, title: e });
      }function i(e, i) {
        return e || (e = m()), g = t("#" + e.containerId), g.length ? g : (i && (g = h(e)), g);
      }function n(t, e, i) {
        return f({ type: x.info, iconClass: m().iconClasses.info, message: t, optionsOverride: i, title: e });
      }function o(t) {
        y = t;
      }function a(t, e, i) {
        return f({ type: x.success, iconClass: m().iconClasses.success, message: t, optionsOverride: i, title: e });
      }function s(t, e, i) {
        return f({ type: x.warning, iconClass: m().iconClasses.warning, message: t, optionsOverride: i, title: e });
      }function r(t, e) {
        var n = m();g || i(n), u(t, n, e) || c(n);
      }function l(e) {
        var n = m();if (g || i(n), e && 0 === t(":focus", e).length) return void v(e);g.children().length && g.remove();
      }function c(e) {
        for (var i = g.children(), n = i.length - 1; n >= 0; n--) {
          u(t(i[n]), e);
        }
      }function u(e, i, n) {
        var o = !(!n || !n.force) && n.force;return !(!e || !o && 0 !== t(":focus", e).length) && (e[i.hideMethod]({ duration: i.hideDuration, easing: i.hideEasing, complete: function complete() {
            v(e);
          } }), !0);
      }function h(e) {
        return g = t("<div/>").attr("id", e.containerId).addClass(e.positionClass).attr("aria-live", "polite").attr("role", "alert"), g.appendTo(t(e.target)), g;
      }function d() {
        return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', newestOnTop: !0, preventDuplicates: !1, progressBar: !1 };
      }function p(t) {
        y && y(t);
      }function f(e) {
        function n(t) {
          return null == t && (t = ""), new String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }function o() {
          e.iconClass && S.addClass(y.toastClass).addClass(x);
        }function a() {
          y.newestOnTop ? g.prepend(S) : g.append(S);
        }function s() {
          e.title && (k.append(y.escapeHtml ? n(e.title) : e.title).addClass(y.titleClass), S.append(k));
        }function r() {
          e.message && (P.append(y.escapeHtml ? n(e.message) : e.message).addClass(y.messageClass), S.append(P));
        }function l() {
          y.closeButton && (E.addClass("toast-close-button").attr("role", "button"), S.prepend(E));
        }function c() {
          y.progressBar && (T.addClass("toast-progress"), S.prepend(T));
        }function u(e) {
          var i = e && y.closeMethod !== !1 ? y.closeMethod : y.hideMethod,
              n = e && y.closeDuration !== !1 ? y.closeDuration : y.hideDuration,
              o = e && y.closeEasing !== !1 ? y.closeEasing : y.hideEasing;if (!t(":focus", S).length || e) return clearTimeout(A.intervalId), S[i]({ duration: n, easing: o, complete: function complete() {
              v(S), y.onHidden && "hidden" !== I.state && y.onHidden(), I.state = "hidden", I.endTime = new Date(), p(I);
            } });
        }function h() {
          (y.timeOut > 0 || y.extendedTimeOut > 0) && (C = setTimeout(u, y.extendedTimeOut), A.maxHideTime = parseFloat(y.extendedTimeOut), A.hideEta = new Date().getTime() + A.maxHideTime);
        }function d() {
          clearTimeout(C), A.hideEta = 0, S.stop(!0, !0)[y.showMethod]({ duration: y.showDuration, easing: y.showEasing });
        }function f() {
          var t = (A.hideEta - new Date().getTime()) / A.maxHideTime * 100;T.width(t + "%");
        }var y = m(),
            x = e.iconClass || y.iconClass;if (void 0 !== e.optionsOverride && (y = t.extend(y, e.optionsOverride), x = e.optionsOverride.iconClass || x), !function (t, e) {
          if (t.preventDuplicates) {
            if (e.message === b) return !0;b = e.message;
          }return !1;
        }(y, e)) {
          w++, g = i(y, !0);var C = null,
              S = t("<div/>"),
              k = t("<div/>"),
              P = t("<div/>"),
              T = t("<div/>"),
              E = t(y.closeHtml),
              A = { intervalId: null, hideEta: null, maxHideTime: null },
              I = { toastId: w, state: "visible", startTime: new Date(), options: y, map: e };return function () {
            o(), s(), r(), l(), c(), a();
          }(), function () {
            S.hide(), S[y.showMethod]({ duration: y.showDuration, easing: y.showEasing, complete: y.onShown }), y.timeOut > 0 && (C = setTimeout(u, y.timeOut), A.maxHideTime = parseFloat(y.timeOut), A.hideEta = new Date().getTime() + A.maxHideTime, y.progressBar && (A.intervalId = setInterval(f, 10)));
          }(), function () {
            S.hover(d, h), !y.onclick && y.tapToDismiss && S.click(u), y.closeButton && E && E.click(function (t) {
              t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), u(!0);
            }), y.onclick && S.click(function (t) {
              y.onclick(t), u();
            });
          }(), p(I), y.debug && console && console.log(I), S;
        }
      }function m() {
        return t.extend({}, d(), C.options);
      }function v(t) {
        g || (g = i()), t.is(":visible") || (t.remove(), t = null, 0 === g.children().length && (g.remove(), b = void 0));
      }var g,
          y,
          b,
          w = 0,
          x = { error: "error", info: "info", success: "success", warning: "warning" },
          C = { clear: r, remove: l, error: e, getContainer: i, info: n, options: {}, subscribe: o, success: a, version: "2.1.2", warning: s };return C;
    }();
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(__webpack_require__(48)), $(".smooth-scroll").on("click", "a", function (t) {
  t.preventDefault();var e = $(this).attr("href"),
      i = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0;$("body,html").animate({ scrollTop: $(e).offset().top - i }, 700);
}), function (t) {
  t.fn.scrollTo = function (e) {
    return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this;
  }, t.fn.dropdown = function (e) {
    var i = { inDuration: 300, outDuration: 225, constrain_width: !0, hover: !1, gutter: 0, belowOrigin: !1, alignment: "left" };this.each(function () {
      function n() {
        void 0 !== s.data("induration") && (r.inDuration = s.data("inDuration")), void 0 !== s.data("outduration") && (r.outDuration = s.data("outDuration")), void 0 !== s.data("constrainwidth") && (r.constrain_width = s.data("constrainwidth")), void 0 !== s.data("hover") && (r.hover = s.data("hover")), void 0 !== s.data("gutter") && (r.gutter = s.data("gutter")), void 0 !== s.data("beloworigin") && (r.belowOrigin = s.data("beloworigin")), void 0 !== s.data("alignment") && (r.alignment = s.data("alignment"));
      }function o(e) {
        "focus" === e && (l = !0), n(), c.addClass("active"), s.addClass("active"), r.constrain_width === !0 ? c.css("width", s.outerWidth()) : c.css("white-space", "nowrap");var i = window.innerHeight,
            o = s.innerHeight(),
            a = s.offset().left,
            u = s.offset().top - t(window).scrollTop(),
            h = r.alignment,
            d = 0,
            p = 0,
            f = 0;r.belowOrigin === !0 && (f = o);var m = 0,
            v = s.parent();if (!v.is("body") && v[0].scrollHeight > v[0].clientHeight && (m = v[0].scrollTop), a + c.innerWidth() > t(window).width() ? h = "right" : a - c.innerWidth() + s.innerWidth() < 0 && (h = "left"), u + c.innerHeight() > i) if (u + o - c.innerHeight() < 0) {
          var g = i - u - f;c.css("max-height", g);
        } else f || (f += o), f -= c.innerHeight();if ("left" === h) d = r.gutter, p = s.position().left + d;else if ("right" === h) {
          var y = s.position().left + s.outerWidth() - c.outerWidth();d = -r.gutter, p = y + d;
        }c.css({ position: "absolute", top: s.position().top + f + m, left: p }), c.stop(!0, !0).css("opacity", 0).slideDown({ queue: !1, duration: r.inDuration, easing: "easeOutCubic", complete: function complete() {
            t(this).css("height", "");
          } }).animate({ opacity: 1 }, { queue: !1, duration: r.inDuration, easing: "easeOutSine" });
      }function a() {
        l = !1, c.fadeOut(r.outDuration), c.removeClass("active"), s.removeClass("active"), setTimeout(function () {
          c.css("max-height", "");
        }, r.outDuration);
      }var s = t(this),
          r = t.extend({}, i, e),
          l = !1,
          c = t("#" + s.attr("data-activates"));if (n(), s.after(c), r.hover) {
        var u = !1;s.unbind("click." + s.attr("id")), s.on("mouseenter", function (t) {
          u === !1 && (o(), u = !0);
        }), s.on("mouseleave", function (e) {
          t(e.toElement || e.relatedTarget).closest(".dropdown-content").is(c) || (c.stop(!0, !0), a(), u = !1);
        }), c.on("mouseleave", function (e) {
          t(e.toElement || e.relatedTarget).closest(".dropdown-button").is(s) || (c.stop(!0, !0), a(), u = !1);
        });
      } else s.unbind("click." + s.attr("id")), s.bind("click." + s.attr("id"), function (e) {
        l || (s[0] != e.currentTarget || s.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? s.hasClass("active") && (a(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (e.preventDefault(), o("click")), c.hasClass("active") && t(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function (e) {
          c.is(e.target) || s.is(e.target) || s.find(e.target).length || (a(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")));
        }));
      });s.on("open", function (t, e) {
        o(e);
      }), s.on("close", a);
    });
  }, t(document).ready(function () {
    t(".dropdown-button").dropdown();
  });
}(jQuery);var dropdownSelectors = $(".dropdown, .dropup");dropdownSelectors.on({ "show.bs.dropdown": function showBsDropdown() {
    var t = dropdownEffectData(this);dropdownEffectStart(t, t.effectIn);
  }, "shown.bs.dropdown": function shownBsDropdown() {
    var t = dropdownEffectData(this);t.effectIn && t.effectOut && dropdownEffectEnd(t, function () {});
  }, "hide.bs.dropdown": function hideBsDropdown(t) {
    var e = dropdownEffectData(this);e.effectOut && (t.preventDefault(), dropdownEffectStart(e, e.effectOut), dropdownEffectEnd(e, function () {
      e.dropdown.removeClass("open"), e.dropdown.removeClass("show");
    }));
  } }), $(".rotate-btn").on("click", function () {
  var t = $(this).attr("data-card");$("#" + t).toggleClass("flipped");
}), function (t) {
  function e(e) {
    if ($this = e, $this.hasClass("active") === !1) {
      $this.addClass("active"), $this.find("ul .btn-floating").velocity({ scaleY: ".4", scaleX: ".4", translateY: "40px" }, { duration: 0 });var i = 0;$this.find("ul .btn-floating").reverse().each(function () {
        t(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0" }, { duration: 80, delay: i }), i += 40;
      });
    } else {
      $this.removeClass("active");var i = 0;$this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: "40px" }, { duration: 80 });
    }
  }t(document).ready(function () {
    t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (e) {
      i(t(this));
    }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (e) {
      n(t(this));
    }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function (e) {
      var o = t(this),
          a = o.parent();a.hasClass("active") ? n(a) : i(a);
    });
  }), t.fn.extend({ openFAB: function openFAB() {
      i(t(this));
    }, closeFAB: function closeFAB() {
      n(t(this));
    } });var i = function i(e) {
    if ($this = e, $this.hasClass("active") === !1) {
      var i,
          n,
          o = $this.hasClass("horizontal");o === !0 ? n = 40 : i = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({ scaleY: ".4", scaleX: ".4", translateY: i + "px", translateX: n + "px" }, { duration: 0 });var a = 0;$this.find("ul .btn-floating").reverse().each(function () {
        t(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0" }, { duration: 80, delay: a }), a += 40;
      });
    }
  },
      n = function n(t) {
    $this = t;var e,
        i,
        n = $this.hasClass("horizontal");n === !0 ? i = 40 : e = 40, $this.removeClass("active");$this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: e + "px", translateX: i + "px" }, { duration: 80 });
  };t(".fixed-action-btn").on({ click: function click(i) {
      return i.preventDefault(), e(t(".fixed-action-btn")), !1;
    } });
}(jQuery), function (t, e, i, n) {
  "use strict";
  function o(t, e, i) {
    return setTimeout(c(t, i), e);
  }function a(t, e, i) {
    return !!Array.isArray(t) && (s(t, i[e], i), !0);
  }function s(t, e, i) {
    var o;if (t) if (t.forEach) t.forEach(e, i);else if (t.length !== n) for (o = 0; o < t.length;) {
      e.call(i, t[o], o, t), o++;
    } else for (o in t) {
      t.hasOwnProperty(o) && e.call(i, t[o], o, t);
    }
  }function r(e, i, n) {
    var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";return function () {
      var i = new Error("get-stack-trace"),
          n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          a = t.console && (t.console.warn || t.console.log);return a && a.call(t.console, o, n), e.apply(this, arguments);
    };
  }function l(t, e, i) {
    var n,
        o = e.prototype;n = t.prototype = Object.create(o), n.constructor = t, n._super = o, i && ut(n, i);
  }function c(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }function u(t, e) {
    return (typeof t === "undefined" ? "undefined" : _typeof(t)) == pt ? t.apply(e ? e[0] || n : n, e) : t;
  }function h(t, e) {
    return t === n ? e : t;
  }function d(t, e, i) {
    s(v(e), function (e) {
      t.addEventListener(e, i, !1);
    });
  }function p(t, e, i) {
    s(v(e), function (e) {
      t.removeEventListener(e, i, !1);
    });
  }function f(t, e) {
    for (; t;) {
      if (t == e) return !0;t = t.parentNode;
    }return !1;
  }function m(t, e) {
    return t.indexOf(e) > -1;
  }function v(t) {
    return t.trim().split(/\s+/g);
  }function g(t, e, i) {
    if (t.indexOf && !i) return t.indexOf(e);for (var n = 0; n < t.length;) {
      if (i && t[n][i] == e || !i && t[n] === e) return n;n++;
    }return -1;
  }function y(t) {
    return Array.prototype.slice.call(t, 0);
  }function b(t, e, i) {
    for (var n = [], o = [], a = 0; a < t.length;) {
      var s = e ? t[a][e] : t[a];g(o, s) < 0 && n.push(t[a]), o[a] = s, a++;
    }return i && (n = e ? n.sort(function (t, i) {
      return t[e] > i[e];
    }) : n.sort()), n;
  }function w(t, e) {
    for (var i, o, a = e[0].toUpperCase() + e.slice(1), s = 0; s < ht.length;) {
      if (i = ht[s], (o = i ? i + a : e) in t) return o;s++;
    }return n;
  }function x() {
    return bt++;
  }function C(e) {
    var i = e.ownerDocument || e;return i.defaultView || i.parentWindow || t;
  }function S(t, e) {
    var i = this;this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
      u(t.options.enable, [t]) && i.handler(e);
    }, this.init();
  }function k(t) {
    var e = t.options.inputClass;return new (e ? e : Ct ? H : St ? X : xt ? N : z)(t, P);
  }function P(t, e, i) {
    var n = i.pointers.length,
        o = i.changedPointers.length,
        a = e & Pt && n - o == 0,
        s = e & (Et | At) && n - o == 0;i.isFirst = !!a, i.isFinal = !!s, a && (t.session = {}), i.eventType = e, T(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
  }function T(t, e) {
    var i = t.session,
        n = e.pointers,
        o = n.length;i.firstInput || (i.firstInput = I(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = I(e) : 1 === o && (i.firstMultiple = !1);var a = i.firstInput,
        s = i.firstMultiple,
        r = s ? s.center : a.center,
        l = e.center = M(n);e.timeStamp = vt(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = F(r, l), e.distance = R(r, l), E(i, e), e.offsetDirection = O(e.deltaX, e.deltaY);var c = L(e.deltaTime, e.deltaX, e.deltaY);e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = mt(c.x) > mt(c.y) ? c.x : c.y, e.scale = s ? W(s.pointers, n) : 1, e.rotation = s ? D(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, A(i, e);var u = t.element;f(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u;
  }function E(t, e) {
    var i = e.center,
        n = t.offsetDelta || {},
        o = t.prevDelta || {},
        a = t.prevInput || {};e.eventType !== Pt && a.eventType !== Et || (o = t.prevDelta = { x: a.deltaX || 0, y: a.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y);
  }function A(t, e) {
    var i,
        o,
        a,
        s,
        r = t.lastInterval || e,
        l = e.timeStamp - r.timeStamp;if (e.eventType != At && (l > kt || r.velocity === n)) {
      var c = e.deltaX - r.deltaX,
          u = e.deltaY - r.deltaY,
          h = L(l, c, u);o = h.x, a = h.y, i = mt(h.x) > mt(h.y) ? h.x : h.y, s = O(c, u), t.lastInterval = e;
    } else i = r.velocity, o = r.velocityX, a = r.velocityY, s = r.direction;e.velocity = i, e.velocityX = o, e.velocityY = a, e.direction = s;
  }function I(t) {
    for (var e = [], i = 0; i < t.pointers.length;) {
      e[i] = { clientX: ft(t.pointers[i].clientX), clientY: ft(t.pointers[i].clientY) }, i++;
    }return { timeStamp: vt(), pointers: e, center: M(e), deltaX: t.deltaX, deltaY: t.deltaY };
  }function M(t) {
    var e = t.length;if (1 === e) return { x: ft(t[0].clientX), y: ft(t[0].clientY) };for (var i = 0, n = 0, o = 0; o < e;) {
      i += t[o].clientX, n += t[o].clientY, o++;
    }return { x: ft(i / e), y: ft(n / e) };
  }function L(t, e, i) {
    return { x: e / t || 0, y: i / t || 0 };
  }function O(t, e) {
    return t === e ? It : mt(t) >= mt(e) ? t < 0 ? Mt : Lt : e < 0 ? Ot : Rt;
  }function R(t, e, i) {
    i || (i = zt);var n = e[i[0]] - t[i[0]],
        o = e[i[1]] - t[i[1]];return Math.sqrt(n * n + o * o);
  }function F(t, e, i) {
    i || (i = zt);var n = e[i[0]] - t[i[0]],
        o = e[i[1]] - t[i[1]];return 180 * Math.atan2(o, n) / Math.PI;
  }function D(t, e) {
    return F(e[1], e[0], Ht) + F(t[1], t[0], Ht);
  }function W(t, e) {
    return R(e[0], e[1], Ht) / R(t[0], t[1], Ht);
  }function z() {
    this.evEl = Yt, this.evWin = Xt, this.pressed = !1, S.apply(this, arguments);
  }function H() {
    this.evEl = Bt, this.evWin = jt, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function _() {
    this.evTarget = qt, this.evWin = Qt, this.started = !1, S.apply(this, arguments);
  }function Y(t, e) {
    var i = y(t.touches),
        n = y(t.changedTouches);return e & (Et | At) && (i = b(i.concat(n), "identifier", !0)), [i, n];
  }function X() {
    this.evTarget = Zt, this.targetIds = {}, S.apply(this, arguments);
  }function V(t, e) {
    var i = y(t.touches),
        n = this.targetIds;if (e & (Pt | Tt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];var o,
        a,
        s = y(t.changedTouches),
        r = [],
        l = this.target;if (a = i.filter(function (t) {
      return f(t.target, l);
    }), e === Pt) for (o = 0; o < a.length;) {
      n[a[o].identifier] = !0, o++;
    }for (o = 0; o < s.length;) {
      n[s[o].identifier] && r.push(s[o]), e & (Et | At) && delete n[s[o].identifier], o++;
    }return r.length ? [b(a.concat(r), "identifier", !0), r] : void 0;
  }function N() {
    S.apply(this, arguments);var t = c(this.handler, this);this.touch = new X(this.manager, t), this.mouse = new z(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
  }function B(t, e) {
    t & Pt ? (this.primaryTouch = e.changedPointers[0].identifier, j.call(this, e)) : t & (Et | At) && j.call(this, e);
  }function j(t) {
    var e = t.changedPointers[0];if (e.identifier === this.primaryTouch) {
      var i = { x: e.clientX, y: e.clientY };this.lastTouches.push(i);var n = this.lastTouches,
          o = function o() {
        var t = n.indexOf(i);t > -1 && n.splice(t, 1);
      };setTimeout(o, Gt);
    }
  }function $(t) {
    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
      var o = this.lastTouches[n],
          a = Math.abs(e - o.x),
          s = Math.abs(i - o.y);if (a <= Kt && s <= Kt) return !0;
    }return !1;
  }function q(t, e) {
    this.manager = t, this.set(e);
  }function Q(t) {
    if (m(t, ne)) return ne;var e = m(t, oe),
        i = m(t, ae);return e && i ? ne : e || i ? e ? oe : ae : m(t, ie) ? ie : ee;
  }function U(t) {
    this.options = ut({}, this.defaults, t || {}), this.id = x(), this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = re, this.simultaneous = {}, this.requireFail = [];
  }function Z(t) {
    return t & de ? "cancel" : t & ue ? "end" : t & ce ? "move" : t & le ? "start" : "";
  }function G(t) {
    return t == Rt ? "down" : t == Ot ? "up" : t == Mt ? "left" : t == Lt ? "right" : "";
  }function K(t, e) {
    var i = e.manager;return i ? i.get(t) : t;
  }function J() {
    U.apply(this, arguments);
  }function tt() {
    J.apply(this, arguments), this.pX = null, this.pY = null;
  }function et() {
    J.apply(this, arguments);
  }function it() {
    U.apply(this, arguments), this._timer = null, this._input = null;
  }function nt() {
    J.apply(this, arguments);
  }function ot() {
    J.apply(this, arguments);
  }function at() {
    U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function st(t, e) {
    return e = e || {}, e.recognizers = h(e.recognizers, st.defaults.preset), new rt(t, e);
  }function rt(t, e) {
    this.options = ut({}, st.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = k(this), this.touchAction = new q(this, this.options.touchAction), lt(this, !0), s(this.options.recognizers, function (t) {
      var e = this.add(new t[0](t[1]));t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
    }, this);
  }function lt(t, e) {
    var i = t.element;if (i.style) {
      var n;s(t.options.cssProps, function (o, a) {
        n = w(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = t.oldCssProps[n] || "";
      }), e || (t.oldCssProps = {});
    }
  }function ct(t, i) {
    var n = e.createEvent("Event");n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n);
  }var ut,
      ht = ["", "webkit", "Moz", "MS", "ms", "o"],
      dt = e.createElement("div"),
      pt = "function",
      ft = Math.round,
      mt = Math.abs,
      vt = Date.now;ut = "function" != typeof Object.assign ? function (t) {
    if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");for (var e = Object(t), i = 1; i < arguments.length; i++) {
      var o = arguments[i];if (o !== n && null !== o) for (var a in o) {
        o.hasOwnProperty(a) && (e[a] = o[a]);
      }
    }return e;
  } : Object.assign;var gt = r(function (t, e, i) {
    for (var o = Object.keys(e), a = 0; a < o.length;) {
      (!i || i && t[o[a]] === n) && (t[o[a]] = e[o[a]]), a++;
    }return t;
  }, "extend", "Use `assign`."),
      yt = r(function (t, e) {
    return gt(t, e, !0);
  }, "merge", "Use `assign`."),
      bt = 1,
      wt = /mobile|tablet|ip(ad|hone|od)|android/i,
      xt = "ontouchstart" in t,
      Ct = w(t, "PointerEvent") !== n,
      St = xt && wt.test(navigator.userAgent),
      kt = 25,
      Pt = 1,
      Tt = 2,
      Et = 4,
      At = 8,
      It = 1,
      Mt = 2,
      Lt = 4,
      Ot = 8,
      Rt = 16,
      Ft = Mt | Lt,
      Dt = Ot | Rt,
      Wt = Ft | Dt,
      zt = ["x", "y"],
      Ht = ["clientX", "clientY"];S.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(C(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(C(this.element), this.evWin, this.domHandler);
    } };var _t = { mousedown: Pt, mousemove: Tt, mouseup: Et },
      Yt = "mousedown",
      Xt = "mousemove mouseup";l(z, S, { handler: function handler(t) {
      var e = _t[t.type];e & Pt && 0 === t.button && (this.pressed = !0), e & Tt && 1 !== t.which && (e = Et), this.pressed && (e & Et && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: "mouse", srcEvent: t }));
    } });var Vt = { pointerdown: Pt, pointermove: Tt, pointerup: Et, pointercancel: At, pointerout: At },
      Nt = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
      Bt = "pointerdown",
      jt = "pointermove pointerup pointercancel";t.MSPointerEvent && !t.PointerEvent && (Bt = "MSPointerDown", jt = "MSPointerMove MSPointerUp MSPointerCancel"), l(H, S, { handler: function handler(t) {
      var e = this.store,
          i = !1,
          n = t.type.toLowerCase().replace("ms", ""),
          o = Vt[n],
          a = Nt[t.pointerType] || t.pointerType,
          s = "touch" == a,
          r = g(e, t.pointerId, "pointerId");o & Pt && (0 === t.button || s) ? r < 0 && (e.push(t), r = e.length - 1) : o & (Et | At) && (i = !0), r < 0 || (e[r] = t, this.callback(this.manager, o, { pointers: e, changedPointers: [t], pointerType: a, srcEvent: t }), i && e.splice(r, 1));
    } });var $t = { touchstart: Pt, touchmove: Tt, touchend: Et, touchcancel: At },
      qt = "touchstart",
      Qt = "touchstart touchmove touchend touchcancel";l(_, S, { handler: function handler(t) {
      var e = $t[t.type];if (e === Pt && (this.started = !0), this.started) {
        var i = Y.call(this, t, e);e & (Et | At) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: "touch", srcEvent: t });
      }
    } });var Ut = { touchstart: Pt, touchmove: Tt, touchend: Et, touchcancel: At },
      Zt = "touchstart touchmove touchend touchcancel";l(X, S, { handler: function handler(t) {
      var e = Ut[t.type],
          i = V.call(this, t, e);i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: "touch", srcEvent: t });
    } });var Gt = 2500,
      Kt = 25;l(N, S, { handler: function handler(t, e, i) {
      var n = "touch" == i.pointerType,
          o = "mouse" == i.pointerType;if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
        if (n) B.call(this, e, i);else if (o && $.call(this, i)) return;this.callback(t, e, i);
      }
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var Jt = w(dt.style, "touchAction"),
      te = Jt !== n,
      ee = "auto",
      ie = "manipulation",
      ne = "none",
      oe = "pan-x",
      ae = "pan-y",
      se = function () {
    if (!te) return !1;var e = {},
        i = t.CSS && t.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
      e[n] = !i || t.CSS.supports("touch-action", n);
    }), e;
  }();q.prototype = { set: function set(t) {
      "compute" == t && (t = this.compute()), te && this.manager.element.style && se[t] && (this.manager.element.style[Jt] = t), this.actions = t.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var t = [];return s(this.manager.recognizers, function (e) {
        u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
      }), Q(t.join(" "));
    }, preventDefaults: function preventDefaults(t) {
      var e = t.srcEvent,
          i = t.offsetDirection;if (this.manager.session.prevented) return void e.preventDefault();var n = this.actions,
          o = m(n, ne) && !se[ne],
          a = m(n, ae) && !se[ae],
          s = m(n, oe) && !se[oe];if (o) {
        var r = 1 === t.pointers.length,
            l = t.distance < 2,
            c = t.deltaTime < 250;if (r && l && c) return;
      }return s && a ? void 0 : o || a && i & Ft || s && i & Dt ? this.preventSrc(e) : void 0;
    }, preventSrc: function preventSrc(t) {
      this.manager.session.prevented = !0, t.preventDefault();
    } };var re = 1,
      le = 2,
      ce = 4,
      ue = 8,
      he = ue,
      de = 16;U.prototype = { defaults: {}, set: function set(t) {
      return ut(this.options, t), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(t) {
      if (a(t, "recognizeWith", this)) return this;var e = this.simultaneous;return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(t) {
      return a(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this);
    }, requireFailure: function requireFailure(t) {
      if (a(t, "requireFailure", this)) return this;var e = this.requireFail;return t = K(t, this), g(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(t) {
      if (a(t, "dropRequireFailure", this)) return this;t = K(t, this);var e = g(this.requireFail, t);return e > -1 && this.requireFail.splice(e, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(t) {
      return !!this.simultaneous[t.id];
    }, emit: function emit(t) {
      function e(e) {
        i.manager.emit(e, t);
      }var i = this,
          n = this.state;n < ue && e(i.options.event + Z(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ue && e(i.options.event + Z(n));
    }, tryEmit: function tryEmit(t) {
      if (this.canEmit()) return this.emit(t);this.state = 32;
    }, canEmit: function canEmit() {
      for (var t = 0; t < this.requireFail.length;) {
        if (!(this.requireFail[t].state & (32 | re))) return !1;t++;
      }return !0;
    }, recognize: function recognize(t) {
      var e = ut({}, t);if (!u(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);this.state & (he | de | 32) && (this.state = re), this.state = this.process(e), this.state & (le | ce | ue | de) && this.tryEmit(e);
    }, process: function process(t) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, l(J, U, { defaults: { pointers: 1 }, attrTest: function attrTest(t) {
      var e = this.options.pointers;return 0 === e || t.pointers.length === e;
    }, process: function process(t) {
      var e = this.state,
          i = t.eventType,
          n = e & (le | ce),
          o = this.attrTest(t);return n && (i & At || !o) ? e | de : n || o ? i & Et ? e | ue : e & le ? e | ce : le : 32;
    } }), l(tt, J, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Wt }, getTouchAction: function getTouchAction() {
      var t = this.options.direction,
          e = [];return t & Ft && e.push(ae), t & Dt && e.push(oe), e;
    }, directionTest: function directionTest(t) {
      var e = this.options,
          i = !0,
          n = t.distance,
          o = t.direction,
          a = t.deltaX,
          s = t.deltaY;return o & e.direction || (e.direction & Ft ? (o = 0 === a ? It : a < 0 ? Mt : Lt, i = a != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? It : s < 0 ? Ot : Rt, i = s != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction;
    }, attrTest: function attrTest(t) {
      return J.prototype.attrTest.call(this, t) && (this.state & le || !(this.state & le) && this.directionTest(t));
    }, emit: function emit(t) {
      this.pX = t.deltaX, this.pY = t.deltaY;var e = G(t.direction);e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
    } }), l(et, J, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [ne];
    }, attrTest: function attrTest(t) {
      return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & le);
    }, emit: function emit(t) {
      if (1 !== t.scale) {
        var e = t.scale < 1 ? "in" : "out";t.additionalEvent = this.options.event + e;
      }this._super.emit.call(this, t);
    } }), l(it, U, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
      return [ee];
    }, process: function process(t) {
      var e = this.options,
          i = t.pointers.length === e.pointers,
          n = t.distance < e.threshold,
          a = t.deltaTime > e.time;if (this._input = t, !n || !i || t.eventType & (Et | At) && !a) this.reset();else if (t.eventType & Pt) this.reset(), this._timer = o(function () {
        this.state = he, this.tryEmit();
      }, e.time, this);else if (t.eventType & Et) return he;return 32;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(t) {
      this.state === he && (t && t.eventType & Et ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = vt(), this.manager.emit(this.options.event, this._input)));
    } }), l(nt, J, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [ne];
    }, attrTest: function attrTest(t) {
      return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & le);
    } }), l(ot, J, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Ft | Dt, pointers: 1 }, getTouchAction: function getTouchAction() {
      return tt.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(t) {
      var e,
          i = this.options.direction;return i & (Ft | Dt) ? e = t.overallVelocity : i & Ft ? e = t.overallVelocityX : i & Dt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && mt(e) > this.options.velocity && t.eventType & Et;
    }, emit: function emit(t) {
      var e = G(t.offsetDirection);e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
    } }), l(at, U, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [ie];
    }, process: function process(t) {
      var e = this.options,
          i = t.pointers.length === e.pointers,
          n = t.distance < e.threshold,
          a = t.deltaTime < e.time;if (this.reset(), t.eventType & Pt && 0 === this.count) return this.failTimeout();if (n && a && i) {
        if (t.eventType != Et) return this.failTimeout();var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
            r = !this.pCenter || R(this.pCenter, t.center) < e.posThreshold;this.pTime = t.timeStamp, this.pCenter = t.center, r && s ? this.count += 1 : this.count = 1, this._input = t;if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = o(function () {
          this.state = he, this.tryEmit();
        }, e.interval, this), le) : he;
      }return 32;
    }, failTimeout: function failTimeout() {
      return this._timer = o(function () {
        this.state = 32;
      }, this.options.interval, this), 32;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == he && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), st.VERSION = "2.0.7", st.defaults = { domEvents: !1, touchAction: "compute", enable: !0, inputTarget: null, inputClass: null, preset: [[nt, { enable: !1 }], [et, { enable: !1 }, ["rotate"]], [ot, { direction: Ft }], [tt, { direction: Ft }, ["swipe"]], [at], [at, { event: "doubletap", taps: 2 }, ["tap"]], [it]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };rt.prototype = { set: function set(t) {
      return ut(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
    }, stop: function stop(t) {
      this.session.stopped = t ? 2 : 1;
    }, recognize: function recognize(t) {
      var e = this.session;if (!e.stopped) {
        this.touchAction.preventDefaults(t);var i,
            n = this.recognizers,
            o = e.curRecognizer;(!o || o && o.state & he) && (o = e.curRecognizer = null);for (var a = 0; a < n.length;) {
          i = n[a], 2 === e.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (le | ce | ue) && (o = e.curRecognizer = i), a++;
        }
      }
    }, get: function get(t) {
      if (t instanceof U) return t;for (var e = this.recognizers, i = 0; i < e.length; i++) {
        if (e[i].options.event == t) return e[i];
      }return null;
    }, add: function add(t) {
      if (a(t, "add", this)) return this;var e = this.get(t.options.event);return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
    }, remove: function remove(t) {
      if (a(t, "remove", this)) return this;if (t = this.get(t)) {
        var e = this.recognizers,
            i = g(e, t);i !== -1 && (e.splice(i, 1), this.touchAction.update());
      }return this;
    }, on: function on(t, e) {
      if (t !== n && e !== n) {
        var i = this.handlers;return s(v(t), function (t) {
          i[t] = i[t] || [], i[t].push(e);
        }), this;
      }
    }, off: function off(t, e) {
      if (t !== n) {
        var i = this.handlers;return s(v(t), function (t) {
          e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t];
        }), this;
      }
    }, emit: function emit(t, e) {
      this.options.domEvents && ct(t, e);var i = this.handlers[t] && this.handlers[t].slice();if (i && i.length) {
        e.type = t, e.preventDefault = function () {
          e.srcEvent.preventDefault();
        };for (var n = 0; n < i.length;) {
          i[n](e), n++;
        }
      }
    }, destroy: function destroy() {
      this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, ut(st, { INPUT_START: Pt, INPUT_MOVE: Tt, INPUT_END: Et, INPUT_CANCEL: At, STATE_POSSIBLE: re, STATE_BEGAN: le, STATE_CHANGED: ce, STATE_ENDED: ue, STATE_RECOGNIZED: he, STATE_CANCELLED: de, STATE_FAILED: 32, DIRECTION_NONE: It, DIRECTION_LEFT: Mt, DIRECTION_RIGHT: Lt, DIRECTION_UP: Ot, DIRECTION_DOWN: Rt, DIRECTION_HORIZONTAL: Ft, DIRECTION_VERTICAL: Dt, DIRECTION_ALL: Wt, Manager: rt, Input: S, TouchAction: q, TouchInput: X, MouseInput: z, PointerEventInput: H, TouchMouseInput: N, SingleTouchInput: _, Recognizer: U, AttrRecognizer: J, Tap: at, Pan: tt, Swipe: ot, Pinch: et, Rotate: nt, Press: it, on: d, off: p, each: s, merge: yt, extend: gt, assign: ut, inherit: l, bindFn: c, prefixed: w }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = st,  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return st;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports ? module.exports = st : t.Hammer = st;
}(window, document), function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(66)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer);
}(function (t, e) {
  function i(i, n) {
    var o = t(i);o.data("hammer") || o.data("hammer", new e(o[0], n));
  }t.fn.hammer = function (t) {
    return this.each(function () {
      i(this, t);
    });
  }, e.Manager.prototype.emit = function (e) {
    return function (i, n) {
      e.call(this, i, n), t(this.element).trigger({ type: i, gesture: n });
    };
  }(e.Manager.prototype.emit);
}), function (t) {
  var e = { init: function init(e) {
      var i = { menuWidth: 240, edge: "left", closeOnClick: !1 };e = t.extend(i, e), t(this).each(function () {
        function i(i) {
          s = !1, r = !1, t("body").css({ overflow: "", width: "" }), t("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
              t(this).remove();
            } }), "left" === e.edge ? (a.css({ width: "", right: "", left: "0" }), o.velocity({ translateX: "-100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
              i === !0 && (o.removeAttr("style"), o.css("width", e.menuWidth));
            } })) : (a.css({ width: "", right: "0", left: "" }), o.velocity({ translateX: "100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
              i === !0 && (o.removeAttr("style"), o.css("width", e.menuWidth));
            } }));
        }var n = t(this),
            o = t("#" + n.attr("data-activates"));240 != e.menuWidth && o.css("width", e.menuWidth);var a = t('<div class="drag-target"></div>');t("body").append(a), "left" == e.edge ? (o.css("transform", "translateX(-100%)"), a.css({ left: 0 })) : (o.addClass("right-aligned").css("transform", "translateX(100%)"), a.css({ right: 0 })), o.hasClass("fixed") && window.innerWidth > 1440 && o.css("transform", "translateX(0)"), o.hasClass("fixed") && t(window).resize(function () {
          window.innerWidth > 1440 ? 0 != t("#sidenav-overlay").length && r ? i(!0) : o.css("transform", "translateX(0%)") : r === !1 && ("left" === e.edge ? o.css("transform", "translateX(-100%)") : o.css("transform", "translateX(100%)"));
        }), e.closeOnClick === !0 && o.on("click.itemclick", "a:not(.collapsible-header)", function () {
          i();
        });var s = !1,
            r = !1;a.on("click", function () {
          i();
        }), a.hammer({ prevent_default: !1 }).bind("pan", function (n) {
          if ("touch" == n.gesture.pointerType) {
            var a = (n.gesture.direction, n.gesture.center.x),
                s = (n.gesture.center.y, n.gesture.velocityX, t("body")),
                l = s.innerWidth();if (s.css("overflow", "hidden"), s.width(l), 0 === t("#sidenav-overlay").length) {
              var c = t('<div id="sidenav-overlay"></div>');c.css("opacity", 0).click(function () {
                i();
              }), t("body").append(c);
            }if ("left" === e.edge && (a > e.menuWidth ? a = e.menuWidth : a < 0 && (a = 0)), "left" === e.edge) a < e.menuWidth / 2 ? r = !1 : a >= e.menuWidth / 2 && (r = !0), o.css("transform", "translateX(" + (a - e.menuWidth) + "px)");else {
              a < window.innerWidth - e.menuWidth / 2 ? r = !0 : a >= window.innerWidth - e.menuWidth / 2 && (r = !1);var u = a - e.menuWidth / 2;u < 0 && (u = 0), o.css("transform", "translateX(" + u + "px)");
            }var h;"left" === e.edge ? (h = a / e.menuWidth, t("#sidenav-overlay").velocity({ opacity: h }, { duration: 10, queue: !1, easing: "easeOutQuad" })) : (h = Math.abs((a - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({ opacity: h }, { duration: 10, queue: !1, easing: "easeOutQuad" }));
          }
        }).bind("panend", function (i) {
          if ("touch" == i.gesture.pointerType) {
            var n = i.gesture.velocityX,
                l = i.gesture.center.x,
                c = l - e.menuWidth,
                u = l - e.menuWidth / 2;c > 0 && (c = 0), u < 0 && (u = 0), s = !1, "left" === e.edge ? r && n <= .3 || n < -.5 ? (0 != c && o.velocity({ translateX: [0, c] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), a.css({ width: "50%", right: 0, left: "" })) : (!r || n > .3) && (t("body").css({ overflow: "", width: "" }), o.velocity({ translateX: [-1 * e.menuWidth - 10, c] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                t(this).remove();
              } }), a.css({ width: "10px", right: "", left: 0 })) : r && n >= -.3 || n > .5 ? (o.velocity({ translateX: [0, u] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), a.css({ width: "50%", right: "", left: 0 })) : (!r || n < -.3) && (t("body").css({ overflow: "", width: "" }), o.velocity({ translateX: [e.menuWidth + 10, u] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                t(this).remove();
              } }), a.css({ width: "10px", right: 0, left: "" }));
          }
        }), n.click(function () {
          if (r === !0) r = !1, s = !1, i();else {
            var n = t("body"),
                l = n.innerWidth();n.css("overflow", "hidden"), n.width(l), t("body").append(a), "left" === e.edge ? (a.css({ width: "50%", right: 0, left: "" }), o.velocity({ translateX: [0, -1 * e.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })) : (a.css({ width: "50%", right: "", left: 0 }), o.velocity({ translateX: [0, e.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" }));var c = t('<div id="sidenav-overlay"></div>');c.css("opacity", 0).click(function () {
              r = !1, s = !1, i(), c.velocity({ opacity: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                  t(this).remove();
                } });
            }), t("body").append(c), c.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                r = !0, s = !1;
              } });
          }return !1;
        });
      });
    }, show: function show() {
      this.trigger("click");
    }, hide: function hide() {
      t("#sidenav-overlay").trigger("click");
    } };t.fn.sideNav = function (i) {
    return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments);
  };
}(jQuery), function (t) {
  t.fn.collapsible = function (e) {
    var i = { accordion: void 0 };return e = t.extend(i, e), this.each(function () {
      function i(e) {
        r = s.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            t(this).css("height", "");
          } }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            t(this).css("height", "");
          } }), r.not(e).removeClass("active").parent().removeClass("active"), r.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            t(this).css("height", "");
          } });
      }function n(e) {
        e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            t(this).css("height", "");
          } }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
            t(this).css("height", "");
          } });
      }function o(t) {
        return a(t).length > 0;
      }function a(t) {
        return t.closest("li > .collapsible-header");
      }var s = t(this),
          r = t(this).find("> li > .collapsible-header"),
          l = s.data("collapsible");s.off("click.collapse", ".collapsible-header"), r.off("click.collapse"), e.accordion || "accordion" === l || void 0 === l ? (r = s.find("> li > .collapsible-header"), r.on("click.collapse", function (e) {
        var n = t(e.target);o(n) && (n = a(n)), n.toggleClass("active"), i(n);
      }), i(r.filter(".active").first())) : r.each(function () {
        t(this).on("click.collapse", function (e) {
          var i = t(e.target);o(i) && (i = a(i)), i.toggleClass("active"), n(i);
        }), t(this).hasClass("active") && n(t(this));
      });
    });
  }, t(document).ready(function () {
    t(".collapsible").collapsible();
  });
}(jQuery), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (t) {
    return e(t);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("jquery")) : e(jQuery);
}(0, function (t) {
  var e = function e(t, _e3) {
    var i,
        n = document.createElement("canvas");t.appendChild(n), "object" == (typeof G_vmlCanvasManager === "undefined" ? "undefined" : _typeof(G_vmlCanvasManager)) && G_vmlCanvasManager.initElement(n);var o = n.getContext("2d");n.width = n.height = _e3.size;var a = 1;window.devicePixelRatio > 1 && (a = window.devicePixelRatio, n.style.width = n.style.height = [_e3.size, "px"].join(""), n.width = n.height = _e3.size * a, o.scale(a, a)), o.translate(_e3.size / 2, _e3.size / 2), o.rotate((-.5 + _e3.rotate / 180) * Math.PI);var s = (_e3.size - _e3.lineWidth) / 2;_e3.scaleColor && _e3.scaleLength && (s -= _e3.scaleLength + 2), Date.now = Date.now || function () {
      return +new Date();
    };var r = function r(t, e, i) {
      i = Math.min(Math.max(-1, i || 0), 1);var n = i <= 0;o.beginPath(), o.arc(0, 0, s, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke();
    },
        l = function l() {
      var t, i;o.lineWidth = 1, o.fillStyle = _e3.scaleColor, o.save();for (var n = 24; n > 0; --n) {
        n % 6 == 0 ? (i = _e3.scaleLength, t = 0) : (i = .6 * _e3.scaleLength, t = _e3.scaleLength - i), o.fillRect(-_e3.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
      }o.restore();
    },
        c = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
        window.setTimeout(t, 1e3 / 60);
      };
    }(),
        u = function u() {
      _e3.scaleColor && l(), _e3.trackColor && r(_e3.trackColor, _e3.trackWidth || _e3.lineWidth, 1);
    };this.getCanvas = function () {
      return n;
    }, this.getCtx = function () {
      return o;
    }, this.clear = function () {
      o.clearRect(_e3.size / -2, _e3.size / -2, _e3.size, _e3.size);
    }, this.draw = function (t) {
      _e3.scaleColor || _e3.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (u(), i = o.getImageData(0, 0, _e3.size * a, _e3.size * a)) : (this.clear(), u()) : this.clear(), o.lineCap = _e3.lineCap;var n;n = "function" == typeof _e3.barColor ? _e3.barColor(t) : _e3.barColor, r(n, _e3.lineWidth, t / 100);
    }.bind(this), this.animate = function (t, i) {
      var n = Date.now();_e3.onStart(t, i);var o = function () {
        var a = Math.min(Date.now() - n, _e3.animate.duration),
            s = _e3.easing(this, a, t, i - t, _e3.animate.duration);this.draw(s), _e3.onStep(t, i, s), a >= _e3.animate.duration ? _e3.onStop(t, i) : c(o);
      }.bind(this);c(o);
    }.bind(this);
  },
      i = function i(t, _i) {
    var n = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, trackWidth: void 0, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function easing(t, e, i, n, o) {
        return e /= o / 2, e < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i;
      }, onStart: function onStart(t, e) {}, onStep: function onStep(t, e, i) {}, onStop: function onStop(t, e) {} };if (void 0 !== e) n.renderer = e;else {
      if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");n.renderer = SVGRenderer;
    }var o = {},
        a = 0,
        s = function () {
      this.el = t, this.options = o;for (var e in n) {
        n.hasOwnProperty(e) && (o[e] = _i && void 0 !== _i[e] ? _i[e] : n[e], "function" == typeof o[e] && (o[e] = o[e].bind(this)));
      }"string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = { duration: o.animate, enabled: !0 }), "boolean" != typeof o.animate || o.animate || (o.animate = { duration: 1e3, enabled: o.animate }), this.renderer = new o.renderer(t, o), this.renderer.draw(a), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")));
    }.bind(this);this.update = function (t) {
      return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(a, t) : this.renderer.draw(t), a = t, this;
    }.bind(this), this.disableAnimation = function () {
      return o.animate.enabled = !1, this;
    }, this.enableAnimation = function () {
      return o.animate.enabled = !0, this;
    }, s();
  };t.fn.easyPieChart = function (e) {
    return this.each(function () {
      var n;t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n)));
    });
  };
}), $(function () {
  $("#accordion").on("show.bs.collapse", function () {
    $("#accordion .in").collapse("hide");
  });
}), function (t) {
  t(document).ready(function () {
    function e(e) {
      var i = e.css("font-family"),
          o = e.css("font-size");o && n.css("font-size", o), i && n.css("font-family", i), "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(e.val() + "\n");var a = n.html().replace(/\n/g, "<br>");n.html(a), e.is(":visible") ? n.css("width", e.width()) : n.css("width", t(window).width() / 2), e.css("height", n.height());
    }Materialize.updateTextFields = function () {
      t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function (e, i) {
        t(i).val().length > 0 || i.autofocus || void 0 !== t(this).attr("placeholder") || t(i)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active");
      });
    };var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change", i, function () {
      0 === t(this).val().length && void 0 === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"), validate_field(t(this));
    }), t(document).ready(function () {
      Materialize.updateTextFields();
    }), t(document).on("reset", function (e) {
      var n = t(e.target);n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid"), n.find(i).each(function () {
        "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active");
      }), n.find("select.initialized").each(function () {
        var t = n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t);
      }));
    }), t(document).on("focus", i, function () {
      t(this).siblings("label, i").addClass("active");
    }), t(document).on("blur", i, function () {
      var e = t(this);0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), 0 === e.val().length && e[0].validity.badInput !== !0 && void 0 !== e.attr("placeholder") && e.siblings("i").removeClass("active"), validate_field(e);
    }), window.validate_field = function (t) {
      var e = void 0 !== t.attr("length"),
          i = parseInt(t.attr("length")),
          n = t.val().length;0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")));
    };var n = t(".hiddendiv").first();n.length || (n = t('<div class="hiddendiv common"></div>'), t("body").append(n));t(".materialize-textarea").each(function () {
      var i = t(this);i.val().length && e(i);
    }), t("body").on("keyup keydown autoresize", ".materialize-textarea", function () {
      e(t(this));
    }), t(document).on("change", '.file-field input[type="file"]', function () {
      for (var e = t(this).closest(".file-field"), i = e.find("input.file-path"), n = t(this)[0].files, o = [], a = 0; a < n.length; a++) {
        o.push(n[a].name);
      }i.val(o.join(", ")), i.trigger("change");
    });var o,
        a = "input[type=range]",
        s = !1;t(a).each(function () {
      var e = t('<span class="thumb"><span class="value"></span></span>');t(this).after(e);
    });t(document).on("change", a, function (e) {
      t(this).siblings(".thumb").find(".value").html(t(this).val());
    }), t(document).on("input mousedown touchstart", a, function (e) {
      var i = t(this).siblings(".thumb"),
          n = t(this).outerWidth();i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(i)), i.find(".value").html(t(this).val()), s = !0, t(this).addClass("active"), i.hasClass("active") || i.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), "input" !== e.type && (o = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left, o < 0 ? o = 0 : o > n && (o = n), i.addClass("active").css("left", o)), i.find(".value").html(t(this).val());
    }), t(document).on("mouseup touchend", ".range-field", function () {
      s = !1, t(this).removeClass("active");
    }), t(document).on("mousemove touchmove", ".range-field", function (e) {
      var i,
          n = t(this).children(".thumb");if (s) {
        n.hasClass("active") || n.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), i = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;var o = t(this).outerWidth();i < 0 ? i = 0 : i > o && (i = o), n.addClass("active").css("left", i), n.find(".value").html(n.siblings(a).val());
      }
    }), t(document).on("mouseout touchleave", ".range-field", function () {
      if (!s) {
        var e = t(this).children(".thumb");e.hasClass("active") && e.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px" }, { duration: 100 }), e.removeClass("active");
      }
    });
  }), t.fn.material_select = function (e) {
    function i(t, e, i) {
      var o = t.indexOf(e),
          a = o === -1;return a ? t.push(e) : t.splice(o, 1), i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), i.find("option").eq(e).prop("selected", a), n(t, i), a;
    }function n(t, e) {
      for (var i = "", n = 0, o = t.length; n < o; n++) {
        var a = e.find("option").eq(t[n]).text();i += 0 === n ? a : ", " + a;
      }"" === i && (i = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(i);
    }t(this).each(function () {
      var n = t(this);if (!n.hasClass("browser-default")) {
        var o = !!n.attr("multiple"),
            a = n.data("select-id");if (a && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + a).remove()), "destroy" === e) return void n.data("select-id", null).removeClass("initialized");var s = Materialize.guid();n.data("select-id", s);var r = t('<div class="select-wrapper"></div>');r.addClass(n.attr("class"));var l = t('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
            c = n.children("option, optgroup"),
            u = [],
            h = !1,
            d = n.find("option:selected").html() || n.find("option:first").html() || "",
            p = function p(e, i, n) {
          var o = i.is(":disabled") ? "disabled " : "",
              a = i.data("icon"),
              s = i.attr("class");if (a) {
            var r = "";return s && (r = ' class="' + s + '"'), "multiple" === n ? l.append(t('<li class="' + o + '"><img src="' + a + '"' + r + '><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><img src="' + a + '"' + r + "><span>" + i.html() + "</span></li>")), !0;
          }"multiple" === n ? l.append(t('<li class="' + o + '"><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><span>' + i.html() + "</span></li>"));
        };c.length && c.each(function () {
          if (t(this).is("option")) o ? p(0, t(this), "multiple") : p(0, t(this));else if (t(this).is("optgroup")) {
            var e = t(this).children("option");l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function () {
              p(0, t(this));
            });
          }
        }), l.find("li:not(.optgroup)").each(function (a) {
          t(this).click(function (s) {
            if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
              var r = !0;o ? (t('input[type="checkbox"]', this).prop("checked", function (t, e) {
                return !e;
              }), r = i(u, t(this).index(), n), v.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), v.val(t(this).text())), activateOption(l, t(this)), n.find("option").eq(a).prop("selected", r), n.trigger("change"), void 0 !== e && e();
            }s.stopPropagation();
          });
        }), n.wrap(r);var f = t('<span class="caret">&#9660;</span>');n.is(":disabled") && f.addClass("disabled");var m = d.replace(/"/g, "&quot;"),
            v = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + m + '"/>');n.before(v), v.before(f), v.after(l), n.is(":disabled") || v.dropdown({ hover: !1, closeOnClick: !1 }), n.attr("tabindex") && t(v[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), v.on({ focus: function focus() {
            if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !l.is(":visible")) {
              t(this).trigger("open", ["focus"]);var e = t(this).val(),
                  i = l.find("li").filter(function () {
                return t(this).text().toLowerCase() === e.toLowerCase();
              })[0];activateOption(l, i);
            }
          }, "touchend click": function touchendClick(t) {
            t.stopPropagation();
          } }), v.on("blur", function () {
          o || t(this).trigger("close"), l.find("li.selected").removeClass("selected");
        }), l.hover(function () {
          h = !0;
        }, function () {
          h = !1;
        }), t(window).on({ click: function click() {
            o && (h || v.trigger("close"));
          } }), o && n.find("option:selected:not(:disabled)").each(function () {
          var e = t(this).index();i(u, e, n), l.find("li").eq(e).find(":checkbox").prop("checked", !0);
        }), activateOption = function activateOption(e, i) {
          if (i) {
            e.find("li.selected").removeClass("selected");var n = t(i);n.addClass("selected"), l.scrollTo(n);
          }
        };var g = [],
            y = function y(e) {
          if (9 == e.which) return void v.trigger("close");if (40 == e.which && !l.is(":visible")) return void v.trigger("open");if (13 != e.which || l.is(":visible")) {
            e.preventDefault();var i = String.fromCharCode(e.which).toLowerCase(),
                n = [9, 13, 27, 38, 40];if (i && n.indexOf(e.which) === -1) {
              g.push(i);var a = g.join(""),
                  s = l.find("li").filter(function () {
                return 0 === t(this).text().toLowerCase().indexOf(a);
              })[0];s && activateOption(l, s);
            }if (13 == e.which) {
              var r = l.find("li.selected:not(.disabled)")[0];r && (t(r).trigger("click"), o || v.trigger("close"));
            }40 == e.which && (s = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], activateOption(l, s)), 27 == e.which && v.trigger("close"), 38 == e.which && (s = l.find("li.selected").prev("li:not(.disabled)")[0]) && activateOption(l, s), setTimeout(function () {
              g = [];
            }, 1e3);
          }
        };v.on("keydown", y);
      }
    });
  };
}(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function (t) {
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (t.clientX >= t.target.clientWidth || t.clientY >= t.target.clientHeight) && t.preventDefault();
}), function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t(require("jquery")) : this.Picker = t(jQuery);
}(function (t) {
  function e(a, s, l, d) {
    function p() {
      return e._.node("div", e._.node("div", e._.node("div", e._.node("div", E.component.nodes(C.open), k.box), k.wrap), k.frame), k.holder, 'tabindex="-1"');
    }function f() {
      P.data(s, E).addClass(k.input).val(P.data("value") ? E.get("select", S.format) : a.value), S.editable || P.on("focus." + C.id + " click." + C.id, function (t) {
        t.preventDefault(), E.open();
      }).on("keydown." + C.id, w), o(a, { haspopup: !0, expanded: !1, readonly: !1, owns: a.id + "_root" });
    }function m() {
      o(E.$root[0], "hidden", !0);
    }function v() {
      E.$holder.on({ keydown: w, "focus.toOpen": b, blur: function blur() {
          P.removeClass(k.target);
        }, focusin: function focusin(t) {
          E.$root.removeClass(k.focused), t.stopPropagation();
        }, "mousedown click": function mousedownClick(e) {
          var i = e.target;i != E.$holder[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), E.$holder[0].focus()));
        } }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
        var e = t(this),
            i = e.data(),
            n = e.hasClass(k.navDisabled) || e.hasClass(k.disabled),
            o = r();o = o && (o.type || o.href), (n || o && !t.contains(E.$root[0], o)) && E.$holder[0].focus(), !n && i.nav ? E.set("highlight", E.component.item.highlight, { nav: i.nav }) : !n && "pick" in i ? (E.set("select", i.pick), S.closeOnSelect && E.close(!0)) : i.clear ? (E.clear(), S.closeOnClear && E.close(!0)) : i.close && E.close(!0);
      });
    }function g() {
      var e;S.hiddenName === !0 ? (e = a.name, a.name = "") : (e = ["string" == typeof S.hiddenPrefix ? S.hiddenPrefix : "", "string" == typeof S.hiddenSuffix ? S.hiddenSuffix : "_submit"], e = e[0] + a.name + e[1]), E._hidden = t('<input type=hidden name="' + e + '"' + (P.data("value") || a.value ? ' value="' + E.get("select", S.formatSubmit) + '"' : "") + ">")[0], P.on("change." + C.id, function () {
        E._hidden.value = a.value ? E.get("select", S.formatSubmit) : "";
      });
    }function y() {
      x && h ? E.$holder.find("." + k.frame).one("transitionend", function () {
        E.$holder[0].focus();
      }) : E.$holder[0].focus();
    }function b(t) {
      t.stopPropagation(), P.addClass(k.target), E.$root.addClass(k.focused), E.open();
    }function w(t) {
      var e = t.keyCode,
          i = /^(8|46)$/.test(e);if (27 == e) return E.close(!0), !1;(32 == e || i || !C.open && E.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? E.clear().close() : E.open());
    }if (!a) return e;var x = !1,
        C = { id: a.id || "P" + Math.abs(~~(Math.random() * new Date())) },
        S = l ? t.extend(!0, {}, l.defaults, d) : d || {},
        k = t.extend({}, e.klasses(), S.klass),
        P = t(a),
        T = function T() {
      return this.start();
    },
        E = T.prototype = { constructor: T, $node: P, start: function start() {
        return C && C.start ? E : (C.methods = {}, C.start = !0, C.open = !1, C.type = a.type, a.autofocus = a == r(), a.readOnly = !S.editable, a.id = a.id || C.id, "text" != a.type && (a.type = "text"), E.component = new l(E, S), E.$root = t('<div class="' + k.picker + '" id="' + a.id + '_root" />'), m(), E.$holder = t(p()).appendTo(E.$root), v(), S.formatSubmit && g(), f(), S.containerHidden ? t(S.containerHidden).append(E._hidden) : P.after(E._hidden), S.container ? t(S.container).append(E.$root) : P.after(E.$root), E.on({ start: E.component.onStart, render: E.component.onRender, stop: E.component.onStop, open: E.component.onOpen, close: E.component.onClose, set: E.component.onSet }).on({ start: S.onStart, render: S.onRender, stop: S.onStop, open: S.onOpen, close: S.onClose, set: S.onSet }), x = i(E.$holder[0]), a.autofocus && E.open(), E.trigger("start").trigger("render"));
      }, render: function render(e) {
        return e ? (E.$holder = t(p()), v(), E.$root.html(E.$holder)) : E.$root.find("." + k.box).html(E.component.nodes(C.open)), E.trigger("render");
      }, stop: function stop() {
        return C.start ? (E.close(), E._hidden && E._hidden.parentNode.removeChild(E._hidden), E.$root.remove(), P.removeClass(k.input).removeData(s), setTimeout(function () {
          P.off("." + C.id);
        }, 0), a.type = C.type, a.readOnly = !1, E.trigger("stop"), C.methods = {}, C.start = !1, E) : E;
      }, open: function open(i) {
        return C.open ? E : (P.addClass(k.active), o(a, "expanded", !0), setTimeout(function () {
          E.$root.addClass(k.opened), o(E.$root[0], "hidden", !1);
        }, 0), i !== !1 && (C.open = !0, x && u.css("overflow", "hidden").css("padding-right", "+=" + n()), y(), c.on("click." + C.id + " focusin." + C.id, function (t) {
          var e = t.target;e != a && e != document && 3 != t.which && E.close(e === E.$holder[0]);
        }).on("keydown." + C.id, function (i) {
          var n = i.keyCode,
              o = E.component.key[n],
              a = i.target;27 == n ? E.close(!0) : a != E.$holder[0] || !o && 13 != n ? t.contains(E.$root[0], a) && 13 == n && (i.preventDefault(), a.click()) : (i.preventDefault(), o ? e._.trigger(E.component.key.go, E, [e._.trigger(o)]) : E.$root.find("." + k.highlighted).hasClass(k.disabled) || (E.set("select", E.component.item.highlight), S.closeOnSelect && E.close(!0)));
        })), E.trigger("open"));
      }, close: function close(t) {
        return t && (S.editable ? a.focus() : (E.$holder.off("focus.toOpen").focus(), setTimeout(function () {
          E.$holder.on("focus.toOpen", b);
        }, 0))), P.removeClass(k.active), o(a, "expanded", !1), setTimeout(function () {
          E.$root.removeClass(k.opened + " " + k.focused), o(E.$root[0], "hidden", !0);
        }, 0), C.open ? (C.open = !1, x && u.css("overflow", "").css("padding-right", "-=" + n()), c.off("." + C.id), E.trigger("close")) : E;
      }, clear: function clear(t) {
        return E.set("clear", null, t);
      }, set: function set(e, i, n) {
        var o,
            a,
            s = t.isPlainObject(e),
            r = s ? e : {};if (n = s && t.isPlainObject(i) ? i : n || {}, e) {
          s || (r[e] = i);for (o in r) {
            a = r[o], o in E.component.item && (void 0 === a && (a = null), E.component.set(o, a, n)), "select" != o && "clear" != o || P.val("clear" == o ? "" : E.get(o, S.format)).trigger("change");
          }E.render();
        }return n.muted ? E : E.trigger("set", r);
      }, get: function get(t, i) {
        if (t = t || "value", null != C[t]) return C[t];if ("valueSubmit" == t) {
          if (E._hidden) return E._hidden.value;t = "value";
        }if ("value" == t) return a.value;if (t in E.component.item) {
          if ("string" == typeof i) {
            var n = E.component.get(t);return n ? e._.trigger(E.component.formats.toString, E.component, [i, n]) : "";
          }return E.component.get(t);
        }
      }, on: function on(e, i, n) {
        var o,
            a,
            s = t.isPlainObject(e),
            r = s ? e : {};if (e) {
          s || (r[e] = i);for (o in r) {
            a = r[o], n && (o = "_" + o), C.methods[o] = C.methods[o] || [], C.methods[o].push(a);
          }
        }return E;
      }, off: function off() {
        var t,
            e,
            i = arguments;for (t = 0, namesCount = i.length; t < namesCount; t += 1) {
          (e = i[t]) in C.methods && delete C.methods[e];
        }return E;
      }, trigger: function trigger(t, i) {
        var n = function n(t) {
          var n = C.methods[t];n && n.map(function (t) {
            e._.trigger(t, E, [i]);
          });
        };return n("_" + t), n(t), E;
      } };return new T();
  }function i(t) {
    var e;return t.currentStyle ? e = t.currentStyle.position : window.getComputedStyle && (e = getComputedStyle(t).position), "fixed" == e;
  }function n() {
    if (u.height() <= l.height()) return 0;var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
        i = e[0].offsetWidth;e.css("overflow", "scroll");var n = t('<div style="width:100%" />').appendTo(e),
        o = n[0].offsetWidth;return e.remove(), i - o;
  }function o(e, i, n) {
    if (t.isPlainObject(i)) for (var o in i) {
      a(e, o, i[o]);
    } else a(e, i, n);
  }function a(t, e, i) {
    t.setAttribute(("role" == e ? "" : "aria-") + e, i);
  }function s(e, i) {
    t.isPlainObject(e) || (e = { attribute: i }), i = "";for (var n in e) {
      var o = ("role" == n ? "" : "aria-") + n;i += null == e[n] ? "" : o + '="' + e[n] + '"';
    }return i;
  }function r() {
    try {
      return document.activeElement;
    } catch (t) {}
  }var l = t(window),
      c = t(document),
      u = t(document.documentElement),
      h = null != document.documentElement.style.transition;return e.klasses = function (t) {
    return t = t || "picker", { picker: t, opened: t + "--opened", focused: t + "--focused", input: t + "__input", active: t + "__input--active", target: t + "__input--target", holder: t + "__holder", frame: t + "__frame", wrap: t + "__wrap", box: t + "__box" };
  }, e._ = { group: function group(t) {
      for (var i, n = "", o = e._.trigger(t.min, t); o <= e._.trigger(t.max, t, [o]); o += t.i) {
        i = e._.trigger(t.item, t, [o]), n += e._.node(t.node, i[0], i[1], i[2]);
      }return n;
    }, node: function node(e, i, n, o) {
      return i ? (i = t.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", o = o ? " " + o : "", "<" + e + n + o + ">" + i + "</" + e + ">") : "";
    }, lead: function lead(t) {
      return (t < 10 ? "0" : "") + t;
    }, trigger: function trigger(t, e, i) {
      return "function" == typeof t ? t.apply(e, i || []) : t;
    }, digits: function digits(t) {
      return (/\d/.test(t[1]) ? 2 : 1
      );
    }, isDate: function isDate(t) {
      return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate());
    }, isInteger: function isInteger(t) {
      return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0;
    }, ariaAttr: s }, e.extend = function (i, n) {
    t.fn[i] = function (o, a) {
      var s = this.data(i);return "picker" == o ? s : s && "string" == typeof o ? e._.trigger(s[o], s, [a]) : this.each(function () {
        t(this).data(i) || new e(this, i, n, o);
      });
    }, t.fn[i].defaults = n.defaults;
  }, e;
}), function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery);
}(function (t, e) {
  function i(t, e) {
    var i = this,
        n = t.$node[0],
        o = n.value,
        a = t.$node.data("value"),
        s = a || o,
        r = a ? e.formatSubmit : e.format,
        l = function l() {
      return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction;
    };i.settings = e, i.$node = t.$node, i.queue = { min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate" }, i.item = {}, i.item.clear = null, i.item.disable = (e.disable || []).slice(0), i.item.enable = -function (t) {
      return t[0] === !0 ? t.shift() : -1;
    }(i.item.disable), i.set("min", e.min).set("max", e.max).set("now"), s ? i.set("select", s, { format: r, defaultValue: !0 }) : i.set("select", null).set("highlight", i.item.now), i.key = { 40: 7, 38: -7, 39: function _() {
        return l() ? -1 : 1;
      }, 37: function _() {
        return l() ? 1 : -1;
      }, go: function go(t) {
        var e = i.item.highlight,
            n = new Date(e.year, e.month, e.date + t);i.set("highlight", n, { interval: t }), this.render();
      } }, t.on("render", function () {
      t.$root.find("." + e.klass.selectMonth).on("change", function () {
        var i = this.value;i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"));
      }), t.$root.find("." + e.klass.selectYear).on("change", function () {
        var i = this.value;i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"));
      });
    }, 1).on("open", function () {
      var n = "";i.disabled(i.get("now")) && (n = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + n + ", select").attr("disabled", !1);
    }, 1).on("close", function () {
      t.$root.find("button, select").attr("disabled", !0);
    }, 1);
  }var n = t._;i.prototype.set = function (t, e, i) {
    var n = this,
        o = n.item;return null === e ? ("clear" == t && (t = "select"), o[t] = e, n) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function (o) {
      return e = n[o](t, e, i);
    }).pop(), "select" == t ? n.set("highlight", o.select, i) : "highlight" == t ? n.set("view", o.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n);
  }, i.prototype.get = function (t) {
    return this.item[t];
  }, i.prototype.create = function (t, i, o) {
    var a,
        s = this;return i = void 0 === i ? t : i, i == -(1 / 0) || i == 1 / 0 ? a = i : e.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : s.create().obj) : i = n.isInteger(i) || n.isDate(i) ? s.normalize(new Date(i), o) : s.now(t, i, o), { year: a || i.getFullYear(), month: a || i.getMonth(), date: a || i.getDate(), day: a || i.getDay(), obj: a || i, pick: a || i.getTime() };
  }, i.prototype.createRange = function (t, i) {
    var o = this,
        a = function a(t) {
      return t === !0 || e.isArray(t) || n.isDate(t) ? o.create(t) : t;
    };return n.isInteger(t) || (t = a(t)), n.isInteger(i) || (i = a(i)), n.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : n.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), { from: a(t), to: a(i) };
  }, i.prototype.withinRange = function (t, e) {
    return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick;
  }, i.prototype.overlapRanges = function (t, e) {
    var i = this;return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to);
  }, i.prototype.now = function (t, e, i) {
    return e = new Date(), i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i);
  }, i.prototype.navigate = function (t, i, n) {
    var o,
        a,
        s,
        r,
        l = e.isArray(i),
        c = e.isPlainObject(i),
        u = this.item.view;if (l || c) {
      for (c ? (a = i.year, s = i.month, r = i.date) : (a = +i[0], s = +i[1], r = +i[2]), n && n.nav && u && u.month !== s && (a = u.year, s = u.month), o = new Date(a, s + (n && n.nav ? n.nav : 0), 1), a = o.getFullYear(), s = o.getMonth(); new Date(a, s, r).getMonth() !== s;) {
        r -= 1;
      }i = [a, s, r];
    }return i;
  }, i.prototype.normalize = function (t) {
    return t.setHours(0, 0, 0, 0), t;
  }, i.prototype.measure = function (t, e) {
    var i = this;return e ? "string" == typeof e ? e = i.parse(t, e) : n.isInteger(e) && (e = i.now(t, e, { rel: e })) : e = "min" == t ? -(1 / 0) : 1 / 0, e;
  }, i.prototype.viewset = function (t, e) {
    return this.create([e.year, e.month, 1]);
  }, i.prototype.validate = function (t, i, o) {
    var a,
        s,
        r,
        l,
        c = this,
        u = i,
        h = o && o.interval ? o.interval : 1,
        d = c.item.enable === -1,
        p = c.item.min,
        f = c.item.max,
        m = d && c.item.disable.filter(function (t) {
      if (e.isArray(t)) {
        var o = c.create(t).pick;o < i.pick ? a = !0 : o > i.pick && (s = !0);
      }return n.isInteger(t);
    }).length;if ((!o || !o.nav && !o.defaultValue) && (!d && c.disabled(i) || d && c.disabled(i) && (m || a || s) || !d && (i.pick <= p.pick || i.pick >= f.pick))) for (d && !m && (!s && h > 0 || !a && h < 0) && (h *= -1); c.disabled(i) && (Math.abs(h) > 1 && (i.month < u.month || i.month > u.month) && (i = u, h = h > 0 ? 1 : -1), i.pick <= p.pick ? (r = !0, h = 1, i = c.create([p.year, p.month, p.date + (i.pick === p.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, h = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !r || !l);) {
      i = c.create([i.year, i.month, i.date + h]);
    }return i;
  }, i.prototype.disabled = function (t) {
    var i = this,
        o = i.item.disable.filter(function (o) {
      return n.isInteger(o) ? t.day === (i.settings.firstDay ? o : o - 1) % 7 : e.isArray(o) || n.isDate(o) ? t.pick === i.create(o).pick : e.isPlainObject(o) ? i.withinRange(o, t) : void 0;
    });return o = o.length && !o.filter(function (t) {
      return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted;
    }).length, i.item.enable === -1 ? !o : o || t.pick < i.item.min.pick || t.pick > i.item.max.pick;
  }, i.prototype.parse = function (t, e, i) {
    var o = this,
        a = {};return e && "string" == typeof e ? (i && i.format || (i = i || {}, i.format = o.settings.format), o.formats.toArray(i.format).map(function (t) {
      var i = o.formats[t],
          s = i ? n.trigger(i, o, [e, a]) : t.replace(/^!/, "").length;i && (a[t] = e.substr(0, s)), e = e.substr(s);
    }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e;
  }, i.prototype.formats = function () {
    function t(t, e, i) {
      var n = t.match(/[^\x00-\x7F]+|\w+/)[0];return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length;
    }function e(t) {
      return t.match(/\w+/)[0].length;
    }return { d: function d(t, e) {
        return t ? n.digits(t) : e.date;
      }, dd: function dd(t, e) {
        return t ? 2 : n.lead(e.date);
      }, ddd: function ddd(t, i) {
        return t ? e(t) : this.settings.weekdaysShort[i.day];
      }, dddd: function dddd(t, i) {
        return t ? e(t) : this.settings.weekdaysFull[i.day];
      }, m: function m(t, e) {
        return t ? n.digits(t) : e.month + 1;
      }, mm: function mm(t, e) {
        return t ? 2 : n.lead(e.month + 1);
      }, mmm: function mmm(e, i) {
        var n = this.settings.monthsShort;return e ? t(e, n, i) : n[i.month];
      }, mmmm: function mmmm(e, i) {
        var n = this.settings.monthsFull;return e ? t(e, n, i) : n[i.month];
      }, yy: function yy(t, e) {
        return t ? 2 : ("" + e.year).slice(2);
      }, yyyy: function yyyy(t, e) {
        return t ? 4 : e.year;
      }, toArray: function toArray(t) {
        return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
      }, toString: function toString(t, e) {
        var i = this;return i.formats.toArray(t).map(function (t) {
          return n.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "");
        }).join("");
      } };
  }(), i.prototype.isDateExact = function (t, i) {
    var o = this;return n.isInteger(t) && n.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (n.isDate(t) || e.isArray(t)) && (n.isDate(i) || e.isArray(i)) ? o.create(t).pick === o.create(i).pick : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && o.isDateExact(t.from, i.from) && o.isDateExact(t.to, i.to);
  }, i.prototype.isDateOverlap = function (t, i) {
    var o = this,
        a = o.settings.firstDay ? 1 : 0;return n.isInteger(t) && (n.isDate(i) || e.isArray(i)) ? (t = t % 7 + a) === o.create(i).day + 1 : n.isInteger(i) && (n.isDate(t) || e.isArray(t)) ? (i = i % 7 + a) === o.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && o.overlapRanges(t, i);
  }, i.prototype.flipEnable = function (t) {
    var e = this.item;e.enable = t || (e.enable == -1 ? 1 : -1);
  }, i.prototype.deactivate = function (t, i) {
    var o = this,
        a = o.item.disable.slice(0);return "flip" == i ? o.flipEnable() : i === !1 ? (o.flipEnable(1), a = []) : i === !0 ? (o.flipEnable(-1), a = []) : i.map(function (t) {
      for (var i, s = 0; s < a.length; s += 1) {
        if (o.isDateExact(t, a[s])) {
          i = !0;break;
        }
      }i || (n.isInteger(t) || n.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t);
    }), a;
  }, i.prototype.activate = function (t, i) {
    var o = this,
        a = o.item.disable,
        s = a.length;return "flip" == i ? o.flipEnable() : i === !0 ? (o.flipEnable(1), a = []) : i === !1 ? (o.flipEnable(-1), a = []) : i.map(function (t) {
      var i, r, l, c;for (l = 0; l < s; l += 1) {
        if (r = a[l], o.isDateExact(r, t)) {
          i = a[l] = null, c = !0;break;
        }if (o.isDateOverlap(r, t)) {
          e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t, i[3] || i.push("inverted")) : n.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);break;
        }
      }if (i) for (l = 0; l < s; l += 1) {
        if (o.isDateExact(a[l], t)) {
          a[l] = null;break;
        }
      }if (c) for (l = 0; l < s; l += 1) {
        if (o.isDateOverlap(a[l], t)) {
          a[l] = null;break;
        }
      }i && a.push(i);
    }), a.filter(function (t) {
      return null != t;
    });
  }, i.prototype.nodes = function (t) {
    var e = this,
        i = e.settings,
        o = e.item,
        a = o.now,
        s = o.select,
        r = o.highlight,
        l = o.view,
        c = o.disable,
        u = o.min,
        h = o.max,
        d = function (t, e) {
      return i.firstDay && (t.push(t.shift()), e.push(e.shift())), n.node("thead", n.node("tr", n.group({ min: 0, max: 6, i: 1, node: "th", item: function item(n) {
          return [t[n], i.klass.weekdays, 'scope=col title="' + e[n] + '"'];
        } })));
    }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysShort).slice(0), i.weekdaysFull.slice(0)),
        p = function p(t) {
      return n.node("div", " ", i.klass["nav" + (t ? "Next" : "Prev")] + (t && l.year >= h.year && l.month >= h.month || !t && l.year <= u.year && l.month <= u.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + n.ariaAttr({ role: "button", controls: e.$node[0].id + "_table" }) + ' title="' + (t ? i.labelMonthNext : i.labelMonthPrev) + '"');
    },
        f = function f() {
      var o = i.showMonthsShort ? i.monthsShort : i.monthsFull;return i.selectMonths ? n.node("select", n.group({ min: 0, max: 11, i: 1, node: "option", item: function item(t) {
          return [o[t], 0, "value=" + t + (l.month == t ? " selected" : "") + (l.year == u.year && t < u.month || l.year == h.year && t > h.month ? " disabled" : "")];
        } }), i.klass.selectMonth, (t ? "" : "disabled") + " " + n.ariaAttr({ controls: e.$node[0].id + "_table" }) + ' title="' + i.labelMonthSelect + '"') : n.node("div", o[l.month], i.klass.month);
    },
        m = function m() {
      var o = l.year,
          a = i.selectYears === !0 ? 5 : ~~(i.selectYears / 2);if (a) {
        var s = u.year,
            r = h.year,
            c = o - a,
            d = o + a;if (s > c && (d += s - c, c = s), r < d) {
          var p = c - s,
              f = d - r;c -= p > f ? f : p, d = r;
        }return n.node("select", n.group({ min: c, max: d, i: 1, node: "option", item: function item(t) {
            return [t, 0, "value=" + t + (o == t ? " selected" : "")];
          } }), i.klass.selectYear, (t ? "" : "disabled") + " " + n.ariaAttr({ controls: e.$node[0].id + "_table" }) + ' title="' + i.labelYearSelect + '"');
      }return n.node("div", o, i.klass.year);
    };return n.node("div", (i.selectYears ? m() + f() : f() + m()) + p() + p(1), i.klass.header) + n.node("table", d + n.node("tbody", n.group({ min: 0, max: 5, i: 1, node: "tr", item: function item(t) {
        var o = i.firstDay && 0 === e.create([l.year, l.month, 1]).day ? -7 : 0;return [n.group({ min: 7 * t - l.day + o + 1, max: function max() {
            return this.min + 7 - 1;
          }, i: 1, node: "td", item: function item(t) {
            t = e.create([l.year, l.month, t + (i.firstDay ? 1 : 0)]);var o = s && s.pick == t.pick,
                d = r && r.pick == t.pick,
                p = c && e.disabled(t) || t.pick < u.pick || t.pick > h.pick,
                f = n.trigger(e.formats.toString, e, [i.format, t]);return [n.node("div", t.date, function (e) {
              return e.push(l.month == t.month ? i.klass.infocus : i.klass.outfocus), a.pick == t.pick && e.push(i.klass.now), o && e.push(i.klass.selected), d && e.push(i.klass.highlighted), p && e.push(i.klass.disabled), e.join(" ");
            }([i.klass.day]), "data-pick=" + t.pick + " " + n.ariaAttr({ role: "gridcell", label: f, selected: !(!o || e.$node.val() !== f) || null, activedescendant: !!d || null, disabled: !!p || null })), "", n.ariaAttr({ role: "presentation" })];
          } })];
      } })), i.klass.table, 'id="' + e.$node[0].id + '_table" ' + n.ariaAttr({ role: "grid", controls: e.$node[0].id, readonly: !0 })) + n.node("div", n.node("button", i.today, i.klass.buttonToday, "type=button data-pick=" + a.pick + (t && !e.disabled(a) ? "" : " disabled") + " " + n.ariaAttr({ controls: e.$node[0].id })) + n.node("button", i.clear, i.klass.buttonClear, "type=button data-clear=1" + (t ? "" : " disabled") + " " + n.ariaAttr({ controls: e.$node[0].id })) + n.node("button", i.close, i.klass.buttonClose, "type=button data-close=true " + (t ? "" : " disabled") + " " + n.ariaAttr({ controls: e.$node[0].id })), i.klass.footer);
  }, i.defaults = function (t) {
    return { labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], today: "Today", clear: "Clear", close: "Close", closeOnSelect: !0, closeOnClear: !0, format: "d mmmm, yyyy", klass: { table: t + "table", header: t + "header", navPrev: t + "nav--prev", navNext: t + "nav--next", navDisabled: t + "nav--disabled", month: t + "month", year: t + "year", selectMonth: t + "select--month", selectYear: t + "select--year", weekdays: t + "weekday", day: t + "day", disabled: t + "day--disabled", selected: t + "day--selected", highlighted: t + "day--highlighted", now: t + "day--today", infocus: t + "day--infocus", outfocus: t + "day--outfocus", footer: t + "footer", buttonClear: t + "button--clear", buttonToday: t + "button--today", buttonClose: t + "button--close" } };
  }(t.klasses().picker + "__"), t.extend("pickadate", i);
}), $.extend($.fn.pickadate.defaults, { selectMonths: !0, selectYears: 15, onRender: function onRender() {
    var t = this.$root,
        e = this.get("highlight", "yyyy"),
        i = this.get("highlight", "dd"),
        n = this.get("highlight", "mmm"),
        o = this.get("highlight", "dddd");t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + n + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + e + "</div></div></div>");
  } }), function () {
  function t(t) {
    return document.createElementNS(l, t);
  }function e(t) {
    return (t < 10 ? "0" : "") + t;
  }function i(t) {
    var e = ++v + "";return t ? t + e : e;
  }function n(n, s) {
    function l(t, e) {
      var i = h.offset(),
          n = /^touch/.test(t.type),
          o = i.left + g,
          a = i.top + g,
          l = (n ? t.originalEvent.touches[0] : t).pageX - o,
          u = (n ? t.originalEvent.touches[0] : t).pageY - a,
          d = Math.sqrt(l * l + u * u),
          m = !1;if (!e || !(d < y - w || d > y + w)) {
        t.preventDefault();var v = setTimeout(function () {
          I.popover.addClass("clockpicker-moving");
        }, 200);c && h.append(I.canvas), I.setHand(l, u, !e, !0), r.off(p).on(p, function (t) {
          t.preventDefault();var e = /^touch/.test(t.type),
              i = (e ? t.originalEvent.touches[0] : t).pageX - o,
              n = (e ? t.originalEvent.touches[0] : t).pageY - a;(m || i !== l || n !== u) && (m = !0, I.setHand(i, n, !1, !0));
        }), r.off(f).on(f, function (t) {
          r.off(f), t.preventDefault();var i = /^touch/.test(t.type),
              n = (i ? t.originalEvent.changedTouches[0] : t).pageX - o,
              c = (i ? t.originalEvent.changedTouches[0] : t).pageY - a;(e || m) && n === l && c === u && I.setHand(n, c), "hours" === I.currentView ? I.toggleView("minutes", C / 2) : s.autoclose && (I.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
            I.done();
          }, C / 2)), h.prepend(z), clearTimeout(v), I.popover.removeClass("clockpicker-moving"), r.off(p);
        });
      }
    }var u = a(S),
        h = u.find(".clockpicker-plate"),
        m = u.find(".picker__holder"),
        v = u.find(".clockpicker-hours"),
        k = u.find(".clockpicker-minutes"),
        P = u.find(".clockpicker-am-pm-block"),
        T = "INPUT" === n.prop("tagName"),
        E = T ? n : n.find("input"),
        A = a("label[for=" + E.attr("id") + "]"),
        I = this;if (this.id = i("cp"), this.element = n, this.holder = m, this.options = s, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = T, this.input = E, this.label = A, this.popover = u, this.plate = h, this.hoursView = v, this.minutesView = k, this.amPmBlock = P, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", s.twelvehour) {
      var M = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");a(M);s.ampmclickable ? (this.spanAmPm.empty(), a('<div id="click-am">AM</div>').on("click", function () {
        I.spanAmPm.children("#click-am").addClass("text-primary"), I.spanAmPm.children("#click-pm").removeClass("text-primary"), I.amOrPm = "AM";
      }).appendTo(this.spanAmPm), a('<div id="click-pm">PM</div>').on("click", function () {
        I.spanAmPm.children("#click-pm").addClass("text-primary"), I.spanAmPm.children("#click-am").removeClass("text-primary"), I.amOrPm = "PM";
      }).appendTo(this.spanAmPm)) : (a('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
        I.amOrPm = "AM", I.amPmBlock.children(".pm-button").removeClass("active"), I.amPmBlock.children(".am-button").addClass("active"), I.spanAmPm.empty().append("AM");
      }).appendTo(this.amPmBlock), a('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
        I.amOrPm = "PM", I.amPmBlock.children(".am-button").removeClass("active"), I.amPmBlock.children(".pm-button").addClass("active"), I.spanAmPm.empty().append("PM");
      }).appendTo(this.amPmBlock));
    }s.darktheme && u.addClass("darktheme"), a('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (s.twelvehour ? "3" : "1") + '">' + s.donetext + "</button>").click(a.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(a.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(a.proxy(this.toggleView, this, "minutes")), E.on("focus.clockpicker click.clockpicker", a.proxy(this.show, this));var L,
        O,
        R,
        F,
        D = a('<div class="clockpicker-tick"></div>');if (s.twelvehour) for (L = 1; L < 13; L += 1) {
      O = D.clone(), R = L / 6 * Math.PI, F = y, O.css("font-size", "140%"), O.css({ left: g + Math.sin(R) * F - w, top: g - Math.cos(R) * F - w }), O.html(0 === L ? "00" : L), v.append(O), O.on(d, l);
    } else for (L = 0; L < 24; L += 1) {
      O = D.clone(), R = L / 6 * Math.PI;var W = L > 0 && L < 13;F = W ? b : y, O.css({ left: g + Math.sin(R) * F - w, top: g - Math.cos(R) * F - w }), W && O.css("font-size", "120%"), O.html(0 === L ? "00" : L), v.append(O), O.on(d, l);
    }for (L = 0; L < 60; L += 5) {
      O = D.clone(), R = L / 30 * Math.PI, O.css({ left: g + Math.sin(R) * y - w, top: g - Math.cos(R) * y - w }), O.css("font-size", "140%"), O.html(e(L)), k.append(O), O.on(d, l);
    }if (h.on(d, function (t) {
      0 === a(t.target).closest(".clockpicker-tick").length && l(t, !0);
    }), c) {
      var z = u.find(".clockpicker-canvas"),
          H = t("svg");H.setAttribute("class", "clockpicker-svg"), H.setAttribute("width", x), H.setAttribute("height", x);var _ = t("g");_.setAttribute("transform", "translate(" + g + "," + g + ")");var Y = t("circle");Y.setAttribute("class", "clockpicker-canvas-bearing"), Y.setAttribute("cx", 0), Y.setAttribute("cy", 0), Y.setAttribute("r", 2);var X = t("line");X.setAttribute("x1", 0), X.setAttribute("y1", 0);var V = t("circle");V.setAttribute("class", "clockpicker-canvas-bg"), V.setAttribute("r", w);var N = t("circle");N.setAttribute("class", "clockpicker-canvas-fg"), N.setAttribute("r", 5), _.appendChild(X), _.appendChild(V), _.appendChild(N), _.appendChild(Y), H.appendChild(_), z.append(H), this.hand = X, this.bg = V, this.fg = N, this.bearing = Y, this.g = _, this.canvas = z;
    }o(this.options.init);
  }function o(t) {
    t && "function" == typeof t && t();
  }var a = window.jQuery,
      s = a(window),
      r = a(document),
      l = "http://www.w3.org/2000/svg",
      c = "SVGAngle" in window && function () {
    var t,
        e = document.createElement("div");return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == l, e.innerHTML = "", t;
  }(),
      u = function () {
    var t = document.createElement("div").style;return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t;
  }(),
      h = "ontouchstart" in window,
      d = "mousedown" + (h ? " touchstart" : ""),
      p = "mousemove.clockpicker" + (h ? " touchmove.clockpicker" : ""),
      f = "mouseup.clockpicker" + (h ? " touchend.clockpicker" : ""),
      m = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
      v = 0,
      g = 135,
      y = 110,
      b = 80,
      w = 20,
      x = 2 * g,
      C = u ? 350 : 1,
      S = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");n.DEFAULTS = { default: "", fromnow: 0, donetext: "Done", autoclose: !1, ampmclickable: !1, darktheme: !1, twelvehour: !0, vibrate: !0 }, n.prototype.toggle = function () {
    this[this.isShown ? "hide" : "show"]();
  }, n.prototype.locate = function () {
    var t = this.element,
        e = this.popover;t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;e.show();
  }, n.prototype.show = function (t) {
    if (!this.isShown) {
      o(this.options.beforeShow), a(":input").each(function () {
        a(this).attr("tabindex", -1);
      });var i = this;this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), a(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), s.on("resize.clockpicker" + this.id, function () {
        i.isShown && i.locate();
      }), this.isAppended = !0);var n = ((this.input.prop("value") || this.options.default || "") + "").split(":");if (this.options.twelvehour && void 0 !== n[1] && (n[1] = n[1].replace("AM", "").replace("PM", "")), "now" === n[0]) {
        var l = new Date(+new Date() + this.options.fromnow);n = [l.getHours(), l.getMinutes()];
      }this.hours = +n[0] || 0, this.minutes = +n[1] || 0, this.spanHours.html(e(this.hours)), this.spanMinutes.html(e(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, r.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (t) {
        var e = a(t.target);0 === e.closest(i.popover.find(".picker__wrap")).length && 0 === e.closest(i.input).length && i.hide();
      }), r.on("keyup.clockpicker." + this.id, function (t) {
        27 === t.keyCode && i.hide();
      }), o(this.options.afterShow);
    }
  }, n.prototype.hide = function () {
    o(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), a(document.body).css("overflow", "visible"), this.isShown = !1, a(":input").each(function (t) {
      a(this).attr("tabindex", t + 1);
    }), r.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), r.off("keyup.clockpicker." + this.id), this.popover.hide(), o(this.options.afterHide);
  }, n.prototype.toggleView = function (t, e) {
    var i = !1;"minutes" === t && "visible" === a(this.hoursView).css("visibility") && (o(this.options.beforeHourSelect), i = !0);var n = "hours" === t,
        s = n ? this.hoursView : this.minutesView,
        r = n ? this.minutesView : this.hoursView;this.currentView = t, this.spanHours.toggleClass("text-primary", n), this.spanMinutes.toggleClass("text-primary", !n), r.addClass("clockpicker-dial-out"), s.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
      r.css("visibility", "hidden");
    }, C), i && o(this.options.afterHourSelect);
  }, n.prototype.resetClock = function (t) {
    var e = this.currentView,
        i = this[e],
        n = "hours" === e,
        o = Math.PI / (n ? 6 : 30),
        a = i * o,
        s = n && i > 0 && i < 13 ? b : y,
        r = Math.sin(a) * s,
        l = -Math.cos(a) * s,
        u = this;c && t ? (u.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
      u.canvas.removeClass("clockpicker-canvas-out"), u.setHand(r, l);
    }, t)) : this.setHand(r, l);
  }, n.prototype.setHand = function (t, i, n, o) {
    var s,
        r = Math.atan2(t, -i),
        l = "hours" === this.currentView,
        u = Math.PI / (l || n ? 6 : 30),
        h = Math.sqrt(t * t + i * i),
        d = this.options,
        p = l && h < (y + b) / 2,
        f = p ? b : y;if (d.twelvehour && (f = y), r < 0 && (r = 2 * Math.PI + r), s = Math.round(r / u), r = s * u, d.twelvehour ? l ? 0 === s && (s = 12) : (n && (s *= 5), 60 === s && (s = 0)) : l ? (12 === s && (s = 0), s = p ? 0 === s ? 12 : s : 0 === s ? 0 : s + 12) : (n && (s *= 5), 60 === s && (s = 0)), l ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : s % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== s && m && this.options.vibrate && (this.vibrateTimer || (navigator[m](10), this.vibrateTimer = setTimeout(a.proxy(function () {
      this.vibrateTimer = null;
    }, this), 100))), this[this.currentView] = s, this[l ? "spanHours" : "spanMinutes"].html(e(s)), !c) return void this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
      var t = a(this);t.toggleClass("active", s === +t.html());
    });o || !l && s % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));var v = Math.sin(r) * (f - w),
        g = -Math.cos(r) * (f - w),
        x = Math.sin(r) * f,
        C = -Math.cos(r) * f;this.hand.setAttribute("x2", v), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", x), this.bg.setAttribute("cy", C), this.fg.setAttribute("cx", x), this.fg.setAttribute("cy", C);
  }, n.prototype.done = function () {
    o(this.options.beforeDone), this.hide(), this.label.addClass("active");var t = this.input.prop("value"),
        i = e(this.hours) + ":" + e(this.minutes);this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), o(this.options.afterDone);
  }, n.prototype.remove = function () {
    this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (s.off("resize.clockpicker" + this.id), this.popover.remove());
  }, a.fn.pickatime = function (t) {
    var e = Array.prototype.slice.call(arguments, 1);return this.each(function () {
      var i = a(this),
          o = i.data("clockpicker");if (o) "function" == typeof o[t] && o[t].apply(o, e);else {
        var s = a.extend({}, n.DEFAULTS, i.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);i.data("clockpicker", new n(i, s));
      }
    });
  };
}(), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : t.PhotoSwipe = e();
}(this, function () {
  "use strict";
  return function (t, e, i, n) {
    var o = { features: null, bind: function bind(t, e, i, n) {
        var o = (n ? "remove" : "add") + "EventListener";e = e.split(" ");for (var a = 0; a < e.length; a++) {
          e[a] && t[o](e[a], i, !1);
        }
      }, isArray: function isArray(t) {
        return t instanceof Array;
      }, createEl: function createEl(t, e) {
        var i = document.createElement(e || "div");return t && (i.className = t), i;
      }, getScrollY: function getScrollY() {
        var t = window.pageYOffset;return void 0 !== t ? t : document.documentElement.scrollTop;
      }, unbind: function unbind(t, e, i) {
        o.bind(t, e, i, !0);
      }, removeClass: function removeClass(t, e) {
        var i = new RegExp("(\\s|^)" + e + "(\\s|$)");t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }, addClass: function addClass(t, e) {
        o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e);
      }, hasClass: function hasClass(t, e) {
        return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className);
      }, getChildByClass: function getChildByClass(t, e) {
        for (var i = t.firstChild; i;) {
          if (o.hasClass(i, e)) return i;i = i.nextSibling;
        }
      }, arraySearch: function arraySearch(t, e, i) {
        for (var n = t.length; n--;) {
          if (t[n][i] === e) return n;
        }return -1;
      }, extend: function extend(t, e, i) {
        for (var n in e) {
          if (e.hasOwnProperty(n)) {
            if (i && t.hasOwnProperty(n)) continue;t[n] = e[n];
          }
        }
      }, easing: { sine: { out: function out(t) {
            return Math.sin(t * (Math.PI / 2));
          }, inOut: function inOut(t) {
            return -(Math.cos(Math.PI * t) - 1) / 2;
          } }, cubic: { out: function out(t) {
            return --t * t * t + 1;
          } } }, detectFeatures: function detectFeatures() {
        if (o.features) return o.features;var t = o.createEl(),
            e = t.style,
            i = "",
            n = {};if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
          var a = navigator.userAgent;if (/iP(hone|od)/.test(navigator.platform)) {
            var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);s && s.length > 0 && (s = parseInt(s[1], 10)) >= 1 && 8 > s && (n.isOldIOSPhone = !0);
          }var r = a.match(/Android\s([0-9\.]*)/),
              l = r ? r[1] : 0;l = parseFloat(l), l >= 1 && (4.4 > l && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(a);
        }for (var c, u, h = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
          i = d[p];for (var f = 0; 3 > f; f++) {
            c = h[f], u = i + (i ? c.charAt(0).toUpperCase() + c.slice(1) : c), !n[c] && u in e && (n[c] = u);
          }i && !n.raf && (i = i.toLowerCase(), n.raf = window[i + "RequestAnimationFrame"], n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]));
        }if (!n.raf) {
          var m = 0;n.raf = function (t) {
            var e = new Date().getTime(),
                i = Math.max(0, 16 - (e - m)),
                n = window.setTimeout(function () {
              t(e + i);
            }, i);return m = e + i, n;
          }, n.caf = function (t) {
            clearTimeout(t);
          };
        }return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n;
      } };o.detectFeatures(), o.features.oldIE && (o.bind = function (t, e, i, n) {
      e = e.split(" ");for (var o, a = (n ? "detach" : "attach") + "Event", s = function s() {
        i.handleEvent.call(i);
      }, r = 0; r < e.length; r++) {
        if (o = e[r]) if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i.handleEvent) {
          if (n) {
            if (!i["oldIE" + o]) return !1;
          } else i["oldIE" + o] = s;t[a]("on" + o, i["oldIE" + o]);
        } else t[a]("on" + o, i);
      }
    });var a = this,
        s = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function isClickableElement(t) {
        return "A" === t.tagName;
      }, getDoubleTapZoom: function getDoubleTapZoom(t, e) {
        return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33;
      }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };o.extend(s, n);var r,
        l,
        c,
        u,
        h,
        d,
        p,
        f,
        m,
        v,
        g,
        y,
        b,
        w,
        x,
        C,
        S,
        k,
        P,
        T,
        E,
        A,
        I,
        M,
        L,
        O,
        R,
        F,
        D,
        W,
        z,
        H,
        _,
        Y,
        X,
        V,
        N,
        B,
        j,
        $,
        q,
        Q,
        U,
        Z,
        G,
        K,
        J,
        tt,
        et,
        it,
        nt,
        ot,
        at,
        st,
        rt,
        lt,
        ct = function ct() {
      return { x: 0, y: 0 };
    },
        ut = ct(),
        ht = ct(),
        dt = ct(),
        pt = {},
        ft = 0,
        mt = {},
        vt = ct(),
        gt = 0,
        yt = !0,
        bt = [],
        wt = {},
        xt = !1,
        Ct = function Ct(t, e) {
      o.extend(a, e.publicMethods), bt.push(t);
    },
        St = function St(t) {
      var e = Ue();return t > e - 1 ? t - e : 0 > t ? e + t : t;
    },
        kt = {},
        Pt = function Pt(t, e) {
      return kt[t] || (kt[t] = []), kt[t].push(e);
    },
        Tt = function Tt(t) {
      var e = kt[t];if (e) {
        var i = Array.prototype.slice.call(arguments);i.shift();for (var n = 0; n < e.length; n++) {
          e[n].apply(a, i);
        }
      }
    },
        Et = function Et() {
      return new Date().getTime();
    },
        At = function At(t) {
      st = t, a.bg.style.opacity = t * s.bgOpacity;
    },
        It = function It(t, e, i, n, o) {
      (!xt || o && o !== a.currItem) && (n /= o ? o.fitRatio : a.currItem.fitRatio), t[A] = y + e + "px, " + i + "px" + b + " scale(" + n + ")";
    },
        Mt = function Mt(t) {
      et && (t && (v > a.currItem.fitRatio ? xt || (ri(a.currItem, !1, !0), xt = !0) : xt && (ri(a.currItem), xt = !1)), It(et, dt.x, dt.y, v));
    },
        Lt = function Lt(t) {
      t.container && It(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t);
    },
        Ot = function Ot(t, e) {
      e[A] = y + t + "px, 0px" + b;
    },
        Rt = function Rt(t, e) {
      if (!s.loop && e) {
        var i = u + (vt.x * ft - t) / vt.x,
            n = Math.round(t - fe.x);(0 > i && n > 0 || i >= Ue() - 1 && 0 > n) && (t = fe.x + n * s.mainScrollEndFriction);
      }fe.x = t, Ot(t, h);
    },
        Ft = function Ft(t, e) {
      var i = me[t] - mt[t];return ht[t] + ut[t] + i - i * (e / g);
    },
        Dt = function Dt(t, e) {
      t.x = e.x, t.y = e.y, e.id && (t.id = e.id);
    },
        Wt = function Wt(t) {
      t.x = Math.round(t.x), t.y = Math.round(t.y);
    },
        zt = null,
        Ht = function Ht() {
      zt && (o.unbind(document, "mousemove", Ht), o.addClass(t, "pswp--has_mouse"), s.mouseUsed = !0, Tt("mouseUsed")), zt = setTimeout(function () {
        zt = null;
      }, 100);
    },
        _t = function _t() {
      o.bind(document, "keydown", a), z.transform && o.bind(a.scrollWrap, "click", a), s.mouseUsed || o.bind(document, "mousemove", Ht), o.bind(window, "resize scroll", a), Tt("bindEvents");
    },
        Yt = function Yt() {
      o.unbind(window, "resize", a), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", Ht), z.transform && o.unbind(a.scrollWrap, "click", a), B && o.unbind(window, p, a), Tt("unbindEvents");
    },
        Xt = function Xt(t, e) {
      var i = ni(a.currItem, pt, t);return e && (tt = i), i;
    },
        Vt = function Vt(t) {
      return t || (t = a.currItem), t.initialZoomLevel;
    },
        Nt = function Nt(t) {
      return t || (t = a.currItem), t.w > 0 ? s.maxSpreadZoom : 1;
    },
        Bt = function Bt(t, e, i, n) {
      return n === a.currItem.initialZoomLevel ? (i[t] = a.currItem.initialPosition[t], !0) : (i[t] = Ft(t, n), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] && (i[t] = e.max[t], !0));
    },
        jt = function jt() {
      if (A) {
        return y = "translate" + (z.perspective && !M ? "3d(" : "("), void (b = z.perspective ? ", 0px)" : ")");
      }A = "left", o.addClass(t, "pswp--ie"), Ot = function Ot(t, e) {
        e.left = t + "px";
      }, Lt = function Lt(t) {
        var e = t.fitRatio > 1 ? 1 : t.fitRatio,
            i = t.container.style,
            n = e * t.w,
            o = e * t.h;i.width = n + "px", i.height = o + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px";
      }, Mt = function Mt() {
        if (et) {
          var t = et,
              e = a.currItem,
              i = e.fitRatio > 1 ? 1 : e.fitRatio,
              n = i * e.w,
              o = i * e.h;t.width = n + "px", t.height = o + "px", t.left = dt.x + "px", t.top = dt.y + "px";
        }
      };
    },
        $t = function $t(t) {
      var e = "";s.escKey && 27 === t.keyCode ? e = "close" : s.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, a[e]()));
    },
        qt = function qt(t) {
      t && (q || $ || it || V) && (t.preventDefault(), t.stopPropagation());
    },
        Qt = function Qt() {
      a.setScrollOffset(0, o.getScrollY());
    },
        Ut = {},
        Zt = 0,
        Gt = function Gt(t) {
      Ut[t] && (Ut[t].raf && O(Ut[t].raf), Zt--, delete Ut[t]);
    },
        Kt = function Kt(t) {
      Ut[t] && Gt(t), Ut[t] || (Zt++, Ut[t] = {});
    },
        Jt = function Jt() {
      for (var t in Ut) {
        Ut.hasOwnProperty(t) && Gt(t);
      }
    },
        te = function te(t, e, i, n, o, a, s) {
      var r,
          l = Et();Kt(t);var c = function c() {
        if (Ut[t]) {
          if ((r = Et() - l) >= n) return Gt(t), a(i), void (s && s());a((i - e) * o(r / n) + e), Ut[t].raf = L(c);
        }
      };c();
    },
        ee = { shout: Tt, listen: Pt, viewportSize: pt, options: s, isMainScrollAnimating: function isMainScrollAnimating() {
        return it;
      }, getZoomLevel: function getZoomLevel() {
        return v;
      }, getCurrentIndex: function getCurrentIndex() {
        return u;
      }, isDragging: function isDragging() {
        return B;
      }, isZooming: function isZooming() {
        return G;
      }, setScrollOffset: function setScrollOffset(t, e) {
        mt.x = t, W = mt.y = e, Tt("updateScrollOffset", mt);
      }, applyZoomPan: function applyZoomPan(t, e, i, n) {
        dt.x = e, dt.y = i, v = t, Mt(n);
      }, init: function init() {
        if (!r && !l) {
          var i;a.framework = o, a.template = t, a.bg = o.getChildByClass(t, "pswp__bg"), R = t.className, r = !0, z = o.detectFeatures(), L = z.raf, O = z.caf, A = z.transform, D = z.oldIE, a.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), h = a.container.style, a.itemHolders = C = [{ el: a.container.children[0], wrap: 0, index: -1 }, { el: a.container.children[1], wrap: 0, index: -1 }, { el: a.container.children[2], wrap: 0, index: -1 }], C[0].el.style.display = C[2].el.style.display = "none", jt(), m = { resize: a.updateSize, scroll: Qt, keydown: $t, click: qt };var n = z.isOldIOSPhone || z.isOldAndroid || z.isMobileOpera;for (z.animationName && z.transform && !n || (s.showAnimationDuration = s.hideAnimationDuration = 0), i = 0; i < bt.length; i++) {
            a["init" + bt[i]]();
          }if (e) {
            (a.ui = new e(a, o)).init();
          }Tt("firstUpdate"), u = u || s.index || 0, (isNaN(u) || 0 > u || u >= Ue()) && (u = 0), a.currItem = Qe(u), (z.isOldIOSPhone || z.isOldAndroid) && (yt = !1), t.setAttribute("aria-hidden", "false"), s.modal && (yt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === W && (Tt("initialLayout"), W = F = o.getScrollY());var c = "pswp--open ";for (s.mainClass && (c += s.mainClass + " "), s.showHideOpacity && (c += "pswp--animate_opacity "), c += M ? "pswp--touch" : "pswp--notouch", c += z.animationName ? " pswp--css_animation" : "", c += z.svg ? " pswp--svg" : "", o.addClass(t, c), a.updateSize(), d = -1, gt = null, i = 0; 3 > i; i++) {
            Ot((i + d) * vt.x, C[i].el.style);
          }D || o.bind(a.scrollWrap, f, a), Pt("initialZoomInEnd", function () {
            a.setContent(C[0], u - 1), a.setContent(C[2], u + 1), C[0].el.style.display = C[2].el.style.display = "block", s.focus && t.focus(), _t();
          }), a.setContent(C[1], u), a.updateCurrItem(), Tt("afterInit"), yt || (w = setInterval(function () {
            Zt || B || G || v !== a.currItem.initialZoomLevel || a.updateSize();
          }, 1e3)), o.addClass(t, "pswp--visible");
        }
      }, close: function close() {
        r && (r = !1, l = !0, Tt("close"), Yt(), Ge(a.currItem, null, !0, a.destroy));
      }, destroy: function destroy() {
        Tt("destroy"), Be && clearTimeout(Be), t.setAttribute("aria-hidden", "true"), t.className = R, w && clearInterval(w), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), we(), Jt(), kt = null;
      }, panTo: function panTo(t, e, i) {
        i || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), dt.x = t, dt.y = e, Mt();
      }, handleEvent: function handleEvent(t) {
        t = t || window.event, m[t.type] && m[t.type](t);
      }, goTo: function goTo(t) {
        t = St(t);var e = t - u;gt = e, u = t, a.currItem = Qe(u), ft -= e, Rt(vt.x * ft), Jt(), it = !1, a.updateCurrItem();
      }, next: function next() {
        a.goTo(u + 1);
      }, prev: function prev() {
        a.goTo(u - 1);
      }, updateCurrZoomItem: function updateCurrZoomItem(t) {
        if (t && Tt("beforeChange", 0), C[1].el.children.length) {
          var e = C[1].el.children[0];et = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null;
        } else et = null;tt = a.currItem.bounds, g = v = a.currItem.initialZoomLevel, dt.x = tt.center.x, dt.y = tt.center.y, t && Tt("afterChange");
      }, invalidateCurrItems: function invalidateCurrItems() {
        x = !0;for (var t = 0; 3 > t; t++) {
          C[t].item && (C[t].item.needsUpdate = !0);
        }
      }, updateCurrItem: function updateCurrItem(t) {
        if (0 !== gt) {
          var e,
              i = Math.abs(gt);if (!(t && 2 > i)) {
            a.currItem = Qe(u), xt = !1, Tt("beforeChange", gt), i >= 3 && (d += gt + (gt > 0 ? -3 : 3), i = 3);for (var n = 0; i > n; n++) {
              gt > 0 ? (e = C.shift(), C[2] = e, d++, Ot((d + 2) * vt.x, e.el.style), a.setContent(e, u - i + n + 1 + 1)) : (e = C.pop(), C.unshift(e), d--, Ot(d * vt.x, e.el.style), a.setContent(e, u + i - n - 1 - 1));
            }if (et && 1 === Math.abs(gt)) {
              var o = Qe(S);o.initialZoomLevel !== v && (ni(o, pt), ri(o), Lt(o));
            }gt = 0, a.updateCurrZoomItem(), S = u, Tt("afterChange");
          }
        }
      }, updateSize: function updateSize(e) {
        if (!yt && s.modal) {
          var i = o.getScrollY();if (W !== i && (t.style.top = i + "px", W = i), !e && wt.x === window.innerWidth && wt.y === window.innerHeight) return;wt.x = window.innerWidth, wt.y = window.innerHeight, t.style.height = wt.y + "px";
        }if (pt.x = a.scrollWrap.clientWidth, pt.y = a.scrollWrap.clientHeight, Qt(), vt.x = pt.x + Math.round(pt.x * s.spacing), vt.y = pt.y, Rt(vt.x * ft), Tt("beforeResize"), void 0 !== d) {
          for (var n, r, l, c = 0; 3 > c; c++) {
            n = C[c], Ot((c + d) * vt.x, n.el.style), l = u + c - 1, s.loop && Ue() > 2 && (l = St(l)), r = Qe(l), r && (x || r.needsUpdate || !r.bounds) ? (a.cleanSlide(r), a.setContent(n, l), 1 === c && (a.currItem = r, a.updateCurrZoomItem(!0)), r.needsUpdate = !1) : -1 === n.index && l >= 0 && a.setContent(n, l), r && r.container && (ni(r, pt), ri(r), Lt(r));
          }x = !1;
        }g = v = a.currItem.initialZoomLevel, tt = a.currItem.bounds, tt && (dt.x = tt.center.x, dt.y = tt.center.y, Mt(!0)), Tt("resize");
      }, zoomTo: function zoomTo(t, e, i, n, a) {
        e && (g = v, me.x = Math.abs(e.x) - dt.x, me.y = Math.abs(e.y) - dt.y, Dt(ht, dt));var s = Xt(t, !1),
            r = {};Bt("x", s, r, t), Bt("y", s, r, t);var l = v,
            c = { x: dt.x, y: dt.y };Wt(r);var u = function u(e) {
          1 === e ? (v = t, dt.x = r.x, dt.y = r.y) : (v = (t - l) * e + l, dt.x = (r.x - c.x) * e + c.x, dt.y = (r.y - c.y) * e + c.y), a && a(e), Mt(1 === e);
        };i ? te("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, u) : u(1);
      } },
        ie = {},
        ne = {},
        oe = {},
        ae = {},
        se = {},
        re = [],
        le = {},
        ce = [],
        ue = {},
        he = 0,
        de = ct(),
        pe = 0,
        fe = ct(),
        me = ct(),
        ve = ct(),
        ge = function ge(t, e) {
      return t.x === e.x && t.y === e.y;
    },
        ye = function ye(t, e) {
      return Math.abs(t.x - e.x) < 25 && Math.abs(t.y - e.y) < 25;
    },
        be = function be(t, e) {
      return ue.x = Math.abs(t.x - e.x), ue.y = Math.abs(t.y - e.y), Math.sqrt(ue.x * ue.x + ue.y * ue.y);
    },
        we = function we() {
      Q && (O(Q), Q = null);
    },
        xe = function xe() {
      B && (Q = L(xe), ze());
    },
        Ce = function Ce() {
      return !("fit" === s.scaleMode && v === a.currItem.initialZoomLevel);
    },
        Se = function Se(t, e) {
      return !(!t || t === document) && !(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (e(t) ? t : Se(t.parentNode, e));
    },
        ke = {},
        Pe = function Pe(t, e) {
      return ke.prevent = !Se(t.target, s.isClickableElement), Tt("preventDragEvent", t, e, ke), ke.prevent;
    },
        Te = function Te(t, e) {
      return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e;
    },
        Ee = function Ee(t, e, i) {
      i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y);
    },
        Ae = function Ae(t, e, i) {
      if (t - _ > 50) {
        var n = ce.length > 2 ? ce.shift() : {};n.x = e, n.y = i, ce.push(n), _ = t;
      }
    },
        Ie = function Ie() {
      var t = dt.y - a.currItem.initialPosition.y;return 1 - Math.abs(t / (pt.y / 2));
    },
        Me = {},
        Le = {},
        Oe = [],
        Re = function Re(t) {
      for (; Oe.length > 0;) {
        Oe.pop();
      }return I ? (lt = 0, re.forEach(function (t) {
        0 === lt ? Oe[0] = t : 1 === lt && (Oe[1] = t), lt++;
      })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (Oe[0] = Te(t.touches[0], Me), t.touches.length > 1 && (Oe[1] = Te(t.touches[1], Le))) : (Me.x = t.pageX, Me.y = t.pageY, Me.id = "", Oe[0] = Me), Oe;
    },
        Fe = function Fe(t, e) {
      var i,
          n,
          o,
          r,
          l = dt[t] + e[t],
          c = e[t] > 0,
          u = fe.x + e.x,
          h = fe.x - le.x;return i = l > tt.min[t] || l < tt.max[t] ? s.panEndFriction : 1, l = dt[t] + e[t] * i, !s.allowPanToNext && v !== a.currItem.initialZoomLevel || (et ? "h" !== nt || "x" !== t || $ || (c ? (l > tt.min[t] && (i = s.panEndFriction, tt.min[t] - l, n = tt.min[t] - ht[t]), (0 >= n || 0 > h) && Ue() > 1 ? (r = u, 0 > h && u > le.x && (r = le.x)) : tt.min.x !== tt.max.x && (o = l)) : (l < tt.max[t] && (i = s.panEndFriction, l - tt.max[t], n = ht[t] - tt.max[t]), (0 >= n || h > 0) && Ue() > 1 ? (r = u, h > 0 && u < le.x && (r = le.x)) : tt.min.x !== tt.max.x && (o = l))) : r = u, "x" !== t) ? void (it || U || v > a.currItem.fitRatio && (dt[t] += e[t] * i)) : (void 0 !== r && (Rt(r, !0), U = r !== le.x), tt.min.x !== tt.max.x && (void 0 !== o ? dt.x = o : U || (dt.x += e.x * i)), void 0 !== r);
    },
        De = function De(t) {
      if (!("mousedown" === t.type && t.button > 0)) {
        if (qe) return void t.preventDefault();if (!N || "mousedown" !== t.type) {
          if (Pe(t, !0) && t.preventDefault(), Tt("pointerDown"), I) {
            var e = o.arraySearch(re, t.pointerId, "id");0 > e && (e = re.length), re[e] = { x: t.pageX, y: t.pageY, id: t.pointerId };
          }var i = Re(t),
              n = i.length;Z = null, Jt(), B && 1 !== n || (B = ot = !0, o.bind(window, p, a), X = rt = at = V = U = q = j = $ = !1, nt = null, Tt("firstTouchStart", i), Dt(ht, dt), ut.x = ut.y = 0, Dt(ae, i[0]), Dt(se, ae), le.x = vt.x * ft, ce = [{ x: ae.x, y: ae.y }], _ = H = Et(), Xt(v, !0), we(), xe()), !G && n > 1 && !it && !U && (g = v, $ = !1, G = j = !0, ut.y = ut.x = 0, Dt(ht, dt), Dt(ie, i[0]), Dt(ne, i[1]), Ee(ie, ne, ve), me.x = Math.abs(ve.x) - dt.x, me.y = Math.abs(ve.y) - dt.y, K = J = be(ie, ne));
        }
      }
    },
        We = function We(t) {
      if (t.preventDefault(), I) {
        var e = o.arraySearch(re, t.pointerId, "id");if (e > -1) {
          var i = re[e];i.x = t.pageX, i.y = t.pageY;
        }
      }if (B) {
        var n = Re(t);if (nt || q || G) Z = n;else if (fe.x !== vt.x * ft) nt = "h";else {
          var a = Math.abs(n[0].x - ae.x) - Math.abs(n[0].y - ae.y);Math.abs(a) >= 10 && (nt = a > 0 ? "h" : "v", Z = n);
        }
      }
    },
        ze = function ze() {
      if (Z) {
        var t = Z.length;if (0 !== t) if (Dt(ie, Z[0]), oe.x = ie.x - ae.x, oe.y = ie.y - ae.y, G && t > 1) {
          if (ae.x = ie.x, ae.y = ie.y, !oe.x && !oe.y && ge(Z[1], ne)) return;Dt(ne, Z[1]), $ || ($ = !0, Tt("zoomGestureStarted"));var e = be(ie, ne),
              i = Ve(e);i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (rt = !0);var n = 1,
              o = Vt(),
              r = Nt();if (o > i) {
            if (s.pinchToClose && !rt && g <= a.currItem.initialZoomLevel) {
              var l = o - i,
                  c = 1 - l / (o / 1.2);At(c), Tt("onPinchClose", c), at = !0;
            } else n = (o - i) / o, n > 1 && (n = 1), i = o - n * (o / 3);
          } else i > r && (n = (i - r) / (6 * o), n > 1 && (n = 1), i = r + n * o);0 > n && (n = 0), K = e, Ee(ie, ne, de), ut.x += de.x - ve.x, ut.y += de.y - ve.y, Dt(ve, de), dt.x = Ft("x", i), dt.y = Ft("y", i), X = i > v, v = i, Mt();
        } else {
          if (!nt) return;if (ot && (ot = !1, Math.abs(oe.x) >= 10 && (oe.x -= Z[0].x - se.x), Math.abs(oe.y) >= 10 && (oe.y -= Z[0].y - se.y)), ae.x = ie.x, ae.y = ie.y, 0 === oe.x && 0 === oe.y) return;if ("v" === nt && s.closeOnVerticalDrag && !Ce()) {
            ut.y += oe.y, dt.y += oe.y;var u = Ie();return V = !0, Tt("onVerticalDrag", u), At(u), void Mt();
          }Ae(Et(), ie.x, ie.y), q = !0, tt = a.currItem.bounds;var h = Fe("x", oe);h || (Fe("y", oe), Wt(dt), Mt());
        }
      }
    },
        He = function He(t) {
      if (z.isOldAndroid) {
        if (N && "mouseup" === t.type) return;t.type.indexOf("touch") > -1 && (clearTimeout(N), N = setTimeout(function () {
          N = 0;
        }, 600));
      }Tt("pointerUp"), Pe(t, !1) && t.preventDefault();var e;if (I) {
        var i = o.arraySearch(re, t.pointerId, "id");if (i > -1) if (e = re.splice(i, 1)[0], navigator.pointerEnabled) e.type = t.pointerType || "mouse";else {
          var n = { 4: "mouse", 2: "touch", 3: "pen" };e.type = n[t.pointerType], e.type || (e.type = t.pointerType || "mouse");
        }
      }var r,
          l = Re(t),
          c = l.length;if ("mouseup" === t.type && (c = 0), 2 === c) return Z = null, !0;1 === c && Dt(se, l[0]), 0 !== c || nt || it || (e || ("mouseup" === t.type ? e = { x: t.pageX, y: t.pageY, type: "mouse" } : t.changedTouches && t.changedTouches[0] && (e = { x: t.changedTouches[0].pageX, y: t.changedTouches[0].pageY, type: "touch" })), Tt("touchRelease", t, e));var u = -1;if (0 === c && (B = !1, o.unbind(window, p, a), we(), G ? u = 0 : -1 !== pe && (u = Et() - pe)), pe = 1 === c ? Et() : -1, r = -1 !== u && 150 > u ? "zoom" : "swipe", G && 2 > c && (G = !1, 1 === c && (r = "zoomPointerUp"), Tt("zoomGestureEnded")), Z = null, q || $ || it || V) if (Jt(), Y || (Y = _e()), Y.calculateSwipeSpeed("x"), V) {
        var h = Ie();if (h < s.verticalDragRange) a.close();else {
          var d = dt.y,
              f = st;te("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (t) {
            dt.y = (a.currItem.initialPosition.y - d) * t + d, At((1 - f) * t + f), Mt();
          }), Tt("onVerticalDrag", 1);
        }
      } else {
        if ((U || it) && 0 === c) {
          var m = Xe(r, Y);if (m) return;r = "zoomPointerUp";
        }if (!it) return "swipe" !== r ? void Ne() : void (!U && v > a.currItem.fitRatio && Ye(Y));
      }
    },
        _e = function _e() {
      var t,
          e,
          i = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function calculateSwipeSpeed(n) {
          ce.length > 1 ? (t = Et() - _ + 50, e = ce[ce.length - 2][n]) : (t = Et() - H, e = se[n]), i.lastFlickOffset[n] = ae[n] - e, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1;
        }, calculateOverBoundsAnimOffset: function calculateOverBoundsAnimOffset(t, e) {
          i.backAnimStarted[t] || (dt[t] > tt.min[t] ? i.backAnimDestination[t] = tt.min[t] : dt[t] < tt.max[t] && (i.backAnimDestination[t] = tt.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, te("bounceZoomPan" + t, dt[t], i.backAnimDestination[t], e || 300, o.easing.sine.out, function (e) {
            dt[t] = e, Mt();
          }))));
        }, calculateAnimOffset: function calculateAnimOffset(t) {
          i.backAnimStarted[t] || (i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, dt[t] += i.distanceOffset[t]);
        }, panAnimLoop: function panAnimLoop() {
          return Ut.zoomPan && (Ut.zoomPan.raf = L(i.panAnimLoop), i.now = Et(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Mt(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (dt.x = Math.round(dt.x), dt.y = Math.round(dt.y), Mt(), void Gt("zoomPan")) : void 0;
        } };return i;
    },
        Ye = function Ye(t) {
      return t.calculateSwipeSpeed("y"), tt = a.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (Kt("zoomPan"), t.lastNow = Et(), void t.panAnimLoop());
    },
        Xe = function Xe(t, e) {
      var i;it || (he = u);var n;if ("swipe" === t) {
        var r = ae.x - se.x,
            l = e.lastFlickDist.x < 10;r > 30 && (l || e.lastFlickOffset.x > 20) ? n = -1 : -30 > r && (l || e.lastFlickOffset.x < -20) && (n = 1);
      }var c;n && (u += n, 0 > u ? (u = s.loop ? Ue() - 1 : 0, c = !0) : u >= Ue() && (u = s.loop ? 0 : Ue() - 1, c = !0), (!c || s.loop) && (gt += n, ft -= n, i = !0));var h,
          d = vt.x * ft,
          p = Math.abs(d - fe.x);return i || d > fe.x == e.lastFlickSpeed.x > 0 ? (h = Math.abs(e.lastFlickSpeed.x) > 0 ? p / Math.abs(e.lastFlickSpeed.x) : 333, h = Math.min(h, 400), h = Math.max(h, 250)) : h = 333, he === u && (i = !1), it = !0, Tt("mainScrollAnimStart"), te("mainScroll", fe.x, d, h, o.easing.cubic.out, Rt, function () {
        Jt(), it = !1, he = -1, (i || he !== u) && a.updateCurrItem(), Tt("mainScrollAnimComplete");
      }), i && a.updateCurrItem(!0), i;
    },
        Ve = function Ve(t) {
      return 1 / J * t * g;
    },
        Ne = function Ne() {
      var t = v,
          e = Vt(),
          i = Nt();e > v ? t = e : v > i && (t = i);var n,
          s = st;return at && !X && !rt && e > v ? (a.close(), !0) : (at && (n = function n(t) {
        At((1 - s) * t + s);
      }), a.zoomTo(t, 0, 200, o.easing.cubic.out, n), !0);
    };Ct("Gestures", { publicMethods: { initGestures: function initGestures() {
          var t = function t(_t2, e, i, n, o) {
            k = _t2 + e, P = _t2 + i, T = _t2 + n, E = o ? _t2 + o : "";
          };I = z.pointerEvent, I && z.touch && (z.touch = !1), I ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : z.touch ? (t("touch", "start", "move", "end", "cancel"), M = !0) : t("mouse", "down", "move", "up"), p = P + " " + T + " " + E, f = k, I && !M && (M = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = M, m[k] = De, m[P] = We, m[T] = He, E && (m[E] = m[T]), z.touch && (f += " mousedown", p += " mousemove mouseup", m.mousedown = m[k], m.mousemove = m[P], m.mouseup = m[T]), M || (s.allowPanToNext = !1);
        } } });var Be,
        je,
        $e,
        qe,
        Qe,
        Ue,
        Ze,
        Ge = function Ge(e, i, n, r) {
      Be && clearTimeout(Be), qe = !0, $e = !0;var l;e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = s.getThumbBoundsFn && s.getThumbBoundsFn(u);var h = n ? s.hideAnimationDuration : s.showAnimationDuration,
          d = function d() {
        Gt("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (At(1), i && (i.style.display = "block"), o.addClass(t, "pswp--animated-in"), Tt("initialZoom" + (n ? "OutEnd" : "InEnd"))), r && r(), qe = !1;
      };if (!h || !l || void 0 === l.x) return Tt("initialZoom" + (n ? "Out" : "In")), v = e.initialZoomLevel, Dt(dt, e.initialPosition), Mt(), t.style.opacity = n ? 0 : 1, At(1), void (h ? setTimeout(function () {
        d();
      }, h) : d());!function () {
        var i = c,
            r = !a.currItem.src || a.currItem.loadError || s.showHideOpacity;e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (v = l.w / e.w, dt.x = l.x, dt.y = l.y - F, a[r ? "template" : "bg"].style.opacity = .001, Mt()), Kt("initialZoom"), n && !i && o.removeClass(t, "pswp--animated-in"), r && (n ? o[(i ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function () {
          o.addClass(t, "pswp--animate_opacity");
        }, 30)), Be = setTimeout(function () {
          if (Tt("initialZoom" + (n ? "Out" : "In")), n) {
            var a = l.w / e.w,
                s = { x: dt.x, y: dt.y },
                c = v,
                u = st,
                p = function p(e) {
              1 === e ? (v = a, dt.x = l.x, dt.y = l.y - W) : (v = (a - c) * e + c, dt.x = (l.x - s.x) * e + s.x, dt.y = (l.y - W - s.y) * e + s.y), Mt(), r ? t.style.opacity = 1 - e : At(u - e * u);
            };i ? te("initialZoom", 0, 1, h, o.easing.cubic.out, p, d) : (p(1), Be = setTimeout(d, h + 20));
          } else v = e.initialZoomLevel, Dt(dt, e.initialPosition), Mt(), At(1), r ? t.style.opacity = 1 : At(1), Be = setTimeout(d, h + 20);
        }, n ? 25 : 90);
      }();
    },
        Ke = {},
        Je = [],
        ti = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function getNumItemsFn() {
        return je.length;
      } },
        ei = function ei() {
      return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } };
    },
        ii = function ii(t, e, i) {
      var n = t.bounds;n.center.x = Math.round((Ke.x - e) / 2), n.center.y = Math.round((Ke.y - i) / 2) + t.vGap.top, n.max.x = e > Ke.x ? Math.round(Ke.x - e) : n.center.x, n.max.y = i > Ke.y ? Math.round(Ke.y - i) + t.vGap.top : n.center.y, n.min.x = e > Ke.x ? 0 : n.center.x, n.min.y = i > Ke.y ? t.vGap.top : n.center.y;
    },
        ni = function ni(t, e, i) {
      if (t.src && !t.loadError) {
        var n = !i;if (n && (t.vGap || (t.vGap = { top: 0, bottom: 0 }), Tt("parseVerticalMargin", t)), Ke.x = e.x, Ke.y = e.y - t.vGap.top - t.vGap.bottom, n) {
          var o = Ke.x / t.w,
              a = Ke.y / t.h;t.fitRatio = a > o ? o : a;var r = s.scaleMode;"orig" === r ? i = 1 : "fit" === r && (i = t.fitRatio), i > 1 && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = ei());
        }if (!i) return;return ii(t, t.w * i, t.h * i), n && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds;
      }return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = ei(), t.initialPosition = t.bounds.center, t.bounds;
    },
        oi = function oi(t, e, i, n, o, s) {
      e.loadError || n && (e.imageAppended = !0, ri(e, n, e === a.currItem && xt), i.appendChild(n), s && setTimeout(function () {
        e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null);
      }, 500));
    },
        ai = function ai(t) {
      t.loading = !0, t.loaded = !1;var e = t.img = o.createEl("pswp__img", "img"),
          i = function i() {
        t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null;
      };return e.onload = i, e.onerror = function () {
        t.loadError = !0, i();
      }, e.src = t.src, e;
    },
        si = function si(t, e) {
      return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = s.errorMsg.replace("%url%", t.src), !0) : void 0;
    },
        ri = function ri(t, e, i) {
      if (t.src) {
        e || (e = t.container.lastChild);var n = i ? t.w : Math.round(t.w * t.fitRatio),
            o = i ? t.h : Math.round(t.h * t.fitRatio);t.placeholder && !t.loaded && (t.placeholder.style.width = n + "px", t.placeholder.style.height = o + "px"), e.style.width = n + "px", e.style.height = o + "px";
      }
    },
        li = function li() {
      if (Je.length) {
        for (var t, e = 0; e < Je.length; e++) {
          t = Je[e], t.holder.index === t.index && oi(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
        }Je = [];
      }
    };Ct("Controller", { publicMethods: { lazyLoadItem: function lazyLoadItem(t) {
          t = St(t);var e = Qe(t);e && (!e.loaded && !e.loading || x) && (Tt("gettingData", t, e), e.src && ai(e));
        }, initController: function initController() {
          o.extend(s, ti, !0), a.items = je = i, Qe = a.getItemAt, Ue = s.getNumItemsFn, Ze = s.loop, Ue() < 3 && (s.loop = !1), Pt("beforeChange", function (t) {
            var e,
                i = s.preload,
                n = null === t || t >= 0,
                o = Math.min(i[0], Ue()),
                r = Math.min(i[1], Ue());for (e = 1; (n ? r : o) >= e; e++) {
              a.lazyLoadItem(u + e);
            }for (e = 1; (n ? o : r) >= e; e++) {
              a.lazyLoadItem(u - e);
            }
          }), Pt("initialLayout", function () {
            a.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(u);
          }), Pt("mainScrollAnimComplete", li), Pt("initialZoomInEnd", li), Pt("destroy", function () {
            for (var t, e = 0; e < je.length; e++) {
              t = je[e], t.container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
            }Je = null;
          });
        }, getItemAt: function getItemAt(t) {
          return t >= 0 && void 0 !== je[t] && je[t];
        }, allowProgressiveImg: function allowProgressiveImg() {
          return s.forceProgressiveLoading || !M || s.mouseUsed || screen.width > 1200;
        }, setContent: function setContent(t, e) {
          s.loop && (e = St(e));var i = a.getItemAt(t.index);i && (i.container = null);var n,
              l = a.getItemAt(e);if (!l) return void (t.el.innerHTML = "");Tt("gettingData", e, l), t.index = e, t.item = l;var c = l.container = o.createEl("pswp__zoom-wrap");if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), si(l), ni(l, pt), !l.src || l.loadError || l.loaded) l.src && !l.loadError && (n = o.createEl("pswp__img", "img"), n.style.opacity = 1, n.src = l.src, ri(l, n), oi(0, l, c, n));else {
            if (l.loadComplete = function (i) {
              if (r) {
                if (t && t.index === e) {
                  if (si(i, !0)) return i.loadComplete = i.img = null, ni(i, pt), Lt(i), void (t.index === u && a.updateCurrZoomItem());i.imageAppended ? !qe && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : z.transform && (it || qe) ? Je.push({ item: i, baseDiv: c, img: i.img, index: e, holder: t, clearPlaceholder: !0 }) : oi(0, i, c, i.img, 0, !0);
                }i.loadComplete = null, i.img = null, Tt("imageLoadComplete", e, i);
              }
            }, o.features.transform) {
              var h = "pswp__img pswp__img--placeholder";h += l.msrc ? "" : " pswp__img--placeholder--blank";var d = o.createEl(h, l.msrc ? "img" : "");l.msrc && (d.src = l.msrc), ri(l, d), c.appendChild(d), l.placeholder = d;
            }l.loading || ai(l), a.allowProgressiveImg() && (!$e && z.transform ? Je.push({ item: l, baseDiv: c, img: l.img, index: e, holder: t }) : oi(0, l, c, l.img, 0, !0));
          }$e || e !== u ? Lt(l) : (et = c.style, Ge(l, n || l.img)), t.el.innerHTML = "", t.el.appendChild(c);
        }, cleanSlide: function cleanSlide(t) {
          t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1;
        } } });var ci,
        ui = {},
        hi = function hi(t, e, i) {
      var n = document.createEvent("CustomEvent"),
          o = { origEvent: t, target: t.target, releasePoint: e, pointerType: i || "touch" };n.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(n);
    };Ct("Tap", { publicMethods: { initTap: function initTap() {
          Pt("firstTouchStart", a.onTapStart), Pt("touchRelease", a.onTapRelease), Pt("destroy", function () {
            ui = {}, ci = null;
          });
        }, onTapStart: function onTapStart(t) {
          t.length > 1 && (clearTimeout(ci), ci = null);
        }, onTapRelease: function onTapRelease(t, e) {
          if (e && !q && !j && !Zt) {
            var i = e;if (ci && (clearTimeout(ci), ci = null, ye(i, ui))) return void Tt("doubleTap", i);if ("mouse" === e.type) return void hi(t, e, "mouse");if ("BUTTON" === t.target.tagName.toUpperCase() || o.hasClass(t.target, "pswp__single-tap")) return void hi(t, e);Dt(ui, i), ci = setTimeout(function () {
              hi(t, e), ci = null;
            }, 300);
          }
        } } });var di;Ct("DesktopZoom", { publicMethods: { initDesktopZoom: function initDesktopZoom() {
          D || (M ? Pt("mouseUsed", function () {
            a.setupDesktopZoom();
          }) : a.setupDesktopZoom(!0));
        }, setupDesktopZoom: function setupDesktopZoom(e) {
          di = {};var i = "wheel mousewheel DOMMouseScroll";Pt("bindEvents", function () {
            o.bind(t, i, a.handleMouseWheel);
          }), Pt("unbindEvents", function () {
            di && o.unbind(t, i, a.handleMouseWheel);
          }), a.mouseZoomedIn = !1;var n,
              s = function s() {
            a.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > v ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), r();
          },
              r = function r() {
            n && (o.removeClass(t, "pswp--dragging"), n = !1);
          };Pt("resize", s), Pt("afterChange", s), Pt("pointerDown", function () {
            a.mouseZoomedIn && (n = !0, o.addClass(t, "pswp--dragging"));
          }), Pt("pointerUp", r), e || s();
        }, handleMouseWheel: function handleMouseWheel(t) {
          if (v <= a.currItem.fitRatio) return s.modal && (!s.closeOnScroll || Zt || B ? t.preventDefault() : A && Math.abs(t.deltaY) > 2 && (c = !0, a.close())), !0;if (t.stopPropagation(), di.x = 0, "deltaX" in t) 1 === t.deltaMode ? (di.x = 18 * t.deltaX, di.y = 18 * t.deltaY) : (di.x = t.deltaX, di.y = t.deltaY);else if ("wheelDelta" in t) t.wheelDeltaX && (di.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? di.y = -.16 * t.wheelDeltaY : di.y = -.16 * t.wheelDelta;else {
            if (!("detail" in t)) return;di.y = t.detail;
          }Xt(v, !0);var e = dt.x - di.x,
              i = dt.y - di.y;(s.modal || e <= tt.min.x && e >= tt.max.x && i <= tt.min.y && i >= tt.max.y) && t.preventDefault(), a.panTo(e, i);
        }, toggleDesktopZoom: function toggleDesktopZoom(e) {
          e = e || { x: pt.x / 2 + mt.x, y: pt.y / 2 + mt.y };var i = s.getDoubleTapZoom(!0, a.currItem),
              n = v === i;a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, e, 333), o[(n ? "remove" : "add") + "Class"](t, "pswp--zoomed-in");
        } } });var pi,
        fi,
        mi,
        vi,
        gi,
        yi,
        bi,
        wi,
        xi,
        Ci,
        Si,
        ki,
        Pi = { history: !0, galleryUID: 1 },
        Ti = function Ti() {
      return Si.hash.substring(1);
    },
        Ei = function Ei() {
      pi && clearTimeout(pi), mi && clearTimeout(mi);
    },
        Ai = function Ai() {
      var t = Ti(),
          e = {};if (t.length < 5) return e;var i,
          n = t.split("&");for (i = 0; i < n.length; i++) {
        if (n[i]) {
          var o = n[i].split("=");o.length < 2 || (e[o[0]] = o[1]);
        }
      }if (s.galleryPIDs) {
        var a = e.pid;for (e.pid = 0, i = 0; i < je.length; i++) {
          if (je[i].pid === a) {
            e.pid = i;break;
          }
        }
      } else e.pid = parseInt(e.pid, 10) - 1;return e.pid < 0 && (e.pid = 0), e;
    },
        Ii = function Ii() {
      if (mi && clearTimeout(mi), Zt || B) return void (mi = setTimeout(Ii, 500));vi ? clearTimeout(fi) : vi = !0;var t = u + 1,
          e = Qe(u);e.hasOwnProperty("pid") && (t = e.pid);var i = bi + "&gid=" + s.galleryUID + "&pid=" + t;wi || -1 === Si.hash.indexOf(i) && (Ci = !0);var n = Si.href.split("#")[0] + "#" + i;ki ? "#" + i !== window.location.hash && history[wi ? "replaceState" : "pushState"]("", document.title, n) : wi ? Si.replace(n) : Si.hash = i, wi = !0, fi = setTimeout(function () {
        vi = !1;
      }, 60);
    };Ct("History", { publicMethods: { initHistory: function initHistory() {
          if (o.extend(s, Pi, !0), s.history) {
            Si = window.location, Ci = !1, xi = !1, wi = !1, bi = Ti(), ki = "pushState" in history, bi.indexOf("gid=") > -1 && (bi = bi.split("&gid=")[0], bi = bi.split("?gid=")[0]), Pt("afterChange", a.updateURL), Pt("unbindEvents", function () {
              o.unbind(window, "hashchange", a.onHashChange);
            });var t = function t() {
              yi = !0, xi || (Ci ? history.back() : bi ? Si.hash = bi : ki ? history.pushState("", document.title, Si.pathname + Si.search) : Si.hash = ""), Ei();
            };Pt("unbindEvents", function () {
              c && t();
            }), Pt("destroy", function () {
              yi || t();
            }), Pt("firstUpdate", function () {
              u = Ai().pid;
            });var e = bi.indexOf("pid=");e > -1 && (bi = bi.substring(0, e), "&" === bi.slice(-1) && (bi = bi.slice(0, -1))), setTimeout(function () {
              r && o.bind(window, "hashchange", a.onHashChange);
            }, 40);
          }
        }, onHashChange: function onHashChange() {
          return Ti() === bi ? (xi = !0, void a.close()) : void (vi || (gi = !0, a.goTo(Ai().pid), gi = !1));
        }, updateURL: function updateURL() {
          Ei(), gi || (wi ? pi = setTimeout(Ii, 800) : Ii());
        } } }), o.extend(a, ee);
  };
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : t.PhotoSwipeUI_Default = e();
}(this, function () {
  "use strict";
  return function (t, e) {
    var i,
        n,
        o,
        a,
        s,
        r,
        l,
        c,
        u,
        h,
        d,
        p,
        f,
        m,
        v,
        g,
        y,
        b,
        w,
        x = this,
        C = !1,
        S = !0,
        k = !0,
        P = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function addCaptionHTMLFn(t, e) {
        return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1);
      }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function getImageURLForShare() {
        return t.currItem.src || "";
      }, getPageURLForShare: function getPageURLForShare() {
        return window.location.href;
      }, getTextForShare: function getTextForShare() {
        return t.currItem.title || "";
      }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
        T = function T(t) {
      if (g) return !0;t = t || window.event, v.timeToIdle && v.mouseUsed && !u && W();for (var i, n, o = t.target || t.srcElement, a = o.getAttribute("class") || "", s = 0; s < B.length; s++) {
        i = B[s], i.onTap && a.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
      }if (n) {
        t.stopPropagation && t.stopPropagation(), g = !0;var r = e.features.isOldAndroid ? 600 : 30;y = setTimeout(function () {
          g = !1;
        }, r);
      }
    },
        E = function E() {
      return !t.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth;
    },
        A = function A(t, i, n) {
      e[(n ? "add" : "remove") + "Class"](t, "pswp__" + i);
    },
        I = function I() {
      var t = 1 === v.getNumItemsFn();t !== m && (A(n, "ui--one-slide", t), m = t);
    },
        M = function M() {
      A(l, "share-modal--hidden", k);
    },
        L = function L() {
      return k = !k, k ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
        k && M();
      }, 300)) : (M(), setTimeout(function () {
        k || e.addClass(l, "pswp__share-modal--fade-in");
      }, 30)), k || R(), !1;
    },
        O = function O(e) {
      e = e || window.event;var i = e.target || e.srcElement;return t.shout("shareLinkClick", e, i), !!i.href && (!!i.hasAttribute("download") || (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), k || L(), !1));
    },
        R = function R() {
      for (var t, e, i, n, o, a = "", s = 0; s < v.shareButtons.length; s++) {
        t = v.shareButtons[s], i = v.getImageURLForShare(t), n = v.getPageURLForShare(t), o = v.getTextForShare(t), e = t.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(o)), a += '<a href="' + e + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", v.parseShareButtonOut && (a = v.parseShareButtonOut(t, a));
      }l.children[0].innerHTML = a, l.children[0].onclick = O;
    },
        F = function F(t) {
      for (var i = 0; i < v.closeElClasses.length; i++) {
        if (e.hasClass(t, "pswp__" + v.closeElClasses[i])) return !0;
      }
    },
        D = 0,
        W = function W() {
      clearTimeout(w), D = 0, u && x.setIdle(!1);
    },
        z = function z(t) {
      t = t ? t : window.event;var e = t.relatedTarget || t.toElement;e && "HTML" !== e.nodeName || (clearTimeout(w), w = setTimeout(function () {
        x.setIdle(!0);
      }, v.timeToIdleOutside));
    },
        H = function H() {
      v.fullscreenEl && !e.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (e.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs"));
    },
        _ = function _() {
      v.preloaderEl && (Y(!0), h("beforeChange", function () {
        clearTimeout(f), f = setTimeout(function () {
          t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && Y(!1) : Y(!0);
        }, v.loadingIndicatorDelay);
      }), h("imageLoadComplete", function (e, i) {
        t.currItem === i && Y(!0);
      }));
    },
        Y = function Y(t) {
      p !== t && (A(d, "preloader--active", !t), p = t);
    },
        X = function X(t) {
      var i = t.vGap;if (E()) {
        var s = v.barsSize;if (v.captionEl && "auto" === s.bottom) {
          if (a || (a = e.createEl("pswp__caption pswp__caption--fake"), a.appendChild(e.createEl("pswp__caption__center")), n.insertBefore(a, o), e.addClass(n, "pswp__ui--fit")), v.addCaptionHTMLFn(t, a, !0)) {
            var r = a.clientHeight;i.bottom = parseInt(r, 10) || 44;
          } else i.bottom = s.top;
        } else i.bottom = "auto" === s.bottom ? 0 : s.bottom;i.top = s.top;
      } else i.top = i.bottom = 0;
    },
        V = function V() {
      v.timeToIdle && h("mouseUsed", function () {
        e.bind(document, "mousemove", W), e.bind(document, "mouseout", z), b = setInterval(function () {
          2 === ++D && x.setIdle(!0);
        }, v.timeToIdle / 2);
      });
    },
        N = function N() {
      h("onVerticalDrag", function (t) {
        S && .95 > t ? x.hideControls() : !S && t >= .95 && x.showControls();
      });var t;h("onPinchClose", function (e) {
        S && .9 > e ? (x.hideControls(), t = !0) : t && !S && e > .9 && x.showControls();
      }), h("zoomGestureEnded", function () {
        (t = !1) && !S && x.showControls();
      });
    },
        B = [{ name: "caption", option: "captionEl", onInit: function onInit(t) {
        o = t;
      } }, { name: "share-modal", option: "shareEl", onInit: function onInit(t) {
        l = t;
      }, onTap: function onTap() {
        L();
      } }, { name: "button--share", option: "shareEl", onInit: function onInit(t) {
        r = t;
      }, onTap: function onTap() {
        L();
      } }, { name: "button--zoom", option: "zoomEl", onTap: t.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function onInit(t) {
        s = t;
      } }, { name: "button--close", option: "closeEl", onTap: t.close }, { name: "button--arrow--left", option: "arrowEl", onTap: t.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: t.next }, { name: "button--fs", option: "fullscreenEl", onTap: function onTap() {
        i.isFullscreen() ? i.exit() : i.enter();
      } }, { name: "preloader", option: "preloaderEl", onInit: function onInit(t) {
        d = t;
      } }],
        j = function j() {
      var t,
          i,
          o,
          a = function a(n) {
        if (n) for (var a = n.length, s = 0; a > s; s++) {
          t = n[s], i = t.className;for (var r = 0; r < B.length; r++) {
            o = B[r], i.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"));
          }
        }
      };a(n.children);var s = e.getChildByClass(n, "pswp__top-bar");s && a(s.children);
    };x.init = function () {
      e.extend(t.options, P, !0), v = t.options, n = e.getChildByClass(t.scrollWrap, "pswp__ui"), h = t.listen, N(), h("beforeChange", x.update), h("doubleTap", function (e) {
        var i = t.currItem.initialZoomLevel;t.getZoomLevel() !== i ? t.zoomTo(i, e, 333) : t.zoomTo(v.getDoubleTapZoom(!1, t.currItem), e, 333);
      }), h("preventDragEvent", function (t, e, i) {
        var n = t.target || t.srcElement;n && n.getAttribute("class") && t.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1);
      }), h("bindEvents", function () {
        e.bind(n, "pswpTap click", T), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver);
      }), h("unbindEvents", function () {
        k || L(), b && clearInterval(b), e.unbind(document, "mouseout", z), e.unbind(document, "mousemove", W), e.unbind(n, "pswpTap click", T), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), i && (e.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (v.hideAnimationDuration = 0, i.exit()), i = null);
      }), h("destroy", function () {
        v.captionEl && (a && n.removeChild(a), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(n, "pswp__ui--over-close"), e.addClass(n, "pswp__ui--hidden"), x.setIdle(!1);
      }), v.showAnimationDuration || e.removeClass(n, "pswp__ui--hidden"), h("initialZoomIn", function () {
        v.showAnimationDuration && e.removeClass(n, "pswp__ui--hidden");
      }), h("initialZoomOut", function () {
        e.addClass(n, "pswp__ui--hidden");
      }), h("parseVerticalMargin", X), j(), v.shareEl && r && l && (k = !0), I(), V(), H(), _();
    }, x.setIdle = function (t) {
      u = t, A(n, "ui--idle", t);
    }, x.update = function () {
      S && t.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(t.currItem, o), A(o, "caption--empty", !t.currItem.title)), C = !0) : C = !1, k || L(), I();
    }, x.updateFullscreen = function (n) {
      n && setTimeout(function () {
        t.setScrollOffset(0, e.getScrollY());
      }, 50), e[(i.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs");
    }, x.updateIndexIndicator = function () {
      v.counterEl && (s.innerHTML = t.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn());
    }, x.onGlobalTap = function (i) {
      i = i || window.event;var n = i.target || i.srcElement;if (!g) if (i.detail && "mouse" === i.detail.pointerType) {
        if (F(n)) return void t.close();e.hasClass(n, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? v.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(i.detail.releasePoint));
      } else if (v.tapToToggleControls && (S ? x.hideControls() : x.showControls()), v.tapToClose && (e.hasClass(n, "pswp__img") || F(n))) return void t.close();
    }, x.onMouseOver = function (t) {
      t = t || window.event, A(n, "ui--over-close", F(t.target || t.srcElement));
    }, x.hideControls = function () {
      e.addClass(n, "pswp__ui--hidden"), S = !1;
    }, x.showControls = function () {
      S = !0, C || x.update(), e.removeClass(n, "pswp__ui--hidden");
    }, x.supportsFullscreen = function () {
      var t = document;return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen);
    }, x.getFullscreenAPI = function () {
      var e,
          i = document.documentElement,
          n = "fullscreenchange";return i.requestFullscreen ? e = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: n } : i.mozRequestFullScreen ? e = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + n } : i.webkitRequestFullscreen ? e = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + n } : i.msRequestFullscreen && (e = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), e && (e.enter = function () {
        return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
      }, e.exit = function () {
        return v.closeOnScroll = c, document[this.exitK]();
      }, e.isFullscreen = function () {
        return document[this.elementK];
      }), e;
    };
  };
});var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(t) {
  for (var e = function e(t) {
    for (var e, i, n, o, a = t.childNodes, s = a.length, r = [], l = 0; l < s; l++) {
      e = a[l], 1 === e.nodeType && (i = e.children[0], n = i.getAttribute("data-size").split("x"), o = { src: i.getAttribute("href"), w: parseInt(n[0], 10), h: parseInt(n[1], 10) }, e.children.length > 1 && (o.title = e.children[1].innerHTML), i.children.length > 0 && (o.msrc = i.children[0].getAttribute("src")), o.el = e, r.push(o));
    }return r;
  }, i = function t(e, i) {
    return e && (i(e) ? e : t(e.parentNode, i));
  }, n = function n(t) {
    t = t || window.event, t.preventDefault ? t.preventDefault() : t.returnValue = !1;var e = t.target || t.srcElement,
        n = i(e, function (t) {
      return t.tagName && "FIGURE" === t.tagName.toUpperCase();
    });if (n) {
      for (var a, s = n.parentNode, r = n.parentNode.childNodes, l = r.length, c = 0, u = 0; u < l; u++) {
        if (1 === r[u].nodeType) {
          if (r[u] === n) {
            a = c;break;
          }c++;
        }
      }return a >= 0 && o(a, s), !1;
    }
  }, o = function o(t, i, n, _o2) {
    var a,
        s,
        r,
        l = document.querySelectorAll(".pswp")[0];if (r = e(i), s = { galleryUID: i.getAttribute("data-pswp-uid"), getThumbBoundsFn: function getThumbBoundsFn(t) {
        var e = r[t].el.getElementsByTagName("img")[0],
            i = window.pageYOffset || document.documentElement.scrollTop,
            n = e.getBoundingClientRect();return { x: n.left, y: n.top + i, w: n.width };
      } }, _o2) {
      if (s.galleryPIDs) {
        for (var c = 0; c < r.length; c++) {
          if (r[c].pid == t) {
            s.index = c;break;
          }
        }
      } else s.index = parseInt(t, 10) - 1;
    } else s.index = parseInt(t, 10);isNaN(s.index) || (n && (s.showAnimationDuration = 0), a = new PhotoSwipe(l, PhotoSwipeUI_Default, r, s), a.init());
  }, a = document.querySelectorAll(t), s = 0, r = a.length; s < r; s++) {
    a[s].setAttribute("data-pswp-uid", s + 1), a[s].onclick = n;
  }var l = function () {
    var t = window.location.hash.substring(1),
        e = {};if (t.length < 5) return e;for (var i = t.split("&"), n = 0; n < i.length; n++) {
      if (i[n]) {
        var o = i[n].split("=");o.length < 2 || (e[o[0]] = o[1]);
      }
    }return e.gid && (e.gid = parseInt(e.gid, 10)), e;
  }();l.pid && l.gid && o(l.pid, a[l.gid - 1], !0, !0);
};initPhotoSwipeFromDOM(".mdb-lightbox"), function (t) {
  t.fn.sticky = function (e) {
    var i = { topSpacing: 0, zIndex: "", stopper: ".sticky-stopper" },
        n = t.extend({}, i, e),
        o = function () {
      return "number" == typeof n.zIndex;
    }(),
        a = function () {
      return 0 < t(n.stopper).length || "number" == typeof n.stopper;
    }();return this.each(function () {
      function e() {
        var e = p.scrollTop();if (a && "string" == typeof d) var n = t(d).offset().top,
            r = n - s - l;else if (a && "number" == typeof d) var r = d;if (u < e) {
          if (i.after(h).css({ position: "fixed", top: l }), o && i.css({ zIndex: c }), a && r < e) {
            var f = r - e + l;i.css({ top: f });
          }
        } else i.css({ position: "static", top: null, left: null }), h.remove();
      }var i = t(this),
          s = i.outerHeight(),
          r = i.outerWidth(),
          l = n.topSpacing,
          c = n.zIndex,
          u = i.offset().top - l,
          h = t("<div></div>").width(r).height(s).addClass("sticky-placeholder"),
          d = n.stopper,
          p = t(window);p.bind("scroll", e);
    });
  };
}(jQuery), function t(e, i, n) {
  function o(s, r) {
    if (!i[s]) {
      if (!e[s]) {
        var l = "function" == typeof require && require;if (!r && l) return require(s, !0);if (a) return a(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
      }var u = i[s] = { exports: {} };e[s][0].call(u.exports, function (t) {
        var i = e[s][1][t];return o(i ? i : t);
      }, u, u.exports, t, e, i, n);
    }return i[s].exports;
  }for (var a = "function" == typeof require && require, s = 0; s < n.length; s++) {
    o(n[s]);
  }return o;
}({ 1: [function (t, e, i) {
    "use strict";
    var n = t("../main"); true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (window.PerfectScrollbar = n, void 0 === window.Ps && (window.Ps = n));
  }, { "../main": 7 }], 2: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      var i = t.className.split(" ");i.indexOf(e) < 0 && i.push(e), t.className = i.join(" ");
    }function o(t, e) {
      var i = t.className.split(" "),
          n = i.indexOf(e);n >= 0 && i.splice(n, 1), t.className = i.join(" ");
    }i.add = function (t, e) {
      t.classList ? t.classList.add(e) : n(t, e);
    }, i.remove = function (t, e) {
      t.classList ? t.classList.remove(e) : o(t, e);
    }, i.list = function (t) {
      return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ");
    };
  }, {}], 3: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      return window.getComputedStyle(t)[e];
    }function o(t, e, i) {
      return "number" == typeof i && (i = i.toString() + "px"), t.style[e] = i, t;
    }function a(t, e) {
      for (var i in e) {
        var n = e[i];"number" == typeof n && (n = n.toString() + "px"), t.style[i] = n;
      }return t;
    }var s = {};s.e = function (t, e) {
      var i = document.createElement(t);return i.className = e, i;
    }, s.appendTo = function (t, e) {
      return e.appendChild(t), t;
    }, s.css = function (t, e, i) {
      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? a(t, e) : void 0 === i ? n(t, e) : o(t, e, i);
    }, s.matches = function (t, e) {
      return void 0 !== t.matches ? t.matches(e) : void 0 !== t.matchesSelector ? t.matchesSelector(e) : void 0 !== t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : void 0 !== t.mozMatchesSelector ? t.mozMatchesSelector(e) : void 0 !== t.msMatchesSelector ? t.msMatchesSelector(e) : void 0;
    }, s.remove = function (t) {
      void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }, s.queryChildren = function (t, e) {
      return Array.prototype.filter.call(t.childNodes, function (t) {
        return s.matches(t, e);
      });
    }, e.exports = s;
  }, {}], 4: [function (t, e, i) {
    "use strict";
    var n = function n(t) {
      this.element = t, this.events = {};
    };n.prototype.bind = function (t, e) {
      void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1);
    }, n.prototype.unbind = function (t, e) {
      var i = void 0 !== e;this.events[t] = this.events[t].filter(function (n) {
        return !(!i || n === e) || (this.element.removeEventListener(t, n, !1), !1);
      }, this);
    }, n.prototype.unbindAll = function () {
      for (var t in this.events) {
        this.unbind(t);
      }
    };var o = function o() {
      this.eventElements = [];
    };o.prototype.eventElement = function (t) {
      var e = this.eventElements.filter(function (e) {
        return e.element === t;
      })[0];return void 0 === e && (e = new n(t), this.eventElements.push(e)), e;
    }, o.prototype.bind = function (t, e, i) {
      this.eventElement(t).bind(e, i);
    }, o.prototype.unbind = function (t, e, i) {
      this.eventElement(t).unbind(e, i);
    }, o.prototype.unbindAll = function () {
      for (var t = 0; t < this.eventElements.length; t++) {
        this.eventElements[t].unbindAll();
      }
    }, o.prototype.once = function (t, e, i) {
      var n = this.eventElement(t),
          o = function o(t) {
        n.unbind(e, o), i(t);
      };n.bind(e, o);
    }, e.exports = o;
  }, {}], 5: [function (t, e, i) {
    "use strict";
    e.exports = function () {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    }();
  }, {}], 6: [function (t, e, i) {
    "use strict";
    var n = t("./class"),
        o = t("./dom"),
        a = i.toInt = function (t) {
      return parseInt(t, 10) || 0;
    },
        s = i.clone = function (t) {
      if (null === t) return null;if (t.constructor === Array) return t.map(s);if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        var e = {};for (var i in t) {
          e[i] = s(t[i]);
        }return e;
      }return t;
    };i.extend = function (t, e) {
      var i = s(t);for (var n in e) {
        i[n] = s(e[n]);
      }return i;
    }, i.isEditable = function (t) {
      return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]");
    }, i.removePsClasses = function (t) {
      for (var e = n.list(t), i = 0; i < e.length; i++) {
        var o = e[i];0 === o.indexOf("ps-") && n.remove(t, o);
      }
    }, i.outerWidth = function (t) {
      return a(o.css(t, "width")) + a(o.css(t, "paddingLeft")) + a(o.css(t, "paddingRight")) + a(o.css(t, "borderLeftWidth")) + a(o.css(t, "borderRightWidth"));
    }, i.startScrolling = function (t, e) {
      n.add(t, "ps-in-scrolling"), void 0 !== e ? n.add(t, "ps-" + e) : (n.add(t, "ps-x"), n.add(t, "ps-y"));
    }, i.stopScrolling = function (t, e) {
      n.remove(t, "ps-in-scrolling"), void 0 !== e ? n.remove(t, "ps-" + e) : (n.remove(t, "ps-x"), n.remove(t, "ps-y"));
    }, i.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints };
  }, { "./class": 2, "./dom": 3 }], 7: [function (t, e, i) {
    "use strict";
    var n = t("./plugin/destroy"),
        o = t("./plugin/initialize"),
        a = t("./plugin/update");e.exports = { initialize: o, update: a, destroy: n };
  }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }], 8: [function (t, e, i) {
    "use strict";
    e.exports = { handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, stopPropagationOnClick: !0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" };
  }, {}], 9: [function (t, e, i) {
    "use strict";
    var n = t("../lib/helper"),
        o = t("../lib/dom"),
        a = t("./instances");e.exports = function (t) {
      var e = a.get(t);e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), n.removePsClasses(t), a.remove(t));
    };
  }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }], 10: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      function i(t) {
        return t.getBoundingClientRect();
      }var n = function n(t) {
        t.stopPropagation();
      };e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", n), e.event.bind(e.scrollbarYRail, "click", function (n) {
        var a = o.toInt(e.scrollbarYHeight / 2),
            l = e.railYRatio * (n.pageY - window.pageYOffset - i(e.scrollbarYRail).top - a),
            c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
            u = l / c;u < 0 ? u = 0 : u > 1 && (u = 1), r(t, "top", (e.contentHeight - e.containerHeight) * u), s(t), n.stopPropagation();
      }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", n), e.event.bind(e.scrollbarXRail, "click", function (n) {
        var a = o.toInt(e.scrollbarXWidth / 2),
            l = e.railXRatio * (n.pageX - window.pageXOffset - i(e.scrollbarXRail).left - a),
            c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
            u = l / c;u < 0 ? u = 0 : u > 1 && (u = 1), r(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), s(t), n.stopPropagation();
      });
    }var o = t("../../lib/helper"),
        a = t("../instances"),
        s = t("../update-geometry"),
        r = t("../update-scroll");e.exports = function (t) {
      n(t, a.get(t));
    };
  }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 11: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      function i(i) {
        var o = n + i * e.railXRatio,
            s = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);e.scrollbarXLeft = o < 0 ? 0 : o > s ? s : o, c(t, "left", a.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment);
      }var n = null,
          o = null,
          r = function r(e) {
        i(e.pageX - o), l(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        a.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", r);
      };e.event.bind(e.scrollbarX, "mousedown", function (i) {
        o = i.pageX, n = a.toInt(s.css(e.scrollbarX, "left")) * e.railXRatio, a.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", r), e.event.once(e.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault();
      });
    }function o(t, e) {
      function i(i) {
        var o = n + i * e.railYRatio,
            s = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);e.scrollbarYTop = o < 0 ? 0 : o > s ? s : o, c(t, "top", a.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight)));
      }var n = null,
          o = null,
          r = function r(e) {
        i(e.pageY - o), l(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        a.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", r);
      };e.event.bind(e.scrollbarY, "mousedown", function (i) {
        o = i.pageY, n = a.toInt(s.css(e.scrollbarY, "top")) * e.railYRatio, a.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", r), e.event.once(e.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault();
      });
    }var a = t("../../lib/helper"),
        s = t("../../lib/dom"),
        r = t("../instances"),
        l = t("../update-geometry"),
        c = t("../update-scroll");e.exports = function (t) {
      var e = r.get(t);n(t, e), o(t, e);
    };
  }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 12: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      function i(i, n) {
        var o = t.scrollTop;if (0 === i) {
          if (!e.scrollbarYActive) return !1;if (0 === o && n > 0 || o >= e.contentHeight - e.containerHeight && n < 0) return !e.settings.wheelPropagation;
        }var a = t.scrollLeft;if (0 === n) {
          if (!e.scrollbarXActive) return !1;if (0 === a && i < 0 || a >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation;
        }return !0;
      }var n = !1;e.event.bind(t, "mouseenter", function () {
        n = !0;
      }), e.event.bind(t, "mouseleave", function () {
        n = !1;
      });var s = !1;e.event.bind(e.ownerDocument, "keydown", function (c) {
        if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
          var u = a.matches(e.scrollbarX, ":focus") || a.matches(e.scrollbarY, ":focus");if (n || u) {
            var h = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;if (h) {
              if ("IFRAME" === h.tagName) h = h.contentDocument.activeElement;else for (; h.shadowRoot;) {
                h = h.shadowRoot.activeElement;
              }if (o.isEditable(h)) return;
            }var d = 0,
                p = 0;switch (c.which) {case 37:
                d = -30;break;case 38:
                p = 30;break;case 39:
                d = 30;break;case 40:
                p = -30;break;case 33:
                p = 90;break;case 32:
                p = c.shiftKey ? 90 : -90;break;case 34:
                p = -90;break;case 35:
                p = c.ctrlKey ? -e.contentHeight : -e.containerHeight;break;case 36:
                p = c.ctrlKey ? t.scrollTop : e.containerHeight;break;default:
                return;}l(t, "top", t.scrollTop - p), l(t, "left", t.scrollLeft + d), r(t), (s = i(d, p)) && c.preventDefault();
          }
        }
      });
    }var o = t("../../lib/helper"),
        a = t("../../lib/dom"),
        s = t("../instances"),
        r = t("../update-geometry"),
        l = t("../update-scroll");e.exports = function (t) {
      n(t, s.get(t));
    };
  }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 13: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      function i(i, n) {
        var o = t.scrollTop;if (0 === i) {
          if (!e.scrollbarYActive) return !1;if (0 === o && n > 0 || o >= e.contentHeight - e.containerHeight && n < 0) return !e.settings.wheelPropagation;
        }var a = t.scrollLeft;if (0 === n) {
          if (!e.scrollbarXActive) return !1;if (0 === a && i < 0 || a >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation;
        }return !0;
      }function n(t) {
        var e = t.deltaX,
            i = -1 * t.deltaY;return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), [e, i];
      }function o(e, i) {
        var n = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if (n) {
          if ("TEXTAREA" !== n.tagName && !window.getComputedStyle(n).overflow.match(/(scroll|auto)/)) return !1;var o = n.scrollHeight - n.clientHeight;if (o > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === o && i < 0)) return !0;var a = n.scrollLeft - n.clientWidth;if (a > 0 && !(0 === n.scrollLeft && e < 0 || n.scrollLeft === a && e > 0)) return !0;
        }return !1;
      }function r(r) {
        var c = n(r),
            u = c[0],
            h = c[1];o(u, h) || (l = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (h ? s(t, "top", t.scrollTop - h * e.settings.wheelSpeed) : s(t, "top", t.scrollTop + u * e.settings.wheelSpeed), l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? s(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : s(t, "left", t.scrollLeft - h * e.settings.wheelSpeed), l = !0) : (s(t, "top", t.scrollTop - h * e.settings.wheelSpeed), s(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), a(t), (l = l || i(u, h)) && (r.stopPropagation(), r.preventDefault()));
      }var l = !1;void 0 !== window.onwheel ? e.event.bind(t, "wheel", r) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", r);
    }var o = t("../instances"),
        a = t("../update-geometry"),
        s = t("../update-scroll");e.exports = function (t) {
      n(t, o.get(t));
    };
  }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 14: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      e.event.bind(t, "scroll", function () {
        a(t);
      });
    }var o = t("../instances"),
        a = t("../update-geometry");e.exports = function (t) {
      n(t, o.get(t));
    };
  }, { "../instances": 18, "../update-geometry": 19 }], 15: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      function i() {
        var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer;
      }function n() {
        c || (c = setInterval(function () {
          return a.get(t) ? (r(t, "top", t.scrollTop + u.top), r(t, "left", t.scrollLeft + u.left), void s(t)) : void clearInterval(c);
        }, 50));
      }function l() {
        c && (clearInterval(c), c = null), o.stopScrolling(t);
      }var c = null,
          u = { top: 0, left: 0 },
          h = !1;e.event.bind(e.ownerDocument, "selectionchange", function () {
        t.contains(i()) ? h = !0 : (h = !1, l());
      }), e.event.bind(window, "mouseup", function () {
        h && (h = !1, l());
      }), e.event.bind(window, "mousemove", function (e) {
        if (h) {
          var i = { x: e.pageX, y: e.pageY },
              a = { left: t.offsetLeft, right: t.offsetLeft + t.offsetWidth, top: t.offsetTop, bottom: t.offsetTop + t.offsetHeight };i.x < a.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : i.x > a.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, i.y < a.top + 3 ? (a.top + 3 - i.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : i.y > a.bottom - 3 ? (i.y - a.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : n();
        }
      });
    }var o = t("../../lib/helper"),
        a = t("../instances"),
        s = t("../update-geometry"),
        r = t("../update-scroll");e.exports = function (t) {
      n(t, a.get(t));
    };
  }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 16: [function (t, e, i) {
    "use strict";
    function n(t, e, i, n) {
      function o(i, n) {
        var o = t.scrollTop,
            a = t.scrollLeft,
            s = Math.abs(i),
            r = Math.abs(n);if (r > s) {
          if (n < 0 && o === e.contentHeight - e.containerHeight || n > 0 && 0 === o) return !e.settings.swipePropagation;
        } else if (s > r && (i < 0 && a === e.contentWidth - e.containerWidth || i > 0 && 0 === a)) return !e.settings.swipePropagation;return !0;
      }function l(e, i) {
        r(t, "top", t.scrollTop - i), r(t, "left", t.scrollLeft - e), s(t);
      }function c() {
        w = !0;
      }function u() {
        w = !1;
      }function h(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }function d(t) {
        return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE);
      }function p(t) {
        if (d(t)) {
          x = !0;var e = h(t);v.pageX = e.pageX, v.pageY = e.pageY, g = new Date().getTime(), null !== b && clearInterval(b), t.stopPropagation();
        }
      }function f(t) {
        if (!x && e.settings.swipePropagation && p(t), !w && x && d(t)) {
          var i = h(t),
              n = { pageX: i.pageX, pageY: i.pageY },
              a = n.pageX - v.pageX,
              s = n.pageY - v.pageY;l(a, s), v = n;var r = new Date().getTime(),
              c = r - g;c > 0 && (y.x = a / c, y.y = s / c, g = r), o(a, s) && (t.stopPropagation(), t.preventDefault());
        }
      }function m() {
        !w && x && (x = !1, clearInterval(b), b = setInterval(function () {
          return a.get(t) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void (y.y *= .8)) : void clearInterval(b);
        }, 10));
      }var v = {},
          g = 0,
          y = {},
          b = null,
          w = !1,
          x = !1;i && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", p), e.event.bind(t, "touchmove", f), e.event.bind(t, "touchend", m)), n && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", p), e.event.bind(t, "pointermove", f), e.event.bind(t, "pointerup", m)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", p), e.event.bind(t, "MSPointerMove", f), e.event.bind(t, "MSPointerUp", m)));
    }var o = t("../../lib/helper"),
        a = t("../instances"),
        s = t("../update-geometry"),
        r = t("../update-scroll");e.exports = function (t) {
      if (o.env.supportsTouch || o.env.supportsIePointer) {
        n(t, a.get(t), o.env.supportsTouch, o.env.supportsIePointer);
      }
    };
  }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 17: [function (t, e, i) {
    "use strict";
    var n = t("../lib/helper"),
        o = t("../lib/class"),
        a = t("./instances"),
        s = t("./update-geometry"),
        r = { "click-rail": t("./handler/click-rail"), "drag-scrollbar": t("./handler/drag-scrollbar"), keyboard: t("./handler/keyboard"), wheel: t("./handler/mouse-wheel"), touch: t("./handler/touch"), selection: t("./handler/selection") },
        l = t("./handler/native-scroll");e.exports = function (t, e) {
      e = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : {}, o.add(t, "ps-container");var i = a.add(t);i.settings = n.extend(i.settings, e), o.add(t, "ps-theme-" + i.settings.theme), i.settings.handlers.forEach(function (e) {
        r[e](t);
      }), l(t), s(t);
    };
  }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }], 18: [function (t, e, i) {
    "use strict";
    function n(t) {
      function e() {
        l.add(t, "ps-focus");
      }function i() {
        l.remove(t, "ps-focus");
      }var n = this;n.settings = r.clone(c), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === u.css(t, "direction"), n.isNegativeScroll = function () {
        var e = t.scrollLeft,
            i = null;return t.scrollLeft = -1, i = t.scrollLeft < 0, t.scrollLeft = e, i;
      }(), n.negativeScrollAdjustment = n.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, n.event = new h(), n.ownerDocument = t.ownerDocument || document, n.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), n.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", e), n.event.bind(n.scrollbarX, "blur", i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = r.toInt(u.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom === n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : r.toInt(u.css(n.scrollbarXRail, "top")), n.railBorderXWidth = r.toInt(u.css(n.scrollbarXRail, "borderLeftWidth")) + r.toInt(u.css(n.scrollbarXRail, "borderRightWidth")), u.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = r.toInt(u.css(n.scrollbarXRail, "marginLeft")) + r.toInt(u.css(n.scrollbarXRail, "marginRight")), u.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), n.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", e), n.event.bind(n.scrollbarY, "blur", i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = r.toInt(u.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight === n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : r.toInt(u.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? r.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = r.toInt(u.css(n.scrollbarYRail, "borderTopWidth")) + r.toInt(u.css(n.scrollbarYRail, "borderBottomWidth")), u.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = r.toInt(u.css(n.scrollbarYRail, "marginTop")) + r.toInt(u.css(n.scrollbarYRail, "marginBottom")), u.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null;
    }function o(t) {
      return t.getAttribute("data-ps-id");
    }function a(t, e) {
      t.setAttribute("data-ps-id", e);
    }function s(t) {
      t.removeAttribute("data-ps-id");
    }var r = t("../lib/helper"),
        l = t("../lib/class"),
        c = t("./default-setting"),
        u = t("../lib/dom"),
        h = t("../lib/event-manager"),
        d = t("../lib/guid"),
        p = {};i.add = function (t) {
      var e = d();return a(t, e), p[e] = new n(t), p[e];
    }, i.remove = function (t) {
      delete p[o(t)], s(t);
    }, i.get = function (t) {
      return p[o(t)];
    };
  }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }], 19: [function (t, e, i) {
    "use strict";
    function n(t, e) {
      return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }function o(t, e) {
      var i = { width: e.railXWidth };e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, r.css(e.scrollbarXRail, i);var n = { top: t.scrollTop, height: e.railYHeight };e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, r.css(e.scrollbarYRail, n), r.css(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), r.css(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth });
    }var a = t("../lib/helper"),
        s = t("../lib/class"),
        r = t("../lib/dom"),
        l = t("./instances"),
        c = t("./update-scroll");e.exports = function (t) {
      var e = l.get(t);e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;var i;t.contains(e.scrollbarXRail) || (i = r.queryChildren(t, ".ps-scrollbar-x-rail"), i.length > 0 && i.forEach(function (t) {
        r.remove(t);
      }), r.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (i = r.queryChildren(t, ".ps-scrollbar-y-rail"), i.length > 0 && i.forEach(function (t) {
        r.remove(t);
      }), r.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = n(e, a.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = a.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = n(e, a.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = a.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? s.add(t, "ps-active-x") : (s.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? s.add(t, "ps-active-y") : (s.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0));
    };
  }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }], 20: [function (t, e, i) {
    "use strict";
    var n,
        o,
        a = t("./instances"),
        s = document.createEvent("Event"),
        r = document.createEvent("Event"),
        l = document.createEvent("Event"),
        c = document.createEvent("Event"),
        u = document.createEvent("Event"),
        h = document.createEvent("Event"),
        d = document.createEvent("Event"),
        p = document.createEvent("Event"),
        f = document.createEvent("Event"),
        m = document.createEvent("Event");s.initEvent("ps-scroll-up", !0, !0), r.initEvent("ps-scroll-down", !0, !0), l.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), h.initEvent("ps-scroll-x", !0, !0), d.initEvent("ps-x-reach-start", !0, !0), p.initEvent("ps-x-reach-end", !0, !0), f.initEvent("ps-y-reach-start", !0, !0), m.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, i) {
      if (void 0 === t) throw "You must provide an element to the update-scroll function";if (void 0 === e) throw "You must provide an axis to the update-scroll function";if (void 0 === i) throw "You must provide a value to the update-scroll function";"top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(f)), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(d));var v = a.get(t);"top" === e && i >= v.contentHeight - v.containerHeight && (i = v.contentHeight - v.containerHeight, i - t.scrollTop <= 1 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(m)), "left" === e && i >= v.contentWidth - v.containerWidth && (i = v.contentWidth - v.containerWidth, i - t.scrollLeft <= 1 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(p)), n || (n = t.scrollTop), o || (o = t.scrollLeft), "top" === e && i < n && t.dispatchEvent(s), "top" === e && i > n && t.dispatchEvent(r), "left" === e && i < o && t.dispatchEvent(l), "left" === e && i > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = n = i, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = o = i, t.dispatchEvent(h));
    };
  }, { "./instances": 18 }], 21: [function (t, e, i) {
    "use strict";
    var n = t("../lib/helper"),
        o = t("../lib/dom"),
        a = t("./instances"),
        s = t("./update-geometry"),
        r = t("./update-scroll");e.exports = function (t) {
      var e = a.get(t);e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = n.toInt(o.css(e.scrollbarXRail, "marginLeft")) + n.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = n.toInt(o.css(e.scrollbarYRail, "marginTop")) + n.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), s(t), r(t, "top", t.scrollTop), r(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""));
    };
  }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }] }, {}, [1]), $(function () {
  $(".arrow-r").on("click", function () {
    $(".arrow-r").not(this).find(".fa-angle-down").removeClass("rotate-element"), $(this).find(".fa-angle-down").toggleClass("rotate-element");
  });
}), function (t) {
  var e = !1,
      i = { data: [], placeholder: "", secondaryPlaceholder: "" };t(document).ready(function () {
    t(document).on("click", ".chip .close", function (e) {
      t(this).closest(".chips").data("initialized") || t(this).closest(".chip").remove();
    });
  }), t.fn.material_chip = function (n) {
    var o = this;return this.$el = t(this), this.$document = t(document), this.SELS = { CHIPS: ".chips", CHIP: ".chip", INPUT: "input", DELETE: ".fa", SELECTED_CHIP: ".selected" }, "data" === n ? this.$el.data("chips") : "options" === n ? this.$el.data("options") : (this.$el.data("options", t.extend({}, i, n)), this.init = function () {
      var e = 0;o.$el.each(function () {
        var i = t(this);if (!i.data("initialized")) {
          var n = i.data("options");(!n.data || !n.data instanceof Array) && (n.data = []), i.data("chips", n.data), i.data("index", e), i.data("initialized", !0), i.hasClass(o.SELS.CHIPS) || i.addClass("chips"), o.chips(i), e++;
        }
      });
    }, this.handleEvents = function () {
      var e = o.SELS;o.$document.on("click", e.CHIPS, function (i) {
        t(i.target).find(e.INPUT).focus();
      }), o.$document.on("click", e.CHIP, function (i) {
        t(e.CHIP).removeClass("selected"), t(this).toggleClass("selected");
      }), o.$document.on("keydown", function (i) {
        if (!t(i.target).is("input, textarea")) {
          var n,
              a = o.$document.find(e.CHIP + e.SELECTED_CHIP),
              s = a.closest(e.CHIPS),
              r = a.siblings(e.CHIP).length;if (a.length) if (8 === i.which || 46 === i.which) {
            i.preventDefault();var l = s.data("index");n = a.index(), o.deleteChip(l, n, s);var c = null;n + 1 < r ? c = n : n !== r && n + 1 !== r || (c = r - 1), c < 0 && (c = null), null !== c && o.selectChip(l, c, s), r || s.find("input").focus();
          } else if (37 === i.which) {
            if ((n = a.index() - 1) < 0) return;t(e.CHIP).removeClass("selected"), o.selectChip(s.data("index"), n, s);
          } else if (39 === i.which) {
            if (n = a.index() + 1, t(e.CHIP).removeClass("selected"), n > r) return void s.find("input").focus();o.selectChip(s.data("index"), n, s);
          }
        }
      }), o.$document.on("focusin", e.CHIPS + " " + e.INPUT, function (i) {
        t(i.target).closest(e.CHIPS).addClass("focus"), t(e.CHIP).removeClass("selected");
      }), o.$document.on("focusout", e.CHIPS + " " + e.INPUT, function (i) {
        t(i.target).closest(e.CHIPS).removeClass("focus");
      }), o.$document.on("keydown", e.CHIPS + " " + e.INPUT, function (i) {
        var n = t(i.target),
            a = n.closest(e.CHIPS),
            s = a.data("index"),
            r = a.children(e.CHIP).length;return 13 === i.which ? (i.preventDefault(), o.addChip(s, { tag: n.val() }, a), void n.val("")) : 8 !== i.keyCode && 37 !== i.keyCode || "" !== n.val() || !r ? void 0 : (o.selectChip(s, r - 1, a), void n.blur());
      }), o.$document.on("click", e.CHIPS + " " + e.DELETE, function (i) {
        var n = t(i.target),
            a = n.closest(e.CHIPS),
            s = n.closest(e.CHIP);i.stopPropagation(), o.deleteChip(a.data("index"), s.index(), a), a.find("input").focus();
      });
    }, this.chips = function (t) {
      var e = "";t.data("options");t.data("chips").forEach(function (t) {
        e += o.renderChip(t);
      }), e += '<input class="input" placeholder="">', t.html(e), o.setPlaceholder(t);
    }, this.renderChip = function (t) {
      if (t.tag) {
        var e = '<div class="chip">' + t.tag;return t.image && (e += ' <img src="' + t.image + '"> '), e += '<i class="close fa fa-times"></i>', e += "</div>";
      }
    }, this.setPlaceholder = function (t) {
      var e = t.data("options");t.data("chips").length && e.placeholder ? t.find("input").prop("placeholder", e.placeholder) : !t.data("chips").length && e.secondaryPlaceholder && t.find("input").prop("placeholder", e.secondaryPlaceholder);
    }, this.isValid = function (t, e) {
      for (var i = t.data("chips"), n = !1, o = 0; o < i.length; o++) {
        if (i[o].tag === e.tag) return void (n = !0);
      }return "" !== e.tag && !n;
    }, this.addChip = function (e, i, n) {
      if (o.isValid(n, i)) {
        var a = (n.data("options"), o.renderChip(i));n.data("chips").push(i), t(a).insertBefore(n.find("input")), n.trigger("chip.add", i), o.setPlaceholder(n);
      }
    }, this.deleteChip = function (t, e, i) {
      var n = i.data("chips")[e];i.find(".chip").eq(e).remove(), i.data("chips").splice(e, 1), i.trigger("chip.delete", n), o.setPlaceholder(i);
    }, this.selectChip = function (t, e, i) {
      var n = i.find(".chip").eq(e);n && !1 === n.hasClass("selected") && (n.addClass("selected"), i.trigger("chip.select", i.data("chips")[e]));
    }, this.getChipsElement = function (t, e) {
      return e.eq(t);
    }, this.init(), void (e || (this.handleEvents(), e = !0)));
  };
}(jQuery), $.fn.mdb_autocomplete = function (t) {
  var e = { data: {} };return t = $.extend(e, t), this.each(function () {
    var e = $(this),
        i = t.data;if (Object.keys(i).length) {
      var n = $('<ul class="mdb-autocomplete-wrap"></ul>');n.insertAfter($(this));
    }e.on("keyup", function (t) {
      var o = e.val();if (n.empty(), o.length) for (var a in i) {
        if (i[a].toLowerCase().indexOf(o.toLowerCase()) !== -1) {
          var s = $("<li>" + i[a] + "</li>");n.append(s);
        }
      }13 == t.which && (n.children(":first").trigger("click"), n.empty()), 0 == o.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible");
    }), n.on("click", "li", function () {
      e.val($(this).text()), n.empty();
    }), $(".mdb-autocomplete-clear").on("click", function (t) {
      t.preventDefault(), e.val(""), $(this).css("visibility", "hidden"), n.empty(), $(this).parent().find("label").removeClass("active");
    });
  });
}, $("body").on("shown.bs.modal", ".modal", function () {
  $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")));
}), $("body").on("hidden.bs.modal", ".modal", function () {
  $("body").removeClass("scrollable");
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0), __webpack_require__(2)(module), __webpack_require__(3)))

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 3:
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

/***/ 48:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Hammer;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ })

/******/ });