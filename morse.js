<SCRIPT LANGUAGE="JAVASCRIPT">
<!--

var charCodes=new Array(36);
charCodes["a"]=". _";
charCodes["b"]="_ . . .";
charCodes["c"]="_ . _ .";
charCodes["d"]="_ . .";
charCodes["e"]=".";
charCodes["f"]=". . _ ."; 
charCodes["g"]="_ _ .";
charCodes["h"]=". . . .";
charCodes["i"]=". .";
charCodes["j"]=". _ _ _";
charCodes["k"]="_ . _";
charCodes["l"]=". _ . .";
charCodes["m"]="_ _";
charCodes["n"]="_ .";
charCodes["o"]="_ _ _";
charCodes["p"]=". _ _ .";
charCodes["q"]="_ _ . _";
charCodes["r"]=". _ .";
charCodes["s"]=". . .";
charCodes["t"]="_";
charCodes["u"]=". . _";
charCodes["v"]=". . . _";
charCodes["w"]=". _ _";
charCodes["x"]="_ . . _";
charCodes["y"]="_ . _ _";
charCodes["z"]="_ _ . .";
charCodes["1"]=". _ _ _ _";
charCodes["2"]=". . _ _ _";
charCodes["3"]=". . . _ _";
charCodes["4"]=". . . . _";
charCodes["5"]=". . . . .";
charCodes["6"]="_ . . . .";
charCodes["7"]="_ _ . . .";
charCodes["8"]="_ _ _ . .";
charCodes["9"]="_ _ _ _ .";
charCodes["0"]="_ _ _ _ _";
var temp=''

function encode() {
document.morsecode.chars.value=document.morsecode.chars.value.toLowerCase();
document.morsecode.codebox.value="";
temp=''
var chars=document.morsecode.chars.value.split("");

for (a=0; a<chars.length; a++) {
if (chars[a]!=" ") {
if (window.charCodes[chars[a]]) {
document.morsecode.codebox.value+=charCodes[chars[a]]+"    ";
temp+=chars[a]+"="+charCodes[chars[a]]+"\n";
}
else
temp+=chars[a]+"=(None)\n";
}
else temp+="\n";
}
}
// -->
</SCRIPT>

<FORM NAME="morsecode">
Type in a word or phrase: <INPUT TYPE="TEXT" NAME="chars" size="28" value="Help"> <INPUT TYPE="BUTTON" VALUE="Encode" onClick="encode()"><BR><BR>
<TEXTAREA NAME="codebox" cols="50" rows="11" style="width:70%" wrap="virtual"> </TEXTAREA><br /><INPUT TYPE="BUTTON" VALUE="Copy To Clipboard" onClick="document.morsecode.codebox.select(); document.execCommand('Copy');">
</FORM>

<p>This script provided by<br />
Krush</p>
