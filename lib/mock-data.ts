import type { Product } from "../app/contexts/cart-context"

export const products: Product[] = [
  {
    id: "1",
    name: "Turmeric Powder",
    price: 7.99,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4XoKOp0Kg21U1tQ7GWJq5RMLdBY1t2MgNrT7kGwiQXczeIyw0IYvwYgPGg0ISeC-YISCf-YoRVDv9N02YhhVzI_eDpGLWQy_QyNQ33lljTFNshGdP0uNrmix0PtzKFzj-ol0qKM6boUM22d7qhUU2gYNo50lh-bNmzfvM7-DtvjFKvAzyTeH_qPv7HUG6fqo6nLpJSsfiMsIo32JXBSbXAK95GCN3aUcKez0w7FzuC40cYwTqDoTB9nMmSRVwzFmjuvHKyEigiTzX",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAne7zCw1zfxs3hqnFEWE1LOrs0OpddJ3-mc4_nyKUjODsE_UQAJzXixJUxAiSqIedO7SRU7JD5x9zGBDI8-Y-XoxK38FR4MtHw8BoAQBzG9wyoPd6IfsVKo4OmMBjhlvbiuj_wjTuHcTPp00xioXedU5plZZ2stCLml_qOqmsJKSX_yIBnZSycVpilrpta953gD56aUvOnvcA-bdspIkiFws5DLp-lmHIA2VEf0bu-hKhnaWIqCYBVyBJoSwA_hj1Phavc_fcXDi2m",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8KaV7hLS7pd5jlSJKercJJLedHPqaNtUC787vgIxAR8eMbZ7gtb52pzxRX4AaeP8kUGUKPRIDlthE9RLwmWqBUTYlDAvEsySoUzYVbxzk3RNWr1_BVSbdQSaMsLPo-acrXKVSy22Dp1Jv85G4hSe2bWepXfV6r_pQgSWphVL-POfDwXVg1hZQB_n869GMTcD38bb7rW5Nojc_MaSzMu5O1dqBPND7_77mUL4z96sWt_UqfyPYRqZ_bWfL2V4oEqmUl4ujkwaDM71E",
    ],
    description:
      "Sourced from the finest organic farms in India, our turmeric powder is known for its vibrant color and rich aroma. It's 100% pure, free from additives, and packed with curcumin, offering numerous health benefits.",
    weight: "200g",
    origin: "Kerala, India",
    slug: "organic-turmeric-powder",
    category: "powders",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4XoKOp0Kg21U1tQ7GWJq5RMLdBY1t2MgNrT7kGwiQXczeIyw0IYvwYgPGg0ISeC-YISCf-YoRVDv9N02YhhVzI_eDpGLWQy_QyNQ33lljTFNshGdP0uNrmix0PtzKFzj-ol0qKM6boUM22d7qhUU2gYNo50lh-bNmzfvM7-DtvjFKvAzyTeH_qPv7HUG6fqo6nLpJSsfiMsIo32JXBSbXAK95GCN3aUcKez0w7FzuC40cYwTqDoTB9nMmSRVwzFmjuvHKyEigiTzX",
  },
  {
    id: "2",
    name: "Cumin Seeds",
    price: 2.49,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaAvHNbHQfM8XXNEIQROTP9QDtOHdFJPGdsa9jZY_X5b8MyLcGoQH2-Kf-s4qd8cqF3Ldo_1biYoyOgKdgZRv8qIm513MH0FjLkyEhig7EqFH07kzm7jJN5jkWCnW2cfeaq8oee4DdNI-JuEoIPlGhTDa6JolAWjjGkCScz5vTTOAs4eMIGsuBxU-iuYanRbpetVRXKjGSBmwz1wL0AoRgsLCgB4FaVgvASYEDT5V4D2ih8GYqLtLzQN73LOefHpiX99f4vUSYUUHZ",
    ],
    description: "Premium quality cumin seeds with intense aroma and flavor. Perfect for tempering and spice blends.",
    weight: "250g",
    origin: "Rajasthan, India",
    slug: "cumin-seeds",
    category: "masalas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaAvHNbHQfM8XXNEIQROTP9QDtOHdFJPGdsa9jZY_X5b8MyLcGoQH2-Kf-s4qd8cqF3Ldo_1biYoyOgKdgZRv8qIm513MH0FjLkyEhig7EqFH07kzm7jJN5jkWCnW2cfeaq8oee4DdNI-JuEoIPlGhTDa6JolAWjjGkCScz5vTTOAs4eMIGsuBxU-iuYanRbpetVRXKjGSBmwz1wL0AoRgsLCgB4FaVgvASYEDT5V4D2ih8GYqLtLzQN73LOefHpiX99f4vUSYUUHZ",
  },
  {
    id: "3",
    name: "Coriander Powder",
    price: 2.99,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAO6M1GxKKXWNuOdAUMcAjwHcFAK_Gq9mhvehHjmrDn65qe4BNHR4o-5JvI1l5KGZuFsffwL6pJGI_XwyNb_8ge5lHszr6J-hSUxnKzo0UUfK7ujMXeFtYPLnS34ggoY_fbEmECFoHUwXYMfOVb8_d16fefO63iBD1zxhr6S20BjDtIcf5qU7DtVU8o2rxChudGbKn7umH7_qVbef0G4dxXycFUJTl4g7h-QEopi-7yyWQKXg8pQTjie8ScztZ7fe6YMEU3j7XKUdKO",
    ],
    description: "Freshly ground coriander powder with a sweet, citrusy flavor that enhances any dish.",
    weight: "200g",
    origin: "Gujarat, India",
    slug: "coriander-powder",
    category: "powders",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO6M1GxKKXWNuOdAUMcAjwHcFAK_Gq9mhvehHjmrDn65qe4BNHR4o-5JvI1l5KGZuFsffwL6pJGI_XwyNb_8ge5lHszr6J-hSUxnKzo0UUfK7ujMXeFtYPLnS34ggoY_fbEmECFoHUwXYMfOVb8_d16fefO63iBD1zxhr6S20BjDtIcf5qU7DtVU8o2rxChudGbKn7umH7_qVbef0G4dxXycFUJTl4g7h-QEopi-7yyWQKXg8pQTjie8ScztZ7fe6YMEU3j7XKUdKO",
  },
  {
    id: "4",
    name: "Garam Masala",
    price: 4.99,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAp1QDvTMJ4y8D6RxiIfGhERiP-S38hx5UXbhTKu4DT5yl1CPT3AR_3MuF_6FPzelvZMb3fpv3vwOkhsG59cFEYf4cMDoDIJzi7wiZwtaaI19SyMZ-Ewmd-hYZS2LrP8Qebjkq80h7k1BNoS1y5qqvQLmmvHxubMspIYZLVs9TzT2SeCPJ1JTihGu6tQ4cur_p6X_GJ00T6SybWRF9NJjXdY5rjpzQkDH3c-cciWUj-r3ynYubqxEzbM2MFRQi5o83KxJQQ7JCmk99Z",
    ],
    description: "Traditional blend of aromatic spices including cardamom, cinnamon, cloves, and black pepper.",
    weight: "100g",
    origin: "Punjab, India",
    slug: "garam-masala",
    category: "masalas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp1QDvTMJ4y8D6RxiIfGhERiP-S38hx5UXbhTKu4DT5yl1CPT3AR_3MuF_6FPzelvZMb3fpv3vwOkhsG59cFEYf4cMDoDIJzi7wiZwtaaI19SyMZ-Ewmd-hYZS2LrP8Qebjkq80h7k1BNoS1y5qqvQLmmvHxubMspIYZLVs9TzT2SeCPJ1JTihGu6tQ4cur_p6X_GJ00T6SybWRF9NJjXdY5rjpzQkDH3c-cciWUj-r3ynYubqxEzbM2MFRQi5o83KxJQQ7JCmk99Z",
  },
  {
    id: "5",
    name: "Chili Powder",
    price: 1.99,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOA-Y96EBi9XA3BYxTtwYEM0LWHsgtcWwWR6q3eXU8rUs_LO5clie81kvSJCIPac2VRQj6K_b4MldlxgOeSXcUY2D7W3Xfkm0lMlHDwV3MvmVw_5rvb-86SobS63nNbQB4iavwX1cLg57Dmz96grnZ4gp7sxaKbeYspKsBIChZPZmSYKilntn2md7kHwlXswLf6t_61_SNrlEvpDthJt-QBdrY5UdFWLwRO2Q3_4rwXfRVvbSDn2gO9Xajlg3mEaD_Irz2tfJ1X3BK",
    ],
    description: "Fiery red chili powder made from the finest red chilies. Adds heat and color to your dishes.",
    weight: "200g",
    origin: "Andhra Pradesh, India",
    slug: "chili-powder",
    category: "powders",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOA-Y96EBi9XA3BYxTtwYEM0LWHsgtcWwWR6q3eXU8rUs_LO5clie81kvSJCIPac2VRQj6K_b4MldlxgOeSXcUY2D7W3Xfkm0lMlHDwV3MvmVw_5rvb-86SobS63nNbQB4iavwX1cLg57Dmz96grnZ4gp7sxaKbeYspKsBIChZPZmSYKilntn2md7kHwlXswLf6t_61_SNrlEvpDthJt-QBdrY5UdFWLwRO2Q3_4rwXfRVvbSDn2gO9Xajlg3mEaD_Irz2tfJ1X3BK",
  },
  {
    id: "6",
    name: "Mustard Seeds",
    price: 1.79,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCATaQ8NgK8uALac6O_JRU2b6sGk9D-1xnAJ8pVmKNGF9_Ru_x8CpcGHg-XnWnNj4VMfD_hEw39_mjAt_XSVwpDua_gl5oHYnFwOp2SZYxqfv5urdBtzUs5IaAs3rRee80iSwPDCFnvf-4hNMTeqfpwDBtDFuZ-L9J2k9K5drWjZENGNQ97oS4XDEQMmCTFlEI5AevH06eM_psL6JY2vIy79d-9BG74Pwud04-w3UkSAwiOlP0aocWqTg7AzMbnkO0kdZSNNOFWZ-rP",
    ],
    description: "Small but mighty mustard seeds that add a pungent flavor and are essential for Indian tempering.",
    weight: "250g",
    origin: "West Bengal, India",
    slug: "mustard-seeds",
    category: "masalas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCATaQ8NgK8uALac6O_JRU2b6sGk9D-1xnAJ8pVmKNGF9_Ru_x8CpcGHg-XnWnNj4VMfD_hEw39_mjAt_XSVwpDua_gl5oHYnFwOp2SZYxqfv5urdBtzUs5IaAs3rRee80iSwPDCFnvf-4hNMTeqfpwDBtDFuZ-L9J2k9K5drWjZENGNQ97oS4XDEQMmCTFlEI5AevH06eM_psL6JY2vIy79d-9BG74Pwud04-w3UkSAwiOlP0aocWqTg7AzMbnkO0kdZSNNOFWZ-rP",
  },
  {
    id: "7",
    name: "Cardamom Pods",
    price: 5.49,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQKNBOGL7ANE7VKy-N5OhnUKHSWeWJmM-fWV-gDAcLaRMz0Li1Q9AOmzfZbrvaEk4h0JxW4OdhNpSDvbDu4VSg69NgmLu73uQ7NRpLrve1z1cN2GxEF09ifuMldvmf1Xj7tHFzR-Mwl5nu9xGm2NjNg9GGa3bAS2pgLDW12WSt6dI5RAIiKzGnGkCPITC7rZJpSYaFtOKybKL6BCfokpveZOVXsVYu2ah60HBxEkxtpn_sTZqd8IBXwr1XeRttbD-BPSK5iDa3gf0X",
    ],
    description: "Green cardamom pods with an intense, sweet aroma. The queen of spices for desserts and chai.",
    weight: "50g",
    origin: "Kerala, India",
    slug: "cardamom-pods",
    category: "masalas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQKNBOGL7ANE7VKy-N5OhnUKHSWeWJmM-fWV-gDAcLaRMz0Li1Q9AOmzfZbrvaEk4h0JxW4OdhNpSDvbDu4VSg69NgmLu73uQ7NRpLrve1z1cN2GxEF09ifuMldvmf1Xj7tHFzR-Mwl5nu9xGm2NjNg9GGa3bAS2pgLDW12WSt6dI5RAIiKzGnGkCPITC7rZJpSYaFtOKybKL6BCfokpveZOVXsVYu2ah60HBxEkxtpn_sTZqd8IBXwr1XeRttbD-BPSK5iDa3gf0X",
  },
  {
    id: "8",
    name: "Cinnamon Sticks",
    price: 3.29,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCt74nNfqreLQaBkWfpHHwxmmlqKyVqyc056tje2j5ONhoctd5bKTJlcjB-vMjyu2PtbDw434G6Zx9Y0VAVM_usODyt38sOE1qS7QtF-tDiy8jvz-e6DJhf2fF3iHhxHEDVdrZWdypbsubSInVd9awJXXtzgXDq9QTagoQ0QkeQsrcr6cMwUubsBJXEJOykj9Dy6LNo-daE9G4LGgiez1Kmbqgu0rsvubzDxPxOAslx0k665J6brIR-0MUC8oQULTbvOTWBWnPQZXNB",
    ],
    description: "Ceylon cinnamon sticks with a delicate, sweet flavor perfect for both sweet and savory dishes.",
    weight: "100g",
    origin: "Sri Lanka",
    slug: "cinnamon-sticks",
    category: "masalas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt74nNfqreLQaBkWfpHHwxmmlqKyVqyc056tje2j5ONhoctd5bKTJlcjB-vMjyu2PtbDw434G6Zx9Y0VAVM_usODyt38sOE1qS7QtF-tDiy8jvz-e6DJhf2fF3iHhxHEDVdrZWdypbsubSInVd9awJXXtzgXDq9QTagoQ0QkeQsrcr6cMwUubsBJXEJOykj9Dy6LNo-daE9G4LGgiez1Kmbqgu0rsvubzDxPxOAslx0k665J6brIR-0MUC8oQULTbvOTWBWnPQZXNB",
  },
  {
    id: "9",
    name: "Basmati Rice",
    price: 12.0,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2YX1QGuQjkIq8GyHOk5cx6pwgv9u0IZsGBgxtdjYBAZeKRr3zOBc2MscJLgRCPccPChUCZBrW5B9NXbHKjnHZKJ2OIMCU74ER7G0_LsyfdykKjU-eBy-TAmBl8LhUQcFLgGbNi-jmnp5V-jNPlNCnAL2Z9CYhdYvCEPxLP_E6cRJzUEkC4iTiKVaKuyJi0GhHLWfjjVtFsidEMg4uB8ljq3DNJI0PIwmh_1S771vF6AaWwOyNIINWou7DTDdch0PT6mAnXD1ObBLs",
    ],
    description: "Premium aged basmati rice with long grains and distinctive aroma. Perfect for biryanis and pilafs.",
    weight: "1kg",
    origin: "Punjab, India",
    slug: "basmati-rice",
    category: "grains",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2YX1QGuQjkIq8GyHOk5cx6pwgv9u0IZsGBgxtdjYBAZeKRr3zOBc2MscJLgRCPccPChUCZBrW5B9NXbHKjnHZKJ2OIMCU74ER7G0_LsyfdykKjU-eBy-TAmBl8LhUQcFLgGbNi-jmnp5V-jNPlNCnAL2Z9CYhdYvCEPxLP_E6cRJzUEkC4iTiKVaKuyJi0GhHLWfjjVtFsidEMg4uB8ljq3DNJI0PIwmh_1S771vF6AaWwOyNIINWou7DTDdch0PT6mAnXD1ObBLs",
  },
]

export const mockProducts = products

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
