import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src || customFallback}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
