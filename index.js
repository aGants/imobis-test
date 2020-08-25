let check   = document.querySelector('.checkbox');
let newtext = '';
let sms     = 1;
const latinlenght  = 153;
const kirilllenght = 67;

const translit = {
  'а': 'a',  'б': 'b',  'в': 'v',   'г': 'g',  'д': 'd', 
  'е': 'e',  'ё': 'yo', 'ж': 'zh',  'з': 'z',  'и': 'i',
  'й': 'y',  'к': 'k',  'л': 'l',   'м': 'm',  'н': 'n',  
  'о': 'o',  'п': 'p',  'р': 'r',   'щ': 'sch', 'ш': 'sh', 
  'с': 's',  'ц': 'ts', 'т': 't',   'у': 'u',  'ф': 'f',  
  'х': 'h',  'ч': 'ch', 'ъ': "'",   'ы': 'i',  'ь': "'",  
  'э': 'e',  'ю': 'u',  'я': 'ya', 
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
  'Е': 'E', 'Ё': 'YO', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
  'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
  'О': 'O', 'П': 'P', 'Р': 'R', 'Щ': 'Sch', 'Ш': 'Sh',
  'С': 'S', 'Ц': 'Ts', 'Т': 'T', 'У': 'U', 'Ф': 'F',
  'Х': 'H', 'Ч': 'Ch', 'Ъ': "'", 'Ы': 'I', 'Ь': "'",
  'Э': 'E', 'Ю': 'U', 'Я': 'Ya',
  '"': '«',  '»': '"',  '–': '-',  '—': '-',  '№': '#',  '`': "'"
};

document.addEventListener('keyup', function (event) {
  symbolCount();
  smsCount();
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
  smsCount();
});


function symbolCount() {
  message = document.querySelector('.message').value;
  document.querySelector('.symbols__number').innerHTML = message.length;
}

function smsCount() {
  symbols = message.length;
  if (check.checked == true) {
    sms = Math.ceil(symbols/latinlenght);
  } else {sms = Math.ceil(symbols/kirilllenght);} 
  document.querySelector('.sms__number').innerHTML = sms;
}

function translateToEnglish(text) {
  for (var i=0; i < text.length; i++) {
    if (translit[text.charAt(i)] != undefined) {
      newtext += translit[text.charAt(i)];
    } else newtext += text.charAt(i); 
  }
}

function translateToRussian(text) {
  skip = 0;
  for (var i = 0; i < text.length; i++) {
    char = '';
    if (skip > 0) { 
      skip=skip-1;
      continue; }
    for (var key in translit) {
      if (char == '') {
        one = text.charAt(i);
        two = one + text.charAt(i + 1);
        three = two + text.charAt(i + 2);
        switch (translit[key]) {
          case three: char = key; skip = 2; break;
          case two: char = key; skip = 1; break;
          case one: char = key; skip = 0; break;
        }
        newtext += char;
      } else break;
    }
    if (char == '') { 
      newtext += text.charAt(i); }
  }
}