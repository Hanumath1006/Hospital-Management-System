"use client";
 
import Image from "next/image";
import img from '../../public/sficon.png';
import img6 from '../../public/ujwal.jpeg';
import Hero from "../components/ui/Hero";

 
const Home = () => {
 
  return (
    <div className="flex flex-col">
 
 <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      About Us
      </header>

      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingTop: '30px',
        paddingBottom: '20px' // You can adjust the value to your preference
      }}>
          Hospital Management System
      </h1>

      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        //paddingTop: '20px',
        //paddingBottom: '20px' // You can adjust the value to your preference
      }}>
          Your Partner in Health and Wellness
      </h1>

        
      <Hero
        imageUrl={img}
      />


      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingTop: '50px',
        paddingBottom: '50px' // You can adjust the value to your preference
      }}>
          Meet the Team 
      </h1>


      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ width: '30%', textAlign: 'center', margin: '0 1%' }}>
      <Image src={img6} alt="Ujwal" style={{ width: '300px', height: '400px', objectFit: 'cover', paddingTop:20 }} />
      <h6 style={{
        fontSize: '16px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingBottom: '20px',
        fontWeight: 400 // You can adjust the value to your preference
      }}>
          Name 1
      </h6>
      <h6 style={{
        fontSize: '16px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingBottom: '20px',
        fontWeight: 400 // You can adjust the value to your preference
      }}>
        Title 1

      </h6>
    <p style={{ textAlign: 'justify', paddingBottom: '20px'  }} > Description 1 
    </p>
  </div>
  <div style={{ width: '30%', textAlign: 'center', margin: '0 1%' }}>

    
    <h3 style={{
        fontSize: '18px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingTop: '20px',
        fontWeight: 500 // You can adjust the value to your preference
      }}>
          Name 2
      </h3>
      <h6 style={{
        fontSize: '16px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingBottom: '20px',
        fontWeight: 400 // You can adjust the value to your preference
      }}>
          Title 2
      </h6>
    <p style={{ textAlign: 'justify', paddingBottom: '20px'  }}>Description 2 .</p>
  </div>
  <div style={{ width: '30%', textAlign: 'center', margin: '0 1%' }}>
   
    <h3 style={{
        fontSize: '18px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingTop: '20px',
        fontWeight: 500 // You can adjust the value to your preference
      }}>
          Name 3
      </h3>
      <h6 style={{
        fontSize: '16px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingBottom: '20px',
        fontWeight: 400 // You can adjust the value to your preference
      }}>
          title 3 
      </h6>
    <p style={{ textAlign: 'justify', paddingBottom: '20px'  }}>
    Description 3
      </p>
  </div>
  <div style={{ width: '30%', textAlign: 'center', margin: '0 1%' }}>
    <Image src={img6} alt="Ujwal" style={{ width: '300px', height: '400px', objectFit: 'cover', paddingTop:20 }} />
    <h3 style={{
        fontSize: '18px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingTop: '20px',
        fontWeight: 500 // You can adjust the value to your preference
      }}>
          Hanumath Ponnaluri
      </h3>
      <h6 style={{
        fontSize: '16px',
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        paddingBottom: '20px',
        fontWeight: 400 // You can adjust the value to your preference
      }}>
          Frontend Developer
      </h6>
    <p style={{ textAlign: 'justify', paddingBottom: '40px'  }}>
    Say Hello to Hanumath! As a computer science student 
    at the University of Texas at Arlington, Hanumath has a deep 
    passion for front-end development and brings a wealth of experience in 
    designing user interfaces and prototypes. He contributed to 
    integrating RFID systems within the project. Hanumath 
    firmly believes that the principles of computer science can be universally applied, 
    and that user-friendly design is as crucial in medical applications as in any other 
    software context.
      </p>
  </div>

  

 
</div>
 
    </div>
 
 
  
  );
}
 
export default Home;