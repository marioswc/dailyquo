function Main() {
  return (
    <>
      <main className="grid place-items-center px-2">
        <section>
          <article className="max-w-300 w-full mx-auto flex flex-col items-start gap-6 p-4">
            <div>
              <small>27/October/2026</small>
            </div>
            <div>
              <h1 className="sm:text-5xl text-4xl sm:leading-12 leading-10 font-extrabold">
                Your heart is the size of an ocean. Go find yourself in its
                hidden depths
              </h1>
            </div>
            <div className="px-2">
              <p className="text-sm border-l-3 border-primary pl-2 font-medium w-full">
                Rumi
              </p>
            </div>
            <div>
              <button className="text-sm capitalize bg-bg border border-line text-text-muted px-4 py-2 rounded-full cursor-pointer hover:border-primary hover:text-primary transition-all duration-300">
                Copy quote
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Main;
