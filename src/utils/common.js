export const calculateAge = (timestamp) => {
    const birthdate = new Date(timestamp);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();

    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}
