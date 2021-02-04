function scrambleWords(word) {
  let result           = '';
  let characters       = '迪æ비ΦミュキーマイΦサウàロжзкйлмнпрстфхцчщン茶シζ';
  let charactersLength = characters.length;
  for ( let i = 0; i < word.length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


function replaceTextNodes(node) {
node.childNodes.forEach(function(el) {
if (el.nodeType === 3) {  // If this is a text node, replace the text
  if (el.nodeValue.trim() !== "") { // Ignore this node if it an empty text node
    el.nodeValue = scrambleWords(el);
  }
} else { // Else recurse on this node
  replaceTextNodes(el);
}
});
}

window.onload = () => {
replaceTextNodes(document.querySelector('body'));
};
