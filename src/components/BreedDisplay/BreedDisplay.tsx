import React, { FC, useEffect, useState } from "react";
import styles from "./BreedDisplay.module.css";

interface BreedDisplayProps {
    selectedBreed: string | null;
}

const BreedDisplay: FC<BreedDisplayProps> = (props) => {
    const [dogImage, setImages] = useState<string | null>(null);

    useEffect((): void => {
        if (props.selectedBreed) {
            fetchRandomDog(props.selectedBreed);
        }
    }, [props.selectedBreed]);

    const fetchRandomDog = async (breedName: string): Promise<void> => {
        const breedSplit = breedName.split("_");
        const fetchString = breedSplit.join("/");
        const call = await fetch(`https://dog.ceo/api/breed/${fetchString}/images/random`);
        const data = await call.json();
        console.log("hey");
        if (dogImage !== data.message) {
            setImages(data.message);
        }
    };

    return <div className={styles.BreedDisplay}>{dogImage ? <img src={dogImage} className={styles.dogImage}></img> : ""}</div>;
};

export default BreedDisplay;
