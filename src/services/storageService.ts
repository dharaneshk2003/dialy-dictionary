
import { WordOfTheDay } from "../types/Word";

// Storage key for words history
const WORDS_HISTORY_KEY = "word_of_the_day_history";

// Get all viewed words from localStorage
export const getWordsHistory = (): WordOfTheDay[] => {
  const storedWords = localStorage.getItem(WORDS_HISTORY_KEY);
  if (!storedWords) return [];
  
  try {
    return JSON.parse(storedWords);
  } catch (error) {
    console.error("Error parsing words history", error);
    return [];
  }
};

// Save a new word to history
export const saveWordToHistory = (word: WordOfTheDay): void => {
  try {
    const wordsHistory = getWordsHistory();
    const updatedHistory = [word, ...wordsHistory];
    localStorage.setItem(WORDS_HISTORY_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error("Error saving word to history", error);
  }
};

// Clear all words from history
export const clearWordsHistory = (): void => {
  try {
    localStorage.removeItem(WORDS_HISTORY_KEY);
  } catch (error) {
    console.error("Error clearing words history", error);
  }
};
