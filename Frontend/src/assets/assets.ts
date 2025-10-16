import logo from "./logo.jpg"
import search_icon from "./search_icon.jpg"
import profile_icon from "./profile_icon.png"
import cart_icon from "./cart_icon.png"
import menu_icon from "./menu_icon.png"
import dropdown_icon from "./dropdown_icon.png"
import hero_img from "./hero_img.jpg"
import exchange_icon from "./exchange_icon.png"
import quality_img from "./quality_img.png"
import support_img from "./support_img.png"
// import p_img1 from "./p_img1"

export interface ProductType {
  _id: string,
  name: string,
  description: string,
  price: number,
  image: string[],
  category: string,
  subCategory: string,
  sizes: string[],
  date: number,
  bestseller: boolean
}

export const assets = {
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
  hero_img,
  exchange_icon,
  quality_img,
  support_img
  // p_img1
};

export const products: ProductType[] = [
  {
    _id: "aaaaa",
    name: "Women Round Neck Cotton Top",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    price: 100,
    image: [hero_img],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true
  },
  {
    _id: "aaaaa",
    name: "Men Round Neck Pure Cotton T-Shirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    price: 100,
    image: [hero_img,hero_img,hero_img,hero_img],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345448,
    bestseller: true
  }
]
