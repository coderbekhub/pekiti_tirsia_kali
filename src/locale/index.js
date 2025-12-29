import { PEKITI } from '../tools/constants'
import { en } from './En'
import { ru } from './Ru'
import { uz } from './Uz'

export const getLanguage = () => {
  return localStorage.getItem(PEKITI)
}

export const getText = word => {
  return getLanguage() === "en" ? en[word] : getLanguage() === "ru" ? ru[word] : uz[word]
}