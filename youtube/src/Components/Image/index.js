import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";
import images from "../../assets/Images";

const Image = forwardRef(
  ({ alt, src, fallback = images.noImage, className, ...props }, ref) => {
    const [fallbackImg, setFallbackImg] = useState("");

    const HandleFallback = () => {
      setFallbackImg(fallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        {...props}
        ref={ref}
        alt={alt}
        src={fallbackImg || src}
        onError={HandleFallback}
      />
    );
  }
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
