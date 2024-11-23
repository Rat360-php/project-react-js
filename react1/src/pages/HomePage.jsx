import HeroImage from '../assets/hero.svg';
import AboutImage from '../assets/about.svg';
import Card from '../components/Card.jsx';
import Proyek1 from '../assets/proyek-1.webp';
import Proyek2 from '../assets/proyek-2.webp';
import Proyek3 from '../assets/proyek-3.webp';
import Proyek4 from '../assets/proyek-4.webp';
import Proyek5 from '../assets/proyek-5.webp';

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

        <div className='About grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32' id="about">
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

        <div className='Services pt-32' id="services">
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium'>
            Layanan
          </h1>
          <p className='text-center'>
            exercitation consequat nulla veniam elit mollit esse
          </p>
          <div className='Services-box grid md:grid-cols-3 grid-cols-1 gap-6 pt-12'>
            <Card>
              <Card.Title>Layanan 1</Card.Title>
              <Card.Body>
                <p>
                  do ullamco eu voluptate deserunt est est in excepteur do in
                  fugiat pariatur dolor eiusmod
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title>Layanan 2</Card.Title>
              <Card.Body>
                <p>
                  sit ad ad duis non non aute esse non reprehenderit aute amet
                  anim cupidatat consectetur
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Title>Layanan 3</Card.Title>
              <Card.Body>
                <p>
                  magna pariatur occaecat incididunt minim est id id eiusmod
                  aute occaecat ad eu laborum elit
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className='proyek pt-32' id="proyek">
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium'>
            Proyek
          </h1>
          <p className='text-center'>
            exercitation consequat nulla veniam elit mollit esse
          </p>
          <div className='proyek-box gap-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12'>
            <div className='box p-2 bg-slate-600 shadow'>
              <img
                src={Proyek1}
                alt='Proyek Image'
                className='w-full h-[220px]'
              />
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>
                Proyek 1
              </h3>
              <p className='text-white text-base/loose'>
                tempor dolore nostrud esse reprehenderit id adipisicing nostrud
                proident non
              </p>
            </div>
            <div className='box p-2 bg-slate-600 shadow'>
              <img
                src={Proyek2}
                alt='Proyek Image'
                className='w-full h-[220px]'
              />
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>
                Proyek 2
              </h3>
              <p className='text-white text-base/loose'>
                tempor dolore nostrud esse reprehenderit id adipisicing nostrud
                proident non
              </p>
            </div>
            <div className='box p-2 bg-slate-600 shadow'>
              <img
                src={Proyek3}
                alt='Proyek Image'
                className='w-full h-[220px]'
              />
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>
                Proyek 3
              </h3>
              <p className='text-white text-base/loose'>
                tempor dolore nostrud esse reprehenderit id adipisicing nostrud
                proident non
              </p>
            </div>
            <div className='box p-2 bg-slate-600 shadow'>
              <img
                src={Proyek4}
                alt='Proyek Image'
                className='w-full h-[220px]'
              />
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>
                Proyek 4
              </h3>
              <p className='text-white text-base/loose'>
                tempor dolore nostrud esse reprehenderit id adipisicing nostrud
                proident non
              </p>
            </div>
            <div className='box p-2 bg-slate-600 shadow'>
              <img
                src={Proyek5}
                alt='Proyek Image'
                className='w-full h-[220px]'
              />
              <h3 className='text-xl font-bold text-white mt-6 mb-2'>
                Proyek 5
              </h3>
              <p className='text-white text-base/loose'>
                tempor dolore nostrud esse reprehenderit id adipisicing nostrud
                proident non
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
