import React, { useState } from 'react';

const Apparel = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [referralFee, setReferralFee] = useState(null);

  const categoryOptions = ['Automotive', 'Baby Product', 'Book Music', 'Industrial Medical', 'Clothing Fashion', 'Electronics', 'Grocery', 'Health Beauty', 'Home Decor', 'Kitchen Appliances', 'Sports Gym', 'Others'];
  const subcategoryOptions = {
    Automotive: ['Automotive - Helmets, Oils & Lubricants, Batteries, Pressure washer, Vacuum cleaner, Air Freshener, Air purifiers and Vehicle Tools', 'Automotive - Tyres & Rims', 'Automotive Vehicles - 2-Wheelers, 4-Wheelers and Electric Vehicles', 'Automotive – Car and Bike parts, Brakes, Styling and body fittings, Transmission, Engine parts, Exhaust systems, Interior fitting, Suspension and Wipers', 'Automotive - Other Subcategories', 'Automotive – Cleaning kits (Sponges, Brush, Duster, Cloths and liquids), Car interior & exterior care (Waxes, polish, Shampoo and other), Car and Bike Lighting and Paints', 'Automotive Accessories (Floor Mats, Seat/Car/Bike Covers) and Riding Gear (Face Covers and Gloves)', 'Car Electronics Devices', 'Car Electronics Accessories'],
    'Baby Product': ['Baby Products - Other Products', 'Baby Hardlines - Swings, Bouncers and Rockers, Carriers, Walkers Baby Safety - Guards & Locks Baby Room Décor Baby Furniture Baby Car Seats & Accessories appa Strollers, Buggies & Prams', 'Craft Materials', 'Toys - Other Products', 'Toys - Drones', 'Toys - Balloons and Soft Toys'],
    'Book Music': [],
    'Industrial Medical': [],
    'Clothing Fashion': [],
    Electronics: ['Mobiles, Tablets and laptops', 'Televisions and Accessories', 'Cameras, DSLRs and Accessories', 'Headphones, Speakers and Home Theatres', 'Smart Watches, Fitness Bands and VR headsets', 'Computer Components', 'Printers, Inks and Accessories', 'Office and Stationery', 'Gaming Consoles and Accessories', 'Network Components and Storage Devices', 'Other Accessories', 'Other Electronics'],
    Grocery: [],
    'Health Beauty': [],
    'Home Decor': [],
    'Kitchen Appliances': [],
    'Sports Gym': [],
    Others: []
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory('');
    setReferralFee(null);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    setReferralFee(Apparel.getReferralOfSubCategory(selectedCategory, event.target.value));
  };

  const renderCategoryOptions = () => {
    return categoryOptions.map(category => <option key={category} value={category}>{category}</option>);
  };

  const renderSubcategoryOptions = () => {
    const options = subcategoryOptions[selectedCategory] || [];
    return options.map(option => <option key={option} value={option}>{option}</option>);
  };
  return (
    <div>
    
  
    <select class="apparel" id="category" value={selectedCategory} onChange={handleCategoryChange}>
    <option value="">Select a category</option>
    {renderCategoryOptions()}
    </select>  
  
  {selectedCategory && (
   <select className='inputStyle' id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange} disabled={!selectedCategory}>
   <option value="">Select a subcategory</option>
   {renderSubcategoryOptions()}
 </select>

   // <p>Referral fee for {selectedSubcategory} is {referralFee}</p>
  )}
</div>
);
};

Apparel.getReferralOfSubCategory = (category, subcategory) => {
// code to get referral fee for given category and subcategory
return 10; // dummy value
};

export default Apparel;