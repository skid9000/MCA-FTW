(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n*  Copyright (c) Microsoft Corporation. All rights reserved.\n*  Licensed under the MIT License. See License.txt in the project root for license information.\n*--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '#',\n    },\n    brackets: [['{', '}'], ['[', ']'], ['(', ')']],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' },\n    ],\n};\nvar language = {\n    defaultToken: '',\n    ignoreCase: true,\n    tokenPostfix: '.shell',\n    brackets: [\n        { token: 'delimiter.bracket', open: '{', close: '}' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.square', open: '[', close: ']' },\n    ],\n    keywords: [\n        'if',\n        'then',\n        'do',\n        'else',\n        'elif',\n        'while',\n        'until',\n        'for',\n        'in',\n        'esac',\n        'fi',\n        'fin',\n        'fil',\n        'done',\n        'exit',\n        'set',\n        'unset',\n        'export',\n        'function',\n    ],\n    builtins: [\n        'ab',\n        'awk',\n        'bash',\n        'beep',\n        'cat',\n        'cc',\n        'cd',\n        'chown',\n        'chmod',\n        'chroot',\n        'clear',\n        'cp',\n        'curl',\n        'cut',\n        'diff',\n        'echo',\n        'find',\n        'gawk',\n        'gcc',\n        'get',\n        'git',\n        'grep',\n        'hg',\n        'kill',\n        'killall',\n        'ln',\n        'ls',\n        'make',\n        'mkdir',\n        'openssl',\n        'mv',\n        'nc',\n        'node',\n        'npm',\n        'ping',\n        'ps',\n        'restart',\n        'rm',\n        'rmdir',\n        'sed',\n        'service',\n        'sh',\n        'shopt',\n        'shred',\n        'source',\n        'sort',\n        'sleep',\n        'ssh',\n        'start',\n        'stop',\n        'su',\n        'sudo',\n        'svn',\n        'tee',\n        'telnet',\n        'top',\n        'touch',\n        'vi',\n        'vim',\n        'wall',\n        'wc',\n        'wget',\n        'who',\n        'write',\n        'yes',\n        'zsh',\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?&|+\\-*\\/\\^;\\.,]+/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            [\n                /[a-zA-Z]\\w*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@builtins': 'type.identifier',\n                        '@default': ''\n                    },\n                },\n            ],\n            { include: '@strings' },\n            { include: '@parameters' },\n            { include: '@heredoc' },\n            [/[{}\\[\\]()]/, '@brackets'],\n            [/-+\\w+/, 'attribute.name'],\n            [/@symbols/, 'delimiter'],\n            { include: '@numbers' },\n            [/[,;]/, 'delimiter'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white'],\n            [/(^#!.*$)/, 'metatag'],\n            [/(^#.*$)/, 'comment'],\n        ],\n        numbers: [\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\n            [/\\d+/, 'number'],\n        ],\n        // Recognize strings, including those broken across lines\n        strings: [\n            [/'/, 'string', '@stringBody'],\n            [/\"/, 'string', '@dblStringBody']\n        ],\n        stringBody: [\n            [/'/, 'string', '@popall'],\n            [/./, 'string'],\n        ],\n        dblStringBody: [\n            [/\"/, 'string', '@popall'],\n            [/./, 'string'],\n        ],\n        heredoc: [\n            [/(<<[-<]?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)/, ['constants', 'white', 'string.heredoc.delimiter', 'string.heredoc', 'string.heredoc.delimiter']]\n        ],\n        parameters: [\n            [/\\$\\d+/, 'variable.predefined'],\n            [/\\$\\w+/, 'variable'],\n            [/\\$[*@#?\\-$!0_]/, 'variable'],\n            [/\\$'/, 'variable', '@parameterBodyQuote'],\n            [/\\$\"/, 'variable', '@parameterBodyDoubleQuote'],\n            [/\\$\\(/, 'variable', '@parameterBodyParen'],\n            [/\\$\\{/, 'variable', '@parameterBodyCurlyBrace'],\n        ],\n        parameterBodyQuote: [\n            [/[^#:%*@\\-!_']+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[']/, 'variable', '@pop'],\n        ],\n        parameterBodyDoubleQuote: [\n            [/[^#:%*@\\-!_\"]+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[\"]/, 'variable', '@pop'],\n        ],\n        parameterBodyParen: [\n            [/[^#:%*@\\-!_)]+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[)]/, 'variable', '@pop'],\n        ],\n        parameterBodyCurlyBrace: [\n            [/[^#:%*@\\-!_}]+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[}]/, 'variable', '@pop'],\n        ],\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NoZWxsL3NoZWxsLmpzPzk3ZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQkFBa0IsS0FBSztBQUN2QjtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQyxZQUFZLEdBQUc7QUFDN0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxtREFBbUQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxzQkFBc0I7QUFDbkMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NoZWxsL3NoZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJyxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbWyd7JywgJ30nXSwgWydbJywgJ10nXSwgWycoJywgJyknXV0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9LFxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9LFxuICAgIF0sXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNoZWxsJyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ3RoZW4nLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbGlmJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdpbicsXG4gICAgICAgICdlc2FjJyxcbiAgICAgICAgJ2ZpJyxcbiAgICAgICAgJ2ZpbicsXG4gICAgICAgICdmaWwnLFxuICAgICAgICAnZG9uZScsXG4gICAgICAgICdleGl0JyxcbiAgICAgICAgJ3NldCcsXG4gICAgICAgICd1bnNldCcsXG4gICAgICAgICdleHBvcnQnLFxuICAgICAgICAnZnVuY3Rpb24nLFxuICAgIF0sXG4gICAgYnVpbHRpbnM6IFtcbiAgICAgICAgJ2FiJyxcbiAgICAgICAgJ2F3aycsXG4gICAgICAgICdiYXNoJyxcbiAgICAgICAgJ2JlZXAnLFxuICAgICAgICAnY2F0JyxcbiAgICAgICAgJ2NjJyxcbiAgICAgICAgJ2NkJyxcbiAgICAgICAgJ2Nob3duJyxcbiAgICAgICAgJ2NobW9kJyxcbiAgICAgICAgJ2Nocm9vdCcsXG4gICAgICAgICdjbGVhcicsXG4gICAgICAgICdjcCcsXG4gICAgICAgICdjdXJsJyxcbiAgICAgICAgJ2N1dCcsXG4gICAgICAgICdkaWZmJyxcbiAgICAgICAgJ2VjaG8nLFxuICAgICAgICAnZmluZCcsXG4gICAgICAgICdnYXdrJyxcbiAgICAgICAgJ2djYycsXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnZ2l0JyxcbiAgICAgICAgJ2dyZXAnLFxuICAgICAgICAnaGcnLFxuICAgICAgICAna2lsbCcsXG4gICAgICAgICdraWxsYWxsJyxcbiAgICAgICAgJ2xuJyxcbiAgICAgICAgJ2xzJyxcbiAgICAgICAgJ21ha2UnLFxuICAgICAgICAnbWtkaXInLFxuICAgICAgICAnb3BlbnNzbCcsXG4gICAgICAgICdtdicsXG4gICAgICAgICduYycsXG4gICAgICAgICdub2RlJyxcbiAgICAgICAgJ25wbScsXG4gICAgICAgICdwaW5nJyxcbiAgICAgICAgJ3BzJyxcbiAgICAgICAgJ3Jlc3RhcnQnLFxuICAgICAgICAncm0nLFxuICAgICAgICAncm1kaXInLFxuICAgICAgICAnc2VkJyxcbiAgICAgICAgJ3NlcnZpY2UnLFxuICAgICAgICAnc2gnLFxuICAgICAgICAnc2hvcHQnLFxuICAgICAgICAnc2hyZWQnLFxuICAgICAgICAnc291cmNlJyxcbiAgICAgICAgJ3NvcnQnLFxuICAgICAgICAnc2xlZXAnLFxuICAgICAgICAnc3NoJyxcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgJ3N0b3AnLFxuICAgICAgICAnc3UnLFxuICAgICAgICAnc3VkbycsXG4gICAgICAgICdzdm4nLFxuICAgICAgICAndGVlJyxcbiAgICAgICAgJ3RlbG5ldCcsXG4gICAgICAgICd0b3AnLFxuICAgICAgICAndG91Y2gnLFxuICAgICAgICAndmknLFxuICAgICAgICAndmltJyxcbiAgICAgICAgJ3dhbGwnLFxuICAgICAgICAnd2MnLFxuICAgICAgICAnd2dldCcsXG4gICAgICAgICd3aG8nLFxuICAgICAgICAnd3JpdGUnLFxuICAgICAgICAneWVzJyxcbiAgICAgICAgJ3pzaCcsXG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj8mfCtcXC0qXFwvXFxeO1xcLixdKy8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3R5cGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcGFyYW1ldGVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BoZXJlZG9jJyB9LFxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbLy0rXFx3Ky8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgWy9bLDtdLywgJ2RlbGltaXRlciddLFxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvKF4jIS4qJCkvLCAnbWV0YXRhZyddLFxuICAgICAgICAgICAgWy8oXiMuKiQpLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10qWzAtOWEtZkEtRl0vLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICBdLFxuICAgICAgICAvLyBSZWNvZ25pemUgc3RyaW5ncywgaW5jbHVkaW5nIHRob3NlIGJyb2tlbiBhY3Jvc3MgbGluZXNcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nQm9keSddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQGRibFN0cmluZ0JvZHknXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXSxcbiAgICAgICAgXSxcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddLFxuICAgICAgICBdLFxuICAgICAgICBoZXJlZG9jOiBbXG4gICAgICAgICAgICBbLyg8PFstPF0/KShcXHMqKShbJ1wiYF0/KShbXFx3XFwtXSspKFsnXCJgXT8pLywgWydjb25zdGFudHMnLCAnd2hpdGUnLCAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgJ3N0cmluZy5oZXJlZG9jJywgJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlciddXVxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICAgICAgICBbL1xcJFxcZCsvLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxuICAgICAgICAgICAgWy9cXCRcXHcrLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1xcJFsqQCM/XFwtJCEwX10vLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvXFwkJy8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keVF1b3RlJ10sXG4gICAgICAgICAgICBbL1xcJFwiLywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5RG91YmxlUXVvdGUnXSxcbiAgICAgICAgICAgIFsvXFwkXFwoLywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5UGFyZW4nXSxcbiAgICAgICAgICAgIFsvXFwkXFx7LywgJ3ZhcmlhYmxlJywgJ0BwYXJhbWV0ZXJCb2R5Q3VybHlCcmFjZSddLFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJCb2R5UXVvdGU6IFtcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFfJ10rLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1sjOiUqQFxcLSFfXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWyddLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyQm9keURvdWJsZVF1b3RlOiBbXG4gICAgICAgICAgICBbL1teIzolKkBcXC0hX1wiXSsvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvWyM6JSpAXFwtIV9dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bXCJdLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyQm9keVBhcmVuOiBbXG4gICAgICAgICAgICBbL1teIzolKkBcXC0hXyldKy8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1spXS8sICd2YXJpYWJsZScsICdAcG9wJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlckJvZHlDdXJseUJyYWNlOiBbXG4gICAgICAgICAgICBbL1teIzolKkBcXC0hX31dKy8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1t9XS8sICd2YXJpYWJsZScsICdAcG9wJ10sXG4gICAgICAgIF0sXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js\n");

/***/ })

}]);