import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API,CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (resId) fetchRestaurant(resId);
  }, [resId]);

  const fetchRestaurant = async (id) => {
    try {
      const response = await fetch(`${MENU_API}${id}`);
      const data = await response.json();

      // Restaurant info
      const restaurantInfo = data?.data?.cards[2]?.card?.card?.info;
      setRestaurant(restaurantInfo);

      // Menu items
      const menuCards =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const items = [];
      menuCards.forEach((category) => {
        category?.card?.card?.itemCards?.forEach((item) => {
          items.push(item.card.info);
        });
      });
      setMenuItems(items);
      setFilteredItems(items); // initialize filtered items
    } catch (error) {
      console.error("Error fetching restaurant/menu:", error);
    }
  };

  if (!restaurant) return <Shimmer />;

  const filterVeg = () => {
    setFilteredItems(menuItems.filter((item) => item.isVeg === 1));
  };

  const filterNonVeg = () => {
    setFilteredItems(menuItems.filter((item) => item.isVeg === 0));
  };

  const showAll = () => {
    setFilteredItems(menuItems);
  };

  return (
    <div className="restaurant-menu">
      <div className="restaurant-info">
        <h1>{restaurant.name}</h1>
        <p>Cuisines: {restaurant.cuisines?.join(", ")}</p>
        <p>Cost for Two: ₹{restaurant.costForTwo / 100}</p>
        <p>Average Rating: {restaurant.avgRating}</p>
      </div>

      <div className="filter-buttons">
        <button onClick={showAll}>All</button>
        <button onClick={filterVeg}>Veg 🌱</button>
        <button onClick={filterNonVeg}>Non-Veg 🍖</button>
      </div>

      <h2>Menu Items</h2>
      <div className="menu-grid">
       {filteredItems.map((item, index) => (
  <div className="menu-card" key={`${item.id}-${index}`}>
    {item.imageId && (
      <img
        src={`${CDN_URL}/${item.imageId}`}
        alt={item.name}
        className="menu-image"
      />
    )}
    <div className="menu-details">
      <h3>
        {item.name} {item.isVeg ? "🌱" : "🍖"}
      </h3>
      <p>{item.description}</p>
      <p>Price: ₹{item.defaultPrice / 100}</p>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default RestaurantMenu;
