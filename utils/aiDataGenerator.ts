export function generateUser() {

    return {
        name: "AIUser_" + Math.floor(Math.random() * 9999),
        country: "India",
        city: "Chennai",
        card: Math.floor(
            1000000000000000 + Math.random() * 9000000000000000
        ).toString(),
        month: "07",
        year: "2029"
    };

}