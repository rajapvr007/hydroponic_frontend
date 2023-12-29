import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

function ItemsContainer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <div>
          <h1 className="text-2xl py-4">Hydroponic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            obcaecati repudiandae consectetur dolore ipsam alias voluptates
            eligendi id voluptate! Cumque doloribus nostrum quia obcaecati,
            magni blanditiis debitis dignissimos quasi alias!
          </p>
        </div>
        <div>
          <h1 className="text-2xl py-4">Constact Us</h1>
          <ul>
            <li className="py-3">Home</li>
            <li className="py-3">Shopping</li>
            <li className="py-3">Contact</li>
            <li className="py-3">About</li>
          </ul>
        </div>
        
        <div>
          <h1 className="text-2xl py-4">Contact Us</h1>
          <p>
            <ul>
              <div className="flex items-center">
                <span className="mx-2">
                <ion-icon name="mail-open-outline"></ion-icon>
                </span>
                <li className="py-3">Hydroponic@gmail.com</li>
              </div>
              <div className="flex items-center">
                <span className="mx-2">
                <ion-icon name="location-outline"></ion-icon>
                </span>
                <li className="py-3">Hyderabad</li>
              </div>
              <div className="flex items-center">
                <span className="mx-2">
                <ion-icon name="call-outline"></ion-icon>
                </span>
                <li className="py-3">+040 24025674</li>
              </div>
            </ul>
          </p>
        </div>

        <div>
            <h1 className="text-2xl py-4">Follow Us</h1>
            <SocialIcons Icons={Icons} />
        </div>
      </div>
    </>
  );
}

export default ItemsContainer;
