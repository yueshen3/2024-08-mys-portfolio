const url = new URL(location.href);
const projectID = url.searchParams.get("projectID");
// const projectName = url.searchParams.get("projectName");

let htmlImage = `<img src="image/${projectID.replaceAll(' ', '')}_0000.png">`;

document.querySelector('.wrapper-project-card').innerHTML = htmlImage;








