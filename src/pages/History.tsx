
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWordsHistory, clearWordsHistory } from "@/services/storageService";
import { WordOfTheDay } from "@/types/Word";
import WordCard from "@/components/WordCard";
import { Home, ArrowLeft } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const History = () => {
  const [wordHistory, setWordHistory] = useState<WordOfTheDay[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadWordHistory();
  }, []);

  const loadWordHistory = () => {
    const history = getWordsHistory();
    setWordHistory(history);
  };

  const handleClearHistory = () => {
    clearWordsHistory();
    setWordHistory([]);
    toast.success("History cleared successfully!");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      <div className="max-w-lg w-full mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-1">Word History</h1>
          <p className="text-muted-foreground">Your previously viewed words</p>
        </div>
        
        {wordHistory.length > 0 ? (
          <>
            <div className="flex justify-end mb-6">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">Clear History</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete your word history. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleClearHistory}>
                      Yes, clear history
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            
            <div className="space-y-6">
              {wordHistory.map((word) => (
                <WordCard key={word.id} word={word} showDate={true} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center p-10 bg-white rounded-lg shadow">
            <p className="text-muted-foreground mb-4">Your history is empty</p>
            <Button onClick={() => navigate("/")}>Go back home</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
