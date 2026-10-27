import Logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <header className="border-b border-line py-4 px-2 sticky top-0 bg-bg/10 backdrop-blur-xs z-50">
        <div className="max-w-300 mx-auto w-full">
          <div className="size-8 flex items-end gap-2">
            <img
              src={Logo}
              alt="Logo del proyecto"
              draggable="false"
              className="w-full object-contain block"
              loading="eager"
            />
            <span className="text-xl font-bold tracking-wide text-text">
              DailyQuo
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
