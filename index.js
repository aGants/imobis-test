let check = document.querySelector('.checkbox');
let newtext = '';
const translit = {
  'а': 'a',  'б': 'b',  'в': 'v',  'г': 'g',  'д': 'd', 
  'е': 'e',  'ё': 'yo', 'ж': 'zh', 'з': 'z',  'и': 'i',
  'й': 'y',  'к': 'k',  'л': 'l',  'м': 'm',  'н': 'n',  'о': 'o', 
  'п': 'p',  'р': 'r',  'с': 's',  'т': 't',  'у': 'u',  'ф': 'f', 
  'х': 'h',  'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch','ъ': "'",
  'ы': 'i',  'ь': "'",  'э': 'e',  'ю': 'u',  'я': 'ya', 
  '"': '«',  '»': '"',  '–': '-',  '—': '-',  '№': '#',  '`': "'"
};

document.addEventListener('keyup', function (event) {
  document.querySelector('.symbols__number').innerHTML = document.querySelector('.message').value.length;
});

check.addEventListener('change', function (event) {
  let message = document.querySelector('.message');
  let text = message.value;
  if (check.checked == true) {
    translatetoEnglish(text);
  } else translatetoRussian(text);
  document.querySelector('.message').value = '';
  document.querySelector('.message').value = newtext;
});

function translatetoEnglish(text) {
  for (var i=0; i < text.length; i++) {
    if (translit[text.charAt(i)] != undefined) {
      newtext += translit[text.charAt(i)];
    } else {
      try {
        char = translit[text.charAt(i).toLowerCase()].toUpperCase();
        newtext += char;
      }
      catch { newtext += text.charAt(i); }
    }
  }
}

function translatetoRussian(text) {
  for (var i = 0; i < text.length; i++) {
    for (var key in translit) {
      if (text.charAt(i) == translit[key]) {
        newtext += key;
        console.log(key);
      }
    }
  }
}