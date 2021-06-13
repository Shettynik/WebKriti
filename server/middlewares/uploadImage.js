const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3-transform');
const aws = require('aws-sdk');
const ErrorResponse = require("../utils/errorResponse");

aws.config.update({
    accessKey: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION
});

const S3 = new aws.S3();

const storage = multerS3({
	s3: S3,
	bucket: process.env.AWS_BUCKET_NAME,
	cacheControl: 'max-age=31536000',
	contentType: multerS3.AUTO_CONTENT_TYPE,
	key: function (req, file, cb) {
        console.log(req.file)
		const d = new Date();
		console.log("category "+req.query.councilName)
		const FileName = req.query.councilName + d.toISOString().slice(0, 10) + 'T' + (d.getTime().toString()) + (Math.floor(Math.random() * 1e+10).toString());
		cb(null, req.query.councilName + "/" + FileName + '.jpg');
	}
});

const UploadStorage = multer({
	storage: storage,
	fileFilter: function (req, file, callback) {
		if (file) {
			var ext = path.extname(file.originalname).toLowerCase();
			if (
				ext !== '.png' &&
				ext !== '.jpg' &&
				ext !== '.jpeg' &&
                ext !== '.heic'
			) {
				return callback(
					new ErrorResponse(
						'Only images are allowed, Given file extension ' + ext, 501
					)
				);
			}
			callback(null, true);
		} else {
			return callback(new ErrorResponse('No image provided', 400));
		}
	},
}).single('image') //File Post Name

module.exports = UploadStorage;
