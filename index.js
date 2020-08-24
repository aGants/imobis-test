let check = document.querySelector('.checkbox');

document.addEventListener('keyup', function (event) {
  let message = document.querySelector('.message');
  message = message.value;
  document.querySelector('.symbols__number').innerHTML = message.length;
});

check.addEventListener('change', function (event) {
  if (check.checked == true) {
    translate();
  }
});

function translate() {
  let message = document.querySelector('.message');
  let text    = message.value;
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
  for (var i=0; i < text.length; i++) {
    newtext += translit[text.charAt(i)];
  }
  document.querySelector('.message').value = newtext;
}

