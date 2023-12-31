import React, { FC } from "react";
import styles from "./AlphabetFilter.module.css"

interface AlphabetFilterProps {
	letter: string,
	isSelected: boolean,
	setLetter: Function
}

const AlphabetFilter: FC<AlphabetFilterProps> = (props) => {
	const filterClasses:string = props.isSelected ? [styles.AlphabetFilter, styles.selectedFilter].join(" ") : styles.AlphabetFilter

    return (
        <div role="letter-container" className={filterClasses}>
			<p onClick={() => {
				props.setLetter(props.letter)
			}}>{props.letter}</p>
        </div>
    );
}

export default AlphabetFilter;