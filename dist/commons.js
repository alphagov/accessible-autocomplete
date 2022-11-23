(self["webpackChunkaccessibleAutocomplete"] = self["webpackChunkaccessibleAutocomplete"] || []).push([["commons"],{

/***/ "./autocomplete.js":
/*!*************************!*\
  !*** ./autocomplete.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "../node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "../node_modules/core-js/modules/es.object.assign.js");
exports.__esModule = true;
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "../node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "../node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "../node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "../node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "../node_modules/core-js/modules/es.function.name.js");
var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
var _status = _interopRequireDefault(__webpack_require__(/*! ./status */ "./status.js"));
var _dropdownArrowDown = _interopRequireDefault(__webpack_require__(/*! ./dropdown-arrow-down */ "./dropdown-arrow-down.js"));
function cov_1bxywyv02a() {
  var path = "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/autocomplete.js";
  var hash = "8c02558eaa2639a7d676171a7afbba63978a9e2b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/autocomplete.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 60
        }
      },
      "1": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 6,
          column: 58
        }
      },
      "2": {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 142
        }
      },
      "4": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "5": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 48
        }
      },
      "6": {
        start: {
          line: 33,
          column: 19
        },
        end: {
          line: 33,
          column: 46
        }
      },
      "7": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 48
        }
      },
      "8": {
        start: {
          line: 34,
          column: 18
        },
        end: {
          line: 34,
          column: 46
        }
      },
      "9": {
        start: {
          line: 38,
          column: 24
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "10": {
        start: {
          line: 51,
          column: 22
        },
        end: {
          line: 51,
          column: 40
        }
      },
      "11": {
        start: {
          line: 52,
          column: 26
        },
        end: {
          line: 52,
          column: 183
        }
      },
      "12": {
        start: {
          line: 56,
          column: 22
        },
        end: {
          line: 56,
          column: 24
        }
      },
      "13": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 16
        }
      },
      "14": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "15": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 66
        }
      },
      "16": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 54
        }
      },
      "17": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 54
        }
      },
      "18": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 58
        }
      },
      "19": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 50
        }
      },
      "20": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 64
        }
      },
      "21": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 68
        }
      },
      "22": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 60
        }
      },
      "23": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 62
        }
      },
      "24": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 62
        }
      },
      "25": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 84,
          column: 70
        }
      },
      "26": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 72
        }
      },
      "27": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 58
        }
      },
      "28": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 62
        }
      },
      "29": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 60
        }
      },
      "30": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 91,
          column: 60
        }
      },
      "31": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 70
        }
      },
      "32": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 113
        }
      },
      "33": {
        start: {
          line: 96,
          column: 32
        },
        end: {
          line: 96,
          column: 76
        }
      },
      "34": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 27
        }
      },
      "35": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 33
        }
      },
      "36": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 32
        }
      },
      "37": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 115,
          column: 11
        }
      },
      "38": {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 114,
          column: 29
        }
      },
      "39": {
        start: {
          line: 119,
          column: 27
        },
        end: {
          line: 119,
          column: 53
        }
      },
      "40": {
        start: {
          line: 120,
          column: 28
        },
        end: {
          line: 120,
          column: 87
        }
      },
      "41": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 124,
          column: 5
        }
      },
      "42": {
        start: {
          line: 123,
          column: 6
        },
        end: {
          line: 123,
          column: 73
        }
      },
      "43": {
        start: {
          line: 128,
          column: 24
        },
        end: {
          line: 128,
          column: 34
        }
      },
      "44": {
        start: {
          line: 129,
          column: 31
        },
        end: {
          line: 129,
          column: 47
        }
      },
      "45": {
        start: {
          line: 130,
          column: 27
        },
        end: {
          line: 130,
          column: 56
        }
      },
      "46": {
        start: {
          line: 131,
          column: 34
        },
        end: {
          line: 131,
          column: 71
        }
      },
      "47": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 134,
          column: 5
        }
      },
      "48": {
        start: {
          line: 133,
          column: 6
        },
        end: {
          line: 133,
          column: 45
        }
      },
      "49": {
        start: {
          line: 135,
          column: 25
        },
        end: {
          line: 135,
          column: 39
        }
      },
      "50": {
        start: {
          line: 136,
          column: 33
        },
        end: {
          line: 136,
          column: 77
        }
      },
      "51": {
        start: {
          line: 137,
          column: 26
        },
        end: {
          line: 137,
          column: 62
        }
      },
      "52": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 141,
          column: 5
        }
      },
      "53": {
        start: {
          line: 139,
          column: 27
        },
        end: {
          line: 139,
          column: 58
        }
      },
      "54": {
        start: {
          line: 140,
          column: 6
        },
        end: {
          line: 140,
          column: 66
        }
      },
      "55": {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 145,
          column: 56
        }
      },
      "56": {
        start: {
          line: 150,
          column: 31
        },
        end: {
          line: 150,
          column: 86
        }
      },
      "57": {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 151,
          column: 65
        }
      },
      "58": {
        start: {
          line: 156,
          column: 31
        },
        end: {
          line: 156,
          column: 86
        }
      },
      "59": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 157,
          column: 65
        }
      },
      "60": {
        start: {
          line: 161,
          column: 41
        },
        end: {
          line: 161,
          column: 51
        }
      },
      "61": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 168,
          column: 5
        }
      },
      "62": {
        start: {
          line: 164,
          column: 6
        },
        end: {
          line: 164,
          column: 40
        }
      },
      "63": {
        start: {
          line: 165,
          column: 6
        },
        end: {
          line: 165,
          column: 45
        }
      },
      "64": {
        start: {
          line: 167,
          column: 6
        },
        end: {
          line: 167,
          column: 22
        }
      },
      "65": {
        start: {
          line: 169,
          column: 4
        },
        end: {
          line: 175,
          column: 6
        }
      },
      "66": {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 181,
          column: 6
        }
      },
      "67": {
        start: {
          line: 185,
          column: 53
        },
        end: {
          line: 185,
          column: 63
        }
      },
      "68": {
        start: {
          line: 186,
          column: 37
        },
        end: {
          line: 186,
          column: 65
        }
      },
      "69": {
        start: {
          line: 187,
          column: 26
        },
        end: {
          line: 187,
          column: 76
        }
      },
      "70": {
        start: {
          line: 188,
          column: 34
        },
        end: {
          line: 188,
          column: 69
        }
      },
      "71": {
        start: {
          line: 189,
          column: 26
        },
        end: {
          line: 189,
          column: 123
        }
      },
      "72": {
        start: {
          line: 190,
          column: 4
        },
        end: {
          line: 196,
          column: 5
        }
      },
      "73": {
        start: {
          line: 191,
          column: 27
        },
        end: {
          line: 191,
          column: 52
        }
      },
      "74": {
        start: {
          line: 192,
          column: 6
        },
        end: {
          line: 195,
          column: 8
        }
      },
      "75": {
        start: {
          line: 200,
          column: 60
        },
        end: {
          line: 200,
          column: 70
        }
      },
      "76": {
        start: {
          line: 201,
          column: 29
        },
        end: {
          line: 201,
          column: 43
        }
      },
      "77": {
        start: {
          line: 202,
          column: 4
        },
        end: {
          line: 209,
          column: 5
        }
      },
      "78": {
        start: {
          line: 203,
          column: 27
        },
        end: {
          line: 203,
          column: 52
        }
      },
      "79": {
        start: {
          line: 204,
          column: 23
        },
        end: {
          line: 204,
          column: 89
        }
      },
      "80": {
        start: {
          line: 205,
          column: 6
        },
        end: {
          line: 208,
          column: 8
        }
      },
      "81": {
        start: {
          line: 213,
          column: 49
        },
        end: {
          line: 213,
          column: 59
        }
      },
      "82": {
        start: {
          line: 214,
          column: 23
        },
        end: {
          line: 214,
          column: 43
        }
      },
      "83": {
        start: {
          line: 215,
          column: 18
        },
        end: {
          line: 215,
          column: 36
        }
      },
      "84": {
        start: {
          line: 216,
          column: 23
        },
        end: {
          line: 216,
          column: 41
        }
      },
      "85": {
        start: {
          line: 217,
          column: 25
        },
        end: {
          line: 217,
          column: 65
        }
      },
      "86": {
        start: {
          line: 218,
          column: 28
        },
        end: {
          line: 218,
          column: 53
        }
      },
      "87": {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 223,
          column: 6
        }
      },
      "88": {
        start: {
          line: 225,
          column: 29
        },
        end: {
          line: 225,
          column: 79
        }
      },
      "89": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 236,
          column: 5
        }
      },
      "90": {
        start: {
          line: 227,
          column: 6
        },
        end: {
          line: 235,
          column: 8
        }
      },
      "91": {
        start: {
          line: 228,
          column: 33
        },
        end: {
          line: 228,
          column: 51
        }
      },
      "92": {
        start: {
          line: 229,
          column: 8
        },
        end: {
          line: 234,
          column: 10
        }
      },
      "93": {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 248,
          column: 5
        }
      },
      "94": {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 247,
          column: 8
        }
      },
      "95": {
        start: {
          line: 240,
          column: 33
        },
        end: {
          line: 240,
          column: 51
        }
      },
      "96": {
        start: {
          line: 241,
          column: 8
        },
        end: {
          line: 246,
          column: 10
        }
      },
      "97": {
        start: {
          line: 252,
          column: 4
        },
        end: {
          line: 252,
          column: 33
        }
      },
      "98": {
        start: {
          line: 256,
          column: 48
        },
        end: {
          line: 256,
          column: 58
        }
      },
      "99": {
        start: {
          line: 257,
          column: 26
        },
        end: {
          line: 257,
          column: 36
        }
      },
      "100": {
        start: {
          line: 258,
          column: 29
        },
        end: {
          line: 258,
          column: 96
        }
      },
      "101": {
        start: {
          line: 260,
          column: 4
        },
        end: {
          line: 264,
          column: 5
        }
      },
      "102": {
        start: {
          line: 261,
          column: 6
        },
        end: {
          line: 261,
          column: 110
        }
      },
      "103": {
        start: {
          line: 261,
          column: 39
        },
        end: {
          line: 261,
          column: 108
        }
      },
      "104": {
        start: {
          line: 263,
          column: 6
        },
        end: {
          line: 263,
          column: 36
        }
      },
      "105": {
        start: {
          line: 268,
          column: 4
        },
        end: {
          line: 272,
          column: 6
        }
      },
      "106": {
        start: {
          line: 278,
          column: 4
        },
        end: {
          line: 282,
          column: 5
        }
      },
      "107": {
        start: {
          line: 279,
          column: 6
        },
        end: {
          line: 281,
          column: 8
        }
      },
      "108": {
        start: {
          line: 286,
          column: 27
        },
        end: {
          line: 286,
          column: 52
        }
      },
      "109": {
        start: {
          line: 287,
          column: 21
        },
        end: {
          line: 287,
          column: 60
        }
      },
      "110": {
        start: {
          line: 288,
          column: 4
        },
        end: {
          line: 288,
          column: 40
        }
      },
      "111": {
        start: {
          line: 289,
          column: 4
        },
        end: {
          line: 296,
          column: 6
        }
      },
      "112": {
        start: {
          line: 297,
          column: 4
        },
        end: {
          line: 297,
          column: 22
        }
      },
      "113": {
        start: {
          line: 307,
          column: 4
        },
        end: {
          line: 307,
          column: 26
        }
      },
      "114": {
        start: {
          line: 311,
          column: 4
        },
        end: {
          line: 311,
          column: 26
        }
      },
      "115": {
        start: {
          line: 312,
          column: 35
        },
        end: {
          line: 312,
          column: 45
        }
      },
      "116": {
        start: {
          line: 313,
          column: 23
        },
        end: {
          line: 313,
          column: 38
        }
      },
      "117": {
        start: {
          line: 314,
          column: 24
        },
        end: {
          line: 314,
          column: 46
        }
      },
      "118": {
        start: {
          line: 315,
          column: 4
        },
        end: {
          line: 317,
          column: 5
        }
      },
      "119": {
        start: {
          line: 316,
          column: 6
        },
        end: {
          line: 316,
          column: 42
        }
      },
      "120": {
        start: {
          line: 321,
          column: 4
        },
        end: {
          line: 321,
          column: 26
        }
      },
      "121": {
        start: {
          line: 323,
          column: 4
        },
        end: {
          line: 341,
          column: 5
        }
      },
      "122": {
        start: {
          line: 324,
          column: 6
        },
        end: {
          line: 324,
          column: 28
        }
      },
      "123": {
        start: {
          line: 325,
          column: 6
        },
        end: {
          line: 333,
          column: 8
        }
      },
      "124": {
        start: {
          line: 326,
          column: 8
        },
        end: {
          line: 332,
          column: 10
        }
      },
      "125": {
        start: {
          line: 334,
          column: 11
        },
        end: {
          line: 341,
          column: 5
        }
      },
      "126": {
        start: {
          line: 335,
          column: 46
        },
        end: {
          line: 335,
          column: 56
        }
      },
      "127": {
        start: {
          line: 336,
          column: 28
        },
        end: {
          line: 336,
          column: 59
        }
      },
      "128": {
        start: {
          line: 337,
          column: 28
        },
        end: {
          line: 337,
          column: 53
        }
      },
      "129": {
        start: {
          line: 338,
          column: 6
        },
        end: {
          line: 340,
          column: 7
        }
      },
      "130": {
        start: {
          line: 339,
          column: 8
        },
        end: {
          line: 339,
          column: 44
        }
      },
      "131": {
        start: {
          line: 346,
          column: 4
        },
        end: {
          line: 354,
          column: 5
        }
      },
      "132": {
        start: {
          line: 347,
          column: 6
        },
        end: {
          line: 347,
          column: 28
        }
      },
      "133": {
        start: {
          line: 348,
          column: 6
        },
        end: {
          line: 353,
          column: 8
        }
      },
      "134": {
        start: {
          line: 349,
          column: 8
        },
        end: {
          line: 352,
          column: 10
        }
      },
      "135": {
        start: {
          line: 355,
          column: 28
        },
        end: {
          line: 355,
          column: 53
        }
      },
      "136": {
        start: {
          line: 356,
          column: 4
        },
        end: {
          line: 359,
          column: 5
        }
      },
      "137": {
        start: {
          line: 357,
          column: 6
        },
        end: {
          line: 357,
          column: 28
        }
      },
      "138": {
        start: {
          line: 358,
          column: 6
        },
        end: {
          line: 358,
          column: 55
        }
      },
      "139": {
        start: {
          line: 363,
          column: 4
        },
        end: {
          line: 369,
          column: 5
        }
      },
      "140": {
        start: {
          line: 364,
          column: 6
        },
        end: {
          line: 364,
          column: 28
        }
      },
      "141": {
        start: {
          line: 365,
          column: 32
        },
        end: {
          line: 365,
          column: 56
        }
      },
      "142": {
        start: {
          line: 366,
          column: 6
        },
        end: {
          line: 368,
          column: 7
        }
      },
      "143": {
        start: {
          line: 367,
          column: 8
        },
        end: {
          line: 367,
          column: 58
        }
      },
      "144": {
        start: {
          line: 373,
          column: 25
        },
        end: {
          line: 373,
          column: 51
        }
      },
      "145": {
        start: {
          line: 374,
          column: 27
        },
        end: {
          line: 374,
          column: 56
        }
      },
      "146": {
        start: {
          line: 375,
          column: 4
        },
        end: {
          line: 380,
          column: 5
        }
      },
      "147": {
        start: {
          line: 379,
          column: 6
        },
        end: {
          line: 379,
          column: 26
        }
      },
      "148": {
        start: {
          line: 384,
          column: 4
        },
        end: {
          line: 407,
          column: 5
        }
      },
      "149": {
        start: {
          line: 386,
          column: 8
        },
        end: {
          line: 386,
          column: 33
        }
      },
      "150": {
        start: {
          line: 387,
          column: 8
        },
        end: {
          line: 387,
          column: 13
        }
      },
      "151": {
        start: {
          line: 389,
          column: 8
        },
        end: {
          line: 389,
          column: 35
        }
      },
      "152": {
        start: {
          line: 390,
          column: 8
        },
        end: {
          line: 390,
          column: 13
        }
      },
      "153": {
        start: {
          line: 392,
          column: 8
        },
        end: {
          line: 392,
          column: 31
        }
      },
      "154": {
        start: {
          line: 393,
          column: 8
        },
        end: {
          line: 393,
          column: 13
        }
      },
      "155": {
        start: {
          line: 395,
          column: 8
        },
        end: {
          line: 395,
          column: 31
        }
      },
      "156": {
        start: {
          line: 396,
          column: 8
        },
        end: {
          line: 396,
          column: 13
        }
      },
      "157": {
        start: {
          line: 398,
          column: 8
        },
        end: {
          line: 400,
          column: 10
        }
      },
      "158": {
        start: {
          line: 401,
          column: 8
        },
        end: {
          line: 401,
          column: 13
        }
      },
      "159": {
        start: {
          line: 403,
          column: 8
        },
        end: {
          line: 405,
          column: 9
        }
      },
      "160": {
        start: {
          line: 404,
          column: 10
        },
        end: {
          line: 404,
          column: 40
        }
      },
      "161": {
        start: {
          line: 406,
          column: 8
        },
        end: {
          line: 406,
          column: 13
        }
      },
      "162": {
        start: {
          line: 427,
          column: 8
        },
        end: {
          line: 427,
          column: 18
        }
      },
      "163": {
        start: {
          line: 428,
          column: 96
        },
        end: {
          line: 428,
          column: 106
        }
      },
      "164": {
        start: {
          line: 429,
          column: 23
        },
        end: {
          line: 429,
          column: 43
        }
      },
      "165": {
        start: {
          line: 431,
          column: 25
        },
        end: {
          line: 431,
          column: 39
        }
      },
      "166": {
        start: {
          line: 432,
          column: 31
        },
        end: {
          line: 432,
          column: 51
        }
      },
      "167": {
        start: {
          line: 433,
          column: 26
        },
        end: {
          line: 433,
          column: 44
        }
      },
      "168": {
        start: {
          line: 434,
          column: 28
        },
        end: {
          line: 434,
          column: 53
        }
      },
      "169": {
        start: {
          line: 435,
          column: 31
        },
        end: {
          line: 436,
          column: 76
        }
      },
      "170": {
        start: {
          line: 438,
          column: 29
        },
        end: {
          line: 438,
          column: 55
        }
      },
      "171": {
        start: {
          line: 440,
          column: 27
        },
        end: {
          line: 440,
          column: 51
        }
      },
      "172": {
        start: {
          line: 441,
          column: 31
        },
        end: {
          line: 441,
          column: 47
        }
      },
      "173": {
        start: {
          line: 442,
          column: 33
        },
        end: {
          line: 442,
          column: 88
        }
      },
      "174": {
        start: {
          line: 443,
          column: 30
        },
        end: {
          line: 443,
          column: 126
        }
      },
      "175": {
        start: {
          line: 444,
          column: 35
        },
        end: {
          line: 444,
          column: 73
        }
      },
      "176": {
        start: {
          line: 445,
          column: 26
        },
        end: {
          line: 445,
          column: 60
        }
      },
      "177": {
        start: {
          line: 447,
          column: 26
        },
        end: {
          line: 447,
          column: 49
        }
      },
      "178": {
        start: {
          line: 448,
          column: 36
        },
        end: {
          line: 448,
          column: 70
        }
      },
      "179": {
        start: {
          line: 449,
          column: 26
        },
        end: {
          line: 449,
          column: 56
        }
      },
      "180": {
        start: {
          line: 450,
          column: 35
        },
        end: {
          line: 450,
          column: 96
        }
      },
      "181": {
        start: {
          line: 452,
          column: 28
        },
        end: {
          line: 452,
          column: 53
        }
      },
      "182": {
        start: {
          line: 454,
          column: 26
        },
        end: {
          line: 454,
          column: 49
        }
      },
      "183": {
        start: {
          line: 455,
          column: 31
        },
        end: {
          line: 455,
          column: 73
        }
      },
      "184": {
        start: {
          line: 456,
          column: 34
        },
        end: {
          line: 457,
          column: 73
        }
      },
      "185": {
        start: {
          line: 458,
          column: 22
        },
        end: {
          line: 460,
          column: 10
        }
      },
      "186": {
        start: {
          line: 462,
          column: 28
        },
        end: {
          line: 462,
          column: 50
        }
      },
      "187": {
        start: {
          line: 463,
          column: 30
        },
        end: {
          line: 467,
          column: 12
        }
      },
      "188": {
        start: {
          line: 469,
          column: 37
        },
        end: {
          line: 471,
          column: 12
        }
      },
      "189": {
        start: {
          line: 476,
          column: 4
        },
        end: {
          line: 483,
          column: 5
        }
      },
      "190": {
        start: {
          line: 477,
          column: 6
        },
        end: {
          line: 477,
          column: 81
        }
      },
      "191": {
        start: {
          line: 480,
          column: 6
        },
        end: {
          line: 482,
          column: 7
        }
      },
      "192": {
        start: {
          line: 481,
          column: 8
        },
        end: {
          line: 481,
          column: 142
        }
      },
      "193": {
        start: {
          line: 485,
          column: 4
        },
        end: {
          line: 574,
          column: 5
        }
      },
      "194": {
        start: {
          line: 515,
          column: 30
        },
        end: {
          line: 515,
          column: 58
        }
      },
      "195": {
        start: {
          line: 521,
          column: 35
        },
        end: {
          line: 521,
          column: 76
        }
      },
      "196": {
        start: {
          line: 532,
          column: 35
        },
        end: {
          line: 532,
          column: 67
        }
      },
      "197": {
        start: {
          line: 537,
          column: 32
        },
        end: {
          line: 537,
          column: 87
        }
      },
      "198": {
        start: {
          line: 538,
          column: 42
        },
        end: {
          line: 538,
          column: 111
        }
      },
      "199": {
        start: {
          line: 539,
          column: 38
        },
        end: {
          line: 539,
          column: 83
        }
      },
      "200": {
        start: {
          line: 540,
          column: 36
        },
        end: {
          line: 544,
          column: 18
        }
      },
      "201": {
        start: {
          line: 546,
          column: 12
        },
        end: {
          line: 563,
          column: 13
        }
      },
      "202": {
        start: {
          line: 553,
          column: 35
        },
        end: {
          line: 553,
          column: 70
        }
      },
      "203": {
        start: {
          line: 554,
          column: 36
        },
        end: {
          line: 554,
          column: 72
        }
      },
      "204": {
        start: {
          line: 556,
          column: 41
        },
        end: {
          line: 556,
          column: 82
        }
      },
      "205": {
        start: {
          line: 557,
          column: 37
        },
        end: {
          line: 557,
          column: 77
        }
      }
    },
    fnMap: {
      "0": {
        name: "isIosDevice",
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 20
          }
        },
        loc: {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "isPrintableKeyCode",
        decl: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 27
          }
        },
        loc: {
          start: {
            line: 20,
            column: 38
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 20
      },
      "2": {
        name: "onChangeCrossLibrary",
        decl: {
          start: {
            line: 32,
            column: 9
          },
          end: {
            line: 32,
            column: 29
          }
        },
        loc: {
          start: {
            line: 32,
            column: 40
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 46,
            column: 15
          },
          end: {
            line: 46,
            column: 16
          }
        },
        loc: {
          start: {
            line: 46,
            column: 21
          },
          end: {
            line: 46,
            column: 23
          }
        },
        line: 46
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 51,
            column: 16
          },
          end: {
            line: 51,
            column: 17
          }
        },
        loc: {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 51,
            column: 40
          }
        },
        line: 51
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 52,
            column: 20
          },
          end: {
            line: 52,
            column: 21
          }
        },
        loc: {
          start: {
            line: 52,
            column: 26
          },
          end: {
            line: 52,
            column: 183
          }
        },
        line: 52
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 22
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 58
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 95,
            column: 2
          },
          end: {
            line: 95,
            column: 3
          }
        },
        loc: {
          start: {
            line: 95,
            column: 35
          },
          end: {
            line: 97,
            column: 3
          }
        },
        line: 95
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 96,
            column: 23
          },
          end: {
            line: 96,
            column: 24
          }
        },
        loc: {
          start: {
            line: 96,
            column: 32
          },
          end: {
            line: 96,
            column: 76
          }
        },
        line: 96
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        loc: {
          start: {
            line: 99,
            column: 23
          },
          end: {
            line: 101,
            column: 3
          }
        },
        line: 99
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 103,
            column: 2
          },
          end: {
            line: 103,
            column: 3
          }
        },
        loc: {
          start: {
            line: 103,
            column: 26
          },
          end: {
            line: 105,
            column: 3
          }
        },
        line: 103
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 111,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        loc: {
          start: {
            line: 111,
            column: 22
          },
          end: {
            line: 116,
            column: 3
          }
        },
        line: 111
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 113,
            column: 33
          },
          end: {
            line: 113,
            column: 34
          }
        },
        loc: {
          start: {
            line: 113,
            column: 39
          },
          end: {
            line: 115,
            column: 5
          }
        },
        line: 113
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        loc: {
          start: {
            line: 118,
            column: 27
          },
          end: {
            line: 125,
            column: 3
          }
        },
        line: 118
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 127,
            column: 2
          },
          end: {
            line: 127,
            column: 3
          }
        },
        loc: {
          start: {
            line: 127,
            column: 44
          },
          end: {
            line: 142,
            column: 3
          }
        },
        line: 127
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 144,
            column: 2
          },
          end: {
            line: 144,
            column: 3
          }
        },
        loc: {
          start: {
            line: 144,
            column: 19
          },
          end: {
            line: 146,
            column: 3
          }
        },
        line: 144
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 149,
            column: 3
          }
        },
        loc: {
          start: {
            line: 149,
            column: 29
          },
          end: {
            line: 152,
            column: 3
          }
        },
        line: 149
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 155,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        },
        loc: {
          start: {
            line: 155,
            column: 29
          },
          end: {
            line: 158,
            column: 3
          }
        },
        line: 155
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 160,
            column: 2
          },
          end: {
            line: 160,
            column: 3
          }
        },
        loc: {
          start: {
            line: 160,
            column: 33
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 160
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        },
        loc: {
          start: {
            line: 178,
            column: 31
          },
          end: {
            line: 182,
            column: 3
          }
        },
        line: 178
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 184,
            column: 2
          },
          end: {
            line: 184,
            column: 3
          }
        },
        loc: {
          start: {
            line: 184,
            column: 34
          },
          end: {
            line: 197,
            column: 3
          }
        },
        line: 184
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 199,
            column: 2
          },
          end: {
            line: 199,
            column: 3
          }
        },
        loc: {
          start: {
            line: 199,
            column: 26
          },
          end: {
            line: 210,
            column: 3
          }
        },
        line: 199
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 212,
            column: 2
          },
          end: {
            line: 212,
            column: 3
          }
        },
        loc: {
          start: {
            line: 212,
            column: 28
          },
          end: {
            line: 249,
            column: 3
          }
        },
        line: 212
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 227,
            column: 20
          },
          end: {
            line: 227,
            column: 21
          }
        },
        loc: {
          start: {
            line: 227,
            column: 33
          },
          end: {
            line: 235,
            column: 7
          }
        },
        line: 227
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 239,
            column: 17
          },
          end: {
            line: 239,
            column: 18
          }
        },
        loc: {
          start: {
            line: 239,
            column: 30
          },
          end: {
            line: 247,
            column: 7
          }
        },
        line: 239
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 251,
            column: 2
          },
          end: {
            line: 251,
            column: 3
          }
        },
        loc: {
          start: {
            line: 251,
            column: 27
          },
          end: {
            line: 253,
            column: 3
          }
        },
        line: 251
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 255,
            column: 2
          },
          end: {
            line: 255,
            column: 3
          }
        },
        loc: {
          start: {
            line: 255,
            column: 27
          },
          end: {
            line: 265,
            column: 3
          }
        },
        line: 255
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 261,
            column: 20
          },
          end: {
            line: 261,
            column: 21
          }
        },
        loc: {
          start: {
            line: 261,
            column: 39
          },
          end: {
            line: 261,
            column: 108
          }
        },
        line: 261
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 267,
            column: 2
          },
          end: {
            line: 267,
            column: 3
          }
        },
        loc: {
          start: {
            line: 267,
            column: 28
          },
          end: {
            line: 273,
            column: 3
          }
        },
        line: 267
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 275,
            column: 2
          },
          end: {
            line: 275,
            column: 3
          }
        },
        loc: {
          start: {
            line: 275,
            column: 40
          },
          end: {
            line: 283,
            column: 3
          }
        },
        line: 275
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 285,
            column: 2
          },
          end: {
            line: 285,
            column: 3
          }
        },
        loc: {
          start: {
            line: 285,
            column: 35
          },
          end: {
            line: 298,
            column: 3
          }
        },
        line: 285
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 300,
            column: 2
          },
          end: {
            line: 300,
            column: 3
          }
        },
        loc: {
          start: {
            line: 300,
            column: 32
          },
          end: {
            line: 308,
            column: 3
          }
        },
        line: 300
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 310,
            column: 2
          },
          end: {
            line: 310,
            column: 3
          }
        },
        loc: {
          start: {
            line: 310,
            column: 24
          },
          end: {
            line: 318,
            column: 3
          }
        },
        line: 310
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 320,
            column: 2
          },
          end: {
            line: 320,
            column: 3
          }
        },
        loc: {
          start: {
            line: 320,
            column: 26
          },
          end: {
            line: 342,
            column: 3
          }
        },
        line: 320
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 325,
            column: 28
          },
          end: {
            line: 325,
            column: 29
          }
        },
        loc: {
          start: {
            line: 325,
            column: 41
          },
          end: {
            line: 333,
            column: 7
          }
        },
        line: 325
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 344,
            column: 2
          },
          end: {
            line: 344,
            column: 3
          }
        },
        loc: {
          start: {
            line: 344,
            column: 22
          },
          end: {
            line: 360,
            column: 3
          }
        },
        line: 344
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 348,
            column: 28
          },
          end: {
            line: 348,
            column: 29
          }
        },
        loc: {
          start: {
            line: 348,
            column: 41
          },
          end: {
            line: 353,
            column: 7
          }
        },
        line: 348
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 362,
            column: 2
          },
          end: {
            line: 362,
            column: 3
          }
        },
        loc: {
          start: {
            line: 362,
            column: 22
          },
          end: {
            line: 370,
            column: 3
          }
        },
        line: 362
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 372,
            column: 2
          },
          end: {
            line: 372,
            column: 3
          }
        },
        loc: {
          start: {
            line: 372,
            column: 29
          },
          end: {
            line: 381,
            column: 3
          }
        },
        line: 372
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 383,
            column: 2
          },
          end: {
            line: 383,
            column: 3
          }
        },
        loc: {
          start: {
            line: 383,
            column: 24
          },
          end: {
            line: 408,
            column: 3
          }
        },
        line: 383
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 410,
            column: 2
          },
          end: {
            line: 410,
            column: 3
          }
        },
        loc: {
          start: {
            line: 410,
            column: 12
          },
          end: {
            line: 575,
            column: 3
          }
        },
        line: 410
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 515,
            column: 19
          },
          end: {
            line: 515,
            column: 20
          }
        },
        loc: {
          start: {
            line: 515,
            column: 30
          },
          end: {
            line: 515,
            column: 58
          }
        },
        line: 515
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 521,
            column: 15
          },
          end: {
            line: 521,
            column: 16
          }
        },
        loc: {
          start: {
            line: 521,
            column: 33
          },
          end: {
            line: 521,
            column: 78
          }
        },
        line: 521
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 532,
            column: 24
          },
          end: {
            line: 532,
            column: 25
          }
        },
        loc: {
          start: {
            line: 532,
            column: 35
          },
          end: {
            line: 532,
            column: 67
          }
        },
        line: 532
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 536,
            column: 23
          },
          end: {
            line: 536,
            column: 24
          }
        },
        loc: {
          start: {
            line: 536,
            column: 42
          },
          end: {
            line: 564,
            column: 11
          }
        },
        line: 536
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 553,
            column: 24
          },
          end: {
            line: 553,
            column: 25
          }
        },
        loc: {
          start: {
            line: 553,
            column: 35
          },
          end: {
            line: 553,
            column: 70
          }
        },
        line: 553
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 554,
            column: 25
          },
          end: {
            line: 554,
            column: 26
          }
        },
        loc: {
          start: {
            line: 554,
            column: 36
          },
          end: {
            line: 554,
            column: 72
          }
        },
        line: 554
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 556,
            column: 30
          },
          end: {
            line: 556,
            column: 31
          }
        },
        loc: {
          start: {
            line: 556,
            column: 41
          },
          end: {
            line: 556,
            column: 82
          }
        },
        line: 556
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 557,
            column: 21
          },
          end: {
            line: 557,
            column: 22
          }
        },
        loc: {
          start: {
            line: 557,
            column: 35
          },
          end: {
            line: 557,
            column: 79
          }
        },
        line: 557
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 142
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 41
          }
        }, {
          start: {
            line: 17,
            column: 45
          },
          end: {
            line: 17,
            column: 142
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 48
          },
          end: {
            line: 17,
            column: 141
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 48
          },
          end: {
            line: 17,
            column: 96
          }
        }, {
          start: {
            line: 17,
            column: 100
          },
          end: {
            line: 17,
            column: 141
          }
        }],
        line: 17
      },
      "2": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 27,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 22,
            column: 5
          },
          end: {
            line: 22,
            column: 17
          }
        }, {
          start: {
            line: 22,
            column: 21
          },
          end: {
            line: 22,
            column: 33
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 18
          }
        }, {
          start: {
            line: 23,
            column: 22
          },
          end: {
            line: 23,
            column: 35
          }
        }, {
          start: {
            line: 24,
            column: 5
          },
          end: {
            line: 24,
            column: 17
          }
        }, {
          start: {
            line: 24,
            column: 21
          },
          end: {
            line: 24,
            column: 33
          }
        }, {
          start: {
            line: 25,
            column: 5
          },
          end: {
            line: 25,
            column: 17
          }
        }, {
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 25,
            column: 34
          }
        }, {
          start: {
            line: 26,
            column: 5
          },
          end: {
            line: 26,
            column: 18
          }
        }, {
          start: {
            line: 26,
            column: 22
          },
          end: {
            line: 26,
            column: 35
          }
        }, {
          start: {
            line: 27,
            column: 5
          },
          end: {
            line: 27,
            column: 18
          }
        }, {
          start: {
            line: 27,
            column: 22
          },
          end: {
            line: 27,
            column: 35
          }
        }],
        line: 22
      },
      "3": {
        loc: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 48
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 48
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 33
      },
      "4": {
        loc: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 48
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 48
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 34
      },
      "5": {
        loc: {
          start: {
            line: 65,
            column: 15
          },
          end: {
            line: 65,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 65,
            column: 36
          },
          end: {
            line: 65,
            column: 56
          }
        }, {
          start: {
            line: 65,
            column: 59
          },
          end: {
            line: 65,
            column: 61
          }
        }],
        line: 65
      },
      "6": {
        loc: {
          start: {
            line: 120,
            column: 28
          },
          end: {
            line: 120,
            column: 87
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 120,
            column: 28
          },
          end: {
            line: 120,
            column: 42
          }
        }, {
          start: {
            line: 120,
            column: 46
          },
          end: {
            line: 120,
            column: 87
          }
        }],
        line: 120
      },
      "7": {
        loc: {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 122
      },
      "8": {
        loc: {
          start: {
            line: 131,
            column: 34
          },
          end: {
            line: 131,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 131,
            column: 34
          },
          end: {
            line: 131,
            column: 48
          }
        }, {
          start: {
            line: 131,
            column: 52
          },
          end: {
            line: 131,
            column: 71
          }
        }],
        line: 131
      },
      "9": {
        loc: {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 134,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 134,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 132
      },
      "10": {
        loc: {
          start: {
            line: 136,
            column: 33
          },
          end: {
            line: 136,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 136,
            column: 33
          },
          end: {
            line: 136,
            column: 47
          }
        }, {
          start: {
            line: 136,
            column: 51
          },
          end: {
            line: 136,
            column: 77
          }
        }],
        line: 136
      },
      "11": {
        loc: {
          start: {
            line: 137,
            column: 26
          },
          end: {
            line: 137,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 137,
            column: 26
          },
          end: {
            line: 137,
            column: 38
          }
        }, {
          start: {
            line: 137,
            column: 42
          },
          end: {
            line: 137,
            column: 62
          }
        }],
        line: 137
      },
      "12": {
        loc: {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 141,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 141,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 138
      },
      "13": {
        loc: {
          start: {
            line: 145,
            column: 11
          },
          end: {
            line: 145,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 145,
            column: 27
          },
          end: {
            line: 145,
            column: 32
          }
        }, {
          start: {
            line: 145,
            column: 35
          },
          end: {
            line: 145,
            column: 56
          }
        }],
        line: 145
      },
      "14": {
        loc: {
          start: {
            line: 150,
            column: 31
          },
          end: {
            line: 150,
            column: 86
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 150,
            column: 31
          },
          end: {
            line: 150,
            column: 51
          }
        }, {
          start: {
            line: 150,
            column: 55
          },
          end: {
            line: 150,
            column: 86
          }
        }],
        line: 150
      },
      "15": {
        loc: {
          start: {
            line: 151,
            column: 11
          },
          end: {
            line: 151,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 151,
            column: 32
          },
          end: {
            line: 151,
            column: 57
          }
        }, {
          start: {
            line: 151,
            column: 60
          },
          end: {
            line: 151,
            column: 65
          }
        }],
        line: 151
      },
      "16": {
        loc: {
          start: {
            line: 156,
            column: 31
          },
          end: {
            line: 156,
            column: 86
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 156,
            column: 31
          },
          end: {
            line: 156,
            column: 51
          }
        }, {
          start: {
            line: 156,
            column: 55
          },
          end: {
            line: 156,
            column: 86
          }
        }],
        line: 156
      },
      "17": {
        loc: {
          start: {
            line: 157,
            column: 11
          },
          end: {
            line: 157,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 157,
            column: 32
          },
          end: {
            line: 157,
            column: 57
          }
        }, {
          start: {
            line: 157,
            column: 60
          },
          end: {
            line: 157,
            column: 65
          }
        }],
        line: 157
      },
      "18": {
        loc: {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        }, {
          start: {
            line: 166,
            column: 11
          },
          end: {
            line: 168,
            column: 5
          }
        }],
        line: 163
      },
      "19": {
        loc: {
          start: {
            line: 164,
            column: 17
          },
          end: {
            line: 164,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 164,
            column: 17
          },
          end: {
            line: 164,
            column: 31
          }
        }, {
          start: {
            line: 164,
            column: 35
          },
          end: {
            line: 164,
            column: 40
          }
        }],
        line: 164
      },
      "20": {
        loc: {
          start: {
            line: 171,
            column: 16
          },
          end: {
            line: 171,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 171,
            column: 16
          },
          end: {
            line: 171,
            column: 33
          }
        }, {
          start: {
            line: 171,
            column: 37
          },
          end: {
            line: 171,
            column: 42
          }
        }],
        line: 171
      },
      "21": {
        loc: {
          start: {
            line: 188,
            column: 34
          },
          end: {
            line: 188,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 188,
            column: 34
          },
          end: {
            line: 188,
            column: 51
          }
        }, {
          start: {
            line: 188,
            column: 55
          },
          end: {
            line: 188,
            column: 69
          }
        }],
        line: 188
      },
      "22": {
        loc: {
          start: {
            line: 189,
            column: 26
          },
          end: {
            line: 189,
            column: 123
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 189,
            column: 27
          },
          end: {
            line: 189,
            column: 49
          }
        }, {
          start: {
            line: 189,
            column: 53
          },
          end: {
            line: 189,
            column: 77
          }
        }, {
          start: {
            line: 189,
            column: 82
          },
          end: {
            line: 189,
            column: 123
          }
        }],
        line: 189
      },
      "23": {
        loc: {
          start: {
            line: 189,
            column: 84
          },
          end: {
            line: 189,
            column: 122
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 189,
            column: 84
          },
          end: {
            line: 189,
            column: 105
          }
        }, {
          start: {
            line: 189,
            column: 109
          },
          end: {
            line: 189,
            column: 122
          }
        }],
        line: 189
      },
      "24": {
        loc: {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 196,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 190
      },
      "25": {
        loc: {
          start: {
            line: 191,
            column: 27
          },
          end: {
            line: 191,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 191,
            column: 27
          },
          end: {
            line: 191,
            column: 35
          }
        }, {
          start: {
            line: 191,
            column: 39
          },
          end: {
            line: 191,
            column: 52
          }
        }],
        line: 191
      },
      "26": {
        loc: {
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 202,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 202
      },
      "27": {
        loc: {
          start: {
            line: 203,
            column: 27
          },
          end: {
            line: 203,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 203,
            column: 27
          },
          end: {
            line: 203,
            column: 35
          }
        }, {
          start: {
            line: 203,
            column: 39
          },
          end: {
            line: 203,
            column: 52
          }
        }],
        line: 203
      },
      "28": {
        loc: {
          start: {
            line: 204,
            column: 23
          },
          end: {
            line: 204,
            column: 89
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 204,
            column: 39
          },
          end: {
            line: 204,
            column: 44
          }
        }, {
          start: {
            line: 204,
            column: 47
          },
          end: {
            line: 204,
            column: 89
          }
        }],
        line: 204
      },
      "29": {
        loc: {
          start: {
            line: 225,
            column: 29
          },
          end: {
            line: 225,
            column: 79
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 225,
            column: 29
          },
          end: {
            line: 225,
            column: 42
          }
        }, {
          start: {
            line: 225,
            column: 47
          },
          end: {
            line: 225,
            column: 59
          }
        }, {
          start: {
            line: 225,
            column: 63
          },
          end: {
            line: 225,
            column: 78
          }
        }],
        line: 225
      },
      "30": {
        loc: {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 236,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 236,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 226
      },
      "31": {
        loc: {
          start: {
            line: 232,
            column: 20
          },
          end: {
            line: 232,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 232,
            column: 55
          },
          end: {
            line: 232,
            column: 56
          }
        }, {
          start: {
            line: 232,
            column: 59
          },
          end: {
            line: 232,
            column: 61
          }
        }],
        line: 232
      },
      "32": {
        loc: {
          start: {
            line: 232,
            column: 21
          },
          end: {
            line: 232,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 232,
            column: 21
          },
          end: {
            line: 232,
            column: 31
          }
        }, {
          start: {
            line: 232,
            column: 35
          },
          end: {
            line: 232,
            column: 51
          }
        }],
        line: 232
      },
      "33": {
        loc: {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 238
      },
      "34": {
        loc: {
          start: {
            line: 244,
            column: 20
          },
          end: {
            line: 244,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 244,
            column: 55
          },
          end: {
            line: 244,
            column: 56
          }
        }, {
          start: {
            line: 244,
            column: 59
          },
          end: {
            line: 244,
            column: 61
          }
        }],
        line: 244
      },
      "35": {
        loc: {
          start: {
            line: 244,
            column: 21
          },
          end: {
            line: 244,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 244,
            column: 21
          },
          end: {
            line: 244,
            column: 31
          }
        }, {
          start: {
            line: 244,
            column: 35
          },
          end: {
            line: 244,
            column: 51
          }
        }],
        line: 244
      },
      "36": {
        loc: {
          start: {
            line: 258,
            column: 29
          },
          end: {
            line: 258,
            column: 96
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 258,
            column: 29
          },
          end: {
            line: 258,
            column: 45
          }
        }, {
          start: {
            line: 258,
            column: 49
          },
          end: {
            line: 258,
            column: 74
          }
        }, {
          start: {
            line: 258,
            column: 78
          },
          end: {
            line: 258,
            column: 96
          }
        }],
        line: 258
      },
      "37": {
        loc: {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        }, {
          start: {
            line: 262,
            column: 11
          },
          end: {
            line: 264,
            column: 5
          }
        }],
        line: 260
      },
      "38": {
        loc: {
          start: {
            line: 261,
            column: 64
          },
          end: {
            line: 261,
            column: 92
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 261,
            column: 64
          },
          end: {
            line: 261,
            column: 80
          }
        }, {
          start: {
            line: 261,
            column: 84
          },
          end: {
            line: 261,
            column: 92
          }
        }],
        line: 261
      },
      "39": {
        loc: {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 282,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 282,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 278
      },
      "40": {
        loc: {
          start: {
            line: 314,
            column: 24
          },
          end: {
            line: 314,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 314,
            column: 24
          },
          end: {
            line: 314,
            column: 34
          }
        }, {
          start: {
            line: 314,
            column: 38
          },
          end: {
            line: 314,
            column: 46
          }
        }],
        line: 314
      },
      "41": {
        loc: {
          start: {
            line: 315,
            column: 4
          },
          end: {
            line: 317,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 315,
            column: 4
          },
          end: {
            line: 317,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 315
      },
      "42": {
        loc: {
          start: {
            line: 323,
            column: 4
          },
          end: {
            line: 341,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 323,
            column: 4
          },
          end: {
            line: 341,
            column: 5
          }
        }, {
          start: {
            line: 334,
            column: 11
          },
          end: {
            line: 341,
            column: 5
          }
        }],
        line: 323
      },
      "43": {
        loc: {
          start: {
            line: 323,
            column: 8
          },
          end: {
            line: 323,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 323,
            column: 8
          },
          end: {
            line: 323,
            column: 32
          }
        }, {
          start: {
            line: 323,
            column: 36
          },
          end: {
            line: 323,
            column: 65
          }
        }],
        line: 323
      },
      "44": {
        loc: {
          start: {
            line: 334,
            column: 11
          },
          end: {
            line: 341,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 334,
            column: 11
          },
          end: {
            line: 341,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 334
      },
      "45": {
        loc: {
          start: {
            line: 337,
            column: 28
          },
          end: {
            line: 337,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 337,
            column: 28
          },
          end: {
            line: 337,
            column: 41
          }
        }, {
          start: {
            line: 337,
            column: 45
          },
          end: {
            line: 337,
            column: 53
          }
        }],
        line: 337
      },
      "46": {
        loc: {
          start: {
            line: 338,
            column: 6
          },
          end: {
            line: 340,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 338,
            column: 6
          },
          end: {
            line: 340,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 338
      },
      "47": {
        loc: {
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 354,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 354,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 346
      },
      "48": {
        loc: {
          start: {
            line: 346,
            column: 8
          },
          end: {
            line: 346,
            column: 92
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 346,
            column: 8
          },
          end: {
            line: 346,
            column: 32
          }
        }, {
          start: {
            line: 346,
            column: 36
          },
          end: {
            line: 346,
            column: 65
          }
        }, {
          start: {
            line: 346,
            column: 69
          },
          end: {
            line: 346,
            column: 92
          }
        }],
        line: 346
      },
      "49": {
        loc: {
          start: {
            line: 356,
            column: 4
          },
          end: {
            line: 359,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 356,
            column: 4
          },
          end: {
            line: 359,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 356
      },
      "50": {
        loc: {
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 369,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 369,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 363
      },
      "51": {
        loc: {
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 368,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 368,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 366
      },
      "52": {
        loc: {
          start: {
            line: 375,
            column: 4
          },
          end: {
            line: 380,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 375,
            column: 4
          },
          end: {
            line: 380,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 375
      },
      "53": {
        loc: {
          start: {
            line: 384,
            column: 4
          },
          end: {
            line: 407,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 385,
            column: 6
          },
          end: {
            line: 387,
            column: 13
          }
        }, {
          start: {
            line: 388,
            column: 6
          },
          end: {
            line: 390,
            column: 13
          }
        }, {
          start: {
            line: 391,
            column: 6
          },
          end: {
            line: 393,
            column: 13
          }
        }, {
          start: {
            line: 394,
            column: 6
          },
          end: {
            line: 396,
            column: 13
          }
        }, {
          start: {
            line: 397,
            column: 6
          },
          end: {
            line: 401,
            column: 13
          }
        }, {
          start: {
            line: 402,
            column: 6
          },
          end: {
            line: 406,
            column: 13
          }
        }],
        line: 384
      },
      "54": {
        loc: {
          start: {
            line: 403,
            column: 8
          },
          end: {
            line: 405,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 403,
            column: 8
          },
          end: {
            line: 405,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 403
      },
      "55": {
        loc: {
          start: {
            line: 435,
            column: 31
          },
          end: {
            line: 436,
            column: 76
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 435,
            column: 31
          },
          end: {
            line: 435,
            column: 60
          }
        }, {
          start: {
            line: 436,
            column: 6
          },
          end: {
            line: 436,
            column: 18
          }
        }, {
          start: {
            line: 436,
            column: 22
          },
          end: {
            line: 436,
            column: 40
          }
        }, {
          start: {
            line: 436,
            column: 44
          },
          end: {
            line: 436,
            column: 57
          }
        }, {
          start: {
            line: 436,
            column: 61
          },
          end: {
            line: 436,
            column: 76
          }
        }],
        line: 435
      },
      "56": {
        loc: {
          start: {
            line: 442,
            column: 33
          },
          end: {
            line: 442,
            column: 88
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 442,
            column: 54
          },
          end: {
            line: 442,
            column: 83
          }
        }, {
          start: {
            line: 442,
            column: 86
          },
          end: {
            line: 442,
            column: 88
          }
        }],
        line: 442
      },
      "57": {
        loc: {
          start: {
            line: 443,
            column: 30
          },
          end: {
            line: 443,
            column: 126
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 443,
            column: 57
          },
          end: {
            line: 443,
            column: 94
          }
        }, {
          start: {
            line: 443,
            column: 97
          },
          end: {
            line: 443,
            column: 126
          }
        }],
        line: 443
      },
      "58": {
        loc: {
          start: {
            line: 445,
            column: 26
          },
          end: {
            line: 445,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 445,
            column: 26
          },
          end: {
            line: 445,
            column: 40
          }
        }, {
          start: {
            line: 445,
            column: 44
          },
          end: {
            line: 445,
            column: 60
          }
        }],
        line: 445
      },
      "59": {
        loc: {
          start: {
            line: 449,
            column: 26
          },
          end: {
            line: 449,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 449,
            column: 26
          },
          end: {
            line: 449,
            column: 34
          }
        }, {
          start: {
            line: 449,
            column: 38
          },
          end: {
            line: 449,
            column: 56
          }
        }],
        line: 449
      },
      "60": {
        loc: {
          start: {
            line: 450,
            column: 56
          },
          end: {
            line: 450,
            column: 94
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 450,
            column: 74
          },
          end: {
            line: 450,
            column: 83
          }
        }, {
          start: {
            line: 450,
            column: 86
          },
          end: {
            line: 450,
            column: 94
          }
        }],
        line: 450
      },
      "61": {
        loc: {
          start: {
            line: 456,
            column: 34
          },
          end: {
            line: 457,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 456,
            column: 34
          },
          end: {
            line: 456,
            column: 52
          }
        }, {
          start: {
            line: 457,
            column: 6
          },
          end: {
            line: 457,
            column: 73
          }
        }],
        line: 456
      },
      "62": {
        loc: {
          start: {
            line: 458,
            column: 22
          },
          end: {
            line: 460,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 459,
            column: 8
          },
          end: {
            line: 459,
            column: 55
          }
        }, {
          start: {
            line: 460,
            column: 8
          },
          end: {
            line: 460,
            column: 10
          }
        }],
        line: 458
      },
      "63": {
        loc: {
          start: {
            line: 458,
            column: 23
          },
          end: {
            line: 458,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 458,
            column: 23
          },
          end: {
            line: 458,
            column: 44
          }
        }, {
          start: {
            line: 458,
            column: 48
          },
          end: {
            line: 458,
            column: 58
          }
        }],
        line: 458
      },
      "64": {
        loc: {
          start: {
            line: 463,
            column: 30
          },
          end: {
            line: 467,
            column: 12
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 464,
            column: 8
          },
          end: {
            line: 466,
            column: 9
          }
        }, {
          start: {
            line: 467,
            column: 8
          },
          end: {
            line: 467,
            column: 12
          }
        }],
        line: 463
      },
      "65": {
        loc: {
          start: {
            line: 469,
            column: 37
          },
          end: {
            line: 471,
            column: 12
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 469,
            column: 55
          },
          end: {
            line: 471,
            column: 5
          }
        }, {
          start: {
            line: 471,
            column: 8
          },
          end: {
            line: 471,
            column: 12
          }
        }],
        line: 469
      },
      "66": {
        loc: {
          start: {
            line: 476,
            column: 4
          },
          end: {
            line: 483,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 476,
            column: 4
          },
          end: {
            line: 483,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 476
      },
      "67": {
        loc: {
          start: {
            line: 480,
            column: 6
          },
          end: {
            line: 482,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 480,
            column: 6
          },
          end: {
            line: 482,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 480
      },
      "68": {
        loc: {
          start: {
            line: 502,
            column: 9
          },
          end: {
            line: 504,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 502,
            column: 9
          },
          end: {
            line: 502,
            column: 18
          }
        }, {
          start: {
            line: 503,
            column: 10
          },
          end: {
            line: 503,
            column: 99
          }
        }],
        line: 502
      },
      "69": {
        loc: {
          start: {
            line: 507,
            column: 25
          },
          end: {
            line: 507,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 507,
            column: 36
          },
          end: {
            line: 507,
            column: 42
          }
        }, {
          start: {
            line: 507,
            column: 45
          },
          end: {
            line: 507,
            column: 52
          }
        }],
        line: 507
      },
      "70": {
        loc: {
          start: {
            line: 510,
            column: 29
          },
          end: {
            line: 510,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 510,
            column: 54
          },
          end: {
            line: 510,
            column: 60
          }
        }, {
          start: {
            line: 510,
            column: 63
          },
          end: {
            line: 510,
            column: 69
          }
        }],
        line: 510
      },
      "71": {
        loc: {
          start: {
            line: 537,
            column: 32
          },
          end: {
            line: 537,
            column: 87
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 537,
            column: 49
          },
          end: {
            line: 537,
            column: 67
          }
        }, {
          start: {
            line: 537,
            column: 70
          },
          end: {
            line: 537,
            column: 87
          }
        }],
        line: 537
      },
      "72": {
        loc: {
          start: {
            line: 538,
            column: 42
          },
          end: {
            line: 538,
            column: 111
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 538,
            column: 76
          },
          end: {
            line: 538,
            column: 106
          }
        }, {
          start: {
            line: 538,
            column: 109
          },
          end: {
            line: 538,
            column: 111
          }
        }],
        line: 538
      },
      "73": {
        loc: {
          start: {
            line: 538,
            column: 42
          },
          end: {
            line: 538,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 538,
            column: 42
          },
          end: {
            line: 538,
            column: 53
          }
        }, {
          start: {
            line: 538,
            column: 57
          },
          end: {
            line: 538,
            column: 73
          }
        }],
        line: 538
      },
      "74": {
        loc: {
          start: {
            line: 539,
            column: 38
          },
          end: {
            line: 539,
            column: 83
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 539,
            column: 52
          },
          end: {
            line: 539,
            column: 78
          }
        }, {
          start: {
            line: 539,
            column: 81
          },
          end: {
            line: 539,
            column: 83
          }
        }],
        line: 539
      },
      "75": {
        loc: {
          start: {
            line: 540,
            column: 36
          },
          end: {
            line: 544,
            column: 18
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 541,
            column: 16
          },
          end: {
            line: 543,
            column: 93
          }
        }, {
          start: {
            line: 544,
            column: 16
          },
          end: {
            line: 544,
            column: 18
          }
        }],
        line: 540
      },
      "76": {
        loc: {
          start: {
            line: 548,
            column: 31
          },
          end: {
            line: 548,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 548,
            column: 51
          },
          end: {
            line: 548,
            column: 57
          }
        }, {
          start: {
            line: 548,
            column: 60
          },
          end: {
            line: 548,
            column: 67
          }
        }],
        line: 548
      },
      "77": {
        loc: {
          start: {
            line: 566,
            column: 11
          },
          end: {
            line: 568,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 566,
            column: 11
          },
          end: {
            line: 566,
            column: 29
          }
        }, {
          start: {
            line: 567,
            column: 12
          },
          end: {
            line: 567,
            column: 99
          }
        }],
        line: 566
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0, 0, 0, 0, 0],
      "54": [0, 0],
      "55": [0, 0, 0, 0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0],
      "72": [0, 0],
      "73": [0, 0],
      "74": [0, 0],
      "75": [0, 0],
      "76": [0, 0],
      "77": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8c02558eaa2639a7d676171a7afbba63978a9e2b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bxywyv02a = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1bxywyv02a();
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var IS_PREACT = (cov_1bxywyv02a().s[0]++, "PREACT" === 'PREACT');
var IS_REACT = (cov_1bxywyv02a().s[1]++, "PREACT" === 'REACT');
var keyCodes = (cov_1bxywyv02a().s[2]++, {
  13: 'enter',
  27: 'escape',
  32: 'space',
  38: 'up',
  40: 'down'
});
function isIosDevice() {
  cov_1bxywyv02a().f[0]++;
  cov_1bxywyv02a().s[3]++;
  return (cov_1bxywyv02a().b[0][0]++, typeof navigator !== 'undefined') && (cov_1bxywyv02a().b[0][1]++, !!((cov_1bxywyv02a().b[1][0]++, navigator.userAgent.match(/(iPod|iPhone|iPad)/g)) && (cov_1bxywyv02a().b[1][1]++, navigator.userAgent.match(/AppleWebKit/g))));
}
function isPrintableKeyCode(keyCode) {
  cov_1bxywyv02a().f[1]++;
  cov_1bxywyv02a().s[4]++;
  return (cov_1bxywyv02a().b[2][0]++, keyCode > 47) && (cov_1bxywyv02a().b[2][1]++, keyCode < 58) || (cov_1bxywyv02a().b[2][2]++,
  // number keys
  keyCode === 32) || (cov_1bxywyv02a().b[2][3]++, keyCode === 8) ||
  // spacebar or backspace
  (cov_1bxywyv02a().b[2][4]++, keyCode > 64) && (cov_1bxywyv02a().b[2][5]++, keyCode < 91) ||
  // letter keys
  (cov_1bxywyv02a().b[2][6]++, keyCode > 95) && (cov_1bxywyv02a().b[2][7]++, keyCode < 112) ||
  // numpad keys
  (cov_1bxywyv02a().b[2][8]++, keyCode > 185) && (cov_1bxywyv02a().b[2][9]++, keyCode < 193) ||
  // ;=,-./` (in order)
  (cov_1bxywyv02a().b[2][10]++, keyCode > 218) && (cov_1bxywyv02a().b[2][11]++, keyCode < 223) // [\]' (in order)
  ;
}

// Preact does not implement onChange on inputs, but React does.
function onChangeCrossLibrary(handler) {
  cov_1bxywyv02a().f[2]++;
  cov_1bxywyv02a().s[5]++;
  if (IS_PREACT) {
    cov_1bxywyv02a().b[3][0]++;
    cov_1bxywyv02a().s[6]++;
    return {
      onInput: handler
    };
  } else {
    cov_1bxywyv02a().b[3][1]++;
  }
  cov_1bxywyv02a().s[7]++;
  if (IS_REACT) {
    cov_1bxywyv02a().b[4][0]++;
    cov_1bxywyv02a().s[8]++;
    return {
      onChange: handler
    };
  } else {
    cov_1bxywyv02a().b[4][1]++;
  }
}
var Autocomplete = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Autocomplete, _Component);
  function Autocomplete(props) {
    var _this;
    cov_1bxywyv02a().f[6]++;
    cov_1bxywyv02a().s[13]++;
    _this = _Component.call(this, props) || this;
    _this.elementReferences = (cov_1bxywyv02a().s[12]++, {});
    cov_1bxywyv02a().s[14]++;
    _this.state = {
      focused: null,
      hovered: null,
      menuOpen: false,
      options: props.defaultValue ? (cov_1bxywyv02a().b[5][0]++, [props.defaultValue]) : (cov_1bxywyv02a().b[5][1]++, []),
      query: props.defaultValue,
      validChoiceMade: false,
      selected: null,
      ariaHint: true
    };
    cov_1bxywyv02a().s[15]++;
    _this.handleComponentBlur = _this.handleComponentBlur.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[16]++;
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[17]++;
    _this.handleUpArrow = _this.handleUpArrow.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[18]++;
    _this.handleDownArrow = _this.handleDownArrow.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[19]++;
    _this.handleEnter = _this.handleEnter.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[20]++;
    _this.handlePrintableKey = _this.handlePrintableKey.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[21]++;
    _this.handleListMouseLeave = _this.handleListMouseLeave.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[22]++;
    _this.handleOptionBlur = _this.handleOptionBlur.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[23]++;
    _this.handleOptionClick = _this.handleOptionClick.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[24]++;
    _this.handleOptionFocus = _this.handleOptionFocus.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[25]++;
    _this.handleOptionMouseDown = _this.handleOptionMouseDown.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[26]++;
    _this.handleOptionMouseEnter = _this.handleOptionMouseEnter.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[27]++;
    _this.handleInputBlur = _this.handleInputBlur.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[28]++;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[29]++;
    _this.handleInputFocus = _this.handleInputFocus.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[30]++;
    _this.pollInputElement = _this.pollInputElement.bind(_assertThisInitialized(_this));
    cov_1bxywyv02a().s[31]++;
    _this.getDirectInputChanges = _this.getDirectInputChanges.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = Autocomplete.prototype;
  _proto.isQueryAnOption = function isQueryAnOption(query, options) {
    var _this2 = this;
    cov_1bxywyv02a().f[7]++;
    cov_1bxywyv02a().s[32]++;
    return options.map(function (entry) {
      cov_1bxywyv02a().f[8]++;
      cov_1bxywyv02a().s[33]++;
      return _this2.templateInputValue(entry).toLowerCase();
    }).indexOf(query.toLowerCase()) !== -1;
  };
  _proto.componentDidMount = function componentDidMount() {
    cov_1bxywyv02a().f[9]++;
    cov_1bxywyv02a().s[34]++;
    this.pollInputElement();
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    cov_1bxywyv02a().f[10]++;
    cov_1bxywyv02a().s[35]++;
    clearTimeout(this.$pollInput);
  }

  // Applications like Dragon NaturallySpeaking will modify the
  // `input` field by directly changing its `.value`. These events
  // don't trigger our JavaScript event listeners, so we need to poll
  // to handle when and if they occur.
  ;
  _proto.pollInputElement = function pollInputElement() {
    var _this3 = this;
    cov_1bxywyv02a().f[11]++;
    cov_1bxywyv02a().s[36]++;
    this.getDirectInputChanges();
    cov_1bxywyv02a().s[37]++;
    this.$pollInput = setTimeout(function () {
      cov_1bxywyv02a().f[12]++;
      cov_1bxywyv02a().s[38]++;
      _this3.pollInputElement();
    }, 100);
  };
  _proto.getDirectInputChanges = function getDirectInputChanges() {
    cov_1bxywyv02a().f[13]++;
    var inputReference = (cov_1bxywyv02a().s[39]++, this.elementReferences[-1]);
    var queryHasChanged = (cov_1bxywyv02a().s[40]++, (cov_1bxywyv02a().b[6][0]++, inputReference) && (cov_1bxywyv02a().b[6][1]++, inputReference.value !== this.state.query));
    cov_1bxywyv02a().s[41]++;
    if (queryHasChanged) {
      cov_1bxywyv02a().b[7][0]++;
      cov_1bxywyv02a().s[42]++;
      this.handleInputChange({
        target: {
          value: inputReference.value
        }
      });
    } else {
      cov_1bxywyv02a().b[7][1]++;
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    cov_1bxywyv02a().f[14]++;
    var _ref = (cov_1bxywyv02a().s[43]++, this.state),
      focused = _ref.focused;
    var componentLostFocus = (cov_1bxywyv02a().s[44]++, focused === null);
    var focusedChanged = (cov_1bxywyv02a().s[45]++, prevState.focused !== focused);
    var focusDifferentElement = (cov_1bxywyv02a().s[46]++, (cov_1bxywyv02a().b[8][0]++, focusedChanged) && (cov_1bxywyv02a().b[8][1]++, !componentLostFocus));
    cov_1bxywyv02a().s[47]++;
    if (focusDifferentElement) {
      cov_1bxywyv02a().b[9][0]++;
      cov_1bxywyv02a().s[48]++;
      this.elementReferences[focused].focus();
    } else {
      cov_1bxywyv02a().b[9][1]++;
    }
    var focusedInput = (cov_1bxywyv02a().s[49]++, focused === -1);
    var componentGainedFocus = (cov_1bxywyv02a().s[50]++, (cov_1bxywyv02a().b[10][0]++, focusedChanged) && (cov_1bxywyv02a().b[10][1]++, prevState.focused === null));
    var selectAllText = (cov_1bxywyv02a().s[51]++, (cov_1bxywyv02a().b[11][0]++, focusedInput) && (cov_1bxywyv02a().b[11][1]++, componentGainedFocus));
    cov_1bxywyv02a().s[52]++;
    if (selectAllText) {
      cov_1bxywyv02a().b[12][0]++;
      var inputElement = (cov_1bxywyv02a().s[53]++, this.elementReferences[focused]);
      cov_1bxywyv02a().s[54]++;
      inputElement.setSelectionRange(0, inputElement.value.length);
    } else {
      cov_1bxywyv02a().b[12][1]++;
    }
  };
  _proto.hasAutoselect = function hasAutoselect() {
    cov_1bxywyv02a().f[15]++;
    cov_1bxywyv02a().s[55]++;
    return isIosDevice() ? (cov_1bxywyv02a().b[13][0]++, false) : (cov_1bxywyv02a().b[13][1]++, this.props.autoselect);
  }

  // This template is used when converting from a state.options object into a state.query.
  ;
  _proto.templateInputValue = function templateInputValue(value) {
    cov_1bxywyv02a().f[16]++;
    var inputValueTemplate = (cov_1bxywyv02a().s[56]++, (cov_1bxywyv02a().b[14][0]++, this.props.templates) && (cov_1bxywyv02a().b[14][1]++, this.props.templates.inputValue));
    cov_1bxywyv02a().s[57]++;
    return inputValueTemplate ? (cov_1bxywyv02a().b[15][0]++, inputValueTemplate(value)) : (cov_1bxywyv02a().b[15][1]++, value);
  }

  // This template is used when displaying results / suggestions.
  ;
  _proto.templateSuggestion = function templateSuggestion(value) {
    cov_1bxywyv02a().f[17]++;
    var suggestionTemplate = (cov_1bxywyv02a().s[58]++, (cov_1bxywyv02a().b[16][0]++, this.props.templates) && (cov_1bxywyv02a().b[16][1]++, this.props.templates.suggestion));
    cov_1bxywyv02a().s[59]++;
    return suggestionTemplate ? (cov_1bxywyv02a().b[17][0]++, suggestionTemplate(value)) : (cov_1bxywyv02a().b[17][1]++, value);
  };
  _proto.handleComponentBlur = function handleComponentBlur(newState) {
    cov_1bxywyv02a().f[18]++;
    var _ref2 = (cov_1bxywyv02a().s[60]++, this.state),
      options = _ref2.options,
      query = _ref2.query,
      selected = _ref2.selected;
    var newQuery;
    cov_1bxywyv02a().s[61]++;
    if (this.props.confirmOnBlur) {
      cov_1bxywyv02a().b[18][0]++;
      cov_1bxywyv02a().s[62]++;
      newQuery = (cov_1bxywyv02a().b[19][0]++, newState.query) || (cov_1bxywyv02a().b[19][1]++, query);
      cov_1bxywyv02a().s[63]++;
      this.props.onConfirm(options[selected]);
    } else {
      cov_1bxywyv02a().b[18][1]++;
      cov_1bxywyv02a().s[64]++;
      newQuery = query;
    }
    cov_1bxywyv02a().s[65]++;
    this.setState({
      focused: null,
      menuOpen: (cov_1bxywyv02a().b[20][0]++, newState.menuOpen) || (cov_1bxywyv02a().b[20][1]++, false),
      query: newQuery,
      selected: null,
      validChoiceMade: this.isQueryAnOption(newQuery, options)
    });
  };
  _proto.handleListMouseLeave = function handleListMouseLeave(event) {
    cov_1bxywyv02a().f[19]++;
    cov_1bxywyv02a().s[66]++;
    this.setState({
      hovered: null
    });
  };
  _proto.handleOptionBlur = function handleOptionBlur(event, index) {
    cov_1bxywyv02a().f[20]++;
    var _ref3 = (cov_1bxywyv02a().s[67]++, this.state),
      focused = _ref3.focused,
      menuOpen = _ref3.menuOpen,
      options = _ref3.options,
      selected = _ref3.selected;
    var focusingOutsideComponent = (cov_1bxywyv02a().s[68]++, event.relatedTarget === null);
    var focusingInput = (cov_1bxywyv02a().s[69]++, event.relatedTarget === this.elementReferences[-1]);
    var focusingAnotherOption = (cov_1bxywyv02a().s[70]++, (cov_1bxywyv02a().b[21][0]++, focused !== index) && (cov_1bxywyv02a().b[21][1]++, focused !== -1));
    var blurComponent = (cov_1bxywyv02a().s[71]++, (cov_1bxywyv02a().b[22][0]++, !focusingAnotherOption) && (cov_1bxywyv02a().b[22][1]++, focusingOutsideComponent) || (cov_1bxywyv02a().b[22][2]++, !((cov_1bxywyv02a().b[23][0]++, focusingAnotherOption) || (cov_1bxywyv02a().b[23][1]++, focusingInput))));
    cov_1bxywyv02a().s[72]++;
    if (blurComponent) {
      cov_1bxywyv02a().b[24][0]++;
      var keepMenuOpen = (cov_1bxywyv02a().s[73]++, (cov_1bxywyv02a().b[25][0]++, menuOpen) && (cov_1bxywyv02a().b[25][1]++, isIosDevice()));
      cov_1bxywyv02a().s[74]++;
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: this.templateInputValue(options[selected])
      });
    } else {
      cov_1bxywyv02a().b[24][1]++;
    }
  };
  _proto.handleInputBlur = function handleInputBlur(event) {
    cov_1bxywyv02a().f[21]++;
    var _ref4 = (cov_1bxywyv02a().s[75]++, this.state),
      focused = _ref4.focused,
      menuOpen = _ref4.menuOpen,
      options = _ref4.options,
      query = _ref4.query,
      selected = _ref4.selected;
    var focusingAnOption = (cov_1bxywyv02a().s[76]++, focused !== -1);
    cov_1bxywyv02a().s[77]++;
    if (!focusingAnOption) {
      cov_1bxywyv02a().b[26][0]++;
      var keepMenuOpen = (cov_1bxywyv02a().s[78]++, (cov_1bxywyv02a().b[27][0]++, menuOpen) && (cov_1bxywyv02a().b[27][1]++, isIosDevice()));
      var newQuery = (cov_1bxywyv02a().s[79]++, isIosDevice() ? (cov_1bxywyv02a().b[28][0]++, query) : (cov_1bxywyv02a().b[28][1]++, this.templateInputValue(options[selected])));
      cov_1bxywyv02a().s[80]++;
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: newQuery
      });
    } else {
      cov_1bxywyv02a().b[26][1]++;
    }
  };
  _proto.handleInputChange = function handleInputChange(event) {
    var _this4 = this;
    cov_1bxywyv02a().f[22]++;
    var _ref5 = (cov_1bxywyv02a().s[81]++, this.props),
      minLength = _ref5.minLength,
      source = _ref5.source,
      showAllValues = _ref5.showAllValues;
    var autoselect = (cov_1bxywyv02a().s[82]++, this.hasAutoselect());
    var query = (cov_1bxywyv02a().s[83]++, event.target.value);
    var queryEmpty = (cov_1bxywyv02a().s[84]++, query.length === 0);
    var queryChanged = (cov_1bxywyv02a().s[85]++, this.state.query.length !== query.length);
    var queryLongEnough = (cov_1bxywyv02a().s[86]++, query.length >= minLength);
    cov_1bxywyv02a().s[87]++;
    this.setState({
      query: query,
      ariaHint: queryEmpty
    });
    var searchForOptions = (cov_1bxywyv02a().s[88]++, (cov_1bxywyv02a().b[29][0]++, showAllValues) || (cov_1bxywyv02a().b[29][1]++, queryChanged) && (cov_1bxywyv02a().b[29][2]++, queryLongEnough));
    cov_1bxywyv02a().s[89]++;
    if (searchForOptions) {
      cov_1bxywyv02a().b[30][0]++;
      cov_1bxywyv02a().s[90]++;
      source(query, function (options) {
        cov_1bxywyv02a().f[23]++;
        var optionsAvailable = (cov_1bxywyv02a().s[91]++, options.length > 0);
        cov_1bxywyv02a().s[92]++;
        _this4.setState({
          menuOpen: optionsAvailable,
          options: options,
          selected: (cov_1bxywyv02a().b[32][0]++, autoselect) && (cov_1bxywyv02a().b[32][1]++, optionsAvailable) ? (cov_1bxywyv02a().b[31][0]++, 0) : (cov_1bxywyv02a().b[31][1]++, -1),
          validChoiceMade: false
        });
      });
    } else {
      cov_1bxywyv02a().b[30][1]++;
    }
    cov_1bxywyv02a().s[93]++;
    if (!queryLongEnough) {
      cov_1bxywyv02a().b[33][0]++;
      cov_1bxywyv02a().s[94]++;
      source('', function (options) {
        cov_1bxywyv02a().f[24]++;
        var optionsAvailable = (cov_1bxywyv02a().s[95]++, options.length > 0);
        cov_1bxywyv02a().s[96]++;
        _this4.setState({
          menuOpen: optionsAvailable,
          options: options,
          selected: (cov_1bxywyv02a().b[35][0]++, autoselect) && (cov_1bxywyv02a().b[35][1]++, optionsAvailable) ? (cov_1bxywyv02a().b[34][0]++, 0) : (cov_1bxywyv02a().b[34][1]++, -1),
          validChoiceMade: false
        });
      });
    } else {
      cov_1bxywyv02a().b[33][1]++;
    }
  };
  _proto.handleInputClick = function handleInputClick(event) {
    cov_1bxywyv02a().f[25]++;
    cov_1bxywyv02a().s[97]++;
    this.handleInputChange(event);
  };
  _proto.handleInputFocus = function handleInputFocus(event) {
    cov_1bxywyv02a().f[26]++;
    var _ref6 = (cov_1bxywyv02a().s[98]++, this.state),
      query = _ref6.query,
      validChoiceMade = _ref6.validChoiceMade,
      options = _ref6.options;
    var _ref7 = (cov_1bxywyv02a().s[99]++, this.props),
      minLength = _ref7.minLength;
    var shouldReopenMenu = (cov_1bxywyv02a().s[100]++, (cov_1bxywyv02a().b[36][0]++, !validChoiceMade) && (cov_1bxywyv02a().b[36][1]++, query.length >= minLength) && (cov_1bxywyv02a().b[36][2]++, options.length > 0));
    cov_1bxywyv02a().s[101]++;
    if (shouldReopenMenu) {
      cov_1bxywyv02a().b[37][0]++;
      cov_1bxywyv02a().s[102]++;
      this.setState(function (_ref8) {
        var menuOpen = _ref8.menuOpen;
        cov_1bxywyv02a().f[27]++;
        cov_1bxywyv02a().s[103]++;
        return {
          focused: -1,
          menuOpen: (cov_1bxywyv02a().b[38][0]++, shouldReopenMenu) || (cov_1bxywyv02a().b[38][1]++, menuOpen),
          selected: -1
        };
      });
    } else {
      cov_1bxywyv02a().b[37][1]++;
      cov_1bxywyv02a().s[104]++;
      this.setState({
        focused: -1
      });
    }
  };
  _proto.handleOptionFocus = function handleOptionFocus(index) {
    cov_1bxywyv02a().f[28]++;
    cov_1bxywyv02a().s[105]++;
    this.setState({
      focused: index,
      hovered: null,
      selected: index
    });
  };
  _proto.handleOptionMouseEnter = function handleOptionMouseEnter(event, index) {
    cov_1bxywyv02a().f[29]++;
    cov_1bxywyv02a().s[106]++;
    // iOS Safari prevents click event if mouseenter adds hover background colour
    // See: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW4
    if (!isIosDevice()) {
      cov_1bxywyv02a().b[39][0]++;
      cov_1bxywyv02a().s[107]++;
      this.setState({
        hovered: index
      });
    } else {
      cov_1bxywyv02a().b[39][1]++;
    }
  };
  _proto.handleOptionClick = function handleOptionClick(event, index) {
    cov_1bxywyv02a().f[30]++;
    var selectedOption = (cov_1bxywyv02a().s[108]++, this.state.options[index]);
    var newQuery = (cov_1bxywyv02a().s[109]++, this.templateInputValue(selectedOption));
    cov_1bxywyv02a().s[110]++;
    this.props.onConfirm(selectedOption);
    cov_1bxywyv02a().s[111]++;
    this.setState({
      focused: -1,
      hovered: null,
      menuOpen: false,
      query: newQuery,
      selected: -1,
      validChoiceMade: true
    });
    cov_1bxywyv02a().s[112]++;
    this.forceUpdate();
  };
  _proto.handleOptionMouseDown = function handleOptionMouseDown(event) {
    cov_1bxywyv02a().f[31]++;
    cov_1bxywyv02a().s[113]++;
    // Safari triggers focusOut before click, but if you
    // preventDefault on mouseDown, you can stop that from happening.
    // If this is removed, clicking on an option in Safari will trigger
    // `handleOptionBlur`, which closes the menu, and the click will
    // trigger on the element underneath instead.
    // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
    event.preventDefault();
  };
  _proto.handleUpArrow = function handleUpArrow(event) {
    cov_1bxywyv02a().f[32]++;
    cov_1bxywyv02a().s[114]++;
    event.preventDefault();
    var _ref9 = (cov_1bxywyv02a().s[115]++, this.state),
      menuOpen = _ref9.menuOpen,
      selected = _ref9.selected;
    var isNotAtTop = (cov_1bxywyv02a().s[116]++, selected !== -1);
    var allowMoveUp = (cov_1bxywyv02a().s[117]++, (cov_1bxywyv02a().b[40][0]++, isNotAtTop) && (cov_1bxywyv02a().b[40][1]++, menuOpen));
    cov_1bxywyv02a().s[118]++;
    if (allowMoveUp) {
      cov_1bxywyv02a().b[41][0]++;
      cov_1bxywyv02a().s[119]++;
      this.handleOptionFocus(selected - 1);
    } else {
      cov_1bxywyv02a().b[41][1]++;
    }
  };
  _proto.handleDownArrow = function handleDownArrow(event) {
    var _this5 = this;
    cov_1bxywyv02a().f[33]++;
    cov_1bxywyv02a().s[120]++;
    event.preventDefault();
    // if not open, open
    cov_1bxywyv02a().s[121]++;
    if ((cov_1bxywyv02a().b[43][0]++, this.props.showAllValues) && (cov_1bxywyv02a().b[43][1]++, this.state.menuOpen === false)) {
      cov_1bxywyv02a().b[42][0]++;
      cov_1bxywyv02a().s[122]++;
      event.preventDefault();
      cov_1bxywyv02a().s[123]++;
      this.props.source('', function (options) {
        cov_1bxywyv02a().f[34]++;
        cov_1bxywyv02a().s[124]++;
        _this5.setState({
          menuOpen: true,
          options: options,
          selected: 0,
          focused: 0,
          hovered: null
        });
      });
    } else {
      cov_1bxywyv02a().b[42][1]++;
      cov_1bxywyv02a().s[125]++;
      if (this.state.menuOpen === true) {
        cov_1bxywyv02a().b[44][0]++;
        var _ref10 = (cov_1bxywyv02a().s[126]++, this.state),
          menuOpen = _ref10.menuOpen,
          options = _ref10.options,
          selected = _ref10.selected;
        var isNotAtBottom = (cov_1bxywyv02a().s[127]++, selected !== options.length - 1);
        var allowMoveDown = (cov_1bxywyv02a().s[128]++, (cov_1bxywyv02a().b[45][0]++, isNotAtBottom) && (cov_1bxywyv02a().b[45][1]++, menuOpen));
        cov_1bxywyv02a().s[129]++;
        if (allowMoveDown) {
          cov_1bxywyv02a().b[46][0]++;
          cov_1bxywyv02a().s[130]++;
          this.handleOptionFocus(selected + 1);
        } else {
          cov_1bxywyv02a().b[46][1]++;
        }
      } else {
        cov_1bxywyv02a().b[44][1]++;
      }
    }
  };
  _proto.handleSpace = function handleSpace(event) {
    var _this6 = this;
    cov_1bxywyv02a().f[35]++;
    cov_1bxywyv02a().s[131]++;
    // if not open, open
    if ((cov_1bxywyv02a().b[48][0]++, this.props.showAllValues) && (cov_1bxywyv02a().b[48][1]++, this.state.menuOpen === false) && (cov_1bxywyv02a().b[48][2]++, this.state.query === '')) {
      cov_1bxywyv02a().b[47][0]++;
      cov_1bxywyv02a().s[132]++;
      event.preventDefault();
      cov_1bxywyv02a().s[133]++;
      this.props.source('', function (options) {
        cov_1bxywyv02a().f[36]++;
        cov_1bxywyv02a().s[134]++;
        _this6.setState({
          menuOpen: true,
          options: options
        });
      });
    } else {
      cov_1bxywyv02a().b[47][1]++;
    }
    var focusIsOnOption = (cov_1bxywyv02a().s[135]++, this.state.focused !== -1);
    cov_1bxywyv02a().s[136]++;
    if (focusIsOnOption) {
      cov_1bxywyv02a().b[49][0]++;
      cov_1bxywyv02a().s[137]++;
      event.preventDefault();
      cov_1bxywyv02a().s[138]++;
      this.handleOptionClick(event, this.state.focused);
    } else {
      cov_1bxywyv02a().b[49][1]++;
    }
  };
  _proto.handleEnter = function handleEnter(event) {
    cov_1bxywyv02a().f[37]++;
    cov_1bxywyv02a().s[139]++;
    if (this.state.menuOpen) {
      cov_1bxywyv02a().b[50][0]++;
      cov_1bxywyv02a().s[140]++;
      event.preventDefault();
      var hasSelectedOption = (cov_1bxywyv02a().s[141]++, this.state.selected >= 0);
      cov_1bxywyv02a().s[142]++;
      if (hasSelectedOption) {
        cov_1bxywyv02a().b[51][0]++;
        cov_1bxywyv02a().s[143]++;
        this.handleOptionClick(event, this.state.selected);
      } else {
        cov_1bxywyv02a().b[51][1]++;
      }
    } else {
      cov_1bxywyv02a().b[50][1]++;
    }
  };
  _proto.handlePrintableKey = function handlePrintableKey(event) {
    cov_1bxywyv02a().f[38]++;
    var inputElement = (cov_1bxywyv02a().s[144]++, this.elementReferences[-1]);
    var eventIsOnInput = (cov_1bxywyv02a().s[145]++, event.target === inputElement);
    cov_1bxywyv02a().s[146]++;
    if (!eventIsOnInput) {
      cov_1bxywyv02a().b[52][0]++;
      cov_1bxywyv02a().s[147]++;
      // FIXME: This would be better if it was in componentDidUpdate,
      // but using setState to trigger that seems to not work correctly
      // in preact@8.1.0.
      inputElement.focus();
    } else {
      cov_1bxywyv02a().b[52][1]++;
    }
  };
  _proto.handleKeyDown = function handleKeyDown(event) {
    cov_1bxywyv02a().f[39]++;
    cov_1bxywyv02a().s[148]++;
    switch (keyCodes[event.keyCode]) {
      case 'up':
        cov_1bxywyv02a().b[53][0]++;
        cov_1bxywyv02a().s[149]++;
        this.handleUpArrow(event);
        cov_1bxywyv02a().s[150]++;
        break;
      case 'down':
        cov_1bxywyv02a().b[53][1]++;
        cov_1bxywyv02a().s[151]++;
        this.handleDownArrow(event);
        cov_1bxywyv02a().s[152]++;
        break;
      case 'space':
        cov_1bxywyv02a().b[53][2]++;
        cov_1bxywyv02a().s[153]++;
        this.handleSpace(event);
        cov_1bxywyv02a().s[154]++;
        break;
      case 'enter':
        cov_1bxywyv02a().b[53][3]++;
        cov_1bxywyv02a().s[155]++;
        this.handleEnter(event);
        cov_1bxywyv02a().s[156]++;
        break;
      case 'escape':
        cov_1bxywyv02a().b[53][4]++;
        cov_1bxywyv02a().s[157]++;
        this.handleComponentBlur({
          query: this.state.query
        });
        cov_1bxywyv02a().s[158]++;
        break;
      default:
        cov_1bxywyv02a().b[53][5]++;
        cov_1bxywyv02a().s[159]++;
        if (isPrintableKeyCode(event.keyCode)) {
          cov_1bxywyv02a().b[54][0]++;
          cov_1bxywyv02a().s[160]++;
          this.handlePrintableKey(event);
        } else {
          cov_1bxywyv02a().b[54][1]++;
        }
        cov_1bxywyv02a().s[161]++;
        break;
    }
  };
  _proto.render = function render() {
    var _this7 = this;
    cov_1bxywyv02a().f[40]++;
    var _ref11 = (cov_1bxywyv02a().s[162]++, this.props),
      cssNamespace = _ref11.cssNamespace,
      displayMenu = _ref11.displayMenu,
      id = _ref11.id,
      minLength = _ref11.minLength,
      name = _ref11.name,
      placeholder = _ref11.placeholder,
      required = _ref11.required,
      showAllValues = _ref11.showAllValues,
      tNoResults = _ref11.tNoResults,
      tStatusQueryTooShort = _ref11.tStatusQueryTooShort,
      tStatusNoResults = _ref11.tStatusNoResults,
      tStatusSelectedOption = _ref11.tStatusSelectedOption,
      tStatusResults = _ref11.tStatusResults,
      tAssistiveHint = _ref11.tAssistiveHint,
      dropdownArrowFactory = _ref11.dropdownArrow;
    var _ref12 = (cov_1bxywyv02a().s[163]++, this.state),
      focused = _ref12.focused,
      hovered = _ref12.hovered,
      menuOpen = _ref12.menuOpen,
      options = _ref12.options,
      query = _ref12.query,
      selected = _ref12.selected,
      ariaHint = _ref12.ariaHint,
      validChoiceMade = _ref12.validChoiceMade;
    var autoselect = (cov_1bxywyv02a().s[164]++, this.hasAutoselect());
    var inputFocused = (cov_1bxywyv02a().s[165]++, focused === -1);
    var noOptionsAvailable = (cov_1bxywyv02a().s[166]++, options.length === 0);
    var queryNotEmpty = (cov_1bxywyv02a().s[167]++, query.length !== 0);
    var queryLongEnough = (cov_1bxywyv02a().s[168]++, query.length >= minLength);
    var showNoOptionsFound = (cov_1bxywyv02a().s[169]++, (cov_1bxywyv02a().b[55][0]++, this.props.showNoOptionsFound) && (cov_1bxywyv02a().b[55][1]++, inputFocused) && (cov_1bxywyv02a().b[55][2]++, noOptionsAvailable) && (cov_1bxywyv02a().b[55][3]++, queryNotEmpty) && (cov_1bxywyv02a().b[55][4]++, queryLongEnough));
    var wrapperClassName = (cov_1bxywyv02a().s[170]++, cssNamespace + "__wrapper");
    var inputClassName = (cov_1bxywyv02a().s[171]++, cssNamespace + "__input");
    var componentIsFocused = (cov_1bxywyv02a().s[172]++, focused !== null);
    var inputModifierFocused = (cov_1bxywyv02a().s[173]++, componentIsFocused ? (cov_1bxywyv02a().b[56][0]++, " " + inputClassName + "--focused") : (cov_1bxywyv02a().b[56][1]++, ''));
    var inputModifierType = (cov_1bxywyv02a().s[174]++, this.props.showAllValues ? (cov_1bxywyv02a().b[57][0]++, " " + inputClassName + "--show-all-values") : (cov_1bxywyv02a().b[57][1]++, " " + inputClassName + "--default"));
    var dropdownArrowClassName = (cov_1bxywyv02a().s[175]++, cssNamespace + "__dropdown-arrow-down");
    var optionFocused = (cov_1bxywyv02a().s[176]++, (cov_1bxywyv02a().b[58][0]++, focused !== -1) && (cov_1bxywyv02a().b[58][1]++, focused !== null));
    var menuClassName = (cov_1bxywyv02a().s[177]++, cssNamespace + "__menu");
    var menuModifierDisplayMenu = (cov_1bxywyv02a().s[178]++, menuClassName + "--" + displayMenu);
    var menuIsVisible = (cov_1bxywyv02a().s[179]++, (cov_1bxywyv02a().b[59][0]++, menuOpen) || (cov_1bxywyv02a().b[59][1]++, showNoOptionsFound));
    var menuModifierVisibility = (cov_1bxywyv02a().s[180]++, menuClassName + "--" + (menuIsVisible ? (cov_1bxywyv02a().b[60][0]++, 'visible') : (cov_1bxywyv02a().b[60][1]++, 'hidden')));
    var optionClassName = (cov_1bxywyv02a().s[181]++, cssNamespace + "__option");
    var hintClassName = (cov_1bxywyv02a().s[182]++, cssNamespace + "__hint");
    var selectedOptionText = (cov_1bxywyv02a().s[183]++, this.templateInputValue(options[selected]));
    var optionBeginsWithQuery = (cov_1bxywyv02a().s[184]++, (cov_1bxywyv02a().b[61][0]++, selectedOptionText) && (cov_1bxywyv02a().b[61][1]++, selectedOptionText.toLowerCase().indexOf(query.toLowerCase()) === 0));
    var hintValue = (cov_1bxywyv02a().s[185]++, (cov_1bxywyv02a().b[63][0]++, optionBeginsWithQuery) && (cov_1bxywyv02a().b[63][1]++, autoselect) ? (cov_1bxywyv02a().b[62][0]++, query + selectedOptionText.substr(query.length)) : (cov_1bxywyv02a().b[62][1]++, ''));
    var assistiveHintID = (cov_1bxywyv02a().s[186]++, id + '__assistiveHint');
    var ariaDescribedProp = (cov_1bxywyv02a().s[187]++, ariaHint ? (cov_1bxywyv02a().b[64][0]++, {
      'aria-describedby': assistiveHintID
    }) : (cov_1bxywyv02a().b[64][1]++, null));
    var ariaActivedescendantProp = (cov_1bxywyv02a().s[188]++, optionFocused ? (cov_1bxywyv02a().b[65][0]++, {
      'aria-activedescendant': id + "__option--" + focused
    }) : (cov_1bxywyv02a().b[65][1]++, null));
    var dropdownArrow;

    // we only need a dropdown arrow if showAllValues is set to a truthy value
    cov_1bxywyv02a().s[189]++;
    if (showAllValues) {
      cov_1bxywyv02a().b[66][0]++;
      cov_1bxywyv02a().s[190]++;
      dropdownArrow = dropdownArrowFactory({
        className: dropdownArrowClassName
      });

      // if the factory returns a string we'll render this as HTML (usage w/o (P)React)
      cov_1bxywyv02a().s[191]++;
      if (typeof dropdownArrow === 'string') {
        cov_1bxywyv02a().b[67][0]++;
        cov_1bxywyv02a().s[192]++;
        dropdownArrow = (0, _preact.createElement)("div", {
          className: cssNamespace + "__dropdown-arrow-down-wrapper",
          dangerouslySetInnerHTML: {
            __html: dropdownArrow
          }
        });
      } else {
        cov_1bxywyv02a().b[67][1]++;
      }
    } else {
      cov_1bxywyv02a().b[66][1]++;
    }
    cov_1bxywyv02a().s[193]++;
    return (0, _preact.createElement)("div", {
      className: wrapperClassName,
      onKeyDown: this.handleKeyDown
    }, (0, _preact.createElement)(_status["default"], {
      id: id,
      length: options.length,
      queryLength: query.length,
      minQueryLength: minLength,
      selectedOption: this.templateInputValue(options[selected]),
      selectedOptionIndex: selected,
      validChoiceMade: validChoiceMade,
      isInFocus: this.state.focused !== null,
      tQueryTooShort: tStatusQueryTooShort,
      tNoResults: tStatusNoResults,
      tSelectedOption: tStatusSelectedOption,
      tResults: tStatusResults
    }), (cov_1bxywyv02a().b[68][0]++, hintValue) && (cov_1bxywyv02a().b[68][1]++, (0, _preact.createElement)("span", null, (0, _preact.createElement)("input", {
      className: hintClassName,
      readonly: true,
      tabIndex: "-1",
      value: hintValue
    }))), (0, _preact.createElement)("input", _extends({
      "aria-expanded": menuOpen ? (cov_1bxywyv02a().b[69][0]++, 'true') : (cov_1bxywyv02a().b[69][1]++, 'false')
    }, ariaActivedescendantProp, {
      "aria-owns": id + "__listbox",
      "aria-autocomplete": this.hasAutoselect() ? (cov_1bxywyv02a().b[70][0]++, 'both') : (cov_1bxywyv02a().b[70][1]++, 'list')
    }, ariaDescribedProp, {
      autoComplete: "off",
      className: "" + inputClassName + inputModifierFocused + inputModifierType,
      id: id,
      onClick: function onClick(event) {
        cov_1bxywyv02a().f[41]++;
        cov_1bxywyv02a().s[194]++;
        return _this7.handleInputClick(event);
      },
      onBlur: this.handleInputBlur
    }, onChangeCrossLibrary(this.handleInputChange), {
      onFocus: this.handleInputFocus,
      name: name,
      placeholder: placeholder,
      ref: function ref(inputElement) {
        cov_1bxywyv02a().f[42]++;
        cov_1bxywyv02a().s[195]++;
        _this7.elementReferences[-1] = inputElement;
      },
      type: "text",
      role: "combobox",
      required: required,
      value: query
    })), dropdownArrow, (0, _preact.createElement)("ul", {
      className: menuClassName + " " + menuModifierDisplayMenu + " " + menuModifierVisibility,
      onMouseLeave: function onMouseLeave(event) {
        cov_1bxywyv02a().f[43]++;
        cov_1bxywyv02a().s[196]++;
        return _this7.handleListMouseLeave(event);
      },
      id: id + "__listbox",
      role: "listbox"
    }, options.map(function (option, index) {
      cov_1bxywyv02a().f[44]++;
      var showFocused = (cov_1bxywyv02a().s[197]++, focused === -1 ? (cov_1bxywyv02a().b[71][0]++, selected === index) : (cov_1bxywyv02a().b[71][1]++, focused === index));
      var optionModifierFocused = (cov_1bxywyv02a().s[198]++, (cov_1bxywyv02a().b[73][0]++, showFocused) && (cov_1bxywyv02a().b[73][1]++, hovered === null) ? (cov_1bxywyv02a().b[72][0]++, " " + optionClassName + "--focused") : (cov_1bxywyv02a().b[72][1]++, ''));
      var optionModifierOdd = (cov_1bxywyv02a().s[199]++, index % 2 ? (cov_1bxywyv02a().b[74][0]++, " " + optionClassName + "--odd") : (cov_1bxywyv02a().b[74][1]++, ''));
      var iosPosinsetHtml = (cov_1bxywyv02a().s[200]++, isIosDevice() ? (cov_1bxywyv02a().b[75][0]++, "<span id=" + id + "__option-suffix--" + index + " style=\"border:0;clip:rect(0 0 0 0);height:1px;" + 'marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;' + 'whiteSpace:nowrap;width:1px">' + (" " + (index + 1) + " of " + options.length + "</span>")) : (cov_1bxywyv02a().b[75][1]++, ''));
      cov_1bxywyv02a().s[201]++;
      return (0, _preact.createElement)("li", {
        "aria-selected": focused === index ? (cov_1bxywyv02a().b[76][0]++, 'true') : (cov_1bxywyv02a().b[76][1]++, 'false'),
        className: "" + optionClassName + optionModifierFocused + optionModifierOdd,
        dangerouslySetInnerHTML: {
          __html: _this7.templateSuggestion(option) + iosPosinsetHtml
        },
        id: id + "__option--" + index,
        key: index,
        onBlur: function onBlur(event) {
          cov_1bxywyv02a().f[45]++;
          cov_1bxywyv02a().s[202]++;
          return _this7.handleOptionBlur(event, index);
        },
        onClick: function onClick(event) {
          cov_1bxywyv02a().f[46]++;
          cov_1bxywyv02a().s[203]++;
          return _this7.handleOptionClick(event, index);
        },
        onMouseDown: _this7.handleOptionMouseDown,
        onMouseEnter: function onMouseEnter(event) {
          cov_1bxywyv02a().f[47]++;
          cov_1bxywyv02a().s[204]++;
          return _this7.handleOptionMouseEnter(event, index);
        },
        ref: function ref(optionEl) {
          cov_1bxywyv02a().f[48]++;
          cov_1bxywyv02a().s[205]++;
          _this7.elementReferences[index] = optionEl;
        },
        role: "option",
        tabIndex: "-1",
        "aria-posinset": index + 1,
        "aria-setsize": options.length
      });
    }), (cov_1bxywyv02a().b[77][0]++, showNoOptionsFound) && (cov_1bxywyv02a().b[77][1]++, (0, _preact.createElement)("li", {
      className: optionClassName + " " + optionClassName + "--no-results"
    }, tNoResults()))), (0, _preact.createElement)("span", {
      id: assistiveHintID,
      style: {
        display: 'none'
      }
    }, tAssistiveHint()));
  };
  return Autocomplete;
}(_preact.Component);
exports["default"] = Autocomplete;
Autocomplete.defaultProps = (cov_1bxywyv02a().s[9]++, {
  autoselect: false,
  cssNamespace: 'autocomplete',
  defaultValue: '',
  displayMenu: 'inline',
  minLength: 0,
  name: 'input-autocomplete',
  placeholder: '',
  onConfirm: function onConfirm() {
    cov_1bxywyv02a().f[3]++;
  },
  confirmOnBlur: true,
  showNoOptionsFound: true,
  showAllValues: false,
  required: false,
  tNoResults: function tNoResults() {
    cov_1bxywyv02a().f[4]++;
    cov_1bxywyv02a().s[10]++;
    return 'No results found';
  },
  tAssistiveHint: function tAssistiveHint() {
    cov_1bxywyv02a().f[5]++;
    cov_1bxywyv02a().s[11]++;
    return 'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.';
  },
  dropdownArrow: _dropdownArrowDown["default"]
});

/***/ }),

/***/ "./dropdown-arrow-down.js":
/*!********************************!*\
  !*** ./dropdown-arrow-down.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
function cov_192iwtkok3() {
  var path = "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/dropdown-arrow-down.js";
  var hash = "43b7dec6781c495ddc1c5d0ea94ed41f507b63ee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/dropdown-arrow-down.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 8,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 3,
            column: 27
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 8
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "43b7dec6781c495ddc1c5d0ea94ed41f507b63ee"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_192iwtkok3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_192iwtkok3();
cov_192iwtkok3().s[0]++;
/** @jsx createElement */

var DropdownArrowDown = function DropdownArrowDown(_ref) {
  var className = _ref.className;
  cov_192iwtkok3().f[0]++;
  cov_192iwtkok3().s[1]++;
  return (0, _preact.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    focusable: "false"
  }, (0, _preact.createElement)("g", {
    stroke: "none",
    fill: "none",
    "fill-rule": "evenodd"
  }, (0, _preact.createElement)("polygon", {
    fill: "#000000",
    points: "0 0 22 0 11 17"
  })));
};
var _default = DropdownArrowDown;
exports["default"] = _default;

/***/ }),

/***/ "./status.js":
/*!*******************!*\
  !*** ./status.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "../node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "../node_modules/core-js/modules/es.object.create.js");
exports.__esModule = true;
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/web.timers.js */ "../node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "../node_modules/core-js/modules/es.array.concat.js");
var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
function cov_293hbdrhm0() {
  var path = "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/status.js";
  var hash = "bb6389f3f7ce46e28cf8407e1bde5a2012602893";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/status.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "2": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 24
        }
      },
      "3": {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 7,
          column: 26
        }
      },
      "4": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "5": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 20
        }
      },
      "6": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 47
        }
      },
      "7": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 10,
          column: 47
        }
      },
      "8": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 41
        }
      },
      "9": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 25
        }
      },
      "10": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "11": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "12": {
        start: {
          line: 15,
          column: 17
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "13": {
        start: {
          line: 18,
          column: 29
        },
        end: {
          line: 18,
          column: 33
        }
      },
      "14": {
        start: {
          line: 21,
          column: 24
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "15": {
        start: {
          line: 22,
          column: 40
        },
        end: {
          line: 22,
          column: 98
        }
      },
      "16": {
        start: {
          line: 23,
          column: 22
        },
        end: {
          line: 23,
          column: 41
        }
      },
      "17": {
        start: {
          line: 24,
          column: 56
        },
        end: {
          line: 24,
          column: 116
        }
      },
      "18": {
        start: {
          line: 26,
          column: 20
        },
        end: {
          line: 29,
          column: 7
        }
      },
      "19": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 88
        }
      },
      "20": {
        start: {
          line: 35,
          column: 10
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "21": {
        start: {
          line: 41,
          column: 17
        },
        end: {
          line: 41,
          column: 21
        }
      },
      "22": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 47,
          column: 28
        }
      },
      "23": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 46,
          column: 7
        }
      },
      "24": {
        start: {
          line: 44,
          column: 30
        },
        end: {
          line: 44,
          column: 81
        }
      },
      "25": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 45,
          column: 96
        }
      },
      "26": {
        start: {
          line: 45,
          column: 37
        },
        end: {
          line: 45,
          column: 94
        }
      },
      "27": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 39
        }
      },
      "28": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 18
        }
      },
      "29": {
        start: {
          line: 67,
          column: 42
        },
        end: {
          line: 67,
          column: 52
        }
      },
      "30": {
        start: {
          line: 69,
          column: 26
        },
        end: {
          line: 69,
          column: 54
        }
      },
      "31": {
        start: {
          line: 70,
          column: 22
        },
        end: {
          line: 70,
          column: 34
        }
      },
      "32": {
        start: {
          line: 72,
          column: 34
        },
        end: {
          line: 74,
          column: 10
        }
      },
      "33": {
        start: {
          line: 76,
          column: 18
        },
        end: {
          line: 76,
          column: 22
        }
      },
      "34": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 83,
          column: 5
        }
      },
      "35": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 46
        }
      },
      "36": {
        start: {
          line: 79,
          column: 11
        },
        end: {
          line: 83,
          column: 5
        }
      },
      "37": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 28
        }
      },
      "38": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 82,
          column: 55
        }
      },
      "39": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 31
        }
      },
      "40": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 119,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 50
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 10
          }
        },
        loc: {
          start: {
            line: 5,
            column: 21
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 5
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 8,
            column: 18
          },
          end: {
            line: 8,
            column: 19
          }
        },
        loc: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 21
          }
        },
        loc: {
          start: {
            line: 22,
            column: 40
          },
          end: {
            line: 22,
            column: 98
          }
        },
        line: 22
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 17
          }
        },
        loc: {
          start: {
            line: 23,
            column: 22
          },
          end: {
            line: 23,
            column: 41
          }
        },
        line: 23
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 24,
            column: 21
          },
          end: {
            line: 24,
            column: 22
          }
        },
        loc: {
          start: {
            line: 24,
            column: 56
          },
          end: {
            line: 24,
            column: 116
          }
        },
        line: 24
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 25,
            column: 14
          },
          end: {
            line: 25,
            column: 15
          }
        },
        loc: {
          start: {
            line: 25,
            column: 49
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 25
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        loc: {
          start: {
            line: 40,
            column: 31
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 40
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 42,
            column: 41
          },
          end: {
            line: 42,
            column: 42
          }
        },
        loc: {
          start: {
            line: 42,
            column: 53
          },
          end: {
            line: 47,
            column: 5
          }
        },
        line: 42
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 45,
            column: 22
          },
          end: {
            line: 45,
            column: 23
          }
        },
        loc: {
          start: {
            line: 45,
            column: 37
          },
          end: {
            line: 45,
            column: 94
          }
        },
        line: 45
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 50,
            column: 3
          }
        },
        loc: {
          start: {
            line: 50,
            column: 53
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 50
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        loc: {
          start: {
            line: 54,
            column: 12
          },
          end: {
            line: 120,
            column: 3
          }
        },
        line: 54
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 47
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 47
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 29
          }
        }, {
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 12,
            column: 41
          }
        }],
        line: 12
      },
      "2": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 42
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 42
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 15
      },
      "3": {
        loc: {
          start: {
            line: 27,
            column: 16
          },
          end: {
            line: 27,
            column: 53
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 33
          },
          end: {
            line: 27,
            column: 41
          }
        }, {
          start: {
            line: 27,
            column: 44
          },
          end: {
            line: 27,
            column: 53
          }
        }],
        line: 27
      },
      "4": {
        loc: {
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 28,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 28,
            column: 29
          },
          end: {
            line: 28,
            column: 33
          }
        }, {
          start: {
            line: 28,
            column: 36
          },
          end: {
            line: 28,
            column: 41
          }
        }],
        line: 28
      },
      "5": {
        loc: {
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 46,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 43
      },
      "6": {
        loc: {
          start: {
            line: 44,
            column: 30
          },
          end: {
            line: 44,
            column: 81
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 30
          },
          end: {
            line: 44,
            column: 51
          }
        }, {
          start: {
            line: 44,
            column: 55
          },
          end: {
            line: 44,
            column: 81
          }
        }],
        line: 44
      },
      "7": {
        loc: {
          start: {
            line: 72,
            column: 34
          },
          end: {
            line: 74,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 73,
            column: 8
          },
          end: {
            line: 73,
            column: 68
          }
        }, {
          start: {
            line: 74,
            column: 8
          },
          end: {
            line: 74,
            column: 10
          }
        }],
        line: 72
      },
      "8": {
        loc: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 83,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 83,
            column: 5
          }
        }, {
          start: {
            line: 79,
            column: 11
          },
          end: {
            line: 83,
            column: 5
          }
        }],
        line: 77
      },
      "9": {
        loc: {
          start: {
            line: 79,
            column: 11
          },
          end: {
            line: 83,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 11
          },
          end: {
            line: 83,
            column: 5
          }
        }, {
          start: {
            line: 81,
            column: 11
          },
          end: {
            line: 83,
            column: 5
          }
        }],
        line: 79
      },
      "10": {
        loc: {
          start: {
            line: 108,
            column: 11
          },
          end: {
            line: 108,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 108,
            column: 46
          },
          end: {
            line: 108,
            column: 53
          }
        }, {
          start: {
            line: 108,
            column: 56
          },
          end: {
            line: 108,
            column: 58
          }
        }],
        line: 108
      },
      "11": {
        loc: {
          start: {
            line: 108,
            column: 12
          },
          end: {
            line: 108,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 108,
            column: 12
          },
          end: {
            line: 108,
            column: 21
          }
        }, {
          start: {
            line: 108,
            column: 25
          },
          end: {
            line: 108,
            column: 34
          }
        }, {
          start: {
            line: 108,
            column: 38
          },
          end: {
            line: 108,
            column: 42
          }
        }],
        line: 108
      },
      "12": {
        loc: {
          start: {
            line: 116,
            column: 11
          },
          end: {
            line: 116,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 116,
            column: 47
          },
          end: {
            line: 116,
            column: 54
          }
        }, {
          start: {
            line: 116,
            column: 57
          },
          end: {
            line: 116,
            column: 59
          }
        }],
        line: 116
      },
      "13": {
        loc: {
          start: {
            line: 116,
            column: 12
          },
          end: {
            line: 116,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 116,
            column: 12
          },
          end: {
            line: 116,
            column: 21
          }
        }, {
          start: {
            line: 116,
            column: 25
          },
          end: {
            line: 116,
            column: 34
          }
        }, {
          start: {
            line: 116,
            column: 38
          },
          end: {
            line: 116,
            column: 43
          }
        }],
        line: 116
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0, 0],
      "12": [0, 0],
      "13": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bb6389f3f7ce46e28cf8407e1bde5a2012602893"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_293hbdrhm0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_293hbdrhm0();
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
cov_293hbdrhm0().s[0]++;
/** @jsx createElement */

var debounce = function debounce(func, wait, immediate) {
  cov_293hbdrhm0().f[0]++;
  var timeout;
  cov_293hbdrhm0().s[1]++;
  return function () {
    cov_293hbdrhm0().f[1]++;
    var context = (cov_293hbdrhm0().s[2]++, this);
    var args = (cov_293hbdrhm0().s[3]++, arguments);
    cov_293hbdrhm0().s[4]++;
    var later = function later() {
      cov_293hbdrhm0().f[2]++;
      cov_293hbdrhm0().s[5]++;
      timeout = null;
      cov_293hbdrhm0().s[6]++;
      if (!immediate) {
        cov_293hbdrhm0().b[0][0]++;
        cov_293hbdrhm0().s[7]++;
        func.apply(context, args);
      } else {
        cov_293hbdrhm0().b[0][1]++;
      }
    };
    var callNow = (cov_293hbdrhm0().s[8]++, (cov_293hbdrhm0().b[1][0]++, immediate) && (cov_293hbdrhm0().b[1][1]++, !timeout));
    cov_293hbdrhm0().s[9]++;
    clearTimeout(timeout);
    cov_293hbdrhm0().s[10]++;
    timeout = setTimeout(later, wait);
    cov_293hbdrhm0().s[11]++;
    if (callNow) {
      cov_293hbdrhm0().b[2][0]++;
      cov_293hbdrhm0().s[12]++;
      func.apply(context, args);
    } else {
      cov_293hbdrhm0().b[2][1]++;
    }
  };
};
var statusDebounceMillis = (cov_293hbdrhm0().s[13]++, 1400);
var Status = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Status, _Component);
  function Status() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = (cov_293hbdrhm0().s[20]++, {
      bump: false,
      debounced: false
    });
    return _this;
  }
  var _proto = Status.prototype;
  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    cov_293hbdrhm0().f[7]++;
    var that = (cov_293hbdrhm0().s[21]++, this);
    cov_293hbdrhm0().s[22]++;
    this.debounceStatusUpdate = debounce(function () {
      cov_293hbdrhm0().f[8]++;
      cov_293hbdrhm0().s[23]++;
      if (!that.state.debounced) {
        cov_293hbdrhm0().b[5][0]++;
        var shouldSilence = (cov_293hbdrhm0().s[24]++, (cov_293hbdrhm0().b[6][0]++, !that.props.isInFocus) || (cov_293hbdrhm0().b[6][1]++, that.props.validChoiceMade));
        cov_293hbdrhm0().s[25]++;
        that.setState(function (_ref) {
          var bump = _ref.bump;
          cov_293hbdrhm0().f[9]++;
          cov_293hbdrhm0().s[26]++;
          return {
            bump: !bump,
            debounced: true,
            silenced: shouldSilence
          };
        });
      } else {
        cov_293hbdrhm0().b[5][1]++;
      }
    }, statusDebounceMillis);
  };
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(_ref2) {
    var queryLength = _ref2.queryLength;
    cov_293hbdrhm0().f[10]++;
    cov_293hbdrhm0().s[27]++;
    this.setState({
      debounced: false
    });
  };
  _proto.render = function render() {
    cov_293hbdrhm0().f[11]++;
    var _ref3 = (cov_293hbdrhm0().s[28]++, this.props),
      id = _ref3.id,
      length = _ref3.length,
      queryLength = _ref3.queryLength,
      minQueryLength = _ref3.minQueryLength,
      selectedOption = _ref3.selectedOption,
      selectedOptionIndex = _ref3.selectedOptionIndex,
      tQueryTooShort = _ref3.tQueryTooShort,
      tNoResults = _ref3.tNoResults,
      tSelectedOption = _ref3.tSelectedOption,
      tResults = _ref3.tResults;
    var _ref4 = (cov_293hbdrhm0().s[29]++, this.state),
      bump = _ref4.bump,
      debounced = _ref4.debounced,
      silenced = _ref4.silenced;
    var queryTooShort = (cov_293hbdrhm0().s[30]++, queryLength < minQueryLength);
    var noResults = (cov_293hbdrhm0().s[31]++, length === 0);
    var contentSelectedOption = (cov_293hbdrhm0().s[32]++, selectedOption ? (cov_293hbdrhm0().b[7][0]++, tSelectedOption(selectedOption, length, selectedOptionIndex)) : (cov_293hbdrhm0().b[7][1]++, ''));
    var content = (cov_293hbdrhm0().s[33]++, null);
    cov_293hbdrhm0().s[34]++;
    if (queryTooShort) {
      cov_293hbdrhm0().b[8][0]++;
      cov_293hbdrhm0().s[35]++;
      content = tQueryTooShort(minQueryLength);
    } else {
      cov_293hbdrhm0().b[8][1]++;
      cov_293hbdrhm0().s[36]++;
      if (noResults) {
        cov_293hbdrhm0().b[9][0]++;
        cov_293hbdrhm0().s[37]++;
        content = tNoResults();
      } else {
        cov_293hbdrhm0().b[9][1]++;
        cov_293hbdrhm0().s[38]++;
        content = tResults(length, contentSelectedOption);
      }
    }
    cov_293hbdrhm0().s[39]++;
    this.debounceStatusUpdate();
    cov_293hbdrhm0().s[40]++;
    return (0, _preact.createElement)("div", {
      style: {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        marginBottom: '-1px',
        marginRight: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px'
      }
    }, (0, _preact.createElement)("div", {
      id: id + '__status--A',
      role: "status",
      "aria-atomic": "true",
      "aria-live": "polite"
    }, (cov_293hbdrhm0().b[11][0]++, !silenced) && (cov_293hbdrhm0().b[11][1]++, debounced) && (cov_293hbdrhm0().b[11][2]++, bump) ? (cov_293hbdrhm0().b[10][0]++, content) : (cov_293hbdrhm0().b[10][1]++, '')), (0, _preact.createElement)("div", {
      id: id + '__status--B',
      role: "status",
      "aria-atomic": "true",
      "aria-live": "polite"
    }, (cov_293hbdrhm0().b[13][0]++, !silenced) && (cov_293hbdrhm0().b[13][1]++, debounced) && (cov_293hbdrhm0().b[13][2]++, !bump) ? (cov_293hbdrhm0().b[12][0]++, content) : (cov_293hbdrhm0().b[12][1]++, '')));
  };
  return Status;
}(_preact.Component);
exports["default"] = Status;
Status.defaultProps = (cov_293hbdrhm0().s[14]++, {
  tQueryTooShort: function tQueryTooShort(minQueryLength) {
    cov_293hbdrhm0().f[3]++;
    cov_293hbdrhm0().s[15]++;
    return "Type in " + minQueryLength + " or more characters for results";
  },
  tNoResults: function tNoResults() {
    cov_293hbdrhm0().f[4]++;
    cov_293hbdrhm0().s[16]++;
    return 'No search results';
  },
  tSelectedOption: function tSelectedOption(selectedOption, length, index) {
    cov_293hbdrhm0().f[5]++;
    cov_293hbdrhm0().s[17]++;
    return selectedOption + " " + (index + 1) + " of " + length + " is highlighted";
  },
  tResults: function tResults(length, contentSelectedOption) {
    cov_293hbdrhm0().f[6]++;
    var words = (cov_293hbdrhm0().s[18]++, {
      result: length === 1 ? (cov_293hbdrhm0().b[3][0]++, 'result') : (cov_293hbdrhm0().b[3][1]++, 'results'),
      is: length === 1 ? (cov_293hbdrhm0().b[4][0]++, 'is') : (cov_293hbdrhm0().b[4][1]++, 'are')
    });
    cov_293hbdrhm0().s[19]++;
    return length + " " + words.result + " " + words.is + " available. " + contentSelectedOption;
  }
});

/***/ }),

/***/ "./wrapper.js":
/*!********************!*\
  !*** ./wrapper.js ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "../node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "../node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "../node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "../node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "../node_modules/core-js/modules/es.object.assign.js");
var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
var _autocomplete = _interopRequireDefault(__webpack_require__(/*! ./autocomplete */ "./autocomplete.js"));
function cov_h7qltkh24() {
  var path = "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/wrapper.js";
  var hash = "c8ba38772cf6748c75aadd4b55852fe76deb4b4e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/wrapper.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 69
        }
      },
      "1": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 67
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 59
        }
      },
      "3": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 57
        }
      },
      "4": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 67
        }
      },
      "5": {
        start: {
          line: 7,
          column: 25
        },
        end: {
          line: 7,
          column: 65
        }
      },
      "6": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "7": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 55
        }
      },
      "8": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 56
        }
      },
      "9": {
        start: {
          line: 14,
          column: 27
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "10": {
        start: {
          line: 14,
          column: 39
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "11": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "12": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 19
        }
      },
      "13": {
        start: {
          line: 18,
          column: 18
        },
        end: {
          line: 18,
          column: 89
        }
      },
      "14": {
        start: {
          line: 18,
          column: 37
        },
        end: {
          line: 18,
          column: 88
        }
      },
      "15": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 24
        }
      },
      "16": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "17": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 94
        }
      },
      "18": {
        start: {
          line: 24,
          column: 45
        },
        end: {
          line: 24,
          column: 92
        }
      },
      "19": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "20": {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 28,
          column: 157
        }
      },
      "21": {
        start: {
          line: 28,
          column: 99
        },
        end: {
          line: 28,
          column: 155
        }
      },
      "22": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 104
        }
      },
      "23": {
        start: {
          line: 29,
          column: 65
        },
        end: {
          line: 29,
          column: 103
        }
      },
      "24": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 34,
          column: 4
        }
      },
      "25": {
        start: {
          line: 32,
          column: 28
        },
        end: {
          line: 32,
          column: 151
        }
      },
      "26": {
        start: {
          line: 32,
          column: 97
        },
        end: {
          line: 32,
          column: 147
        }
      },
      "27": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 60
        }
      },
      "28": {
        start: {
          line: 33,
          column: 27
        },
        end: {
          line: 33,
          column: 58
        }
      },
      "29": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "30": {
        start: {
          line: 37,
          column: 19
        },
        end: {
          line: 37,
          column: 119
        }
      },
      "31": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 78
        }
      },
      "32": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 77
        }
      },
      "33": {
        start: {
          line: 41,
          column: 47
        },
        end: {
          line: 41,
          column: 77
        }
      },
      "34": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "35": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 47,
          column: 5
        }
      },
      "36": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 44,
          column: 34
        }
      },
      "37": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 69
        }
      },
      "38": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 49,
          column: 91
        }
      },
      "39": {
        start: {
          line: 49,
          column: 53
        },
        end: {
          line: 49,
          column: 91
        }
      },
      "40": {
        start: {
          line: 51,
          column: 18
        },
        end: {
          line: 51,
          column: 47
        }
      },
      "41": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 53,
          column: 105
        }
      },
      "42": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 58,
          column: 4
        }
      },
      "43": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 60,
          column: 59
        }
      },
      "44": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 61,
          column: 91
        }
      }
    },
    fnMap: {
      "0": {
        name: "accessibleAutocomplete",
        decl: {
          start: {
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 31
          }
        },
        loc: {
          start: {
            line: 4,
            column: 42
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 27
          },
          end: {
            line: 14,
            column: 28
          }
        },
        loc: {
          start: {
            line: 14,
            column: 39
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 39
          },
          end: {
            line: 14,
            column: 40
          }
        },
        loc: {
          start: {
            line: 14,
            column: 63
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 33
          }
        },
        loc: {
          start: {
            line: 18,
            column: 37
          },
          end: {
            line: 18,
            column: 88
          }
        },
        line: 18
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 46
          },
          end: {
            line: 23,
            column: 47
          }
        },
        loc: {
          start: {
            line: 23,
            column: 72
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 23
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 28,
            column: 88
          },
          end: {
            line: 28,
            column: 89
          }
        },
        loc: {
          start: {
            line: 28,
            column: 99
          },
          end: {
            line: 28,
            column: 155
          }
        },
        line: 28
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 29,
            column: 55
          },
          end: {
            line: 29,
            column: 56
          }
        },
        loc: {
          start: {
            line: 29,
            column: 65
          },
          end: {
            line: 29,
            column: 103
          }
        },
        line: 29
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 31,
            column: 70
          },
          end: {
            line: 31,
            column: 71
          }
        },
        loc: {
          start: {
            line: 31,
            column: 79
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 31
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 32,
            column: 87
          },
          end: {
            line: 32,
            column: 88
          }
        },
        loc: {
          start: {
            line: 32,
            column: 97
          },
          end: {
            line: 32,
            column: 147
          }
        },
        line: 32
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 69
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 69
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 59
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 59
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 67
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 67
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 7
      },
      "3": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 8
      },
      "4": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        }, {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 20,
            column: 3
          }
        }],
        line: 15
      },
      "5": {
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 94
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 94
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 24
      },
      "6": {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 27
      },
      "7": {
        loc: {
          start: {
            line: 28,
            column: 99
          },
          end: {
            line: 28,
            column: 155
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 99
          },
          end: {
            line: 28,
            column: 111
          }
        }, {
          start: {
            line: 28,
            column: 115
          },
          end: {
            line: 28,
            column: 155
          }
        }],
        line: 28
      },
      "8": {
        loc: {
          start: {
            line: 29,
            column: 65
          },
          end: {
            line: 29,
            column: 103
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 65
          },
          end: {
            line: 29,
            column: 83
          }
        }, {
          start: {
            line: 29,
            column: 87
          },
          end: {
            line: 29,
            column: 103
          }
        }],
        line: 29
      },
      "9": {
        loc: {
          start: {
            line: 31,
            column: 35
          },
          end: {
            line: 34,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 35
          },
          end: {
            line: 31,
            column: 65
          }
        }, {
          start: {
            line: 31,
            column: 70
          },
          end: {
            line: 34,
            column: 3
          }
        }],
        line: 31
      },
      "10": {
        loc: {
          start: {
            line: 32,
            column: 98
          },
          end: {
            line: 32,
            column: 136
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 98
          },
          end: {
            line: 32,
            column: 116
          }
        }, {
          start: {
            line: 32,
            column: 120
          },
          end: {
            line: 32,
            column: 136
          }
        }],
        line: 32
      },
      "11": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 60
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 60
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 33
      },
      "12": {
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 36
      },
      "13": {
        loc: {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 97
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 46
          }
        }, {
          start: {
            line: 36,
            column: 50
          },
          end: {
            line: 36,
            column: 97
          }
        }],
        line: 36
      },
      "14": {
        loc: {
          start: {
            line: 38,
            column: 40
          },
          end: {
            line: 38,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 40
          },
          end: {
            line: 38,
            column: 58
          }
        }, {
          start: {
            line: 38,
            column: 62
          },
          end: {
            line: 38,
            column: 78
          }
        }],
        line: 38
      },
      "15": {
        loc: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 77
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 77
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 41
      },
      "16": {
        loc: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 42
      },
      "17": {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        }, {
          start: {
            line: 45,
            column: 11
          },
          end: {
            line: 47,
            column: 5
          }
        }],
        line: 43
      },
      "18": {
        loc: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 91
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 91
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 49
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c8ba38772cf6748c75aadd4b55852fe76deb4b4e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_h7qltkh24 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_h7qltkh24();
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/** @jsx createElement */

function accessibleAutocomplete(options) {
  cov_h7qltkh24().f[0]++;
  cov_h7qltkh24().s[0]++;
  if (!options.element) {
    cov_h7qltkh24().b[0][0]++;
    cov_h7qltkh24().s[1]++;
    throw new Error('element is not defined');
  } else {
    cov_h7qltkh24().b[0][1]++;
  }
  cov_h7qltkh24().s[2]++;
  if (!options.id) {
    cov_h7qltkh24().b[1][0]++;
    cov_h7qltkh24().s[3]++;
    throw new Error('id is not defined');
  } else {
    cov_h7qltkh24().b[1][1]++;
  }
  cov_h7qltkh24().s[4]++;
  if (!options.source) {
    cov_h7qltkh24().b[2][0]++;
    cov_h7qltkh24().s[5]++;
    throw new Error('source is not defined');
  } else {
    cov_h7qltkh24().b[2][1]++;
  }
  cov_h7qltkh24().s[6]++;
  if (Array.isArray(options.source)) {
    cov_h7qltkh24().b[3][0]++;
    cov_h7qltkh24().s[7]++;
    options.source = createSimpleEngine(options.source);
  } else {
    cov_h7qltkh24().b[3][1]++;
  }
  cov_h7qltkh24().s[8]++;
  (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], options), options.element);
}
cov_h7qltkh24().s[9]++;
var createSimpleEngine = function createSimpleEngine(values) {
  cov_h7qltkh24().f[1]++;
  cov_h7qltkh24().s[10]++;
  return function (query, syncResults) {
    cov_h7qltkh24().f[2]++;
    cov_h7qltkh24().s[11]++;
    if (!query) {
      cov_h7qltkh24().b[4][0]++;
      cov_h7qltkh24().s[12]++;
      syncResults([]);
    } else {
      cov_h7qltkh24().b[4][1]++;
      var matches = (cov_h7qltkh24().s[13]++, values.filter(function (r) {
        cov_h7qltkh24().f[3]++;
        cov_h7qltkh24().s[14]++;
        return r.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }));
      cov_h7qltkh24().s[15]++;
      syncResults(matches);
    }
  };
};
cov_h7qltkh24().s[16]++;
accessibleAutocomplete.enhanceSelectElement = function (configurationOptions) {
  cov_h7qltkh24().f[4]++;
  cov_h7qltkh24().s[17]++;
  if (!configurationOptions.selectElement) {
    cov_h7qltkh24().b[5][0]++;
    cov_h7qltkh24().s[18]++;
    throw new Error('selectElement is not defined');
  } else {
    cov_h7qltkh24().b[5][1]++;
  }

  // Set defaults.
  cov_h7qltkh24().s[19]++;
  if (!configurationOptions.source) {
    cov_h7qltkh24().b[6][0]++;
    var availableOptions = (cov_h7qltkh24().s[20]++, [].filter.call(configurationOptions.selectElement.options, function (option) {
      cov_h7qltkh24().f[5]++;
      cov_h7qltkh24().s[21]++;
      return (cov_h7qltkh24().b[7][0]++, option.value) || (cov_h7qltkh24().b[7][1]++, configurationOptions.preserveNullOptions);
    }));
    cov_h7qltkh24().s[22]++;
    configurationOptions.source = availableOptions.map(function (option) {
      cov_h7qltkh24().f[6]++;
      cov_h7qltkh24().s[23]++;
      return (cov_h7qltkh24().b[8][0]++, option.textContent) || (cov_h7qltkh24().b[8][1]++, option.innerText);
    });
  } else {
    cov_h7qltkh24().b[6][1]++;
  }
  cov_h7qltkh24().s[24]++;
  configurationOptions.onConfirm = (cov_h7qltkh24().b[9][0]++, configurationOptions.onConfirm) || (cov_h7qltkh24().b[9][1]++, function (query) {
    cov_h7qltkh24().f[7]++;
    var requestedOption = (cov_h7qltkh24().s[25]++, [].filter.call(configurationOptions.selectElement.options, function (option) {
      cov_h7qltkh24().f[8]++;
      cov_h7qltkh24().s[26]++;
      return ((cov_h7qltkh24().b[10][0]++, option.textContent) || (cov_h7qltkh24().b[10][1]++, option.innerText)) === query;
    })[0]);
    cov_h7qltkh24().s[27]++;
    if (requestedOption) {
      cov_h7qltkh24().b[11][0]++;
      cov_h7qltkh24().s[28]++;
      requestedOption.selected = true;
    } else {
      cov_h7qltkh24().b[11][1]++;
    }
  });
  cov_h7qltkh24().s[29]++;
  if ((cov_h7qltkh24().b[13][0]++, configurationOptions.selectElement.value) || (cov_h7qltkh24().b[13][1]++, configurationOptions.defaultValue === undefined)) {
    cov_h7qltkh24().b[12][0]++;
    var option = (cov_h7qltkh24().s[30]++, configurationOptions.selectElement.options[configurationOptions.selectElement.options.selectedIndex]);
    cov_h7qltkh24().s[31]++;
    configurationOptions.defaultValue = (cov_h7qltkh24().b[14][0]++, option.textContent) || (cov_h7qltkh24().b[14][1]++, option.innerText);
  } else {
    cov_h7qltkh24().b[12][1]++;
  }
  cov_h7qltkh24().s[32]++;
  if (configurationOptions.name === undefined) {
    cov_h7qltkh24().b[15][0]++;
    cov_h7qltkh24().s[33]++;
    configurationOptions.name = '';
  } else {
    cov_h7qltkh24().b[15][1]++;
  }
  cov_h7qltkh24().s[34]++;
  if (configurationOptions.id === undefined) {
    cov_h7qltkh24().b[16][0]++;
    cov_h7qltkh24().s[35]++;
    if (configurationOptions.selectElement.id === undefined) {
      cov_h7qltkh24().b[17][0]++;
      cov_h7qltkh24().s[36]++;
      configurationOptions.id = '';
    } else {
      cov_h7qltkh24().b[17][1]++;
      cov_h7qltkh24().s[37]++;
      configurationOptions.id = configurationOptions.selectElement.id;
    }
  } else {
    cov_h7qltkh24().b[16][1]++;
  }
  cov_h7qltkh24().s[38]++;
  if (configurationOptions.autoselect === undefined) {
    cov_h7qltkh24().b[18][0]++;
    cov_h7qltkh24().s[39]++;
    configurationOptions.autoselect = true;
  } else {
    cov_h7qltkh24().b[18][1]++;
  }
  var element = (cov_h7qltkh24().s[40]++, document.createElement('div'));
  cov_h7qltkh24().s[41]++;
  configurationOptions.selectElement.parentNode.insertBefore(element, configurationOptions.selectElement);
  cov_h7qltkh24().s[42]++;
  accessibleAutocomplete(Object.assign({}, configurationOptions, {
    element: element
  }));
  cov_h7qltkh24().s[43]++;
  configurationOptions.selectElement.style.display = 'none';
  cov_h7qltkh24().s[44]++;
  configurationOptions.selectElement.id = configurationOptions.selectElement.id + '-select';
};
var _default = accessibleAutocomplete;
exports["default"] = _default;

/***/ }),

/***/ "../test/functional/dropdown-arrow-down.js":
/*!*************************************************!*\
  !*** ../test/functional/dropdown-arrow-down.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
var _dropdownArrowDown = _interopRequireDefault(__webpack_require__(/*! ../../src/dropdown-arrow-down */ "./dropdown-arrow-down.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* global before, beforeEach, after, describe, expect, it */
/** @jsx createElement */

describe('DropdownArrowDown', function () {
  describe('rendering', function () {
    var scratch;
    before(function () {
      scratch = document.createElement('div');
      (document.body || document.documentElement).appendChild(scratch);
    });
    beforeEach(function () {
      scratch.innerHTML = '';
    });
    after(function () {
      scratch.parentNode.removeChild(scratch);
      scratch = null;
    });
    describe('basic usage', function () {
      it('renders an svg', function () {
        (0, _preact.render)((0, _preact.createElement)(_dropdownArrowDown["default"], null), scratch);
        expect(scratch.innerHTML).to.contain('svg');
      });
      it('renders with a given custom class', function () {
        (0, _preact.render)((0, _preact.createElement)(_dropdownArrowDown["default"], {
          className: "foo"
        }), scratch);
        expect(scratch.innerHTML).to.contain('class="foo"');
      });

      // IE issue so the dropdown svg is not focusable (tabindex won't work for this)
      it('renders an svg where focusable attribute is false', function () {
        (0, _preact.render)((0, _preact.createElement)(_dropdownArrowDown["default"], null), scratch);
        expect(scratch.innerHTML).to.contain('focusable="false"');
      });
    });
  });
});

/***/ }),

/***/ "../test/functional/index.js":
/*!***********************************!*\
  !*** ../test/functional/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "../node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "../node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "../node_modules/core-js/modules/web.timers.js");
var _preact = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
var _autocomplete = _interopRequireDefault(__webpack_require__(/*! ../../src/autocomplete */ "./autocomplete.js"));
var _status = _interopRequireDefault(__webpack_require__(/*! ../../src/status */ "./status.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* global after, describe, before, beforeEach, expect, it */
/** @jsx createElement */

function suggest(query, syncResults) {
  var results = ['France', 'Germany', 'United Kingdom'];
  syncResults(query ? results.filter(function (result) {
    return result.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }) : []);
}
describe('Autocomplete', function () {
  describe('rendering', function () {
    var scratch;
    before(function () {
      scratch = document.createElement('div');
      (document.body || document.documentElement).appendChild(scratch);
    });
    beforeEach(function () {
      scratch.innerHTML = '';
    });
    after(function () {
      scratch.parentNode.removeChild(scratch);
      scratch = null;
    });
    describe('basic usage', function () {
      it('renders an input', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], null), scratch);
        expect(scratch.innerHTML).to.contain('input');
        expect(scratch.innerHTML).to.contain('class="autocomplete__input');
        expect(scratch.innerHTML).to.contain('class="autocomplete__menu');
        expect(scratch.innerHTML).to.contain('name="input-autocomplete"');
      });
      it('renders an input with a required attribute', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
          required: true
        }), scratch);
        expect(scratch.innerHTML).to.contain('required');
      });
      it('renders an input without a required attribute', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
          required: false
        }), scratch);
        expect(scratch.innerHTML).to.not.contain('required');
      });
      it('renders an input with a name attribute', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
          name: "bob"
        }), scratch);
        expect(scratch.innerHTML).to.contain('name="bob"');
      });
      it('renders an input with a custom CSS namespace', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
          cssNamespace: "bob"
        }), scratch);
        expect(scratch.innerHTML).to.contain('class="bob__input');
        expect(scratch.innerHTML).to.contain('class="bob__menu');
      });
      it('renders with an aria-expanded attribute', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
          required: true
        }), scratch);
        var wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0];
        var inputElement = wrapperElement.getElementsByTagName('input')[0];
        expect(inputElement.getAttribute('aria-expanded')).to.equal('false');
      });
      it('renders with an aria-describedby attribute', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
          id: "autocomplete-default"
        }), scratch);
        var wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0];
        var inputElement = wrapperElement.getElementsByTagName('input')[0];
        expect(inputElement.getAttribute('aria-describedby')).to.equal('autocomplete-default__assistiveHint');
      });
      describe('renders with an aria-autocomplete attribute', function () {
        it('of value "list", when autoselect is not enabled', function () {
          (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
            required: true
          }), scratch);
          var wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0];
          var inputElement = wrapperElement.getElementsByTagName('input')[0];
          expect(inputElement.getAttribute('aria-autocomplete')).to.equal('list');
        });
        it('of value "both", when autoselect is enabled', function () {
          (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
            required: true,
            autoselect: true
          }), scratch);
          var wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0];
          var inputElement = wrapperElement.getElementsByTagName('input')[0];
          expect(inputElement.getAttribute('aria-autocomplete')).to.equal('both');
        });
      });
      it('renders with the correct roles', function () {
        (0, _preact.render)((0, _preact.createElement)(_autocomplete["default"], {
          required: true
        }), scratch);
        var wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0];
        var inputElement = wrapperElement.getElementsByTagName('input')[0];
        var dropdownElement = wrapperElement.getElementsByTagName('ul')[0];
        expect(inputElement.getAttribute('role')).to.equal('combobox', 'input should have combobox role');
        expect(dropdownElement.getAttribute('role')).to.equal('listbox', 'menu should have listbox role');
      });
    });
  });
  describe('behaviour', function () {
    var autocomplete, autoselectAutocomplete, onConfirmAutocomplete, onConfirmTriggered, autoselectOnSelectAutocomplete, confirmOnBlurAutocomplete;
    beforeEach(function () {
      autocomplete = new _autocomplete["default"](Object.assign({}, _autocomplete["default"].defaultProps, {
        id: 'test',
        source: suggest
      }));
      autoselectAutocomplete = new _autocomplete["default"](Object.assign({}, _autocomplete["default"].defaultProps, {
        autoselect: true,
        id: 'test2',
        source: suggest
      }));
      onConfirmTriggered = false;
      onConfirmAutocomplete = new _autocomplete["default"](Object.assign({}, _autocomplete["default"].defaultProps, {
        id: 'test3',
        onConfirm: function onConfirm() {
          onConfirmTriggered = true;
        },
        source: suggest
      }));
      autoselectOnSelectAutocomplete = new _autocomplete["default"](Object.assign({}, _autocomplete["default"].defaultProps, {
        autoselect: true,
        id: 'test4',
        onConfirm: function onConfirm() {
          onConfirmTriggered = true;
        },
        source: suggest
      }));
      confirmOnBlurAutocomplete = new _autocomplete["default"](Object.assign({}, _autocomplete["default"].defaultProps, {
        id: 'test5',
        onConfirm: function onConfirm() {
          onConfirmTriggered = true;
        },
        confirmOnBlur: false,
        source: suggest
      }));
    });
    describe('typing', function () {
      it('searches for options', function () {
        autocomplete.handleInputChange({
          target: {
            value: 'f'
          }
        });
        expect(autocomplete.state.menuOpen).to.equal(true);
        expect(autocomplete.state.options).to.contain('France');
      });
      it('hides menu when no options are available', function () {
        autocomplete.handleInputChange({
          target: {
            value: 'aa'
          }
        });
        expect(autocomplete.state.menuOpen).to.equal(false);
        expect(autocomplete.state.options.length).to.equal(0);
      });
      it('hides menu when query becomes empty', function () {
        autocomplete.setState({
          query: 'f',
          options: ['France'],
          menuOpen: true
        });
        autocomplete.handleInputChange({
          target: {
            value: ''
          }
        });
        expect(autocomplete.state.menuOpen).to.equal(false);
      });
      it('removes the aria-describedby attribute when query is non empty', function () {
        expect(autocomplete.state.ariaHint).to.equal(true);
        autocomplete.handleInputChange({
          target: {
            value: 'a'
          }
        });
        expect(autocomplete.state.ariaHint).to.equal(false);
        autocomplete.handleInputChange({
          target: {
            value: ''
          }
        });
        expect(autocomplete.state.ariaHint).to.equal(true);
      });
      describe('with minLength', function () {
        beforeEach(function () {
          autocomplete = new _autocomplete["default"](Object.assign({}, _autocomplete["default"].defaultProps, {
            id: 'test',
            source: suggest,
            minLength: 2
          }));
        });
        it('doesn\'t search when under limit', function () {
          autocomplete.handleInputChange({
            target: {
              value: 'f'
            }
          });
          expect(autocomplete.state.menuOpen).to.equal(false);
          expect(autocomplete.state.options.length).to.equal(0);
        });
        it('does search when over limit', function () {
          autocomplete.handleInputChange({
            target: {
              value: 'fra'
            }
          });
          expect(autocomplete.state.menuOpen).to.equal(true);
          expect(autocomplete.state.options).to.contain('France');
        });
        it('hides results when going under limit', function () {
          autocomplete.setState({
            menuOpen: true,
            query: 'fr',
            options: ['France']
          });
          autocomplete.handleInputChange({
            target: {
              value: 'f'
            }
          });
          expect(autocomplete.state.menuOpen).to.equal(false);
          expect(autocomplete.state.options.length).to.equal(0);
        });
      });
    });
    describe('focusing input', function () {
      describe('when no query is present', function () {
        it('does not display menu', function () {
          autocomplete.setState({
            query: ''
          });
          autocomplete.handleInputFocus();
          expect(autocomplete.state.menuOpen).to.equal(false);
          expect(autocomplete.state.focused).to.equal(-1);
        });
      });
      describe('when a non-matched query is present (no matching options are present)', function () {
        it('does not display menu', function () {
          autocomplete.setState({
            query: 'f'
          });
          autocomplete.handleInputFocus();
          expect(autocomplete.state.menuOpen).to.equal(false);
          expect(autocomplete.state.focused).to.equal(-1);
        });
      });
      describe('when a matched query is present (matching options exist)', function () {
        describe('and no user choice has yet been made', function () {
          it('displays menu', function () {
            autocomplete.setState({
              menuOpen: false,
              options: ['France'],
              query: 'fr',
              focused: null,
              selected: null,
              validChoiceMade: false
            });
            autocomplete.handleInputFocus();
            expect(autocomplete.state.focused).to.equal(-1);
            expect(autocomplete.state.menuOpen).to.equal(true);
            expect(autocomplete.state.selected).to.equal(-1);
          });
        });
        describe('and a user choice HAS been made', function () {
          it('does not display menu', function () {
            autocomplete.setState({
              menuOpen: false,
              options: ['France'],
              query: 'fr',
              focused: null,
              selected: null,
              validChoiceMade: true
            });
            autocomplete.handleInputFocus();
            expect(autocomplete.state.focused).to.equal(-1);
            expect(autocomplete.state.menuOpen).to.equal(false);
          });
        });
      });
      describe('with option selected', function () {
        it('leaves menu open, does not change query', function () {
          autocomplete.setState({
            menuOpen: true,
            options: ['France'],
            query: 'fr',
            focused: 0,
            selected: 0
          });
          autocomplete.handleInputFocus();
          expect(autocomplete.state.focused).to.equal(-1);
          expect(autocomplete.state.menuOpen).to.equal(true);
          expect(autocomplete.state.query).to.equal('fr');
        });
      });
      describe('with defaultValue', function () {
        beforeEach(function () {
          autocomplete = new _autocomplete["default"](Object.assign({}, _autocomplete["default"].defaultProps, {
            defaultValue: 'France',
            id: 'test',
            source: suggest
          }));
        });
        it('is prefilled', function () {
          expect(autocomplete.state.options.length).to.equal(1);
          expect(autocomplete.state.options[0]).to.equal('France');
          expect(autocomplete.state.query).to.equal('France');
        });
      });
    });
    describe('blurring input', function () {
      it('unfocuses component', function () {
        autocomplete.setState({
          menuOpen: true,
          options: ['France'],
          query: 'fr',
          focused: -1,
          selected: -1
        });
        autocomplete.handleInputBlur({
          relatedTarget: null
        });
        expect(autocomplete.state.focused).to.equal(null);
        expect(autocomplete.state.menuOpen).to.equal(false);
        expect(autocomplete.state.query).to.equal('fr');
      });
      describe('with autoselect and onConfirm', function () {
        it('unfocuses component, updates query, triggers onConfirm', function () {
          autoselectOnSelectAutocomplete.setState({
            menuOpen: true,
            options: ['France'],
            query: 'fr',
            focused: -1,
            selected: 0
          });
          autoselectOnSelectAutocomplete.handleInputBlur({
            target: 'mock',
            relatedTarget: 'relatedMock'
          }, 0);
          expect(autoselectOnSelectAutocomplete.state.focused).to.equal(null);
          expect(autoselectOnSelectAutocomplete.state.menuOpen).to.equal(false);
          expect(autoselectOnSelectAutocomplete.state.query).to.equal('France');
          expect(onConfirmTriggered).to.equal(true);
        });
      });
      describe('with confirmOnBlur false', function () {
        it('unfocuses component, does not touch query, does not trigger onConfirm', function () {
          confirmOnBlurAutocomplete.setState({
            menuOpen: true,
            options: ['France'],
            query: 'fr',
            focused: -1,
            selected: 0
          });
          confirmOnBlurAutocomplete.handleInputBlur({
            target: 'mock',
            relatedTarget: 'relatedMock'
          }, 0);
          expect(confirmOnBlurAutocomplete.state.focused).to.equal(null);
          expect(confirmOnBlurAutocomplete.state.menuOpen).to.equal(false);
          expect(confirmOnBlurAutocomplete.state.query).to.equal('fr');
          expect(onConfirmTriggered).to.equal(false);
        });
      });
    });
    describe('focusing option', function () {
      it('sets the option as focused', function () {
        autocomplete.setState({
          options: ['France']
        });
        autocomplete.handleOptionFocus(0);
        expect(autocomplete.state.focused).to.equal(0);
      });
    });
    describe('focusing out option', function () {
      describe('with input selected', function () {
        it('unfocuses component, does not change query', function () {
          autocomplete.setState({
            menuOpen: true,
            options: ['France'],
            query: 'fr',
            focused: 0,
            selected: -1
          });
          autocomplete.handleOptionBlur({
            target: 'mock',
            relatedTarget: 'relatedMock'
          }, 0);
          expect(autocomplete.state.focused).to.equal(null);
          expect(autocomplete.state.menuOpen).to.equal(false);
          expect(autocomplete.state.query).to.equal('fr');
        });
      });
      describe('with option selected', function () {
        describe('with confirmOnBlur true', function () {
          it('unfocuses component, updates query', function () {
            autocomplete.setState({
              menuOpen: true,
              options: ['France'],
              query: 'fr',
              focused: 0,
              selected: 0
            });
            autocomplete.handleOptionBlur({
              target: 'mock',
              relatedTarget: 'relatedMock'
            }, 0);
            expect(autocomplete.state.focused).to.equal(null);
            expect(autocomplete.state.menuOpen).to.equal(false);
            expect(autocomplete.state.query).to.equal('France');
          });
        });
        describe('with confirmOnBlur false', function () {
          it('unfocuses component, does not update query', function () {
            confirmOnBlurAutocomplete.setState({
              menuOpen: true,
              options: ['France'],
              query: 'fr',
              focused: 0,
              selected: 0
            });
            confirmOnBlurAutocomplete.handleOptionBlur({
              target: 'mock',
              relatedTarget: 'relatedMock'
            }, 0);
            expect(confirmOnBlurAutocomplete.state.focused).to.equal(null);
            expect(confirmOnBlurAutocomplete.state.menuOpen).to.equal(false);
            expect(confirmOnBlurAutocomplete.state.query).to.equal('fr');
          });
        });
      });
    });
    describe('hovering option', function () {
      it('sets the option as hovered, does not change focused, does not change selected', function () {
        autocomplete.setState({
          options: ['France'],
          hovered: null,
          focused: -1,
          selected: -1
        });
        autocomplete.handleOptionMouseEnter({}, 0);
        expect(autocomplete.state.hovered).to.equal(0);
        expect(autocomplete.state.focused).to.equal(-1);
        expect(autocomplete.state.selected).to.equal(-1);
      });
    });
    describe('hovering out option', function () {
      it('sets focus back on selected, sets hovered to null', function () {
        autocomplete.setState({
          options: ['France'],
          hovered: 0,
          focused: -1,
          selected: -1
        });
        autocomplete.handleListMouseLeave({
          toElement: 'mock'
        }, 0);
        expect(autocomplete.state.hovered).to.equal(null);
        expect(autocomplete.state.focused).to.equal(-1);
        expect(autocomplete.state.selected).to.equal(-1);
      });
    });
    describe('up key', function () {
      it('focuses previous element', function () {
        autocomplete.setState({
          menuOpen: true,
          options: ['France'],
          focused: 0
        });
        autocomplete.handleKeyDown({
          preventDefault: function preventDefault() {},
          keyCode: 38
        });
        expect(autocomplete.state.focused).to.equal(-1);
      });
    });
    describe('down key', function () {
      describe('0 options available', function () {
        it('does nothing', function () {
          autocomplete.setState({
            menuOpen: false,
            options: [],
            focused: -1
          });
          var stateBefore = autocomplete.state;
          autocomplete.handleKeyDown({
            preventDefault: function preventDefault() {},
            keyCode: 40
          });
          expect(autocomplete.state).to.equal(stateBefore);
        });
      });
      describe('1 option available', function () {
        it('focuses next element', function () {
          autocomplete.setState({
            menuOpen: true,
            options: ['France'],
            focused: -1,
            selected: -1
          });
          autocomplete.handleKeyDown({
            preventDefault: function preventDefault() {},
            keyCode: 40
          });
          expect(autocomplete.state.focused).to.equal(0);
          expect(autocomplete.state.selected).to.equal(0);
        });
      });
      describe('2 or more option available', function () {
        it('focuses next element', function () {
          autocomplete.setState({
            menuOpen: true,
            options: ['France', 'Germany'],
            focused: 0,
            selected: 0
          });
          autocomplete.handleKeyDown({
            preventDefault: function preventDefault() {},
            keyCode: 40
          });
          expect(autocomplete.state.focused).to.equal(1);
          expect(autocomplete.state.selected).to.equal(1);
        });
      });
      describe('autoselect', function () {
        describe('0 options available', function () {
          it('does nothing', function () {
            autoselectAutocomplete.setState({
              menuOpen: false,
              options: [],
              focused: -1,
              selected: -1
            });
            var stateBefore = autoselectAutocomplete.state;
            autoselectAutocomplete.handleKeyDown({
              preventDefault: function preventDefault() {},
              keyCode: 40
            });
            expect(autoselectAutocomplete.state).to.equal(stateBefore);
          });
        });
        describe('1 option available', function () {
          it('does nothing', function () {
            autoselectAutocomplete.setState({
              menuOpen: true,
              options: ['France'],
              focused: -1,
              selected: 0
            });
            var stateBefore = autoselectAutocomplete.state;
            autoselectAutocomplete.handleKeyDown({
              preventDefault: function preventDefault() {},
              keyCode: 40
            });
            expect(autoselectAutocomplete.state).to.equal(stateBefore);
          });
        });
        describe('2 or more option available', function () {
          it('on input, focuses second element', function () {
            autoselectAutocomplete.setState({
              menuOpen: true,
              options: ['France', 'Germany'],
              focused: -1,
              selected: 0
            });
            autoselectAutocomplete.handleKeyDown({
              preventDefault: function preventDefault() {},
              keyCode: 40
            });
            expect(autoselectAutocomplete.state.focused).to.equal(1);
            expect(autoselectAutocomplete.state.selected).to.equal(1);
          });
        });
      });
    });
    describe('escape key', function () {
      it('unfocuses component', function () {
        autocomplete.setState({
          menuOpen: true,
          options: ['France'],
          focused: -1
        });
        autocomplete.handleKeyDown({
          preventDefault: function preventDefault() {},
          keyCode: 27
        });
        expect(autocomplete.state.menuOpen).to.equal(false);
        expect(autocomplete.state.focused).to.equal(null);
      });
    });
    describe('enter key', function () {
      describe('on an option', function () {
        it('prevents default, closes the menu, sets the query, focuses the input, triggers onConfirm', function () {
          var preventedDefault = false;
          onConfirmAutocomplete.setState({
            menuOpen: true,
            options: ['France'],
            focused: 0,
            selected: 0
          });
          onConfirmAutocomplete.handleKeyDown({
            preventDefault: function preventDefault() {
              preventedDefault = true;
            },
            keyCode: 13
          });
          expect(onConfirmAutocomplete.state.menuOpen).to.equal(false);
          expect(onConfirmAutocomplete.state.query).to.equal('France');
          expect(onConfirmAutocomplete.state.focused).to.equal(-1);
          expect(onConfirmAutocomplete.state.selected).to.equal(-1);
          expect(preventedDefault).to.equal(true);
          expect(onConfirmTriggered).to.equal(true);
        });
      });
      describe('on the input', function () {
        describe('with menu opened', function () {
          it('prevents default, does nothing', function () {
            var preventedDefault = false;
            autocomplete.setState({
              menuOpen: true,
              options: [],
              query: 'asd',
              focused: -1,
              selected: -1
            });
            var stateBefore = autocomplete.state;
            autocomplete.handleKeyDown({
              preventDefault: function preventDefault() {
                preventedDefault = true;
              },
              keyCode: 13
            });
            expect(autocomplete.state).to.equal(stateBefore);
            expect(preventedDefault).to.equal(true);
          });
        });
        describe('with menu closed', function () {
          it('bubbles, does not prevent default', function () {
            var preventedDefault = false;
            autocomplete.setState({
              menuOpen: false,
              options: ['France'],
              focused: -1,
              selected: -1
            });
            var stateBefore = autocomplete.state;
            autocomplete.handleKeyDown({
              preventDefault: function preventDefault() {
                preventedDefault = true;
              },
              keyCode: 13
            });
            expect(autocomplete.state).to.equal(stateBefore);
            expect(preventedDefault).to.equal(false);
          });
        });
        describe('autoselect', function () {
          it('closes the menu, selects the first option, keeps input focused', function () {
            autoselectAutocomplete.setState({
              menuOpen: true,
              options: ['France'],
              focused: -1,
              selected: 0
            });
            autoselectAutocomplete.handleKeyDown({
              preventDefault: function preventDefault() {},
              keyCode: 13
            });
            expect(autoselectAutocomplete.state.menuOpen).to.equal(false);
            expect(autoselectAutocomplete.state.query).to.equal('France');
            expect(autoselectAutocomplete.state.focused).to.equal(-1);
            expect(autoselectAutocomplete.state.selected).to.equal(-1);
          });
        });
      });
    });
    describe('space key', function () {
      describe('on an option', function () {
        it('prevents default, closes the menu, sets the query, focuses the input, triggers onConfirm', function () {
          var preventedDefault = false;
          onConfirmAutocomplete.setState({
            menuOpen: true,
            options: ['France'],
            focused: 0,
            selected: 0
          });
          onConfirmAutocomplete.handleKeyDown({
            preventDefault: function preventDefault() {
              preventedDefault = true;
            },
            keyCode: 32
          });
          expect(onConfirmAutocomplete.state.menuOpen).to.equal(false);
          expect(onConfirmAutocomplete.state.query).to.equal('France');
          expect(onConfirmAutocomplete.state.focused).to.equal(-1);
          expect(onConfirmAutocomplete.state.selected).to.equal(-1);
          expect(preventedDefault).to.equal(true);
          expect(onConfirmTriggered).to.equal(true);
        });
      });
    });
    describe('an unrecognised key', function () {
      it('does nothing', function () {
        autocomplete.setState({
          menuOpen: true,
          options: ['France'],
          focused: 0,
          selected: 0
        });
        autocomplete.elementReferences[-1] = 'input element';
        autocomplete.handleKeyDown({
          target: 'not the input element',
          keyCode: 4242
        });
        expect(autocomplete.state.focused).to.equal(0);
        expect(autocomplete.state.selected).to.equal(0);
      });
    });
    describe('derived state', function () {
      it('initially assumes no valid choice on each new input', function () {
        autocomplete.handleInputChange({
          target: {
            value: 'F'
          }
        });
        expect(autocomplete.state.validChoiceMade).to.equal(false);
      });
      describe('identifies that the user has made a valid choice', function () {
        it('when an option is actively clicked', function () {
          autocomplete.setState({
            query: 'f',
            options: ['France'],
            validChoiceMade: false
          });
          autocomplete.handleOptionClick({}, 0);
          expect(autocomplete.state.validChoiceMade).to.equal(true);
        });
        it('when the input is blurred, autoselect is disabled, and the current query exactly matches an option', function () {
          autocomplete.setState({
            query: 'France',
            options: ['France'],
            validChoiceMade: false
          });
          autocomplete.handleComponentBlur({});
          expect(autocomplete.state.validChoiceMade).to.equal(true);
        });
        it('when in the same scenario, but the match differs only by case sensitivity', function () {
          autocomplete.setState({
            query: 'fraNCe',
            options: ['France'],
            validChoiceMade: false
          });
          autocomplete.handleComponentBlur({});
          expect(autocomplete.state.validChoiceMade).to.equal(true);
        });
        it('when the input is blurred, autoselect is enabled, and the current query results in at least one option', function () {
          autoselectAutocomplete.setState({
            options: ['France'],
            validChoiceMade: false
          });
          autoselectAutocomplete.handleInputChange({
            target: {
              value: 'France'
            }
          });
          autoselectAutocomplete.handleComponentBlur({});
          expect(autoselectAutocomplete.state.validChoiceMade).to.equal(true);
        });
      });
      describe('identifies that the user has not made a valid choice', function () {
        it('when the input is blurred, autoselect is disabled, and the current query does not match an option', function () {
          autocomplete.setState({
            query: 'Fracne',
            options: ['France'],
            validChoiceMade: false
          });
          autocomplete.handleComponentBlur({});
          expect(autocomplete.state.validChoiceMade).to.equal(false);
        });
        it('when the input is blurred, autoselect is enabled, but no options exist for the current query', function () {
          autoselectAutocomplete.setState({
            options: [],
            validChoiceMade: false
          });
          autoselectAutocomplete.handleInputChange({
            target: {
              value: 'gpvx'
            }
          });
          autoselectAutocomplete.handleComponentBlur({});
          expect(autoselectAutocomplete.state.validChoiceMade).to.equal(false);
        });
      });
      describe('identifies that the valid choice situation has changed', function () {
        it('when the user amends a previously matched query such that it no longer matches an option', function () {
          autocomplete.setState({
            query: 'France',
            options: ['France'],
            validChoiceMade: false
          });
          autocomplete.handleComponentBlur({});
          expect(autocomplete.state.validChoiceMade).to.equal(true);
          autocomplete.handleInputChange({
            target: {
              value: 'Francey'
            }
          });
          autocomplete.handleComponentBlur({});
          expect(autocomplete.state.validChoiceMade).to.equal(false);
          autocomplete.handleInputChange({
            target: {
              value: 'France'
            }
          });
          autocomplete.handleComponentBlur({});
          expect(autocomplete.state.validChoiceMade).to.equal(true);
          autocomplete.handleInputChange({
            target: {
              value: 'Franc'
            }
          });
          autocomplete.handleComponentBlur({});
          expect(autocomplete.state.validChoiceMade).to.equal(false);
        });
      });
    });
  });
});
describe('Status', function () {
  describe('rendering', function () {
    var scratch;
    before(function () {
      scratch = document.createElement('div');
      (document.body || document.documentElement).appendChild(scratch);
    });
    beforeEach(function () {
      scratch.innerHTML = '';
    });
    after(function () {
      scratch.parentNode.removeChild(scratch);
      scratch = null;
    });
    it('renders a pair of aria live regions', function () {
      (0, _preact.render)((0, _preact.createElement)(_status["default"], null), scratch);
      expect(scratch.innerHTML).to.contain('div');
      var wrapperElement = scratch.getElementsByTagName('div')[0];
      var ariaLiveA = wrapperElement.getElementsByTagName('div')[0];
      var ariaLiveB = wrapperElement.getElementsByTagName('div')[1];
      expect(ariaLiveA.getAttribute('role')).to.equal('status', 'first aria live region should be marked as role=status');
      expect(ariaLiveA.getAttribute('aria-atomic')).to.equal('true', 'first aria live region should be marked as atomic');
      expect(ariaLiveA.getAttribute('aria-live')).to.equal('polite', 'first aria live region should be marked as polite');
      expect(ariaLiveB.getAttribute('role')).to.equal('status', 'second aria live region should be marked as role=status');
      expect(ariaLiveB.getAttribute('aria-atomic')).to.equal('true', 'second aria live region should be marked as atomic');
      expect(ariaLiveB.getAttribute('aria-live')).to.equal('polite', 'second aria live region should be marked as polite');
    });
    describe('behaviour', function () {
      describe('silences aria live announcement', function () {
        it('when a valid choice has been made and the input has focus', function (done) {
          var status = new _status["default"](Object.assign({}, _status["default"].defaultProps, {
            validChoiceMade: true,
            isInFocus: true
          }));
          status.componentWillMount();
          status.render();
          setTimeout(function () {
            expect(status.state.silenced).to.equal(true);
            done();
          }, 1500);
        });
        it('when the input no longer has focus', function (done) {
          var status = new _status["default"](Object.assign({}, _status["default"].defaultProps, {
            validChoiceMade: false,
            isInFocus: false
          }));
          status.componentWillMount();
          status.render();
          setTimeout(function () {
            expect(status.state.silenced).to.equal(true);
            done();
          }, 1500);
        });
      });
      describe('does not silence aria live announcement', function () {
        it('when a valid choice has not been made and the input has focus', function (done) {
          var status = new _status["default"](Object.assign({}, _status["default"].defaultProps, {
            validChoiceMade: false,
            isInFocus: true
          }));
          status.componentWillMount();
          status.render();
          setTimeout(function () {
            expect(status.state.silenced).to.equal(false);
            done();
          }, 1500);
        });
      });
    });
  });
});

/***/ }),

/***/ "../test/functional/wrapper.js":
/*!*************************************!*\
  !*** ../test/functional/wrapper.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.function.name.js */ "../node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "../node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "../node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "../node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "../node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../node_modules/core-js/modules/es.object.define-property.js");
var _wrapper = _interopRequireDefault(__webpack_require__(/*! ../../src/wrapper */ "./wrapper.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* global before, beforeEach, after, describe, expect, it */

var DEFAULT_OPTIONS = {
  '': 'Select',
  fr: 'France',
  de: 'Germany',
  gb: 'United Kingdom of Great Britain & Northern Ireland'
};
var injectSelectToEnhanceIntoDOM = function injectSelectToEnhanceIntoDOM(element, settings) {
  settings = settings || {};
  settings.options = settings.options || DEFAULT_OPTIONS;
  settings.id = settings.id !== undefined ? settings.id : 'location-picker-id';
  settings.name = settings.name !== undefined ? settings.name : 'location-picker-name';
  var $select = document.createElement('select');
  if (settings.id) {
    $select.id = settings.id;
  }
  if (settings.name) {
    $select.name = settings.name;
  }
  Object.keys(settings.options).map(function (optionKey) {
    var option = document.createElement('option');
    option.value = optionKey;
    option.text = settings.options[optionKey];
    option.selected = settings.selected === optionKey;
    return option;
  }).forEach(function (option) {
    return $select.appendChild(option);
  });
  element.appendChild($select);
  return $select;
};
describe('Wrapper', function () {
  var scratch;
  before(function () {
    scratch = document.createElement('div');
    (document.body || document.documentElement).appendChild(scratch);
  });
  beforeEach(function () {
    scratch.innerHTML = '';
  });
  after(function () {
    scratch.parentNode.removeChild(scratch);
    scratch = null;
  });
  it('throws an error when called on nonexistent element', function () {
    expect(_wrapper["default"].bind(null, {
      element: document.querySelector('#nothing-container'),
      id: 'scratch',
      source: function source() {}
    })).to["throw"]('element is not defined');
  });
  it('throws an error when called without an id ', function () {
    expect(_wrapper["default"].bind(null, {
      element: scratch,
      source: function source() {}
    })).to["throw"]('id is not defined');
  });
  it('throws an error when called without a source', function () {
    expect(_wrapper["default"].bind(null, {
      element: scratch,
      id: 'scratch'
    })).to["throw"]('source is not defined');
  });
  it('throws an error when called on nonexistent selectElement', function () {
    expect(_wrapper["default"].enhanceSelectElement.bind(null, {
      selectElement: document.querySelector('#nothing')
    })).to["throw"]('selectElement is not defined');
  });
  it('can enhance a select element', function () {
    var select = injectSelectToEnhanceIntoDOM(scratch);
    var id = select.id;
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    expect(autocompleteInstances.length).to.equal(1);
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    expect(autocompleteInput.tagName.toLowerCase()).to.equal('input');
    expect(autocompleteInput.id).to.equal(id);
  });
  it('uses the defaultValue setting to populate the input field if no option is selected', function () {
    var select = injectSelectToEnhanceIntoDOM(scratch, {
      selected: ''
    });
    _wrapper["default"].enhanceSelectElement({
      defaultValue: '',
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    expect(autocompleteInput.value).to.equal('');
  });
  it('uses the option label as the default input element value if an option is selected', function () {
    var select = injectSelectToEnhanceIntoDOM(scratch, {
      selected: 'de'
    });
    _wrapper["default"].enhanceSelectElement({
      defaultValue: '',
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    expect(autocompleteInput.value).to.equal('Germany');
  });
  it('gives the autocomplete element a blank name attribute by default', function () {
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    expect(autocompleteInput.name).to.equal('');
  });
  it('can define a name for the autocomplete element', function () {
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      name: 'location-picker-autocomplete',
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    expect(autocompleteInput.name).to.equal('location-picker-autocomplete');
  });
  it('does not include "null" options in autocomplete', function (done) {
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');

    // Using setTimeouts here since changes in values take a while to reflect in lists
    autocompleteInput.value = 'e';
    setTimeout(function () {
      var autocompleteOptions = autocompleteInstance.querySelectorAll('.autocomplete__option');
      expect(autocompleteOptions.length).to.equal(3);
      expect([].map.call(autocompleteOptions, function (o) {
        return o.textContent;
      })).not.to.contain('Select');
      done();
    }, 250);
  });
  it('includes "null" options in autocomplete if `preserveNullOptions` flag is true', function (done) {
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      preserveNullOptions: true,
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');

    // Using setTimeouts here since changes in values take a while to reflect in lists
    autocompleteInput.value = 'e';
    setTimeout(function () {
      var autocompleteOptions = autocompleteInstance.querySelectorAll('.autocomplete__option');
      expect(autocompleteOptions.length).to.equal(4);
      expect([].map.call(autocompleteOptions, function (o) {
        return o.textContent;
      })).to.contain('Select');
      done();
    }, 250);
  });
  it('has all options when typing', function (done) {
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    var autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option');

    // Using setTimeouts here since changes in values take a while to reflect in lists
    autocompleteInput.value = 'Fran';
    setTimeout(function () {
      expect(autocompleteOption.textContent).to.equal('France');
      autocompleteInput.value = 'Ger';
      setTimeout(function () {
        expect(autocompleteOption.textContent).to.equal('Germany');
        autocompleteInput.value = 'United';
        setTimeout(function () {
          var autocompleteHint = autocompleteInstance.querySelector('.autocomplete__hint');
          expect(autocompleteOption.textContent).to.equal('United Kingdom of Great Britain & Northern Ireland');
          expect(autocompleteHint.value).to.equal('United Kingdom of Great Britain & Northern Ireland');
          done();
        }, 250);
      }, 250);
    }, 250);
  });
  it('includes aria attributes on each option, to indicate position within the full set of list item elements', function (done) {
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    autocompleteInput.value = 'e';
    setTimeout(function () {
      var autocompleteOptions = autocompleteInstance.querySelectorAll('.autocomplete__option');
      expect(autocompleteOptions.length).to.equal(3);
      expect(autocompleteOptions[0].getAttribute('aria-posinset')).to.equal('1');
      expect(autocompleteOptions[0].getAttribute('aria-setsize')).to.equal('3');
      expect(autocompleteOptions[1].getAttribute('aria-posinset')).to.equal('2');
      expect(autocompleteOptions[1].getAttribute('aria-setsize')).to.equal('3');
      expect(autocompleteOptions[2].getAttribute('aria-posinset')).to.equal('3');
      expect(autocompleteOptions[2].getAttribute('aria-setsize')).to.equal('3');
      done();
    }, 250);
  });
  it('includes an explicit position suffix on each list item option when iOS is detected', function (done) {
    Object.defineProperty(__webpack_require__.g.navigator, 'userAgent', {
      value: 'iPhone AppleWebKit',
      configurable: true
    });
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    var autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option');
    autocompleteInput.value = 'Fran';
    setTimeout(function () {
      expect(autocompleteOption.textContent).to.equal('France 1 of 1');
      var iosSuffixSpan = autocompleteOption.querySelector('#location-picker-id__option-suffix--0');
      expect(iosSuffixSpan.textContent).to.equal(' 1 of 1');
      done();
    }, 250);
  });
  it('does not include a position suffix on each list item option, when iOS is not detected', function (done) {
    Object.defineProperty(__webpack_require__.g.navigator, 'userAgent', {
      value: 'definitely not an iDevice',
      configurable: true
    });
    var select = injectSelectToEnhanceIntoDOM(scratch);
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    var autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option');
    autocompleteInput.value = 'Fran';
    setTimeout(function () {
      expect(autocompleteOption.textContent).to.equal('France');
      var iosSuffixSpan = autocompleteOption.querySelector('#location-picker-id__option-suffix--0');
      expect(iosSuffixSpan).to.equal(null);
      done();
    }, 250);
  });
  it('onConfirm updates original select', function (done) {
    var select = injectSelectToEnhanceIntoDOM(scratch, {
      selected: 'de'
    });
    _wrapper["default"].enhanceSelectElement({
      selectElement: select
    });
    var autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper');
    var autocompleteInstance = autocompleteInstances[0];
    var autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input');
    var autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option');

    // Check the initial value of the original selectElement
    expect(select.value).to.equal('de');
    // Using setTimeouts here since changes in values take a while to reflect in lists
    autocompleteInput.value = 'United';
    setTimeout(function () {
      expect(autocompleteOption.textContent).to.equal('United Kingdom of Great Britain & Northern Ireland');
      autocompleteOption.click();
      expect(select.value).to.equal('gb');
      setTimeout(function () {
        expect(autocompleteInput.value).to.equal('United Kingdom of Great Britain & Northern Ireland');
        done();
      }, 250);
    }, 250);
  });
});

/***/ }),

/***/ "../node_modules/core-js/internals/a-callable.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-callable.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "../node_modules/core-js/internals/advance-string-index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/advance-string-index.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "../node_modules/core-js/internals/string-multibyte.js").charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-for-each.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-for-each.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-iteration.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/array-iteration.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-has-species-support.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-is-strict.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-is-strict.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-slice.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/array-slice.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "../node_modules/core-js/internals/array-species-constructor.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/internals/array-species-constructor.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "../node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-species-create.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/array-species-create.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "../node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-built-in.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-built-in.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "../node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-global-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/define-global-property.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/document-all.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/document-all.js ***!
  \*********************************************************/
/***/ (function(module) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \*************************************************************************/
/***/ (function(module) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/dom-iterables.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/dom-iterables.js ***!
  \**********************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../node_modules/core-js/internals/dom-token-list-prototype.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "../node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "../node_modules/core-js/internals/function-uncurry-this-clause.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "../node_modules/core-js/internals/define-built-in.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-apply.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/function-apply.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind-context.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-context.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "../node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind-native.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-native.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "../node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-call.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-call.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-name.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/function-name.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-uncurry-this-clause.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-uncurry-this.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-method.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/get-method.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../node_modules/core-js/internals/has-own-property.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/has-own-property.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/html.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/html.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "../node_modules/core-js/internals/weak-map-basic-detection.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-array.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/is-array.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-callable.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/is-callable.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-constructor.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/is-constructor.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../node_modules/core-js/internals/is-null-or-undefined.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/is-null-or-undefined.js ***!
  \*****************************************************************/
/***/ (function(module) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "../node_modules/core-js/internals/document-all.js");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/internals/is-symbol.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-symbol.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/length-of-array-like.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/length-of-array-like.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/make-built-in.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/make-built-in.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "../node_modules/core-js/internals/math-trunc.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/math-trunc.js ***!
  \*******************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-assign.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/object-assign.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../node_modules/core-js/internals/object-create.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/object-create.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-properties.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/internals/object-is-prototype-of.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-is-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../node_modules/core-js/internals/object-to-string.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/object-to-string.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-exec-abstract.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-exec.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");
var getInternalState = (__webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js").get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "../node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "../node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-flags.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-flags.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/schedulers-fix.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/schedulers-fix.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "../node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "../node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "../node_modules/core-js/internals/validate-arguments-length.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return MSIE ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(fn, this, args);
    } : fn, timeout);
  } : scheduler;
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
module.exports = {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "../node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "../node_modules/core-js/internals/string-multibyte.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/string-multibyte.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "../node_modules/core-js/internals/symbol-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-integer-or-infinity.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "../node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-property-key.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/to-property-key.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../node_modules/core-js/internals/to-string.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-string.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "../node_modules/core-js/internals/try-to-string.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/try-to-string.js ***!
  \**********************************************************/
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "../node_modules/core-js/internals/validate-arguments-length.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/internals/validate-arguments-length.js ***!
  \**********************************************************************/
/***/ (function(module) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "../node_modules/core-js/internals/weak-map-basic-detection.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../node_modules/core-js/internals/is-callable.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "../node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.concat.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.concat.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "../node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.filter.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.filter.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.for-each.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.for-each.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.index-of.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.index-of.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "../node_modules/core-js/internals/function-uncurry-this-clause.js");
var $indexOf = (__webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.is-array.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.is-array.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.map.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.map.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.function.bind.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.function.bind.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "../node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.function.name.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.function.name.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "../node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.assign.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.assign.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.create.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.create.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.define-property.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.define-property.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.keys.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.keys.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.to-string.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.to-string.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "../node_modules/core-js/internals/define-built-in.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "../node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.regexp.exec.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.regexp.exec.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.match.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.match.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "../node_modules/core-js/internals/is-null-or-undefined.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "../node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "../node_modules/core-js/modules/web.set-interval.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/web.set-interval.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var setInterval = (__webpack_require__(/*! ../internals/schedulers-fix */ "../node_modules/core-js/internals/schedulers-fix.js").setInterval);

// ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "../node_modules/core-js/modules/web.set-timeout.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/web.set-timeout.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var setTimeout = (__webpack_require__(/*! ../internals/schedulers-fix */ "../node_modules/core-js/internals/schedulers-fix.js").setTimeout);

// ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "../node_modules/core-js/modules/web.timers.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/web.timers.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "../node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "../node_modules/core-js/modules/web.set-timeout.js");


/***/ }),

/***/ "../node_modules/preact/dist/preact.module.js":
/*!****************************************************!*\
  !*** ../node_modules/preact/dist/preact.module.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": function() { return /* binding */ d; },
/* harmony export */   "Fragment": function() { return /* binding */ p; },
/* harmony export */   "cloneElement": function() { return /* binding */ q; },
/* harmony export */   "createContext": function() { return /* binding */ B; },
/* harmony export */   "createElement": function() { return /* binding */ h; },
/* harmony export */   "createRef": function() { return /* binding */ y; },
/* harmony export */   "h": function() { return /* binding */ h; },
/* harmony export */   "hydrate": function() { return /* binding */ S; },
/* harmony export */   "isValidElement": function() { return /* binding */ i; },
/* harmony export */   "options": function() { return /* binding */ l; },
/* harmony export */   "render": function() { return /* binding */ P; },
/* harmony export */   "toChildArray": function() { return /* binding */ x; }
/* harmony export */ });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v(l,f,t,o,null)}function v(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function b(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||setTimeout)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z(u,t),t.__e!=o&&k(t)))})}function w(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null}j(n,k,d=d||f,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d))}for(u.__e=g,h=C;h--;)null!=x[h]&&N(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h])}function m(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m(i,l,u):A(u,i,i,t,i.__e,l));return l}function x(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x(n,l)}):l.push(n)),l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d(g,x),h.constructor=T,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k)})}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p&&null==a.key?a.props.children:a,w(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l.diffed)&&a(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),h=(y=i.props||f).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a(n.__e),n.__=n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j(i,u=(!o&&t||i).__k=h(p,null,[u]),r||f,f,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z(e,u)}function S(n,l){P(n,l,S)}function q(l,u,i){var t,o,r,f=s({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),v(l.type,f,t||l.key,o||l.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b(this))},d.prototype.render=p,t=[],g.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ })

}]);