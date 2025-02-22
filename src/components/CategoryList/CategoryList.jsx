import React from 'react'
import styles from './CategoryList.module.css'
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text(); // Get error message
      console.error("API Error:", errorText);
      throw new Error("Failed to fetch categories");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array instead of breaking the component
  }
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                // src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
             )}
             {item.title}
            {/* <h1>hello</h1> */}
          </Link>
          
         ))}
      </div>
    </div>
  )
}

export default CategoryList