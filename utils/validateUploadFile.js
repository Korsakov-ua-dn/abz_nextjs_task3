// export const checkImageSize = async (file) => {
//   if (file) {
//     const size = await new Promise((resolve) => {
//       const img = new Image();
//       img.src = URL.createObjectURL(file);
//       img.onload = function () {
//         resolve({ width: img.width, height: img.height });
//       };
//     });
//
//     return size.width < 70 && size.height < 70;
//
//     // if (size.width < 70 && size.height < 70) return false;
//   }
// };
//
// const validateUploadFile = async (file) => {
//   if (file) {
//     // Размер изображения 70*70px и более
//     const size = await new Promise((resolve) => {
//       const img = new Image();
//       img.src = URL.createObjectURL(file[0]);
//       img.onload = function () {
//         resolve({ width: img.width, height: img.height });
//       };
//     });
//
//     if (size.width < 70 && size.height < 70)
//       return "The photo must be at least 70px in height and width";
//
//     if (size.width >= 20000 && size.height >= 20000)
//       return "Please add an image less than 20000х20000рх";
//
//     // Размер файла не превышает 5мб
//     if (file[0].size >= 5 * 1048576) return "Photo should be no more than 5 mb";
//
//     // Тип файла MIME соответствует jpeg изображениям
//     const acceptFileType = await new Promise((resolve) => {
//       const fileReader = new FileReader();
//       fileReader.onloadend = function (e) {
//         const arr = new Uint8Array(e.target.result).subarray(0, 4);
//         let header = "";
//         for (let i = 0; i < arr.length; i++) {
//           header += arr[i].toString(16);
//         }
//         switch (header) {
//           case "ffd8ffe0":
//           case "ffd8ffe1":
//           case "ffd8ffe2":
//           case "ffd8ffe3":
//           case "ffd8ffe8":
//             resolve(true);
//             break;
//           default:
//             resolve(false);
//             break;
//         }
//       };
//       fileReader.readAsArrayBuffer(file[0].slice(0, 4));
//     });
//
//     if (!acceptFileType) return "Really file type is not jpeg";
//
//     // return (
//     //   file[0].type === "image/jpeg" &&
//     //   file[0].size < 5 * 1048576 &&
//     //   acceptMinSize
//     // );
//   }
//   return false;
// };
//
// export default validateUploadFile;
