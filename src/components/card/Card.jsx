import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
       )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
            {/* 19.02.2025 */}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
          {/* <h1>Hello</h1> */}
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
        {/* <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus similique assumenda harum quam tempora ducimus suscipit neque itaque doloremque perferendis molestias tenetur, aliquam ex necessitatibus totam ipsa rem fuga.</p> */}
        <div className={styles.desc} />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;