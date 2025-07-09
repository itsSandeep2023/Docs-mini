function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen"></div>

      <div className="absolute top-[5%] w-full py-10 flex justify-center text-xl font-semibold  text-orange-500/60">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] leading-none tracking-normal text-nowrap font-semibold text-orange-500/60">
        Docs
      </h1>
    </>
  );
}

export default Background;
