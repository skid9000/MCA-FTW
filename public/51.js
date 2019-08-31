(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*!---------------------------------------------------------------------------------------------\n *  Copyright (C) David Owens II, owensd.io. All rights reserved.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n        { open: '`', close: '`' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n        { open: '`', close: '`' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.swift',\n    // TODO(owensd): Support the full range of unicode valid identifiers.\n    identifier: /[a-zA-Z_][\\w$]*/,\n    // TODO(owensd): Support the @availability macro properly.\n    attributes: [\n        '@autoclosure', '@noescape', '@noreturn', '@NSApplicationMain', '@NSCopying', '@NSManaged',\n        '@objc', '@UIApplicationMain', '@noreturn', '@availability', '@IBAction', '@IBDesignable', '@IBInspectable', '@IBOutlet'\n    ],\n    accessmodifiers: ['public', 'private', 'internal'],\n    keywords: [\n        '__COLUMN__', '__FILE__', '__FUNCTION__', '__LINE__', 'as', 'as!', 'as?', 'associativity', 'break', 'case', 'catch',\n        'class', 'continue', 'convenience', 'default', 'deinit', 'didSet', 'do', 'dynamic', 'dynamicType',\n        'else', 'enum', 'extension', 'fallthrough', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'in', 'infix',\n        'init', 'inout', 'internal', 'is', 'lazy', 'left', 'let', 'mutating', 'nil', 'none', 'nonmutating', 'operator',\n        'optional', 'override', 'postfix', 'precedence', 'prefix', 'private', 'protocol', 'Protocol', 'public',\n        'repeat', 'required', 'return', 'right', 'self', 'Self', 'set', 'static', 'struct', 'subscript', 'super', 'switch',\n        'throw', 'throws', 'try', 'try!', 'Type', 'typealias', 'unowned', 'var', 'weak', 'where', 'while', 'willSet', 'FALSE', 'TRUE'\n    ],\n    symbols: /[=(){}\\[\\].,:;@#\\_&\\-<>`?!+*\\\\\\/]/,\n    // Moved . to operatorstart so it can be a delimiter\n    operatorstart: /[\\/=\\-+!*%<>&|^~?\\u00A1-\\u00A7\\u00A9\\u00AB\\u00AC\\u00AE\\u00B0-\\u00B1\\u00B6\\u00BB\\u00BF\\u00D7\\u00F7\\u2016-\\u2017\\u2020-\\u2027\\u2030-\\u203E\\u2041-\\u2053\\u2055-\\u205E\\u2190-\\u23FF\\u2500-\\u2775\\u2794-\\u2BFF\\u2E00-\\u2E7F\\u3001-\\u3003\\u3008-\\u3030]/,\n    operatorend: /[\\u0300-\\u036F\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uE0100-\\uE01EF]/,\n    operators: /(@operatorstart)((@operatorstart)|(@operatorend))*/,\n    // TODO(owensd): These are borrowed from C#; need to validate correctness for Swift.\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n        root: [\n            { include: '@comment' },\n            { include: '@attribute' },\n            { include: '@literal' },\n            { include: '@keyword' },\n            { include: '@invokedmethod' },\n            { include: '@symbol' },\n        ],\n        symbol: [\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/[.]/, 'delimiter'],\n            [/@operators/, 'operator'],\n            [/@symbols/, 'operator']\n        ],\n        comment: [\n            [/\\/\\/\\/.*$/, 'comment.doc'],\n            [/\\/\\*\\*/, 'comment.doc', '@commentdocbody'],\n            [/\\/\\/.*$/, 'comment'],\n            [/\\/\\*/, 'comment', '@commentbody']\n        ],\n        commentdocbody: [\n            [/\\/\\*/, 'comment', '@commentbody'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/\\:[a-zA-Z]+\\:/, 'comment.doc.param'],\n            [/./, 'comment.doc']\n        ],\n        commentbody: [\n            [/\\/\\*/, 'comment', '@commentbody'],\n            [/\\*\\//, 'comment', '@pop'],\n            [/./, 'comment']\n        ],\n        attribute: [\n            [/\\@@identifier/, {\n                    cases: {\n                        '@attributes': 'keyword.control',\n                        '@default': ''\n                    }\n                }]\n        ],\n        literal: [\n            [/\"/, { token: 'string.quote', next: '@stringlit' }],\n            [/0[b]([01]_?)+/, 'number.binary'],\n            [/0[o]([0-7]_?)+/, 'number.octal'],\n            [/0[x]([0-9a-fA-F]_?)+([pP][\\-+](\\d_?)+)?/, 'number.hex'],\n            [/(\\d_?)*\\.(\\d_?)+([eE][\\-+]?(\\d_?)+)?/, 'number.float'],\n            [/(\\d_?)+/, 'number']\n        ],\n        stringlit: [\n            [/\\\\\\(/, { token: 'operator', next: '@interpolatedexpression' }],\n            [/@escapes/, 'string'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', next: '@pop' }],\n            [/./, 'string']\n        ],\n        interpolatedexpression: [\n            [/\\(/, { token: 'operator', next: '@interpolatedexpression' }],\n            [/\\)/, { token: 'operator', next: '@pop' }],\n            { include: '@literal' },\n            { include: '@keyword' },\n            { include: '@symbol' }\n        ],\n        keyword: [\n            [/`/, { token: 'operator', next: '@escapedkeyword' }],\n            [/@identifier/, {\n                    cases: {\n                        '@keywords': 'keyword', '[A-Z][\\a-zA-Z0-9$]*': 'type.identifier',\n                        '@default': 'identifier'\n                    }\n                }]\n        ],\n        escapedkeyword: [\n            [/`/, { token: 'operator', next: '@pop' }],\n            [/./, 'identifier']\n        ],\n        //\t\tsymbol: [\n        //\t\t\t[ /@symbols/, 'operator' ],\n        //\t\t\t[ /@operators/, 'operator' ]\n        //\t\t],\n        invokedmethod: [\n            [/([.])(@identifier)/, {\n                    cases: {\n                        '$2': ['delimeter', 'type.identifier'],\n                        '@default': ''\n                    }\n                }],\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3N3aWZ0L3N3aWZ0LmpzP2QzOWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxtQkFBbUIsNENBQTRDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFxRDtBQUMzRTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQXFEO0FBQ3pFLG9CQUFvQixrQ0FBa0M7QUFDdEQsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQTZDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1CQUFtQixrQ0FBa0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc3dpZnQvc3dpZnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKEMpIERhdmlkIE93ZW5zIElJLCBvd2Vuc2QuaW8uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH0sXG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuc3dpZnQnLFxuICAgIC8vIFRPRE8ob3dlbnNkKTogU3VwcG9ydCB0aGUgZnVsbCByYW5nZSBvZiB1bmljb2RlIHZhbGlkIGlkZW50aWZpZXJzLlxuICAgIGlkZW50aWZpZXI6IC9bYS16QS1aX11bXFx3JF0qLyxcbiAgICAvLyBUT0RPKG93ZW5zZCk6IFN1cHBvcnQgdGhlIEBhdmFpbGFiaWxpdHkgbWFjcm8gcHJvcGVybHkuXG4gICAgYXR0cmlidXRlczogW1xuICAgICAgICAnQGF1dG9jbG9zdXJlJywgJ0Bub2VzY2FwZScsICdAbm9yZXR1cm4nLCAnQE5TQXBwbGljYXRpb25NYWluJywgJ0BOU0NvcHlpbmcnLCAnQE5TTWFuYWdlZCcsXG4gICAgICAgICdAb2JqYycsICdAVUlBcHBsaWNhdGlvbk1haW4nLCAnQG5vcmV0dXJuJywgJ0BhdmFpbGFiaWxpdHknLCAnQElCQWN0aW9uJywgJ0BJQkRlc2lnbmFibGUnLCAnQElCSW5zcGVjdGFibGUnLCAnQElCT3V0bGV0J1xuICAgIF0sXG4gICAgYWNjZXNzbW9kaWZpZXJzOiBbJ3B1YmxpYycsICdwcml2YXRlJywgJ2ludGVybmFsJ10sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ19fQ09MVU1OX18nLCAnX19GSUxFX18nLCAnX19GVU5DVElPTl9fJywgJ19fTElORV9fJywgJ2FzJywgJ2FzIScsICdhcz8nLCAnYXNzb2NpYXRpdml0eScsICdicmVhaycsICdjYXNlJywgJ2NhdGNoJyxcbiAgICAgICAgJ2NsYXNzJywgJ2NvbnRpbnVlJywgJ2NvbnZlbmllbmNlJywgJ2RlZmF1bHQnLCAnZGVpbml0JywgJ2RpZFNldCcsICdkbycsICdkeW5hbWljJywgJ2R5bmFtaWNUeXBlJyxcbiAgICAgICAgJ2Vsc2UnLCAnZW51bScsICdleHRlbnNpb24nLCAnZmFsbHRocm91Z2gnLCAnZmluYWwnLCAnZm9yJywgJ2Z1bmMnLCAnZ2V0JywgJ2d1YXJkJywgJ2lmJywgJ2ltcG9ydCcsICdpbicsICdpbmZpeCcsXG4gICAgICAgICdpbml0JywgJ2lub3V0JywgJ2ludGVybmFsJywgJ2lzJywgJ2xhenknLCAnbGVmdCcsICdsZXQnLCAnbXV0YXRpbmcnLCAnbmlsJywgJ25vbmUnLCAnbm9ubXV0YXRpbmcnLCAnb3BlcmF0b3InLFxuICAgICAgICAnb3B0aW9uYWwnLCAnb3ZlcnJpZGUnLCAncG9zdGZpeCcsICdwcmVjZWRlbmNlJywgJ3ByZWZpeCcsICdwcml2YXRlJywgJ3Byb3RvY29sJywgJ1Byb3RvY29sJywgJ3B1YmxpYycsXG4gICAgICAgICdyZXBlYXQnLCAncmVxdWlyZWQnLCAncmV0dXJuJywgJ3JpZ2h0JywgJ3NlbGYnLCAnU2VsZicsICdzZXQnLCAnc3RhdGljJywgJ3N0cnVjdCcsICdzdWJzY3JpcHQnLCAnc3VwZXInLCAnc3dpdGNoJyxcbiAgICAgICAgJ3Rocm93JywgJ3Rocm93cycsICd0cnknLCAndHJ5IScsICdUeXBlJywgJ3R5cGVhbGlhcycsICd1bm93bmVkJywgJ3ZhcicsICd3ZWFrJywgJ3doZXJlJywgJ3doaWxlJywgJ3dpbGxTZXQnLCAnRkFMU0UnLCAnVFJVRSdcbiAgICBdLFxuICAgIHN5bWJvbHM6IC9bPSgpe31cXFtcXF0uLDo7QCNcXF8mXFwtPD5gPyErKlxcXFxcXC9dLyxcbiAgICAvLyBNb3ZlZCAuIHRvIG9wZXJhdG9yc3RhcnQgc28gaXQgY2FuIGJlIGEgZGVsaW1pdGVyXG4gICAgb3BlcmF0b3JzdGFydDogL1tcXC89XFwtKyEqJTw+Jnxefj9cXHUwMEExLVxcdTAwQTdcXHUwMEE5XFx1MDBBQlxcdTAwQUNcXHUwMEFFXFx1MDBCMC1cXHUwMEIxXFx1MDBCNlxcdTAwQkJcXHUwMEJGXFx1MDBEN1xcdTAwRjdcXHUyMDE2LVxcdTIwMTdcXHUyMDIwLVxcdTIwMjdcXHUyMDMwLVxcdTIwM0VcXHUyMDQxLVxcdTIwNTNcXHUyMDU1LVxcdTIwNUVcXHUyMTkwLVxcdTIzRkZcXHUyNTAwLVxcdTI3NzVcXHUyNzk0LVxcdTJCRkZcXHUyRTAwLVxcdTJFN0ZcXHUzMDAxLVxcdTMwMDNcXHUzMDA4LVxcdTMwMzBdLyxcbiAgICBvcGVyYXRvcmVuZDogL1tcXHUwMzAwLVxcdTAzNkZcXHUxREMwLVxcdTFERkZcXHUyMEQwLVxcdTIwRkZcXHVGRTAwLVxcdUZFMEZcXHVGRTIwLVxcdUZFMkZcXHVFMDEwMC1cXHVFMDFFRl0vLFxuICAgIG9wZXJhdG9yczogLyhAb3BlcmF0b3JzdGFydCkoKEBvcGVyYXRvcnN0YXJ0KXwoQG9wZXJhdG9yZW5kKSkqLyxcbiAgICAvLyBUT0RPKG93ZW5zZCk6IFRoZXNlIGFyZSBib3Jyb3dlZCBmcm9tIEMjOyBuZWVkIHRvIHZhbGlkYXRlIGNvcnJlY3RuZXNzIGZvciBTd2lmdC5cbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BhdHRyaWJ1dGUnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGl0ZXJhbCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGludm9rZWRtZXRob2QnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3ltYm9sJyB9LFxuICAgICAgICBdLFxuICAgICAgICBzeW1ib2w6IFtcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL0BvcGVyYXRvcnMvLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnb3BlcmF0b3InXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1xcL1xcL1xcLy4qJC8sICdjb21tZW50LmRvYyddLFxuICAgICAgICAgICAgWy9cXC9cXCpcXCovLCAnY29tbWVudC5kb2MnLCAnQGNvbW1lbnRkb2Nib2R5J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50Ym9keSddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRkb2Nib2R5OiBbXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50Ym9keSddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudC5kb2MnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cXDpbYS16QS1aXStcXDovLCAnY29tbWVudC5kb2MucGFyYW0nXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmRvYyddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRib2R5OiBbXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50Ym9keSddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJpYnV0ZTogW1xuICAgICAgICAgICAgWy9cXEBAaWRlbnRpZmllci8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYXR0cmlidXRlcyc6ICdrZXl3b3JkLmNvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGxpdGVyYWw6IFtcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BzdHJpbmdsaXQnIH1dLFxuICAgICAgICAgICAgWy8wW2JdKFswMV1fPykrLywgJ251bWJlci5iaW5hcnknXSxcbiAgICAgICAgICAgIFsvMFtvXShbMC03XV8/KSsvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbeF0oWzAtOWEtZkEtRl1fPykrKFtwUF1bXFwtK10oXFxkXz8pKyk/LywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvKFxcZF8/KSpcXC4oXFxkXz8pKyhbZUVdW1xcLStdPyhcXGRfPykrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLyhcXGRfPykrLywgJ251bWJlciddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ2xpdDogW1xuICAgICAgICAgICAgWy9cXFxcXFwoLywgeyB0b2tlbjogJ29wZXJhdG9yJywgbmV4dDogJ0BpbnRlcnBvbGF0ZWRleHByZXNzaW9uJyB9XSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgaW50ZXJwb2xhdGVkZXhwcmVzc2lvbjogW1xuICAgICAgICAgICAgWy9cXCgvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQGludGVycG9sYXRlZGV4cHJlc3Npb24nIH1dLFxuICAgICAgICAgICAgWy9cXCkvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGl0ZXJhbCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN5bWJvbCcgfVxuICAgICAgICBdLFxuICAgICAgICBrZXl3b3JkOiBbXG4gICAgICAgICAgICBbL2AvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQGVzY2FwZWRrZXl3b3JkJyB9XSxcbiAgICAgICAgICAgIFsvQGlkZW50aWZpZXIvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLCAnW0EtWl1bXFxhLXpBLVowLTkkXSonOiAndHlwZS5pZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgXSxcbiAgICAgICAgZXNjYXBlZGtleXdvcmQ6IFtcbiAgICAgICAgICAgIFsvYC8sIHsgdG9rZW46ICdvcGVyYXRvcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvLi8sICdpZGVudGlmaWVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy9cdFx0c3ltYm9sOiBbXG4gICAgICAgIC8vXHRcdFx0WyAvQHN5bWJvbHMvLCAnb3BlcmF0b3InIF0sXG4gICAgICAgIC8vXHRcdFx0WyAvQG9wZXJhdG9ycy8sICdvcGVyYXRvcicgXVxuICAgICAgICAvL1x0XHRdLFxuICAgICAgICBpbnZva2VkbWV0aG9kOiBbXG4gICAgICAgICAgICBbLyhbLl0pKEBpZGVudGlmaWVyKS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMic6IFsnZGVsaW1ldGVyJywgJ3R5cGUuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js\n");

/***/ })

}]);