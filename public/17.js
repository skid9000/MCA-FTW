(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js ***!
  \******************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '#'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"\"\"', close: '\"\"\"', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"\"\"', close: '\"\"\"' },\n        { open: '\"', close: '\"' },\n    ],\n    folding: {\n        offSide: true\n    }\n};\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    tokenPostfix: '.gql',\n    keywords: [\n        'null', 'true', 'false',\n        'query', 'mutation', 'subscription',\n        'extend', 'schema', 'directive',\n        'scalar', 'type', 'interface', 'union', 'enum', 'input', 'implements',\n        'fragment', 'on',\n    ],\n    typeKeywords: ['Int', 'Float', 'String', 'Boolean', 'ID'],\n    directiveLocations: [\n        'SCHEMA', 'SCALAR', 'OBJECT', 'FIELD_DEFINITION', 'ARGUMENT_DEFINITION',\n        'INTERFACE', 'UNION', 'ENUM', 'ENUM_VALUE', 'INPUT_OBJECT', 'INPUT_FIELD_DEFINITION',\n        'QUERY', 'MUTATION', 'SUBSCRIPTION', 'FIELD', 'FRAGMENT_DEFINITION',\n        'FRAGMENT_SPREAD', 'INLINE_FRAGMENT', 'VARIABLE_DEFINITION',\n    ],\n    operators: ['=', '!', '?', ':', '&', '|'],\n    // we include these common regular expressions\n    symbols: /[=!?:&|]+/,\n    // https://facebook.github.io/graphql/draft/#sec-String-Value\n    escapes: /\\\\(?:[\"\\\\\\/bfnrt]|u[0-9A-Fa-f]{4})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [\n                /[a-z_$][\\w$]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'identifier',\n                    },\n                },\n            ],\n            [\n                /[A-Z][\\w\\$]*/,\n                {\n                    cases: {\n                        '@typeKeywords': 'keyword',\n                        '@default': 'type.identifier',\n                    },\n                },\n            ],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [\n                /@symbols/,\n                { cases: { '@operators': 'operator', '@default': '' } },\n            ],\n            // @ annotations.\n            // As an example, we emit a debugging log message on these tokens.\n            // Note: message are supressed during the first load -- change some lines to see them.\n            [\n                /@\\s*[a-zA-Z_\\$][\\w\\$]*/,\n                { token: 'annotation', log: 'annotation token: $0' },\n            ],\n            // numbers\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\n            [/\\d+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            [/\"\"\"/,\n                { token: 'string', next: '@mlstring', nextEmbedded: 'markdown' }\n            ],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, { token: 'string.quote', bracket: '@open', next: '@string' }],\n        ],\n        mlstring: [\n            [/[^\"]+/, 'string'],\n            ['\"\"\"', { token: 'string', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],\n        ],\n        whitespace: [[/[ \\t\\r\\n]+/, ''], [/#.*$/, 'comment']],\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2dyYXBocWwvZ3JhcGhxbC5qcz8xMjBlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMERBQTBEO0FBQ25FLFNBQVMsc0RBQXNEO0FBQy9EO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUywyQ0FBMkMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbURBQW1EO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQTJEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBc0Q7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBeUQ7QUFDNUU7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvZ3JhcGhxbC9ncmFwaHFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJ1xuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIlwiXCInLCBjbG9zZTogJ1wiXCJcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIlwiXCInLCBjbG9zZTogJ1wiXCJcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBvZmZTaWRlOiB0cnVlXG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XG4gICAgZGVmYXVsdFRva2VuOiAnaW52YWxpZCcsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmdxbCcsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ251bGwnLCAndHJ1ZScsICdmYWxzZScsXG4gICAgICAgICdxdWVyeScsICdtdXRhdGlvbicsICdzdWJzY3JpcHRpb24nLFxuICAgICAgICAnZXh0ZW5kJywgJ3NjaGVtYScsICdkaXJlY3RpdmUnLFxuICAgICAgICAnc2NhbGFyJywgJ3R5cGUnLCAnaW50ZXJmYWNlJywgJ3VuaW9uJywgJ2VudW0nLCAnaW5wdXQnLCAnaW1wbGVtZW50cycsXG4gICAgICAgICdmcmFnbWVudCcsICdvbicsXG4gICAgXSxcbiAgICB0eXBlS2V5d29yZHM6IFsnSW50JywgJ0Zsb2F0JywgJ1N0cmluZycsICdCb29sZWFuJywgJ0lEJ10sXG4gICAgZGlyZWN0aXZlTG9jYXRpb25zOiBbXG4gICAgICAgICdTQ0hFTUEnLCAnU0NBTEFSJywgJ09CSkVDVCcsICdGSUVMRF9ERUZJTklUSU9OJywgJ0FSR1VNRU5UX0RFRklOSVRJT04nLFxuICAgICAgICAnSU5URVJGQUNFJywgJ1VOSU9OJywgJ0VOVU0nLCAnRU5VTV9WQUxVRScsICdJTlBVVF9PQkpFQ1QnLCAnSU5QVVRfRklFTERfREVGSU5JVElPTicsXG4gICAgICAgICdRVUVSWScsICdNVVRBVElPTicsICdTVUJTQ1JJUFRJT04nLCAnRklFTEQnLCAnRlJBR01FTlRfREVGSU5JVElPTicsXG4gICAgICAgICdGUkFHTUVOVF9TUFJFQUQnLCAnSU5MSU5FX0ZSQUdNRU5UJywgJ1ZBUklBQkxFX0RFRklOSVRJT04nLFxuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbJz0nLCAnIScsICc/JywgJzonLCAnJicsICd8J10sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPSE/OiZ8XSsvLFxuICAgIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2dyYXBocWwvZHJhZnQvI3NlYy1TdHJpbmctVmFsdWVcbiAgICBlc2NhcGVzOiAvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlBLUZhLWZdezR9KS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16XyRdW1xcdyRdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW0EtWl1bXFx3XFwkXSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAdHlwZUtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3R5cGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BzeW1ib2xzLyxcbiAgICAgICAgICAgICAgICB7IGNhc2VzOiB7ICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJywgJ0BkZWZhdWx0JzogJycgfSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIEAgYW5ub3RhdGlvbnMuXG4gICAgICAgICAgICAvLyBBcyBhbiBleGFtcGxlLCB3ZSBlbWl0IGEgZGVidWdnaW5nIGxvZyBtZXNzYWdlIG9uIHRoZXNlIHRva2Vucy5cbiAgICAgICAgICAgIC8vIE5vdGU6IG1lc3NhZ2UgYXJlIHN1cHJlc3NlZCBkdXJpbmcgdGhlIGZpcnN0IGxvYWQgLS0gY2hhbmdlIHNvbWUgbGluZXMgdG8gc2VlIHRoZW0uXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BcXHMqW2EtekEtWl9cXCRdW1xcd1xcJF0qLyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnYW5ub3RhdGlvbicsIGxvZzogJ2Fubm90YXRpb24gdG9rZW46ICQwJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1wiXCJcIi8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAbWxzdHJpbmcnLCBuZXh0RW1iZWRkZWQ6ICdtYXJrZG93bicgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3RyaW5nJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgbWxzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcIlwiXCInLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1svWyBcXHRcXHJcXG5dKy8sICcnXSwgWy8jLiokLywgJ2NvbW1lbnQnXV0sXG4gICAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js\n");

/***/ })

}]);