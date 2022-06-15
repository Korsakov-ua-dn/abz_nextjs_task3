import Image from "next/image";
import { useEffect, useState } from "react";

const LoadUserImage = ({ src, name }) => {
  const [imgSrc, set_imgSrc] = useState(src);
  const fallbackSrc = "/images/users/photoCover.svg";

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      width={70}
      height={70}
      src={imgSrc}
      // placeholder="blur"
      // blurDataURL="/images/users/photoCover.svg"
      alt={`${name}`}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
};

export default LoadUserImage;
