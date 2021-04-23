//Categories Section
import { useState } from 'react';
import './Categories.css'

const lists = [
  {
    num: 1,
    categories: [
      "A Boy's Name",
      "US Cities",
      "Things That Are Cold",
      "School Supplies",
      "Pro Sports Teams",
      "Insects",
      "Breakfast Foods",
      "Furniture",
      "TV Shows",
      "Things Found In The Ocean",
      "Presidents",
      "Product Names"
    ]
  },
  {
    num: 2,
    categories: [
      "Famous Females",
      "Medicine/Drugs",
      "Things Made Of Metal",
      "Hobbies",
      "People In Uniform",
      "Things You Plug In",
      "Animals",
      "Languages",
      "Names Used In The Bible",
      "Junk Food",
      "Things That Grow",
      "Companies"
    ]
  },
  {
    num: 3,
    categories: [
      "Articles Of Clothing",
      "Desserts",
      "Car Parts",
      "Things Found On A Map",
      "Athletes",
      "4-Letter Words",
      "Items In A Refrigerator",
      "Farm Animals",
      "Street Names",
      "Things At The Beach",
      "Colors",
      "Tools"
    ]
  },
  {
    num: 4,
    categories: [
      "Heros",
      "Gifts/Presents",
      "Terms Of Endearment",
      "Kinds Of Dances",
      "Things That Are Black",
      "Vehicles",
      "Tropical Locations",
      "College Majors",
      "Dairy Products",
      "Things In A Souvenir Shop",
      "Items In Your Purse/Wallet",
      "World Records"
    ]
  }
];

const Categories = ({ hide, setHide }) => {
  const [list, setList] = useState(0);

  const nextList = () => {

    // Checking if the final list is being displayed. 'list' is equal to the final index in the 'lists' array. Only runs when true.
    if(list < lists.length - 1){
      setList(list + 1);
    } else {

      // The list / object of '0' in the 'lists' array. Displaying the first list again. Only runs when false.
      setList(0);
    }

    // When 'hide' value is true, hides the text/content for the 'categories' (List Items <li>s) is displayed
    setHide(true);
  }

  return(
    <div className='Categories'>
      <div className='Categories-Main'>
        <div className="Categories-Main-Top">
          <h1>CATEGORIES</h1>
          <h1>List {lists[list].num}</h1>
        </div>

        {/* Using '.map' method to create <li>s List Items, using the categories for the current list. The current list is determined by the currrent value for the 'list' state value. */}
        <ol className="Categories-Main-Display">

          {/* Using the value for the 'hide' state / prop to determine whether the '.hide' class will be applied to the <li>s (List items) */}
          {lists[list].categories.map(item => (
            <li className={hide ? 'hide' : null}>{item}</li>
          ))}
        </ol>
      </div>
      <div onClick={nextList} className="Categories-Secondary">
        <h1 className='Categories-Secondary-H1'>NEXT LIST</h1>
      </div>
    </div>
  );
}
export default Categories;