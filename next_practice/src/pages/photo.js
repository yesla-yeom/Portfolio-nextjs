import HeadInfo from "@/components/HeadInfo";
import Image from "next/image";
import photoStyles from "../styles/Photos.module.css";

const photos = ({ photos }) => {
  return (
    <div>
      <HeadInfo title={"Photos"} />
      <h1>yena's photos</h1>
      {/* 와 진짜 너무 신기하고 편하다 */}
      <ul className={photoStyles.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Image
              src={photo.thumbnailUrl}
              width={100}
              height={100}
              alt={photo.title}
            />
            <span>{photo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default photos;
