// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Creare l’array di oggetti con le informazioni fornite.
const membersInfo = [
    {
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg",
    },
    {
        fullName: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg",
    },
    {
        fullName: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg",
    },
    {
        fullName: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg",
    },
    {
        fullName: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg",
    },
    {
        fullName: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg",
    },
]

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membersInfo.length; i++) {

    const infos = membersInfo[i];

    for(let key in infos) {

        console.log(key + ": " + infos[key])
    
    }
}