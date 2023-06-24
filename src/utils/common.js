export const calculateAge = (timestamp) => {
    const birthdate = new Date(timestamp);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();

    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

export const getDOB = (timestamp) => {
    const dob = new Date(timestamp);

    const year = dob.getFullYear();
    const month = dob.getMonth() + 1; 
    const day = dob.getDate();

    const formattedDOB = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
  
    return formattedDOB;
  }
