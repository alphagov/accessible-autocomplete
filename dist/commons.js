(self.webpackChunkaccessibleAutocomplete = self.webpackChunkaccessibleAutocomplete || []).push([['commons'], {

  /***/ './autocomplete.js':
  /*! *************************!*\
  !*** ./autocomplete.js ***!
  \*************************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ '../node_modules/core-js/modules/es.object.set-prototype-of.js')
    __webpack_require__(/*! core-js/modules/es.object.create.js */ '../node_modules/core-js/modules/es.object.create.js')
    __webpack_require__(/*! core-js/modules/es.object.assign.js */ '../node_modules/core-js/modules/es.object.assign.js')
    exports.__esModule = true
    exports.default = void 0
    __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ '../node_modules/core-js/modules/es.regexp.exec.js')
    __webpack_require__(/*! core-js/modules/es.string.match.js */ '../node_modules/core-js/modules/es.string.match.js')
    __webpack_require__(/*! core-js/modules/es.function.bind.js */ '../node_modules/core-js/modules/es.function.bind.js')
    __webpack_require__(/*! core-js/modules/es.array.index-of.js */ '../node_modules/core-js/modules/es.array.index-of.js')
    __webpack_require__(/*! core-js/modules/es.array.map.js */ '../node_modules/core-js/modules/es.array.map.js')
    __webpack_require__(/*! core-js/modules/web.timers.js */ '../node_modules/core-js/modules/web.timers.js')
    __webpack_require__(/*! core-js/modules/es.function.name.js */ '../node_modules/core-js/modules/es.function.name.js')
    const _preact = __webpack_require__(/*! preact */ '../node_modules/preact/dist/preact.module.js')
    const _status = _interopRequireDefault(__webpack_require__(/*! ./status */ './status.js'))
    const _dropdownArrowDown = _interopRequireDefault(__webpack_require__(/*! ./dropdown-arrow-down */ './dropdown-arrow-down.js'))
    function cov_1bxywyv02a () {
      const path = '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/autocomplete.js'
      const hash = 'b1690ffcbfa522436af7f1ed7072591c5228aed5'
      const global = new Function('return this')()
      const gcv = '__coverage__'
      const coverageData = {
        path: '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/autocomplete.js',
        statementMap: {
          0: {
            start: {
              line: 5,
              column: 18
            },
            end: {
              line: 5,
              column: 60
            }
          },
          1: {
            start: {
              line: 6,
              column: 17
            },
            end: {
              line: 6,
              column: 58
            }
          },
          2: {
            start: {
              line: 8,
              column: 17
            },
            end: {
              line: 14,
              column: 1
            }
          },
          3: {
            start: {
              line: 17,
              column: 2
            },
            end: {
              line: 17,
              column: 142
            }
          },
          4: {
            start: {
              line: 21,
              column: 2
            },
            end: {
              line: 28,
              column: 3
            }
          },
          5: {
            start: {
              line: 33,
              column: 2
            },
            end: {
              line: 33,
              column: 48
            }
          },
          6: {
            start: {
              line: 33,
              column: 19
            },
            end: {
              line: 33,
              column: 46
            }
          },
          7: {
            start: {
              line: 34,
              column: 2
            },
            end: {
              line: 34,
              column: 48
            }
          },
          8: {
            start: {
              line: 34,
              column: 18
            },
            end: {
              line: 34,
              column: 46
            }
          },
          9: {
            start: {
              line: 38,
              column: 24
            },
            end: {
              line: 54,
              column: 3
            }
          },
          10: {
            start: {
              line: 51,
              column: 22
            },
            end: {
              line: 51,
              column: 40
            }
          },
          11: {
            start: {
              line: 52,
              column: 26
            },
            end: {
              line: 52,
              column: 183
            }
          },
          12: {
            start: {
              line: 56,
              column: 22
            },
            end: {
              line: 56,
              column: 24
            }
          },
          13: {
            start: {
              line: 59,
              column: 4
            },
            end: {
              line: 59,
              column: 16
            }
          },
          14: {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 70,
              column: 5
            }
          },
          15: {
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 72,
              column: 66
            }
          },
          16: {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 73,
              column: 54
            }
          },
          17: {
            start: {
              line: 74,
              column: 4
            },
            end: {
              line: 74,
              column: 54
            }
          },
          18: {
            start: {
              line: 75,
              column: 4
            },
            end: {
              line: 75,
              column: 58
            }
          },
          19: {
            start: {
              line: 76,
              column: 4
            },
            end: {
              line: 76,
              column: 50
            }
          },
          20: {
            start: {
              line: 77,
              column: 4
            },
            end: {
              line: 77,
              column: 64
            }
          },
          21: {
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 79,
              column: 68
            }
          },
          22: {
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 81,
              column: 60
            }
          },
          23: {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 82,
              column: 62
            }
          },
          24: {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 83,
              column: 62
            }
          },
          25: {
            start: {
              line: 84,
              column: 4
            },
            end: {
              line: 84,
              column: 70
            }
          },
          26: {
            start: {
              line: 85,
              column: 4
            },
            end: {
              line: 85,
              column: 72
            }
          },
          27: {
            start: {
              line: 87,
              column: 4
            },
            end: {
              line: 87,
              column: 58
            }
          },
          28: {
            start: {
              line: 88,
              column: 4
            },
            end: {
              line: 88,
              column: 62
            }
          },
          29: {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 89,
              column: 60
            }
          },
          30: {
            start: {
              line: 91,
              column: 4
            },
            end: {
              line: 91,
              column: 60
            }
          },
          31: {
            start: {
              line: 92,
              column: 4
            },
            end: {
              line: 92,
              column: 70
            }
          },
          32: {
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 96,
              column: 113
            }
          },
          33: {
            start: {
              line: 96,
              column: 32
            },
            end: {
              line: 96,
              column: 76
            }
          },
          34: {
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 100,
              column: 27
            }
          },
          35: {
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 104,
              column: 33
            }
          },
          36: {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 112,
              column: 32
            }
          },
          37: {
            start: {
              line: 113,
              column: 4
            },
            end: {
              line: 115,
              column: 11
            }
          },
          38: {
            start: {
              line: 114,
              column: 6
            },
            end: {
              line: 114,
              column: 29
            }
          },
          39: {
            start: {
              line: 119,
              column: 27
            },
            end: {
              line: 119,
              column: 53
            }
          },
          40: {
            start: {
              line: 120,
              column: 28
            },
            end: {
              line: 120,
              column: 87
            }
          },
          41: {
            start: {
              line: 122,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          },
          42: {
            start: {
              line: 123,
              column: 6
            },
            end: {
              line: 123,
              column: 73
            }
          },
          43: {
            start: {
              line: 128,
              column: 24
            },
            end: {
              line: 128,
              column: 34
            }
          },
          44: {
            start: {
              line: 129,
              column: 31
            },
            end: {
              line: 129,
              column: 47
            }
          },
          45: {
            start: {
              line: 130,
              column: 27
            },
            end: {
              line: 130,
              column: 56
            }
          },
          46: {
            start: {
              line: 131,
              column: 34
            },
            end: {
              line: 131,
              column: 71
            }
          },
          47: {
            start: {
              line: 132,
              column: 4
            },
            end: {
              line: 134,
              column: 5
            }
          },
          48: {
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 133,
              column: 45
            }
          },
          49: {
            start: {
              line: 135,
              column: 25
            },
            end: {
              line: 135,
              column: 39
            }
          },
          50: {
            start: {
              line: 136,
              column: 33
            },
            end: {
              line: 136,
              column: 77
            }
          },
          51: {
            start: {
              line: 137,
              column: 26
            },
            end: {
              line: 137,
              column: 62
            }
          },
          52: {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 141,
              column: 5
            }
          },
          53: {
            start: {
              line: 139,
              column: 27
            },
            end: {
              line: 139,
              column: 58
            }
          },
          54: {
            start: {
              line: 140,
              column: 6
            },
            end: {
              line: 140,
              column: 66
            }
          },
          55: {
            start: {
              line: 145,
              column: 4
            },
            end: {
              line: 145,
              column: 56
            }
          },
          56: {
            start: {
              line: 150,
              column: 31
            },
            end: {
              line: 150,
              column: 86
            }
          },
          57: {
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 151,
              column: 65
            }
          },
          58: {
            start: {
              line: 156,
              column: 31
            },
            end: {
              line: 156,
              column: 86
            }
          },
          59: {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 157,
              column: 65
            }
          },
          60: {
            start: {
              line: 161,
              column: 41
            },
            end: {
              line: 161,
              column: 51
            }
          },
          61: {
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 168,
              column: 5
            }
          },
          62: {
            start: {
              line: 164,
              column: 6
            },
            end: {
              line: 164,
              column: 40
            }
          },
          63: {
            start: {
              line: 165,
              column: 6
            },
            end: {
              line: 165,
              column: 45
            }
          },
          64: {
            start: {
              line: 167,
              column: 6
            },
            end: {
              line: 167,
              column: 22
            }
          },
          65: {
            start: {
              line: 169,
              column: 4
            },
            end: {
              line: 175,
              column: 6
            }
          },
          66: {
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 181,
              column: 6
            }
          },
          67: {
            start: {
              line: 185,
              column: 53
            },
            end: {
              line: 185,
              column: 63
            }
          },
          68: {
            start: {
              line: 186,
              column: 37
            },
            end: {
              line: 186,
              column: 65
            }
          },
          69: {
            start: {
              line: 187,
              column: 26
            },
            end: {
              line: 187,
              column: 76
            }
          },
          70: {
            start: {
              line: 188,
              column: 34
            },
            end: {
              line: 188,
              column: 69
            }
          },
          71: {
            start: {
              line: 189,
              column: 26
            },
            end: {
              line: 189,
              column: 123
            }
          },
          72: {
            start: {
              line: 190,
              column: 4
            },
            end: {
              line: 196,
              column: 5
            }
          },
          73: {
            start: {
              line: 191,
              column: 27
            },
            end: {
              line: 191,
              column: 52
            }
          },
          74: {
            start: {
              line: 192,
              column: 6
            },
            end: {
              line: 195,
              column: 8
            }
          },
          75: {
            start: {
              line: 200,
              column: 60
            },
            end: {
              line: 200,
              column: 70
            }
          },
          76: {
            start: {
              line: 201,
              column: 29
            },
            end: {
              line: 201,
              column: 43
            }
          },
          77: {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 209,
              column: 5
            }
          },
          78: {
            start: {
              line: 203,
              column: 27
            },
            end: {
              line: 203,
              column: 52
            }
          },
          79: {
            start: {
              line: 204,
              column: 23
            },
            end: {
              line: 204,
              column: 89
            }
          },
          80: {
            start: {
              line: 205,
              column: 6
            },
            end: {
              line: 208,
              column: 8
            }
          },
          81: {
            start: {
              line: 213,
              column: 49
            },
            end: {
              line: 213,
              column: 59
            }
          },
          82: {
            start: {
              line: 214,
              column: 23
            },
            end: {
              line: 214,
              column: 43
            }
          },
          83: {
            start: {
              line: 215,
              column: 18
            },
            end: {
              line: 215,
              column: 36
            }
          },
          84: {
            start: {
              line: 216,
              column: 23
            },
            end: {
              line: 216,
              column: 41
            }
          },
          85: {
            start: {
              line: 217,
              column: 25
            },
            end: {
              line: 217,
              column: 65
            }
          },
          86: {
            start: {
              line: 218,
              column: 28
            },
            end: {
              line: 218,
              column: 53
            }
          },
          87: {
            start: {
              line: 220,
              column: 4
            },
            end: {
              line: 223,
              column: 6
            }
          },
          88: {
            start: {
              line: 225,
              column: 29
            },
            end: {
              line: 225,
              column: 94
            }
          },
          89: {
            start: {
              line: 226,
              column: 4
            },
            end: {
              line: 241,
              column: 5
            }
          },
          90: {
            start: {
              line: 227,
              column: 6
            },
            end: {
              line: 235,
              column: 8
            }
          },
          91: {
            start: {
              line: 228,
              column: 33
            },
            end: {
              line: 228,
              column: 51
            }
          },
          92: {
            start: {
              line: 229,
              column: 8
            },
            end: {
              line: 234,
              column: 10
            }
          },
          93: {
            start: {
              line: 236,
              column: 11
            },
            end: {
              line: 241,
              column: 5
            }
          },
          94: {
            start: {
              line: 237,
              column: 6
            },
            end: {
              line: 240,
              column: 8
            }
          },
          95: {
            start: {
              line: 245,
              column: 4
            },
            end: {
              line: 245,
              column: 33
            }
          },
          96: {
            start: {
              line: 249,
              column: 48
            },
            end: {
              line: 249,
              column: 58
            }
          },
          97: {
            start: {
              line: 250,
              column: 26
            },
            end: {
              line: 250,
              column: 36
            }
          },
          98: {
            start: {
              line: 251,
              column: 29
            },
            end: {
              line: 251,
              column: 96
            }
          },
          99: {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 257,
              column: 5
            }
          },
          100: {
            start: {
              line: 254,
              column: 6
            },
            end: {
              line: 254,
              column: 110
            }
          },
          101: {
            start: {
              line: 254,
              column: 39
            },
            end: {
              line: 254,
              column: 108
            }
          },
          102: {
            start: {
              line: 256,
              column: 6
            },
            end: {
              line: 256,
              column: 36
            }
          },
          103: {
            start: {
              line: 261,
              column: 4
            },
            end: {
              line: 265,
              column: 6
            }
          },
          104: {
            start: {
              line: 271,
              column: 4
            },
            end: {
              line: 275,
              column: 5
            }
          },
          105: {
            start: {
              line: 272,
              column: 6
            },
            end: {
              line: 274,
              column: 8
            }
          },
          106: {
            start: {
              line: 279,
              column: 27
            },
            end: {
              line: 279,
              column: 52
            }
          },
          107: {
            start: {
              line: 280,
              column: 21
            },
            end: {
              line: 280,
              column: 60
            }
          },
          108: {
            start: {
              line: 281,
              column: 4
            },
            end: {
              line: 281,
              column: 40
            }
          },
          109: {
            start: {
              line: 282,
              column: 4
            },
            end: {
              line: 289,
              column: 6
            }
          },
          110: {
            start: {
              line: 290,
              column: 4
            },
            end: {
              line: 290,
              column: 22
            }
          },
          111: {
            start: {
              line: 300,
              column: 4
            },
            end: {
              line: 300,
              column: 26
            }
          },
          112: {
            start: {
              line: 304,
              column: 4
            },
            end: {
              line: 304,
              column: 26
            }
          },
          113: {
            start: {
              line: 305,
              column: 35
            },
            end: {
              line: 305,
              column: 45
            }
          },
          114: {
            start: {
              line: 306,
              column: 23
            },
            end: {
              line: 306,
              column: 38
            }
          },
          115: {
            start: {
              line: 307,
              column: 24
            },
            end: {
              line: 307,
              column: 46
            }
          },
          116: {
            start: {
              line: 308,
              column: 4
            },
            end: {
              line: 310,
              column: 5
            }
          },
          117: {
            start: {
              line: 309,
              column: 6
            },
            end: {
              line: 309,
              column: 42
            }
          },
          118: {
            start: {
              line: 314,
              column: 4
            },
            end: {
              line: 314,
              column: 26
            }
          },
          119: {
            start: {
              line: 316,
              column: 4
            },
            end: {
              line: 334,
              column: 5
            }
          },
          120: {
            start: {
              line: 317,
              column: 6
            },
            end: {
              line: 317,
              column: 28
            }
          },
          121: {
            start: {
              line: 318,
              column: 6
            },
            end: {
              line: 326,
              column: 8
            }
          },
          122: {
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 325,
              column: 10
            }
          },
          123: {
            start: {
              line: 327,
              column: 11
            },
            end: {
              line: 334,
              column: 5
            }
          },
          124: {
            start: {
              line: 328,
              column: 46
            },
            end: {
              line: 328,
              column: 56
            }
          },
          125: {
            start: {
              line: 329,
              column: 28
            },
            end: {
              line: 329,
              column: 59
            }
          },
          126: {
            start: {
              line: 330,
              column: 28
            },
            end: {
              line: 330,
              column: 53
            }
          },
          127: {
            start: {
              line: 331,
              column: 6
            },
            end: {
              line: 333,
              column: 7
            }
          },
          128: {
            start: {
              line: 332,
              column: 8
            },
            end: {
              line: 332,
              column: 44
            }
          },
          129: {
            start: {
              line: 339,
              column: 4
            },
            end: {
              line: 347,
              column: 5
            }
          },
          130: {
            start: {
              line: 340,
              column: 6
            },
            end: {
              line: 340,
              column: 28
            }
          },
          131: {
            start: {
              line: 341,
              column: 6
            },
            end: {
              line: 346,
              column: 8
            }
          },
          132: {
            start: {
              line: 342,
              column: 8
            },
            end: {
              line: 345,
              column: 10
            }
          },
          133: {
            start: {
              line: 348,
              column: 28
            },
            end: {
              line: 348,
              column: 53
            }
          },
          134: {
            start: {
              line: 349,
              column: 4
            },
            end: {
              line: 352,
              column: 5
            }
          },
          135: {
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 350,
              column: 28
            }
          },
          136: {
            start: {
              line: 351,
              column: 6
            },
            end: {
              line: 351,
              column: 55
            }
          },
          137: {
            start: {
              line: 356,
              column: 4
            },
            end: {
              line: 362,
              column: 5
            }
          },
          138: {
            start: {
              line: 357,
              column: 6
            },
            end: {
              line: 357,
              column: 28
            }
          },
          139: {
            start: {
              line: 358,
              column: 32
            },
            end: {
              line: 358,
              column: 56
            }
          },
          140: {
            start: {
              line: 359,
              column: 6
            },
            end: {
              line: 361,
              column: 7
            }
          },
          141: {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 360,
              column: 58
            }
          },
          142: {
            start: {
              line: 366,
              column: 25
            },
            end: {
              line: 366,
              column: 51
            }
          },
          143: {
            start: {
              line: 367,
              column: 27
            },
            end: {
              line: 367,
              column: 56
            }
          },
          144: {
            start: {
              line: 368,
              column: 4
            },
            end: {
              line: 373,
              column: 5
            }
          },
          145: {
            start: {
              line: 372,
              column: 6
            },
            end: {
              line: 372,
              column: 26
            }
          },
          146: {
            start: {
              line: 377,
              column: 4
            },
            end: {
              line: 400,
              column: 5
            }
          },
          147: {
            start: {
              line: 379,
              column: 8
            },
            end: {
              line: 379,
              column: 33
            }
          },
          148: {
            start: {
              line: 380,
              column: 8
            },
            end: {
              line: 380,
              column: 13
            }
          },
          149: {
            start: {
              line: 382,
              column: 8
            },
            end: {
              line: 382,
              column: 35
            }
          },
          150: {
            start: {
              line: 383,
              column: 8
            },
            end: {
              line: 383,
              column: 13
            }
          },
          151: {
            start: {
              line: 385,
              column: 8
            },
            end: {
              line: 385,
              column: 31
            }
          },
          152: {
            start: {
              line: 386,
              column: 8
            },
            end: {
              line: 386,
              column: 13
            }
          },
          153: {
            start: {
              line: 388,
              column: 8
            },
            end: {
              line: 388,
              column: 31
            }
          },
          154: {
            start: {
              line: 389,
              column: 8
            },
            end: {
              line: 389,
              column: 13
            }
          },
          155: {
            start: {
              line: 391,
              column: 8
            },
            end: {
              line: 393,
              column: 10
            }
          },
          156: {
            start: {
              line: 394,
              column: 8
            },
            end: {
              line: 394,
              column: 13
            }
          },
          157: {
            start: {
              line: 396,
              column: 8
            },
            end: {
              line: 398,
              column: 9
            }
          },
          158: {
            start: {
              line: 397,
              column: 10
            },
            end: {
              line: 397,
              column: 40
            }
          },
          159: {
            start: {
              line: 399,
              column: 8
            },
            end: {
              line: 399,
              column: 13
            }
          },
          160: {
            start: {
              line: 420,
              column: 8
            },
            end: {
              line: 420,
              column: 18
            }
          },
          161: {
            start: {
              line: 421,
              column: 96
            },
            end: {
              line: 421,
              column: 106
            }
          },
          162: {
            start: {
              line: 422,
              column: 23
            },
            end: {
              line: 422,
              column: 43
            }
          },
          163: {
            start: {
              line: 424,
              column: 25
            },
            end: {
              line: 424,
              column: 39
            }
          },
          164: {
            start: {
              line: 425,
              column: 31
            },
            end: {
              line: 425,
              column: 51
            }
          },
          165: {
            start: {
              line: 426,
              column: 26
            },
            end: {
              line: 426,
              column: 44
            }
          },
          166: {
            start: {
              line: 427,
              column: 28
            },
            end: {
              line: 427,
              column: 53
            }
          },
          167: {
            start: {
              line: 428,
              column: 31
            },
            end: {
              line: 429,
              column: 76
            }
          },
          168: {
            start: {
              line: 431,
              column: 29
            },
            end: {
              line: 431,
              column: 55
            }
          },
          169: {
            start: {
              line: 433,
              column: 27
            },
            end: {
              line: 433,
              column: 51
            }
          },
          170: {
            start: {
              line: 434,
              column: 31
            },
            end: {
              line: 434,
              column: 47
            }
          },
          171: {
            start: {
              line: 435,
              column: 33
            },
            end: {
              line: 435,
              column: 88
            }
          },
          172: {
            start: {
              line: 436,
              column: 30
            },
            end: {
              line: 436,
              column: 126
            }
          },
          173: {
            start: {
              line: 437,
              column: 35
            },
            end: {
              line: 437,
              column: 73
            }
          },
          174: {
            start: {
              line: 438,
              column: 26
            },
            end: {
              line: 438,
              column: 60
            }
          },
          175: {
            start: {
              line: 440,
              column: 26
            },
            end: {
              line: 440,
              column: 49
            }
          },
          176: {
            start: {
              line: 441,
              column: 36
            },
            end: {
              line: 441,
              column: 70
            }
          },
          177: {
            start: {
              line: 442,
              column: 26
            },
            end: {
              line: 442,
              column: 56
            }
          },
          178: {
            start: {
              line: 443,
              column: 35
            },
            end: {
              line: 443,
              column: 96
            }
          },
          179: {
            start: {
              line: 445,
              column: 28
            },
            end: {
              line: 445,
              column: 53
            }
          },
          180: {
            start: {
              line: 447,
              column: 26
            },
            end: {
              line: 447,
              column: 49
            }
          },
          181: {
            start: {
              line: 448,
              column: 31
            },
            end: {
              line: 448,
              column: 73
            }
          },
          182: {
            start: {
              line: 449,
              column: 34
            },
            end: {
              line: 450,
              column: 73
            }
          },
          183: {
            start: {
              line: 451,
              column: 22
            },
            end: {
              line: 453,
              column: 10
            }
          },
          184: {
            start: {
              line: 455,
              column: 28
            },
            end: {
              line: 455,
              column: 50
            }
          },
          185: {
            start: {
              line: 456,
              column: 30
            },
            end: {
              line: 460,
              column: 12
            }
          },
          186: {
            start: {
              line: 465,
              column: 4
            },
            end: {
              line: 472,
              column: 5
            }
          },
          187: {
            start: {
              line: 466,
              column: 6
            },
            end: {
              line: 466,
              column: 81
            }
          },
          188: {
            start: {
              line: 469,
              column: 6
            },
            end: {
              line: 471,
              column: 7
            }
          },
          189: {
            start: {
              line: 470,
              column: 8
            },
            end: {
              line: 470,
              column: 142
            }
          },
          190: {
            start: {
              line: 474,
              column: 4
            },
            end: {
              line: 563,
              column: 5
            }
          },
          191: {
            start: {
              line: 504,
              column: 30
            },
            end: {
              line: 504,
              column: 58
            }
          },
          192: {
            start: {
              line: 510,
              column: 35
            },
            end: {
              line: 510,
              column: 76
            }
          },
          193: {
            start: {
              line: 521,
              column: 35
            },
            end: {
              line: 521,
              column: 67
            }
          },
          194: {
            start: {
              line: 526,
              column: 32
            },
            end: {
              line: 526,
              column: 87
            }
          },
          195: {
            start: {
              line: 527,
              column: 42
            },
            end: {
              line: 527,
              column: 111
            }
          },
          196: {
            start: {
              line: 528,
              column: 38
            },
            end: {
              line: 528,
              column: 83
            }
          },
          197: {
            start: {
              line: 529,
              column: 36
            },
            end: {
              line: 533,
              column: 18
            }
          },
          198: {
            start: {
              line: 535,
              column: 12
            },
            end: {
              line: 552,
              column: 13
            }
          },
          199: {
            start: {
              line: 542,
              column: 35
            },
            end: {
              line: 542,
              column: 70
            }
          },
          200: {
            start: {
              line: 543,
              column: 36
            },
            end: {
              line: 543,
              column: 72
            }
          },
          201: {
            start: {
              line: 545,
              column: 41
            },
            end: {
              line: 545,
              column: 82
            }
          },
          202: {
            start: {
              line: 546,
              column: 37
            },
            end: {
              line: 546,
              column: 77
            }
          }
        },
        fnMap: {
          0: {
            name: 'isIosDevice',
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
          1: {
            name: 'isPrintableKeyCode',
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
          2: {
            name: 'onChangeCrossLibrary',
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
          3: {
            name: '(anonymous_3)',
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
          4: {
            name: '(anonymous_4)',
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
          5: {
            name: '(anonymous_5)',
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
          6: {
            name: '(anonymous_6)',
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
          7: {
            name: '(anonymous_7)',
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
          8: {
            name: '(anonymous_8)',
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
          9: {
            name: '(anonymous_9)',
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
          10: {
            name: '(anonymous_10)',
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
          11: {
            name: '(anonymous_11)',
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
          12: {
            name: '(anonymous_12)',
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
          13: {
            name: '(anonymous_13)',
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
          14: {
            name: '(anonymous_14)',
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
          15: {
            name: '(anonymous_15)',
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
          16: {
            name: '(anonymous_16)',
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
          17: {
            name: '(anonymous_17)',
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
          18: {
            name: '(anonymous_18)',
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
          19: {
            name: '(anonymous_19)',
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
          20: {
            name: '(anonymous_20)',
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
          21: {
            name: '(anonymous_21)',
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
          22: {
            name: '(anonymous_22)',
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
                line: 242,
                column: 3
              }
            },
            line: 212
          },
          23: {
            name: '(anonymous_23)',
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
          24: {
            name: '(anonymous_24)',
            decl: {
              start: {
                line: 244,
                column: 2
              },
              end: {
                line: 244,
                column: 3
              }
            },
            loc: {
              start: {
                line: 244,
                column: 27
              },
              end: {
                line: 246,
                column: 3
              }
            },
            line: 244
          },
          25: {
            name: '(anonymous_25)',
            decl: {
              start: {
                line: 248,
                column: 2
              },
              end: {
                line: 248,
                column: 3
              }
            },
            loc: {
              start: {
                line: 248,
                column: 27
              },
              end: {
                line: 258,
                column: 3
              }
            },
            line: 248
          },
          26: {
            name: '(anonymous_26)',
            decl: {
              start: {
                line: 254,
                column: 20
              },
              end: {
                line: 254,
                column: 21
              }
            },
            loc: {
              start: {
                line: 254,
                column: 39
              },
              end: {
                line: 254,
                column: 108
              }
            },
            line: 254
          },
          27: {
            name: '(anonymous_27)',
            decl: {
              start: {
                line: 260,
                column: 2
              },
              end: {
                line: 260,
                column: 3
              }
            },
            loc: {
              start: {
                line: 260,
                column: 28
              },
              end: {
                line: 266,
                column: 3
              }
            },
            line: 260
          },
          28: {
            name: '(anonymous_28)',
            decl: {
              start: {
                line: 268,
                column: 2
              },
              end: {
                line: 268,
                column: 3
              }
            },
            loc: {
              start: {
                line: 268,
                column: 40
              },
              end: {
                line: 276,
                column: 3
              }
            },
            line: 268
          },
          29: {
            name: '(anonymous_29)',
            decl: {
              start: {
                line: 278,
                column: 2
              },
              end: {
                line: 278,
                column: 3
              }
            },
            loc: {
              start: {
                line: 278,
                column: 35
              },
              end: {
                line: 291,
                column: 3
              }
            },
            line: 278
          },
          30: {
            name: '(anonymous_30)',
            decl: {
              start: {
                line: 293,
                column: 2
              },
              end: {
                line: 293,
                column: 3
              }
            },
            loc: {
              start: {
                line: 293,
                column: 32
              },
              end: {
                line: 301,
                column: 3
              }
            },
            line: 293
          },
          31: {
            name: '(anonymous_31)',
            decl: {
              start: {
                line: 303,
                column: 2
              },
              end: {
                line: 303,
                column: 3
              }
            },
            loc: {
              start: {
                line: 303,
                column: 24
              },
              end: {
                line: 311,
                column: 3
              }
            },
            line: 303
          },
          32: {
            name: '(anonymous_32)',
            decl: {
              start: {
                line: 313,
                column: 2
              },
              end: {
                line: 313,
                column: 3
              }
            },
            loc: {
              start: {
                line: 313,
                column: 26
              },
              end: {
                line: 335,
                column: 3
              }
            },
            line: 313
          },
          33: {
            name: '(anonymous_33)',
            decl: {
              start: {
                line: 318,
                column: 28
              },
              end: {
                line: 318,
                column: 29
              }
            },
            loc: {
              start: {
                line: 318,
                column: 41
              },
              end: {
                line: 326,
                column: 7
              }
            },
            line: 318
          },
          34: {
            name: '(anonymous_34)',
            decl: {
              start: {
                line: 337,
                column: 2
              },
              end: {
                line: 337,
                column: 3
              }
            },
            loc: {
              start: {
                line: 337,
                column: 22
              },
              end: {
                line: 353,
                column: 3
              }
            },
            line: 337
          },
          35: {
            name: '(anonymous_35)',
            decl: {
              start: {
                line: 341,
                column: 28
              },
              end: {
                line: 341,
                column: 29
              }
            },
            loc: {
              start: {
                line: 341,
                column: 41
              },
              end: {
                line: 346,
                column: 7
              }
            },
            line: 341
          },
          36: {
            name: '(anonymous_36)',
            decl: {
              start: {
                line: 355,
                column: 2
              },
              end: {
                line: 355,
                column: 3
              }
            },
            loc: {
              start: {
                line: 355,
                column: 22
              },
              end: {
                line: 363,
                column: 3
              }
            },
            line: 355
          },
          37: {
            name: '(anonymous_37)',
            decl: {
              start: {
                line: 365,
                column: 2
              },
              end: {
                line: 365,
                column: 3
              }
            },
            loc: {
              start: {
                line: 365,
                column: 29
              },
              end: {
                line: 374,
                column: 3
              }
            },
            line: 365
          },
          38: {
            name: '(anonymous_38)',
            decl: {
              start: {
                line: 376,
                column: 2
              },
              end: {
                line: 376,
                column: 3
              }
            },
            loc: {
              start: {
                line: 376,
                column: 24
              },
              end: {
                line: 401,
                column: 3
              }
            },
            line: 376
          },
          39: {
            name: '(anonymous_39)',
            decl: {
              start: {
                line: 403,
                column: 2
              },
              end: {
                line: 403,
                column: 3
              }
            },
            loc: {
              start: {
                line: 403,
                column: 12
              },
              end: {
                line: 564,
                column: 3
              }
            },
            line: 403
          },
          40: {
            name: '(anonymous_40)',
            decl: {
              start: {
                line: 504,
                column: 19
              },
              end: {
                line: 504,
                column: 20
              }
            },
            loc: {
              start: {
                line: 504,
                column: 30
              },
              end: {
                line: 504,
                column: 58
              }
            },
            line: 504
          },
          41: {
            name: '(anonymous_41)',
            decl: {
              start: {
                line: 510,
                column: 15
              },
              end: {
                line: 510,
                column: 16
              }
            },
            loc: {
              start: {
                line: 510,
                column: 33
              },
              end: {
                line: 510,
                column: 78
              }
            },
            line: 510
          },
          42: {
            name: '(anonymous_42)',
            decl: {
              start: {
                line: 521,
                column: 24
              },
              end: {
                line: 521,
                column: 25
              }
            },
            loc: {
              start: {
                line: 521,
                column: 35
              },
              end: {
                line: 521,
                column: 67
              }
            },
            line: 521
          },
          43: {
            name: '(anonymous_43)',
            decl: {
              start: {
                line: 525,
                column: 23
              },
              end: {
                line: 525,
                column: 24
              }
            },
            loc: {
              start: {
                line: 525,
                column: 42
              },
              end: {
                line: 553,
                column: 11
              }
            },
            line: 525
          },
          44: {
            name: '(anonymous_44)',
            decl: {
              start: {
                line: 542,
                column: 24
              },
              end: {
                line: 542,
                column: 25
              }
            },
            loc: {
              start: {
                line: 542,
                column: 35
              },
              end: {
                line: 542,
                column: 70
              }
            },
            line: 542
          },
          45: {
            name: '(anonymous_45)',
            decl: {
              start: {
                line: 543,
                column: 25
              },
              end: {
                line: 543,
                column: 26
              }
            },
            loc: {
              start: {
                line: 543,
                column: 36
              },
              end: {
                line: 543,
                column: 72
              }
            },
            line: 543
          },
          46: {
            name: '(anonymous_46)',
            decl: {
              start: {
                line: 545,
                column: 30
              },
              end: {
                line: 545,
                column: 31
              }
            },
            loc: {
              start: {
                line: 545,
                column: 41
              },
              end: {
                line: 545,
                column: 82
              }
            },
            line: 545
          },
          47: {
            name: '(anonymous_47)',
            decl: {
              start: {
                line: 546,
                column: 21
              },
              end: {
                line: 546,
                column: 22
              }
            },
            loc: {
              start: {
                line: 546,
                column: 35
              },
              end: {
                line: 546,
                column: 79
              }
            },
            line: 546
          }
        },
        branchMap: {
          0: {
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
            type: 'binary-expr',
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
          1: {
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
            type: 'binary-expr',
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
          2: {
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
            type: 'binary-expr',
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
          3: {
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
            type: 'if',
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
          4: {
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
            type: 'if',
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
          5: {
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
            type: 'cond-expr',
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
          6: {
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
            type: 'binary-expr',
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
          7: {
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
            type: 'if',
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
          8: {
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
            type: 'binary-expr',
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
          9: {
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
            type: 'if',
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
          10: {
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
            type: 'binary-expr',
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
          11: {
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
            type: 'binary-expr',
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
          12: {
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
            type: 'if',
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
          13: {
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
            type: 'cond-expr',
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
          14: {
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
            type: 'binary-expr',
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
          15: {
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
            type: 'cond-expr',
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
          16: {
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
            type: 'binary-expr',
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
          17: {
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
            type: 'cond-expr',
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
          18: {
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
            type: 'if',
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
          19: {
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
            type: 'binary-expr',
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
          20: {
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
            type: 'binary-expr',
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
          21: {
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
            type: 'binary-expr',
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
          22: {
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
            type: 'binary-expr',
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
          23: {
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
            type: 'binary-expr',
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
          24: {
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
            type: 'if',
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
          25: {
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
            type: 'binary-expr',
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
          26: {
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
            type: 'if',
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
          27: {
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
            type: 'binary-expr',
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
          28: {
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
            type: 'cond-expr',
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
          29: {
            loc: {
              start: {
                line: 225,
                column: 29
              },
              end: {
                line: 225,
                column: 94
              }
            },
            type: 'binary-expr',
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
                column: 58
              }
            }, {
              start: {
                line: 225,
                column: 62
              },
              end: {
                line: 225,
                column: 74
              }
            }, {
              start: {
                line: 225,
                column: 78
              },
              end: {
                line: 225,
                column: 93
              }
            }],
            line: 225
          },
          30: {
            loc: {
              start: {
                line: 226,
                column: 4
              },
              end: {
                line: 241,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 226,
                column: 4
              },
              end: {
                line: 241,
                column: 5
              }
            }, {
              start: {
                line: 236,
                column: 11
              },
              end: {
                line: 241,
                column: 5
              }
            }],
            line: 226
          },
          31: {
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
            type: 'cond-expr',
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
          32: {
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
            type: 'binary-expr',
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
          33: {
            loc: {
              start: {
                line: 236,
                column: 11
              },
              end: {
                line: 241,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 236,
                column: 11
              },
              end: {
                line: 241,
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
            line: 236
          },
          34: {
            loc: {
              start: {
                line: 236,
                column: 15
              },
              end: {
                line: 236,
                column: 45
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 236,
                column: 15
              },
              end: {
                line: 236,
                column: 25
              }
            }, {
              start: {
                line: 236,
                column: 29
              },
              end: {
                line: 236,
                column: 45
              }
            }],
            line: 236
          },
          35: {
            loc: {
              start: {
                line: 251,
                column: 29
              },
              end: {
                line: 251,
                column: 96
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 251,
                column: 29
              },
              end: {
                line: 251,
                column: 45
              }
            }, {
              start: {
                line: 251,
                column: 49
              },
              end: {
                line: 251,
                column: 74
              }
            }, {
              start: {
                line: 251,
                column: 78
              },
              end: {
                line: 251,
                column: 96
              }
            }],
            line: 251
          },
          36: {
            loc: {
              start: {
                line: 253,
                column: 4
              },
              end: {
                line: 257,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 253,
                column: 4
              },
              end: {
                line: 257,
                column: 5
              }
            }, {
              start: {
                line: 255,
                column: 11
              },
              end: {
                line: 257,
                column: 5
              }
            }],
            line: 253
          },
          37: {
            loc: {
              start: {
                line: 254,
                column: 64
              },
              end: {
                line: 254,
                column: 92
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 254,
                column: 64
              },
              end: {
                line: 254,
                column: 80
              }
            }, {
              start: {
                line: 254,
                column: 84
              },
              end: {
                line: 254,
                column: 92
              }
            }],
            line: 254
          },
          38: {
            loc: {
              start: {
                line: 271,
                column: 4
              },
              end: {
                line: 275,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 271,
                column: 4
              },
              end: {
                line: 275,
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
            line: 271
          },
          39: {
            loc: {
              start: {
                line: 307,
                column: 24
              },
              end: {
                line: 307,
                column: 46
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 307,
                column: 24
              },
              end: {
                line: 307,
                column: 34
              }
            }, {
              start: {
                line: 307,
                column: 38
              },
              end: {
                line: 307,
                column: 46
              }
            }],
            line: 307
          },
          40: {
            loc: {
              start: {
                line: 308,
                column: 4
              },
              end: {
                line: 310,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 308,
                column: 4
              },
              end: {
                line: 310,
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
            line: 308
          },
          41: {
            loc: {
              start: {
                line: 316,
                column: 4
              },
              end: {
                line: 334,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 316,
                column: 4
              },
              end: {
                line: 334,
                column: 5
              }
            }, {
              start: {
                line: 327,
                column: 11
              },
              end: {
                line: 334,
                column: 5
              }
            }],
            line: 316
          },
          42: {
            loc: {
              start: {
                line: 316,
                column: 8
              },
              end: {
                line: 316,
                column: 65
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 316,
                column: 8
              },
              end: {
                line: 316,
                column: 32
              }
            }, {
              start: {
                line: 316,
                column: 36
              },
              end: {
                line: 316,
                column: 65
              }
            }],
            line: 316
          },
          43: {
            loc: {
              start: {
                line: 327,
                column: 11
              },
              end: {
                line: 334,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 327,
                column: 11
              },
              end: {
                line: 334,
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
            line: 327
          },
          44: {
            loc: {
              start: {
                line: 330,
                column: 28
              },
              end: {
                line: 330,
                column: 53
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 330,
                column: 28
              },
              end: {
                line: 330,
                column: 41
              }
            }, {
              start: {
                line: 330,
                column: 45
              },
              end: {
                line: 330,
                column: 53
              }
            }],
            line: 330
          },
          45: {
            loc: {
              start: {
                line: 331,
                column: 6
              },
              end: {
                line: 333,
                column: 7
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 331,
                column: 6
              },
              end: {
                line: 333,
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
            line: 331
          },
          46: {
            loc: {
              start: {
                line: 339,
                column: 4
              },
              end: {
                line: 347,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 339,
                column: 4
              },
              end: {
                line: 347,
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
            line: 339
          },
          47: {
            loc: {
              start: {
                line: 339,
                column: 8
              },
              end: {
                line: 339,
                column: 92
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 339,
                column: 8
              },
              end: {
                line: 339,
                column: 32
              }
            }, {
              start: {
                line: 339,
                column: 36
              },
              end: {
                line: 339,
                column: 65
              }
            }, {
              start: {
                line: 339,
                column: 69
              },
              end: {
                line: 339,
                column: 92
              }
            }],
            line: 339
          },
          48: {
            loc: {
              start: {
                line: 349,
                column: 4
              },
              end: {
                line: 352,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 349,
                column: 4
              },
              end: {
                line: 352,
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
            line: 349
          },
          49: {
            loc: {
              start: {
                line: 356,
                column: 4
              },
              end: {
                line: 362,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 356,
                column: 4
              },
              end: {
                line: 362,
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
          50: {
            loc: {
              start: {
                line: 359,
                column: 6
              },
              end: {
                line: 361,
                column: 7
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 359,
                column: 6
              },
              end: {
                line: 361,
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
            line: 359
          },
          51: {
            loc: {
              start: {
                line: 368,
                column: 4
              },
              end: {
                line: 373,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 368,
                column: 4
              },
              end: {
                line: 373,
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
            line: 368
          },
          52: {
            loc: {
              start: {
                line: 377,
                column: 4
              },
              end: {
                line: 400,
                column: 5
              }
            },
            type: 'switch',
            locations: [{
              start: {
                line: 378,
                column: 6
              },
              end: {
                line: 380,
                column: 13
              }
            }, {
              start: {
                line: 381,
                column: 6
              },
              end: {
                line: 383,
                column: 13
              }
            }, {
              start: {
                line: 384,
                column: 6
              },
              end: {
                line: 386,
                column: 13
              }
            }, {
              start: {
                line: 387,
                column: 6
              },
              end: {
                line: 389,
                column: 13
              }
            }, {
              start: {
                line: 390,
                column: 6
              },
              end: {
                line: 394,
                column: 13
              }
            }, {
              start: {
                line: 395,
                column: 6
              },
              end: {
                line: 399,
                column: 13
              }
            }],
            line: 377
          },
          53: {
            loc: {
              start: {
                line: 396,
                column: 8
              },
              end: {
                line: 398,
                column: 9
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 396,
                column: 8
              },
              end: {
                line: 398,
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
            line: 396
          },
          54: {
            loc: {
              start: {
                line: 428,
                column: 31
              },
              end: {
                line: 429,
                column: 76
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 428,
                column: 31
              },
              end: {
                line: 428,
                column: 60
              }
            }, {
              start: {
                line: 429,
                column: 6
              },
              end: {
                line: 429,
                column: 18
              }
            }, {
              start: {
                line: 429,
                column: 22
              },
              end: {
                line: 429,
                column: 40
              }
            }, {
              start: {
                line: 429,
                column: 44
              },
              end: {
                line: 429,
                column: 57
              }
            }, {
              start: {
                line: 429,
                column: 61
              },
              end: {
                line: 429,
                column: 76
              }
            }],
            line: 428
          },
          55: {
            loc: {
              start: {
                line: 435,
                column: 33
              },
              end: {
                line: 435,
                column: 88
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 435,
                column: 54
              },
              end: {
                line: 435,
                column: 83
              }
            }, {
              start: {
                line: 435,
                column: 86
              },
              end: {
                line: 435,
                column: 88
              }
            }],
            line: 435
          },
          56: {
            loc: {
              start: {
                line: 436,
                column: 30
              },
              end: {
                line: 436,
                column: 126
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 436,
                column: 57
              },
              end: {
                line: 436,
                column: 94
              }
            }, {
              start: {
                line: 436,
                column: 97
              },
              end: {
                line: 436,
                column: 126
              }
            }],
            line: 436
          },
          57: {
            loc: {
              start: {
                line: 438,
                column: 26
              },
              end: {
                line: 438,
                column: 60
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 438,
                column: 26
              },
              end: {
                line: 438,
                column: 40
              }
            }, {
              start: {
                line: 438,
                column: 44
              },
              end: {
                line: 438,
                column: 60
              }
            }],
            line: 438
          },
          58: {
            loc: {
              start: {
                line: 442,
                column: 26
              },
              end: {
                line: 442,
                column: 56
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 442,
                column: 26
              },
              end: {
                line: 442,
                column: 34
              }
            }, {
              start: {
                line: 442,
                column: 38
              },
              end: {
                line: 442,
                column: 56
              }
            }],
            line: 442
          },
          59: {
            loc: {
              start: {
                line: 443,
                column: 56
              },
              end: {
                line: 443,
                column: 94
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 443,
                column: 74
              },
              end: {
                line: 443,
                column: 83
              }
            }, {
              start: {
                line: 443,
                column: 86
              },
              end: {
                line: 443,
                column: 94
              }
            }],
            line: 443
          },
          60: {
            loc: {
              start: {
                line: 449,
                column: 34
              },
              end: {
                line: 450,
                column: 73
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 449,
                column: 34
              },
              end: {
                line: 449,
                column: 52
              }
            }, {
              start: {
                line: 450,
                column: 6
              },
              end: {
                line: 450,
                column: 73
              }
            }],
            line: 449
          },
          61: {
            loc: {
              start: {
                line: 451,
                column: 22
              },
              end: {
                line: 453,
                column: 10
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 452,
                column: 8
              },
              end: {
                line: 452,
                column: 55
              }
            }, {
              start: {
                line: 453,
                column: 8
              },
              end: {
                line: 453,
                column: 10
              }
            }],
            line: 451
          },
          62: {
            loc: {
              start: {
                line: 451,
                column: 23
              },
              end: {
                line: 451,
                column: 58
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 451,
                column: 23
              },
              end: {
                line: 451,
                column: 44
              }
            }, {
              start: {
                line: 451,
                column: 48
              },
              end: {
                line: 451,
                column: 58
              }
            }],
            line: 451
          },
          63: {
            loc: {
              start: {
                line: 456,
                column: 30
              },
              end: {
                line: 460,
                column: 12
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 457,
                column: 8
              },
              end: {
                line: 459,
                column: 9
              }
            }, {
              start: {
                line: 460,
                column: 8
              },
              end: {
                line: 460,
                column: 12
              }
            }],
            line: 456
          },
          64: {
            loc: {
              start: {
                line: 465,
                column: 4
              },
              end: {
                line: 472,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 465,
                column: 4
              },
              end: {
                line: 472,
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
            line: 465
          },
          65: {
            loc: {
              start: {
                line: 469,
                column: 6
              },
              end: {
                line: 471,
                column: 7
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 469,
                column: 6
              },
              end: {
                line: 471,
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
            line: 469
          },
          66: {
            loc: {
              start: {
                line: 491,
                column: 9
              },
              end: {
                line: 493,
                column: 9
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 491,
                column: 9
              },
              end: {
                line: 491,
                column: 18
              }
            }, {
              start: {
                line: 492,
                column: 10
              },
              end: {
                line: 492,
                column: 99
              }
            }],
            line: 491
          },
          67: {
            loc: {
              start: {
                line: 496,
                column: 25
              },
              end: {
                line: 496,
                column: 52
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 496,
                column: 36
              },
              end: {
                line: 496,
                column: 42
              }
            }, {
              start: {
                line: 496,
                column: 45
              },
              end: {
                line: 496,
                column: 52
              }
            }],
            line: 496
          },
          68: {
            loc: {
              start: {
                line: 497,
                column: 33
              },
              end: {
                line: 497,
                column: 84
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 497,
                column: 49
              },
              end: {
                line: 497,
                column: 76
              }
            }, {
              start: {
                line: 497,
                column: 79
              },
              end: {
                line: 497,
                column: 84
              }
            }],
            line: 497
          },
          69: {
            loc: {
              start: {
                line: 499,
                column: 29
              },
              end: {
                line: 499,
                column: 69
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 499,
                column: 54
              },
              end: {
                line: 499,
                column: 60
              }
            }, {
              start: {
                line: 499,
                column: 63
              },
              end: {
                line: 499,
                column: 69
              }
            }],
            line: 499
          },
          70: {
            loc: {
              start: {
                line: 526,
                column: 32
              },
              end: {
                line: 526,
                column: 87
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 526,
                column: 49
              },
              end: {
                line: 526,
                column: 67
              }
            }, {
              start: {
                line: 526,
                column: 70
              },
              end: {
                line: 526,
                column: 87
              }
            }],
            line: 526
          },
          71: {
            loc: {
              start: {
                line: 527,
                column: 42
              },
              end: {
                line: 527,
                column: 111
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 527,
                column: 76
              },
              end: {
                line: 527,
                column: 106
              }
            }, {
              start: {
                line: 527,
                column: 109
              },
              end: {
                line: 527,
                column: 111
              }
            }],
            line: 527
          },
          72: {
            loc: {
              start: {
                line: 527,
                column: 42
              },
              end: {
                line: 527,
                column: 73
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 527,
                column: 42
              },
              end: {
                line: 527,
                column: 53
              }
            }, {
              start: {
                line: 527,
                column: 57
              },
              end: {
                line: 527,
                column: 73
              }
            }],
            line: 527
          },
          73: {
            loc: {
              start: {
                line: 528,
                column: 38
              },
              end: {
                line: 528,
                column: 83
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 528,
                column: 52
              },
              end: {
                line: 528,
                column: 78
              }
            }, {
              start: {
                line: 528,
                column: 81
              },
              end: {
                line: 528,
                column: 83
              }
            }],
            line: 528
          },
          74: {
            loc: {
              start: {
                line: 529,
                column: 36
              },
              end: {
                line: 533,
                column: 18
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 530,
                column: 16
              },
              end: {
                line: 532,
                column: 93
              }
            }, {
              start: {
                line: 533,
                column: 16
              },
              end: {
                line: 533,
                column: 18
              }
            }],
            line: 529
          },
          75: {
            loc: {
              start: {
                line: 537,
                column: 31
              },
              end: {
                line: 537,
                column: 67
              }
            },
            type: 'cond-expr',
            locations: [{
              start: {
                line: 537,
                column: 51
              },
              end: {
                line: 537,
                column: 57
              }
            }, {
              start: {
                line: 537,
                column: 60
              },
              end: {
                line: 537,
                column: 67
              }
            }],
            line: 537
          },
          76: {
            loc: {
              start: {
                line: 555,
                column: 11
              },
              end: {
                line: 557,
                column: 11
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 555,
                column: 11
              },
              end: {
                line: 555,
                column: 29
              }
            }, {
              start: {
                line: 556,
                column: 12
              },
              end: {
                line: 556,
                column: 99
              }
            }],
            line: 555
          }
        },
        s: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: 0,
          17: 0,
          18: 0,
          19: 0,
          20: 0,
          21: 0,
          22: 0,
          23: 0,
          24: 0,
          25: 0,
          26: 0,
          27: 0,
          28: 0,
          29: 0,
          30: 0,
          31: 0,
          32: 0,
          33: 0,
          34: 0,
          35: 0,
          36: 0,
          37: 0,
          38: 0,
          39: 0,
          40: 0,
          41: 0,
          42: 0,
          43: 0,
          44: 0,
          45: 0,
          46: 0,
          47: 0,
          48: 0,
          49: 0,
          50: 0,
          51: 0,
          52: 0,
          53: 0,
          54: 0,
          55: 0,
          56: 0,
          57: 0,
          58: 0,
          59: 0,
          60: 0,
          61: 0,
          62: 0,
          63: 0,
          64: 0,
          65: 0,
          66: 0,
          67: 0,
          68: 0,
          69: 0,
          70: 0,
          71: 0,
          72: 0,
          73: 0,
          74: 0,
          75: 0,
          76: 0,
          77: 0,
          78: 0,
          79: 0,
          80: 0,
          81: 0,
          82: 0,
          83: 0,
          84: 0,
          85: 0,
          86: 0,
          87: 0,
          88: 0,
          89: 0,
          90: 0,
          91: 0,
          92: 0,
          93: 0,
          94: 0,
          95: 0,
          96: 0,
          97: 0,
          98: 0,
          99: 0,
          100: 0,
          101: 0,
          102: 0,
          103: 0,
          104: 0,
          105: 0,
          106: 0,
          107: 0,
          108: 0,
          109: 0,
          110: 0,
          111: 0,
          112: 0,
          113: 0,
          114: 0,
          115: 0,
          116: 0,
          117: 0,
          118: 0,
          119: 0,
          120: 0,
          121: 0,
          122: 0,
          123: 0,
          124: 0,
          125: 0,
          126: 0,
          127: 0,
          128: 0,
          129: 0,
          130: 0,
          131: 0,
          132: 0,
          133: 0,
          134: 0,
          135: 0,
          136: 0,
          137: 0,
          138: 0,
          139: 0,
          140: 0,
          141: 0,
          142: 0,
          143: 0,
          144: 0,
          145: 0,
          146: 0,
          147: 0,
          148: 0,
          149: 0,
          150: 0,
          151: 0,
          152: 0,
          153: 0,
          154: 0,
          155: 0,
          156: 0,
          157: 0,
          158: 0,
          159: 0,
          160: 0,
          161: 0,
          162: 0,
          163: 0,
          164: 0,
          165: 0,
          166: 0,
          167: 0,
          168: 0,
          169: 0,
          170: 0,
          171: 0,
          172: 0,
          173: 0,
          174: 0,
          175: 0,
          176: 0,
          177: 0,
          178: 0,
          179: 0,
          180: 0,
          181: 0,
          182: 0,
          183: 0,
          184: 0,
          185: 0,
          186: 0,
          187: 0,
          188: 0,
          189: 0,
          190: 0,
          191: 0,
          192: 0,
          193: 0,
          194: 0,
          195: 0,
          196: 0,
          197: 0,
          198: 0,
          199: 0,
          200: 0,
          201: 0,
          202: 0
        },
        f: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: 0,
          17: 0,
          18: 0,
          19: 0,
          20: 0,
          21: 0,
          22: 0,
          23: 0,
          24: 0,
          25: 0,
          26: 0,
          27: 0,
          28: 0,
          29: 0,
          30: 0,
          31: 0,
          32: 0,
          33: 0,
          34: 0,
          35: 0,
          36: 0,
          37: 0,
          38: 0,
          39: 0,
          40: 0,
          41: 0,
          42: 0,
          43: 0,
          44: 0,
          45: 0,
          46: 0,
          47: 0
        },
        b: {
          0: [0, 0],
          1: [0, 0],
          2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          3: [0, 0],
          4: [0, 0],
          5: [0, 0],
          6: [0, 0],
          7: [0, 0],
          8: [0, 0],
          9: [0, 0],
          10: [0, 0],
          11: [0, 0],
          12: [0, 0],
          13: [0, 0],
          14: [0, 0],
          15: [0, 0],
          16: [0, 0],
          17: [0, 0],
          18: [0, 0],
          19: [0, 0],
          20: [0, 0],
          21: [0, 0],
          22: [0, 0, 0],
          23: [0, 0],
          24: [0, 0],
          25: [0, 0],
          26: [0, 0],
          27: [0, 0],
          28: [0, 0],
          29: [0, 0, 0, 0],
          30: [0, 0],
          31: [0, 0],
          32: [0, 0],
          33: [0, 0],
          34: [0, 0],
          35: [0, 0, 0],
          36: [0, 0],
          37: [0, 0],
          38: [0, 0],
          39: [0, 0],
          40: [0, 0],
          41: [0, 0],
          42: [0, 0],
          43: [0, 0],
          44: [0, 0],
          45: [0, 0],
          46: [0, 0],
          47: [0, 0, 0],
          48: [0, 0],
          49: [0, 0],
          50: [0, 0],
          51: [0, 0],
          52: [0, 0, 0, 0, 0, 0],
          53: [0, 0],
          54: [0, 0, 0, 0, 0],
          55: [0, 0],
          56: [0, 0],
          57: [0, 0],
          58: [0, 0],
          59: [0, 0],
          60: [0, 0],
          61: [0, 0],
          62: [0, 0],
          63: [0, 0],
          64: [0, 0],
          65: [0, 0],
          66: [0, 0],
          67: [0, 0],
          68: [0, 0],
          69: [0, 0],
          70: [0, 0],
          71: [0, 0],
          72: [0, 0],
          73: [0, 0],
          74: [0, 0],
          75: [0, 0],
          76: [0, 0]
        },
        _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
        hash: 'b1690ffcbfa522436af7f1ed7072591c5228aed5'
      }
      const coverage = global[gcv] || (global[gcv] = {})
      if (!coverage[path] || coverage[path].hash !== hash) {
        coverage[path] = coverageData
      }
      const actualCoverage = coverage[path]
      {
        // @ts-ignore
        cov_1bxywyv02a = function () {
          return actualCoverage
        }
      }
      return actualCoverage
    }
    cov_1bxywyv02a()
    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
    function _extends () { _extends = Object.assign ? Object.assign.bind() : function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key] } } } return target }; return _extends.apply(this, arguments) }
    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }
    function _inheritsLoose (subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass) }
    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }
    const IS_PREACT = (cov_1bxywyv02a().s[0]++, 'PREACT' === 'PREACT')
    const IS_REACT = (cov_1bxywyv02a().s[1]++, 'PREACT' === 'REACT')
    const keyCodes = (cov_1bxywyv02a().s[2]++, {
      13: 'enter',
      27: 'escape',
      32: 'space',
      38: 'up',
      40: 'down'
    })
    function isIosDevice () {
      cov_1bxywyv02a().f[0]++
      cov_1bxywyv02a().s[3]++
      return (cov_1bxywyv02a().b[0][0]++, typeof navigator !== 'undefined') && (cov_1bxywyv02a().b[0][1]++, !!((cov_1bxywyv02a().b[1][0]++, navigator.userAgent.match(/(iPod|iPhone|iPad)/g)) && (cov_1bxywyv02a().b[1][1]++, navigator.userAgent.match(/AppleWebKit/g))))
    }
    function isPrintableKeyCode (keyCode) {
      cov_1bxywyv02a().f[1]++
      cov_1bxywyv02a().s[4]++
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
    }

    // Preact does not implement onChange on inputs, but React does.
    function onChangeCrossLibrary (handler) {
      cov_1bxywyv02a().f[2]++
      cov_1bxywyv02a().s[5]++
      if (IS_PREACT) {
        cov_1bxywyv02a().b[3][0]++
        cov_1bxywyv02a().s[6]++
        return {
          onInput: handler
        }
      } else {
        cov_1bxywyv02a().b[3][1]++
      }
      cov_1bxywyv02a().s[7]++
      if (IS_REACT) {
        cov_1bxywyv02a().b[4][0]++
        cov_1bxywyv02a().s[8]++
        return {
          onChange: handler
        }
      } else {
        cov_1bxywyv02a().b[4][1]++
      }
    }
    const Autocomplete = /* #__PURE__ */(function (_Component) {
      _inheritsLoose(Autocomplete, _Component)
      function Autocomplete (props) {
        let _this
        cov_1bxywyv02a().f[6]++
        cov_1bxywyv02a().s[13]++
        _this = _Component.call(this, props) || this
        _this.elementReferences = (cov_1bxywyv02a().s[12]++, {})
        cov_1bxywyv02a().s[14]++
        _this.state = {
          focused: null,
          hovered: null,
          menuOpen: false,
          options: props.defaultValue ? (cov_1bxywyv02a().b[5][0]++, [props.defaultValue]) : (cov_1bxywyv02a().b[5][1]++, []),
          query: props.defaultValue,
          validChoiceMade: false,
          selected: null,
          ariaHint: true
        }
        cov_1bxywyv02a().s[15]++
        _this.handleComponentBlur = _this.handleComponentBlur.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[16]++
        _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[17]++
        _this.handleUpArrow = _this.handleUpArrow.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[18]++
        _this.handleDownArrow = _this.handleDownArrow.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[19]++
        _this.handleEnter = _this.handleEnter.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[20]++
        _this.handlePrintableKey = _this.handlePrintableKey.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[21]++
        _this.handleListMouseLeave = _this.handleListMouseLeave.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[22]++
        _this.handleOptionBlur = _this.handleOptionBlur.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[23]++
        _this.handleOptionClick = _this.handleOptionClick.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[24]++
        _this.handleOptionFocus = _this.handleOptionFocus.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[25]++
        _this.handleOptionMouseDown = _this.handleOptionMouseDown.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[26]++
        _this.handleOptionMouseEnter = _this.handleOptionMouseEnter.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[27]++
        _this.handleInputBlur = _this.handleInputBlur.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[28]++
        _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[29]++
        _this.handleInputFocus = _this.handleInputFocus.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[30]++
        _this.pollInputElement = _this.pollInputElement.bind(_assertThisInitialized(_this))
        cov_1bxywyv02a().s[31]++
        _this.getDirectInputChanges = _this.getDirectInputChanges.bind(_assertThisInitialized(_this))
        return _this
      }
      const _proto = Autocomplete.prototype
      _proto.isQueryAnOption = function isQueryAnOption (query, options) {
        const _this2 = this
        cov_1bxywyv02a().f[7]++
        cov_1bxywyv02a().s[32]++
        return options.map(function (entry) {
          cov_1bxywyv02a().f[8]++
          cov_1bxywyv02a().s[33]++
          return _this2.templateInputValue(entry).toLowerCase()
        }).indexOf(query.toLowerCase()) !== -1
      }
      _proto.componentDidMount = function componentDidMount () {
        cov_1bxywyv02a().f[9]++
        cov_1bxywyv02a().s[34]++
        this.pollInputElement()
      }
      _proto.componentWillUnmount = function componentWillUnmount () {
        cov_1bxywyv02a().f[10]++
        cov_1bxywyv02a().s[35]++
        clearTimeout(this.$pollInput)
      }

      // Applications like Dragon NaturallySpeaking will modify the
      // `input` field by directly changing its `.value`. These events
      // don't trigger our JavaScript event listeners, so we need to poll
      // to handle when and if they occur.

      _proto.pollInputElement = function pollInputElement () {
        const _this3 = this
        cov_1bxywyv02a().f[11]++
        cov_1bxywyv02a().s[36]++
        this.getDirectInputChanges()
        cov_1bxywyv02a().s[37]++
        this.$pollInput = setTimeout(function () {
          cov_1bxywyv02a().f[12]++
          cov_1bxywyv02a().s[38]++
          _this3.pollInputElement()
        }, 100)
      }
      _proto.getDirectInputChanges = function getDirectInputChanges () {
        cov_1bxywyv02a().f[13]++
        const inputReference = (cov_1bxywyv02a().s[39]++, this.elementReferences[-1])
        const queryHasChanged = (cov_1bxywyv02a().s[40]++, (cov_1bxywyv02a().b[6][0]++, inputReference) && (cov_1bxywyv02a().b[6][1]++, inputReference.value !== this.state.query))
        cov_1bxywyv02a().s[41]++
        if (queryHasChanged) {
          cov_1bxywyv02a().b[7][0]++
          cov_1bxywyv02a().s[42]++
          this.handleInputChange({
            target: {
              value: inputReference.value
            }
          })
        } else {
          cov_1bxywyv02a().b[7][1]++
        }
      }
      _proto.componentDidUpdate = function componentDidUpdate (prevProps, prevState) {
        cov_1bxywyv02a().f[14]++
        const _ref = (cov_1bxywyv02a().s[43]++, this.state)
        const focused = _ref.focused
        const componentLostFocus = (cov_1bxywyv02a().s[44]++, focused === null)
        const focusedChanged = (cov_1bxywyv02a().s[45]++, prevState.focused !== focused)
        const focusDifferentElement = (cov_1bxywyv02a().s[46]++, (cov_1bxywyv02a().b[8][0]++, focusedChanged) && (cov_1bxywyv02a().b[8][1]++, !componentLostFocus))
        cov_1bxywyv02a().s[47]++
        if (focusDifferentElement) {
          cov_1bxywyv02a().b[9][0]++
          cov_1bxywyv02a().s[48]++
          this.elementReferences[focused].focus()
        } else {
          cov_1bxywyv02a().b[9][1]++
        }
        const focusedInput = (cov_1bxywyv02a().s[49]++, focused === -1)
        const componentGainedFocus = (cov_1bxywyv02a().s[50]++, (cov_1bxywyv02a().b[10][0]++, focusedChanged) && (cov_1bxywyv02a().b[10][1]++, prevState.focused === null))
        const selectAllText = (cov_1bxywyv02a().s[51]++, (cov_1bxywyv02a().b[11][0]++, focusedInput) && (cov_1bxywyv02a().b[11][1]++, componentGainedFocus))
        cov_1bxywyv02a().s[52]++
        if (selectAllText) {
          cov_1bxywyv02a().b[12][0]++
          const inputElement = (cov_1bxywyv02a().s[53]++, this.elementReferences[focused])
          cov_1bxywyv02a().s[54]++
          inputElement.setSelectionRange(0, inputElement.value.length)
        } else {
          cov_1bxywyv02a().b[12][1]++
        }
      }
      _proto.hasAutoselect = function hasAutoselect () {
        cov_1bxywyv02a().f[15]++
        cov_1bxywyv02a().s[55]++
        return isIosDevice() ? (cov_1bxywyv02a().b[13][0]++, false) : (cov_1bxywyv02a().b[13][1]++, this.props.autoselect)
      }

      // This template is used when converting from a state.options object into a state.query.

      _proto.templateInputValue = function templateInputValue (value) {
        cov_1bxywyv02a().f[16]++
        const inputValueTemplate = (cov_1bxywyv02a().s[56]++, (cov_1bxywyv02a().b[14][0]++, this.props.templates) && (cov_1bxywyv02a().b[14][1]++, this.props.templates.inputValue))
        cov_1bxywyv02a().s[57]++
        return inputValueTemplate ? (cov_1bxywyv02a().b[15][0]++, inputValueTemplate(value)) : (cov_1bxywyv02a().b[15][1]++, value)
      }

      // This template is used when displaying results / suggestions.

      _proto.templateSuggestion = function templateSuggestion (value) {
        cov_1bxywyv02a().f[17]++
        const suggestionTemplate = (cov_1bxywyv02a().s[58]++, (cov_1bxywyv02a().b[16][0]++, this.props.templates) && (cov_1bxywyv02a().b[16][1]++, this.props.templates.suggestion))
        cov_1bxywyv02a().s[59]++
        return suggestionTemplate ? (cov_1bxywyv02a().b[17][0]++, suggestionTemplate(value)) : (cov_1bxywyv02a().b[17][1]++, value)
      }
      _proto.handleComponentBlur = function handleComponentBlur (newState) {
        cov_1bxywyv02a().f[18]++
        const _ref2 = (cov_1bxywyv02a().s[60]++, this.state)
        const options = _ref2.options
        const query = _ref2.query
        const selected = _ref2.selected
        let newQuery
        cov_1bxywyv02a().s[61]++
        if (this.props.confirmOnBlur) {
          cov_1bxywyv02a().b[18][0]++
          cov_1bxywyv02a().s[62]++
          newQuery = (cov_1bxywyv02a().b[19][0]++, newState.query) || (cov_1bxywyv02a().b[19][1]++, query)
          cov_1bxywyv02a().s[63]++
          this.props.onConfirm(options[selected])
        } else {
          cov_1bxywyv02a().b[18][1]++
          cov_1bxywyv02a().s[64]++
          newQuery = query
        }
        cov_1bxywyv02a().s[65]++
        this.setState({
          focused: null,
          menuOpen: (cov_1bxywyv02a().b[20][0]++, newState.menuOpen) || (cov_1bxywyv02a().b[20][1]++, false),
          query: newQuery,
          selected: null,
          validChoiceMade: this.isQueryAnOption(newQuery, options)
        })
      }
      _proto.handleListMouseLeave = function handleListMouseLeave (event) {
        cov_1bxywyv02a().f[19]++
        cov_1bxywyv02a().s[66]++
        this.setState({
          hovered: null
        })
      }
      _proto.handleOptionBlur = function handleOptionBlur (event, index) {
        cov_1bxywyv02a().f[20]++
        const _ref3 = (cov_1bxywyv02a().s[67]++, this.state)
        const focused = _ref3.focused
        const menuOpen = _ref3.menuOpen
        const options = _ref3.options
        const selected = _ref3.selected
        const focusingOutsideComponent = (cov_1bxywyv02a().s[68]++, event.relatedTarget === null)
        const focusingInput = (cov_1bxywyv02a().s[69]++, event.relatedTarget === this.elementReferences[-1])
        const focusingAnotherOption = (cov_1bxywyv02a().s[70]++, (cov_1bxywyv02a().b[21][0]++, focused !== index) && (cov_1bxywyv02a().b[21][1]++, focused !== -1))
        const blurComponent = (cov_1bxywyv02a().s[71]++, (cov_1bxywyv02a().b[22][0]++, !focusingAnotherOption) && (cov_1bxywyv02a().b[22][1]++, focusingOutsideComponent) || (cov_1bxywyv02a().b[22][2]++, !((cov_1bxywyv02a().b[23][0]++, focusingAnotherOption) || (cov_1bxywyv02a().b[23][1]++, focusingInput))))
        cov_1bxywyv02a().s[72]++
        if (blurComponent) {
          cov_1bxywyv02a().b[24][0]++
          const keepMenuOpen = (cov_1bxywyv02a().s[73]++, (cov_1bxywyv02a().b[25][0]++, menuOpen) && (cov_1bxywyv02a().b[25][1]++, isIosDevice()))
          cov_1bxywyv02a().s[74]++
          this.handleComponentBlur({
            menuOpen: keepMenuOpen,
            query: this.templateInputValue(options[selected])
          })
        } else {
          cov_1bxywyv02a().b[24][1]++
        }
      }
      _proto.handleInputBlur = function handleInputBlur (event) {
        cov_1bxywyv02a().f[21]++
        const _ref4 = (cov_1bxywyv02a().s[75]++, this.state)
        const focused = _ref4.focused
        const menuOpen = _ref4.menuOpen
        const options = _ref4.options
        const query = _ref4.query
        const selected = _ref4.selected
        const focusingAnOption = (cov_1bxywyv02a().s[76]++, focused !== -1)
        cov_1bxywyv02a().s[77]++
        if (!focusingAnOption) {
          cov_1bxywyv02a().b[26][0]++
          const keepMenuOpen = (cov_1bxywyv02a().s[78]++, (cov_1bxywyv02a().b[27][0]++, menuOpen) && (cov_1bxywyv02a().b[27][1]++, isIosDevice()))
          const newQuery = (cov_1bxywyv02a().s[79]++, isIosDevice() ? (cov_1bxywyv02a().b[28][0]++, query) : (cov_1bxywyv02a().b[28][1]++, this.templateInputValue(options[selected])))
          cov_1bxywyv02a().s[80]++
          this.handleComponentBlur({
            menuOpen: keepMenuOpen,
            query: newQuery
          })
        } else {
          cov_1bxywyv02a().b[26][1]++
        }
      }
      _proto.handleInputChange = function handleInputChange (event) {
        const _this4 = this
        cov_1bxywyv02a().f[22]++
        const _ref5 = (cov_1bxywyv02a().s[81]++, this.props)
        const minLength = _ref5.minLength
        const source = _ref5.source
        const showAllValues = _ref5.showAllValues
        const autoselect = (cov_1bxywyv02a().s[82]++, this.hasAutoselect())
        const query = (cov_1bxywyv02a().s[83]++, event.target.value)
        const queryEmpty = (cov_1bxywyv02a().s[84]++, query.length === 0)
        const queryChanged = (cov_1bxywyv02a().s[85]++, this.state.query.length !== query.length)
        const queryLongEnough = (cov_1bxywyv02a().s[86]++, query.length >= minLength)
        cov_1bxywyv02a().s[87]++
        this.setState({
          query,
          ariaHint: queryEmpty
        })
        const searchForOptions = (cov_1bxywyv02a().s[88]++, (cov_1bxywyv02a().b[29][0]++, showAllValues) || (cov_1bxywyv02a().b[29][1]++, !queryEmpty) && (cov_1bxywyv02a().b[29][2]++, queryChanged) && (cov_1bxywyv02a().b[29][3]++, queryLongEnough))
        cov_1bxywyv02a().s[89]++
        if (searchForOptions) {
          cov_1bxywyv02a().b[30][0]++
          cov_1bxywyv02a().s[90]++
          source(query, function (options) {
            cov_1bxywyv02a().f[23]++
            const optionsAvailable = (cov_1bxywyv02a().s[91]++, options.length > 0)
            cov_1bxywyv02a().s[92]++
            _this4.setState({
              menuOpen: optionsAvailable,
              options,
              selected: (cov_1bxywyv02a().b[32][0]++, autoselect) && (cov_1bxywyv02a().b[32][1]++, optionsAvailable) ? (cov_1bxywyv02a().b[31][0]++, 0) : (cov_1bxywyv02a().b[31][1]++, -1),
              validChoiceMade: false
            })
          })
        } else {
          cov_1bxywyv02a().b[30][1]++
          cov_1bxywyv02a().s[93]++
          if ((cov_1bxywyv02a().b[34][0]++, queryEmpty) || (cov_1bxywyv02a().b[34][1]++, !queryLongEnough)) {
            cov_1bxywyv02a().b[33][0]++
            cov_1bxywyv02a().s[94]++
            this.setState({
              menuOpen: false,
              options: []
            })
          } else {
            cov_1bxywyv02a().b[33][1]++
          }
        }
      }
      _proto.handleInputClick = function handleInputClick (event) {
        cov_1bxywyv02a().f[24]++
        cov_1bxywyv02a().s[95]++
        this.handleInputChange(event)
      }
      _proto.handleInputFocus = function handleInputFocus (event) {
        cov_1bxywyv02a().f[25]++
        const _ref6 = (cov_1bxywyv02a().s[96]++, this.state)
        const query = _ref6.query
        const validChoiceMade = _ref6.validChoiceMade
        const options = _ref6.options
        const _ref7 = (cov_1bxywyv02a().s[97]++, this.props)
        const minLength = _ref7.minLength
        const shouldReopenMenu = (cov_1bxywyv02a().s[98]++, (cov_1bxywyv02a().b[35][0]++, !validChoiceMade) && (cov_1bxywyv02a().b[35][1]++, query.length >= minLength) && (cov_1bxywyv02a().b[35][2]++, options.length > 0))
        cov_1bxywyv02a().s[99]++
        if (shouldReopenMenu) {
          cov_1bxywyv02a().b[36][0]++
          cov_1bxywyv02a().s[100]++
          this.setState(function (_ref8) {
            const menuOpen = _ref8.menuOpen
            cov_1bxywyv02a().f[26]++
            cov_1bxywyv02a().s[101]++
            return {
              focused: -1,
              menuOpen: (cov_1bxywyv02a().b[37][0]++, shouldReopenMenu) || (cov_1bxywyv02a().b[37][1]++, menuOpen),
              selected: -1
            }
          })
        } else {
          cov_1bxywyv02a().b[36][1]++
          cov_1bxywyv02a().s[102]++
          this.setState({
            focused: -1
          })
        }
      }
      _proto.handleOptionFocus = function handleOptionFocus (index) {
        cov_1bxywyv02a().f[27]++
        cov_1bxywyv02a().s[103]++
        this.setState({
          focused: index,
          hovered: null,
          selected: index
        })
      }
      _proto.handleOptionMouseEnter = function handleOptionMouseEnter (event, index) {
        cov_1bxywyv02a().f[28]++
        cov_1bxywyv02a().s[104]++
        // iOS Safari prevents click event if mouseenter adds hover background colour
        // See: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW4
        if (!isIosDevice()) {
          cov_1bxywyv02a().b[38][0]++
          cov_1bxywyv02a().s[105]++
          this.setState({
            hovered: index
          })
        } else {
          cov_1bxywyv02a().b[38][1]++
        }
      }
      _proto.handleOptionClick = function handleOptionClick (event, index) {
        cov_1bxywyv02a().f[29]++
        const selectedOption = (cov_1bxywyv02a().s[106]++, this.state.options[index])
        const newQuery = (cov_1bxywyv02a().s[107]++, this.templateInputValue(selectedOption))
        cov_1bxywyv02a().s[108]++
        this.props.onConfirm(selectedOption)
        cov_1bxywyv02a().s[109]++
        this.setState({
          focused: -1,
          hovered: null,
          menuOpen: false,
          query: newQuery,
          selected: -1,
          validChoiceMade: true
        })
        cov_1bxywyv02a().s[110]++
        this.forceUpdate()
      }
      _proto.handleOptionMouseDown = function handleOptionMouseDown (event) {
        cov_1bxywyv02a().f[30]++
        cov_1bxywyv02a().s[111]++
        // Safari triggers focusOut before click, but if you
        // preventDefault on mouseDown, you can stop that from happening.
        // If this is removed, clicking on an option in Safari will trigger
        // `handleOptionBlur`, which closes the menu, and the click will
        // trigger on the element underneath instead.
        // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
        event.preventDefault()
      }
      _proto.handleUpArrow = function handleUpArrow (event) {
        cov_1bxywyv02a().f[31]++
        cov_1bxywyv02a().s[112]++
        event.preventDefault()
        const _ref9 = (cov_1bxywyv02a().s[113]++, this.state)
        const menuOpen = _ref9.menuOpen
        const selected = _ref9.selected
        const isNotAtTop = (cov_1bxywyv02a().s[114]++, selected !== -1)
        const allowMoveUp = (cov_1bxywyv02a().s[115]++, (cov_1bxywyv02a().b[39][0]++, isNotAtTop) && (cov_1bxywyv02a().b[39][1]++, menuOpen))
        cov_1bxywyv02a().s[116]++
        if (allowMoveUp) {
          cov_1bxywyv02a().b[40][0]++
          cov_1bxywyv02a().s[117]++
          this.handleOptionFocus(selected - 1)
        } else {
          cov_1bxywyv02a().b[40][1]++
        }
      }
      _proto.handleDownArrow = function handleDownArrow (event) {
        const _this5 = this
        cov_1bxywyv02a().f[32]++
        cov_1bxywyv02a().s[118]++
        event.preventDefault()
        // if not open, open
        cov_1bxywyv02a().s[119]++
        if ((cov_1bxywyv02a().b[42][0]++, this.props.showAllValues) && (cov_1bxywyv02a().b[42][1]++, this.state.menuOpen === false)) {
          cov_1bxywyv02a().b[41][0]++
          cov_1bxywyv02a().s[120]++
          event.preventDefault()
          cov_1bxywyv02a().s[121]++
          this.props.source('', function (options) {
            cov_1bxywyv02a().f[33]++
            cov_1bxywyv02a().s[122]++
            _this5.setState({
              menuOpen: true,
              options,
              selected: 0,
              focused: 0,
              hovered: null
            })
          })
        } else {
          cov_1bxywyv02a().b[41][1]++
          cov_1bxywyv02a().s[123]++
          if (this.state.menuOpen === true) {
            cov_1bxywyv02a().b[43][0]++
            const _ref10 = (cov_1bxywyv02a().s[124]++, this.state)
            const menuOpen = _ref10.menuOpen
            const options = _ref10.options
            const selected = _ref10.selected
            const isNotAtBottom = (cov_1bxywyv02a().s[125]++, selected !== options.length - 1)
            const allowMoveDown = (cov_1bxywyv02a().s[126]++, (cov_1bxywyv02a().b[44][0]++, isNotAtBottom) && (cov_1bxywyv02a().b[44][1]++, menuOpen))
            cov_1bxywyv02a().s[127]++
            if (allowMoveDown) {
              cov_1bxywyv02a().b[45][0]++
              cov_1bxywyv02a().s[128]++
              this.handleOptionFocus(selected + 1)
            } else {
              cov_1bxywyv02a().b[45][1]++
            }
          } else {
            cov_1bxywyv02a().b[43][1]++
          }
        }
      }
      _proto.handleSpace = function handleSpace (event) {
        const _this6 = this
        cov_1bxywyv02a().f[34]++
        cov_1bxywyv02a().s[129]++
        // if not open, open
        if ((cov_1bxywyv02a().b[47][0]++, this.props.showAllValues) && (cov_1bxywyv02a().b[47][1]++, this.state.menuOpen === false) && (cov_1bxywyv02a().b[47][2]++, this.state.query === '')) {
          cov_1bxywyv02a().b[46][0]++
          cov_1bxywyv02a().s[130]++
          event.preventDefault()
          cov_1bxywyv02a().s[131]++
          this.props.source('', function (options) {
            cov_1bxywyv02a().f[35]++
            cov_1bxywyv02a().s[132]++
            _this6.setState({
              menuOpen: true,
              options
            })
          })
        } else {
          cov_1bxywyv02a().b[46][1]++
        }
        const focusIsOnOption = (cov_1bxywyv02a().s[133]++, this.state.focused !== -1)
        cov_1bxywyv02a().s[134]++
        if (focusIsOnOption) {
          cov_1bxywyv02a().b[48][0]++
          cov_1bxywyv02a().s[135]++
          event.preventDefault()
          cov_1bxywyv02a().s[136]++
          this.handleOptionClick(event, this.state.focused)
        } else {
          cov_1bxywyv02a().b[48][1]++
        }
      }
      _proto.handleEnter = function handleEnter (event) {
        cov_1bxywyv02a().f[36]++
        cov_1bxywyv02a().s[137]++
        if (this.state.menuOpen) {
          cov_1bxywyv02a().b[49][0]++
          cov_1bxywyv02a().s[138]++
          event.preventDefault()
          const hasSelectedOption = (cov_1bxywyv02a().s[139]++, this.state.selected >= 0)
          cov_1bxywyv02a().s[140]++
          if (hasSelectedOption) {
            cov_1bxywyv02a().b[50][0]++
            cov_1bxywyv02a().s[141]++
            this.handleOptionClick(event, this.state.selected)
          } else {
            cov_1bxywyv02a().b[50][1]++
          }
        } else {
          cov_1bxywyv02a().b[49][1]++
        }
      }
      _proto.handlePrintableKey = function handlePrintableKey (event) {
        cov_1bxywyv02a().f[37]++
        const inputElement = (cov_1bxywyv02a().s[142]++, this.elementReferences[-1])
        const eventIsOnInput = (cov_1bxywyv02a().s[143]++, event.target === inputElement)
        cov_1bxywyv02a().s[144]++
        if (!eventIsOnInput) {
          cov_1bxywyv02a().b[51][0]++
          cov_1bxywyv02a().s[145]++
          // FIXME: This would be better if it was in componentDidUpdate,
          // but using setState to trigger that seems to not work correctly
          // in preact@8.1.0.
          inputElement.focus()
        } else {
          cov_1bxywyv02a().b[51][1]++
        }
      }
      _proto.handleKeyDown = function handleKeyDown (event) {
        cov_1bxywyv02a().f[38]++
        cov_1bxywyv02a().s[146]++
        switch (keyCodes[event.keyCode]) {
          case 'up':
            cov_1bxywyv02a().b[52][0]++
            cov_1bxywyv02a().s[147]++
            this.handleUpArrow(event)
            cov_1bxywyv02a().s[148]++
            break
          case 'down':
            cov_1bxywyv02a().b[52][1]++
            cov_1bxywyv02a().s[149]++
            this.handleDownArrow(event)
            cov_1bxywyv02a().s[150]++
            break
          case 'space':
            cov_1bxywyv02a().b[52][2]++
            cov_1bxywyv02a().s[151]++
            this.handleSpace(event)
            cov_1bxywyv02a().s[152]++
            break
          case 'enter':
            cov_1bxywyv02a().b[52][3]++
            cov_1bxywyv02a().s[153]++
            this.handleEnter(event)
            cov_1bxywyv02a().s[154]++
            break
          case 'escape':
            cov_1bxywyv02a().b[52][4]++
            cov_1bxywyv02a().s[155]++
            this.handleComponentBlur({
              query: this.state.query
            })
            cov_1bxywyv02a().s[156]++
            break
          default:
            cov_1bxywyv02a().b[52][5]++
            cov_1bxywyv02a().s[157]++
            if (isPrintableKeyCode(event.keyCode)) {
              cov_1bxywyv02a().b[53][0]++
              cov_1bxywyv02a().s[158]++
              this.handlePrintableKey(event)
            } else {
              cov_1bxywyv02a().b[53][1]++
            }
            cov_1bxywyv02a().s[159]++
            break
        }
      }
      _proto.render = function render () {
        const _this7 = this
        cov_1bxywyv02a().f[39]++
        const _ref11 = (cov_1bxywyv02a().s[160]++, this.props)
        const cssNamespace = _ref11.cssNamespace
        const displayMenu = _ref11.displayMenu
        const id = _ref11.id
        const minLength = _ref11.minLength
        const name = _ref11.name
        const placeholder = _ref11.placeholder
        const required = _ref11.required
        const showAllValues = _ref11.showAllValues
        const tNoResults = _ref11.tNoResults
        const tStatusQueryTooShort = _ref11.tStatusQueryTooShort
        const tStatusNoResults = _ref11.tStatusNoResults
        const tStatusSelectedOption = _ref11.tStatusSelectedOption
        const tStatusResults = _ref11.tStatusResults
        const tAssistiveHint = _ref11.tAssistiveHint
        const dropdownArrowFactory = _ref11.dropdownArrow
        const _ref12 = (cov_1bxywyv02a().s[161]++, this.state)
        const focused = _ref12.focused
        const hovered = _ref12.hovered
        const menuOpen = _ref12.menuOpen
        const options = _ref12.options
        const query = _ref12.query
        const selected = _ref12.selected
        const ariaHint = _ref12.ariaHint
        const validChoiceMade = _ref12.validChoiceMade
        const autoselect = (cov_1bxywyv02a().s[162]++, this.hasAutoselect())
        const inputFocused = (cov_1bxywyv02a().s[163]++, focused === -1)
        const noOptionsAvailable = (cov_1bxywyv02a().s[164]++, options.length === 0)
        const queryNotEmpty = (cov_1bxywyv02a().s[165]++, query.length !== 0)
        const queryLongEnough = (cov_1bxywyv02a().s[166]++, query.length >= minLength)
        const showNoOptionsFound = (cov_1bxywyv02a().s[167]++, (cov_1bxywyv02a().b[54][0]++, this.props.showNoOptionsFound) && (cov_1bxywyv02a().b[54][1]++, inputFocused) && (cov_1bxywyv02a().b[54][2]++, noOptionsAvailable) && (cov_1bxywyv02a().b[54][3]++, queryNotEmpty) && (cov_1bxywyv02a().b[54][4]++, queryLongEnough))
        const wrapperClassName = (cov_1bxywyv02a().s[168]++, cssNamespace + '__wrapper')
        const inputClassName = (cov_1bxywyv02a().s[169]++, cssNamespace + '__input')
        const componentIsFocused = (cov_1bxywyv02a().s[170]++, focused !== null)
        const inputModifierFocused = (cov_1bxywyv02a().s[171]++, componentIsFocused ? (cov_1bxywyv02a().b[55][0]++, ' ' + inputClassName + '--focused') : (cov_1bxywyv02a().b[55][1]++, ''))
        const inputModifierType = (cov_1bxywyv02a().s[172]++, this.props.showAllValues ? (cov_1bxywyv02a().b[56][0]++, ' ' + inputClassName + '--show-all-values') : (cov_1bxywyv02a().b[56][1]++, ' ' + inputClassName + '--default'))
        const dropdownArrowClassName = (cov_1bxywyv02a().s[173]++, cssNamespace + '__dropdown-arrow-down')
        const optionFocused = (cov_1bxywyv02a().s[174]++, (cov_1bxywyv02a().b[57][0]++, focused !== -1) && (cov_1bxywyv02a().b[57][1]++, focused !== null))
        const menuClassName = (cov_1bxywyv02a().s[175]++, cssNamespace + '__menu')
        const menuModifierDisplayMenu = (cov_1bxywyv02a().s[176]++, menuClassName + '--' + displayMenu)
        const menuIsVisible = (cov_1bxywyv02a().s[177]++, (cov_1bxywyv02a().b[58][0]++, menuOpen) || (cov_1bxywyv02a().b[58][1]++, showNoOptionsFound))
        const menuModifierVisibility = (cov_1bxywyv02a().s[178]++, menuClassName + '--' + (menuIsVisible ? (cov_1bxywyv02a().b[59][0]++, 'visible') : (cov_1bxywyv02a().b[59][1]++, 'hidden')))
        const optionClassName = (cov_1bxywyv02a().s[179]++, cssNamespace + '__option')
        const hintClassName = (cov_1bxywyv02a().s[180]++, cssNamespace + '__hint')
        const selectedOptionText = (cov_1bxywyv02a().s[181]++, this.templateInputValue(options[selected]))
        const optionBeginsWithQuery = (cov_1bxywyv02a().s[182]++, (cov_1bxywyv02a().b[60][0]++, selectedOptionText) && (cov_1bxywyv02a().b[60][1]++, selectedOptionText.toLowerCase().indexOf(query.toLowerCase()) === 0))
        const hintValue = (cov_1bxywyv02a().s[183]++, (cov_1bxywyv02a().b[62][0]++, optionBeginsWithQuery) && (cov_1bxywyv02a().b[62][1]++, autoselect) ? (cov_1bxywyv02a().b[61][0]++, query + selectedOptionText.substr(query.length)) : (cov_1bxywyv02a().b[61][1]++, ''))
        const assistiveHintID = (cov_1bxywyv02a().s[184]++, id + '__assistiveHint')
        const ariaDescribedProp = (cov_1bxywyv02a().s[185]++, ariaHint
          ? (cov_1bxywyv02a().b[63][0]++, {
              'aria-describedby': assistiveHintID
            })
          : (cov_1bxywyv02a().b[63][1]++, null))
        let dropdownArrow

        // we only need a dropdown arrow if showAllValues is set to a truthy value
        cov_1bxywyv02a().s[186]++
        if (showAllValues) {
          cov_1bxywyv02a().b[64][0]++
          cov_1bxywyv02a().s[187]++
          dropdownArrow = dropdownArrowFactory({
            className: dropdownArrowClassName
          })

          // if the factory returns a string we'll render this as HTML (usage w/o (P)React)
          cov_1bxywyv02a().s[188]++
          if (typeof dropdownArrow === 'string') {
            cov_1bxywyv02a().b[65][0]++
            cov_1bxywyv02a().s[189]++
            dropdownArrow = (0, _preact.createElement)('div', {
              className: cssNamespace + '__dropdown-arrow-down-wrapper',
              dangerouslySetInnerHTML: {
                __html: dropdownArrow
              }
            })
          } else {
            cov_1bxywyv02a().b[65][1]++
          }
        } else {
          cov_1bxywyv02a().b[64][1]++
        }
        cov_1bxywyv02a().s[190]++
        return (0, _preact.createElement)('div', {
          className: wrapperClassName,
          onKeyDown: this.handleKeyDown
        }, (0, _preact.createElement)(_status.default, {
          id,
          length: options.length,
          queryLength: query.length,
          minQueryLength: minLength,
          selectedOption: this.templateInputValue(options[selected]),
          selectedOptionIndex: selected,
          validChoiceMade,
          isInFocus: this.state.focused !== null,
          tQueryTooShort: tStatusQueryTooShort,
          tNoResults: tStatusNoResults,
          tSelectedOption: tStatusSelectedOption,
          tResults: tStatusResults
        }), (cov_1bxywyv02a().b[66][0]++, hintValue) && (cov_1bxywyv02a().b[66][1]++, (0, _preact.createElement)('span', null, (0, _preact.createElement)('input', {
          className: hintClassName,
          readonly: true,
          tabIndex: '-1',
          value: hintValue
        }))), (0, _preact.createElement)('input', _extends({
          'aria-expanded': menuOpen ? (cov_1bxywyv02a().b[67][0]++, 'true') : (cov_1bxywyv02a().b[67][1]++, 'false'),
          'aria-activedescendant': optionFocused ? (cov_1bxywyv02a().b[68][0]++, id + '__option--' + focused) : (cov_1bxywyv02a().b[68][1]++, false),
          'aria-owns': id + '__listbox',
          'aria-autocomplete': this.hasAutoselect() ? (cov_1bxywyv02a().b[69][0]++, 'both') : (cov_1bxywyv02a().b[69][1]++, 'list')
        }, ariaDescribedProp, {
          autoComplete: 'off',
          className: '' + inputClassName + inputModifierFocused + inputModifierType,
          id,
          onClick: function onClick (event) {
            cov_1bxywyv02a().f[40]++
            cov_1bxywyv02a().s[191]++
            return _this7.handleInputClick(event)
          },
          onBlur: this.handleInputBlur
        }, onChangeCrossLibrary(this.handleInputChange), {
          onFocus: this.handleInputFocus,
          name,
          placeholder,
          ref: function ref (inputElement) {
            cov_1bxywyv02a().f[41]++
            cov_1bxywyv02a().s[192]++
            _this7.elementReferences[-1] = inputElement
          },
          type: 'text',
          role: 'combobox',
          required,
          value: query
        })), dropdownArrow, (0, _preact.createElement)('ul', {
          className: menuClassName + ' ' + menuModifierDisplayMenu + ' ' + menuModifierVisibility,
          onMouseLeave: function onMouseLeave (event) {
            cov_1bxywyv02a().f[42]++
            cov_1bxywyv02a().s[193]++
            return _this7.handleListMouseLeave(event)
          },
          id: id + '__listbox',
          role: 'listbox'
        }, options.map(function (option, index) {
          cov_1bxywyv02a().f[43]++
          const showFocused = (cov_1bxywyv02a().s[194]++, focused === -1 ? (cov_1bxywyv02a().b[70][0]++, selected === index) : (cov_1bxywyv02a().b[70][1]++, focused === index))
          const optionModifierFocused = (cov_1bxywyv02a().s[195]++, (cov_1bxywyv02a().b[72][0]++, showFocused) && (cov_1bxywyv02a().b[72][1]++, hovered === null) ? (cov_1bxywyv02a().b[71][0]++, ' ' + optionClassName + '--focused') : (cov_1bxywyv02a().b[71][1]++, ''))
          const optionModifierOdd = (cov_1bxywyv02a().s[196]++, index % 2 ? (cov_1bxywyv02a().b[73][0]++, ' ' + optionClassName + '--odd') : (cov_1bxywyv02a().b[73][1]++, ''))
          const iosPosinsetHtml = (cov_1bxywyv02a().s[197]++, isIosDevice() ? (cov_1bxywyv02a().b[74][0]++, '<span id=' + id + '__option-suffix--' + index + ' style="border:0;clip:rect(0 0 0 0);height:1px;' + 'marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;' + 'whiteSpace:nowrap;width:1px">' + (' ' + (index + 1) + ' of ' + options.length + '</span>')) : (cov_1bxywyv02a().b[74][1]++, ''))
          cov_1bxywyv02a().s[198]++
          return (0, _preact.createElement)('li', {
            'aria-selected': focused === index ? (cov_1bxywyv02a().b[75][0]++, 'true') : (cov_1bxywyv02a().b[75][1]++, 'false'),
            className: '' + optionClassName + optionModifierFocused + optionModifierOdd,
            dangerouslySetInnerHTML: {
              __html: _this7.templateSuggestion(option) + iosPosinsetHtml
            },
            id: id + '__option--' + index,
            key: index,
            onBlur: function onBlur (event) {
              cov_1bxywyv02a().f[44]++
              cov_1bxywyv02a().s[199]++
              return _this7.handleOptionBlur(event, index)
            },
            onClick: function onClick (event) {
              cov_1bxywyv02a().f[45]++
              cov_1bxywyv02a().s[200]++
              return _this7.handleOptionClick(event, index)
            },
            onMouseDown: _this7.handleOptionMouseDown,
            onMouseEnter: function onMouseEnter (event) {
              cov_1bxywyv02a().f[46]++
              cov_1bxywyv02a().s[201]++
              return _this7.handleOptionMouseEnter(event, index)
            },
            ref: function ref (optionEl) {
              cov_1bxywyv02a().f[47]++
              cov_1bxywyv02a().s[202]++
              _this7.elementReferences[index] = optionEl
            },
            role: 'option',
            tabIndex: '-1',
            'aria-posinset': index + 1,
            'aria-setsize': options.length
          })
        }), (cov_1bxywyv02a().b[76][0]++, showNoOptionsFound) && (cov_1bxywyv02a().b[76][1]++, (0, _preact.createElement)('li', {
          className: optionClassName + ' ' + optionClassName + '--no-results'
        }, tNoResults()))), (0, _preact.createElement)('span', {
          id: assistiveHintID,
          style: {
            display: 'none'
          }
        }, tAssistiveHint()))
      }
      return Autocomplete
    }(_preact.Component))
    exports.default = Autocomplete
    Autocomplete.defaultProps = (cov_1bxywyv02a().s[9]++, {
      autoselect: false,
      cssNamespace: 'autocomplete',
      defaultValue: '',
      displayMenu: 'inline',
      minLength: 0,
      name: 'input-autocomplete',
      placeholder: '',
      onConfirm: function onConfirm () {
        cov_1bxywyv02a().f[3]++
      },
      confirmOnBlur: true,
      showNoOptionsFound: true,
      showAllValues: false,
      required: false,
      tNoResults: function tNoResults () {
        cov_1bxywyv02a().f[4]++
        cov_1bxywyv02a().s[10]++
        return 'No results found'
      },
      tAssistiveHint: function tAssistiveHint () {
        cov_1bxywyv02a().f[5]++
        cov_1bxywyv02a().s[11]++
        return 'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.'
      },
      dropdownArrow: _dropdownArrowDown.default
    })
    /***/ },

  /***/ './dropdown-arrow-down.js':
  /*! ********************************!*\
  !*** ./dropdown-arrow-down.js ***!
  \********************************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.default = void 0
    const _preact = __webpack_require__(/*! preact */ '../node_modules/preact/dist/preact.module.js')
    function cov_192iwtkok3 () {
      const path = '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/dropdown-arrow-down.js'
      const hash = '43b7dec6781c495ddc1c5d0ea94ed41f507b63ee'
      const global = new Function('return this')()
      const gcv = '__coverage__'
      const coverageData = {
        path: '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/dropdown-arrow-down.js',
        statementMap: {
          0: {
            start: {
              line: 3,
              column: 26
            },
            end: {
              line: 9,
              column: 1
            }
          },
          1: {
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
          0: {
            name: '(anonymous_0)',
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
          0: 0,
          1: 0
        },
        f: {
          0: 0
        },
        b: {},
        _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
        hash: '43b7dec6781c495ddc1c5d0ea94ed41f507b63ee'
      }
      const coverage = global[gcv] || (global[gcv] = {})
      if (!coverage[path] || coverage[path].hash !== hash) {
        coverage[path] = coverageData
      }
      const actualCoverage = coverage[path]
      {
        // @ts-ignore
        cov_192iwtkok3 = function () {
          return actualCoverage
        }
      }
      return actualCoverage
    }
    cov_192iwtkok3()
    cov_192iwtkok3().s[0]++
    /** @jsx createElement */

    const DropdownArrowDown = function DropdownArrowDown (_ref) {
      const className = _ref.className
      cov_192iwtkok3().f[0]++
      cov_192iwtkok3().s[1]++
      return (0, _preact.createElement)('svg', {
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        className,
        focusable: 'false'
      }, (0, _preact.createElement)('g', {
        stroke: 'none',
        fill: 'none',
        'fill-rule': 'evenodd'
      }, (0, _preact.createElement)('polygon', {
        fill: '#000000',
        points: '0 0 22 0 11 17'
      })))
    }
    const _default = DropdownArrowDown
    exports.default = _default
    /***/ },

  /***/ './status.js':
  /*! *******************!*\
  !*** ./status.js ***!
  \*******************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ '../node_modules/core-js/modules/es.object.set-prototype-of.js')
    __webpack_require__(/*! core-js/modules/es.function.bind.js */ '../node_modules/core-js/modules/es.function.bind.js')
    __webpack_require__(/*! core-js/modules/es.object.create.js */ '../node_modules/core-js/modules/es.object.create.js')
    exports.__esModule = true
    exports.default = void 0
    __webpack_require__(/*! core-js/modules/web.timers.js */ '../node_modules/core-js/modules/web.timers.js')
    __webpack_require__(/*! core-js/modules/es.array.concat.js */ '../node_modules/core-js/modules/es.array.concat.js')
    const _preact = __webpack_require__(/*! preact */ '../node_modules/preact/dist/preact.module.js')
    function cov_293hbdrhm0 () {
      const path = '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/status.js'
      const hash = 'bb6389f3f7ce46e28cf8407e1bde5a2012602893'
      const global = new Function('return this')()
      const gcv = '__coverage__'
      const coverageData = {
        path: '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/status.js',
        statementMap: {
          0: {
            start: {
              line: 3,
              column: 17
            },
            end: {
              line: 17,
              column: 1
            }
          },
          1: {
            start: {
              line: 5,
              column: 2
            },
            end: {
              line: 16,
              column: 3
            }
          },
          2: {
            start: {
              line: 6,
              column: 20
            },
            end: {
              line: 6,
              column: 24
            }
          },
          3: {
            start: {
              line: 7,
              column: 17
            },
            end: {
              line: 7,
              column: 26
            }
          },
          4: {
            start: {
              line: 8,
              column: 18
            },
            end: {
              line: 11,
              column: 5
            }
          },
          5: {
            start: {
              line: 9,
              column: 6
            },
            end: {
              line: 9,
              column: 20
            }
          },
          6: {
            start: {
              line: 10,
              column: 6
            },
            end: {
              line: 10,
              column: 47
            }
          },
          7: {
            start: {
              line: 10,
              column: 22
            },
            end: {
              line: 10,
              column: 47
            }
          },
          8: {
            start: {
              line: 12,
              column: 20
            },
            end: {
              line: 12,
              column: 41
            }
          },
          9: {
            start: {
              line: 13,
              column: 4
            },
            end: {
              line: 13,
              column: 25
            }
          },
          10: {
            start: {
              line: 14,
              column: 4
            },
            end: {
              line: 14,
              column: 37
            }
          },
          11: {
            start: {
              line: 15,
              column: 4
            },
            end: {
              line: 15,
              column: 42
            }
          },
          12: {
            start: {
              line: 15,
              column: 17
            },
            end: {
              line: 15,
              column: 42
            }
          },
          13: {
            start: {
              line: 18,
              column: 29
            },
            end: {
              line: 18,
              column: 33
            }
          },
          14: {
            start: {
              line: 21,
              column: 24
            },
            end: {
              line: 33,
              column: 3
            }
          },
          15: {
            start: {
              line: 22,
              column: 40
            },
            end: {
              line: 22,
              column: 98
            }
          },
          16: {
            start: {
              line: 23,
              column: 22
            },
            end: {
              line: 23,
              column: 41
            }
          },
          17: {
            start: {
              line: 24,
              column: 56
            },
            end: {
              line: 24,
              column: 116
            }
          },
          18: {
            start: {
              line: 26,
              column: 20
            },
            end: {
              line: 29,
              column: 7
            }
          },
          19: {
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 31,
              column: 88
            }
          },
          20: {
            start: {
              line: 35,
              column: 10
            },
            end: {
              line: 38,
              column: 3
            }
          },
          21: {
            start: {
              line: 41,
              column: 17
            },
            end: {
              line: 41,
              column: 21
            }
          },
          22: {
            start: {
              line: 42,
              column: 4
            },
            end: {
              line: 47,
              column: 28
            }
          },
          23: {
            start: {
              line: 43,
              column: 6
            },
            end: {
              line: 46,
              column: 7
            }
          },
          24: {
            start: {
              line: 44,
              column: 30
            },
            end: {
              line: 44,
              column: 81
            }
          },
          25: {
            start: {
              line: 45,
              column: 8
            },
            end: {
              line: 45,
              column: 96
            }
          },
          26: {
            start: {
              line: 45,
              column: 37
            },
            end: {
              line: 45,
              column: 94
            }
          },
          27: {
            start: {
              line: 51,
              column: 4
            },
            end: {
              line: 51,
              column: 39
            }
          },
          28: {
            start: {
              line: 66,
              column: 8
            },
            end: {
              line: 66,
              column: 18
            }
          },
          29: {
            start: {
              line: 67,
              column: 42
            },
            end: {
              line: 67,
              column: 52
            }
          },
          30: {
            start: {
              line: 69,
              column: 26
            },
            end: {
              line: 69,
              column: 54
            }
          },
          31: {
            start: {
              line: 70,
              column: 22
            },
            end: {
              line: 70,
              column: 34
            }
          },
          32: {
            start: {
              line: 72,
              column: 34
            },
            end: {
              line: 74,
              column: 10
            }
          },
          33: {
            start: {
              line: 76,
              column: 18
            },
            end: {
              line: 76,
              column: 22
            }
          },
          34: {
            start: {
              line: 77,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          },
          35: {
            start: {
              line: 78,
              column: 6
            },
            end: {
              line: 78,
              column: 46
            }
          },
          36: {
            start: {
              line: 79,
              column: 11
            },
            end: {
              line: 83,
              column: 5
            }
          },
          37: {
            start: {
              line: 80,
              column: 6
            },
            end: {
              line: 80,
              column: 28
            }
          },
          38: {
            start: {
              line: 82,
              column: 6
            },
            end: {
              line: 82,
              column: 55
            }
          },
          39: {
            start: {
              line: 85,
              column: 4
            },
            end: {
              line: 85,
              column: 31
            }
          },
          40: {
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
          0: {
            name: '(anonymous_0)',
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
          1: {
            name: '(anonymous_1)',
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
          2: {
            name: '(anonymous_2)',
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
          3: {
            name: '(anonymous_3)',
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
          4: {
            name: '(anonymous_4)',
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
          5: {
            name: '(anonymous_5)',
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
          6: {
            name: '(anonymous_6)',
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
          7: {
            name: '(anonymous_7)',
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
          8: {
            name: '(anonymous_8)',
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
          9: {
            name: '(anonymous_9)',
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
          10: {
            name: '(anonymous_10)',
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
          11: {
            name: '(anonymous_11)',
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
          0: {
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
            type: 'if',
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
          1: {
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
            type: 'binary-expr',
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
          2: {
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
            type: 'if',
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
          3: {
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
            type: 'cond-expr',
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
          4: {
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
            type: 'cond-expr',
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
          5: {
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
            type: 'if',
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
          6: {
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
            type: 'binary-expr',
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
          7: {
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
            type: 'cond-expr',
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
          8: {
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
            type: 'if',
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
          9: {
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
            type: 'if',
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
          10: {
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
            type: 'cond-expr',
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
          11: {
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
            type: 'binary-expr',
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
          12: {
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
            type: 'cond-expr',
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
          13: {
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
            type: 'binary-expr',
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
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: 0,
          17: 0,
          18: 0,
          19: 0,
          20: 0,
          21: 0,
          22: 0,
          23: 0,
          24: 0,
          25: 0,
          26: 0,
          27: 0,
          28: 0,
          29: 0,
          30: 0,
          31: 0,
          32: 0,
          33: 0,
          34: 0,
          35: 0,
          36: 0,
          37: 0,
          38: 0,
          39: 0,
          40: 0
        },
        f: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0
        },
        b: {
          0: [0, 0],
          1: [0, 0],
          2: [0, 0],
          3: [0, 0],
          4: [0, 0],
          5: [0, 0],
          6: [0, 0],
          7: [0, 0],
          8: [0, 0],
          9: [0, 0],
          10: [0, 0],
          11: [0, 0, 0],
          12: [0, 0],
          13: [0, 0, 0]
        },
        _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
        hash: 'bb6389f3f7ce46e28cf8407e1bde5a2012602893'
      }
      const coverage = global[gcv] || (global[gcv] = {})
      if (!coverage[path] || coverage[path].hash !== hash) {
        coverage[path] = coverageData
      }
      const actualCoverage = coverage[path]
      {
        // @ts-ignore
        cov_293hbdrhm0 = function () {
          return actualCoverage
        }
      }
      return actualCoverage
    }
    cov_293hbdrhm0()
    function _inheritsLoose (subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass) }
    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }
    cov_293hbdrhm0().s[0]++
    /** @jsx createElement */

    const debounce = function debounce (func, wait, immediate) {
      cov_293hbdrhm0().f[0]++
      let timeout
      cov_293hbdrhm0().s[1]++
      return function () {
        cov_293hbdrhm0().f[1]++
        const context = (cov_293hbdrhm0().s[2]++, this)
        const args = (cov_293hbdrhm0().s[3]++, arguments)
        cov_293hbdrhm0().s[4]++
        const later = function later () {
          cov_293hbdrhm0().f[2]++
          cov_293hbdrhm0().s[5]++
          timeout = null
          cov_293hbdrhm0().s[6]++
          if (!immediate) {
            cov_293hbdrhm0().b[0][0]++
            cov_293hbdrhm0().s[7]++
            func.apply(context, args)
          } else {
            cov_293hbdrhm0().b[0][1]++
          }
        }
        const callNow = (cov_293hbdrhm0().s[8]++, (cov_293hbdrhm0().b[1][0]++, immediate) && (cov_293hbdrhm0().b[1][1]++, !timeout))
        cov_293hbdrhm0().s[9]++
        clearTimeout(timeout)
        cov_293hbdrhm0().s[10]++
        timeout = setTimeout(later, wait)
        cov_293hbdrhm0().s[11]++
        if (callNow) {
          cov_293hbdrhm0().b[2][0]++
          cov_293hbdrhm0().s[12]++
          func.apply(context, args)
        } else {
          cov_293hbdrhm0().b[2][1]++
        }
      }
    }
    const statusDebounceMillis = (cov_293hbdrhm0().s[13]++, 1400)
    const Status = /* #__PURE__ */(function (_Component) {
      _inheritsLoose(Status, _Component)
      function Status () {
        let _this
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key]
        }
        _this = _Component.call.apply(_Component, [this].concat(args)) || this
        _this.state = (cov_293hbdrhm0().s[20]++, {
          bump: false,
          debounced: false
        })
        return _this
      }
      const _proto = Status.prototype
      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount () {
        cov_293hbdrhm0().f[7]++
        const that = (cov_293hbdrhm0().s[21]++, this)
        cov_293hbdrhm0().s[22]++
        this.debounceStatusUpdate = debounce(function () {
          cov_293hbdrhm0().f[8]++
          cov_293hbdrhm0().s[23]++
          if (!that.state.debounced) {
            cov_293hbdrhm0().b[5][0]++
            const shouldSilence = (cov_293hbdrhm0().s[24]++, (cov_293hbdrhm0().b[6][0]++, !that.props.isInFocus) || (cov_293hbdrhm0().b[6][1]++, that.props.validChoiceMade))
            cov_293hbdrhm0().s[25]++
            that.setState(function (_ref) {
              const bump = _ref.bump
              cov_293hbdrhm0().f[9]++
              cov_293hbdrhm0().s[26]++
              return {
                bump: !bump,
                debounced: true,
                silenced: shouldSilence
              }
            })
          } else {
            cov_293hbdrhm0().b[5][1]++
          }
        }, statusDebounceMillis)
      }
      _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps (_ref2) {
        const queryLength = _ref2.queryLength
        cov_293hbdrhm0().f[10]++
        cov_293hbdrhm0().s[27]++
        this.setState({
          debounced: false
        })
      }
      _proto.render = function render () {
        cov_293hbdrhm0().f[11]++
        const _ref3 = (cov_293hbdrhm0().s[28]++, this.props)
        const id = _ref3.id
        const length = _ref3.length
        const queryLength = _ref3.queryLength
        const minQueryLength = _ref3.minQueryLength
        const selectedOption = _ref3.selectedOption
        const selectedOptionIndex = _ref3.selectedOptionIndex
        const tQueryTooShort = _ref3.tQueryTooShort
        const tNoResults = _ref3.tNoResults
        const tSelectedOption = _ref3.tSelectedOption
        const tResults = _ref3.tResults
        const _ref4 = (cov_293hbdrhm0().s[29]++, this.state)
        const bump = _ref4.bump
        const debounced = _ref4.debounced
        const silenced = _ref4.silenced
        const queryTooShort = (cov_293hbdrhm0().s[30]++, queryLength < minQueryLength)
        const noResults = (cov_293hbdrhm0().s[31]++, length === 0)
        const contentSelectedOption = (cov_293hbdrhm0().s[32]++, selectedOption ? (cov_293hbdrhm0().b[7][0]++, tSelectedOption(selectedOption, length, selectedOptionIndex)) : (cov_293hbdrhm0().b[7][1]++, ''))
        let content = (cov_293hbdrhm0().s[33]++, null)
        cov_293hbdrhm0().s[34]++
        if (queryTooShort) {
          cov_293hbdrhm0().b[8][0]++
          cov_293hbdrhm0().s[35]++
          content = tQueryTooShort(minQueryLength)
        } else {
          cov_293hbdrhm0().b[8][1]++
          cov_293hbdrhm0().s[36]++
          if (noResults) {
            cov_293hbdrhm0().b[9][0]++
            cov_293hbdrhm0().s[37]++
            content = tNoResults()
          } else {
            cov_293hbdrhm0().b[9][1]++
            cov_293hbdrhm0().s[38]++
            content = tResults(length, contentSelectedOption)
          }
        }
        cov_293hbdrhm0().s[39]++
        this.debounceStatusUpdate()
        cov_293hbdrhm0().s[40]++
        return (0, _preact.createElement)('div', {
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
        }, (0, _preact.createElement)('div', {
          id: id + '__status--A',
          role: 'status',
          'aria-atomic': 'true',
          'aria-live': 'polite'
        }, (cov_293hbdrhm0().b[11][0]++, !silenced) && (cov_293hbdrhm0().b[11][1]++, debounced) && (cov_293hbdrhm0().b[11][2]++, bump) ? (cov_293hbdrhm0().b[10][0]++, content) : (cov_293hbdrhm0().b[10][1]++, '')), (0, _preact.createElement)('div', {
          id: id + '__status--B',
          role: 'status',
          'aria-atomic': 'true',
          'aria-live': 'polite'
        }, (cov_293hbdrhm0().b[13][0]++, !silenced) && (cov_293hbdrhm0().b[13][1]++, debounced) && (cov_293hbdrhm0().b[13][2]++, !bump) ? (cov_293hbdrhm0().b[12][0]++, content) : (cov_293hbdrhm0().b[12][1]++, '')))
      }
      return Status
    }(_preact.Component))
    exports.default = Status
    Status.defaultProps = (cov_293hbdrhm0().s[14]++, {
      tQueryTooShort: function tQueryTooShort (minQueryLength) {
        cov_293hbdrhm0().f[3]++
        cov_293hbdrhm0().s[15]++
        return 'Type in ' + minQueryLength + ' or more characters for results'
      },
      tNoResults: function tNoResults () {
        cov_293hbdrhm0().f[4]++
        cov_293hbdrhm0().s[16]++
        return 'No search results'
      },
      tSelectedOption: function tSelectedOption (selectedOption, length, index) {
        cov_293hbdrhm0().f[5]++
        cov_293hbdrhm0().s[17]++
        return selectedOption + ' ' + (index + 1) + ' of ' + length + ' is highlighted'
      },
      tResults: function tResults (length, contentSelectedOption) {
        cov_293hbdrhm0().f[6]++
        const words = (cov_293hbdrhm0().s[18]++, {
          result: length === 1 ? (cov_293hbdrhm0().b[3][0]++, 'result') : (cov_293hbdrhm0().b[3][1]++, 'results'),
          is: length === 1 ? (cov_293hbdrhm0().b[4][0]++, 'is') : (cov_293hbdrhm0().b[4][1]++, 'are')
        })
        cov_293hbdrhm0().s[19]++
        return length + ' ' + words.result + ' ' + words.is + ' available. ' + contentSelectedOption
      }
    })
    /***/ },

  /***/ './wrapper.js':
  /*! ********************!*\
  !*** ./wrapper.js ***!
  \********************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    'use strict'

    exports.__esModule = true
    exports.default = void 0
    __webpack_require__(/*! core-js/modules/es.array.is-array.js */ '../node_modules/core-js/modules/es.array.is-array.js')
    __webpack_require__(/*! core-js/modules/es.array.filter.js */ '../node_modules/core-js/modules/es.array.filter.js')
    __webpack_require__(/*! core-js/modules/es.object.to-string.js */ '../node_modules/core-js/modules/es.object.to-string.js')
    __webpack_require__(/*! core-js/modules/es.array.index-of.js */ '../node_modules/core-js/modules/es.array.index-of.js')
    __webpack_require__(/*! core-js/modules/es.array.map.js */ '../node_modules/core-js/modules/es.array.map.js')
    __webpack_require__(/*! core-js/modules/es.function.name.js */ '../node_modules/core-js/modules/es.function.name.js')
    __webpack_require__(/*! core-js/modules/es.object.assign.js */ '../node_modules/core-js/modules/es.object.assign.js')
    const _preact = __webpack_require__(/*! preact */ '../node_modules/preact/dist/preact.module.js')
    const _autocomplete = _interopRequireDefault(__webpack_require__(/*! ./autocomplete */ './autocomplete.js'))
    function cov_h7qltkh24 () {
      const path = '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/wrapper.js'
      const hash = 'bb017d81dcade16aac904a226bdac608efbf87d4'
      const global = new Function('return this')()
      const gcv = '__coverage__'
      const coverageData = {
        path: '/Users/nicholas.griffin/Documents/GitHub/accessible-autocomplete/src/wrapper.js',
        statementMap: {
          0: {
            start: {
              line: 5,
              column: 2
            },
            end: {
              line: 5,
              column: 69
            }
          },
          1: {
            start: {
              line: 5,
              column: 26
            },
            end: {
              line: 5,
              column: 67
            }
          },
          2: {
            start: {
              line: 6,
              column: 2
            },
            end: {
              line: 6,
              column: 59
            }
          },
          3: {
            start: {
              line: 6,
              column: 21
            },
            end: {
              line: 6,
              column: 57
            }
          },
          4: {
            start: {
              line: 7,
              column: 2
            },
            end: {
              line: 7,
              column: 67
            }
          },
          5: {
            start: {
              line: 7,
              column: 25
            },
            end: {
              line: 7,
              column: 65
            }
          },
          6: {
            start: {
              line: 8,
              column: 2
            },
            end: {
              line: 10,
              column: 3
            }
          },
          7: {
            start: {
              line: 9,
              column: 4
            },
            end: {
              line: 9,
              column: 55
            }
          },
          8: {
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 11,
              column: 56
            }
          },
          9: {
            start: {
              line: 14,
              column: 27
            },
            end: {
              line: 17,
              column: 1
            }
          },
          10: {
            start: {
              line: 14,
              column: 39
            },
            end: {
              line: 17,
              column: 1
            }
          },
          11: {
            start: {
              line: 15,
              column: 18
            },
            end: {
              line: 15,
              column: 89
            }
          },
          12: {
            start: {
              line: 15,
              column: 37
            },
            end: {
              line: 15,
              column: 88
            }
          },
          13: {
            start: {
              line: 16,
              column: 2
            },
            end: {
              line: 16,
              column: 22
            }
          },
          14: {
            start: {
              line: 19,
              column: 0
            },
            end: {
              line: 58,
              column: 1
            }
          },
          15: {
            start: {
              line: 20,
              column: 2
            },
            end: {
              line: 20,
              column: 94
            }
          },
          16: {
            start: {
              line: 20,
              column: 45
            },
            end: {
              line: 20,
              column: 92
            }
          },
          17: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          },
          18: {
            start: {
              line: 24,
              column: 29
            },
            end: {
              line: 24,
              column: 157
            }
          },
          19: {
            start: {
              line: 24,
              column: 99
            },
            end: {
              line: 24,
              column: 155
            }
          },
          20: {
            start: {
              line: 25,
              column: 4
            },
            end: {
              line: 25,
              column: 104
            }
          },
          21: {
            start: {
              line: 25,
              column: 65
            },
            end: {
              line: 25,
              column: 103
            }
          },
          22: {
            start: {
              line: 27,
              column: 2
            },
            end: {
              line: 30,
              column: 4
            }
          },
          23: {
            start: {
              line: 28,
              column: 28
            },
            end: {
              line: 28,
              column: 151
            }
          },
          24: {
            start: {
              line: 28,
              column: 97
            },
            end: {
              line: 28,
              column: 147
            }
          },
          25: {
            start: {
              line: 29,
              column: 4
            },
            end: {
              line: 29,
              column: 60
            }
          },
          26: {
            start: {
              line: 29,
              column: 27
            },
            end: {
              line: 29,
              column: 58
            }
          },
          27: {
            start: {
              line: 32,
              column: 2
            },
            end: {
              line: 35,
              column: 3
            }
          },
          28: {
            start: {
              line: 33,
              column: 19
            },
            end: {
              line: 33,
              column: 119
            }
          },
          29: {
            start: {
              line: 34,
              column: 4
            },
            end: {
              line: 34,
              column: 78
            }
          },
          30: {
            start: {
              line: 37,
              column: 2
            },
            end: {
              line: 37,
              column: 77
            }
          },
          31: {
            start: {
              line: 37,
              column: 47
            },
            end: {
              line: 37,
              column: 77
            }
          },
          32: {
            start: {
              line: 38,
              column: 2
            },
            end: {
              line: 44,
              column: 3
            }
          },
          33: {
            start: {
              line: 39,
              column: 4
            },
            end: {
              line: 43,
              column: 5
            }
          },
          34: {
            start: {
              line: 40,
              column: 6
            },
            end: {
              line: 40,
              column: 34
            }
          },
          35: {
            start: {
              line: 42,
              column: 6
            },
            end: {
              line: 42,
              column: 69
            }
          },
          36: {
            start: {
              line: 45,
              column: 2
            },
            end: {
              line: 45,
              column: 91
            }
          },
          37: {
            start: {
              line: 45,
              column: 53
            },
            end: {
              line: 45,
              column: 91
            }
          },
          38: {
            start: {
              line: 47,
              column: 18
            },
            end: {
              line: 47,
              column: 47
            }
          },
          39: {
            start: {
              line: 49,
              column: 2
            },
            end: {
              line: 49,
              column: 105
            }
          },
          40: {
            start: {
              line: 51,
              column: 2
            },
            end: {
              line: 54,
              column: 4
            }
          },
          41: {
            start: {
              line: 56,
              column: 2
            },
            end: {
              line: 56,
              column: 59
            }
          },
          42: {
            start: {
              line: 57,
              column: 2
            },
            end: {
              line: 57,
              column: 91
            }
          }
        },
        fnMap: {
          0: {
            name: 'accessibleAutocomplete',
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
          1: {
            name: '(anonymous_1)',
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
                line: 17,
                column: 1
              }
            },
            line: 14
          },
          2: {
            name: '(anonymous_2)',
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
                line: 17,
                column: 1
              }
            },
            line: 14
          },
          3: {
            name: '(anonymous_3)',
            decl: {
              start: {
                line: 15,
                column: 32
              },
              end: {
                line: 15,
                column: 33
              }
            },
            loc: {
              start: {
                line: 15,
                column: 37
              },
              end: {
                line: 15,
                column: 88
              }
            },
            line: 15
          },
          4: {
            name: '(anonymous_4)',
            decl: {
              start: {
                line: 19,
                column: 46
              },
              end: {
                line: 19,
                column: 47
              }
            },
            loc: {
              start: {
                line: 19,
                column: 72
              },
              end: {
                line: 58,
                column: 1
              }
            },
            line: 19
          },
          5: {
            name: '(anonymous_5)',
            decl: {
              start: {
                line: 24,
                column: 88
              },
              end: {
                line: 24,
                column: 89
              }
            },
            loc: {
              start: {
                line: 24,
                column: 99
              },
              end: {
                line: 24,
                column: 155
              }
            },
            line: 24
          },
          6: {
            name: '(anonymous_6)',
            decl: {
              start: {
                line: 25,
                column: 55
              },
              end: {
                line: 25,
                column: 56
              }
            },
            loc: {
              start: {
                line: 25,
                column: 65
              },
              end: {
                line: 25,
                column: 103
              }
            },
            line: 25
          },
          7: {
            name: '(anonymous_7)',
            decl: {
              start: {
                line: 27,
                column: 70
              },
              end: {
                line: 27,
                column: 71
              }
            },
            loc: {
              start: {
                line: 27,
                column: 79
              },
              end: {
                line: 30,
                column: 3
              }
            },
            line: 27
          },
          8: {
            name: '(anonymous_8)',
            decl: {
              start: {
                line: 28,
                column: 87
              },
              end: {
                line: 28,
                column: 88
              }
            },
            loc: {
              start: {
                line: 28,
                column: 97
              },
              end: {
                line: 28,
                column: 147
              }
            },
            line: 28
          }
        },
        branchMap: {
          0: {
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
            type: 'if',
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
          1: {
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
            type: 'if',
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
          2: {
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
            type: 'if',
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
          3: {
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
            type: 'if',
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
          4: {
            loc: {
              start: {
                line: 20,
                column: 2
              },
              end: {
                line: 20,
                column: 94
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 20,
                column: 2
              },
              end: {
                line: 20,
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
            line: 20
          },
          5: {
            loc: {
              start: {
                line: 23,
                column: 2
              },
              end: {
                line: 26,
                column: 3
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 23,
                column: 2
              },
              end: {
                line: 26,
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
            line: 23
          },
          6: {
            loc: {
              start: {
                line: 24,
                column: 99
              },
              end: {
                line: 24,
                column: 155
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 24,
                column: 99
              },
              end: {
                line: 24,
                column: 111
              }
            }, {
              start: {
                line: 24,
                column: 115
              },
              end: {
                line: 24,
                column: 155
              }
            }],
            line: 24
          },
          7: {
            loc: {
              start: {
                line: 25,
                column: 65
              },
              end: {
                line: 25,
                column: 103
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 25,
                column: 65
              },
              end: {
                line: 25,
                column: 83
              }
            }, {
              start: {
                line: 25,
                column: 87
              },
              end: {
                line: 25,
                column: 103
              }
            }],
            line: 25
          },
          8: {
            loc: {
              start: {
                line: 27,
                column: 35
              },
              end: {
                line: 30,
                column: 4
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 27,
                column: 35
              },
              end: {
                line: 27,
                column: 65
              }
            }, {
              start: {
                line: 27,
                column: 70
              },
              end: {
                line: 30,
                column: 3
              }
            }],
            line: 27
          },
          9: {
            loc: {
              start: {
                line: 28,
                column: 98
              },
              end: {
                line: 28,
                column: 136
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 28,
                column: 98
              },
              end: {
                line: 28,
                column: 116
              }
            }, {
              start: {
                line: 28,
                column: 120
              },
              end: {
                line: 28,
                column: 136
              }
            }],
            line: 28
          },
          10: {
            loc: {
              start: {
                line: 29,
                column: 4
              },
              end: {
                line: 29,
                column: 60
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 29,
                column: 4
              },
              end: {
                line: 29,
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
            line: 29
          },
          11: {
            loc: {
              start: {
                line: 32,
                column: 2
              },
              end: {
                line: 35,
                column: 3
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 32,
                column: 2
              },
              end: {
                line: 35,
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
            line: 32
          },
          12: {
            loc: {
              start: {
                line: 32,
                column: 6
              },
              end: {
                line: 32,
                column: 97
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 32,
                column: 6
              },
              end: {
                line: 32,
                column: 46
              }
            }, {
              start: {
                line: 32,
                column: 50
              },
              end: {
                line: 32,
                column: 97
              }
            }],
            line: 32
          },
          13: {
            loc: {
              start: {
                line: 34,
                column: 40
              },
              end: {
                line: 34,
                column: 78
              }
            },
            type: 'binary-expr',
            locations: [{
              start: {
                line: 34,
                column: 40
              },
              end: {
                line: 34,
                column: 58
              }
            }, {
              start: {
                line: 34,
                column: 62
              },
              end: {
                line: 34,
                column: 78
              }
            }],
            line: 34
          },
          14: {
            loc: {
              start: {
                line: 37,
                column: 2
              },
              end: {
                line: 37,
                column: 77
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 37,
                column: 2
              },
              end: {
                line: 37,
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
            line: 37
          },
          15: {
            loc: {
              start: {
                line: 38,
                column: 2
              },
              end: {
                line: 44,
                column: 3
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 38,
                column: 2
              },
              end: {
                line: 44,
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
            line: 38
          },
          16: {
            loc: {
              start: {
                line: 39,
                column: 4
              },
              end: {
                line: 43,
                column: 5
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 39,
                column: 4
              },
              end: {
                line: 43,
                column: 5
              }
            }, {
              start: {
                line: 41,
                column: 11
              },
              end: {
                line: 43,
                column: 5
              }
            }],
            line: 39
          },
          17: {
            loc: {
              start: {
                line: 45,
                column: 2
              },
              end: {
                line: 45,
                column: 91
              }
            },
            type: 'if',
            locations: [{
              start: {
                line: 45,
                column: 2
              },
              end: {
                line: 45,
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
            line: 45
          }
        },
        s: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: 0,
          17: 0,
          18: 0,
          19: 0,
          20: 0,
          21: 0,
          22: 0,
          23: 0,
          24: 0,
          25: 0,
          26: 0,
          27: 0,
          28: 0,
          29: 0,
          30: 0,
          31: 0,
          32: 0,
          33: 0,
          34: 0,
          35: 0,
          36: 0,
          37: 0,
          38: 0,
          39: 0,
          40: 0,
          41: 0,
          42: 0
        },
        f: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0
        },
        b: {
          0: [0, 0],
          1: [0, 0],
          2: [0, 0],
          3: [0, 0],
          4: [0, 0],
          5: [0, 0],
          6: [0, 0],
          7: [0, 0],
          8: [0, 0],
          9: [0, 0],
          10: [0, 0],
          11: [0, 0],
          12: [0, 0],
          13: [0, 0],
          14: [0, 0],
          15: [0, 0],
          16: [0, 0],
          17: [0, 0]
        },
        _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
        hash: 'bb017d81dcade16aac904a226bdac608efbf87d4'
      }
      const coverage = global[gcv] || (global[gcv] = {})
      if (!coverage[path] || coverage[path].hash !== hash) {
        coverage[path] = coverageData
      }
      const actualCoverage = coverage[path]
      {
        // @ts-ignore
        cov_h7qltkh24 = function () {
          return actualCoverage
        }
      }
      return actualCoverage
    }
    cov_h7qltkh24()
    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
    /** @jsx createElement */

    function accessibleAutocomplete (options) {
      cov_h7qltkh24().f[0]++
      cov_h7qltkh24().s[0]++
      if (!options.element) {
        cov_h7qltkh24().b[0][0]++
        cov_h7qltkh24().s[1]++
        throw new Error('element is not defined')
      } else {
        cov_h7qltkh24().b[0][1]++
      }
      cov_h7qltkh24().s[2]++
      if (!options.id) {
        cov_h7qltkh24().b[1][0]++
        cov_h7qltkh24().s[3]++
        throw new Error('id is not defined')
      } else {
        cov_h7qltkh24().b[1][1]++
      }
      cov_h7qltkh24().s[4]++
      if (!options.source) {
        cov_h7qltkh24().b[2][0]++
        cov_h7qltkh24().s[5]++
        throw new Error('source is not defined')
      } else {
        cov_h7qltkh24().b[2][1]++
      }
      cov_h7qltkh24().s[6]++
      if (Array.isArray(options.source)) {
        cov_h7qltkh24().b[3][0]++
        cov_h7qltkh24().s[7]++
        options.source = createSimpleEngine(options.source)
      } else {
        cov_h7qltkh24().b[3][1]++
      }
      cov_h7qltkh24().s[8]++;
      (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, options), options.element)
    }
    cov_h7qltkh24().s[9]++
    var createSimpleEngine = function createSimpleEngine (values) {
      cov_h7qltkh24().f[1]++
      cov_h7qltkh24().s[10]++
      return function (query, syncResults) {
        cov_h7qltkh24().f[2]++
        const matches = (cov_h7qltkh24().s[11]++, values.filter(function (r) {
          cov_h7qltkh24().f[3]++
          cov_h7qltkh24().s[12]++
          return r.toLowerCase().indexOf(query.toLowerCase()) !== -1
        }))
        cov_h7qltkh24().s[13]++
        syncResults(matches)
      }
    }
    cov_h7qltkh24().s[14]++
    accessibleAutocomplete.enhanceSelectElement = function (configurationOptions) {
      cov_h7qltkh24().f[4]++
      cov_h7qltkh24().s[15]++
      if (!configurationOptions.selectElement) {
        cov_h7qltkh24().b[4][0]++
        cov_h7qltkh24().s[16]++
        throw new Error('selectElement is not defined')
      } else {
        cov_h7qltkh24().b[4][1]++
      }

      // Set defaults.
      cov_h7qltkh24().s[17]++
      if (!configurationOptions.source) {
        cov_h7qltkh24().b[5][0]++
        const availableOptions = (cov_h7qltkh24().s[18]++, [].filter.call(configurationOptions.selectElement.options, function (option) {
          cov_h7qltkh24().f[5]++
          cov_h7qltkh24().s[19]++
          return (cov_h7qltkh24().b[6][0]++, option.value) || (cov_h7qltkh24().b[6][1]++, configurationOptions.preserveNullOptions)
        }))
        cov_h7qltkh24().s[20]++
        configurationOptions.source = availableOptions.map(function (option) {
          cov_h7qltkh24().f[6]++
          cov_h7qltkh24().s[21]++
          return (cov_h7qltkh24().b[7][0]++, option.textContent) || (cov_h7qltkh24().b[7][1]++, option.innerText)
        })
      } else {
        cov_h7qltkh24().b[5][1]++
      }
      cov_h7qltkh24().s[22]++
      configurationOptions.onConfirm = (cov_h7qltkh24().b[8][0]++, configurationOptions.onConfirm) || (cov_h7qltkh24().b[8][1]++, function (query) {
        cov_h7qltkh24().f[7]++
        const requestedOption = (cov_h7qltkh24().s[23]++, [].filter.call(configurationOptions.selectElement.options, function (option) {
          cov_h7qltkh24().f[8]++
          cov_h7qltkh24().s[24]++
          return ((cov_h7qltkh24().b[9][0]++, option.textContent) || (cov_h7qltkh24().b[9][1]++, option.innerText)) === query
        })[0])
        cov_h7qltkh24().s[25]++
        if (requestedOption) {
          cov_h7qltkh24().b[10][0]++
          cov_h7qltkh24().s[26]++
          requestedOption.selected = true
        } else {
          cov_h7qltkh24().b[10][1]++
        }
      })
      cov_h7qltkh24().s[27]++
      if ((cov_h7qltkh24().b[12][0]++, configurationOptions.selectElement.value) || (cov_h7qltkh24().b[12][1]++, configurationOptions.defaultValue === undefined)) {
        cov_h7qltkh24().b[11][0]++
        const option = (cov_h7qltkh24().s[28]++, configurationOptions.selectElement.options[configurationOptions.selectElement.options.selectedIndex])
        cov_h7qltkh24().s[29]++
        configurationOptions.defaultValue = (cov_h7qltkh24().b[13][0]++, option.textContent) || (cov_h7qltkh24().b[13][1]++, option.innerText)
      } else {
        cov_h7qltkh24().b[11][1]++
      }
      cov_h7qltkh24().s[30]++
      if (configurationOptions.name === undefined) {
        cov_h7qltkh24().b[14][0]++
        cov_h7qltkh24().s[31]++
        configurationOptions.name = ''
      } else {
        cov_h7qltkh24().b[14][1]++
      }
      cov_h7qltkh24().s[32]++
      if (configurationOptions.id === undefined) {
        cov_h7qltkh24().b[15][0]++
        cov_h7qltkh24().s[33]++
        if (configurationOptions.selectElement.id === undefined) {
          cov_h7qltkh24().b[16][0]++
          cov_h7qltkh24().s[34]++
          configurationOptions.id = ''
        } else {
          cov_h7qltkh24().b[16][1]++
          cov_h7qltkh24().s[35]++
          configurationOptions.id = configurationOptions.selectElement.id
        }
      } else {
        cov_h7qltkh24().b[15][1]++
      }
      cov_h7qltkh24().s[36]++
      if (configurationOptions.autoselect === undefined) {
        cov_h7qltkh24().b[17][0]++
        cov_h7qltkh24().s[37]++
        configurationOptions.autoselect = true
      } else {
        cov_h7qltkh24().b[17][1]++
      }
      const element = (cov_h7qltkh24().s[38]++, document.createElement('div'))
      cov_h7qltkh24().s[39]++
      configurationOptions.selectElement.parentNode.insertBefore(element, configurationOptions.selectElement)
      cov_h7qltkh24().s[40]++
      accessibleAutocomplete(Object.assign({}, configurationOptions, {
        element
      }))
      cov_h7qltkh24().s[41]++
      configurationOptions.selectElement.style.display = 'none'
      cov_h7qltkh24().s[42]++
      configurationOptions.selectElement.id = configurationOptions.selectElement.id + '-select'
    }
    const _default = accessibleAutocomplete
    exports.default = _default
    /***/ },

  /***/ '../test/functional/dropdown-arrow-down.js':
  /*! *************************************************!*\
  !*** ../test/functional/dropdown-arrow-down.js ***!
  \*************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const _preact = __webpack_require__(/*! preact */ '../node_modules/preact/dist/preact.module.js')
    const _dropdownArrowDown = _interopRequireDefault(__webpack_require__(/*! ../../src/dropdown-arrow-down */ './dropdown-arrow-down.js'))
    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
    /* global before, beforeEach, after, describe, expect, it */
    /** @jsx createElement */

    describe('DropdownArrowDown', function () {
      describe('rendering', function () {
        let scratch
        before(function () {
          scratch = document.createElement('div');
          (document.body || document.documentElement).appendChild(scratch)
        })
        beforeEach(function () {
          scratch.innerHTML = ''
        })
        after(function () {
          scratch.parentNode.removeChild(scratch)
          scratch = null
        })
        describe('basic usage', function () {
          it('renders an svg', function () {
            (0, _preact.render)((0, _preact.createElement)(_dropdownArrowDown.default, null), scratch)
            expect(scratch.innerHTML).to.contain('svg')
          })
          it('renders with a given custom class', function () {
            (0, _preact.render)((0, _preact.createElement)(_dropdownArrowDown.default, {
              className: 'foo'
            }), scratch)
            expect(scratch.innerHTML).to.contain('class="foo"')
          })

          // IE issue so the dropdown svg is not focusable (tabindex won't work for this)
          it('renders an svg where focusable attribute is false', function () {
            (0, _preact.render)((0, _preact.createElement)(_dropdownArrowDown.default, null), scratch)
            expect(scratch.innerHTML).to.contain('focusable="false"')
          })
        })
      })
    })
    /***/ },

  /***/ '../test/functional/index.js':
  /*! ***********************************!*\
  !*** ../test/functional/index.js ***!
  \***********************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    __webpack_require__(/*! core-js/modules/es.array.filter.js */ '../node_modules/core-js/modules/es.array.filter.js')
    __webpack_require__(/*! core-js/modules/es.object.to-string.js */ '../node_modules/core-js/modules/es.object.to-string.js')
    __webpack_require__(/*! core-js/modules/es.array.index-of.js */ '../node_modules/core-js/modules/es.array.index-of.js')
    __webpack_require__(/*! core-js/modules/es.object.assign.js */ '../node_modules/core-js/modules/es.object.assign.js')
    __webpack_require__(/*! core-js/modules/web.timers.js */ '../node_modules/core-js/modules/web.timers.js')
    const _preact = __webpack_require__(/*! preact */ '../node_modules/preact/dist/preact.module.js')
    const _autocomplete = _interopRequireDefault(__webpack_require__(/*! ../../src/autocomplete */ './autocomplete.js'))
    const _status = _interopRequireDefault(__webpack_require__(/*! ../../src/status */ './status.js'))
    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
    /* global after, describe, before, beforeEach, expect, it */
    /** @jsx createElement */

    function suggest (query, syncResults) {
      const results = ['France', 'Germany', 'United Kingdom']
      syncResults(query
        ? results.filter(function (result) {
          return result.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        : [])
    }
    describe('Autocomplete', function () {
      describe('rendering', function () {
        let scratch
        before(function () {
          scratch = document.createElement('div');
          (document.body || document.documentElement).appendChild(scratch)
        })
        beforeEach(function () {
          scratch.innerHTML = ''
        })
        after(function () {
          scratch.parentNode.removeChild(scratch)
          scratch = null
        })
        describe('basic usage', function () {
          it('renders an input', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, null), scratch)
            expect(scratch.innerHTML).to.contain('input')
            expect(scratch.innerHTML).to.contain('class="autocomplete__input')
            expect(scratch.innerHTML).to.contain('class="autocomplete__menu')
            expect(scratch.innerHTML).to.contain('name="input-autocomplete"')
          })
          it('renders an input with a required attribute', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
              required: true
            }), scratch)
            expect(scratch.innerHTML).to.contain('required')
          })
          it('renders an input without a required attribute', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
              required: false
            }), scratch)
            expect(scratch.innerHTML).to.not.contain('required')
          })
          it('renders an input with a name attribute', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
              name: 'bob'
            }), scratch)
            expect(scratch.innerHTML).to.contain('name="bob"')
          })
          it('renders an input with a custom CSS namespace', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
              cssNamespace: 'bob'
            }), scratch)
            expect(scratch.innerHTML).to.contain('class="bob__input')
            expect(scratch.innerHTML).to.contain('class="bob__menu')
          })
          it('renders with an aria-expanded attribute', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
              required: true
            }), scratch)
            const wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
            const inputElement = wrapperElement.getElementsByTagName('input')[0]
            expect(inputElement.getAttribute('aria-expanded')).to.equal('false')
          })
          it('renders with an aria-describedby attribute', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
              id: 'autocomplete-default'
            }), scratch)
            const wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
            const inputElement = wrapperElement.getElementsByTagName('input')[0]
            expect(inputElement.getAttribute('aria-describedby')).to.equal('autocomplete-default__assistiveHint')
          })
          describe('renders with an aria-autocomplete attribute', function () {
            it('of value "list", when autoselect is not enabled', function () {
              (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
                required: true
              }), scratch)
              const wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
              const inputElement = wrapperElement.getElementsByTagName('input')[0]
              expect(inputElement.getAttribute('aria-autocomplete')).to.equal('list')
            })
            it('of value "both", when autoselect is enabled', function () {
              (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
                required: true,
                autoselect: true
              }), scratch)
              const wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
              const inputElement = wrapperElement.getElementsByTagName('input')[0]
              expect(inputElement.getAttribute('aria-autocomplete')).to.equal('both')
            })
          })
          it('renders with the correct roles', function () {
            (0, _preact.render)((0, _preact.createElement)(_autocomplete.default, {
              required: true
            }), scratch)
            const wrapperElement = scratch.getElementsByClassName('autocomplete__wrapper')[0]
            const inputElement = wrapperElement.getElementsByTagName('input')[0]
            const dropdownElement = wrapperElement.getElementsByTagName('ul')[0]
            expect(inputElement.getAttribute('role')).to.equal('combobox', 'input should have combobox role')
            expect(dropdownElement.getAttribute('role')).to.equal('listbox', 'menu should have listbox role')
          })
        })
      })
      describe('behaviour', function () {
        let autocomplete, autoselectAutocomplete, onConfirmAutocomplete, onConfirmTriggered, autoselectOnSelectAutocomplete, confirmOnBlurAutocomplete
        beforeEach(function () {
          autocomplete = new _autocomplete.default(Object.assign({}, _autocomplete.default.defaultProps, {
            id: 'test',
            source: suggest
          }))
          autoselectAutocomplete = new _autocomplete.default(Object.assign({}, _autocomplete.default.defaultProps, {
            autoselect: true,
            id: 'test2',
            source: suggest
          }))
          onConfirmTriggered = false
          onConfirmAutocomplete = new _autocomplete.default(Object.assign({}, _autocomplete.default.defaultProps, {
            id: 'test3',
            onConfirm: function onConfirm () {
              onConfirmTriggered = true
            },
            source: suggest
          }))
          autoselectOnSelectAutocomplete = new _autocomplete.default(Object.assign({}, _autocomplete.default.defaultProps, {
            autoselect: true,
            id: 'test4',
            onConfirm: function onConfirm () {
              onConfirmTriggered = true
            },
            source: suggest
          }))
          confirmOnBlurAutocomplete = new _autocomplete.default(Object.assign({}, _autocomplete.default.defaultProps, {
            id: 'test5',
            onConfirm: function onConfirm () {
              onConfirmTriggered = true
            },
            confirmOnBlur: false,
            source: suggest
          }))
        })
        describe('typing', function () {
          it('searches for options', function () {
            autocomplete.handleInputChange({
              target: {
                value: 'f'
              }
            })
            expect(autocomplete.state.menuOpen).to.equal(true)
            expect(autocomplete.state.options).to.contain('France')
          })
          it('hides menu when no options are available', function () {
            autocomplete.handleInputChange({
              target: {
                value: 'aa'
              }
            })
            expect(autocomplete.state.menuOpen).to.equal(false)
            expect(autocomplete.state.options.length).to.equal(0)
          })
          it('hides menu when query becomes empty', function () {
            autocomplete.setState({
              query: 'f',
              options: ['France'],
              menuOpen: true
            })
            autocomplete.handleInputChange({
              target: {
                value: ''
              }
            })
            expect(autocomplete.state.menuOpen).to.equal(false)
          })
          it('removes the aria-describedby attribute when query is non empty', function () {
            expect(autocomplete.state.ariaHint).to.equal(true)
            autocomplete.handleInputChange({
              target: {
                value: 'a'
              }
            })
            expect(autocomplete.state.ariaHint).to.equal(false)
            autocomplete.handleInputChange({
              target: {
                value: ''
              }
            })
            expect(autocomplete.state.ariaHint).to.equal(true)
          })
          describe('with minLength', function () {
            beforeEach(function () {
              autocomplete = new _autocomplete.default(Object.assign({}, _autocomplete.default.defaultProps, {
                id: 'test',
                source: suggest,
                minLength: 2
              }))
            })
            it('doesn\'t search when under limit', function () {
              autocomplete.handleInputChange({
                target: {
                  value: 'f'
                }
              })
              expect(autocomplete.state.menuOpen).to.equal(false)
              expect(autocomplete.state.options.length).to.equal(0)
            })
            it('does search when over limit', function () {
              autocomplete.handleInputChange({
                target: {
                  value: 'fra'
                }
              })
              expect(autocomplete.state.menuOpen).to.equal(true)
              expect(autocomplete.state.options).to.contain('France')
            })
            it('hides results when going under limit', function () {
              autocomplete.setState({
                menuOpen: true,
                query: 'fr',
                options: ['France']
              })
              autocomplete.handleInputChange({
                target: {
                  value: 'f'
                }
              })
              expect(autocomplete.state.menuOpen).to.equal(false)
              expect(autocomplete.state.options.length).to.equal(0)
            })
          })
        })
        describe('focusing input', function () {
          describe('when no query is present', function () {
            it('does not display menu', function () {
              autocomplete.setState({
                query: ''
              })
              autocomplete.handleInputFocus()
              expect(autocomplete.state.menuOpen).to.equal(false)
              expect(autocomplete.state.focused).to.equal(-1)
            })
          })
          describe('when a non-matched query is present (no matching options are present)', function () {
            it('does not display menu', function () {
              autocomplete.setState({
                query: 'f'
              })
              autocomplete.handleInputFocus()
              expect(autocomplete.state.menuOpen).to.equal(false)
              expect(autocomplete.state.focused).to.equal(-1)
            })
          })
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
                })
                autocomplete.handleInputFocus()
                expect(autocomplete.state.focused).to.equal(-1)
                expect(autocomplete.state.menuOpen).to.equal(true)
                expect(autocomplete.state.selected).to.equal(-1)
              })
            })
            describe('and a user choice HAS been made', function () {
              it('does not display menu', function () {
                autocomplete.setState({
                  menuOpen: false,
                  options: ['France'],
                  query: 'fr',
                  focused: null,
                  selected: null,
                  validChoiceMade: true
                })
                autocomplete.handleInputFocus()
                expect(autocomplete.state.focused).to.equal(-1)
                expect(autocomplete.state.menuOpen).to.equal(false)
              })
            })
          })
          describe('with option selected', function () {
            it('leaves menu open, does not change query', function () {
              autocomplete.setState({
                menuOpen: true,
                options: ['France'],
                query: 'fr',
                focused: 0,
                selected: 0
              })
              autocomplete.handleInputFocus()
              expect(autocomplete.state.focused).to.equal(-1)
              expect(autocomplete.state.menuOpen).to.equal(true)
              expect(autocomplete.state.query).to.equal('fr')
            })
          })
          describe('with defaultValue', function () {
            beforeEach(function () {
              autocomplete = new _autocomplete.default(Object.assign({}, _autocomplete.default.defaultProps, {
                defaultValue: 'France',
                id: 'test',
                source: suggest
              }))
            })
            it('is prefilled', function () {
              expect(autocomplete.state.options.length).to.equal(1)
              expect(autocomplete.state.options[0]).to.equal('France')
              expect(autocomplete.state.query).to.equal('France')
            })
          })
        })
        describe('blurring input', function () {
          it('unfocuses component', function () {
            autocomplete.setState({
              menuOpen: true,
              options: ['France'],
              query: 'fr',
              focused: -1,
              selected: -1
            })
            autocomplete.handleInputBlur({
              relatedTarget: null
            })
            expect(autocomplete.state.focused).to.equal(null)
            expect(autocomplete.state.menuOpen).to.equal(false)
            expect(autocomplete.state.query).to.equal('fr')
          })
          describe('with autoselect and onConfirm', function () {
            it('unfocuses component, updates query, triggers onConfirm', function () {
              autoselectOnSelectAutocomplete.setState({
                menuOpen: true,
                options: ['France'],
                query: 'fr',
                focused: -1,
                selected: 0
              })
              autoselectOnSelectAutocomplete.handleInputBlur({
                target: 'mock',
                relatedTarget: 'relatedMock'
              }, 0)
              expect(autoselectOnSelectAutocomplete.state.focused).to.equal(null)
              expect(autoselectOnSelectAutocomplete.state.menuOpen).to.equal(false)
              expect(autoselectOnSelectAutocomplete.state.query).to.equal('France')
              expect(onConfirmTriggered).to.equal(true)
            })
          })
          describe('with confirmOnBlur false', function () {
            it('unfocuses component, does not touch query, does not trigger onConfirm', function () {
              confirmOnBlurAutocomplete.setState({
                menuOpen: true,
                options: ['France'],
                query: 'fr',
                focused: -1,
                selected: 0
              })
              confirmOnBlurAutocomplete.handleInputBlur({
                target: 'mock',
                relatedTarget: 'relatedMock'
              }, 0)
              expect(confirmOnBlurAutocomplete.state.focused).to.equal(null)
              expect(confirmOnBlurAutocomplete.state.menuOpen).to.equal(false)
              expect(confirmOnBlurAutocomplete.state.query).to.equal('fr')
              expect(onConfirmTriggered).to.equal(false)
            })
          })
        })
        describe('focusing option', function () {
          it('sets the option as focused', function () {
            autocomplete.setState({
              options: ['France']
            })
            autocomplete.handleOptionFocus(0)
            expect(autocomplete.state.focused).to.equal(0)
          })
        })
        describe('focusing out option', function () {
          describe('with input selected', function () {
            it('unfocuses component, does not change query', function () {
              autocomplete.setState({
                menuOpen: true,
                options: ['France'],
                query: 'fr',
                focused: 0,
                selected: -1
              })
              autocomplete.handleOptionBlur({
                target: 'mock',
                relatedTarget: 'relatedMock'
              }, 0)
              expect(autocomplete.state.focused).to.equal(null)
              expect(autocomplete.state.menuOpen).to.equal(false)
              expect(autocomplete.state.query).to.equal('fr')
            })
          })
          describe('with option selected', function () {
            describe('with confirmOnBlur true', function () {
              it('unfocuses component, updates query', function () {
                autocomplete.setState({
                  menuOpen: true,
                  options: ['France'],
                  query: 'fr',
                  focused: 0,
                  selected: 0
                })
                autocomplete.handleOptionBlur({
                  target: 'mock',
                  relatedTarget: 'relatedMock'
                }, 0)
                expect(autocomplete.state.focused).to.equal(null)
                expect(autocomplete.state.menuOpen).to.equal(false)
                expect(autocomplete.state.query).to.equal('France')
              })
            })
            describe('with confirmOnBlur false', function () {
              it('unfocuses component, does not update query', function () {
                confirmOnBlurAutocomplete.setState({
                  menuOpen: true,
                  options: ['France'],
                  query: 'fr',
                  focused: 0,
                  selected: 0
                })
                confirmOnBlurAutocomplete.handleOptionBlur({
                  target: 'mock',
                  relatedTarget: 'relatedMock'
                }, 0)
                expect(confirmOnBlurAutocomplete.state.focused).to.equal(null)
                expect(confirmOnBlurAutocomplete.state.menuOpen).to.equal(false)
                expect(confirmOnBlurAutocomplete.state.query).to.equal('fr')
              })
            })
          })
        })
        describe('hovering option', function () {
          it('sets the option as hovered, does not change focused, does not change selected', function () {
            autocomplete.setState({
              options: ['France'],
              hovered: null,
              focused: -1,
              selected: -1
            })
            autocomplete.handleOptionMouseEnter({}, 0)
            expect(autocomplete.state.hovered).to.equal(0)
            expect(autocomplete.state.focused).to.equal(-1)
            expect(autocomplete.state.selected).to.equal(-1)
          })
        })
        describe('hovering out option', function () {
          it('sets focus back on selected, sets hovered to null', function () {
            autocomplete.setState({
              options: ['France'],
              hovered: 0,
              focused: -1,
              selected: -1
            })
            autocomplete.handleListMouseLeave({
              toElement: 'mock'
            }, 0)
            expect(autocomplete.state.hovered).to.equal(null)
            expect(autocomplete.state.focused).to.equal(-1)
            expect(autocomplete.state.selected).to.equal(-1)
          })
        })
        describe('up key', function () {
          it('focuses previous element', function () {
            autocomplete.setState({
              menuOpen: true,
              options: ['France'],
              focused: 0
            })
            autocomplete.handleKeyDown({
              preventDefault: function preventDefault () {},
              keyCode: 38
            })
            expect(autocomplete.state.focused).to.equal(-1)
          })
        })
        describe('down key', function () {
          describe('0 options available', function () {
            it('does nothing', function () {
              autocomplete.setState({
                menuOpen: false,
                options: [],
                focused: -1
              })
              const stateBefore = autocomplete.state
              autocomplete.handleKeyDown({
                preventDefault: function preventDefault () {},
                keyCode: 40
              })
              expect(autocomplete.state).to.equal(stateBefore)
            })
          })
          describe('1 option available', function () {
            it('focuses next element', function () {
              autocomplete.setState({
                menuOpen: true,
                options: ['France'],
                focused: -1,
                selected: -1
              })
              autocomplete.handleKeyDown({
                preventDefault: function preventDefault () {},
                keyCode: 40
              })
              expect(autocomplete.state.focused).to.equal(0)
              expect(autocomplete.state.selected).to.equal(0)
            })
          })
          describe('2 or more option available', function () {
            it('focuses next element', function () {
              autocomplete.setState({
                menuOpen: true,
                options: ['France', 'Germany'],
                focused: 0,
                selected: 0
              })
              autocomplete.handleKeyDown({
                preventDefault: function preventDefault () {},
                keyCode: 40
              })
              expect(autocomplete.state.focused).to.equal(1)
              expect(autocomplete.state.selected).to.equal(1)
            })
          })
          describe('autoselect', function () {
            describe('0 options available', function () {
              it('does nothing', function () {
                autoselectAutocomplete.setState({
                  menuOpen: false,
                  options: [],
                  focused: -1,
                  selected: -1
                })
                const stateBefore = autoselectAutocomplete.state
                autoselectAutocomplete.handleKeyDown({
                  preventDefault: function preventDefault () {},
                  keyCode: 40
                })
                expect(autoselectAutocomplete.state).to.equal(stateBefore)
              })
            })
            describe('1 option available', function () {
              it('does nothing', function () {
                autoselectAutocomplete.setState({
                  menuOpen: true,
                  options: ['France'],
                  focused: -1,
                  selected: 0
                })
                const stateBefore = autoselectAutocomplete.state
                autoselectAutocomplete.handleKeyDown({
                  preventDefault: function preventDefault () {},
                  keyCode: 40
                })
                expect(autoselectAutocomplete.state).to.equal(stateBefore)
              })
            })
            describe('2 or more option available', function () {
              it('on input, focuses second element', function () {
                autoselectAutocomplete.setState({
                  menuOpen: true,
                  options: ['France', 'Germany'],
                  focused: -1,
                  selected: 0
                })
                autoselectAutocomplete.handleKeyDown({
                  preventDefault: function preventDefault () {},
                  keyCode: 40
                })
                expect(autoselectAutocomplete.state.focused).to.equal(1)
                expect(autoselectAutocomplete.state.selected).to.equal(1)
              })
            })
          })
        })
        describe('escape key', function () {
          it('unfocuses component', function () {
            autocomplete.setState({
              menuOpen: true,
              options: ['France'],
              focused: -1
            })
            autocomplete.handleKeyDown({
              preventDefault: function preventDefault () {},
              keyCode: 27
            })
            expect(autocomplete.state.menuOpen).to.equal(false)
            expect(autocomplete.state.focused).to.equal(null)
          })
        })
        describe('enter key', function () {
          describe('on an option', function () {
            it('prevents default, closes the menu, sets the query, focuses the input, triggers onConfirm', function () {
              let preventedDefault = false
              onConfirmAutocomplete.setState({
                menuOpen: true,
                options: ['France'],
                focused: 0,
                selected: 0
              })
              onConfirmAutocomplete.handleKeyDown({
                preventDefault: function preventDefault () {
                  preventedDefault = true
                },
                keyCode: 13
              })
              expect(onConfirmAutocomplete.state.menuOpen).to.equal(false)
              expect(onConfirmAutocomplete.state.query).to.equal('France')
              expect(onConfirmAutocomplete.state.focused).to.equal(-1)
              expect(onConfirmAutocomplete.state.selected).to.equal(-1)
              expect(preventedDefault).to.equal(true)
              expect(onConfirmTriggered).to.equal(true)
            })
          })
          describe('on the input', function () {
            describe('with menu opened', function () {
              it('prevents default, does nothing', function () {
                let preventedDefault = false
                autocomplete.setState({
                  menuOpen: true,
                  options: [],
                  query: 'asd',
                  focused: -1,
                  selected: -1
                })
                const stateBefore = autocomplete.state
                autocomplete.handleKeyDown({
                  preventDefault: function preventDefault () {
                    preventedDefault = true
                  },
                  keyCode: 13
                })
                expect(autocomplete.state).to.equal(stateBefore)
                expect(preventedDefault).to.equal(true)
              })
            })
            describe('with menu closed', function () {
              it('bubbles, does not prevent default', function () {
                let preventedDefault = false
                autocomplete.setState({
                  menuOpen: false,
                  options: ['France'],
                  focused: -1,
                  selected: -1
                })
                const stateBefore = autocomplete.state
                autocomplete.handleKeyDown({
                  preventDefault: function preventDefault () {
                    preventedDefault = true
                  },
                  keyCode: 13
                })
                expect(autocomplete.state).to.equal(stateBefore)
                expect(preventedDefault).to.equal(false)
              })
            })
            describe('autoselect', function () {
              it('closes the menu, selects the first option, keeps input focused', function () {
                autoselectAutocomplete.setState({
                  menuOpen: true,
                  options: ['France'],
                  focused: -1,
                  selected: 0
                })
                autoselectAutocomplete.handleKeyDown({
                  preventDefault: function preventDefault () {},
                  keyCode: 13
                })
                expect(autoselectAutocomplete.state.menuOpen).to.equal(false)
                expect(autoselectAutocomplete.state.query).to.equal('France')
                expect(autoselectAutocomplete.state.focused).to.equal(-1)
                expect(autoselectAutocomplete.state.selected).to.equal(-1)
              })
            })
          })
        })
        describe('space key', function () {
          describe('on an option', function () {
            it('prevents default, closes the menu, sets the query, focuses the input, triggers onConfirm', function () {
              let preventedDefault = false
              onConfirmAutocomplete.setState({
                menuOpen: true,
                options: ['France'],
                focused: 0,
                selected: 0
              })
              onConfirmAutocomplete.handleKeyDown({
                preventDefault: function preventDefault () {
                  preventedDefault = true
                },
                keyCode: 32
              })
              expect(onConfirmAutocomplete.state.menuOpen).to.equal(false)
              expect(onConfirmAutocomplete.state.query).to.equal('France')
              expect(onConfirmAutocomplete.state.focused).to.equal(-1)
              expect(onConfirmAutocomplete.state.selected).to.equal(-1)
              expect(preventedDefault).to.equal(true)
              expect(onConfirmTriggered).to.equal(true)
            })
          })
        })
        describe('an unrecognised key', function () {
          it('does nothing', function () {
            autocomplete.setState({
              menuOpen: true,
              options: ['France'],
              focused: 0,
              selected: 0
            })
            autocomplete.elementReferences[-1] = 'input element'
            autocomplete.handleKeyDown({
              target: 'not the input element',
              keyCode: 4242
            })
            expect(autocomplete.state.focused).to.equal(0)
            expect(autocomplete.state.selected).to.equal(0)
          })
        })
        describe('derived state', function () {
          it('initially assumes no valid choice on each new input', function () {
            autocomplete.handleInputChange({
              target: {
                value: 'F'
              }
            })
            expect(autocomplete.state.validChoiceMade).to.equal(false)
          })
          describe('identifies that the user has made a valid choice', function () {
            it('when an option is actively clicked', function () {
              autocomplete.setState({
                query: 'f',
                options: ['France'],
                validChoiceMade: false
              })
              autocomplete.handleOptionClick({}, 0)
              expect(autocomplete.state.validChoiceMade).to.equal(true)
            })
            it('when the input is blurred, autoselect is disabled, and the current query exactly matches an option', function () {
              autocomplete.setState({
                query: 'France',
                options: ['France'],
                validChoiceMade: false
              })
              autocomplete.handleComponentBlur({})
              expect(autocomplete.state.validChoiceMade).to.equal(true)
            })
            it('when in the same scenario, but the match differs only by case sensitivity', function () {
              autocomplete.setState({
                query: 'fraNCe',
                options: ['France'],
                validChoiceMade: false
              })
              autocomplete.handleComponentBlur({})
              expect(autocomplete.state.validChoiceMade).to.equal(true)
            })
            it('when the input is blurred, autoselect is enabled, and the current query results in at least one option', function () {
              autoselectAutocomplete.setState({
                options: ['France'],
                validChoiceMade: false
              })
              autoselectAutocomplete.handleInputChange({
                target: {
                  value: 'France'
                }
              })
              autoselectAutocomplete.handleComponentBlur({})
              expect(autoselectAutocomplete.state.validChoiceMade).to.equal(true)
            })
          })
          describe('identifies that the user has not made a valid choice', function () {
            it('when the input is blurred, autoselect is disabled, and the current query does not match an option', function () {
              autocomplete.setState({
                query: 'Fracne',
                options: ['France'],
                validChoiceMade: false
              })
              autocomplete.handleComponentBlur({})
              expect(autocomplete.state.validChoiceMade).to.equal(false)
            })
            it('when the input is blurred, autoselect is enabled, but no options exist for the current query', function () {
              autoselectAutocomplete.setState({
                options: [],
                validChoiceMade: false
              })
              autoselectAutocomplete.handleInputChange({
                target: {
                  value: 'gpvx'
                }
              })
              autoselectAutocomplete.handleComponentBlur({})
              expect(autoselectAutocomplete.state.validChoiceMade).to.equal(false)
            })
          })
          describe('identifies that the valid choice situation has changed', function () {
            it('when the user amends a previously matched query such that it no longer matches an option', function () {
              autocomplete.setState({
                query: 'France',
                options: ['France'],
                validChoiceMade: false
              })
              autocomplete.handleComponentBlur({})
              expect(autocomplete.state.validChoiceMade).to.equal(true)
              autocomplete.handleInputChange({
                target: {
                  value: 'Francey'
                }
              })
              autocomplete.handleComponentBlur({})
              expect(autocomplete.state.validChoiceMade).to.equal(false)
              autocomplete.handleInputChange({
                target: {
                  value: 'France'
                }
              })
              autocomplete.handleComponentBlur({})
              expect(autocomplete.state.validChoiceMade).to.equal(true)
              autocomplete.handleInputChange({
                target: {
                  value: 'Franc'
                }
              })
              autocomplete.handleComponentBlur({})
              expect(autocomplete.state.validChoiceMade).to.equal(false)
            })
          })
        })
      })
    })
    describe('Status', function () {
      describe('rendering', function () {
        let scratch
        before(function () {
          scratch = document.createElement('div');
          (document.body || document.documentElement).appendChild(scratch)
        })
        beforeEach(function () {
          scratch.innerHTML = ''
        })
        after(function () {
          scratch.parentNode.removeChild(scratch)
          scratch = null
        })
        it('renders a pair of aria live regions', function () {
          (0, _preact.render)((0, _preact.createElement)(_status.default, null), scratch)
          expect(scratch.innerHTML).to.contain('div')
          const wrapperElement = scratch.getElementsByTagName('div')[0]
          const ariaLiveA = wrapperElement.getElementsByTagName('div')[0]
          const ariaLiveB = wrapperElement.getElementsByTagName('div')[1]
          expect(ariaLiveA.getAttribute('role')).to.equal('status', 'first aria live region should be marked as role=status')
          expect(ariaLiveA.getAttribute('aria-atomic')).to.equal('true', 'first aria live region should be marked as atomic')
          expect(ariaLiveA.getAttribute('aria-live')).to.equal('polite', 'first aria live region should be marked as polite')
          expect(ariaLiveB.getAttribute('role')).to.equal('status', 'second aria live region should be marked as role=status')
          expect(ariaLiveB.getAttribute('aria-atomic')).to.equal('true', 'second aria live region should be marked as atomic')
          expect(ariaLiveB.getAttribute('aria-live')).to.equal('polite', 'second aria live region should be marked as polite')
        })
        describe('behaviour', function () {
          describe('silences aria live announcement', function () {
            it('when a valid choice has been made and the input has focus', function (done) {
              const status = new _status.default(Object.assign({}, _status.default.defaultProps, {
                validChoiceMade: true,
                isInFocus: true
              }))
              status.componentWillMount()
              status.render()
              setTimeout(function () {
                expect(status.state.silenced).to.equal(true)
                done()
              }, 1500)
            })
            it('when the input no longer has focus', function (done) {
              const status = new _status.default(Object.assign({}, _status.default.defaultProps, {
                validChoiceMade: false,
                isInFocus: false
              }))
              status.componentWillMount()
              status.render()
              setTimeout(function () {
                expect(status.state.silenced).to.equal(true)
                done()
              }, 1500)
            })
          })
          describe('does not silence aria live announcement', function () {
            it('when a valid choice has not been made and the input has focus', function (done) {
              const status = new _status.default(Object.assign({}, _status.default.defaultProps, {
                validChoiceMade: false,
                isInFocus: true
              }))
              status.componentWillMount()
              status.render()
              setTimeout(function () {
                expect(status.state.silenced).to.equal(false)
                done()
              }, 1500)
            })
          })
        })
      })
    })
    /***/ },

  /***/ '../test/functional/wrapper.js':
  /*! *************************************!*\
  !*** ../test/functional/wrapper.js ***!
  \*************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    __webpack_require__(/*! core-js/modules/es.function.name.js */ '../node_modules/core-js/modules/es.function.name.js')
    __webpack_require__(/*! core-js/modules/es.array.for-each.js */ '../node_modules/core-js/modules/es.array.for-each.js')
    __webpack_require__(/*! core-js/modules/es.object.to-string.js */ '../node_modules/core-js/modules/es.object.to-string.js')
    __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ '../node_modules/core-js/modules/web.dom-collections.for-each.js')
    __webpack_require__(/*! core-js/modules/es.array.map.js */ '../node_modules/core-js/modules/es.array.map.js')
    __webpack_require__(/*! core-js/modules/es.object.keys.js */ '../node_modules/core-js/modules/es.object.keys.js')
    __webpack_require__(/*! core-js/modules/es.function.bind.js */ '../node_modules/core-js/modules/es.function.bind.js')
    __webpack_require__(/*! core-js/modules/web.timers.js */ '../node_modules/core-js/modules/web.timers.js')
    __webpack_require__(/*! core-js/modules/es.object.define-property.js */ '../node_modules/core-js/modules/es.object.define-property.js')
    const _wrapper = _interopRequireDefault(__webpack_require__(/*! ../../src/wrapper */ './wrapper.js'))
    function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
    /* global before, beforeEach, after, describe, expect, it */

    const DEFAULT_OPTIONS = {
      '': 'Select',
      fr: 'France',
      de: 'Germany',
      gb: 'United Kingdom of Great Britain & Northern Ireland'
    }
    const injectSelectToEnhanceIntoDOM = function injectSelectToEnhanceIntoDOM (element, settings) {
      settings = settings || {}
      settings.options = settings.options || DEFAULT_OPTIONS
      settings.id = settings.id !== undefined ? settings.id : 'location-picker-id'
      settings.name = settings.name !== undefined ? settings.name : 'location-picker-name'
      const $select = document.createElement('select')
      if (settings.id) {
        $select.id = settings.id
      }
      if (settings.name) {
        $select.name = settings.name
      }
      Object.keys(settings.options).map(function (optionKey) {
        const option = document.createElement('option')
        option.value = optionKey
        option.text = settings.options[optionKey]
        option.selected = settings.selected === optionKey
        return option
      }).forEach(function (option) {
        return $select.appendChild(option)
      })
      element.appendChild($select)
      return $select
    }
    describe('Wrapper', function () {
      let scratch
      before(function () {
        scratch = document.createElement('div');
        (document.body || document.documentElement).appendChild(scratch)
      })
      beforeEach(function () {
        scratch.innerHTML = ''
      })
      after(function () {
        scratch.parentNode.removeChild(scratch)
        scratch = null
      })
      it('throws an error when called on nonexistent element', function () {
        expect(_wrapper.default.bind(null, {
          element: document.querySelector('#nothing-container'),
          id: 'scratch',
          source: function source () {}
        })).to.throw('element is not defined')
      })
      it('throws an error when called without an id ', function () {
        expect(_wrapper.default.bind(null, {
          element: scratch,
          source: function source () {}
        })).to.throw('id is not defined')
      })
      it('throws an error when called without a source', function () {
        expect(_wrapper.default.bind(null, {
          element: scratch,
          id: 'scratch'
        })).to.throw('source is not defined')
      })
      it('throws an error when called on nonexistent selectElement', function () {
        expect(_wrapper.default.enhanceSelectElement.bind(null, {
          selectElement: document.querySelector('#nothing')
        })).to.throw('selectElement is not defined')
      })
      it('can enhance a select element', function () {
        const select = injectSelectToEnhanceIntoDOM(scratch)
        const id = select.id
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        expect(autocompleteInstances.length).to.equal(1)
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        expect(autocompleteInput.tagName.toLowerCase()).to.equal('input')
        expect(autocompleteInput.id).to.equal(id)
      })
      it('uses the defaultValue setting to populate the input field if no option is selected', function () {
        const select = injectSelectToEnhanceIntoDOM(scratch, {
          selected: ''
        })
        _wrapper.default.enhanceSelectElement({
          defaultValue: '',
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        expect(autocompleteInput.value).to.equal('')
      })
      it('uses the option label as the default input element value if an option is selected', function () {
        const select = injectSelectToEnhanceIntoDOM(scratch, {
          selected: 'de'
        })
        _wrapper.default.enhanceSelectElement({
          defaultValue: '',
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        expect(autocompleteInput.value).to.equal('Germany')
      })
      it('gives the autocomplete element a blank name attribute by default', function () {
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        expect(autocompleteInput.name).to.equal('')
      })
      it('can define a name for the autocomplete element', function () {
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          name: 'location-picker-autocomplete',
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        expect(autocompleteInput.name).to.equal('location-picker-autocomplete')
      })
      it('does not include "null" options in autocomplete', function (done) {
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')

        // Using setTimeouts here since changes in values take a while to reflect in lists
        autocompleteInput.value = 'e'
        setTimeout(function () {
          const autocompleteOptions = autocompleteInstance.querySelectorAll('.autocomplete__option')
          expect(autocompleteOptions.length).to.equal(3)
          expect([].map.call(autocompleteOptions, function (o) {
            return o.textContent
          })).not.to.contain('Select')
          done()
        }, 250)
      })
      it('includes "null" options in autocomplete if `preserveNullOptions` flag is true', function (done) {
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          preserveNullOptions: true,
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')

        // Using setTimeouts here since changes in values take a while to reflect in lists
        autocompleteInput.value = 'e'
        setTimeout(function () {
          const autocompleteOptions = autocompleteInstance.querySelectorAll('.autocomplete__option')
          expect(autocompleteOptions.length).to.equal(4)
          expect([].map.call(autocompleteOptions, function (o) {
            return o.textContent
          })).to.contain('Select')
          done()
        }, 250)
      })
      it('has all options when typing', function (done) {
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')

        // Using setTimeouts here since changes in values take a while to reflect in lists
        autocompleteInput.value = 'Fran'
        setTimeout(function () {
          expect(autocompleteOption.textContent).to.equal('France')
          autocompleteInput.value = 'Ger'
          setTimeout(function () {
            expect(autocompleteOption.textContent).to.equal('Germany')
            autocompleteInput.value = 'United'
            setTimeout(function () {
              const autocompleteHint = autocompleteInstance.querySelector('.autocomplete__hint')
              expect(autocompleteOption.textContent).to.equal('United Kingdom of Great Britain & Northern Ireland')
              expect(autocompleteHint.value).to.equal('United Kingdom of Great Britain & Northern Ireland')
              done()
            }, 250)
          }, 250)
        }, 250)
      })
      it('includes aria attributes on each option, to indicate position within the full set of list item elements', function (done) {
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        autocompleteInput.value = 'e'
        setTimeout(function () {
          const autocompleteOptions = autocompleteInstance.querySelectorAll('.autocomplete__option')
          expect(autocompleteOptions.length).to.equal(3)
          expect(autocompleteOptions[0].getAttribute('aria-posinset')).to.equal('1')
          expect(autocompleteOptions[0].getAttribute('aria-setsize')).to.equal('3')
          expect(autocompleteOptions[1].getAttribute('aria-posinset')).to.equal('2')
          expect(autocompleteOptions[1].getAttribute('aria-setsize')).to.equal('3')
          expect(autocompleteOptions[2].getAttribute('aria-posinset')).to.equal('3')
          expect(autocompleteOptions[2].getAttribute('aria-setsize')).to.equal('3')
          done()
        }, 250)
      })
      it('includes an explicit position suffix on each list item option when iOS is detected', function (done) {
        Object.defineProperty(__webpack_require__.g.navigator, 'userAgent', {
          value: 'iPhone AppleWebKit',
          configurable: true
        })
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')
        autocompleteInput.value = 'Fran'
        setTimeout(function () {
          expect(autocompleteOption.textContent).to.equal('France 1 of 1')
          const iosSuffixSpan = autocompleteOption.querySelector('#location-picker-id__option-suffix--0')
          expect(iosSuffixSpan.textContent).to.equal(' 1 of 1')
          done()
        }, 250)
      })
      it('does not include a position suffix on each list item option, when iOS is not detected', function (done) {
        Object.defineProperty(__webpack_require__.g.navigator, 'userAgent', {
          value: 'definitely not an iDevice',
          configurable: true
        })
        const select = injectSelectToEnhanceIntoDOM(scratch)
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')
        autocompleteInput.value = 'Fran'
        setTimeout(function () {
          expect(autocompleteOption.textContent).to.equal('France')
          const iosSuffixSpan = autocompleteOption.querySelector('#location-picker-id__option-suffix--0')
          expect(iosSuffixSpan).to.equal(null)
          done()
        }, 250)
      })
      it('onConfirm updates original select', function (done) {
        const select = injectSelectToEnhanceIntoDOM(scratch, {
          selected: 'de'
        })
        _wrapper.default.enhanceSelectElement({
          selectElement: select
        })
        const autocompleteInstances = document.querySelectorAll('.autocomplete__wrapper')
        const autocompleteInstance = autocompleteInstances[0]
        const autocompleteInput = autocompleteInstance.querySelector('.autocomplete__input')
        const autocompleteOption = autocompleteInstance.querySelector('.autocomplete__option')

        // Check the initial value of the original selectElement
        expect(select.value).to.equal('de')
        // Using setTimeouts here since changes in values take a while to reflect in lists
        autocompleteInput.value = 'United'
        setTimeout(function () {
          expect(autocompleteOption.textContent).to.equal('United Kingdom of Great Britain & Northern Ireland')
          autocompleteOption.click()
          expect(select.value).to.equal('gb')
          setTimeout(function () {
            expect(autocompleteInput.value).to.equal('United Kingdom of Great Britain & Northern Ireland')
            done()
          }, 250)
        }, 250)
      })
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/a-callable.js':
  /*! *******************************************************!*\
  !*** ../node_modules/core-js/internals/a-callable.js ***!
  \*******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const tryToString = __webpack_require__(/*! ../internals/try-to-string */ '../node_modules/core-js/internals/try-to-string.js')

    const $TypeError = TypeError

    // `Assert: IsCallable(argument) is true`
    module.exports = function (argument) {
      if (isCallable(argument)) return argument
      throw $TypeError(tryToString(argument) + ' is not a function')
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/a-possible-prototype.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')

    const $String = String
    const $TypeError = TypeError

    module.exports = function (argument) {
      if (typeof argument === 'object' || isCallable(argument)) return argument
      throw $TypeError("Can't set " + $String(argument) + ' as a prototype')
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/advance-string-index.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/advance-string-index.js ***!
  \*****************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const charAt = (__webpack_require__(/*! ../internals/string-multibyte */ '../node_modules/core-js/internals/string-multibyte.js').charAt)

    // `AdvanceStringIndex` abstract operation
    // https://tc39.es/ecma262/#sec-advancestringindex
    module.exports = function (S, index, unicode) {
      return index + (unicode ? charAt(S, index).length : 1)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/an-object.js':
  /*! ******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')

    const $String = String
    const $TypeError = TypeError

    // `Assert: Type(argument) is Object`
    module.exports = function (argument) {
      if (isObject(argument)) return argument
      throw $TypeError($String(argument) + ' is not an object')
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/array-for-each.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-for-each.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const $forEach = (__webpack_require__(/*! ../internals/array-iteration */ '../node_modules/core-js/internals/array-iteration.js').forEach)
    const arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ '../node_modules/core-js/internals/array-method-is-strict.js')

    const STRICT_METHOD = arrayMethodIsStrict('forEach')

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    module.exports = !STRICT_METHOD ? function forEach (callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    } : [].forEach
    /***/ },

  /***/ '../node_modules/core-js/internals/array-includes.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ '../node_modules/core-js/internals/to-indexed-object.js')
    const toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ '../node_modules/core-js/internals/to-absolute-index.js')
    const lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ '../node_modules/core-js/internals/length-of-array-like.js')

    // `Array.prototype.{ indexOf, includes }` methods implementation
    const createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        const O = toIndexedObject($this)
        const length = lengthOfArrayLike(O)
        let index = toAbsoluteIndex(fromIndex, length)
        let value
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) {
          while (length > index) {
            value = O[index++]
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true
          // Array#indexOf ignores holes, Array#includes - not
          }
        } else {
          for (;length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
          }
        } return !IS_INCLUDES && -1
      }
    }

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/array-iteration.js':
  /*! ************************************************************!*\
  !*** ../node_modules/core-js/internals/array-iteration.js ***!
  \************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const bind = __webpack_require__(/*! ../internals/function-bind-context */ '../node_modules/core-js/internals/function-bind-context.js')
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ '../node_modules/core-js/internals/indexed-object.js')
    const toObject = __webpack_require__(/*! ../internals/to-object */ '../node_modules/core-js/internals/to-object.js')
    const lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ '../node_modules/core-js/internals/length-of-array-like.js')
    const arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ '../node_modules/core-js/internals/array-species-create.js')

    const push = uncurryThis([].push)

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    const createMethod = function (TYPE) {
      const IS_MAP = TYPE == 1
      const IS_FILTER = TYPE == 2
      const IS_SOME = TYPE == 3
      const IS_EVERY = TYPE == 4
      const IS_FIND_INDEX = TYPE == 6
      const IS_FILTER_REJECT = TYPE == 7
      const NO_HOLES = TYPE == 5 || IS_FIND_INDEX
      return function ($this, callbackfn, that, specificCreate) {
        const O = toObject($this)
        const self = IndexedObject(O)
        const boundFunction = bind(callbackfn, that)
        const length = lengthOfArrayLike(self)
        let index = 0
        const create = specificCreate || arraySpeciesCreate
        const target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined
        let value, result
        for (;length > index; index++) {
          if (NO_HOLES || index in self) {
            value = self[index]
            result = boundFunction(value, index, O)
            if (TYPE) {
              if (IS_MAP) target[index] = result // map
              else if (result) {
                switch (TYPE) {
                  case 3: return true // some
                  case 5: return value // find
                  case 6: return index // findIndex
                  case 2: push(target, value) // filter
                }
              } else {
                switch (TYPE) {
                  case 4: return false // every
                  case 7: push(target, value) // filterReject
                }
              }
            }
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
      }
    }

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
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/array-method-has-species-support.js':
  /*! *****************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*****************************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ '../node_modules/core-js/internals/well-known-symbol.js')
    const V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ '../node_modules/core-js/internals/engine-v8-version.js')

    const SPECIES = wellKnownSymbol('species')

    module.exports = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return V8_VERSION >= 51 || !fails(function () {
        const array = []
        const constructor = array.constructor = {}
        constructor[SPECIES] = function () {
          return { foo: 1 }
        }
        return array[METHOD_NAME](Boolean).foo !== 1
      })
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/array-method-is-strict.js':
  /*! *******************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-is-strict.js ***!
  \*******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')

    module.exports = function (METHOD_NAME, argument) {
      const method = [][METHOD_NAME]
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function () { return 1 }, 1)
      })
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/array-slice.js':
  /*! ********************************************************!*\
  !*** ../node_modules/core-js/internals/array-slice.js ***!
  \********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')

    module.exports = uncurryThis([].slice)
    /***/ },

  /***/ '../node_modules/core-js/internals/array-species-constructor.js':
  /*! **********************************************************************!*\
  !*** ../node_modules/core-js/internals/array-species-constructor.js ***!
  \**********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const isArray = __webpack_require__(/*! ../internals/is-array */ '../node_modules/core-js/internals/is-array.js')
    const isConstructor = __webpack_require__(/*! ../internals/is-constructor */ '../node_modules/core-js/internals/is-constructor.js')
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')
    const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ '../node_modules/core-js/internals/well-known-symbol.js')

    const SPECIES = wellKnownSymbol('species')
    const $Array = Array

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray) {
      let C
      if (isArray(originalArray)) {
        C = originalArray.constructor
        // cross-realm fallback
        if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined
        else if (isObject(C)) {
          C = C[SPECIES]
          if (C === null) C = undefined
        }
      } return C === undefined ? $Array : C
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/array-species-create.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/array-species-create.js ***!
  \*****************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ '../node_modules/core-js/internals/array-species-constructor.js')

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/classof-raw.js':
  /*! ********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')

    const toString = uncurryThis({}.toString)
    const stringSlice = uncurryThis(''.slice)

    module.exports = function (it) {
      return stringSlice(toString(it), 8, -1)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/classof.js':
  /*! ****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ '../node_modules/core-js/internals/to-string-tag-support.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const classofRaw = __webpack_require__(/*! ../internals/classof-raw */ '../node_modules/core-js/internals/classof-raw.js')
    const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ '../node_modules/core-js/internals/well-known-symbol.js')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const $Object = Object

    // ES3 wrong here
    const CORRECT_ARGUMENTS = classofRaw(function () { return arguments }()) == 'Arguments'

    // fallback for IE11 Script Access Denied error
    const tryGet = function (it, key) {
      try {
        return it[key]
      } catch (error) { /* empty */ }
    }

    // getting tag from ES6+ `Object.prototype.toString`
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      let O, tag, result
      return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
        : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) === 'string' ? tag
        // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O)
          // ES3 arguments fallback
            : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/copy-constructor-properties.js':
  /*! ************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')
    const ownKeys = __webpack_require__(/*! ../internals/own-keys */ '../node_modules/core-js/internals/own-keys.js')
    const getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ '../node_modules/core-js/internals/object-get-own-property-descriptor.js')
    const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ '../node_modules/core-js/internals/object-define-property.js')

    module.exports = function (target, source, exceptions) {
      const keys = ownKeys(source)
      const defineProperty = definePropertyModule.f
      const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key))
        }
      }
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/create-non-enumerable-property.js':
  /*! ***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ '../node_modules/core-js/internals/object-define-property.js')
    const createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ '../node_modules/core-js/internals/create-property-descriptor.js')

    module.exports = DESCRIPTORS
      ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
      }
      : function (object, key, value) {
        object[key] = value
        return object
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/create-property-descriptor.js':
  /*! ***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
  /***/ function (module) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      }
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/create-property.js':
  /*! ************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property.js ***!
  \************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ '../node_modules/core-js/internals/to-property-key.js')
    const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ '../node_modules/core-js/internals/object-define-property.js')
    const createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ '../node_modules/core-js/internals/create-property-descriptor.js')

    module.exports = function (object, key, value) {
      const propertyKey = toPropertyKey(key)
      if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value))
      else object[propertyKey] = value
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/define-built-in.js':
  /*! ************************************************************!*\
  !*** ../node_modules/core-js/internals/define-built-in.js ***!
  \************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ '../node_modules/core-js/internals/object-define-property.js')
    const makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ '../node_modules/core-js/internals/make-built-in.js')
    const defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ '../node_modules/core-js/internals/define-global-property.js')

    module.exports = function (O, key, value, options) {
      if (!options) options = {}
      let simple = options.enumerable
      const name = options.name !== undefined ? options.name : key
      if (isCallable(value)) makeBuiltIn(value, name, options)
      if (options.global) {
        if (simple) O[key] = value
        else defineGlobalProperty(key, value)
      } else {
        try {
          if (!options.unsafe) delete O[key]
          else if (O[key]) simple = true
        } catch (error) { /* empty */ }
        if (simple) O[key] = value
        else {
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          })
        }
      } return O
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/define-global-property.js':
  /*! *******************************************************************!*\
  !*** ../node_modules/core-js/internals/define-global-property.js ***!
  \*******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')

    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const defineProperty = Object.defineProperty

    module.exports = function (key, value) {
      try {
        defineProperty(global, key, { value, configurable: true, writable: true })
      } catch (error) {
        global[key] = value
      } return value
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/descriptors.js':
  /*! ********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] != 7
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/document-all.js':
  /*! *********************************************************!*\
  !*** ../node_modules/core-js/internals/document-all.js ***!
  \*********************************************************/
  /***/ function (module) {
    const documentAll = typeof document === 'object' && document.all

    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
    const IS_HTMLDDA = typeof documentAll === 'undefined' && documentAll !== undefined

    module.exports = {
      all: documentAll,
      IS_HTMLDDA
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/document-create-element.js':
  /*! ********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')

    const document = global.document
    // typeof document.createElement is 'object' in old IE
    const EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/does-not-exceed-safe-integer.js':
  /*! *************************************************************************!*\
  !*** ../node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \*************************************************************************/
  /***/ function (module) {
    const $TypeError = TypeError
    const MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF // 2 ** 53 - 1 == 9007199254740991

    module.exports = function (it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded')
      return it
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/dom-iterables.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/dom-iterables.js ***!
  \**********************************************************/
  /***/ function (module) {
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
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/dom-token-list-prototype.js':
  /*! *********************************************************************!*\
  !*** ../node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \*********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
    const documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ '../node_modules/core-js/internals/document-create-element.js')

    const classList = documentCreateElement('span').classList
    const DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype

    module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype
    /***/ },

  /***/ '../node_modules/core-js/internals/engine-user-agent.js':
  /*! **************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ '../node_modules/core-js/internals/get-built-in.js')

    module.exports = getBuiltIn('navigator', 'userAgent') || ''
    /***/ },

  /***/ '../node_modules/core-js/internals/engine-v8-version.js':
  /*! **************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ '../node_modules/core-js/internals/engine-user-agent.js')

    const process = global.process
    const Deno = global.Deno
    const versions = process && process.versions || Deno && Deno.version
    const v8 = versions && versions.v8
    let match, version

    if (v8) {
      match = v8.split('.')
      // in old Chrome, versions of V8 isn't V8 = Chrome / 10
      // but their correct versions are not interesting for us
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1])
    }

    // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/)
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/)
        if (match) version = +match[1]
      }
    }

    module.exports = version
    /***/ },

  /***/ '../node_modules/core-js/internals/enum-bug-keys.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
  /***/ function (module) {
    // IE8- don't enum bug keys
    module.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ]
    /***/ },

  /***/ '../node_modules/core-js/internals/export.js':
  /*! ***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ '../node_modules/core-js/internals/object-get-own-property-descriptor.js').f)
    const createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ '../node_modules/core-js/internals/create-non-enumerable-property.js')
    const defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ '../node_modules/core-js/internals/define-built-in.js')
    const defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ '../node_modules/core-js/internals/define-global-property.js')
    const copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ '../node_modules/core-js/internals/copy-constructor-properties.js')
    const isForced = __webpack_require__(/*! ../internals/is-forced */ '../node_modules/core-js/internals/is-forced.js')

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
      const TARGET = options.target
      const GLOBAL = options.global
      const STATIC = options.stat
      let FORCED, target, key, targetProperty, sourceProperty, descriptor
      if (GLOBAL) {
        target = global
      } else if (STATIC) {
        target = global[TARGET] || defineGlobalProperty(TARGET, {})
      } else {
        target = (global[TARGET] || {}).prototype
      }
      if (target) {
        for (key in source) {
          sourceProperty = source[key]
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key)
            targetProperty = descriptor && descriptor.value
          } else targetProperty = target[key]
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced)
          // contained in target
          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue
            copyConstructorProperties(sourceProperty, targetProperty)
          }
          // add a flag to not completely full polyfills
          if (options.sham || (targetProperty && targetProperty.sham)) {
            createNonEnumerableProperty(sourceProperty, 'sham', true)
          }
          defineBuiltIn(target, key, sourceProperty, options)
        }
      }
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/fails.js':
  /*! **************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
  /***/ function (module) {
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js':
  /*! *******************************************************************************!*\
  !*** ../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*******************************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    // TODO: Remove from `core-js@4` since it's moved to entry points
    __webpack_require__(/*! ../modules/es.regexp.exec */ '../node_modules/core-js/modules/es.regexp.exec.js')
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ '../node_modules/core-js/internals/function-uncurry-this-clause.js')
    const defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ '../node_modules/core-js/internals/define-built-in.js')
    const regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ '../node_modules/core-js/internals/regexp-exec.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ '../node_modules/core-js/internals/well-known-symbol.js')
    const createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ '../node_modules/core-js/internals/create-non-enumerable-property.js')

    const SPECIES = wellKnownSymbol('species')
    const RegExpPrototype = RegExp.prototype

    module.exports = function (KEY, exec, FORCED, SHAM) {
      const SYMBOL = wellKnownSymbol(KEY)

      const DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegEp methods
        const O = {}
        O[SYMBOL] = function () { return 7 }
        return ''[KEY](O) != 7
      })

      const DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
        // Symbol-named RegExp methods call .exec
        let execCalled = false
        let re = /a/

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          re = {}
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {}
          re.constructor[SPECIES] = function () { return re }
          re.flags = ''
          re[SYMBOL] = /./[SYMBOL]
        }

        re.exec = function () { execCalled = true; return null }

        re[SYMBOL]('')
        return !execCalled
      })

      if (
        !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
      ) {
        const uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL])
        const methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          const uncurriedNativeMethod = uncurryThis(nativeMethod)
          const $exec = regexp.exec
          if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) }
            }
            return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) }
          }
          return { done: false }
        })

        defineBuiltIn(String.prototype, KEY, methods[0])
        defineBuiltIn(RegExpPrototype, SYMBOL, methods[1])
      }

      if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/function-apply.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/function-apply.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ '../node_modules/core-js/internals/function-bind-native.js')

    const FunctionPrototype = Function.prototype
    const apply = FunctionPrototype.apply
    const call = FunctionPrototype.call

    // eslint-disable-next-line es/no-reflect -- safe
    module.exports = typeof Reflect === 'object' && Reflect.apply || (NATIVE_BIND
      ? call.bind(apply)
      : function () {
        return call.apply(apply, arguments)
      })
    /***/ },

  /***/ '../node_modules/core-js/internals/function-bind-context.js':
  /*! ******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-context.js ***!
  \******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ '../node_modules/core-js/internals/function-uncurry-this-clause.js')
    const aCallable = __webpack_require__(/*! ../internals/a-callable */ '../node_modules/core-js/internals/a-callable.js')
    const NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ '../node_modules/core-js/internals/function-bind-native.js')

    const bind = uncurryThis(uncurryThis.bind)

    // optional / simple context binding
    module.exports = function (fn, that) {
      aCallable(fn)
      return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
        return fn.apply(that, arguments)
      }
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/function-bind-native.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-native.js ***!
  \*****************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-function-prototype-bind -- safe
      const test = function () { /* empty */ }.bind()
      // eslint-disable-next-line no-prototype-builtins -- safe
      return typeof test !== 'function' || test.hasOwnProperty('prototype')
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/function-bind.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind.js ***!
  \**********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const aCallable = __webpack_require__(/*! ../internals/a-callable */ '../node_modules/core-js/internals/a-callable.js')
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')
    const arraySlice = __webpack_require__(/*! ../internals/array-slice */ '../node_modules/core-js/internals/array-slice.js')
    const NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ '../node_modules/core-js/internals/function-bind-native.js')

    const $Function = Function
    const concat = uncurryThis([].concat)
    const join = uncurryThis([].join)
    const factories = {}

    const construct = function (C, argsLength, args) {
      if (!hasOwn(factories, argsLength)) {
        for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'
        factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')')
      } return factories[argsLength](C, args)
    }

    // `Function.prototype.bind` method implementation
    // https://tc39.es/ecma262/#sec-function.prototype.bind
    module.exports = NATIVE_BIND ? $Function.bind : function bind (that /* , ...args */) {
      const F = aCallable(this)
      const Prototype = F.prototype
      const partArgs = arraySlice(arguments, 1)
      var boundFunction = function bound (/* args... */) {
        const args = concat(partArgs, arraySlice(arguments))
        return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args)
      }
      if (isObject(Prototype)) boundFunction.prototype = Prototype
      return boundFunction
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/function-call.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/function-call.js ***!
  \**********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ '../node_modules/core-js/internals/function-bind-native.js')

    const call = Function.prototype.call

    module.exports = NATIVE_BIND
      ? call.bind(call)
      : function () {
        return call.apply(call, arguments)
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/function-name.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/function-name.js ***!
  \**********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')

    const FunctionPrototype = Function.prototype
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor

    const EXISTS = hasOwn(FunctionPrototype, 'name')
    // additional protection from minified / mangled / dropped function names
    const PROPER = EXISTS && function something () { /* empty */ }.name === 'something'
    const CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable))

    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/function-uncurry-this-clause.js':
  /*! *************************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \*************************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const classofRaw = __webpack_require__(/*! ../internals/classof-raw */ '../node_modules/core-js/internals/classof-raw.js')
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')

    module.exports = function (fn) {
      // Nashorn bug:
      //   https://github.com/zloirock/core-js/issues/1128
      //   https://github.com/zloirock/core-js/issues/1130
      if (classofRaw(fn) === 'Function') return uncurryThis(fn)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/function-uncurry-this.js':
  /*! ******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-uncurry-this.js ***!
  \******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ '../node_modules/core-js/internals/function-bind-native.js')

    const FunctionPrototype = Function.prototype
    const call = FunctionPrototype.call
    const uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call)

    module.exports = NATIVE_BIND
      ? uncurryThisWithBind
      : function (fn) {
        return function () {
          return call.apply(fn, arguments)
        }
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/get-built-in.js':
  /*! *********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')

    const aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method]
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/get-method.js':
  /*! *******************************************************!*\
  !*** ../node_modules/core-js/internals/get-method.js ***!
  \*******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const aCallable = __webpack_require__(/*! ../internals/a-callable */ '../node_modules/core-js/internals/a-callable.js')
    const isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ '../node_modules/core-js/internals/is-null-or-undefined.js')

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    module.exports = function (V, P) {
      const func = V[P]
      return isNullOrUndefined(func) ? undefined : aCallable(func)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/global.js':
  /*! ***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const check = function (it) {
      return it && it.Math == Math && it
    }

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self === 'object' && self) ||
  check(typeof __webpack_require__.g === 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this })() || Function('return this')()
    /***/ },

  /***/ '../node_modules/core-js/internals/has-own-property.js':
  /*! *************************************************************!*\
  !*** ../node_modules/core-js/internals/has-own-property.js ***!
  \*************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const toObject = __webpack_require__(/*! ../internals/to-object */ '../node_modules/core-js/internals/to-object.js')

    const hasOwnProperty = uncurryThis({}.hasOwnProperty)

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es/no-object-hasown -- safe
    module.exports = Object.hasOwn || function hasOwn (it, key) {
      return hasOwnProperty(toObject(it), key)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/hidden-keys.js':
  /*! ********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
  /***/ function (module) {
    module.exports = {}
    /***/ },

  /***/ '../node_modules/core-js/internals/html.js':
  /*! *************************************************!*\
  !*** ../node_modules/core-js/internals/html.js ***!
  \*************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ '../node_modules/core-js/internals/get-built-in.js')

    module.exports = getBuiltIn('document', 'documentElement')
    /***/ },

  /***/ '../node_modules/core-js/internals/ie8-dom-define.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const createElement = __webpack_require__(/*! ../internals/document-create-element */ '../node_modules/core-js/internals/document-create-element.js')

    // Thanks to IE8 for its funny defineProperty
    module.exports = !DESCRIPTORS && !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(createElement('div'), 'a', {
        get: function () { return 7 }
      }).a != 7
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/indexed-object.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const classof = __webpack_require__(/*! ../internals/classof-raw */ '../node_modules/core-js/internals/classof-raw.js')

    const $Object = Object
    const split = uncurryThis(''.split)

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !$Object('z').propertyIsEnumerable(0)
    }) ? function (it) {
        return classof(it) == 'String' ? split(it, '') : $Object(it)
      } : $Object
    /***/ },

  /***/ '../node_modules/core-js/internals/inspect-source.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const store = __webpack_require__(/*! ../internals/shared-store */ '../node_modules/core-js/internals/shared-store.js')

    const functionToString = uncurryThis(Function.toString)

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function (it) {
        return functionToString(it)
      }
    }

    module.exports = store.inspectSource
    /***/ },

  /***/ '../node_modules/core-js/internals/internal-state.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ '../node_modules/core-js/internals/weak-map-basic-detection.js')
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')
    const createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ '../node_modules/core-js/internals/create-non-enumerable-property.js')
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')
    const shared = __webpack_require__(/*! ../internals/shared-store */ '../node_modules/core-js/internals/shared-store.js')
    const sharedKey = __webpack_require__(/*! ../internals/shared-key */ '../node_modules/core-js/internals/shared-key.js')
    const hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ '../node_modules/core-js/internals/hidden-keys.js')

    const OBJECT_ALREADY_INITIALIZED = 'Object already initialized'
    const TypeError = global.TypeError
    const WeakMap = global.WeakMap
    let set, get, has

    const enforce = function (it) {
      return has(it) ? get(it) : set(it, {})
    }

    const getterFor = function (TYPE) {
      return function (it) {
        let state
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required')
        } return state
      }
    }

    if (NATIVE_WEAK_MAP || shared.state) {
      const store = shared.state || (shared.state = new WeakMap())
      /* eslint-disable no-self-assign -- prototype methods protection */
      store.get = store.get
      store.has = store.has
      store.set = store.set
      /* eslint-enable no-self-assign -- prototype methods protection */
      set = function (it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED)
        metadata.facade = it
        store.set(it, metadata)
        return metadata
      }
      get = function (it) {
        return store.get(it) || {}
      }
      has = function (it) {
        return store.has(it)
      }
    } else {
      const STATE = sharedKey('state')
      hiddenKeys[STATE] = true
      set = function (it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED)
        metadata.facade = it
        createNonEnumerableProperty(it, STATE, metadata)
        return metadata
      }
      get = function (it) {
        return hasOwn(it, STATE) ? it[STATE] : {}
      }
      has = function (it) {
        return hasOwn(it, STATE)
      }
    }

    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/is-array.js':
  /*! *****************************************************!*\
  !*** ../node_modules/core-js/internals/is-array.js ***!
  \*****************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const classof = __webpack_require__(/*! ../internals/classof-raw */ '../node_modules/core-js/internals/classof-raw.js')

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe
    module.exports = Array.isArray || function isArray (argument) {
      return classof(argument) == 'Array'
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/is-callable.js':
  /*! ********************************************************!*\
  !*** ../node_modules/core-js/internals/is-callable.js ***!
  \********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const $documentAll = __webpack_require__(/*! ../internals/document-all */ '../node_modules/core-js/internals/document-all.js')

    const documentAll = $documentAll.all

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    module.exports = $documentAll.IS_HTMLDDA
      ? function (argument) {
        return typeof argument === 'function' || argument === documentAll
      }
      : function (argument) {
        return typeof argument === 'function'
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/is-constructor.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/is-constructor.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const classof = __webpack_require__(/*! ../internals/classof */ '../node_modules/core-js/internals/classof.js')
    const getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ '../node_modules/core-js/internals/get-built-in.js')
    const inspectSource = __webpack_require__(/*! ../internals/inspect-source */ '../node_modules/core-js/internals/inspect-source.js')

    const noop = function () { /* empty */ }
    const empty = []
    const construct = getBuiltIn('Reflect', 'construct')
    const constructorRegExp = /^\s*(?:class|function)\b/
    const exec = uncurryThis(constructorRegExp.exec)
    const INCORRECT_TO_STRING = !constructorRegExp.exec(noop)

    const isConstructorModern = function isConstructor (argument) {
      if (!isCallable(argument)) return false
      try {
        construct(noop, empty, argument)
        return true
      } catch (error) {
        return false
      }
    }

    const isConstructorLegacy = function isConstructor (argument) {
      if (!isCallable(argument)) return false
      switch (classof(argument)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction': return false
      }
      try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument))
      } catch (error) {
        return true
      }
    }

    isConstructorLegacy.sham = true

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    module.exports = !construct || fails(function () {
      let called
      return isConstructorModern(isConstructorModern.call) ||
    !isConstructorModern(Object) ||
    !isConstructorModern(function () { called = true }) ||
    called
    })
      ? isConstructorLegacy
      : isConstructorModern
    /***/ },

  /***/ '../node_modules/core-js/internals/is-forced.js':
  /*! ******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')

    const replacement = /#|\.prototype\./

    const isForced = function (feature, detection) {
      const value = data[normalize(feature)]
      return value == POLYFILL
        ? true
        : value == NATIVE
          ? false
          : isCallable(detection)
            ? fails(detection)
            : !!detection
    }

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase()
    }

    var data = isForced.data = {}
    var NATIVE = isForced.NATIVE = 'N'
    var POLYFILL = isForced.POLYFILL = 'P'

    module.exports = isForced
    /***/ },

  /***/ '../node_modules/core-js/internals/is-null-or-undefined.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/is-null-or-undefined.js ***!
  \*****************************************************************/
  /***/ function (module) {
    // we can't use just `it == null` since of `document.all` special case
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    module.exports = function (it) {
      return it === null || it === undefined
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/is-object.js':
  /*! ******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const $documentAll = __webpack_require__(/*! ../internals/document-all */ '../node_modules/core-js/internals/document-all.js')

    const documentAll = $documentAll.all

    module.exports = $documentAll.IS_HTMLDDA
      ? function (it) {
        return typeof it === 'object' ? it !== null : isCallable(it) || it === documentAll
      }
      : function (it) {
        return typeof it === 'object' ? it !== null : isCallable(it)
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/is-pure.js':
  /*! ****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
  /***/ function (module) {
    module.exports = false
    /***/ },

  /***/ '../node_modules/core-js/internals/is-symbol.js':
  /*! ******************************************************!*\
  !*** ../node_modules/core-js/internals/is-symbol.js ***!
  \******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ '../node_modules/core-js/internals/get-built-in.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ '../node_modules/core-js/internals/object-is-prototype-of.js')
    const USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ '../node_modules/core-js/internals/use-symbol-as-uid.js')

    const $Object = Object

    module.exports = USE_SYMBOL_AS_UID
      ? function (it) {
        return typeof it === 'symbol'
      }
      : function (it) {
        const $Symbol = getBuiltIn('Symbol')
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it))
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/length-of-array-like.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/length-of-array-like.js ***!
  \*****************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const toLength = __webpack_require__(/*! ../internals/to-length */ '../node_modules/core-js/internals/to-length.js')

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    module.exports = function (obj) {
      return toLength(obj.length)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/make-built-in.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/make-built-in.js ***!
  \**********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ '../node_modules/core-js/internals/function-name.js').CONFIGURABLE)
    const inspectSource = __webpack_require__(/*! ../internals/inspect-source */ '../node_modules/core-js/internals/inspect-source.js')
    const InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ '../node_modules/core-js/internals/internal-state.js')

    const enforceInternalState = InternalStateModule.enforce
    const getInternalState = InternalStateModule.get
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const defineProperty = Object.defineProperty

    const CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
      return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8
    })

    const TEMPLATE = String(String).split('String')

    const makeBuiltIn = module.exports = function (value, name, options) {
      if (String(name).slice(0, 7) === 'Symbol(') {
        name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'
      }
      if (options && options.getter) name = 'get ' + name
      if (options && options.setter) name = 'set ' + name
      if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
        if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true })
        else value.name = name
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
        defineProperty(value, 'length', { value: options.arity })
      }
      try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false })
          // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
        } else if (value.prototype) value.prototype = undefined
      } catch (error) { /* empty */ }
      const state = enforceInternalState(value)
      if (!hasOwn(state, 'source')) {
        state.source = TEMPLATE.join(typeof name === 'string' ? name : '')
      } return value
    }

    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    // eslint-disable-next-line no-extend-native -- required
    Function.prototype.toString = makeBuiltIn(function toString () {
      return isCallable(this) && getInternalState(this).source || inspectSource(this)
    }, 'toString')
    /***/ },

  /***/ '../node_modules/core-js/internals/math-trunc.js':
  /*! *******************************************************!*\
  !*** ../node_modules/core-js/internals/math-trunc.js ***!
  \*******************************************************/
  /***/ function (module) {
    const ceil = Math.ceil
    const floor = Math.floor

    // `Math.trunc` method
    // https://tc39.es/ecma262/#sec-math.trunc
    // eslint-disable-next-line es/no-math-trunc -- safe
    module.exports = Math.trunc || function trunc (x) {
      const n = +x
      return (n > 0 ? floor : ceil)(n)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-assign.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/object-assign.js ***!
  \**********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const call = __webpack_require__(/*! ../internals/function-call */ '../node_modules/core-js/internals/function-call.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const objectKeys = __webpack_require__(/*! ../internals/object-keys */ '../node_modules/core-js/internals/object-keys.js')
    const getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ '../node_modules/core-js/internals/object-get-own-property-symbols.js')
    const propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ '../node_modules/core-js/internals/object-property-is-enumerable.js')
    const toObject = __webpack_require__(/*! ../internals/to-object */ '../node_modules/core-js/internals/to-object.js')
    const IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ '../node_modules/core-js/internals/indexed-object.js')

    // eslint-disable-next-line es/no-object-assign -- safe
    const $assign = Object.assign
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    const defineProperty = Object.defineProperty
    const concat = uncurryThis([].concat)

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
          })
        }
      }), { b: 2 })).b !== 1) return true
      // should work with symbols and should have deterministic property order (V8 bug)
      const A = {}
      const B = {}
      // eslint-disable-next-line es/no-symbol -- safe
      const symbol = Symbol()
      const alphabet = 'abcdefghijklmnopqrst'
      A[symbol] = 7
      alphabet.split('').forEach(function (chr) { B[chr] = chr })
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet
    }) ? function assign (target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
        const T = toObject(target)
        const argumentsLength = arguments.length
        let index = 1
        const getOwnPropertySymbols = getOwnPropertySymbolsModule.f
        const propertyIsEnumerable = propertyIsEnumerableModule.f
        while (argumentsLength > index) {
          const S = IndexedObject(arguments[index++])
          const keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S)
          const length = keys.length
          let j = 0
          var key
          while (length > j) {
            key = keys[j++]
            if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key]
          }
        } return T
      } : $assign
    /***/ },

  /***/ '../node_modules/core-js/internals/object-create.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/object-create.js ***!
  \**********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    /* global ActiveXObject -- old IE, WSH */
    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')
    const definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ '../node_modules/core-js/internals/object-define-properties.js')
    const enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ '../node_modules/core-js/internals/enum-bug-keys.js')
    const hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ '../node_modules/core-js/internals/hidden-keys.js')
    const html = __webpack_require__(/*! ../internals/html */ '../node_modules/core-js/internals/html.js')
    const documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ '../node_modules/core-js/internals/document-create-element.js')
    const sharedKey = __webpack_require__(/*! ../internals/shared-key */ '../node_modules/core-js/internals/shared-key.js')

    const GT = '>'
    const LT = '<'
    const PROTOTYPE = 'prototype'
    const SCRIPT = 'script'
    const IE_PROTO = sharedKey('IE_PROTO')

    const EmptyConstructor = function () { /* empty */ }

    const scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
    }

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    const NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''))
      activeXDocument.close()
      const temp = activeXDocument.parentWindow.Object
      activeXDocument = null // avoid memory leak
      return temp
    }

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    const NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      const iframe = documentCreateElement('iframe')
      const JS = 'java' + SCRIPT + ':'
      let iframeDocument
      iframe.style.display = 'none'
      html.appendChild(iframe)
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS)
      iframeDocument = iframe.contentWindow.document
      iframeDocument.open()
      iframeDocument.write(scriptTag('document.F=Object'))
      iframeDocument.close()
      return iframeDocument.F
    }

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    let activeXDocument
    var NullProtoObject = function () {
      try {
        activeXDocument = new ActiveXObject('htmlfile')
      } catch (error) { /* ignore */ }
      NullProtoObject = typeof document !== 'undefined'
        ? document.domain && activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument) // old IE
          : NullProtoObjectViaIFrame()
        : NullProtoObjectViaActiveX(activeXDocument) // WSH
      let length = enumBugKeys.length
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
      return NullProtoObject()
    }

    hiddenKeys[IE_PROTO] = true

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    // eslint-disable-next-line es/no-object-create -- safe
    module.exports = Object.create || function create (O, Properties) {
      let result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : definePropertiesModule.f(result, Properties)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-define-properties.js':
  /*! *********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ '../node_modules/core-js/internals/v8-prototype-define-bug.js')
    const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ '../node_modules/core-js/internals/object-define-property.js')
    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')
    const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ '../node_modules/core-js/internals/to-indexed-object.js')
    const objectKeys = __webpack_require__(/*! ../internals/object-keys */ '../node_modules/core-js/internals/object-keys.js')

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG
      ? Object.defineProperties
      : function defineProperties (O, Properties) {
        anObject(O)
        const props = toIndexedObject(Properties)
        const keys = objectKeys(Properties)
        const length = keys.length
        let index = 0
        let key
        while (length > index) definePropertyModule.f(O, key = keys[index++], props[key])
        return O
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-define-property.js':
  /*! *******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ '../node_modules/core-js/internals/ie8-dom-define.js')
    const V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ '../node_modules/core-js/internals/v8-prototype-define-bug.js')
    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')
    const toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ '../node_modules/core-js/internals/to-property-key.js')

    const $TypeError = TypeError
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const $defineProperty = Object.defineProperty
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
    const ENUMERABLE = 'enumerable'
    const CONFIGURABLE = 'configurable'
    const WRITABLE = 'writable'

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG
      ? function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPropertyKey(P)
        anObject(Attributes)
        if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          const current = $getOwnPropertyDescriptor(O, P)
          if (current && current[WRITABLE]) {
            O[P] = Attributes.value
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
              writable: false
            }
          }
        } return $defineProperty(O, P, Attributes)
      }
      : $defineProperty : function defineProperty (O, P, Attributes) {
      anObject(O)
      P = toPropertyKey(P)
      anObject(Attributes)
      if (IE8_DOM_DEFINE) {
        try {
          return $defineProperty(O, P, Attributes)
        } catch (error) { /* empty */ }
      }
      if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported')
      if ('value' in Attributes) O[P] = Attributes.value
      return O
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-get-own-property-descriptor.js':
  /*! *******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const call = __webpack_require__(/*! ../internals/function-call */ '../node_modules/core-js/internals/function-call.js')
    const propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ '../node_modules/core-js/internals/object-property-is-enumerable.js')
    const createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ '../node_modules/core-js/internals/create-property-descriptor.js')
    const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ '../node_modules/core-js/internals/to-indexed-object.js')
    const toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ '../node_modules/core-js/internals/to-property-key.js')
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')
    const IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ '../node_modules/core-js/internals/ie8-dom-define.js')

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor (O, P) {
      O = toIndexedObject(O)
      P = toPropertyKey(P)
      if (IE8_DOM_DEFINE) {
        try {
          return $getOwnPropertyDescriptor(O, P)
        } catch (error) { /* empty */ }
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P])
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-get-own-property-names.js':
  /*! **************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
  /***/ function (__unused_webpack_module, exports, __webpack_require__) {
    const internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ '../node_modules/core-js/internals/object-keys-internal.js')
    const enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ '../node_modules/core-js/internals/enum-bug-keys.js')

    const hiddenKeys = enumBugKeys.concat('length', 'prototype')

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
      return internalObjectKeys(O, hiddenKeys)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-get-own-property-symbols.js':
  /*! ****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
  /***/ function (__unused_webpack_module, exports) {
    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    exports.f = Object.getOwnPropertySymbols
    /***/ },

  /***/ '../node_modules/core-js/internals/object-is-prototype-of.js':
  /*! *******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-is-prototype-of.js ***!
  \*******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')

    module.exports = uncurryThis({}.isPrototypeOf)
    /***/ },

  /***/ '../node_modules/core-js/internals/object-keys-internal.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')
    const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ '../node_modules/core-js/internals/to-indexed-object.js')
    const indexOf = (__webpack_require__(/*! ../internals/array-includes */ '../node_modules/core-js/internals/array-includes.js').indexOf)
    const hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ '../node_modules/core-js/internals/hidden-keys.js')

    const push = uncurryThis([].push)

    module.exports = function (object, names) {
      const O = toIndexedObject(object)
      let i = 0
      const result = []
      let key
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key)
      // Don't enum bug & hidden keys
      while (names.length > i) {
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key)
        }
      }
      return result
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-keys.js':
  /*! ********************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys.js ***!
  \********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ '../node_modules/core-js/internals/object-keys-internal.js')
    const enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ '../node_modules/core-js/internals/enum-bug-keys.js')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/object-property-is-enumerable.js':
  /*! **************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
  /***/ function (__unused_webpack_module, exports) {
    'use strict'

    const $propertyIsEnumerable = {}.propertyIsEnumerable
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // Nashorn ~ JDK8 bug
    const NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1)

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    exports.f = NASHORN_BUG
      ? function propertyIsEnumerable (V) {
        const descriptor = getOwnPropertyDescriptor(this, V)
        return !!descriptor && descriptor.enumerable
      }
      : $propertyIsEnumerable
    /***/ },

  /***/ '../node_modules/core-js/internals/object-set-prototype-of.js':
  /*! ********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    /* eslint-disable no-proto -- safe */
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')
    const aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ '../node_modules/core-js/internals/a-possible-prototype.js')

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    // eslint-disable-next-line es/no-object-setprototypeof -- safe
    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
      let CORRECT_SETTER = false
      const test = {}
      let setter
      try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set)
        setter(test, [])
        CORRECT_SETTER = test instanceof Array
      } catch (error) { /* empty */ }
      return function setPrototypeOf (O, proto) {
        anObject(O)
        aPossiblePrototype(proto)
        if (CORRECT_SETTER) setter(O, proto)
        else O.__proto__ = proto
        return O
      }
    }()) : undefined)
    /***/ },

  /***/ '../node_modules/core-js/internals/object-to-string.js':
  /*! *************************************************************!*\
  !*** ../node_modules/core-js/internals/object-to-string.js ***!
  \*************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ '../node_modules/core-js/internals/to-string-tag-support.js')
    const classof = __webpack_require__(/*! ../internals/classof */ '../node_modules/core-js/internals/classof.js')

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    module.exports = TO_STRING_TAG_SUPPORT
      ? {}.toString
      : function toString () {
        return '[object ' + classof(this) + ']'
      }
    /***/ },

  /***/ '../node_modules/core-js/internals/ordinary-to-primitive.js':
  /*! ******************************************************************!*\
  !*** ../node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const call = __webpack_require__(/*! ../internals/function-call */ '../node_modules/core-js/internals/function-call.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')

    const $TypeError = TypeError

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    module.exports = function (input, pref) {
      let fn, val
      if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val
      if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      throw $TypeError("Can't convert object to primitive value")
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/own-keys.js':
  /*! *****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ '../node_modules/core-js/internals/get-built-in.js')
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ '../node_modules/core-js/internals/object-get-own-property-names.js')
    const getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ '../node_modules/core-js/internals/object-get-own-property-symbols.js')
    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')

    const concat = uncurryThis([].concat)

    // all object keys, includes non-enumerable and symbols
    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
      const keys = getOwnPropertyNamesModule.f(anObject(it))
      const getOwnPropertySymbols = getOwnPropertySymbolsModule.f
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/regexp-exec-abstract.js':
  /*! *****************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \*****************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const call = __webpack_require__(/*! ../internals/function-call */ '../node_modules/core-js/internals/function-call.js')
    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const classof = __webpack_require__(/*! ../internals/classof-raw */ '../node_modules/core-js/internals/classof-raw.js')
    const regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ '../node_modules/core-js/internals/regexp-exec.js')

    const $TypeError = TypeError

    // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec
    module.exports = function (R, S) {
      const exec = R.exec
      if (isCallable(exec)) {
        const result = call(exec, R, S)
        if (result !== null) anObject(result)
        return result
      }
      if (classof(R) === 'RegExp') return call(regexpExec, R, S)
      throw $TypeError('RegExp#exec called on incompatible receiver')
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/regexp-exec.js':
  /*! ********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec.js ***!
  \********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
    /* eslint-disable regexp/no-useless-quantifier -- testing */
    const call = __webpack_require__(/*! ../internals/function-call */ '../node_modules/core-js/internals/function-call.js')
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const toString = __webpack_require__(/*! ../internals/to-string */ '../node_modules/core-js/internals/to-string.js')
    const regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ '../node_modules/core-js/internals/regexp-flags.js')
    const stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ '../node_modules/core-js/internals/regexp-sticky-helpers.js')
    const shared = __webpack_require__(/*! ../internals/shared */ '../node_modules/core-js/internals/shared.js')
    const create = __webpack_require__(/*! ../internals/object-create */ '../node_modules/core-js/internals/object-create.js')
    const getInternalState = (__webpack_require__(/*! ../internals/internal-state */ '../node_modules/core-js/internals/internal-state.js').get)
    const UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ '../node_modules/core-js/internals/regexp-unsupported-dot-all.js')
    const UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ '../node_modules/core-js/internals/regexp-unsupported-ncg.js')

    const nativeReplace = shared('native-string-replace', String.prototype.replace)
    const nativeExec = RegExp.prototype.exec
    let patchedExec = nativeExec
    const charAt = uncurryThis(''.charAt)
    const indexOf = uncurryThis(''.indexOf)
    const replace = uncurryThis(''.replace)
    const stringSlice = uncurryThis(''.slice)

    const UPDATES_LAST_INDEX_WRONG = (function () {
      const re1 = /a/
      const re2 = /b*/g
      call(nativeExec, re1, 'a')
      call(nativeExec, re2, 'a')
      return re1.lastIndex !== 0 || re2.lastIndex !== 0
    })()

    const UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    const NPCG_INCLUDED = /()??/.exec('')[1] !== undefined

    const PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG

    if (PATCH) {
      patchedExec = function exec (string) {
        const re = this
        const state = getInternalState(re)
        const str = toString(string)
        const raw = state.raw
        let result, reCopy, lastIndex, match, i, object, group

        if (raw) {
          raw.lastIndex = re.lastIndex
          result = call(patchedExec, raw, str)
          re.lastIndex = raw.lastIndex
          return result
        }

        const groups = state.groups
        const sticky = UNSUPPORTED_Y && re.sticky
        let flags = call(regexpFlags, re)
        let source = re.source
        let charsAdded = 0
        let strCopy = str

        if (sticky) {
          flags = replace(flags, 'y', '')
          if (indexOf(flags, 'g') === -1) {
            flags += 'g'
          }

          strCopy = stringSlice(str, re.lastIndex)
          // Support anchored sticky behavior.
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
            source = '(?: ' + source + ')'
            strCopy = ' ' + strCopy
            charsAdded++
          }
          // ^(? + rx + ) is needed, in combination with some str slicing, to
          // simulate the 'y' flag.
          reCopy = new RegExp('^(?:' + source + ')', flags)
        }

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + source + '$(?!\\s)', flags)
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex

        match = call(nativeExec, sticky ? reCopy : re, strCopy)

        if (sticky) {
          if (match) {
            match.input = stringSlice(match.input, charsAdded)
            match[0] = stringSlice(match[0], charsAdded)
            match.index = re.lastIndex
            re.lastIndex += match[0].length
          } else re.lastIndex = 0
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
          call(nativeReplace, match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined
            }
          })
        }

        if (match && groups) {
          match.groups = object = create(null)
          for (i = 0; i < groups.length; i++) {
            group = groups[i]
            object[group[0]] = match[group[1]]
          }
        }

        return match
      }
    }

    module.exports = patchedExec
    /***/ },

  /***/ '../node_modules/core-js/internals/regexp-flags.js':
  /*! *********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-flags.js ***!
  \*********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')

    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    module.exports = function () {
      const that = anObject(this)
      let result = ''
      if (that.hasIndices) result += 'd'
      if (that.global) result += 'g'
      if (that.ignoreCase) result += 'i'
      if (that.multiline) result += 'm'
      if (that.dotAll) result += 's'
      if (that.unicode) result += 'u'
      if (that.unicodeSets) result += 'v'
      if (that.sticky) result += 'y'
      return result
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/regexp-sticky-helpers.js':
  /*! ******************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    const $RegExp = global.RegExp

    const UNSUPPORTED_Y = fails(function () {
      const re = $RegExp('a', 'y')
      re.lastIndex = 2
      return re.exec('abcd') != null
    })

    // UC Browser bug
    // https://github.com/zloirock/core-js/issues/1008
    const MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
      return !$RegExp('a', 'y').sticky
    })

    const BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
      const re = $RegExp('^r', 'gy')
      re.lastIndex = 2
      return re.exec('str') != null
    })

    module.exports = {
      BROKEN_CARET,
      MISSED_STICKY,
      UNSUPPORTED_Y
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/regexp-unsupported-dot-all.js':
  /*! ***********************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \***********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    const $RegExp = global.RegExp

    module.exports = fails(function () {
      const re = $RegExp('.', 's')
      return !(re.dotAll && re.exec('\n') && re.flags === 's')
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/regexp-unsupported-ncg.js':
  /*! *******************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \*******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
    const $RegExp = global.RegExp

    module.exports = fails(function () {
      const re = $RegExp('(?<a>b)', 'g')
      return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc'
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/require-object-coercible.js':
  /*! *********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ '../node_modules/core-js/internals/is-null-or-undefined.js')

    const $TypeError = TypeError

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it)
      return it
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/schedulers-fix.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/internals/schedulers-fix.js ***!
  \***********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const apply = __webpack_require__(/*! ../internals/function-apply */ '../node_modules/core-js/internals/function-apply.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')
    const userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ '../node_modules/core-js/internals/engine-user-agent.js')
    const arraySlice = __webpack_require__(/*! ../internals/array-slice */ '../node_modules/core-js/internals/array-slice.js')
    const validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ '../node_modules/core-js/internals/validate-arguments-length.js')

    const MSIE = /MSIE .\./.test(userAgent) // <- dirty ie9- check
    const Function = global.Function

    const wrap = function (scheduler) {
      return MSIE ? function (handler, timeout /* , ...arguments */) {
        const boundArgs = validateArgumentsLength(arguments.length, 1) > 2
        const fn = isCallable(handler) ? handler : Function(handler)
        const args = boundArgs ? arraySlice(arguments, 2) : undefined
        return scheduler(boundArgs
          ? function () {
            apply(fn, this, args)
          }
          : fn, timeout)
      } : scheduler
    }

    // ie9- setTimeout & setInterval additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
    module.exports = {
      // `setTimeout` method
      // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
      setTimeout: wrap(global.setTimeout),
      // `setInterval` method
      // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
      setInterval: wrap(global.setInterval)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/shared-key.js':
  /*! *******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const shared = __webpack_require__(/*! ../internals/shared */ '../node_modules/core-js/internals/shared.js')
    const uid = __webpack_require__(/*! ../internals/uid */ '../node_modules/core-js/internals/uid.js')

    const keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/shared-store.js':
  /*! *********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ '../node_modules/core-js/internals/define-global-property.js')

    const SHARED = '__core-js_shared__'
    const store = global[SHARED] || defineGlobalProperty(SHARED, {})

    module.exports = store
    /***/ },

  /***/ '../node_modules/core-js/internals/shared.js':
  /*! ***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const IS_PURE = __webpack_require__(/*! ../internals/is-pure */ '../node_modules/core-js/internals/is-pure.js')
    const store = __webpack_require__(/*! ../internals/shared-store */ '../node_modules/core-js/internals/shared-store.js');

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {})
    })('versions', []).push({
      version: '3.26.1',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
      source: 'https://github.com/zloirock/core-js'
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/string-multibyte.js':
  /*! *************************************************************!*\
  !*** ../node_modules/core-js/internals/string-multibyte.js ***!
  \*************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ '../node_modules/core-js/internals/to-integer-or-infinity.js')
    const toString = __webpack_require__(/*! ../internals/to-string */ '../node_modules/core-js/internals/to-string.js')
    const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ '../node_modules/core-js/internals/require-object-coercible.js')

    const charAt = uncurryThis(''.charAt)
    const charCodeAt = uncurryThis(''.charCodeAt)
    const stringSlice = uncurryThis(''.slice)

    const createMethod = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        const S = toString(requireObjectCoercible($this))
        const position = toIntegerOrInfinity(pos)
        const size = S.length
        let first, second
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined
        first = charCodeAt(S, position)
        return first < 0xD800 || first > 0xDBFF || position + 1 === size ||
      (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000
      }
    }

    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/symbol-constructor-detection.js':
  /*! *************************************************************************!*\
  !*** ../node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \*************************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    /* eslint-disable es/no-symbol -- required for testing */
    const V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ '../node_modules/core-js/internals/engine-v8-version.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      const symbol = Symbol()
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/to-absolute-index.js':
  /*! **************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ '../node_modules/core-js/internals/to-integer-or-infinity.js')

    const max = Math.max
    const min = Math.min

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    module.exports = function (index, length) {
      const integer = toIntegerOrInfinity(index)
      return integer < 0 ? max(integer + length, 0) : min(integer, length)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/to-indexed-object.js':
  /*! **************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    // toObject with fallback for non-array-like ES3 strings
    const IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ '../node_modules/core-js/internals/indexed-object.js')
    const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ '../node_modules/core-js/internals/require-object-coercible.js')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/to-integer-or-infinity.js':
  /*! *******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \*******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const trunc = __webpack_require__(/*! ../internals/math-trunc */ '../node_modules/core-js/internals/math-trunc.js')

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    module.exports = function (argument) {
      const number = +argument
      // eslint-disable-next-line no-self-compare -- NaN check
      return number !== number || number === 0 ? 0 : trunc(number)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/to-length.js':
  /*! ******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ '../node_modules/core-js/internals/to-integer-or-infinity.js')

    const min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/to-object.js':
  /*! ******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ '../node_modules/core-js/internals/require-object-coercible.js')

    const $Object = Object

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return $Object(requireObjectCoercible(argument))
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/to-primitive.js':
  /*! *********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const call = __webpack_require__(/*! ../internals/function-call */ '../node_modules/core-js/internals/function-call.js')
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')
    const isSymbol = __webpack_require__(/*! ../internals/is-symbol */ '../node_modules/core-js/internals/is-symbol.js')
    const getMethod = __webpack_require__(/*! ../internals/get-method */ '../node_modules/core-js/internals/get-method.js')
    const ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ '../node_modules/core-js/internals/ordinary-to-primitive.js')
    const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ '../node_modules/core-js/internals/well-known-symbol.js')

    const $TypeError = TypeError
    const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    module.exports = function (input, pref) {
      if (!isObject(input) || isSymbol(input)) return input
      const exoticToPrim = getMethod(input, TO_PRIMITIVE)
      let result
      if (exoticToPrim) {
        if (pref === undefined) pref = 'default'
        result = call(exoticToPrim, input, pref)
        if (!isObject(result) || isSymbol(result)) return result
        throw $TypeError("Can't convert object to primitive value")
      }
      if (pref === undefined) pref = 'number'
      return ordinaryToPrimitive(input, pref)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/to-property-key.js':
  /*! ************************************************************!*\
  !*** ../node_modules/core-js/internals/to-property-key.js ***!
  \************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ '../node_modules/core-js/internals/to-primitive.js')
    const isSymbol = __webpack_require__(/*! ../internals/is-symbol */ '../node_modules/core-js/internals/is-symbol.js')

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    module.exports = function (argument) {
      const key = toPrimitive(argument, 'string')
      return isSymbol(key) ? key : key + ''
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/to-string-tag-support.js':
  /*! ******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ '../node_modules/core-js/internals/well-known-symbol.js')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const test = {}

    test[TO_STRING_TAG] = 'z'

    module.exports = String(test) === '[object z]'
    /***/ },

  /***/ '../node_modules/core-js/internals/to-string.js':
  /*! ******************************************************!*\
  !*** ../node_modules/core-js/internals/to-string.js ***!
  \******************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const classof = __webpack_require__(/*! ../internals/classof */ '../node_modules/core-js/internals/classof.js')

    const $String = String

    module.exports = function (argument) {
      if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string')
      return $String(argument)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/try-to-string.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/internals/try-to-string.js ***!
  \**********************************************************/
  /***/ function (module) {
    const $String = String

    module.exports = function (argument) {
      try {
        return $String(argument)
      } catch (error) {
        return 'Object'
      }
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/uid.js':
  /*! ************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')

    let id = 0
    const postfix = Math.random()
    const toString = uncurryThis(1.0.toString)

    module.exports = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36)
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/use-symbol-as-uid.js':
  /*! **************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    /* eslint-disable es/no-symbol -- required for testing */
    const NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ '../node_modules/core-js/internals/symbol-constructor-detection.js')

    module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
    /***/ },

  /***/ '../node_modules/core-js/internals/v8-prototype-define-bug.js':
  /*! ********************************************************************!*\
  !*** ../node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    module.exports = DESCRIPTORS && fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(function () { /* empty */ }, 'prototype', {
        value: 42,
        writable: false
      }).prototype != 42
    })
    /***/ },

  /***/ '../node_modules/core-js/internals/validate-arguments-length.js':
  /*! **********************************************************************!*\
  !*** ../node_modules/core-js/internals/validate-arguments-length.js ***!
  \**********************************************************************/
  /***/ function (module) {
    const $TypeError = TypeError

    module.exports = function (passed, required) {
      if (passed < required) throw $TypeError('Not enough arguments')
      return passed
    }
    /***/ },

  /***/ '../node_modules/core-js/internals/weak-map-basic-detection.js':
  /*! *********************************************************************!*\
  !*** ../node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \*********************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const isCallable = __webpack_require__(/*! ../internals/is-callable */ '../node_modules/core-js/internals/is-callable.js')

    const WeakMap = global.WeakMap

    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap))
    /***/ },

  /***/ '../node_modules/core-js/internals/well-known-symbol.js':
  /*! **************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
  /***/ function (module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const shared = __webpack_require__(/*! ../internals/shared */ '../node_modules/core-js/internals/shared.js')
    const hasOwn = __webpack_require__(/*! ../internals/has-own-property */ '../node_modules/core-js/internals/has-own-property.js')
    const uid = __webpack_require__(/*! ../internals/uid */ '../node_modules/core-js/internals/uid.js')
    const NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ '../node_modules/core-js/internals/symbol-constructor-detection.js')
    const USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ '../node_modules/core-js/internals/use-symbol-as-uid.js')

    const WellKnownSymbolsStore = shared('wks')
    const Symbol = global.Symbol
    const symbolFor = Symbol && Symbol.for
    const createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid

    module.exports = function (name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] === 'string')) {
        const description = 'Symbol.' + name
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
          WellKnownSymbolsStore[name] = Symbol[name]
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description)
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description)
        }
      } return WellKnownSymbolsStore[name]
    }
    /***/ },

  /***/ '../node_modules/core-js/modules/es.array.concat.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.concat.js ***!
  \**********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')
    const isArray = __webpack_require__(/*! ../internals/is-array */ '../node_modules/core-js/internals/is-array.js')
    const isObject = __webpack_require__(/*! ../internals/is-object */ '../node_modules/core-js/internals/is-object.js')
    const toObject = __webpack_require__(/*! ../internals/to-object */ '../node_modules/core-js/internals/to-object.js')
    const lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ '../node_modules/core-js/internals/length-of-array-like.js')
    const doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ '../node_modules/core-js/internals/does-not-exceed-safe-integer.js')
    const createProperty = __webpack_require__(/*! ../internals/create-property */ '../node_modules/core-js/internals/create-property.js')
    const arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ '../node_modules/core-js/internals/array-species-create.js')
    const arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ '../node_modules/core-js/internals/array-method-has-species-support.js')
    const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ '../node_modules/core-js/internals/well-known-symbol.js')
    const V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ '../node_modules/core-js/internals/engine-v8-version.js')

    const IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable')

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    const IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
      const array = []
      array[IS_CONCAT_SPREADABLE] = false
      return array.concat()[0] !== array
    })

    const SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat')

    const isConcatSpreadable = function (O) {
      if (!isObject(O)) return false
      const spreadable = O[IS_CONCAT_SPREADABLE]
      return spreadable !== undefined ? !!spreadable : isArray(O)
    }

    const FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      concat: function concat (arg) {
        const O = toObject(this)
        const A = arraySpeciesCreate(O, 0)
        let n = 0
        let i, k, length, len, E
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i]
          if (isConcatSpreadable(E)) {
            len = lengthOfArrayLike(E)
            doesNotExceedSafeInteger(n + len)
            for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k])
          } else {
            doesNotExceedSafeInteger(n + 1)
            createProperty(A, n++, E)
          }
        }
        A.length = n
        return A
      }
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.array.filter.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.filter.js ***!
  \**********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const $filter = (__webpack_require__(/*! ../internals/array-iteration */ '../node_modules/core-js/internals/array-iteration.js').filter)
    const arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ '../node_modules/core-js/internals/array-method-has-species-support.js')

    const HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter')

    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      filter: function filter (callbackfn /* , thisArg */) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.array.for-each.js':
  /*! ************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.for-each.js ***!
  \************************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const forEach = __webpack_require__(/*! ../internals/array-for-each */ '../node_modules/core-js/internals/array-for-each.js')

    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    $({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
      forEach
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.array.index-of.js':
  /*! ************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.index-of.js ***!
  \************************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    /* eslint-disable es/no-array-prototype-indexof -- required for testing */
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ '../node_modules/core-js/internals/function-uncurry-this-clause.js')
    const $indexOf = (__webpack_require__(/*! ../internals/array-includes */ '../node_modules/core-js/internals/array-includes.js').indexOf)
    const arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ '../node_modules/core-js/internals/array-method-is-strict.js')

    const nativeIndexOf = uncurryThis([].indexOf)

    const NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0
    const STRICT_METHOD = arrayMethodIsStrict('indexOf')

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    $({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
      indexOf: function indexOf (searchElement /* , fromIndex = 0 */) {
        const fromIndex = arguments.length > 1 ? arguments[1] : undefined
        return NEGATIVE_ZERO
        // convert -0 to +0
          ? nativeIndexOf(this, searchElement, fromIndex) || 0
          : $indexOf(this, searchElement, fromIndex)
      }
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.array.is-array.js':
  /*! ************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.is-array.js ***!
  \************************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const isArray = __webpack_require__(/*! ../internals/is-array */ '../node_modules/core-js/internals/is-array.js')

    // `Array.isArray` method
    // https://tc39.es/ecma262/#sec-array.isarray
    $({ target: 'Array', stat: true }, {
      isArray
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.array.map.js':
  /*! *******************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.map.js ***!
  \*******************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const $map = (__webpack_require__(/*! ../internals/array-iteration */ '../node_modules/core-js/internals/array-iteration.js').map)
    const arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ '../node_modules/core-js/internals/array-method-has-species-support.js')

    const HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map')

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      map: function map (callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.function.bind.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.function.bind.js ***!
  \***********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    // TODO: Remove from `core-js@4`
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const bind = __webpack_require__(/*! ../internals/function-bind */ '../node_modules/core-js/internals/function-bind.js')

    // `Function.prototype.bind` method
    // https://tc39.es/ecma262/#sec-function.prototype.bind
    $({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
      bind
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.function.name.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.function.name.js ***!
  \***********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ '../node_modules/core-js/internals/function-name.js').EXISTS)
    const uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ '../node_modules/core-js/internals/function-uncurry-this.js')
    const defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ '../node_modules/core-js/internals/object-define-property.js').f)

    const FunctionPrototype = Function.prototype
    const functionToString = uncurryThis(FunctionPrototype.toString)
    const nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/
    const regExpExec = uncurryThis(nameRE.exec)
    const NAME = 'name'

    // Function instances `.name` property
    // https://tc39.es/ecma262/#sec-function-instances-name
    if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
      defineProperty(FunctionPrototype, NAME, {
        configurable: true,
        get: function () {
          try {
            return regExpExec(nameRE, functionToString(this))[1]
          } catch (error) {
            return ''
          }
        }
      })
    }
    /***/ },

  /***/ '../node_modules/core-js/modules/es.object.assign.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.assign.js ***!
  \***********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const assign = __webpack_require__(/*! ../internals/object-assign */ '../node_modules/core-js/internals/object-assign.js')

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    // eslint-disable-next-line es/no-object-assign -- required for testing
    $({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
      assign
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.object.create.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.create.js ***!
  \***********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    // TODO: Remove from `core-js@4`
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const create = __webpack_require__(/*! ../internals/object-create */ '../node_modules/core-js/internals/object-create.js')

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    $({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
      create
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.object.define-property.js':
  /*! ********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.define-property.js ***!
  \********************************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ '../node_modules/core-js/internals/descriptors.js')
    const defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ '../node_modules/core-js/internals/object-define-property.js').f)

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    $({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
      defineProperty
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.object.keys.js':
  /*! *********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.keys.js ***!
  \*********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const toObject = __webpack_require__(/*! ../internals/to-object */ '../node_modules/core-js/internals/to-object.js')
    const nativeKeys = __webpack_require__(/*! ../internals/object-keys */ '../node_modules/core-js/internals/object-keys.js')
    const fails = __webpack_require__(/*! ../internals/fails */ '../node_modules/core-js/internals/fails.js')

    const FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1) })

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
      keys: function keys (it) {
        return nativeKeys(toObject(it))
      }
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.object.set-prototype-of.js':
  /*! *********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \*********************************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ '../node_modules/core-js/internals/object-set-prototype-of.js')

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    $({ target: 'Object', stat: true }, {
      setPrototypeOf
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.object.to-string.js':
  /*! **************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.to-string.js ***!
  \**************************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ '../node_modules/core-js/internals/to-string-tag-support.js')
    const defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ '../node_modules/core-js/internals/define-built-in.js')
    const toString = __webpack_require__(/*! ../internals/object-to-string */ '../node_modules/core-js/internals/object-to-string.js')

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
      defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true })
    }
    /***/ },

  /***/ '../node_modules/core-js/modules/es.regexp.exec.js':
  /*! *********************************************************!*\
  !*** ../node_modules/core-js/modules/es.regexp.exec.js ***!
  \*********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const exec = __webpack_require__(/*! ../internals/regexp-exec */ '../node_modules/core-js/internals/regexp-exec.js')

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
      exec
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/es.string.match.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.match.js ***!
  \**********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    'use strict'

    const call = __webpack_require__(/*! ../internals/function-call */ '../node_modules/core-js/internals/function-call.js')
    const fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ '../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js')
    const anObject = __webpack_require__(/*! ../internals/an-object */ '../node_modules/core-js/internals/an-object.js')
    const isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ '../node_modules/core-js/internals/is-null-or-undefined.js')
    const toLength = __webpack_require__(/*! ../internals/to-length */ '../node_modules/core-js/internals/to-length.js')
    const toString = __webpack_require__(/*! ../internals/to-string */ '../node_modules/core-js/internals/to-string.js')
    const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ '../node_modules/core-js/internals/require-object-coercible.js')
    const getMethod = __webpack_require__(/*! ../internals/get-method */ '../node_modules/core-js/internals/get-method.js')
    const advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ '../node_modules/core-js/internals/advance-string-index.js')
    const regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ '../node_modules/core-js/internals/regexp-exec-abstract.js')

    // @@match logic
    fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
      return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match (regexp) {
          const O = requireObjectCoercible(this)
          const matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH)
          return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O))
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function (string) {
          const rx = anObject(this)
          const S = toString(string)
          const res = maybeCallNative(nativeMatch, rx, S)

          if (res.done) return res.value

          if (!rx.global) return regExpExec(rx, S)

          const fullUnicode = rx.unicode
          rx.lastIndex = 0
          const A = []
          let n = 0
          let result
          while ((result = regExpExec(rx, S)) !== null) {
            const matchStr = toString(result[0])
            A[n] = matchStr
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)
            n++
          }
          return n === 0 ? null : A
        }
      ]
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/web.dom-collections.for-each.js':
  /*! ***********************************************************************!*\
  !*** ../node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \***********************************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ '../node_modules/core-js/internals/dom-iterables.js')
    const DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ '../node_modules/core-js/internals/dom-token-list-prototype.js')
    const forEach = __webpack_require__(/*! ../internals/array-for-each */ '../node_modules/core-js/internals/array-for-each.js')
    const createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ '../node_modules/core-js/internals/create-non-enumerable-property.js')

    const handlePrototype = function (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
        try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach)
        } catch (error) {
          CollectionPrototype.forEach = forEach
        }
      }
    }

    for (const COLLECTION_NAME in DOMIterables) {
      if (DOMIterables[COLLECTION_NAME]) {
        handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype)
      }
    }

    handlePrototype(DOMTokenListPrototype)
    /***/ },

  /***/ '../node_modules/core-js/modules/web.set-interval.js':
  /*! ***********************************************************!*\
  !*** ../node_modules/core-js/modules/web.set-interval.js ***!
  \***********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const setInterval = (__webpack_require__(/*! ../internals/schedulers-fix */ '../node_modules/core-js/internals/schedulers-fix.js').setInterval)

    // ie9- setInterval additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    $({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
      setInterval
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/web.set-timeout.js':
  /*! **********************************************************!*\
  !*** ../node_modules/core-js/modules/web.set-timeout.js ***!
  \**********************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    const $ = __webpack_require__(/*! ../internals/export */ '../node_modules/core-js/internals/export.js')
    const global = __webpack_require__(/*! ../internals/global */ '../node_modules/core-js/internals/global.js')
    const setTimeout = (__webpack_require__(/*! ../internals/schedulers-fix */ '../node_modules/core-js/internals/schedulers-fix.js').setTimeout)

    // ie9- setTimeout additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    $({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
      setTimeout
    })
    /***/ },

  /***/ '../node_modules/core-js/modules/web.timers.js':
  /*! *****************************************************!*\
  !*** ../node_modules/core-js/modules/web.timers.js ***!
  \*****************************************************/
  /***/ function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
    // TODO: Remove this module from `core-js@4` since it's split to modules listed below
    __webpack_require__(/*! ../modules/web.set-interval */ '../node_modules/core-js/modules/web.set-interval.js')
    __webpack_require__(/*! ../modules/web.set-timeout */ '../node_modules/core-js/modules/web.set-timeout.js')
    /***/ },

  /***/ '../node_modules/preact/dist/preact.module.js':
  /*! ****************************************************!*\
  !*** ../node_modules/preact/dist/preact.module.js ***!
  \****************************************************/
  /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict'
    __webpack_require__.r(__webpack_exports__)
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Component: function () { return /* binding */ d },
      /* harmony export */ Fragment: function () { return /* binding */ p },
      /* harmony export */ cloneElement: function () { return /* binding */ q },
      /* harmony export */ createContext: function () { return /* binding */ B },
      /* harmony export */ createElement: function () { return /* binding */ h },
      /* harmony export */ createRef: function () { return /* binding */ y },
      /* harmony export */ h: function () { return /* binding */ h },
      /* harmony export */ hydrate: function () { return /* binding */ S },
      /* harmony export */ isValidElement: function () { return /* binding */ i },
      /* harmony export */ options: function () { return /* binding */ l },
      /* harmony export */ render: function () { return /* binding */ P },
      /* harmony export */ toChildArray: function () { return /* binding */ x }
      /* harmony export */ })
    let n; let l; let u; let i; let t; let o; let r; const f = {}; const e = []; const c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i; function s (n, l) { for (const u in l)n[u] = l[u]; return n } function a (n) { const l = n.parentNode; l && l.removeChild(n) } function h (l, u, i) { let t; let o; let r; const f = {}; for (r in u)r == 'key' ? t = u[r] : r == 'ref' ? o = u[r] : f[r] = u[r]; if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), typeof l === 'function' && l.defaultProps != null) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]); return v(l, f, t, o, null) } function v (n, i, t, o, r) { const f = { type: n, props: i, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++u : r }; return r == null && l.vnode != null && l.vnode(f), f } function y () { return { current: null } } function p (n) { return n.children } function d (n, l) { this.props = n, this.context = l } function _ (n, l) { if (l == null) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null; for (var u; l < n.__k.length; l++) if ((u = n.__k[l]) != null && u.__e != null) return u.__e; return typeof n.type === 'function' ? _(n) : null } function k (n) { let l, u; if ((n = n.__) != null && n.__c != null) { for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if ((u = n.__k[l]) != null && u.__e != null) { n.__e = n.__c.base = u.__e; break } return k(n) } } function b (n) { (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g) } function g () { for (var n; g.__r = t.length;)n = t.sort(function (n, l) { return n.__v.__b - l.__v.__b }), t = [], n.some(function (n) { let l, u, i, t, o, r; n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, t.__h != null ? [o] : null, u, o == null ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t))) }) } function w (n, l, u, i, t, o, r, c, s, a) { let h; let y; let d; let k; let b; let g; let w; const x = i && i.__k || e; const C = x.length; for (u.__k = [], h = 0; h < l.length; h++) if ((k = u.__k[h] = (k = l[h]) == null || typeof k === 'boolean' ? null : typeof k === 'string' || typeof k === 'number' || typeof k === 'bigint' ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, { children: k }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k) != null) { if (k.__ = u, k.__b = u.__b + 1, (d = x[h]) === null || d && k.key == d.key && k.type === d.type)x[h] = void 0; else for (y = 0; y < C; y++) { if ((d = x[y]) && k.key == d.key && k.type === d.type) { x[y] = void 0; break }d = null }j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), b != null ? (g == null && (g = b), typeof k.type === 'function' && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), typeof u.type === 'function' && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d)) } for (u.__e = g, h = C; h--;)x[h] != null && N(x[h], x[h]); if (w) for (h = 0; h < w.length; h++)M(w[h], w[++h], w[++h]) } function m (n, l, u) { for (var i, t = n.__k, o = 0; t && o < t.length; o++)(i = t[o]) && (i.__ = n, l = typeof i.type === 'function' ? m(i, l, u) : A(u, i, i, t, i.__e, l)); return l } function x (n, l) { return l = l || [], n == null || typeof n === 'boolean' || (Array.isArray(n) ? n.some(function (n) { x(n, l) }) : l.push(n)), l } function A (n, l, u, i, t, o) { let r, f, e; if (void 0 !== l.__d)r = l.__d, l.__d = void 0; else if (u == null || t != o || t.parentNode == null)n:if (o == null || o.parentNode !== n)n.appendChild(t), r = null; else { for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n; n.insertBefore(t, o), r = o } return void 0 !== r ? r : t.nextSibling } function C (n, l, u, i, t) { let o; for (o in u)o === 'children' || o === 'key' || o in l || H(n, o, null, u[o], i); for (o in l)t && typeof l[o] !== 'function' || o === 'children' || o === 'key' || o === 'value' || o === 'checked' || u[o] === l[o] || H(n, o, l[o], u[o], i) } function $ (n, l, u) { l[0] === '-' ? n.setProperty(l, u) : n[l] = u == null ? '' : typeof u !== 'number' || c.test(l) ? u : u + 'px' } function H (n, l, u, i, t) { let o; n:if (l === 'style') if (typeof u === 'string')n.style.cssText = u; else { if (typeof i === 'string' && (n.style.cssText = i = ''), i) for (l in i)u && l in u || $(n.style, l, ''); if (u) for (l in u)i && u[l] === i[l] || $(n.style, l, u[l]) } else if (l[0] === 'o' && l[1] === 'n')o = l !== (l = l.replace(/Capture$/, '')), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o); else if (l !== 'dangerouslySetInnerHTML') { if (t)l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's'); else if (l !== 'href' && l !== 'list' && l !== 'form' && l !== 'tabIndex' && l !== 'download' && l in n) try { n[l] = u == null ? '' : u; break n } catch (n) {} typeof u === 'function' || (u == null || !1 === u && l.indexOf('-') == -1 ? n.removeAttribute(l) : n.setAttribute(l, u)) } } function I (n) { this.l[n.type + !1](l.event ? l.event(n) : n) } function T (n) { this.l[n.type + !0](l.event ? l.event(n) : n) } function j (n, u, i, t, o, r, f, e, c) { let a; let h; let v; let y; let _; let k; let b; let g; let m; let x; let A; let C; let $; let H; let I; const T = u.type; if (void 0 !== u.constructor) return null; i.__h != null && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l.__b) && a(u); try { n:if (typeof T === 'function') { if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ('prototype' in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), T.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v)T.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount); else { if (T.getDerivedStateFromProps == null && g !== y && h.componentWillReceiveProps != null && h.componentWillReceiveProps(g, x), !h.__e && h.shouldComponentUpdate != null && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) { for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) { n && (n.__ = u) }), A = 0; A < h._sb.length; A++)h.__h.push(h._sb[A]); h._sb = [], h.__h.length && f.push(h); break n }h.componentWillUpdate != null && h.componentWillUpdate(g, h.__s, x), h.componentDidUpdate != null && h.__h.push(function () { h.componentDidUpdate(y, _, k) }) } if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, 'prototype' in T && T.prototype.render) { for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]); h._sb = [] } else do { h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s } while (h.__d && ++$ < 25); h.state = h.__s, h.getChildContext != null && (t = s(s({}, t), h.getChildContext())), v || h.getSnapshotBeforeUpdate == null || (k = h.getSnapshotBeforeUpdate(y, _)), I = a != null && a.type === p && a.key == null ? a.props.children : a, w(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1 } else r == null && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c); (a = l.diffed) && a(u) } catch (n) { u.__v = null, (c || r != null) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i) } } function z (n, u) { l.__c && l.__c(u, n), n.some(function (u) { try { n = u.__h, u.__h = [], n.some(function (n) { n.call(u) }) } catch (n) { l.__e(n, u.__v) } }) } function L (l, u, i, t, o, r, e, c) { let s; let h; let v; let y = i.props; const p = u.props; const d = u.type; let k = 0; if (d === 'svg' && (o = !0), r != null) for (;k < r.length; k++) if ((s = r[k]) && 'setAttribute' in s == !!d && (d ? s.localName === d : s.nodeType === 3)) { l = s, r[k] = null; break } if (l == null) { if (d === null) return document.createTextNode(p); l = o ? document.createElementNS('http://www.w3.org/2000/svg', d) : document.createElement(d, p.is && p), r = null, c = !1 } if (d === null)y === p || c && l.data === p || (l.data = p); else { if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) { if (r != null) for (y = {}, k = 0; k < l.attributes.length; k++)y[l.attributes[k].name] = l.attributes[k].value; (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || '')) } if (C(l, p, y, o, c), v)u.__k = []; else if (k = u.props.children, w(l, Array.isArray(k) ? k : [k], u, i, t, o && d !== 'foreignObject', r, e, r ? r[0] : i.__k && _(i, 0), c), r != null) for (k = r.length; k--;)r[k] != null && a(r[k]); c || ('value' in p && void 0 !== (k = p.value) && (k !== l.value || d === 'progress' && !k || d === 'option' && k !== y.value) && H(l, 'value', k, y.value, !1), 'checked' in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, 'checked', k, y.checked, !1)) } return l } function M (n, u, i) { try { typeof n === 'function' ? n(u) : n.current = u } catch (n) { l.__e(n, i) } } function N (n, u, i) { let t, o; if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), (t = n.__c) != null) { if (t.componentWillUnmount) try { t.componentWillUnmount() } catch (n) { l.__e(n, u) }t.base = t.__P = null, n.__c = void 0 } if (t = n.__k) for (o = 0; o < t.length; o++)t[o] && N(t[o], u, i || typeof n.type !== 'function'); i || n.__e == null || a(n.__e), n.__ = n.__e = n.__d = void 0 } function O (n, l, u) { return this.constructor(n, u) } function P (u, i, t) { let o, r, e; l.__ && l.__(u, i), r = (o = typeof t === 'function') ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [u]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u) } function S (n, l) { P(n, l, S) } function q (l, u, i) { let t; let o; let r; const f = s({}, l.props); for (r in u)r == 'key' ? t = u[r] : r == 'ref' ? o = u[r] : f[r] = u[r]; return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null) } function B (n, l) { const u = { __c: l = '__cC' + r++, __: n, Consumer: function (n, l) { return n.children(l) }, Provider: function (n) { let u, i; return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () { return i }, this.shouldComponentUpdate = function (n) { this.props.value !== n.value && u.some(b) }, this.sub = function (n) { u.push(n); const l = n.componentWillUnmount; n.componentWillUnmount = function () { u.splice(u.indexOf(n), 1), l && l.call(n) } }), n.children } }; return u.Provider.__ = u.Consumer.contextType = u }n = e.slice, l = { __e: function (n, l, u, i) { for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try { if ((o = t.constructor) && o.getDerivedStateFromError != null && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), t.componentDidCatch != null && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t } catch (l) { n = l } throw n } }, u = 0, i = function (n) { return n != null && void 0 === n.constructor }, d.prototype.setState = function (n, l) { let u; u = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), typeof n === 'function' && (n = n(s({}, u), this.props)), n && s(u, n), n != null && this.__v && (l && this._sb.push(l), b(this)) }, d.prototype.forceUpdate = function (n) { this.__v && (this.__e = !0, n && this.__h.push(n), b(this)) }, d.prototype.render = p, t = [], g.__r = 0, r = 0
    // # sourceMappingURL=preact.module.js.map
    /***/ }

}])
