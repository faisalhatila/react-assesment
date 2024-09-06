import { classes, countries, enrollmentNumbers, imageUrls, names, sections, subjects } from "./data";

export const enhanceRecords = (records) => {
    const getRandom = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    return records.map((record, index) => ({
        ...record,
        name: names[index % names.length],
        country: countries[index % countries.length].country,
        city: countries[index % countries.length].city,
        imageUrl: imageUrls[index % imageUrls.length],
        enrollmentNumber: enrollmentNumbers[index % enrollmentNumbers.length],
        attendance: getRandom(80, 100),
        majorSubject: subjects[getRandom(0, subjects.length - 1)],
        section: sections[getRandom(0, sections.length - 1)],
        class: classes[getRandom(0, classes.length - 1)]
    }));
}