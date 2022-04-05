const subject = [
    "the", "a", "my", "our"
];
const verb = [
    "lastOfUs",
    "kindOfWeb",
    "virtualCorner",
    "space"
];
const domain = [
    ".com",
    ".net",
    ".cl",
    ".dev"
];

for(let i=0; i < subject.length; i++){
    for(let e=0; e < verb.length; e++){
        for(let j=0; j < domain.length; j++){
            console.log(subject[i]+verb[e]+domain[j]);
        }
    }
}