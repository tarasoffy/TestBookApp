import React, { FC, memo } from "react";
import { Props } from "./BookReadScreen.props";
import { Book } from "../../components/Book";


const BookReaderFunc: FC<Props> = ({route}) => {
    return (
        <Book />
    );
};

export const BookRead = memo(BookReaderFunc);