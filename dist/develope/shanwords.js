/*
Author - Ronald (saisenfa@gmail.com)
License - MIT
Date - 12/May/2018
version - 1.0
The purpose of building Shanwords.js is to use in Shan TTS project.
*/

/* graphemes */

var c = ["ၵ", "ၶ", "င", "ၸ", "သ", "ၺ", "တ", "ထ", "ၼ", "ပ", "ၽ", "ၾ", "မ", "ယ", "ရ", "လ", "ဝ", "ႁ", "ဢ"]; // 19 consonants

var v = ["ႃ", "ီ", "ူ", "ႂ်", "ျႃ", "ႆ", "ႆၢ", "ႂၢႆ", "ြႃ", "ဝ်", "ၢဝ်", "ိဝ်", "ဵဝ်", "ႅဝ်", "ူဝ်", "ိုဝ်", "ိူဝ်", "ုၺ်", "ူၺ်", "ွၺ်", "ုိၺ်", "ိူၺ်", "င်", "ၢင်", "ိင်", "ဵင်", "ႅင်", "ုင်", "ူင်", "ွင်", "ိုင်", "ိူင်", "ႂၢင်", "ၼ်", "ၢၼ်", "ိၼ်", "ဵၼ်", "ႅၼ်", "ုၼ်", "ူၼ်", "ွၼ်", "ိုၼ်", "ိူၼ်", "ႂၢၼ်", "မ်", "ၢမ်", "ိမ်", "ဵမ်", "ႅမ်", "ုမ်", "ူမ်", "ွမ်", "ိုမ်", "ိူမ်", "ႂၢမ်", "ၵ်", "ၢၵ်", "ိၵ်", "ဵၵ်", "ႅၵ်", "ုၵ်", "ူၵ်", "ွၵ်", "ိုၵ်", "ိူၵ်", "ႂၢၵ်", "တ်", "ၢတ်", "ိတ်", "ဵတ်", "ႅတ်", "ုတ်", "ူတ်", "ွတ်", "ိုတ်", "ိူတ်", "ႂၢတ်", "ပ်", "ၢပ်", "ိပ်", "ဵပ်", "ႅပ်", "ုပ်", "ူပ်", "ွပ်", "ိုပ်", "ိူပ်", "ႂၢပ်","ွျင်", "ၢႆ", "်ႂ","ႂႃ","ေျႃ","ေႃ","ေ","ႄ","ွႆ"] // 89 vowels 

var t = ["", "ႇ", "ႈ", "း", "ႉ", "ႊ"]; //  6 tones
var vn = ["ု", "ိ", "ျ", "ွ", "ြ"]  // vowel that doesn't need tones;


/* IPA */
var ipac = ["k", "kʰ", "ŋ", "ts", "sʰ", "ɲ", "t", "tʰ", "n", "p", "pʰ", "f", "m", "j", "r", "l", "w", "h", "ʔa"]; // consonants

var ipav = 
["a", "i", "u", "ɘi", "jaa", "aj", "aaj", "waaj", "raa", "aw", "aaw", "iw", "ew", "ɛw", "o", "ʉ", "ɯ", "uj", "oj", "ɔj", "ʉi", "ɯi", "aɳ", "aaɳ", "iɳ", "eɳ", "ɛɳ", "uɳ", "oɳ", "ɔɳ", "ʉŋ", "ɯŋ", "waaŋ", "an", "aan", "in", "en", "ɛn", "un", "on", "ɔn", "ʉn", "ɯn", "waan", "am", "aam", "im", "em", "ɛm", "um", "om", "ɔm", "ʉm", "ɯm", "waam", "ak", "aak", "ik", "ek", "ɛk", "uk", "ok", "ɔk", "ʉk", "ɯk", "waak", "at", "aat", "it", "et", "ɛt", "ut", "ot", "ɔt", "ʉt", "ɯt", "waat", "ap", "aap", "ip", "ep", "ɛp", "up", "op", "ɔp", "ʉp", "ɯp", "waap","jaɔɳ","aaj","ɘi","waa", "jaw","aw","eɪ", "ɛ","ɔj"] // 89 vowels 


var ipat = ["1", "2", "3", "4", "5", "6"]; // tones
var ipavn = ["u5", "i5", "ja5", "wa5", "ra5", ] // vowel that doesn't need tones;

var generator = {
    common: function (c, v, t) {
        var gen = [];
        for (i = 0; i < c.length; i++) {
            for (j = 0; j < v.length; j++) {
                gen.push(c[i] + v[j]);
            }
        }

        var res = [];
        for (k = 0; k < gen.length; k++) {
            for (l = 0; l < t.length; l++) {
                res.push(gen[k] + t[l]);
            }
        }
        return res;
    },
    notones: function (c, vn) {
        var gvt = [];
        for (q = 0; q < c.length; q++) {
            for (r = 0; r < vn.length; r++) {
                gvt.push(c[q] + vn[r]);
            }
        }
        return gvt;
    }
}

var shan_common = generator.common(c, v, t);
var shan_notones = generator.notones(c, vn);

var ipa_common = generator.common(ipac, ipav, ipat);
var ipa_notones = generator.notones(ipac, ipavn);
