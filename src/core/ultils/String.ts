export function removeAccents(target: string): string{
  let newString = '';
  const latin = {
    'á': 'a',
    'à': 'a',
    'ä': 'a',
    'ã': 'a',
    'â': 'a',
    'Á': 'A',
    'À': 'A',
    'Ä': 'A',
    'Ã': 'A',
    'Â': 'A',

    'é': 'e',
    'è': 'e',
    'ë': 'e',
    'ẽ': 'e',
    'ê': 'e',
    'É': 'E',
    'È': 'E',
    'Ë': 'E',
    'Ẽ': 'E',
    'Ê': 'E',

    'í': 'i',
    'ì': 'i',
    'ï': 'i',
    'ĩ': 'i',
    'î': 'i',
    'Í': 'I',
    'Ì': 'I',
    'Ï': 'I',
    'Ĩ': 'I',
    'Î': 'I',

    'ó': 'o',
    'ò': 'o',
    'ö': 'o',
    'õ': 'o',
    'ô': 'o',
    'Ó': 'O',
    'Ò': 'O',
    'Ö': 'O',
    'Õ': 'O',
    'Ô': 'O',

    'ú': 'u',
    'ù': 'u',
    'ü': 'u',
    'ũ': 'u',
    'û': 'u',
    'Ú': 'U',
    'Ù': 'U',
    'Ü': 'U',
    'Ũ': 'U',
    'Û': 'U',

  };
  const split = target.split('');
  for (const item of split) {
    if (latin[item]) {
      newString += latin[item];
    } else {
      newString += item;
    }
  }
  /**/
  return newString;
}