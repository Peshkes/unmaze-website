export interface TestQuestion {
  id: number
  weight: number
  text: {
    ru: string
    en: string
    he: string
  }
}

export const testQuestions: TestQuestion[] = [
  { id: 1, weight: 3, text: { ru: 'Читает по слогам и долго', en: 'Reads syllable by syllable and slowly', he: 'קורא הברה אחר הברה ולאט' } },
  { id: 2, weight: 3, text: { ru: 'Переставляет местами буквы при чтении', en: 'Reverses letters when reading', he: 'מחליף סדר אותיות בקריאה' } },
  { id: 3, weight: 3, text: { ru: 'Путает похожие буквы (б-д, п-т)', en: 'Confuses similar letters (b-d, p-q)', he: 'מבלבל אותיות דומות (ב-כ, ד-ר)' } },
  { id: 4, weight: 2, text: { ru: 'Плохо понимает прочитанный текст', en: 'Poorly understands what was read', he: 'מתקשה להבין טקסט שקרא' } },
  { id: 5, weight: 2, text: { ru: 'Избегает чтения вслух', en: 'Avoids reading aloud', he: 'נמנע מקריאה בקול' } },
  { id: 6, weight: 2, text: { ru: 'Быстро устаёт при чтении', en: 'Gets tired quickly when reading', he: 'מתעייף מהר בזמן קריאה' } },
  { id: 7, weight: 2, text: { ru: 'Пропускает слова или строчки при чтении', en: 'Skips words or lines when reading', he: 'מדלג על מילים או שורות בקריאה' } },
  { id: 8, weight: 2, text: { ru: 'Пишет с большим количеством ошибок', en: 'Makes many spelling mistakes when writing', he: 'עושה הרבה שגיאות כתיב' } },
  { id: 9, weight: 1, text: { ru: 'Трудно запоминает новые слова', en: 'Has difficulty memorizing new words', he: 'מתקשה לזכור מילים חדשות' } },
  { id: 10, weight: 1, text: { ru: 'Путает «лево» и «право»', en: 'Confuses left and right', he: 'מבלבל בין ימין לשמאל' } },
  { id: 11, weight: 1, text: { ru: 'С трудом пересказывает прочитанное', en: 'Has difficulty retelling what was read', he: 'מתקשה לספר מחדש מה שקרא' } },
  { id: 12, weight: 1, text: { ru: 'Медленно подбирает слова в речи', en: 'Slowly finds words when speaking', he: 'מאט במציאת מילים בדיבור' } },
  { id: 13, weight: 2, text: { ru: 'Не любит читать самостоятельно', en: 'Does not enjoy reading independently', he: 'לא אוהב לקרוא באופן עצמאי' } },
  { id: 14, weight: 1, text: { ru: 'Плохо запоминает последовательности (дни, месяцы)', en: 'Has difficulty remembering sequences (days, months)', he: 'מתקשה לזכור רצפים (ימים, חודשים)' } },
  { id: 15, weight: 1, text: { ru: 'Путает время на часах', en: 'Has difficulty reading the clock', he: 'מתקשה לקרוא שעון' } },
  { id: 16, weight: 2, text: { ru: 'Читает слова наоборот или зеркально', en: 'Reads words backwards or in mirror', he: 'קורא מילים הפוך או במראה' } },
  { id: 17, weight: 3, text: { ru: 'Теряет место в тексте при чтении', en: 'Loses place in text while reading', he: 'מאבד את המקום בטקסט בזמן קריאה' } },
  { id: 18, weight: 2, text: { ru: 'Затрудняется при списывании с доски', en: 'Has difficulty copying from the board', he: 'מתקשה להעתיק מהלוח' } },
  { id: 19, weight: 1, text: { ru: 'Почерк трудно разобрать', en: 'Handwriting is difficult to read', he: 'כתב היד קשה לקריאה' } },
  { id: 20, weight: 2, text: { ru: 'Отстаёт от сверстников в чтении', en: 'Falls behind peers in reading', he: 'מפגר אחרי בני גילו בקריאה' } },
]

export function calculateTestResult(answers: Record<number, number>): {
  score: number
  maxScore: number
  percentage: number
  level: 'low' | 'medium' | 'high'
} {
  let score = 0
  let maxScore = 0

  for (const q of testQuestions) {
    maxScore += q.weight * 3
    const answer = answers[q.id]
    if (answer !== undefined && answer > 0) {
      score += q.weight * answer
    }
  }

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0

  let level: 'low' | 'medium' | 'high' = 'low'
  if (percentage >= 60) {
    level = 'high'
  } else if (percentage >= 30) {
    level = 'medium'
  }

  return { score, maxScore, percentage, level }
}
