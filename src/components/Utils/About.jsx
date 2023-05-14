import aboutperson from '/images/images/about_us/person.jpg'
import aboutparts from '/images/images/about_us/parts.jpg'

const About = () => {
    return (
        <section className='grid gird-cols-1 md:grid-cols-2 gap-5 py-[150px]'> 
            <div className='relative'>
                <img className='w-3/4 shadow-md rounded-md' src={aboutperson} alt="" />
                <img className='w-1/2 border-8 border-white shadow-md rounded-md absolute transform translate-x-3/4 -translate-y-1/2' src={aboutparts} alt="" />
            </div>
            <div>
                <span className='text-orange-600 mb-4'>About Us</span>
                <h2 className='font-extrabold text-5xl mb-3'>We are qualified & of experience in this field</h2>
                <div className='mb-5'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <button className="btn btn-warning">Warning</button>
            </div>
        </section>
    );
};

export default About;