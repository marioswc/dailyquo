import { useState, useEffect } from "react";
import { getQuotes } from "../services/quotes";

export function useQuotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function loadQuotes() {
      try {
        const data = await getQuotes();
        if (!data || data.length === 0) {
          throw new Error("No quotes found");
        }
        setQuotes(data);
      } catch (error) {
        console.error("Error loading quotes:", error);
      }
    }
    loadQuotes();
  }, []);
  return quotes;
}
