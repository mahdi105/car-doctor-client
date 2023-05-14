
import slideImg1 from '/images/images/banner/1.jpg'
import slideImg2 from '/images/images/banner/2.jpg'
import slideImg3 from '/images/images/banner/3.jpg'
import slideImg4 from '/images/images/banner/4.jpg'

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full max-h-[600px] rounded-md">
                    <img src={slideImg1} className="w-full rounded-md" />
                    <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full p-24 rounded-md">
                        <div>
                            <div className='w-1/2'>
                                <h1 className='font-extrabold text-[60px] text-white mb-4'>Affordable Price For Car Servicing</h1>
                                <p className='text-white mb-4'>There are many variations of passages of  available, but the majority have suffered alteration.</p>
                                <div className='flex gap-2'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline btn-warning">Warning</button>
                                </div>
                            </div>
                            <div className='absolute bottom-4 right-4'>
                                <a href="#slide4" className="btn btn-circle mr-2 hover:bg-orange-600">❮</a>
                                <a href="#slide2" className="btn btn-circle hover:bg-orange-600">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full max-h-[600px] rounded-md">
                    <img src={slideImg2} className="w-full rounded-md" />
                    <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full p-24 rounded-md">
                        <div>
                            <div className='w-1/2'>
                                <h1 className='font-extrabold text-[60px] text-white mb-4'>Affordable Price For Car Servicing</h1>
                                <p className='text-white mb-4'>There are many variations of passages of  available, but the majority have suffered alteration.</p>
                                <div className='flex gap-2'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline btn-warning">Warning</button>
                                </div>
                            </div>
                            <div className='absolute bottom-4 right-4'>
                                <a href="#slide1" className="btn btn-circle mr-2 hover:bg-orange-600">❮</a>
                                <a href="#slide3" className="btn btn-circle hover:bg-orange-600">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full max-h-[600px] rounded-md">
                    <img src={slideImg3} className="w-full rounded-md" />
                    <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full p-24 rounded-md">
                        <div>
                            <div className='w-1/2'>
                                <h1 className='font-extrabold text-[60px] text-white mb-4'>Affordable Price For Car Servicing</h1>
                                <p className='text-white mb-4'>There are many variations of passages of  available, but the majority have suffered alteration.</p>
                                <div className='flex gap-2'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline btn-warning">Warning</button>
                                </div>
                            </div>
                            <div className='absolute bottom-4 right-4'>
                                <a href="#slide2" className="btn btn-circle mr-2 hover:bg-orange-600">❮</a>
                                <a href="#slide4" className="btn btn-circle hover:bg-orange-600">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full max-h-[600px] rounded-md">
                    <img src={slideImg4} className="w-full rounded-md" />
                    <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] w-full p-24 rounded-md">
                        <div>
                            <div className='w-1/2'>
                                <h1 className='font-extrabold text-[60px] text-white mb-4'>Affordable Price For Car Servicing</h1>
                                <p className='text-white mb-4'>There are many variations of passages of  available, but the majority have suffered alteration.</p>
                                <div className='flex gap-2'>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-outline btn-warning">Warning</button>
                                </div>
                            </div>
                            <div className='absolute bottom-4 right-4'>
                                <a href="#slide3" className="btn btn-circle mr-2 hover:bg-orange-600">❮</a>
                                <a href="#slide1" className="btn btn-circle hover:bg-orange-600">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;