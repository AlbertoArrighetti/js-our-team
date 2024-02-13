// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva


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

// prelevo la lista
const listElement = document.getElementById("list");











// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membersInfo.length; i++) {

    const member = membersInfo[i];
    
    // elemento li 
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    // image 
    const img = document.createElement("img");
    img.src = member.picture;
    // descrizione 
    const info = document.createElement("div");
    info.textContent = `${member.fullName}, ${member.role}`
    
    
    // aggiungo gli elementi alla lista 
    listElement.append(listItem);
        
    // aggiungo le immagini e le info
    listItem.append(info);
    listItem.append(img);
}