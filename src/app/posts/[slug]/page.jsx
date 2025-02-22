import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
// import Comments from "@/components/comments/Comments";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  // const { slug } = params;
  const { slug } = await params; // Ensure params is awaited

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
             )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data?.createdAt}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
         )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
            
          />
          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque consequatur facilis dolores quos ipsam harum laboriosam repellendus quisquam soluta veniam sapiente dicta obcaecati itaque expedita, accusamus enim dolorem corrupti illum eligendi delectus tempora cumque perferendis nobis ipsum. Rem, corrupti et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quaerat omnis. Numquam, cupiditate veniam? Ipsa temporibus, neque soluta, nostrum corporis laborum nulla necessitatibus officia praesentium, porro sapiente sint non! Quos hic, molestiae consequatur pariatur in rem, ad voluptatibus deserunt debitis, sequi vitae ratione? Cumque ducimus laborum nostrum, veniam consequatur illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis incidunt dignissimos accusantium sapiente asperiores, suscipit quasi aliquam nulla est ex adipisci veniam odit provident laboriosam sint consectetur hic non excepturi temporibus, nobis exercitationem pariatur! Aliquam molestias nostrum aut enim soluta, corporis reprehenderit, sequi, assumenda dolorem facilis eius numquam deserunt dignissimos esse recusandae beatae provident quibusdam exercitationem quisquam eaque error! Asperiores, error dolorum. Libero magni illum accusantium amet rem repellat temporibus. Architecto possimus repudiandae accusamus non totam vero asperiores eligendi atque, ab tenetur! Dicta quia reprehenderit quae, consequatur quibusdam omnis adipisci quaerat velit nam iste, aperiam nemo ex sed assumenda!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquid eaque quibusdam suscipit iure voluptatem exercitationem quas nostrum laboriosam libero sed sapiente blanditiis earum reiciendis necessitatibus sit. Laudantium asperiores repellat tempore quos numquam quae, minima omnis accusamus velit doloremque animi at eligendi amet a blanditiis! Repudiandae ipsam necessitatibus reprehenderit, omnis quaerat quidem perferendis corporis ratione placeat voluptatem eius, deserunt eos eum incidunt quas laborum sapiente soluta esse maiores aliquid eveniet quasi dolorem vel dolor? Esse eligendi velit in quidem sequi provident, id aliquam voluptatem ullam laborum sapiente veniam fuga totam. Quas iure repellendus cum eligendi quasi optio possimus veritatis minus!</p> */}
          {/* </div> */}
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
            {/* <Comments /> */}
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;