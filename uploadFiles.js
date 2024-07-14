const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
    .then(() => {
        console.log('Connected to MongoDB');
        uploadFiles();
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));

async function uploadFiles() {
    const connection = mongoose.connection;
    const bucket = new GridFSBucket(connection.db, { bucketName: 'uploads' });

    const filesToUpload = [
        { path: './frontend/public/imgs/alienScanner/1.png', filename: 'alienScanner/1.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/alienScanner/2.png', filename: 'alienScanner/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/alienScanner/3.png', filename: 'alienScanner/3.png', contentType: 'image/png' },
        { path: './frontend/public/models/alienScanner.glb', filename: 'alienScanner.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/slaveOne/2.png', filename: 'slaveOne/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/slaveOne/3.png', filename: 'slaveOne/3.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/slaveOne/1.png', filename: 'slaveOne/1.png', contentType: 'image/png' },
        { path: './frontend/public/models/slaveI.glb', filename: 'slaveI.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/redBarron/2.png', filename: 'redBarron/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/redBarron/1.png', filename: 'redBarron/1.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/redBarron/3.png', filename: 'redBarron/3.png', contentType: 'image/png' },

        { path: './frontend/public/models/redBarron.glb', filename: 'redBarron.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/cassetTape/1.png', filename: 'cassetTape/1.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/cassetTape/2.png', filename: 'cassetTape/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/cassetTape/3.png', filename: 'cassetTape/3.png', contentType: 'image/png' },
        { path: './frontend/public/models/casset.glb', filename: 'casset.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/chess/1.png', filename: 'chess/1.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/chess/2.png', filename: 'chess/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/chess/3.png', filename: 'chess/3.png', contentType: 'image/png' },
        { path: './frontend/public/models/chess.glb', filename: 'chess.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/droideka/1.png', filename: 'droideka/1.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/droideka/2.png', filename: 'droideka/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/droideka/3.png', filename: 'droideka/3.png', contentType: 'image/png' },
        { path: './frontend/public/models/droideka.glb', filename: 'droideka.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/gundam/1.png', filename: 'gundam/1.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/gundam/2.png', filename: 'gundam/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/gundam/3.png', filename: 'gundam/3.png', contentType: 'image/png' },
        { path: './frontend/public/models/gundam.glb', filename: 'gundam.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/mazingerHead/2.png', filename: 'mazingerHead/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/mazingerHead/3.png', filename: 'mazingerHead/3.png', contentType: 'image/png' },
        { path: './frontend/public/models/mazingerHead.glb', filename: 'mazingerHead.glb', contentType: 'model/gltf-binary' },
        
        { path: './frontend/public/imgs/panasonicPortTv/1.png', filename: 'panasonicPortTv/1.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/panasonicPortTv/2.png', filename: 'panasonicPortTv/2.png', contentType: 'image/png' },
        { path: './frontend/public/imgs/panasonicPortTv/3.png', filename: 'panasonicPortTv/3.png', contentType: 'image/png' },
        { path: './frontend/public/models/parasonicTv.glb', filename: 'parasonicTv.glb', contentType: 'model/gltf-binary' }
    ];

    for (const file of filesToUpload) {
        const readStream = fs.createReadStream(file.path);
        const uploadStream = bucket.openUploadStream(file.filename, {
            contentType: file.contentType
        });

        readStream.pipe(uploadStream)
            .on('error', (error) => console.error(`Error uploading file ${file.filename}:`, error))
            .on('finish', () => console.log(`File ${file.filename} has been uploaded to MongoDB`));
    }
}
