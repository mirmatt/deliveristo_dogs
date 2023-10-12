import React, { FC, useState } from "react";
import styles from "./Body.module.css";
import alphabetStorage from "../../data/alphabet";
import BreedSelector from "../BreedSelector/BreedSelector";
import BreedDisplay from "../BreedDisplay/BreedDisplay";
import AlphabetFilter from "../AlphabetFilter/AlphabetFilter";

interface breedsList {
    [keyLetter: string]: string[];
}

const Body: FC = () => {
    const [breedList, setBreedList] = useState<breedsList>({});
    const [selectedLetter, setLetter] = useState<string | null>(null);
    const [selectedBreed, setBreed] = useState<string | null>(null);

    const flattenBreeds = (breeds: breedsList): string[] => {
        let flattened: string[] = [];
        Object.keys(breeds).forEach((breedName: string) => {
            if (breeds[breedName].length === 0) {
                flattened.push(breedName.toLowerCase());
            } else {
                breeds[breedName].forEach((subBreed: string) => {
                    flattened.push((breedName + "_" + subBreed).toLowerCase());
                });
            }
        });
        return flattened;
    };

    const groupBreedsAlphabetically = (breeds: string[]): breedsList => {
        let groupedBreeds: breedsList = {
            a: [],
        };
        breeds.forEach((singleBreed: string) => {
            const breedStartingLetter = singleBreed[0];
            if (Object.keys(groupedBreeds).includes(breedStartingLetter)) {
                groupedBreeds[breedStartingLetter].push(singleBreed);
            } else {
                groupedBreeds[breedStartingLetter] = [];
                groupedBreeds[breedStartingLetter].push(singleBreed);
            }
        });
        return groupedBreeds;
    };

    const getSelectedBreed = async (): Promise<void> => {
        if (Object.keys(breedList).length === 0) {
            const dogCall = await fetch("https://dog.ceo/api/breeds/list/all");
            const dogBreeds = await dogCall.json();
            const flattenedBreeds = flattenBreeds(dogBreeds.message);
            const groupedBreeds = groupBreedsAlphabetically(flattenedBreeds);
            setBreedList(groupedBreeds);
        } else {
            // console.log("Alredy got breed list");
        }
    };

    getSelectedBreed();
    return (
        <div className={styles.Body}>
            <div className={styles.menuContainer}>
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
            <div className={styles.menuContainer}>
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
            <BreedDisplay selectedBreed={selectedBreed}></BreedDisplay>
        </div>
    );
};

export default Body;
