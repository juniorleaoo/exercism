const COMPLEMENTS: { [key: string]: string } = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export function toRna(DNA: string): string {
  return [...DNA].map(nucleotide => {
    if (!COMPLEMENTS.hasOwnProperty(nucleotide)) {
      throw new Error('Invalid input DNA.');
    }

    return COMPLEMENTS[nucleotide];
  }).join('');
}
