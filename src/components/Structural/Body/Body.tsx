import React, { FC, useEffect, useState } from "react";
import styles from "./Body.module.css";
import alphabetStorage from "../../../data/alphabet";
import BreedSelector from "../../Functional/BreedSelector/BreedSelector";
import BreedDisplay from "../../Functional/BreedDisplay/BreedDisplay";
import AlphabetFilter from "../../Functional/AlphabetFilter/AlphabetFilter";

import { breedList } from "../../../utils/types/dogBreeds";
import { flattenBreeds, groupBreedsAlphabetically } from "../../../utils/functions/breedDataManipulation";
import ErrorModal from "../../Functional/ErrorModal/ErrorModal";


const Body: FC = () => {
    const [breedList, setBreedList] = useState<breedList>({});
    const [selectedLetter, setLetter] = useState<string | null>(null);
    const [selectedBreed, setBreed] = useState<string | null>(null);
	const [error, setError] = useState<string | boolean>(false);

    const getSelectedBreed = async (): Promise<void> => {
		try {
			if (Object.keys(breedList).length === 0) {
				const dogCall = await fetch("https://dog.ceo/api/breeds/list/all");
				const dogBreeds = await dogCall.json();
				if (dogBreeds.status === "success") {
					const flattenedBreeds = flattenBreeds(dogBreeds.message);
					const groupedBreeds = groupBreedsAlphabetically(flattenedBreeds);
					setBreedList(groupedBreeds);
				} else {
					throw new Error("Unable to get dog breeds")
				}
			}
		} catch (e: any) {
			if (!error) {
				setError(e.message)
			}
		}
    };

	useEffect(() => {
		getSelectedBreed();
	}, [])

    return (
        <div className={styles.Body}>
			{error ? <ErrorModal errorParam={error} setError={setError}/> : ""}
            <div className={[styles.menuContainer, styles.letterContainer].join(" ")}>
                {alphabetStorage.map((letter) => {
                    return (
                        <AlphabetFilter
                            key={"letter-" + letter}
                            letter={letter}
                            isSelected={selectedLetter === letter}
                            setLetter={setLetter}
                        />
                    );
                })}
            </div>
            <div className={[styles.menuContainer, styles.breedContainer].join(" ")}>
                {selectedLetter && Object.keys(breedList).includes(selectedLetter)
                    ? breedList[selectedLetter].map((breedName) => {
                          return (
                              <BreedSelector
                                  key={breedName + "-selector"}
                                  breedName={breedName}
								  isSelected={selectedBreed === breedName}
                                  setBreed={setBreed}
                              ></BreedSelector>
                          );
                      })
                    : ""}
            </div>
            <BreedDisplay selectedBreed={selectedBreed} setError={setError}></BreedDisplay>
        </div>
    );
};

export default Body;
