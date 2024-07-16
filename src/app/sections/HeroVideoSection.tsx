const HeroVideoSection = () => {
  return (
    <section className="h-[100lvh] -mt-16 py-20 flex flex-col items-start justify-end">
      <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
      <video
        className="object-cover h-full absolute inset-0"
        width="1920"
        height="1080"
        preload="auto"
        muted
        loop
        playsInline
        autoPlay
        poster="/images/poster-video-presentacion.png"
      >
        <source
          src="https://res.cloudinary.com/ds3ba0kdl/video/upload/v1720731103/presentacion-estancia-el-refugio_zjbdqp.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-20">
        <h1 className="text-white">
          Estancia El Refugio
        </h1>
        <p className="text-white drop-shadow">Chubut, Argentina</p>
      </div>
    </section>
  );
};

export default HeroVideoSection;
