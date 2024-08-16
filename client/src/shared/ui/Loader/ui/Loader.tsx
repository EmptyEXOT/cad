/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { FC, memo } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

enum LoaderShape {
    Circle = 'circle',
    Rect = 'rect',
}

interface LoaderProps {
    shape?: LoaderShape
}

const isCircle = (shape: LoaderShape) => {
    return shape === LoaderShape.Circle;
}

export const Loader: FC<LoaderProps> = memo(({shape = LoaderShape.Rect}) => {
    return (
        <Skeleton
            width={400}
            height={160}
            circle={isCircle(shape)}
        />
    );
});
