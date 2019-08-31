(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n// Allow for running under nodejs/requirejs in tests\nvar _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    onEnterRules: [\n        {\n            // e.g. /** | */\n            beforeText: /^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/,\n            afterText: /^\\s*\\*\\/$/,\n            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent, appendText: ' * ' }\n        },\n        {\n            // e.g. /** ...|\n            beforeText: /^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/,\n            action: { indentAction: _monaco.languages.IndentAction.None, appendText: ' * ' }\n        },\n        {\n            // e.g.  * ...|\n            beforeText: /^(\\t|(\\ \\ ))*\\ \\*(\\ ([^\\*]|\\*(?!\\/))*)?$/,\n            action: { indentAction: _monaco.languages.IndentAction.None, appendText: '* ' }\n        },\n        {\n            // e.g.  */|\n            beforeText: /^(\\t|(\\ \\ ))*\\ \\*\\/\\s*$/,\n            action: { indentAction: _monaco.languages.IndentAction.None, removeText: 1 }\n        }\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '`', close: '`', notIn: ['string', 'comment'] },\n        { open: \"/**\", close: \" */\", notIn: [\"string\"] }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*//\\\\s*#?region\\\\b\"),\n            end: new RegExp(\"^\\\\s*//\\\\s*#?endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    tokenPostfix: '.ts',\n    keywords: [\n        'abstract', 'as', 'break', 'case', 'catch', 'class', 'continue', 'const',\n        'constructor', 'debugger', 'declare', 'default', 'delete', 'do', 'else',\n        'enum', 'export', 'extends', 'false', 'finally', 'for', 'from', 'function',\n        'get', 'if', 'implements', 'import', 'in', 'infer', 'instanceof', 'interface',\n        'is', 'keyof', 'let', 'module', 'namespace', 'never', 'new', 'null', 'package',\n        'private', 'protected', 'public', 'readonly', 'require', 'global', 'return',\n        'set', 'static', 'super', 'switch', 'symbol', 'this', 'throw', 'true', 'try',\n        'type', 'typeof', 'unique', 'var', 'void', 'while', 'with', 'yield', 'async',\n        'await', 'of'\n    ],\n    typeKeywords: [\n        'any', 'boolean', 'number', 'object', 'string', 'undefined'\n    ],\n    operators: [\n        '<=', '>=', '==', '!=', '===', '!==', '=>', '+', '-', '**',\n        '*', '/', '%', '++', '--', '<<', '</', '>>', '>>>', '&',\n        '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=',\n        '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=',\n        '^=', '@',\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    digits: /\\d+(_+\\d+)*/,\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n    regexpctl: /[(){}\\[\\]\\$\\^|\\-*+?\\.]/,\n    regexpesc: /\\\\(?:[bBdDfnrstvwWn0\\\\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/[{}]/, 'delimiter.bracket'],\n            { include: 'common' }\n        ],\n        common: [\n            // identifiers and keywords\n            [/[a-z_$][\\w$]*/, {\n                    cases: {\n                        '@typeKeywords': 'keyword',\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[A-Z][\\w\\$]*/, 'type.identifier'],\n            // [/[A-Z][\\w\\$]*/, 'identifier'],\n            // whitespace\n            { include: '@whitespace' },\n            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)\n            [/\\/(?=([^\\\\\\/]|\\\\.)+\\/([gimsuy]*)(\\s*)(\\.|;|\\/|,|\\)|\\]|\\}|$))/, { token: 'regexp', bracket: '@open', next: '@regexp' }],\n            // delimiters and operators\n            [/[()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/!(?=([^=]|$))/, 'delimiter'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // numbers\n            [/(@digits)[eE]([\\-+]?(@digits))?/, 'number.float'],\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?/, 'number.float'],\n            [/0[xX](@hexdigits)/, 'number.hex'],\n            [/0[oO]?(@octaldigits)/, 'number.octal'],\n            [/0[bB](@binarydigits)/, 'number.binary'],\n            [/(@digits)/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string_double'],\n            [/'/, 'string', '@string_single'],\n            [/`/, 'string', '@string_backtick'],\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@jsdoc'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        jsdoc: [\n            [/[^\\/*]+/, 'comment.doc'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        // We match regular expression quite precisely\n        regexp: [\n            [/(\\{)(\\d+(?:,\\d*)?)(\\})/, ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']],\n            [/(\\[)(\\^?)(?=(?:[^\\]\\\\\\/]|\\\\.)+)/, ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]],\n            [/(\\()(\\?:|\\?=|\\?!)/, ['regexp.escape.control', 'regexp.escape.control']],\n            [/[()]/, 'regexp.escape.control'],\n            [/@regexpctl/, 'regexp.escape.control'],\n            [/[^\\\\\\/]/, 'regexp'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/\\\\\\./, 'regexp.invalid'],\n            [/(\\/)([gimsuy]*)/, [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']],\n        ],\n        regexrange: [\n            [/-/, 'regexp.escape.control'],\n            [/\\^/, 'regexp.invalid'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/[^\\]]/, 'regexp'],\n            [/\\]/, { token: 'regexp.escape.control', next: '@pop', bracket: '@close' }]\n        ],\n        string_double: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ],\n        string_single: [\n            [/[^\\\\']+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/'/, 'string', '@pop']\n        ],\n        string_backtick: [\n            [/\\$\\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],\n            [/[^\\\\`$]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/`/, 'string', '@pop']\n        ],\n        bracketCounting: [\n            [/\\{/, 'delimiter.bracket', '@bracketCounting'],\n            [/\\}/, 'delimiter.bracket', '@pop'],\n            { include: 'common' }\n        ],\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC5qcz9mM2I3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ087QUFDUCxvRUFBb0UsSUFBSSxNQUFNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywyQ0FBMkM7QUFDcEQsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHlFQUF5RSxFQUFFLGNBQWMsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLHdEQUF3RCxjQUFjLFFBQVEscURBQXFEO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQywyRUFBMkUsc0RBQXNEO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBbUQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtFQUFrRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksdURBQXVEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy90eXBlc2NyaXB0L3R5cGVzY3JpcHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0Jztcbi8vIEFsbG93IGZvciBydW5uaW5nIHVuZGVyIG5vZGVqcy9yZXF1aXJlanMgaW4gdGVzdHNcbnZhciBfbW9uYWNvID0gKHR5cGVvZiBtb25hY28gPT09ICd1bmRlZmluZWQnID8gc2VsZi5tb25hY28gOiBtb25hY28pO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBvbkVudGVyUnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZS5nLiAvKiogfCAqL1xuICAgICAgICAgICAgYmVmb3JlVGV4dDogL15cXHMqXFwvXFwqXFwqKD8hXFwvKShbXlxcKl18XFwqKD8hXFwvKSkqJC8sXG4gICAgICAgICAgICBhZnRlclRleHQ6IC9eXFxzKlxcKlxcLyQvLFxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogX21vbmFjby5sYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudE91dGRlbnQsIGFwcGVuZFRleHQ6ICcgKiAnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZS5nLiAvKiogLi4ufFxuICAgICAgICAgICAgYmVmb3JlVGV4dDogL15cXHMqXFwvXFwqXFwqKD8hXFwvKShbXlxcKl18XFwqKD8hXFwvKSkqJC8sXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBfbW9uYWNvLmxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uTm9uZSwgYXBwZW5kVGV4dDogJyAqICcgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBlLmcuICAqIC4uLnxcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IC9eKFxcdHwoXFwgXFwgKSkqXFwgXFwqKFxcIChbXlxcKl18XFwqKD8hXFwvKSkqKT8kLyxcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IF9tb25hY28ubGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5Ob25lLCBhcHBlbmRUZXh0OiAnKiAnIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZS5nLiAgKi98XG4gICAgICAgICAgICBiZWZvcmVUZXh0OiAvXihcXHR8KFxcIFxcICkpKlxcIFxcKlxcL1xccyokLyxcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IF9tb25hY28ubGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5Ob25lLCByZW1vdmVUZXh0OiAxIH1cbiAgICAgICAgfVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiBcIi8qKlwiLCBjbG9zZTogXCIgKi9cIiwgbm90SW46IFtcInN0cmluZ1wiXSB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKi8vXFxcXHMqIz9yZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyovL1xcXFxzKiM/ZW5kcmVnaW9uXFxcXGJcIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIC8vIFNldCBkZWZhdWx0VG9rZW4gdG8gaW52YWxpZCB0byBzZWUgd2hhdCB5b3UgZG8gbm90IHRva2VuaXplIHlldFxuICAgIGRlZmF1bHRUb2tlbjogJ2ludmFsaWQnLFxuICAgIHRva2VuUG9zdGZpeDogJy50cycsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2Fic3RyYWN0JywgJ2FzJywgJ2JyZWFrJywgJ2Nhc2UnLCAnY2F0Y2gnLCAnY2xhc3MnLCAnY29udGludWUnLCAnY29uc3QnLFxuICAgICAgICAnY29uc3RydWN0b3InLCAnZGVidWdnZXInLCAnZGVjbGFyZScsICdkZWZhdWx0JywgJ2RlbGV0ZScsICdkbycsICdlbHNlJyxcbiAgICAgICAgJ2VudW0nLCAnZXhwb3J0JywgJ2V4dGVuZHMnLCAnZmFsc2UnLCAnZmluYWxseScsICdmb3InLCAnZnJvbScsICdmdW5jdGlvbicsXG4gICAgICAgICdnZXQnLCAnaWYnLCAnaW1wbGVtZW50cycsICdpbXBvcnQnLCAnaW4nLCAnaW5mZXInLCAnaW5zdGFuY2VvZicsICdpbnRlcmZhY2UnLFxuICAgICAgICAnaXMnLCAna2V5b2YnLCAnbGV0JywgJ21vZHVsZScsICduYW1lc3BhY2UnLCAnbmV2ZXInLCAnbmV3JywgJ251bGwnLCAncGFja2FnZScsXG4gICAgICAgICdwcml2YXRlJywgJ3Byb3RlY3RlZCcsICdwdWJsaWMnLCAncmVhZG9ubHknLCAncmVxdWlyZScsICdnbG9iYWwnLCAncmV0dXJuJyxcbiAgICAgICAgJ3NldCcsICdzdGF0aWMnLCAnc3VwZXInLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0aGlzJywgJ3Rocm93JywgJ3RydWUnLCAndHJ5JyxcbiAgICAgICAgJ3R5cGUnLCAndHlwZW9mJywgJ3VuaXF1ZScsICd2YXInLCAndm9pZCcsICd3aGlsZScsICd3aXRoJywgJ3lpZWxkJywgJ2FzeW5jJyxcbiAgICAgICAgJ2F3YWl0JywgJ29mJ1xuICAgIF0sXG4gICAgdHlwZUtleXdvcmRzOiBbXG4gICAgICAgICdhbnknLCAnYm9vbGVhbicsICdudW1iZXInLCAnb2JqZWN0JywgJ3N0cmluZycsICd1bmRlZmluZWQnXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJzw9JywgJz49JywgJz09JywgJyE9JywgJz09PScsICchPT0nLCAnPT4nLCAnKycsICctJywgJyoqJyxcbiAgICAgICAgJyonLCAnLycsICclJywgJysrJywgJy0tJywgJzw8JywgJzwvJywgJz4+JywgJz4+PicsICcmJyxcbiAgICAgICAgJ3wnLCAnXicsICchJywgJ34nLCAnJiYnLCAnfHwnLCAnPycsICc6JywgJz0nLCAnKz0nLCAnLT0nLFxuICAgICAgICAnKj0nLCAnKio9JywgJy89JywgJyU9JywgJzw8PScsICc+Pj0nLCAnPj4+PScsICcmPScsICd8PScsXG4gICAgICAgICdePScsICdAJyxcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIGRpZ2l0czogL1xcZCsoXytcXGQrKSovLFxuICAgIG9jdGFsZGlnaXRzOiAvWzAtN10rKF8rWzAtN10rKSovLFxuICAgIGJpbmFyeWRpZ2l0czogL1swLTFdKyhfK1swLTFdKykqLyxcbiAgICBoZXhkaWdpdHM6IC9bWzAtOWEtZkEtRl0rKF8rWzAtOWEtZkEtRl0rKSovLFxuICAgIHJlZ2V4cGN0bDogL1soKXt9XFxbXFxdXFwkXFxefFxcLSorP1xcLl0vLFxuICAgIHJlZ2V4cGVzYzogL1xcXFwoPzpbYkJkRGZucnN0dndXbjBcXFxcXFwvXXxAcmVnZXhwY3RsfGNbQS1aXXx4WzAtOWEtZkEtRl17Mn18dVswLTlhLWZBLUZdezR9KS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvW3t9XS8sICdkZWxpbWl0ZXIuYnJhY2tldCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnY29tbW9uJyB9XG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1vbjogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbL1thLXpfJF1bXFx3JF0qLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0eXBlS2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvW0EtWl1bXFx3XFwkXSovLCAndHlwZS5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICAvLyBbL1tBLVpdW1xcd1xcJF0qLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gcmVndWxhciBleHByZXNzaW9uOiBlbnN1cmUgaXQgaXMgdGVybWluYXRlZCBiZWZvcmUgYmVnaW5uaW5nIChvdGhlcndpc2UgaXQgaXMgYW4gb3BlYXRvcilcbiAgICAgICAgICAgIFsvXFwvKD89KFteXFxcXFxcL118XFxcXC4pK1xcLyhbZ2ltc3V5XSopKFxccyopKFxcLnw7fFxcL3wsfFxcKXxcXF18XFx9fCQpKS8sIHsgdG9rZW46ICdyZWdleHAnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHJlZ2V4cCcgfV0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvWygpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvISg/PShbXj1dfCQpKS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy8oQGRpZ2l0cylbZUVdKFtcXC0rXT8oQGRpZ2l0cykpPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpXFwuKEBkaWdpdHMpKFtlRV1bXFwtK10/KEBkaWdpdHMpKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdKEBoZXhkaWdpdHMpLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMFtvT10/KEBvY3RhbGRpZ2l0cykvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbYkJdKEBiaW5hcnlkaWdpdHMpLywgJ251bWJlci5iaW5hcnknXSxcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmdfZG91YmxlJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmdfc2luZ2xlJ10sXG4gICAgICAgICAgICBbL2AvLCAnc3RyaW5nJywgJ0BzdHJpbmdfYmFja3RpY2snXSxcbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy9cXC9cXCpcXCooPyFcXC8pLywgJ2NvbW1lbnQuZG9jJywgJ0Bqc2RvYyddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddLFxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGpzZG9jOiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQuZG9jJ10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50LmRvYycsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50LmRvYyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFdlIG1hdGNoIHJlZ3VsYXIgZXhwcmVzc2lvbiBxdWl0ZSBwcmVjaXNlbHlcbiAgICAgICAgcmVnZXhwOiBbXG4gICAgICAgICAgICBbLyhcXHspKFxcZCsoPzosXFxkKik/KShcXH0pLywgWydyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddXSxcbiAgICAgICAgICAgIFsvKFxcWykoXFxePykoPz0oPzpbXlxcXVxcXFxcXC9dfFxcXFwuKSspLywgWydyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCB7IHRva2VuOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgbmV4dDogJ0ByZWdleHJhbmdlJyB9XV0sXG4gICAgICAgICAgICBbLyhcXCgpKFxcPzp8XFw/PXxcXD8hKS8sIFsncmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddXSxcbiAgICAgICAgICAgIFsvWygpXS8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGN0bC8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvW15cXFxcXFwvXS8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGVzYy8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFxcXC4vLCAncmVnZXhwLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvKFxcLykoW2dpbXN1eV0qKS8sIFt7IHRva2VuOiAncmVnZXhwJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9LCAna2V5d29yZC5vdGhlciddXSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhyYW5nZTogW1xuICAgICAgICAgICAgWy8tLywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddLFxuICAgICAgICAgICAgWy9cXF4vLCAncmVnZXhwLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGVzYy8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1teXFxdXS8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsvXFxdLywgeyB0b2tlbjogJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsIG5leHQ6ICdAcG9wJywgYnJhY2tldDogJ0BjbG9zZScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nX2RvdWJsZTogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ19zaW5nbGU6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nX2JhY2t0aWNrOiBbXG4gICAgICAgICAgICBbL1xcJFxcey8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAYnJhY2tldENvdW50aW5nJyB9XSxcbiAgICAgICAgICAgIFsvW15cXFxcYCRdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvYC8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGJyYWNrZXRDb3VudGluZzogW1xuICAgICAgICAgICAgWy9cXHsvLCAnZGVsaW1pdGVyLmJyYWNrZXQnLCAnQGJyYWNrZXRDb3VudGluZyddLFxuICAgICAgICAgICAgWy9cXH0vLCAnZGVsaW1pdGVyLmJyYWNrZXQnLCAnQHBvcCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnY29tbW9uJyB9XG4gICAgICAgIF0sXG4gICAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js\n");

/***/ })

}]);