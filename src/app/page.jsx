


import styles from "./homepage.module.css";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
// import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";

export default function Home({searchParams}) {

  const page = parseInt(searchParams?.page) || 1;

  return <div className={styles.container}>
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList page={page} />
      <Menu />
    </div>
    
  </div>;
}
