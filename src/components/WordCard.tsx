
import { WordOfTheDay } from "@/types/Word";
import { formatDate } from "@/utils/dateUtils";

interface WordCardProps {
  word: WordOfTheDay;
  showDate?: boolean;
}

const WordCard = ({ word, showDate = false }: WordCardProps) => {
  return (
    <div className="word-card animate-fade-in">
      <h2 className="text-3xl font-bold text-accent mb-3">{word.word}</h2>
      <p className="text-lg mb-4 text-gray-700">{word.definition}</p>
      <div className="bg-gray-50 p-4 rounded-md italic text-gray-600 border-l-4 border-accent">
        <p>"{word.example}"</p>
      </div>
      {showDate && (
        <div className="mt-4 text-sm text-gray-500">
          Viewed on {formatDate(word.dateViewed)}
        </div>
      )}
    </div>
  );
};

export default WordCard;
