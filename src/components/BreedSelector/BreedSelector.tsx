import React, { FC } from "react";
import styles from "./BreedSelector.module.css"

interface BreedSelectorProps {
	breedName: string,
	isSelected: boolean,
	setBreed: Function
}

const BreedSelector: FC<BreedSelectorProps> = (props) => {
	const selectorClasses:string = props.isSelected ? [styles.BreedSelector, styles.selectedFilter].join(" ") : styles.BreedSelector

    return (
        <div className={selectorClasses}>
			<p onClick={():void => {
				props.setBreed(props.breedName)
			}}>{props.breedName.replace("_", " ")}</p>
        </div>
    );
}

export default BreedSelector;