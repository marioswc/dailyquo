import { useState, useEffect } from "react";
import { getQuotes } from "../services/quotes";

const storageKey = `quotes_${new Date().getFullYear()}`;

export function useQuotes() {
  const [quotes, setQuotes] = useState(() => {
    try {
      const storedQuotes = localStorage.getItem(storageKey);
      return storedQuotes ? JSON.parse(storedQuotes) : [];
    }
    catch {
      return [];
    }
  });

  useEffect(() => {
    if (quotes.length > 0) return; // If quotes are already loaded, do not fetch again
    async function loadQuotes() {
      try {
        const data = await getQuotes();
        if (!data || data.length === 0) {
          throw new Error("No quotes found");
        }
        setQuotes(data);
        // Store the quotes in localStorage for future use
        localStorage.setItem(storageKey, JSON.stringify(data));
      } catch (error) {
        console.error("Error loading quotes:", error);
      }
    }
    loadQuotes();
  }, [quotes.length]);
  return quotes;
}
