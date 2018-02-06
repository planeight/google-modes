(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^class(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\<)/, /^(?:\:\:|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\:\:)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^sizeof(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 443]], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 11, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[7], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[50], -1,
   3, "keyword", e[35], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "type", e[34], -1,
   3, "type", e[36], -1,
   3, "keyword", e[33], -1,
   3, "atom", e[53], -1,
   1, 156, -1,
   3, "number", e[19], -1,
   2, 161, -1, {"name":"string","token":"string"},
   2, 166, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[44], -1,
   3, "operator", e[38], -1,
   2, 167, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[2], -1,
   3, "keyword", e[23], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[40], -1,
   3, "keyword", e[51], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[42], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[37], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[52], -1,
   3, "keyword", e[43], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 167, 9, {"name":"comment","token":"comment"},
   0, -1],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 12,
   3, "keyword", e[2], 32,
   3, "keyword", e[3], 40,
   3, "keyword", e[4], 44,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 65,
   2, 173, -1, {"name":"Template"},
   [7, "constructorAhead"], 77,
   0, 80,
   3, "keyword", e[7], 90,
   3, "keyword", e[8], 94,
   3, "keyword", e[9], 95,
   3, "keyword", e[10], 96,
   3, "keyword", e[11], 120,
   3, "keyword", e[12], 128,
   2, 182, -1, {"name":"Block"},
   3, "keyword", e[13], 132,
   3, "keyword", e[14], 134,
   3, "keyword", e[15], 138,
   3, "keyword", e[1], 142,
   3, "keyword", e[16], 148,
   3, "keyword", e[17], 149,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 186]], 148,
   2, 187, 152, {"name":"DeclType"},
   ";", -1,
   1, 197, 154],
  [1, 9, 13],
  [3, "keyword", e[18], 14,
   0, 15],
  [1, 9, 16],
  [1, 9, 17],
  ["(", 18],
  [3, "type def", e[24], 19],
  [1, 9, 20],
  [1, 9, 21],
  [3, "number", e[19], 22],
  [":", 23,
   0, 24],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [")", 15],
  [3, "keyword", e[20], 28,
   0, 28],
  [";", -1,
   2, 202, -1, {"name":"ClassBody"}],
  [1, 9, 29],
  [3, "keyword", e[21], 30,
   0, 30],
  [1, 9, 31],
  [1, 208, 24],
  [1, 9, 33],
  [1, 218, 34,
   0, 34],
  [1, 9, 35],
  [3, "operator", "=", 36,
   2, 227, -1, {"name":"NamespaceBlock"}],
  [1, 9, 37],
  [1, 156, 38],
  [1, 9, 39],
  [";", -1],
  [1, 9, 41],
  [1, 197, 42],
  [1, 9, 43],
  [";", -1],
  [1, 9, 45],
  [2, 182, 46, {"name":"Block"}],
  [1, 9, 47],
  [3, "keyword", e[22], 48,
   0, -1],
  [1, 9, 49],
  ["(", 50],
  [1, 9, 51],
  [1, 208, 52],
  [1, 9, 53],
  [1, 231, 54,
   0, 54],
  [1, 9, 55],
  [")", 56],
  [1, 9, 57],
  [2, 182, 58, {"name":"Block"}],
  [1, 9, 47],
  [1, 9, 60],
  ["{", 61],
  [1, 9, 62],
  [2, 161, 63, {"name":"string","token":"string"}],
  [1, 9, 64],
  ["}", -1],
  [1, 9, 66],
  [3, "keyword", e[23], 67,
   3, "keyword", e[2], 68,
   0, 68],
  [1, 9, 69],
  [1, 9, 70],
  [1, 208, 71],
  [1, 156, 71],
  [1, 9, 72],
  [3, "operator", "=", 73,
   0, 74],
  [1, 9, 75],
  [1, 9, 76],
  [1, 208, 74],
  [";", -1],
  [1, 218, 78],
  [1, 9, 79],
  [2, 243, -1, {"name":"FunctionDef"}],
  [3, "meta", e[27], 81],
  [1, 9, 82],
  [0, 80,
   1, 270, 83,
   3, "variable qualified", e[26], 84,
   2, 277, 85, {"name":"qualifiedVariableName","token":"qualified"}],
  [1, 9, 86],
  [1, 9, 87],
  [1, 9, 88],
  [1, 278, -1],
  [2, 289, 85, {"name":"TemplateArgs"}],
  [1, 294, 89,
   ";", -1],
  [1, 9, 88],
  [1, 9, 91],
  [3, "type def", e[24], 92,
   0, 92],
  [1, 9, 93],
  [2, 311, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 97],
  [1, 9, 98],
  [1, 9, 99],
  ["(", 100],
  [2, 329, 101, {"name":"CondExpr"}],
  [2, 11, 102, {"name":"Statement"}],
  [1, 9, 103],
  [1, 9, 104],
  [1, 9, 105],
  [2, 11, 106, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[9], 107],
  [1, 9, 108],
  [1, 9, 109],
  [1, 197, 110,
   0, 110],
  [2, 329, 111, {"name":"CondExpr"}],
  [1, 9, 112],
  [1, 9, 113],
  [";", 114],
  [";", -1],
  [1, 9, 115],
  [1, 197, 116,
   0, 116],
  [1, 9, 117],
  [")", 118],
  [1, 9, 119],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 121],
  [2, 329, 122, {"name":"CondExpr"}],
  [1, 9, 123],
  [2, 11, 124, {"name":"Statement"}],
  [1, 9, 125],
  [3, "keyword", e[25], 126,
   0, -1],
  [1, 9, 127],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 129],
  [2, 329, 130, {"name":"CondExpr"}],
  [1, 9, 131],
  [2, 182, -1, {"name":"Block"}],
  [1, 9, 133],
  [";", -1],
  [1, 9, 135],
  [e[24], 136],
  [1, 9, 137],
  [";", -1],
  [1, 9, 139],
  [1, 197, 140,
   0, 140],
  [1, 9, 141],
  [";", -1],
  [1, 9, 143],
  [1, 218, 144,
   0, 144],
  [1, 9, 145],
  [2, 334, 146, {"name":"BlockOf"},
   0, 146],
  [1, 9, 147],
  [";", -1],
  [1, 9, 150],
  [1, 9, 151],
  [":", -1],
  [1, 197, 148],
  [1, 9, 153],
  [1, 278, -1],
  [1, 9, 155],
  [";", -1],
  [0, 157,
   3, "type", e[28], -1,
   3, "variable", e[26], 160,
   2, 344, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [3, "meta", e[27], 158],
  [0, 157,
   3, "variable qualified", e[26], 159,
   3, "type", e[28], -1,
   2, 277, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 289, -1, {"name":"TemplateArgs"}],
  [2, 289, -1, {"name":"TemplateArgs"}],
  [/^R\"(?:(?!\().)*\(/, 162,
   /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 163],
  [[0, [7, "rawStringContinues"], /^[^]/], 162,
   "\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 164],
  ["\\", 165,
   [0, /^(?!\")/, /^[^]/], 164,
   "\"", -1],
  [/^[^]/, 164],
  [3, "keyword", e[23], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 168,
   "/*", 172,
   /^\/\/.*/, -1],
  [0, 169,
   2, 345, 168, {"name":"doccomment.braced"},
   0, 170],
  [e[49], 171],
  [2, 353, 170, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 169,
   0, 168],
  [[0, /^(?!\*\/)/, /^[^]/], 172,
   "*/", -1],
  [3, "keyword", e[29], 174,
   0, 174],
  [1, 9, 175],
  [3, "keyword", e[30], 176],
  [1, 9, 177],
  [2, 361, 178, {"name":"TemplateParams"}],
  [1, 9, 179],
  [1, 9, 180],
  [1, 9, 181],
  [2, 11, -1, {"name":"Statement"}],
  ["{", 183],
  [1, 9, 184],
  [2, 11, 185, {"name":"Statement"},
   "}", -1],
  [1, 9, 184],
  [e[45], 186,
   /^\:(?!\:)/, -1],
  [0, 188,
   0, 189,
   1, 270, -1],
  [3, "keyword", e[31], 190,
   3, "keyword", e[32], 190,
   3, "keyword", e[33], 190],
  [3, "type", e[34], 191],
  [1, 9, 192],
  [1, 9, 193],
  [0, 188,
   3, "keyword", e[35], 194,
   1, 366, 194],
  [0, 189,
   3, "type", e[36], 194,
   0, 194],
  [1, 9, 195],
  [1, 372, 196,
   0, -1],
  [1, 9, 195],
  [1, 379, 198,
   1, 394, 199],
  [1, 9, 197],
  [1, 9, 200],
  [1, 294, 201,
   0, -1],
  [1, 9, 200],
  ["{", 203],
  [1, 9, 204],
  [3, "keyword", e[21], 205,
   2, 173, 206, {"name":"Template"},
   2, 415, 206, {"name":"ObjectMember"},
   "}", -1],
  [1, 9, 207],
  [1, 9, 204],
  [":", 206],
  [3, "keyword", e[23], 209,
   0, 211],
  [1, 9, 210],
  [1, 208, -1],
  [3, "keyword", e[31], 212,
   3, "keyword", e[32], 212,
   3, "keyword", e[33], 212,
   3, "keyword", e[1], 213,
   0, 213],
  [1, 9, 211],
  [1, 9, 214],
  [3, "keyword", e[35], 215,
   1, 366, 215],
  [1, 9, 216],
  [1, 372, 217,
   0, -1],
  [1, 9, 216],
  [3, "keyword", e[37], 219,
   0, 221,
   3, "def", e[41], -1],
  [3, "operator", "->*", -1,
   ",", -1,
   3, "operator", e[38], -1,
   2, 166, -1, {"name":"prefixOp","token":"operator"},
   /^(?:\(\)|\[\])/, -1,
   3, "keyword", e[39], 220,
   3, "keyword", e[40], 220],
  [/^(?:\[\])?/, -1],
  [3, "meta", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\<)/, 222,
   3, "meta", e[27], 223],
  [1, 9, 224],
  [0, 221,
   3, "qualified def", e[41], -1],
  [2, 289, 225, {"name":"TemplateArgs"}],
  [3, "meta", "::", 226],
  [3, "qualified def", e[41], 223],
  ["{", 228],
  [1, 9, 229],
  [2, 11, 230, {"name":"Statement"},
   "}", -1],
  [1, 9, 229],
  [0, 232,
   "(", 239],
  [/^(?:\*|\&\&|\&)/, 233,
   1, 218, 234],
  [1, 9, 232],
  [1, 9, 235],
  ["[", 236,
   0, -1],
  [1, 9, 237],
  ["]", 238],
  [1, 9, 235],
  [1, 9, 240],
  [1, 231, 241],
  [1, 9, 242],
  [")", -1],
  [2, 429, 244, {"name":"ParamList"}],
  [1, 9, 245],
  [3, "keyword", e[33], 246,
   /^(?:\&|\&\&)?/, 247],
  [1, 9, 245],
  [1, 9, 248],
  [3, "keyword", e[42], 249,
   3, "keyword", e[3], 250,
   0, 261],
  [1, 9, 251],
  [1, 9, 252],
  ["(", 253,
   0, 261],
  ["(", 254],
  [1, 9, 255],
  [1, 9, 256],
  [1, 197, 257],
  [1, 434, 258],
  [1, 9, 259],
  [1, 9, 260],
  [")", 261],
  [")", 261],
  [1, 9, 262],
  ["->", 263,
   0, 265],
  [1, 9, 264],
  [1, 208, 265],
  [1, 9, 266],
  [3, "keyword", e[43], 267,
   2, 440, 268, {"name":"InitializerList"},
   0, 268],
  [1, 9, 266],
  [1, 9, 269],
  [";", -1,
   2, 182, -1, {"name":"Block"}],
  [3, "keyword", e[35], 274,
   3, "keyword", e[23], 271,
   e[54], 272],
  [1, 9, 273],
  [3, "meta", e[27], 272,
   3, "type", e[55], 274],
  [3, "meta", e[27], 273,
   3, "type", e[24], 274],
  [1, 9, 275],
  [1, 372, 276,
   0, -1],
  [1, 9, 275],
  [2, 344, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 231, 279],
  [1, 9, 280],
  [[5, 446], 281,
   1, 452, 282,
   0, 282],
  [2, 243, -1, {"name":"FunctionDef"}],
  [1, 9, 283],
  [",", 284,
   ";", -1],
  [1, 9, 285],
  [1, 218, 286],
  [1, 9, 287],
  [1, 452, 288,
   0, 288],
  [1, 9, 283],
  ["<", 290],
  [1, 9, 291],
  [1, 455, 292],
  [1, 9, 293],
  [">", -1],
  [2, 481, -1, {"name":"BlockOf"},
   2, 491, 295, {"name":"ArgList"},
   2, 491, -1, {"name":"ArgList"},
   "[", 297,
   3, "operator", e[44], -1,
   /^(?:\-\>|\.)/, 301,
   3, "operator", e[38], 303,
   "?", 305],
  [1, 9, 296],
  [2, 182, -1, {"name":"Block"},
   0, -1],
  [1, 9, 298],
  [1, 197, 299],
  [1, 9, 300],
  ["]", -1],
  [1, 9, 302],
  [2, 496, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 304],
  [1, 197, -1],
  [1, 9, 306],
  [1, 197, 307],
  [1, 9, 308],
  [":", 309],
  [1, 9, 310],
  [1, 197, -1],
  ["{", 312],
  [1, 9, 313],
  [1, 218, 314,
   0, 327],
  [1, 9, 315],
  [3, "operator", "=", 316,
   0, 317],
  [1, 9, 318],
  [1, 9, 319],
  [1, 197, 317],
  [",", 320,
   0, 327],
  [1, 9, 321],
  [1, 218, 322,
   0, 323],
  [1, 9, 324],
  [1, 9, 319],
  [3, "operator", "=", 325,
   0, 323],
  [1, 9, 326],
  [1, 197, 323],
  [1, 9, 328],
  ["}", -1],
  ["(", 330],
  [1, 9, 331],
  [1, 197, 332,
   0, 332],
  [1, 9, 333],
  [")", -1],
  ["{", 335],
  [1, 9, 336],
  [1, 497, 337,
   0, 342],
  [1, 9, 338],
  [";", 339,
   0, 342],
  [1, 9, 340],
  [1, 497, 341,
   0, 341],
  [1, 9, 338],
  [1, 9, 343],
  ["}", -1],
  [3, "callee", e[56], -1,
   e[24], -1],
  ["{", 346],
  [3, "tag", e[46], 347,
   3, "tag", e[47], 348,
   2, 508, 352, {"name":"doccomment.type","token":"type"}],
  [e[45], 347,
   "{", 349,
   0, 348],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 348,
   0, 352],
  [2, 508, 350, {"name":"doccomment.type","token":"type"}],
  ["}", 351],
  [e[45], 351,
   3, "def", e[48], 348,
   0, 348],
  ["}", -1],
  [3, "tag", e[46], 354,
   3, "tag", e[47], 358],
  [e[45], 354,
   "{", 355,
   0, 358],
  [2, 508, 356, {"name":"doccomment.type","token":"type"}],
  ["}", 357],
  [e[45], 357,
   3, "def", e[48], 358,
   0, 358],
  [0, 359,
   2, 345, 358, {"name":"doccomment.braced"},
   0, -1],
  [e[49], 360],
  [0, 359,
   0, 358],
  ["<", 362],
  [1, 9, 363],
  [1, 509, 364],
  [1, 9, 365],
  [">", -1],
  [0, 367,
   3, "keyword", e[23], 370,
   0, 371],
  [3, "type", e[34], 368],
  [0, 367,
   1, 9, 369,
   0, -1],
  [3, "type", e[36], -1],
  [1, 9, 371],
  [3, "meta", e[27], 371,
   3, "type", e[24], -1],
  [2, 289, -1, {"name":"TemplateArgs"},
   "::", 373,
   "[", 375,
   /^[\*\&]/, -1,
   3, "keyword", e[33], -1],
  [1, 9, 374],
  [1, 208, -1],
  [1, 9, 376],
  [3, "number", e[19], 377,
   0, 377],
  [1, 9, 378],
  ["]", -1],
  [3, "keyword", e[40], 380,
   3, "keyword", e[39], 384,
   2, 166, -1, {"name":"prefixOp","token":"operator"},
   3, "keyword", e[50], -1],
  [1, 9, 381],
  ["[", 382,
   0, -1],
  [1, 9, 383],
  ["]", -1],
  [1, 9, 385],
  ["[", 386,
   0, 387],
  [1, 9, 388],
  [1, 9, 389],
  ["]", 387],
  ["(", 390,
   0, -1],
  [1, 9, 391],
  [1, 197, 392],
  [1, 9, 393],
  [")", -1],
  [3, "keyword", e[51], -1,
   "[", 395,
   3, "keyword", e[52], 401,
   2, 541, 413, {"name":"ParenExpr"},
   3, "atom", e[53], -1,
   3, "number", e[19], -1,
   2, 161, -1, {"name":"string","token":"string"},
   2, 481, -1, {"name":"BlockOf"},
   1, 156, -1],
  [1, 9, 396],
  [1, 546, 397],
  [1, 9, 398],
  ["]", 399],
  [1, 9, 400],
  [2, 243, -1, {"name":"FunctionDef"}],
  [1, 9, 402],
  ["<", 403],
  [1, 9, 404],
  [1, 208, 405],
  [1, 9, 406],
  [">", 407],
  [1, 9, 408],
  ["(", 409],
  [1, 9, 410],
  [1, 197, 411],
  [1, 9, 412],
  [")", -1],
  [1, 9, 414],
  [1, 197, -1,
   0, -1],
  [3, "keyword", e[31], 416,
   3, "keyword", e[32], 416,
   3, "keyword", e[33], 416,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 419,
   1, 208, 417],
  [1, 9, 415],
  [1, 9, 418],
  [1, 231, 419],
  [1, 9, 420],
  [2, 243, -1, {"name":"FunctionDef"},
   1, 452, 421,
   ":", 422,
   "[", 423,
   0, 421],
  [1, 9, 424],
  [1, 9, 425],
  [1, 9, 426],
  [";", -1],
  [3, "number", e[19], 421],
  [3, "number", e[19], 427,
   0, 427],
  [1, 9, 428],
  ["]", 421],
  ["(", 430],
  [1, 9, 431],
  [1, 556, 432],
  [1, 9, 433],
  [")", -1],
  [1, 208, 435,
   0, -1],
  [1, 9, 436],
  [",", 437,
   0, -1],
  [1, 9, 438],
  [1, 208, 439],
  [1, 9, 436],
  [":", 441],
  [1, 9, 442],
  [1, 570, -1],
  [1, 9, 444],
  [1, 372, 444,
   1, 9, 445],
  [/^[a-zA-Z¡-￿_]/, -1],
  ["(", 447],
  [1, 9, 448],
  [")", -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[33], -1,
   3, "type", e[34], -1,
   3, "keyword", e[35], -1,
   3, "keyword", e[23], 449,
   e[54], 450],
  [1, 9, 451],
  [3, "meta", e[27], 450,
   3, "type", e[55], -1],
  [3, "meta", e[27], 451,
   3, "type", e[24], -1],
  [3, "operator", "=", 453,
   2, 481, -1, {"name":"BlockOf"},
   2, 491, -1, {"name":"ArgList"}],
  [1, 9, 454],
  [1, 197, -1],
  [3, "keyword", e[30], 456,
   0, 457,
   0, 458,
   3, "number", e[19], 459,
   0, -1],
  [1, 9, 460],
  [1, 9, 461],
  [3, "keyword", e[31], 462,
   3, "keyword", e[32], 462,
   1, 208, 463],
  [1, 9, 464],
  [2, 289, 457, {"name":"TemplateArgs"}],
  [3, "keyword", e[0], 465,
   3, "keyword", e[23], 465],
  [1, 9, 458],
  [1, 9, 466],
  [",", 467,
   0, -1],
  [1, 9, 468],
  [2, 429, 459, {"name":"ParamList"},
   1, 452, 459,
   0, 459],
  [1, 9, 469],
  [1, 208, 459],
  [3, "keyword", e[30], 470,
   0, 471,
   0, 472,
   3, "number", e[19], 473],
  [1, 9, 474],
  [1, 9, 475],
  [3, "keyword", e[31], 476,
   3, "keyword", e[32], 476,
   1, 208, 477],
  [1, 9, 464],
  [2, 289, 471, {"name":"TemplateArgs"}],
  [3, "keyword", e[0], 478,
   3, "keyword", e[23], 478],
  [1, 9, 472],
  [1, 9, 479],
  [1, 9, 480],
  [2, 429, 473, {"name":"ParamList"},
   1, 452, 473,
   0, 473],
  [1, 208, 473],
  ["{", 482],
  [1, 9, 483],
  [1, 197, 484,
   0, 489],
  [1, 9, 485],
  [",", 486,
   0, 489],
  [1, 9, 487],
  [1, 197, 488,
   0, 488],
  [1, 9, 485],
  [1, 9, 490],
  ["}", -1],
  ["(", 492],
  [1, 9, 493],
  [1, 576, 494],
  [1, 9, 495],
  [")", -1],
  [3, "callee", e[56], -1,
   e[24], -1],
  [1, 208, 498],
  [1, 9, 499],
  [2, 496, 500, {"name":"fieldName","token":"property"},
   0, 500],
  [1, 9, 501],
  [":", 502,
   "[", 503,
   0, -1],
  [1, 9, 504],
  [1, 9, 505],
  [3, "number", e[19], -1],
  [3, "number", e[19], 506,
   0, 506],
  [1, 9, 507],
  ["]", -1],
  [1, 582, -1],
  [1, 586, 510,
   0, 511,
   0, -1],
  [1, 9, 512],
  [3, "keyword", e[31], 513,
   3, "keyword", e[32], 513,
   1, 208, 514],
  [",", 515,
   0, -1],
  [1, 9, 511],
  [1, 9, 516],
  [1, 9, 517],
  [1, 218, 518],
  [1, 586, 519,
   0, 520],
  [1, 9, 521],
  [1, 9, 512],
  [3, "keyword", e[31], 522,
   3, "keyword", e[32], 522,
   1, 208, 523],
  [3, "operator", "=", 524,
   0, 510],
  [1, 9, 520],
  [1, 9, 525],
  [1, 9, 526],
  [1, 218, 527],
  [1, 379, 528,
   1, 394, 529],
  [1, 9, 530],
  [1, 9, 526],
  [1, 9, 531],
  [3, "operator", "=", 532,
   0, 519],
  [e[57], 533,
   0, 510],
  [1, 9, 534],
  [1, 294, 535],
  [1, 379, 536,
   1, 394, 537],
  [1, 9, 531],
  [1, 9, 534],
  [1, 9, 538],
  [e[57], 539,
   0, 519],
  [1, 294, 540],
  [1, 9, 538],
  ["(", 542],
  [1, 9, 543],
  [1, 197, 544,
   0, 544],
  [1, 9, 545],
  [")", -1],
  ["&", 547,
   "=", 548,
   3, "keyword", e[51], 548,
   0, -1],
  [1, 9, 549],
  [1, 9, 550],
  [1, 156, 548,
   0, 548],
  [",", 551,
   0, -1],
  [1, 9, 552],
  ["&", 553,
   "=", 554,
   3, "keyword", e[51], 554],
  [1, 9, 555],
  [1, 9, 550],
  [1, 156, 554,
   0, 554],
  [1, 208, 557,
   0, -1],
  [1, 9, 558],
  [1, 231, 559,
   0, 560],
  [1, 9, 561],
  [1, 9, 562],
  [2, 429, 560, {"name":"ParamList"},
   0, 560],
  [",", 563,
   0, -1],
  [1, 9, 564],
  [1, 208, 565],
  [1, 9, 566],
  [1, 231, 567,
   0, 568],
  [1, 9, 569],
  [1, 9, 562],
  [2, 429, 568, {"name":"ParamList"},
   0, 568],
  [1, 597, 571,
   0, -1],
  [1, 9, 572],
  [",", 573,
   0, -1],
  [1, 9, 574],
  [1, 597, 575],
  [1, 9, 572],
  [1, 197, 577,
   0, -1],
  [1, 9, 578],
  [",", 579,
   0, -1],
  [1, 9, 580],
  [1, 197, 581],
  [1, 9, 578],
  [/^(?!\}|\*\/)/, 583,
   0, -1],
  ["{", 584,
   /^[^]/, 582],
  [1, 582, 585],
  [/^\}?/, 582],
  [3, "keyword", e[30], 587,
   0, 589],
  [1, 9, 588],
  [2, 289, 589, {"name":"TemplateArgs"}],
  [1, 9, 590],
  [3, "keyword", e[0], 591,
   3, "keyword", e[23], 591],
  [1, 9, 592],
  [3, "type def", e[24], 593],
  [1, 9, 594],
  [3, "operator", "=", 595,
   0, -1],
  [1, 9, 596],
  [1, 156, -1,
   3, "number", e[19], -1],
  [2, 496, 598, {"name":"fieldName","token":"property"}],
  [1, 9, 599],
  ["(", 600,
   "{", 601],
  [1, 9, 602],
  [1, 9, 603],
  [1, 576, 604],
  [1, 576, 605],
  [1, 9, 606],
  [1, 9, 607],
  [")", -1],
  ["}", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function getScope(context, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1) { return cx } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}
function isLocalType(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
    }
  } else if (varRE.test(type) && !/qualified/.test(type) &&
             isLocal(state.context, stream.current())) {
    type = type.replace(varRE, "$1variable-2$2");
  }
  return type
}

var typeRE = /(^|\s)type($|\s)/;

function markTypeLocals(type, scopes, stream, state) {
  if (type == "type def") {
    var scope = getScope(state.context, scopes);
    if (scope) {
      if (!scope.localTypes) { scope.localTypes = []; }
      scope.localTypes.push(stream.current());
    }
  } else if (typeRE.test(type) && !/qualified/.test(type) &&
             isLocalType(state.context, stream.current())) {
    type += " local";
  }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}",
  ArrayInitializer: "}", NamespaceBlock: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" || cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || cx.name == "NamespaceBlock" ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    var base = statementIndent(cx, config), sub;
    if (!curLine && (sub = hasSubStatement(cx)))
      { return base + (sub == "if" && (/[{;]\s*(\/\/.*)?$/.test(cx.startLine) || /^else\b/.test(textAfter)) ? 0 : config.indentUnit); }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 :
                cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos)) ? 2 * config.indentUnit :
                0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
  if (!ahead) { return false }
  while (cx.name != "Statement") { cx = cx.parent; }
  var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
  return className ? className[1] == ahead[1] : false
}

var rawStringOpen = /R"(.*?)\(/g;

function rawStringContinues(line, pos, cx) {
  rawStringOpen.lastIndex = cx.startPos;
  var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
  return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
}

var scopes = ["Block", "FunctionDef"];
var typeScopes = ["Template"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
