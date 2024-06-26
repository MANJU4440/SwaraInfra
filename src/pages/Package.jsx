
import '../stylesheet/package/package.css'; // Import CSS file
import packages from '../assets/PackagesIMG/packages.png';
import note from '../assets/PackagesIMG/note.png';
import downloadtext from '../assets/PackagesIMG/downloadtext.png';
import requirement from '../assets/PackagesIMG/requirement.png';

function toggleNested(event, nestedId) {
  event.preventDefault(); // Prevent the default link behavior

  var nestedContent = document.getElementById(nestedId);
  nestedContent.classList.toggle('active'); // Toggle the 'active' class
}

function Package() {
  function scrollToClick() {
    const clickElement = document.querySelector('.totalClick_sec');
    clickElement.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <section className="section1">
        <div className="sec1_div1">
          <p className="our">OUR</p>
          <h1>BUILDING <span> PACKAGES</span></h1>
        </div>
      </section>
      <section className="section2">
        <div className="sec2_div1">
          <p>
            Get clear ideas of what raw materials to be used to build your home.
            <br />
            <span>(*The below Prices are applicable to  Hubballi and Dharwad location Only.)</span>
          </p>
        </div>
      </section>
      <section className="contentpackage">
        <div className="section-boxes">
          <div className="box" onClick={() => scrollToClick()} >
            <p >PREMIUM</p>
            <p >Rs.2170/*- Sq.Ft</p>
          </div>
          <div className="box" onClick={() => scrollToClick()}>
            <p>PREMIUM +</p>
            <p>Rs.2399/*- Sq.Ft</p>
          </div>
          <div className="box" onClick={() => scrollToClick()}>
            <p>LUXURY</p>
            <p>Rs.2620/*- Sq.Ft</p>
          </div>
          <div className="box" onClick={() => scrollToClick()} >
            <p>LUXURY +</p>
            <p>Rs.2799/*- Sq.Ft</p>
          </div>
        </div>
        <div className="section-boxes">
          <div className="box" onClick={() => scrollToClick()} >
            <p>FREEDOM</p>
            <p>Rs.2499/*- Sq.Ft</p>
          </div>
          <div className="box" onClick={() => scrollToClick()} >
            <p>FREEDOM+</p>
            <p>Rs.2650/*- Sq.Ft</p>
          </div>
          <div className="box" onClick={() => scrollToClick()}>
            <p>THE ONE+</p>
            <p>Rs.3399/*- Sq.Ft</p>
          </div>
        </div>
        <section className="totalClick_sec">
          <div className="total_click">
            <div className="abovecont">
              <h4>PREMIUM</h4>
              <h3>Rs.2170/*- Sq.Ft</h3>
            </div>
            <div className="click">
              <form action="#">
                <div className="list">
                  <h1>Premium Details..</h1>
                  <ul>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design1')}>Design and Drawings</a>
                      <ul id="Design1" className="nested">
                        <li>2D-Floor Plans</li>
                        <li>3D Elevation Designs</li>
                        <li>Design Development-A maximum of 3 drawing revisions</li>
                        <li>Basic Internal Isometric Views of the floor plan</li>
                        <li>Visual site survey & drawing on the basis of measurement provided by client</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design2')}>Civil Construction</a>
                      <ul id="Design2" className="nested">
                        <li>Floor to floor height – 10”</li>
                        <li>Steel (500 TMT Bars)-Bhuwalka/Kamadhenu</li>
                        <li>Cement (Grade 43 or 53 as needed)-Penna/Dalmia</li>
                        <li>UG Sump built with solid blocks of 8” thickness & waterproof plastered 7000 lts</li>
                        <li>Concrete – M20 grade RMC</li>
                        <li>Solid Block walls – 6” & 4” thickness</li>
                        <li>Internal, external and toilet wall-column joints plastering with chicken mesh</li>
                        <li>Waterproofing compound-Dr.Fixit/FOSROC for external walls</li>
                        <li>Cement based waterproofing, waterproofing in terrace to avoid leakage</li>
                        <li>Steel/concrete lofts-Not included</li>
                        <li>Ledge wall for incorporating concealed sanitary parts – Included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design3')}>Architectural Design</a>
                      <ul id="Design3" className="nested">
                        <li>Working drawing for all works</li>
                        <li>Schedule of Openings</li>
                        <li>Section and Elevation</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design4')}>Interior Design</a>
                      <ul id="Design4" className="nested">
                      <li>Complete 3D design interiors, only if executed by swaraInfra.</li>
                        <li>2D Furniture layout</li>
                        <li>Assisting in interior procurement</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design5')}>Structural Design</a>
                      <ul id="Design5" className="nested">
                        <li>Structural Design as per IS Code.</li>
                        <li>Good for construction drawings</li>
                        <li>Soil Test report</li>
                        <li>Design Analysis Report</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design6')}>MEP Design</a>
                      <ul id="Design6" className="nested">
                        <li>Electrical Layout</li>
                        <li>Plumbing Water Line Layout</li>
                        <li>Plumbing Drainage Line Layout</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design7')}>Government Liaison Assistance</a>
                      <ul id="Design7" className="nested">
                        <li>Construction Plan Sanction</li>
                        <li>Temporary Electricity connection</li>
                        <li>Permanent electrical connection</li>
                        <li>Water connection</li>
                        <li>Sewage connection</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design8')}>Flooring and Wall tilling</a>
                      <ul id="Design8" className="nested">
                        <li>Kitchen, Dining & Bedrooms : Vitrified Tiles – Rs.60/- per Sqft. Maximum tile size is 2’ X 2’.</li>
                        <li>Living Room, Foyer : Marble finished vitrified tiles -Rs.70/- per Sqft</li>
                        <li>Staircase : Granite – Rs.100/- per Sqft</li>
                        <li>Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.55/- per Sqft</li>
                        <li>Toilet Floor : Anti-skid tiles – Rs.50/- per Sqft</li>
                        <li>Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.45/- per Sqft</li>
                        <li>Parking Area, setback area (if charged) tiles – Rs.35/- per Sqft</li>
                        <li>Kitchen counter top : Granite – Rs.120/- per Sqf</li>
                        <li>Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.50/- per Sqft</li>
                        <li>Puja Room- Wall tiling – Not Included</li>
                        <li>Puja Room- Granite slab- Rs-100/- per Sqft</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design9')}>Electrical</a>
                      <ul id="Design9" className="nested">
                        <li>Electrical – Light & power points shall be provided as per standards</li>
                        <li>Geyser points – All bathrooms</li>
                        <li>AC provision – Any 2 rooms</li>
                        <li>Conduits – Good quality, hidden in slabs and walls</li>
                        <li>Fire proof copper wire – Anchor make</li>
                        <li>External electrification is included</li>
                        <li>Switches & Plates – Anchor-Roma make</li>
                        <li>A main DB & MCB – IndoAsian/Siemens/Equivalent make</li>
                        <li>Electric Car charging point – Parking area</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design10')}>Painting</a>
                      <ul id="Design10" className="nested">
                        <li>Internal wall & ceiling : 2 coats wall putty + 1 coat primer coat + 2 coats Tractor emulsion paint</li>
                        <li>External walls : Primer coat + ace weather proof paint</li>
                        <li>Brand : Asian/Berger/Dulux</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design11')}>Plumbing</a>
                      <ul id="Design11" className="nested">
                        <li>Water supply system – Internal & External</li>
                        <li>Connection for water inlet from corporation</li>
                        <li>External sewage system – Inspection chambers & sewage outlet to site boundary</li>
                        <li>Class B CPVC pipes – Ashirwad/Astral make</li>
                        <li>Solar & Geyser Provision</li>
                        <li>Rain water harvesting facility – Ground water recharge</li>
                        <li>PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 6.5 per litre</li>
                        <li>Plumbing – GI Chamber covers shall be provided for IC</li>
                        <li>Separate sewage & drainage lines</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design12')}>Fixtures</a>
                      <ul id="Design12" className="nested">
                        <li>Kitchen sink : SS/Granite/Carysil Kitchen accessories – Rs. 6,000/- per kitchen</li>
                        <li>CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.22,000/- per bathroom attached toilet and Rs.8,000/- per powder room – if applicable to be added.</li>
                        <li>Electrical Fixtures – Not included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design13')}>Doors</a>
                      <ul id="Design13" className="nested">
                        <li>Main, Puja Door – Teak Wood frame & shutter including hardware – Rs.25,000/- per door</li>
                        <li>Internal Door – Sal wood frame & flush shutter including hardware – Rs.9,000/- per door</li>
                        <li>Internal door frames & shutter – Painted (only)</li>
                        <li>Main, Puja Door – Polished with melamine spray</li>
                        <li>Bathroom Door – Frame & shutter including hardware – Rs.8,000/- per door</li>
                        <li>Door Hardware – Ozone/Europa/Dorma make</li>
                        <li>Door Hinges – SS hinges</li>
                        <li>Door & Door Frame cost – Inclusive of planing, rebate, transportation etc.</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design14')}>Windows</a>
                      <ul id="Design14" className="nested">
                        <li>UPVC windows – 5mm clear glass with MS Grills</li>
                        <li>Basic price : uPVC with MS grill – Rs.510/- per Sqft (If required, upgrade to wooden windows can be made at an additional cost per Sqft, measured on built-up area. The additional cost can be calculated based on the wooden material chosen by the Client.)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design15')}>Fabrication</a>
                      <ul id="Design15" className="nested">
                        <li>Main Gate: Designer Gate– Rs. 350/- per Sqft</li>
                        <li>External staircase & balcony railing : MS Railing – Rs. 550/- per Rft</li>
                        <li>Internal staircase railing : SS Railing – Rs.240/- per Sqft</li>
                        <li>Utility grill isn’t included in the package</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design16')}>Compound Wall</a>
                      <ul id="Design16" className="nested">
                        <li>Compound wall – Solid block walls of 4” thickness to suit the elevation.</li>
                        <li>Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM</li>
                        <li>Height of Compound wall – 5 Feet from Plinth Levels</li>
                        <li>Compound wall – Plastered & Painted</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design17')}>Elevation</a>
                      <ul id="Design17" className="nested">
                        <li>This proposal includes aethetically pleasing elevation.</li>
                        <li>A 3D elevation is presented for client to choose from & design further</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design18')}>Exclusions & Incidentals</a>
                      <ul id="Design18" className="nested">
                        <li>A design if needed to be modified more than thrice shall be charged for accordingly</li>
                        <li>Government fees for the liaison bodies to be paid directly by the client</li>
                        <li>The complete fee payment for plan sanction in Panchayat limits need to be borne by client</li>
                        <li>Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly</li>
                        <li>Hard rock/soft rock excavation, if it arises shall be charged for accordingly</li>
                        <li>Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actua</li>
                        <li>Basic price of Cement is Rs.380/- per bag & Steel is Rs.60,000/- per MT. Any increase in these prices shall be charged accordingly</li>
                        <li>Percentage of opening for doors & windows – 20% of built up area Maximum</li>
                        <li>Any work not mentioned within this package or outside the site boundary shall be charged for accordingly</li>
                        <li>One point of Electricity & water needs to be provided by the client free of cost to facilitate construction</li>
                        <li>SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions</li>
                        <li>If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals</li>
                        <li>A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client</li>
                        <li>Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally</li>
                        <li>NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design19')}>Payment Structure</a>
                      <ul id="Design19" className="nested">
                        <li>A customized payment schedule will be shared based on the project specifications.</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'Design20')}>Warranty and Guarantee</a>
                      <ul id="Design20" className="nested">
                        <li>Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years</li>
                        <li>Guarantee & warranty is provided on Stamp paper</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="total_click">
            <div className="abovecont">
              <h4>PREMIUM+</h4>
              <h3>Rs.2399/*- Sq.Ft</h3>
            </div>
            <div className="click">
              <form action="#">
                <div className="list">
                  <h1>Premium+ Details..</h1>
                  <ul>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D1')}>Design and Drawings</a>
                      <ul id="D1" className="nested">
                        <li>2D-Floor Plans</li>
                        <li>3D Elevation Designs</li>
                        <li>Design Development-A maximum of 3 drawing revisions</li>
                        <li>Internal Isometric Views all rooms, open areas etc</li>
                        <li> Visual site survey & drawing on the basis of measurement provided by client</li>
                        <li>Site survey by surveyor with instruments & drawing on the basis of survey</li>
                        <li>Basic VR of the 3D model</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D2')}>Civil Construction</a>
                      <ul id="D2" className="nested">
                        <li>Floor to floor height-9'</li>
                        <li>Steel (500 TMT Bars)-Bhuwalka/Kamadhenu</li>
                        <li>Cement (Grade 43 or 53 as needed)-Penna/Dalmia</li>
                        <li>UG Sump built with solid blocks of 6” thickness & waterproof plastered 7000 lts</li>
                        <li>Concrete – M20 grade RMC</li>
                        <li>Block walls-6” & 4” thickness</li>
                        <li>Internal, external and toilet wall-column joints plastering with chicken mesh</li>
                        <li>Waterproofing compound-Dr.Fixit/FOSROC for external walls</li>
                        <li>Cement based waterproofing, waterproofing in terrace to avoid leakage</li>
                        <li>Steel/concrete lofts-Not included</li>
                        <li>Ledge wall for incorporating concealed sanitary parts – Included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D3')}>Architectural Design</a>
                      <ul id="D3" className="nested">
                        <li>Working drawing for all works</li>
                        <li>Schedule of Openings</li>
                        <li>Section and Elevation</li>
                        <li>Detailed portfolio of the home post handover</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D4')}>Interior Design</a>
                      <ul id="D4" className="nested">
                      <li>Complete 3D design interiors, only if executed by swaraInfra. </li>
                        <li>2D Furniture layout</li>
                        <li>Assisting in interior procurement</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D5')}>Structural Design</a>
                      <ul id="D5" className="nested">
                        <li>Structural Design as per IS Code.</li>
                        <li>Good for construction drawings</li>
                        <li>Soil Test report</li>
                        <li>Overlapped Structural, Architectural & MEP Drawings</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D6')}>MEP Design</a>
                      <ul id="D6" className="nested">
                        <li>Electrical Layout</li>
                        <li>Plumbing Water Line Layout</li>
                        <li>Plumbing Drainage Line Layout</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D7')}>Government Liaison Assistance</a>
                      <ul id="D7" className="nested">
                        <li>Construction Plan Sanction</li>
                        <li>Permanent electrical connection</li>
                        <li>Temporary Electricity connection</li>
                        <li>Water connection</li>
                         <li>Sewage connection</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D8')}>Flooring and Wall tilling</a>
                      <ul id="D8" className="nested">
                        <li>Kitchen, Dining & Bedrooms : Vitrified Tiles – Rs.75/- per Sqft. Maximum tile size is 2’ X 2’</li>
                        <li>Living Room, Foyer : Marble finished vitrified tiles -Rs.85/- per Sqft 4′ X 2′</li>
                        <li>Staircase : Granite – Rs.115/- per Sqft</li>
                        <li>Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.60/- per Sqft</li>
                        <li>Toilet Floor : Anti-skid tiles – Rs.60/- per Sqft</li>
                        <li>Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.55/- per Sqft</li>
                        <li>Parking Area : Parking tiles – Rs.55/- per Sqf</li>
                        <li>Kitchen counter top : Granite – Rs.140/- per Sqf</li>
                        <li>Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.65/- per Sqft</li>
                        <li>Puja Room- Wall tiling – Not Included</li>
                        <li>Puja Room- Granite slab- Rs-115/- per Sqf</li>
                        <li>Setback area tiles of Rs. 55 per sqft will be provided. (if setback area is charged)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D9')}>Electrical</a>
                      <ul id="D9" className="nested">
                        <li>Electrical – Light & power points shall be provided as per designs & to suit clients requirement</li>
                        <li>Geyser points – All bathrooms</li>
                        <li>AC provision – In all rooms</li>
                        <li>Conduits – Good quality, hidden in slabs and walls</li>
                        <li>Fire proof copper wire – Finolex or Polycab</li>
                        <li>External electrification is included</li>
                        <li>Switches & Plates – Anchor-Roma make</li>
                        <li>A main DB & MCB – IndoAsian/Siemens/Equivalent make</li>
                        <li>Electric Car charging point – Parking area</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D10')}>Painting</a>
                      <ul id="D10" className="nested">
                        <li>Internal wall & ceiling – 2 coats wall putty + 1 coat primer coat + 2-3 coatlatest Tractor shine emulsion paint</li>
                        <li>External walls : Primer coat + Apex weather proof pain</li>
                        <li>Brand : Asian/Berger/Dulux</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D11')}>Plumbing</a>
                      <ul id="D11" className="nested">
                        <li>Water supply system – Internal & External</li>
                        <li>Connection for water inlet from corporation</li>
                        <li>External sewage system – Inspection chambers & sewage outlet to site boundary</li>
                        <li>Class B CPVC pipes – Ashirwad/Astral make</li>
                        <li>Solar & Geyser Provision</li>
                        <li>Rain water harvesting facility – Ground water recharge</li>
                        <li>PVC Overhead Tank – Ganga or Equivalent make of basic price Rs 7.25 per litre</li>
                        <li>Plumbing – GI Chamber covers shall be provided for IC</li>
                        <li>Separate sewage & drainage lines</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D12')}>Fixtures</a>
                      <ul id="D12" className="nested">
                        <li>Kitchen sink : SS/Granite/Carysil – Rs. 9,000/- per kitchen</li>
                        <li>CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.27,000/- per bathroom attached toilet and Rs.10,000/- per powder room – if applicable to be added.</li>
                        <li>Electrical Fixtures – Not included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D13')}>Doors</a>
                      <ul id="D13" className="nested">
                        <li>Main, Puja Door – Teak Wood frame & shutter including hardware – Rs.30,000/- per door</li>
                        <li>Internal Door – Sal wood frame & flush shutter including hardware – Rs.11,000/- per door</li>
                        <li>Internal door frames & shutter – Painted (only)</li>
                        <li>Main, Puja Door – Polished with melamine spray</li>
                        <li>Bathroom Door – Frame & shutter including hardware – Rs.8,000/- per doo</li>
                        <li>Door Hardware – Ozone/Europa/Dorma make</li>
                        <li>Door Hinges – SS hinges</li>
                        <li>Door & Door Frame cost – Inclusive of planing, rebate, transportation etc</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D14')}>Windows</a>
                      <ul id="D14" className="nested">
                        <li>UPVC windows – 5mm clear glass with MS Grills</li>
                        <li>Basic price : uPVC with MS grill – Rs.540 per Sqft (If required, upgrade to wooden windows can be made at an additional cost per Sqft, measured on built-up area. The additional cost can be calculated based on the wooden material chosen by the Client.)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D15')}>Fabrication</a>
                      <ul id="D15" className="nested">
                        <li>Main Gate: Designer Gate– Rs. 400/- per Sqft</li>
                        <li>External staircase & balcony railing : MS Railing – Rs. 600/- per Rft</li>
                        <li>Internal staircase railing : SS Railing – Rs.900/- per Rft</li>
                        <li>Utility grill isn’t included in the package</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D16')}>Compound Well</a>
                      <ul id="D16" className="nested">
                        <li>Compound wall – Solid block walls of 4” thickness to suit the elevation (If charged)</li>
                        <li>Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM</li>
                        <li>Height of Compound wall – 5 Feet from Plinth Levels</li>
                        <li>Compound wall – Plastered & Painted</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D17')}>Elevation</a>
                      <ul id="D17" className="nested">
                        <li>This proposal includes aethetically pleasing elevation</li>
                        <li>A 3D elevation is presented for client to choose from & design further</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D18')}>Exclusions & Incidentals</a>
                      <ul id="D18" className="nested">
                        <li>A design if needed to be modified more than thrice shall be charged for accordingly</li>
                        <li>Government fees for the liaison bodies to be paid directly by the client</li>
                        <li>The complete fee payment for plan sanction in Panchayat limits need to be borne by client</li>
                        <li>Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly</li>
                        <li>Hard rock/soft rock excavation, if it arises shall be charged for accordingly</li>
                        <li>Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual</li>
                        <li>Basic price of Cement is Rs.380/- per bag & Steel is Rs.60,000/- per MT. Any increase in these prices shall be charged accordingly</li>
                        <li>Percentage of opening for doors & windows – 20% of built up area Maximum</li>
                        <li>Any work not mentioned within this package or outside the site boundary shall be charged for accordingly</li>
                        <li>One point of Electricity & water needs to be provided by the client free of cost to facilitate construction</li>
                        <li>If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals</li>
                        <li>A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client</li>
                        <li>Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally</li>
                        <li>SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions</li>
                        <li>NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D19')}>Payment Structure</a>
                      <ul id="D19" className="nested">
                        <li>A customized payment schedule will be shared based on the project specifications</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'D20')}>Warranty and Guarantee</a>
                      <ul id="D20" className="nested">
                        <li>Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years</li>
                        <li>Guarantee & warranty is provided on Stamp paper</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="total_click">
            <div className="abovecont">
              <h4>LUXURY</h4>
              <h3>Rs.2620/*- Sq.Ft</h3>
            </div>
            <div className="click">
              <form action="#">
                <div className="list">
                  <h1>Luxury Details..</h1>
                  <ul>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B1')}>Design and Drawings</a>
                      <ul id="B1" className="nested">
                        <li>Premium 2D & 3D – Floor Plans</li>
                        <li>Luxury 3D Elevation Designs of all views</li>
                        <li>Design Development – A maximum of 40 drawing revisions</li>
                        <li>Internal Isometric Views all rooms, open areas etc & detailed renders for each segment of the home for better understanding of the design</li>
                        <li> Detailed Landscaping design</li>
                        <li>3D Walkthrough of the home along with internal & external walkthrough</li>
                        <li>Hands on isometric 3D model of the home with separate floors</li>
                        <li>Site survey by surveyor with instruments & drawing on the basis of survey</li>
                        <li>VR for the 3D Walkthrough of the home along with internal & external walkthrough</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B2')}>Civil Construction</a>
                      <ul id="B2" className="nested">
                        <li>Floor to floor height – 10’6″</li>
                        <li>Steel (500 TMT bars) – JSW/SAIL/Vizag</li>
                        <li>Cement (Grade 53) – ACC/ Ultratech</li>
                        <li>UG Sump built with RCC & waterproof plastered 8000lts</li>
                        <li>Concrete – M25 grade</li>
                        <li>Machine cut solid Block walls – 6” & 4” thickness of APCO/ Sonika/ equivalent</li>
                        <li>Internal courtyards, skylights other designer architectural elements are included</li>
                        <li>Internal, external and toilet wall – column joints plastering with chicken mesh</li>
                        <li>Waterproofing compound – Dr.Fixit/FOSROC for external walls</li>
                        <li>Crystalline waterproofing, Cinder filling in sunken toilets, Heat & Waterproofing in Terrace</li>
                        <li>Steel/concrete lofts – Not Included</li>
                        <li>Ledge wall for incorporating concealed sanitary parts is included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B3')}>Architectural Design</a>
                      <ul id="B3" className="nested">
                        <li>Working drawing for all works</li>
                        <li>Schedule of Openings</li>
                        <li>Section and Elevation</li>
                        <li>Detailed portfolio of the home post handover</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B4')}>Interior Design</a>
                      <ul id="B4" className="nested">
                      <li>Complete 3D design interiors, only if executed by swaraInfra. </li>
                        <li>2D Furniture layout</li>
                        <li>Assisting in interior procurement</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B5')}>Structural Design</a>
                      <ul id="B5" className="nested">
                        <li>Structural Design as per IS Code.</li>
                        <li>Good for construction drawings</li>
                        <li>Soil Test report</li>
                        <li>Overlapped Structural, Architectural & MEP Drawings</li>
                        <li>3D stuctural drawings & Design Analysis Report</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B6')}>MEP Design</a>
                      <ul id="B6" className="nested">
                        <li>Electrical Layout</li>
                        <li>Plumbing Water Line Layout</li>
                        <li>Plumbing Drainage Line Layout</li>
                        <li>Deatiled HVAC design</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B7')}>Government Liaison Assistance</a>
                      <ul id="B7" className="nested">
                        <li>Construction Plan Sanction</li>
                        <li>Permanent electrical connection</li>
                        <li>Temporary Electricity connection</li>
                        <li>Water connection</li>
                         <li>Sewage connection</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B8')}>Flooring and Wall tilling</a>
                      <ul id="B8" className="nested">
                        <li>Kitchen & Bedrooms – Vitrified Tiles – Rs.80/- per Sqft</li>
                        <li>Main Living Room, Dining – Italian Marble/Premium Finished Vitrified tiles of 4’x8’ dimension -Rs.400/- per Sqf</li>
                        <li>Staircase Area granite – Rs 135 (Only granite)</li>
                        <li>Balcony, Sit-out, Passage & other common Areas – Anti-skid tiles – Rs.65/- per Sqft</li>
                        <li> Toilet Floor – Anti-skid tiles – Rs.70/- per Sqft</li>
                        <li>Toilet Wall Dado (Full height) – Light & Highlighting tiles – Rs.65/- per Sqft</li>
                        <li>Parking Area – Parking tiles/Designer Pavers – Rs.55/- per Sqft</li>
                        <li>Kitchen counter top – Granite – Rs.150/- per Sqft</li>
                        <li>Kitchen Wall Dado (Up to 2’ above counter) – Backsplash tiles – Rs.60/- per Sqft</li>
                        <li>Puja Room- Wall tiling – Full height – Rs 65 per Sqft</li>
                        <li>Puja Room- Granite slab- Rs-100/- per Sqft</li>
                        <li>No limitation of tile size</li>
                        <li> Tile grouting with spacer joint & with epoxy grout in bathrooms</li>
                        <li>Setback area tiles of 45 per sqft will be provided. (if setback area is charged)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B9')}>Electrical</a>
                      <ul id="B9" className="nested">
                        <li>Conduits – Good quality, hidden in slabs and walls</li>
                        <li>Fire retardant copper wire – Havells</li>
                        <li>AC provision – In all rooms</li>
                        <li>Switches & Plates – Legrand Britzy or equivalent make</li>
                        <li>Fire proof copper wire – Finolex or Polycab</li>
                        <li>External electrification is included</li>
                        <li>Switches & Plates – Anchor-Roma make</li>
                        <li>A main DB & MCB – IndoAsian/Siemens/Equivalent make</li>
                        <li>Electric Car charging point – Parking area</li>
                        <li>Provision for home automation is included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B10')}>Painting</a>
                      <ul id="B10" className="nested">
                        <li>Internal wall & ceiling : 2 coat wall putty + 1 coat primer coat + 2 Premium Emulsion paint</li>
                        <li> External walls – primer coat + Apex weather proof paint</li>
                        <li>Brand – Asian/Berger/Dulux</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B11')}>Plumbing</a>
                      <ul id="B11" className="nested">
                        <li>Water supply system – Internal & External Connection for water inlet from corporation</li>
                        <li>Separate bore well & corporation lines, if needed for Kitchens. If separate tank is needed, shall be charged on actuals</li>
                        <li>External sewage system – Inspection chambers & sewage outlet to site boundary</li>
                        <li>Class B CPVC pipes – Ashirwad/Astral make</li>
                        <li>Solar & Geyser Provision</li>
                        <li>Rain water harvesting facility – Ground water recharge</li>
                        <li>PVC Overhead Tank based on per capita consumption from Sintex</li>
                        <li>FRP Chamber covers shall be provided for IC</li>
                        <li>Separate sewage & drainage lines</li>
                        <li>Separate hot & cold water lines for sink</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B12')}>Fixtures</a>
                      <ul id="B12" className="nested">
                        <li>Kitchen sink & Accessories: SS/Granite/Carysil – Rs.15,000/- per kitchen</li>
                        <li>CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.35,000/- per bathroom attached toilet and Rs.15,000/- per  powder room</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B13')}>Doors</a>
                      <ul id="B13" className="nested">
                        <li>Main, Puja Door – Teak Wood frame & shutter including hardware – Rs.50,000/- per door</li>
                        <li>Internal Door – Sal wood frame & flush shutter including hardware – Rs.11,000/- per door</li>
                        <li>Internal door frames & shutter – Painted (only)</li>
                        <li>Main, Puja Door – Polished with melamine spray</li>
                        <li>Bathroom Door – Frame & shutter including hardware – Rs.9,000/- per door</li>
                        <li>Door Hardware – Ozone/Europa/Dorma make</li>
                        <li>Door Hinges – SS hinges</li>
                        <li>Door & Door Frame cost – Inclusive of planing, rebate, transportation etc</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B14')}>Windows</a>
                      <ul id="B14" className="nested">
                        <li>UPVC windows of Fenesta/ equivalent make– 5mm clear glass with MS Grills</li>
                        <li>Basic price: uPVC with MS grill or wooden including hardware – Rs.690/- per Sqft OR Wooden windows –  Sal wood  Frame (5”x3”)  &  Honne Shutter (1.5”  thickness) with clear glass and grill rods</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B15')}>Fabrication</a>
                      <ul id="B15" className="nested">
                        <li>Main Gate: Designer Gate with Shera boards – Rs. 450/- per Sqft</li>
                        <li>External staircase & balcony railing : MS Railing – Rs. 660/- per Rft</li>
                        <li>Internal staircase railing : SS Railing – Rs.1080/- per Rft</li>
                        <li>Utility grill is not included in the package</li>
                        <li>Waterproofing is included for Utility & balcony portions</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B16')}>Compound Well</a>
                      <ul id="B16" className="nested">
                        <li>Compound wall – Solid block walls of 4” thickness to suit the elevation (If charged)</li>
                        <li>Excavation, Foundation, PCC, Size Stone Masonry with DPC course above SSM</li>
                        <li>Height of Compound wall – 5 Feet from Plinth Levels</li>
                        <li>Compound wall – Plastered & Painted</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B17')}>Elevation</a>
                      <ul id="B17" className="nested">
                        <li>This proposal includes a luxurious elevation</li>
                        <li>A 3D elevation is presented for client to choose from & design further</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B18')}>Exclusions & Incidentals</a>
                      <ul id="B18" className="nested">
                        <li>A design if needed to be modified more than thrice shall be charged for accordingly</li>
                        <li>Government fees for the liaison bodies to be paid directly by the client</li>
                        <li>The complete fee payment for plan sanction in Panchayat limits need to be borne by client</li>
                        <li>Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly</li>
                        <li>Hard rock/soft rock excavation, if it arises shall be charged for accordingly</li>
                        <li>Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual</li>
                        <li>Basic price of Cement is Rs.380/- per bag & Steel is Rs.60,000/- per MT. Any increase in these prices shall be charged accordingly</li>
                        <li>Percentage of opening for doors & windows – 20% of built up area Maximum</li>
                        <li>Any work not mentioned within this package or outside the site boundary shall be charged for accordingly</li>
                        <li>One point of Electricity & water needs to be provided by the client free of cost to facilitate construction</li>
                        <li>If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals</li>
                        <li>A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client</li>
                        <li>Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally</li>
                        <li>SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions</li>
                        <li>NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B19')}>Payment Structure</a>
                      <ul id="B19" className="nested">
                        <li>A customized payment schedule will be shared based on the project specifications</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'B20')}>Warranty and Guarantee</a>
                      <ul id="B20" className="nested">
                        <li>Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years</li>
                        <li>Guarantee & warranty is provided on Stamp paper</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="total_click">
            <div className="abovecont">
              <h4>LUXURY+</h4>
              <h3>Rs.2799/*- Sq.Ft</h3>
            </div>
            <div className="click">
              <form action="#">
                <div className="list">
                  <h1>Luxury+ Details..</h1>
                  <ul>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C1')}>Design and Drawings</a>
                      <ul id="C1" className="nested">
                        <li>Premium 2D & 3D – Floor Plans</li>
                        <li>Luxury 3D Elevation Designs of all views</li>
                        <li>Design Development – A maximum of 40 drawing revisions</li>
                        <li>Internal Isometric Views all rooms, open areas etc & detailed renders for each segment of the home for better understanding of the design</li>
                        <li>Detailed Landscaping design</li>
                        <li>3D Walkthrough of the home along with internal & external walkthrough</li>
                        <li>Hands on isometric 3D model of the home with separate floors</li>
                        <li>Site survey by surveyor with instruments & drawing on the basis of survey</li>
                        <li>VR for the 3D Walkthrough of the home along with internal & external walkthrough including interior renders</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C2')}>Civil Construction</a>
                      <ul id="C2" className="nested">
                        <li>Floor to floor height – 11</li>
                        <li>Steel (500 TMT bars) – JSW/SAIL/Vizag</li>
                        <li>Cement (Grade 53) – ACC/ Ultratech</li>
                        <li>UG Sump built with RCC & waterproof plastered as per capita requirment</li>
                        <li>Concrete – M25 grade</li>
                        <li>Machine cut solid Block walls – 8” & 4” thickness of APCO/ Sonika/ equivalent</li>
                        <li>Internal, external and toilet wall – column joints plastering with chicken mesh using double washed M sand</li>
                        <li>Internal, external and toilet wall – column joints plastering with chicken mesh</li>
                        <li>Waterproofing compound – Dr.Fixit/FOSROC for external walls</li>
                        <li>Crystalline waterproofing, Cinder filling in sunken toilets, Heat & Waterproofing in Terrace</li>
                        <li>Steel/concrete lofts – Not Included</li>
                        <li>Ledge wall for incorporating concealed sanitary parts is included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C3')}>Architectural Design</a>
                      <ul id="C3" className="nested">
                        <li>Working drawing for all works</li>
                        <li>Schedule of Openings</li>
                        <li>Section and Elevation</li>
                        <li>Detailed portfolio of the home post handover</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C4')}>Interior Design</a>
                      <ul id="C4" className="nested">
                        <li>Complete 3D design interiors, only if executed by SwraInfra.</li>
                        <li>2D furniture layout</li>
                        <li>Assisting in interior procurement</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C5')}>Structural Design</a>
                      <ul id="C5" className="nested">
                        <li>Structural Design as per IS Code.</li>
                        <li>Good for construction drawings</li>
                        <li>Soil Test Report</li>
                        <li>Overalapped Structural, Architectural & MEP Drawings</li>
                        <li>3D stuctural drawings & Design Analysis Report</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C6')}>MEP Design</a>
                      <ul id="C6" className="nested">
                        <li>Electrical Layout</li>
                        <li>Plumbing Water Line Layout</li>
                        <li>Plumbing Drainage Line Layout</li>
                        <li>Deatiled HVAC design</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C7')}>Government Liaison Assistance</a>
                      <ul id="C7" className="nested">
                        <li>Construction Plan Sanction</li>
                        <li>Temporary Electricity connection</li>
                        <li>Permanent electrical connection</li>
                        <li>Water connection</li>
                        <li>Sewage connection</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C8')}>Flooring and Wall tilling</a>
                      <ul id="C8" className="nested">
                        <li>Kitchen & Bedrooms – Vitrified Tiles – Rs.90/- per Sqft</li>
                        <li>Main Living Room, Dining – Italian Marble/Premium Finished Vitrified tiles of 4’x8’ dimension -Rs.450/- per Sqf</li>
                        <li>Staircase Area granite – Rs 150 (Only granite)</li>
                        <li>Balcony, Sit-out, Passage & other common Areas – Anti-skid tiles – Rs.70/- per Sqft</li>
                        <li>Toilet Floor – Anti-skid tiles – Rs.75/- per Sqft</li>
                        <li>Toilet Wall Dado (Full height) – Light & Highlighting tiles – Rs.75/- per Sqft</li>
                        <li>Parking Area – Parking tiles/Designer Pavers – Rs.70/- per Sqft</li>
                        <li>Kitchen counter top – Granite – Rs.165/- per Sqft</li>
                        <li>Kitchen Wall Dado (Up to 2’ above counter) – Backsplash tiles – Rs.75/- per Sqft</li>
                        <li>Puja Room- Wall tiling – Full height – Rs 65 per Sqft</li>
                        <li>Puja Room- Granite slab- Rs-120/- per Sqft</li>
                        <li>No limitation of tile size</li>
                        <li>Tile grouting with spacer joint & with epoxy grout in bathrooms</li>
                        <li>Setback area tiles of 50 per sqft will be provided. (if setback area is charged)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C9')}>Electrical</a>
                      <ul id="C9" className="nested">
                        <li>Unlimited light and power points in good design sense</li>
                        <li>Conduits – Good quality, hidden in slabs and walls</li>
                        <li>Fire retardant and smoke proof copper wire – Havells</li>
                        <li>External electrification is included</li>
                        <li> Switches & Plates – Legrand Lyncus/myrius (Touch screen switch provision only)</li>
                        <li>A main DB & MCB – ABB/Schneider/Legrand make</li>
                        <li>Provision for home automation is included</li>
                        <li>AC provisions – in all rooms, living and dining</li>
                        <li>Electric Car charging point – Parking area</li>
                        <li>CCTV provision</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C10')}>Painting</a>
                      <ul id="C10" className="nested">
                        <li>Internal wall & ceiling : 3 coat wall putty + 1 coat primer coat + 2-3 coat Premium Emulsion paint</li>
                        <li> External walls – primer coat + Apex Ultima weather proof paint</li>
                        <li>Brand – Asian/Berger/Dulux</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C11')}>Piumbing</a>
                      <ul id="C11" className="nested">
                        <li>Water supply system – Internal & External Connection for water inlet from corporation</li>
                        <li>Separate bore well & corporation lines, if needed for Kitchens. If separate tank is needed, shall be charged on actuals</li>
                        <li>External sewage system – Inspection chambers & sewage outlet to site boundary</li>
                        <li>Class B CPVC pipes – Ashirwad/Astral make</li>
                        <li>Solar & Geyser Provision</li>
                        <li>Rain water harvesting facility – Ground water recharge</li>
                        <li>PVC Overhead Tank based on per capita consumption from Sintex</li>
                        <li>FRP Chamber covers shall be provided for IC</li>
                        <li>Separate sewage & drainage lines</li>
                        <li>Separate hot & cold water lines for sink</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C12')}>Fixtures</a>
                      <ul id="C12" className="nested">
                        <li>Kitchen sink & Accessories: SS/Granite/Carysil – Rs.22,000/- per kitchen</li>
                        <li>CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.40,000/- per bathroom attached toilet and Rs.15,000/- per  powder room</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C13')}>Doors</a>
                      <ul id="C13" className="nested">
                        <li>Main, Puja Door  –  Teak  Wood  frame  &  shutter  including  hardware – Rs.60,000/- per door</li>
                        <li>Internal Door – Sal wood frame & flush shutter including hardware – Rs.12,000/- per door</li>
                        <li>Internal door frames & shutter – Painted hand polished</li>
                        <li>Main, Puja Door – Polished with PU finish spray</li>
                        <li>Bathroom Door –  Frame  &  shutter  including  hardware –  Rs.10,000/- per door</li>
                        <li>Door Hardware – Ozone/Europa/Dorma make</li>
                        <li>Door Hinges – SS hinges</li>
                        <li>Door & Door  Frame  cost  –  Inclusive of planing, rebate, transportation etc</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C14')}>Windows</a>
                      <ul id="C14" className="nested">
                        <li>UPVC windows – 5mm clear glass with MS Grills</li>
                        <li>Basic price: uPVC with MS grill or wooden including hardware – Rs.770/- per Sqft OR Wooden windows –  Sal wood  Frame (5”x3”)  &  Honne Shutter (1.5”  thickness) with clear glass and grill rods</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C15')}>Fibrication</a>
                      <ul id="C15" className="nested">
                        <li>Main Gate: Designer Gate with Shera boards – Rs. 450/- per Sqft</li>
                        <li>External staircase & balcony railing : MS Railing – Rs. 660/- per Rft</li>
                        <li>Internal staircase railing : SS Railing – Rs.1080/- per Rft</li>
                        <li>Utility grill is not included in the package</li>
                        <li>Waterproofing is included for Utility & balcony portions</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C16')}>Compound Well</a>
                      <ul id="C16" className="nested">
                        <li>Compound wall – Solid block walls of 4” thickness to suit the elevation</li>
                        <li>Excavation, Foundation, PCC,  Size  Stone  Masonry  with  DPC  course above SSM</li>
                        <li>Height of Compound wall– 5 Ft above Plinth level</li>
                        <li>Compound wall – Plastered & Painted</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C17')}>Elevation</a>
                      <ul id="C17" className="nested">
                        <li>This proposal includes a luxurious elevation</li>
                        <li>A 3D elevation is presented for client to choose from & design further</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C18')}>Exclusions & Incidentals</a>
                      <ul id="C18" className="nested">
                        <li>A design if needed to be modified more than thrice shall be charged for accordingly</li>
                        <li> Government fees for the liaison bodies to be paid directly by the client</li>
                        <li>The complete fee payment for plan sanction in Panchayat limits need to be borne by client</li>
                        <li>Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly</li>
                        <li>Hard rock/soft rock excavation, if it arises shall be charged for accordingly</li>
                        <li>Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual</li>
                        <li>There is no basic price/ cap of steel or cement. However, in case there is huge fluctuation of over 45% of the average market price during the signing of the agreement the difference shall be charged in consultation with the client</li>
                        <li>Any work not mentioned within this package or outside the site boundary shall be charged for accordingly</li>
                        <li>Percentage of openings for doors & windows – 27% Maximum</li>
                        <li>One point of Electricity & water needs to be provided by the client free of cost to facilitate construction</li>
                        <li>SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions</li>
                        <li>If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals</li>
                        <li>A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client</li>
                        <li>Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally</li>
                        <li>Site related small costs like tarpaulin, temporary wiring within the site & etc, are included and no additional cost</li>
                        <li> NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C19')}>Payment Structure</a>
                      <ul id="C19" className="nested">
                        <li>A customized payment schedule will be shared based on the project specifications.</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'C20')}>Warranty and Guarantee</a>
                      <ul id="C20" className="nested">
                        <li>Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years</li>
                        <li>Guarantee & warranty is provided on Stamp paper</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="totalClick_sec">
          <div className="total_click">
            <div className="abovecont">
              <h4>FREEDOM</h4>
              <h3>Rs.2499/*- Sq.Ft</h3>
            </div>
            <div className="click">
              <form action="#">
                <div className="list">
                  <h1>Freedom Details..</h1>
                  <ul>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E1')}>Design and Drawings</a>
                      <ul id="E1" className="nested">
                        <li>Premium 2D & 3D – Floor Plans</li>
                        <li>Luxury 3D Elevation Designs of all views</li>
                        <li>Design Development – A maximum of 40 drawing revisions</li>
                        <li>Internal Isometric Views all rooms, open areas etc & detailed renders for each segment of the home for better understanding of the design</li>
                        <li>Detailed Landscaping design</li>
                        <li>3D Walkthrough of the home along with internal & external walkthrough</li>
                        <li>Hands on isometric 3D model of the home with separate floors</li>
                        <li>Site survey by surveyor with instruments & drawing on the basis of survey</li>
                        <li>VR for the 3D Walkthrough of the home along with internal & external walkthrough including interior renders</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E2')}>Civil Construction</a>
                      <ul id="E2" className="nested">
                        <li>Floor to floor height – 10’</li>
                        <li>Steel (500 TMT bars) – Bhuwalka/Kamadhenu</li>
                        <li>Cement (Grade 43-53 as nodded) – Penna/Dalmia</li>
                        <li>UG Sump built with solid blocks of 8” thickness & waterproof plastered 8000lts</li>
                        <li>Concrete – M20 grade RMC</li>
                        <li>Solid Block walls – 6” & 4” thickness</li>
                        <li>Internal, external and toilet wall – column joints plastering with chicken mesh</li>
                        <li>Waterproofing compound – Dr.Fixit/FOSROC for external walls</li>
                        <li>Cement based waterproofing, in terrace to avoid leakage</li>
                        <li>Steel/concrete lofts – Not Included</li>
                        <li>Ledge wall for incorporating concealed sanitary parts – Included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E3')}>Architectural Design</a>
                      <ul id="E3" className="nested">
                        <li>Working drawing for all works</li>
                        <li>Schedule of Openings</li>
                        <li>Section and Elevation</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E4')}>Interior Design</a>
                      <ul id="E4" className="nested">
                        <li>Kitchen is given with Laminate on Boiling water Plywood. The basic price of laminate is
                        ₹1650/- per sheet</li>
                        <li>All other interior elements are provided with laminate on neem plywood. The basic price of
                        laminate is ₹1500/- per sheet</li>
                        <li>One wardrobe for every 1000 sqft of slab laid area of 7’ x 10’ including loft</li>
                        <li>Modular kitchen of upto 125 sqft with accessories worth ₹35,000</li>
                        <li>One TV unit of 35 sqft will be provided</li>
                        <li>Basic shoe rack of 10 sqft</li>
                        <li>Crockery unit of dimension 7’ x 3</li>
                        <li>False ceiling up to 10’ x 10’ (including peripheral false ceiling)</li>
                        <li>Master bedroom dressing table includes 2’ vanity at bottom and mirror on top</li>
                        <li>Decorative wall ledges up to 10 rft will be provided</li>
                        <li>Up to 200 sqft of wall paper is included</li>
                        <li>One vanity with mirror for every 1000 sqft of slab laid area</li>
                        <li>These specifications and measurements are included in the package. However, this doesn’t
                        limit to executing beyond these measurements & specifications on added actual costs</li>
                        <li>Electrical points for false ceiling are included in the package. All other points wherever needed
                        additionally shall be charged on actuals</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E5')}>Structural Design</a>
                      <ul id="E5" className="nested">
                        <li>Structural Design as per IS Code.</li>
                        <li>Good for construction drawings</li>
                        <li>Soil Test Report</li>
                        <li>Design Analysis Report</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E6')}>MEP Design</a>
                      <ul id="E6" className="nested">
                        <li>Electrical Layout</li>
                        <li>Plumbing Water Line Layout</li>
                        <li>Plumbing Drainage Line Layout</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E7')}>Government Liaison Assistance</a>
                      <ul id="E7" className="nested">
                        <li>Construction Plan Sanction</li>
                        <li>Temporary Electricity connection</li>
                        <li>Permanent electrical connection</li>
                        <li>Water connection</li>
                        <li>Sewage connection</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E8')}>Flooring and Wall tilling</a>
                      <ul id="E8" className="nested">
                        <li>Kitchen & Bedrooms : Vitrified Tiles – Rs.60/- per Sqft. Maximum tile size is 2’ X 2’.</li>
                        <li>Living Room, Dining : Marble finished vitrified tiles -Rs.70/- per Sqft</li>
                        <li>Staircase : Granite – Rs.100/- per Sqft</li>
                        <li>Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.55/- per Sqft</li>
                        <li>Toilet Floor : Anti-skid tiles – Rs.50/- per Sqft</li>
                        <li>Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.45/- per Sqft</li>
                        <li>Parking Area : Parking tiles – Rs.40/- per Sqft</li>
                        <li>Kitchen counter top : Granite – Rs.135/- per Sqf</li>
                        <li>Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.60/- per Sqft</li>
                        <li>Puja Room- Wall tiling – Not Included</li>
                        <li>Puja Room- Granite slab- Rs-100/- per Sqft</li>
                        <li>Setback area tiles of 40 per sqft will be provided. (if setback area is charged)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E9')}>Electrical</a>
                      <ul id="E9" className="nested">
                        <li>Electrical – Light & power points shall be provided as per standards</li>
                        <li>Geyser points – All bathrooms</li>
                        <li>AC provision – Any 2 rooms</li>
                        <li>Conduits – Good quality, hidden in slabs and walls</li>
                        <li>Fire proof copper wire – Finolex or Polycab </li>
                        <li>External electrification is included</li>
                        <li>Switches & Plates – Anchor-Roma make</li>
                        <li>A main DB & MCB – IndoAsian/Siemens/Equivalent make</li>
                        <li>Electric Car charging point – Parking area</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E10')}>Painting</a>
                      <ul id="E10" className="nested">
                        <li>Internal wall & ceiling : 2 coats wall putty + 1 coat primer coat + 2 coats tractor emulsion paint</li>
                        <li>External walls : Primer coat + external Apex weather proof paint </li>
                        <li>Brand : Asian/Berger/Dulux</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E11')}>Piumbing</a>
                      <ul id="E11" className="nested">
                        <li>Water supply system – Internal & External</li>
                        <li>Connection for water inlet from corporation</li>
                        <li>External sewage system – Inspection chambers & sewage outlet to site boundary</li>
                        <li>Class B CPVC pipes – Ashirwad/Astral make</li>
                        <li>Solar & Geyser Provision</li>
                        <li>Rain water harvesting facility – Ground water recharge</li>
                        <li>PVC Overhead Tank – Ganga or Equivalent</li>
                        <li>Plumbing – GI Chamber covers shall be provided for IC</li>
                        <li>Separate sewage & drainage lines</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E12')}>Fixtures</a>
                      <ul id="E12" className="nested">
                        <li>Kitchen sink & Accessories: SS/Granite/Carysil – Rs.6,000/- per kitchen</li>
                        <li>CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.25,000/- per bathroom attached toilet and Rs.10,000/- per  powder room</li>
                        <li>Electrical Fixtures – Not included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E13')}>Doors</a>
                      <ul id="E13" className="nested">
                        <li>Main, Puja Door  –  Teak  Wood  frame  &  shutter  including  hardware – Rs.25,000/- per door</li>
                        <li>Internal Door – Sal wood frame & flush shutter including hardware – Rs.9,000/- per door</li>
                        <li>Internal door frames & shutter – Painted (only)</li>
                        <li>Main, Puja Door – Polished with melamine spray</li>
                        <li>Bathroom Door –  Frame  &  shutter  including  hardware –  Rs.8,000/- per door</li>
                        <li>Door Hardware – Ozone/Europa/Dorma make</li>
                        <li>Door Hinges – SS hinges</li>
                        <li>Door & Door  Frame  cost  –  Inclusive of planing, rebate, transportation etc</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E14')}>Windows</a>
                      <ul id="E14" className="nested">
                        <li>UPVC windows – 5mm clear glass with MS Grills</li>
                        <li>Basic price : uPVC with MS grill – Rs.510/- per Sqft (If required, upgrade to wooden windows can be made at an additional cost per Sqft, measured on built-up area. The additional cost can be calculated based on the wooden material chosen by the Client.)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E15')}>Fibrication</a>
                      <ul id="E15" className="nested">
                        <li>Main Gate: Designer Gate – Rs. 400/- per Sqft</li>
                        <li>External staircase & balcony railing : MS Railing – Rs. 600/- per Rft</li>
                        <li>Internal staircase railing : SS Railing – Rs.980/- per Rft</li>
                        <li>Utility grill is not included in the package</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E16')}>Compound Well</a>
                      <ul id="E16" className="nested">
                        <li>Compound wall – Solid block walls of 4” thickness to suit the elevation</li>
                        <li>Excavation, Foundation, PCC,  Size  Stone  Masonry  with  DPC  course above SSM</li>
                        <li>Height of Compound wall– 5 Ft above Plinth level</li>
                        <li>Compound wall – Plastered & Painted</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E17')}>Elevation</a>
                      <ul id="E17" className="nested">
                        <li>This proposal includes a luxurious elevation</li>
                        <li>A 3D elevation is presented for client to choose from & design further</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E18')}>Exclusions & Incidentals</a>
                      <ul id="E18" className="nested">
                        <li>A design if needed to be modified more than thrice shall be charged for accordingly</li>
                        <li> Government fees for the liaison bodies to be paid directly by the client</li>
                        <li>The complete fee payment for plan sanction in Panchayat limits need to be borne by client</li>
                        <li>Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly</li>
                        <li>Hard rock/soft rock excavation, if it arises shall be charged for accordingly</li>
                        <li>Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual</li>
                        <li>There is no basic price/ cap of steel or cement. However, in case there is huge fluctuation of over 45% of the average market price during the signing of the agreement the difference shall be charged in consultation with the client</li>
                        <li>Any work not mentioned within this package or outside the site boundary shall be charged for accordingly</li>
                        <li>Percentage of openings for doors & windows – 27% Maximum</li>
                        <li>One point of Electricity & water needs to be provided by the client free of cost to facilitate construction</li>
                        <li>SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions</li>
                        <li>If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals</li>
                        <li>A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client</li>
                        <li>Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally</li>
                        <li>Site related small costs like tarpaulin, temporary wiring within the site & etc, are included and no additional cost</li>
                        <li> NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E19')}>Payment Structure</a>
                      <ul id="E19" className="nested">
                        <li>A customized payment schedule will be shared based on the project specifications.</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E20')}>Warranty and Guarantee</a>
                      <ul id="E20" className="nested">
                        <li>Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years</li>
                        <li>Guarantee & warranty is provided on Stamp paper</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            </div>
          <div className="total_click">
            <div className="abovecont">
              <h4>FREEDOM+</h4>
              <h3>Rs.2650/*- Sq.Ft</h3>
            </div>
            <div className="click">
              <form action="#">
                <div className="list">
                  <h1>Freedom+ Details..</h1>
                  <ul>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F1')}>Design and Drawings</a>
                      <ul id="F1" className="nested">
                        <li> 2D Floor Plans</li>
                        <li>3D Elevation Designs</li>
                        <li>Design Development – A maximum of 3 drawing revisions</li>
                        <li>Internal Isometric Views all rooms, open areas etc</li>
                        <li>Visual site survey & drawing on the basis of measurement provided by client</li>
                        <li>Site survey by surveyor with instruments & drawing on the basis of survey</li>
                        <li>Basic VR of the 3D model</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F2')}>Civil Construction</a>
                      <ul id="F2" className="nested">
                        <li>Floor to floor height – 10’6"</li>
                        <li>Steel (500 TMT bars) – Bhuwalka/Kamadhenu</li>
                        <li>Cement (Grade 43-53 as nodded) – Penna/Dalmia</li>
                        <li>UG Sump built with solid blocks of 8” thickness & waterproof plastered 8000lts</li>
                        <li>Concrete – M25 grade RMC</li>
                        <li>Solid Block walls – 6” & 4” thickness</li>
                        <li>Internal, external and toilet wall – column joints plastering with chicken mesh</li>
                        <li>Waterproofing compound – Dr.Fixit/FOSROC for external walls</li>
                        <li>Cement based waterproofing, in terrace to avoid leakage</li>
                        <li>Steel/concrete lofts – Not Included</li>
                        <li>Ledge wall for incorporating concealed sanitary parts – Included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F3')}>Architectural Design</a>
                      <ul id="F3" className="nested">
                        <li>Working drawing for all works</li>
                        <li>Schedule of Openings</li>
                        <li>Section and Elevation</li>
                        <li>Detailed portfolio of the home post handover</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F4')}>Interior Design</a>
                      <ul id="F4" className="nested">
                        <li>Kitchen is given with Laminate on Boiling water Plywood. The basic price of laminate is
                        ₹1650/- per sheet</li>
                        <li>All other interior elements are provided with laminate on neem plywood. The basic price of
                        laminate is ₹1500/- per sheet</li>
                        <li>One wardrobe for every 1000 sqft of slab laid area of 7’ x 10’ including loft</li>
                        <li>Modular kitchen of upto 125 sqft with accessories worth ₹35,000</li>
                        <li>One TV unit of 35 sqft will be provided</li>
                        <li>Basic shoe rack of 10 sqft</li>
                        <li>Crockery unit of dimension 7’ x 3</li>
                        <li>False ceiling up to 10’ x 10’ (including peripheral false ceiling)</li>
                        <li>Master bedroom dressing table includes 2’ vanity at bottom and mirror on top</li>
                        <li>Decorative wall ledges up to 10 rft will be provided</li>
                        <li>Up to 200 sqft of wall paper is included</li>
                        <li>One vanity with mirror for every 1000 sqft of slab laid area</li>
                        <li>These specifications and measurements are included in the package. However, this doesn’t
                        limit to executing beyond these measurements & specifications on added actual costs</li>
                        <li>Electrical points for false ceiling are included in the package. All other points wherever needed
                        additionally shall be charged on actuals</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F5')}>Structural Design</a>
                      <ul id="F5" className="nested">
                        <li>Structural Design as per IS Code.</li>
                        <li>Good for construction drawings</li>
                        <li>Soil Test Report</li>
                        <li>Design Analysis Report</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F6')}>MEP Design</a>
                      <ul id="F6" className="nested">
                        <li>Electrical Layout</li>
                        <li>Plumbing Water Line Layout</li>
                        <li>Plumbing Drainage Line Layout</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F7')}>Government Liaison Assistance</a>
                      <ul id="F7" className="nested">
                        <li>Construction Plan Sanction</li>
                        <li>Temporary Electricity connection</li>
                        <li>Permanent electrical connection</li>
                        <li>Water connection</li>
                        <li>Sewage connection</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F8')}>Flooring and Wall tilling</a>
                      <ul id="F8" className="nested">
                        <li>Kitchen & Bedrooms : Vitrified Tiles – Rs.75/- per Sqft. Maximum tile size is 2’ X 2’.</li>
                        <li>Living Room, Dining : Marble finished vitrified tiles -Rs.85/- per Sqft</li>
                        <li>Staircase : Granite – Rs.115/- per Sqft</li>
                        <li>Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.60/- per Sqft</li>
                        <li>Toilet Floor : Anti-skid tiles – Rs.60/- per Sqft</li>
                        <li>Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.55/- per Sqft</li>
                        <li>Parking Area : Parking tiles – Rs.55/- per Sqft</li>
                        <li>Kitchen counter top : Granite – Rs.150/- per Sqf</li>
                        <li>Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.75/- per Sqft</li>
                        <li>Puja Room- Wall tiling – Not Included</li>
                        <li>Puja Room- Granite slab- Rs-115/- per Sqft</li>
                        <li>Setback area tiles of 55 per sqft will be provided. (if setback area is charged)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F9')}>Electrical</a>
                      <ul id="F9" className="nested">
                        <li>Electrical – Light & power points shall be provided as per designs & to suit clients requirement</li>
                        <li>Geyser points – All bathrooms</li>
                        <li>AC provision – Any 2 rooms</li>
                        <li>Conduits – Good quality, hidden in slabs and walls</li>
                        <li>Fire proof copper wire – Finolex or Polycab </li>
                        <li>External electrification is included</li>
                        <li>Switches & Plates – Anchor-Roma make</li>
                        <li>A main DB & MCB – IndoAsian/Siemens/Equivalent make</li>
                        <li>Electric Car charging point – Parking area</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F10')}>Painting</a>
                      <ul id="F10" className="nested">
                        <li>Internal wall & ceiling : 2 coats wall putty + 1 coat primer coat + 2-3 coats tractor emulsion paint</li>
                        <li>External walls : Primer coat + Apex weather proof paint </li>
                        <li>Brand : Asian/Berger/Dulux</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F11')}>Piumbing</a>
                      <ul id="F11" className="nested">
                        <li>Water supply system – Internal & External</li>
                        <li>Connection for water inlet from corporation</li>
                        <li>External sewage system – Inspection chambers & sewage outlet to site boundary</li>
                        <li>Class B CPVC pipes – Ashirwad/Astral make</li>
                        <li>Solar & Geyser Provision</li>
                        <li>Rain water harvesting facility – Ground water recharge</li>
                        <li>PVC Overhead Tank – Ganga or Equivalent</li>
                        <li>Plumbing – GI Chamber covers shall be provided for IC</li>
                        <li>Separate sewage & drainage lines</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F12')}>Fixtures</a>
                      <ul id="F12" className="nested">
                        <li>Kitchen sink & Accessories: SS/Granite/Carysil – Rs.9,000/- per kitchen</li>
                        <li>CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.30,000/- per bathroom attached toilet and Rs.10,000/- per  powder room</li>
                        <li>Electrical Fixtures – Not included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F13')}>Doors</a>
                      <ul id="F13" className="nested">
                        <li>Main, Puja Door  –  Teak  Wood  frame  &  shutter  including  hardware – Rs.30,000/- per door</li>
                        <li>Internal Door – Sal wood frame & flush shutter including hardware – Rs.9,000/- per door</li>
                        <li>Internal door frames & shutter – Painted (only)</li>
                        <li>Main, Puja Door – Polished with melamine spray</li>
                        <li>Bathroom Door –  Frame  &  shutter  including  hardware –  Rs.8,000/- per door</li>
                        <li>Door Hardware – Ozone/Europa/Dorma make</li>
                        <li>Door Hinges – SS hinges</li>
                        <li>Door & Door  Frame  cost  –  Inclusive of planing, rebate, transportation etc</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F14')}>Windows</a>
                      <ul id="F14" className="nested">
                        <li>UPVC windows – 5mm clear glass with MS Grills</li>
                        <li>Basic price : uPVC with MS grill – Rs.540/- per Sqft (If required, upgrade to wooden windows can be made at an additional cost per Sqft, measured on built-up area. The additional cost can be calculated based on the wooden material chosen by the Client.)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F15')}>Fibrication</a>
                      <ul id="F15" className="nested">
                        <li>Main Gate: Designer Gate – Rs. 400/- per Sqft</li>
                        <li>External staircase & balcony railing : MS Railing – Rs. 600/- per Rft</li>
                        <li>Internal staircase railing : SS Railing – Rs.900/- per Rft</li>
                        <li>Utility grill is not included in the package</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F16')}>Compound Well</a>
                      <ul id="F16" className="nested">
                        <li>Compound wall – Solid block walls of 4” thickness to suit the elevation. ( If Changed )</li>
                        <li>Excavation, Foundation, PCC,  Size  Stone  Masonry  with  DPC  course above SSM</li>
                        <li>Height of Compound wall– 5 Ft above Plinth level</li>
                        <li>Compound wall – Plastered & Painted</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F17')}>Elevation</a>
                      <ul id="F17" className="nested">
                        <li>This proposal includes a luxurious elevation</li>
                        <li>A 3D elevation is presented for client to choose from & design further</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F18')}>Exclusions & Incidentals</a>
                      <ul id="F18" className="nested">
                        <li>A design if needed to be modified more than thrice shall be charged for accordingly</li>
                        <li> Government fees for the liaison bodies to be paid directly by the client</li>
                        <li>The complete fee payment for plan sanction in Panchayat limits need to be borne by client</li>
                        <li>Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly</li>
                        <li>Hard rock/soft rock excavation, if it arises shall be charged for accordingly</li>
                        <li>Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual</li>
                        <li>There is no basic price/ cap of steel or cement. However, in case there is huge fluctuation of over 45% of the average market price during the signing of the agreement the difference shall be charged in consultation with the client</li>
                        <li>Any work not mentioned within this package or outside the site boundary shall be charged for accordingly</li>
                        <li>Percentage of openings for doors & windows – 25% Maximum</li>
                        <li>One point of Electricity & water needs to be provided by the client free of cost to facilitate construction</li>
                        <li>SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions</li>
                        <li>If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals</li>
                        <li>A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client</li>
                        <li>Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally</li>
                        <li>Site related small costs like tarpaulin, temporary wiring within the site & etc, are included and no additional cost</li>
                        <li>Basic price of Cement is Rs.430/- per bag & Steel is Rs.80,000/- per MT. Any increase in these prices shall be charged accordingly</li>
                        <li> NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan</li>
                        
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F19')}>Payment Structure</a>
                      <ul id="F19" className="nested">
                        <li>A customized payment schedule will be shared based on the project specifications.</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'F20')}>Warranty and Guarantee</a>
                      <ul id="F20" className="nested">
                        <li>Construction guarantee – 1 Year ; Waterproofing warranty – 10 Years</li>
                        <li>Guarantee & warranty is provided on Stamp paper</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="total_click">
            <div className="abovecont">
              <h4>THE ONE +</h4>
              <h3>Rs.3399/*- Sq.Ft</h3>
            </div>
            <div className="click">
              <form action="#">
                <div className="list">
                  <h1>The One+ Details..</h1>
                  <ul>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G1')}>Design and Drawings</a>
                      <ul id="G1" className="nested">
                        <li>Premium 2D & 3D – Floor Plans</li>
                        <li>Luxury 3D Elevation Designs of all views</li>
                        <li>Technical & detailed Presentation of floor plans, multiple home visits from the design team to help finalize all designs</li>
                        <li>Sketching & interactive sessions of all aspects</li>
                        <li>Internal Isometric Views of rooms, open areas etc & detailed renders for better understanding of the design</li>
                        <li>Detailed Landscaping design</li>
                        <li>3D Walkthrough of the home along with internal & external walkthrough</li>
                        <li>Hands on isometric 3D model of the home with separate floors</li>
                        <li>Site survey by surveyor with instruments & drawing on the basis of survey</li>
                        <li>Curated VR models will include interior elements & furniture post designing (if interior executed by Company). Get 5 more changes for the VR model</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G2')}>Civil Construction</a>
                      <ul id="G2" className="nested">
                        <li>Floor to floor height – 11’6</li>
                        <li>Steel (500 TMT bars) – JSW/TATA</li>
                        <li>Cement (Grade 53) – ACC/ Ultratech</li>
                        <li>UG Sump built with RCC & waterproof plastered as per capita requirement</li>
                        <li>Concrete – M25 grade</li>
                        <li>Machine cut solid Block walls (of APCO or similar) – 8″ & 4″ thickness</li>
                        <li>Internal, external and toilet wall – column joints plastering with chicken mesh using double washed Msand</li>
                        <li>Internal courtyards, skylights other designer architectural elements are included</li>
                        <li>Waterproofing compound – Dr.Fixit/FOSROC for external walls</li>
                        <li>Crystalline waterproofing, Cinder filling in sunken toilets, Heat & Waterproofing in Terrace</li>
                        <li>Ledge wall for incorporating concealed sanitary parts is included</li>
                        <li>Wire cut brick, Jaali feature will be provided as per the drawing</li>
                        <li>Mat for slab shuttering (chaape)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G3')}>Architectural Design</a>
                      <ul id="G3" className="nested">
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G4')}>Interior Design</a>
                      <ul id="G4" className="nested">
                        <li>Kitchen is given with acrylic sheet on Boiling Water Plywood. The basic price of acrylic sheet
                        is ₹4000/- per sheet</li>
                        <li>Wardrobes are made with Century ply & 4mm thick veneer sheet finished with hand polish.</li>
                        <li>Basic price of veneer sheet is ₹2,500/ sheet</li>
                        <li>All other interior elements are given with century plywood and laminate. The basic price of
                        laminate is ₹1550/-</li>
                        <li>One wardrobe for every 1000 sqft of slab laid area of dimension 7’ x 10’ including loft</li>
                        <li>One modular kitchen up to 150 sqft with ₹50,000/- worth accessories, made of BWP century
                        ply with acrylic sheet</li>
                        <li>TV unit of 40 sqft with storage</li>
                        <li>Shoe rack of 15 sqft with bottom and tall units</li>
                        <li>Crockery unit of dimension 3’6” x 7’ with glass shutters</li>
                        <li>False ceiling up to 12’ x 12’ (including peripheral false ceiling)</li>
                        <li>Foyer unit is provided with basic storage up to 15 sqft</li>
                        <li>Dressing table in master bedrooms is provided with mirror and 2’ vanity at the bottom.</li>
                        <li>Decorative wall ledges up to 20 rft</li>
                        <li>Wall paper up to 200 sqft will be provided</li>
                        <li>Wall partition with veneer will be provided where ever needed upto 50 Sqft</li>
                        <li>Storage in Puja up to 15 sqft</li>
                        <li>Headboard tufting at master bedroom shall be provided upto 33 Sqft</li>
                        <li>Study table up to 30 sqft will be provided</li>
                        <li>One vanity in every toilet</li>
                        <li>These specifications and measurements are included in the package. However, this doesn’t
                        limit to executing beyond these measurements & specifications on added actual costs</li>
                        <li>Electrical points for false ceiling are included in the package. All other points wherever needed
                        additionally shall be charged on actuals</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G5')}>Structural Design</a>
                      <ul id="G5" className="nested">
                        <li>Structural Design as per IS Code.</li>
                        <li>Good for construction drawings</li>
                        <li>Soil Test Report</li>
                        <li>Overalapped Structural, Architectural & MEP Drawings</li>
                        <li>3D structural drawings & Design Analysis Report</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G6')}>MEP Design</a>
                      <ul id="G6" className="nested">
                        <li>Electrical Layout</li>
                        <li>Plumbing Water Line Layout</li>
                        <li>Plumbing Drainage Line Layout</li>
                        <li>Detailed HVAC design</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G7')}>Government Liaison Assistance</a>
                      <ul id="G7" className="nested">
                        <li>Construction Plan Sanction</li>
                        <li>Temporary Electricity connection</li>
                        <li>Permanent electrical connection</li>
                        <li>Water connection</li>
                        <li>Sewage connection</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G8')}>Flooring and Wall tilling</a>
                      <ul id="G8" className="nested">
                        <li>Kitchen & Bedrooms : Vitrified Tiles – Rs.75/- per Sqft. Maximum tile size is 2’ X 2’.</li>
                        <li>Living Room, Dining : Marble finished vitrified tiles -Rs.85/- per Sqft</li>
                        <li>Staircase : Granite – Rs.115/- per Sqft</li>
                        <li>Balcony, Sit-out, Passage & Common areas : Anti-skid tiles – Rs.60/- per Sqft</li>
                        <li>Toilet Floor : Anti-skid tiles – Rs.60/- per Sqft</li>
                        <li>Toilet Wall Dado (Up to 7ft height) : Light & Highlighting tiles – Rs.55/- per Sqft</li>
                        <li>Parking Area : Parking tiles – Rs.55/- per Sqft</li>
                        <li>Kitchen counter top : Granite – Rs.150/- per Sqf</li>
                        <li>Kitchen Wall Dado (Up to 2’ above counter) : Backsplash tiles – Rs.75/- per Sqft</li>
                        <li>Puja Room- Wall tiling – Not Included</li>
                        <li>Puja Room- Granite slab- Rs-115/- per Sqft</li>
                        <li>Setback area tiles of 55 per sqft will be provided. (if setback area is charged)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G9')}>Electrical</a>
                      <ul id="G9" className="nested">
                        <li>Unlimited light and power points in good design sense</li>
                        <li>Conduits – Good quality, hidden in slabs and walls</li>
                        <li>Fire retardant copper wire – Havells External electrification is included</li>
                        <li>Switches & Plates – Legrand Lyncus/myrius</li>
                        <li>A main DB & MCB – ABB/Schneider/Legrand make</li>
                        <li>Provision for home automation is included</li>
                        <li>Provision for digital switches is included</li>
                        <li>AC provision through out the house</li>
                        <li>Electric Car charging point – Parking area</li>
                        <li>CCTV provision</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G10')}>Painting</a>
                      <ul id="G10" className="nested">
                        <li>1 texture wall & 1 Royale Play wall for living & Master bedroom</li>
                        <li>Internal wall & ceiling – 3 coat Wall putty + primer coat + Royal paint </li>
                        <li>External walls – 1 primer coat + 2 coat external Apex Ultima weather proof paint</li>
                        <li>Brand – Asian/Berger/Dulux</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G11')}>Piumbing</a>
                      <ul id="G11" className="nested">
                        <li>Water supply system – Internal & External Connection for water inlet from corporation</li>
                        <li>External sewage system – Inspection chambers & sewage outlet to site boundary</li>
                        <li>Class B CPVC pipes – Ashirwad/Astral make</li>
                        <li>Solar & Geyser Provision</li>
                        <li>Rain water harvesting facility – Ground water recharge</li>
                        <li>PVC Overhead Tank based on per capita consumption from Sintex</li>
                        <li>Separate sewage & drainage lines</li>
                        <li>Separate bore well & corporation lines, if needed for Kitchens</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G12')}>Fixtures</a>
                      <ul id="G12" className="nested">
                        <li>Kitchen sink & Accessories: SS/Granite/Carysil – Rs.25,000/- per kitchen</li>
                        <li>CP & Sanitary fixtures such as Wash Basin, WC, Taps and other accessories like bottle trap, gratings etc. : Jaquar/Hindware – Rs.40,000/- per bathroom attached toilet and Rs.15,000/- per  powder room</li>
                        <li>Glass cubical for 1 bathroom (if BUA is above 3500 Sqft)</li>
                        <li>Jacuzzi or bathtub worth Rs. 50,000 is included (if BOA is above 4000 Sqft)</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G13')}>Doors</a>
                      <ul id="G13" className="nested">
                        <li>Main, Puja Door  –  Teak  Wood  frame  &  shutter  including  hardware – Rs.30,000/- per door</li>
                        <li>Internal Door – Sal wood frame & flush shutter including hardware – Rs.9,000/- per door</li>
                        <li>Internal door frames & shutter – Painted (only)</li>
                        <li>Main, Puja Door – Polished with melamine spray</li>
                        <li>Bathroom Door –  Frame  &  shutter  including  hardware –  Rs.8,000/- per door</li>
                        <li>Door Hardware – Ozone/Europa/Dorma make</li>
                        <li>Door Hinges – SS hinges</li>
                        <li>Door & Door  Frame  cost  –  Inclusive of planing, rebate, transportation etc</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G14')}>Windows</a>
                      <ul id="G14" className="nested">
                        <li>Basic price: Wooden finish uPVC windows with MS grill or wooden including hardware – Rs.910/- per Sqft OR Wooden windows – Sal wood Frame (5”x3”) & Honne Shutter (1.5” thickness) with clear glass and grill rods</li>
                        <li>Pocket windows, sliding doors etc are included</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G15')}>Fibrication</a>
                      <ul id="G15" className="nested">
                        <li>Main Gate: Designer Gate – Rs. 450/- per Sqft</li>
                        <li>External staircase & balcony railing : MS Railing – Rs. 900/- per Rft</li>
                        <li>Internal staircase railing : SS Railing – Rs.1200/- per Rft</li>
                        <li>Utility grill is not included in the package</li>
                        <li>Waterproofing is included for Utility & balcony portions</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G16')}>Compound Well</a>
                      <ul id="G16" className="nested">
                        <li>Compound wall – Solid block walls of 4” thickness to suit the elevation ( If charged )</li>
                        <li>Excavation, Foundation, PCC,  Size  Stone  Masonry  with  DPC  course above SSM</li>
                        <li>Height of Compound wall– 5 Ft above Plinth level</li>
                        <li>Compound wall – Plastered & Painted</li>
                        <li>Front compound wall includes some designer features like Slit openings, higher height, added beam with light drop, Jaali, tile cladding or HPL</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G17')}>Elevation</a>
                      <ul id="G17" className="nested">
                        <li>This proposal includes a luxurious elevation</li>
                        <li>A 3D elevation is presented for client to choose from & design further</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'E18')}>Exclusions & Incidentals</a>
                      <ul id="E18" className="nested">
                        <li>A design if needed to be modified more than thrice shall be charged for accordingly</li>
                        <li> Government fees for the liaison bodies to be paid directly by the client</li>
                        <li>The complete fee payment for plan sanction in Panchayat limits need to be borne by client</li>
                        <li>Assuming the site & road level to be equal, if the ground level needs to be raised above 18”, it shall be charged for accordingly</li>
                        <li>Hard rock/soft rock excavation, if it arises shall be charged for accordingly</li>
                        <li>Buying new earth/sending existing earth for excavation/backfilling purpose shall be charged on actual</li>
                        <li>There is no basic price/ cap of steel or cement. However, in case there is huge fluctuation of over 45% of the average market price during the signing of the agreement the difference shall be charged in consultation with the client</li>
                        <li>Any work not mentioned within this package or outside the site boundary shall be charged for accordingly</li>
                        <li>Percentage of openings for doors & windows – 27% Maximum</li>
                        <li>One point of Electricity & water needs to be provided by the client free of cost to facilitate construction</li>
                        <li>SBC of soil is considered at 180 KN/M2 and depth of the foundation considered at 5 Feet, any increase in depth shall be charged accordingly on actuals upon site conditions</li>
                        <li>If there is constraints in material delivery or socking place and materials to be order in small quantities, the additional charges for the same shall be charged on actuals</li>
                        <li>A specific area to construct labour and material shed needs to be provided within 50 feet from the construction place by the client</li>
                        <li>Any road cutting charges for the connection of Electricity and Sewage lines is not included, such works shall be charged additionally</li>
                        <li>Site related small costs like tarpaulin, temporary wiring within the site & etc, are included and no additional cost</li>
                        <li> NOTE: The above mentioned material specifications are generalized, the inclusion or the exclusion of the same shall vary depending on the floor plan</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G19')}>Payment Structure</a>
                      <ul id="G19" className="nested">
                        <li>A customized payment schedule will be shared based on the project specifications.</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" onClick={(event) => toggleNested(event, 'G20')}>Warranty and Guarantee</a>
                      <ul id="G20" className="nested">
                        <li>Construction guarantee – 1 Year;</li>
                        <li> Waterproofing warranty – 10 Years</li>
                        <li>Guarantee & warranty is provided on Stamp paper</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="section-actions">
        <div className="Home_head">
          <h2>HOW IT <span>WORKS</span></h2>
          <p>Convenience, &amp; Transparency at your finger tips.</p>
        </div>
            <br/>
        <div className="action-box">
          <img src={packages} alt="package"/>
          <p><span>01</span></p><br/>
          <p>Select any package..</p>
         </div>
          <div className="action-box">
                <img src={note} alt="review"/>
                <p><span>02</span></p>
                <br/>
                <p>Review & compare briefly</p>
            </div>
            <div className="action-box1">
                <img src={downloadtext} alt="Download"/>
                <p><span>03</span></p><br/>
                <p>Dowwnload to know .</p>
            </div>
            <div className="action-box1">
                <img src={requirement} alt="send"/>
                <p><span>04</span></p><br/>
                <p>Customize requirements</p>
            </div>
        </div>
      
      </section>
    </div>

  );
    }


export default Package;