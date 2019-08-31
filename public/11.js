(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
  \****************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\$\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')'],\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>' },\n        { open: '\\'', close: '\\'' },\n        { open: '\"', close: '\"' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.cs',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    keywords: [\n        'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',\n        'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',\n        'object', 'dynamic', 'string', 'assembly', 'is', 'as', 'ref',\n        'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',\n        'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',\n        'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',\n        'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',\n        'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',\n        'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',\n        'field', 'event', 'method', 'param', 'property', 'public', 'protected',\n        'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',\n        'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',\n        'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',\n        'null', 'async', 'await', 'fixed', 'sizeof', 'stackalloc', 'unsafe', 'nameof',\n        'when'\n    ],\n    namespaceFollows: [\n        'namespace', 'using',\n    ],\n    parenFollows: [\n        'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'\n    ],\n    operators: [\n        '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',\n        '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',\n        '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'\n    ],\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    // escape sequences\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/\\@?[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },\n                        '@keywords': { token: 'keyword.$0', next: '@qualified' },\n                        '@default': { token: 'identifier', next: '@qualified' }\n                    }\n                }],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/}/, {\n                    cases: {\n                        '$S2==interpolatedstring': { token: 'string.quote', next: '@pop' },\n                        '$S2==litinterpstring': { token: 'string.quote', next: '@pop' },\n                        '@default': '@brackets'\n                    }\n                }],\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // numbers\n            [/[0-9_]*\\.[0-9_]+([eE][\\-+]?\\d+)?[fFdD]?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],\n            [/0[bB][01_]+/, 'number.hex'],\n            [/[0-9_]+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, { token: 'string.quote', next: '@string' }],\n            [/\\$\\@\"/, { token: 'string.quote', next: '@litinterpstring' }],\n            [/\\@\"/, { token: 'string.quote', next: '@litstring' }],\n            [/\\$\"/, { token: 'string.quote', next: '@interpolatedstring' }],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        qualified: [\n            [/[a-zA-Z_][\\w]*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            [/\\./, 'delimiter'],\n            ['', '', '@pop'],\n        ],\n        namespace: [\n            { include: '@whitespace' },\n            [/[A-Z]\\w*/, 'namespace'],\n            [/[\\.=]/, 'delimiter'],\n            ['', '', '@pop'],\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/,    'comment', '@push' ],    // no nested comments :-(\n            ['\\\\*/', 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        litstring: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        litinterpstring: [\n            [/[^\"{]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/{{/, 'string.escape'],\n            [/}}/, 'string.escape'],\n            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        interpolatedstring: [\n            [/[^\\\\\"{]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/{{/, 'string.escape'],\n            [/}}/, 'string.escape'],\n            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        whitespace: [\n            [/^[ \\t\\v\\f]*#((r)|(load))(?=\\s)/, 'directive.csx'],\n            [/^[ \\t\\v\\f]*#\\w.*$/, 'namespace.cpp'],\n            [/[ \\t\\v\\f\\r\\n]+/, ''],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NzaGFycC9jc2hhcnAuanM/ZmNlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUCxvRUFBb0UsSUFBSSxNQUFNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxzREFBc0Q7QUFDL0Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsbURBQW1EO0FBQzVELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDBDQUEwQztBQUN4RixzQ0FBc0MsMENBQTBDO0FBQ2hGLHFDQUFxQztBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsZUFBZTtBQUNmO0FBQ0Esb0RBQW9ELHNDQUFzQztBQUMxRixpREFBaUQsc0NBQXNDO0FBQ3ZGO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLG1CQUFtQix5Q0FBeUM7QUFDNUQsdUJBQXVCLGtEQUFrRDtBQUN6RSxxQkFBcUIsNENBQTRDO0FBQ2pFLHFCQUFxQixxREFBcUQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlLElBQUksc0RBQXNEO0FBQ3pFLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlLElBQUkseURBQXlEO0FBQzVFLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvY3NoYXJwL2NzaGFycC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcI1xcJFxcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddLFxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXSxcbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqI3JlZ2lvblxcXFxiXCIpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNlbmRyZWdpb25cXFxcYlwiKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuY3MnLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdleHRlcm4nLCAnYWxpYXMnLCAndXNpbmcnLCAnYm9vbCcsICdkZWNpbWFsJywgJ3NieXRlJywgJ2J5dGUnLCAnc2hvcnQnLFxuICAgICAgICAndXNob3J0JywgJ2ludCcsICd1aW50JywgJ2xvbmcnLCAndWxvbmcnLCAnY2hhcicsICdmbG9hdCcsICdkb3VibGUnLFxuICAgICAgICAnb2JqZWN0JywgJ2R5bmFtaWMnLCAnc3RyaW5nJywgJ2Fzc2VtYmx5JywgJ2lzJywgJ2FzJywgJ3JlZicsXG4gICAgICAgICdvdXQnLCAndGhpcycsICdiYXNlJywgJ25ldycsICd0eXBlb2YnLCAndm9pZCcsICdjaGVja2VkJywgJ3VuY2hlY2tlZCcsXG4gICAgICAgICdkZWZhdWx0JywgJ2RlbGVnYXRlJywgJ3ZhcicsICdjb25zdCcsICdpZicsICdlbHNlJywgJ3N3aXRjaCcsICdjYXNlJyxcbiAgICAgICAgJ3doaWxlJywgJ2RvJywgJ2ZvcicsICdmb3JlYWNoJywgJ2luJywgJ2JyZWFrJywgJ2NvbnRpbnVlJywgJ2dvdG8nLFxuICAgICAgICAncmV0dXJuJywgJ3Rocm93JywgJ3RyeScsICdjYXRjaCcsICdmaW5hbGx5JywgJ2xvY2snLCAneWllbGQnLCAnZnJvbScsXG4gICAgICAgICdsZXQnLCAnd2hlcmUnLCAnam9pbicsICdvbicsICdlcXVhbHMnLCAnaW50bycsICdvcmRlcmJ5JywgJ2FzY2VuZGluZycsXG4gICAgICAgICdkZXNjZW5kaW5nJywgJ3NlbGVjdCcsICdncm91cCcsICdieScsICduYW1lc3BhY2UnLCAncGFydGlhbCcsICdjbGFzcycsXG4gICAgICAgICdmaWVsZCcsICdldmVudCcsICdtZXRob2QnLCAncGFyYW0nLCAncHJvcGVydHknLCAncHVibGljJywgJ3Byb3RlY3RlZCcsXG4gICAgICAgICdpbnRlcm5hbCcsICdwcml2YXRlJywgJ2Fic3RyYWN0JywgJ3NlYWxlZCcsICdzdGF0aWMnLCAnc3RydWN0JywgJ3JlYWRvbmx5JyxcbiAgICAgICAgJ3ZvbGF0aWxlJywgJ3ZpcnR1YWwnLCAnb3ZlcnJpZGUnLCAncGFyYW1zJywgJ2dldCcsICdzZXQnLCAnYWRkJywgJ3JlbW92ZScsXG4gICAgICAgICdvcGVyYXRvcicsICd0cnVlJywgJ2ZhbHNlJywgJ2ltcGxpY2l0JywgJ2V4cGxpY2l0JywgJ2ludGVyZmFjZScsICdlbnVtJyxcbiAgICAgICAgJ251bGwnLCAnYXN5bmMnLCAnYXdhaXQnLCAnZml4ZWQnLCAnc2l6ZW9mJywgJ3N0YWNrYWxsb2MnLCAndW5zYWZlJywgJ25hbWVvZicsXG4gICAgICAgICd3aGVuJ1xuICAgIF0sXG4gICAgbmFtZXNwYWNlRm9sbG93czogW1xuICAgICAgICAnbmFtZXNwYWNlJywgJ3VzaW5nJyxcbiAgICBdLFxuICAgIHBhcmVuRm9sbG93czogW1xuICAgICAgICAnaWYnLCAnZm9yJywgJ3doaWxlJywgJ3N3aXRjaCcsICdmb3JlYWNoJywgJ3VzaW5nJywgJ2NhdGNoJywgJ3doZW4nXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJz0nLCAnPz8nLCAnfHwnLCAnJiYnLCAnfCcsICdeJywgJyYnLCAnPT0nLCAnIT0nLCAnPD0nLCAnPj0nLCAnPDwnLFxuICAgICAgICAnKycsICctJywgJyonLCAnLycsICclJywgJyEnLCAnficsICcrKycsICctLScsICcrPScsXG4gICAgICAgICctPScsICcqPScsICcvPScsICclPScsICcmPScsICd8PScsICdePScsICc8PD0nLCAnPj49JywgJz4+JywgJz0+J1xuICAgIF0sXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgLy8gZXNjYXBlIHNlcXVlbmNlc1xuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgWy9cXEA/W2EtekEtWl9dXFx3Ki8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbmFtZXNwYWNlRm9sbG93cyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJywgbmV4dDogJ0BuYW1lc3BhY2UnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnLCBuZXh0OiAnQHF1YWxpZmllZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdpZGVudGlmaWVyJywgbmV4dDogJ0BxdWFsaWZpZWQnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvfS8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PWludGVycG9sYXRlZHN0cmluZyc6IHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PWxpdGludGVycHN0cmluZyc6IHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdAYnJhY2tldHMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1swLTlfXSpcXC5bMC05X10rKFtlRV1bXFwtK10/XFxkKyk/W2ZGZERdPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMFtiQl1bMDFfXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9bMC05X10rLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXFwkXFxAXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BsaXRpbnRlcnBzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cXEBcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGxpdHN0cmluZycgfV0sXG4gICAgICAgICAgICBbL1xcJFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cbiAgICAgICAgXSxcbiAgICAgICAgcXVhbGlmaWVkOiBbXG4gICAgICAgICAgICBbL1thLXpBLVpfXVtcXHddKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbL1xcLi8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnJywgJycsICdAcG9wJ10sXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWVzcGFjZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbL1tBLVpdXFx3Ki8sICduYW1lc3BhY2UnXSxcbiAgICAgICAgICAgIFsvW1xcLj1dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWycnLCAnJywgJ0Bwb3AnXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICAgICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBubyBuZXN0ZWQgY29tbWVudHMgOi0oXG4gICAgICAgICAgICBbJ1xcXFwqLycsICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGxpdHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiXCIvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbGl0aW50ZXJwc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCJ7XSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiXCIvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy97ey8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL319LywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvey8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAncm9vdC5saXRpbnRlcnBzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgaW50ZXJwb2xhdGVkc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwie10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy97ey8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL319LywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvey8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9eWyBcXHRcXHZcXGZdKiMoKHIpfChsb2FkKSkoPz1cXHMpLywgJ2RpcmVjdGl2ZS5jc3gnXSxcbiAgICAgICAgICAgIFsvXlsgXFx0XFx2XFxmXSojXFx3LiokLywgJ25hbWVzcGFjZS5jcHAnXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHZcXGZcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js\n");

/***/ })

}]);