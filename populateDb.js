const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const data = [
    {
        "title": "Alien Scanner",
        "description": "The Alien handheld scanner, or motion tracker, is a fictional device used by the crew to detect the movement of the alien creature. It is a pivotal tool in their attempts to locate and avoid the lethal xenomorph as it stalks them through the spaceship.",
        "image": ["/imgs/alienScanner/2.png","/imgs/alienScanner/1.png","/imgs/alienScanner/3.png"],
        "model": "/models/alienScanner.glb",
        "class": "Exploration",
        "year": "2023",
        "software": "Blender"
    },
    {
        "title": "Slave I",
        "description": "Slave I is a Firespray-31-class patrol and attack craft used by the bounty hunter Boba Fett in the Star Wars universe. Originally owned by Jango Fett, Boba's father, the ship is known for its distinctive shape, advanced weaponry, and role in tracking down and capturing targets across the galaxy.",
        "image": ["/imgs/slaveOne/3.png","/imgs/slaveOne/2.png","/imgs/slaveOne//3.png"],
        "model": "/models/slaveI.glb",
        "class": "Freelance",
        "year": "2023",
        "software": "Blender"
    },
    {
        "title": "Red Barron",
        "description": "The Red Baron, Manfred von Richthofen, was a German fighter pilot and flying ace during World War I, known for his impressive record of 80 confirmed aerial victories. He became a legendary figure in aviation history, earning widespread fame and respect for his skill and bravery in the skies before being shot down in 1918.",
        "image": ["/imgs/redBarron/2.png","/imgs/redBarron/1.png","/imgs/redBarron//3.png"],
        "model": "/models/redBarron.glb",
        "class": "Product",
        "year": "2023",
        "software": "Blender"
    },
    {
        "title": "Casset Tape",
        "description": "The compact cassette, or cassette tape, was introduced by Philips in 1963 as a means of recording and playing back audio. It became a popular format for music and voice recording due to its portability, ease of use, and ability to be played on a variety of devices.",
        "image": ["/imgs/cassetTape/2.png","/imgs/cassetTape/1.png","/imgs/cassetTape/3.png"],
        "model": "/models/casset.glb",
        "class": "Product",
        "year": "2022",
        "software": "Blender"
    },
    {
        "title": "Chess Board",
        "description": "Chess is a strategic board game that originated in India around the 6th century, evolving from a game called chaturanga. It spread to Persia and then to Europe during the Middle Ages, becoming the modern game known today with its standardized rules and global competitions.",
        "image": ["/imgs/chess/1.png","/imgs/chess/2.png","/imgs/chess/3.png"],
        "model": "/models/chess.glb",
        "class": "Product",
        "year": "2021",
        "software": "exploration"
    },
    {
        "title": "Droideka",
        "description": "Droidekas, also known as destroyer droids, are advanced battle droids deployed by the Trade Federation and later the Separatists in the Star Wars universe. Known for their ability to transform into rolling wheels for swift movement and their powerful twin blaster cannons, they are also equipped with personal energy shields, making them formidable opponents in combat.",
        "image": ["/imgs/droideka/3.png","/imgs/droideka/1.png","/imgs/droideka/2.png"],
        "model": "/models/droideka.glb",
        "class": "Freelance",
        "year": "2022",
        "software": "exploration"
    },
    {
        "title": "Gundam",
        "description": "The Gundam series, created by Yoshiyuki Tomino and Sunrise, is a renowned Japanese mecha anime franchise that debuted in 1979 with 'Mobile Suit Gundam.' Set in a future where giant robots called mobile suits are used in war, the series explores themes of conflict, politics, and the human condition through its intricate storytelling and character development.",
        "image": ["/imgs/gundam/2.png","/imgs/gundam/1.png","/imgs/gundam/3.png"],
        "model": "/models/gundam.glb",
        "class": "Freelance",
        "year": "2020",
        "software": "Blender"
    },
    {
        "title": "Mazinger Head",
        "description": "'Mazinger Z' is a Spanish animated adaptation of the classic Japanese anime series created by Go Nagai. The show follows the adventures of Koji Kabuto, who pilots the giant robot Mazinger Z to protect the world from the evil Dr. Hell and his mechanical beasts.",
        "image": ["/imgs/mazingerHead/3.png","/imgs/mazingerHead/2.png","/imgs/mazingerHead/3.png"],
        "model": "/models/mazingerHead.glb",
        "class": "Exploration",
        "year": "2022",
        "software": "Blender"
    },
    {
        "title": "Parasonic Portable TV",
        "description": "The Panasonic Portable TV is a compact and lightweight television designed for easy mobility and convenience, popular in the late 20th century. Known for its durable build and reliable performance, it allowed users to enjoy television entertainment on the go, whether for travel, camping, or use in various rooms within the home.",
        "image": ["/imgs/panasonicPortTv/2.png","/imgs/panasonicPortTv/1.png","/imgs/panasonicPortTv//3.png"],
        "model": "/models/parasonicTv.glb",
        "class": "Exploration",
        "year": "2021",
        "software": "Photoshop"
    }
    // Add the rest of your project data here...
];


Project.insertMany(data)
    .then(() => {
        console.log('Projects added');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error adding projects', err);
        mongoose.connection.close();
    });
