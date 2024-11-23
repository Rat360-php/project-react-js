const Footter = () => {
  return (
    <div className='Footter bg-white mt-20 shadow' id="footter">
      <div className='container mx-auto py-4 flex items-center justify-between'>
        <p className=''>
          &copy; Copyright by <span className="font-bold text-sky-400">Rat</span>
        </p>
        <div className='social-footter flex items-center sm:gap-7 gap-2'>
          <i class='ri-github-fill text-2xl'></i>
          <i class='ri-whatsapp-fill text-2xl'></i>
          <i class='ri-twitter-fill text-2xl'></i>
          <i class='ri-instagram-fill text-2xl'></i>
          <i class='ri-tiktok-fill text-2xl'></i>
        </div>
      </div>
    </div>
  );
};

export default Footter;
