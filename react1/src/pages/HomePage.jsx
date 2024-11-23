import HeroImage from '../assets/hero.svg';
import AboutImage from '../assets/about.svg';
import Card from '../components/Card.jsx';
import CardImage from '../assets/ai-generated-8777813_640.png';

const HomePage = () => {
  return (
    <div className='homepage pb-10'>
      <div className='container mx-auto px-4'>
        <div className='hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32'>
          <div className='box'>
            <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7'>
              Belajar membuat website dengan{' '}
              <span className='text-sky-400 font-bold underline'>
                Tailwind CSS
              </span>
            </h1>
            <p className='text-base/8 mb-7'>
              in magna incididunt labore voluptate magna Lorem labore officia ad
              proident adipisicing esse tempor ipsum ullamco qui ut sint laborum
            </p>
            <a
              href='#'
              className='bg-slate-700 hover:bg-slate-800 transition-all py-2 px-4 text-white shadow rounded-full'
            >
              Tentang Saya <i className='ri-eye-line ms-1'></i>
            </a>
          </div>
          <div className='box'>
            <img
              src={HeroImage}
              alt='hero image'
              className='md:w-full w-[400px] mx-auto md:m-0'
            />
          </div>
        </div>

        <div className='About grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32'>
          <div className='box md:order-1 order-2'>
            <img
              src={AboutImage}
              alt='About Image'
              className='lg:w-[500px] w-[400px] md:m-0 mx-auto'
            />
          </div>

          <div className='box md:order-2 order-1'>
            <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7'>
              Belajar membuat website dengan{' '}
              <span className='text-sky-400 font-bold underline'>
                Tailwind CSS
              </span>
            </h1>
            <p className='text-base/loose'>
              in magna incididunt labore voluptate magna Lorem labore officia ad
              proident adipisicing esse tempor ipsum ullamco qui ut sint laborum
            </p>
          </div>
        </div>

        <div className='Services'>
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium'>
            Layanan
          </h1>
          <p className=''>
            exercitation consequat nulla veniam elit mollit esse
          </p>
          <div className='Services-box grid grid-cols-3 gap-6'>
            <Card>
              <Card.Title>Layanan 1</Card.Title>
              <Card.Body>
                <img src={CardImage} alt='Card Image' />
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
            <Card>
              <Card.Title>Layanan 2</Card.Title>
              <Card.Body>
                <img src={CardImage} alt='Card Image' />
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
            <Card>
              <Card.Title>Layanan 3</Card.Title>
              <Card.Body>
                <img src={CardImage} alt='Card Image' />
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
