import { breedList } from "../types/dogBreeds";


// function to transform the response of the Dog API into a single array
// in the form of breedname_subBreed
// used to group the breeds by alphabetical order
export const flattenBreeds = (breeds: breedList): string[] => {
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


// function to group the various breeds in an object with the first letter as the key
// we sort beforehand for efficency, using localeCompare to garantee language support
export const groupBreedsAlphabetically = (breeds: string[]): breedList => {
	let groupedBreeds: breedList = {
		a: [],
	};
	const sortedBreeds = breeds.sort((one, two) => one.localeCompare(two))
	sortedBreeds.forEach((singleBreed: string) => {
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