
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getRandomWord } from "@/services/wordService";
import { getWordsHistory, saveWordToHistory } from "@/services/storageService";
import { WordOfTheDay } from "@/types/Word";
import WordCard from "@/components/WordCard";
import { RefreshCw, History } from "lucide-react";

const Index = () => {
  const [currentWord, setCurrentWord] = useState<WordOfTheDay | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchNewWord = () => {
    try {
      setIsLoading(true);
      const newWord = getRandomWord();
      setCurrentWord(newWord);
      saveWordToHistory(newWord);
      toast.success("New word of the day loaded!");
    } catch (error) {
      console.error("Error fetching new word", error);
      toast.error("Failed to load a new word. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const history = getWordsHistory();
    if (history.length > 0) {
      // Show the most recent word
      setCurrentWord(history[0]);
    } else {
      // If no history, get a new word
      fetchNewWord();
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      <div className="max-w-lg w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-1">Word of the Day</h1>
          <p className="text-muted-foreground">Expand your vocabulary one word at a time</p>
        </div>
        
        {currentWord ? (
          <WordCard word={currentWord} />
        ) : (
          <div className="word-card flex items-center justify-center">
            <p className="text-muted-foreground">Loading your word of the day...</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            onClick={fetchNewWord} 
            disabled={isLoading}
            className="flex-1"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            New Word
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate("/history")}
            className="flex-1"
          >
            <History className="mr-2 h-4 w-4" />
            View History
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
