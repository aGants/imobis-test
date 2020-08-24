let check = document.querySelector('.checkbox');
let newtext = '';
const translit = {
  'а': 'a',  'б': 'b',  'в': 'v',   'г': 'g',  'д': 'd', 
  'е': 'e',  'ё': 'yo', 'ж': 'zh',  'з': 'z',  'и': 'i',
  'й': 'y',  'к': 'k',  'л': 'l',   'м': 'm',  'н': 'n',  
  'о': 'o',  'п': 'p',  'р': 'r',   'щ': 'sch', 'ш': 'sh', 
  'с': 's',  'ц': 'ts', 'т': 't',   'у': 'u',  'ф': 'f',  
  'х': 'h',  'ч': 'ch', 'ъ': "'",   'ы': 'i',  'ь': "'",  
  'э': 'e',  'ю': 'u',  'я': 'ya', 
  '"': '«',  '»': '"',  '–': '-',  '—': '-',  '№': '#',  '`': "'"
};

document.addEventListener('keyup', function (event) {
  symbolCount();
});


check.addEventListener('change', function (event) {
  message = document.querySelector('.message');
  text = message.value;
  newtext = '';
  if (check.checked == true) {
    translateToEnglish(text);
  } else translateToRussian(text);
  document.querySelector('.message').value = '';
  document.querySelector('.message').value = newtext;
  symbolCount();
});


function symbolCount() {
  message = document.querySelector('.message').value;
  document.querySelector('.symbols__number').innerHTML = message.length;
}


function translateToEnglish(text) {
  for (var i=0; i < text.length; i++) {
    if (translit[text.charAt(i)] != undefined) {
      newtext += translit[text.charAt(i)];
    } else {
      try {
        char = translit[text.charAt(i).toLowerCase()].toUpperCase();
        newtext += char;
      }
      catch (err) { newtext += text.charAt(i); }
    }
  }
}


function translateToRussian(text) {
  skip = 0;
  for (var i = 0; i < text.length; i++) {
    if (skip > 0) { 
      skip=skip-1;
      continue; }
    char = '';
    for (var key in translit) {
      if (char == '') {
        one = text.charAt(i).toLowerCase();
        two = one + text.charAt(i + 1);
        three = one + text.charAt(i + 1) + text.charAt(i + 2);
        switch (translit[key]) {
          case three: char = key; skip = 2;
          break;
          case two: char = key;
          skip = 1;
          break;
          case one: char = key; skip = 0; break;
        }
        newtext += char;
      } else break;
    }
  }
}