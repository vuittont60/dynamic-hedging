export const MobileWarning = () => {
  return (
    <div className="fixed w-full h-full z-[10000] bg-bone flex md:hidden flex-col items-center justify-center p-4">
      <img src={"/logo.png"} alt="logo" className="w-20 mb-8" />
      <p className="text-center">
        {`Unfortunately, Rysk does not currently support mobile devices. We are working hard to rectify this. Please come back via a desktop device for now.`}
      </p>
    </div>
  );
};
