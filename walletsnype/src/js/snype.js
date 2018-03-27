var dictionary = [];

dictionary.push("satoshi");

console.log(dictionary.length);

function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function calc(word)
{
    var strTxt = word;

    {
        if( strTxt.search("\r")>0 ) strTxt=replaceAll( "\r", "", strTxt );
        var strHash = hex_sha256( strTxt );
        strHash = strHash.toUpperCase();
        console.log(strHash);
        return strHash;
    }
}

for (var i=0;i < dictionary.length; i++) {
    var wallet = {};
    wallet.word = dictionary[i];
    wallet.hash = calc(dictionary[i]);
    console.log(wallet);
}
