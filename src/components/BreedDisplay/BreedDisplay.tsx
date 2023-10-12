import React, { FC, useEffect, useState } from "react";
import styles from "./BreedDisplay.module.css";
import Spinner from "../Spinner/Spinner";
import NewDoggo from "../../icons/reload.svg";

interface BreedDisplayProps {
    selectedBreed: string | null;
}

const BreedDisplay: FC<BreedDisplayProps> = (props) => {
    const [dogImage, setImages] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect((): void => {
        if (props.selectedBreed) {
            fetchRandomDog(props.selectedBreed);
        }
    }, [props.selectedBreed]);

    const fetchRandomDog = async (breedName: string): Promise<void> => {
        setLoading(true);
        const breedSplit = breedName.split("_");
        const fetchString = breedSplit.join("/");
        const call = await fetch(`https://dog.ceo/api/breed/${fetchString}/images/random`);
        const data = await call.json();
        if (data.status === "success") {
            if (dogImage !== data.message) {
                try {
                    const imageCheck = await fetch(data.message);
                    if (imageCheck.status === 200) {
                        setImages(data.message);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }
        setLoading(false);
    };

    return (
        <div className={styles.BreedDisplay}>
            {isLoading ? <Spinner /> : ""}
            {dogImage ? (
                <>
                    <img
                        src={NewDoggo}
                        className={styles.rerollDoggo}
                        onClick={() => {
                            if (props.selectedBreed) {
                                fetchRandomDog(props.selectedBreed);
                            }
                        }}
                    ></img>
                    <div className={styles.imageBorder}>
                        <img
                            onLoad={() => {
                                if (isLoading) {
                                    setLoading(false);
                                }
                            }}
                            src={dogImage}
                            className={styles.dogImage}
                        ></img>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default BreedDisplay;
