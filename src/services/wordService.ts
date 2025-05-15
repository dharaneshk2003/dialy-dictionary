
import { WordOfTheDay } from "../types/Word";

// Sample dictionary of words
const wordDictionary = [
  {
    word: "Serendipity",
    definition: "The occurrence and development of events by chance in a happy or beneficial way",
    example: "A fortunate stroke of serendipity led to her discovery of the rare manuscript."
  },
  {
    word: "Ephemeral",
    definition: "Lasting for a very short time",
    example: "The ephemeral beauty of cherry blossoms makes them all the more special."
  },
  {
    word: "Mellifluous",
    definition: "Sweet or musical; pleasant to hear",
    example: "Her mellifluous voice captivated the entire audience."
  },
  {
    word: "Luminous",
    definition: "Emitting or reflecting light; bright or shining",
    example: "The luminous moon cast a silvery glow across the landscape."
  },
  {
    word: "Quixotic",
    definition: "Exceedingly idealistic; unrealistic and impractical",
    example: "His quixotic plan to solve world hunger in a year was admirable but unfeasible."
  },
  {
    word: "Gregarious",
    definition: "Fond of company; sociable",
    example: "His gregarious nature made him the life of every party."
  },
  {
    word: "Eloquent",
    definition: "Fluent or persuasive in speaking or writing",
    example: "Her eloquent speech moved everyone in the room."
  },
  {
    word: "Cacophony",
    definition: "A harsh, discordant mixture of sounds",
    example: "The cacophony of car horns filled the busy intersection."
  },
  {
    word: "Tenacious",
    definition: "Tending to keep a firm hold of something; clinging or adhering closely",
    example: "Her tenacious pursuit of justice finally paid off after many years."
  },
  {
    word: "Ubiquitous",
    definition: "Present, appearing, or found everywhere",
    example: "Smartphones have become ubiquitous in modern society."
  },
  {
    word: "Perspicacious",
    definition: "Having a ready insight into and understanding of things",
    example: "Her perspicacious analysis of the situation impressed her colleagues."
  },
  {
    word: "Surreptitious",
    definition: "Kept secret, especially because it would not be approved of",
    example: "He took a surreptitious glance at the answers while the teacher wasn't looking."
  }
];

// Get a random word from the dictionary
export const getRandomWord = (): WordOfTheDay => {
  const randomIndex = Math.floor(Math.random() * wordDictionary.length);
  const { word, definition, example } = wordDictionary[randomIndex];
  
  return {
    id: `${word}-${Date.now()}`,
    word,
    definition,
    example,
    dateViewed: new Date().toISOString()
  };
};
