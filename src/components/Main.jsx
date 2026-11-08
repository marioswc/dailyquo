import { useCurrentDate } from "../hooks/useCurrentDate";
import { useQuotes } from "../hooks/useQuotes";
import { useClipboard } from "../hooks/useClipboard";

function Main() {
  // get the current date and the quote list
  const { indexDays, today } = useCurrentDate();
  const quoteList = useQuotes();
  const { copied, copyToClipboard } = useClipboard();
  // define the quote and author based on the indexDays
  const currentQuote = quoteList[indexDays];
  const quote = currentQuote?.quote ?? "Loading...";
  const author = currentQuote?.author ?? "Loading...";

  return (
    <main className="grid place-items-center px-2">
      <section className="flex items-center">
        <article className="max-w-4xl w-full mx-auto flex flex-col items-start gap-8 px-6 py-16 transition-all duration-700 ease-out starting:opacity-0 starting:translate-y-3">
          <time className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {today ?? "Loading..."}
          </time>
          <blockquote>
            <span
              aria-hidden="true"
              className="block text-8xl sm:text-9xl leading-none text-primary/25 select-none -mb-6 sm:-mb-10"
            >
              “
            </span>
            <h1 className=" italic font-normal text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-balance">
              {quote}
            </h1>
          </blockquote>
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            {author}
          </p>
          <button
            disabled={!currentQuote}
            onClick={() => copyToClipboard(`${quote} - ${author}`)}
            aria-live="polite"
            className="text-sm bg-bg border border-line text-text-muted px-5 py-2 rounded-full cursor-pointer hover:border-primary hover:text-primary transition-all duration-300 disabled:cursor-not-allowed disabled:bg-bg/50 disabled:text-text-muted/50 disabled:hover:border-line disabled:hover:text-text-muted"
          >
            {copied ? "Copied!" : "Copy Quote"}
          </button>
        </article>
      </section>
    </main>
  );
}

export default Main;
