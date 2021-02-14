import {Hero} from '../components/Hero';
import {Section} from '../components/Section';

export default function Home(props) {

  return (
    <div className="App">
      <Hero />
      <Section id='about'>
        <p>BetterCensus.com is a better way to get your census data. We focus on getting people what they need without a lot of hassle. With our tools you will be able to export excel files with just the data columns that you need, lookup what existing census codes mean and lookup what Geoid's mean. </p>
          <p>Our Goal is to create a more informed world and expand the access to Census data sets. We believe that making this information easier and what to hear from you about your project to see what improvements we could make.</p>
      </Section>
     <Section id='pricing'>
       <div className='flex center'>
         <div className='card m-20'>
           <h3 className=''>Advocate</h3>
           <p>Export a Counties worth of data at a time with up to five census fields with limited downloads a month</p>
           <h3 className=''>$0 Monthly</h3>

         </div>
         <div className='card m-20'>
            <h3 className=''>Analyst</h3>
            <p>Unlimited downloads a month with multiple export types and access to precalculated fields</p>
            <h3 className=''>$10 Monthly</h3>
         </div>
         <div className='card m-20'>
            <h3 className=''>Developer</h3>
            <p>All the perks of an Analyst AND access to layers in ArcGIS Online</p>
            <h3 className=''>$20 Monthly</h3>
         </div>
       </div>
     </Section>
     <Section id='tools'>
       <h3>Census Field Lookup</h3>
       <h3>About Geoid's</h3>
       <h3>Data Download Tool</h3>
     </Section>
    </div>
  )
}
