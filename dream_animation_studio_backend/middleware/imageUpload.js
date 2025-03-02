// // const multer = require('multer');
// // const path = require('path');

// // // Configure Multer storage
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/');  // Define the upload folder
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname));  // Create a unique filename
// //   }
// // });

// // File filter to only allow images
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true); // Allow the file
//   } else {
//     cb(new Error('Only image files are allowed!'), false); // Reject the file
//   }
// };

// // Multer configuration
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },  // Limit to 5MB
// });

// module.exports = upload;
