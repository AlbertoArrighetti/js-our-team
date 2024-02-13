// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

// Creare l’array di oggetti con le informazioni fornite.
const membersInfo = [
    {
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        fullName: "Angela Caroll",
        role: "Chief Editor",
        picture: "./img/angela-caroll-chief-editor.jpg",
    },
    {
        fullName: "Walter Gordon",
        role: "Office Manager",
        picture: "./img/walter-gordon-office-manager.jpg",
    },
    {
        fullName: "Angela Lopez",
        role: "Social Media Manager",
        picture: "./img/angela-lopez-social-media-manager.jpg",
    },
    {
        fullName: "Scott Estrada",
        role: "Developer",
        picture: "./img/scott-estrada-developer.jpg",
    },
    {
        fullName: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "./img/barbara-ramos-graphic-designer.jpg",
    },
]




// prelevo la card e il corpo
const cardList = document.getElementById("card-list");



// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membersInfo.length; i++) {


    const member = membersInfo[i];

    // creo una nuova card 
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "col", "m-3", "p-2");
    cardElement.style.width = "18rem";
    

    // image 
    const img = document.createElement("img");
    img.classList.add("card-img-top", "mb-3");
    img.src = member.picture;


    // nome completo 
    const name = document.createElement("div");
    name.classList.add("text-center")
    name.textContent = `${member.fullName}`;


    // ruolo completo 
    const role = document.createElement("div");
    role.classList.add("text-center")
    role.textContent = `${member.role}`;
    

    // aggiungo le immagini e le info
    cardElement.append(img);
    cardElement.append(name);
    cardElement.append(role);

    // aggiungo la card alla lista 
    cardList.append(cardElement);
}