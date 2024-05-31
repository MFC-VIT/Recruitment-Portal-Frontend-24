const Header = ({
  tabIndex,
  setTabIndex,
}: {
  tabIndex: number;
  setTabIndex: (index: number) => void;
}) => {
  return (
    <div className="w-full flex justify-between md:justify-around relative h-[3rem] md:h-[5rem]">
      <div className="w-full h-[4px] bg-white absolute top-1/2  -translate-y-1/2"></div>
      <button
        className={`nes-btn btn-header ${tabIndex === 0 && "is-success"}`}
        onClick={() => setTabIndex(0)}
      >
        <span className="text-xl">1</span>
        <p className="text-xs hidden lg:block">
          Complete
          <br />
          Profile
        </p>
      </button>
      <button
        className={`nes-btn btn-header ${tabIndex === 1 && "is-success"}`}
        onClick={() => setTabIndex(1)}
      >
        <span className="text-xl">2</span>
        <p className="text-xs hidden lg:block">Tasks</p>
      </button>
      <button
        className={`nes-btn btn-header ${tabIndex === 2 && "is-success"}`}
        /*onClick={() => setTabIndex(2)}*/
      >
        <span className="text-xl">3</span>
        <p className="text-xs hidden lg:block">
          Task
          <br />
          Submission
        </p>
      </button>
      <button
        className={`nes-btn btn-header ${tabIndex === 3 && "is-success"}`}
        onClick={() => setTabIndex(3)}
      >
        <span className="text-xl">4</span>
        <p className="text-xs hidden lg:block">
          Application
          <br />
          Status
        </p>
      </button>
    </div>
  );
};

export default Header;
