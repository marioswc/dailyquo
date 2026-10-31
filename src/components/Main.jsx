import { useState, useEffect } from "react";
import { getQuotes } from "../utils/quotes";

function Main() {
  return (
    <>
      <main className="grid place-items-center px-2">
        <section className="flex items-center">
          <article className="max-w-4xl w-full mx-auto flex flex-col items-start gap-8 px-6 py-16 motion-safe:animate-fade-up">
            <time className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Saturday 31, October 2026
            </time>
            <div>
              <span
                aria-hidden="true"
                className="block text-8xl sm:text-9xl leading-none text-primary/25 select-none -mb-6 sm:-mb-10">
                “
              </span>
              <h1 className=" italic font-normal text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-balance">
                The only way to do great work is to love what you do.
              </h1>
            </div>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              Rumi 
            </p>
            <button
              aria-live="polite"
              className="text-sm bg-bg border border-line text-text-muted px-5 py-2 rounded-full cursor-pointer hover:border-primary hover:text-primary transition-all duration-300">
              Copy
            </button>
          </article>
        </section>
      </main>
    </>
  );
}

export default Main;
