(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js ***!
  \**************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.objective-c',\n    keywords: [\n        '#import',\n        '#include',\n        '#define',\n        '#else',\n        '#endif',\n        '#if',\n        '#ifdef',\n        '#ifndef',\n        '#ident',\n        '#undef',\n        '@class',\n        '@defs',\n        '@dynamic',\n        '@encode',\n        '@end',\n        '@implementation',\n        '@interface',\n        '@package',\n        '@private',\n        '@protected',\n        '@property',\n        '@protocol',\n        '@public',\n        '@selector',\n        '@synthesize',\n        '__declspec',\n        'assign',\n        'auto',\n        'BOOL',\n        'break',\n        'bycopy',\n        'byref',\n        'case',\n        'char',\n        'Class',\n        'const',\n        'copy',\n        'continue',\n        'default',\n        'do',\n        'double',\n        'else',\n        'enum',\n        'extern',\n        'FALSE',\n        'false',\n        'float',\n        'for',\n        'goto',\n        'if',\n        'in',\n        'int',\n        'id',\n        'inout',\n        'IMP',\n        'long',\n        'nil',\n        'nonatomic',\n        'NULL',\n        'oneway',\n        'out',\n        'private',\n        'public',\n        'protected',\n        'readwrite',\n        'readonly',\n        'register',\n        'return',\n        'SEL',\n        'self',\n        'short',\n        'signed',\n        'sizeof',\n        'static',\n        'struct',\n        'super',\n        'switch',\n        'typedef',\n        'TRUE',\n        'true',\n        'union',\n        'unsigned',\n        'volatile',\n        'void',\n        'while',\n    ],\n    decpart: /\\d(_?\\d)*/,\n    decimal: /0|@decpart/,\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            [/[,:;]/, 'delimiter'],\n            [/[{}\\[\\]()<>]/, '@brackets'],\n            [/[a-zA-Z@#]\\w*/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,]|and\\\\b|or\\\\b|not\\\\b]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white'],\n        ],\n        comments: [\n            ['\\\\/\\\\*', 'comment', '@comment'],\n            ['\\\\/\\\\/+.*', 'comment'],\n        ],\n        comment: [\n            ['\\\\*\\\\/', 'comment', '@pop'],\n            ['.', 'comment',],\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, 'number.hex'],\n            [/@decimal((\\.@decpart)?([eE][\\-+]?@decpart)?)[fF]*/, {\n                    cases: {\n                        '(\\\\d)*': 'number',\n                        '$0': 'number.float'\n                    }\n                }]\n        ],\n        // Recognize strings, including those broken across lines with \\ (but not without)\n        strings: [\n            [/'$/, 'string.escape', '@popall'],\n            [/'/, 'string.escape', '@stringBody'],\n            [/\"$/, 'string.escape', '@popall'],\n            [/\"/, 'string.escape', '@dblStringBody']\n        ],\n        stringBody: [\n            [/[^\\\\']+$/, 'string', '@popall'],\n            [/[^\\\\']+/, 'string'],\n            [/\\\\./, 'string'],\n            [/'/, 'string.escape', '@popall'],\n            [/\\\\$/, 'string']\n        ],\n        dblStringBody: [\n            [/[^\\\\\"]+$/, 'string', '@popall'],\n            [/[^\\\\\"]+/, 'string'],\n            [/\\\\./, 'string'],\n            [/\"/, 'string.escape', '@popall'],\n            [/\\\\$/, 'string']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL29iamVjdGl2ZS1jL29iamVjdGl2ZS1jLmpzPzdkODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL29iamVjdGl2ZS1jL29iamVjdGl2ZS1jLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLm9iamVjdGl2ZS1jJyxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnI2ltcG9ydCcsXG4gICAgICAgICcjaW5jbHVkZScsXG4gICAgICAgICcjZGVmaW5lJyxcbiAgICAgICAgJyNlbHNlJyxcbiAgICAgICAgJyNlbmRpZicsXG4gICAgICAgICcjaWYnLFxuICAgICAgICAnI2lmZGVmJyxcbiAgICAgICAgJyNpZm5kZWYnLFxuICAgICAgICAnI2lkZW50JyxcbiAgICAgICAgJyN1bmRlZicsXG4gICAgICAgICdAY2xhc3MnLFxuICAgICAgICAnQGRlZnMnLFxuICAgICAgICAnQGR5bmFtaWMnLFxuICAgICAgICAnQGVuY29kZScsXG4gICAgICAgICdAZW5kJyxcbiAgICAgICAgJ0BpbXBsZW1lbnRhdGlvbicsXG4gICAgICAgICdAaW50ZXJmYWNlJyxcbiAgICAgICAgJ0BwYWNrYWdlJyxcbiAgICAgICAgJ0Bwcml2YXRlJyxcbiAgICAgICAgJ0Bwcm90ZWN0ZWQnLFxuICAgICAgICAnQHByb3BlcnR5JyxcbiAgICAgICAgJ0Bwcm90b2NvbCcsXG4gICAgICAgICdAcHVibGljJyxcbiAgICAgICAgJ0BzZWxlY3RvcicsXG4gICAgICAgICdAc3ludGhlc2l6ZScsXG4gICAgICAgICdfX2RlY2xzcGVjJyxcbiAgICAgICAgJ2Fzc2lnbicsXG4gICAgICAgICdhdXRvJyxcbiAgICAgICAgJ0JPT0wnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnYnljb3B5JyxcbiAgICAgICAgJ2J5cmVmJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY2hhcicsXG4gICAgICAgICdDbGFzcycsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjb3B5JyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZG91YmxlJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnRkFMU0UnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2dvdG8nLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ2lkJyxcbiAgICAgICAgJ2lub3V0JyxcbiAgICAgICAgJ0lNUCcsXG4gICAgICAgICdsb25nJyxcbiAgICAgICAgJ25pbCcsXG4gICAgICAgICdub25hdG9taWMnLFxuICAgICAgICAnTlVMTCcsXG4gICAgICAgICdvbmV3YXknLFxuICAgICAgICAnb3V0JyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICdyZWFkd3JpdGUnLFxuICAgICAgICAncmVhZG9ubHknLFxuICAgICAgICAncmVnaXN0ZXInLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ1NFTCcsXG4gICAgICAgICdzZWxmJyxcbiAgICAgICAgJ3Nob3J0JyxcbiAgICAgICAgJ3NpZ25lZCcsXG4gICAgICAgICdzaXplb2YnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzdXBlcicsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAndHlwZWRlZicsXG4gICAgICAgICdUUlVFJyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAndW5pb24nLFxuICAgICAgICAndW5zaWduZWQnLFxuICAgICAgICAndm9sYXRpbGUnLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICd3aGlsZScsXG4gICAgXSxcbiAgICBkZWNwYXJ0OiAvXFxkKF8/XFxkKSovLFxuICAgIGRlY2ltYWw6IC8wfEBkZWNwYXJ0LyxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgWy9bLDo7XS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvW3t9XFxbXFxdKCk8Pl0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1thLXpBLVpAI11cXHcqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbL1s8Pj1cXFxcK1xcXFwtXFxcXCpcXFxcL1xcXFxeXFxcXHxcXFxcfixdfGFuZFxcXFxifG9yXFxcXGJ8bm90XFxcXGJdLywgJ29wZXJhdG9yJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddLFxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50czogW1xuICAgICAgICAgICAgWydcXFxcL1xcXFwqJywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J10sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsnXFxcXCpcXFxcLycsICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnLicsICdjb21tZW50JyxdLFxuICAgICAgICBdLFxuICAgICAgICBudW1iZXJzOiBbXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0qKF8/WzAtOWEtZkEtRl0pKi8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbL0BkZWNpbWFsKChcXC5AZGVjcGFydCk/KFtlRV1bXFwtK10/QGRlY3BhcnQpPylbZkZdKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoXFxcXGQpKic6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyQwJzogJ251bWJlci5mbG9hdCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFJlY29nbml6ZSBzdHJpbmdzLCBpbmNsdWRpbmcgdGhvc2UgYnJva2VuIGFjcm9zcyBsaW5lcyB3aXRoIFxcIChidXQgbm90IHdpdGhvdXQpXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsvJyQvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAc3RyaW5nQm9keSddLFxuICAgICAgICAgICAgWy9cIiQvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZy5lc2NhcGUnLCAnQGRibFN0cmluZ0JvZHknXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbL1teXFxcXCddKyQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuZXNjYXBlJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js\n");

/***/ })

}]);