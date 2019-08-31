(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [['[', ']'], ['(', ')'], ['{', '}']],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.msdax',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '{', close: '}', token: 'delimiter.brackets' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        // Query keywords\n        'VAR',\n        'RETURN',\n        'NOT',\n        'EVALUATE',\n        'DATATABLE',\n        'ORDER',\n        'BY',\n        'START',\n        'AT',\n        'DEFINE',\n        'MEASURE',\n        'ASC',\n        'DESC',\n        'IN',\n        // Datatable types\n        'BOOLEAN',\n        'DOUBLE',\n        'INTEGER',\n        'DATETIME',\n        'CURRENCY',\n        'STRING'\n    ],\n    functions: [\n        // Relational\n        'CLOSINGBALANCEMONTH', 'CLOSINGBALANCEQUARTER', 'CLOSINGBALANCEYEAR', 'DATEADD', 'DATESBETWEEN',\n        'DATESINPERIOD', 'DATESMTD', 'DATESQTD', 'DATESYTD', 'ENDOFMONTH',\n        'ENDOFQUARTER', 'ENDOFYEAR', 'FIRSTDATE', 'FIRSTNONBLANK', 'LASTDATE',\n        'LASTNONBLANK', 'NEXTDAY', 'NEXTMONTH', 'NEXTQUARTER', 'NEXTYEAR',\n        'OPENINGBALANCEMONTH', 'OPENINGBALANCEQUARTER', 'OPENINGBALANCEYEAR', 'PARALLELPERIOD', 'PREVIOUSDAY',\n        'PREVIOUSMONTH', 'PREVIOUSQUARTER', 'PREVIOUSYEAR', 'SAMEPERIODLASTYEAR', 'STARTOFMONTH',\n        'STARTOFQUARTER', 'STARTOFYEAR', 'TOTALMTD', 'TOTALQTD', 'TOTALYTD',\n        'ADDCOLUMNS', 'ADDMISSINGITEMS', 'ALL', 'ALLEXCEPT', 'ALLNOBLANKROW',\n        'ALLSELECTED', 'CALCULATE', 'CALCULATETABLE', 'CALENDAR', 'CALENDARAUTO',\n        'CROSSFILTER', 'CROSSJOIN', 'CURRENTGROUP', 'DATATABLE', 'DETAILROWS',\n        'DISTINCT', 'EARLIER', 'EARLIEST', 'EXCEPT', 'FILTER',\n        'FILTERS', 'GENERATE', 'GENERATEALL', 'GROUPBY', 'IGNORE',\n        'INTERSECT', 'ISONORAFTER', 'KEEPFILTERS', 'LOOKUPVALUE', 'NATURALINNERJOIN',\n        'NATURALLEFTOUTERJOIN', 'RELATED', 'RELATEDTABLE', 'ROLLUP', 'ROLLUPADDISSUBTOTAL',\n        'ROLLUPGROUP', 'ROLLUPISSUBTOTAL', 'ROW', 'SAMPLE', 'SELECTCOLUMNS',\n        'SUBSTITUTEWITHINDEX', 'SUMMARIZE', 'SUMMARIZECOLUMNS', 'TOPN', 'TREATAS',\n        'UNION', 'USERELATIONSHIP', 'VALUES', 'SUM', 'SUMX',\n        'PATH', 'PATHCONTAINS', 'PATHITEM', 'PATHITEMREVERSE', 'PATHLENGTH',\n        'AVERAGE', 'AVERAGEA', 'AVERAGEX', 'COUNT', 'COUNTA',\n        'COUNTAX', 'COUNTBLANK', 'COUNTROWS', 'COUNTX', 'DISTINCTCOUNT',\n        'DIVIDE', 'GEOMEAN', 'GEOMEANX', 'MAX', 'MAXA',\n        'MAXX', 'MEDIAN', 'MEDIANX', 'MIN', 'MINA',\n        'MINX', 'PERCENTILE.EXC', 'PERCENTILE.INC', 'PERCENTILEX.EXC', 'PERCENTILEX.INC',\n        'PRODUCT', 'PRODUCTX', 'RANK.EQ', 'RANKX', 'STDEV.P',\n        'STDEV.S', 'STDEVX.P', 'STDEVX.S', 'VAR.P', 'VAR.S',\n        'VARX.P', 'VARX.S', 'XIRR', 'XNPV',\n        // Scalar\n        'DATE', 'DATEDIFF', 'DATEVALUE', 'DAY', 'EDATE',\n        'EOMONTH', 'HOUR', 'MINUTE', 'MONTH', 'NOW',\n        'SECOND', 'TIME', 'TIMEVALUE', 'TODAY', 'WEEKDAY',\n        'WEEKNUM', 'YEAR', 'YEARFRAC', 'CONTAINS', 'CONTAINSROW',\n        'CUSTOMDATA', 'ERROR', 'HASONEFILTER', 'HASONEVALUE', 'ISBLANK',\n        'ISCROSSFILTERED', 'ISEMPTY', 'ISERROR', 'ISEVEN', 'ISFILTERED',\n        'ISLOGICAL', 'ISNONTEXT', 'ISNUMBER', 'ISODD', 'ISSUBTOTAL',\n        'ISTEXT', 'USERNAME', 'USERPRINCIPALNAME', 'AND', 'FALSE',\n        'IF', 'IFERROR', 'NOT', 'OR', 'SWITCH',\n        'TRUE', 'ABS', 'ACOS', 'ACOSH', 'ACOT',\n        'ACOTH', 'ASIN', 'ASINH', 'ATAN', 'ATANH',\n        'BETA.DIST', 'BETA.INV', 'CEILING', 'CHISQ.DIST', 'CHISQ.DIST.RT',\n        'CHISQ.INV', 'CHISQ.INV.RT', 'COMBIN', 'COMBINA', 'CONFIDENCE.NORM',\n        'CONFIDENCE.T', 'COS', 'COSH', 'COT', 'COTH',\n        'CURRENCY', 'DEGREES', 'EVEN', 'EXP', 'EXPON.DIST',\n        'FACT', 'FLOOR', 'GCD', 'INT', 'ISO.CEILING',\n        'LCM', 'LN', 'LOG', 'LOG10', 'MOD',\n        'MROUND', 'ODD', 'PERMUT', 'PI', 'POISSON.DIST',\n        'POWER', 'QUOTIENT', 'RADIANS', 'RAND', 'RANDBETWEEN',\n        'ROUND', 'ROUNDDOWN', 'ROUNDUP', 'SIGN', 'SIN',\n        'SINH', 'SQRT', 'SQRTPI', 'TAN', 'TANH',\n        'TRUNC', 'BLANK', 'CONCATENATE', 'CONCATENATEX', 'EXACT',\n        'FIND', 'FIXED', 'FORMAT', 'LEFT', 'LEN',\n        'LOWER', 'MID', 'REPLACE', 'REPT', 'RIGHT',\n        'SEARCH', 'SUBSTITUTE', 'TRIM', 'UNICHAR', 'UNICODE',\n        'UPPER', 'VALUE'\n    ],\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@complexIdentifiers' },\n            [/[;,.]/, 'delimiter'],\n            [/[({})]/, '@brackets'],\n            [/[a-z_][a-zA-Z0-9_]*/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@functions': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        comments: [\n            [/\\/\\/+.*/, 'comment'],\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\n        ],\n        comment: [\n            [/[^*/]+/, 'comment'],\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\n            [/./, 'comment']\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/N\"/, { token: 'string', next: '@string' }],\n            [/\"/, { token: 'string', next: '@string' }]\n        ],\n        string: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string'],\n            [/\"/, { token: 'string', next: '@pop' }]\n        ],\n        complexIdentifiers: [\n            [/\\[/, { token: 'identifier.quote', next: '@bracketedIdentifier' }],\n            [/'/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\n        ],\n        bracketedIdentifier: [\n            [/[^\\]]+/, 'identifier'],\n            [/]]/, 'identifier'],\n            [/]/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        quotedIdentifier: [\n            [/[^']+/, 'identifier'],\n            [/''/, 'identifier'],\n            [/'/, { token: 'identifier.quote', next: '@pop' }]\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL21zZGF4L21zZGF4LmpzP2YyNmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDBDQUEwQyxLQUFLO0FBQy9DO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9EO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUyxTQUFTLFlBQVksZ0NBQWdDO0FBQzlELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxpQ0FBaUM7QUFDOUMsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQTJDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBLG9CQUFvQiwwREFBMEQ7QUFDOUUsbUJBQW1CLHVEQUF1RDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQTBDO0FBQzdEO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbXNkYXgvbXNkYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXG4gICAgfSxcbiAgICBicmFja2V0czogW1snWycsICddJ10sIFsnKCcsICcpJ10sIFsneycsICd9J11dLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5tc2RheCcsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldHMnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgLy8gUXVlcnkga2V5d29yZHNcbiAgICAgICAgJ1ZBUicsXG4gICAgICAgICdSRVRVUk4nLFxuICAgICAgICAnTk9UJyxcbiAgICAgICAgJ0VWQUxVQVRFJyxcbiAgICAgICAgJ0RBVEFUQUJMRScsXG4gICAgICAgICdPUkRFUicsXG4gICAgICAgICdCWScsXG4gICAgICAgICdTVEFSVCcsXG4gICAgICAgICdBVCcsXG4gICAgICAgICdERUZJTkUnLFxuICAgICAgICAnTUVBU1VSRScsXG4gICAgICAgICdBU0MnLFxuICAgICAgICAnREVTQycsXG4gICAgICAgICdJTicsXG4gICAgICAgIC8vIERhdGF0YWJsZSB0eXBlc1xuICAgICAgICAnQk9PTEVBTicsXG4gICAgICAgICdET1VCTEUnLFxuICAgICAgICAnSU5URUdFUicsXG4gICAgICAgICdEQVRFVElNRScsXG4gICAgICAgICdDVVJSRU5DWScsXG4gICAgICAgICdTVFJJTkcnXG4gICAgXSxcbiAgICBmdW5jdGlvbnM6IFtcbiAgICAgICAgLy8gUmVsYXRpb25hbFxuICAgICAgICAnQ0xPU0lOR0JBTEFOQ0VNT05USCcsICdDTE9TSU5HQkFMQU5DRVFVQVJURVInLCAnQ0xPU0lOR0JBTEFOQ0VZRUFSJywgJ0RBVEVBREQnLCAnREFURVNCRVRXRUVOJyxcbiAgICAgICAgJ0RBVEVTSU5QRVJJT0QnLCAnREFURVNNVEQnLCAnREFURVNRVEQnLCAnREFURVNZVEQnLCAnRU5ET0ZNT05USCcsXG4gICAgICAgICdFTkRPRlFVQVJURVInLCAnRU5ET0ZZRUFSJywgJ0ZJUlNUREFURScsICdGSVJTVE5PTkJMQU5LJywgJ0xBU1REQVRFJyxcbiAgICAgICAgJ0xBU1ROT05CTEFOSycsICdORVhUREFZJywgJ05FWFRNT05USCcsICdORVhUUVVBUlRFUicsICdORVhUWUVBUicsXG4gICAgICAgICdPUEVOSU5HQkFMQU5DRU1PTlRIJywgJ09QRU5JTkdCQUxBTkNFUVVBUlRFUicsICdPUEVOSU5HQkFMQU5DRVlFQVInLCAnUEFSQUxMRUxQRVJJT0QnLCAnUFJFVklPVVNEQVknLFxuICAgICAgICAnUFJFVklPVVNNT05USCcsICdQUkVWSU9VU1FVQVJURVInLCAnUFJFVklPVVNZRUFSJywgJ1NBTUVQRVJJT0RMQVNUWUVBUicsICdTVEFSVE9GTU9OVEgnLFxuICAgICAgICAnU1RBUlRPRlFVQVJURVInLCAnU1RBUlRPRllFQVInLCAnVE9UQUxNVEQnLCAnVE9UQUxRVEQnLCAnVE9UQUxZVEQnLFxuICAgICAgICAnQUREQ09MVU1OUycsICdBRERNSVNTSU5HSVRFTVMnLCAnQUxMJywgJ0FMTEVYQ0VQVCcsICdBTExOT0JMQU5LUk9XJyxcbiAgICAgICAgJ0FMTFNFTEVDVEVEJywgJ0NBTENVTEFURScsICdDQUxDVUxBVEVUQUJMRScsICdDQUxFTkRBUicsICdDQUxFTkRBUkFVVE8nLFxuICAgICAgICAnQ1JPU1NGSUxURVInLCAnQ1JPU1NKT0lOJywgJ0NVUlJFTlRHUk9VUCcsICdEQVRBVEFCTEUnLCAnREVUQUlMUk9XUycsXG4gICAgICAgICdESVNUSU5DVCcsICdFQVJMSUVSJywgJ0VBUkxJRVNUJywgJ0VYQ0VQVCcsICdGSUxURVInLFxuICAgICAgICAnRklMVEVSUycsICdHRU5FUkFURScsICdHRU5FUkFURUFMTCcsICdHUk9VUEJZJywgJ0lHTk9SRScsXG4gICAgICAgICdJTlRFUlNFQ1QnLCAnSVNPTk9SQUZURVInLCAnS0VFUEZJTFRFUlMnLCAnTE9PS1VQVkFMVUUnLCAnTkFUVVJBTElOTkVSSk9JTicsXG4gICAgICAgICdOQVRVUkFMTEVGVE9VVEVSSk9JTicsICdSRUxBVEVEJywgJ1JFTEFURURUQUJMRScsICdST0xMVVAnLCAnUk9MTFVQQURESVNTVUJUT1RBTCcsXG4gICAgICAgICdST0xMVVBHUk9VUCcsICdST0xMVVBJU1NVQlRPVEFMJywgJ1JPVycsICdTQU1QTEUnLCAnU0VMRUNUQ09MVU1OUycsXG4gICAgICAgICdTVUJTVElUVVRFV0lUSElOREVYJywgJ1NVTU1BUklaRScsICdTVU1NQVJJWkVDT0xVTU5TJywgJ1RPUE4nLCAnVFJFQVRBUycsXG4gICAgICAgICdVTklPTicsICdVU0VSRUxBVElPTlNISVAnLCAnVkFMVUVTJywgJ1NVTScsICdTVU1YJyxcbiAgICAgICAgJ1BBVEgnLCAnUEFUSENPTlRBSU5TJywgJ1BBVEhJVEVNJywgJ1BBVEhJVEVNUkVWRVJTRScsICdQQVRITEVOR1RIJyxcbiAgICAgICAgJ0FWRVJBR0UnLCAnQVZFUkFHRUEnLCAnQVZFUkFHRVgnLCAnQ09VTlQnLCAnQ09VTlRBJyxcbiAgICAgICAgJ0NPVU5UQVgnLCAnQ09VTlRCTEFOSycsICdDT1VOVFJPV1MnLCAnQ09VTlRYJywgJ0RJU1RJTkNUQ09VTlQnLFxuICAgICAgICAnRElWSURFJywgJ0dFT01FQU4nLCAnR0VPTUVBTlgnLCAnTUFYJywgJ01BWEEnLFxuICAgICAgICAnTUFYWCcsICdNRURJQU4nLCAnTUVESUFOWCcsICdNSU4nLCAnTUlOQScsXG4gICAgICAgICdNSU5YJywgJ1BFUkNFTlRJTEUuRVhDJywgJ1BFUkNFTlRJTEUuSU5DJywgJ1BFUkNFTlRJTEVYLkVYQycsICdQRVJDRU5USUxFWC5JTkMnLFxuICAgICAgICAnUFJPRFVDVCcsICdQUk9EVUNUWCcsICdSQU5LLkVRJywgJ1JBTktYJywgJ1NUREVWLlAnLFxuICAgICAgICAnU1RERVYuUycsICdTVERFVlguUCcsICdTVERFVlguUycsICdWQVIuUCcsICdWQVIuUycsXG4gICAgICAgICdWQVJYLlAnLCAnVkFSWC5TJywgJ1hJUlInLCAnWE5QVicsXG4gICAgICAgIC8vIFNjYWxhclxuICAgICAgICAnREFURScsICdEQVRFRElGRicsICdEQVRFVkFMVUUnLCAnREFZJywgJ0VEQVRFJyxcbiAgICAgICAgJ0VPTU9OVEgnLCAnSE9VUicsICdNSU5VVEUnLCAnTU9OVEgnLCAnTk9XJyxcbiAgICAgICAgJ1NFQ09ORCcsICdUSU1FJywgJ1RJTUVWQUxVRScsICdUT0RBWScsICdXRUVLREFZJyxcbiAgICAgICAgJ1dFRUtOVU0nLCAnWUVBUicsICdZRUFSRlJBQycsICdDT05UQUlOUycsICdDT05UQUlOU1JPVycsXG4gICAgICAgICdDVVNUT01EQVRBJywgJ0VSUk9SJywgJ0hBU09ORUZJTFRFUicsICdIQVNPTkVWQUxVRScsICdJU0JMQU5LJyxcbiAgICAgICAgJ0lTQ1JPU1NGSUxURVJFRCcsICdJU0VNUFRZJywgJ0lTRVJST1InLCAnSVNFVkVOJywgJ0lTRklMVEVSRUQnLFxuICAgICAgICAnSVNMT0dJQ0FMJywgJ0lTTk9OVEVYVCcsICdJU05VTUJFUicsICdJU09ERCcsICdJU1NVQlRPVEFMJyxcbiAgICAgICAgJ0lTVEVYVCcsICdVU0VSTkFNRScsICdVU0VSUFJJTkNJUEFMTkFNRScsICdBTkQnLCAnRkFMU0UnLFxuICAgICAgICAnSUYnLCAnSUZFUlJPUicsICdOT1QnLCAnT1InLCAnU1dJVENIJyxcbiAgICAgICAgJ1RSVUUnLCAnQUJTJywgJ0FDT1MnLCAnQUNPU0gnLCAnQUNPVCcsXG4gICAgICAgICdBQ09USCcsICdBU0lOJywgJ0FTSU5IJywgJ0FUQU4nLCAnQVRBTkgnLFxuICAgICAgICAnQkVUQS5ESVNUJywgJ0JFVEEuSU5WJywgJ0NFSUxJTkcnLCAnQ0hJU1EuRElTVCcsICdDSElTUS5ESVNULlJUJyxcbiAgICAgICAgJ0NISVNRLklOVicsICdDSElTUS5JTlYuUlQnLCAnQ09NQklOJywgJ0NPTUJJTkEnLCAnQ09ORklERU5DRS5OT1JNJyxcbiAgICAgICAgJ0NPTkZJREVOQ0UuVCcsICdDT1MnLCAnQ09TSCcsICdDT1QnLCAnQ09USCcsXG4gICAgICAgICdDVVJSRU5DWScsICdERUdSRUVTJywgJ0VWRU4nLCAnRVhQJywgJ0VYUE9OLkRJU1QnLFxuICAgICAgICAnRkFDVCcsICdGTE9PUicsICdHQ0QnLCAnSU5UJywgJ0lTTy5DRUlMSU5HJyxcbiAgICAgICAgJ0xDTScsICdMTicsICdMT0cnLCAnTE9HMTAnLCAnTU9EJyxcbiAgICAgICAgJ01ST1VORCcsICdPREQnLCAnUEVSTVVUJywgJ1BJJywgJ1BPSVNTT04uRElTVCcsXG4gICAgICAgICdQT1dFUicsICdRVU9USUVOVCcsICdSQURJQU5TJywgJ1JBTkQnLCAnUkFOREJFVFdFRU4nLFxuICAgICAgICAnUk9VTkQnLCAnUk9VTkRET1dOJywgJ1JPVU5EVVAnLCAnU0lHTicsICdTSU4nLFxuICAgICAgICAnU0lOSCcsICdTUVJUJywgJ1NRUlRQSScsICdUQU4nLCAnVEFOSCcsXG4gICAgICAgICdUUlVOQycsICdCTEFOSycsICdDT05DQVRFTkFURScsICdDT05DQVRFTkFURVgnLCAnRVhBQ1QnLFxuICAgICAgICAnRklORCcsICdGSVhFRCcsICdGT1JNQVQnLCAnTEVGVCcsICdMRU4nLFxuICAgICAgICAnTE9XRVInLCAnTUlEJywgJ1JFUExBQ0UnLCAnUkVQVCcsICdSSUdIVCcsXG4gICAgICAgICdTRUFSQ0gnLCAnU1VCU1RJVFVURScsICdUUklNJywgJ1VOSUNIQVInLCAnVU5JQ09ERScsXG4gICAgICAgICdVUFBFUicsICdWQUxVRSdcbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tcGxleElkZW50aWZpZXJzJyB9LFxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWyh7fSldLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bYS16X11bYS16QS1aMC05X10qLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZnVuY3Rpb25zJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvWzw+PSElJitcXC0qL3x+Xl0vLCAnb3BlcmF0b3InXSxcbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9cXHMrLywgJ3doaXRlJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIFsvXFwvXFwvKy4qLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgeyB0b2tlbjogJ2NvbW1lbnQucXVvdGUnLCBuZXh0OiAnQGNvbW1lbnQnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW14qL10rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgeyB0b2tlbjogJ2NvbW1lbnQucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSovLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbL1skXVsrLV0qXFxkKihcXC5cXGQqKT8vLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbLygoXFxkKyhcXC5cXGQqKT8pfChcXC5cXGQrKSkoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWy9OXCIvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZycgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBsZXhJZGVudGlmaWVyczogW1xuICAgICAgICAgICAgWy9cXFsvLCB7IHRva2VuOiAnaWRlbnRpZmllci5xdW90ZScsIG5leHQ6ICdAYnJhY2tldGVkSWRlbnRpZmllcicgfV0sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnaWRlbnRpZmllci5xdW90ZScsIG5leHQ6ICdAcXVvdGVkSWRlbnRpZmllcicgfV1cbiAgICAgICAgXSxcbiAgICAgICAgYnJhY2tldGVkSWRlbnRpZmllcjogW1xuICAgICAgICAgICAgWy9bXlxcXV0rLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvXV0vLCAnaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9dLywgeyB0b2tlbjogJ2lkZW50aWZpZXIucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgcXVvdGVkSWRlbnRpZmllcjogW1xuICAgICAgICAgICAgWy9bXiddKy8sICdpZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbLycnLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdpZGVudGlmaWVyLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js\n");

/***/ })

}]);