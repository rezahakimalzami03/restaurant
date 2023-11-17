/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-template */
/* eslint-disable linebreak-style */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourcePath = path.resolve(__dirname, 'src/public/images');
const destinationPath = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destinationPath)) {
  fs.mkdirSync(destinationPath);
}

// List semua file dalam direktori sumber
const files = fs.readdirSync(sourcePath);

// Filter hanya file gambar (contoh: jpg, png, dll.)
const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

// Fungsi untuk mengonversi dan menyimpan gambar ke format WebP
const convertToWebP = async (file) => {
  const inputFilePath = path.join(sourcePath, file);
  const outputFilePath = path.join(destinationPath, path.parse(file).name + '.webp');

  await sharp(inputFilePath)
    .webp({ quality: 80 }) // Sesuaikan dengan kualitas yang diinginkan
    .toFile(outputFilePath, (err, info) => {
      if (err) {
        console.error(`Error converting ${file} to WebP:`, err);
      } else {
        console.log(`Successfully converted ${file} to WebP. Info:`, info);
      }
    });
};

// Loop melalui setiap file gambar dan konversi ke WebP
imageFiles.forEach(convertToWebP);
