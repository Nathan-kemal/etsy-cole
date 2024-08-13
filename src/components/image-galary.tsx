import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ImageGalary = () => {
  return (
    <ImageGallery
      items={images}
      thumbnailPosition="left"
      showPlayButton={false}
      //   showNav={false}
      //   showFullscreenButton={false}
    />
  );
};

export default ImageGalary;
